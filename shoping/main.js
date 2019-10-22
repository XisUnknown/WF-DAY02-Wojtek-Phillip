arr = [];

function addToCart(id){
	let name =document.getElementsByClassName("name")[id].textContent;
	let img =document.getElementsByClassName("imgProduct")[id].src;
	let price =document.getElementsByClassName("price")[id].textContent;
	price = price.substr(0,price.length-1);
	price = price.replace(",",".");
	pro = new Product (img, name, price);
	arr.push(pro);
}

function changeHTML() {
   
  localStorage.myArray = JSON.stringify(arr);

}

let fullPrice = 0;
function printCart(arr){
	for(let i=0; i<arr.length;i++){
		fullPrice += Number(arr[i].price);
		document.getElementById("summe").innerHTML = fullPrice.toFixed(2) + "€";
		let itemCard = document.createElement("div");
		itemCard.className = "itemCard"
		let image = document.createElement("img");
		image.src= arr[i].img;
		let name = document.createElement("h5");
		name.textContent = arr[i].name;
		let price = document.createElement("p");
		price.textContent = arr[i].price + "€";
		let remove = document.createElement("button");
		remove.textContent = "Delete";
		remove.onclick = function (){removeItem(remove)};
		itemCard.appendChild(image);
		itemCard.appendChild(name);	
		itemCard.appendChild(price);
		itemCard.appendChild(remove);
		document.getElementById("einkauf").appendChild(itemCard);
	}
}

function removeItem(a){
	minus = a.parentNode.childNodes[2].textContent;
	minus = minus.replace("€", "");
	fullPrice -= minus;
		document.getElementById("summe").innerHTML = fullPrice.toFixed(2) + "€";
	
	a.parentNode.parentNode.removeChild(a.parentNode);

}