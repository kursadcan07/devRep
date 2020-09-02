import React, {useState} from 'react';
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
import {Link} from "react-router-dom";
import ResponsiveDialog from "./ResponsiveDialog";

/*
const rows1 = [
    createData(2, '123', "22/22/2222", "22/22/2222", "22/22/2222", 2, 1, "İZNE ÇIKMANIZ UYGUN DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData(2, '124', "22/22/2222", "22/22/2222", "22/22/2222", 2, 3, "İZNE TATRİHİNI 22/22/2222 YE REVİZE EDİNİZ DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData(2, '125', "22/22/2222", "22/22/2222", "22/22/2222", 2, 0, "İZNE ÇIKMANIZ UYGUN DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData(2, '126', "22/22/2222", "22/22/2222", "22/22/2222", 2, 0, "İZNE ÇIKMANIZ UYGUN DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData(2, '127', "22/22/2222", "22/22/2222", "22/22/2222", 2, 0, "İZNE TATRİHİNI 22/22/2222 YE REVİZE EDİNİZ DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData(2, '128', "22/22/2222", "22/22/2222", "22/22/2222", 2, 0, "İZNE ÇIKMANIZ UYGUN DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData(2, '129', "22/22/2222", "22/22/2222", "22/22/2222", 2, 0, "İZNE ÇIKMANIZ UYGUN DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData(2, '130', "22/22/2222", "22/22/2222", "22/22/2222", 2, 0, "İZNE TATRİHİNI 22/22/2222 YE REVİZE EDİNİZ DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData(2, '131', "22/22/2222", "22/22/2222", "22/22/2222", 2, 0, "İZNE ÇIKMANIZ UYGUN DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
];
function createData(userStatus, permissionID, beginDateOfPermission, endDateOfPermission, chiefConfirmStatus,generalManagerConfirmStatus, chiefsDescription, generalManagerDescription) {
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
}*/

{/*Here the main theme that specifies the local and background color.*/
}
const theme = createMuiTheme({
    palette: {
        primary: {main: '#1976d2'}
    },

}, trTR);

{/*Here the columns that are specifies the main tags of rows.*/
}
const columns = [
    {
        id: 'permissionID',
        label: 'İzin ID'
    },
    {
        id: 'demandBegin',
        label: 'İZİN BAŞLANGIÇ',
    },
    {
        id: 'demandEnd',
        label: 'İZİN BİTİŞ',
    },
    {
        id: 'chiefAcceptance',
        label: 'AMİR ONAYI',
    },
    {
        id: 'generalManAcceptance',
        label: 'GENEL MÜDÜR ONAYI',
    },
    {
        id: 'displayScreen',
        label: ' ÖNİZLEME',
    },
];

/* This function determines a button to monitor related permission in form*/
function displayPermissionForm() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "flex-start"
        }}>
            <Link to="DisplayPermissionForm">
                <Button variant="outlined" color="primary" style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    padding: "1px",
                    background: "rgba(180,133,205,0.64)",
                    borderRadius: "50%"
                }}>
                    <img style={{width: "30px", height: "20px", margin: "auto"}}
                         src={require('./SystemImages/DisplayPermissionButtonIcon.svg')}
                         alt="my image"/>
                </Button>
            </Link>
        </div>
    )
}

{/*Here the style definition for usage of varible classes*/
}
const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        width: "100%",
    },
});

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
        background: "rgba(139,133,133,0.21)"
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
    const defineRootAndContainerProperties = useStyles();
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
    {/*

        This component describes the signs meanings in the table.
        As:
            1) ✔ => ONAY
            2) ⊖ => BEKLEMEDE
            3)

    */
    }

    function DisplayTheRowOfForm() {

        return (
            <React.Fragment>
                {/* First Grid defined here */}
                <Grid item xs={3}>
                    <Paper className={defineStyleForBounce.paper}>
                        <h1 style={{
                            fontSize: "20px",
                            borderRadius: "50%",
                            backgroundColor: "rgba(49,236,9,0.95)",
                            textAlign: "center"
                        }}>
                            ✔
                        </h1>
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

                        <h1 style={{
                            fontSize: "20px",
                            borderRadius: "50%",
                            backgroundColor: "rgba(255,220,0,0.95)",
                            textAlign: "center",
                            marginRight: "10px",
                            marginLeft: "10px"
                        }}>
                            ⊖
                        </h1>
                        <h1 style={{fontSize: "12px", textAlign: "center", fontWeight: "bold"}}
                        >
                            BEKLEMEDE
                        </h1>
                    </Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper className={defineStyleForBounce.paper}>
                        <h1 style={{
                            fontSize: "20px",
                            borderRadius: "50%",
                            backgroundColor: "rgba(220,16,16,0.95)",
                            textAlign: "center"
                        }}>
                            ✖
                        </h1>
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
                        <h1 style={{
                            fontSize: "20px",
                            borderRadius: "50%",
                            backgroundColor: "rgb(253,131,1)",
                            textAlign: "center"
                        }}>
                            !
                        </h1>
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

        <div  >
            <div style={{display: "flex", justifyContent: "flex-end", margin: "5px"}}>
                <Bounce>
                    <Grid container item xs={12} spacing={1}>
                        <DisplayTheRowOfForm/>
                    </Grid>
                </Bounce>
            </div>
            <ThemeProvider theme={theme} >
                <Paper className={defineRootAndContainerProperties.root}>
                    <TableContainer className={defineRootAndContainerProperties.container}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                    console.log(row)
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.permissionID}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id}>
                                                        {value}
                                                        {column.id === "chiefAcceptance" && <ResponsiveDialog chiefStatus={row.chiefConfirmStatus} explanationOfChief={row.chiefsDescription}/>}
                                                        {column.id === "generalManAcceptance" && <ResponsiveDialog chiefStatus={row.generalManagerConfirmStatus} explanationOfGeneralManager={row.generalManagerDescription}/>}
                                                        {column.id === "displayScreen" && displayPermissionForm(row.userStatus)}
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
    );
}
