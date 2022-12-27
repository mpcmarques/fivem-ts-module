/**
 * Sends a message to the UI in React.js
 */
const sendReactMessage = (action: string, data: object | boolean | string | number) => {
    SendNuiMessage(
        JSON.stringify({
            action: action,
            data: data,
        })
    );
};

/**
 * Shows UI
 */
const showUi = (uiVisibilityName: string) => {
    SetNuiFocus(true, true);
    sendReactMessage(uiVisibilityName, true);
}

/**
 * Hides UI
 */
const hideUi = (uiVisibilityName: string) => {
    SetNuiFocus(false, false);
    sendReactMessage(uiVisibilityName, false);
}
