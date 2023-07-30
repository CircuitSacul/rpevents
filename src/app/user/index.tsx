import { RootStackParamList } from "..";

import { useContext, useEffect } from "react";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Account from "./account";
import Authentication from "./authentication";

import { UserContext } from "../../contexts/auth";

export type UserModalProps = NativeStackScreenProps<RootStackParamList, "User">;

export default function UserModal({ navigation }: UserModalProps) {
  const user = useContext(UserContext);

  useEffect(() => {
    if (user !== null) {
      navigation.setOptions({ title: user.email! });
    } else {
      navigation.setOptions({ title: "Account" });
    }
  }, [user?.email]);

  if (user === null) {
    return <Authentication />;
  } else {
    return <Account user={user} />;
  }
}
