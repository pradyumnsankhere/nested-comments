import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addReply } from "../redux/commentsSlice";
import ReplyForm from "./ReplyForm";
import Paper from "@mui/material/Paper";
import { Avatar, Box, Grid, Typography, styled } from "@mui/material";

const Comment = ({ comment, user, bg, showReplySection }) => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "left",
    backgroundColor: bg,
    color: "#000000",
    padding: "10px",
    minHeight: "57px",
    lineHeight: "1px",
    borderRadius: "0px 16px 16px 16px",
    width: "295px",
    fontSize: "14px",
  }));

  const [showReplyForm, setShowReplyForm] = useState(false);
  const dispatch = useDispatch();

  const [showReplies, setShowReplies] = useState(false);

  const handleReply = (reply) => {
    setShowReplies(true);
    console.log(reply, "reep");

    dispatch(addReply({ commentId: comment.id, reply }));
    setShowReplyForm(false);
  };
  console.log(comment.replies, "comment.replies");
  return (
    <div>
      <div>
        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            bgcolor: "background.default",
            fontSize: "14px",
          }}
        >
          <Grid container spacing={1}>
            <Grid item>
              <Avatar
                sx={{ width: 29, height: 29 }}
                alt={user?.username}
                src="images/Ellipse 6.png"
              />
            </Grid>

            <Grid item xs={10}>
              <Item>
                <div>
                  <Typography style={{ fontWeight: 600 }}>
                    {user?.username}
                  </Typography>
                  <p>{comment?.text}</p>
                </div>
              </Item>
              <p
                style={{
                  color: "#3676D6",
                  marginTop: "10px",
                  cursor: "pointer",
                }}
                onClick={() => setShowReplyForm(!showReplyForm)}
              >
                {showReplyForm ? "Cancel Reply" : "Reply"}
              </p>

              {comment?.replies?.length > 0 && showReplySection && (
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowReplies(!showReplies)}
                >
                  <img src="images/reply.png" alt="" />

                  {`${comment?.replies?.length ?? ""} Replies`}
                </div>
              )}
            </Grid>
          </Grid>
        </Box>
      </div>
      {showReplyForm && (
        <div style={{ marginLeft: "50px" }}>
          <ReplyForm onReply={handleReply} />
        </div>
      )}
      {showReplies && comment?.replies && comment?.replies?.length > 0 && (
        <div style={{ marginLeft: "50px" }}>
          {comment?.replies?.map((reply) => (
            <Comment
              user={user}
              from
              key={reply?.id}
              comment={reply}
              bg="#E9FAFF"
              showReplySection={false}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
