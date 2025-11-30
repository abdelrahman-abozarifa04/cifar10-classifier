# CIFAR-10 CNN Image Classifier 🧠

A professional web application for image classification using a Convolutional Neural Network trained on the CIFAR-10 dataset. Built with Flask and TensorFlow.

![Project Banner](https://img.shields.io/badge/Python-3.8+-blue.svg)
![TensorFlow](https://img.shields.io/badge/TensorFlow-2.0+-orange.svg)
![Flask](https://img.shields.io/badge/Flask-Latest-green.svg)

## ✨ Features

- 🎨 **Modern Dark Mode UI** with glassmorphism effects
- 🔮 **Real-time Image Classification** using CNN
- 📊 **Probability Visualization** for all 10 classes
- 🖼️ **Drag & Drop Upload** interface
- 📱 **Responsive Design** for all devices
- ⚡ **Fast Predictions** with optimized model

## 🎯 Supported Classes

The model can classify images into 10 categories:
- ✈️ Airplane
- 🚗 Automobile
- 🐦 Bird
- 🐱 Cat
- 🦌 Deer
- 🐕 Dog
- 🐸 Frog
- 🐴 Horse
- 🚢 Ship
- 🚚 Truck

## 🚀 Quick Start

### Prerequisites

- Python 3.8 or higher
- pip package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/cifar10-classifier.git
   cd cifar10-classifier
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the application**
   ```bash
   python app.py
   ```
   
   Or use the batch file (Windows):
   ```bash
   run.bat
   ```

4. **Open in browser**
   Navigate to `http://localhost:5000`

## 📊 Model Details

- **Architecture**: Convolutional Neural Network (CNN)
- **Dataset**: CIFAR-10 (60,000 32x32 color images)
- **Accuracy**: ~70.5% on test set
- **Framework**: TensorFlow/Keras

### Model Architecture

```
Conv2D(32) → MaxPooling → Conv2D(64) → MaxPooling → Conv2D(64) → Flatten → Dense(64) → Dense(10)
```

## 📁 Project Structure

```
cifar10-classifier/
├── app.py                      # Flask application
├── CNN_CIFAR10.ipynb          # Model training notebook
├── cifar10_cnn_model.keras    # Trained model
├── requirements.txt           # Python dependencies
├── run.bat                    # Windows launcher
├── static/
│   ├── css/
│   │   └── style.css         # Styles with dark mode
│   └── js/
│       └── main.js           # Frontend logic
├── templates/
│   └── index.html            # Main page
└── uploads/                  # Temporary upload folder
```

## 🎨 UI Features

- **Glassmorphism Effects**: Frosted glass design
- **Gradient Text**: Beautiful rainbow gradients
- **3D Hover Effects**: Interactive button animations
- **Animated Backgrounds**: Floating gradient particles
- **Smooth Transitions**: Modern cubic-bezier animations

## 🛠️ Technologies Used

- **Backend**: Flask (Python)
- **ML Framework**: TensorFlow/Keras
- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Custom CSS with glassmorphism
- **Icons**: Font Awesome

## 📝 Usage

1. **Upload an Image**: Click or drag & drop an image
2. **Classify**: Click the "Classify Image" button
3. **View Results**: See the prediction with confidence score
4. **Check Probabilities**: Review all class probabilities

## 🔧 Development

### Training Your Own Model

1. Open `CNN_CIFAR10.ipynb` in Jupyter Notebook
2. Run all cells to train the model
3. The model will be saved as `cifar10_cnn_model.keras`

### Customization

- **Colors**: Edit CSS variables in `static/css/style.css`
- **Model**: Replace `cifar10_cnn_model.keras` with your own
- **Classes**: Update `CLASS_NAMES` in `app.py`

## 📦 Deployment

### Vercel Deployment

This project can be deployed to Vercel (see `vercel.json` for configuration).

### Local Development

```bash
flask run
```

Or:

```bash
python app.py
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Your Name**
- GitHub: [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)

## 🙏 Acknowledgments

- CIFAR-10 dataset creators
- TensorFlow team
- Flask community

## 📸 Screenshots

*(Add your screenshots here after uploading)*

---

**Built with ❤️ using TensorFlow and Flask**
