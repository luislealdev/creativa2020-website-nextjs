import Image from "next/image";
import NextLink from "next/link";
import React from "react";

export const Navbar = () => {


  return (
    <>
      <nav className="nav">
        <img src="/img/logocreativa-blanco.png" alt="" />
        <ul>
          <li>
            <NextLink href="/">Inicio</NextLink>
          </li>
          <li>
            <NextLink href="/servicios">Portafolio</NextLink>
          </li>
          <li>
            <NextLink href="/blog">Blog</NextLink>
          </li>
        </ul>
      </nav>
    </>

  );
};
