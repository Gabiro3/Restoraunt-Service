import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  location: string | null;
  name: string | null;
  updatedAt: Date;
  user?: User | null;
};
