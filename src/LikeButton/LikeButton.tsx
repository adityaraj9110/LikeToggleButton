import { useState } from 'react';

export const LikeButton = () => {
  const [liked, setLiked] = useState(0);

  const handleClick = () => {
    setLiked((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <div
      style={{
        background: liked ? 'red' : '#0000001a',
        height: '52px',
        width: '52px',
        borderRadius: '50%',
        cursor: 'pointer',
      }}
      onClick={handleClick}
    />
  );
};
