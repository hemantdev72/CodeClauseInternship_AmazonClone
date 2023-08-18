const rBtn=document.querySelector('.r-btn');
const lBtn=document.querySelector('.l-btn');
const lBtn2=document.querySelector('.btn-1b');
const rBtn2=document.querySelector('.btn-1a');
const bookLBtn=document.querySelector('.book-lbtn');
const bookRBtn=document.querySelector('.book-rbtn');

rBtn.addEventListener('click',(event)=>{
    const content=document.querySelector('.product-slide');
    content.scrollLeft +=1100;
    event.preventDefault();
})

lBtn.addEventListener('click',(event)=>{
    const content=document.querySelector('.product-slide');
    content.scrollLeft -=1100;
    event.preventDefault();
})

rBtn2.addEventListener('click',(event)=>{
    const content2=document.querySelector('.product-slide-1');
    content2.scrollLeft +=1100;
    event.preventDefault();
})

lBtn2.addEventListener('click',(event)=>{
    const content2=document.querySelector('.product-slide-1');
    content2.scrollLeft -=1100;
    event.preventDefault();
})


bookLBtn.addEventListener('click',(event)=>{
    const content3=document.querySelector('.product-slide-2');
    content3.scrollLeft +=1100;
    event.preventDefault();
})

bookRBtn.addEventListener('click',(event)=>{
    const content3=document.querySelector('.product-slide-2');
    content3.scrollLeft -=1100;
    event.preventDefault();
})

const sidebar=document.querySelector('.sidebar');
const cross=document.querySelector('.fa-xmark');
const black=document.querySelector('.black');
const sideBtn=document.querySelector('.second-1');

sideBtn.addEventListener('click',()=>{
    sidebar.classList.add('active');
    cross.classList.add('active');
    black.classList.add('active');
    document.body.classList.add('stop-scroll');
})

cross.addEventListener('click',()=>{
    sidebar.classList.remove('active');
    cross.classList.remove('active');
    black.classList.remove('active');
    document.body.classList.remove('stop-scroll');
    
})

const sign=document.querySelector('.ac');
const tri=document.querySelector('.triangle');
const signin=document.querySelector('.hdn-sign');

sign.addEventListener('click',()=>{
    black.classList.toggle('active-1');
    signin.classList.toggle('active')
    tri.classList.toggle('active')
})