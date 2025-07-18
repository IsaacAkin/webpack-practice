import './styles.css';
import { loadMenu } from './menu';
import { pageLoad } from './page-load';
import { loadStaff } from './staff';

function tabSwitcher() {
    const content = document.querySelector('#content');
    const homeBtn = document.querySelector('.home');
    const menuBtn = document.querySelector('.menu');
    const contactBtn = document.querySelector('.staff');

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
        loadStaff();
    });
}

pageLoad();
tabSwitcher();
console.log('We are so back');