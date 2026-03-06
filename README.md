# LetsTea

LetsTea is an adaptive AI-powered language learning system that provides personalized lesson planning, proficiency assessments, and engaging teaching experiences. The platform tailors its approach to users' conversation styles, interests, and domain-specific needs.

## Features

- **Conversational Profiling**: Understands user preferences and vibe.
- **Proficiency Assessment**: Scores users' English language skills.
- **Personalized Lesson Plans**: Designs customized learning roadmaps.
- **Interactive Teaching**: Engages users with meaningful content.
- **Feedback Mechanism**: Continuously improves based on user responses.

---

## Prerequisites

Before running the application, ensure the following:

1. Install Docker: [Download Docker](https://www.docker.com/get-started)
2. Set the `GROQ_API_KEY` environment variable with your API key.

---

## Quick Start with Docker

```bash
# Step 1: Clone the Repository
git clone https://github.com/your-repository/letstea.git
cd letstea

# Step 2: Set the Environment Variable
# On Linux/MacOS:
export GROQ_API_KEY=your_api_key_here

# On Windows (Command Prompt):
set GROQ_API_KEY=your_api_key_here

# On Windows (PowerShell):
$env:GROQ_API_KEY="your_api_key_here"

# Step 3: Build the Docker Image
docker build -t letstea .

# Step 4: Run the Application
docker run -e GROQ_API_KEY=$GROQ_API_KEY -p 5000:5000 letstea
```
Note: Replace your_api_key_here with your actual API key.
## Access the Application
Once the container is running, access the application at http://localhost:5000.
