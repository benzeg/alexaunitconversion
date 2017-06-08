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

const unitToUnit = (cuObj, tuObj) => {
	if (cuObj.meta.system === tuObj.meta.system) {
		tuObj.val = cuObj.val;
		return tuObj;
	}

	tuObj.val = cuObj.val * cuObj.system.conversion[tuObj.meta.system];
	return tuObj;
}

const baseToUnit = (unitObj) => {
	if (unitObj.unit === unitObj.system.base) {
		return unitObj;
	}

	if (unitObj.system.coeff === 'base10') {
		unitObj.val /= Math.pow(10, unitObj.system[unitObj.unit]);
	}

	if (unitObj.system.coeff === 'fixed') {
		unitObj.val /= unitObj.system[unitObj.unit];
	}

	return unitObj;
}

const toString = (unitObj) => {
	unitObj.val = Number(Math.round(unitObj.val +'e2')+'e-2').toString();
	
	return unitObj;
}


export { toBase, toString, unitToUnit, baseToUnit};
