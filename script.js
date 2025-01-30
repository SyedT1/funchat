$(document).ready(function () {
    const chatWindow = $('#chat-window');
    const chatDate = $('#current-date');
    chatDate.text(new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
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

    function computer_response(text) {
        // used this https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
        const words = text.trim().split(/\s+/);
        if(words.length > 10){
            return `[Computer]: The number of words in the your text is: ${words.length}. You talk too much`
        }
        else{
            return `[Computer]: The number of words you used is fine for me. But, I cant say much. This developer has worked on me in the last hour`
        }
    }

    $('#send-button').click(function () {
        const my_input = $('#message-input').val();
        if (my_input.trim() !== "") {
            addMessage(`[Me]: ${my_input}`, 'user');
            $('#message-input').val("");
            setTimeout(() => {
                addMessage(computer_response(my_input), 'computer');
            }, 2000);
        }
    });

    $('#message-input').keypress(function (e) {
        if (e.which === 13) {
        // alert($('#message-input').val());

            $('#send-button').click();
        }
    });
});
