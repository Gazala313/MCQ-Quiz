function getSelectedRadioValue(name) {
  var radios = document.getElementsByName(name);
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      return radios[i].value;
    }
  }
}


function result(){
var score = 0;
score += parseInt(getSelectedRadioValue("q1")) || 0;
score += parseInt(getSelectedRadioValue("q2")) || 0;
score += parseInt(getSelectedRadioValue("q3")) || 0;
score += parseInt(getSelectedRadioValue("q4")) || 0;
score += parseInt(getSelectedRadioValue("q5")) || 0;

if(score > 3){
if (confirm("You've completed the Quiz! Congratulation! You got " +score+ " Out of 5")){
  clear();
}
else {
  document.getElementById("reset").checked= true;
}
}
else if(score > 2){
  if(confirm("You've completed the Quiz! You got " +score+ " Out of 5")){
    clear();

  }
  else {
    document.getElementById("reset").checked= true;
  } 
}
else{
  if(confirm("You've completed the Quiz! Sorry You got " +score+ " Out of 5")){
    clear();
  }
  else {
    document.getElementById("reset").checked= true;
  } 
  }
}

function clear(){
    clearRadioGroup("q1");
    clearRadioGroup("q2");
    clearRadioGroup("q3");
    clearRadioGroup("q4");
    clearRadioGroup("q5");
}


function clearRadioGroup(GroupName)
{
var ele = document.getElementsByName(GroupName);
for(var i=0;i<ele.length;i++)
  ele[i].checked = false;
}




  


