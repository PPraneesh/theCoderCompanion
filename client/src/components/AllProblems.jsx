import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {urlContext} from '../urlContext';

export default function AllProblems() {
    const {url} = useContext(urlContext);
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
            {problems && problems.map((problem, index) => (
                <Link to={`/problems/${problem.problemId}`}>
                    <div key={index}>
                        <p>{index + 1}</p>
                        <h2>{problem.name}</h2>
                    </div>
                </Link>
            ))}
        </div>
    );
}