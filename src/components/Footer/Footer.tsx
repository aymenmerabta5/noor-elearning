import { Link } from "@/i18n/navigation";
import { type FC } from "react";
import { getTranslations } from "next-intl/server";

const Footer: FC = async () => {
  const t = await getTranslations();

  return (
    <div className="text-primary-background flex justify-between border-t p-4 text-center">
      <p className="font-mono">
        {t("Footer.footerText", { year: new Date().getFullYear() })}
      </p>
      <div className="flex items-center gap-2">
        <Link href="/privacy" className="font-mono text-sm hover:underline">
          {t("Footer.privacyPolicy")}
        </Link>
        <span className="font-mono text-sm">|</span>
        <Link href="/terms" className="font-mono text-sm hover:underline">
          {t("Footer.termsOfService")}
        </Link>
      </div>
    </div>
  );
};

export default Footer;
