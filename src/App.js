import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from './redux/commentsSlice';
import Comment from './components/Comment';
import CommentForm from './components/CommentForm';

const App = () => {
  const [user, setUser] = useState(null); // Store user info in state
  const comments = useSelector((state) => state.comments.comments);
  const dispatch = useDispatch();

console.log(comments,"comments")

  // Check for user authentication on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (username) => {
    const newUser = { id: Date.now(), username };
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const handleComment = (comment) => {
    dispatch(addComment(comment));
  };
  console.log(comments,"comments")


  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please login to comment</p>
          <button onClick={() => handleLogin(prompt('Enter your username:'))}>
            Login
          </button>
        </div>
      )}
      <CommentForm onComment={handleComment} />
      {comments?.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default App;
