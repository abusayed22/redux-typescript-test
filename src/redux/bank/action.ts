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