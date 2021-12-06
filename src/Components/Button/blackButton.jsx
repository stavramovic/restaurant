import React from 'react';
import Button from '@material-ui/core/Button';


const BlackButton = ({param}) => {
  return(
    <Button 
        style={{
            color: '#000',
            '&:hover': {backgroundColor: 'rgba(249, 105, 14, 0.1)', border: '1px solid rgb(249, 105, 14)'}, 
            border: '1px solid black',
            width: '120px',
            marginRight: '10px'
        }}
    >{param}
    </Button>
  )
}

export default BlackButton;