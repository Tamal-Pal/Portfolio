let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    document.body.classList.toggle('active');
}

window.onscroll = () =>{
    if(window.innerWidth < 991){
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
        document.body.classList.remove('active');
    }

    document.querySelectorAll('section').forEach(sec =>{

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            document.querySelectorAll('.header .navbar a').forEach(links =>{
                links.classList.remove('active');
                document.querySelector('.header .navbar a[href*='+ id +']').classList.add('active')
            });

            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }

    });

    // animation on footer
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}


// document.getElementById("myForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form submission

//     // Redirect to thanks.html
//     window.location.href = "thanks.html";
// });

