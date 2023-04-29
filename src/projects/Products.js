import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import './Product.css'
function Products() {
  const [Api, setAPi] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:3004/data")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        let ApiValue = data;
        console.log(ApiValue);
        setAPi(ApiValue);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    
      <Grid container spacing={1}>
        {Api.map((data) => (
          <Grid  item md={3}>            
            <Card className="container_wrapper"  sx={{ display:'flex', flexDirection:'column' ,alignItems:'center', justifyContent:'center' }}>
              

              <div className="image_wrapper">
              <CardMedia sx={{ height: 182, width: 158 }}
                image={data.image}
              />
              </div>

            
              
             <div className="content_title" >
              <Typography className="content_name" >
                {data.title}
              </Typography>

              <Typography className="content_count" variant="body2"  >
                {data.count}
              </Typography>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
  
  );
}

export default Products;
