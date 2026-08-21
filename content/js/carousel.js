let currentStep = 0;

const image = document.getElementById("guide-image");
const title = document.getElementById("guide-title");
const description = document.getElementById("guide-description");

const currentStepElement =
    document.getElementById("current-step");

const totalStepsElement =
    document.getElementById("total-steps");

const dotsContainer =
    document.getElementById("carousel-dots");

const previousButton =
    document.querySelector(".previous");

const nextButton =
    document.querySelector(".next");


totalStepsElement.textContent = guideSteps.length;


/*
 * Create the navigation dots
 */

guideSteps.forEach((step, index) => {

    const dot = document.createElement("button");

    dot.classList.add("carousel-dot");

    dot.addEventListener("click", () => {
        currentStep = index;
        updateCarousel();
    });

    dotsContainer.appendChild(dot);
});


function updateCarousel() {

    const step = guideSteps[currentStep];

    image.src = step.image;
    image.alt = step.title;

    title.textContent = step.title;

    description.textContent = step.description;

    currentStepElement.textContent =
        currentStep + 1;


    /*
     * Update navigation dots
     */

    const dots =
        document.querySelectorAll(".carousel-dot");

    dots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === currentStep
        );

    });
}


previousButton.addEventListener("click", () => {

    currentStep--;

    if (currentStep < 0) {
        currentStep = guideSteps.length - 1;
    }

    updateCarousel();

});


nextButton.addEventListener("click", () => {

    currentStep++;

    if (currentStep >= guideSteps.length) {
        currentStep = 0;
    }

    updateCarousel();

});


updateCarousel();