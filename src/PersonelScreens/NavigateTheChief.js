import React from "react";
import {Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Bounce, Slide} from "react-reveal";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


function displayIndividualOperations(flag) {
    const crateDemandIcon = require('./SystemImages/FillingFormImage.svg');
    const displayPermissionDemandIcon = require('./SystemImages/DisplayPermissionButtonIcon.svg');
    if (flag) {
        return (
            <Grid container spacing={1} style={{justifyContent: "center"}}>
                <Grid item xs={10} sm={8} style={{justifyContent: "center"}}>
                    <Bounce left>
                        <Link to="FillingThePermissionForm" style={{textDecoration:"none"}}>
                            <button style={{display: "flex", flex: 0.5, width: "100%"}}
                                    type="button" className="btn btn-success">
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
                        <Link to="DisplayThePermissionForm" style={{textDecoration:"none"}}>
                            <button style={{display: "flex", flex: 0.5, width: "100%"}}
                                    type="button" className="btn btn-success">
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

function displayTheManagementBasedOperations(flag) {
    const crateDemandIcon = require('./SystemImages/FillingFormImage.svg');
    const displayPermissionDemandIcon = require('./SystemImages/DisplayPermissionButtonIcon.svg');
    if (flag) {
        return (

            <Grid container spacing={1} style={{justifyContent: "center"}}>
                <Grid item xs={10} sm={8} style={{justifyContent: "center"}}>
                    <Bounce left>
                        <Link to="PreviousPermissons" style={{textDecoration:"none"}}>
                        <button style={{display: "flex", flex: 0.5, width: "100%"}}
                                type="button" className="btn btn-success">
                            <img alt="IconEye"
                                 style={{display: "flex", flexDirection: "left", width: "70px", height: "70px"}}
                                 src={crateDemandIcon}/>
                            <h1 style={{
                                display: "flex",
                                flexDirection: "flex-start",
                                fontSize: "16px",
                                margin: "auto"
                            }}>
                                AKTİF TALEPLER
                            </h1>
                        </button>
                        </Link>
                    </Bounce>
                </Grid>

                <Grid item xs={10} sm={8} style={{justifyContent: "center"}}>
                    <Bounce right>
                        <button style={{display: "flex", flex: 0.5, width: "100%"}}
                                type="button" className="btn btn-success">
                            <img alt="IconEye"
                                 style={{display: "flex", flexDirection: "left", width: "70px", height: "70px"}}
                                 src={displayPermissionDemandIcon}/>
                            <h1 style={{
                                display: "flex",
                                flexDirection: "flex-start",
                                fontSize: "16px",
                                margin: "auto"
                            }}>
                                GEÇMİŞ TALEPLER
                            </h1>
                        </button>
                    </Bounce>
                </Grid>

            </Grid>
        )
    } else {
        return null;
    }
}

class NavigateTheChief extends React.Component {

    constructor() {
        super();
        this.state = {
            selectedIndividualOperations: false,
            selectedManagementOperations: false
        }
        this.handleIndividualOperationSelection = this.handleIndividualOperationSelection.bind(this);
        this.handleManagementOrientedOperations = this.handleManagementOrientedOperations.bind(this);
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
    }

    render() {
        const managementIcon = require('./SystemImages/ManagerIcon.svg');
        const individualIcon = require('./SystemImages/IndividualIcon.svg');

        return (
            <Grid container spacing={1} style={{width: "100%"}}>

                <Grid item xs={12} sm={6} style={{display: "flex", flexDirection: "column", flex: 1, width: "100%"}}>

                    <button type="button" className="btn btn-success" onClick={this.handleManagementOrientedOperations}
                            style={{display: "flex", flex: 0.5, margin: "5px"}}>

                        <img style={{width: "150px", height: "150px"}} src={managementIcon} alt="ManagementOperations"/>
                        <h3 style={{margin: "auto", width: "100%"}}>
                            İDARİ İŞLEMLER
                        </h3>
                    </button>
                    <Grid item xs={12} style={{display: "flex", flexDirection: "column", flex: 0.5, width: "100%"}}>
                        <Link to="PreviousPermissons"
                              style={{
                                  display: "flex",
                                  flex: 0.5,
                                  textDecoration: "none",
                                  justifyContent: "center",
                                  width: "100%"
                              }}>
                            {displayTheManagementBasedOperations(this.state.selectedManagementOperations)}
                        </Link>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={6} style={{display: "flex", flexDirection: "column", flex: 1, width: "100%"}}>


                    <button type="button" className="btn btn-success" onClick={this.handleIndividualOperationSelection}
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
                            {displayIndividualOperations(this.state.selectedIndividualOperations)}
                        </div>

                    </Grid>
                </Grid>

            </Grid>

        );
    }
}

export default NavigateTheChief;
