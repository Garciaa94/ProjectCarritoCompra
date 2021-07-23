class ShoppingService {
    submitSignUp(firstName, lastName, email, phone, password, confirmPassword, address, street, country, stateName, zipCode) {
        return fetch('http://localhost:3002/signup', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                firstName: firstName, 
                lastName: lastName, 
                email: email, 
                phone: phone, 
                password: password, 
                confirmPassword: confirmPassword, 
                address: address, 
                street: street, 
                country: country, 
                stateName: stateName, 
                zipCode: zipCode
            })
        });
    }

    submitLogin(email, password) {
        return fetch('http://localhost:3002/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
    }

    placeOrder(orderId, email, cart, address, street, country, stateName, zipCode, paymentType, nameOnCard, cardNumber, expiration, cvv) {
        return fetch('http://localhost:3002/order', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                orderId: orderId,
                email: email,
                cart: cart, 
                address: address, 
                street: street, 
                country: country, 
                stateName: stateName, 
                zipCode: zipCode,
                paymentType: paymentType, 
                nameOnCard: nameOnCard, 
                cardNumber: cardNumber, 
                expiration: expiration, 
                cvv: cvv
            })
        });
    }
}

export default new ShoppingService()