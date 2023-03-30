import { PRODUCT_CATEGORY_PRODUCT_LINE_LIST } from './productListcategory';

export const productLinesBelongsToSameProductCategory = (
	productLineCode1: string,
	productLineCode2: string
) => {
	return Boolean(
		Object.keys(PRODUCT_CATEGORY_PRODUCT_LINE_LIST).find((key) => {
			const productCategory = PRODUCT_CATEGORY_PRODUCT_LINE_LIST[key];

			return (
				productCategory.includes(productLineCode1?.toUpperCase()) &&
				productCategory.includes(productLineCode2?.toUpperCase())
			);
		})
	);
};

const dataStore:any = [];

async function saveData(key:any, value:any, expiration:any) {
	dataStore.push({ key: value, EX: expiration });
}

async function getData(key:any) {
	return new Promise((resolve, reject) => {
		const result = dataStore[key];
		if (result) {
			resolve(result);
		} else {
			reject('could not find data');
		}
	});
}
