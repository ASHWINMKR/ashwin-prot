function googleTranslateElementInit(){
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
    console.log('google_translate_element');
}
if(userinput == "ashwin"){
    alert(userinput)
}



document.addEventListener("DOMContentLoaded", function () {
    const lazyElements = document.querySelectorAll(".lazy-load");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    });

    lazyElements.forEach(element => {
        observer.observe(element);
    });
});

window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-HJRVPF9GYJ');


    // function googleTranslateElementInit() {
    //     new google.translate.TranslateElement({
    //       pageLanguage: 'en',
    //       layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    //     }, 'google_translate_element');
    //   }