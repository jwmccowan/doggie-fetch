export type Defined<T> = T extends undefined | null ? never : T;
