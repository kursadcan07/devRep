import React from "react";
import {Link} from "react-router-dom";
import {Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function PersonelNavigation() {
    return (
            <div>
            <Col style={{
                display: "flex",
                flexDirection:"row",
                justifyContent:"column",
                flex:2
            }} >
                <Row style={{
                    display: "flex",
                    flexDirection:"row",
                    flex: 2,
                    justifyContent: "center",
                    alignItems:"center",
                    margin:"25px"

                }}>
                    <Link to="PermissionFilling"   style={{
                        display:"block",
                        alignItems:"center",
                        justifyContent:"center",
                        margin:"15px"
                    }}>
                        <button type="button" className="btn btn-success" style={{
                            display: "flex",
                            marginRight: "5px",
                            flex: 1,
                            height: "20vw",
                            justifyContent: "center",
                            textAlign: "center",
                            fontWeight: "normal"
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
                    <Link to="PreviousPermissons" style={{
                        display:"block",
                        alignItems:"center",
                        justifyContent:"center",
                    }}>
                        <button type="button" className="btn btn-success" style={{
                            display: "flex",
                            flex: 1,
                            height: "20vw",
                            textAlign: "center",
                            alignItems:"center",
                            justifyContent: "flex-start"
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
            </div >
    );
}


export default PersonelNavigation;
