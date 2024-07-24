document.addEventListener("DOMContentLoaded", () => {
    changeHobby()
})

function changeHobby() {
    let hobbySelection = document.getElementById("hobbies")
    hobbySelection.addEventListener("change", function(){
        if (hobbies.value == "cooking"){
            var text = "i like cooking!";
            document.getElementById("response").innerHTML = text;
            console.log("Changed to cooking");
        }else if (hobbies.value == "gaming"){
            var text = "i like gaming!";
            document.getElementById("response").innerHTML = text;
            console.log("Changed to gaming");
        }else if (hobbies.value == "security"){
            var text = "i like security!";
            document.getElementById("response").innerHTML = text;
            console.log("Changed to security");
        }
    })  
}