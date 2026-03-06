# Use an official Python image as a base
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file to the container
COPY requirements.txt .

# Install the required Python packages
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application code to the container
COPY . .

# Set the environment variable for the API key (can be set during docker run)
ENV GROQ_API_KEY="your_api_key_here"

# Expose the port that the Flask app will run on
EXPOSE 5000

# Run the application
CMD ["python", "app.py"]
