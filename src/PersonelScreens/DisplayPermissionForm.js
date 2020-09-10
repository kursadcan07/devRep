import React from "react";
import Logo from "./SystemImages/CompanyLogo.png";
import {Link} from "react-router-dom";
import {Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const axios = require('axios');

const api = axios.create({
    baseURL: `http://localhost:4000`
})

const mapStateToProps = (state) => {
    return {
        userID: state.userLoginReducer.userID,
        chiefID: state.userLoginReducer.chiefID,
        generalManagerID: state.userLoginReducer.generalManagerID,

        displayStatus: state.userLoginReducer.displayStatus,
        userStatus: state.userLoginReducer.userStatus,

        personalName: state.userLoginReducer.personalName,
        chiefsName: state.userLoginReducer.chiefsName,
        generalManagersName: state.userLoginReducer.generalManagersName,


        demandDateOfPermission: state.permissionReducer.demandDateOfPermission,

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

    }
};


class DisplayPermissionForm extends React.Component {

    endCode;

    constructor(props) {

        super(props);

        this.endCode = window.location.href.split("/")[window.location.href.split("/").length - 1];
        if (this.endCode !== "DisplayPermissionForm") {
            this.state = {
                userID: undefined,
                personalName: undefined,
                userStatus: this.props.userStatus,
                displayStatus: this.props.displayStatus,

                isPermissionActive: undefined,
                demandDateOfPermission: undefined,

                beginDateOfPermission: undefined,
                endDateOfPermission: undefined,

                begDateSelectionStat: undefined,
                endDateSelectionStat: undefined,

                foldCode: undefined,
                areaCode: undefined,

                permissionDescription: undefined,

                selectVehicleUsageName: undefined,
                selectVehicleUsageID: undefined,

                priceOfTrainOrBus: undefined,
                totalDistanceOfIndividualCar: undefined,

                displayPermissionName: undefined,
                setPermissionType: undefined,

                chiefConfirmStatus: undefined,
                chiefsDescription: undefined,

                generalManagerConfirmStatus: undefined,
                generalManagerDescription: undefined,
                open: false,
            }
        } else {
            this.state = {
                userID: this.props.userID,
                chiefID: this.props.chiefID,
                generalManagerID: this.props.generalManagerID,

                personalName: this.props.personalName,
                userStatus: this.props.userStatus,

                isPermissionActive: this.props.isPermissionActive,
                demandDateOfPermission: new Date(Date.now()),

                beginDateOfPermission: this.props.beginDateOfPermission,
                endDateOfPermission: this.props.endDateOfPermission,

                foldCode: this.props.foldCode,
                areaCode: this.props.areaCode,

                permissionDescription: this.props.permissionDescription,

                selectVehicleUsageName: this.props.selectVehicleUsageName,
                selectVehicleUsageID: this.props.selectVehicleUsageID,

                priceOfTrainOrBus: this.props.priceOfTrainOrBus,
                totalDistanceOfIndividualCar: this.props.totalDistanceOfIndividualCar,

                displayPermissionName: this.props.displayThePermissionName,
                setPermissionType: this.props.setPermissionType,

                chiefConfirmStatus: this.props.chiefConfirmStatus,
                chiefsDescription: this.props.chiefsDescription,

                generalManagerConfirmStatus: this.props.generalManagerConfirmStatus,
                generalManagerDescription: this.props.generalManagerDescription,
                open: false,
            }

        }

        this.getData = this.getData.bind(this);
        this.displayButtonsForPermission = this.displayButtonsForPermission.bind(this);
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.updateChiefsDescription=this.updateChiefsDescription.bind(this);
        this.handleClickOpenForGeneralManager=this.handleClickOpenForGeneralManager.bind(this);
        this.updateGeneralManagersDescription = this.updateGeneralManagersDescription.bind(this);
        this.handleCloseForManager=this.handleCloseForManager.bind(this);


    }

    componentDidMount() {
        let endCode = window.location.href.split("/")[window.location.href.split("/").length - 1];
        if (endCode !== "DisplayPermissionForm") {

            this.getData().then((data) => {

                this.setState({
                    permissionID: data.permissionID,
                    userID: data.userID,
                    personalName: data.personalName,

                    isPermissionActive: data.isPermissionActive,
                    demandDateOfPermission: data.demandDateOfPermission,

                    beginDateOfPermission: data.beginDateOfPermission,
                    endDateOfPermission: data.endDateOfPermission,

                    begDateSelectionStat: data.begDateSelectionStat,
                    endDateSelectionStat: data.endDateSelectionStat,

                    foldCode: data.foldCode,
                    areaCode: data.areaCode,

                    permissionDescription: data.permissionDescription,

                    selectVehicleUsageName: data.selectVehicleUsageName,
                    selectVehicleUsageID: data.selectVehicleUsageID,

                    priceOfTrainOrBus: data.priceOfTrainOrBus,
                    totalDistanceOfIndividualCar: data.totalDistanceOfIndividualCar,

                    displayPermissionName: data.displayPermissionName,
                    setPermissionType: data.setPermissionType,

                    chiefConfirmStatus: data.chiefConfirmStatus,
                    chiefsDescription: data.chiefsDescription,

                    generalManagerConfirmStatus: data.generalManagerConfirmStatus,
                    generalManagerDescription: data.generalManagerDescription,

                })
            });
        }
    }

    handleClickOpen(chiefConfirStat){
        this.setState({
           open: true,
           chiefConfirmStatus:chiefConfirStat
        });
    };

    handleClickOpenForGeneralManager(generalManagerConfirmStat){
        this.setState({
            open: true,
            generalManagerConfirmStatus:generalManagerConfirmStat
        });
        console.log(this.state.generalManagerConfirmStatus,"Yönetici confirm stat");
    };

    updateChiefsDescription(event) {
        //console.log(event.target.value+"---");
        this.setState({
            chiefsDescription: event.target.value
        })
    }

    updateGeneralManagersDescription(event) {
        //console.log(event.target.value+"---");
        this.setState({
            generalManagerDescription: event.target.value
        })
    }

    handleClose(){
        this.setState({
            open:false
        });
        let unPermisID = window.location.href.split("/")[window.location.href.split("/").length - 1];
        api.put('/changeChiefStatus/', {
            permissionID: unPermisID,
            chiefConfirmStatus: this.state.chiefConfirmStatus,
            chiefsDescription:this.state.chiefsDescription
        }).then(r =>
            console.log(r)
        )
        this.props.history.push({
            pathname: '/PersonelScreens/PreviousPermissons',
        })
    };

    handleCloseForManager(){
        this.setState({
            open:false
        });

        let unPermisID = window.location.href.split("/")[window.location.href.split("/").length - 1];
        api.put('/changeGeneralManagerStatus/', {
            permissionID: unPermisID,
            generalManagerConfirmStatus: this.state.generalManagerConfirmStatus,
            generalManagerDescription:this.state.generalManagerDescription
        }).then(r =>
            console.log(r)
        )
        this.props.history.push({
            pathname: '/PersonelScreens/PreviousPermissons',
        })
    };

    getData() {
        return (api.get('/DisplayPermissionForm/' + this.endCode)
            .then(
                function (response) {
                    return response.data.usersPermission
                }))
    }

    displayButtonsForPermission() {
        let endCode = window.location.href.split("/")[window.location.href.split("/").length - 1];
        //
        if (this.state.userStatus === 3) {
            if (endCode === "DisplayPermissionForm") {
                return displayPersonelsButtonsForForm(
                    this.props,
                    this.state.userID,
                    this.state.userStatus,
                    this.state.personalName,

                    this.state.demandDateOfPermission,
                    this.state.beginDateOfPermission,
                    this.state.endDateOfPermission,

                    this.state.foldCode,
                    this.state.areaCode,
                    this.state.selectVehicleUsageName,
                    this.state.selectVehicleUsageID,
                    this.state.permissionDescription,
                    this.state.personalCarUsage,
                    this.state.totalDistanceOfIndividualCar,
                    this.state.priceOfTrainOrBus,
                    this.state.setPermissionType,
                    this.state.chiefID,
                    this.state.generalManagerID
                )
            } else {
                if (this.state.displayStatus !== 1) {
                    return (
                        <div style={{
                            display: "flex",
                            flex: 3,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <Col>
                                <Row style={{
                                    display: "flex",
                                    flex: 3,
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>

                                    <button type="button"
                                            onClick={() => {
                                                this.handleClickOpenForGeneralManager(2)
                                            }}

                                            className="btn btn-danger" style={{
                                        display: "flex",
                                        marginRight: "5px",
                                        flex: 1,
                                        justifyContent: "center",
                                        borderRadius: "5%",
                                        textAlign: "center",
                                        fontWeight: "normal"
                                    }}>
                                        <h1 style={{
                                            display: "flex",
                                            flex: 1,
                                            justifyContent: "center",
                                            fontSize: "15px",
                                            margin: "auto"
                                        }}>
                                            TALEBİ REDDET
                                        </h1>
                                    </button>

                                    <button type="button" className="btn btn-success" style={{
                                        display: "flex",
                                        flex: 1,
                                        borderRadius: "5%",
                                        textAlign: "center",
                                        justifyContent: "center"
                                    }} onClick={() => {
                                        this.handleClickOpenForGeneralManager(1)
                                    }}>
                                        <h1 style={{
                                            display: "flex",
                                            flex: 1,
                                            justifyContent: "center",
                                            fontSize: "15px",
                                            margin: "auto"
                                        }}>
                                            TALEBİ ONAYLA
                                        </h1>
                                    </button>

                                    <Dialog
                                        open={this.state.open}
                                        onClose={this.handleClose}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogTitle id="alert-dialog-title">{"AÇIKLAMANIZ"}</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-description">
                                                 <textarea id ="textID" placeholder="İzin Açıklamanızı Doldurunuz" maxLength="500"
                                                           value={this.state.generalManagerDescription || ""}
                                                           className="form-control" rows="4" onChange={this.updateGeneralManagersDescription}/>
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={this.handleCloseForManager} color="primary" autoFocus>
                                                GÖNDER
                                            </Button>
                                        </DialogActions>
                                    </Dialog>

                                </Row>
                            </Col>
                        </div>
                    )
                }
            }
        }
        else if (this.state.userStatus === 2) {
            if (endCode === "DisplayPermissionForm") {
                return displayPersonelsButtonsForForm(
                    this.props,
                    this.state.userID,
                    this.state.userStatus,
                    this.state.personalName,

                    this.state.demandDateOfPermission,
                    this.state.beginDateOfPermission,
                    this.state.endDateOfPermission,

                    this.state.foldCode,
                    this.state.areaCode,
                    this.state.selectVehicleUsageName,
                    this.state.selectVehicleUsageID,
                    this.state.permissionDescription,
                    this.state.personalCarUsage,
                    this.state.totalDistanceOfIndividualCar,
                    this.state.priceOfTrainOrBus,
                    this.state.setPermissionType,
                    this.state.chiefID,
                    this.state.generalManagerID
                )
            } else {
                if (this.state.displayStatus !== 1) {
                    return (
                        <div style={{
                            display: "flex",
                            flex: 3,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <Col>
                                <Row style={{
                                    display: "flex",
                                    flex: 3,
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>

                                    <button type="button"
                                            onClick={() => {
                                                this.handleClickOpen(2)
                                            }}

                                        className="btn btn-danger" style={{
                                        display: "flex",
                                        marginRight: "5px",
                                        flex: 1,
                                        justifyContent: "center",
                                        borderRadius: "5%",
                                        textAlign: "center",
                                        fontWeight: "normal"
                                    }}>
                                        <h1 style={{
                                            display: "flex",
                                            flex: 1,
                                            justifyContent: "center",
                                            fontSize: "15px",
                                            margin: "auto"
                                        }}>
                                            TALEBİ REDDET
                                        </h1>
                                    </button>

                                    <button type="button" className="btn btn-success" style={{
                                        display: "flex",
                                        flex: 1,
                                        borderRadius: "5%",
                                        textAlign: "center",
                                        justifyContent: "center"
                                    }} onClick={() => {
                                            this.handleClickOpen(1)
                                    }}>
                                        <h1 style={{
                                            display: "flex",
                                            flex: 1,
                                            justifyContent: "center",
                                            fontSize: "15px",
                                            margin: "auto"
                                        }}>
                                            TALEBİ ONAYLA
                                        </h1>
                                    </button>

                                    <Dialog
                                        open={this.state.open}
                                        onClose={this.handleClose}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogTitle id="alert-dialog-title">{"AÇIKLAMANIZ"}</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-description">
                                                 <textarea id ="textID" placeholder="İzin Açıklamanızı Doldurunuz" maxLength="500"
                                                           value={this.state.chiefsDescription || ""}
                                                           className="form-control" rows="4" onChange={this.updateChiefsDescription}/>
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={this.handleClose} color="primary" autoFocus>
                                                GÖNDER
                                            </Button>
                                        </DialogActions>
                                    </Dialog>

                                </Row>
                            </Col>
                        </div>
                    )
                }
            }
        } else if (this.state.userStatus === 1) {

            if (endCode === "DisplayPermissionForm") {

                return displayPersonelsButtonsForForm(
                    this.props,
                    this.state.userID,
                    this.state.userStatus,
                    this.state.personalName,

                    this.state.demandDateOfPermission,
                    this.state.beginDateOfPermission,
                    this.state.endDateOfPermission,

                    this.state.foldCode,
                    this.state.areaCode,
                    this.state.selectVehicleUsageName,
                    this.state.selectVehicleUsageID,
                    this.state.permissionDescription,
                    this.state.personalCarUsage,
                    this.state.totalDistanceOfIndividualCar,
                    this.state.priceOfTrainOrBus,
                    this.state.setPermissionType,
                    this.state.chiefID,
                    this.state.generalManagerID
                )
            }
        }
    }


    render() {

        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 10
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 9,
                    border: "0.2px solid black"
                }}>
                    <div
                        style={{
                            display: "flex",
                            flex: 1,
                            marginTop: "4px",
                            marginBottom: "4px",
                            border: "0.6px solid black"
                        }}>
                        {displayLogoAndMainDescription(this.state.areaCode, this.state.foldCode)}
                    </div>

                    <div style={{
                        display: "flex",
                        flex: 1,
                        marginTop: "4px",
                        marginBottom: "4px",
                        border: "0.6px solid black"
                    }}>
                        {displayPermissionTypeAndRest(this.state.setPermissionType)}
                    </div>
                    <div style={{
                        display: "flex",
                        flex: 1,
                        marginTop: "4px",
                        marginBottom: "4px",
                        border: "0.6px solid black"
                    }}>
                        {displayPersonalInformationPart(this.state.personalName, new Date(this.state.demandDateOfPermission))}
                    </div>
                    <div style={{
                        display: "flex",
                        flex: 1,
                        marginTop: "4px",
                        marginBottom: "4px",
                        border: "0.6px solid black"
                    }}>

                        {

                            displayEmployeesPermissionDates(
                                new Date(
                                    this.state.beginDateOfPermission
                                ),
                                new Date(
                                    this.state.endDateOfPermission
                                )
                            )}
                    </div>
                    <div style={{
                        display: "flex",
                        flex: 1,
                        marginTop: "4px",
                        marginBottom: "4px",
                        border: "0.6px solid black"
                    }}>
                        {displayVehicleUsagesOfPersonel(this.state.selectVehicleUsageID)}
                    </div>
                    <div style={{
                        display: "flex",
                        flex: 1,
                        marginTop: "4px",
                        marginBottom: "4px",
                        border: "0.6px solid black"
                    }}>
                        {displayTheExplanationOfPermission(this.state.permissionDescription)}
                    </div>
                    <div style={{
                        display: "flex",
                        flex: 1,
                        marginTop: "4px",
                        marginBottom: "4px",
                        border: "0.6px solid black"
                    }}>
                        {displayDetailsOfVehicleUsage(this.state.totalDistanceOfIndividualCar, this.state.priceOfTrainOrBus, this.state.selectVehicleUsageID)}
                    </div>
                    <div style={{
                        display: "flex",
                        flex: 1,
                        marginTop: "4px",
                        marginBottom: "4px",
                        border: "0.6px solid black"
                    }}>
                        {displayTheAcceptionPart(this.state.personalName, this.state.personalName, this.state.personalName)}
                    </div>

                    <div style={{
                        display: "flex",
                        flex: 1,
                        marginTop: "4px",
                        marginBottom: "4px",
                        border: "0.6px solid black"
                    }}>
                        {displayFormHRrelatedInfo()}
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    flex: 1,
                    marginTop: "4px",
                    marginBottom: "4px"
                }}>

                    {this.displayButtonsForPermission()}

                </div>

            </div>
        )
    }
}


/*function */

//ÜST BAŞLIĞIN OLDUĞU KOMPONENT ( __1__ )
function displayLogoAndMainDescription(areaCode, foldNumb) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            flex: 5,
            border: "0.1px solid black"
        }}>
            <img src={Logo} alt="Logo" style={{
                display: "flex",
                flex: 1,
                width: "200px",
                height: "100px",
                margin: "0.1vw",
                border: "0.1px solid black",
                borderRadius: "2%"
            }}/>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 4,

            }}>
                <div style={{
                    display: "flex",
                    flex: 2,
                    justifyContent: "flex-start",
                    border: "0.1px solid black",
                    margin: "0.1vw"
                }}>
                    <h1 style={{
                        display: "flex",
                        flex: 1.8,
                        justifyContent: "center",
                        fontSize: "3vw",
                        fontWeight: "normal",
                        margin: "auto",
                        fontFamily: "Arya"
                    }}>
                        DESIRD TASARIM
                    </h1>

                    <h1 style={{
                        display: "flex",
                        flex: 0.2,
                        fontSize: "2.5vw",
                        justifyContent: "center",
                        margin: "auto",
                        fontFamily: "Arya"
                    }}>
                        {areaCode}
                    </h1>
                </div>

                <div style={{
                    display: "flex",
                    flex: 2,
                    justifyContent: "flex-start",
                    border: "0.1px solid black",
                    margin: "0.1vw"
                }}>
                    <h1 style={{
                        display: "flex",
                        flex: 1.9,
                        textAlign: "center",
                        justifyContent: "center",
                        fontSize: "2.5vw",
                        fontWeight: "normal",
                        margin: "auto",
                        fontFamily: "Arya"
                    }}>
                        PERSONEL İZİN BELGESİ FORMU
                    </h1>

                    <h1 style={{
                        display: "flex",
                        flex: 0.1,
                        fontSize: "2.5vw",
                        justifyContent: "center",
                        margin: "auto",
                        border: "0.5px solid black",
                        fontFamily: "Arya"
                    }}>
                        {foldNumb}
                    </h1>
                </div>
            </div>
        </div>
    );
}

