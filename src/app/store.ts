import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import main from '../features/Main/reducer';
import perfomer from '../features/Perfomer/reducer';
import search from '../features/Search/reducer';

const reducers = combineReducers({
    main,
    perfomer,
    search
});

export type RootState = ReturnType<typeof reducers>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;