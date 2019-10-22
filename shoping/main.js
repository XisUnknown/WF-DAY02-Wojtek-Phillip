arr = [];

function addToCart(id){
	let name =document.getElementsByClassName("name")[id].textContent;
	let img =document.getElementsByClassName("imgProduct")[id].src;
	let price =document.getElementsByClassName("price")[id].textContent;
	let amount = document.getElementsByClassName("amount")[id].textContent;
	price = price.substr(0,price.length-1);
	price = price.replace(",",".");
	pro = new Product (img, name, price, amount);
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
		
		let amountDiv = document.createElement("div");
		amountDiv.id= "amountDiv";
		let amount = document.createElement("p");
		amount.id ="amount"+(i+1);
		amount.textContent = arr[i].amount;
		let plus = document.createElement("button");
		plus.className = "plusCard";
		plus.id="plus"+(i+1);
		plus.textContent = "+";
		let minus = document.createElement("button");
		minus.className ="minusCard";
		minus.id="minus"+(i+1);

		minus.textContent = "-";
		let remove = document.createElement("button");
		remove.textContent = "Delete";
		remove.onclick = function (){removeItem(remove)};
		itemCard.appendChild(image);
		itemCard.appendChild(name);	
		itemCard.appendChild(price);	
		itemCard.appendChild(amountDiv);
		amountDiv.appendChild(amount);
		amountDiv.appendChild(plus);
		amountDiv.appendChild(minus);
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
$(document).ready(function() {
$(".plusCard").on('click', function(){
	console.log(arr[this.id.slice(4)-1].amount);
	let sum = arr[this.id.slice(4)-1].amount; 
	sum++;

	$("#amount"+this.id.slice(4)).text(sum);
	arr[this.id.slice(4)-1].amount = sum;
	fullPrice += arr[this.id.slice(4)-1].price *1;
	document.getElementById("summe").innerHTML = fullPrice.toFixed(2) + "€";
	
});

$(".minusCard").on('click', function(){
	if (arr[this.id.slice(5)-1].amount > 0){
	let sum = arr[this.id.slice(5)-1].amount; 
	sum--;

	$("#amount"+this.id.slice(5)).text(sum);
	arr[this.id.slice(5)-1].amount = sum;
	fullPrice -= arr[this.id.slice(5)-1].price *1;
	document.getElementById("summe").innerHTML = fullPrice.toFixed(2) + "€";

}});
});
