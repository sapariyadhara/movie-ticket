let searchRef = document.getElementById("searchC")

const getCinemaUserSide = () => {
    let getCinemaData = JSON.parse(localStorage.getItem("cinema"));
    console.log("get data111", getCinemaData);

    if(getCinemaData != null){
        let disp = ''
        getCinemaData.map((v) => {
            disp += '<tr id='+ "data-" + v.cid + '> ';
            disp += '<td>' + v.name + '</td>';
            disp += '<td>' + v.location + '</td>';
            disp += '<td>' + v.facility + '</td>';
            disp += '</tr>';
        })
        document.getElementById("trCine").innerHTML = disp
    }
}

const handleSearchCinema = () => {

    let input = document.getElementById('searchC').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('td');
      
    for (let i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="table-cell";                 
        }
    }
}


searchRef.addEventListener("keyup" , handleSearchCinema)
window.onload = getCinemaUserSide


// var input, filter, ul, li, a, i, txtValue;
// input = document.getElementById("myInput");
// filter = input.value.toUpperCase();
// ul = document.getElementById("myUL");
// li = ul.getElementsByTagName("li");
// for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName("a")[0];
//     txtValue = a.textContent || a.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         li[i].style.display = "";
//     } else {
//         li[i].style.display = "none";
//     }
// }



// let txtValue , input
// let search = document.getElementById("searchC")
// let filter = search.value.toUpperCase();
// let trS = document.getElementById("trCine");
// let tdS = trS.getElementsByTagName("td");
// for (let i = 0; i < tdS.length; i++) {
//         tdS = trS[i].getElementsByTagName("td")[0];
//         txtValue = tdS.textContent || tdS.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             tdS.style.display = "";
//         } else {
//             tdS.style.display = "none";
//         }
//     }