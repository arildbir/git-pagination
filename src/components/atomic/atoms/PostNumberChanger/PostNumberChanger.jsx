import React from "react";
import cn from "classnames";
import "./styles.scss";

const buttons = [{ number: 20 }, { number: 30 }, { number: 40 }, { number: 50 }];

const PostNumberChanger = ({ postsPerPage, changePostsPerPage }) => {
  return (
    <div className='postNumberChanger'>
      <p className='postNumberChangerHeader'>Posts per page</p>
      <div className='buttonWrapper'>
        {buttons.map(({ number }) => (
          <button
            key={number}
            className={cn("postNumberChangerButton", {
              isSelected: number === postsPerPage
            })}
            onClick={() => {
              changePostsPerPage(number);
            }}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PostNumberChanger;
