export const keyboard = ({ enterKey, spaceKey }) => {
    document.addEventListener("keydown", (e) => {
        const key = e.keyCode;
        switch (key) {
            case 13:
                enterKey();
                break;
            case 32:
                spaceKey();
                break;
            default:
                break;
        }
    });
};
