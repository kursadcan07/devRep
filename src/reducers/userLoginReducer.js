const userReducer = (state = {
    name: "zozan",
    age: 22
}, action) => {
    switch (action.type) {
        case "SET_ONLINE_USER":
            state = {
                ...state,
                name: action.payload
            }
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            }
            break;
        default:
            break;
    }
    return state;
}
export default userReducer;
