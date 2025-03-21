import { NavLink } from "react-router";
import "./SiteName.css";

const name = "Книга рецептов"


function SiteName() {
    return (
      <div className="name">
        <NavLink to='/' className="name_text">
          <p>{name}</p>
        </NavLink>
      </div>
    );
}

export default SiteName;
