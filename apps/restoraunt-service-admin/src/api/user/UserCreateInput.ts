import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";
import { RestorauntWhereUniqueInput } from "../restoraunt/RestorauntWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderCreateNestedManyWithoutUsersInput;
  password: string;
  restoraunt?: RestorauntWhereUniqueInput | null;
  roles: InputJsonValue;
  username: string;
};
