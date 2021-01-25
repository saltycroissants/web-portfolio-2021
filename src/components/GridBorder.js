import React from 'react';
import Box from '@material-ui/core/Box';

let BACKGROUND_COLOR = "background.paper";
let BORDER_COLOR = "#9FBFD6"; 

const boxLine = () =>{
  let arr = [];
  for (let i =0; i<27; i++){
    arr[i] = <Box 
      fontSize = '16px'
      bgcolor= {BACKGROUND_COLOR}
      border= {1}
      m= {0}
      borderColor= {BORDER_COLOR}
      p = '1.2rem'
      borderLeft={0} borderBottom={0}/>
  }
  //console.log("length of arr" , arr.length);
  let arrRow = []; 
  for( let j = 0; j<16; j++ ){
    arrRow[j] = <Box display="flex" justifyContent="center" >{arr}</Box>
  }
  return arrRow
}

const BorderSubtractive = ({backgroundColor , borderColor}) => {

  BACKGROUND_COLOR = backgroundColor;
  BORDER_COLOR = borderColor;
  console.log("backgroundcolor is "+ backgroundColor);
  return (
    <>
      {boxLine()}
    </>
  );
}

export default BorderSubtractive;
