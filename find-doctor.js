// Ensure "Services" link stays active
document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname;
    const servicesLink = document.getElementById('servicesLink');

    if (currentPage.includes('services.html')) {
        servicesLink.classList.add('active');
    }
});
