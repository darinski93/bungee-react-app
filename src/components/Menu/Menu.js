import { items } from "./Items"

export const Menu = () => {

    const products = items

    return (
        
        <div className="product-grid">

            {products.map((product, index) => (
                <div className="product-card" key={index}>
                    <img src={product.image} alt={`${index}`} className="product-image"/>
                    <div className="product-name">{product.name}</div>
                    <p className="product-description">{product.description}</p>
                    <h4 className="product-price">${product.price}</h4>
                    <button>Add to card</button>

                </div>
            ))}


        </div >
    )
}