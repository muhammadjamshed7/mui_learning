import {TextField,Typography,Box} from '@mui/material'
const Typo = () => {
  return (
    <>
    <Box sx={{maxWidth:500,m:'10px auto',background:'lightgray' ,height:500,p:5,textAlign:'center'}}>

   <Typography gutterBottom variant='h3' sx={{background:'lightgreen',borderRadius:'40px'}}>TextField</Typography>
  
   <Box gutterBottom><TextField type='text' placeholder='Enter Name' variant='outlined' label="Name"/></Box>
   <Box gutterBottom><TextField type='password' placeholder='Password' variant='outlined' label="Password"   helperText="Some important Password"  /></Box>
   

   
   
   </Box>
    
      
    </>
    
  )
}

export default Typo
