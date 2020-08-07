import React from "react";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import {useSpring, animated} from "react-spring";
import {useState} from "react";
import {Bounce} from "react-reveal";
import {Link} from "react-router-dom";
import PermissionDisplay from "./PermissionDisplay";


export function acceptionSymb() {
    return (
        <div style={{
            display: "flex",
            margin: "auto",
            flex: 1,
            background: "rgb(39,180,64)",
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

export function deniedSymb() {
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

export function waitingSymbol() {
    return (
        <div style={{
            display: "flex",
            margin: "auto",
            flex: 1,
            background: "rgb(255,227,4)",
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

function permissionLine(izinTalepID, izinTalepTarihi, izinBaslangicTarihi, izinBitisTarihi) {
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
                        {waitingSymbol()}
                    </div>

                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        flex: 1.5,
                        fontSize: "12px",
                        justifyContent: "center"
                    }}>
                        {deniedSymb()}
                    </div>
                </label>
            </button>
        </Link>
    )
}


export function activeDemands(props) {

    let izinTalepID = 22;
    let izinTalepTarihi = "22/22/2222";
    let izinBaslangicTarihi = "22/22/2222";
    let izinBitisTarihi = "22/22/2222";

    if (props) {
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "row",
                marginTop: "8px",
                border: "0.2px solid black",
                padding: "2px"
            }}>
                {permissionLine(izinTalepID, izinTalepTarihi, izinBaslangicTarihi, izinBitisTarihi)}
                {permissionLine(izinTalepID, izinTalepTarihi, izinBaslangicTarihi, izinBitisTarihi)}
                {permissionLine(izinTalepID, izinTalepTarihi, izinBaslangicTarihi, izinBitisTarihi)}
                {permissionLine(izinTalepID, izinTalepTarihi, izinBaslangicTarihi, izinBitisTarihi)}
                {permissionLine(izinTalepID, izinTalepTarihi, izinBaslangicTarihi, izinBitisTarihi)}
                {permissionLine(izinTalepID, izinTalepTarihi, izinBaslangicTarihi, izinBitisTarihi)}
                {permissionLine(izinTalepID, izinTalepTarihi, izinBaslangicTarihi, izinBitisTarihi)}

            </div>
        )
    } else {
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
                {permissionLine(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}
                {permissionLine(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}
                {permissionLine(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}
                {permissionLine(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}
                {permissionLine(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}
                {permissionLine(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}
                {permissionLine(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}
                {permissionLine(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}
                {permissionLine(eskiIzinTalepID, eskiIzinTalepTarihi, eskiIzinBaşlangıcTarihi, eskiIzinBitisTarihi)}

            </div>

        )
    }
}


class PreviousPermissons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayActives: true,
        }

        this.ToggleButton = this.ToggleButton.bind(this);
    }

    ToggleButton() {
        this.setState((currentState) => ({
            displayActives: !this.state.displayActives
        }));
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
                    justifyContent: "center",
                    margin: "20px"
                }}>
                    <BootstrapSwitchButton
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            flex: 0.8,
                            flexDirection: "row"
                        }}
                        width={300}
                        checked={true}
                        onlabel='AKTİF TALEPLER'
                        offlabel='GEÇMİŞ TALEPLER'
                        onChange={() => this.ToggleButton()}
                    />


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
                {activeDemands(this.state.displayActives)}
            </div>
        )
    }
}

export default PreviousPermissons;
/*


 <Bounce style={{
                        display: "flex",
                        flex:0.2,
                        justifyContent: "right"
                    }} top timeout={1000}>
                        <div style={{
                            display: "flex",
                            flex: 0.1,
                            alignItems: "center",
                            fontSize: "22px",
                            justifyContent: "right",
                            border: "1px solid black",
                            borderRadius: "5%",
                            padding: "4px"
                        }}>

                            <h1 style={{
                                display: "flex",
                                flex: 0.05,
                                backgroundColor: "rgb(203,27,27)",
                                borderRadius: "5%"
                            }}
                            >
                                ✖
                            </h1>
                            <h1 style={{
                                display: "flex",
                                flex: 0.05,
                                fontSize: "15px",
                                marginLeft: "10px",
                                justifyContent: "center",
                                paddingTop: "10px",
                                fontWeight: "bold",
                                marginRight: "10px"
                            }}>
                                Reddedildi
                            </h1>

                            <h1 style={{
                                display: "flex",
                                flex: 0.05,
                                backgroundColor: "rgb(255,227,4)"
                            }}>
                                ⊖
                            </h1>
                            <h1 style={{
                                display: "flex",
                                flex: 0.05,
                                fontSize: "15px",
                                marginLeft: "10px",
                                justifyContent: "center",
                                paddingTop: "10px",
                                fontWeight: "bold",
                                marginRight: "10px"
                            }}>
                                Beklemede
                            </h1>

                            <h1 style={{
                                display: "flex",
                                flex: 0.05,
                                backgroundColor: "rgb(39,180,64)"
                            }}>
                                ✔
                            </h1>
                            <h1 style={{
                                display: "flex",
                                flex: 0.05,
                                fontSize: "15px",
                                marginLeft: "10px",
                                justifyContent: "center",
                                paddingTop: "10px",
                                fontWeight: "bold",
                                marginRight: "10px"
                            }}>
                                Onaylandı
                            </h1>

                        </div>
                    </Bounce>

 */
