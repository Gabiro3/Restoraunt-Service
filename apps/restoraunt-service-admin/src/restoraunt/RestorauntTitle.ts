import { Restoraunt as TRestoraunt } from "../api/restoraunt/Restoraunt";

export const RESTORAUNT_TITLE_FIELD = "name";

export const RestorauntTitle = (record: TRestoraunt): string => {
  return record.name?.toString() || String(record.id);
};