//ÜSTTEN 2.BLOK KOMPONENT İZİN TÜRÜ ALINIR, BİR KOMPONENTİ DE İÇERDE YARATIR.
function displayPermissionTypeAndRest(perTypeID) {
    console.log(perTypeID, "DİYORR")
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            flex: 6
        }}>
            <div style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                border: "0.5px solid black",
                borderRadius: "2%",
                textAlign: "center"
            }}>
                <h1 style={{
                    display: "flex",
                    flex: 1,
                    fontFamily: "Arya",
                    fontSize: "22px",
                    fontWeight: "bold",
                    margin: "auto",
                    justifyContent: "center"
                }}>
                    İZİN TÜRÜ
                </h1>

            </div>
            <div style={{
                display: "flex",
                flex: 5
            }}>
                {perAccCompt(perTypeID)}
            </div>
        </div>
    );
}

//İZİN TİPİ SEÇME COMPONENTİ
function perAccCompt(perTypeID) {


    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            flex: 6,
            border: "0.2px solid black"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                flex: 3
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 1,
                    borderRight: "0.1px solid black",
                    borderBottom: "0.1px solid black"
                }}>
                    <h1 style={{
                        display: "flex",
                        justifyContent: "center",
                        flex: 0.8,
                        fontFamily: "Arya",
                        fontSize: "18px",
                        margin: "auto"
                    }}>
                        Yıllık İzin
                    </h1>

                    <input disabled checked={perTypeID === "1"}
                           type="checkbox" style={{
                        margin: "auto",
                        display: "flex",
                        flex: 0.2,
                        height: "80%",
                    }}/>
                </div>

                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 1,
                    borderRight: "0.1px solid black",
                    borderBottom: "0.1px solid black"
                }}>
                    <h1 style={{
                        display: "flex",
                        flex: 0.8,
                        justifyContent: "center",
                        fontFamily: "Arya",
                        fontSize: "18px",
                        margin: "auto"
                    }}>
                        Görevli
                    </h1>

                    <input type="checkbox" disabled checked={perTypeID === "2"}
                           style={{
                               display: "flex",
                               flex: 0.2,
                               height: "80%",
                               margin: "auto"
                           }}/>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 1,
                    borderBottom: "0.1px solid black"
                }}>
                    <h1 style={{
                        display: "flex",
                        flex: 0.8,
                        justifyContent: "center",
                        fontFamily: "Arya",
                        fontSize: "18px",
                        margin: "auto"
                    }}>
                        Diğer
                    </h1>
                    <input type="checkbox" disabled checked={perTypeID === "6"} style={{
                        display: "flex",
                        flex: 0.2,
                        height: "80%",
                        margin: "auto"
                    }}/>
                </div>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                flex: 3
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 1,
                    borderRight: "0.1px solid black"
                }}>
                    <h1 style={{
                        display: "flex",
                        justifyContent: "center",
                        flex: 0.8,
                        fontSize: "14px",
                        margin: "auto",
                        fontFamily: "Arya"
                    }}>
                        Ücretsiz İzin
                    </h1>

                    <input type="checkbox" disabled checked={perTypeID === "5"}
                           style={{
                               margin: "auto",
                               display: "flex",
                               flex: 0.2,
                               height: "80%",
                           }}/>
                </div>

                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 1,
                    borderRight: "0.1px solid black"
                }}>
                    <h1 style={{
                        display: "flex",
                        flex: 0.8,
                        justifyContent: "center",
                        fontSize: "16px",
                        fontFamily: "Arya",
                        margin: "auto"
                    }}>
                        Ücretli İzin
                    </h1>

                    <input type="checkbox" disabled checked={perTypeID === "3"} style={{
                        display: "flex",
                        flex: 0.2,
                        height: "80%",
                        margin: "auto"
                    }}/>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 1
                }}>
                    <h1 style={{
                        display: "flex",
                        flex: 0.8,
                        justifyContent: "center",
                        fontSize: "12px",
                        fontFamily: "Arya",
                        margin: "auto"
                    }}>
                        2 Ay İçinde Telafi Yapılacak
                    </h1>
                    <input type="checkbox" disabled checked={perTypeID === "4"} style={{
                        display: "flex",
                        flex: 0.2,
                        height: "80%",
                        margin: "auto"
                    }}/>
                </div>
            </div>
        </div>
    )
}

