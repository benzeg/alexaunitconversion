const toBase = (unitObj) => {
	if (unitObj.unit === unitObj.system.base) {
		return unitObj;
	}

	if (unitObj.system.coeff === 'base10') {
		unitObj.val *= Math.pow(10, unitObj.system[unitObj.unit]);
	}

	if (unitObj.system.coeff === 'fixed') {
		unitObj.val *= unitObj.system[unitObj.unit];
	}

	return unitObj;
}

// const round = (unitObj) => {

// }

const toString = (unitObj) => {
	unitObj.val = unitObj.val.toString();
	let i = unitObj.val.indexOf('.');
	if (i !== -1 && unitObj.val.length - i > 2) {
		unitObj.val = unitObj.val.slice(0, i + 3);
	}
	return unitObj;
}


export { toBase, toString };