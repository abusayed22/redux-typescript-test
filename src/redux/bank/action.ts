import { Action } from './actionType';

interface depositAction {
    type: Action.DEPOSIT,
    payload?: number
}
interface withdrowAction {
    type: Action.WITHDROW,
    payload?: number
}
interface bankruptAction {
    type:Action.BANKRUPT,
}
export type ActionT = bankruptAction | withdrowAction | depositAction

export const depositMoney = (amount: number) => {
    return {
        type: Action.DEPOSIT,
        payload: amount
    }
}
export const withdrowMoney = (amount:number) => {
    return {
        type: Action.WITHDROW,
        payload: amount
    }
}
export const bankruptMoney = () => {
    return {
        type: Action.BANKRUPT
    }
}