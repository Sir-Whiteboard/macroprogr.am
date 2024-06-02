document.addEventListener('DOMContentLoaded', () => {
    const commandInput = document.getElementById('commandInput');
    const outputDiv = document.getElementById('output');

    const commands = {
        //Real commands
        help: 'Available commands: help, directory, about, hello, date, clear',
        hello: 'Hello, world!',
        date: new Date().toString(),
        directory: '<a href="/piracy.html">/piracy</a>\n<a href="/flood.html">/flood</a>\n<a href="/about.html">/about</a>',
        piracy: '',
        flood: '',
        ming: '',
        about: '',
        clear: '',

        //Fun commands
        octagon: '<a href="https://www.youtube.com/watch?v=ddWJatRxfz8" target="_blank"rel="noopener noreferrer">🛑</a>',
        zork: "Oh hey there's a Zork command here"
    };

    const welcomeMessage = `You find yourself somewhere, yet nowhere at the same time.\nType 'directory' to view all accessible pages.\nType 'help' to view available commands.\nType 'about' to jump to the about page.\nPretend the background is high quality for the time being.\n`;

    // Display welcome message
    outputDiv.innerHTML += `${welcomeMessage}\n`;

    commandInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const command = commandInput.value.trim().toLowerCase();
            // Goofy ass yandere dev programming
            if (command in commands) {
                if (command === 'clear') {
                    outputDiv.innerHTML = '';
                    outputDiv.innerHTML += `${welcomeMessage}\n`;
                } else if (command === 'piracy' || command === 'flood' || command === 'ming' || command === 'about') {
                    window.location.href = "/" + command + ".html"
                } else if (command === 'zork') {
                    window.location = "https://archive.org/details/msdos_Zork_I_-_The_Great_Underground_Empire_1980"
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
