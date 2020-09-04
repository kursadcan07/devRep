import React from "react";
import Logo from "./SystemImages/CompanyLogo.png";
import {Link} from "react-router-dom";
import {Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import {connect} from "react-redux";
import moment from "moment";

const axios = require('axios');

const api = axios.create({
    baseURL: `http://localhost:4000`
})

/*function getManagersNameAndSignaturebyID(givenIDofManager) {
    api.get('/getNameAndSignatureByID/' + givenIDofManager)
        .then(
            function (response) {
                console.log(response)
                return response;
            }
        )


}*/

const mapStateToProps = (state) => {
    return {
        userID: state.permissionReducer.userID,

        userStatus: state.permissionReducer.userStatus,
        displayStatus: state.permissionReducer.displayStatus,

        personalName: state.userLoginReducer.personalName,
        chiefsName:state.userLoginReducer.chiefsName,
        generalManagersName:state.userLoginReducer.generalManagersName,


        demandDateOfPermission:state.permissionReducer.demandDateOfPermission,

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
    constructor(props) {
        super(props);
            this.state = {

                userStatus: this.props.userStatus,
                displayStatus:  this.props.displayStatus,
                isPermissionActive:  this.props.isPermissionActive,
                personalName:  this.props.personalName,
                demandDateOfPermission: this.props.demandDateOfPermission,

                beginDateOfPermission:  this.props.beginDateOfPermission,
                endDateOfPermission: this.props.endDateOfPermission,

                begDateSelectionStat:this.props.begDateSelectionStat,
                endDateSelectionStat: this.props.endDateSelectionStat,

                foldCode: this.props.foldCode,
                areaCode: this.props.areaCode,

                permissionDescription: this.props.permissionDescription,

                selectVehicleUsageName: this.props.selectVehicleUsageName,
                selectVehicleUsageID: this.props.selectVehicleUsageID,

                setPermissionType:this.props.setPermissionType,

                priceOfTrainOrBus: this.props.priceOfTrainOrBus,
                totalDistanceOfIndividualCar: this.props.totalDistanceOfIndividualCar,

                displayThePermissionName: this.props.displayThePermissionName,
                setThePermissionType: this.props.setThePermissionType,

                chiefConfirmStatus: this.props.chiefConfirmStatus,
                chiefsDescription: this.props.chiefsDescription,

                generalManagerConfirmStatus: this.props.generalManagerConfirmStatus,
                generalManagerDescription: this.props.generalManagerDescription,

            }

    }

    componentDidMount() {
        if (this.state.sendPermissionDemand) {
            console.log("Gönderilcek")
        }
        let endCode = window.location.href.split("/")[window.location.href.split("/").length-1];
        console.log(endCode,"fdlsfdslşs")
        if(endCode!=="DisplayPermissionForm"){
            api.get('/DisplayPermissionForm/' +endCode,
            ).then(res => {

                this.setState({
                    userStatus: res.data.usersPermission.userStatus,
                    displayStatus:  res.data.usersPermission.displayStatus,
                    isPermissionActive:  res.data.usersPermission.isPermissionActive,
                    personalName:  res.data.usersPermission.personalName,
                    demandDateOfPermission:  res.data.usersPermission.demandDateOfPermission,

                    beginDateOfPermission:   res.data.usersPermission.beginDateOfPermission,
                    endDateOfPermission:  res.data.usersPermission.endDateOfPermission,

                    begDateSelectionStat: res.data.usersPermission.begDateSelectionStat,
                    endDateSelectionStat: this.props.endDateSelectionStat,

                    foldCode: this.props.foldCode,
                    areaCode: this.props.areaCode,

                    permissionDescription: this.props.permissionDescription,

                    selectVehicleUsageName: this.props.selectVehicleUsageName,
                    selectVehicleUsageID: this.props.selectVehicleUsageID,

                    priceOfTrainOrBus: this.props.priceOfTrainOrBus,
                    totalDistanceOfIndividualCar: this.props.totalDistanceOfIndividualCar,

                    displayThePermissionName: this.props.displayThePermissionName,
                    setThePermissionType: this.props.setThePermissionType,

                    chiefConfirmStatus: this.props.chiefConfirmStatus,
                    chiefsDescription: this.props.chiefsDescription,

                    generalManagerConfirmStatus: this.props.generalManagerConfirmStatus,
                    generalManagerDescription: this.props.generalManagerDescription,


                })
              /*  userStatus:,
                    displayStatus:undefined,
                    isPermissionActive:undefined,
                    personalName:undefined,
                    demandDateOfPermission:undefined,

                    beginDateOfPermission:undefined,
                    endDateOfPermission:undefined,

                    begDateSelectionStat:undefined,
                    endDateSelectionStat:undefined,

                    foldCode:undefined,
                    areaCode:undefined,

                    permissionDescription:undefined,

                    selectVehicleUsageName:undefined,
                    selectVehicleUsageID:undefined,

                    priceOfTrainOrBus:undefined,
                    totalDistanceOfIndividualCar:undefined,

                    displayThePermissionName:undefined,
                    setThePermissionType:undefined,

                    chiefConfirmStatus:undefined,
                    chiefsDescription:undefined,

                    generalManagerConfirmStatus:undefined,
                    generalManagerDescription:undefined,
*/
                }
            )
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
                        {displayPersonalInformationPart(this.state.personalName, this.state.demandDateOfPermission)}
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
                                this.state.beginDateOfPermission.getDate() + "/" +
                                (this.state.beginDateOfPermission.getMonth() + 1) + "/" +
                                this.state.beginDateOfPermission.getFullYear()
                                ,
                                this.state.beginDateOfPermission.getHours() +
                                " " +
                                this.state.beginDateOfPermission.getMinutes(),

                                this.state.endDateOfPermission.getDate() + "/" +
                                (this.state.endDateOfPermission.getMonth() + 1) + "/" +
                                this.state.endDateOfPermission.getFullYear(),

                                this.state.endDateOfPermission.getHours() +
                                " " +
                                this.state.endDateOfPermission.getMinutes(), this.state.beginDateOfPermission,
                                this.state.endDateOfPermission
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
                        {displayTheAcceptionPart(this.state.personalName,this.state.personalName,this.state.personalName)}
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

                    {this.state.displayStatus === 2 && (this.state.userStatus === 1 ? displayManagersButtonsForForm() : displayPersonelsButtonsForForm(this.props,
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
                        this.state.priceOfTrainOrBus
                    ))}

                </div>

            </div>
        )
    }
}

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
                        fontFamily: "Scada"
                    }}>
                        DESIRD TASARIM
                    </h1>

                    <h1 style={{
                        display: "flex",
                        flex: 0.2,
                        fontSize: "2.5vw",
                        justifyContent: "center",
                        margin: "auto",
                        fontFamily: "Scada"
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
                        fontFamily: "Scada"
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
                        fontFamily: "Scada"
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
                    fontFamily: "Scada",
                    fontSize: "22px",
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
                        fontFamily: "Scada",
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
                        fontFamily: "Scada",
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
                        fontFamily: "Scada",
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
                        fontFamily: "Scada"
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
                        fontFamily: "Scada",
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
                        fontFamily: "Scada",
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
                    fontFamily: "Scada",
                    margin: "auto",
                    fontSize: "18px",
                    borderTop: "0px",
                    fontWeight: "normal"
                }}
                >AD SOYAD</h1>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    flex: 3.333,
                    border: "0.5px solid black",
                    borderLeft: "1px solid black",
                    borderTop: "0px"
                }}
                >
                    <h1 style={{
                        display: "flex",
                        flex: 3.333,
                        justifyContent: "center",
                        margin: "auto",
                        fontFamily: "Scada",
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
                justifyContent: "center"
            }}>
                <h1 style={{
                    display: "flex",
                    flex: 1.667,
                    justifyContent: "center",
                    textAlign: "center",
                    margin: "auto",
                    fontSize: "18px",
                    fontFamily: "Scada",
                    borderBottom: "0.5px solid black",
                    borderRight: "0.5px solid black"
                }}
                >Talep Tarih : {demandDate}</h1>
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
function displayEmployeesPermissionDates(permissionStartDate, permissionStartTime, permissionEndDate, permissionEndTime, permissionBegDate, permissionFinishDate) {

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
                            margin: "auto"
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
                            margin: "auto"
                        }}>TARİHİ</h1>
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        flex: 1,
                        alignItems: "center",
                        border: "0.2px solid black",
                        borderTop: "0px"
                    }}>
                        <h1 style={{
                            display: "flex",
                            flex: 1,
                            justifyContent: "center",
                            fontSize: "15px",
                            margin: "auto"
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
                        margin: "auto"
                    }}>BAŞLANGIÇ</h1>
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
                        margin: "auto"
                    }}>{permissionStartDate}</h1>
                </div>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    flex: 1,
                    alignItems: "center",
                    border: "0.2px solid black",
                    borderTop: "0px"
                }}>
                    <h1 style={{
                        display: "flex",
                        flex: 1,
                        justifyContent: "center",
                        fontSize: "15px",
                        margin: "auto"
                    }}>{permissionStartTime}</h1>
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
                        margin: "auto"
                    }}>BİTİŞ</h1>
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
                        margin: "auto"
                    }}>{permissionEndDate}</h1>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    flex: 1,
                    alignItems: "center",
                    border: "0.2px solid black",
                    borderTop: "0px"
                }}>
                    <h1 style={{
                        display: "flex",
                        flex: 1,
                        justifyContent: "center",
                        fontSize: "15px",
                        margin: "auto"
                    }}>{permissionEndTime}</h1>
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
                        margin: "auto"
                    }}>İZİN SÜRESİ</h1>
                </div>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    flex: 2,
                    alignItems: "center",
                    border: "0.2px solid black"
                }}>
                    <h1 style={{
                        display: "flex",
                        flex: 1,
                        justifyContent: "center",
                        fontSize: "15px",
                        margin: "auto"
                    }}> {timeDiffCalc(permissionFinishDate, permissionBegDate)}</h1>
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
                    fontFamily: "Scada",
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
                fontFamily: "Scada",
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
                fontFamily: "Scada"
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
            flexDirection: "row"
        }}>
            <h1 style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "13px",
                flex: 0.1,
                padding: "0.1vw",
                border: "0.2px solid black",
                height: "100%",
                margin: "auto"

            }}>Açıklama:
            </h1>

            <p style={{
                display: "flex",
                alignItems: "row",
                justifyContent: "flex-start",
                flexDirection: "row",
                flex: 0.9,
                wordBreak: "break-word"
            }}>
                {explOfPer}
            </p>
        </div>
    )
}

