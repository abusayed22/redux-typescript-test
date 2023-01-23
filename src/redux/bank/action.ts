import { Dispatch } from 'redux';
import { ActionT } from './actionType';


interface depositAction {
    type: ActionT.DEPOSIT,
    payload: number
}
interface withdrowAction {
    type: ActionT.WITHDROW,
    payload: number
}
interface bankruptAction {
    type:ActionT.BANKRUPT,
}

export type Action = bankruptAction | withdrowAction | depositAction


export const depositMoney = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
         dispatch({
            type: ActionT.DEPOSIT,
            payload: amount
        })
    }
}
export const withdrowMoney = (amount:number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionT.WITHDROW,
            payload: amount
        })
    }
}
export const bankruptMoney = () => {
    return (dispatch:Dispatch<Action>) => {
        dispatch({
            type:ActionT.BANKRUPT
        
        })
    }
}