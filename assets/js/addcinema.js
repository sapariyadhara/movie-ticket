

let cinemaRef = document.getElementById("cinema-add")
let  cupdate = false;
let uid = null;

const handleupdateCinema = () => {
    console.log('handleupdateCinema');
    let localData = JSON.parse(localStorage.getItem("cinema"))
    console.log(localData);

    let uccinema = document.getElementById("cinema").value
    let uclocat = document.getElementById("location").value
    let ucfacility = document.getElementById("facility").value

    let perentElem = document.getElementById("data-" + uid)

    let srNo ;
    for(let i = 0 ; i < localData.length ; i ++){
        srNo = localData.length
    }

    console.log(perentElem);
    perentElem.children[0].textContent = srNo;
    perentElem.children[1].textContent = uccinema;
    perentElem.children[2].textContent = uclocat;
    perentElem.children[3].textContent = ucfacility;
    perentElem.children[4].innerHTML ='<img src=' + '../assets/images/' + cimages.files[0].name + '> ' ;


    console.log(uid);

    let cineupData = localData.map((a) => {
        if (a.cid === uid) {
            return {
                cid: uid,
                name : uccinema ,
                location : uclocat , 
                facility : ucfacility ,
                imageC : cimages.files[0].name,
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
    let cineData = localData.filter((e , index) => e.cid === i);
   uid = cineData[0].cid;

   document.getElementById("cinema").value = cineData[0].name;
   document.getElementById("location").value = cineData[0].location;
   document.getElementById("facility").value = cineData[0].facility;



}

const handleRemove = (i) => {
    
    arr = JSON.parse(localStorage.getItem("cinema"))
    let remvData = document.getElementById("data-" + i);
    console.log('remvData',remvData);
    remvData.remove();


    arr.map((e , index) => {
        if (e.cid === i) {
            arr.splice(index, 1);
        
        } 
    });
    console.log('arr',arr);

   
    localStorage.setItem("cinema" , JSON.stringify(arr))
    getlocalCineData()
}

const handleCinema = () => {
    
    let arr = JSON.parse(localStorage.getItem("cinema"))

    console.log('arr' ,arr);

    let cinemaData = document.getElementById("cinema").value
    let locationData = document.getElementById("location").value
    let facilityData = document.getElementById("facility").value
   
    let rMd = Math.floor(Math.random() * 1000);
  

    if(arr === null){
       
        localStorage.setItem("cinema" , JSON.stringify([{
            cid : rMd ,
            name : cinemaData ,
            location : locationData , 
            facility : facilityData ,
            imageC : cimages.files[0].name,
        }]));
    } else {
        
        arr.push({ 
            cid : rMd ,
            name : cinemaData ,
            location : locationData , 
            facility : facilityData ,
            imageC : cimages.files[0].name ,
                    //id . files [0].name
        })
        localStorage.setItem("cinema", JSON.stringify(arr));
    }
    let srNo
   for(let i = 0 ; i < arr.length ; i ++){
    
     srNo = arr.length
   }
   console.log(arr.length , srNo);

    let trElem = document.createElement("tr");
    trElem.setAttribute("id" , "data-"+rMd)

    let tdESr = document.createElement("td");
    let tdElem1 = document.createElement("td");
    let tdElem2 = document.createElement("td");
    let tdElem3 = document.createElement("td");
    let tdElem31 = document.createElement("td");
    let tdElem4 = document.createElement("td");
    let tdElem5 = document.createElement("td");
    let rbElem = document.createElement("button");
    let ebElem = document.createElement("button");  

    let imgElem = document.createElement("img")
    imgElem.setAttribute("id" , "cinemaimag")
    imgElem.setAttribute("src" , '../assets/images/'+ cimages.files[0].name)

    tdElem31.appendChild(imgElem)

    let tdsrText = document.createTextNode(srNo);
    let tdtextElem1 = document.createTextNode(cinemaData);
    let tdtextElem2 = document.createTextNode(locationData);
    let tdtextElem3 = document.createTextNode(facilityData);
    let tdtextElem31 = document.createTextNode(cimages.files[0].name);
  
    let rbtextElem = document.createTextNode("X");
    let ebtextElem = document.createTextNode("Edit");

    rbElem.setAttribute("onclick" , "handleRemove(" + rMd + ")" );
    ebElem.setAttribute("onclick" , "handleEdit(" + rMd + ")" )
  
    trElem.appendChild(tdESr);
    trElem.appendChild(tdElem1);
    trElem.appendChild(tdElem2);
    trElem.appendChild(tdElem3);
    trElem.appendChild(tdElem31);
    trElem.appendChild(tdElem4);
    trElem.appendChild(tdElem5);

    tdElem4.appendChild(rbElem);
    tdElem5.appendChild(ebElem);


    tdESr.appendChild(tdsrText);
    tdElem1.appendChild(tdtextElem1);
    tdElem2.appendChild(tdtextElem2);
    tdElem3.appendChild(tdtextElem3);
    tdElem3.appendChild(tdtextElem31);
    rbElem.appendChild(rbtextElem);
    ebElem.appendChild(ebtextElem);

    let tbodyElem = document.getElementById("trCinema");
    tbodyElem.appendChild(trElem);

    event.preventDefault();
}

const handleCineDese = () => {
    if (cupdate) {
        handleupdateCinema();
    } else {
        handleCinema();
    }
}

const getlocalCineData = () => {
    let ciData = JSON.parse(localStorage.getItem("cinema"))
    console.log("get local" , ciData);
  
    if(ciData != null){
       
        let disp = '' ;
        ciData.map(( v , i ) => {
            console.log(i+1);
            let srNo = i+1

        disp += '<tr id='+ "data-" + v.cid + '> ';
        disp += '<td>' + srNo + '</td>';
        disp += '<td>' + v.name + '</td>';
        disp += '<td>' + v.location + '</td>';
        disp += '<td>' + v.facility + '</td>';
        disp += '<td>' + '<img src=' + '../assets/images/' + v.imageC + '> '+ '</td>';
        disp += '<td>' + '<button onclick="handleRemove(' + v.cid + ')"> X </button>' + '</td>';
        disp += '<td>' + '<button onclick="handleEdit(' + v.cid + ')"> Edit </button>' + '</td>';
        disp += '</tr>';
        })
       
        document.getElementById("trCinema").innerHTML = disp

    }
 
}

cinemaRef.addEventListener("submit" , handleCineDese)

window.onload = getlocalCineData




// Add Movie
const handleMovie = () => {
    window.location = "./addmovie.html"
}

// Add Seat

const handleSeat = () => {
    window.location = "./addseat.html"
}



