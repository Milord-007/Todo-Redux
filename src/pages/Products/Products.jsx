import React, { useCallback, useState } from "react";
import MediaCard from "../../components/Card";
import {useGetProducts} from "../../hooks/api/useGetProducts"
import {useGetCategories} from "../../hooks/api/useGetCategories"
import {setSearch, setSelectedCategory} from "../../store/products/products-reducer";

import debounce from 'lodash/debounce';

import { useDispatch, useSelector } from "react-redux";
import { Select, Spin, Table } from "antd";
import Menu from "antd/es/menu";
// import { Link } from "react-router-dom";

function Products() {
  
  const getSelectedCategory = useSelector((store) => store.product.selectedCategory);
  // const idx = useSelector((store) => store.product.idx);
  // console.log(idx);
   const [searchValue, setSearchValue] = useState("");
  // const [currentProducts,setcurrentProducts] = useState(1)
  // const [productsPerPage] = useState(10)
  const {data, isLoading} = useGetProducts();
  const {data: categories} = useGetCategories();



  const dispatch = useDispatch();
 
  const searchQuery = debounce((val)=>{
    dispatch(setSearch(val));
  }, 1000);

  const changeCategory = useCallback((el)=>{
    dispatch(setSelectedCategory(el));
  }, []);
  const changeSearch = useCallback((el) => {
    const value = el.target.value;
    setSearchValue(value)
    searchQuery(value)
  }, []);


  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
         <Spin spinning size="large"></Spin>
      </div>
    );
  }
  // const [currentProducts,setcurrentProducts] = useState(1);
  // const [productsPerPage] = useState(10);
//   const lastProductIndex = currentProducts * productsPerPage;
//   const firstProductIndex = lastProductIndex - productsPerPage;
//   const currentProduct = data.products.slice(firstProductIndex, lastProductIndex);
//   const pageNumbers = [];
  
//   for (let i = 1; i <= Math.ceil(currentProduct.length / productsPerPage); i++) {
//     pageNumbers.push(i);
//   }
// console.log(data);
  return (
    
    <div className="max-w-[1450px] mx-auto pt-5 pb-[30px] bg-[#ebebeb]">
      <div className="w-[90%] mx-auto ]">
        
        <Select className="w-[300px]" value={getSelectedCategory}  defaultValue="All" onChange = {changeCategory}>
          <Menu>All</Menu>
            {
                categories?.map((e)=>{
                    return <>
                        <Menu value={e}>{e}</Menu>
                    </>
                })
            }
        </Select>
        <input
          onChange={changeSearch}
          type="search"
          className="w-full p-2 border-2 mt-3 rounded-[12px]"
          placeholder="Search products..."
          value={searchValue}
        />
         <div className="pt-[10px] flex flex-wrap justify-center  gap-[30px]">
        {data?.products && Array.isArray(data?.products) ? (
          data?.products.map((el) => (
            <div key={el.id}>
         
              <MediaCard idxFunc={el} path={el.id} price={el.price} img={el.thumbnail} title={el.title} pricee={el.price}  category={el.category} />
             
            </div>
          ))
        ) : (
          <div>No items in the list</div>
        )}
         </div>
         <ul className="pagination">
         <div>

  </div>
      </ul>

      </div>


    </div>
  );
}

export default Products;
