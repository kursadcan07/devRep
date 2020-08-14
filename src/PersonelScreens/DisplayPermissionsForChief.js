import React from "react";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import {Bounce} from "react-reveal";
import {Link} from "react-router-dom";
import {Col} from "react-bootstrap";
import {Row} from "react-bootstrap";

export function displayTheSymbolOfAcception() {
    return (
        <div style={{
            display: "flex",
            margin: "auto",
            flex: 1,
            background: "rgb(0,190,55)",
            borderRadius: "4%"
        }}>
            <h1 style={{
                display: "flex",
                margin: "auto",
                fontSize: "20px"
            }}
            >
                ✔
            </h1>
        </div>
    )
}

export function displayTheSymbolOfRejection() {
    return (
        <div style={{
            display: "flex",
            margin: "auto",
            flex: 1,
            background: "rgb(203,27,27)",
            borderRadius: "4%"
        }}>
            <h1 style={{
                display: "flex",
                margin: "auto",
                fontSize: "20px"
            }}
            >
                ✖
            </h1>
        </div>
    )
}

export function displayTheSymbolOfTheWaiting() {
    return (
        <div style={{
            display: "flex",
            margin: "auto",
            flex: 1,
            background: "rgb(241,241,9)",
            borderRadius: "4%"
        }}>
            <h1 style={{
                display: "flex",
                margin: "auto",
                fontSize: "20px"
            }}
            >
                ⊖
            </h1>
        </div>
    )
}
function displayThePermissionInfoInRow(izinTalepID, izinTalepTarihi, izinBaslangicTarihi, izinBitisTarihi) {
    return (
        <Link to="PermissionDisplay" style={{textDecoration: "none", display: "flex", flex: 7}}>
            <button type="button" style={{display: "flex", flex: 7, border: "0px", margin: "auto"}}>
                <label style={{
                    justifyContent: "left",
                    border: "0.5px solid black",
                    flex: 7,
                    borderRadius: "2%",
                    display: "flex",
                    background: "rgba(7,133,180,0.04)"
                }}
                >
                    <h1 style={{
                        display: "flex",
                        flexDirection: "row",
                        flex: 0.7,
                        fontSize: "12px",
                        margin: "2px",
                        justifyContent: "center"
                    }}>
                        {izinTalepID}
                    </h1>

                    <h1 style={{
                        display: "flex",
                        flexDirection: "row",
                        margin: "2px",
                        flex: 1.3,
                        fontSize: "12px",
                        justifyContent: "center"
                    }}>
                        {izinTalepTarihi}
                    </h1>

                    <h1 style={{
                        display: "flex",
                        flexDirection: "row",
                        flex: 1.3,
                        fontSize: "12px",
                        justifyContent: "center",
                        margin: "2px"
                    }}>
                        {izinBaslangicTarihi}
                    </h1>

                    <h1 style={{
                        display: "flex",
                        flexDirection: "row",
                        flex: 1.3,
                        fontSize: "12px",
                        margin: "2px",
                        justifyContent: "center"
                    }}>
                        {izinBitisTarihi}
                    </h1>

                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        flex: 1.5,
                        fontSize: "12px",
                        justifyContent: "center"
                    }}>
                        {displayTheSymbolOfAcception()}
                    </div>

                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        flex: 1.5,
                        fontSize: "12px",
                        justifyContent: "center"
                    }}>
                        {displayTheSymbolOfRejection()}
                    </div>
                </label>
            </button>
        </Link>
    )
}

