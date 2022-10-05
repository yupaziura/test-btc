const initState = {
    usd: 0,
    gbp: 0,
    eur: 0,
};

const reducer = (state = initState, action) => {
    switch(action.type) {
        case 'DATA_FETCHED':
           return {
            ...state,
            usd: action.payload.usd,
            gbp: action.payload.gbp,
            eur: action.payload.eur
           } 
        default:
            return {...state}
    }
}

export default reducer;

