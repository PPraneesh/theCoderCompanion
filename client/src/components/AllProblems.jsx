import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { urlContext } from '../urlContext';
import { TypeAnimation } from 'react-type-animation';

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
        <div className="homepage">
            <div className="landing">
                <div className="landing-text">
                    <div className="landing-text-1">

                        <TypeAnimation
                            sequence={[
                                'THE CODER COMPANION ',
                                1000
                            ]}
                            wrapper="h1"
                            speed={50}
                            style={{ fontSize: '3rem', display: 'inline-block', padding: "4rem 5rem" }}
                            repeat={Infinity}
                        />
                    </div>
                    <h2>YOUR NEXT GENERATION CODING COMPANION EQUIPED WITH MOST ADVANCED AI DESIGNED FOR YOU NEEDS </h2>
                </div>
                <a href="#allproblems">
                    <button className='allproblems-button'>Solve</button>
                </a>
            </div>

            <div className="assproblems" id='allproblems'>
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
        </div>
    );
}