import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "./redux/commentsSlice";
import Comment from "./components/Comment";
import CommentForm from "./components/CommentForm";
import { Header } from "./common/Header";
import { PostContent } from "./common/PostContent";
import Login from "./components/Login";
import LoginSignupForm from "./components/Signup";

const App = () => {
  const [user, setUser] = useState(null); // Store user info in state
  const [authenticated, setAuthenticated] = useState(false);

  const comments = useSelector((state) => state.comments.comments);
  const dispatch = useDispatch();

  // console.log(comments, "comments");

  // Check for user authentication on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setAuthenticated(true)
    }
  }, []);

  const handleComment = (comment) => {
    dispatch(addComment(comment));
  };


  return (
    <div>
      {user&&!!authenticated ? (
        <div>
          <Header user={user} />

          <PostContent
            title={"Celebrating New Year"}
            body={
              "One more year loaded with sweet recollections and cheerful times has passed. All my friends made my year exceptionally uncommon, and I wish this continues forever. With you around, each minute is a unique event for me. I wish you to Happy new year to all of you. One more year loaded with sweet recollections and cheerful times has passed. All my friends made my year exceptionally uncommon, and I wish this continues forever."
            }
          />
          <CommentForm onComment={handleComment} />
          {comments?.map((comment) => (
            <Comment
              user={user}
              key={comment.id}
              comment={comment}
              bg="#EDF5F8"
              showReplySection={true}
            />
          ))}
        </div>
      ) : (
        <div>
          {/* <p>Please login to comment</p>
          <button onClick={() => handleLogin(prompt("Enter your username:"))}>
            Login
          </button> */}

          {/* <Login handleLogin={handleLogin} /> */}

          <LoginSignupForm setAuthenticated={setAuthenticated}/>
        </div>
      )}
    </div>
  );
};

export default App;
