let questionNO = 0;
let correct = 0;

const codingQuestions = [
  {
      question: "What is the output of the following code: console.log(typeof NaN);?",
      options: ["number", "string", "undefined", "object"],
      answer: 0
  },
  {
      question: "Which built-in method combines the text of two strings and returns a new string?",
      options: ["append()", "concat()", "attach()", "combine()"],
      answer: 1
  },
  {
      question: "Which HTML attribute is used to define inline styles?",
      options: ["class", "style", "font", "styles"],
      answer: 1
  },
  {
      question: "Which CSS property is used to change the background color?",
      options: ["background-color", "color", "bgcolor", "bg-color"],
      answer: 0
  },
  {
      question: "What is the output of the following code: console.log(2 + '2');?",
      options: ["4", "22", "NaN", "undefined"],
      answer: 1
  },
  {
      question: "Which JavaScript method is used to write HTML output?",
      options: ["document.write()", "console.log()", "window.alert()", "document.alert()"],
      answer: 0
  },
  {
      question: "How can you add a comment in JavaScript?",
      options: ["<!-- This is a comment -->", "// This is a comment", "' This is a comment", "# This is a comment"],
      answer: 1
  },
  {
      question: "Which method can be used to round a number to the nearest integer in JavaScript?",
      options: ["Math.round()", "Math.ceil()", "Math.floor()", "Math.abs()"],
      answer: 0
  },
  {
      question: "Which of the following is not a JavaScript data type?",
      options: ["Number", "String", "Boolean", "Float"],
      answer: 3
  },
  {
      question: "What is the correct way to write a JavaScript array?",
      options: ["var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", "var colors = ['red', 'green', 'blue']", "var colors = (1:'red', 2:'green', 3:'blue')", "var colors = 'red', 'green', 'blue'"],
      answer: 1
  },
  {
      question: "Which company developed JavaScript?",
      options: ["Microsoft", "Netscape", "Sun Microsystems", "IBM"],
      answer: 1
  },
  {
      question: "How do you create a function in JavaScript?",
      options: ["function myFunction()", "function:myFunction()", "function = myFunction()", "def myFunction()"],
      answer: 0
  },
  {
      question: "Which event occurs when the user clicks on an HTML element?",
      options: ["onchange", "onmouseclick", "onclick", "onmouseover"],
      answer: 2
  },
  {
      question: "Which symbol is used for comments in CSS?",
      options: ["//", "#", "/* */", "<!-- -->"],
      answer: 2
  },
  {
      question: "Which of the following is correct about features of JavaScript?",
      options: ["JavaScript is a lightweight, interpreted programming language", "JavaScript is designed for creating network-centric applications", "JavaScript is complementary to and integrated with Java", "All of the above"],
      answer: 3
  }
];

const box =  document.querySelector('#question-box');

// step 1
function showQuestion(idx) {

  let options = "";
  codingQuestions[idx].options.forEach((o, i) =>  {
    options += `<li id="op-${i}" style="background-color:${selectedAnswers[idx] != -1  && i == selectedAnswers[idx] ? selectedAnswers[idx] == codingQuestions[idx].answer ? 'green': 'rgb(226, 97, 82)' : ''}">${o}</li>`
  })

  box.innerHTML = `
  <p>${codingQuestions[idx].question}</p>
  <ul>
    ${options}
  <ul>
  `
}


let selectedAnswers = new Array(codingQuestions.length).fill(-1);

showQuestion(0)

// code for secting an option
box.addEventListener('click', (e) => {
  if(e.target.matches('li')) {
    const selected = e.target.id[3]

    
    
    if(selectedAnswers[questionNO] == -1) {
      if(selected == codingQuestions[questionNO].answer) {
        e.target.style.backgroundColor = 'green';
        correct++;
      }
      else {
        e.target.style.backgroundColor = 'rgb(226, 97, 82)';
      }
      selectedAnswers[questionNO] = selected
    }
  }
})

const btns = document.querySelectorAll('button')


function moveForward() {
  console.log(selectedAnswers)
  if(questionNO < codingQuestions.length-1) {
    showQuestion(questionNO+1)
    questionNO++;
  }

  if(questionNO == codingQuestions.length-1) {
    btns[2].innerText = 'submit';
    btns[2].style.backgroundColor = 'orangered'
  }

}

function moveBackward() {
  btns[2].innerText = 'next';
  btns[2].style.backgroundColor = 'rgb(210, 247, 229)'
  if(questionNO > 0) {
    showQuestion(questionNO-1)
    questionNO--;
  }
  else if(questionNO == 0) {
    alert("no previous question available")
  }
}

// code for previous buttton
btns[0].addEventListener('click', (e) => {
  moveBackward()
})

// code for skip buttton

btns[1].addEventListener('click', (e) => {
  moveForward()
})

// code for next button
btns[2].addEventListener('click', (e) => {
  if(e.target.innerText == 'next') {

    if(selectedAnswers[questionNO] != -1) {
      moveForward()
    }
    else {
      alert('you have to select an option')
    }
  }
  else {
    alert(`you have scored ${correct} out of ${codingQuestions.length}`)
  }
})


