export const decodeHTML = (html: any) => {
	var txt = document.createElement('textarea');
	txt.innerHTML = html;
	return txt.value;
};