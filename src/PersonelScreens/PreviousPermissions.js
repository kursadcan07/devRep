import React from "react";
import StickyHeadTable from "./StickyHeadTable";
import {connect} from "react-redux";
import Switch from "@material-ui/core/Switch";
import {Bounce} from "react-reveal";
import {Link} from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

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
        proxyChiefID:state.userLoginReducer.proxyChiefID,
        generalManagerID: state.userLoginReducer.generalManagerID,
        chiefConfirmStatus:state.permissionReducer.chiefConfirmStatus,

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
        this.getDataForProxyChief=this.getDataForProxyChief.bind(this);
        this.displayBackButton=this.displayBackButton.bind(this);
        this.getDataForProxyGeneralManager=this.getDataForProxyGeneralManager.bind(this);

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
                if(this.props.proxyChiefID!==-1000){
                    this.getDataForChief(this.props.userID).then((data) => {
                        this.setState({data: data})
                    });
                }else{
                    this.getDataForProxyChief(this.props.userID).then((data) => {
                        this.setState({data: data})
                    });

                }

            }
        } else if (this.props.userStatus === 3) {

            if (this.props.displayStatus === 1) {
                this.getData(this.props.userID).then((data) => {
                    this.setState({data: data})
                });
            } else {
                if(this.props.proxyGeneralManagerID!==-1000){
                    this.getDataForGeneralManager(this.props.userID).then((data) => {
                        this.setState({data: data})
                    });
                }
                else{
                    this.getDataForProxyGeneralManager(this.props.userID).then((data) => {
                        this.setState({data: data})
                    });
                }

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
                if(this.props.proxyChiefID!==-1000){
                    this.getDataForChief(this.props.userID).then((data) => {
                        this.setState({data: data})
                    });
                }else{
                    this.getDataForProxyChief(this.props.userID).then((data) => {
                        this.setState({data: data})
                    });

                }
            }

        } else if (this.props.userStatus === 3) {
            if (this.props.displayStatus === 1) {
                this.getData(this.props.userID).then((data) => {
                    this.setState({data: data})
                });
            } else {
                if(this.props.proxyGeneralManagerID!==-1000){
                    this.getDataForGeneralManager(this.props.userID).then((data) => {
                        this.setState({data: data})
                    });
                }else{
                    this.getDataForProxyGeneralManager(this.props.userID).then((data) => {
                        this.setState({data: data})
                    });
                }

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
                    if(this.props.proxyChiefID!==-1000){
                        this.getDataForChief(this.props.userID).then((data) => {
                            this.setState({data: data})
                        });
                    }else{
                        this.getDataForProxyChief(this.props.userID).then((data) => {
                            this.setState({data: data})
                        });

                    }
                }
            } else if (this.props.userStatus === 3) {

                if (this.props.displayStatus === 1) {
                    this.getData(this.props.userID).then((data) => {
                        this.setState({data: data})
                    });
                } else {
                    if(this.props.proxyGeneralManagerID !==-1000){
                        this.getDataForGeneralManager(this.props.userID).then((data) => {
                            this.setState({data: data})
                        });
                    }else{
                        this.getDataForProxyGeneralManager(this.props.userID).then((data) => {
                            this.setState({data: data})
                        });
                    }
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

        console.log("DERLER Kİİİİ")
        console.log(this.props)


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

    getDataForProxyChief(proxyChiefID) {

        let arr = [];
        let arr2 = [];

        return api.get('/displayPermissionsForProxyChief/' + proxyChiefID + '/' + this.state.isActive)
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

    getDataForProxyGeneralManager(proxyGeneralManagerID) {

        let arr = [];
        let arr2 = [];

        return api.get('/displayPermissionsForProxyGeneralManager/' + proxyGeneralManagerID + '/' + this.state.isActive)
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

   displayBackButton() {

        return(
            <div style={{
                display: "flex",
                flex: 1,
                marginTop: "4px",
                paddingLeft:"100px",
                marginBottom: "4px"
            }}>
                <Link to={this.props.userStatus===1 ? "/PersonelScreens/PersonelNavigation" :"/PersonelScreens/NavigateTheChief"  }>
                    <Fab style={{
                        display:"flex",
                        width: "70px",
                        height: "70px",
                    }}>
                        <ArrowBackIcon/>
                    </Fab>
                </Link>
            </div>
        )
    }

    render() {
        console.log("------------")
        console.log(this.state.data)
        console.log("------------")
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
                {this.displayBackButton()}
            </div>

        )
    }
}

export default connect(mapStateToProps)(PreviousPermissions);
