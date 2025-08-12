import React from 'react';
function Header () {
    return(
        <>
            <div className='bg-red-500'>
                <div style={{paddingRight:"850px"}}>
                    <img src="https://www.aischolars.in/_next/image?url=%2Fassets%2Fimg%2Flogo%2Flogo_dark.png&w=640&q=75" alt="" style={{width:"200px"}}/>
                </div>
                <div>
                    <ul style={{display:"flex", listStyleType:"none", gap:"20px"}}>
                        <li><a href="" style={{color:"white"}}>Home</a></li>
                        <li><a href="" style={{color:"white"}}>About US</a></li>
                        <li><a href="" style={{color:"white"}}>Services</a></li>
                        <li><a href="" style={{color:"white"}}>Careers</a></li>
                        <li><a href="" style={{color:"white"}}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;