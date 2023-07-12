import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: [
      {
        id: 1,
        title: "Ardasher",
        complete: false,
      },
    ],
    text: "",
    editText: "",
    idx: null,
  },
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload);
      state.todo.push({
        id: new Date().getTime(),
        title: action.payload,
        complete: false,
      });
    },
    deleteUser: (state, action) => {
      console.log(action.payload);
      state.todo = state.todo.filter((el) => el.id != action.payload);
    },
    editUser: (state, action) => {
      state.todo = state.todo.map((el) => {
        if (el.id == state.idx) {
          el.title = action.payload;
        }
        return el;
      });
    },
    setEdit: (state, action) => {
      // console.log(action.payload)
      state.editText = action.payload;
    },
    setTitle: (state, action) => {
      state.text = action.payload;
    },
    setIdx: (state, action) => {
      state.idx = action.payload;
      // console.log(state.idx)
    },
    handleCom: (state, action) => {
      state.todo = state.todo.map((el) => {
        if (el.id == action.payload) {
          el.complete = !el.complete;
        }
        return el;
      });
    },
  },
});
export const { addTodo, setTitle, deleteUser, setEdit, setIdx, editUser,handleCom } =
  todoSlice.actions;
export default todoSlice.reducer;
