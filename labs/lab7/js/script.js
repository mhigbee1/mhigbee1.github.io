function init(){
//add your javascrip between these two lines of code
  var wrds = document.getElementById('entryinput');
  var newres = document.getElementById('textoutput');
  var me = 'Matt Higbee: ';

  function myFunct(){
    alert(me + wrds.value);
    newres.innerHTML = wrds.value;
    }
  var psh = document.getElementById('entrybutton');
  psh.addEventListener('click', myFunct);
}









window.addEventListener('load', init);
