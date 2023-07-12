import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import todo, { addTodo, deleteUser, editUser, handleCom, setEdit, setIdx, setTitle } from "./reducers/todo";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const App = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  const todo = useSelector(({ todos }) => todos.todo);
  const text = useSelector(({ todos }) => todos.text);
  const editText = useSelector(({ todos }) => todos.editText);
  let idx = useSelector(({ todos }) => todos.idx);
  const [newText,setNewText] = useState("")
  console.log(idx);
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const addFunction = (event) => {
    event.preventDefault();
    dispatch(addTodo(text));
    dispatch(setTitle(""));
  };
const EditUser = (event) =>{
    event.preventDefault()
    dispatch(editUser(editText))
    handleClose()
}
  return (
    <div>
 {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <form action="" onSubmit={EditUser}>
          <input type="text" className="border" value={editText}  onChange ={(e) => dispatch(setEdit(e.target.value))} />
        </form>
        </Box>
      </Modal>

        <p className="text-center text-[40px]">TODO with Redux</p>
         <div className="w-[70%] mx-auto  h-[70vh] bg-[grey]  mt-[10vh] overflow-y-scroll rounded-xl pt-2">
      <form action="" onSubmit={addFunction} className="flex justify-evenly">
        <input
          placeholder="Add new task"
          type="text"
          className="border-2 w-[90%] rounded-lg p-3"
          value={text}
          onChange={(e) => {
            dispatch(setTitle(e.target.value));
          }}
        />
        <button className="bg-[#4a4aad] rounded-lg text-[white] p-2 w-[80px]">Add</button>
      </form>
      {todo.map((el) => {
          return (
              <div key={el.id}>
            <div className="flex gap-4 justify-between p-2">
              {" "}
           {
               el.complete ?    <h1 className="bg-[red]  text-white rounded-md text-[18px] p-[10px] w-full mt-2">{el.title}</h1> :   <h1 className="bg-[white] rounded-md text-[18px] p-[10px] w-full mt-2 ">{el.title}</h1>
            }
            <div className="mt-2 flex gap-x-2">
              <button
                className="bg-[red] text-white p-[2px_5px] rounded-[3px] "
                onClick={() => dispatch(deleteUser(el.id))}
                >
                delete
              </button>
              <button
                className="bg-[yellow] p-[2px_8px] text-white rounded-[3px]"
                onClick={() => {
                    // setModal(true);
                    handleOpen()
                    dispatch(setEdit(el.title));
                  dispatch(setIdx(el.id))
                }}
                >
                Edit
              </button>
              <button className="bg-[#24f724] text-white rounded-md p-2" onClick={() => dispatch(handleCom(el.id))}>Complete</button>

            </div>
            </div>
          </div>
        );
    })}
      {/* {modal && (
          <form action="" onSubmit={EditUser}>
          <input type="text" className="border" value={editText}  onChange ={(e) => dispatch(setEdit(e.target.value))} />
        </form>
      )} */}
      </div>
    </div>
  );
};

export default App;
