import {
	FETCH_ALL,
	CREATE,
	UPDATE,
	DELETE,
	LIKE,
} from "../constants/actionTypes";
import * as api from "../api";

export const getPosts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPosts();
		const action = { type: FETCH_ALL, payload: data };
		console.log("data: (getPosts -> posts.js - actions)", data);
		console.log("action: (getPosts -> posts.js - actions)", action);

		dispatch(action);
	} catch (error) {
		console.error(error);
	}
};

export const createPost = (post) => async (dispatch) => {
	try {
		const { data } = await api.createPost(post);
		const action = { type: CREATE, payload: data };
		console.log("data: (createPost -> posts.js - actions)", data);
		console.log("action: (createPost -> posts.js - actions)", action);
		dispatch(action);
	} catch (error) {
		console.error(error);
	}
};
