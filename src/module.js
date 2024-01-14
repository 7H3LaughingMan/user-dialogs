import Socket from "./socket.js";

Hooks.once("socketlib.ready", () => {
    Socket.initialize();

    window.UserDialog = {
        confirm: (userId, ...args) => {
            return Socket.executeAsUser("confirm", userId, ...args);
        },
        form: (userId, ...args) => {
            return Socket.executeAsUser("form", userId, ...args);
        },
        prompt: (userId, ...args) => {
            return Socket.executeAsUser("prompt", userId, ...args);
        }
    }
});