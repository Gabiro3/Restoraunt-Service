import { User } from "../user/User";

export type Restoraunt = {
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  users?: Array<User>;
};
