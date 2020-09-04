import React from "react";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import StickyHeadTable from "./StickyHeadTable";
import {connect} from "react-redux";
import Switch from "@material-ui/core/Switch";
import Fade from 'react-reveal/Fade';
import {Bounce} from "react-reveal";

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
        isPermissionActive: state.permissionReducer.isPermissionActive,

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
            displayActives: true,
            checkedA: true,
            activePassiveHeader: "AKTİF İZİN TALEPLERİ"
        }
        this.ToggleButton = this.ToggleButton.bind(this);
        this.getData = this.getData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.bringHeader = this.bringHeader.bind(this);

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
        return api.get('/displayUsersPermissions/:userID', {
            params: {
                userID: this.props.userID,
                /*            isPermissionActive:this.props.isPermissionActive*/
            }
        }).then(
            function (response) {
                Object.keys(response.data.prevPerms).forEach(function (key) {
                    arr.push(response.data.prevPerms[key]);
                });
                console.log(response)
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
                console.log(arr2)
                return arr2

            })
    }

    handleChange(event) {
        this.setState({
            checkedA: event.target.checked
        })
        if (event.target.checked) {
            this.setState({
                activePassiveHeader: "AKTİF İZİN TALEPLERİ"
            })
        } else {
            this.setState({
                activePassiveHeader: "GEÇMİŞ İZİN TALEPLERİ"
            })
        }
    }

    bringHeader() {
    return(
            <Bounce>
                    {this.state.checkedA ? "AKTİF İZİN TALEPLERİ" : "GEÇMİŞ İZİN TALEPLERİ"}
            </Bounce>
    )   }


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
                    textAlign: "center",
                    flex: 2
                }}>

                    <h1 style={{
                        display: "flex",
                        flex: 2,
                        justifyContent: "center",
                        flexDirection: "column",
                        fontSize: "40px",
                        width: "100%"
                    }}>
                        {this.bringHeader()}
                    </h1>
                    <Switch
                        style={{display: "flex", margin: "0"}}
                        checked={this.state.checkedA}
                        onChange={this.handleChange}
                        color="primary"
                        name="checkedA"
                        inputProps={{'aria-label': 'primary checkbox'}}
                    />


                    {/* <BootstrapSwitchButton
                        width={300}
                        checked={this.state.displayActives}
                        onlabel={"AKTİF TALEPLER"}
                        offlabel={"GEÇMİŞ TALEPLER"}
                        onChange={() => this.ToggleButton()}
                    />*/}
                </div>
                <StickyHeadTable rows={this.state.data}/>
            </div>

        )
    }
}

export default connect(mapStateToProps)(PreviousPermissions);
