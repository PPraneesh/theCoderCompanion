import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate()
    const handleproblemnavigate = (id) => {
        navigate(`/problems/${id}`)
    }


    return (
        <div className="assproblems">
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
                            <tr key={index} onClick={() => handleproblemnavigate(problem.problemId)} >
                                <td>{index + 1}</td>
                                <td>{problem.name}</td>
                                <td className={problem.difficulty}>{problem.difficulty}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}