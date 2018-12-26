function removeElement(elementId) {
	
	var password = "LanceIsBTY";
	var attempt = document.getElementById("helloo").value;
	if(password == attempt){
		alert("Login successful");
		
		var element = document.getElementById("para");
		element.parentNode.removeChild(element);
	
		// Removes an element from the document
		var element = document.getElementById("hello");
		element.parentNode.removeChild(element);
	
		var element = document.getElementById("hello");
		element.parentNode.removeChild(element);
	
		var element = document.getElementById("helloo");
		element.parentNode.removeChild(element);
	
		var element = document.getElementById("code");
		element.parentNode.removeChild(element);
	
		//Divison
		var heading  = document.createElement("p");
		heading.name = "para";
		document.body.appendChild(heading);
		var text = document.createTextNode("Please don't tell anyone else. It'll spoil the surprise. Yes, it means what you think it means.");
		heading.appendChild(text);
		
		var img = document.createElement("img");
		img.src = "Surprise.png";
		img.style.margin = "0 auto";
		document.body.appendChild(img);
		
	}
	else{
		alert("Login failed. Try again.");
	}
}