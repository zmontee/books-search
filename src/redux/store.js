import {dataReducer} from "./reducers/dataReducer";
import {uiReducer} from "./reducers/uiReducer";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    data: dataReducer,
    ui: uiReducer
});

const store = createStore(reducers,
    compose(applyMiddleware(thunkMiddleware)
    )
);

window.store = store;

export default store;