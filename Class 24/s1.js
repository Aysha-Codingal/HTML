function validate(e){
    e.preventDefault()
    var email1 = document.getElementById("email").value
    var pass1 = document.getElementById("password").value
     var age1 = document.getElementById("age1").value
     var result1 = document.getElementById("result")
     var mymsg = 's'

     if (email1 == "")
     {
        mymsg = "Fill the email"
        result1.style.colour = "red"
     }
      else if (pass1 == "")
     {
        mymsg = "Fill the password"
        result1.style.colour = "red"
     } 
     else if (age1 == "")
     {
        mymsg = "Fill the age"
        result1.style.colour = "red"
     }
      else 
     {
        mymsg = "Completed sccessfullly"
        result1.style.colour = "green"
     }
   result1.innerText = mymsg

}