import type { Moment } from 'moment';

export type Tasks = {
    date: Moment;
    hour: number;
    tasks: { text: string }[];
}[];
