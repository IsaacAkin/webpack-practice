import seventhHeavenImage from './images/Seventh_Heaven_from_FFVII_Remake.png';

export function pageLoad() {
    const header = document.createElement('h1');
    const headerDiv = document.createElement('div');
    const image = document.createElement('img');
    const headline = document.createElement('p');
    const description = document.createElement('p');
    const content = document.querySelector('#content');
    const infoContainer = document.createElement('div');

    header.textContent = 'Seventh Heaven';
    headerDiv.className = 'h1-container';
    headerDiv.appendChild(header);

    
    headline.textContent = 'Open 11am - Midnight';
    image.src = seventhHeavenImage;
    image.alt = 'Image of Seventh Heaven from FF7 remake';
    description.textContent = "A favorite after-work hangout for laborers, Tifa's coctails and cooking are big hits among the neighborhood people. After hours, though, the place turns into a hideout for the anti-Shinra militant group Avalanche.";

    infoContainer.className = 'info-div';
    infoContainer.appendChild(headline);
    infoContainer.appendChild(description);
    infoContainer.appendChild(image);


    content.appendChild(headerDiv);
    content.appendChild(infoContainer);
}