import { useState, useEffect } from 'react';
import axios from 'axios';
// import Link from 'react-router-dom';
/// where are u?

export default function AllProblems() {
    const [problems, setProblems] = useState([]);

    useEffect(() => {
        axios.get('https://animated-space-waddle-w6pjj6g7j7w2v994-3000.app.github.dev/problems')
            .then((response) => {
                setProblems(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, [])

    return (
        <div className="problems">
            <h1>All Problems</h1>
            {problems && problems.map((problem, index) => (
                <Link to={`/problems/${problem.problemId}`}>
                    <div key={index}>
                        <p>{key + 1}</p>
                        <h2>{problem.name}</h2>
                    </div>
                </Link>
            ))}
        </div>
    );
}