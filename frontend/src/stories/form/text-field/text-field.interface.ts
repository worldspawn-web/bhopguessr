import type { TypeOf } from "zod";

import { schema } from "./text-field.schema";

export type Schema = TypeOf<typeof schema>;
