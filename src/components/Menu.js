import { Link } from "react-router-dom";
import routes from "../Routes";

const Menu = ({onGetCategory}) => {
    return (
            <div className="Menu">
                    {routes.map((route) => (
                            <Link key={route.name} className="link" to={route.path} onClick={() => onGetCategory(route.api_category)}
                            >
                                {route.name}
                            </Link>
                    ))}
            </div>
    );
  };



export default Menu;
