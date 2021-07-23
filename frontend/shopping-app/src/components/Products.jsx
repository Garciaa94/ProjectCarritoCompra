import { Link } from "react-router-dom";


const Products = ({ products, productAddedToCart, productClicked }) => {

    return (
        <div className="container">
        <div className="card-deck">
            {products && products.length>0 && products.map((product, index) => (
                    <div key={index} >
                            <div className="card border-info mb-3" style={{width: 250, height:500}}>
                                <Link to={`/product/${product.id}`}>
                                    <img className="card-img-top img-thumbnail" src={product.image} 
                                        onClick={productClicked(product.id)}
                                        alt={product.id} style={{width:250, height:300}}></img>
                                </Link>
                                <div className="card-body">
                                    <h6 className="card-title">{product.title}</h6>
                                    <p className="card-text">${parseFloat(product.price).toFixed(2)}</p>
                                </div>
                            </div>
                    </div>
                ))}
                </div>
        </div>
    );
}

export default Products