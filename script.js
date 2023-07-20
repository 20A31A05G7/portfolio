let sections = document.querySelectorAll('section');
let navLinks;

if(screen.width>=600){
    navLinks = document.querySelectorAll('.navbar a');
}
else{
    navLinks = document.querySelectorAll('.dropdown-content a');
}

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 15;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

let myimg= document.querySelector('.myimg img');
