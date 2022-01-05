
export const kakaoShareBtn = (requestUrl:string, templateId:number) => {
  if(requestUrl === undefined || !requestUrl){
    requestUrl = 'https://twitter.com/testweblife'
  }

  if(templateId === undefined || !templateId){
    templateId = 68174
  }
    window.Kakao.Link.sendScrap({
        requestUrl:'http://testweb.life',
        templateId: 68174
    });
}
