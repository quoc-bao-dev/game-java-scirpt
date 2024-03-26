const User = (() => {
    const state = {
        score: 0,
        userName: "",
    };
    const setUserName = (name) => {
        state.userName = name;
    };
    const getUserName = () => {
        return state.userName;
    };
    const init = () => {
        const first = state.userName[0];
        document.querySelector("#avatar").innerHTML = first;
        document.querySelector("#user-name").innerHTML = state.userName;
    };
    return {
        init,
        setUserName,
        getUserName,
    };
})();

export default User;
