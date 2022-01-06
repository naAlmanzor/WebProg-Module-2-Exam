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

var age = [
     '2', '5', '10', '8', '6', '11', '3', '4', '8', '1'
];

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

function set(){
    document.getElementById("desc").src=images[0];    
    document.getElementById("petName").innerHTML=names[0]+", " +age[0];
    document.getElementById("petType").innerHTML=breed[0];
}

function nextPet(){
    
    images.shift();
    document.getElementById("desc").src=images[0];    
    // images.shift();

    names.shift();
    age.shift();
    // age.shift();
    document.getElementById("petName").innerHTML=names[0]+", "+age[0];
        
    
    // document.getElementById("petAge").innerHTML=age[0];

    breed.shift();
    document.getElementById("petType").innerHTML=breed[0];
    
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
    console.log(images)
}

function heartPet(){
    //div-messages
    var divMsgs = document.createElement("div");
    divMsgs.className = "messages";

    //div-avatar
    var divAvt = document.createElement("div");
    divAvt.className = "avatar";
    divMsgs.appendChild(divAvt);

    //pets
    var divName = document.createElement("div");
    divName.innerHTML = names[0];

    //pet age
    var divAge = document.createElement("div");
    divAge.innerHTML = " " + age[0];

    
    //image 
    var iconurl = images[0]; 
    var img = document.createElement("img");
    img.src=iconurl;
    img.width=40;
    img.height=40;
    divAvt.appendChild(img);
    
    // console.log('THe heart button was clicked');
    
    document.getElementById("likedPets").appendChild(divMsgs).appendChild(divName).appendChild(divAge);

    
    nextPet();
}

function dislikePet(){
    nextPet();
    // console.log('THe dislike button was clicked');
}