function textToMorse() {
    const inputText = document.getElementById('inputText').value.toUpperCase();
    const morseCode = textToMorseCode(inputText);
    const label = document.querySelector('.labelResult');
    let output = document.getElementById('outputText');
    output.value = morseCode;

    output.focus();
    output.style.pointerEvents = 'none';
    label.style.transform = 'translateY(-35px)';

}

document.querySelector('#clear').addEventListener('click',clear);


function clear(){
    const output = document.getElementById('outputText');
    const label = document.querySelector('.labelResult');
    const inputMorse = document.getElementById('inputText')
    
    
    output.value = '';
    inputMorse.value = '';
    output.style.pointerEvents = 'none';
    label.style.transform = 'translateY(0px)';


}

function morseToText() {
    const inputMorse = document.getElementById('inputText').value;
    const plainText = morseCodeToText(inputMorse);
    const label = document.querySelector('.labelResult');


    let output = document.getElementById('outputText');
    output.value = plainText;

    output.focus();
    output.style.pointerEvents = 'none';
    label.style.transform = 'translateY(-35px)';
}

function textToMorseCode(text) {
    const morseCodeMap = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
        'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
        'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
        '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
        '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...',
        ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.'
    };

    return text.split('').map(char => {
        if (char === ' ') {
            return ' ';
        }
        return morseCodeMap[char] || '';
    }).join(' ');
}

function morseCodeToText(morseCode) {
    const morseCodeMap = {
        '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
        '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
        '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y', '--..': 'Z',
        '-----': '0', '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9',
        '.-.-.-': '.', '--..--': ',', '..--..': '?', '.----.': "'", '-.-.--': '!', '-..-.': '/', '-.--.': '(', '-.--.-': ')', '.-...': '&',
        '---...': ':', '-.-.-.': ';', '-...-': '=', '.-.-.': '+', '-....-': '-', '..--.-': '_', '.-..-.': '"', '...-..-': '$', '.--.-.': '@'
    };

    return morseCode.split('   ').map(word => {
        return word.split(' ').map(char => morseCodeMap[char] || '').join('');
    }).join(' ');
}



let angle = 0;
const rotationSpeed = 0.02;
const circleElements = document.querySelectorAll('.circle');

function moveCircles() {
    circleElements.forEach((circle, index) => {
        const radius = index === 0 ? 50 : 90;
        const x = 0 + radius * Math.cos(angle);
        const y = -50 + radius * Math.sin(angle);

        circle.style.transform = `translate(${x}%, ${y}%)`;
    });

    angle += rotationSpeed;
}

setInterval(moveCircles, 16);

