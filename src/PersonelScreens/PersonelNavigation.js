import React from "react";
import {Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import {connect} from "react-redux";
import Fab from "@material-ui/core/Fab";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import green from "@material-ui/core/colors/green";
import blue from "@material-ui/core/colors/blue";

const axios = require('axios');
const api = axios.create({
    baseURL: `http://localhost:4000`
})

const mapStateToProps = (state) => {
    return {
        userID: state.userLoginReducer.userID,
        userMail: state.userLoginReducer.userMail,
        proxyChiefID: state.userLoginReducer.proxyChiefID,
        personalName: state.userLoginReducer.personalName,
        userStatus: state.userLoginReducer.userStatus,
        chiefID: state.userLoginReducer.chiefID,
        generalManagerID: state.userLoginReducer.generalManagerID,
        userArea: state.userLoginReducer.userArea,
    }
};

class PersonelNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.displayBackButton = this.displayBackButton.bind(this);
    }

    displayBackButton() {

        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "10px",
                    marginTop: "500px",
                }}>
                <Link
                    to={"/"}>
                    <Fab style={{
                        display: "flex",
                        width: "70px",
                        height: "70px",
                        backgroundColor: "transparent",
                    }}>
                        <PowerSettingsNewIcon style={{color: blue[600]}}/>
                    </Fab>
                </Link>
            </div>
        )
    }

    render() {

        /* this.disp();*/

        const iconFirst = require('./SystemImages/FillingFormImage.svg');
        const iconSecond = require('./SystemImages/DisplayPreviousPermissionsImage.svg');

        return (

            <div>


                <Grid container spacing={2} style={{width: "100%"}} id="page-wrap">
                    <Grid item xs={12} sm={6}>
                        <Link to="FillingThePermissionForm" style={{display: "flex", flex: 1, textDecoration: "none"}}>
                            <button type="button" className="btn btn-primary btn-block"
                                    style={{display: "flex", flex: 1, margin: "20px", fill: "#FFFFFF"}}
                            >
                                <img alt="IconEye" style={{width: "150px", height: "150px"}}
                                     src={iconFirst}/>
                                <h3 style={{margin: "auto"}}>
                                    İZİN TALEBİ YARAT
                                </h3>
                            </button>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} style={{display: "flex", flex: 1}}>
                        <Link to="PreviousPermissons" style={{display: "flex", flex: 1, textDecoration: "none"}}>
                            <button type="button" className="btn btn-primary btn-block"
                                    style={{display: "flex", flex: 1, margin: "20px"}}>
                                <img style={{width: "150px", height: "150px"}} src={iconSecond} alt="IconEye"/>
                                <h3 style={{margin: "auto"}}>
                                    GEÇMİŞ İZİNLERİ GÖRÜNTÜLE
                                </h3>
                            </button>
                        </Link>
                    </Grid>
                </Grid>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "10px"
                }}>
                    {this.displayBackButton()}
                </div>

            </div>

        )
    }
}


export default connect(mapStateToProps)

(
    PersonelNavigation
)
;
