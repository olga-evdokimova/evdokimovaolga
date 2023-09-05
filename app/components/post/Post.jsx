import React from "react";
import "./Post.scss";

const Post = () => {
  return (
    <div className="post">
      <span className="post__data">10 февраля 2023</span>
      <h4 className="post__title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </h4>
      <div className="post__image">
        <img src="https://i.ibb.co/CBdLzQF/Instagram-post-6.jpg" alt="" />
      </div>

      <a href="#" className="post__link">
        Читать пост
        <svg
          width="17"
          height="14"
          viewBox="0 0 17 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.1931 6.21541H0.953125V7.73541H15.1931L10.7131 13.0954L11.9131 13.8154L16.5531 8.29541C17.1931 7.57541 17.1931 6.37541 16.5531 5.65541L12.0731 0.29541L10.8731 1.01541L15.1931 6.21541Z"
            fill="#222222"
          />
        </svg>
      </a>
    </div>
  );
};
export default Post;
