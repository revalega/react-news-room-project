import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const storeFactory = () =>
    createStore(rootReducer, applyMiddleware(thunk));

export default storeFactory;
