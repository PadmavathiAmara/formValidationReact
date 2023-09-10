import './App.css';
import {useState} from 'react';

const App = () => {
  const [userDetails, setUserDetails] = useState({
    userName: {
      value: "",
      error: "",
    },
    email: {
      value: "",
      error: "",
    },
    password: {
      value: "",
      error: "",
    },
    confirmPassword: {
      value:"",
      error:"",
    },
    mobileNo: {
      value:"",
      error:"",
    },
    checkBox: {
      value: "",
      error: "",
    }
  })

  const onInputChange =(input,key) => {
      let userDetailsCopy = JSON.parse(JSON.stringify(userDetails));
      userDetailsCopy[key].value=input;
      console.log(userDetailsCopy.checkBox.value);
      setUserDetails(userDetailsCopy);
  }

  const validateUsername = () => {
      if(userDetails.userName.value.match("^[A-Za-z][A-Za-z0-9_@$#]{7,29}$")){
        let userDetailsCopy = JSON.parse(JSON.stringify(userDetails));
        userDetailsCopy.userName.error = undefined;
        console.log(userDetailsCopy);
        setUserDetails(userDetailsCopy);
        console.log("error undefined");
      }
      else{
        let userDetailsCopy = JSON.parse(JSON.stringify(userDetails));
        userDetailsCopy.userName.error = "Invalid UserName!";
        setUserDetails(userDetailsCopy);
        console.log("error true");
      }
  }

  const validateEmailId = () => {
    if(userDetails.email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
      let userDetailsCopy = JSON.parse(JSON.stringify(userDetails));
      userDetailsCopy.email.error = undefined;
      setUserDetails(userDetailsCopy);
    }
    else{
      let userDetailsCopy = JSON.parse(JSON.stringify(userDetails));
      userDetailsCopy.email.error = "Invalid email id!";
      setUserDetails(userDetailsCopy);
    }
  }

  const validatePassword = () => {
    if(userDetails.password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)){
      let userDetailsCopy = JSON.parse(JSON.stringify(userDetails));
      userDetailsCopy.password.error = undefined;
      setUserDetails(userDetailsCopy);
    }
    else{
      let userDetailsCopy = JSON.parse(JSON.stringify(userDetails));
      userDetailsCopy.password.error = "Invalid password!";
      setUserDetails(userDetailsCopy);
    }
  }

  const validateConfirmPassword = () => {
    if(userDetails.confirmPassword.value == userDetails.password.value){
      let userDetailsCopy = JSON.parse(JSON.stringify(userDetails));
      userDetailsCopy.confirmPassword.error = undefined;
      setUserDetails(userDetailsCopy);
    }
    else{
      let userDetailsCopy = JSON.parse(JSON.stringify(userDetails));
      userDetailsCopy.confirmPassword.error = "Both password's doesn't match!";
      setUserDetails(userDetailsCopy);
    }
  }

  const validateMbileNo = () => {
      if(userDetails.mobileNo.value.match(/^[0]?[6789]\d{9}$/)){
      let userDetailsCopy = JSON.parse(JSON.stringify(userDetails));
      userDetailsCopy.mobileNo.error = undefined;
      setUserDetails(userDetailsCopy);
      }
      else{
        let userDetailsCopy = JSON.parse(JSON.stringify(userDetails));
        userDetailsCopy.mobileNo.error = "Invalid mobile number!";
        setUserDetails(userDetailsCopy);
      }
  }

  const validateCheckBox = () => {
    if(userDetails.checkBox.value){
      let userDetailsCopy = JSON.parse(JSON.stringify(userDetails));
      userDetailsCopy.checkBox.error = undefined;
      setUserDetails(userDetailsCopy);
    }
    else{
      let userDetailsCopy = JSON.parse(JSON.stringify(userDetails));
      userDetailsCopy.checkBox.error = "Please select the checkbox!";
      setUserDetails(userDetailsCopy);
    }
  }

  const checkForErrors = (userDetails) => {
    let allvalues = Object.values(userDetails);
    let result = allvalues.find((val)=>{
      if(val.error == "" || val.error == undefined){
        return false;
      }
      else{
        return true;
      }
    });
    console.log(result);
    onSubmitClick(result);
  }

  const onSubmitClick = (result) => {
      if(!result){
        const payload = {
          userName : userDetails.userName.value,
          email : userDetails.email.value,
          password : userDetails.password.value,
          mobileNo : userDetails.mobileNo.value,
        }
      alert(JSON.stringify(payload));
      }
  }

  return (
    <div className="App">
      <header>
        SignUp form
      </header>
      <main>
        <div>
          
          UserName <br></br>
          <input type="text" onChange={(e)=>onInputChange(e.target.value, "userName")} onBlur={(e) => validateUsername()} value={userDetails.userName.value} title='Write ur name'/> <br></br>
          { userDetails.userName.error && <div>{userDetails.userName.error}</div> }
        </div>
        <div>
          Email Id <br></br>
          <input type="text" value={userDetails.email.value} onChange={(e)=>onInputChange(e.target.value, "email")} onBlur={(e) => validateEmailId()}/> <br></br>
          { userDetails.email.error && <div>{userDetails.email.error}</div>}
        </div>
        <div>
          Password <br></br>
          <input type="text" value={userDetails.password.value} onChange={(e)=>onInputChange(e.target.value, "password")} onBlur={(e) => validatePassword()}/> <br></br>
          { userDetails.password.error && <div>{userDetails.password.error}</div>}
        </div>
        <div>
          Confirm Password <br></br>
          <input type="text" value={userDetails.confirmPassword.value} onChange={(e)=>onInputChange(e.target.value, "confirmPassword")} onBlur={(e) => validateConfirmPassword()}/> <br></br>
          { userDetails.confirmPassword.error && <div>{userDetails.confirmPassword.error}</div>}
        </div>
        <div>
          Mobile Number <br></br>
          <input type="number" value={userDetails.mobileNo.value} onChange={(e)=>onInputChange(e.target.value, "mobileNo")} onBlur={(e) => validateMbileNo()}/> <br></br>
          {userDetails.mobileNo.error && <div>{userDetails.mobileNo.error}</div>}
        </div>
        <div id="tickBox">
          <input id="check" type="checkbox" onChange={(e)=>onInputChange(e.target.checked, "checkBox")} onBlur={()=>validateCheckBox()}/> 
          I agree to the above terms & conditions!
        </div>
        { userDetails.checkBox.error && <div>{userDetails.checkBox.error}</div>}
        <div id="signUpDiv">
        <input id="signUpBtn" value="SignUp" type="submit" onClick={()=>checkForErrors(userDetails)}/>
        </div>
      </main>
    </div>
  );
}

export default App;
