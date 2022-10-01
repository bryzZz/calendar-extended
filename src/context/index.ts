import moment from 'moment';

import { createCtx } from '../utils/helpers/createCtx';

interface AppContextState {
    selectedDate: moment.Moment;
    setSelectedDate: (date: moment.Moment) => void;
}

export const [useAppContext, AppContextProvider] = createCtx<AppContextState>();
