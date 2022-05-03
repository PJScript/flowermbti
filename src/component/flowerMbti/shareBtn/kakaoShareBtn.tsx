
export const kakaoShareBtn = (requestUrl:string,  imageUrl:string, mbtiContent:any, templateId?:number) => {
  if(requestUrl === undefined || !requestUrl){
    requestUrl = 'https://twitter.com/testweblife'
  }

  if(templateId === undefined || !templateId){
    console.log('test')
    // templateId = 68174
    window.Kakao.Link.sendScrap({
      requestUrl:'https://testweb.life',
      templateId: 68174,
      templateArgs: {
        title: '꽃 성격 테스트',
        description: '당신은 어떤 꽃인가요? 오직 당신만을 위한 테스트 바로 시작해보세요!',
        imageUrl: imageUrl
      }
  });
  }else{
    console.log('test2')
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: `${mbtiContent.nickName} ${mbtiContent.flowerName}`,
        description: '당신은 어떤 꽃인가요? 오직 당신만을 위한 테스트 바로 시작해보세요!',
        imageUrl:imageUrl,
        link: {
          mobileWebUrl: 'https://testweb.life',
          androidExecutionParams: 'test',
        }
      },
      buttons: [
        {
          title: '테스트 해보기',
          link: {
            mobileWebUrl: 'https://testweb.life',
          },
        }]
    })
  }



}
