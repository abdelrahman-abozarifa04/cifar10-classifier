// JavaScript functionality for CIFAR-10 Classifier

let selectedFile = null;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeUploadBox();
    initializeFileInput();
});

// Initialize drag and drop functionality
function initializeUploadBox() {
    const uploadBox = document.getElementById('uploadBox');
    
    if (!uploadBox) return;

    // Prevent default drag behaviors
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        uploadBox.addEventListener(eventName, preventDefaults, false);
        document.body.addEventListener(eventName, preventDefaults, false);
    });

    // Highlight drop area when item is dragged over it
    ['dragenter', 'dragover'].forEach(eventName => {
        uploadBox.addEventListener(eventName, () => {
            uploadBox.classList.add('dragover');
        }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        uploadBox.addEventListener(eventName, () => {
            uploadBox.classList.remove('dragover');
        }, false);
    });

    // Handle dropped files
    uploadBox.addEventListener('drop', handleDrop, false);
    
    // Click to upload (but not when clicking the button)
    uploadBox.addEventListener('click', (e) => {
        // Don't trigger if clicking on the button itself
        if (!e.target.closest('button')) {
            document.getElementById('fileInput').click();
        }
    });
}

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    
    if (files.length > 0) {
        handleFileSelect(files[0]);
    }
}

// Initialize file input
function initializeFileInput() {
    const fileInput = document.getElementById('fileInput');
    
    if (!fileInput) return;

    fileInput.addEventListener('change', function(e) {
        if (e.target.files.length > 0) {
            handleFileSelect(e.target.files[0]);
        }
    });
}

// Handle file selection
function handleFileSelect(file) {
    // Validate file type
    if (!file.type.startsWith('image/')) {
        showError('Please select a valid image file');
        return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
        showError('File size must be less than 10MB');
        return;
    }

    selectedFile = file;
    displayPreview(file);
}

// Display image preview
function displayPreview(file) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const previewImage = document.getElementById('previewImage');
        previewImage.src = e.target.result;
        
        // Hide upload box and show preview
        document.getElementById('uploadBox').style.display = 'none';
        document.getElementById('previewSection').style.display = 'block';
        
        // Hide results and error if showing
        document.getElementById('resultsSection').style.display = 'none';
        hideError();
    };
    
    reader.readAsDataURL(file);
}

// Reset upload
function resetUpload() {
    selectedFile = null;
    
    // Reset file input
    document.getElementById('fileInput').value = '';
    
    // Reset image preview
    document.getElementById('previewImage').src = '';
    
    // Show upload box, hide preview and results
    document.getElementById('uploadBox').style.display = 'block';
    document.getElementById('previewSection').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('loadingSpinner').style.display = 'none';
    
    hideError();
}

// Predict image
async function predictImage() {
    if (!selectedFile) {
        showError('Please select an image first');
        return;
    }

    // Show loading spinner
    document.getElementById('previewSection').style.display = 'none';
    document.getElementById('loadingSpinner').style.display = 'block';
    document.getElementById('resultsSection').style.display = 'none';
    hideError();

    // Prepare form data
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
        // Send prediction request
        const response = await fetch('/predict', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        // Hide loading spinner
        document.getElementById('loadingSpinner').style.display = 'none';

        if (data.success) {
            displayResults(data);
        } else {
            showError(data.error || 'An error occurred during prediction');
            document.getElementById('previewSection').style.display = 'block';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('loadingSpinner').style.display = 'none';
        showError('Failed to connect to the server. Please try again.');
        document.getElementById('previewSection').style.display = 'block';
    }
}

// Display prediction results
function displayResults(data) {
    // Update predicted class
    document.getElementById('predictedClass').textContent = data.predicted_class;
    
    // Update confidence
    document.getElementById('confidenceValue').textContent = data.confidence.toFixed(1) + '%';
    
    // Display all probabilities
    displayProbabilityBars(data.all_predictions);
    
    // Show results section
    document.getElementById('resultsSection').style.display = 'block';
    
    // Scroll to results
    document.getElementById('resultsSection').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest' 
    });
}

// Display probability bars
function displayProbabilityBars(predictions) {
    const container = document.getElementById('probabilityBars');
    container.innerHTML = '';
    
    // Show top 5 predictions
    const topPredictions = predictions.slice(0, 5);
    
    topPredictions.forEach(pred => {
        const item = document.createElement('div');
        item.className = 'probability-item';
        
        item.innerHTML = `
            <div class="probability-header">
                <span class="class-name">${pred.class}</span>
                <span class="probability-value">${pred.probability.toFixed(1)}%</span>
            </div>
            <div class="probability-bar-bg">
                <div class="probability-bar-fill" style="width: ${pred.probability}%"></div>
            </div>
        `;
        
        container.appendChild(item);
    });
}

// Show error message
function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    const errorText = document.getElementById('errorText');
    
    errorText.textContent = message;
    errorMessage.style.display = 'flex';
    
    // Scroll to error
    errorMessage.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest' 
    });
}

// Hide error message
function hideError() {
    document.getElementById('errorMessage').style.display = 'none';
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Escape key to reset
    if (e.key === 'Escape') {
        resetUpload();
    }
    
    // Enter key to predict (if image is loaded)
    if (e.key === 'Enter' && selectedFile) {
        const previewSection = document.getElementById('previewSection');
        if (previewSection.style.display !== 'none') {
            predictImage();
        }
    }
});

// Add paste functionality
document.addEventListener('paste', function(e) {
    const items = e.clipboardData.items;
    
    for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
            const file = items[i].getAsFile();
            handleFileSelect(file);
            break;
        }
    }
});
