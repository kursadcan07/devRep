import React from "react";
import {Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import makeStyles from "@material-ui/core/styles/makeStyles";


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


function PersonelNavigation() {

    const iconFirst = require('./SystemImages/FillingFormImage.svg');
    const iconSecond = require('./SystemImages/DisplayPreviousPermissionsImage.svg');
    return (

        <Grid container spacing={2} style={{width:"100%"}}>

            <Grid item xs={12} sm={6} >
                <Link to="PermissionFilling" style={{display:"flex",flex:1,textDecoration:"none"}} >
                    <button type="button" className="btn btn-success" style={{display:"flex",flex:1,margin:"20px"}}
                    >
                            <img  alt="IconEye" style={{width:"150px",height:"150px"}}
                                src={iconFirst}/>
                            <h3 style={{margin:"auto"}}>
                                İZİN TALEBİ YARAT
                            </h3>
                    </button>
                </Link>
            </Grid>
            <Grid item xs={12} sm={6} style={{display:"flex",flex:1}}>
                    <Link to="PreviousPermissons" style={{display:"flex",flex:1,textDecoration:"none"}} >
                        <button type="button" className="btn btn-success" style={{display:"flex",flex:1,margin:"20px"}}  >
                            <img style={{width:"150px",height:"150px"}} src={iconSecond} alt="IconEye"/>
                            <h3 style={{margin:"auto"}}>
                                GEÇMİŞ İZİNLERİ GÖRÜNTÜLE
                            </h3>
                        </button>
                    </Link>

            </Grid>
        </Grid>

    );
}


export default PersonelNavigation;
