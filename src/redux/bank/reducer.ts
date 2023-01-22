import { ActionT } from './action';
import { Action } from './actionType';
import { initState } from './initState';



const reducer = (state = initState,action : ActionT) => {
    switch (action.type) {
        case Action.DEPOSIT:
            return state + action.payload
    
        case Action.WITHDROW:
            return state - action.payload
        case Action.BANKRUPT:
            return 0
        default:
            return state;
    }
}
export default reducer;