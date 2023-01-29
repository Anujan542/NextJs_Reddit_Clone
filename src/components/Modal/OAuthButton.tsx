import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import React from "react";
import { auth } from "../../firebase/clientApp";

const OAuthButton: React.FC = () => {
  const [signInWithGoogle, user, lodaing, error] = useSignInWithGoogle(auth);

  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button
        variant="oauth"
        mb={2}
        isLoading={lodaing}
        onClick={() => {
          signInWithGoogle();
        }}
      >
        <Image src="/images/googlelogo.png" height="20px" mr={4} alt="logo" />
        Continue With Google
      </Button>
      <Button variant="oauth">Some Other Providers</Button>
      {error && <Text color="red">{error?.message}</Text>}
    </Flex>
  );
};
export default OAuthButton;
