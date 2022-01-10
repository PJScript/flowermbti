
export const kakaoShareBtn = (requestUrl:string, templateId:number, imageUrl:string, mbtiContent:any) => {
  console.log(mbtiContent,"컨텐츠")
  console.log(imageUrl,"이미지")
  if(requestUrl === undefined || !requestUrl){
    requestUrl = 'https://twitter.com/testweblife'
  }

  if(templateId === undefined || !templateId){
    templateId = 68174
  }
    // window.Kakao.Link.sendScrap({
    //     requestUrl:'http://testweb.life',
    //     templateId: 68174,
    //     templateArgs: {
    //       'title': '꽃 성격 테스트',
    //       'description': '당신은 어떤 꽃인가요? 오직 당신만을 위한 테스트 바로 시작해보세요!',
    //       'imageUrl': imageUrl
    //     }
    // });

    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: `${mbtiContent.nickName} ${mbtiContent.flowerName}`,
        description: '당신은 어떤 꽃인가요? 오직 당신만을 위한 테스트 바로 시작해보세요!',
        imageUrl:imageUrl,
        link: {
          mobileWebUrl: 'http://testweb.life',
          androidExecutionParams: 'test',
        }
      },
      buttons: [
        {
          title: '테스트 해보기',
          link: {
            mobileWebUrl: 'http://testweb.life',
          },
        }]
    })
}
