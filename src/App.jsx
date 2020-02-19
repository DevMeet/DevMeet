import React, { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Container fluid>
            <HistoryProvide>
                <Row>
                    <Col>
                    <Sidebar />
                    </Col>
                </Row>
            </HistoryProvide>
        </Container>
    )
  }
}

export default App;
