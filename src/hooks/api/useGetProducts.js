import { useSelector } from "react-redux";
import { useQuery } from "react-query";

import { productsApi } from "../../api/products";

export function useGetProducts() {
    const selectedCategory = useSelector((store) => store.product.selectedCategory);
    const search = useSelector((store) => store.product.search);

    return useQuery(["get-products", selectedCategory,search], async () => await productsApi.getProducts(selectedCategory,search));
}
