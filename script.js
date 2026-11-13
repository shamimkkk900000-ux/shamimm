// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Switch Festival Wings
function openWing(wingId, btn) {
    document.querySelectorAll('.wing-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    
    document.getElementById(wingId).classList.add('active');
    btn.classList.add('active');
}

// Switch Schedule Days
function openDay(dayId, btn) {
    document.querySelectorAll('.day-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.sched-btn').forEach(el => el.classList.remove('active'));
    
    document.getElementById(dayId).classList.add('active');
    btn.classList.add('active');
}

// Sponsorship Form Submission Feedback
document.getElementById('sponsorForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const msg = document.getElementById('formMessage');
    msg.textContent = "Thank you! Your sponsorship inquiry has been recorded. Our team will contact you shortly.";
    this.reset();
});