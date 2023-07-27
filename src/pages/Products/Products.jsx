import React from "react";
import MediaCard from "../../components/Card";
import { useQuery } from "react-query";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCategories, getAllCategories, getProducts, handleChangeCategory } from "../../reducers/product";
import { Select } from "antd";
import Menu from "antd/es/menu";
import { productsApi } from "../../api/products";





function Products() {
  const list = useSelector((store) => store.product.list);
  const {data} = useQuery("get-products",productsApi.getProducts)
  const categories = useSelector((store) => store.product.categories);
  const filterCategory = useSelector(({product})=> product.filterCategory)

  const loading = useSelector(({ product }) => product.loading);
  const dispatch = useDispatch();

  const fillter = (el)=>{
    dispatch(handleChangeCategory(el))
    dispatch(filterCategories())
  }
  useEffect(() => {
    // dispatch(getProducts());
    // dispatch(getAllCategories())
  }, [dispatch]);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    
    <div className="max-w-[1450px] mx-auto pt-5 pb-[30px]bg-[#ebebeb]">
      <div className="w-[90%] mx-auto ]">
        
        <Select className="w-[300px]" value={filterCategory}  onChange = {fillter}>
          <Menu value="All">All</Menu>
            {
                categories.map((e)=>{
                    return <>
                        <Menu value={e}>{e}</Menu>
                    </>
                })
            }
        </Select>
        <input
          type="search"
          className="w-full p-2 border-2 rounded-[12px]"
          placeholder="Search products"
        />
         <div className="pt-[10px] flex flex-wrap  gap-[30px]">
        {list && Array.isArray(list) ? (
          list.map((el, index) => (
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
