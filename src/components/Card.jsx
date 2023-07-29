import * as React from 'react';
import {useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { Button, message } from 'antd';
import { addToCard, useGetProducts } from '../hooks/api/useGetProducts';
import { getCart } from '../reducers/product';


export default function MediaCard({img,pricee,title,category,idxFunc,path}) {
  const {data} = useGetProducts()
  const products = data ? data.products : []
// console.log(products);

  return (
    <div>
    <Card sx={{maxHeight:"420px",maxWidth:"250px"}}>
      {/* {console.log(products)} */}
    <div style={{ width: "300px", height: "200px", display: "flex" }}>
    <Link to={`/show/${path}`}>
    <img src={img} alt="" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
     </Link>
  </div>
      <CardContent>
        
          {title}

        <Typography variant="body2" color="text.secondary">
              {category}
        </Typography>
      </CardContent>
      <CardActions className='flex justify-between' >
        <div>Цена: {pricee}$ </div>
        <AddToCardButton item={idxFunc}/>
      </CardActions>

    </Card>
 
  </div>
  );
}

function AddToCardButton({item}){
  const [loading,setLoading] =useState(false)
  const addProductToCard =()=>{
    setLoading(true)
    getCart(item.id).then(res=>{
      message.success(`${item.title}  has been added to card`)
      setLoading(false)

    })
  }
  return  <Button type='link' loading={loading} onClick={()=>{
    addProductToCard()
  }}>В корзину</Button>
}