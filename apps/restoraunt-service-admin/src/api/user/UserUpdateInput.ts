import { OrderUpdateManyWithoutUsersInput } from "./OrderUpdateManyWithoutUsersInput";
import { RestorauntWhereUniqueInput } from "../restoraunt/RestorauntWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderUpdateManyWithoutUsersInput;
  password?: string;
  restoraunt?: RestorauntWhereUniqueInput | null;
  roles?: InputJsonValue;
  username?: string;
};
