import { Routes,Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useScript } from './utils/hooks';
import styled, { ThemeProvider } from 'styled-components'
import { GlobalBody, FlowerRootdiv } from './style/global-style'; 
import FlowerHome from './page/flowerMbti/flowerHome';
import Result from './page/flowerMbti/result'
import Flowers from './page/flowerMbti/flowers';
import FlowerQuestion from './page/flowerMbti/flowerQuestion';
import { 
  ApolloProvider, 
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  HttpLink,
  from
} from '@apollo/client';
import { gql } from '@apollo/client'
import Home from './page/home';
import './App.css'
import {onError} from '@apollo/client/link/error'
import Garden from './page/flowerMbti/garden';


const App = (): JSX.Element => {
  const errorLink = onError(({graphQLErrors, networkError}) => {
    if(graphQLErrors){
      graphQLErrors.map(({message, locations, path}) => {
        alert('Graphql error' + message)
      })
    }
  })
  const link = from([
    errorLink,
    new HttpLink({uri:process.env.REACT_APP_APOLLOURL})
  ])
  const client = new ApolloClient({
    uri:process.env.REACT_APP_APOLLOURL,
    link: link,
    // link:createHttpLink({uri: 'http://127.0.0.1:4000/graphql'}),
    cache:new InMemoryCache()
  })

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
    <ApolloProvider client={client}>
    <GlobalBody />
    {/* {minutes}분,{seconds} 후 갱신됩니다! @꽃 종류 갱신 타이머, 찾은 횟수 등 통계자료 */}
    <Routes>
      {/* <Route path="/" element={<Home/>} /> */}
      <Route path="/" element={<FlowerHome/>}/>
      <Route path="/project/1/question" element={<FlowerQuestion/>} />
      <Route path="/project/1/flowers" element={<Flowers/>} />
      <Route path="/project/1/result"  element={<Result client={client}/>} />
      <Route path="/project/1/garden" element={<Garden />} />
    </Routes>
    </ApolloProvider>
    </>
  );
}

export default App;

