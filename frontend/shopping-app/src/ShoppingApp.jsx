import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Cart from './components/Cart';
import Footer from './components/Footer';
import FakeStoreService from './apis/FakeStoreService';
import ProductDetails from './components/ProductDetails';
const Products = lazy(() => import('./components/Products'));

const ShoppingApp = () => {

    const [product, setProduct] = useState({})
    const [allProducts, setAllProducts] = useState([{}])
    const [productsOfCategory, setProductsOfCategory] = useState([{}])
    const [cartCount, setCartCount] = useState(0);
    const [cart, setCart] = useState([{product: {}, quantity:0, productWiseTotalPrice:0 }]);
    const [totalPrice, setTotalPrice] = useState(0);

    const getAllProducts = async () => {
        const response = await FakeStoreService.getProducts()
        setAllProducts(response.data)
        setProductsOfCategory(response.data)
    } 

    useEffect(() => {
        getAllProducts()
    }, [])

    const onCategoryChange = async (event) => {
        if(event.target.value === "all") {
            const allCategoriesProductsResponse = await FakeStoreService.getProducts()
            setProductsOfCategory(allCategoriesProductsResponse.data)
        } else {
            const oneCategoryProductsResponse = await FakeStoreService.getProductsOfCategory(event.target.value)
            setProductsOfCategory(oneCategoryProductsResponse.data)
        }
    }

    const getProductDetails = (productId)  => {
        console.log(`in getProduct details`)
        FakeStoreService.getProductDetails(productId)
        .then((response) => {
            console.log(response.data)
            setProduct(response.data)
        })
    }

    const productAddedToCart = (product, quantity) => () => {
        console.log(`id ${product.id}`)
        console.log(product.price)
        console.log(parseFloat(product.price))
        const productWiseTotalCost = (parseFloat(product.price) * parseInt(quantity)).toFixed(2)
        console.log(typeof productWiseTotalCost)
        console.log(typeof totalPrice)
        setCartCount(cartCount + parseInt(quantity))
        setCart(cart.concat({product:product, quantity:quantity, productWiseTotalPrice: productWiseTotalCost}))
        setTotalPrice(parseFloat(totalPrice) + parseFloat(productWiseTotalCost))
        console.log('cart')
        console.log(cart)
    }
    
    const proceedToCheckout = () => {
        console.log('proceed to checkout');
        <Redirect to={{
            pathname: '/cart',
            state: { cart: cart }
        }} />
    }

    const productClicked = (id) => () => {
        getProductDetails(id)
    }

    return (
        <div>
        <Router>
            <Header cartCount={cartCount} onCategoryChange={onCategoryChange} cart={cart} totalPrice={totalPrice}/>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path="/" exact component={() => <Products products={productsOfCategory} productAddedToCart={productAddedToCart} productClicked={productClicked}/>} />
                    <Route path="/products" component={() => <Products products={allProducts} />} />
                    <Route path="/" exact component={Products} />
                    <Route path="/products" component={Products} />
                    <Route path="/product/:productId" component={() => <ProductDetails product={product} productAddedToCart={productAddedToCart} proceedToCheckout={proceedToCheckout}/>} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/cart" component={(props) => <Cart {...props}/>} />
                </Switch>
            </Suspense>
            <Footer />
        </Router>
        </div>
    );
}

export default ShoppingApp