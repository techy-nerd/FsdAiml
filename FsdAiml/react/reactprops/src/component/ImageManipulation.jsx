import React, {useState} from 'react'
import cat from './cat.png'
function ImageManipulation() {
    const [catHeight, setCatHeight] = useState(250);
    const [catWidth, setCatWidth] = useState(250);
    const [blue, setBlue] = useState(250);
    const [red, setRed] = useState(250);
    const [green, setGreen] = useState(250);
    const [ImageAngle, setImageAngle] = useState(0);
    function increaseWidth(){
        // alert("btn clicked");
         setCatWidth(catWidth + 20);
    }
    function decreaseWidth(){
         setCatWidth(catWidth - 20);
    }
    function changeColor(){
        setRed (Math.random()*255);
        setGreen (Math.random()*255);
        setBlue( Math.random()*255);
    }
    function ImageRotate(){
        setImageAngle(ImageAngle+30);
    }
  return (
    <>
    <div style={{
        border:'2px solid black',
        height:'480px',
        width: ' 350px',
        alignContent: 'center',
        justifyContent:'center',
        paddingLeft : '100px',
         backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    }}>
        <div>
            <img
  src={cat}
  height={catHeight}
  width={catWidth}
  style={{ transform: `rotate(${ImageAngle}deg)` }}
/>

        </div>
    </div>
    <div>
        <h1>Controls</h1>
        
        <button onClick={()=>{
            setCatHeight(catHeight + 20);
        }}> Increase height </button>
        <button onClick={()=>{
            setCatHeight(catHeight - 20);
        }}> Decrease height </button>

        {/* Decrease Width BTN */}

        <button onClick = {increaseWidth}> Increase width </button>
        <button onClick = {decreaseWidth}> Decrease width </button>
        <button onClick={changeColor}>Change Background Color</button>
        <button onClick={ImageRotate}>Rotate Image</button>
<div>
        <h2>
            Red Color:{red}
        </h2>
        <h2>
            Green Color:{green}
        </h2>
        <h2>
            Blue Color:{blue}
        </h2>
</div>
        
    </div>
    </>
  )
}

export default ImageManipulation