import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';


export default function OrderForm(props) {

    const [closeButton, setCloseButton] = useState()

    const handleClick = () => {
        setCloseButton(false)
        props.closeForm(closeButton)
    }

    const [value, setValue] = useState(new Date());

    return (
        <>
            <div className='backdrop' style={{display: props.isFormVisible === true ? 'block' : 'none'}}></div>
            <Box
                component='form'
                sx={{
                    width: '800px',
                    height: '450px',
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
                <TextField
                    required
                    id='outlined-required'
                    label='Unesite broj kreditne kartice'
                    sx={{width: '500px', margin: '30px'}}
                    inputProps={{ maxLength: 16 }}
                />
                <Box sx={{width: '500px', display: 'flex', justifyContent: 'space-between'}}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            inputFormat='MM/yy'
                            views={['month', 'year']}
                            minDate={new Date('01-12-2021')}
                            maxDate={new Date('01-01-2025')}
                            value={value}
                            onChange={setValue}
                            renderInput={(params) => <TextField {...params} helperText={null} />}
                        />
                    </LocalizationProvider>
                    <TextField
                        required
                        id='outlined-required'
                        label='CVC'
                        sx={{width: '100px'}}
                        inputProps={{ maxLength: 3 }}
                    />
                </Box>                    
                <Button
                    variant='outlined'
                    sx={{
                        color: 'rgb(249, 105, 14)',
                        '&:hover': {backgroundColor: 'rgba(249, 105, 14, 0.1)', border: '1px solid rgb(249, 105, 14)'},
                        border: '1px solid rgb(249, 105, 14)',
                        width: '150px',
                        fontSize: '14px',
                        padding: '5px',
                        marginTop: '30px'
                    }}
                >
                    Potvrdite porudžbinu
                </Button>
            </Box>
        </>
    );
}