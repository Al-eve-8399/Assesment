import { TextField ,Button , Typography } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div style={{textAlign:'center'}}>
       <h1>Blog Name: <TextField placholder="Enter Blog name"></TextField></h1>
       <h1>Description: <TextField placholder="Enter Description"></TextField></h1>
       <h1>Author: <TextField placholder="Author Name"></TextField></h1>
       <Button variant='contained'color='error'>submit</Button>
    </div>
  )
}

export default Add