import { combineReducers } from "redux";
import hashes from "./hash-reducer";
import commits from "./commit-reducer";
import settings from "./settings-reducer";

export default combineReducers({ settings, commits, hashes });
