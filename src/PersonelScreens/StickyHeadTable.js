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
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ResponsiveDialog from "./ResponsiveDialog";

const theme = createMuiTheme({
    palette: {
        primary: {main: '#1976d2'},
    },
}, trTR);

const columns = [
    {id: 'demandID', label: 'İzin ID'},
    {id: 'demandDate', label: 'TALEP TARİHİ'},
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


function displayButton() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "flex-start"
        }}>
            <Link to={"/PersonelScreens/PermissionDisplay"}>
            <Button variant="outlined" color="primary" style={{
                display: "flex",
                justifyContent: "flex-start",
                padding: "1px",
                background: "rgba(180,133,205,0.64)",
                borderRadius: "50%"
            }}>
                <img style={{width: "30px", height: "20px", margin: "auto"}} src={require('./SystemImages/DisplayPermissionButtonIcon.svg')}
                     alt="my image"/>
            </Button>
            </Link>
        </div>
    )
}

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        display: "flex",
    },
});

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

export default function StickyHeadTable(props) {

    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const styke = stylesForBounce();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={3}>
                    <Paper className={styke.paper}>
                        <h1 style={{
                            fontSize: "20px",
                            borderRadius: "50%",
                            backgroundColor: "rgba(49,236,9,0.95)",
                            textAlign: "center",

                        }}>
                            ✔
                        </h1>
                        <h1 style={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            textAlign: "center",

                        }}
                        >
                            ONAY
                        </h1>

                    </Paper>
                </Grid>
                <Grid item xs={4} >
                    <Paper className={styke.paper}>

                        <h1 style={{
                            fontSize: "20px",
                            borderRadius: "50%",
                            backgroundColor: "rgba(255,220,0,0.95)",
                            textAlign: "center",
                            marginRight:"10px",
                            marginLeft:"10px"
                        }}>
                            ⊖
                        </h1>
                        <h1 style={{fontSize: "12px", textAlign: "center", fontWeight: "bold",}}
                        >
                            BEKLEMEDE
                        </h1>

                    </Paper>
                </Grid>
                <Grid item xs={2} >
                    <Paper className={styke.paper}>
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
                <Grid item xs={3} >
                    <Paper className={styke.paper}>
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
                            textAlign: "center",
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
        <div>
            <div style={{display: "flex", justifyContent: "flex-end",margin:"5px"}}>
                <Bounce>
                    <Grid container spacing={1}>
                        <Grid container item xs={12} spacing={1}>
                            <FormRow/>
                        </Grid>
                    </Grid>
                </Bounce>
            </div>
            <ThemeProvider theme={theme}>
                <Paper className={classes.root}>
                    <TableContainer className={classes.container}>
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
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.demandID}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id}>
                                                        {value}
                                                        {column.id === "chiefAcceptance" && <ResponsiveDialog chiefStatus={row.chiefStatus} explanationOfChief={row.explanationOfChief}/>}
                                                        {column.id === "generalManAcceptance" && <ResponsiveDialog chiefStatus={row.bossStatus} explanationOfGeneralManager={row.explanationOfGeneralManager} />}
                                                        {column.id === "displayScreen" && displayButton()}
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
