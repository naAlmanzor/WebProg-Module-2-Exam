var images = [
    "https://randomuser.me/api/portraits/lego/1.jpg",
    "https://randomuser.me/api/portraits/lego/2.jpg",
    "https://randomuser.me/api/portraits/lego/3.jpg",
    "https://randomuser.me/api/portraits/lego/4.jpg",
    "https://randomuser.me/api/portraits/lego/5.jpg",
    "https://randomuser.me/api/portraits/lego/6.jpg",
    "https://randomuser.me/api/portraits/lego/7.jpg",
    "https://randomuser.me/api/portraits/lego/8.jpg",
    "https://randomuser.me/api/portraits/lego/9.jpg",
    "https://randomuser.me/api/portraits/lego/10.jpg",
];

var names = [
    "Kubo",
    "Nunu",
    "Gobta",
    "Beni Enma",
    "Koyanskaya",
    "Hina",
    "Momoji",
    "Cidala",
    "Vikala",
    "Junnie",
];

// var age = [
//     '2', '5', '10', '8', '6', '11', '3', '4', '8', '1'
// ];

var breed = [
    "Syberian Husky",
    "Persian",
    "Eurasian Otter",
    "Parrot",
    "Silver Fox",
    "Hamster",
    "Goldfish",
    "Toyger",
    "Deer Mouse",
    "Shiba Inu",
];

function nextPet(){
    
    images.shift();
    document.getElementById("desc").src=images[0];    
       
        // nameIndex = (nameIndex+1)%(names.length);
    names.shift();
    age.shift();
    document.getElementById("petName").innerHTML=names[0]+", "+age[0];
        
    
    document.getElementById("petAge").innerHTML=age[0];

    breed.shift();
    document.getElementById("petType").innerHTML=breed[0];
        // breed.splice(breedData, 1);

   

    if (images.length==0){
        // Placeholder
        document.getElementById("desc").src="assets/test.png";
        document.getElementById("profile").style.visibility="hidden";
        
        // Disables button
        document.getElementById("dislike").disabled=true;
        document.getElementById("heart").disabled=true;
        document.getElementById("dislike").style.filter = "brightness(50%)";
        document.getElementById("heart").style.filter = "brightness(50%)";
    }
    // images.shift();
    // console.log("Images Left: "+images.length);
    console.log(images)
    // console.log("Names Left: "+names.length);
}

function heartPet(){
    nextPet();
    
    // console.log('THe heart button was clicked');

}

function dislikePet(){
    nextPet();

    // console.log('THe dislike button was clicked');
}