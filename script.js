const videoContainers = document.querySelectorAll('.video-container');
let currentVideoIndex = 0;

function playVideo(index) {
    if (index >= 0 && index < videoContainers.length) {
        videoContainers[currentVideoIndex].querySelector('video').pause();
        videoContainers[currentVideoIndex].classList.remove('active');

        currentVideoIndex = index;

        videoContainers[currentVideoIndex].querySelector('video').play();
        videoContainers[currentVideoIndex].classList.add('active');
    }
}

// Auto play the first video
playVideo(currentVideoIndex);

// Add event listeners to switch between videos
videoContainers.forEach((container, index) => {
    container.addEventListener('click', () => playVideo(index));
});
