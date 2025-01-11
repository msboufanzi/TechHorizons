document.addEventListener('DOMContentLoaded', function() {
    // Populate subscriptions table
    const subscriptionsTable = document.querySelector('#subscriptions-table tbody');
    const subscriptions = [
        { theme: 'Artificial Intelligence', date: '2025-01-15' },
        { theme: 'Cybersecurity', date: '2025-02-20' },
        { theme: 'Internet of Things', date: '2025-03-10' }
    ];
    subscriptions.forEach(sub => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${sub.theme}</td>
            <td>${sub.date}</td>
            <td>
                <button class="btn-danger" onclick="unsubscribe('${sub.theme}')">Unsubscribe</button>
            </td>
        `;
        subscriptionsTable.appendChild(tr);
    });

    // Populate browsing history table
    const historyTable = document.querySelector('#history-table tbody');
    const history = [
        { title: 'AI in Healthcare', theme: 'Artificial Intelligence', date: '2025-05-01' },
        { title: 'Cybersecurity Trends', theme: 'Cybersecurity', date: '2025-05-05' },
        { title: 'IoT Revolution', theme: 'Internet of Things', date: '2025-05-10' }
    ];
    history.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.title}</td>
            <td>${item.theme}</td>
            <td>${item.date}</td>
            <td>
                <button class="btn-primary" onclick="viewArticle('${item.title}')">View Article</button>
            </td>
        `;
        historyTable.appendChild(tr);
    });

    // Handle article proposal form submission
    document.getElementById('article-proposal-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const title = document.getElementById('article-title').value;
        const theme = document.getElementById('article-theme').value;
        const content = document.getElementById('article-content').value;
        alert(`Article proposal submitted:\nTitle: ${title}\nTheme: ${theme}\nContent: ${content}`);
        this.reset();
    });

    // Populate proposed articles table
    const proposedArticlesTable = document.querySelector('#proposed-articles-table tbody');
    const proposedArticles = [
        { title: 'Future of AI', theme: 'Artificial Intelligence', date: '2025-04-15', status: 'Under Review' },
        { title: 'Blockchain Security', theme: 'Cybersecurity', date: '2025-04-20', status: 'Rejected' },
        { title: 'Smart Cities', theme: 'Internet of Things', date: '2025-04-25', status: 'Approved' }
    ];
    proposedArticles.forEach(article => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${article.title}</td>
            <td>${article.theme}</td>
            <td>${article.date}</td>
            <td>${article.status}</td>
        `;
        proposedArticlesTable.appendChild(tr);
    });

    // Populate conversations list
    const conversationsList = document.getElementById('conversations-list');
    const conversations = [
        { id: 1, title: 'Discussion on AI Ethics', date: '2025-05-15' },
        { id: 2, title: 'Cybersecurity Best Practices', date: '2025-05-20' },
        { id: 3, title: 'IoT in Smart Homes', date: '2025-05-25' }
    ];
    conversations.forEach(conv => {
        const div = document.createElement('div');
        div.className = 'conversation-item';
        div.innerHTML = `
            <h3>${conv.title}</h3>
            <p>Started on: ${conv.date}</p>
            <button class="btn-primary" onclick="viewConversation(${conv.id})">View</button>
            <button class="btn-danger" onclick="deleteConversation(${conv.id})">Delete</button>
        `;
        conversationsList.appendChild(div);
    });
});

// Function stubs for button actions
function unsubscribe(theme) {
    alert(`Unsubscribing from theme: ${theme}`);
}

function viewArticle(title) {
    alert(`Redirecting to article: ${title}`);
}

function viewConversation(id) {
    alert(`Viewing conversation with ID: ${id}`);
}

function deleteConversation(id) {
    if (confirm(`Are you sure you want to delete conversation with ID: ${id}?`)) {
        const conversationElement = document.querySelector(`.conversation-item:has(button[onclick="deleteConversation(${id})"])`);
        if (conversationElement) {
            conversationElement.remove();
            alert(`Conversation with ID: ${id} has been deleted.`);
        }
    }
}

