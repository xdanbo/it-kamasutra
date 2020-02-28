const SEND_MESSAGE = "SEND_MESSAGE";

type DialogType = {
  id: number;
  name: string;
};

type MessageType = {
  id: number;
  message: string;
};

const initialState = {
  dialogs: [
    { id: 1, name: "Artem" },
    { id: 2, name: "Harry" },
    { id: 3, name: "Roman" },
    { id: 4, name: "Jill" },
    { id: 5, name: "Donkey" }
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: "What's up, dude?" },
    { id: 2, message: "Hey, have you checked out my story?" },
    { id: 3, message: "Nevermind.." }
  ] as Array<MessageType>
};

export type InitialStateType = typeof initialState;

const dialogsReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage = {
        id: 4,
        message: action.newMessageBody
      };
      return {
        ...state,
        messages: [...state.messages, newMessage]
      };

    default:
      return state;
  }
};

type SendMessageCreatorActionType = {
  type: typeof SEND_MESSAGE;
  newMessageBody: string;
};

export const sendMessageCreator = (
  newMessageBody: string
): SendMessageCreatorActionType => ({
  type: SEND_MESSAGE,
  newMessageBody
});

export default dialogsReducer;
