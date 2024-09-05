import openai
from flask import Flask, request, jsonify
import os

# Set up OpenAI API key from environment variable
openai.api_key = os.getenv('OPENAI_API_KEY')

# Initialize Flask app
app = Flask(__name__)

# Function to predict interaction severity using OpenAI
def predict_severity(drug_1, drug_2):
    prompt = f"Two drugs, {drug_1} and {drug_2}, have been identified in an interaction. What is the severity of the drug interaction? Please respond with one of the following: 'Mild', 'Moderate', or 'Severe'."
    
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=50,
        temperature=0.5
    )
    
    severity = response.choices[0].text.strip()
    return severity

# API route to predict severity
@app.route('/predict_severity', methods=['POST'])
def predict():
    data = request.json
    drug_1 = data.get('drug_1')
    drug_2 = data.get('drug_2')

    if not drug_1 or not drug_2:
        return jsonify({'error': 'Both drug_1 and drug_2 are required'}), 400

    # Call the prediction function
    severity = predict_severity(drug_1, drug_2)
    
    # Return the result as JSON
    return jsonify({'drug_1': drug_1, 'drug_2': drug_2, 'predicted_severity': severity})

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)    set OPENAI_API_KEY=your-openai-api-key