import React from "react";
import {
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Input,
  Button,
  NumberInput,
  Stack,
  Flex, // Import Flex for centering
} from "@chakra-ui/react";

export const ForgotPw = () => {
  return (
    <Flex
      height="100vh" // Full viewport height
      width="100vw" // Full viewport width
      justifyContent="center" // Center horizontally
      alignItems="center" // Center vertically
      bg="gray.50" // Light background color for the page
    >
      <Card
        border="1px solid"
        borderColor="gray.200"
        backgroundColor={"beige"}
        borderRadius="20px"
        boxShadow="lg"
        padding={20}
        maxWidth="500px"
        width="30%" // Full width of the card's container
      >
        <CardBody>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel fontSize="lg" fontWeight="bold" color="blue.900">
                Email address
              </FormLabel>
              <Input type="email" width="300px" padding="5px" placeholder="Enter your email id" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize="lg" fontWeight="bold" color="blue.900">
                Phone Number
              </FormLabel>
              
              <NumberInput max={10} min={10} width="100%" marginTop={2}>
                <Input placeholder="Enter Phone Number" width="300px" padding="5px"/>
              </NumberInput>
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize="lg" fontWeight="bold" color="blue.900">
                OTP
              </FormLabel>
              
              <NumberInput max={6} min={6} width="100%" marginTop={2}>
                <Input placeholder="Enter OTP" width="300px" padding="5px"/>
              </NumberInput>
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize="lg" fontWeight="bold" color="blue.900">
                New Password
              </FormLabel>
              <Input type="password" placeholder="Enter new password" width="300px" padding="5px" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize="lg" fontWeight="bold" color="blue.900">
                Re-enter New Password
              </FormLabel>
              <Input type="password" placeholder="Re-enter new password" width="300px" padding="5px"/>
            </FormControl>

            <Button
              mt={4}
              colorScheme="teal"
              variant="solid"
              borderRadius="20px"
              padding={10}
              width="100px"
              alignSelf={"center"}
              backgroundColor={"aqua"}
              outline={"none"}

              _hover={{
                backgroundColor: "teal.600",
                boxShadow: "md",
              }}
            >
              Submit
            </Button> 
          </Stack>
        </CardBody>
      </Card>
    </Flex>
  );
};


