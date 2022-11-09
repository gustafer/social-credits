import { atom } from "recoil";

export const isChinaLoverState = atom({
    key: 'isChinaLover', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});


export const isTaiwanLoverState = atom({
    key: 'isTaiwanLover', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});