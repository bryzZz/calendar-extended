import { makeAutoObservable } from 'mobx';
import type { Moment } from 'moment';

import type { Tasks as TasksType } from '../types';

class Tasks {
    tasks: TasksType = [];

    constructor() {
        makeAutoObservable(this);
    }

    handleAddTask(day: Moment, hour: number, text: string) {
        this.tasks.push({ date: day, hour, tasks: [{ text }] });
    }
}

export const tasks = new Tasks();
