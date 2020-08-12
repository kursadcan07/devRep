import React from "react";
import {Link} from "react-router-dom";
import {Row} from "react-bootstrap";
import Grid from '@material-ui/core/Grid';
import Col from "react-bootstrap/Col";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Button from "@material-ui/core/Button";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import makeStyles from "@material-ui/core/styles/makeStyles";
import green from "@material-ui/core/colors/green";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";

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

    const iconFirst = require('./fromSVG.svg');
    const iconSecond = require('./displayIcon.svg');
    const classes = useStyles();
    return (

        <Grid container spacing={2}>

            <Grid item xs={12} sm={6} >
                <Link to="PermissionFilling" style={{display:"flex",flex:1,margin:"10px"}} >
                    <button type="button" className="btn btn-success" style={{display:"flex",flex:1}}
                    >
                            <img  style={{width:"150px",height:"150px"}}
                                src={iconFirst}/>
                            <h3 style={{margin:"auto"}}>
                                İZİN TALEBİ YARAT
                            </h3>
                    </button>
                </Link>
            </Grid>
            <Grid item xs={12} sm={6} style={{display:"flex",flex:1}}>
                    <Link to="PreviousPermissons" style={{display:"flex",flex:1,margin:"10px"}} >
                        <button type="button" className="btn btn-success" style={{display:"flex",flex:1}}  >
                            <img style={{width:"150px",height:"150px"}} src={iconSecond}/>
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
