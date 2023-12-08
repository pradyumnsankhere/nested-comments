import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "./redux/commentsSlice";
import Comment from "./components/Comment";
import CommentForm from "./components/CommentForm";
import { Header } from "./common/Header";
import { PostContent } from "./common/PostContent";
import LoginSignupForm from "./components/Signup";

const App = () => {
  const [user, setUser] = useState({}); // Store user info in state
  const [authenticated, setAuthenticated] = useState(false);

  const comments = useSelector((state) => state.comments.comments);
  const dispatch = useDispatch();

  const handleComment = (comment) => {
    dispatch(addComment(comment));
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setAuthenticated(true)
    }
  }, []);
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
          {[...comments].reverse()?.map((comment) => (
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
          <LoginSignupForm setUser={setUser} setAuthenticated={setAuthenticated}/>
        </div>
      )}
    </div>
  );
};

export default App;
