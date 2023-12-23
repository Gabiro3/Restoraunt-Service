import { UserUpdateManyWithoutRestorauntsInput } from "./UserUpdateManyWithoutRestorauntsInput";

export type RestorauntUpdateInput = {
  name?: string | null;
  users?: UserUpdateManyWithoutRestorauntsInput;
};
