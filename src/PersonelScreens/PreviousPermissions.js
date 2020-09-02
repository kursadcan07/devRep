import React from "react";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import StickyHeadTable from "./StickyHeadTable";
import {connect} from "react-redux";
import {constants} from "react-spring/cookbook";

const axios = require('axios');

const api = axios.create({
    baseURL: `http://localhost:4000`
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

//
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


/*
 var json = {"active":{"label":"Active","value":"12"},"automatic":{"label":"Automatic","value":"8"},"waiting":{"label":"Waiting","value":"1"},"manual":{"label":"Manual","value":"3"}};
    var arr = [];
    Object.keys(json).forEach(function(key) {
      arr.push(json[key]);
    });
    return <ul>{arr.map(item => <MyAppChild key={item.label} label={item.label} value={item.value} />)}</ul>;




 */
function createData(userStatus, permissionID, beginDateOfPermission, endDateOfPermission, chiefConfirmStatus, generalManagerConfirmStatus, chiefsDescription, generalManagerDescription) {
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

class PreviousPermissions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayActives: true,
            rows:null,
        }
        this.arr2=[];

        api.get('/displayUsersPermissions/:userID', {
            params: {
                userID: this.props.userID
            }
        }).then(
            function (response) {
                console.log(response)
                var arr = [];
                Object.keys(response.data.prevPerms).forEach(function (key) {
                    arr.push(response.data.prevPerms[key]);
                });

                for (let i = 0; i < arr.length; i++) {

                    this.arr2.push(createData(
                        arr[i].userStatus,
                        arr[i].permissionID,
                        arr[i].beginDateOfPermission,
                        arr[i].endDateOfPermission,
                        arr[i].chiefConfirmStatus,
                        arr[i].generalManagerConfirmStatus,
                        arr[i].chiefsDescription,
                        arr[i].generalManagerDescription)
                    )
                }

            }

        )
        this.ToggleButton = this.ToggleButton.bind(this);
    }

    ToggleButton() {
        this.setState((currentState) => ({
            displayActives: !this.state.displayActives
        }));
    }

    render() {
        console.log(this.arr2);
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
                <div>
                    <StickyHeadTable rows={this.state.rows}/>
                </div>


            </div>

        )
    }
}

export default connect(mapStateToProps)(PreviousPermissions);
