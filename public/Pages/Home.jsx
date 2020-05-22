import React from "react";
import PostHome from "../Components/PostHome";
import ModalPost from "../Components/ModalPost";
import ListPost from "../Components/ListPost";
import NewPost from "../Components/NewPost";

function Home() {
  return (
    <div className="page-home">
      <div className="container-post">
        <NewPost />
        <ListPost>
          <PostHome />
          <PostHome />
          <PostHome />
          <PostHome />
        </ListPost>
      </div>
      
      <div className="container-friends">
        
      </div>
    </div>
  );
}

export default Home;
