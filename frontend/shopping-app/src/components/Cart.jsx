import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import AddressForm from './AddressForm';
import ShoppingService from '../apis/ShoppingService';

const Cart = (props) => {
    console.log(props.location.state.cart)
    console.log(props.location.state.totalPrice)
    const [proceedCheckout, setProceedCheckout] = useState(false)
    const [address, setAddress] = useState('');
    const [street, setStreet] = useState('');
    const [country, setCountry] = useState('');
    const [stateName, setStateName] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [paymentType, setPaymentType] = useState('debit')
    const [nameOnCard, setNameOnCard] = useState('')
    const [cardNumber, setCardNumber] = useState('');
    const [expiration, setExpiration] = useState('')
    const [cvv, setCVV] = useState('');

    const validate = (values) => {
        let errors = {}
        console.log(values.paymentType)
        if(!values.address) {
            errors.address = 'Please Enter Your Shipping Address'
        }

        if(!values.street) {
            errors.street = 'Street Name is Required'
        }

        if(!values.country) {
            errors.country = 'Country Name is Required'
        }

        if(!values.stateName) {
            errors.stateName = 'State Name is Required'
        }

        if(!values.zipCode) {
            errors.zipCode = 'Zip Code is Required'
        } else if(values.zipCode.length>4) {
            errors.zipCode = 'Enter a Valid Zip Code'
        }

        if(!values.nameOnCard) {
            errors.nameOnCard = 'Name on Card is Required'
        } else if(values.nameOnCard.length<4) {
            errors.nameOnCard = 'Enter a Valid Name on Card'
        }

        if(!values.cardNumber) {
            errors.cardNumber = 'Card Number is Required'
        } else if(values.cardNumber.length<4) {
            errors.cardNumber = 'Enter a Valid Card Number'
        }

        if(!values.expiration) {
            errors.expiration = 'Expiration Date is Required'
        }

        if(!values.cvv) {
            errors.cvv = 'CVV is Required'
        }

        return errors
    }

    const onSubmit = (values) => {
        setAddress(values.address) 
        setStreet(values.street) 
        setCountry(values.country) 
        setStateName(values.stateName) 
        setZipCode(values.zipCode)
        setPaymentType(values.paymentType)
        setNameOnCard(values.nameOnCard)
        setCardNumber(values.cardNumber)
        setExpiration(values.expiration)
        setCVV(values.cvv)
        ShoppingService.placeOrder(parseInt(Math.random()*1000), "hello.hello@gmail.com", props.location.state.cart, values.address, values.street, values.country, values.stateName, values.zipCode, values.paymentType, values.nameOnCard, values.cardNumber, values.expiration, values.cvv)
        .then((response) => {
            if(response.status === 200) {
                console.log('check out success')
                // props.history.push('/?message=Order%20Placed%20Successfully')
            }
        })
    }

    const handleProceedToCheckout = () => {
        console.log('proceed to checkout')
        setProceedCheckout(true)
    }
    
    return (
        <div className="container">
            <h2 className="text-center">Tu carrito de compra</h2>
            <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div className="h6 col-md-3 mr-auto">Imagen del producto</div>
                <div className="h6 col-md-3 mr-auto">Titulo del Producto</div>
                <div className="h6 col-md-2 mr-auto">Precio</div>
                <div className="h6 col-md-2 mr-auto">Cantidad</div>
                    <div className="h6 col-md-2 mr-auto">Total</div>
                </li>
            {props.location.state.cart.length>1 ? props.location.state.cart.map((cartItem, idx) => (
                idx !==0 && 
                <div key={idx}>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div className="row">
                        <img className="col-md-5" src={cartItem.product.image} data-zoom={cartItem.product.image} alt={cartItem.product.id}></img>
                    </div>
                    <div className="col-md-3">{cartItem.product.title}</div>
                    <div className="col-md-2">${parseFloat(cartItem.product.price).toFixed(2)}</div>
                    <div className="col-md-2">{cartItem.quantity}</div>
                    <div className="col-md-2">${cartItem.productWiseTotalPrice}</div>
                </li>
                </div>
            )) : <div>Sin productos en el carrito</div>}
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div className="h6 col-md-2 mr-auto">Monto Total </div>
                    <div className="col-md-2 ml-auto">${parseFloat(props.location.state.totalPrice).toFixed(2)}</div>
                </li>
            </ul>
            <ul className="list-group mb-3">
                
            </ul>
            <button className="btn btn-info btn-block" onClick={handleProceedToCheckout}>Metodo de pago</button>
            <br />
            {proceedCheckout && 
            <>
            <Formik
                    initialValues= {{ address, street, country, stateName, zipCode, paymentType, nameOnCard, cardNumber, expiration, cvv }}
                    onSubmit={onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={validate}
                    enableReinitialize={true}
                >
                    <Form>
                        <AddressForm />
                        <fieldset className="form-group">
                            <label>
                                <Field type="radio" name="paymentType" value="debit" />
                                Debit Card
                            </label>
                        </fieldset>
                        <fieldset className="form-group">
                            <label>
                                <Field type="radio" name="paymentType" value="credit" />
                                Credit Card
                            </label>
                        </fieldset>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <fieldset className="form-group">
                                    <label>Name on Card*</label>
                                    <Field className="form-control" type="text" name="nameOnCard" placeholder="Enter Name on Card" />
                                    <span className="text-muted font-weight-light">Full name as displayed on card</span>
                                </fieldset>
                                <ErrorMessage name="nameOnCard" component="p" className="text-danger" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <fieldset className="form-group">
                                    <label>Card Number*</label>
                                    <Field className="form-control" type="text" name="cardNumber" placeholder="Enter Card Number" />
                                </fieldset>
                                <ErrorMessage name="cardNumber" component="p" className="text-danger" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 mb-3">
                                <fieldset className="form-group">
                                    <label>Expiration*</label>
                                    <Field className="form-control" type="text" name="expiration" placeholder="Enter Expiration" />
                                </fieldset>
                                <ErrorMessage name="expiration" component="p" className="text-danger" />
                            </div>
                            <div className="col-md-3 mb-3">
                                <fieldset className="form-group">
                                    <label>CVV*</label>
                                    <Field className="form-control" type="number" name="cvv" placeholder="Enter CVV" />
                                </fieldset>
                                <ErrorMessage name="cvv" component="p" className="text-danger" />
                            </div>
                        </div>
                        <div className="clearfix">
                            <button className="btn btn-info float-left" type="submit">Ordenar</button>
                            <button className="btn btn-info float-right" type="reset">Borrar Datos</button>
                        </div>
                    </Form>
                </Formik>
            </>}
        </div>
    );
}

export default Cart