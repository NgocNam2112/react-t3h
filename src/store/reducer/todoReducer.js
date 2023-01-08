const initialState = [
  {
    content: "An sang",
    isCompleted: false,
    isActive: true,
    id: "2",
  },
  {
    content: "An trua",
    isCompleted: false,
    isActive: true,
    id: "3",
  },
  {
    content: "An toi",
    isCompleted: false,
    isActive: true,
    id: "4",
  },
  {
    content: "Test todo",
    isCompleted: false,
    isActive: true,
    id: "5",
    isComplete: false,
  },
];

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_TODO":
      return [
        ...state,
        {
          id: state.length + 1,
          ...action.payload,
        },
      ];
    default:
      return state;
  }
};

export default todoReducer;
