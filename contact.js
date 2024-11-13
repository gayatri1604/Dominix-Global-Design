// JavaScript to toggle selection on interest tags
document.querySelectorAll('.interests span').forEach(tag => {
    tag.addEventListener('click', () => {
        tag.classList.toggle('selected');
    });
});
