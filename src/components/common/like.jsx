import React from "react";
// npm install --save-dev @iconify/react @iconify/icons-fa
import { Icon } from "@iconify/react";
import heartO from "@iconify/icons-fa/heart-o";
import heartIcon from "@iconify/icons-fa/heart";

const Like = ({ liked, onLike, id }) => {
  let likeIcon = heartO;
  if (liked === true) likeIcon = heartIcon;

  return (
    <div>
      <Icon
        style={{ cursor: "pointer" }}
        onClick={() => onLike(id)}
        icon={likeIcon}
      />
    </div>
  );
};

export default Like;
