import { reducer } from "./reducer";
import {legacy_createStore,combineReducers} from "redux"



export const store=legacy_createStore(reducer)