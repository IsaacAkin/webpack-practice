import groupStatus from './images/ff7_og_group_status.png';

export function loadStaff() {
    const content = document.querySelector('#content');
    const header = document.createElement('h1');
    const headerDiv = document.createElement('div');
    const statusImage = document.createElement('img');
    
    header.textContent = 'Contact Us';
    headerDiv.className = 'h1-container';
    headerDiv.appendChild(header);
    content.appendChild(headerDiv);

    statusImage.src = groupStatus;
    statusImage.className = 'status-image';
    content.appendChild(statusImage);
}