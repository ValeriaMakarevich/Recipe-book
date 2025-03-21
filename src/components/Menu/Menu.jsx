import "./Menu.css";

import { NavLink } from "react-router";

function Menu() {
  return (
    <>
      <nav className="menu">
        <li>
          <NavLink to="/" className="menu_resipe">
            Все рецепты
          </NavLink>
        </li>

        <li>
          <NavLink to="/ResipePost" className="menu_post">
            Статьи
          </NavLink>
        </li>

        <li>
          <NavLink to="/ResipeNews" className="menu_news">
            Новости
          </NavLink>
        </li>

        <li>
          <NavLink to="/ResipeNews" className="menu_holidays">
            Праздники
          </NavLink>
        </li>
      </nav>
    </>
  );
}

export default Menu;
