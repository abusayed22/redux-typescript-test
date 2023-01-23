import {combineReducers} from "redux"
import reducer from "./bank/reducer"



const rootReducer = combineReducers({
    bank: reducer
})
export default rootReducer;