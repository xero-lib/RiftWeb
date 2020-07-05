const handleImageUpload = event => {
  const files = event.target.files;
  const myImage = files[0];
  const imageType = /image.*/;

  if (!myImage.type.match(imageType)) {
      alert('Sorry, only images are allowed');
      return;
  }

  if (myImage.size > (12000*1024)) {
      alert('Sorry, the max allowed size for images is 12MB');
      return;
  }
  
  const formData = new FormData();
  formData.append('myFile', files[0]);

  fetch('/saveImage', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.path);
  })
  .catch(error => {
    console.error(error);
  })
}

document.querySelector('#fileUpload').addEventListener('change', event => {
  handleImageUpload(event);
})

