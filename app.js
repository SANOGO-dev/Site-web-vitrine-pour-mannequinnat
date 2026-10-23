
// Images provisoires (remplacez src="" par vos vraies photos)
document.querySelectorAll('.card img').forEach(function(img){
  var n = img.dataset.n;
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400"><rect width="300" height="400" fill="#c9bfae"/><circle cx="150" cy="140" r="55" fill="#a89a82"/><path d="M40 400c0-90 50-140 110-140s110 50 110 140z" fill="#a89a82"/><text x="150" y="385" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#fff">Photo ' + n + '</text></svg>';
  img.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
});

// Menu mobile + défilement vers les sections
var menu = document.getElementById('menu');
document.getElementById('burger').addEventListener('click', function(){ menu.classList.toggle('open'); });
document.querySelectorAll('a[href^="#"]').forEach(function(a){
  a.addEventListener('click', function(e){
    var t = document.querySelector(a.getAttribute('href'));
    if(t){ e.preventDefault(); t.scrollIntoView({behavior:'smooth'}); }
    menu.classList.remove('open');
  });
});

// Formulaire : à relier à Formspree, EmailJS ou votre backend
document.getElementById('form').addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('msg').textContent = 'Merci ! Votre message a bien été pris en compte.';
  e.target.reset();
});