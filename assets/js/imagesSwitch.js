const filterBlock = document.querySelector('.nav-list');
const filterBtn = [...document.querySelectorAll('.nav-item')];
const mainImage = document.querySelector('.main-image');
const imagesToggle = (event) => {
    if(event.target.hasAttribute('data-sounds')){
        mainImage.setAttribute('src', `assets/images/${event.target.dataset.sounds}.jpg`)
    
    }
    toggleActiveFilterBtn(event);
}

const toggleActiveFilterBtn = (event) =>{
    filterBtn.forEach((elem) => {
        elem.classList.remove('active-nav-item');
    });
    event.target.classList.add('active-nav-item')
}

export {filterBlock, imagesToggle, filterBtn};
