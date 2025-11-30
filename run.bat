@echo off
echo ========================================
echo CIFAR-10 CNN Classifier - Quick Start
echo ========================================
echo.

REM Check if model exists
if not exist "cifar10_cnn_model.keras" (
    if not exist "cifar10_cnn_model.h5" (
        echo WARNING: Model file not found!
        echo.
        echo Please train and save your model first:
        echo 1. Open CNN_CIFAR10.ipynb in Jupyter
        echo 2. Run all cells to train the model
        echo 3. Add this cell at the end:
        echo    model.save('cifar10_cnn_model.keras'^)
        echo.
        echo Press any key to continue anyway...
        pause > nul
    )
)

echo Starting Flask application...
echo.
echo The app will open at: http://localhost:5000
echo Press Ctrl+C to stop the server
echo.
echo ========================================
echo.

python app.py

pause
