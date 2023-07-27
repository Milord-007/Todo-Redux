// import { createAsyncThunk } from "@reduxjs/toolkit";









export const productsApi = {
    getProducts: async ()=> await fetch("https://dummyjson.com/products").json()
}




// export const getProducts = createAsyncThunk("products/getProducts", async () => {
  
//   try {
//     const response = await fetch('https://dummyjson.com/products');
//     const data = await response.json();
//     console.log(data);
    
//     return data;

//   } catch (error) {
//     console.log(error);
//   }
// });

// export const postTodo = createAsyncThunk(
//   "users/postTodo",
//   async (_, { getState, dispatch }) => {
//     const name = getState().users.name;
//     const phone = getState().users.phone;
//     const job = getState().users.job;
//     const adress = getState().users.adress;
//     const img = getState().users.img;
//     try {
//       const response = await fetch("http://localhost:3000/students", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: name,
//           adress: adress,
//           adress: adress,
//           job: job,
//           phone: phone,
//           img: img
//         }),
//       });
//       const data = await response.json();
//       dispatch(getUsers());
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );
// export const editTodo = createAsyncThunk(
//   "users/editTodo",
//   async (id, { getState, dispatch }) => {
//     const user = {...getState().users.list.find((user)=>user.id===id)}
//     user.name = getState().users.name;
//     user.phone = getState().users.phone;
//     user.job = getState().users.job;
//     user.adress = getState().users.adress; 
//     try {
//       const response = await fetch("http://localhost:3000/students/"+id, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(user),
//       });
//       const data = await response.json();
//       dispatch(getUsers());
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

// export const deleteTodo = createAsyncThunk(
//   "users/deleteTodo",
//   async (id, { dispatch }) => {
//     try {
//       const response = await fetch("http://localhost:3000/students/" + id, {
//         method: "DELETE",
//       });
//       const data = await response.json();
//       dispatch(getUsers());
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );
