import React from 'react'
import Home from './Home/Home';
import Layout from './Layout/Layout';
import Products from './pages/Products/Products';
import { BrowserRouter as Router, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "react-query";
import ShowPage from './pages/ShowPage/ShowPage';

export const queryClient = new QueryClient();


const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children: [
      {
        index:true,
        element:<Home/>
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "show/:id",
        element: <ShowPage />,
      },


    ]
  },
  {
    path:"*",
    // element:<Nothing/>
  },
])

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
      </QueryClientProvider>
    </div>
  )
}

export default App