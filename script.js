const getSum = () => {
	let total = 0;

	const prices = document.querySelectorAll(".prices");

	prices.forEach(price => {
		total += Number(price.textContent);
	});

	const table = document.querySelector("table");

	const newRow = document.createElement("tr");
	const newCell = document.createElement("td");

	newCell.colSpan = 2;
	newCell.textContent = `Total Price: ${total}`;

	newRow.appendChild(newCell);
	table.appendChild(newRow);
};

document.addEventListener('DOMContentLoaded', function() {

	const getSumBtn = document.createElement("button");
	getSumBtn.append("Get Total Price");
	document.body.appendChild(getSumBtn);

	getSumBtn.addEventListener("click", getSum);
});