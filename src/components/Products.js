import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import "../index.css";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import "../index.css";
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
    <div className="container">
      <Grid container spacing={3}>
        {Api.map((data) => (
          <Grid item xs={4}>
            <Card  sx={{ maxWidth: 345, minHeight: 300,display:'flex', flexDirection:'column' ,alignItems:'center', justifyContent:'center' }}>
              
              <CardMedia  className="image"
                sx={{ height: 186.5, width: 186.5 }}
                image={data.image}
              />
              <hr />
              
               <div>
              <Typography gutterBottom variant="h5" className="text" component="div">
                {data.title}
              </Typography>

              <Typography variant="body2" className="text" color="text.secondary">
                {data.count}
              </Typography>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Products;
