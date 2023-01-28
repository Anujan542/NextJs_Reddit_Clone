import { Flex } from "@chakra-ui/react";
import React from "react";
import AuthModal from "../../Modal/AuthModal";
import AuthButton from "./AuthButton";

type RightConttentProps = {};

const RightConttent: React.FC<RightConttentProps> = () => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        <AuthButton />
      </Flex>
    </>
  );
};
export default RightConttent;
