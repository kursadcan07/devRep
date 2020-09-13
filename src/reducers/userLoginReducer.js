const userReducer = (state = {
    userID:0,
    userSignature:undefined,
    proxyChiefID:undefined,
    chiefID:0,
    generalManagerID:0,
    displayStatus:0,
    userMail:"",
    personalName:"",
    userStatus:0,
    chiefsName:"",
    generalManagersName:"",
    userArea:0
}, action) => {
    switch (action.type) {
        case "SET_ONLINE_USER":
            state = {
                ...state,
                userID: action.payload.userID,
                chiefID:action.payload.chiefID,
                proxyChiefID:action.payload.proxyChiefID,

                generalManagerID:action.payload.generalManagerID,
                userMail:action.payload.userMail,
                personalName:action.payload.personalName,
                userStatus:action.payload.userStatus,
                chiefsName:action.payload.chiefsName,
                generalManagersName:action.payload.generalManagersName,
                userArea:action.payload.userArea
            }
            break;
        case "SET_DISPLAY_STATUS":
            state={
                ...state,
                displayStatus:action.payload,
            }
            break;
        case "SET_USERS_SIGNATURE":
            state={
                ...state,
                userSignature:action.payload,
            }
            break;
        default:
            break;
    }
    return state;
}
export default userReducer;
