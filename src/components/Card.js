import React from 'react'

const Card = () => {
    const arr=['This is a dessert','This is a pizza','This is a Berger','This is a roll'];
    return (
        <div>
            <div class="contdesc">
            <h2 class="menutext">Our <span>M</span>enu</h2>
            <p>Our restaurant serves all types of cuisine</p>
        </div>
            {
            arr.map((elem)=>{
                return(
                    <>
        
        <div class="menucontent">
            <div class="imgbx1">
                <img src="https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>

            </div>
            <div class="text">
                <h3>{elem}</h3>

            </div>
        </div>
        </>
                )
            }
            )
}
    
        
        
            

            
        </div>
    )
}

export default Card
