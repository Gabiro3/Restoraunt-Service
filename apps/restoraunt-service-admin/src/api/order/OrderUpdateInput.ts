import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  location?: string | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
