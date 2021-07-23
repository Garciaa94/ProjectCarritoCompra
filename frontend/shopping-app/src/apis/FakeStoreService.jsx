import axios from 'axios';

const FAKE_STORE_API = 'https://fakestoreapi.com';

class FakeStoreService {
    getProducts() {
        return axios.get(`${FAKE_STORE_API}/products`)
    }

    getProductDetails(productId) {
        return axios.get(`${FAKE_STORE_API}/products/${productId}`)
    }

    getProductsLimit(count) {
        return axios.get(`${FAKE_STORE_API}/products?limit=${count}`)
    }

    getCategories() {
        return axios.get(`${FAKE_STORE_API}/products/categories`)
    }

    getCarts() {
        return axios.get(`${FAKE_STORE_API}/carts`)
    }

    getUsers() {
        return axios.get(`${FAKE_STORE_API}/users`)
    }

    getProductsOfCategory(category) {
        return axios.get(`${FAKE_STORE_API}/products/category/${category}`)
    }

    getCartOfUser(id) {
        return axios.get(`${FAKE_STORE_API}/carts/user/${id}`)
    }


}

export default new FakeStoreService()