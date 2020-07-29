import React from "react";
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';

function TestPage() {
    return (
        <div>
            <ButtonToolbar className="custom-btn-toolbar">
                <LinkContainer to="/">
                    <Button>Home</Button>
                </LinkContainer>
                <LinkContainer to="/about">
                    <Button>About</Button>
                </LinkContainer>
                <LinkContainer to="/users">
                    <Button>Users</Button>
                </LinkContainer>
            </ButtonToolbar>
        </div>
    );
}

export default TestPage;
