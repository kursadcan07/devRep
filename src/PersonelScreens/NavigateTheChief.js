import React from "react";
import {Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Bounce, Slide} from "react-reveal";
import {connect} from "react-redux";

import setDisplayStatusAction from "../actions/setDisplayStatusAction";
import Fab from "@material-ui/core/Fab";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import blue from "@material-ui/core/colors/blue";



const mapDispatchToProps = (dispatch) => {
    return {
        setDisplayStatus: (displayStatus) => {
            dispatch(setDisplayStatusAction(displayStatus));
        }
    }
};

const mapStateToProps = (state) => {
    return {

        userStatus: state.userLoginReducer.userStatus,
        displayStatus: state.userLoginReducer.displayStatus,

        userID: state.userLoginReducer.userID,
        chiefID: state.userLoginReducer.chiefID,
        generalManagerID: state.userLoginReducer.generalManagerID,
        proxyChiefID:state.userLoginReducer.proxyChiefID,
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

function displayTheManagementBasedOperations(flag,props) {
    const crateDemandIcon = require('./SystemImages/FillingFormImage.svg');
    const crateReplacementIcon = require('./SystemImages/ManagerReplacement.svg');
    if (flag) {
        return (
            <Grid container spacing={1} style={{justifyContent: "center"}}>
                <Grid item xs={10} sm={8} style={{justifyContent: "center"}}>
                    <Bounce left>
                            <button style={{display: "flex", flex: 0.5, width: "100%"}}
                                    onClick={()=>{
                                        props.history.push({
                                            pathname: '/PersonelScreens/PreviousPermissons',
                                        })
                                    }}
                                    type="button" className="btn btn-primary btn-block">
                                <img alt="IconEye"
                                     style={{display: "flex", flexDirection: "left", width: "70px", height: "70px"}}
                                     src={crateDemandIcon}/>
                                <h1 style={{
                                    display: "flex",
                                    flexDirection: "flex-start",
                                    fontSize: "16px",
                                    margin: "auto"
                                }}>
                                    İZİN TALEPLERİ
                                </h1>
                            </button>
                    </Bounce>
                </Grid>
                {props.proxyChiefID!==-1000 &&
                <Grid item xs={10} sm={8} style={{justifyContent: "center"}}>
                    <Bounce right>
                        {/*  ----------------------------------------------- */}
                        <button style={{display: "flex", flex: 0.5, width: "100%"}}
                                onClick={()=>{
                                    props.history.push({
                                        pathname: '/PersonelScreens/GenerateProxyManager',
                                    })
                                }}
                                type="button" className="btn btn-primary btn-block">
                            <img alt="IconEye"
                                 style={{display: "flex", flexDirection: "left", width: "70px", height: "70px"}}
                                 src={crateReplacementIcon}/>
                            <h1 style={{
                                display: "flex",
                                flexDirection: "flex-start",
                                fontSize: "16px",
                                margin: "auto"
                            }}>
                                VEKALET SİSTEMİ
                            </h1>
                        </button>

                    </Bounce>
                </Grid>}

            </Grid>
        )
    } else {
        return null;
    }
}

class NavigateTheChief extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedIndividualOperations: false,
            selectedManagementOperations: false
        }
        this.handleIndividualOperationSelection = this.handleIndividualOperationSelection.bind(this);
        this.handleManagementOrientedOperations = this.handleManagementOrientedOperations.bind(this);
        this.displayBackButton = this.displayBackButton.bind(this);
    }

    handleIndividualOperationSelection(event) {
        this.setState({
            selectedIndividualOperations: !this.state.selectedIndividualOperations,
        })

    }

    handleManagementOrientedOperations(event) {

        this.setState({
            selectedManagementOperations: !this.state.selectedManagementOperations,
        })
        this.props.setDisplayStatus(2);

    }
     displayBackButton()
    {
        return (
            <div
                style={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    marginBottom:"10px",
                    marginTop:"500px",
                }}>
                <Link
                    to={"/"}>
                    <Fab style={{
                        display: "flex",
                        width: "70px",
                        height: "70px",
                        backgroundColor:"transparent",
                    }}>
                        <PowerSettingsNewIcon style={{ color: blue[600] }}/>
                    </Fab>
                </Link>
            </div>
        )
    }


    render() {
        const managementIcon = require('./SystemImages/ManagerIcon.svg');
        const individualIcon = require('./SystemImages/IndividualIcon.svg');

        return (
            <div>


            <Grid container spacing={1} style={{width: "100%"}}>

                <Grid item xs={12} sm={6} style={{display: "flex", flexDirection: "column", flex: 1, width: "100%"}}>

                    <button type="button" className="btn btn-primary btn-block"
                            onClick={this.handleManagementOrientedOperations}
                            style={{display: "flex", flex: 0.5, margin: "5px"}}>

                        <img style={{width: "140px", height: "140px"}} src={managementIcon} alt="ManagementOperations"/>
                        <h3 style={{margin: "auto", width: "100%"}}>
                            İDARİ İŞLEMLER
                        </h3>
                    </button>
                    <Grid item xs={12} style={{display: "flex", flexDirection: "column", flex: 0.5, width: "100%"}}>

                            {displayTheManagementBasedOperations(this.state.selectedManagementOperations,this.props)}
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={6} style={{display: "flex", flexDirection: "column", flex: 1, width: "100%"}}>


                    <button type="button" className="btn btn-primary btn-block"
                            onClick={this.handleIndividualOperationSelection}
                            style={{display: "flex", flex: 0.5, margin: "5px"}}>

                        <img style={{width: "140px", height: "140px"}} src={individualIcon} alt="IndividualOperations"/>
                        <h3 style={{margin: "auto", width: "100%"}}>
                            KİŞİSEL İŞLEMLER
                        </h3>
                    </button>

                    <Grid item xs={12} style={{display: "flex", flexDirection: "column", flex: 0.5, width: "100%"}}>
                        <div style={{
                            display: "flex",
                            flex: 0.5,
                            textDecoration: "none",
                            justifyContent: "center",
                            width: "100%"
                        }}>
                            {displayIndividualOperations(this.state.selectedIndividualOperations,this.props)}
                        </div>

                    </Grid>
                </Grid>

            </Grid>

                <div>
                    {this.displayBackButton()}
                </div>
            </div>
        );
    }
}



