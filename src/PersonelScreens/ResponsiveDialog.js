import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import {Link} from "react-router-dom";

export default function ResponsiveDialog(props) {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleCloseAndDeleteDemand = () => {
        setOpen(false);
        //HERE WE DELETE THE DEMAND OF PERMISSION.
    };

    if (props.chiefStatus === 1) {

        return (
            <div style={{
                display: "flex", width: "80px", justifyContent: "center",
                textAlign: "center"

            }}>

                <button style={{
                    backgroundColor: "rgba(49,236,9,0.95)",
                    fontSize: "20px",
                    borderRadius: "50%",
                    margin: "auto",
                    textAlign: "center",
                    width: "40px",
                }}
                        onClick={handleClickOpen} >
                    ✔
                </button>
                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">{"AÇIKLAMA"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {props.explanationOfChief}
                            {props.explanationOfGeneralManager}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose} color="primary">
                            TAMAM
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    } else if (props.chiefStatus === 2) {
        return (
            <div style={{
                display: "flex", width: "80px", justifyContent: "center"
            }}>
                <button style={{
                    backgroundColor: "rgba(220,16,16,0.95)",

                    borderRadius: "50%",
                    margin: "auto",
                    textAlign: "center",
                    display: 'flex',
                    width: "40px"
                }}  onClick={handleClickOpen} >
                    <h1 style={{ fontSize: "20px",margin:"auto"}}>
                        ✖
                    </h1>

                </button>
                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">{"AÇIKLAMA"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {props.explanationOfChief}
                            {props.explanationOfGeneralManager}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose} color="primary">
                            TAMAM
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    } else if (props.chiefStatus === 3) {
        return (
            <div style={{
                display: "flex",
                width: "80px",
                justifyContent: "center"
            }}>
                <button style={{
                    backgroundColor: "rgba(255,220,0,0.95)",
                    fontSize: "20px",
                    borderRadius: "50%",
                    margin: "auto",
                    textAlign: "center",
                    width: "40px"
                }}  onClick={handleClickOpen}
                >
                    <h1 style={{ fontSize: "20px",margin:"auto"}}>
                    ⊖
                    </h1>
                </button>
                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">{"AÇIKLAMA"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {props.explanationOfChief}
                            {props.explanationOfGeneralManager}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose} color="primary">
                            TAMAM
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
    else{
        return (
            <div style={{
                display: "flex",
                width: "80px",
                justifyContent: "center"
            }}>
                <button style={{
                    backgroundColor: "rgb(253,131,1)",
                    fontSize: "20px",
                    borderRadius: "50%",
                    margin: "auto",
                    textAlign: "center",
                    width: "40px"
                }}  onClick={handleClickOpen}
                >
                    <h1 style={{ fontSize: "20px",margin:"auto"}}>
                        !
                    </h1>
                </button>
                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">{"AÇIKLAMA"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {props.explanationOfChief}
                            {props.explanationOfGeneralManager}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                            <Button autoFocus onClick={handleCloseAndDeleteDemand} color="primary">
                                İPTAL ET
                            </Button>
                        <Link to="./PermissionFilling">
                        <Button autoFocus color="primary">
                            DÜZENLE
                        </Button>
                        </Link>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}
