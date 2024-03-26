const showHeart = (hearts) => {
    const dom = document.querySelector("#hearts");
    const heart = `<div class="p-3 border-round bg-red-500"></div>`;
    dom.innerHTML = "";
    for (let i = 0; i < hearts; i++) {
        dom.innerHTML += heart;
    }
};

export default showHeart;
