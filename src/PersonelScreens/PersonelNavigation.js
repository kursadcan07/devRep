import React from "react";
import {Link} from "react-router-dom";
import {Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function PersonelNavigation() {
    return (
            <div style={{
                display: "flex",
                flex:2}}
                 xs={12} md={6}
            >
            <Col style={{
                display: "flex",
                flexDirection:"row",
                justifyContent:"column",
                flex:2
            }}  xs={12} md={6}>
                <Row style={{
                    display: "flex",
                    flexDirection:"row",
                    flex: 2,
                    justifyContent: "column",
                    marginTop: "10vw",
                    marginBottom: "20vw"
                }} xs={12} md={6}>
                    <Link to="PermissionFilling" xs={12} md={6}>
                        <button type="button" className="btn btn-success" style={{
                            display: "flex",
                            marginRight: "5px",
                            flex: 1,
                            height: "20vw",
                            justifyContent: "center",
                            textAlign: "center",
                            fontWeight: "normal",
                            margin:"10px"
                        }}>
                            <h1 style={{
                                display: "flex",
                                flex: 1,
                                justifyContent: "center",
                                fontSize: "3vw",
                                margin: "auto"
                            }}>
                                İZİN TALEBİ YARAT
                            </h1>
                        </button>
                    </Link>
                    <Link to="PreviousPermissons" sx={12} md={6}>
                        <button type="button" className="btn btn-success" style={{
                            display: "flex",
                            flex: 1,
                            height: "20vw",
                            textAlign: "center",
                            justifyContent: "center"
                        }}>
                            <h1 style={{
                                display: "flex",
                                flex: 1,
                                justifyContent: "center",
                                fontSize: "3vw",
                                margin: "auto"
                            }}>
                                GEÇMİŞ İZİNLERİ GÖRÜNTÜLE
                            </h1>
                        </button>
                    </Link>
                </Row>
            </Col>
            </div>
    );
}


export default PersonelNavigation;
