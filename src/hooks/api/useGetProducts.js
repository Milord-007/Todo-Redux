import { useSelector } from "react-redux";
import { useQuery } from "react-query";

import { productsApi } from "../../api/products";

export function useGetProducts() {
    const selectedCategory = useSelector((store) => store.product.selectedCategory);

    return useQuery(["get-products", selectedCategory], async () => await productsApi.getProducts(selectedCategory));
}
