import { type FC } from "react";

const Footer: FC = () => {
  return (
    <div className="text-primary-background border-t p-4 text-center">
      <p>
        &copy; {new Date().getFullYear()} Noor Elearning. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
