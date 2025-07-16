import ModeToggle from "../../../components/ModeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const translations = await getTranslations();

  return (
    <main className="flex flex-col gap-5">
      <h1>{translations("HomePage.title")}</h1>
      <p>{translations("HomePage.about")}</p>
      <div className="flex gap-5">
        <LanguageSwitcher />
        <ModeToggle />
      </div>
    </main>
  );
}
