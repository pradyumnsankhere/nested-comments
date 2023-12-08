// src/components/CommentForm.js

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment, addReply } from "../redux/commentsSlice";
import {
  Box,
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";

const CommentForm = ({ parentId }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;

    const newComment = {
      id: Date.now(),
      text,
      replies: [], // Initialize replies array
    };

    if (parentId) {
      // If parentId is provided, it's a reply
      dispatch(addReply({ commentId: parentId, reply: newComment }));
    } else {
      // If no parentId, it's a top-level comment
      dispatch(addComment(newComment));
    }

    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <Input
          placeholder="Comments"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </FormControl> */}
      {/* <textarea value={text} onChange={(e) => setText(e.target.value)} /> */}

      <Box sx={{ p:3,width:600}}>
        <TextField
        style={{width:"100%"}}
          id="outlined-multiline-static"
          label="Comment"
          multiline
          maxRows={10}
          color="primary"
          minRows={2}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div style={{paddingTop:"5px"}}>
          <Button type="submit" variant="outlined" color="primary">
            + Add Comment
          </Button>
        </div>
      </Box>
    </form>
  );
};

export default CommentForm;
