import { Order } from "../order/Order";
import { Restoraunt } from "../restoraunt/Restoraunt";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  restoraunt?: Restoraunt | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
