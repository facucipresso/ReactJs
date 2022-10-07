import Item from "../item/item"

const ItemList = ({products})=>{



    return (
        <div>
            {products.map(prod => <Item key={prod.id} img={prod.img} name={prod.name} category={prod.category} price={prod.price} //todo de prod.name lo puedo hacer con un spreed operator 
            />)}
        </div>
    )
}

export default ItemList