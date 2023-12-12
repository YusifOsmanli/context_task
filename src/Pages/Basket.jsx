import React, { useContext } from 'react'
import MainContext from '../context'
import { Toaster } from 'react-hot-toast'
const Basket = () => {
    const { basketItems, deleteBasketItems, addToBasket, removeBasketItem } = useContext(MainContext)
    let totalPrice = 0
    return (
        <div className='tablecontainer'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Image</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Decrease</th>
                        <th scope="col">Counter</th>
                        <th scope="col">Increase</th>
                        <th scope="col">Total Price</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        basketItems.map((item, index) => {
                            totalPrice+=item.totalPrice
                            return (
                                <tr key={index}>
                                    <th scope="row">{item.id}</th>
                                    <th><img style={{ width: "100px", height: "100px" }} src={item.product.thumbnail} /></th>
                                    <td>{item.product.title}</td>
                                    <td>{item.product.price} AZN</td>
                                    <td><button disabled={item.count == 1 ? true : false} className='btn btn-dark' onClick={() => {
                                        removeBasketItem(item)
                                    }}>-</button></td>
                                    <td>{item.count}</td>
                                    <td><button className='btn btn-dark' onClick={() => {
                                        addToBasket(item)
                                    }}>+</button></td>
                                    <td>{item.totalPrice} AZN</td>
                                    <td><button className='btn btn-dark' onClick={() => {
                                        deleteBasketItems(item.id)
                                    }}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                <Toaster />
            </table>
            <h1>Total Price:{totalPrice} AZN</h1>
        </div>
    )
}

export default Basket