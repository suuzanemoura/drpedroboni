import { Bars3Icon } from "@heroicons/react/20/solid";
import PopoverFontSize from "../../Popover/PopoverFontSize";
import { navBarConfig } from "../../../config/header";
import { goToHome } from "../../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export default function NavbarMobile({ setMobileMenuOpen }) {
  const navigate = useNavigate();
  return (
    <nav
      className="flex lg:hidden items-start lg:items-center justify-between p-8 lg:py-10 xs:px-12 sm:px-24 md:px-32"
      aria-label="Global"
    >
      <button
        className="flex lg:flex-1 -m-1.5 p-1.5 mr-6"
        type="button"
        onClick={() => goToHome(navigate)}
      >
        <span className="sr-only">{navBarConfig.button_title}</span>
        <img
          className="h-8 2xs:h-10 xs:h-12 w-auto object-contain"
          src={navBarConfig.img}
          alt={navBarConfig.alt}
        />
      </button>
      <div className="flex lg:hidden mt-1.5 gap-2">
        <PopoverFontSize position={"-right-12"} />
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Abrir menu de navegação</span>
          <Bars3Icon
            className="h-6 w-6"
            aria-hidden="true"
          />
        </button>
      </div>
    </nav>
  );
}
