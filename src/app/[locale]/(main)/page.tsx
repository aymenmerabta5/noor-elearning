import ModeToggle from "../../../components/ModeToggle/ModeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import { getTranslations } from "next-intl/server";
import { Card } from "@/components/ui/card";

export default async function Home() {
  const translations = await getTranslations();

  return (
    <Card className="flex max-w-xl flex-col gap-5 p-5">
      <h1 className="font-sans text-xl">{translations("HomePage.title")}</h1>
      <p className="font-serif text-sm">{translations("HomePage.about")}</p>
      <div className="flex gap-5">
        <LanguageSwitcher />
        <ModeToggle />
      </div>
    </Card>
  );
}
