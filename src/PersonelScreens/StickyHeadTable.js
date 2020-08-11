import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import "/src/PersonelScreens/goz.svg"
// or



const columns = [
    { id: 'demandID', label: 'İzin ID',display: 'flex',justifyContent:"flex-start"},
    { id: 'demandDate', label: 'TALEP TARİHİ',display: 'flex',justifyContent:"flex-start"},
    {
        id: 'demandBegin',
        label: 'İZİN BAŞLANGIÇ',
        display: 'flex',
        justifyContent:"flex-start",
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'demandEnd',
        label: 'İZİN BİTİŞ',
        display: 'flex',
        justifyContent:"flex-start",
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'chiefAcceptance',
        label: 'AMİR ONAYI',
        justifyContent:"flex-start",
        format: (value) => value.toFixed(2),
    },
    {
        id: 'generalManAcceptance',
        label: 'GENEL MÜDÜR ONAYI',
        justifyContent:"flex-start",
        format: (value) => value.toFixed(2),
    },
    {
        id: 'displayScreen',
        label: ' ',
        justifyContent:"flex-start",
    },
];

function chiefBossAccaptance(chiefStatus) {
    if(chiefStatus===1){
        return(
            <div style={{
                display:"flex"
            }}>
                <h1 style={{backgroundColor:"rgba(49,236,9,0.95)",
                                fontSize:"20px",
                borderRadius:"50%",
                margin:"auto",
                textAlign:"center",
                width:"40px"}}
                >
                    ✔
                </h1>
            </div>
        )
    }
    else if(chiefStatus===2){
        return(
            <div style={{
                display:"flex"
            }}>
                <h1 style={{backgroundColor:"rgba(220,16,16,0.95)",
                    fontSize:"20px",
                    borderRadius:"50%",
                    margin:"auto",
                    textAlign:"center",
                    width:"40px"}}
                >
                    ✖
                </h1>
            </div>
        )
    }
    else {
        return(
            <div style={{
                display:"flex"
            }}>
                <h1 style={{backgroundColor:"rgba(255,220,0,0.95)",
                    fontSize:"20px",
                    borderRadius:"50%",
                    margin:"auto",
                    textAlign:"center",
                    width:"40px"}}
                >
                    ⊖
                </h1>
            </div>
        )
    }
}

function displayButton() {
    return(
    <div>
        <Button variant="outlined" color="primary">
            <img src="goz.svg" alt="my image"/>
        </Button>
    </div>
    )
}

function createData(demandID, demandDate, demandBegin, demandEnd,chiefStatus,bossStatus) {
    return { demandID, demandDate, demandBegin, demandEnd,chiefStatus,bossStatus};
}

const rows = [
    createData('India', "22/22/22", "22/22/22", "22/22/22",1,0),
    createData('China', "22/22/22", "22/22/22", "22/22/22",1,0),
    createData('Italy', "22/22/22", "22/22/22", "22/22/22",1,0),
    createData('United States', "22/22/22", "22/22/22", "22/22/22",1,0),
    createData('Canada', "22/22/22", "22/22/22", "22/22/22",1,0),
    createData('Australia', 'AU', "22/22/22", "22/22/22",1,0),
    createData('Germany', 'DE', "22/22/22", "22/22/22",1,0),
    createData('Ireland', 'IE', "22/22/22", "22/22/22",1,0),
    createData('Mexico', 'MX', "22/22/22", "22/22/22",1,0),
    createData('Japan', 'JP', "22/22/22", "22/22/22",1,0),
    createData('France', 'FR', "22/22/22", "22/22/22",1,0),
    createData('United Kingdom', 'GB', "22/22/22", "22/22/22",1,0),
    createData('Russia', 'RU', "22/22/22", "22/22/22",1,0),
    createData('Nigeria', 'NG', "22/22/22", "22/22/22",1,0),
    createData('Brazil', 'BR', "22/22/22", "22/22/22",1,0),
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 600,
    },
});


export default function StickyHeadTable() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
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
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.demandDate}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} >
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                                {column.id ==="chiefAcceptance" && chiefBossAccaptance(row.chiefStatus)}
                                                {column.id ==="generalManAcceptance" && chiefBossAccaptance(row.bossStatus)}
                                                {column.id ==="displayScreen" && displayButton()}
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
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
