import { Container, Row, Col } from 'react-bootstrap';


//Import DataComponent
import DataComponent from './DataComponent/DataComponent';


function DataContainer(){

    //Some Dummy Data


    const SomeData = [{
        name : 'NFT Worlds',
        logo : 'https://lh3.googleusercontent.com/DIafQlRW63pQ8UJqmdQBBOHZcubAE9rAkbovVx_WU_-TmIg3hF7z0y60gUGvah85_uYVgBxmhNfWUXwajaUmYZsrCPp8ZdYE0Z-wrt0=s130',
        volume : '10,037',
        day : '-14.72%',
        week : '+22.82%',
        Floor_Price : 13.3,
        Owners : '5.4K',
        Items : '10.0K'
    },{
        name : 'NFT Worlds',
        logo : 'https://lh3.googleusercontent.com/DIafQlRW63pQ8UJqmdQBBOHZcubAE9rAkbovVx_WU_-TmIg3hF7z0y60gUGvah85_uYVgBxmhNfWUXwajaUmYZsrCPp8ZdYE0Z-wrt0=s130',
        volume : '10,037',
        day : '-14.72%',
        week : '+22.82%',
        Floor_Price : 13.3,
        Owners : '5.4K',
        Items : '10.0K'
    },{
        name : 'NFT Worlds',
        logo : 'https://lh3.googleusercontent.com/DIafQlRW63pQ8UJqmdQBBOHZcubAE9rAkbovVx_WU_-TmIg3hF7z0y60gUGvah85_uYVgBxmhNfWUXwajaUmYZsrCPp8ZdYE0Z-wrt0=s130',
        volume : '10,037',
        day : '-14.72%',
        week : '+22.82%',
        Floor_Price : 13.3,
        Owners : '5.4K',
        Items : '10.0K'
    },{
        name : 'NFT Worlds',
        logo : 'https://lh3.googleusercontent.com/DIafQlRW63pQ8UJqmdQBBOHZcubAE9rAkbovVx_WU_-TmIg3hF7z0y60gUGvah85_uYVgBxmhNfWUXwajaUmYZsrCPp8ZdYE0Z-wrt0=s130',
        volume : '10,037',
        day : '-14.72%',
        week : '+22.82%',
        Floor_Price : 13.3,
        Owners : '5.4K',
        Items : '10.0K'
    },{
        name : 'NFT Worlds',
        logo : 'https://lh3.googleusercontent.com/DIafQlRW63pQ8UJqmdQBBOHZcubAE9rAkbovVx_WU_-TmIg3hF7z0y60gUGvah85_uYVgBxmhNfWUXwajaUmYZsrCPp8ZdYE0Z-wrt0=s130',
        volume : '10,037',
        day : '-14.72%',
        week : '+22.82%',
        Floor_Price : 13.3,
        Owners : '5.4K',
        Items : '10.0K'
    }]


    return(
        <Container fluid className="DataContainer">
            <Row className='DataLabelRow'>
                <Col xl={4}>
                    <span>Collection</span>
                </Col>
                <Col xl={3}>
                    <Row>
                        <Col>
                            <span>Volume</span>
                        </Col>
                        <Col>
                            <span>24h%</span>
                        </Col>
                    </Row>
                </Col>
                <Col xl={5}>
                    <Row>
                        <Col>
                            <span>7d%</span>
                        </Col>
                        <Col>
                            <span>Floor Price</span>
                        </Col>
                        <Col>
                            <span>Owners</span>
                        </Col>
                        <Col>
                            <span>Items</span>
                        </Col>
                    </Row>
                </Col>
            </Row>

            {
                //Rendering All Data Components
                SomeData.map((data, index) => <DataComponent data={data} index={index}/>)
            }

        </Container>
    )
}


export default DataContainer;