const slider = document.querySelector(".experiences-gallery")
let galleryIndex = 0;

function delay(time){
    return new Promise((resolve) => setTimeout(resolve,time))
}

function Slide(image, title, desc) {
    this.image = image;
    this.title = title;
    this.desc = desc;
}

let Slides = [
    new Slide("assets/car.jpg", "Title 1", "desc 1"),
    new Slide("assets/gaming hub.png", "Title 2", "desc 2"),
    new Slide("assets/portfolio.png", "Title 3", "desc 3"),
];

async function updateSlide(){
    slider.style.opacity = 0;
    await delay(1000);
    slider.querySelector("img").src = Slides[galleryIndex].image;
    slider.querySelector(".experiences-text h1").innerHTML = Slides[galleryIndex].title;
    slider.querySelector(".experiences-text p").innerHTML = Slides[galleryIndex].desc;
    await delay(500);
    slider.style.opacity = 1;
}


document.querySelector("#previous").addEventListener("click", () => {
    galleryIndex--;
    if (galleryIndex == -1) {
        galleryIndex = Slides.length - 1;
    }

    updateSlide()
})

document.querySelector("#next").addEventListener("click", () => {
    galleryIndex++;
    if (galleryIndex == Slides.length) {
        galleryIndex = 0;
    }
    updateSlide()
})