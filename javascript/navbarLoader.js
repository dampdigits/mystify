// navbarLoader.js
const loadNavbar = async () => {
    try {
        const response = await fetch('navbar.html');
        if (!response.ok) {
            throw new Error('Failed to fetch navbar content');
        }
        const navbarContent = await response.text();
        const navbarContainer = document.getElementById('navbar-container');
        if (navbarContainer) {
            navbarContainer.innerHTML = navbarContent;
        }
    }
    catch (error) {
        console.error(error);
    }
};

document.addEventListener('DOMContentLoaded', loadNavbar);
