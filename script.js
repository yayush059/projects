// Array of project objects with name and link
const projects = [
    { name: 'Project 1', link: '/01_color_changer/proj1.html' },
    { name: 'Project 2', link: '' },
    { name: 'Project 3', link: '' },
    { name: 'Project 4', link: '' },
    // Add more projects as needed
];

// Function to dynamically create the project list
function populateProjectList() {
    const projectList = document.getElementById('project-list');

    projects.forEach(project => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = project.link;
        link.textContent = project.name;
        listItem.appendChild(link);
        projectList.appendChild(listItem);
    });
}

// Call the function to populate the project list on page load
window.onload = populateProjectList;