let show = document.getElementsByClassName('show-menu')[0];
// let modal = document.getElementsByClassName('dropdown-menu')[0];
let close = document.getElementsByClassName('close-menu')[0];
let menuContent = document.getElementsByClassName('menu-content')[0];
let body = document.getElementsByTagName('body')[0];
let hideDropdown = document.getElementById('dropdown-hide');

show.addEventListener('click', () => {
    hideDropdown.classList.add('dropdown-menu');
    // modal.style.display = 'block';
    body.style.overflow = 'hidden'; // Prevent scrolling when menu is opened.
    
});

close.addEventListener('click', () => {
    hideDropdown.classList.remove('dropdown-menu');
    // modal.style.display = 'none';
    body.style.overflow = 'auto';
})


let showModal = document.getElementsByClassName('show-modal');
let modal = document.getElementById('modal');
let closeModal = document.getElementById('close');
let modalContent  = document.getElementById('modal-content');
console.log(showModal);
/**  Get the image tag inside modalContent */
let modalImageTag = modalContent.getElementsByTagName('img')[0];

/* Show modal when the show modal button is clicked*/

/* Add event listener to each element with the class show-modal */
for(let i = 0; i < showModal.length; i++) {
    showModal[i].addEventListener('click', () => {
      
        /** Get the image source */
        let imageSource = showModal[i].getAttribute('src');
        // console.log(modalContent);

        /** Add the source of the modal's content image to the image being clicked */
        modalImageTag.setAttribute('src', imageSource);
        // console.log(modalImageTag);

        // console.log(modalContent);

        modal.style.display = 'block';
        
    });
}

/* Close the modal when the x button is clicked */
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    console.log('close button called');
});

/* Close modal when anywhere outside the modal is clicked*/
window.onclick = (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
};

// modalContent.addEventListener('click', () => {
//     modal.style.display = 'block';
//     modal.style.opacity = '1';
//     console.log('modal content');
// });
