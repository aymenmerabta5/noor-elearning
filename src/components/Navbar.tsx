import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { type FC } from "react";

const Navbar: FC = async () => {
  const t = await getTranslations();

  return (
    <div className="text-primary-background flex items-center justify-between border-b p-4 font-sans">
      <Link
        href="/"
        className="flex h-full items-center gap-2 font-serif text-2xl font-bold"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.3327 3.07867C12.3315 3.08457 12.3292 3.09483 12.3249 3.1098C12.3145 3.14663 12.2983 3.19137 12.2782 3.23917C12.2723 3.25323 12.2663 3.2669 12.2604 3.27993C11.8368 3.57043 10.9929 3.97977 10.2365 4.16037C9.32917 4.377 8.21377 4.50723 7 4.50723C5.78623 4.50723 4.67083 4.377 3.7635 4.16037C3.0004 3.9782 2.14835 3.56323 1.72846 3.27227C1.72461 3.26417 1.72072 3.25567 1.71684 3.24693C1.69973 3.2083 1.68574 3.17047 1.67659 3.137C1.66785 3.10507 1.6668 3.0889 1.66668 3.08707C1.66668 3.087 1.66667 3.0869 1.66668 3.08707C1.66668 3.07863 1.67013 2.97443 1.89495 2.78953C2.11515 2.60847 2.47407 2.41563 2.97637 2.24092C3.97473 1.89366 5.3973 1.66667 7 1.66667C8.6027 1.66667 10.0253 1.89366 11.0236 2.24092C11.5259 2.41563 11.8848 2.60847 12.105 2.78953C12.3002 2.95003 12.3286 3.04963 12.3327 3.07867V3.07867ZM0.650593 4.07707L6.15143 12.8991C6.54293 13.527 7.45707 13.527 7.84857 12.8991L13.3511 4.07433C13.357 4.06493 13.3626 4.0554 13.368 4.0457L12.7854 3.7216C13.368 4.0457 13.3679 4.0458 13.368 4.0457L13.3684 4.045L13.3688 4.04417L13.37 4.04203L13.3733 4.03607C13.3759 4.03133 13.3792 4.02513 13.3832 4.01757C13.3913 4.0025 13.4021 3.98183 13.4147 3.9567C13.4397 3.90693 13.4732 3.837 13.5072 3.7561C13.5634 3.62263 13.6667 3.3563 13.6667 3.08697C13.6667 2.5191 13.3343 2.07418 12.9519 1.7597C12.5649 1.44142 12.0451 1.18454 11.4617 0.98159C10.2885 0.573523 8.711 0.333333 7 0.333333C5.289 0.333333 3.71153 0.573523 2.53833 0.981593C1.95488 1.18454 1.4351 1.44143 1.04806 1.7597C0.66565 2.07418 0.33333 2.5191 0.33333 3.08697C0.33333 3.37583 0.43088 3.63593 0.497737 3.7869C0.534583 3.87007 0.57116 3.93987 0.598957 3.98963C0.612993 4.0148 0.625157 4.0355 0.6345 4.05097C0.63918 4.05873 0.64318 4.06523 0.646387 4.07037L0.648873 4.07433L0.650593 4.07707V4.07707ZM10.9956 5.332L7 11.74L3.00437 5.332C3.15537 5.3797 3.30597 5.42193 3.4539 5.45727C4.47603 5.7013 5.6967 5.84057 7 5.84057C8.3033 5.84057 9.52397 5.7013 10.5461 5.45727C10.694 5.42193 10.8446 5.3797 10.9956 5.332V5.332Z"
            className="fill-current"
          />
        </svg>
        <h1 className="font-sans text-2xl font-bold">Noor</h1>
      </Link>
      <div className="flex items-center justify-end space-x-4 font-sans">
        <Link href="/" className="group relative text-lg">
          {t("Navbar.home")}
          <span className="bg-primary absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/about" className="group relative text-lg">
          {t("Navbar.about")}
          <span className="bg-primary absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/contact" className="group relative text-lg">
          {t("Navbar.contact")}
          <span className="bg-primary absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="/login"
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-4xl px-4 py-2 text-lg"
        >
          {t("Navbar.login")}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
