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

    let hours = document.createElement("div")
    const date = new Date();
    const datenow = date.getHours().toString().padStart(2,"0") + ':' + date.getMinutes().toString().padStart(2,"0"); 
    
    if (document.getElementById("tipoUsuario").value == "client") {
        
        let clientDiv = document.createElement("div");        
        clientDiv.id = "client"
        clientDiv.className = "client response"
        clientDiv.append(input)           
        messagesContainer.appendChild(clientDiv);

        hours.id = "clientHours"
        hours.className = "clientHours response"
        hours.append(datenow)
        messagesContainer.appendChild(hours);
    }
    else {
        let clerkDiv = document.createElement("div");
        clerkDiv.id = "clerk"
        clerkDiv.className = "clerk response"
        clerkDiv.append(input)

        hours.id = "clerkHours"
        hours.className = "clerkHours response"
        hours.append(datenow)   

        messagesContainer.appendChild(clerkDiv);
        messagesContainer.appendChild(hours);
    }
}