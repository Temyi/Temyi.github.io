const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        // console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        
        } else {
            entry.target.classList.remove('show');
        }
    });
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenImageElements = document.querySelectorAll('.hidden-image');
hiddenImageElements.forEach((el) => observer.observe(el));

document.querySelectorAll(".section-gallery img").forEach(image =>{
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute("src");
    }
});

document.getElementById("popup-image-close").onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none';
};

document.querySelectorAll(".section-videos img").forEach(image =>{
    var youtube = image.getAttribute("youtube")
    image.setAttribute("src", "https://i.ytimg.com/vi/" + youtube + "/hq720.jpg")
    image.onclick = () => {
        document.querySelector('.popup-video').style.display = 'block';
        document.querySelector('.popup-video iframe').setAttribute("src", "https://www.youtube.com/embed/" + youtube)
    }
});

document.getElementById("popup-video-close").onclick = () =>{
    document.querySelector('.popup-video').style.display = 'none';
    document.querySelector('.popup-video iframe').setAttribute("src", "")
};