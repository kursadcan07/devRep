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
import Fab from "@material-ui/core/Fab";

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
        console.log("dsfkosdf"+props.chiefConfirmStatus)

        if (props.chiefConfirmStatus === 1 || props.generalManagerConfirmStatus===1) {

            return (
                <div style={{
                    display: "flex", width: "80px", justifyContent: "center",
                    textAlign: "center"

                }}>

                    <Fab style={{
                        backgroundColor: "rgba(49,236,9,0.95)",
                        fontSize: "20px",
                        borderRadius: "50%",
                        margin: "auto",
                        textAlign: "center",
                        height:"30px",
                        width: "30px"
                    }}
                            onClick={handleClickOpen}>
                        ✔
                    </Fab>
                    <Dialog
                        fullScreen={fullScreen}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="responsive-dialog-title"
                    >
                        <DialogTitle id="responsive-dialog-title">{"AÇIKLAMA"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                {props.desParam==="1" ? props.explanationOfChief : props.explanationOfGeneralManager}
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
        } else if (props.chiefConfirmStatus === 2 || props.generalManagerConfirmStatus===2) {
            return (
                <div style={{
                    display: "flex", width: "80px", justifyContent: "center"
                }}>
                    <Fab style={{
                        backgroundColor: "rgba(220,16,16,0.95)",
                        borderRadius: "50%",
                        margin: "auto",
                        textAlign: "center",
                        display: 'flex',
                        height:"30px",
                        width: "30px"
                    }} onClick={handleClickOpen}>
                        <h1 style={{fontSize: "20px", margin: "auto"}}>
                            ✖
                        </h1>

                    </Fab>
                    <Dialog
                        fullScreen={fullScreen}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="responsive-dialog-title"
                    >
                        <DialogTitle id="responsive-dialog-title">{"AÇIKLAMA"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                {props.desParam===1 ? props.explanationOfChief : props.explanationOfGeneralManager}
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
        } else if (props.chiefConfirmStatus === 3 || props.generalManagerConfirmStatus===3) {
            return (
                <div style={{
                    display: "flex",
                    width: "80px",
                    justifyContent: "center"
                }}>
                    <Fab style={{
                        backgroundColor: "rgba(255,220,0,0.95)",
                        fontSize: "20px",
                        borderRadius: "50%",
                        margin: "auto",
                        textAlign: "center",
                        height:"30px",
                        width: "30px"
                    }} onClick={handleClickOpen}
                    >
                        <h1 style={{fontSize: "20px", margin: "auto"}}>
                            ⊖
                        </h1>
                    </Fab>
                    <Dialog
                        fullScreen={fullScreen}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="responsive-dialog-title"
                    >
                        <DialogTitle id="responsive-dialog-title">{"AÇIKLAMA"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                {props.desParam===1 ? props.explanationOfChief : props.explanationOfGeneralManager}
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
        } else {
            return (
                <div style={{
                    display: "flex",
                    width: "80px",
                    justifyContent: "center"
                }}>
                    <Fab style={{
                        backgroundColor: "rgb(253,131,1)",
                        fontSize: "20px",
                        borderRadius: "50%",
                        margin: "auto",
                        textAlign: "center",
                        height:"30px",
                        width: "30px"
                    }} onClick={handleClickOpen}
                    >
                        <h1 style={{fontSize: "20px", margin: "auto"}}>
                            !
                        </h1>
                    </Fab>
                    <Dialog
                        fullScreen={fullScreen}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="responsive-dialog-title"
                    >
                        <DialogTitle id="responsive-dialog-title">{"AÇIKLAMA"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                {props.desParam===1 ? props.explanationOfChief : props.explanationOfGeneralManager}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={handleCloseAndDeleteDemand} color="primary">
                                İPTAL ET
                            </Button>
                            <Link to="./FillingThePermissionForm">
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

