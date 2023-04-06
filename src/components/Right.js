import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import HdrAutoIcon from '@mui/icons-material/HdrAuto';
import "../index.css";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

const card = (
  <>
   <div>
   <>
      <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
        Admin Support <LockIcon />
      </Typography>
      <hr />
      <div>
        <div className="spacing">
          <Button
            variant="outlined"
            className="block"
            style={{ borderRadius: 50 }}
          >
            Admin panel
          </Button>
        </div>
        <div className="spacing">
          <Button
            variant="outlined"
            className="block"
            style={{ borderRadius: 50 }}
          >
            Support Community
          </Button>
        </div>
        <div className="spacing">
          <Button
            variant="outlined"
            className="block"
            style={{ borderRadius: 50 }}
          >
            Chat with us
          </Button>
        </div>
      </div>
      <hr />
      <div>
        <div style={{ textAlign: "center" }}>
          You are on <b>AppSumo</b> plan
        </div>
      </div>
    </>
   </div>

   <div>
   <>
      <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
        Admin Support <LockIcon />
      </Typography>
      <hr />
      <div>
        <div className="spacing">
          <Button
            variant="outlined"
            className="block"
            style={{ borderRadius: 50 }}
          >
            Admin panel
          </Button>
        </div>
        <div className="spacing">
          <Button
            variant="outlined"
            className="block"
            style={{ borderRadius: 50 }}
          >
            Support Community
          </Button>
        </div>
        <div className="spacing">
          <Button
            variant="outlined"
            className="block"
            style={{ borderRadius: 50 }}
          >
            Chat with us
          </Button>
        </div>
      </div>
      <hr />
      <div>
        <div style={{ textAlign: "center" }}>
          You are on <b>AppSumo</b> plan
        </div>
      </div>
    </>
   </div>
  
  </>




);

export default function Right() {
  return (
    <div className="container">
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
      </Box>

      

      

      
    </div>
  );
}
