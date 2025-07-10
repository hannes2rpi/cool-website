document.addEventListener("DOMContentLoaded", () => {
    changeHobby()
})

function changeHobby() {
    let hobbySelection = document.getElementById("hobbies")
    hobbySelection.addEventListener("change", function(){
        if (hobbies.value == "cooking"){
            var text = "<div class='hobbies_boxes'><div class='hobbies_boxes2'><img src='../img/macncheese.jpeg' width=250 height=350 alt='delicious mac n cheese'></div><div class='hobbies_boxes2'><img src='../img/tofu_marsala.jpeg' width=250 height=350 alt='tofu marsala including tofu, mushrooms, mashed potatoes, and green beans'></div><div class='hobbies_boxes2'><img src='../img/cheeseburger_salad.jpeg' width=250 height=350 alt='cheeseburger salad featuring a black bean burger, lettuce, and toppings'></div></div><div class='hobbies_boxes_smaller'><div class='hobbies_boxes2_smaller'><p>Mac n Cheese<br></br>Dairy free cheese, cavatappi noodles, and hearts of palm baked with old bay seasoning. Topped with breadcrumbs and tarragon.</p></div><div class='hobbies_boxes2_smaller'><p>Tofu Marsala<br></br>Tofu, mushrooms, mashed potatoes, and green beans covered in a marsala sauce.</p></div><div class='hobbies_boxes2_smaller'><p>Cheeseburger Salad<br></br>Black bean burger served over lettuce with dairy free cheese, purple onion, tomatoes, pickles, sesame seeds, and secret sauce.</p></div></div>";
            document.getElementById("response").innerHTML = text;
            console.log("Changed to cooking");
        }else if (hobbies.value == "more"){
            var text = "More coming soon! Should I add gaming, crocheting, or web design next? OH I could've just screenshoted this website. Check out my website... on my website! Hmm maybe I should add comedy instead lol.";
            document.getElementById("response").innerHTML = text;
            console.log("Changed to more");
        }
    })  
}