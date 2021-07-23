import React, {useState} from 'react';
import queryString from 'query-string';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import ShoppingService from '../apis/ShoppingService';

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const validate = (values) => {
        let errors = {}
        if(!values.email) {
            errors.email = 'Valid Email Address is Required'
        } else if (values.email.length<3) {
            errors.email = 'Enter a Valid Email Address'
        }
        if(!values.password) {
            errors.password = 'Please Enter Password'
        } else if(values.password.length<8 || values.password.length>32) {
            errors.password = 'Password should be minimum of 8 and maximum of 32 characters'
        }
        return errors
    }

    const onSubmit = (values) => {
        setEmail(values.email)
        setPassword(values.password)
        console.log(`${values.email} and ${values.password}`)
        ShoppingService.submitLogin(values.email, values.password)
        .then((response) => {
            if(response.status === 404) {
                props.history.push('/login?message=User%20with%20given%20email%20not%20registered.%20Please%20SignUp')
            } else if(response.status === 403) {
                props.history.push('/login?message=Incorrect%20password.%20Please%20try%20again')
            } else if(response.status === 200) {
                props.history.push('/')
            }
        })
    }

    return (
        <div>
            <h1 className="text-center">Ingresar</h1>
            {queryString.parse(props.location.search).message && <div className="text-dark text-center">{queryString.parse(props.location.search).message}</div>}
            <div className="container col-md-6 mb-3">
                <Formik
                    initialValues= {{ email, password }}
                    onSubmit={onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={validate}
                    enableReinitialize={true}
                >
                    <Form>
                        <fieldset className="form-group">
                            <label>Email Address*</label>
                            <Field className="form-control" type="text" name="email" placeholder="Enter Email Address" />
                        </fieldset>
                        <ErrorMessage name="email" component="p" className="text-danger" />
                        <fieldset className="form-group">
                                    <label>Password*</label>
                                    <Field className="form-control" type="password" name="password" placeholder="Enter Password" />
                        </fieldset>
                        <ErrorMessage name="password" component="p" className="text-danger" />
                        <button className="btn btn-info" type="submit">Login</button>    
                    </Form>
                </Formik>

            </div>
        </div>
    );
}

export default Login