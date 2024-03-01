import * as React from "react";
import './education.css';
import logos from '../../assets/NCF.jpg';
import logos1 from '../../assets/UNHS.jpg';
import logos2 from '../../assets/UES.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



function works () {
    return (
    <Container>
        <Row>
        <section id='works'>
            <h1 style={{color: 'Black', textAlign: 'center'}}><b>Education</b></h1>
            <span style={{color: 'Black', textAlign: 'center'}}>The Schools that I attended since Elementary up until now.</span>
            <div className="worksImgs">
                <img src={logos} alt="logos" className="img.worksImg" style={{ width: '40%' , height: '40%' }}  />
                <h3 style={{color: 'Black', textAlign: 'center'}}><b>TERTIARY</b></h3>
                <h6 style={{color:'Black'}}><b>(2019-Current)</b></h6>
                <img src={logos1} alt="logos1"  className="img.worksImg" style={{ width: '40%', height: '40%' }} />
                <h3 style={{color: 'Black', textAlign: 'center'}}><b>SECONDARY</b></h3>
                <h6 style={{color:'Black'}}><b>(2012-2019)</b></h6>
                <img src={logos2} alt="logos2"  className="img.worksImg" style={{ width: '40%', height: '40%' }} />
                <h3 style={{color: 'Black', textAlign: 'center'}}><b>PRIMARY</b></h3>
                <h6 style={{color:'Black'}}><b>(2006-2012)</b></h6>
            </div>
            <button className="workBtn">See More</button>
        </section>
        </Row>
    </Container>    
    );
}

export default works;

