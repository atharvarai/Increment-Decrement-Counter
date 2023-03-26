export const incNumber = (num) => { // increment action to increase our current value
    return{
        type:"INCREMENT",
        payload: num
    }
}


export const decNumber = (num) => { // decrement action to decrease our current value
    return{
        type:"DECREMENT",
        payload: num
    }
}