import React from "react";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import StickyHeadTable from "./StickyHeadTable";
import

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


function activeDemands(displayActives) {
    if (displayActives) {
        return (<StickyHeadTable/>);
    } else {
        return null;
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
