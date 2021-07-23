import React, { useState } from 'react';
import DropDown from './Dropdown';

const ProductDetails = ({ product, productAddedToCart, continueShopping, proceedToCheckout }) => {
    
    const sizeOptions = [{value:"xs", label:"XS"}, {value:"s", label:"S"},
                         {value:"m", label:"M"}, {value:"l", label:"L"},
                         {value:"xl", label:"XL"}]
    const quantityOptions = [{value:"1", label:"1"}, {value:"2", label:"2"},
                             {value:"3", label:"3"}, {value:"4", label:"4"},
                             {value:"5", label:"5"}]

    const [size, setSize] = useState('');
    const [quantity, setQuantity] = useState(1);

    const onSizeChange = (event) => {
        setSize(event.target.value)
    }
    const onQuantityChange = (event) => {
        setQuantity(event.target.value)
    }

    return (
        <div>
            {product ?
            <div className="container">
                <div className="page-title-overlap bg-dark pt-4">
                    <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
                        <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                            <h1 className="h3 mb-0 text-light text-center">{product.title}</h1>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="bg-light shadow-lg rounded-3 px-4 py-3 mb-5">
                    <div className="px-lg-3">
                    <div className="row">
                        {/*<div className="col-md-6 order-md-1 mb-1">
                             <div className="product-gallery">
                                <div className="product-gallery-preview order-sm-2">
                                    <div className="product-gallery-preview-item active"> */}
                                        <img className="image-zoom col-md-6 order-md-1 mb-1" src={product.image} data-zoom={product.image} alt={product.id}></img>
                                        <div className="image-zoom-pane"></div>
                                    {/* </div>
                                </div>
                            </div> 
                        </div> */}
                        <div className="col-md-6 order-md-2">
                            <div className="mb-3">
                                <span className="h3 fw-normal text-accent me-1">${parseFloat(product.price).toFixed(2)}</span>
                            </div>
                            {(product.category !== "electronics" && product.category !== "jewelery") &&
                            <div className="mb-3">
                                <h6>Size</h6>
                                <DropDown title="Size" options={sizeOptions} onChange={onSizeChange}/>
                            </div>}
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <DropDown title="Quantity" options={quantityOptions} onChange={onQuantityChange}/>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <button className="btn btn-outline-info btn-block" onClick={productAddedToCart(product, quantity)}>
                                            <span className="material-icons align-middle">shopping_cart</span>
                                            AGregar a Carrito
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div>{product.description}</div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                {/* <div className="container">
                <button className="btn btn-outline-info btn-block" 
                // onClick={productAddedToCart(product.id, quantity)}
                >
                    Continue Shopping
                </button>
                <button className="btn btn-outline-info btn-block" 
                // onClick={productAddedToCart(product.id, quantity)}
                >
                    Proceed to Checkout
                </button>
                </div> */}
                <div className="clearfix">
                    <button className="btn btn-outline-info float-left" onClick={continueShopping}>Continue Shopping</button>
                    <button className="btn btn-outline-info float-right" onClick={proceedToCheckout}>Proceed to Checkout</button>
                </div>
            </div>
            : <div>No hay productos con el ID de producto dado </div>}
            <div className=""></div>
        </div>
    )
}

export default ProductDetails