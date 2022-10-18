import React from 'react';
import '../../CSS/valueComponent.css'

const ValueComponent = () => {
  return (
    <div className='valueComponent'>
       <h1>Our Unflinching Belief’s</h1>
       <div className='valueComponent_alignment'>
<div className="flip flip-vertical">
    <div className="front" style={{background:'url("https://ishwarishinde.github.io/cdn/dummy2.jpg") no-repeat center/cover',  width:"364px",height:"230px",borderRadius:"10px",zIndex:"-1"}} >
       <h1 className="text-shadow">Exceptional Service</h1>
    </div>
    <div className="back">
       <h2>Exceptional Service</h2>
       <p>We strive to leave our clients with an experience and a feeling that their patronage was appreciated and valued through our service.</p>
    </div>
</div>

<div className="flip flip-vertical">
    <div className="front" style={{background:'url("https://ishwarishinde.github.io/cdn/dummy1.jpg") no-repeat center/cover',  width:"364px",height:"230px",borderRadius:"10px",zIndex:"-1"}} >
       <h1 className="text-shadow">Quality Over Quantity</h1>
    </div>
    <div className="back">
       <h2>Quality Over Quantity</h2>
       <p>We prefer to work with few clients and deliver quality service so that you come back for more and recommend as well.</p>
    </div>
</div>

<div className="flip flip-vertical">
    <div className="front" style={{background:'url("https://ishwarishinde.github.io/cdn/dummy9.jpg") no-repeat center/cover',  width:"364px",height:"230px",borderRadius:"10px",zIndex:"-1"}} >
       <h1 className="text-shadow">Passion & Responsible</h1>
    </div>
    <div className="back">
       <h2>Passion & Responsible</h2>
       <p>We are passionate about what we do and that shows through our work, makes us responsible, and we feel that is a great way to build any business.</p>
    </div>
</div>

</div>
    </div>
  )
}

export default ValueComponent