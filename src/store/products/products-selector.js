import { useSelector } from "react-redux";

export const getSelectedCategory = useSelector((store) => store.product.selectedCategory);
