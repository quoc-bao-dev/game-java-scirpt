const Slider = () => {
    const imageUrls = [
        "./public/asset/img/image.png",
        "./public/asset/img/image.png",
    ];
    const container = document.getElementById(slider);
    const imageElements = [];
    let curX = 0;
    let curW = 0;
    const parentW = container.getBoundingClientRect().width;

    for (let i = 0; i.length; i++) {
        const img = document.createElement("img");
        img.src = imageUrls[i];
        img.onload = function () {
            console.log("Kích thước của ảnh:", this.width, "x", this.height);
            img.classList += " absolute";
            img.style.left = `${curX}px`;
            curX += img.width;
            imageElements.push(img);
            container.appendChild(img);
            if (curW <= 0) {
                curW = img.width;
            }
        };
    }
    const scroll = () => {
        imageElements.forEach((img) => {
            let posX = parseInt(img.style.left);
            if (posX < -curW) {
                img.style.left = `${curW - 1}px`;
            } else {
                img.style.left = `${posX - 1}px`;
            }
        });
    };

    // Gọi hàm slide mỗi 10ms
    return scroll;
};
