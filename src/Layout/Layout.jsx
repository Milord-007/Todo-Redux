import React, { useEffect } from "react";
import "./Layout.css";
import { Link, Outlet } from "react-router-dom";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge, Drawer, InputNumber, Table } from "antd";
import {useState} from "react"
import { addToCard, getCart } from "../hooks/api/useGetProducts";

const Layout = () => {

  return (
    <>
      <div className="max-w-[1450px] mx-auto ">
        <div className="">
          <div className="w-full bg-[white]  flex justify-evenly items-center h-[60px] sticky top-0 z-10">
            <div className="w-[30%] md:hidden">
            <Link to={"/"}>
              <p className="text-[25px] text-[grey] font-[600]">E-commerce</p>
            </Link>
            </div>
              <div className="w-[30%] md:w-[50%] flex justify-center">
                <ul className="flex gap-[20px] text-[18px]   ">
                    <Link to={"/"}>
                    <li className="">Главная</li>
                    </Link>
                    <Link to={"/products"}>
                      <li>Товары</li>
                    </Link>
                </ul>
                 
              </div>

              <div className="w-[30%] md:w-[49%] flex justify-center gap-x-4 text-center">
                  <p>Dark mode</p>
                <AppCart/>
              </div>
          </div>
          <Outlet />
        </div>
        <footer className="pt-[60px] border-t border-[#FFFFFF4D]">
          <div className="max-w-[1450px] mx-auto">
 

        
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;

function AppCart() {
  const [cartDrawerOpen,setCartDrawerOpen]=useState(false)
  const {data} = addToCard()
  console.log(data);
  const [cartItem,setCartItem] = useState([])
  useEffect(()=>{
    getCart().then(res=>{
      setCartItem(res.products)
    })
  },[])
  return (
    <div>
<Badge count={7} onClick={()=>setCartDrawerOpen(true)}>
<ShoppingCartOutlined className="text-[20px] cursor-pointer"></ShoppingCartOutlined>
</Badge>
<Drawer open={cartDrawerOpen} onClose={()=>setCartDrawerOpen(false) } contentWrapperStyle={{width:500}} title="Ваш Корзина">
  <Table pagination={false}  columns={[
    {
    title:"Title",
    dataIndex:"title"

  },
  {
    title:"Price",
    dataIndex:"price",
    render:(value)=>{
      return <span>${value}</span>
    }
 

  },
  {
    title:"Quantity",
    dataIndex:"quantity",
    render:(value,record)=>{
      return <InputNumber min={0} defaultValue={value} onChange={(value)=>{
        setCartItem(pre=>pre.map((cart)=>{
         if(record.id==cart.id){
          cart.total = cart.price * value
         }
         return cart
        }))
      }}></InputNumber>
    }

  },
  {
    title:"Total",
    dataIndex:"total",
    render:(value)=>{
      return <span>${value}</span>
    }

  },
]}
dataSource={cartItem}
summary={(data)=>{
  const total = data.reduce((pre,current)=>{
    return pre+current.total
  },0)
  return <span >Total:{total}</span>
}}
/>
     


</Drawer>
      
    </div>
  )
}
