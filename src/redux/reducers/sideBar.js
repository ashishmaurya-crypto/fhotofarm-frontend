const initialState = false;

const sideBar = (state=initialState, action) => {
    switch(action.type){
        case "SIDEBAR" : return !state;
        default : return state;

    }
}

export default sideBar;