import { Routes,Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useScript } from './component/flowerMbti/hooks';
import styled, { ThemeProvider } from 'styled-components'
import { GlobalBody, FlowerRootdiv } from './style/global-style'; 
import FlowerHome from './page/flowerMbti/flowerHome';
import Result from './page/flowerMbti/result'
import Flowers from './page/flowerMbti/flowers';
import FlowerQuestion from './page/flowerMbti/flowerQuestion';
import Home from './page/home';
import './App.css'
import * as dotenv from 'dotenv'
dotenv.config()


const App = (): JSX.Element => {

  const kakaoStatus = useScript("https://developers.kakao.com/sdk/js/kakao.js");
  const faceBookStatus = useScript("https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v12.0");
	// kakao sdk 초기화
	// status가 변경될 때마다 실행, status가 ready일 때 초기화
	useEffect(() => {
		if (kakaoStatus === "ready" && window.Kakao) {
			// 중복 init 방지
			if (!window.Kakao.isInitialized()) {
				// init 되어있지 않다면 init.
				window.Kakao.init(process.env.REACT_APP_KAKAOAPIKEY);
			}
		}

    // if(faceBookStatus === "ready"){
      
    // }else{
    //   alert('관리자 에게 문의 하세요.')
    // }
	}, [kakaoStatus]);	
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

