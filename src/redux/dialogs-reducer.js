const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

const initialState = {
  dialogs: [
    { id: 1, name: "Artem" },
    { id: 2, name: "Harry" },
    { id: 3, name: "Roman" },
    { id: 4, name: "Jill" },
    { id: 5, name: "Donkey" }
  ],
  messages: [
    { id: 1, message: "What's up, dude?" },
    { id: 2, message: "Hey, have you checked out my story?" },
    { id: 3, message: "Nevermind.." }
  ],
  newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessageBody: action.body };

    case SEND_MESSAGE:
      const newMessage = {
        id: 4,
        message: state.newMessageBody
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageBody: ""
      };

    default:
      return state;
  }
};

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE
});
export const updateNewMessageBodyCreator = body => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body
});

export default dialogsReducer;
