// ===== Page Navigation =====
document.addEventListener('DOMContentLoaded', function() {
    var navItems = document.querySelectorAll('.nav-item[data-page]');
    var pages    = document.querySelectorAll('.page-content');

    navItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            var targetPage = this.getAttribute('data-page');

            navItems.forEach(function(nav) { nav.classList.remove('active'); });
            this.classList.add('active');

            pages.forEach(function(page) { page.classList.remove('active'); });

            var targetElement = document.getElementById(targetPage + '-page');
            if (targetElement) {
                targetElement.classList.add('active');
            }
        });
    });
});

// ===== Form Validation =====
var contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        clearErrors();

        var name    = document.getElementById('name').value.trim();
        var email   = document.getElementById('email').value.trim();
        var message = document.getElementById('message').value.trim();
        var isValid = true;

        if (name === '') {
            showError('name', 'Name is required'); isValid = false;
        } else if (name.length < 2) {
            showError('name', 'Name must be at least 2 characters'); isValid = false;
        }

        if (email === '') {
            showError('email', 'Email is required'); isValid = false;
        } else if (!isValidEmail(email)) {
            showError('email', 'Please enter a valid email address'); isValid = false;
        }

        if (message === '') {
            showError('message', 'Message is required'); isValid = false;
        } else if (message.length < 10) {
            showError('message', 'Message must be at least 10 characters'); isValid = false;
        }

        if (isValid) {
            showSuccess();
            contactForm.reset();
            setTimeout(function() {
                document.getElementById('formSuccess').classList.remove('show');
            }, 5000);
        }
    });
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(fieldId, message) {
    var field = document.getElementById(fieldId);
    var errorEl = document.getElementById(fieldId + 'Error');
    if (field && errorEl) {
        field.classList.add('error');
        errorEl.textContent = message;
        errorEl.classList.add('show');
    }
}

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(function(el) {
        el.classList.remove('show'); el.textContent = '';
    });
    document.querySelectorAll('.form-row input, .form-row textarea').forEach(function(el) {
        el.classList.remove('error');
    });
}

function showSuccess() {
    var el = document.getElementById('formSuccess');
    if (el) el.classList.add('show');
}

// ===== Real-time Input Validation =====
document.querySelectorAll('.form-row input, .form-row textarea').forEach(function(input) {
    input.addEventListener('blur', function() {
        var errorEl = document.getElementById(this.id + 'Error');
        if (errorEl) { errorEl.classList.remove('show'); this.classList.remove('error'); }
        if (this.id === 'email' && this.value.trim() !== '' && !isValidEmail(this.value.trim())) {
            showError(this.id, 'Please enter a valid email address');
        }
    });
    input.addEventListener('focus', function() {
        var errorEl = document.getElementById(this.id + 'Error');
        if (errorEl) { errorEl.classList.remove('show'); this.classList.remove('error'); }
    });
});
