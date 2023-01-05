import Image from "next/image";
import NextLink from "next/link";
import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { startOpeningNavbar, toggleShowingMobileNavbar } from "../store/ui";

export const Navbar = () => {

  return (
    <header id="header" className="header d-flex align-items-center">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <NextLink href="/" className="logo d-flex align-items-center">
          <Image src="/img/logo.png" alt="Creativa 2020" width={250} height={400}/>
        </NextLink>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <NextLink href="/">Inicio</NextLink>
            </li>
            {/* <li>
              <NextLink href=".#about">Sobre nosotros</NextLink>
            </li>
            <li>
              <a href="#services">Servicios</a>
            </li>
            <li>
              <a href="#team">Equipo</a>
            </li> */}
            <li>
              <NextLink href="/blog">Blog</NextLink>
            </li>
          </ul>
        </nav>
        {/* <span  onClick={console.log("hey")}>
          open
        </span> */}
        {/* <i
          className="mobile-nav-toggle mobile-nav-show bi bi-list"
        //  onClick={toggleShowingMobileNavbar}
        ></i>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i> */}
      </div>
    </header>
  );
};
