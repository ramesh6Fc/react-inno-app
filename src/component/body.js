import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Articles from './articles';
import Content2 from './Content2';
import Devmgmt from './device_mgmt';


const data = [
    {
        image: 'https://innovation.org/-/media/Project/PhRMA/Innovation-Org/Innovation-Org/Banners/Innovation_Vaccine-Manufacturing-Collab_header_desktop.jpeg?h=1079&w=3841&hash=C23D43AE5E1CD50C566F136E0AA0A0ED',
        content: "Some Title Have Some Content",
        desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
    },
    {
        image: 'https://innovation.org/-/media/Project/PhRMA/Innovation-Org/Import/2020-06/P/PhRMA_Innovation_COVID-Interviews-Thumbnail_v1.jpg?h=594&w=1500&hash=93A11226C908D7E5F19E99FE8D2A969B',
        content: "The test Have Some Test Result",
        desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
    },
    {
        image: 'https://innovation.org/-/media/Project/PhRMA/Innovation-Org/Innovation-Org/Content-Authoring/Banners/Monoclonal-Antibodies-Desktop.png',
        content: "The Analytical Resuls",
        desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
    }
]

const BodyPrim = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        
        <Carousel activeIndex={index} onSelect={handleSelect}>
           {data.map((slide, i) => {
            return (
              <Carousel.Item  key={i}>        
            <img
              className="d-block w-100"
              src={slide.image}
              alt="slider"
            />
            <Carousel.Caption>
              <h3>{slide.content}</h3>
              <p>{slide.desc}</p>
            </Carousel.Caption>
          </Carousel.Item>
            )
          })}
          
        </Carousel>
    );
}

const RnD = () => {
    return (
            <div className = 'container-fluid'>
                <div style = {{paddingTop:'50px', textAlign:'left'}}>
                    <div className = 'row'>
                        <div className = 'col-lg-6'>
                            <h2>
                            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                            </h2>
                            <p style = {{paddingTop: '10px'}}>
                            T is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            </p>
                        </div>
                        <div className = 'col-lg-6'>
                            <div style = {{margin: '5px 10px'}}>
                                <iframe id="mejs_12471328365664247_youtube_iframe" frameBorder="0" allowFullScreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" src="https://www.youtube.com/embed/mdVul-RBW-4?enablejsapi=1&amp;origin=https%3A%2F%2Finnovation.org" data-gtm-yt-inspected-45531815_57="true" data-gtm-yt-inspected-45531815_196="true" data-gtm-yt-inspected-45531815_297="true" data-gtm-yt-inspected-45531815_361="true" data-gtm-yt-inspected-45531815_362="true" data-gtm-yt-inspected-45531815_383="true" data-gtm-yt-inspected-12046840_67="true" data-gtm-yt-inspected-12046840_43="true" style ={{ width:'100%', height:'260px'}}></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

const Body = (props) => {
    
    if(props && props.bodyContent && props.bodyContent === 'devMgmt'){
        return (<>
            <Devmgmt />
        </>
        )
    }else{
        return (
            <>
            <div style={{marginTop :'80px'}}>
                <BodyPrim />
            </div>
            <div style={{margin :'10px 100px'}}>
                <RnD />
                <hr style={{margin :'50px 0'}}/>
                <Articles />
                <hr style={{margin :'30px 0'}}/>
                <Content2 />
                
            </div>
            </>
        )
    }
    
}

export default Body