// LOGO OUTLINE ANIMATION

document.querySelectorAll('.cls-1').forEach(path => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
});