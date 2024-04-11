document.addEventListener('DOMContentLoaded', () => {
    // Query all the question elements
    const questionElements = document.querySelectorAll('.questions');
  
    questionElements.forEach(questionElement => {
      questionElement.addEventListener('click', () => {
        // Toggle the answer display on click
        const answerElement = questionElement.nextElementSibling;
        answerElement.style.display = answerElement.style.display === 'block' ? 'none' : 'block';
        
        // Toggle the arrow direction
        const arrow = questionElement.querySelector('.arrow');
        arrow.textContent = arrow.textContent === '▼' ? '▲' : '▼';
      });
    });
  });
  