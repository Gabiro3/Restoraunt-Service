import { UserCreateNestedManyWithoutRestorauntsInput } from "./UserCreateNestedManyWithoutRestorauntsInput";

export type RestorauntCreateInput = {
  name?: string | null;
  users?: UserCreateNestedManyWithoutRestorauntsInput;
};
