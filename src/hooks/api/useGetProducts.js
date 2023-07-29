import { useSelector } from "react-redux";
import { useQuery } from "react-query";

import { productsApi } from "../../api/products";

export function useGetProducts() {
    const selectedCategory = useSelector((store) => store.product.selectedCategory);
    const search = useSelector((store) => store.product.search);

    return useQuery(["get-products", selectedCategory,search], async () => await productsApi.getProducts(selectedCategory,search));
}
export const getCart =()=>{
  return  fetch('https://dummyjson.com/carts/1').then(res => res.json())

}

export function addToCard(id){
  return  fetch('https://dummyjson.com/carts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 1,
          products: [
            {
              id: id,
              quantity: 1,
            },
         
          ]
        })
      })
      .then(res => res.json())
}
// console.log(addToCard(id));
