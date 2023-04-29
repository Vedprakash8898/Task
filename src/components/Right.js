import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import HdrAutoIcon from '@mui/icons-material/HdrAuto';
import "../index.css";
import { Container } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

const card = (

   <div>
      <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
        Admin Support <LockIcon />
      </Typography>
      <hr />
      <div className="topwrapper">
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
   </div>

   
);

const card2 = (
  <div>
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
</div>
);

const card3 = (
  <div>
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
</div>
);

const card4 = (
  <div>
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
</div>
);
  
  




    







  

  

   
    

   
  






export default function Right() {
  return (

    <Container className="wrappercontainer">
    <div className="container">
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    </div>

    <div className="container">
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card2}</Card>
      </Box>
    </div>

    <div className="container">
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card3}</Card>
      </Box>
    </div>

    <div className="container">
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card4}</Card>
      </Box>
    </div>
    </Container>

      

      

      
  );
}
