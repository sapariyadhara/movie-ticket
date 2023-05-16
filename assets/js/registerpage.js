let registerRef = document.getElementById("register");


const handleRegister = () => {
    let userData = JSON.parse(localStorage.getItem("user"));

    console.log(userData);

    console.log("handleRegister");
    let emaildata = document.getElementById("email").value
    let passdata = document.getElementById("password").value

    regiMd = Math.floor(Math.random() * 1000);

    if (userData === null) {
        console.log("1");
        localStorage.setItem("user", JSON.stringify([{
            rId : regiMd ,
            email: emaildata,
            pass: passdata
        }]));
    } else {
        console.log("2");
        userData.push({
            rId : regiMd ,
            email: emaildata,
            pass: passdata
        });

        localStorage.setItem("user", JSON.stringify(userData));
    }


    location.replace("loginpage.html")

    event.preventDefault()
}




registerRef.addEventListener("submit", handleRegister);

