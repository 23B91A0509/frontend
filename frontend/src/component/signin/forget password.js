import React from "react";
import {
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Flex,
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
        backgroundColor="beige"
        borderRadius="20px"
        boxShadow="lg"
        padding={8}
        maxWidth="500px"
        width="90%" // Responsive width for the card
      >
        <CardBody>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel fontSize="lg" fontWeight="bold" color="blue.900">
                Email address
              </FormLabel>
              <Input
                type="email"
                placeholder="Enter your email id"
                variant="outline"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize="lg" fontWeight="bold" color="blue.900">
                Phone Number
              </FormLabel>
              <Input
                type="tel"
                placeholder="Enter Phone Number"
                variant="outline"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize="lg" fontWeight="bold" color="blue.900">
                OTP
              </FormLabel>
              <Input
                type="text"
                placeholder="Enter OTP"
                variant="outline"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize="lg" fontWeight="bold" color="blue.900">
                New Password
              </FormLabel>
              <Input
                type="password"
                placeholder="Enter new password"
                variant="outline"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize="lg" fontWeight="bold" color="blue.900">
                Re-enter New Password
              </FormLabel>
              <Input
                type="password"
                placeholder="Re-enter new password"
                variant="outline"
              />
            </FormControl>

            <Button
              mt={4}
              colorScheme="teal"
              variant="solid"
              borderRadius="20px"
              padding="8px 16px"
              alignSelf="center"
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