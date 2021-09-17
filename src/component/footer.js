

const Footer = () => {

    return (

        <div className='container-fluid' style={{background: '#252525', padding:'10px',borderTop: '2px solid #87a72d'}}>
            <div style={{margin:'12px 30px 0px 50px',fontSize:'14px',fontWeight:400}}>
            <div className = 'row'>
                 <div className = 'col-lg-3'>
                    <img src = 'https://innovation.org/-/media/Project/PhRMA/Innovation-Org/Innovation-Org/abc-logo.svg' alt = '' style={{margin: '0px 0px', width:'auto', height:'40px', textAlign:"left"}}></img>
                 </div>
                 <div className = 'col-lg-8' >
                    <p  style={{color:'#999', textAlign:'left',fontSize:'15px'}}>Explore the innovative research and technological breakthroughs of America's biopharmaceutical industry, and get to know the people behind the fight to prevent, treat and cure disease.</p>
                 </div>
             </div>
            </div>
       </div>

    )
}

export default Footer