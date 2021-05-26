import Home from "./pages/Home.js";
import Politica from "./pages/Politica.js";
import Deportes from "./pages/Deportes.js";
import Tecnologia from "./pages/Tecnologia.js";
import Internacional from "./pages/Internacional.js";
import Espectaculos from "./pages/Espectaculos.js";

const routes = [
    {
        path: '/',
        component: Home,
        name:"Home",
        api_category:0,
    },
    {
        path: '/politica',
        component: Politica,
        name:"Política",
        api_category:1
    },
    {
        path: '/internacional',
        component: Internacional,
        name:"Internacional",
        api_category:2
    },
    {
        path: '/tecnologia',
        component: Tecnologia,
        name:"Tecnología",
        api_category:3
    },
    {
        path: '/espectaculos',
        component: Espectaculos,
        name:"Espectáculos",
        api_category:4
    },
    {
        path: '/deportes',
        component: Deportes,
        name:"Deportes",
        api_category:5
    },
    {
        path: '/',
        component: Home,
        name:"Últimas noticias",
        api_category:0
    },
  ]

  export default routes;