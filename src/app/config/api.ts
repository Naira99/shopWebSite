import { environment } from 'src/environments/environment';

export const baseUrl = environment.production ? 'https://api.shoppingcart.com' : 'http://localhost:3000';
export const productsUrl = baseUrl + '/products';
export const userUrl = baseUrl + '/users';
export const accountUrl = baseUrl + '/account';
export const cartUrl = baseUrl + '/cart';
export const wishlistUrl = baseUrl + '/wishlist';
export const faqsUrl = baseUrl + '/faqs';
export const journalUrl = baseUrl + '/journal';

