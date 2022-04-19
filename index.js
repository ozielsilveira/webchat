document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", (e) => {
        if (e.code === "Enter") {
            let input = inputField.value;
            inputField.value = "";
            addMessage(input);
        }
    });
});

function addMessage(input) {
    const messagesContainer = document.getElementById("messages");

    
    if (document.getElementById("tipoUsuario").value == "cliente") {
        let clientDiv = document.createElement("div");
        clientDiv.id = "client"
        clientDiv.className = "client response"
        clientDiv.append(input)
        messagesContainer.appendChild(clientDiv);
    }
    else {
        let clerkDiv = document.createElement("div");
        clerkDiv.id = "clerk"
        clerkDiv.className = "clerk response"
        clerkDiv.append(input)
        messagesContainer.appendChild(clerkDiv);
    }
}