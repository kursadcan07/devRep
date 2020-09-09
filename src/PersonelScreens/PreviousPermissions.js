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

        userStatus: state.userLoginReducer.userStatus,
        displayStatus: state.userLoginReducer.displayStatus,

        userID: state.userLoginReducer.userID,
        chiefID: state.userLoginReducer.chiefID,
        generalManagerID: state.userLoginReducer.generalManagerID,

        permissionDescription: state.permissionReducer.permissionDescription,
        personalName: state.userLoginReducer.personalName,
        beginDateOfPermission: state.permissionReducer.beginDateOfPermission,
        endDateOfPermission: state.permissionReducer.endDateOfPermission,
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
            isActive: true,
            activePassiveHeader: "AKTİF İZİN TALEPLERİ"
        }
        this.getData = this.getData.bind(this);
        this.getDataForChief = this.getDataForChief.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.bringHeader = this.bringHeader.bind(this);


        if (this.props.userStatus === 1) {
            this.getData().then((data) => {
                this.setState({data: data})
            });
        } else if (this.props.userStatus === 2) {
            if (this.props.displayStatus === 1) {
                this.getData(this.props.userID).then((data) => {
                    this.setState({data: data})
                });
            } else {
                this.getDataForChief(this.props.userID).then((data) => {
                    this.setState({data: data})
                });
            }
        } else if (this.props.userStatus === 3) {

            if (this.props.displayStatus === 1) {
                this.getData(this.props.userID).then((data) => {
                    this.setState({data: data})
                });
            } else {
                this.getDataForGeneralManager(this.props.userID).then((data) => {
                    this.setState({data: data})
                });
            }

        }
    }

    componentDidMount() {
        if (this.props.userStatus === 1) {
            this.getData(this.props.userID).then((data) => {
                this.setState({data: data})
            });
        } else if (this.props.userStatus === 2) {
            if (this.props.displayStatus === 1) {
                this.getData(this.props.userID).then((data) => {
                    this.setState({data: data})
                });
            } else {
                this.getDataForChief(this.props.userID).then((data) => {
                    this.setState({data: data})
                });
            }

        } else if (this.props.userStatus === 3) {
            if (this.props.displayStatus === 1) {
                this.getData(this.props.userID).then((data) => {
                    this.setState({data: data})
                });
            } else {
                this.getDataForGeneralManager(this.props.userID).then((data) => {
                    this.setState({data: data})
                });
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevState.isActive !== this.state.isActive) {

            if (this.props.userStatus === 1) {
                this.getData(this.props.userID).then((data) => {
                    this.setState({data: data})
                });
            } else if (this.props.userStatus === 2) {
                if (this.props.displayStatus === 1) {
                    this.getData(this.props.userID).then((data) => {
                        this.setState({data: data})
                    });
                } else {
                    this.getDataForChief(this.props.userID).then((data) => {
                        this.setState({data: data})
                    });
                }
            } else if (this.props.userStatus === 3) {

                if (this.props.displayStatus === 1) {
                    this.getData(this.props.userID).then((data) => {
                        this.setState({data: data})
                    });
                } else {
                    this.getDataForGeneralManager(this.props.userID).then((data) => {
                        this.setState({data: data})
                    });
                }

            }
        }

    }

    getData(userID) {
        let arr = [];
        let arr2 = [];
        return api.get('/displayUsersPermissions/' + userID + '/' + this.state.isActive)
            .then(
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

    getDataForChief(chiefID) {
        let arr = [];
        let arr2 = [];

        return api.get('/displayPermissionsForChief/' + chiefID + '/' + this.state.isActive)
            .then(
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

    getDataForGeneralManager(generalManagerID) {

        let arr = [];
        let arr2 = [];

        return api.get('/displayPermissionsForGeneralManager/' + generalManagerID + '/' + this.state.isActive)
            .then(
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

    handleChange(event) {
        this.setState({
            isActive: !this.state.isActive
        });
        if (event.target.checked) {
            this.setState({
                activePassiveHeader: "AKTİF İZİN TALEPLERİ"
            })
        } else {
            this.setState({
                activePassiveHeader: "GEÇMİŞ İZİN TALEPLERİ"
            })
        }

        this.getData();

    }

    bringHeader() {
        return (
            <Bounce>
                {this.state.isActive ? "AKTİF İZİN TALEPLERİ" : "GEÇMİŞ İZİN TALEPLERİ"}
            </Bounce>
        )
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
                        checked={this.state.isActive}
                        onChange={this.handleChange}
                        color="primary"
                        name="isActive"
                        inputProps={{'aria-label': 'primary checkbox'}}
                    />

                </div>
                <StickyHeadTable rows={this.state.data}/>
            </div>

        )
    }
}

export default connect(mapStateToProps)(PreviousPermissions);
