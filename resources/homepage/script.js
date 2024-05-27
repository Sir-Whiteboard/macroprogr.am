document.addEventListener('DOMContentLoaded', () => {
    const commandInput = document.getElementById('commandInput');
    const outputDiv = document.getElementById('output');

    const commands = {
        help: 'Available commands: help, directory, hello, date, clear',
        hello: 'Hello, world!',
        date: new Date().toString(),
        directory: '<a href="/piracy.html">/piracy</a>\n<a href="/ming.html">/ming</a>',
        clear: ''
    };

    const welcomeMessage = `You find yourself somewhere, yet nowhere at the same time.\nType 'directory' to view all accessible pages.\nType 'help' to view available commands.\n`;

    // Display welcome message
    outputDiv.innerHTML += `${welcomeMessage}\n`;

    commandInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const command = commandInput.value.trim().toLowerCase();
            if (command in commands) {
                if (command === 'clear') {
                    outputDiv.innerHTML = '';
                    outputDiv.innerHTML += `${welcomeMessage}\n`;
                } else {
                    outputDiv.innerHTML += `$ ${command}\n${commands[command]}\n\n`;
                }
            } else {
                outputDiv.innerHTML += `$ ${command}\nCommand not found. Type 'help' for a list of commands.\n\n`;
            }
            commandInput.value = '';
            outputDiv.scrollTop = outputDiv.scrollHeight;
        }
    });
});
