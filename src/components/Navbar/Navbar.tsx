import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import RightConttent from "./RightContent/RightConttent";

const Navbar: React.FC = () => {
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex>
        <Image src="/images/redditFace.svg" height="30px" alt="logo" />
        <Image
          src="/images/redditText.svg"
          height="46px"
          alt="text"
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      <SearchInput />
      <RightConttent />
    </Flex>
  );
};
export default Navbar;
