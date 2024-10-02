const baseUrl = 'http://localhost:5124'; 

const ProductServiceFetch = {

    getAllProducts: async () => {
        const response = await fetch(`${baseUrl}/products`);
        return await response.json();
    },

    getProductById: async (id) => {
        const response = await fetch(`${baseUrl}/products/${id}`);
        return await response.json();
    },

    createProduct: async (product) => {
        const response = await fetch(`${baseUrl}/products`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        });
        return await response.json();
    },

    updateProduct: async (id, product) => {
        const response = await fetch(`${baseUrl}/products/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        });
        return await response.json();
    },
    
    deleteProduct: async (id) => {
        await fetch(`${baseUrl}/products/${id}`, {
            method: 'DELETE'
        });
    }
};

export default ProductServiceFetch;
