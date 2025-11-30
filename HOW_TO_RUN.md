# 🚀 HOW TO RUN THIS PROJECT - Simple 3-Step Guide

## ⚡ SUPER QUICK VERSION

### Step 1: Save Your Model (30 seconds)
Open `CNN_CIFAR10.ipynb` in Jupyter Notebook and add this at the end:
```python
model.save('cifar10_cnn_model.keras')
```
Run the cell. Done! ✅

### Step 2: Install Requirements (1 minute)
Open terminal/command prompt in this folder and run:
```bash
pip install -r requirements.txt
```

### Step 3: Run the App (5 seconds)
Double-click `run.bat` 
**OR** 
In terminal run:
```bash
python app.py
```

### Step 4: Open Browser
Go to: **http://localhost:5000**

**THAT'S IT! You're done!** 🎉

---

## 📋 Detailed Steps (If you need more help)

### STEP 1: Prepare Your Model

**What**: Save the trained CNN model from your Jupyter notebook  
**Why**: The Flask app needs the model file to make predictions  
**How**:

1. Open Jupyter Notebook
2. Navigate to and open `CNN_CIFAR10.ipynb`
3. Scroll to the bottom (after training is complete)
4. Add a new code cell
5. Copy and paste this code:
```python
# Save the trained model
model.save('cifar10_cnn_model.keras')
print('✓ Model saved successfully!')
```
6. Run the cell (Shift + Enter)
7. You should see a new file `cifar10_cnn_model.keras` in your folder

**Verify**: Check that `cifar10_cnn_model.keras` file exists in your folder

---

### STEP 2: Install Python Packages

**What**: Install Flask, TensorFlow, and other required packages  
**Why**: The app needs these to run  
**How**:

1. Open Command Prompt (Windows) or Terminal (Mac/Linux)
2. Navigate to your project folder:
```bash
cd "d:\LEVEL_4\First_Term\Computational Cognitive system\sheets\Task 1"
```
3. Install requirements:
```bash
pip install -r requirements.txt
```
4. Wait for installation (takes 2-5 minutes)

**Verify**: You should see "Successfully installed" messages

---

### STEP 3: Start the Flask Server

**What**: Run the web application  
**Why**: This starts the server that hosts your web app  
**How**:

**Option A - Easy (Windows):**
- Just double-click `run.bat` file

**Option B - Manual:**
```bash
python app.py
```

You should see:
```
 * Running on http://127.0.0.1:5000
 * Running on http://localhost:5000
```

**Keep this window open!** Don't close it while using the app.

---

### STEP 4: Use the Web App

1. Open your web browser (Chrome recommended)
2. Go to: `http://localhost:5000`
3. You'll see the beautiful image classifier interface!

**Now you can:**
- Upload an image
- Get predictions
- See confidence scores
- Try different images

---

## 🎯 Visual Checklist

Before running, make sure you have:

```
✅ Python installed (3.8+)
✅ Jupyter Notebook working
✅ CNN_CIFAR10.ipynb notebook (with trained model)
✅ All files from the Flask app
✅ Internet connection (for first-time package installation)
```

---

## 🔧 Common Issues & Quick Fixes

### "Model not loaded" error
**Fix**: Go back to Step 1 - you forgot to save the model!

### "pip: command not found"
**Fix**: Python not in PATH. Try `python -m pip install -r requirements.txt`

### "Port 5000 already in use"
**Fix**: Edit `app.py` line 168, change `port=5000` to `port=5001`

### "ModuleNotFoundError: No module named 'flask'"
**Fix**: Requirements not installed. Run Step 2 again.

### Browser shows "Can't reach this page"
**Fix**: Make sure `python app.py` is still running in the terminal

---

## 📱 What You'll See

After opening http://localhost:5000, you'll see:

1. **Header** with "CIFAR-10 Classifier" and status
2. **Upload area** - drag and drop or click to select image
3. After upload: **Preview** with "Classify Image" button
4. After prediction: **Results** showing:
   - Predicted class (e.g., "cat", "dog")
   - Confidence percentage
   - Probability bars for all 10 classes
5. **Try Another Image** button to start over

---

## 💡 Quick Tips

- **Best images**: Clear, single object, well-lit
- **Supported formats**: JPG, PNG, GIF, BMP
- **Keyboard shortcuts**: 
  - Press `Enter` to classify (when image loaded)
  - Press `Escape` to reset
- **Paste images**: You can paste from clipboard (Ctrl+V)
- **Drag & drop**: Just drag images onto the page

---

## 🎬 Example Session

```bash
# 1. Navigate to folder
cd "d:\...\Task 1"

# 2. Install deps (first time only)
pip install -r requirements.txt

# 3. Run app
python app.py

# Output:
# ========================================
# CNN CIFAR-10 Image Classification Web App
# ========================================
# ✓ Model loaded successfully
# Starting Flask server...
# Open your browser: http://localhost:5000
```

```
Browser: http://localhost:5000
→ Upload cat picture
→ Click "Classify Image"
→ See: "cat" with 85% confidence
→ Try another image!
```

---

## 🛑 How to Stop

When you're done:
1. Go back to the terminal/command prompt
2. Press `Ctrl + C`
3. The server will stop
4. You can close the browser

---

## ✅ Verification Script

Want to check if everything is ready? Run this in Python:

```python
import sys
print(f"Python version: {sys.version}")

# Check required packages
packages = ['flask', 'tensorflow', 'numpy', 'PIL']
for pkg in packages:
    try:
        __import__(pkg)
        print(f"✓ {pkg} installed")
    except ImportError:
        print(f"✗ {pkg} NOT installed")

# Check model file
import os
if os.path.exists('cifar10_cnn_model.keras'):
    print("✓ Model file found")
else:
    print("✗ Model file NOT found - run Step 1!")
```

---

## 📞 Still Having Issues?

1. Check `QUICK_START.md` for detailed troubleshooting
2. Check `README.md` for full documentation
3. Check terminal for error messages
4. Make sure all steps are completed in order

---

## 🎉 Success!

Once you see the web interface, you're all set! Enjoy your professional image classification app!

**Next**: Try uploading different images and see how accurate your model is! 🚀

---

*Last Updated: 2025-11-30*  
*Need help? Check the other documentation files!*
