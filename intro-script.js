const html = document.querySelector("html");

html.addEventListener("click", function () {
    html.classList.add("fade-out");

    setTimeout(function () {
        // window.location.replace("/aboutme/index.html");
        window.location.replace("https://33aodan.github.io/aboutme");
    }, 600); 
});
