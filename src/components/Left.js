import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Avatar from "@mui/material/Avatar";

import Typography from "@mui/material/Typography";

import { Grid, ListItem, ListItemButton } from "@mui/material";
import { Container } from "@mui/material";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import FeedIcon from '@mui/icons-material/Feed';
import GroupIcon from '@mui/icons-material/Group';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AddchartIcon from '@mui/icons-material/Addchart';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Box from '@mui/material/Box';

import "./left.css";

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);



  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  return (
    <Container>

      <div >
      <Card  sx={{ maxWidth: 345 }}>
        <div className="topMenu">
        <Grid container className="image" spacing={3}>
          <Grid item xs={3} className="avtar_wrapper">
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </Grid>
          <Grid item xs={8}>
            <Typography className="heading">
              Priyanka <span>Sharma</span>
              <br />
              Bussiness Analyst
         
            </Typography>
          </Grid>    
</Grid>
<hr/>



        <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <FeedIcon />
              </ListItemIcon>
              <ListItemText style={{color:"#FFFFFF"}} className="text1" primary="Your Feed" />
            </ListItemButton>
          </ListItem>



          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText cl primary="Groups" />
            </ListItemButton>
          </ListItem>


          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <ShowChartIcon />
              </ListItemIcon>
              <ListItemText primary="Activity" />
            </ListItemButton>
          </ListItem>



          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <AddchartIcon />
              </ListItemIcon>
              <ListItemText primary="Activity Matrics" />
            </ListItemButton>
          </ListItem>


          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Account Settings" />
            </ListItemButton>
          </ListItem>


          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
          </div>
      </Card>
      </div>
          
        

        <div className="mainconatiner">
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText  secondary="My Groups" />
            </ListItemButton>
          </ListItem>
        
             <div className="div3">
             <Typography variant="h6" component="h2" className="sidecontent">
             Business Analyst
         </Typography>
         <Typography variant="h" component="p">
             11 Member
         </Typography>
             </div>
      </CardContent>
      
    </Card>
        </div>


    </Container>






      

  );



  
}