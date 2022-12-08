const aboutContent = document.querySelector('.about-content');
const buttons = document.querySelectorAll('.tab-btn');
const content = document.querySelectorAll('.content');

window.addEventListener('DOMContentLoaded', function(){
  const activeContent = document.getElementById('history');
  buttons.forEach((btn)=>{
    if(btn.dataset.id === 'history') btn.classList.add('active');
  })
  activeContent.classList.add('active');
});

buttons.forEach(function(btn)
{
  // console.log(btn);         
  btn.addEventListener('click', function(evt){
    btn.classList.add('active');
    const e = evt.currentTarget.dataset.id;
    const SelectedContent = document.getElementById(e); 
    SelectedContent.classList.add('active');
    content.forEach((singleContent)=>
    {
      const id = singleContent.getAttribute('id');
      if(id !== e)singleContent.classList.remove('active');
    })

    buttons.forEach((singleBtn) => 
    {
      const id = singleBtn.dataset.id;
      if(id !== e) singleBtn.classList.remove('active');
    });

  })
})