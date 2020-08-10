import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";

function reviseMessage() {
    return (
        <Col className="justify-content-center">
            <Row className="justify-content-center" md={3} style={{margin: "10px"}}>
                <h1 style={{
                    display: "flex",
                    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    fontFamily: "Saira",
                    fontStyle: "normal",
                    fontWeight: 500,
                    textAlign: "center"
                }}>
                    İZİN REVİZE MEKTUBU
                </h1>
            </Row>
            <Row className="justify-content-center" md={3} style={{margin: "10px"}}>
                <div>
                    <textarea placeholder="Revize hususundaki talebinizi doldurunuz" maxLength="500"
                              className="form-control" rows="4"/>
                </div>
            </Row>

            <Row className="justify-content-center" md={3} style={{margin: "10px"}}>

                <Link to="/PersonelScreens/PersonelNavigation" style={{
                    display: "flex",
                    textDecoration: "none",
                    alignItems: "center",
                    flex: 1,
                    justifyContent: "center"
                }}>
                    <button type="button" className="btn btn-info"
                            style={{display: "flex", flex: 0.33, justifyContent: "center"}}>GÖNDER
                    </button>
                </Link>
            </Row>
        </Col>
    )
}

export default reviseMessage;
