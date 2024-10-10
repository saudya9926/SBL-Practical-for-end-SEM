$(document).ready(function() {
    $('#password').on('input', function() {
        var password = $(this).val();
        var strength = 0;

        // Check password length
        if (password.length >= 8) strength++;
        // Check for lowercase letters
        if (/[a-z]/.test(password)) strength++;
        // Check for uppercase letters
        if (/[A-Z]/.test(password)) strength++;
        // Check for numbers
        if (/[0-9]/.test(password)) strength++;
        // Check for special characters
        if (/[\W_]/.test(password)) strength++;

        // Set strength message and class
        var strengthMessage = '';
        var strengthClass = '';
        switch (strength) {
            case 0:
            case 1:
                strengthMessage = 'Very Weak';
                strengthClass = 'very-weak';
                break;
            case 2:
                strengthMessage = 'Weak';
                strengthClass = 'weak';
                break;
            case 3:
                strengthMessage = 'Moderate';
                strengthClass = 'moderate';
                break;
            case 4:
                strengthMessage = 'Strong';
                strengthClass = 'strong';
                break;
            case 5:
                strengthMessage = 'Very Strong';
                strengthClass = 'very-strong';
                break;
        }

        $('#strength').text('Strength: ' + strengthMessage).attr('class', 'strength ' + strengthClass);
    });
});
