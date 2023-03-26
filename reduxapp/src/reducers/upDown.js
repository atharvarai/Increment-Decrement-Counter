const initialState = 0;

const changeTheNumber = (state = initialState,action) =>{ // reducer function to perform the current 'action' choosen(i.e. inc or dec)
    switch(action.type){
        case "INCREMENT": return state+action.payload; // inc the current state by payload (payload is the number which we want to add to our current state)
        case "DECREMENT": return state-action.payload; // dec the current state by payload (payload is the number which we want to subtract to our current state)
        default: return state;
    }
}

export default changeTheNumber;