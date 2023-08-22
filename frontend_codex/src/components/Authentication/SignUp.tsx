import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const toast = useToast();

  const setSignUp = async () => {
    setLoading(false);

    if (!password || !email || !name || !avatar) {
      toast({
        title: "Please Fill all the fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      const data1 = await axios.post(
        "/api/SignUp",
        { name, email, password, avatar },
        config
      );
      let data = {
        ...data1,
      };
      toast({
        title: "Login successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
    } catch (error) {
      toast({
        title: "Error occurred while Login",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  const postPicture = (e?: any) => {};

  return (
    <VStack spacing="5px">
      <FormControl>
        <FormLabel mb={"-0.5px"}>Name</FormLabel>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          mb="4px"
        />
        <FormLabel mb={"-0.5px"}>Email address</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          mb="4px"
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
        <FormLabel mb={"-0.5px"}>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <FormLabel mt={"8px"}>Upload your Picture</FormLabel>
        <Input type="file" p={1.5} accept="image/*" onChange={postPicture} />

        <Button w="80%" mt="8px" colorScheme="blue" onClick={setSignUp}>
          Submit
        </Button>
      </FormControl>
    </VStack>
  );
};

export default SignUp;
