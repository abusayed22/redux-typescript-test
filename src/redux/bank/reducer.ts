import { ActionT } from './action';
import { Action } from './actionType';
import { initState } from './initState';



const reducer = (state = initState,aciton : ActionT) => {
    switch (action.type) {
        case Action.DEPOSIT:
            return state + 
    
        case Action.WITHDROW:
            return state - aciton.payload
        case Action.BANKRUPT:
            return 0
        default:
            return state;
    }
}
export default reducer;