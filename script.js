document.addEventListener('DOMContentLoaded', function() {
    var searchButton = document.getElementById('search-button');
    var searchInput = document.getElementById('search-input');

    searchButton.addEventListener('click', function() {
        var searchTerm = searchInput.value.toLowerCase();
        performSearch(searchTerm);
    });

    function performSearch(term) {
        for (var i = 0; i < articles.length; i++) {
            var keywords = articles[i].keywords;
            for (var j = 0; j < keywords.length; j++) {
                if (keywords[j].toLowerCase() === term) {
                    window.location.href = articles[i].link;
                    return;
                }
            }
        }
        alert('Статья не найдена.');
    }
});