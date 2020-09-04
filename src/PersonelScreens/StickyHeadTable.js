import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Button from "@material-ui/core/Button";
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {trTR} from '@material-ui/core/locale';
import {Bounce} from "react-reveal";
import Grid from "@material-ui/core/Grid";
import ResponsiveDialog from "./ResponsiveDialog";
import DisplayPermissionForm from "./DisplayPermissionForm";
import {Link} from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import VisibilityIcon from '@material-ui/icons/Visibility';

const axios = require('axios');


{/*Here the main theme that specifies the local and background color.*/
}
const theme = createMuiTheme({
    palette: {
        primary: {main: '#1976d2'}
    },

}, trTR);


const api = axios.create({
    baseURL: `http://localhost:4000`
})

{/*Here the columns that are specifies the main tags of rows.*/
}
const columns = [
    {
        id: 'permissionID',
        label: 'İzin ID'
    },
    {
        id: 'beginDateOfPermission',
        label: 'İZİN BAŞLANGIÇ',
    },
    {
        id: 'endDateOfPermission',
        label: 'İZİN BİTİŞ',
    },
    {
        id: 'chiefConfirmStatus',
        label: 'AMİR ONAYI',
    },
    {
        id: 'generalManagerConfirmStatus',
        label: 'GENEL MÜDÜR ONAYI',
    },
    {
        id: 'displayScreen',
        label: ' ÖNİZLEME',
    },
];


/*

userID: state.permissionReducer.userID,

    userStatus: state.permissionReducer.userStatus,
    displayStatus: state.permissionReducer.displayStatus,

    personalName: state.userLoginReducer.personalName,

    demandDateOfPermission:moment().format("DD-MM-YYYY HH:mm:ss"),

    beginDateOfPermission: state.permissionReducer.beginDateOfPermission,
    endDateOfPermission: state.permissionReducer.endDateOfPermission,

    foldCode: state.permissionReducer.foldCode,
    areaCode: state.permissionReducer.areaCode,

    selectVehicleUsageName: state.permissionReducer.selectVehicleUsageName,
    selectVehicleUsageID: state.permissionReducer.selectVehicleUsageID,

    permissionDescription: state.permissionReducer.permissionDescription,

    personalCarUsage: state.permissionReducer.personalCarUsage,
    totalDistanceOfIndividualCar: state.permissionReducer.totalDistanceOfIndividualCar,
    priceOfTrainOrBus: state.permissionReducer.priceOfTrainOrBus,

    displayThePermissionName: state.permissionReducer.displayThePermissionName,
    setPermissionType: state.permissionReducer.setPermissionType
*/


/*

/!* This function determines a button to monitor related permission in form*!/
function displayPermissionForm(permissionID) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "flex-start"
        }}>
           {/!* <Link to="DisplayPermissionForm">*!/}
            {/!*    <Button variant="outlined" color="primary" style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    padding: "1px",
                    background: "rgba(180,133,205,0.64)",
                    borderRadius: "50%"
                }}>*!/}

                    {/!*<img style={{width: "30px", height: "20px", margin: "auto"}}
                         src={require('./SystemImages/DisplayPermissionButtonIcon.svg')}
                         alt="my image"/>*!/}
           {/!*     </Button>*!/}
          {/!*  </Link>*!/}
        </div>
    )
}*/

{/*Here the style definition for usage of varible classes*/
}
/*const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        width: "100%",
    },
});*/

{
    /*This const determines styles for bounce which displays buttons as animated */
}
const stylesForBounce = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
        padding: "10px",
        background:"rgba(183, 180, 180, 0.14)"
    },
}));
{/*
    This function determines StickyHeadTable to display
    related informations.
*/
}

