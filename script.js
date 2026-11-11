const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach((button) => {
    const answerId = button.getAttribute("aria-controls");
    const answer = document.getElementById(answerId);
    const icon = button.querySelector(".faq-icon");

    // Start each answer closed.
    button.setAttribute("aria-expanded", "false");
    answer.hidden = true;
    icon.textContent = "+";

    button.addEventListener("click", () => {
        const isExpanded = button.getAttribute("aria-expanded") === "true";

        button.setAttribute("aria-expanded", String(!isExpanded));
        answer.hidden = isExpanded;
        icon.textContent = isExpanded ? "+" : "−";
    });
});

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-navigation");

function closeMenu() {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    menuButton.textContent = "Menu";
    navigation.classList.remove("is-open");
}

menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Open navigation" : "Close navigation"
    );
    menuButton.textContent = isOpen ? "Menu" : "Close";
    navigation.classList.toggle("is-open", !isOpen);
});

navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
    if (
        event.key === "Escape" &&
        menuButton.getAttribute("aria-expanded") === "true"
    ) {
        closeMenu();
        menuButton.focus();
    }
});

const mobileLayout = window.matchMedia("(max-width: 700px)");

mobileLayout.addEventListener("change", closeMenu);

// Enable the collapsible layout after its controls are ready.
document.documentElement.classList.add("menu-ready");