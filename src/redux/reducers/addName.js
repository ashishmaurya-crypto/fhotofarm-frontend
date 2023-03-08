const initialState = [ 'ashish'] ;

const changeName = (state = initialState, action) => {
    switch(action.type){
        case "ADDNAME" : return [...state, action.payload];
        default : return state;
    }

}

export default changeName;