import { Link } from "@/i18n/navigation";
import { type FC } from "react";

const Footer: FC = () => {
  return (
    <div className="text-primary-background flex justify-between border-t p-4 text-center">
      <p className="font-mono">
        &copy; {new Date().getFullYear()} Noor Elearning. All rights reserved.
      </p>
      <div className="flex items-center gap-2">
        <Link href="/privacy" className="font-mono text-sm hover:underline">
          Privacy Policy
        </Link>
        <span className="font-mono text-sm">|</span>
        <Link href="/terms" className="font-mono text-sm hover:underline">
          Terms of Service
        </Link>
      </div>
    </div>
  );
};

export default Footer;
