const chatForm = document.getElementById('chat-form');
const chatLog = document.getElementById('chatlog');

chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const input = document.getElementById('user-input');
  const userQuestion = input.value.trim();
  if (!userQuestion) return;

  appendMessage('Você', userQuestion);
  input.value = '';

  appendMessage('two md', 'Pensando...');

  // Substitua abaixo pelo endpoint real da IA (backend Python ou serviço IA)
  const response = await fetch('https://API_ENDPOINT_DA_IA/two-md', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({question: userQuestion}),
  });
  const data = await response.json();
  // respostas só de maquiagem!
  chatLog.lastChild.textContent = 'two md: ' + data.answer;
});

function appendMessage(sender, text) {
  const msg = document.createElement('div');
  msg.textContent = `${sender}: ${text}`;
  chatLog.appendChild(msg);
}
