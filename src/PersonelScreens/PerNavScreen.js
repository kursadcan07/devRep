import React from "react";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";

function PerNavScreen() {
    return (
        <div >
            <Col>
                <Row style={{
                    display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20vw",marginBottom:"20vw"}}>
                    <Link to="perFillScreen" style={{textDecoration:"none",display:"flex",  flex:1,
                        height:"20vw"}}>
                <button type="button" className="btn btn-success" style={{
                    display:"flex",
                    flex:1,
                    height:"20vw",
                    justifyContent:"center",
                    fontSize:"5vw",
                    marginRight:"0.2vw",
                    borderRadius:"5%",
                    textAlign: "center",
                    fontWeight:"normal",
                    paddingTop:"3vw"
                }}>İZİN TALEBİ YARAT</button>
                    </Link>
                    <Link to="PerPrevPerDisScreen" style={{textDecoration:"none", display:"flex",  flex:1,
                        height:"20vw"}} >
                <button type="button" className="btn btn-success" style={{
                    display:"flex",
                    flex:1,
                    height:"20vw",
                    fontSize:"5vw",
                    borderRadius:"5%",
                    textAlign: "center",
                    justifyContent:"center",
                    paddingTop:"3vw"
                }}>GEÇMİŞ İZİNLERİ GÖRÜNTÜLE</button>
                        </Link>
                </Row>
            </Col>
        </div>
    );
}

export default PerNavScreen;
