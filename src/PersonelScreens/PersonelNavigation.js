import React from "react";
import {Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import {connect} from "react-redux";

const axios = require('axios');
const api = axios.create({
    baseURL: `http://localhost:4000`
})

const mapStateToProps = (state) => {
    return {
        userID: state.userLoginReducer.userID,
        userMail: state.userLoginReducer.userMail,
        proxyChiefID:state.userLoginReducer.proxyChiefID,
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
        console.log(props.userID);
             // this.setImage=this.setImage.bind(this);
    }
    /*
    setImage (){
       return api.get(
            '/getSignatureByUsersID/' + this.props.userID,
        )
            .then(
                function (response) {
                    console.log(response)
                })
    }
    */

    render() {

        const iconFirst = require('./SystemImages/FillingFormImage.svg');
        const iconSecond = require('./SystemImages/DisplayPreviousPermissionsImage.svg');

        return (
            <Grid container spacing={2} style={{width: "100%"}}>
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

        )
    }
}


export default connect(mapStateToProps)

(
    PersonelNavigation
)
;
