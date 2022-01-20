import React,{useCallback}from "react";
import styled from "styled-components";
import cherryBlosoomIcon from "/home/js/Desktop/flowermbti/src/images/fallingflowerIcon/cherryBlossomIcon.png"
import jasmineIcon from "/home/js/Desktop/flowermbti/src/images/fallingflowerIcon/jasmineIcon.png"
import getRandom from "../../utils/getRandom";



const FallingFlower = () => {
  const clickFlowerIcon = useCallback(()=>{

  },[])
  const FlowerMaker = useCallback((value:number | undefined)=>{
    if(value === undefined || typeof(value) !== 'number'){
      value = 100;
    }
    let result: JSX.Element[] = []

    const keyframesArr: string[] = ['fallingR', 'fallingL', 'fallingN'];
    const flowerNameArr: string[] = [jasmineIcon,cherryBlosoomIcon]

    let delaySecond: number = 0

    for(let i=0; i<=value; i++){
      let randomAnimation: number = getRandom(3,0)
      let randomFlower: number = getRandom(2,0)
      let randomSecond: number = getRandom(20, 10)

      FlowerIcon.defaultProps = {
        src:flowerNameArr[randomFlower]
      }

      if (Math.floor(i / value * 100) >= 30 && Math.floor(i / value * 100) <= 59) {
        delaySecond = getRandom(3000, 2200)
      } else if (Math.floor(i / value * 100) >= 60 && Math.floor(i / value * 100) <= 79) {
        delaySecond = getRandom(7000, 6000)
      } else if (Math.floor(i / value * 100) >= 80) {
        delaySecond = getRandom(9000, 8000)
      }


      result.push(<FlowerIcon className="hover" onClick={clickFlowerIcon} key={i}
        style={{
          animation:
            `${keyframesArr[randomAnimation]} 
        ${randomSecond}s linear infinite ${delaySecond}ms`
        }}>
      </FlowerIcon>)
    }
    return (<div>{result}</div>)
  }, [])
  return (<>{FlowerMaker(100)}</>)
}
export default FallingFlower
const FlowerIcon = styled.img`
  /* position:relative; */
  visibility:hidden;
  z-index:-1;
  width:20px;
  height:20px;
  animation:fallingR 2s linear infinite;
  @keyframes fallingR{
    0% {
    visibility:visible;
    opacity:0;
    transform: translateY(0vh)
  }
  10%{
    opacity:0;
    transform: translateY(10vh)
  }
  50%{
    opacity:1;
    transform: translate(1,40vh)
  }
100%{
    opacity:0;
    transform: translate(100px, 150vh)
  }
  }
  @keyframes fallingN {
  0% {
    visibility:visible;
    opacity:0;
    transform: translate(1px,1vh)
  }
  10%{
    opacity:0;
    transform: translateY(10vh)
  }
  50% {
    opacity:1;
    transform: translate(5px,50vh)
  }
100%{
    opacity:0;
    transform: translate(200px, 150vh)
  }
}

@keyframes fallingL {
  0% {
    visibility:visible;
    opacity:0;
    transform: translate(100vh,1vh)
  }
  10%{
    opacity:0;
    transform: translateY(10vh)
  }
  50%{
    opacity:1;
    transform: translate(1,40vh)
  }

100%{
    opacity:0;
    transform: translate(200px,150vh)
  }
}
`