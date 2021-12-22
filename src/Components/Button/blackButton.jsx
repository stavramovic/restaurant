import React from 'react';
import Button from '@material-ui/core/Button';


const BlackButton = ({param}) => {
  return(
    <Button 
        sx={{
            color: '#000',
            '&:hover': {backgroundColor: 'rgba(0, 0, 0, 0.1)', border: '1px solid black'}, 
            border: '1px solid black',
            width: '120px',
            marginRight: '10px'
        }}
    >{param}
    </Button>
  )
}

export default BlackButton;