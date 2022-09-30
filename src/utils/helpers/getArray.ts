export const getArray = <T>(length: number, fill: T): T[] => Array.from<T>({ length }).fill(fill);
