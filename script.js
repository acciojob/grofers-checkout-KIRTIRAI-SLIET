let total = 0;

const getSum = () => {
//Add your code here
	prices.forEach(price => {
	total += Number(price.textContent);
	});
};

document.addEventListener('DOMContentLoaded', function() {
	const prices = document.querySelectorAll(".prices");
	
	const table = document.querySelector("table");
	const newRow = document.createElement("tr");
	
	const newCell = document.createElement("td");
	newCell.colSpan = 2; // span across both columns
	newCell.textContent = `Total Price: ${total}`;
	
	newRow.appendChild(newCell);
	
	table.appendChild(newRow);
	
	const getSumBtn = document.createElement("button");
	getSumBtn.append("Get Total Price");
	document.body.appendChild(getSumBtn);

    getSumBtn.addEventListener("click", getSum);
});