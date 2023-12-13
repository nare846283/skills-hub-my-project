
function toggleAnswer(answerId, iconId) {
    var answer = document.getElementById(answerId);
    var icon = document.getElementById(iconId);
  
    answer.classList.toggle('show-answer');
    icon.classList.toggle('rotate');
  }
  
