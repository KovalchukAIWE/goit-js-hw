'use strict';

const getTitles = () => {
    const titles = [...document.querySelectorAll('.item')];

    titles.forEach(block => {
        const name = block.querySelector(".item > h2").textContent;
        
    })
}

