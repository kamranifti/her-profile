// scroll reveal
const els = document.querySelectorAll('.rv');
const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}
  });
},{threshold:0.1});
els.forEach(el=>io.observe(el));

// form
function sendForm(e){
  e.preventDefault();
  document.getElementById('formOk').style.display='block';
  e.target.reset();
}