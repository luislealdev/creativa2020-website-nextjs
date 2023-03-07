import Image from "next/image";
import NextLink from "next/link";

export const Navbar = () => {

  return (
    <>
      <nav className="nav">
        {/* <NextLink href='/'> */}
        <Image src="/img/logocreativa-blanco.png" alt="logo creativa 2020" width={500} height={500}/>
        {/* </NextLink> */}
        <ul>
          <li>
            <NextLink href="/">Inicio</NextLink>
          </li>
          <li>
            <NextLink href="/#services">Servicios</NextLink>
          </li>
          <li>
            <NextLink href="/blog">Blog</NextLink>
          </li>
        </ul>
      </nav>
    </>

  );
};