//This functional component fills that name-surname of personel that demands permisson and date when demans created.
function displayPersonalInformationPart(personalNameSurname, demandDate) {

    let currDate = demandDate.getDate() + "/" + demandDate.getMonth() + "/" + demandDate.getFullYear() +
        "-" +
        demandDate.getHours() + ":"
        + demandDate.getMinutes();

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            flex: 6,
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                flex: 4.333,
                border: "0.5px solid black"

            }}>
                <h1 style={{
                    display: "flex",
                    justifyContent: "center",
                    flex: 1,
                    textAlign: "center",
                    fontFamily: "Arya",
                    margin: "auto",
                    fontSize: "18px",
                    fontWeight: "bold",
                    borderRight: "1px solid black",
                }}
                >AD SOYAD</h1>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    flex: 3.333,
                    borderLeft: "1px solid black",
                }}
                >
                    <h1 style={{
                        display: "flex",
                        flex: 3.333,
                        justifyContent: "center",
                        margin: "auto",
                        fontFamily: "Arya",
                        fontSize: "15px",
                        textAlign: "center"
                    }}
                    >
                        {personalNameSurname}
                    </h1>
                </div>
            </div>
            <div style={{
                display: "flex",
                flex: 1.666,
                justifyContent: "center",
                border: "0.5px solid black"
            }}>
                <h1 style={{
                    display: "flex",
                    flex: 1.667,
                    justifyContent: "center",
                    textAlign: "center",
                    margin: "auto",
                    fontSize: "18px",
                    fontFamily: "Arya",
                }}
                >Talep Tarih : {currDate}</h1>
            </div>
        </div>
    );
}

