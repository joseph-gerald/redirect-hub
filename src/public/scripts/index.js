let sectionIndex = 0;

const sections = document.querySelectorAll('.section');
const dots = document.querySelectorAll('.pagination-dot');
let canScroll = true;

function doScroll() {
    if (screen.width < 1024) return;
    sectionIndex = Math.min(Math.max(sectionIndex, 0), sections.length - 1);
    sections[sectionIndex].scrollIntoView({ behavior: 'smooth' });

    dots.forEach((dot, index) => {
        if (index !== sectionIndex) dot.classList.remove('active');
    });

    dots[sectionIndex].classList.add('active');
}

function scrollToNextSection(down) {
    if (canScroll) {
        sectionIndex += down ? 1 : -1;
        canScroll = false;
        setTimeout(() => canScroll = true, 750);
    }

    doScroll();
}

sections.forEach((region) => {
    region.addEventListener('wheel', (event) => {
        event.preventDefault();
        if (!canScroll) return;
        scrollToNextSection(event.wheelDeltaY < 0);
    }, { passive: false }); // Add passive event listener
});