# Foundry VTT - User Dialogs

A module that allows GMs to send custom dialogs to an individual user via macros.

## Example Macro

```javascript
var dialogResult = await UserDialog.confirm('eFVDLdkyWI6HzxlE', {title: "Confirmation", content: "Please confirm if your character touches the Sphere of Annihilation?"});

if (dialogResult === true) {
   Dialog.prompt({content: "The player has touched the Sphere of Annihiliation."});
} else if (dialogResult === false) {
   Dialog.prompt({content: "The player has decided not to touch the Sphere of Annihiliation."});
} else {
   Dialog.prompt({content: "The player close the confirmation dialog."});
}
```

## Documentation

### UserDialog.confirm
```javascript
UserDialog.confirm(userId, data, options, renderOptions);
```

Call `confirm` to send a confirmation dialog to a specific user. This dialog will have a Yes button and a No button.

- **userId** the id of the user that will receive the confirmation dialog.
- **data** the necessary data for the dialog, can contain the below.
  - **title** a string that contains the title for the dialog.
  - **content** a string that contains the content for the dialog. Can be plain text or HTML.
- **options** contains the dialog rendering options, see (Application)[https://foundryvtt.com/api/classes/client.Application.html].
- **renderOptions** additional rendering options, see (Dialog.render)[https://foundryvtt.com/api/classes/client.Dialog.html#render].

**Return Value**: The promise that this function returns will resolve once the user has either clicked on a button, or close the dialog. It will return `true` if they click on Yes, `false` if they click on No, and `null` if they close the dialog.

### UserDialog.form
```javascript
UserDialog.form(userId, data, options, renderOptions);
```

Call `form` to send a custom form dialog to a specific user. This dialog will have a Submit button and a Cancel button.

- **userId** the id of the user that will receive the confirmation dialog.
- **data** the necessary data for the dialog, can contain the below.
  - **title** a string that contains the title for the dialog.
  - **content** a string that contains the content for the dialog. This should contain HTML with a `<form>` element. Any input elements should contain a unique name attribute which will be used for the return value.
- **options** contains the dialog rendering options, see (Application)[https://foundryvtt.com/api/classes/client.Application.html].
- **renderOptions** additional rendering options, see (Dialog.render)[https://foundryvtt.com/api/classes/client.Dialog.html#render].

**Return Value**: The promise that this function returns will resolve once the user has either clicked on a button, or close the dialog. If the user clicks on Submit it will return an object that contains properties with the same name as the input's name attribute containing a value depending on what type of input element was used. If the user clicks on Cancel it will return `false` and if they close the dialog it will return `null`.

### UserDialog.prompt
```javascript
UserDialog.prompt(userId, data, options, renderOptions);
```

Call `prompt` to send a prompt dialog to a specific user. This dialog will have an Okay button.

- **userId** the id of the user that will receive the confirmation dialog.
- **data** the necessary data for the dialog, can contain the below.
  - **title** a string that contains the title for the dialog.
  - **content** a string that contains the content for the dialog. Can be plain text or HTML.
- **options** contains the dialog rendering options, see (Application)[https://foundryvtt.com/api/classes/client.Application.html].
- **renderOptions** additional rendering options, see (Dialog.render)[https://foundryvtt.com/api/classes/client.Dialog.html#render].

**Return Value**: The promise that this function returns will resolve once the user has either clicked on a button, or close the dialog. It will return `true` if they click on Okay and `null` if they close the dialog.