$(document).ready(function () {
    const chatWindow = $('#chat-window');

    function addMessage(text, type) {
        const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const messageBubble = $(`
            <div class="message ${type}">
                ${text}
                <span class="timestamp">${timestamp}</span>
            </div>
        `);
        chatWindow.append(messageBubble);
        chatWindow.scrollTop(chatWindow[0].scrollHeight);
    }

    function getRandomBotMessage() {
        const botMessages = [
            "Hello! How can I assist you today?",
            "That's interesting! Tell me more.",
            "I'm here to help.",
            "Can you elaborate on that?",
            "Let's keep the conversation going!"
        ];
        return botMessages[Math.floor(Math.random() * botMessages.length)];
    }

    $('#send-button').click(function () {
        const userInput = $('#message-input').val();
        if (userInput.trim() !== "") {
            addMessage(userInput, 'user');
            $('#message-input').val("");
            setTimeout(() => {
                addMessage(getRandomBotMessage(), 'bot');
            }, 1000);
        }
    });

    $('#message-input').keypress(function (e) {
        if (e.which === 13) {
            $('#send-button').click();
        }
    });
});
