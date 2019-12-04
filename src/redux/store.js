import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hey, this is my first post!", likesCount: 9 },
        { id: 2, message: "Like this post, please!", likesCount: 3 }
      ],
      newPostText: ""
    },
    messagesPage: {
      dialogs: [
        { id: 1, name: "Artem" },
        { id: 2, name: "Sveta" },
        { id: 3, name: "Roman" },
        { id: 4, name: "Yaroslava" },
        { id: 5, name: "Danya" }
      ],
      messages: [
        { id: 1, message: "What's up, dude?" },
        { id: 2, message: "Hey, have you checked out my story?" },
        { id: 3, message: "Nevermind.." }
      ],
      newMessageBody: ""
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log("state was changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; // the observer pattern
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.messagesPage, action);

    this._callSubscriber(this._state);
  }
};

export default store;
window.store = store;
