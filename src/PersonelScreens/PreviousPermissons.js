import React from "react";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import StickyHeadTable from "./StickyHeadTable";

export function acceptionSymb() {
    return (
        <div style={{
            display: "flex",
            margin: "auto",
            flex: 1,
            background: "rgb(0,190,55)",
            borderRadius: "50%"
        }}>
            <h1 style={{
                display: "flex",
                margin: "auto",
                fontSize: "20px",
                borderRadius: "50%"
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
            borderRadius: "50%"
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
            borderRadius: "50%"
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

function createData(demandID, demandDate, demandBegin, demandEnd, chiefStatus, bossStatus, explanationOfChief, explanationOfGeneralManager) {
    return {
        demandID,
        demandDate,
        demandBegin,
        demandEnd,
        chiefStatus,
        bossStatus,
        explanationOfChief,
        explanationOfGeneralManager
    };
}

const rows = [
    createData('123', "22/22/2222", "22/22/2222", "22/22/2222", 1, 0, "İZNE ÇIKMANIZ UYGUN DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData('124', "22/22/2222", "22/22/2222", "22/22/2222", 2, 0, "İZNE TATRİHİNI 22/22/2222 YE REVİZE EDİNİZ DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData('125', "22/22/2222", "22/22/2222", "22/22/2222", 2, 0, "İZNE ÇIKMANIZ UYGUN DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData('126', "22/22/2222", "22/22/2222", "22/22/2222", 2, 0, "İZNE ÇIKMANIZ UYGUN DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData('127', "22/22/2222", "22/22/2222", "22/22/2222", 2, 0, "İZNE TATRİHİNI 22/22/2222 YE REVİZE EDİNİZ DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData('128', "22/22/2222", "22/22/2222", "22/22/2222", 2, 0, "İZNE ÇIKMANIZ UYGUN DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData('129', "22/22/2222", "22/22/2222", "22/22/2222", 2, 0, "İZNE ÇIKMANIZ UYGUN DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData('130', "22/22/2222", "22/22/2222", "22/22/2222", 2, 0, "İZNE TATRİHİNI 22/22/2222 YE REVİZE EDİNİZ DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData('131', "22/22/2222", "22/22/2222", "22/22/2222", 2, 0, "İZNE ÇIKMANIZ UYGUN DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
];

const rows1 = [
    createData('123', "22/22/2222", "22/22/2222", "22/22/2222", 2, 0, "İZNE ÇIKMANIZ UYGUN DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData('124', "22/22/2222", "22/22/2222", "22/22/2222", 2, 0, "İZNE TATRİHİNI 22/22/2222 YE REVİZE EDİNİZ DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData('125', "22/22/2222", "22/22/2222", "22/22/2222", 2, 0, "İZNE ÇIKMANIZ UYGUN DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData('126', "22/22/2222", "22/22/2222", "22/22/2222", 2, 0, "İZNE ÇIKMANIZ UYGUN DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData('127', "22/22/2222", "22/22/2222", "22/22/2222", 2, 0, "İZNE TATRİHİNI 22/22/2222 YE REVİZE EDİNİZ DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData('128', "22/22/2222", "22/22/2222", "22/22/2222", 2, 0, "İZNE ÇIKMANIZ UYGUN DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData('129', "22/22/2222", "22/22/2222", "22/22/2222", 2, 0, "İZNE ÇIKMANIZ UYGUN DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData('130', "22/22/2222", "22/22/2222", "22/22/2222", 2, 0, "İZNE TATRİHİNI 22/22/2222 YE REVİZE EDİNİZ DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
    createData('131', "22/22/2222", "22/22/2222", "22/22/2222", 2, 0, "İZNE ÇIKMANIZ UYGUN DEĞİLDİR YOĞUN" +
        "LUK VAR", "KABUL EDİLMİŞTİR"),
];

function activeDemands(displayActives) {
    if (displayActives) {
        return (<StickyHeadTable rows={rows}/>);
    } else {
        return (<StickyHeadTable rows={rows1}/>);
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
                flexDirection: "column"
            }}>
                <div style={{
                    display: "flex", justifyContent: "center",
                    marginTop: "20px"
                }}>
                    <BootstrapSwitchButton
                        width={300}
                        checked={this.state.displayActives}
                        onlabel='AKTİF TALEPLER'
                        offlabel='GEÇMİŞ TALEPLER'
                        onChange={() => this.ToggleButton()}
                    />
                </div>
                {
                    activeDemands(this.state.displayActives)
                }
            </div>
        )
    }
}

export default PreviousPermissons;
