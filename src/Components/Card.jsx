import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MainContext from '../context'
import "./Card.css"
import { Toaster } from 'react-hot-toast'
const Card = ({ item }) => {
    const { addToFavorite, addToBasket } = useContext(MainContext)
    return (
        <div>
            <div className="card" style={{ width: "18rem", height:"400px" }}>
            <img src={item.thumbnail} style={{ height: "220px" }} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.price} AZN</p>

                    <Link className='btn btn-dark' to={`/${item.id}`}>Detail</Link>
                    <button className='btn btn-dark basket' onClick={()=>{
                        addToBasket(item)
                    }}>Add to Basket</button>
                    <button className='btn btn-dark favorite' onClick={(e) => {
                        addToFavorite(item.id)
                    }}><i class="fa-regular fa-heart" style={{ color: "red" }}></i></button>
                
            </div>
            
        </div>
        <Toaster/>
        </div>

    )
}

export default Card