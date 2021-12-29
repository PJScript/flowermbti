import React from "react";

const dummyContent = (mbti: string) => {
  if (mbti === 'INTJ') {
    return {
      list: `혼자있는걸 좋아함.단체 활동에서 가끔 리더도함.개인주의자,이기적.하루를 계획적으로 보내고싶어함.고민상담을 못함.좋아하는 것에 집착이 심함.눈치 잘안봄.그냥 좀 특이함.`,
      normal: `정확하고 계산된 움직임을 가졌습니다. 
    상상력이 풍부하고 에너지를 비효율적으로 사용하지 않습니다. 
    말수가 적은 편이며 항상 지식에 목말라 있습니다. 
    원칙을 준수하며 틀에박힌 사고를 견딜 수 없습니다. 
    옛날부터 하던 관습 전통 질서 한계 등 혁신을 억압하는 것을 싫어합니다. 
    그래서 때론 무모할 수도 있는 아이디어를 독단적으로 실행합니다. 혼자 생각을 많이 하는 편이고 인간관계에 그리 큰 자신이 있지 않습니다.`,
    img:'https://onlyimagebucketserver.s3.ap-northeast-2.amazonaws.com/hyacinth-removebg-preview.png',nickName:'상상력이 풍부한',flowerName:'히아신스',engName:'hyacinth'}
  } else if (mbti === 'INTP') {
    return {
      list: `자기애가 큼.
      혼자서 잘놈.
      낯을 많이 가림.
      무뚝뚝하고 잡담도 잘안함.
      매일 지식에 목마름.
      감정기복이 크지않음.
      조용한 것을 좋아함.
      주관이 뚜렷함.`,
      normal: `수많은 천재들을 배출한 성향입니다. 
    호기심이 매우많고 사색을 즐깁니다. 
    하루종일 몽상에 빠져있는 경우도 많고 늘 새로운 아이디어가 뿜어져 나옵니다. 다소 차가운 면이 있어서 타인의 감정을 가끔 이해하지 못합니다. 
    실패를 두려워 하고, 새로운 사실 혹은 진리를 본인이 만족하는 기준선 까지 이끌어내야 하는 집념이 있습니다. 
    지적 능력이 뛰어난 편이라 세상에 도움이 되거나 세상을 완전히 뒤바꿀 만한 혁신을 가지고올 성향입니다.`
    ,img:'https://onlyimagebucketserver.s3.ap-northeast-2.amazonaws.com/freesia-removebg-preview.png',nickName:'호기심 많은',flowerName:'프리지아',engName:'freesia'}
  } else if (mbti === 'ENTJ') {
    return {
      list: `팀장이 못하면 답답해서 내가 팀장함.
      관심을 많이 필요로함.
      나서는걸 좋아함.
      새로운 사람을 자주 만나지만 가볍게 만남.
      매우 활동적임.`,
      normal: `타고난 리더. 어떤 그룹에서든 사람들을 통솔하고 이끌어가는 포지션에 있는 유형 입니다.
    카리스마가 넘치고 결단력이 있습니다. 사업가 혹은 특정 단체의 통솔자인 경우가 많습니다. 이들은 무언가에 ‘도전’  할때 가장 행복하고 재미를 느낍니다.
    항상 긍정적인 마인드를 가지고 있고 뭐든 할수 있다! 라는 생각을 기본 마인드로 가지고 삶을 살아갑니다. 이들은 또한 협상의 귀재 입니다.
    협상을 이기기 위함이 아닌 그저 즐기기 위해 하는 유형입니다.`
    ,img:'https://onlyimagebucketserver.s3.ap-northeast-2.amazonaws.com/poinsettia-removebg-preview.png',nickName:'카리스마 넘치는',flowerName:'포인세티아',engName:'poinsettia'
    }
  } else if (mbti === 'ENTP') {
    return {
      list: `자기 멋대로 살아감.
      혼자 돌아다니는걸 즐김.
      변덕 심함.
      토론 할 때 내가 이겨야 속이 시원함.
      관심 있는건 아주 깊게 파고들어감.
      틀에박힌 일 못함.`,
      normal: `타인을 비판, 논쟁을 즐기는 유형입니다. 
    재치 있는 입담과 재스처, 풍부한 지식으로 관객 혹은 논쟁을 하는 상대방 까지 재미있게 해주는 유형입니다. 
    늘 누군가와 토론하는 것을 즐기기 때문에 때론 불리한 자리에 서서 유리한 포지션에 있는 사람과 토론을 하기도 합니다. 이들은 어떤 토론이던 이기는게 우선입니다. 
    사람들을 잘 설득하고 상대방으로 하여금 그렇구나 라는 인정의 말을 들어야 직성이 풀리는 유형입니다.`
    ,img:'https://onlyimagebucketserver.s3.ap-northeast-2.amazonaws.com/clover-removebg-preview.png',nickName:'똑똑하고 재치있는',flowerName:'클로버',engName:'clover'}
  } else if (mbti === 'INFJ') {
    return {
      list: `생각이 너무 너무 많음.
      항상 하던게 좋음.
      새로운것을 극도로 싫어함.
      낯가림이 심함.
      속으로 욕을 자주함.
      할건 미리 다해둠.
      감수성 풍부.
      혼자 생각할 시간이 필요함.
      다같이 노는 시간이 젤 재미없음.`,
      normal: `이들은 계획이 없으면 실행도 없다는 생각을 가진 유형입니다. 
    무언가 실행 하기전 계획을 꼼꼼히 세우는 걸 선호하고 실행 와중에도 꼼꼼히 점검하는 유형입니다. 
    또한 이들은 누군가를 도와주는 것에 큰 만족감을 느끼고 댓가 없이 누군가를 도와주는 것이 당연하다고 생각하는 유형입니다. 
    또한 이들은 사교성이 좋은 편이며 따듯하고 듣기좋은 언어로 인간 내면의 감정을 따듯하게 만드는 말투를 가졌습니다. 
    이들은 다른이들의 감정을 이해하고 분석하기를 좋아합니다.`
    ,img:'https://onlyimagebucketserver.s3.ap-northeast-2.amazonaws.com/parsley-removebg-preview.png',nickName:'계획적인 전략가',flowerName:'파슬리',engName:'parsley'}
  } else if (mbti === 'INFP') {
    return {
      list: `생각이 많음.
      자주 우울해짐.
      게으름.
      호불호가 명확함.
      타인을 잘 믿지 않음.
      타인이 나에대해 어떻게 생각하는가 많이 고민함.
      나가기 귀찮은데 나가면 잘놈.
      다수보단 소수가 좋음.`,
      normal: `이들은 항상 긍정적인 마인드를 가지고 사건에 좋은 면만을 바라보며 더 나은 상황으로 이끌어가는 유형입니다. 
    또한 원리 원칙에 입각하여 살아가는 유형이고 이익에 상관없이 그 자체의 아름다움, 명예, 양심, 원칙 을 최 우선으로 삼아 살아갑니다. 
    이들은 시인 처럼 은유적인 표현과 이야기를 즐겨합니다. 
    자신의 감정을 은유적으로 표현하는 것을 즐겨하고 대규모 단체보다는 소규모 단체에서 주로 활동합니다.`
    ,img:'https://onlyimagebucketserver.s3.ap-northeast-2.amazonaws.com/Iris-removebg-preview.png',nickName:'원리원칙의',flowerName:'아이리스',engName:'Iris'}
  } else if (mbti === 'ENFJ') {
    return {
      list: `시끄러움.
      인싸이고 싶지만 잘모르겠음.
      사람들을 이끄는 것에 타고남.
      사람을 좋아함.
      무리에 속하지만 가끔 막나감.
      많은 사람이 신뢰함.`,
      normal: `열정 그리고 카리스마. 이들은 특유의 카리스마로 청중 혹은 상대방을 압도하고 제압합니다. 
    나의 말을 상대방이 들을 수 밖에 없도록 만들어버리고 상대방 또한 이런 상황을 즐기게 만듭니다. 
    무언가 설명하고 가르칠 때 희열을 느끼고 큰 만족감을 느낍니다. 이들은 사람을 만나는 것을 좋아합니다. 
    타인에게 관심이 많아 사교성이 좋지만 때론 과한 관심에 상대방이 불쾌함을 느낄 수가 있습니다. `
    ,img:'https://onlyimagebucketserver.s3.ap-northeast-2.amazonaws.com/tulip.jpg',nickName:'압도적인 카리스마',flowerName:'작약',engName:'peony'}
  } else if (mbti === 'ENFP') {
    return {
      list: `고집이 셈.
      호불호가 분명함.
      인싸임.
      외향적이지만 가끔 잠수탐.
      친구들이랑 떠드는걸 굉장히 좋아함.
      새로운 친구 사귀는걸 즐김.
      친절 베푸는걸 좋아함`,
      normal: `이들은 인생을 살아가며 생기는 사소한 즐거움, 행복에 큰 만족감을 느낍니다. 
    사람대 사람으로 유대 관계를 맺으며 행복을 느낍니다. 활발하고 정이 많습니다. 
    참가하는 모임이 과할정도로 많고 혼자 있는 시간보다 함께 있는 시간이 압도적으로 많습니다. 
    가끔 혼자있는 날이면 괜스레 우울해지거나 힘이 하나도 없는 모습을 보입니다. 
    이는 밖에서 사람과 이야기를 나누고 즐기다보면 금방 회복됩니다.`
    ,img:'https://onlyimagebucketserver.s3.ap-northeast-2.amazonaws.com/cosmos-removebg-preview.png',nickName:'분위기 메이커',flowerName:'코스모스',engName:'cosmos'}
  } else if (mbti === 'ISTJ') {
    return {
      list: `원칙 주의자. 
      계획적.
      즉흥적인 것을 싫어함.
      책임감이 많음.
      한번 시작한 작업을 끝을 보고 딴짓을 해야함.
      내 일에 관여하는걸 별로 안좋아함.
      사람 많은 곳을 안좋아함.`,
      normal: `이들은 인생을 살아감에 있어 무언가가 실용적인지 논리적인지 판단하는 것에 흥미를 느낍니다. 
    예를 들면 이 법은 올바른 법인가 탐구하는 상황을 들 수 있습니다. 이들은 전통, 질서를 중시하는 특정한 조직에서 일하는 것을 선호합니다. 
    또한 그 조직에서 일하는 것에 큰 자부심을 가지고 있습니다. 매사에 신중하고 확실합니다. 내뱉은 말은 무조건 책임을 져야한다는 생각을 가지고 있습니다. 
    이들은 타인의 부탁을 대부분 거절하지 않습니다. 때문에 자신의 일을 제 시간에 해결하지 못하는 경우도 많아 남보단 내가 먼저다 라는 생각이 필요해보입니다.`
    ,img:'https://onlyimagebucketserver.s3.ap-northeast-2.amazonaws.com/tulip.jpg',nickName:'논리적인',flowerName:'카멜리아',engName:'camellia'}
  } else if (mbti === 'ISFJ') {
    return {
      list: `원칙주의자.남 눈치를 안봄.타인을 잘 도와줌.게으름.단체활동 별로 안좋아함.혼자 하는걸 좋아함.막상 하면 잘함.칭찬 많이해줌.
      
      계획세우는 것을 좋아함.
      대부분 무슨 일이던 중간은 감.`,
      normal: `이들은 타인을 도와주고 싶은 마음, 타인을 위하는 마음이 내제되어 있습니다.
    인간 관계에 뛰어나 주변에 사람이 많지만 때론 내성적으로 인간관계에 큰 강점을 보이지 못할 때도 있습니다. 
    때론 완벽주의자 만큼 세심하고 꼼꼼하지만 때론 그렇지 않습니다. 이들은 자신이 이루어낸 사건이나 공을 남에게 잘 표출하지 않습니다. 
    내성적이면서도 인간관계에 강점을 가진 특이한 성격으로 많은 유형들이 섞여있어 뭐든 절반은 가는 육각형 모양의 유형입니다.`
    ,img:'https://onlyimagebucketserver.s3.ap-northeast-2.amazonaws.com/tulip-removebg-preview.png',nickName:'천사같은',flowerName:'튤립',engName:'tulip'}
  } else if (mbti === 'ESTJ') {
    return {
      list: `고집이 세다.
      호불호가 확실하다.
      리더를 선호하진 않지만 하면 잘한다.
      일을 못하는 사람을 보면 답답함.
      외로움을 잘 타지 않는다.
      `,
      normal: `이들은 정직하고 헌신적입니다.
    나아갈 길이 온통 가시밭길 이라도 긍정적인 생각으로 조언해주며 사람들을 올바른 길로 인도해줍니다.
    사람들을 결집 시키는데에도 일가견이 있어 사회적인 행사나, 시위, 사회운동 등 사람들을 모으는 데에 소질을 보이기도 합니다. 
    자신이 옳다고 판단한 일이라면 소신을 굽히지 않고 끝까지 밀고나가는 유형입니다. 하지만 자신의 판단이 틀렸다고 생각한다면 그 즉시 인정하고 사과를 하는 진정한 리더 입니다. 
    하지만 모든 사람이 자신과 같을 거라는 생각은 버리는 편이 좋아보입니다.`
    ,img:'https://onlyimagebucketserver.s3.ap-northeast-2.amazonaws.com/royalAzalea-removebg-preview.png',nickName:'헌신적인',flowerName:'철쭉',engName:'royalAzalea'}
  } else if (mbti === 'ESFJ') {
    return {
      list: `술자리를 좋아함.
      어색한걸 극도로 혐오함.
      은근히 계획적임.
      눈치를 많이봄.`,
      normal: `이들을 한마디로 정의한다면 인기왕 입니다. 
    주변에 풍기는 아우라가 이 사람이 왜 인기가 많은지 느껴지게 합니다. 분위기를 쥐고 흔들며 특정 단체의 리더를 하기도 합니다. 
    사교모임, 인간관계를 가장 중요시 하고 사람에 대한 애정이 매우 큽니다. 
    주로 패션, 외모, 가십거리에 관심이 많고 다소 딱딱한 주제인 정치, 과학에는 별관심이 없습니다. 
    이들은 처음보는 사람들과도 금방 친해지는 강점이 있고 계획적으로 무언가 하기보단 즉흥적으로 기분에 따라 실행하는 것을 즐깁니다. 
    이들은 사람을 너무 좋아한 나머지 사람에게 상처도 쉽게 받습니다.`
    ,img:'https://onlyimagebucketserver.s3.ap-northeast-2.amazonaws.com/cyclamen-removebg-preview.png',nickName:'인기많은',flowerName:'시클라멘',engName:'cyclamen'}
  } else if (mbti === 'ISTP') {
    return {
      list: `무미건조함.
      낯을 많이가림.
      망상이 심함.
      주류 무리에 잘 속하지 않음.
      하나에 꽂히면 끝을 봄.
      시끄러운건 싫음.
      본인 기준으로는 필요한 소비지만 타인이 볼땐 잘 모르겠음.
      혼자서 잘놈.`,
      normal: `냉철한 재주꾼 이들은 무언가 직접 만지고 조립하고 분해하는 것을 좋아합니다. 
    주변 세상에 무엇이 있을지 탐색하고 탐구하는 것을 좋아합니다. 다소 내성적인 성격으로 계획적이고 사색을 즐깁니다. 
    하지만 때론 즉흥적이며 일탈을 즐기기도 하고 이쪽으로 갈지 저쪽으로 갈지 알 수 없는 유형입니다. 
    이들은 한참을 참다가 갑자기 에너지가 폭발 하는 경우가 많습니다. 이로인해 추구하던 방향과는 정반대 방향으로 가는 경우가 있습니다. 
    이들은 때론 너무 신중해서 쓸대없는 손해를 보는 경우도 있습니다.`
    ,img:'https://onlyimagebucketserver.s3.ap-northeast-2.amazonaws.com/daffodil-removebg-preview.png',nickName:'재주많은',flowerName:'수선화',engName:'daffodil'}
  } else if (mbti === 'ISFP') {
    return {
      list: `느릿느릿함.
      감수성이 풍부함.
      고생하는건 미래의 나다. 일을 엄청미룸.
      집돌이, 집순이.
      사람들이랑 만나면 힘이 쭉쭉빠짐.
      눈치많이봄.
      고집셈, 이기적임.`,
      normal: `이들은 변화의 선두 주자 입니다. 
    다양한 아이디어로 부터 영감을 받아 새로운 디자인, 미술, 소리 등 이전에 없던 새로운 감각을 이끌어 냅니다. 
    다소 즉흥적인 성격을 가지고 있어서 어디로 튈지 가까운 사람들도 잘 모르는 유형입니다. 열정이 넘치고 익스트림 스포츠를 즐기는 경향이 있습니다. 
    이들은 내향적이지만 다른이들과 어울리는 것을 좋아하기도 합니다. 이들 특유의 매력이 넘치기 때문입니다. 
    길을 걷다 보이는 돌맹이 하나에도 진심을 다해 감정을 느끼는 감각적인 유형입니다.`
    ,img:'https://onlyimagebucketserver.s3.ap-northeast-2.amazonaws.com/hydrangea-removebg-preview.png',nickName:'변화의 선두주자',flowerName:'수국',engName:'hydrangea'}
  } else if (mbti === 'ESTP') {
    return {
      list: `외로움을 많이탄다.
      손재주가 좋다.
      리더쉽이 있다. 
      관종끼가 많다.
      눈치없이 대충산다.
      하고싶은건 꼭 하고 살아야 직성이 풀림`,
      normal: `동에 번쩍 서에번쩍 어디서나 나타나 일에 관여하는 소위 말하는 인싸 입니다. 
    이들은 친근한 농담으로 주변사람을 재미있게 해주고 주목 받는 것을 좋아합니다. 
    나서는 것을 좋아하고 고리타분하게 앉아서 말로 떠드는 것 보다는 행동으로 보여주는 것을 선호합니다. 
    이들은 충동적인 성향이있어 틀에박힌 조직에서는 살아남기 힘들어 보입니다. 
    충동적인 성향이 그 순간에는 이득이 될 수 있지만 장기적으로 보면 그렇지 않은 경우도 있기 때문입니다. 
    이들은 타인을 위한 배려심 또한 충분합니다. `
    ,img:'https://onlyimagebucketserver.s3.ap-northeast-2.amazonaws.com/cherryBlossom-removebg-preview.png',nickName:'슈퍼 인싸',flowerName:'벚꽃',engName:'cherryBlossom'}
  } else if (mbti === 'ESFP') {
    return {
      list: `성격이 매우급함.
      고생하는건 어차피 미래의 나 결제를 망설이지 않음.
      모임에서 조용한거 싫어함.
      자존감이 최강임.
      혼자있는게 괴로움.`,
      normal: `이들은 넘치는 흥과 끼 때문에 노래가 나오면 가만히 있지 못합니다. 
    노래가 나오면 불러야하고 노래가 나오면 춤을 춰야 에너지가 분출됩니다. 
    이들은 순간순간의 감정이나 상황에 쉽게 녹아들고 빠져듭니다. 어디를 가던 그곳은 이들에게 무대입니다.
    관심, 주목을 받고싶고 스포트라이트가 자신에게만 켜지길 바라고 있습니다. 이들이 가는 곳은 늘 시끌벅쩍하고 즐겁습니다. 
    이들은 종종 너무 즉흥적인 즐거움에 취해 현실적인 면은 보지못합니다. 또한 이들은 자신의 능력이 어느정도인지 정확히 알고 있습니다. 
    하지만 계획을 세우지 못하고 절제하지못해 씀씀이가 점점 커는 경우도 있습니다. 
    이들은 타인과 어울리는 자리라면 어떤 모임에서든 불러주는 환영받는 사람입니다.`
    ,img:'https://onlyimagebucketserver.s3.ap-northeast-2.amazonaws.com/peachBlossom-removebg-preview.png',nickName:'화끈한',flowerName:'복숭아꽃',engName:'peachBlossom'}
  } else {
    return{
      list:``,
      normal:``,
      img:``,
      nickName:``,
      flowerName:``,
      engName:``
    }
  }
}



export default dummyContent