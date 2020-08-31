const userReducer = (state = {
    userID:0,
    userMail:"",
    userName:"",
    userStatus:0,
    userArea:0
}, action) => {
    switch (action.type) {
        case "SET_ONLINE_USER":
            state = {
                ...state,
                userID: action.payload.userID,
                userMail:action.payload.userMail,
                userName:action.payload.userName,
                userStatus:action.payload.userStatus,
                userArea:action.payload.userArea
            }
            break;
        default:
            break;
    }
    return state;
}
export default userReducer;
