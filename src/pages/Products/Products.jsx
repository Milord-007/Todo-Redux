import React, { useCallback } from "react";
import MediaCard from "../../components/Card";
import {useGetProducts} from "../../hooks/api/useGetProducts"
import {useGetCategories} from "../../hooks/api/useGetCategories"
import {setSearch, setSelectedCategory} from "../../store/products/products-reducer";

import { useDispatch, useSelector } from "react-redux";
import { Select } from "antd";
import Menu from "antd/es/menu";


function Products() {
  const getSelectedCategory = useSelector((store) => store.product.selectedCategory);
  const search = useSelector((store) => store.product.search);

  const {data, isLoading} = useGetProducts();
  const {data: categories} = useGetCategories();

  const dispatch = useDispatch();

  const changeCategory = useCallback((el)=>{
    dispatch(setSelectedCategory(el));
  }, []);
  const changeSearch = useCallback((el)=>{
    console.log(el.target.value);
    dispatch(setSearch(el.target.value));
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    
    <div className="max-w-[1450px] mx-auto pt-5 pb-[30px]bg-[#ebebeb]">
      <div className="w-[90%] mx-auto ]">
        
        <Select className="w-[300px]" value={getSelectedCategory}  onChange = {changeCategory}>
          <Menu>All</Menu>
            {
                categories?.map((category)=>{
                    return <>
                        <Menu value={category}>{category}</Menu>
                    </>
                })
            }
        </Select>
        <input
        onChange={changeSearch}
          type="search"
          className="w-full p-2 border-2 rounded-[12px]"
          placeholder="Search products"
          value={search|| ""}
        />
         <div className="pt-[10px] flex flex-wrap  gap-[30px]">
        {data?.products && Array.isArray(data?.products) ? (
          data?.products.map((el, index) => (
            <div key={index}>
              <MediaCard price={el.price} img={el.images[2]} title={el.title} pricee={el.price}  category={el.category} />
            </div>
          ))
        ) : (
          <div>No items in the list</div>
        )}
         </div>

      </div>
    </div>
  );
}

export default Products;
