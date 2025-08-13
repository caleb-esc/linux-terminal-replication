const terminal = document.getElementById('terminal');
let history = [];
let cwd = '/home/user';

function printOutput(text) {
  const out = document.createElement('div');
  out.className = 'output';
  out.textContent = text;
  terminal.appendChild(out);
}

function printPrompt(cmd = '') {
  const div = document.createElement('div');
  div.innerHTML = `<span class="prompt">user@cloud:~$</span> <span class="command" contenteditable="true">${cmd}</span>`;
  terminal.appendChild(div);
  const input = div.querySelector('.command');
  input.focus();

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const command = input.textContent.trim();
      history.push(command);
      handleCommand(command);
      input.setAttribute('contenteditable', 'false');
      printPrompt();
    }
  });
}

function handleCommand(cmd) {
  if (cmd === 'ls') {
    printOutput('Desktop Documents Downloads Pictures');
  } else if (cmd === 'pwd') {
    printOutput(cwd);
  } else if (cmd === 'echo hello') {
    printOutput('hello');
  } else if (cmd === 'help') {
    printOutput('Supported commands: ls, pwd, echo, help');
  } else if (cmd === '') {
    printOutput('');
  } else {
    printOutput(`bash: ${cmd}: command not found`);
  }
}

printPrompt();
