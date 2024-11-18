function changeAboutMe(){
     const aboutMeTexts = ['Web Developer', 'Responsive Designer', 'Front-end Developer' ];
     const typingSpeed = 100;
     const erasingSpeed = 50;
     const pauseTime = 1500;
     const aboutMe = document.querySelector('.about-me');

     let textIndex = 0;
     let charIndex = 0;
     let isErasing = false;

     function type() {
        const currentText = aboutMeTexts[textIndex];
        //typing the text
        if(!isErasing && charIndex < currentText.length){
            aboutMe.textContent += currentText[charIndex];
            charIndex++;
            setTimeout(type, typingSpeed);
        }
        //erasing the text
        else if(isErasing && charIndex > 0){
            aboutMe.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, erasingSpeed);
        }
        //switching to the next text
        else{
            isErasing = !isErasing;
            if(!isErasing){
                textIndex = (textIndex + 1) % aboutMeTexts.length;
            }
            setTimeout(type, pauseTime);
        }
     }
     type();
}

     document.addEventListener('DOMContentLoaded',function(){
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        const body = document.body;

        darkModeToggle.addEventListener('click',function(){
            body.classList.toggle('dark-mode');
            const currentMode = body.classList.contains('dark-mode') ? 'Dark' : 'Light';
            darkModeToggle.querySelector('i').classList.toggle('fa-sun');
            darkModeToggle.querySelector('i').classList.toggle('fa-moon');
            darkModeToggle.querySelector('i').classList.toggle('light-mode');
        });
            
     })

changeAboutMe();


document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const progressBar = entry.target;
            const progress = progressBar.dataset.progress;

            if (entry.isIntersecting) {
                // Set the --progress CSS variable and add the animated class to start animation
                progressBar.style.setProperty('--progress', progress);
                progressBar.classList.add('animated');
            } else {
                // Remove animated class and reset --progress to 0% when leaving viewport
                progressBar.classList.remove('animated');
                progressBar.style.setProperty('--progress', '0%');
            }
        });
    });

    // Select all .bar elements and observe them
    const skillBars = document.querySelectorAll('.skill .bar');
    skillBars.forEach(skillBar => observer.observe(skillBar));
});
