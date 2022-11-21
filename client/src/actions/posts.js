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

export const updatePost = (id, post) => async (dispatch) => {
	try {
		const { data } = await api.updatePost(id, post);
		const action = { type: UPDATE, payload: data };
		console.log("data: (updatePost -> posts.js - actions)", data);
		console.log("action: (updatePost -> posts.js - actions)", action);
		dispatch(action);
	} catch (error) {
		console.error(error);
	}
};

export const deletePost = (id) => async (dispatch) => {
	try {
		await api.deletePost(id);
		const action = { type: DELETE, payload: id };
		console.log("id: (deletePost -> posts.js - actions)", id);
		console.log("action: (deletePost -> posts.js - actions)", action);
		dispatch(action);
	} catch (error) {
		console.error(error);
	}
};

export const likePost = (id) => async (dispatch) => {
	try {
		const { data } = await api.likePost(id);
		const action = { type: LIKE, payload: data };
		console.log("data: (likePost -> posts.js - actions)", data);
		console.log("action: (likePost -> posts.js - actions)", action);
		dispatch(action);
	} catch (error) {
		console.error(error);
	}
};
