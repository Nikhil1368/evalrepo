// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",mplformfun)
var mplArr = JSON.parse(localStorage.getItem("schedule"))||[];
function mplformfun(){
    event.preventDefault();
    var mplObj = {
     Match_Number : masaiForm.matchNum.value,
     Team_A :masaiForm.teamA.value,
     Team_B : masaiForm.teamB.value,
     Date : masaiForm.date.value,
     Venue : masaiForm.venue.value,
    }
mplArr.push(mplObj);
localStorage.setItem("schedule",JSON.stringify(mplArr));
window.location.href = "matches.html"
}
