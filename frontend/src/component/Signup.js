import { useState } from "react";
import {
    Card,
    CardBody,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    Button,
    Flex,
  } from "@chakra-ui/react";

  import { Link } from "react-router-dom";

  import axios from "axios";
  import { useNavigate } from "react-router-dom";
  
  export const SignUp = () => {
    return (
      <Flex
        height="100vh"
        width="100vw"
        justifyContent="center"
        alignItems="center"
      >
        <Card
          border="1px solid"
          borderColor="gray.200"
          borderRadius={10}
          padding={12}
          boxShadow="md"
          maxWidth="500px"
        >
          <CardBody>
            <FormControl isRequired>
              <FormLabel
                fontSize={15}
                fontWeight="bold"
                color="blue.900"
              >
                First name
              </FormLabel>
              <Input width="60%" padding="5px" placeholder="First name" />
            </FormControl>
  
            <FormControl isRequired>
              <FormLabel
                fontSize={15}
                fontWeight="bold"
                color="blue.900"
              >
                Last name
              </FormLabel>
              <Input width="60%" padding="5px" placeholder="Last name" />
            </FormControl>
  
            <FormControl isRequired>
              <FormLabel
                fontSize={15}
                fontWeight="bold"
                color="blue.900"
              >
                Email address
              </FormLabel>
              <Input width="60%" padding="5px" placeholder="Your Email" />
            </FormControl>
  
            <FormControl>
              <FormLabel
                fontSize={15}
                fontWeight="bold"
                color="blue.900"
              >
                Phone Number
              </FormLabel>
              <Input
                type="number"
                maxlength="10"
                width="60%"
                padding="5px"
                placeholder="mobile number"
              />
            </FormControl>
  
            <FormControl isRequired>
              <FormLabel
                fontSize={15}
                fontWeight="bold"
                color="blue.900"
              >
                Username
              </FormLabel>
              <Input
                type="text"
                placeholder="Enter Username"
                width="60%"
                padding="5px"
              />
            </FormControl>
  
            <FormControl isRequired>
              <FormLabel
                fontSize={15}
                fontWeight="bold"
                color="blue.900"
              >
                Password
              </FormLabel>
              <Input
                type="password"
                placeholder="Enter password"
                width="60%"
                padding="5px"
              />
              <FormHelperText>
                The password should contain minimum 8 letters with one character,
                minimum one capital letter, and numbers.
              </FormHelperText>
            </FormControl>
  
            <FormControl isRequired>
              <FormLabel
                fontSize={13}
                fontWeight="bold"
                color="blue.900"
              >
                Confirm Password
              </FormLabel>
              <Input
                type="password"
                placeholder="Confirm password"
                width="60%"
                padding="5px"
              />
            </FormControl>
  
            <Flex justifyContent="center" mt={4}>
              <Button
                backgroundColor="teal"
                variant="solid"
                borderRadius={10}
                padding={8}
                width={80}
                _hover={
                    {backgroundColor:"darkorange"}
                }
              >
                Sign Up
              </Button> 
              <p>Already have an account?</p>
              <Link to="/signin" passHref={true}>SignIn</Link>
            </Flex>
          </CardBody>
        </Card>
      </Flex>
    );
  };