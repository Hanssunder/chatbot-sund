<?php

function getRandomGreeting() {
    $greetings = [
        "¡Hola! ¿En qué puedo ayudarte?",
        "¡Bienvenido al chatbot! ¿Cómo puedo asistirte?",
        "Hola, ¿en qué puedo ser de ayuda?",
        "¡Hola! Estoy aquí para responder tus preguntas.",
        "¡Saludos! ¿Cómo puedo ser de servicio?",
        "¡Hola! ¿Qué necesitas saber hoy?",
        "¡Hola! ¿Cómo estás? ¿En qué puedo ayudarte?",
        "¡Bienvenido! ¿Qué puedo hacer por ti?",
        "¡Hola! Espero que estés teniendo un buen día. ¿En qué puedo ayudarte?",
        "¡Hola! Estoy aquí para proporcionarte información. ¿Qué deseas saber?",
        "¡Hola! ¿En qué puedo colaborar contigo?",
        "¡Bienvenido! Si tienes alguna pregunta, ¡estaré encantado de ayudarte!"
    ];
    
    $randomIndex = array_rand($greetings); // Elige un índice aleatorio del array
    return $greetings[$randomIndex]; // Devuelve el saludo aleatorio
}

// Verificar si se solicita un mensaje inicial
if (isset($_GET['initialMessage'])) {
    echo getRandomGreeting(); // Imprime el mensaje inicial aleatorio
    exit; // Detiene la ejecución para que no continúe con el resto del código
}

// conectando a la base de datos
$conn = mysqli_connect("localhost", "root", "", "chatbot") or die("Database Error");

// obteniendo el mensaje del usuario a través de ajax
$getMesg = mysqli_real_escape_string($conn, $_POST['text']);

//comprobando la consulta del usuario a la consulta de la base de datos
$check_data = "SELECT replies FROM chatbot WHERE queries LIKE '%$getMesg%'";
$run_query = mysqli_query($conn, $check_data) or die("Error");

// si la consulta del usuario coincide con la consulta de la base de datos, mostraremos la respuesta; de lo contrario, irá a otra declaración
if (mysqli_num_rows($run_query) > 0) {
    //recuperando la reproducción de la base de datos de acuerdo con la consulta del usuario
    $fetch_data = mysqli_fetch_assoc($run_query);
    //almacenando la respuesta a una variable que enviaremos a ajax
    $replay = $fetch_data['replies'];
    echo $replay;
} else {
    echo "¡Lo siento, no puedo ayudarte con este inconveniente! Favor comunícate con el administrador en el siguiente enlace:
    
    </br><a href='https://www.youtube.com/channel/UCSx6Q_sGCqk2q2xpLHmhrGw'>Contacto</a>";
}
?>

