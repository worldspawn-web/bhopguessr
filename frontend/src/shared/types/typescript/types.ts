export type Nullable<T> = T | null;
export type Nil = null | undefined;
export type PredicateFn<T> = (item: T, index: number, array: T[]) => void;
