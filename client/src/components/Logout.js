function logout(){
  localStorage.setItem("username", "") ;
  localStorage.setItem("id", "") ;
  document.getElementById('navlink1').click() ;
}

export default logout ;
