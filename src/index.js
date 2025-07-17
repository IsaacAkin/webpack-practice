import './styles.css';
import { loadMenu } from './menu';
import { pageLoad } from './page-load';
import { loadContact } from './contact';

function tabSwitcher() {
    const content = document.querySelector('#content');
    const homeBtn = document.querySelector('.home');
    const menuBtn = document.querySelector('.menu');
    const contactBtn = document.querySelector('.contact');

    homeBtn.addEventListener('click', () => {
        content.textContent = '';
        pageLoad();
    });
    
    menuBtn.addEventListener('click', () => {
        content.textContent = '';
        loadMenu();
    });
    
    contactBtn.addEventListener('click', () => {
        content.textContent = '';
        loadContact();
    });
}

pageLoad();
tabSwitcher();
console.log('We are so back');