import * as Unit from './unitObject.js';
import * as Validate from './exceptionHandler.js';
import * as ConvertTools from './unitConvertor.js';

const convertor = (val, convertingUnit, targetUnit) => {
	try {
		//Converting Unit and Target Unit will be referred to as cu and tu
		//from here on out in variable names
		const unitInfo = Validate.verifyUnitFamily(convertingUnit, targetUnit);
		const inputNum = Validate.verifyInputNum(val);
		const cuInfo = Object.assign({}, unitInfo.cu);
			cuInfo.val = inputNum;
			cuInfo.unit = convertingUnit;
		const tuInfo = Object.assign({}, unitInfo.tu);
			tuInfo.unit = targetUnit;
	} catch (e) {
		console.log(e);
		return e.message;
	}

	const cuInfo = Unit.build(convertingUnit, val);
	const tuInfo = Unit.build(targetUnit);

	//call on convert to base unit tool to make conversion if necessary
	//since we'll be using the base unit number to convert between unit systems
	ConvertTools.toBase(cuInfo);
	ConvertTools.toString(cuInfo);
	return cuInfo;
}

export { convertor };