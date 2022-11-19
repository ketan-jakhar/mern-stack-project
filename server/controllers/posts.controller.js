import { PostMessage } from "../models/index.js";

export const getPost = async (req, res) => {
	try {
		// const { id } = req.params;
		// const post = await PostMessage.findById(id);
		const post = await PostMessage.find();

		res.status(200).json(post);
	} catch (error) {
		res.status(404).json({
			status: "error",
			message: error.message,
		});
	}
};

export const createPost = async (req, res) => {
	const post = req.body;
	const newPost = new PostMessage(post);
	try {
		await newPost.save();
		res.status(201).json(newPost);
	} catch (error) {
		res.status(409).json({
			status: "error",
			message: error.message,
		});
	}
};
