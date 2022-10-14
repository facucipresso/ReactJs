import { useState, useEffect } from "react"
import { getProductById } from "../asyncMock"
import ItemDetail from "../itemDetail/itemDetail"
import { useParams } from "react-router-dom"
/* const product = {
    id: '1', 
    name: 'El poder del ahora', 
    price: '$1000', 
    category: 'Desarrollo personal', 
    img:'http://d3ugyf2ht6aenh.cloudfront.net/stores/235/530/products/ahora1-8359f7b083d7524fb415832762611256-320-0.jpg', 
    stock: 25, 
    description:'Descripcion de El poder del ahora, alto libro pa'
} */


const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()
    console.log(productId)

    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return(
        <div className='ItemDetailContainer' >
            <ItemDetail  {...product} />
        </div>
    )
}

export default ItemDetailContainer
