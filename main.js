        const botMsgContainer = document.querySelector(".bot-inbox");
        const inputField = document.getElementById("data");
        const sendButton = document.getElementById("send-btn");

        // Esta función genera una lista de saludos aleatorios
        function getGreetings() {
        var greetings = ["¡Que alegria de verte!, ¿cómo puedo ayudarte?", "¡Hola! ¿Cómo estás? Si necesitas ayuda con algo, no dudes en preguntar. 😊", "¡A por otra cosa! ¿Qué puedo hacer por ti?", "Hola, ¿Qué puedo hacer por ti?", "¡Hola! ¿En qué puedo ayudarte hoy? 😊", "¡Bienvenido! Me alegra que hayas venido a hablar conmigo. ¿En qué puedo ayudarte hoy? 😊", "Hola, ¿En qué puedo serte útil?"];
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

        // Función para simular el efecto de escritura
        function typeText(element, message, delay) {
            let text = message.split('');
            let i = 0;
            let typingEffect = setInterval(function () {
            if (i < text.length) {
                element.textContent += text[i];
                i++;
            } else {
                clearInterval(typingEffect);
            }
            }, delay);
        }
        
        // Function to display a bot message with typing effect
        function addBotMessageWithTyping(message) {
            const botMsgContainer = document.querySelector(".bot-inbox");
            const botMsg = document.createElement("div");
            botMsg.classList.add("bot-msg", "inbox");
            
            // Create a paragraph element for the message
            const msgParagraph = document.createElement("p");
            botMsg.appendChild(msgParagraph);

            // Add the message container to the bot message container
            botMsgContainer.appendChild(botMsg);
            
            // Trigger the typing effect on the message text
            typeText(msgParagraph, message, 20); // Adjust the speed as needed
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


            if (userMessage.includes("hola") || userMessage.includes("como estas") || userMessage.includes("ayudame") || userMessage.includes("saludos")) {
                addBotMessageWithTyping("¡Hola! ¿En qué puedo ayudarte hoy?");
              } else if (userMessage.includes("computacion") || userMessage.includes("informática")) {
                addBotMessageWithTyping("Claro, con gusto puedo explicarte qué es la informática o la computación.\n\
                                    La informática o computación es el campo que se enfoca en el estudio y uso\n\
                            de computadoras y sistemas informáticos para procesar, almacenar y transmitir\n\
                            información. Incluye programación, hardware, redes, seguridad, inteligencia\n\
                            artificial y más, y es esencial en la vida moderna para la comunicación, la toma\n\
                            de decisiones y la automatización de tareas.");
              } else if (userMessage.includes("programación") || userMessage.includes("codigo")) {
                addBotMessageWithTyping("¡Hablando de programación! ¿Tienes alguna pregunta sobre un lenguaje en particular?");
              } else if (userMessage.includes("python") || userMessage.includes("pyton")) {
                addBotMessageWithTyping("Python es un lenguaje de programación ampliamente utilizado en las aplicaciones web, el desarrollo de software, la ciencia de datos y el machine learning (ML). Los desarrolladores utilizan Python porque es eficiente y fácil de aprender, además de que se puede ejecutar en muchas plataformas diferentes. El software Python se puede descargar gratis, se integra bien a todos los tipos de sistemas y aumenta la velocidad del desarrollo.");
              } else if (userMessage.includes("usar py") || userMessage.includes("se usa py")) {
                addBotMessageWithTyping("Python es usado en prácticamente todos los sectores de la industria y\n\
                                de la ciencia que puedas imaginar, incluyendo:\n\
                                Ciencia de datos, Aprendizaje automático (machine learning),\n\
                                Desarrollo web., Enseñanza de computación y programación.\n\
                                Visión por computadora y procesamiento de imágenes, Desarrollo de videojuegos.");
              } else if (userMessage.includes("iquitos") || userMessage.includes("cuidad iquitos")) {
                addBotMessageWithTyping("Iquitos es una ciudad peruana situada en el noreste del país, en plena Amazonía. Es la capital del departamento de Loreto y la provincia de Maynas. La ciudad es conocida por su ubicación remota y su vibrante cultura amazónica. Iquitos es la ciudad más grande del mundo que no se puede acceder por carretera, lo que significa que solo se puede llegar por avión o barco. La ciudad es un importante centro turístico y comercial, y es conocida por sus mercados flotantes, su arquitectura colonial y sus festivales culturales. Además, Iquitos es el hogar de la Reserva Nacional Pacaya-Samiria, una de las áreas protegidas más grandes del Perú, que alberga una gran variedad de flora y fauna amazónicas. ¿Te gustaría saber algo más sobre Iquitos?");
            } else if (userMessage.includes("inteligencia artificial") || userMessage.includes("IA")) {
                addBotMessageWithTyping("La inteligencia artificial (IA) se refiere a la simulación de procesos de inteligencia humana por parte de las computadoras. Se utiliza en una amplia gama de aplicaciones, como asistentes virtuales, análisis de datos, chatbots, y más. ¿Tienes alguna pregunta específica sobre IA?");
            } else if (userMessage.includes("criptomonedas") || userMessage.includes("bitcoin")) {
                addBotMessageWithTyping("Las criptomonedas, como Bitcoin, son monedas digitales que utilizan la criptografía para garantizar la seguridad y verificar las transacciones. Bitcoin es la criptomoneda más conocida y se utiliza como inversión y método de pago en línea. ¿Te gustaría saber más sobre criptomonedas o cómo funcionan?");
            } else if (userMessage.includes("viajes") || userMessage.includes("destinos turísticos")) {
                addBotMessageWithTyping("¿Estás interesado en viajar? Puedo proporcionarte información sobre destinos turísticos populares, consejos de viaje o cómo planificar tus próximas vacaciones. ¿En qué puedo ayudarte?");
            } else if (userMessage.includes("películas") || userMessage.includes("cine")) {
                addBotMessageWithTyping("El cine es una forma fascinante de arte y entretenimiento. ¿Tienes alguna película favorita o género que te gustaría discutir? ¡Estoy aquí para hablar de cine!");
            } else if (userMessage.includes("música") || userMessage.includes("canciones")) {
                addBotMessageWithTyping("La música es una forma de expresión universal. ¿Tienes algún género musical favorito o artista que te gustaría mencionar? ¡Podemos hablar de música!");
            } else if (userMessage.includes("libros") || userMessage.includes("lectura")) {
                addBotMessageWithTyping("La lectura es una actividad maravillosa. ¿Has leído algún buen libro últimamente o necesitas recomendaciones de lectura?");
              } else {
                addBotMessageWithTyping("No estoy seguro de cómo responder esa pregunta. ¿Tienes algún otro tema en mente que te interese?");
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