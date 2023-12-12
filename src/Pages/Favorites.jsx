import React, { useContext } from 'react'
import MainContext from '../context'
import { Toaster } from 'react-hot-toast'
import "./Favorites.css"
const Favorites = () => {
  const{favorites, deleteFavoriteItems} = useContext(MainContext)
  return (
    <div className='tablecontainer'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>

          {
            favorites.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.title}</td>
                  <td>{item.price} AZN</td>
                  <td><button className='btn btn-dark' onClick={()=>{
                    deleteFavoriteItems(item.id)
                  }}>Delete</button></td>
                </tr>
              )
            })
          }
        </tbody>
        <Toaster/>
      </table>
    </div>
  )
}

export default Favorites