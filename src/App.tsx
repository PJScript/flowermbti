import { Routes,Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import { GlobalBody, FlowerRootdiv } from './style/global-style'; 
import FlowerHome from './page/flowerMbti/flowerHome';
import Result from './page/flowerMbti/result'
import Flowers from './page/flowerMbti/flowers';
import FlowerQuestion from './page/flowerMbti/flowerQuestion';
import Home from './page/home';
import './App.css'

const App = (): JSX.Element => {
  const [minutes, setMinutes] = useState<number>(2);
  const [seconds, setSeconds] = useState<number>(59);

  // useEffect(() => {
  //   const countdown = setInterval(() => {
  //     if ((seconds) > 0) {
  //       setSeconds((seconds) - 1);
  //     }
  //     if ((seconds) === 0) {
  //       if ((minutes) === 0) {
  //         clearInterval(countdown);
  //       } else {
  //         setMinutes((minutes) - 1);
  //         setSeconds(59);
  //       }
  //     }
  //   }, 1000);
  //   return () => clearInterval(countdown);
  // }, [minutes, seconds]);
  return (
    <>
    <GlobalBody />
    {/* {minutes}분,{seconds} 후 갱신됩니다! @꽃 종류 갱신 타이머, 찾은 횟수 등 통계자료 */}
    <Routes>
      {/* <Route path="/" element={<Home/>} /> */}
      <Route path="/" element={<FlowerHome/>}/>
      <Route path="/project/1/question" element={<FlowerQuestion/>} />
      <Route path="/project/1/flowers" element={<Flowers/>} />
      <Route path="/project/1/result"  element={<Result/>} />
    </Routes>
    </>
  );
}

export default App;

