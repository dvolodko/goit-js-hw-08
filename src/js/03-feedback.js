import throttle from 'lodash.throttle';
import { save, load, remove } from './storage';

const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const refs = {
  form: document.querySelector('form'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateForm();

function onFormInput(e) {
  const savedFormData = load(STORAGE_KEY);

  if (savedFormData) {
    formData = load(STORAGE_KEY);
  }

  formData[e.target.name] = e.target.value;
  save(STORAGE_KEY, formData);
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(formData);
  e.currentTarget.reset();
  remove(STORAGE_KEY);
}

function populateForm() {
  const savedFormData = load(STORAGE_KEY);

  if (savedFormData) {
    refs.form.email.value = savedFormData.email;
  }

  if (savedFormData) {
    refs.form.message.value = savedFormData.message;
  }
}
