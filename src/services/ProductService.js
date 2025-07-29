import { httpClient } from "./httpClient";
import { HttpService } from "./HttpService";

class ProductService extends HttpService {
    constructor() {
        super(httpClient)
    }

    async getProducts(filters = {}) {
        let url = '/products'
    if (filters.category) {
        url += `/category/${filters.category}`
    }
    if (filters.sort) {
        url += `?sort=${filters.sort}`
    }
    return this.get(url)
    }

    async getCategories() {
        return this.get('/products/categories');
    }

    async getProduct(id) {
        return this.get(`/products/${id}`)
    }
}

export const productService = new ProductService();