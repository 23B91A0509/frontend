import {
    Box,
    Card,
    CardBody,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Button,
    VStack,
  } from '@chakra-ui/react';

import axios from 'axios'
import { useState } from 'react';
import { api } from '../actions/api';
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
  
  
  export const Signin = () => {
    const [email,setMail] = useState("")
    const [password,setPassword] = useState("")
    const nav=useNavigate()


    const Signin=async()=>{
    await axios.post(api+"/signin",{email,password})
        .then((res)=>{
          console.log(res.data)
            if(res.data.message){
                console.log(res?.data?.values)
                alert("login sucessfully")
            } else {
                alert("user not found")
                // window.location.href="/signup"
                nav('/signup')
            }
        })
        .catch((e)=>console.log(e))
    }

    return (
      <Box
        minH="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Card maxW="md" mx="auto" mt={0} p={6} borderRadius="md">
          <CardBody>
            <Box
              p={12} // Increased padding to 12
              border="1px solid #ddd"
              boxShadow={"inherit"}
              padding="50px"
              borderRadius="20px"
              bg="white"
            >
              <VStack spacing={5} align="stretch">
                <FormControl>
                  <FormLabel fontWeight={"bold"}>Email address:</FormLabel>
                  <Input type="email" width="100%" padding="7px" placeholder="Enter your email" onChange={(e)=>setMail(e.target.value)} size="lg" variant="outline" />
                  <FormHelperText>We'll never share your email.</FormHelperText> <br/>
                </FormControl>
  
                <FormControl>
                  <FormLabel fontWeight={"bold"}>Password</FormLabel>
                  <Input type="password" width="100%" padding="7px" placeholder="Enter your password" size="lg" variant="outline" onChange={(e)=>setPassword(e.target.value)}/>
                  <FormHelperText>We'll never share your password.</FormHelperText> <br/>
                </FormControl>
  
                <Button
                  colorScheme="teal"
                  size="lg"
                  mt={4}
                  borderRadius="15px"
                  backgroundColor={"teal"}
                  color={"white"}
                  padding="8px"
                  width="30%"
                  outline={"none"}
                  alignSelf={"center"}
                  onClick={Signin}
            
                >

                  Sign In
                </Button> 
                <p>Dont have an account?</p>
                <Link to="/signup" passHref={true}>SignUp</Link>
              </VStack>
            </Box>
          </CardBody>
        </Card>
      </Box>
    );
  };