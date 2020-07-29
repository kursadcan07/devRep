import React from "react";
import {Container} from 'react-bootstrap';

function perFillPerScreen() {
    return (
        <div>
            <Container>
                <col>
                    <row>
                        1
                    </row>
                    <row>
                        2
                    </row>
                    <row>
                        3
                    </row>
                </col>
                <col>
                    <row>
                        1
                    </row>
                    <row>
                        2
                    </row>
                    <row>
                        3
                    </row>
                </col>
            </Container>
        </div>
    )
}

export default perFillPerScreen;
