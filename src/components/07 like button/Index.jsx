import { useState } from "react";
import { HeartIcon, SpinnerIcon } from "./Icons";

import { StyledDiv } from "./index.styles";

function Index() {
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLike = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://www.greatfrontend.com/api/questions/like-button",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: liked ? "unlike" : "like",
          }),
        }
      );
      if (response.status >= 200 && response.status < 300) {
        setLiked(!liked);
        setError("");
      } else {
        const err = await response.json();
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <StyledDiv>
        <button
          disabled={loading}
          onClick={handleLike}
          className={`likeBtn ${liked ? "liked" : ""}`}
        >
          {loading ? <SpinnerIcon /> : <HeartIcon />} {liked ? "Liked" : "Like"}
        </button>
        {error ? <div>{error}</div> : <></>}
      </StyledDiv>
    </>
  );
}

export default Index;
