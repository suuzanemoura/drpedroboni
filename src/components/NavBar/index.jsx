import { CursorArrowRippleIcon } from "@heroicons/react/20/solid";
import PopoverNavBar from "../Popover/PopoverNavBar";
import Button from "../Button";
import { navBarConfig } from "../../config/header";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/coordinator";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav
      className="hidden lg:flex items-start lg:items-center justify-between p-8 lg:py-10 md:px-14 lg:px-16 xl:px-20 2xl:px-32 3xl:px-60"
      aria-label="Global"
    >
      <button
        className="flex lg:flex-1 -m-1.5 p-1.5 cursor-pointer"
        onClick={() => goToHome(navigate)}
      >
        <span className="sr-only">{navBarConfig.title}</span>
        <img
          className="h-12 w-auto object-contain 3xl:h-20"
          src={navBarConfig.img}
          alt={navBarConfig.alt}
        />
      </button>
      <PopoverNavBar />
      <div className="hidden lg:flex lg:flex-1 lg:justify-end ml-6 lg:ml-12 xl:ml-16 animate__animated animate__pulse animate-[1s_ease-in-out_infinite]">
        <Button
          linkButton={navBarConfig.button_link}
          fontSize={"md:text-sm 2xl:text-base 3xl:text-xl"}
        >
          {navBarConfig.button_title}
          <CursorArrowRippleIcon className="h-6 md:h-7 xl:6" />
        </Button>
      </div>
    </nav>
  );
}
