import { NavLink } from "react-router-dom";
import Header from "./Components/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Header />
        <nav>
          <li>
            <NavLink path="/" element={<Home />} />
            Home
          </li>
          <li>
            <NavLink path="/create" element={<Create />} />
          </li>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
