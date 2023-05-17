

let loginRef = document.getElementById("login");

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

  if (email1Ref === 'abc@gmail.com' && pass1Ref === '12345') {
    console.log("im if admin.adEmail", admin.adEmail);
    alert("Admin Login Successfully")
    window.location = "../admin/adminhome.html"
  } else {
    if (correct) {
      console.log("else admin.adEmail", admin.adPass);
      alert("Successfully Registered");
      window.location = '../user/userhome.html'

    } else {
      alert("Not Matched");
    }
  }
  console.log("end", pass1Ref);


  console.log(correct);



  event.preventDefault()
};

loginRef.addEventListener("submit", handleLogin);




