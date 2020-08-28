import moment from "moment";

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
    priceOfTrainOrBus:"",
    totalDistanceOfIndividualCar:"",

    displayThePermissionName:"",
    setPermissionType:2

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
        default:
            break;
    }
    return state;
}
export default permissionReducer;
