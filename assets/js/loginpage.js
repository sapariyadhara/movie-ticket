// let loginRef = document.getElementById("login");

const handleLogin = () => {
  let email1Ref = document.getElementById("email1").value;
  let pass1Ref = document.getElementById("password1").value;

  let data = JSON.parse(localStorage.getItem("user"));

  console.log("local storeg", data);

  let correct = false;
  console.log("correct", correct);

  data.map((v) => {
    console.log("v", v.email);
    if (v.email == email1Ref && v.pass == pass1Ref) {
      // alert("Successfully Regestered")
      correct = true;
  console.log("correct", correct);

    }
  });

  let admin = {
    adEmail: "abc@gmail.com",
    adPass: 12345,
  };
  console.log("admin.adEmail", admin.adEmail);
  console.log("admin.adEmail", email1Ref);

  console.log("admin.adEmail", pass1Ref);
  console.log("vvvcorrect", correct);

  if (email1Ref == admin.adEmail && pass1Ref == admin.adPass) {
    console.log("im if admin.adEmail", admin.adEmail);
    //location.reload();
     window.location =  "http://127.0.0.1:5500/userhome.html";
    // location.replace("http://127.0.0.1:5500/adminhome.html");
  } else {
    if (correct) {
      console.log("else admin.adEmail", admin.adPass);
      alert("Successfully Registered");
      location.replace("http://127.0.0.1:5500/user/userhome.html");
      return true;
    } else {
      alert("Not Matched");
      return false;
    }
  }
  console.log("end", pass1Ref);
  // data.map((v) => {
  //     if(v.email === email1Ref && v.pass === pass1Ref) {
  //         // alert("Successfully Regestered")
  //         correct = true ;
  //      }
  // });

  console.log(correct);

  // if(correct){
  //     alert("Successfully Registered")
  //     // window.location = "http://127.0.0.1:5500/adminpage.html";
  //     // location.replace("adminpage.html");

  //     return true;
  // } else {
  //     alert("Not Matched")
  //     return false;
  // }
};

// loginRef.addEventListener("submit" , handleLogin);
