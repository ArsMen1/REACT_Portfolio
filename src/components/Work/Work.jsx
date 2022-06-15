import React from "react";
import { Link } from "react-router-dom";

function Work() {
  return (
    <div className="Work">
      <div className="work__examples">
        <span>React Redux:</span>
        <Link href="#" target="_blank" rel="noopener noreferrer">
          <div className="example pizza"></div>
        </Link>
        <Link href="#" target="_blank" rel="noopener noreferrer">
          <div className="example socWeb"></div>
        </Link>
      </div>
      <div className="work__examples">
        <span>React Mobx:</span>
        <Link
          href="https://test.find-friend.site/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="example findFriend"></div>
        </Link>
      </div>
      <div className="work__examples">
        <span>Vanilla JS:</span>
        <Link
          href="http://creatorofgeometry.ru/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="example creatorofgeometry"></div>
        </Link>
      </div>
    </div>
  );
}

export default Work;