function displayIndividualOperations(flag,props) {
    const crateDemandIcon = require('./SystemImages/FillingFormImage.svg');
    const displayPermissionDemandIcon = require('./SystemImages/DisplayPermissionButtonIcon.svg');
    if (flag) {
        return (
            <Grid container spacing={1} style={{justifyContent: "center"}}>
                <Grid item xs={10} sm={8} style={{justifyContent: "center"}}>
                    <Bounce left>
                        <Link to="FillingThePermissionForm" style={{textDecoration: "none"}}>
                            <button style={{display: "flex", flex: 0.5, width: "100%"}}
                                    type="button" className="btn btn-primary btn-block">
                                <img alt="IconEye"
                                     style={{display: "flex", flexDirection: "left", width: "70px", height: "70px"}}
                                     src={crateDemandIcon}/>
                                <h1 style={{
                                    display: "flex",
                                    flexDirection: "flex-start",
                                    fontSize: "16px",
                                    margin: "auto"
                                }}>
                                    İZİN TALEBİ YARAT
                                </h1>
                            </button>
                        </Link>
                    </Bounce>
                </Grid>

                <Grid item xs={10} sm={8} style={{justifyContent: "center"}}>
                    <Bounce right>
                        <Link to="PreviousPermissons" style={{textDecoration: "none"}}>
                            <button style={{display: "flex", flex: 0.5, width: "100%"}}
                                    onClick={()=>{
                                        //BURDA KALDIIIIIIIIIIIIIIIIIIIIIM
                                        props.setDisplayStatus(1);
                                        /*props.setDisplayStatus(1);*/
                                    }}

                                    type="button" className="btn btn-primary btn-block">
                                <img alt="IconEye"
                                     style={{display: "flex", flexDirection: "left", width: "70px", height: "70px"}}
                                     src={displayPermissionDemandIcon}/>
                                <h1 style={{
                                    display: "flex",
                                    flexDirection: "flex-start",
                                    fontSize: "16px",
                                    margin: "auto"
                                }}>
                                    İZİNLERİ GÖRÜNTÜLE
                                </h1>
                            </button>
                        </Link>
                    </Bounce>
                </Grid>
            </Grid>
        )
    } else {
        return null;
    }
}
export default connect(mapStateToProps, mapDispatchToProps)

(
    NavigateTheChief)
;
