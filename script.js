const introText= `Greetings, I'm Rifat Al Jubayer, a passionate self-taught Hacker.
  
   $/Education/:
   I'm a Computer Science student. I enjoy studying programming languages. In fact, anything related to the software 
   development field attracts me. My passion for understanding technology and its applications in creating secure and 
   innovative solutions fuels my journey.

   $/Career Experience/:
   I have helped find and exploit over 300 security vulnerabilities across 70+ web applications for Internet 
   giants like Apple, Microsoft, etc.
   
   $/favorite quote/: 
   “The more I learn, the more I realize how much I don't know.” `;

const contentEl = document.querySelector('.content');
const cursorEl = document.querySelector('.cursor');

let i = 0;

function typeWriter() {
  if (i < introText.length) {
    contentEl.innerHTML += introText.charAt(i);
    i++;
    setTimeout(typeWriter, 17);
  } else {
    cursorEl.style.display = 'none';
  }
}

typeWriter();
