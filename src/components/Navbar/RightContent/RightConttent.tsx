import { Button, Flex } from "@chakra-ui/react";
import { signOut, User } from "firebase/auth";
import React from "react";
import { auth } from "../../../firebase/clientApp";

import AuthModal from "../../Modal/AuthModal";
import AuthButton from "./AuthButton";
import Icons from "./Icons";
import UserMenu from "./UserMenu";

type RightConttentProps = {
  user?: User | null;
};

const RightConttent: React.FC<RightConttentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        {user ? <Icons /> : <AuthButton />}
        <UserMenu user={user} />
      </Flex>
    </>
  );
};
export default RightConttent;
