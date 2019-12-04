const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

const initialState = {
  posts: [
    { id: 1, message: "Hey, this is my first post!", likesCount: 9 },
    { id: 2, message: "Like this post, please!", likesCount: 3 }
  ],
  newPostText: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };
      return { ...state, posts: [...state.posts, newPost], newPostText: "" };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.text };
    }
    default:
      return state;
  }
};

export const addPostCreator = () => ({
  type: ADD_POST
});

export const updateNewPostTextCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  text
});

export default profileReducer;
