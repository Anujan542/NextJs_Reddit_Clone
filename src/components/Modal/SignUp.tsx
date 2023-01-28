import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../atoms/authModalAtom";

const SignUp: React.FC = () => {
  const setAuthModalValue = useSetRecoilState(authModalState);

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = () => {};

  const hanldeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        required
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formValue.email}
        onChange={hanldeChange}
        fontSize="10pt"
        _placeholder={{
          color: "gray.500",
        }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="gray.50"
        mt={2}
      />
      <Input
        required
        type="password"
        name="password"
        placeholder="Enter Password"
        value={formValue.password}
        onChange={hanldeChange}
        fontSize="10pt"
        _placeholder={{
          color: "gray.500",
        }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="gray.50"
        mt={2}
      />
      <Input
        required
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formValue.confirmPassword}
        onChange={hanldeChange}
        fontSize="10pt"
        _placeholder={{
          color: "gray.500",
        }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="gray.50"
        mt={2}
      />
      <Button width="100%" height="36px" mt={2} mb={2} type="submit">
        Sign
      </Button>
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>Already a redditor?</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() => {
            setAuthModalValue((prev) => ({
              ...prev,
              view: "login",
            }));
          }}
        >
          Login
        </Text>
      </Flex>
    </form>
  );
};
export default SignUp;
