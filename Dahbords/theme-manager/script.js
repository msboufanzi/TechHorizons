document.addEventListener('DOMContentLoaded', function() {
    // Populate subscriptions table
    const subscriptionsTable = document.querySelector('#subscriptions-table tbody');
    const subscriptions = [
        { name: 'John Doe', email: 'john@example.com', date: '2025-01-15' },
        { name: 'Jane Smith', email: 'jane@example.com', date: '2025-02-20' },
        { name: 'Bob Johnson', email: 'bob@example.com', date: '2025-03-10' }
    ];
    subscriptions.forEach(sub => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${sub.name}</td>
            <td>${sub.email}</td>
            <td>${sub.date}</td>
            <td>
                <button class="btn-danger" onclick="kickSubscription('${sub.email}')">Kick Subscription</button>
            </td>
        `;
        subscriptionsTable.appendChild(tr);
    });

    // Populate articles table
    const articlesTable = document.querySelector('#articles-table tbody');
    const articles = [
        { title: 'AI in Healthcare', author: 'Dr. Sarah Lee', date: '2025-04-01', status: 'Published' },
        { title: 'Ethics and AI', author: 'Prof. Ahmed Hassan', date: '2025-04-15', status: 'Under Review' },
        { title: 'AI and Employment', author: 'Lucy Chen', date: '2025-04-30', status: 'Draft' }
    ];
    articles.forEach(article => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${article.title}</td>
            <td>${article.author}</td>
            <td>${article.date}</td>
            <td>${article.status}</td>
            <td>
                <button class="btn-primary" onclick="viewArticle('${article.title}')">View</button>
                <button class="btn-danger" onclick="deleteArticle('${article.title}')">Delete</button>
            </td>
        `;
        articlesTable.appendChild(tr);
    });

    // Populate proposals table
    const proposalsTable = document.querySelector('#proposals-table tbody');
    const proposals = [
        { title: 'AI in Industry 4.0', author: 'Mark Wilson', date: '2025-05-05' },
        { title: 'Machine Learning for Beginners', author: 'Emma Brown', date: '2025-05-10' },
        { title: 'AI and Privacy Concerns', author: 'David Lee', date: '2025-05-15' }
    ];
    proposals.forEach(proposal => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${proposal.title}</td>
            <td>${proposal.author}</td>
            <td>${proposal.date}</td>
            <td>
                <button class="btn-primary" onclick="reviewProposal('${proposal.title}')">Review</button>
                <button class="btn-danger" onclick="deleteProposal('${proposal.title}')">Delete</button>
                <button class="btn-primary" onclick="proposeToEditor('${proposal.title}')">Propose to Editor</button>
            </td>
        `;
        proposalsTable.appendChild(tr);
    });

    // Populate statistics
    const statsContainer = document.getElementById('stats-container');
    const stats = [
        { label: 'Theme Subscribers', value: 1250 },
        { label: 'Published Articles', value: 75 },
        { label: 'Total Views', value: 25000 },
        { label: 'Comments', value: 520 }
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

    // Populate comments table
    const commentsTable = document.querySelector('#comments-table tbody');
    const comments = [
        { date: '2025-05-20', name: 'User123', content: 'Great article!', article: 'AI in Healthcare' },
        { date: '2025-05-21', name: 'TechEnthusiast', content: 'Interesting perspective.', article: 'Ethics and AI' },
        { date: '2025-05-22', name: 'FutureThinker', content: 'How will this affect job markets?', article: 'AI and Employment' }
    ];
    comments.forEach(comment => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${comment.date}</td>
            <td>${comment.name}</td>
            <td>${comment.content}</td>
            <td>
                <button class="btn-danger" onclick="deleteComment('${comment.date}', '${comment.name}')">Delete</button>
            </td>
        `;
        commentsTable.appendChild(tr);
    });
});

// Function stubs for button actions
function kickSubscription(email) {
    alert(`Kicking subscription for ${email}`);
    // Implement the actual kick logic here
}

function viewArticle(title) {
    alert(`Viewing article: ${title}`);
    // Implement the view logic here
}

function deleteArticle(title) {
    alert(`Deleting article: ${title}`);
    // Implement the delete logic here
}

function reviewProposal(title) {
    alert(`Reviewing proposal: ${title}`);
    // Implement the review logic here
}

function deleteProposal(title) {
    alert(`Deleting proposal: ${title}`);
    // Implement the delete logic here
}

function proposeToEditor(title) {
    alert(`Proposing article to editor: ${title}`);
    // Implement the propose logic here
}

function deleteComment(date, name) {
    alert(`Deleting comment by ${name} on ${date}`);
    // Implement the delete logic here
}