export default function StickyHeadTable(props) {
    /*
    * Here the variables and states that are determined to decide style.
    * */
   /* const defineRootAndContainerProperties = useStyles();*/
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const defineStyleForBounce = stylesForBounce();

    /*
        This method created for page change in StickyHeadTable
     */
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    /*
    This method created for row per page change in StickyHeadTable
     */
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    function DisplayTheRowOfForm() {

        return (
            <React.Fragment>
                {/* First Grid defined here */}
                <Grid item xs={3}>
                    <Paper className={defineStyleForBounce.paper}>
                        <Fab style={{
                            fontSize: "20px",
                            borderRadius: "50%",
                            backgroundColor: "rgba(49,236,9,0.95)",
                            textAlign: "center",
                            height:"30px",
                            width: "30px"
                        }}>
                            ✔
                        </Fab>
                        <h1 style={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            textAlign: "center"
                        }}
                        >
                            ONAY
                        </h1>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={defineStyleForBounce.paper}>

                        <Fab style={{
                            fontSize: "20px",
                            borderRadius: "50%",
                            backgroundColor: "rgba(255,220,0,0.95)",
                            textAlign: "center",
                            height:"30px",
                            width: "30px"
                        }}>
                            ⊖
                        </Fab>
                        <h1 style={{fontSize: "12px", textAlign: "center", fontWeight: "bold"}}
                        >
                            BEKLEMEDE
                        </h1>
                    </Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper className={defineStyleForBounce.paper}>
                        <Fab style={{
                            fontSize: "20px",
                            borderRadius: "50%",
                            backgroundColor: "rgba(220,16,16,0.95)",
                            textAlign: "center",
                            height:"30px",
                            width: "30px"
                        }}>
                            ✖
                        </Fab>
                        <h1 style={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            textAlign: "center"
                        }}
                        >
                            RED
                        </h1>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={defineStyleForBounce.paper}>
                        <Fab style={{
                            fontSize: "20px",
                            borderRadius: "50%",
                            backgroundColor: "rgb(253,131,1)",
                            textAlign: "center",
                            height:"30px",
                            width: "30px"
                        }}>
                            !
                        </Fab>
                        <h1 style={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            textAlign: "center"
                        }}
                        >
                            REVİZE
                        </h1>

                    </Paper>
                </Grid>
            </React.Fragment>
        );
    }


    return (
        <div style={{width:"100vw",margin:"0",display:"block"}}
        >
            <div style={{display: "flex", justifyContent: "flex-end", margin: "5px"}}>
                <Bounce >
                    <Grid container item xs={12} spacing={1}>
                        <DisplayTheRowOfForm/>
                    </Grid>
                </Bounce>
            </div>
            <ThemeProvider theme={theme}>
                <Paper /*className={defineRootAndContainerProperties.root}*/>
                    <TableContainer /* className={defineRootAndContainerProperties.container}*/>
                        <Table stickyHeader aria-label="sticky table" >
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell style={{fontSize:"0.75rem",padding:"1px",textAlign:"center",fontWeight:"bold"}}
                                            key={column.id}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.permissionID} style={{width:"100%"}}>
                                            {columns.map((column) => {
                                                return (
                                                    <TableCell key={column.id} style={{padding:"1px",textAlign:"center"}}>
                                                        {column.id==="permissionID" && row.permissionID}
                                                        {column.id==="beginDateOfPermission" && row.beginDateOfPermission}
                                                        {column.id==="endDateOfPermission" && row.endDateOfPermission}
                                                        {column.id === "chiefConfirmStatus" &&

                                                        <ResponsiveDialog chiefConfirmStatus={row.chiefConfirmStatus}
                                                                          desParam={1}
                                                                          explanationOfChief={row.chiefsDescription}/>
                                                          }
                                                        {column.id === "generalManagerConfirmStatus" &&

                                                        <ResponsiveDialog
                                                            generalManagerConfirmStatus={row.generalManagerConfirmStatus}
                                                            desParam={2}
                                                            explanationOfGeneralManager={row.generalManagerDescription}/>
                                                            }
                                                        {column.id === "displayScreen" && <Link to={"./DisplayPermissionForm/"+row.permissionID}>
                                                            <Fab aria-label="edit" style={{margin:"3px"}}>
                                                                <VisibilityIcon/>
                                                            </Fab>
                                                        </Link>}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={props.rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </Paper>
            </ThemeProvider>

        </div>
    )
}
