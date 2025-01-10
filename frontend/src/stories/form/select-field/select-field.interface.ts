import type { TypeOf } from "zod";

import { schema } from "./select-field.schema.ts";

export type Schema = TypeOf<typeof schema>;
