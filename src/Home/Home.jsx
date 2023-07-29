import React from 'react'
import { useEffect,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from '../reducers/product';
function Home() {
  const {id}=useRef()
  console.log(id);
    const loading = useSelector(({ product }) => product.loading);

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts());
      
    }, [dispatch]);
    if (loading) return <div className='w-full h-screen flex justify-center items-center'>loading...</div>;
  return (
    <div className=''>
      <div className='max-w-[1450px] h-[150vh] bg-gray-50 mx-auto'>
       <p>Home</p>
      </div>
    </div>
  )
}

export default Home