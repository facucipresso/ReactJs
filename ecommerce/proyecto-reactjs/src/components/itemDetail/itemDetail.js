/* const ItemDetail = (id, name, price, category, img, stock, description)=> {
    return (
        <div>
                <img src={img} alt={name} style={{width: 100, height: 160}}/>
                <h2>{name}</h2>
                <p>{price}</p>
                <p>{description}</p>
            </div>
    )
}

export default ItemDetail */


import ItemCount from '../itemCount/ItemCount'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
   
    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }
        console.log(productToAdd)
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                <ItemCount onAdd={handleOnAdd} stock={stock} />
            </footer>
        </article>
    )
}

export default ItemDetail