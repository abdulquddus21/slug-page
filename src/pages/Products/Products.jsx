import { useState, useEffect } from "react"
import "./products.css"
import { Link } from "react-router-dom"
function Prdoucts() {

    const [data, setData] = useState([])
    const [error, setError] = useState(null)

const getData = async() =>{ 
    try {
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json()
        setData(data)
    } catch (error) {
        setError(error)
    }
}

useEffect(() => {
    getData()
}, [])


  return (
    <div>
   {data && data.map((item) => (
   <Link to={`/Slug/${item.id}`} key={item.id}>
     <div className="card" key={item.id}>
        <img src={item.image} alt="" />
        <h2>{item.title}</h2>
        <p>${item.price}</p>
    </div>
   </Link>
))}

    </div>
  
)}

export default Prdoucts