function timeDiffCalc(dateFuture, dateNow) {
    let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;

    // calculate days
    const days = Math.floor(diffInMilliSeconds / 86400);
    diffInMilliSeconds -= days * 86400;


    // calculate hours
    const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
    diffInMilliSeconds -= hours * 3600;


    // calculate minutes
    const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
    diffInMilliSeconds -= minutes * 60;

    let difference = '';
    if (days > 0) {
        difference += (days === 1) ? `${days} gün, ` : `${days} gün, `;
    }

    difference += (hours === 0 || hours === 1) ? `${hours} saat, ` : `${hours} saat, `;

    difference += (minutes === 0 || hours === 1) ? `${minutes} dakika` : `${minutes} dakika`;

    return difference;
}

//BLOCK FOUR
function displayEmployeesPermissionDates(beginDateOfPermission, endDateOfPermission) {

    return (

        <div style={{
            display: "flex",
            flexDirection: "row",
            flex: 3,
            border: "0.2px solid black"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 3

            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 3,
                    textAlign: "center"
                }}>
                    <div style={{
                        display: "flex",
                        flex: 1,
                        textAlign: "center",
                        alignItems: "center",
                        borderTop: "0px",
                        borderRight: "0.5px solid black"
                    }}>
                        <h1 style={{
                            display: "flex",
                            flex: 1,
                            justifyContent: "center",
                            fontSize: "15px",
                            fontWeight: "bold",
                            margin: "auto",
                            fontFamily: "Arya",
                            borderBottom: "1px solid black",
                        }}> İZİN </h1>
                    </div>

                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        flex: 1,
                        alignItems: "center",
                        border: "0.2px solid black",

                    }}>

                        <h1 style={{
                            display: "flex",
                            flex: 1,
                            justifyContent: "center",
                            fontSize: "15px",
                            margin: "auto",
                            fontFamily: "Arya",
                            fontWeight: "bold",
                            borderBottom: "1px solid black",
                        }}>TARİHİ</h1>
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        flex: 1,
                        alignItems: "center",
                        border: "0.2px solid black",
                        borderTop: "0px",
                        borderBottom: "0px",
                    }}>
                        <h1 style={{
                            display: "flex",
                            flex: 1,
                            justifyContent: "center",
                            fontSize: "15px",
                            margin: "auto",
                            fontWeight: "bold",
                            fontFamily: "Arya"
                        }}>SAATİ</h1>
                    </div>
                </div>
            </div>


            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 3
            }}>
                <div style={{
                    display: "flex",
                    flex: 1,
                    textAlign: "center",
                    alignItems: "center",
                    borderLeft: "0.5px solid black",
                    borderRight: "0.5px solid black",
                    borderTop: "0px"
                }}>
                    <h1 style={{
                        display: "flex",
                        flex: 1,
                        justifyContent: "center",
                        fontSize: "15px",
                        margin: "auto",
                        fontWeight: "bold",
                        fontFamily: "Arya",
                        borderBottom: "1px solid black",
                    }}>BAŞLANGIÇ</h1>
                </div>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    flex: 1,
                    alignItems: "center",
                    border: "0.2px solid black",
                    borderRight: "0px",
                }}>
                    <h1 style={{
                        display: "flex",
                        flex: 1,
                        justifyContent: "center",
                        fontSize: "15px",
                        margin: "auto",
                        fontFamily: "Arya"
                    }}>{
                        beginDateOfPermission.getDate() +
                        "/" +
                        (beginDateOfPermission.getMonth() + 1) +
                        "/" +
                        beginDateOfPermission.getFullYear()
                    }</h1>
                </div>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    flex: 1,
                    alignItems: "center",
                    border: "0.2px solid black",
                    borderTop: "0px",
                    borderBottom: "0px",
                    borderRight: "0px",
                }}>
                    <h1 style={{
                        display: "flex",
                        flex: 1,
                        justifyContent: "center",
                        fontSize: "15px",
                        margin: "auto",
                        fontFamily: "Arya"
                    }}>{beginDateOfPermission.getHours() + ":" + beginDateOfPermission.getMinutes()}</h1>
                </div>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 3,
                textAlign: "center"
            }}>
                <div style={{
                    display: "flex",
                    flex: 1,
                    textAlign: "center",
                    alignItems: "center",
                    borderTop: "0px",
                    borderLeft: "0.5px solid black"
                }}>
                    <h1 style={{
                        display: "flex",
                        flex: 1,
                        justifyContent: "center",
                        fontSize: "15px",
                        fontWeight: "bold",
                        margin: "auto",
                        fontFamily: "Arya",
                        borderBottom: "1px solid black",
                        borderRight: "1px solid black",
                    }}>BİTİŞ</h1>
                </div>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    flex: 1,
                    alignItems: "center",
                    border: "0.2px solid black",
                    borderRight: "0px",

                }}>
                    <h1 style={{
                        display: "flex",
                        flex: 1,
                        justifyContent: "center",
                        fontSize: "15px",
                        margin: "auto",
                        fontFamily: "Arya"
                    }}>{endDateOfPermission.getDate() +
                    "/" +
                    (endDateOfPermission.getMonth() + 1) +
                    "/" +
                    endDateOfPermission.getFullYear()}</h1>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    flex: 1,
                    alignItems: "center",
                    border: "0.2px solid black",
                    borderTop: "0px",
                    borderBottom: "0px",
                    borderRight: "0px",
                }}>
                    <h1 style={{
                        display: "flex",
                        flex: 1,
                        justifyContent: "center",
                        fontSize: "15px",
                        margin: "auto",
                        fontFamily: "Arya"
                    }}>{endDateOfPermission.getHours() + ":" + endDateOfPermission.getMinutes()}</h1>
                </div>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 3,
                textAlign: "center"
            }}>
                <div style={{
                    display: "flex",
                    flex: 1,
                    textAlign: "center",
                    alignItems: "center",
                    borderTop: "0px",
                    borderLeft: "1px solid black"
                }}>
                    <h1 style={{
                        display: "flex",
                        flex: 1,
                        justifyContent: "center",
                        fontSize: "15px",
                        margin: "auto",
                        fontFamily: "Arya",
                        fontWeight: "bold",
                        borderBottom: "1px solid black",
                    }}>İZİN SÜRESİ</h1>
                </div>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    flex: 2,
                    alignItems: "center",
                    border: "0.2px solid black",
                    borderBottom: "0px",
                }}>
                    <h1 style={{
                        display: "flex",
                        flex: 1,
                        justifyContent: "center",
                        fontSize: "15px",
                        margin: "auto",
                        fontFamily: "Arya"
                    }}> {timeDiffCalc(endDateOfPermission, beginDateOfPermission)}</h1>
                </div>
            </div>
        </div>
    );
}

