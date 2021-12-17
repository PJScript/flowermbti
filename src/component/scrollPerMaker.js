export const get_scroll_percentage = () => {  // 스크롤 퍼센트 계산
  return ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight
  ) * 100;
}  