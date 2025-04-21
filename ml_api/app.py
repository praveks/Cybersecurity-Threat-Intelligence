from flask import Flask, request, jsonify
import re

app = Flask(__name__)

def is_malicious(input_str):
    input_str = input_str.lower().strip()
    malicious_keywords = [
        'malware', 'phishing', 'attack', 'bad', 'evil', 'phishy',
        'ransomware', 'exploit', 'trojan', 'keylogger', 'botnet','high'
    ]

    if any(keyword in input_str for keyword in malicious_keywords):
        print("Matched a malicious keyword!")
        return "malicious"

    if '@' in input_str:
        print("Suspicious '@' in URL")
        return "malicious"

    if input_str.count('-') > 3 or input_str.count('.') > 5:
        print("Too many dashes or dots in domain")
        return "malicious"


    if re.match(r'^[a-fA-F0-9]{32}$', input_str) or re.match(r'^[a-fA-F0-9]{64}$', input_str):
        print("Looks like a file hash — flagging")
        return "malicious"

    ip_pattern = r'^(\d{1,3}\.){3}\d{1,3}$'
    if re.match(ip_pattern, input_str):
        parts = list(map(int, input_str.split('.')))
        if parts[0] == 192 or parts[0] == 10:
            return "safe"

    return "safe"



@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    input_data = data.get('input')
    if not input_data:
        return jsonify({'error': 'Input missing'}), 400
    result = is_malicious(input_data)
    return jsonify({'prediction': result})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