function displayVehicleUsagesOfPersonel(vehicleUsageID) {
    let companyCarUsage;

    companyCarUsage = vehicleUsageID === "v2";
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flex: 4,
            border: "0.2px solid black",
        }}>
            <div style={{
                display: "flex",
                flex: 2,
                justifyContent: "center",
                textAlign: "center",
                margin: "auto"
            }}
            >
                <h1 style={{
                    display: "flex",
                    flex: 2,
                    justifyContent: "center",
                    textAlignment: "center",
                    fontSize: "12px",
                    fontFamily: "Arya",
                    margin: "auto"
                }}>
                    GÖREVLİ İSE ŞİRKET ARACI KULLANACAK MI :
                </h1>

            </div>
            <div style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
                alignItems: "center",
                flex: 0.60,
                paddingLeft: "30px",
                borderLeft: "0.1px solid black",
                textAlignment: "center",
                fontFamily: "Arya",
                fontSize: "16px"
            }}
            >
                EVET
                <input style={{
                    display: "flex",
                    justifyContent: "center",
                    flex: 0.4,
                }} type="checkbox" disabled checked={companyCarUsage}/>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "flex-start",
                flex: 0.60,
                alignItems: "center",
                paddingLeft: "20px",
                borderLeft: "0.1px solid black",
                textAlignment: "center",
                fontSize: "16px",
                fontFamily: "Arya"
            }}
            >
                HAYIR
                <input disabled checked={!companyCarUsage} style={{
                    display: "flex",
                    flex: 0.40
                }} type="checkbox"/>
            </div>

        </div>
    );
}

