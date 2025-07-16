import ModeToggle from "../../../components/ModeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const translations = await getTranslations();

  return (
    <main className="flex flex-col gap-5">
      <h1 className="font-sans text-xl">{translations("HomePage.title")}</h1>
      <p className="font-serif text-sm">{translations("HomePage.about")}</p>
      <div className="flex gap-5">
        <LanguageSwitcher />
        <ModeToggle />
      </div>
    </main>
  );
}
