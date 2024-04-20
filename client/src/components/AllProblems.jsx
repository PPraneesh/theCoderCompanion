import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { urlContext } from '../urlContext';

export default function AllProblems() {
    const { url } = useContext(urlContext);
    const [problems, setProblems] = useState([]);

    useEffect(() => {
        axios.get(`${url}problems`)
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
            <div className="problems">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Difficulty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {problems && problems.map((problem, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td><Link to={`/problems/${problem.problemId}`}>{problem.name}</Link></td>
                                <td>{problem.difficulty}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}