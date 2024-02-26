import React, { useEffect, useState } from 'react'



const Eyes = () => {

    const [rotate, setRotate] = useState(0);
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            const angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
            setRotate(angle)
        })
    },)
    return (
        <div className='eye-main'>
            <div className='eye-sub'>
                <div className="eye-balls">
                    <div className='eye'>
                        <div className="eyelens">
                            <div className="eye-border" >
                            <div className="ball"></div>
                            </div>
                        </div>
                    </div>
                    <div className='eye'>
                    <div className='eyelens'>
                        <div className="eye-border" >
                    <div className="ball"></div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes
