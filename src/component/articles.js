import img1 from '../images/article_4Innovationorg_WorldAIDSDay_Thumbnail.png'
import img2 from '../images/article_5PhRMAInnovationUnderstandingTheRDdesktop.jpg'
import img3 from '../images/article1_PhRMA_Innovation_5RecentDevelopment-desktophero.jpg'
import img4 from '../images/article2_Vaccine Safety Desktop.png'
import img5 from '../images/article3_Innovationorg_RareDiseaseDay_Thumbnail.jpg'
import img6 from '../images/article6_Header.png'
import img7 from '../images/article7_Innovation_BrainAwareness_Thumbnail.png'

const Articles = () => {
    return (
        <div style = {{textAlign:'left'}}> 
            <div>
                <div className = 'container'>
                    <div className = 'row'>
                        <div className = 'col-lg-12'>
                            <h2>POPULAR ARTICLES</h2>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <div className = 'container'>
                <div className='row '>
                    <div className = 'col-lg-8'>
                            <div className = 'row'>
                              <div className = 'col-lg-7'>
                                                <div className = 'art-pad' style= {{backgroundColor: '#F0F0F0'}}>
                                                    <div>
                                                        <div className = 'img-trasform'>
                                                        <img src = {img3} alt = '' style = {{height:'320px',width:'100%'}}>

                                                        </img>
                                                        </div>
                                                        <div  style= {{padding: '5px'}}>
                                                        <h4>5 Recent developments & Advancing Vaccines</h4>
                                                        <a href = '/#' className = 'readmore-btn'>READ MORE <i className="fa fa-play" aria-hidden="true"></i></a>
                                                        </div>                                                        
                                                    </div>
                                                </div>
                                </div>
                                <div className = 'col-lg-5'>
                                                <div className = 'art-pad'>
                                                    <div style= {{backgroundColor: '#F0F0F0'}}>
                                                        <div className = 'img-trasform'>
                                                        <img src = {img2} alt = '' style = {{height:'auto',width:'100%'}}>

                                                        </img>
                                                        </div>
                                                        <div  style= {{padding: '5px'}}>
                                                        <h4>5 Recent developments & Advancing Vaccines</h4>
                                                        <a href = '/#' className = 'readmore-btn'>READ MORE <i className="fa fa-play" aria-hidden="true"></i></a>
                                                        </div>                                                        
                                                    </div>
                                                </div>
                                                <div className = 'art-pad'>
                                                    <div style= {{backgroundColor: '#F0F0F0'}}>
                                                        <div className = 'img-trasform'>
                                                        <img src = {img1} alt = '' style = {{height:'auto',width:'100%'}}>

                                                        </img>
                                                        </div>
                                                        <div  style= {{padding: '5px'}}>
                                                        <h4>5 Recent developments & Advancing Vaccines</h4>
                                                        <a href = '/#' className = 'readmore-btn'>READ MORE <i className="fa fa-play" aria-hidden="true"></i></a>
                                                        </div>                                                        
                                                    </div>
                                                </div>
                                </div>
                            </div>

                            <div className = 'row'>
                                <div className = 'col-lg-5'>
                                                <div className = 'art-pad'>
                                                    <div style= {{backgroundColor: '#F0F0F0'}}>
                                                        <div className = 'img-trasform'>
                                                        <img src = {img4} alt = '' style = {{height:'auto',width:'100%'}}>

                                                        </img>
                                                        </div>
                                                        <div  style= {{padding: '5px'}}>
                                                        <h4>5 Recent developments & Advancing Vaccines</h4>
                                                        <a href = '/#' className = 'readmore-btn'>READ MORE <i className="fa fa-play" aria-hidden="true"></i></a>
                                                        </div>                                                        
                                                    </div>
                                                </div>
                                </div>
                              <div className = 'col-lg-7'>
                                                <div className = 'art-pad'>
                                                    <div style= {{backgroundColor: '#F0F0F0'}}>
                                                        <div className = 'img-trasform'>
                                                        <img src = {img6} alt = '' style = {{height:'auto',width:'100%'}}>

                                                        </img>
                                                        </div>
                                                        <div  style= {{padding: '5px'}}>
                                                        <h4>5 Recent developments & Advancing Vaccines</h4>
                                                        <a href = '/#' className = 'readmore-btn'>READ MORE <i className="fa fa-play" aria-hidden="true"></i></a>
                                                        </div>                                                        
                                                    </div>
                                                </div>
                                </div>                                
                            </div>
                    </div>
                    <div className= 'col-lg-4'>
                        <div className = 'row'>
                            <div className = 'col-lg-12'>
                                <div className = 'art-pad'>
                                    <div style= {{backgroundColor: '#F0F0F0'}}>
                                        <div className = 'img-trasform'>
                                        <img src = {img5} alt = '' style = {{height:'200px',width:'100%'}}>

                                        </img>
                                        </div>
                                        <div  style= {{padding: '5px'}}>
                                        <h4>5 Recent developments & Advancing Vaccines</h4>
                                        <a href = '/#' className = 'readmore-btn'>READ MORE <i className="fa fa-play" aria-hidden="true"></i></a>
                                        </div>                                                        
                                    </div>
                                </div>
                            </div>
                            <div className = 'col-lg-12'>
                                <div className = 'art-pad'>
                                    <div style= {{backgroundColor: '#F0F0F0'}}>
                                    <div className = 'img-trasform'>
                                        <img src = {img7} alt = '' style = {{height:'200px',width:'100%'}}>

                                        </img>
                                        </div>
                                        <div  style= {{padding: '5px'}}>
                                        <h4>5 Recent developments & Advancing Vaccines</h4>
                                        <a href = '/#' className = 'readmore-btn'>READ MORE <i className="fa fa-play" aria-hidden="true"></i></a>
                                        </div>                                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}


export default Articles