const handlecinema = () => {
    document.getElementById("addmovie").style.display = "block"
}

let movieRef = document.getElementById("movie-add")
let arr = [] , cupdate = false;
let uid = null;

const handleupdateCinema = () => {
    console.log('handleupdateCinema');
    let localData = JSON.parse(localStorage.getItem("cinema"))
    console.log(localData);

    let ucmovie = document.getElementById("movie").value
    let uclocat = document.getElementById("location").value
    let ucfacility = document.getElementById("facility").value

    let perentElem = document.getElementById("data-" + uid)

    perentElem.children[0].textContent = ucmovie;
    perentElem.children[1].textContent = uclocat;
    perentElem.children[2].textContent = ucfacility;

    console.log(arr , uid);

    let cineupData = localData.map((a) => {
        if (a.id === uid) {
            return {
                id: uid,
                name : ucmovie ,
                location : uclocat , 
                facility : ucfacility ,
            }
        } else {
            return a;
        }
    });

    console.log(cineupData);
    cupdate = false;
    uid = null

    localStorage.setItem("cinema" , JSON.stringify(cineupData));


   event.preventDefault();
}

const handleEdit = (i) => {
    
    let localData = JSON.parse(localStorage.getItem("cinema"));
    cupdate = true ;
    let editData = i ;
    let cineData = localData.filter((e , index) => e.id === i);
   // console.log(cineData);
   uid = cineData[0].id;

   document.getElementById("movie").value = cineData[0].name;
   document.getElementById("location").value = cineData[0].location;
   document.getElementById("facility").value = cineData[0].facility;



}

const handleRemove = (i) => {
    let remvData = document.getElementById("data-" + i);
    arr = JSON.parse(localStorage.getItem("cinema"))
    console.log('remvData',remvData);
    remvData.remove();


    arr.map((e , index) => {
        if (e.id === i) {
            arr.splice(index, 1);
        
        } 
    });
    console.log('arr',arr);

    localStorage.setItem("cinema" , JSON.stringify(arr))

}

const handleMovies = () => {
    let movieData = document.getElementById("movie").value
    let locationData = document.getElementById("location").value
    let facilityData = document.getElementById("facility").value

    let rMd = Math.floor(Math.random() * 1000);
    arr.push({
        id : rMd ,
        name : movieData ,
        location : locationData , 
        facility : facilityData ,
    })

    let trElem = document.createElement("tr");
    trElem.setAttribute("id" , "data-"+rMd)

    let tdElem1 = document.createElement("td");
    let tdElem2 = document.createElement("td");
    let tdElem3 = document.createElement("td");
    let tdElem4 = document.createElement("td");
    let tdElem5 = document.createElement("td");
    let rbElem = document.createElement("button");
    let ebElem = document.createElement("button");  

    let tdtextElem1 = document.createTextNode(movieData);
    let tdtextElem2 = document.createTextNode(locationData);
    let tdtextElem3 = document.createTextNode(facilityData);
  
    let rbtextElem = document.createTextNode("X");
    let ebtextElem = document.createTextNode("Edit");

    rbElem.setAttribute("onclick" , "handleRemove(" + rMd + ")" );
    ebElem.setAttribute("onclick" , "handleEdit(" + rMd + ")" )
  
    trElem.appendChild(tdElem1);
    trElem.appendChild(tdElem2);
    trElem.appendChild(tdElem3);
    trElem.appendChild(tdElem4);
    trElem.appendChild(tdElem5);

    tdElem4.appendChild(rbElem);
    tdElem5.appendChild(ebElem);


    tdElem1.appendChild(tdtextElem1);
    tdElem2.appendChild(tdtextElem2);
    tdElem3.appendChild(tdtextElem3);
    rbElem.appendChild(rbtextElem);
    ebElem.appendChild(ebtextElem);

    let tbodyElem = document.getElementById("trMovie");
    tbodyElem.appendChild(trElem);




    console.log(arr);
    localStorage.setItem("cinema" , JSON.stringify(arr));
    event.preventDefault();
}

const handleCineDese = () => {
    if (cupdate) {
        handleupdateCinema();
    } else {
        handleMovies();
    }
}

const getlocalCineData = () => {
    let ciData = JSON.parse(localStorage.getItem("cinema"))
    console.log("get local" , ciData);
   
    if(ciData != null){
       
        let disp ;
        ciData.map(( v ) => {

        disp += '<tr id="data-'+ v.id + '"> ';
        disp += '<td>' + v.name + '</td>';
        disp += '<td>' + v.location + '</td>';
        disp += '<td>' + v.facility + '</td>';
        disp += '<td>' + '<button onclick="handleRemove(' + v.id + ')"> X </button>' + '</td>';
        disp += '<td>' + '<button onclick="handleEdit(' + v.id + ')"> Edit </button>' + '</td>';
        disp += '</tr>';
        })
       
        document.getElementById("trMovie").innerHTML = disp

    }
}

movieRef.addEventListener("submit" , handleCineDese)

window.onload = getlocalCineData