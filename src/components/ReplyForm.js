import React, { useState } from 'react';

const ReplyForm = ({ onReply }) => {
  const [replyText, setReplyText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (replyText.trim() !== '') {
      onReply({ id: Date.now(), text: replyText });
      setReplyText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={replyText}
        onChange={(e) => setReplyText(e.target.value)}
        placeholder="Write a reply..."
      />
      <button type="submit">Submit Reply</button>
    </form>
  );
};

export default ReplyForm;
