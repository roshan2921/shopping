import { createStore } from "redux";
import Rootred from "./redux/reducers/main";


const store = createStore(
    Rootred
);


export default store;