export function displayWholePermissionDemands(displayActives, displayAsPersonel) {

    if (displayActives && displayAsPersonel) {
        let izinTalepID = 22;
        let izinTalepTarihi = "22/22/2222";
        let izinBaslangicTarihi = "22/22/2222";
        let izinBitisTarihi = "22/22/2222";
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "row",
                marginTop: "8px",
                border: "0.2px solid black",
                padding: "2px"
            }}>
                {displayThePermissionInfoInRow(izinTalepID, izinTalepTarihi, izinBaslangicTarihi, izinBitisTarihi)}
                {displayThePermissionInfoInRow(izinTalepID, izinTalepTarihi, izinBaslangicTarihi, izinBitisTarihi)}
                {displayThePermissionInfoInRow(izinTalepID, izinTalepTarihi, izinBaslangicTarihi, izinBitisTarihi)}
                {displayThePermissionInfoInRow(izinTalepID, izinTalepTarihi, izinBaslangicTarihi, izinBitisTarihi)}
                {displayThePermissionInfoInRow(izinTalepID, izinTalepTarihi, izinBaslangicTarihi, izinBitisTarihi)}
                {displayThePermissionInfoInRow(izinTalepID, izinTalepTarihi, izinBaslangicTarihi, izinBitisTarihi)}
                {displayThePermissionInfoInRow(izinTalepID, izinTalepTarihi, izinBaslangicTarihi, izinBitisTarihi)}

            </div>
        )
    } else if(displayActives && ! displayAsPersonel) {
        let eskiIzinTalepID = 213;
        let eskiIzinTalepTarihi = "11/11/1111";
        let eskiIzinBaşlangıcTarihi = "11/11/1111";
        let eskiIzinBitisTarihi = "11/11/1111";
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "row",
                marginTop: "8px",
                border: "0.2px solid black",
                padding: "2px"
            }}>
                {displayThePermissionInfoInRow(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}
                {displayThePermissionInfoInRow(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}
                {displayThePermissionInfoInRow(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}
                {displayThePermissionInfoInRow(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}
                {displayThePermissionInfoInRow(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}
                {displayThePermissionInfoInRow(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}
                {displayThePermissionInfoInRow(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}
                {displayThePermissionInfoInRow(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}
                {displayThePermissionInfoInRow(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}

            </div>

        )
    }
    else if(!displayActives && displayAsPersonel){
        let eskiIzinTalepID = 213;
        let eskiIzinTalepTarihi = "11/11/1111";
        let eskiIzinBaşlangıcTarihi = "11/11/1111";
        let eskiIzinBitisTarihi = "11/11/1111";

        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "row",
                marginTop: "8px",
                border: "0.2px solid black",
                padding: "2px"
            }}>
                {displayThePermissionInfoInRow(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}
                {displayThePermissionInfoInRow(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}
                {displayThePermissionInfoInRow(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}
                {displayThePermissionInfoInRow(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}
                {displayThePermissionInfoInRow(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}
                {displayThePermissionInfoInRow(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}
                {displayThePermissionInfoInRow(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}
                {displayThePermissionInfoInRow(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}
                {displayThePermissionInfoInRow(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}

            </div>
        )
    }
    else{
        let eskiIzinTalepID = 213;
        let eskiIzinTalepTarihi = "11/11/1111";
        let eskiIzinBaşlangıcTarihi = "11/11/1111";
        let eskiIzinBitisTarihi = "11/11/1111";
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "row",
                marginTop: "8px",
                border: "0.2px solid black",
                padding: "2px"
            }}>
                {displayThePermissionInfoInRow(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}
                {displayThePermissionInfoInRow(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}
                {displayThePermissionInfoInRow(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}
                {displayThePermissionInfoInRow(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}
                {displayThePermissionInfoInRow(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}
                {displayThePermissionInfoInRow(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}
                {displayThePermissionInfoInRow(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}
                {displayThePermissionInfoInRow(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}
                {displayThePermissionInfoInRow(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}

            </div>
        )
    }
}

class DisplayPermissionsForChief extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayActives: true,
            asPersonel: true
        }

        this.ToggleButton = this.ToggleButton.bind(this);
        this.PersonTypeSelection= this.PersonTypeSelection.bind(this);

    }

    ToggleButton() {
        this.setState((currentState) => ({
            displayActives: !this.state.displayActives,
            asPersonel:this.state.asPersonel
        }));
        console.log(this.state);
    }

    PersonTypeSelection() {
        this.setState((currentState) => ({
            asPersonel: !this.state.asPersonel,
            displayActives: this.state.displayActives
        }));
        console.log(this.state);

    }

    render() {
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 6
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 1,
                    justifyContent: "space-around",
                    margin: "20px"
                }}>
                    <Col>
                        <Row style={{
                            display: "flex",
                            justifyContent: "space-around",
                            flex: 0.80
                        }}
                        >
                            <BootstrapSwitchButton
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    flex: 0.40,
                                    flexDirection: "row"
                                }}
                                width={200}
                                checked={this.state.asPersonel}
                                onlabel='İDARİ'
                                offlabel='PERSONEL'
                                onChange={() => this.PersonTypeSelection()}
                            />
                            <BootstrapSwitchButton
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    flex: 0.40,
                                    flexDirection: "row"
                                }}

                                width={300}
                                checked={this.state.displayActives}
                                onlabel='AKTİF TALEPLER'
                                offlabel='GEÇMİŞ TALEPLER'
                                onChange={() => this.ToggleButton()}
                            />

                        </Row>
                        <Row  style={{
                            display: "flex",
                            flex: 0.1,
                            justifyContent: "flex-end",
                            margin:"5px"
                        }}
                        >
                            <Bounce style={{
                                display: "flex",
                                flex: 0.2,
                                justifyContent: "flex-end",
                            }}
                            >
                                <h1 style={{
                                    display: "flex",
                                    flex: 0.12,
                                    fontSize: "10px",
                                    justifyContent: "flex-end",
                                    marginLeft: "10px"
                                }}>
                                    <div style={{
                                        display: "flex",
                                        flex: 0.04,
                                        justifyContent: "center"
                                    }}>
                                        {displayTheSymbolOfRejection()}
                                        <h1 style={{
                                            display: "flex",
                                            fontSize: "10px",
                                            flex: 0.02,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            margin: "auto"
                                        }}>
                                            RED
                                        </h1>
                                    </div>
                                    <div style={{
                                        display: "flex",
                                        flex: 0.04,
                                        justifyContent: "center"
                                    }}>
                                        {displayTheSymbolOfAcception()}
                                        <h1 style={{
                                            display: "flex",
                                            fontSize: "10px",
                                            flex: 0.02,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            margin: "auto"
                                        }}>
                                            ONAY
                                        </h1>
                                    </div>
                                    <div style={{
                                        display: "flex",
                                        flex: 0.04,
                                        justifyContent: "center",
                                    }}>
                                        {displayTheSymbolOfTheWaiting()}
                                        <h1 style={{
                                            display: "flex",
                                            flex: 0.02,
                                            fontSize: "10px",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            margin: "auto"
                                        }}>
                                            BEKLEMEDE
                                        </h1>
                                    </div>

                                </h1>
                            </Bounce>
                        </Row>
                    </Col>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 1,
                    justifyContent: "flex-end",
                    textAlign: "center"
                }}>
                    <h1
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            flex: 0.15,
                            fontFamily: "Roboto",
                            fontSize: "15px",
                            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            borderRight: "1px solid black",
                            textAlign: "center",
                            border: "0.2px solid black",
                            borderRadius: "3%",
                            margin: "2px",
                            paddingTop: "10px",
                            paddingBottom: "10px"
                        }}>
                        İZİN NO
                    </h1>
                    <h1
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            flex: 0.15,
                            fontFamily: "Roboto",
                            fontSize: "15px",
                            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            borderRight: "1px solid black",
                            textAlign: "center",
                            border: "0.2px solid black",
                            borderRadius: "3%",
                            margin: "2px",
                            paddingTop: "10px",
                            paddingBottom: "10px"
                        }}>
                        İZİN TALEP TARİHİ
                    </h1>
                    <h1
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            flex: 0.15,
                            fontFamily: "Roboto",
                            fontSize: "15px",
                            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            borderRight: "1px solid black",
                            textAlign: "center",
                            border: "0.2px solid black",
                            borderRadius: "3%",
                            margin: "2px",
                            paddingTop: "10px",
                            paddingBottom: "10px"
                        }}>
                        İZİN BAŞLANGIÇ
                    </h1>
                    <h1
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            flex: 0.15,
                            fontFamily: "Roboto",
                            fontSize: "15px",
                            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            borderRight: "0.2px solid black",
                            textAlign: "center",
                            border: "0.2px solid black",
                            borderRadius: "3%",
                            margin: "2px",
                            paddingTop: "10px",
                            paddingBottom: "10px"
                        }}>
                        İZİN BİTİŞ
                    </h1>
                    <h1
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            flex: 0.2,
                            fontFamily: "Roboto",
                            fontSize: "15px",
                            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            textAlign: "center",
                            border: "1px solid black",
                            borderRadius: "3%",
                            margin: "2px",
                            paddingTop: "10px",
                            paddingBottom: "10px"

                        }}>
                        AMİR ONAYI
                    </h1>
                    <h1
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            flex: 0.2,
                            fontFamily: "Scada",
                            fontSize: "15px",
                            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            textAlign: "center",
                            border: "1px solid black",
                            borderRadius: "3%",
                            margin: "2px",
                            paddingTop: "10px",
                            paddingBottom: "10px"
                        }}>
                        GENEL YÖNETİCİ ONAYI
                    </h1>
                </div>
                {
                    displayWholePermissionDemands(this.state.displayActives,this.state.asPersonel)
                }
            </div>
        )
    }
}
export default DisplayPermissionsForChief;
