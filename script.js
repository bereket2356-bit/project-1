const form = document.getElementById('form');
    const error = document.getElementById('error');
    const success = document.getElementById('success');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      error.textContent = '';
      success.textContent = '';

      if (name === '' || email === '' || message === '') {
        error.textContent = 'All fields are required.';
        return;
      }

      success.textContent = 'Submitted successfully!';
      form.reset();
    });