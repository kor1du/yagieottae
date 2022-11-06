import { combineReducers } from 'redux';
import webPath from './webPath/webPath';

const rootReducer = combineReducers({
	webPath,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
