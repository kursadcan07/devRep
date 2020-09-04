const userReducer = (state = {
    userID:0,
    userMail:"",
    personalName:"",
    userStatus:0,
    usersChiefID:0,
    chiefsName:"",
    generalManagersName:"",
    usersGeneralManagerID:0,
    userArea:0
}, action) => {
    switch (action.type) {
        case "SET_ONLINE_USER":
            state = {
                ...state,
                userID: action.payload.userID,
                userMail:action.payload.userMail,
                personalName:action.payload.personalName,
                userStatus:action.payload.userStatus,
                usersChiefID:action.payload.usersChiefID,
                chiefsName:action.payload.chiefsName,
                generalManagersName:action.payload.generalManagersName,
                usersGeneralManagerID:action.payload.usersGeneralManagerID,
                userArea:action.payload.userArea
            }
            break;
        default:
            break;
    }
    return state;
}
export default userReducer;
