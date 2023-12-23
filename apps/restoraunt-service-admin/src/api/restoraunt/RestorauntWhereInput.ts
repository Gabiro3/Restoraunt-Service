import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type RestorauntWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  users?: UserListRelationFilter;
};
