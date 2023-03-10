import { Typography, Paper } from '@mui/material';
import React from 'react'


function Paperjs() {
  return (
    <div className='row mt-2 paper' width = "90%" >
       <Paper elevation="12" className = "col-sm-3" > 
        <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
       </Paper>
       <Paper elevation="12" className = "col-sm-3" > 
        <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
       </Paper>
       <Paper elevation="12" className = "col-sm-3" > 
        <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
       </Paper>
       <Paper elevation="12" className = "col-sm-3" > 
        <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
       </Paper>
    </div>
  )
}

export default Paperjs