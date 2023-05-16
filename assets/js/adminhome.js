const handlecinema = () => {
    document.getElementById("addmovie").style.display = "block"
}

let movieRef = document.getElementById("movie-add")
let arr = [] ;

const handleEdit = (i) => {
    let editData = i ;
}

const handleRemove = (i) => {
    let remvData = document.getElementById("data" + i);
    console.log('remvData',remvData);
    remvData.remove();


    arr.map((e , index) => {
        if (e.id === i) {
            arr.splice(index, 1);
        
        } 
    });
    console.log('arr',arr);

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
    trElem.setAttribute("id" , "data" + rMd)

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
  
    event.preventDefault();
}



movieRef.addEventListener("submit" , handleMovies)