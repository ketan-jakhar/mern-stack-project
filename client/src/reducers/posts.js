/* eslint-disable import/no-anonymous-default-export */
export default function (posts = [], action) {
	switch (action.type) {
		case "FETCH_ALL":
			return action.payload;
		case "CREATE":
			return [...posts, action.payload];
		// case "CREATE":
		// 	return action.payload;
		default:
			return posts;
	}
}