//HERE THE EXPLANATION OF PERMISSON DEMAND THAT DESCRIBED BY PERSONEL11
function displayTheExplanationOfPermission(explOfPer) {
    return (
        <div style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            flexDirection: "row",
            border: "0.4px solid black",
        }}>
            <h1 style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "13px",
                flex: 0.1,
                padding: "0.1vw",
                fontWeight: "bold",
                height: "100%",
                fontFamily: "Arya",
                margin: "auto",
                borderRight: "1.5px solid black",

            }}>AÇIKLAMA:
            </h1>

            <p style={{
                display: "flex",
                alignItems: "row",
                justifyContent: "flex-start",
                flexDirection: "row",
                flex: 0.9,
                wordBreak: "break-word",
                fontFamily: "Arya",
                paddingLeft: "5px"
            }}>
                {explOfPer}
            </p>
        </div>
    )
}

//HERE WE TAKE
function displayDetailsOfVehicleUsage(kiloMeter, priceTL, carUsageID) {


    return (
        <div style={{
            display: "flex",
            flex: 2,
            flewDirection: "row",
            justifyContent: "center",
            border: "0.35px solid black"
        }}>
            <div style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
                alignItems: "center",
                flex: 2,
                borderLeft: "0.1px solid black",
            }}
            >
                <h1 style={{
                    display: "flex",
                    justifyContent: "center",
                    flex: 1,
                    fontFamily: "Arya",
                    fontSize: "16px",
                    margin: "auto"
                }}>
                    Kendi Aracı:
                </h1>

                <input style={{
                    display: "flex",
                    flex: 0.3,
                }} disabled checked={carUsageID === "v4"} type="checkbox"/>
                <p style={{
                    display: "flex",
                    justifyContent: "center",
                    borderLeft: "0.1px solid black",
                    alignItems: "center",
                    flex: 0.7,
                    margin: "auto",
                    fontFamily: "Arya",
                    fontSize: 15
                }}> {kiloMeter} km</p>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
                alignItems: "center",
                flex: 2,
                borderLeft: "0.1px solid black",
                textAlignment: "center"
            }}
            >
                <h1 style={{
                    display: "flex",
                    justifyContent: "center",
                    flex: 1,
                    fontFamily: "Arya",
                    fontSize: "16px",
                    margin: "auto"
                }}>
                    Otobus/Travmay:
                </h1>
                <input style={{
                    display: "flex",
                    flex: 0.3
                }} disabled checked={carUsageID === "v3"} type="checkbox"/>
                <p style={{
                    display: "flex",
                    fontSize: 15,
                    alignItems: "center",
                    textAlignment: "center",
                    justifyContent: "center",
                    borderLeft: "0.1px solid black",
                    flex: 0.7,
                    margin: "auto",
                    fontFamily: "Arya",
                }}> {priceTL} ₺</p>
            </div>
        </div>
    )
}

