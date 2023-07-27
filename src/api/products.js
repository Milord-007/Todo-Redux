export const productsApi = {
    getProducts: async (category) => {
        let res = await fetch(
            category
            ? `https://dummyjson.com/products/category/${category}`
            : `https://dummyjson.com/products?category=${category}`
        );
        return await res.json();
    },

    getCategories: async () => {
        let res = await fetch("https://dummyjson.com/products/categories");
        return await res.json();
    }
}
