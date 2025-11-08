document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Terima kasih! Ini demo—form tidak dikirim. Untuk aktifkan form, gunakan Netlify Forms atau Formspree.');
});