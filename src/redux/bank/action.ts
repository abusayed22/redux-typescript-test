import { DEPOSIT, WITHDROW } from './actionType';


export const depositAction = (amount: number) => {
    return {
        type: DEPOSIT,
        payload: amount
    }
}
export const withdrowAction = (amount: number) => {
    return {
        type: WITHDROW, 
        payload: amount
    }
}