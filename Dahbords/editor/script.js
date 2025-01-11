document.addEventListener('DOMContentLoaded', function() {
    // Populate existing articles table
    const existingArticlesTable = document.querySelector('#existing-articles-table tbody');
    const existingArticles = [
        { title: 'AI in Healthcare', author: 'Dr. Sarah Lee', theme: 'Artificial Intelligence', status: 'Active' },
        { title: 'Cybersecurity Trends', author: 'John Smith', theme: 'Cybersecurity', status: 'Active' },
        { title: 'IoT Revolution', author: 'Emma Brown', theme: 'Internet of Things', status: 'Inactive' }
    ];
    existingArticles.forEach(article => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${article.title}</td>
            <td>${article.author}</td>
            <td>${article.theme}</td>
            <td>${article.status}</td>
            <td>
                <button class="btn-primary" onclick="viewArticle('${article.title}')">View</button>
                <label class="switch">
                    <input type="checkbox" ${article.status === 'Active' ? 'checked' : ''} onchange="toggleArticleStatus('${article.title}', this.checked)">
                    <span class="slider round"></span>
                </label>
            </td>
        `;
        existingArticlesTable.appendChild(tr);
    });

    // Populate articles table
    const articlesTable = document.querySelector('#articles-table tbody');
    const articles = [
        { title: 'Future of AI', author: 'Dr. Alex Johnson', theme: 'Artificial Intelligence', status: 'Under Review', visible: true },
        { title: 'Blockchain Security', author: 'Lisa Chen', theme: 'Cybersecurity', status: 'Pending', visible: false },
        { title: 'Smart Cities', author: 'Michael Wong', theme: 'Internet of Things', status: 'Approved', visible: true }
    ];
    articles.forEach(article => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${article.title}</td>
            <td>${article.author}</td>
            <td>${article.theme}</td>
            <td>${article.status}</td>
            <td>
                <button class="btn-primary" onclick="reviewArticle('${article.title}')">Review</button>
                <label class="switch">
                    <input type="checkbox" ${article.visible ? 'checked' : ''} onchange="toggleArticleVisibility('${article.title}', this.checked)">
                    <span class="slider round"></span>
                </label>
            </td>
        `;
        articlesTable.appendChild(tr);
    });

    // Populate users table
    const usersTable = document.querySelector('#users-table tbody');
    const users = [
        { name: 'John Doe', email: 'john@example.com', role: 'Subscriber' },
        { name: 'Jane Smith', email: 'jane@example.com', role: 'Theme Manager' },
        { name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' }
    ];
    users.forEach(user => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>
                <button class="btn-primary" onclick="editUser('${user.email}')">Edit</button>
                <button class="btn-primary" onclick="manageRoles('${user.email}')">Manage Roles</button>
                <button class="btn-danger" onclick="blockUser('${user.email}')">Block</button>
            </td>
        `;
        usersTable.appendChild(tr);
    });

    // Populate statistics
    const statsContainer = document.getElementById('stats-container');
    const stats = [
        { label: 'Total Subscribers', value: 5000 },
        { label: 'Published Articles', value: 500 },
        { label: 'Active Themes', value: 8 },
        { label: 'Total Views', value: 1000000 }
    ];
    stats.forEach(stat => {
        const div = document.createElement('div');
        div.className = 'stat-box';
        div.innerHTML = `
            <h3>${stat.label}</h3>
            <p>${stat.value}</p>
        `;
        statsContainer.appendChild(div);
    });

    // Add event listener for the "Add User" button
    document.getElementById('add-user-btn').addEventListener('click', addUser);
});

// Function to view article
function viewArticle(title) {
    alert(`Redirecting to article: ${title}`);
    // Implement the actual redirection logic here
}

// Function to toggle article status
function toggleArticleStatus(title, isActive) {
    alert(`Article "${title}" is now ${isActive ? 'Active' : 'Inactive'}`);
    // Implement the actual status change logic here
}

// Function to toggle article visibility
function toggleArticleVisibility(title, isVisible) {
    alert(`Article "${title}" is now ${isVisible ? 'Visible' : 'Hidden'}`);
    // Implement the actual visibility change logic here
}

// Function to review article
function reviewArticle(title) {
    alert(`Reviewing article: ${title}`);
    // Implement the review logic here
}

// Function to edit user
function editUser(email) {
    alert(`Editing user: ${email}`);
    // Implement the user edit logic here
}

// Function to manage roles
function manageRoles(email) {
    alert(`Managing roles for user: ${email}`);
    // Implement the role management logic here
}

// Function to block user
function blockUser(email) {
    alert(`Blocking user: ${email}`);
    // Implement the user blocking logic here
}

// Function to add a new user
function addUser() {
    const name = prompt("Enter user name:");
    const email = prompt("Enter user email:");
    const role = prompt("Enter user role:");

    if (name && email && role) {
        const usersTable = document.querySelector('#users-table tbody');
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${name}</td>
            <td>${email}</td>
            <td>${role}</td>
            <td>
                <button class="btn-primary" onclick="editUser('${email}')">Edit</button>
                <button class="btn-primary" onclick="manageRoles('${email}')">Manage Roles</button>
                <button class="btn-danger" onclick="blockUser('${email}')">Block</button>
            </td>
        `;
        usersTable.appendChild(tr);
        alert("User added successfully!");
    } else {
        alert("Failed to add user. Please provide all required information.");
    }
}