//HERE WE TAKE
function displayDetailsOfVehicleUsage(kiloMeter, priceTL, carUsageID) {
    console.log(carUsageID);
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
                    fontFamily: "Scada",
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
                    fontFamily: "Scada",
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
                    margin: "auto"
                }}> {priceTL} ₺</p>
            </div>
        </div>
    )
}

function displayTheAcceptionPart(employeeName,chiefName,generalManagerName) {
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
                    padding: "5px"
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
                    padding: "5px"

                }}>
                    SORUMLU AMİR ONAYI
                </h1>

                <h1 style={{
                    display: "flex",
                    justifyContent: "center",
                    flex: 1,
                    fontSize: "13px",
                    border: "0.2px solid black",
                    margin: "auto",
                    padding: "4px"
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
                    margin: "auto"
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
                    margin: "auto"
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
                    margin: "auto"
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
                margin: "auto"
            }}>
                Form No: IKFR002
            </h1>

            <h1 style={{
                display: "flex",
                justifyContent: "center",
                flex: 1,
                fontSize: "1vw",
                margin: "auto"
            }}>
                Form Yayın Tarihi: 21/09/2016
            </h1>
            <h1 style={{
                display: "flex",
                justifyContent: "center",
                flex: 1.4,
                fontSize: "1vw",
                margin: "auto"
            }}>
                Form Revizyon Tarihi :02.07.2019
            </h1>
            <h1 style={{
                display: "flex",
                justifyContent: "center",
                flex: 1,
                fontSize: "1vw",
                margin: "auto"
            }}>
                Form Revizyon No: 0002
            </h1>


        </div>

    )
}

