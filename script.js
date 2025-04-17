function uploadImage(index) {
    const inputs = document.querySelectorAll('.image-slot input');
    inputs[index].click();
  }
  
  function previewImage(event, index) {
    const file = event.target.files[0];
    const img = document.getElementById(`img${index}`);
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  