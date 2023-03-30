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

/**
 *  Implement a method:
 * Given a product offer name (e.g) 'HEAT PUMP SYSTEM'
 * Then it finds the product category (e.g HEAT)
 * Then it returns the product line list (e.g ) ['HB', 'HI']
 */
