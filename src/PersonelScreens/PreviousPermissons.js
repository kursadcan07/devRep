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

function createData(demandID, demandDate, demandBegin, demandEnd, chiefStatus, bossStatus) {
    return {demandID, demandDate, demandBegin, demandEnd, chiefStatus, bossStatus};
}

const rows = [
    createData('123', "22/22/2222", "22/22/2222", "22/22/2222", 1, 0),
    createData('124', "22/22/2221", "22/22/2222", "22/22/2222", 1, 0),
    createData('125', "22/22/22212", "22/22/2222", "22/22/2222", 1, 0),
    createData('126', "22/22/22122", "22/22/2222", "22/22/2222", 1, 0),
    createData('127', "22/22/2112", "22/22/22", "22/22/22", 1, 0),
    createData('128', "22/22/22322", "22/22/2222", "22/22/2222", 1, 0),
    createData('129', "22/22/22522", "22/22/2222", "22/22/2222", 1, 0),
    createData('130', "22/22/22822", "22/22/2222", "22/22/2222", 1, 0),
    createData('131', "22/22/22*22", "22/22/2222", "22/22/2222", 1, 0),
    createData('132', "22/22/22722", "22/22/2222", "22/22/2222", 1, 0),
    createData('133', "22/22/22222", "22/22/2222", "22/22/2222", 1, 0),
    createData('134', "22/22/27222", "22/22/2222", "22/22/2222", 1, 0),
    createData('135', "22/22/22s22", "22/22/2222", "22/22/2222", 1, 0),
    createData('136', "22/22/22g22", "22/22/2222", "22/22/2222", 1, 0),
    createData('137', "22/22/222a2", "22/22/2222", "22/22/2222", 1, 0)
];

const rows1 = [
    createData('1123', "22/22/2222", "22/22/2222", "22/22/2222", 1, 0),
    createData('1124', "22/22/2221", "22/22/2222", "22/22/2222", 1, 0),
    createData('1125', "22/22/22212", "22/22/2222", "22/22/2222", 1, 0),
    createData('1126', "22/22/22122", "22/22/2222", "22/22/2222", 1, 0),
    createData('1127', "22/22/2112", "22/22/22", "22/22/22", 1, 0),
    createData('1128', "22/22/22322", "22/22/2222", "22/22/2222", 1, 0),
    createData('1129', "22/22/22522", "22/22/2222", "22/22/2222", 1, 0),
    createData('1130', "22/22/22822", "22/22/2222", "22/22/2222", 1, 0),
    createData('1131', "22/22/22*22", "22/22/2222", "22/22/2222", 1, 0),
    createData('1132', "22/22/22722", "22/22/2222", "22/22/2222", 1, 0),
    createData('1133', "22/22/22222", "22/22/2222", "22/22/2222", 1, 0),
    createData('1134', "22/22/27222", "22/22/2222", "22/22/2222", 1, 0),
    createData('1315', "22/22/22s22", "22/22/2222", "22/22/2222", 1, 0),
    createData('1316', "22/22/22g22", "22/22/2222", "22/22/2222", 1, 0),
    createData('1371', "22/22/222a2", "22/22/2222", "22/22/2222", 1, 0)
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
                <div style={{display:"flex",justifyContent:"center",
                marginTop:"20px"}}>
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
