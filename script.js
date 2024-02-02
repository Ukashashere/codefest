let selectedFiles = [];

function addFiles() {
  const fileInput = document.getElementById('fileInput');
  for (const file of fileInput.files) {
    selectedFiles.push(file);
    displayFiles();
  }
  // Reset the file input so the same files can be re-selected if needed
  fileInput.value = "";
}

function displayFiles() {
  const listOfFiles = document.getElementById('listOfFiles');
  listOfFiles.innerHTML = ""; // Clear the list
  selectedFiles.forEach((file, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = file.name + " (" + formatBytes(file.size) + ")";
    listOfFiles.appendChild(listItem);
  });
}

function uploadFiles() {
  // Here you would normally use fetch or XMLHttpRequest to send files to the server
  // Example: 
  // const formData = new FormData();
  // selectedFiles.forEach(file => formData.append('files[]', file));
  // fetch('YOUR_BACKEND_ENDPOINT', {method: 'POST', body: formData});
  console.log('Files to upload:', selectedFiles);
  alert('Files have been uploaded successfully!');
}

// Utility function to format bytes into a more readable format
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// This script is for demonstration and does not handle actual file uploads without a backend.