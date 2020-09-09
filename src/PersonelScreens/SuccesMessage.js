import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

{/*
    This class displays success message to user.
    Then allows to display it in the previous permissions
    screen thanks the button that created below.

*/}

const mapStateToProps = (state) => {
    return {

        userStatus: state.userLoginReducer.userStatus,
    }
};


function displaySuccessMessageWhenPermissionDemanded(props) {
    let currLink=""
    if(props.userStatus===1){
        currLink="PersonelNavigation"
    }else if (props.userStatus===2){
        currLink="NavigateTheChief";
    }
    console.log(props.userStatus,"USERIN STATUSU")
    return(
        /* Here the main <div> */
        <div style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            textAlign:"center",
            flex:4
        }}>
            {/*Here the success message about creating demand as a text.*/}
            <h1 style={{
                display:"flex",
                justifyContent:"center",
                fontFamily:"Scada",
                fontSize:"35px",
                borderBottom:"1px solid black",
                margin:"auto",
                color:"rgb(5,73,5)",
                flex:3,
                marginTop:"15px"
            }}>
                İZİN TALEBİNİZ BAŞARIYLA YARATILMIŞTIR
            </h1>
            {/*Here the part of button that allows to display current status of permissions.*/}
            <Link to={currLink} style={{
                textDecoration: "none",
                display: "flex",
                flex: 1,
                margin:"20px"
            }}>
            <button type="button" className="btn btn-outline-success" style={{display:"flex", flex:1}}>ANA EKRANA DÖN</button>
            </Link>
        </div>
    )
}
export default connect(mapStateToProps)

(
    displaySuccessMessageWhenPermissionDemanded
)
;
