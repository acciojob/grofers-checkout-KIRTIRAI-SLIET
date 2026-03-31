const getSum = () => {
	let total = 0;

	const prices = document.querySelectorAll(".prices");

	prices.forEach(price => {
		total += Number(price.textContent);
	});

	const table = document.querySelector("table");

	let ansCell = document.querySelector("#ans");

	if (!ansCell) {
		const newRow = document.createElement("tr");
		ansCell = document.createElement("td");

		ansCell.id = "ans";
		ansCell.colSpan = 2;

		newRow.appendChild(ansCell);
		table.appendChild(newRow);
	}

	ansCell.textContent = total;
};

document.addEventListener("DOMContentLoaded", function () {
	const btn = document.createElement("button");
	btn.textContent = "Get Total Price";
	document.body.appendChild(btn);

	btn.addEventListener("click", getSum);
});