const sideBar = document.querySelector('.side-bar');
const toggleButton = document.querySelector('.sidebar-toggle');
const closeButton = document.querySelector('.close-button');

toggleButton.addEventListener('click', toggleSidebar)
closeButton.addEventListener('click', () => {
    sideBar.classList.remove('show');
})


function toggleSidebar() {
    if (!sideBar.classList.contains('show')) {
        sideBar.classList.add('show');
    } 
}