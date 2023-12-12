import { useEffect, useState } from 'react';
import './App.css';
import MainContext from './context';
import axios from 'axios';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import ROUTES from './router/ROUTES';
import toast from 'react-hot-toast';
function App() {
  const [data, setData] = useState([])
  const [filterData, setFilterData] = useState([])
  const [search, setSearch] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [item, setItem] = useState({})
  const [favorites, setFavorites] = useState(localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : [])
  const [basketItems, setBasketItems] = useState(localStorage.getItem("basketItems") ? JSON.parse(localStorage.getItem("basketItems")) : [])
  const router = createBrowserRouter(ROUTES)

  const getData = async () => {
    const res = await axios.get("https://dummyjson.com/products")
    const data = res.data.products;
    console.log(data);
    setData(data)
  }

  useEffect(() => {
    getData()
  }, [])


  const handleSearch = () => {
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase().trim())
    );
    setFilterData([...filteredData]);
  }

  useEffect(() => {
    handleSearch();
  }, [search]);


  const addToFavorite = (id) => {
    let item = data.find(item => item.id == id)
    setFavorites([...favorites, item])
    localStorage.setItem("favorites", JSON.stringify([...favorites, item]))
    toast.success("Item favorite'e elave olundu")
  }

  const deleteFavoriteItems = (id) => {
    let item = favorites.find(item => item.id == id)
    favorites.splice(favorites.indexOf(item), 1)
    setFavorites([...favorites])
    localStorage.setItem("favorites", JSON.stringify([...favorites]))
    toast.success("Item favorites'den silindi")
  }

  const addToBasket = (product) => {
    const target = basketItems.find((basketItem) => basketItem.id == product.id)
    if (target) {
      target.count += 1
      target.totalPrice = target.product.price * target.count
      setBasketItems([...basketItems])
      localStorage.setItem("basketItems", JSON.stringify([...basketItems]))
    } else {
      const basketItem = {
        id: product.id,
        product: product,
        count: 1,
        totalPrice: product.price
      }
      setBasketItems([...basketItems, basketItem])
      localStorage.setItem("basketItems", JSON.stringify([...basketItems, basketItem]))
    }
    toast.success("Item basket'e elave olundu")
  }

  const removeBasketItem = (basketItem) => {
    const target = basketItems.find(item => item.id == basketItem.id)
    if (target.count > 1) {
      target.count -= 1
      target.totalPrice = target.product.price * target.count
      setBasketItems([...basketItems])
      localStorage.setItem("basketItems", JSON.stringify([...basketItems]))
    } 
  }

  const deleteBasketItems = (id) => {
    let item = basketItems.find(item => item.id == id)
    basketItems.splice(basketItems.indexOf(item), 1)
    setBasketItems([...basketItems])
    localStorage.setItem("basketItems", JSON.stringify([...basketItems]))
    toast.success("Item basket'den silindi")
  }

  const values = {
    data, setData, favorites, setFavorites, filterData, setFilterData, search, setSearch, inputValue, setInputValue, item, setItem, addToFavorite, deleteFavoriteItems, basketItems, setBasketItems, addToBasket, removeBasketItem, deleteBasketItems
  }
  return (
    <MainContext.Provider value={values}>
      <RouterProvider router={router}></RouterProvider>
    </MainContext.Provider>
  );
}

export default App;
