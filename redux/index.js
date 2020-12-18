import { combineReducers } from "redux";

import stocks from "./stocks";
import stock from "./stock";

export default combineReducers({ stocks, stock });
