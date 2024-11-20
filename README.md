## Target this week: Getting different questions each time for same user 

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/atharva00-7/mock-interview.git

2. **Install the dependencies:**
   ```bash
   npm install

3. **Create .env file in root folder(All keys have been shared to all the group members):**

4. **Start the development server:**
   ```bash
   npm run dev

## Folder Structure
  - src/
    - assets/ -> Contains images
    - components/ -> ShadCN components
        - ui/
    - constants/ -> Folder containing files to reomve all the hardcoded texts in the application
        - texts.json
    - context/ -> Backend services are written in this folder
        - Firebase.jsx
    - lib/  -> ShadCN's dependencies
        - utils.js
    - pages/ -> All pages and components are written in this file
        - components/ -> This file consists of all the components 
           - HorizontalCards.jsx
           - InterviewDesciption.jsx
           - ManualForm.jsx
           - Navbar.jsx
           - ResumeUpload.jsx
        - HomePage.jsx
        - InterviewDetails.jsx
        - InterviewPage.jsx
        - Login.jsx
        - Signup.jsx
        - Wildcard.jsx
    - App.jsx
    - index.css
    - main.jsx
- Utils/
    - GeminiAI.js
    

