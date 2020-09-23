import { combineReducers } from "redux";
import hashes from "./hash-reducer";
import commits from "./commit-reducer";

export default combineReducers({ commits, hashes });
