const BASE_URL = 'http://localhost:5000';

export const PRODUCT_URL = BASE_URL + '/api/products';
export const CATEGORIES_URL = BASE_URL + '/api/categories';
export const PRODUCT_BY_SEARCH_URL = PRODUCT_URL + '/search/';
export const PRODUCT_BY_CATEGORY_URL = PRODUCT_URL + '/category/';
export const PRODUCT_BY_ID_URL = PRODUCT_URL + '/';
export const USER_URL = BASE_URL + '/api/users';
export const USER_REGISTERURL = USER_URL + '/register';
export const USER_LOGIN = USER_URL + '/login';
export const USER_VERIFICATE = USER_URL + '/checkCode';
export const LOG_CART = BASE_URL + '/api/cart/log';

