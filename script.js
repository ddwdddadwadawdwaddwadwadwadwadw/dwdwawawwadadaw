const typingEffectElement = document.querySelector('.typing-effect');
const aboutSection = document.querySelector('.about-section');
const typingText = `you’ve made a huge mistake. you probably don’t even understand the basics of cybersecurity. i dual-boot linux so i can run my own scripts, and trust me, i know exactly what i’m doing. by responding to my comment without masking your connection, you’ve exposed yourself.
i’m already tracking your ip. that’s internet protocol, by the way, in case you didn’t know. once i have your ip, i can easily infiltrate your system, install a backdoor, and get full access to your machine. your email? i’ve got that too
don’t even think about turning off your computer. i’ve routed a malware payload to your power system that’ll allow me to turn it on anytime i want. i could easily access your credit card information as well—better cancel those cards now.
if i wanted, i could release all your personal details onto my secure irc channel or a doxbin-like community, and trust me, that could attract the wrong attention.`;

let index = 0;
function type() {
    if (index < typingText.length) {
        typingEffectElement.innerHTML += typingText.charAt(index);
        index++;
        setTimeout(type, 50);
    }
}

function adjustFontSize() {
    const containerHeight = aboutSection.offsetHeight;
    const contentHeight = typingEffectElement.scrollHeight;

    if (contentHeight > containerHeight) {
        let newFontSize = parseFloat(window.getComputedStyle(typingEffectElement).fontSize);
        newFontSize -= 1;
        typingEffectElement.style.fontSize = `${newFontSize}px`;
    }
}

type();
setInterval(adjustFontSize, 200);
