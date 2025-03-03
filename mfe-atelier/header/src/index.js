const createHeader = () => {
    const header = document.createElement('h1');
    header.innerText = 'Micro Frontend Header';
    header.style.color = 'blue';
    return header;
};

// Exporter le Header pour qu'il soit utilisable par le Shell
export default createHeader;
