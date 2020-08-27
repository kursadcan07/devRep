const permissionReducer = (state = {
    userID:"EMPTY ID",
    userName:"EMPTY USERNAME",
    beginDateOfPermission:"EMPTY PERMISSION BEGIN",
    endDateOfPermission:"EMPTY PERMISSION END",
    selectVehicleUsageType:"EMPTY VEHICLE USAGE TYPE",
    priceOfTrainOrBus:"EMPTY PRICE OF BUS",
    totalDistanceOfIndividualCar:"TOTAL DISTANCE OF CAR",
    permissionDescription:"EMPTY PERMISSION DESCRIPTION",
    selectThePermissionType:"İZİN TİPİNİZ SEÇİNİZ"
}, action) => {
    switch (action.type) {
        case "SET_PERMISSION":
            state = {
                ...state,
                userID:action.payload.userID,
                permissionDescription: action.payload.permissionDescription,
                userName:action.payload.userName,
                beginDateOfPermission:action.payload.beginDateOfPermission,
                endDateOfPermission:action.payload.endDateOfPermission,
                selectVehicleUsageType:action.payload.selectVehicleUsageType,
                priceOfTrainOrBus:action.payload.priceOfTrainOrBus,
                totalDistanceOfIndividualCar:action.payload.totalDistanceOfIndividualCar,
                selectThePermissionType:action.payload.selectThePermissionType
            }
            break;
        case "REARRENGE_PERMISSION":
            state = {
                ...state
            }
            break;
        default:
            break;
    }
    return state;
}
export default permissionReducer;
/*


selectThePermissionType: "İzin Tipinizi Seçiniz",
    beginDateOfPermission: null,
    endDateOfPermission: null,
    selectVehicleUsageType: "Araç Kullanım Durumu Seçiniz",
    priceOfTrainOrBus: "",
    totalDistanceOfIndividualCar: "",
    displayEnterPriceBox: false,
    displayEnterDistanceBox: false,
    permissionDescription:""*/