function displayTheAcceptionPart(employeeName, chiefName, generalManagerName) {
    const imza1 = require('./PrivateData/ExampleSignature.png');
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            flex: 21,

        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                flex: 3,
                textAlign: "center"
            }}>
                <h1 style={{
                    display: "flex",
                    justifyContent: "center",
                    flex: 1,
                    fontSize: "12px",
                    border: "0.2px solid black",
                    margin: "auto",
                    fontFamily: "Arya",
                    padding: "5px",
                    fontWeight: "bold",
                }}>
                    İZİNLİ PERSONEL ONAYI
                </h1>

                <h1 style={{
                    display: "flex",
                    justifyContent: "center",
                    flex: 1,
                    fontSize: "12px",
                    border: "0.2px solid black",
                    margin: "auto",
                    padding: "5px",
                    fontFamily: "Arya",
                    fontWeight: "bold",

                }}>
                    SORUMLU AMİR ONAYI
                </h1>

                <h1 style={{
                    display: "flex",
                    justifyContent: "center",
                    flex: 1,
                    fontWeight: "bold",
                    fontSize: "12px",
                    border: "0.2px solid black",
                    margin: "auto",
                    padding: "5px",
                    fontFamily: "Arya"

                }}>
                    GENEL MÜDÜR ONAYI
                </h1>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                flex: 6,
                textAlign: "center"
            }}>
                <h1 style={{

                    display: "flex",
                    justifyContent: "center",
                    flex: 2,
                    fontSize: "15px",
                    border: "0.2px solid black",
                    padding: "10px",
                    margin: "auto",
                    fontFamily: "Arya"
                }}>
                    {employeeName}
                </h1>

                <h1 style={{
                    display: "flex",
                    justifyContent: "center",
                    flex: 2,
                    fontSize: "15px",
                    border: "0.2px solid black",
                    padding: "10px",
                    margin: "auto",
                    fontFamily: "Arya"
                }}>
                    {chiefName}
                </h1>

                <h1 style={{
                    display: "flex",
                    justifyContent: "center",
                    flex: 2,
                    fontSize: "15px",
                    border: "0.2px solid black",
                    padding: "10px",
                    margin: "auto",
                    fontFamily: "Arya"
                }}>
                    {generalManagerName}
                </h1>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                flex: 12,
                textAlignment: "center"
            }}>
                <img src={imza1} alt="imza" style={{
                    border: "0.5px solid black",
                    width: "33vw",
                    height: "5vw",
                    display: "flex",
                    justifyContent: "center",
                    flex: 4
                }}/>
                <img src={imza1} alt="imza" style={{
                    border: "0.5px solid black",
                    display: "flex",
                    width: "33vw",
                    height: "5vw",
                    justifyContent: "center",
                    flex: 4
                }}/>
                <img src={imza1} alt="imza" style={{
                    border: "0.5px solid black",
                    width: "33vw",
                    height: "5vw",
                    display: "flex",
                    justifyContent: "center",
                    flex: 4
                }}/>
            </div>

        </div>
    )
}

