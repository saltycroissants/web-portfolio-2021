import React from 'react';
import Box from '@material-ui/core/Box';

const defaultProps = {
  fontsize : '16px',
  bgcolor: 'background.paper',
  border: 1,
  m: 0,
  borderColor: '#9FBFD6',
  style: { width: '2.4rem', height: '2.4rem' },
};

const boxLine = () =>{
  let arr = [];
  for (let i =0; i<27; i++){
    arr[i] = <Box {...defaultProps} borderLeft={0} borderBottom={0}/>
  }
  //console.log("length of arr" , arr.length);
  let arrRow = []; 
  for( let j = 0; j<16; j++ ){
    arrRow[j] = <Box display="flex" justifyContent="center">{arr}</Box>
  }
  return arrRow
}

export default function BorderSubtractive() {
  return (
    <>
      {boxLine()}
    </>
  );
}
