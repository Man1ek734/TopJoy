
window.TopJoyAuth={
  login(){
    alert("Logowanie przez Discord jest przygotowane po stronie wyglądu. Do bezpiecznego sprawdzania ról potrzebny jest backend OAuth. Podłączymy Client ID, Guild ID i Role ID w kolejnym kroku.");
  }
};
document.addEventListener("click",e=>{
  const el=e.target.closest("[data-discord-login]");
  if(el){e.preventDefault();window.TopJoyAuth.login();}
});
