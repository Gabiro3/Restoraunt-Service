import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  location?: string | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
