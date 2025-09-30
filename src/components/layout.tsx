import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add">Criar novo estudo</Link>
      </nav>
      <Outlet />
    </>
  );
}