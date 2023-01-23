import { Action } from './action';
import { ActionT } from './actionType';
import { initState } from './initState';



const reducer = (state = initState,action : Action) => {
    switch (action.type) {
        case ActionT.DEPOSIT:
            return state + action.payload
    
        case ActionT.WITHDROW:
            return state - action.payload
        case ActionT.BANKRUPT:
            return 0
        default:
            return state;
    }
}
export default reducer;