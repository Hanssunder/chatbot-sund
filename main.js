        const botMsgContainer = document.querySelector(".bot-inbox");
        const inputField = document.getElementById("data");
        const sendButton = document.getElementById("send-btn");

        // Esta función genera una lista de saludos aleatorios
        function getGreetings() {
        var greetings = ["Hola, ¿cómo puedo ayudarte?", "Hola, ¿Qué necesitas?", "Hola, ¿Cómo puedo servirte?", "Hola, ¿Qué puedo hacer por ti?", "Hola, ¿Hay algo en lo que pueda ayudarte?", "Hola, ¿Cómo puedo apoyarte?", "Hola, ¿En qué puedo serte útil?"];
        return greetings;
        }

        // Esta función muestra un saludo aleatorio
        function showGreeting() {
        var greetings = getGreetings();
        var greeting = greetings[Math.floor(Math.random() * greetings.length)];
        document.getElementById("greeting").innerHTML = greeting;
        }

        // Llamamos a la función showGreeting() cuando se carga la página
        window.onload = showGreeting;

        // Function to display a user message
        function addUserMessage(message) {
            const userMsgContainer = document.createElement("div");
            userMsgContainer.classList.add("user-msg", "inbox");
            userMsgContainer.innerHTML = `<div class="msg-header"><p>${message}</p></div>`;
            botMsgContainer.appendChild(userMsgContainer);
            inputField.value = "";
        }

        // Function to display a bot message
        function addBotMessage(message) {
            const botMsgContainer = document.querySelector(".bot-inbox");
            const botMsg = document.createElement("div");
            botMsg.classList.add("bot-msg", "inbox");
            botMsg.innerHTML = `
                <div class="msg-header"><p>${message}</p></div>
            `;
            botMsgContainer.appendChild(botMsg);
        }

        // Function to generate a random welcome message
        function getRandomWelcomeMessage() {
            const randomIndex = Math.floor(Math.random() * welcomeMessages.length);
            return welcomeMessages[randomIndex];
        }

        // Function to handle user input and chatbot response
        function handleUserInput() {
            const userMessage = inputField.value;
            addUserMessage(userMessage);

            const botResponse = getBotResponse(userMessage);
            addBotMessage(botResponse);
        }

        // Function to get chatbot's response based on user message
        function getBotResponse(userMessage) {
            userMessage = userMessage.toLowerCase(); // Convertir el mensaje del usuario a minúsculas
            userMessage = userMessage.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""); // Eliminar signos y puntuaciones

        function generateRandomResponse() {
            const responses = ["¡Hola! ¿En qué puedo ayudarte hoy?"];
            responses.push("¡hola! ¿Cómo te puedo ayudar?");
            responses.push("¡Qué tal! ¿En qué puedo ayudarte?");
            responses.push("¡Hola! ¿Qué puedo hacer por ti?");
            return responses[Math.floor(Math.random() * responses.length)];
            }

            if (userMessage.includes("hola") || userMessage.includes("como estas") || userMessage.includes("ayudame") || userMessage.includes("saludos")) {
            return generateRandomResponse();
            } else if (userMessage.includes("computacion") || userMessage.includes("informática")) {
                return "¡Claro! Estoy aquí para ayudarte con preguntas de informática. ¿En qué específicamente necesitas ayuda?";
            } else if (userMessage.includes("programación") || userMessage.includes("codigo")) {
                return "¡Hablando de programación! ¿Tienes alguna pregunta sobre un lenguaje en particular?";
            } else if (userMessage.includes("python") || userMessage.includes("pyton")) {
                return "Python es un lenguaje de programación ampliamente utilizado en las aplicaciones web, el desarrollo de software, la ciencia de datos y el machine learning (ML). Los desarrolladores utilizan Python porque es eficiente y fácil de aprender, además de que se puede ejecutar en muchas plataformas diferentes. El software Python se puede descargar gratis, se integra bien a todos los tipos de sistemas y aumenta la velocidad del desarrollo.";
            } else if (userMessage.includes("como puedo usar py") || userMessage.includes("se usa py")) {
                return "Python es usado en prácticamente todos los sectores de la industria y\n\
                    de la ciencia que puedas imaginar, incluyendo:\n\
                    Ciencia de datos, Aprendizaje automático (machine learning),\n\
                    Desarrollo web., Enseñanza de computación y programación.\n\
                    Visión por computadora y procesamiento de imágenes, Desarrollo de videojuegos.";
            } else {
                return "No estoy seguro de cómo responder a eso. ¡Pregúntame sobre informática o algo relacionado!";
            }
        }

        // Function to handle user input and bot responses
        function handleUserInput() {
            const userMessage = inputField.value;
            addUserMessage(userMessage);
            const botResponse = getBotResponse(userMessage); // Obtener la respuesta del bot
            addBotMessage(botResponse);
        }



        // Event listener for Enter key press
        inputField.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                handleUserInput();
                inputField.value = ""; // Limpiar el campo de entrada después de enviar
            }
        });

        // Event listener for Send button click
        sendButton.addEventListener("click", function () {
            handleUserInput();
            inputField.value = ""; // Limpiar el campo de entrada después de enviar
        });


        // Event listener for page load
        window.addEventListener("load", function () {
            const welcomeMessage = getRandomWelcomeMessage();
            const botWelcomeDiv = document.querySelector(".bot-inbox .msg-header p");
            botWelcomeDiv.textContent = welcomeMessage;
            addBotMessage(welcomeMessage);
        });