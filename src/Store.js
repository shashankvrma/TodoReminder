import { combineReducers, createStore } from "redux";
import { todos } from "./Components/reducers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const reducers = {
    todos,
};

const rootReducers = combineReducers(reducers);
const persistConfig = {
    key: rootReducers,
    storage,
    stateReconciler: autoMergeLevel2
}
const persistedReducer = persistReducer(persistConfig,rootReducers);

export const configureStore = () => createStore(persistedReducer); 