import React, { useContext } from 'react'
import AllProblems from './components/AllProblems'
import ProblemPage from './components/ProblemPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { urlContext } from './urlContext';

function App() {
    const url = useContext(urlContext)

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
        <urlContext.Provider value={{url}}>
            <RouterProvider router={routes} />
        </urlContext.Provider>
    )
}
export default App
