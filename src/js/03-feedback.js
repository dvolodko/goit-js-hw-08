import throttle from 'lodash.throttle';
import { save, load, remove } from './storage';

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

const refs = {
  form: document.querySelector('form'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateForm();

function onFormInput(e) {
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
    refs.form.message.value = savedFormData.message;
  }
}
