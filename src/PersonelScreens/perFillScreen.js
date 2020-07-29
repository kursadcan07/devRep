import React from "react";
import {Container, Col, Row} from 'react-bootstrap';
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

class perFillPerScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            sltcPrmType: "İzin Tipinizi Seçiniz",
            startDate: new Date()
        }
        this.handleClicki = this.handleClicki.bind(this);
        this.handleDate = this.handleDate.bind(this);
    }

    handleClicki(event) {
        this.setState({
            sltcPrmType : event.target.name
        })
    }

    handleDate(date){
        this.setState({
            startDate : date
        })
    }


    render() {
        return (
            <Container>
                {/* Stack the columns on mobile by making one full-width and the other half-width */}

                <Row>

                        <Col xs={12} md={8} >
                            <DropdownButton id="dropdown-item-button" title={this.state.sltcPrmType}>
                                <Dropdown.Item id="i1" name="Yıllık" as="button" onClick={this.handleClicki}>Yıllık</Dropdown.Item>
                                <Dropdown.Item id="i2" as="button" name="Görevli" onClick={this.handleClicki} >Görevli</Dropdown.Item>
                                <Dropdown.Item id="i3" as="button" name="Ücretli" onClick={this.handleClicki} >Ücretli</Dropdown.Item>
                                <Dropdown.Item id="i4" as="button" name="2 Ay İçinde Telafisi Yapılacak" onClick={this.handleClicki} >2 Ay İçinde Telafisi Yapılacak</Dropdown.Item>
                                <Dropdown.Item id="i5" as="button" name="Ücretsiz" onClick={this.handleClicki}>Ücretsiz</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item id="i6" as="button" name="Diğer" onClick={this.handleClicki}>Diğer</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                        <Col xs={12} md={8} >
                            <DatePicker
                                onChange={this.handleDate}
                                placeholderText="I have been cleared!"
                                selected={this.state.startDate}
                                showTimeSelect
                                timeIntervals={10}
                                timeFormat="HH:mm"
                                dateFormat="d MMMM yyyy  | h:mm"
                            />
                        </Col>
                </Row>

            </Container>
        )
    }
}

export default perFillPerScreen;
