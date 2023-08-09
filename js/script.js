const date = document.querySelector('.date')

const newDate = new Date().getFullYear()
date.textContent = newDate;

const questionBox = document.querySelectorAll('.question-box');

questionBox.forEach(questions => {
   const questionBtns = questions.querySelector('.question-btn')

   questionBtns.addEventListener('click', (e) => {
      questionBox.forEach(question => { 
         if (question === questions)
            question.classList.toggle('show-text');
         else
            question.classList.remove('show-text');
      })
   })
})
 

const testimonials = [
   {
      name: 'Jane Doe',
      quote: `"Our SaaS product is easy to use and it's packed with features. We were able to get up and running quickly, and we're constantly finding new ways to use it to improve our business"`,
      proffesion: 'CEO of Acme Corporation'
   },
     {
      name: 'John Smith',
      quote: `"Our SaaS product has been a lifesaver for our business. We were able to save time and money by automating our processes, and our employees are much happier with the new system"`,
      proffesion: 'CTO of XYZ Company'
   },
     {
      name: 'Mary Jones',
      quote: `"Our Your SaaS product is the best on the market. It's reliable, secure, and affordable. We would highly recommend it to anyone looking for a SaaS solution."`,
      proffesion: 'CFO of DEF Inc.'
   },
       {
      name: 'Bill Green',
      quote: `"Our Your SaaS product has exceeded our expectations. It's helped us to grow our business and improve our customer service. We're grateful for your support."`,
      proffesion: 'CEO of GHI Company'
   },
]



const testimonialsQuote = document.querySelector('.testimonials-quote');
const testimonialsName = document.querySelector('.testimonials-name');
const testimonialsProffesion = document.querySelector('.profession')


const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentNumber = 0;

function handleTestimonial() {
   testimonialsQuote.textContent = testimonials[currentNumber].quote;
   testimonialsName.textContent = testimonials[currentNumber].name;
   testimonialsProffesion.textContent = testimonials[currentNumber].proffesion;

}
handleTestimonial()

prevBtn.addEventListener('click', () => { 
   handleTestimonial()
   
   if (currentNumber === 0) {
      currentNumber = testimonials.length - 1;
   } else {
      
      currentNumber--;
   }
  
})

nextBtn.addEventListener('click', () => { 
   handleTestimonial()
   
   if (currentNumber === testimonials.length -1) {
      currentNumber = 0;
   } else {
      
      currentNumber++;
   }
  
})


const items = [...document.querySelectorAll('.facts-count')];

const updateCount = (el) => {
   const value = parseInt(el.dataset.value);
  
  const increment = Math.ceil(value / 1000);
  // const increment = 1;
  let initialValue = 0;

  const increaseCount = setInterval(() => {
    initialValue += increment;

    if (initialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }

    el.textContent = `${initialValue}+`;
  }, 1);
};

items.forEach((item) => {
  updateCount(item);
});
