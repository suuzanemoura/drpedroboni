import { useState } from "react";
import Navbar from "../NavBar";
import NavbarMobile from "../NavBar/NavBarMobile";
import DialogNavbar from "../Dialog";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-gradient-to-r from-[#011c36] from-0% via-[#0e2c50] via-[10%] to-[#011e3a] lg:bg-transparent lg:from-transparent lg:via-transparent lg:to-transparent z-50 mb-8 lg:mb-0 lg:static">
      <Navbar />
      <NavbarMobile setMobileMenuOpen={setMobileMenuOpen} />
      <DialogNavbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
}
