var addName = document.querySelector("#add");
var listName = document.querySelector("#list");
var deleteName = document.querySelector("#delete");
var friends = [];


addName.addEventListener("click", function(){
	addFriend();
});

listName.addEventListener("click", function(){
	if(friends.length <= 0 ){
		console.log("Add Friends");
	}
	listFriend();
});

deleteName.addEventListener("click", function(){
	deleteFriend();
});




function addFriend(){
	var name = prompt("Enter friend's name");
	friends.push(name);
	console.log("Name ADDED");
}

function listFriend(){
	friends.forEach(function (friend, i){
		console.log(i + ": " + friend);
	});
}

function deleteFriend(){
	var userInput = prompt("Enter friends Index to delete");
	friends.splice(userInput, 1);
	console.log("Name DELETED!");
}

