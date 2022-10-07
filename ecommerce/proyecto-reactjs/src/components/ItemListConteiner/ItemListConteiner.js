import {useState, useEffect} from 'react'
import { getProducts } from '../asyncMock'
import ItemList from '../itemList/itemList'

const ItemListConteiner = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loadign, setLoading] = useState(true)

    useEffect(()=>{
        getProducts().then(response => {
            console.log(response);
            setProducts(response)
        }). finally(()=>{
            setLoading(false)
        })
    },[])

    console.log(products);
    const productsMapped = products.map(prod => <li key={prod.id} style={{color:'blue', listStyle: 'none'}}>{prod.name}</li> )
    console.log(productsMapped);
    
    if (loadign){
        return <h1>Loading...</h1>
    }
    
    return (
        <div>
            <h1>{greeting}</h1>
            {/* {productsMapped } */}
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListConteiner