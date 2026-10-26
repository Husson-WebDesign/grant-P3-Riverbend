// JavaScript will be developed in a later phase.
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('nav ul');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });
}


const form = document.querySelector('#lesson-interest-form');

if (form) {
  const successMessage = document.querySelector('#form-success');
  const errorSummary = document.querySelector('#form-error-summary');
  const fields = [
    { input: document.querySelector('#student-name'), error: document.querySelector('#student-name-error'), message: 'Please enter the student name.', type: 'text' },
    { input: document.querySelector('#age-group'), error: document.querySelector('#age-group-error'), message: 'Please select an age group.', type: 'select' },
    { input: document.querySelector('#email'), error: document.querySelector('#email-error'), message: 'Please enter a valid email address.', type: 'email' },
    { input: document.querySelector('#instrument'), error: document.querySelector('#instrument-error'), message: 'Please select an instrument of interest.', type: 'select' },
    { input: document.querySelector('#experience'), error: document.querySelector('#experience-error'), message: 'Please select an experience level.', type: 'select' },
    { input: document.querySelector('#lesson-day'), error: document.querySelector('#lesson-day-error'), message: 'Please select a preferred lesson day.', type: 'select' }
  ];

  function validateField(field) {
    const value = field.input.value.trim();
    let message = '';

    if (value === '') {
      message = field.message;
    } else if (field.type === 'email' && !field.input.validity.valid) {
      message = 'Please enter a valid email address (for example, name@example.com).';
    }

    field.error.textContent = message;
    field.input.setAttribute('aria-invalid', message ? 'true' : 'false');
    return message === '';
  }

  fields.forEach((field) => {
    field.input.addEventListener('input', () => {
      validateField(field);
      successMessage.hidden = true;
      errorSummary.hidden = true;
    });
    field.input.addEventListener('change', () => validateField(field));
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    successMessage.hidden = true;

    const allValid = fields.map(validateField).every(Boolean);
    if (!allValid) {
      errorSummary.hidden = false;
      const firstInvalid = fields.find((field) => field.input.getAttribute('aria-invalid') === 'true');
      if (firstInvalid) firstInvalid.input.focus();
      return;
    }

    errorSummary.hidden = true;
    successMessage.textContent = 'Thank you. Your form passed validation. This is a demonstration only; your inquiry has not been sent or stored.';
    successMessage.hidden = false;
    successMessage.focus();
    form.reset();
    fields.forEach((field) => {
      field.input.setAttribute('aria-invalid', 'false');
      field.error.textContent = '';
    });
  });
}
