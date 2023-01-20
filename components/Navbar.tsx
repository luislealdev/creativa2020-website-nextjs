import NextLink from "next/link";

export const Navbar = () => {

  return (
    <>
      <nav className="nav">
        {/* <NextLink href='/'> */}
        <img src="/img/logocreativa-blanco.png" alt="" />
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
