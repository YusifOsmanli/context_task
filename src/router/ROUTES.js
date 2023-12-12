import Basket from "../Pages/Basket";
import Favorites from "../Pages/Favorites";
import Home from "../Pages/Home";
import MainRoot from "../Pages/MainRoot";
import ProductDetail from "../Pages/ProductDetail";
const ROUTES = [{
    path:'/',
    element:<MainRoot/>,
    children:[{
        path:'',
        element:<Home/>
    },{
        path:'/favorites',
        element:<Favorites/>
    },{
        path:'/basket',
        element:<Basket/>
    },{
        path:'/:id',
        element:<ProductDetail/>
    }]
}]

export default ROUTES