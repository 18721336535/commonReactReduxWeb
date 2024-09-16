import { legacy_createStore as createStore } from "redux";
import { fileReducer } from "./fileReducer";

const store = createStore(fileReducer);

export default store;
