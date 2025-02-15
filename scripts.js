document.addEventListener("DOMContentLoaded", () => {
    changeHobby()
})

function changeHobby() {
    let hobbySelection = document.getElementById("hobbies")
    hobbySelection.addEventListener("change", function(){
        if (hobbies.value == "cooking"){
            var text = "Check out this wholesome vegan meal!";
            document.getElementById("response").innerHTML = text;
            console.log("Changed to cooking");
        }else if (hobbies.value == "minecraft"){
            var text = "here is my awesome minecraft roller coaster!";
            document.getElementById("response").innerHTML = text;
            console.log("Changed to minecraft");
        }else if (hobbies.value == "league"){
            var text = "Check out this amazing Seraphine ult";
            document.getElementById("response").innerHTML = text;
            console.log("Changed to league");
        }else if (hobbies.value == "rivals"){
            var text = "Check out this amazing Namor ult";
            document.getElementById("response").innerHTML = text;
            console.log("Changed to rivals");
        }
    })  
}