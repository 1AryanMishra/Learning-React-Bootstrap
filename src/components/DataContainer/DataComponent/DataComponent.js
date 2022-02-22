//Importing useState to handle LowerColumn Show/Hide State
import { useState } from 'react';


//Importing Some Components From BootStrap
import { Row, Col } from 'react-bootstrap';

//Importing CSS For Components Styling
import './css/DataContainer.css';


function DataComponent({data, index}){


    //Icon for Up-Down
    const iconSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAA1CAYAAADPo4LiAAAG6UlEQVRYR72Ye2wUVRTGd7YP+rJpKqg1hojxmaCJGg203YgxgkZKlKgh2AdbQAmtgdBXUAtFCBToIwGKFiu1WyExNVFSrTGiVumTtrTUP5S2uy3bB4U00KZNoWm743cmcyfT3ZnZmVnlJpvdnbn3nN/97jnnzh3OEmBLSkpaXFtbOxaIGS6QwSUlJY92dHScHR4ejq+vr58zaysgiOLi4p9aWlpec7lcuwFTeNchjh49upnjuIqLFy9OO53OYfy2t7e3N5oBMaUELYPH46mEw0SCgBIRBNTW1rb1rkFAhQNw+jE5ZBD4OUdqAORroyCGlSgqKnoVTk7j85AXBP39VQQZNAJiCKK8vDxkcnKSluE95kSmhHCJ5/k9CNL9/xsEsmErnJySO/CGwD0n1EjHsvypF0S3EgB4HACkQrwfCLp9Gpmy+T+HQDAexAx3extWUIK6ePChlHXoAdGlBIJxDYyRCnE6Iajb7/Pz8/bOzs6r/kD8QhQUFIRFRkZWQoUNSsZUlGBdC6DGvoAhEAsfIBY+VzOkBYFxA2IlrdcC0VQCy/CkuAwrzEDQGEBUIVPslL1qNjQhoEIhZpOnNQs/yyEMFQvYV4YhoMLrGFwJiPsDhcD4P6xWqx3A/Uq2FJVAMEZERUVRNrzrL6j0KEE2MJlPUUn36oaACtvRucwfAN3XC4Gubuy89kuXLv3mbddHidLS0hjk99/o+IAeiNbW1un+/v4IPX3Rp3rZsmX2mpqaeXl/HwiocAQdcvwZvXHjhqWnp8fidrs9t27dskZHR1tCQkL8DaP7W1A7vlSFQGl+AwFEwbhEydqdO3csIyMjwuf69etCF1zzDA4OYpjVEhERIX00aBrEZeljfSQlysrKom7fvk3B+La3AWzfkvObN28uuM0g5BflMATnEwMcdwC1I98HAipkIiWPyweQQzZzAlFRR1BC6V5YWJikTHBwsLzLkFg7ztNFQQk8Mz4tPjM+T/9JauaclkCrKSnh3T80NFSCod/UsORn8GVH2s4KEFChGBd3Mcf0jQzRdM5u6oFgfUkNtlSkEtR4H8vyBZeXl5cKqU9eu3YtcnR0VJdjeScjEGwcC2KAXAHUW1x6evpqANSMj49HGybAAFouxISZoaTKFYC8IizHpk2bYmZmZk4AZB0+9xixaEYJOB7B0lQNDAx8JAUmc5qWlrZ6enp6z9jY2AoYD9IDYwQCxWwagVm3aNGinSh0w8w+d+jQoYexRosRG+3sYnJycs7U1NQ2ZMkj/kD0QMC+B7NvB8DBvr6+c8xmYmLiWihyXlgOlGoqUpSL+dnZ2cIxf9WqVcFxcXHlExMT61GWY9Rg/EHAuRsKVGB/kc4i8fHxy61W7jjPW840NjZWCBBitfwLP8nZbqhQge1cOOpjiRKwRPtRuBLx7bM5qEFg1pOQ/VxsbGwmasGEODFsjrP74XwbStT3DQ0N7yyICahB5Zq27/uQv3X4dmRlZX3DFEhJSclAKn+IjesJ1BRJGG+IoKCgeThvwWdfb2/vL8z53NxcKk4CaXD+HK7h9M5lAOKyT2DicW4vHBSIHmh5HKikjtzcXOnIv3HjxhNYog1Q5l7qJ4cIDw93QYHP8KqgiFEmJCSsx/aRBu514rVxEeAs67NgKz927NiS2dnZMoAIMomtD/8dMF61Y8cON11DSodhab5DcVsDdTjUmVmsfTFSTjoc2WwrX+R5K2ZvwewtUcwYYA4iDoQTvSIEXTx8+PDLiOYyLMlT8o74XU9PznDqQLzQCcuSmpr6DKI9H0Bbu7q6MEOLxWazxQGaHAOAX2ADAOegbEZzc7OUnjRG8RlTaUeVAVWTMjk5OcIOKG82W3wyz3M0e3p94N1wUPZkXLjQ/LP3DbUHXSsedClIEcW+DRAjUKuKYJDS/2D2L/H8PAUdAagUOT6roaGpRMme6rlDfNaktBVehqi0UTyqfTs0NLgF98PUu/E/ACBJ7b7m4QfLsgFxQIrEqhno7u52u1zOpRqgrWI2dJiCoEGoH1TpPjEJMSUCaL4i8HsqR7Y8iAJEarypBKKtBHcEBUnzGEk2/UKIalC0E8hj3iBqEEjHOgTu9qampsDfTzCniI+diI9SnRBXOY5HOjb9qBEr0i1dSlBvFKhQMW0pE6SmpAQA8gBAhyhdTTcEWcPe8iwkpmVZyawrQDiCg0My8MIdQamvGYIQQVAV+ZP4LTwGekEgDYXdEWmpvxmGINOIj0LEhxD1MgjsugIAve011ExBFBYWLsVjGS3LWgaBbCjF7rjLkHexsykIUY3lUKMNu+fUwED/GOLgBSNxIIc1DSGCZHZ3X853Ol1rUA+6zKhAYwKCIAN47Euqrq6uNQtA4/4FZsftdzWiG9gAAAAASUVORK5CYII=';


    const [more, setMore] = useState(false);


    return (
        <Row className='DataRows' key={index}>

            <Col className="LabelColumn" xs={10} xl={4}>
                <div className='NameBtnArea'>
                    <span>
                        {index+1}<img src={data.logo} alt={data.name}/>
                    </span>
                    <span className='MoreBtnArea'>
                        {data.name}
                        <button onClick={() => setMore(!more)}>
                            {more ? '- Less' : '+ More'}
                        </button>
                    </span>
                </div>
            </Col>

            <Col xs={2} xl={3}>
                <Row className='VolumeDayContainer'>
                    <Col className='IconContainer'>
                        <img src={iconSrc} alt='icon' className='icon'/>{data.volume}
                    </Col>
                    <Col className='percentageData'>
                        {data.day}
                    </Col>
                </Row>
            </Col>

            <Col xs={12} xl={5} className={more ? 'LowerColumn ShowLowerColumn' : 'LowerColumn HideLowerColumn'}>
                <Row>
                    <Col className='LowerColumnDataArea'>
                        {more ? <span className='LowerColumnDataLabel'>7d%</span> : null}
                        <span className='percentageData'>{data.week}</span>
                    </Col>
                    <Col className='LowerColumnDataArea'>
                        {more ? <span className='LowerColumnDataLabel'>Floor Price</span> : null}
                        <span className='IconContainer'>
                            <img src={iconSrc} alt='icon' className='icon'/>{data.Floor_Price}
                        </span>
                    </Col>
                    <Col className='LowerColumnDataArea'>
                        {more ? <span className='LowerColumnDataLabel'>Owners</span> : null}
                        <span>{data.Owners}</span>
                    </Col>
                    <Col className='LowerColumnDataArea'>
                        {more ? <span className='LowerColumnDataLabel'>Items</span> : null}
                        <span>{data.Items}</span>
                    </Col>
                </Row>
            </Col>

        </Row>
    )
}



export default DataComponent;