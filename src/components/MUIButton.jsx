import React from 'react'
import {Button} from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';

function MUIButton() {
  return (
    <div>
      <div style={{marginBottom:'50px'}}>
      <Button variant='text'>Sign up</Button>
      <Button variant='contained'>Sign up</Button>
      <Button variant='outlined'>Sign up</Button>
      </div>

        <div style={{marginBottom:'50px'}}>
            <Button color='primary'>Login</Button>
            <Button color='error'>Login</Button>
            <Button color='info'>Login</Button>
            <Button color='success'>Login</Button>
            <Button color='warning'>Login</Button>
            <Button color='secondary' variant='contained'>Login</Button>
        </div>

        <div style={{marginBottom:'50px'}}>
            <Button size='small' variant='contained' color='warning'>Enter</Button>
            <Button size='medium' variant='contained' color='warning'>Enter</Button>
            <Button size='large' variant='contained' color='warning'>Enter</Button>
        </div>

        <div style={{marginBottom:'50px'}}>
        <Button size='large' 
        onClick={()=>alert("+1 artdi")}
        variant='contained' 
        color='warning'
        startIcon={<AddCircleIcon/>}
        >Increment</Button>
        </div>
    </div>
  )
}

export default MUIButton
