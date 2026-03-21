const prices = document.querySelectorAll(".price");

let total = 0;

prices.forEach(price => {
  total += Number(price.textContent);
});

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

const getSum = () => {
//Add your code here
	let s=0;
	elems.forEach((userItem) => {
		s+=userItem;
	}
	return s;
};

getSumBtn.addEventListener("click", getSum);

