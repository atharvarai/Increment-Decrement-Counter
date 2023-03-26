import changeTheNumber from "./upDown";
import {combineReducers} from "redux"; // combineReducers hook combines all the reducers we need in our project

const rootReducer = combineReducers({ // combining all the reducers into rootReducer, here we've only made one reducer i.e. changeTheNumber
    changeTheNumber
});

export default rootReducer;