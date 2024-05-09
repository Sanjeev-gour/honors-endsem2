import Post from "./../models/post";
import User from "./../models/user";
import Comment from "./../models/comment";

export const addComment = async (comment) => {
 
  const foundPost = await Post.findById(comment.postId);
 
  const createdComment = await Comment.create(comment);
  
  await foundPost.comments.push(createdComment);
  const updatedPost = await foundPost.save();
  return updatedPost;
};

export const updateComment = async (comment) => {
  const updatedComment = await Comment.findByIdAndUpdate(comment._id, comment);
  return updatedComment;
};

export const deleteComment = async (id) => {
  const deletedComment = await Comment.findByIdAndRemove({ _id: id });
  return deletedComment;
};
