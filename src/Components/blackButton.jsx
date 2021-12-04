import React from 'react';
import Button from '@material-ui/core/Button';


const BlackButton = ({param}) => {
  return(
    <Button 
        style={{
            backgroundColor: '#fff', 
            color: '#000', 
            border: '1px solid black',
            width: '120px',
            marginRight: '10px'
        }}
    >{param}
    </Button>
  )
}

export default BlackButton;