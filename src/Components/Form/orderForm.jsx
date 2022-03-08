import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import FormContent from './formContent';
import ConfirmedOrder from './orderConfirmed';


function OrderForm(props) {

    //Close button
    const [closeButton, setCloseButton] = useState()

    const handleClick = () => {
        setCloseButton(false)
        props.closeOrderForm(closeButton)
    }

    //Passing order confirmation data
    const [confirmedOrder, setConfirmedOrder] = useState(false)
    const confirmOrderHandler = (order) => {
        setConfirmedOrder(order)
    }

    return (
        <>
            <div className='backdrop' style={{display: props.isFormVisible === true ? 'block' : 'none'}}></div>
            <Box
                component='form'
                sx={{
                    width: '800px',
                    height: '550px',
                    backgroundColor: '#FFF',
                    zIndex: '10',
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    display: props.isFormVisible === true ? 'flex' : 'none',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                noValidate
                autoComplete='off'
            >   
                <CloseIcon 
                    sx={{
                        position: 'absolute',
                        top: '10px', 
                        right: '10px',
                        cursor: 'pointer'
                    }}
                    onClick={handleClick}
                />

                {!confirmedOrder ? <FormContent confirmOrder={confirmOrderHandler}/> : <ConfirmedOrder />} 

            </Box>
        </>
    );
}

export default function OrderFormPortal(props) {
    
    const closeOrderFormHandler = (closeButton) => {
        props.closeForm(closeButton)
    }

    return (
        ReactDOM.createPortal(<OrderForm isFormVisible={props.isFormVisible} closeOrderForm={closeOrderFormHandler} />, document.getElementById('orderForm-root'))
    );
}
