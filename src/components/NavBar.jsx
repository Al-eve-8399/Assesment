import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color='success'>
        <Toolbar>
            <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Dashboard
            </Typography>

            <Button variant='contained'color="inherit"><Link to={'/'}>Home</Link></Button>
            <br/>
            <Button variant='contained'color="inherit"><Link to={'/add'}>Add Blog</Link></Button>




        </Toolbar>
        </AppBar>



    </Box>




  )
}

export default NavBar