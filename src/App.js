import React from 'react'
import Products from './components/Products'
import { Grid } from '@mui/material'
import Right from './components/Right'
import Left from './components/Left'

const App = () => {
  return (
    <>
    <Grid container spacing={2}>
    <Grid item xs={3}> <Left /> </Grid>
    <Grid item xs={6}><Products /> </Grid>
    <Grid item xs={3}> <Right /> </Grid>
    

    </Grid>
    
    </>
  )
}

export default App