import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "./redux/commentsSlice";
import Comment from "./components/Comment";
import CommentForm from "./components/CommentForm";
import { Header } from "./common/Header";
import { PostContent } from "./common/PostContent";
import LoginSignupForm from "./components/Signup";
import { selectIsAuthenticated, selectUser, logout, setUser } from "./redux/authSlice";

const App = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);
  const comments = useSelector((state) => state.comments.comments);
  const dispatch = useDispatch();

  const handleComment = (comment) => {
    dispatch(addComment(comment));
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch(setUser(JSON.parse(storedUser)));
    }
  }, [dispatch]);
console.log(user,"user")
  return (
    <div>
      {isAuthenticated ? (
        <div>
          <Header user={user} />
          <PostContent
            title={"Celebrating New Year"}
            body={
              "One more year loaded with sweet recollections and cheerful times has passed. All my friends made my year exceptionally uncommon, and I wish this continues forever. With you around, each minute is a unique event for me. I wish you to Happy new year to all of you. One more year loaded with sweet recollections and cheerful times has passed. All my friends made my year exceptionally uncommon, and I wish this continues forever."
            }
          />
          <CommentForm onComment={handleComment} />
          {comments &&
          (Object.keys(comments).length > 0 || comments.length > 0) ? (
            [...comments]
              .reverse()
              .map((comment) => (
                <Comment
                  user={user}
                  key={comment.id}
                  comment={comment}
                  bg="#EDF5F8"
                  showReplySection={true}
                />
              ))
          ) : (
            <p>No comments available</p>
          )}
        </div>
      ) : (
        <div>
          <LoginSignupForm />
        </div>
      )}
    </div>
  );
};

export default App;
