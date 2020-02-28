import profileReducer, {
  addPostCreator,
  deletePostCreator
} from "./profile-reducer.js";
import React from "react";

let state = {
  posts: [
    { id: 1, message: "Hey, this is my first post!", likesCount: 9 },
    { id: 2, message: "Like this post, please!", likesCount: 3 }
  ]
};

it("length of posts should be incremented", () => {
  let action = addPostCreator("it-kama");

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(3);
});

it("length of messages must be decremented after deleting", () => {
  let action = deletePostCreator(1);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(1);
});
