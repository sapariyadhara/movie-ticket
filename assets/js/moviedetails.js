const handleMoviesDetails = () => {
    console.log("getMdetails");
    let getMdetails = JSON.parse(sessionStorage.getItem("mDatails"))
    console.log(getMdetails);
 
   

    let mData = getMdetails.filter((v) => v.mid)
    console.log(mData);

    // let aa = mData
    // console.log(aa);


    // if (aa ) {

    //     let disp = ''
    //     aa.map((v) => {
    //         disp += ' <div><img src=' + '../assets/images/' + v.poster + '></div>'
    //         disp += '<div>'
    //         disp += ' <h1>' + v.mName + '</h1>'
    //         disp += ' <h3>' + v.Cname + '</h3>'
    //         disp += ' <p>' + v.decrpt + '</p>'
    //         disp += ' <p>' + v.time  + '</p>'
    //         disp += '<button> Book Ticket </button>'
    //         disp += '</div>'
    //     })
    //     document.getElementById("movieD").innerHTML = disp
    // }

}



window.onload = handleMoviesDetails