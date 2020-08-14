export const initialState = {
    user: null,
    playList: [],
    playing: false,
    item: null,
    token: 'BQA2Xw8G1LUyINNclJ7Czhj0k9lXahMxHeRa46ocxeoA2CUiNSbGCOBYN91g2621pDSHTJAXQ-RXUCeKyZQYtj-0MSSynohxZUo8UPlr0LaPmFrlWJ77R3GaO90hXkAmXuyzqNDmS_mZFZSdDNAoQnCvZMv8Bjq10ybStJLo1B8qtDElYrjs',
}

const reducer = (state, action) => {
    console.log('action', action);

    //Action -> type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
            
        default:
            return state;
    }
};

export default reducer;