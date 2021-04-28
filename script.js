//References in DOM
const image = document.querySelector(".image");
const loading = document.querySelector(".loading");

let time = 0;

//This will continue to call the blue function until the desired threshold is met
let blurInterval = setInterval(blur, 100);

/**
 * This function calculates blue value in intervals for 100ms.
 * It maps blur value to loading and sets opacity in range of 0 to 1.
 */
function blur() {
    time += 100;
    loading.innerHTML = `${time / 50}%`;
    loading.style.opacity = `${Math.floor(100 - time / 50)}%`;

    if (100 - time / 50 <= 0) {
        clearInterval(blurInterval);
    }

    image.style.filter = `blur(${100 - time / 50}px)`;
}
