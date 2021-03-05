$(function getContainerHeightbyId(id, document){
    var h = document.querySelector(id).getBoundingClientRect.height;
    return h;
});