// script.js
document.getElementById('passwordModal').style.display = 'block';

function checkPassword() {
  const userInput = document.getElementById('passwordInput').value
                    .replace(/\s+/g, '') // Barcha bo'sh joylarni olib tashlaymiz
                    .toLowerCase(); // Keyin kichik harflarga o'zgartiramiz
  const correctPassword = 'PN'.toLowerCase(); // To'g'ri parolni ham shunga mos ravishda solishtiramiz

  if(userInput === correctPassword) {
    document.getElementById('content').classList.remove('hidden');
    document.getElementById('passwordModal').style.display = 'none';
  } else {
    alert('Noto`g`ri parol. Iltimos, qayta urinib ko`ring.');
    document.getElementById('passwordInput').value = ''; // Inputni tozalaymiz
  }
}

document.getElementById('submitBtn').addEventListener('click', checkPassword);

document.getElementsByClassName("close-button")[0].onclick = function() {
  document.getElementById('passwordModal').style.display = "none";
}
