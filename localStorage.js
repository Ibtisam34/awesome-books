const formData = {
  title: '',
  author: '',
};

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author'
);

if (localStorage.getItem('formData')) {
  const formValue = localStorage.getItem('formData');
  const formValueObj = JSON.parse(formValue);
  
}