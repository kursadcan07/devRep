import React from "react";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import StickyHeadTable from "./StickyHeadTable";
import {connect} from "react-redux";
const axios = require('axios');




const api = axios.create({
    baseURL: `http://localhost:5000`
})

const mapStateToProps = (state) => {
    return {

        userStatus: state.permissionReducer.userStatus,
        displayStatus: state.permissionReducer.displayStatus,

        userID: state.userLoginReducer.userID,
        permissionDescription: state.permissionReducer.permissionDescription,
        personalName: state.userLoginReducer.personalName,
        beginDateOfPermission: state.permissionReducer.beginDateOfPermission,
        endDateOfPermission: state.permissionReducer.endDateOfPermission,
        //demandDateOfPermission: moment().format("DD-MM-YYYY HH:mm:ss"),

        begDateSelectionStat: state.permissionReducer.begDateSelectionStat || false,
        endDateSelectionStat: state.permissionReducer.endDateSelectionStat || false,

        selectVehicleUsageName: state.permissionReducer.selectVehicleUsageName,
        selectVehicleUsageID: state.permissionReducer.selectVehicleUsageID,
        priceOfTrainOrBus: state.permissionReducer.priceOfTrainOrBus,
        totalDistanceOfIndividualCar: state.permissionReducer.totalDistanceOfIndividualCar,

        foldCode: state.permissionReducer.foldCode,
        areaCode: state.permissionReducer.areaCode,

        displayThePermissionName: state.permissionReducer.displayThePermissionName,
        setPermissionType: state.permissionReducer.setPermissionType,

    }
};

//AKTİF İZİN TALEPLERİ
/*const rows = [
    createData(1, '123', "22/22/2222", "22/22/2222", "22/22/2222", 1, 1, "İZNE ÇIKMANIZ UYGUN DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData(1, '124', "22/22/2222", "22/22/2222", "22/22/2222", 2, 2, "İZNE TATRİHİNI 22/22/2222 YE REVİZE EDİNİZ DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData(1, '125', "22/22/2222", "22/22/2222", "22/22/2222", 2, 3, "İZNE ÇIKMANIZ UYGUN DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData(1, '126', "22/22/2222", "22/22/2222", "22/22/2222", 2, 4, "İZNE ÇIKMANIZ UYGUN DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData(1, '127', "22/22/2222", "22/22/2222", "22/22/2222", 2, 5, "İZNE TATRİHİNI 22/22/2222 YE REVİZE EDİNİZ DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData(1, '128', "22/22/2222", "22/22/2222", "22/22/2222", 2, 6, "İZNE ÇIKMANIZ UYGUN DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData(1, '129', "22/22/2222", "22/22/2222", "22/22/2222", 2, 0, "İZNE ÇIKMANIZ UYGUN DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData(1, '130', "22/22/2222", "22/22/2222", "22/22/2222", 2, 0, "İZNE TATRİHİNI 22/22/2222 YE REVİZE EDİNİZ DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData(1, '131', "22/22/2222", "22/22/2222", "22/22/2222", 2, 0, "İZNE ÇIKMANIZ UYGUN DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
];*/

const rows1 = [
    createData(2, '123', "22/22/2222", "22/22/2222", "22/22/2222", 2, 1, "İZNE ÇIKMANIZ UYGUN DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData(2, '124', "22/22/2222", "22/22/2222", "22/22/2222", 2, 3, "İZNE TATRİHİNI 22/22/2222 YE REVİZE EDİNİZ DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData(2, '125', "22/22/2222", "22/22/2222", "22/22/2222", 2, 0, "İZNE ÇIKMANIZ UYGUN DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData(2, '126', "22/22/2222", "22/22/2222", "22/22/2222", 2, 0, "İZNE ÇIKMANIZ UYGUN DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData(2, '127', "22/22/2222", "22/22/2222", "22/22/2222", 2, 0, "İZNE TATRİHİNI 22/22/2222 YE REVİZE EDİNİZ DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData(2, '128', "22/22/2222", "22/22/2222", "22/22/2222", 2, 0, "İZNE ÇIKMANIZ UYGUN DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData(2, '129', "22/22/2222", "22/22/2222", "22/22/2222", 2, 0, "İZNE ÇIKMANIZ UYGUN DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData(2, '130', "22/22/2222", "22/22/2222", "22/22/2222", 2, 0, "İZNE TATRİHİNI 22/22/2222 YE REVİZE EDİNİZ DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData(2, '131', "22/22/2222", "22/22/2222", "22/22/2222", 2, 0, "İZNE ÇIKMANIZ UYGUN DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
];


/*function displayActiveDemands(displayActives) {
    if (displayActives) {
        return (
            <StickyHeadTable rows={rows}/>
        );
    } else {
        return (<StickyHeadTable rows={rows1}/>);
    }
}*/
function createData(userStatus, permissionID, beginDateOfPermission, endDateOfPermission, chiefConfirmStatus,generalManagerConfirmStatus, chiefsDescription, generalManagerDescription) {
    return {
        userStatus,
        permissionID,
        beginDateOfPermission,
        endDateOfPermission,
        chiefConfirmStatus,
        generalManagerConfirmStatus,
        chiefsDescription,
        generalManagerDescription
    };
}
function takeDataAndConvertDisplayForm(givenDataJson) {
    const arr = []
    const dataArr = []
    Object.keys(givenDataJson).forEach(key => arr.push({name: key, value: givenDataJson[key]}));
    for (let i = 0; i < arr.length; i++) {
        dataArr.push( createData(
            arr[i].value.userStatus,
            arr[i].value.permissionID,
            arr[i].value.beginDateOfPermission,
            arr[i].value.endDateOfPermission,
            arr[i].value.chiefConfirmStatus,
            arr[i].value.generalManagerConfirmStatus,
            arr[i].value.chiefsDescription,
            arr[i].value.generalManagerDescription
        ));
    }
    return dataArr;
}



let rows=  [];
class PreviousPermissions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayActives: true
        }
        this.ToggleButton = this.ToggleButton.bind(this);
        console.log(this.state.userID)
        api.get('/displayUsersPermissions/:userID', {
            params: {
                userID: this.state.userID
            }
        }).then(
            function (response) {
                rows =takeDataAndConvertDisplayForm(response.data.prevPerms);
               //    rows: takeDataAndConvertDisplayForm(response.data.prevPerms),
            }
        )
    }

    ToggleButton() {
        this.setState((currentState) => ({
            displayActives: !this.state.displayActives
        }));
    }

    render() {

        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                flex: 3
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                    flex: 2
                }}>
                    <BootstrapSwitchButton
                        width={300}
                        checked={this.state.displayActives}
                        onlabel={"AKTİF TALEPLER"}
                        offlabel={"GEÇMİŞ TALEPLER"}
                        onChange={() => this.ToggleButton()}
                    />
                </div>
                <StickyHeadTable rows={this.rows}/>
            </div>
        )
    }
}

export default connect(mapStateToProps)(PreviousPermissions);
