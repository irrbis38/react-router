import { Outlet } from "react-router-dom";
import CustomLink from "./CustomLink";
function Layout() {
  return (
    <>
      <header className="header">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/posts">Blog</CustomLink>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="container">2022</footer>
    </>
  );
}

export default Layout;
