import mongoose from "mongoose";
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

export const updatePost = async (req, res) => {
	try {
		const { id: _id } = req.params;
		const post = req.body;

		if (!mongoose.Types.ObjectId.isValid(_id))
			return res.status(404).send("No post with that id");

		const updatedPost = await PostMessage.findByIdAndUpdate(
			_id,
			{ ...post, _id },
			{
				new: true,
			}
		);

		res.json(updatedPost);
	} catch (error) {
		console.log(error);
		res.status(409).json(error.message);
	}
};

export const deletePost = async (req, res) => {
	try {
		const { id } = req.params;
		if (!mongoose.Types.ObjectId.isValid(id))
			return res.status(404).send("No post with that id");
		await PostMessage.findByIdAndRemove(id);
		res.json({ message: "Post deleted successfully" });
	} catch (error) {
		console.log(error);
		res.status(409).json(error.message);
	}
};

export const likePost = async (req, res) => {
	try {
		const { id } = req.params;
		if (!mongoose.Types.ObjectId.isValid(id))
			return res.status(404).send("No post with that id");
		const post = await PostMessage.findById(id);
		const updatedPost = await PostMessage.findByIdAndUpdate(
			id,
			{ likeCount: post.likeCount + 1 },
			{ new: true }
		);
		res.json(updatedPost);
	} catch (error) {
		console.log(error);
		res.status(409).json(error.message);
	}
};
