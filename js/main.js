/*
* Name: Soham Patel
* Student ID: 100894926
* Name: Salvi Patel
* Student ID: 100895804
* Date: February 24, 2024
*/

// Using JavaScript for the home page
let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 2000);
}

document.addEventListener("DOMContentLoaded", function () {
    showSlides();

    const projectsData = [
        { title: 'ICE 1', description: 'Description for Project 1', imageUrl: 'Assignment2/images/ice1.jpg' },
        { title: 'Project 2', description: 'Description for Project 2', imageUrl: 'project2.jpg' },
    ];

    let projectsPerPage = 2;
    let currentIndex = 0;

    function createProjectCard(project) {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <img src="${project.imageUrl}" alt="${project.title}">
            <p>${project.description}</p>
        `;
        return projectCard;
    }

    function displayProjects() {
        const portfolioSection = document.getElementById('portfolio');
        for (let i = currentIndex; i < currentIndex + projectsPerPage && i < projectsData.length; i++) {
            const projectCard = createProjectCard(projectsData[i]);
            portfolioSection.appendChild(projectCard);
        }
    }

    document.getElementById('loadMoreBtn').addEventListener('click', () => {
        currentIndex += projectsPerPage;
        displayProjects();
    });

    displayProjects();

    function openModal(name, role, description) {
        document.getElementById('modal-name').innerText = name;
        document.getElementById('modal-role').innerText = role;
        document.getElementById('modal-description').innerText = description;
        document.getElementById('modal').style.display = 'flex';
    }

    function closeModal() {
        document.getElementById('modal').style.display = 'none';
    }

    document.addEventListener('DOMContentLoaded', function () {
        const teamMembers = document.querySelectorAll('.team-member');

        teamMembers.forEach(member => {
            member.addEventListener('click', function () {
                const name = member.querySelector('h3').innerText;
                const role = member.querySelector('p').innerText;
                const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
                openModal(name, role, description);
            });
        });

    });

// Function to handle login button click
    function handleLogin() {
        alert("Login clicked!");
        // Add your login logic here
    }

// Function to handle register button click
    function handleRegister() {
        alert("Register clicked!");
        // Add  register logic here
    }

// Function to check if the user is already logged in
    function checkLoginStatus() {

        return false;
    }

// Function to show/hide login and register buttons
    function toggleAuthButtons() {
        console.log('Toggle Auth Buttons called');
        const authButtons = document.getElementById("authButtons");
        const loginBtn = document.getElementById("loginBtn");
        const registerBtn = document.getElementById("registerBtn");

        if (!checkLoginStatus()) {
            //  If User is not logged in, show login and register buttons
            authButtons.style.display = "block";
            loginBtn.style.display = "inline-block";
            registerBtn.style.display = "inline-block";
        } else {
            // but if  User is logged in, hide login and register buttons
            authButtons.style.display = "none";
        }
    }

// Calling the function to toggle buttons on page load
    toggleAuthButtons()


    let registeredUsers = [];

    function isUsernameTaken(username) {
        return registeredUsers.some(user => user.username === username);
    }

    function clearPlaceholder(element) {
        element.placeholder = '';
    }

    function restorePlaceholder(element) {
        element.placeholder = 'Enter ' + element.id.replace(/([A-Z])/g, ' $1').toLowerCase();
    }

    function showSuccessMessage(message, targetId) {
        let successMessage = document.getElementById(targetId);
        let form = document.getElementById(targetId.replace('Message', 'Form'));

        // Hide the form
        form.style.display = 'none';

        // Show the success message
        successMessage.textContent = message;
        successMessage.style.display = 'block';
    }
});