function displayFormHRrelatedInfo() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            flex: 4
        }}>
            <h1 style={{
                display: "flex",
                justifyContent: "center",
                flex: 0.6,
                fontSize: "1vw",
                margin: "auto",
                fontFamily: "Arya"

            }}>
                Form No: IKFR002
            </h1>

            <h1 style={{
                display: "flex",
                justifyContent: "center",
                flex: 1,
                fontSize: "1vw",
                margin: "auto",
                fontFamily: "Arya"
            }}>
                Form Yayın Tarihi: 21/09/2016
            </h1>
            <h1 style={{
                display: "flex",
                justifyContent: "center",
                flex: 1.4,
                fontSize: "1vw",
                margin: "auto",
                fontFamily: "Arya"
            }}>
                Form Revizyon Tarihi :02.07.2019
            </h1>
            <h1 style={{
                display: "flex",
                justifyContent: "center",
                flex: 1,
                fontSize: "1vw",
                margin: "auto",
                fontFamily: "Arya"
            }}>
                Form Revizyon No: 0002
            </h1>


        </div>

    )
}

function displayPersonelsButtonsForForm(props, userIDS,
                                        userStatusS, personalNameS, demandDateOfPermissionS, beginDateOfPermissionS,
                                        endDateOfPermissionS, foldCodeS, areaCodeS, selectVehicleUsageNameS,
                                        selectVehicleUsageIDS, permissionDescriptionS, personalCarUsageS, totalDistanceOfIndividualCarS,
                                        priceOfTrainOrBusS, setPermissionTypeS, chiefIDS, generalManagerIDS
) {

    return (
        <div style={{
            display: "flex",
            flex: 3,
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Col>
                <Row style={{
                    display: "flex",
                    flex: 3,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Link to="PersonelNavigation" style={{
                        textDecoration: "none",
                        display: "flex",
                        flex: 1
                    }}>
                        <button type="button" className="btn btn-danger" style={{
                            display: "flex",
                            marginRight: "5px",
                            flex: 1,
                            justifyContent: "center",
                            borderRadius: "5%",
                            textAlign: "center",
                            fontWeight: "normal"
                        }}>
                            <h1 style={{
                                display: "flex",
                                flex: 1,
                                justifyContent: "center",
                                fontSize: "15px",
                                margin: "auto"
                            }}>
                                İPTAL ET
                            </h1>
                        </button>
                    </Link>
                    <Link to="FillingThePermissionForm" style={{
                        textDecoration: "none",
                        display: "flex",
                        flex: 1,
                        marginRight: "5px"
                    }}>
                        <button type="button" className="btn btn-info" style={{
                            display: "flex",
                            flex: 1,
                            borderRadius: "5%",
                            textAlign: "center",
                            justifyContent: "center"
                        }}>
                            <h1 style={{
                                display: "flex",
                                flex: 1,
                                justifyContent: "center",
                                fontSize: "14px",
                                margin: "auto"
                            }}>
                                DÜZENLE
                            </h1>
                        </button>
                    </Link>

                    <button type="button" onClick={() => {

                        api.post('/createPermission',
                            {
                                personalName: personalNameS,
                                userID: userIDS,
                                chiefID: chiefIDS,
                                generalManagerID: generalManagerIDS,
                                userStatus: userStatusS,
                                displayStatus: 1,

                                demandDateOfPermission: demandDateOfPermissionS,
                                beginDateOfPermission: beginDateOfPermissionS,
                                endDateOfPermission: endDateOfPermissionS,
                                setPermissionType: setPermissionTypeS,
                                foldCode: foldCodeS,
                                areaCode: areaCodeS,
                                selectVehicleUsageName: selectVehicleUsageNameS,
                                selectVehicleUsageID: selectVehicleUsageIDS,
                                priceOfTrainOrBus: priceOfTrainOrBusS,
                                totalDistanceOfIndividualCar: totalDistanceOfIndividualCarS,
                                permissionDescription: permissionDescriptionS,
                                personalCarUsage: personalCarUsageS,
                                isPermissionActive: true
                            }).then(res => {

                            if (res.data.stat) {

                                console.log("İZİN YARATILMA BAŞARILI")

                                props.history.push({
                                    pathname: '/PersonelScreens/SuccesDisplaying',
                                })

                                return true;
                            } else {
                                console.log("HATA123")
                                return false;
                            }
                        })


                    }} className="btn btn-success" style={{
                        display: "flex",
                        flex: 1,
                        borderRadius: "5%",
                        textAlign: "center",
                        justifyContent: "center"
                    }}>
                        <h1 style={{
                            display: "flex",
                            flex: 1,
                            justifyContent: "center",
                            fontSize: "15px",
                            margin: "auto"
                        }}>
                            GÖNDER
                        </h1>
                    </button>

                </Row>
            </Col>
        </div>
    )
}
export default connect(mapStateToProps)(DisplayPermissionForm);
