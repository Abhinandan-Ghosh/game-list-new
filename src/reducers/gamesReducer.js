const initState = {
    popular: [],
    newGame: [],
    upcoming: [],
    searched: []
}

export const gamesReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_GAMES':
            return { ...state }


        default:
            return { ...state }

    }
}