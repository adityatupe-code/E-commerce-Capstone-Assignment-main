import React from 'react'
import { Button, ButtonGroup } from '@mui/material';
import { useState } from 'react';



    
const Buttonincrementdec = () => {
    const [ counter, setCounter ] = useState(1);

    const handleIncrement = () => {
        setCounter(counter => counter + 1 );
    };

    const handleDecrement = () => {
        setCounter(counter => counter - 1 );
    };
  return (
    <ButtonGroup style={{marginTop:'30px',border:'1px solid grey',    padding: '5px 6px',
    paddingLeft:30}}>
      <Button style={{borderRadius:'50%',marginRight:'5'}}  onClick={() => handleDecrement()} disabled={counter == 0}>-</Button>
      <Button disabled style={{border:'1px solid grey'}}>{counter} </Button>
      <Button style={{borderRadius:'50%'}}   onClick={() => handleIncrement()}>+</Button>
    </ButtonGroup>
  )
}

export default Buttonincrementdec
