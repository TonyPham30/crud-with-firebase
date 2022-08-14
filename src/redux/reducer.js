const initState = {}

function reducer(state=initState, action) {
    switch (action.type) {
        case 'AUTH_SIGNIN':
            return {
                // detail user
                displayName: state.user.displayName,
                email: state.user.email,
                photoURL: state.user.photoURL,
            }
        default:
            break;
    }
}

export default reducer