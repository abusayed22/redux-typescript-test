import { DEPOSIT, WITHDROW } from './actionType';
import { initState } from './initState';

const reducer = (state = initState,aciton) => {
    switch (action.type) {
        case DEPOSIT:
            return state + aciton.payload
    
        case WITHDROW:
            return state - aciton.payload
        default:
            return state;
    }
}