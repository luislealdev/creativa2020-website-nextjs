import Image from "next/image";
import NextLink from "next/link";
import React from "react";

export const Navbar = () => {


  return (
    <>
      <nav className="nav">
        <img src="/img/logocreativa.png" alt="" />
        <ul>
          <li>
            <NextLink href="/">Home</NextLink>
          </li>
          <li>
            <NextLink href="/servicios">Servicios</NextLink>
          </li>
          <li>
            <NextLink href="/blog">Blog</NextLink>
          </li>
        </ul>
      </nav>
    </>

  );
};
