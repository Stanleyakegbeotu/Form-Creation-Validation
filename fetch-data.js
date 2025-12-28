// Fetch and display users from public API
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    if (!dataContainer) return;

    // Show a loading message while fetching
    dataContainer.textContent = 'Loading user data...';

    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create and append user list
        const userList = document.createElement('ul');
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle errors by clearing and showing an error message
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Failed to fetch user data:', error);
    }
}

// Invoke on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
