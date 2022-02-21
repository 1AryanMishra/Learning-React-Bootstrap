import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function HeaderContainer(){
    return(
        <Container fluid='lg'>
            <Row>
                <h1>Top NFTs</h1>
            </Row>
            <Row>
                <Col>
                    <h5>
                        The top NFTs on OpenSea, ranked by volume, floor price and other statistics.
                    </h5>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Dropdown>
                        <Dropdown.Toggle>Click Me</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Action 1</Dropdown.Item>
                            <Dropdown.Item>Action 2</Dropdown.Item>
                            <Dropdown.Item>Action 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col>
                    <Dropdown>
                        <Dropdown.Toggle>Click Me</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Action 1</Dropdown.Item>
                            <Dropdown.Item>Action 2</Dropdown.Item>
                            <Dropdown.Item>Action 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col>
                    <Dropdown>
                        <Dropdown.Toggle>Click Me</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Action 1</Dropdown.Item>
                            <Dropdown.Item>Action 2</Dropdown.Item>
                            <Dropdown.Item>Action 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
        </Container>
    )
}


export default HeaderContainer;