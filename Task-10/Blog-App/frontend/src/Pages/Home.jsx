import React, { useEffect, useState } from "react";
import "./Home.css";
import { calculateTimeAgo, GetPerticularUser } from "../functions";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [openCommentId, setOpenCommentId] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [token, setToken] = useState("");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const getBlogs = async (token) => {
    try {
      await fetch(`http://localhost:8080/blogs`, {
        headers: {
          "Content-type": "application/json",
          Authorization: token,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setBlogs(res);
          console.log(res);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const PostData = async () => {
    const obj = {
      title,
      content,
      image,
    };

    try {
      await fetch(`http://localhost:8080/blogs`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-type": "application/json",
          Authorization: token,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.status == true) {
            alert(res.message);
          }
        })
        .catch((e) => console.log(e));
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  useEffect(() => {
    const userJSON = localStorage.getItem("UserData");

    if (userJSON) {
      const user = JSON.parse(userJSON);
      setToken(user.loginToken);
      getBlogs(user.loginToken);
    } else {
      console.log("UserData not found in localStorage.");
    }
  }, []);

  const toggleCommentSection = (blogId) => {
    setOpenCommentId((prevId) => (prevId === blogId ? null : blogId));
  };

  const submitComment = async (blogId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/comments/add/${blogId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({
            comment: commentText,
            user: "currentUserId",
          }),
        }
      );

      if (response.ok) {
        setCommentText("");

        setBlogs((prevBlogs) =>
          prevBlogs.map((blog) =>
            blog._id === blogId
              ? {
                  ...blog,
                  comments: [
                    ...blog.comments,
                    {
                      comment: commentText,
                      commentDate: new Date().toISOString(),
                      user: "currentUserId",
                    },
                  ],
                }
              : blog
          )
        );
      } else {
        console.error("Failed to post comment");
      }
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  const deleteBlog = async (blogId) => {
    try {
      const response = await fetch(`http://localhost:8080/blogs/${blogId}`, {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      });

      if (response.ok) {
        setBlogs((prevBlogs) =>
          prevBlogs.filter((blog) => blog._id !== blogId)
        );
      } else {
        console.error("Failed to delete blog");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const editBlog = async (blogId) => {};

  return (
    <div>
      <div className="Blog_container">
        <div>
          <div className="post_conatiner">
            <input
              type="text"
              placeholder="Image Url"
              onChange={(e) => setImage(e.target.value)}
            />
            <input
              type="text"
              placeholder="Title..."
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Content...."
              onChange={(e) => setContent(e.target.value)}
            />
            <button onClick={PostData}>Post</button>
          </div>
        </div>
        <div>
          {blogs.map((ele) => (
            <div className="Blog_card" key={ele._id}>
              <img src={ele.image} alt="" />
              <h3>{ele.title}</h3>
              <p>{ele.content}</p>
              <div className="button-container">
                <button
                  className="toggle-comment-button"
                  onClick={() => toggleCommentSection(ele._id)}
                >
                  {openCommentId === ele._id
                    ? "Close Comments"
                    : "Open Comments"}
                </button>
                <button
                  className="delete-button"
                  onClick={() => deleteBlog(ele._id)}
                >
                  Delete
                </button>
                <button
                  className="edit-button"
                  onClick={() => editBlog(ele._id)}
                >
                  Edit
                </button>
              </div>
              {openCommentId === ele._id && (
                <div className="CommentSection">
                  {ele.comments.map((com) => (
                    <div key={com._id} className="comment_card">
                      <p>{com.comment}</p>
                      <p>{calculateTimeAgo(com.commentDate)}</p>
                    </div>
                  ))}
                  <div className="Submit_comment_div">
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                    />
                    <button
                      className="submit-comment-button"
                      onClick={() => submitComment(ele._id)}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
