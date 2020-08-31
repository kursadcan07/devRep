const permissionReducer = (state = {
    userID:"",

    userType:2,
    displayStatus:2,

    personalName:"ZOZAN YILDIRIM",
    demandDateOfPermission: new Date("2020-01-01T00:00"),

    beginDateOfPermission:new Date("2020-01-01T00:00"),
    endDateOfPermission: new Date("2020-01-01T00:00"),

    foldCode:25,
    areaCode:50,

    permissionDescription:"",

    selectVehicleUsageName:"Araç kullanım durumu",
    selectVehicleUsageID:"",

    personalCarUsage:false,
    priceOfTrainOrBus:null,
    totalDistanceOfIndividualCar:null,

    displayThePermissionName:"",
    setPermissionType:2,

    chiefConfirmStatus:-1,
    chiefsDescription:"",

    generalManagerConfirmStatus:-1,
    generalManagerDescription:"",

}, action) => {
    switch (action.type) {
        case "SET_PERMISSION":
            state = {
                ...state,
                userID:action.payload.userID,

                userType:action.payload.userType,
                displayStatus:action.payload.displayStatus,
                demandDateOfPermission:action.payload.demandDateOfPermission,

                beginDateOfPermission:action.payload.beginDateOfPermission,
                endDateOfPermission:action.payload.endDateOfPermission,

                foldCode:action.payload.foldCode,
                areaCode:action.payload.areaCode,

                selectVehicleUsageName:action.payload.selectVehicleUsageName,
                selectVehicleUsageID:action.payload.selectVehicleUsageID,

                permissionDescription:action.payload.permissionDescription,

                selectThePermissionType:action.payload.selectThePermissionType,

                personalCarUsage:action.payload.personalCarUsage,
                priceOfTrainOrBus:action.payload.priceOfTrainOrBus,
                totalDistanceOfIndividualCar:action.payload.totalDistanceOfIndividualCar,

                perTypeID:action.payload.perTypeID,
                displayThePermissionName:action.payload.displayThePermissionName,
                setPermissionType:action.payload.setPermissionType
            }
            break;
        case "CHIEFS_CONFIRM":
            state={
                ...state,
                chiefConfirmStatus:action.payload.chiefConfirmStatus,
                generalManagerDescription:action.payload.generalManagerDescription
            }
            break;
        case "GENERAL_MANAGER_CONFIRM":
            state={
                ...state,
                generalManagerConfirmStatus:action.payload.generalManagerConfirmStatus,
                generalManagerDescription:action.payload.generalManagerDescription
            }
            break;
        default:
            break;
    }
    return state;
}
export default permissionReducer;
