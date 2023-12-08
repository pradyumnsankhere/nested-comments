import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const ReplyForm = ({ onReply }) => {
  const [replyText, setReplyText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (replyText.trim() !== "") {
      onReply({ id: Date.now(), text: replyText });
      setReplyText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ pl: 2, width: 300 }}>
        <TextField
          style={{ width: "100%" }}
          id="outlined-multiline-static"
          label="Comment"
          multiline
          maxRows={10}
          color="primary"
          minRows={2}
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
        />
        <div style={{ paddingTop: "5px" }}>
          <Button type="submit" variant="outlined" color="primary">
            Submit Reply
          </Button>
        </div>
      </Box>

      {/* <button type="submit">Submit Reply</button> */}
    </form>
  );
};

export default ReplyForm;
