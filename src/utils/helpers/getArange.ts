import { getArray } from './getArray';

export const getArange = (length: number) => getArray(length, 0).map((_, i) => i);
