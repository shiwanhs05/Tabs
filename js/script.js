const about = document.querySelector('.about');
const buttons = document.querySelectorAll('.tab-btn');
const content = document.querySelectorAll('.content');


// event listener and handler
about.addEventListener('click', function(evt){
  const id = evt.target.dataset.id;
  if(id){
    buttons.forEach((btn)=>{
      btn.classList.remove('active');
    });
    content.forEach((cnt)=>{
      cnt.classList.remove('active');
    });
    const element = document.getElementById(id);
    element.classList.add('active');
    evt.target.classList.add('active');
  }

})