import { object } from "zod";

import { validators } from "@shared/utils";

export const schema = object({
  sex: validators.getSelectRequiredValidationSchema(),
});
