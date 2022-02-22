import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function HeaderContainer(){
    return(
        <Container className='TopHeroContainer'>
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
            <Row className='DropDownArea'>
                <Col>
                    <Dropdown>
                        <Dropdown.Toggle className='DropDownToggle'>Last 7 days</Dropdown.Toggle>
                        <Dropdown.Menu className='DrpDwnMenu'>
                            <Dropdown.Item className='DropDwnItem'>Last 24 hours</Dropdown.Item>
                            <Dropdown.Item className='DropDwnItem'>Last 7 days</Dropdown.Item>
                            <Dropdown.Item className='DropDwnItem'>Last 30 days</Dropdown.Item>
                            <Dropdown.Item className='DropDwnItem'>All Time</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col>
                    <Dropdown>
                        <Dropdown.Toggle className='DropDownToggle'>All Categories</Dropdown.Toggle>
                        <Dropdown.Menu className='DrpDwnMenu'>
                            <Dropdown.Item className='DropDwnItem'>All Categories</Dropdown.Item>
                            <Dropdown.Item className='DropDwnItem'>New</Dropdown.Item>
                            <Dropdown.Item className='DropDwnItem'>Art</Dropdown.Item>
                            <Dropdown.Item className='DropDwnItem'>Collectibles</Dropdown.Item>
                            <Dropdown.Item className='DropDwnItem'>Domain Names</Dropdown.Item>
                            <Dropdown.Item className='DropDwnItem'>Music</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col>
                    <Dropdown>
                        <Dropdown.Toggle className='DropDownToggle'>All Chains</Dropdown.Toggle>
                        <Dropdown.Menu className='DrpDwnMenu'>
                            <Dropdown.Item className='DropDwnItem'>All Chains</Dropdown.Item>
                            <Dropdown.Item className='DropDwnItem'>Ethereum</Dropdown.Item>
                            <Dropdown.Item className='DropDwnItem'>Polygon</Dropdown.Item>
                            <Dropdown.Item className='DropDwnItem'>Klaytn</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
        </Container>
    )
}


export default HeaderContainer;