const elems = document.querySelectorAll('td.price')

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

