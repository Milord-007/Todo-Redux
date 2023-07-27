import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({img,pricee,title,category}) {
  
  return (
    <Card sx={{maxHeight:"420px",maxWidth:"250px"}}>
    <div style={{ width: "300px", height: "200px", display: "flex" }}>
    <img src={img} alt="" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
  </div>
      <CardContent>
        
          {title}

        <Typography variant="body2" color="text.secondary">
              {category}
        </Typography>
      </CardContent>
      <CardActions className='flex justify-between' >
        <div>{pricee}</div>
      <Button variant="outlined" size="small"  sx={{fontSize:"12px"}} color="success">В корзину</Button>
      </CardActions>
    </Card>
  );
}