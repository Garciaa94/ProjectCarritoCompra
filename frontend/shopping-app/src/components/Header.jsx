import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import FakeStoreService from '../apis/FakeStoreService';
import DropDown from './Dropdown';

const HeaderComponent = (props) => {

    // const [categoriesList, setCategoriesList] = useState([""]);
    const [categoriesOptionList, setCategoriesOptionList] = useState([{value:"", label:""}]);

    useEffect(() => {
        getCategories()
    }, [])

    const getCategories = async () => {
        const response = await FakeStoreService.getCategories();
        let newCategoryList = [];
        // setCategoriesList(response.data);
        response.data.map((category, index) => (
            newCategoryList.push({value: category, label: category.split(' ').map(c => c[0].toUpperCase()+c.substring(1)).join(' ')})
        ))
        // console.log(newCategoryList);
        setCategoriesOptionList(newCategoryList);
    }

    return (
        <nav className="navbar bg-warning navbar-expand">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">GitShop</Link>
                    </li>
                    {/* <li className="nav-item active">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/signup">Signup</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/cart">
                            <span className="material-icons align-middle">shopping_cart</span>{props.cartCount}
                        </Link>
                    </li> */}
                </ul>
                <ul className="navbar-nav mr-auto card border-info">
                    <li className="nav-item dropdown">
                        <DropDown title="Categories" options={categoriesOptionList} onChange={props.onCategoryChange}/>
                    </li>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-0" type="search"></input>
                        <button className="btn btn-outline-info my-2 my-sm-0" type="submit"><span className="material-icons align-middle">search</span></button>
                    </form>
                    </ul>

                <ul className="navbar-nav ml-auto justify-content-end">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/login">Ingresar</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto justify-content-end">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/signup">Registrar</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto justify-content-end">
                    <li className="nav-item active">
                        <Link className="nav-link" 
                        to={{
                            pathname: '/cart',
                            state: { cart: props.cart, totalPrice: props.totalPrice }
                        }}
                        >
                            <span className="material-icons align-middle">shopping_cart</span>{props.cartCount}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default withRouter(HeaderComponent);