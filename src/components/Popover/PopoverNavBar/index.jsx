import { Popover } from "@headlessui/react";
import PopoverFontSize from "../PopoverFontSize";
import { navBarConfig } from "../../../config/header";
import { HashLink } from "react-router-hash-link";

export default function PopoverNavBar() {
  return (
    <Popover.Group className="hidden lg:flex md:gap-x-4 xl:gap-x-8">
      {navBarConfig.nav_items.map((nav_item, index) => {
        return (
          <button
            key={index}
            className="hover:underline-offset-8 hover:underline decoration-sky-600 xl:text-lg 3xl:text-2xl text-base leading-6"
            type="button"
          >
            <HashLink
              smooth
              to={nav_item.url}
            >
              {nav_item.title}
            </HashLink>
          </button>
        );
      })}
      <PopoverFontSize position={"-left-20"} />
    </Popover.Group>
  );
}
