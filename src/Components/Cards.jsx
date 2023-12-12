import React, { useContext } from 'react'
import Card from './Card'
import MainContext from '../context'
import "./Cards.css"
const Cards = () => {
  const { data, filterData } = useContext(MainContext)
  return (
    <div className='cards'>
      {
        (filterData.length > 0 ? filterData : data).map((item, index) => {
          return <Card item={item} key={index} />
        })
      }
    </div>
  )
}

export default Cards