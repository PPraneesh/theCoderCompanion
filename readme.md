# [THE CODER COMPANION](https://the-coder-companion.vercel.app)

The Coder Companion is a coding platform with an AI assistant, Gemini. Students can attempt questions in multiple programming languages. They can access Gemini for help understanding logic, identifying code errors, and developing efficient solutions. Students can submit codes, which are evaluated against numerous test cases to verify correctness. Gemini guides them through problem-solving, fostering skills for competitive programming success.

## TECH STACK
- **Frontend :**
  - React.js was used as the main frontend library
  -  Monaco module for providing a code editor
  - react-resizable-panels for creating dynamic panes
  -  CSS for styling and beautifying the UI
- **Backend:**
   - Node.js and Express.js for the backend server
   - Judge0 for compiling and running submitted codes
- **Deployment:**
  - Both the frontend and backend were deployed using Vercel
## Local setup instructions:
1. Clone the repo to your device.
2. You will need two terminals, one for running server and other for running client.
3. You will need to create a file with name **.env** in **server directory**
4. Paste the following 
  - JUDGE0_RAPID_API_HOST = "judge0-ce.p.rapidapi.com"
  - JUDGE0_RAPID_API_KEY = "YOUR_API_KEY"
  - GEMINI_API_KEY = "YOUR_API_KEY"
5. In first terminal, run the following commands
  -  ```cd client```
  -  ```npm i```
  -  ```npm run dev```
6. In second terminal, run the following commands
  - ```cd server```
  - ```cd api```
  - ```npm i```
  - ```node index```
7. visit the client/src/urlContext.jsx change the url to ```http://localhost:3000/``` 
8. Voila, coder companion is up and running.  
9. Visit the react url (it's on first terminal)
## contributions
- Any contributions are accepted, make sure your contribution is working well and not creating an bug..
## contributors
### [karthikeya](https://karthikeyaveruturi.vercel.app)