function displayManagersButtonsForForm() {
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
                                TALEBİ REDDET
                            </h1>
                        </button>
                    </Link>
                    <Link to="ReviseMessageSending" style={{
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
                                REVİZE UYARISI GÖNDER
                            </h1>
                        </button>
                    </Link>
                    <Link to="PreviousPermissons" style={{
                        textDecoration: "none",
                        display: "flex",
                        flex: 1
                    }}>
                        <button type="button" className="btn btn-success" style={{
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
                                TALEBİ ONAYLA
                            </h1>
                        </button>
                    </Link>
                </Row>
            </Col>
        </div>
    )
}
/*
const api = axios.create({
    baseURL: `http://localhost:4000`
})*/

function dateConverter(givenDate1) {
    let givenDate= new Date(givenDate1);
    return givenDate.getDate() + "/" +
        (givenDate.getMonth() + 1) + "/" +
        givenDate.getFullYear()
        + "-" +
        givenDate.getHours() +
        ":" +
        givenDate.getMinutes();
}

function displayPersonelsButtonsForForm(props, userIDS,
                                        userStatusS, personalNameS, demandDateOfPermissionS, beginDateOfPermissionS,
                                        endDateOfPermissionS, foldCodeS, areaCodeS, selectVehicleUsageNameS,
                                        selectVehicleUsageIDS, permissionDescriptionS, personalCarUsageS,totalDistanceOfIndividualCarS,
                                        priceOfTrainOrBusS

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
                                userStatus: userStatusS,
                                demandDateOfPermission: dateConverter(demandDateOfPermissionS),
                                beginDateOfPermission: dateConverter(beginDateOfPermissionS),
                                endDateOfPermission: dateConverter(endDateOfPermissionS),
                                foldCode: foldCodeS,
                                areaCode: areaCodeS,
                                selectVehicleUsageName: selectVehicleUsageNameS,
                                selectVehicleUsageID: selectVehicleUsageIDS,
                                priceOfTrainOrBus: priceOfTrainOrBusS,
                                totalDistanceOfIndividualCar:totalDistanceOfIndividualCarS,
                                permissionDescription: permissionDescriptionS,
                                personalCarUsage: personalCarUsageS,
                                isPermissionActive:true
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

