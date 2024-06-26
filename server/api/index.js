const express = require('express')
const app = express()
const problems = require('./problems')
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');
const btoa = require('btoa');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.use(cors({ origin: true }));
app.use(express.json());

const checkStatus = async (token) => {
    const options = {
        method: "GET",
        url: "https://judge0-ce.p.rapidapi.com/submissions" + "/" + token,
        params: { base64_encoded: "true", fields: "*" },
        headers: {
            "X-RapidAPI-Host": process.env.JUDGE0_RAPID_API_HOST,
            "X-RapidAPI-Key": process.env.JUDGE0_RAPID_API_KEY,
        },
    };
    try {
        let response = await axios.request(options);
        let statusId = response.data.status?.id;
        if (statusId === 1 || statusId === 2) {
            setTimeout(() => {
                checkStatus(token)
            }, 2000)
            return 
        } else {
            console.log('response.data ', response.data)
            return response.data;
        }
    } catch (err) {
        console.log("err ", err);
        return { message: "Internal Server Error" };
    }
};


app.get('/problems', async (req, res, next) => {
    res.send(problems)
})

app.get('/problems/:problemId', async (req, res, next) => {
    const problemId = req.params.problemId;

    let problem = problems.find(p => p.problemId === problemId);
    if (!problem) {
        const err = new Error('Problem not found');
        err.status = 404;
        return next(err);
    }
    res.send(problem);
});
app.post("/genai", async (req, res) => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const code = req.body.code;
    const problemId = req.body.problemId;
    const typeOfHelp = req.body.typeOfHelp;
    const problem = problems.find(p => p.problemId === problemId);
    prompt = "Need help with the following problem:\n" + problem.statement + "\n" +"Need the following help (Only do the help which is asked!!): "+ typeOfHelp + "\n" + "The program which I wrote is :\n"+ code + "\n The Correct and best way to solve this problem is :\n"+ problem.bestCode + "\n "+"Now, just help me build the intuition to solve this problem. Don't give me complete code you might give a small snippet to help in the case of help with code and efficiency\n, give answer in few points, give the guidance based on the code I wrote to help me turn it into best and correct way (which is provided to you above) and start a point only with '>' , dont give ' ** ' or '*' in answer.";
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    res.send(text)
});
app.post("/submit", async (req, res) => {
    const { lang, code, problemId } = req.body;
    const problem = problems.find(p => p.problemId === problemId);
    const options = {
        method: 'POST',
        url: 'https://judge0-ce.p.rapidapi.com/submissions',
        params: {
            base64_encoded: 'true',
            fields: '*'
        },
        headers: {
            'content-type': 'application/json',
            'Content-Type': 'application/json',
            "X-RapidAPI-Host": process.env.JUDGE0_RAPID_API_HOST,
            "X-RapidAPI-Key": process.env.JUDGE0_RAPID_API_KEY,
        },
        data: {
            language_id: lang,
            source_code: btoa(code),
            stdin: btoa(problem.testInput),
            expected_output: btoa(problem.testOutput),
        }
    };
    try {
        const response = await axios.request(options);
        console.log("token", response.data);
        const token = response.data.token;
        

        setTimeout(async() => {
            const result =  await checkStatus(token)
            console.log(result)
            res.send(result)
        }, 4000)
        

    } catch (error) {
        console.error(error);
        return res.send({ message: "Internal Server Error" });
    }
});
app.post("/run", async (req, res) => {
    const { lang, code, customInput } = req.body;
    const options = {
        method: 'POST',
        url: 'https://judge0-ce.p.rapidapi.com/submissions',
        params: {
            base64_encoded: 'true',
            fields: '*'
        },
        headers: {
            'content-type': 'application/json',
            'Content-Type': 'application/json',
            "X-RapidAPI-Host": process.env.JUDGE0_RAPID_API_HOST,
            "X-RapidAPI-Key": process.env.JUDGE0_RAPID_API_KEY,
        },
        data: {
            language_id: lang,
            source_code: btoa(code),
            stdin: btoa(customInput)
        }
    };
    try {
        const response = await axios.request(options);
        console.log("token", response.data);
        const token = response.data.token;
        

        setTimeout(async() => {
            const result =  await checkStatus(token)
            console.log(result)
            res.send(result)
        }, 4000)
        

    } catch (error) {
        console.error(error);
        return res.send({ message: "Internal Server Error" });
    }
});


app.use((err, req, res, next) => {
    res.send({ message: err.message });
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})