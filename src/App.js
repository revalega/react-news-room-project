import { Route } from "react-router-dom";
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from "./components/Header";
import MenuContainer from "./containers/MenuContainer";
import "./index.css";
import routes from "./Routes";


function App() {
  return (
    <Router>
    <div>
        <div className="News">
          <div className="Container">
            <Header />
            <div className="MainContainer">
            <MenuContainer />
            <Switch>
              {routes.map((route,i) => (
                <Route
                  key={i}
                  path={route.path}
                  component={route.component}
                  exact
                />
              ))}
            </Switch>
            </div>
        </div>
        </div>
        </div>
    </Router>
  );
}

export default App;
