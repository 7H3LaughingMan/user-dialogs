export default class UserDialogSocket {
    static _socket;

    static initialize() {
        this._socket = socketlib.registerModule("user-dialogs");
        this._socket.register("confirm", this.confirm);
        this._socket.register("form", this.form);
        this._socket.register("prompt", this.prompt);
    }

    static executeAsUser(handler, userId, ...args) {
        if (game.user.isGM) {
            return this._socket.executeAsUser(handler, userId, ...args);
        }
    }

    static async confirm(data = {}, options = {}, renderOptions = {}) {
        return Dialog.wait({
            title: data.title,
            content: data.content,
            focus: true,
            default: "yes",
            close: () => { return null; },
            buttons: {
                yes: {
                    icon: '<i class="fas fa-check"></i>',
                    label: "Yes",
                    callback: () => { return true; }
                },
                no: {
                    icon: '<i class="fas fa-times"></i>',
                    label: "No",
                    callback: () => { return false; }
                }
            }
        }, options, renderOptions);
    }

    static async form(data = {}, options = {}, renderOptions = {}) {
        return Dialog.wait({
            title: data.title,
            content: data.content,
            focus: true,
            default: "submit",
            close: () => { return null; },
            buttons: {
                submit: {
                    label: "Submit",
                    callback: (html) => {
                        var formElement = html[0].querySelector('form');
                        if (formElement !== null) {
                            return new FormDataExtended(formElement).object;
                        }
                        return null;
                    }
                },
                cancel: {
                    label: "Cancel",
                    callback: () => { return false; }
                }
            }
        }, options, renderOptions);
    }

    static async prompt(data = {}, options = {}, renderOptions = {}) {
        return Dialog.wait({
            title: data.title,
            content: data.content,
            focus: true,
            default: "ok",
            close: () => { return null; },
            buttons: {
                ok: {
                    icon: '<i class="fas fa-check"></i>',
                    label: "Okay",
                    callback: () => { return true; }
                }
            }
        }, options, renderOptions);
    }
}