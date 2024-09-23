document.addEventListener('DOMContentLoaded', () => {
    loadSearchHistory();
    applySavedMode();
});

function performSearch() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.trim();

    if (searchTerm) {
        const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        searchHistory.push(searchTerm);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        searchInput.value = '';
        loadSearchHistory();
    } else {
        alert('Please enter a search query.');
    }
}

function loadSearchHistory() {
    const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    const searchHistoryList = document.getElementById('search-history');
    searchHistoryList.innerHTML = '';

    searchHistory.forEach((term, index) => {
        const li = document.createElement('li');
        li.textContent = term;
        searchHistoryList.appendChild(li);
    });
}

function clearHistory() {
    localStorage.removeItem('searchHistory');
    loadSearchHistory();
}

function toggleMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('mode', isDarkMode ? 'dark' : 'light');
}

function applySavedMode() {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
        document.body.classList.add('dark-mode');
    }
}