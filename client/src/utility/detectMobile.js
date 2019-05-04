function detectMobile(){
  var x = window.matchMedia("(max-width: 1100px)")
  if(x.matches){
    return true
  }
  else{
    return false
  }
}
export default detectMobile ;
