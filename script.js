document.addEventListener("DOMContentLoaded", function() {
    var hb = document.querySelector(".hb");
    var cluz = document.querySelector(".cluz");
    var menuDrop = document.querySelector(".menu-drop");

    hb.addEventListener("click", function() {
        menuDrop.style.display = "block";
        cluz.style.display = "inline"; // Show the close icon
        hb.style.display = "none"; // Hide the hamburger icon
    });

    cluz.addEventListener("click", function() {
        menuDrop.style.display = "none";
        cluz.style.display = "none"; // Hide the close icon
        hb.style.display = "inline"; // Show the hamburger icon
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var contentElement = document.getElementById("content");
    var text = contentElement.textContent.trim();
    contentElement.textContent = ""; // Clear the content

    function typeWriterEffect(element, text, speed) {
        var index = 0;
        var textLength = text.length;

        function type() {
            if (index < textLength) {
                element.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, speed);
            } else {
                setTimeout(erase, 1000); // Wait for 1 second after typing completes
            }
        }

        function erase() {
            if (index > 0) {
                element.innerHTML = text.substring(0, index - 1);
                index--;
                setTimeout(erase, speed / 2); // Erase speed half of typing speed
            } else {
                setTimeout(type, 500); // Wait for 0.5 second after erasing completes
            }
        }

        type(); // Start typing
    }

    // Start type writer effect for the content
    typeWriterEffect(contentElement, text, 100);
});

const htmlProgress = document.getElementById('html-progress');
const cssProgress = document.getElementById('css-progress');
const jsProgress = document.getElementById('js-progress');
const englishProgress = document.getElementById('english-progress');

htmlProgress.style.width = '70%';
cssProgress.style.width = '75%';
jsProgress.style.width = '85%';
englishProgress.style.width = '80%';
