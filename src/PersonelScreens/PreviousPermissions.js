import React from "react";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import StickyHeadTable from "./StickyHeadTable";
import {connect} from "react-redux";
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
        isPermissionActive:state.permissionReducer.isPermissionActive,

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
            data: [],
            displayActives: true
        }
        this.ToggleButton = this.ToggleButton.bind(this);
        this.getData = this.getData.bind(this);
    }

    ToggleButton() {
        this.setState((currentState) => ({
            displayActives: !this.state.displayActives
        }));
    }

    componentDidMount() {
        this.getData().then((data) => {
            this.setState({data: data})
        });
    }

    getData() {
        let arr = [];
        let arr2 = [];
        return api.get('/displayUsersPermissions/:userID/:isPermissionActive', {
            params: {
                userID: this.props.userID,
                isPermissionActive:this.props.isPermissionActive
            }
        }).then(
            function (response) {
                Object.keys(response.data.prevPerms).forEach(function (key) {
                    arr.push(response.data.prevPerms[key]);
                });

                for (let i = 0; i < arr.length; i++) {

                    arr2.push(createData(
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
                return arr2

            })
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
                <StickyHeadTable rows={this.state.data}/>
            </div>

        )
    }
}

export default connect(mapStateToProps)(PreviousPermissions);
