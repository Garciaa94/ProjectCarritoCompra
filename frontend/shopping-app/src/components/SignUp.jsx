import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import ShoppingService from '../apis/ShoppingService';
import AddressForm from './AddressForm'

const SignUp = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [address, setAddress] = useState('');
    const [street, setStreet] = useState('');
    const [country, setCountry] = useState('');
    const [stateName, setStateName] = useState('');
    const [zipCode, setZipCode] = useState('');

    const validate = (values) => {
        let errors = {}

        if(!values.firstName) {
            errors.firstName = 'Valid First Name is Required'
        } else if(values.firstName.length < 3) {
            errors.firstName = 'First Name should be minimum of 3 characters'
        }

        if(!values.lastName) {
            errors.lastName = 'Valid Last Name is Required'
        } else if(values.lastName.length < 3) {
            errors.lastName = 'Last Name should be minimum of 3 characters'
        }

        if(!values.email) {
            errors.email = 'Valid Email Address is Required'
        } else if (values.email.length<3) {
            errors.email = 'Enter a Valid Email Address'
        }

        if(!values.phone) {
            errors.phone = 'Valid Phone Number is Required'
        } else if (values.phone.length<10) {
            errors.phone = 'Enter a Valid Phone Number'
        }

        if(!values.password) {
            errors.password = 'Please Enter Password'
        } else if(values.password.length<8 || values.password.length>32) {
            errors.password = 'Password should be minimum of 8 and maximum of 32 characters'
        }

        if(!values.confirmPassword) {
            errors.confirmPassword = 'Please Confirm Your Password'
        } else if(values.confirmPassword.length<8 || values.confirmPassword.length>32) {
            errors.confirmPassword = 'Password should be minimum of 8 and maximum of 32 characters'
        }

        if(values.password !== values.confirmPassword) {
            errors.password = 'Password and Confirm Password should be same'
            errors.confirmPassword = 'Password and Confirm Password should be same'
        }

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
        return errors
    }

    const onSubmit = (values) => {
        setFirstName(values.firstName) 
        setLastName(values.lastName) 
        setEmail(values.email) 
        setPhone(values.phone) 
        setPassword(values.password) 
        setConfirmPassword(values.confirmPassword) 
        setAddress(values.address) 
        setStreet(values.street) 
        setCountry(values.country) 
        setStateName(values.stateName) 
        setZipCode(values.zipCode)
        ShoppingService.submitSignUp(values.firstName, values.lastName, values.email, values.phone, values.password, values.confirmPassword, values.address, values.street, values.country, values.stateName, values.zipCode)
        .then((response) => {
            if(response.status === 200) {
                props.history.push('/login?message=SignUp%20Successful.%20Please continue to login')
            }
        })
    }

    return (
        <div>
            <h1 className="text-center">Formulario de registro </h1>
            <div className="container">
                <Formik
                    initialValues= {{ firstName, lastName, email, phone, password, confirmPassword, address, street, country, stateName, zipCode }}
                    onSubmit={onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={validate}
                    enableReinitialize={true}
                >
                    <Form>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <fieldset className="form-group">
                                    <label>First Name*</label>
                                    <Field className="form-control" type="text" name="firstName"  placeholder="Enter First Name" />
                                </fieldset>
                                <ErrorMessage name="firstName" component="p" className="text-danger" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <fieldset className="form-group">
                                    <label>Last Name*</label>
                                    <Field className="form-control" type="text" name="lastName" placeholder="Enter Last Name" />
                                </fieldset>
                                <ErrorMessage name="lastName" component="p" className="text-danger" />
                            </div>
                        </div>
                        <fieldset className="form-group">
                            <label>Email Address*</label>
                            <Field className="form-control" type="text" name="email" placeholder="Enter Email Address" />
                        </fieldset>
                        <ErrorMessage name="email" component="p" className="text-danger" />
                        <fieldset className="form-group">
                            <label>Phone Number*</label>
                            <Field className="form-control" type="text" name="phone" placeholder="Enter Phone Number" />
                        </fieldset>
                        <ErrorMessage name="phone" component="p" className="text-danger" />
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <fieldset className="form-group">
                                    <label>Password*</label>
                                    <Field className="form-control" type="password" name="password" placeholder="Enter Password" />
                                </fieldset>
                                <ErrorMessage name="password" component="p" className="text-danger" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <fieldset className="form-group">
                                    <label>Confirm Password*</label>
                                    <Field className="form-control" type="password" name="confirmPassword" placeholder="Re-Enter Password" />
                                </fieldset>
                                <ErrorMessage name="confirmPassword" component="p" className="text-danger" />
                            </div>
                        </div>
                        <AddressForm />
                        <div className="clearfix">
                            <button className="btn btn-info float-left" type="submit">Submit</button>
                            <button className="btn btn-info float-right" type="reset">Reset</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default SignUp