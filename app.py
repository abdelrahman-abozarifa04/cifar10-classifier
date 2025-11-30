"""
Flask Web Application for CNN CIFAR-10 Image Classification
Professional GUI for image upload and prediction
"""

from flask import Flask, render_template, request, jsonify
import tensorflow as tf
import numpy as np
from PIL import Image
import io
import base64
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB max file size
app.config['UPLOAD_FOLDER'] = 'uploads'

# Create uploads folder if it doesn't exist
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

# CIFAR-10 class names
CLASS_NAMES = ['airplane', 'automobile', 'bird', 'cat', 'deer',
               'dog', 'frog', 'horse', 'ship', 'truck']

# Load the trained model
MODEL_PATH = 'cifar10_cnn_model.keras'
model = None

def load_model():
    """Load the trained CNN model"""
    global model
    try:
        if os.path.exists(MODEL_PATH):
            model = tf.keras.models.load_model(MODEL_PATH)
            print(f"✓ Model loaded successfully from {MODEL_PATH}")
        elif os.path.exists('cifar10_cnn_model.h5'):
            model = tf.keras.models.load_model('cifar10_cnn_model.h5')
            print("✓ Model loaded from h5 format")
        else:
            print("⚠ Warning: Model file not found. Please train and save the model first.")
            return False
        return True
    except Exception as e:
        print(f"✗ Error loading model: {str(e)}")
        return False

def preprocess_image(image):
    """Preprocess the uploaded image for prediction"""
    # Resize image to 32x32 (CIFAR-10 input size)
    img = image.resize((32, 32))
    
    # Convert to numpy array and normalize
    img_array = np.array(img)
    
    # Ensure RGB format (3 channels)
    if len(img_array.shape) == 2:  # Grayscale
        img_array = np.stack([img_array] * 3, axis=-1)
    elif img_array.shape[2] == 4:  # RGBA
        img_array = img_array[:, :, :3]
    
    # Normalize pixel values to [0, 1]
    img_array = img_array.astype('float32') / 255.0
    
    # Add batch dimension
    img_array = np.expand_dims(img_array, axis=0)
    
    return img_array

@app.route('/')
def index():
    """Render the main page"""
    return render_template('index.html', model_loaded=model is not None)

@app.route('/predict', methods=['POST'])
def predict():
    """Handle image upload and return prediction"""
    if model is None:
        return jsonify({
            'success': False,
            'error': 'Model not loaded. Please train and save the model first.'
        })
    
    if 'file' not in request.files:
        return jsonify({
            'success': False,
            'error': 'No file uploaded'
        })
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({
            'success': False,
            'error': 'No file selected'
        })
    
    try:
        # Read and preprocess the image
        image = Image.open(file.stream)
        processed_image = preprocess_image(image)
        
        # Make prediction
        predictions = model.predict(processed_image, verbose=0)
        predicted_class_idx = np.argmax(predictions[0])
        confidence = float(np.max(tf.nn.softmax(predictions[0])) * 100)
        
        # Get all class probabilities
        probabilities = tf.nn.softmax(predictions[0]).numpy()
        class_probabilities = [
            {
                'class': CLASS_NAMES[i],
                'probability': float(probabilities[i] * 100)
            }
            for i in range(len(CLASS_NAMES))
        ]
        
        # Sort by probability
        class_probabilities.sort(key=lambda x: x['probability'], reverse=True)
        
        # Convert image to base64 for display
        img_resized = image.resize((128, 128))
        buffered = io.BytesIO()
        img_resized.save(buffered, format="PNG")
        img_str = base64.b64encode(buffered.getvalue()).decode()
        
        return jsonify({
            'success': True,
            'predicted_class': CLASS_NAMES[predicted_class_idx],
            'confidence': round(confidence, 2),
            'all_predictions': class_probabilities,
            'image': img_str
        })
    
    except Exception as e:
        return jsonify({
            'success': False,
            'error': f'Error processing image: {str(e)}'
        })

@app.route('/health')
def health():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'model_loaded': model is not None
    })

if __name__ == '__main__':
    print("="*60)
    print("CNN CIFAR-10 Image Classification Web App")
    print("="*60)
    
    # Load model
    model_loaded = load_model()
    
    if not model_loaded:
        print("\n⚠ Warning: Starting server without model.")
        print("Please train and save the model as 'cifar10_cnn_model.keras'")
        print("or run the training script first.\n")
    
    print("\nStarting Flask server...")
    print("Open your browser and go to: http://localhost:5000")
    print("\nPress Ctrl+C to stop the server\n")
    
    # Get port from environment variable (for deployment) or use 5000 for local
    import os
    port = int(os.environ.get('PORT', 5000))
    
    app.run(debug=True, host='0.0.0.0', port=port)
