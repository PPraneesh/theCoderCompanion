import React from 'react'
import AllProblems from './components/AllProblems'
import ProblemPage from './components/ProblemPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
   

    let routes = createBrowserRouter([
        {
            path: '/',
            element: <AllProblems />,
        },
        {
            path: '/problems',
            element: <AllProblems />,
        },
        {
            path: '/problems/:id',
            element: <ProblemPage />,
        }
    ])

    return (
        <RouterProvider router={routes} />
    )
}
export default App

//https://animated-space-waddle-w6pjj6g7j7w2v994-5173.app.github.dev/