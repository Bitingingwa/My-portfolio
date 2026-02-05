function toggleTheme() {
    document.body.classList.toggle("dark");
}

let currentLang = "en";

function toggleLanguage() {
    currentLang = currentLang === "en" ? "fr" : "en";

    document.querySelectorAll("[data-en]").forEach(el => {
        el.textContent = el.dataset[currentLang];
    });
}
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});

const sections = {
    home: document.querySelector(".hero"),
    about: document.querySelectorAll(".section")[0],
    skills: document.querySelectorAll(".section")[1],
    projects: document.querySelectorAll(".section")[2],
    experience: document.querySelectorAll(".section")[3]
};

const menu = document.createElement("div");
menu.className = "menu-panel";
menu.innerHTML = `
    <a onclick="goTo('home')">Home</a>
    <a onclick="goTo('about')">About</a>
    <a onclick="goTo('skills')">Skills</a>
    <a onclick="goTo('projects')">Projects</a>
    <a onclick="goTo('experience')">Experience</a>
`;
document.body.appendChild(menu);

const menuButton = document.createElement("button");
menuButton.textContent = "☰ Menu";
menuButton.onclick = () => {
    menu.classList.toggle("active");
};
document.querySelector(".top-bar").prepend(menuButton);

function goTo(section) {
    sections[section].scrollIntoView({
        behavior: "smooth"
    });
    menu.classList.remove("active");
}

const contactDiv = document.querySelector(".hero .contact");

const githubButton = document.createElement("a");
githubButton.href = "https://github.com/Bitingingwa"; 
githubButton.target = "_blank";
githubButton.textContent = " Visit my GitHub Here";

githubButton.style.display = "inline-block";
githubButton.style.marginTop = "10px";
githubButton.style.padding = "8px 14px";
githubButton.style.borderRadius = "8px";
githubButton.style.fontWeight = "600";
githubButton.style.textDecoration = "none";
githubButton.style.transition = "0.3s ease";
githubButton.style.boxShadow = "0 6px 15px rgba(0,0,0,0.2)";
githubButton.style.textAlign = "center";


function updateGithubButtonColors() {
    if (document.body.classList.contains("dark")) {
        githubButton.style.background = "white";
        githubButton.style.color = "#0a2540"; 
    } else {
        githubButton.style.background = "var(--primary)";
        githubButton.style.color = "white";
    }
}

updateGithubButtonColors();


const originalToggleTheme = toggleTheme;
toggleTheme = function() {
    originalToggleTheme();
    updateGithubButtonColors();
};

githubButton.onmouseover = () => {
    githubButton.style.transform = "scale(1.05)";
};
githubButton.onmouseleave = () => {
    githubButton.style.transform = "scale(1)";
};


contactDiv.appendChild(githubButton);
