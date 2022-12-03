import throttle from 'lodash.throttle';
import { save, load, remove } from './storage';

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

const refs = {
  form: document.querySelector('form'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onFormInput);

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  console.log(formData);
  save(STORAGE_KEY, formData);
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  remove(STORAGE_KEY);
}
