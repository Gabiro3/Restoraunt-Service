import { RestorauntWhereInput } from "./RestorauntWhereInput";
import { RestorauntOrderByInput } from "./RestorauntOrderByInput";

export type RestorauntFindManyArgs = {
  where?: RestorauntWhereInput;
  orderBy?: Array<RestorauntOrderByInput>;
  skip?: number;
  take?: number;
};
