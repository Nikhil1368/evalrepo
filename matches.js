// write js code here corresponding to matches.html
var mplArr = JSON.parse(localStorage.getItem("schedule"))
displayData(mplArr);
favouriteArr = JSON.parse(localStorage.getItem("favourites"))||[]
function displayData(data){
    data.forEach(function(elem){
        var tr = document.createElement("tr");
        var td1 = document.createElement("td")
        td1.innerText = elem.Match_Number
        var td2 = document.createElement("td")
        td2.innerText = elem.Team_A
        var td3 = document.createElement("td")
        td3.innerText = elem.Team_B
        var td4 = document.createElement("td")
        td4.innerText = elem.Date
        var td5 = document.createElement("td")
        td5.innerText = elem.Venue
        var td6 = document.createElement("td")
        td6.innerText = "Favourites"
        td6.style.color = "green"
        td6.style.cursor = "pointer"
        td6.addEventListener("click",function(){
            favouritefunc(elem)
        })
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
        
    })
    function favouritefunc(elem){
     favouriteArr.push(elem);
     localStorage.setItem("favourites",JSON.stringify(favouriteArr))
     window.location.href = "favourites.html"
    }
}