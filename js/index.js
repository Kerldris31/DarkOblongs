 const suggestionsData = [
    "Home",
    "About Us",
    "Apps",
    "Contact",
];

const searchInput = document.getElementById("searchInput");
const suggestionsContainer = document.querySelector(".suggestions-container");


searchInput.addEventListener("input", updateSuggestions);


function updateSuggestions() {
    const inputValue = searchInput.value.toLowerCase();

  
    const filteredSuggestions = inputValue.length > 0
        ? suggestionsData.filter(suggestion => suggestion.toLowerCase().startsWith(inputValue))
        : [];

    displaySuggestions(filteredSuggestions);
}


function displaySuggestions(suggestions) {
    suggestionsContainer.innerHTML = "";

    if (suggestions.length > 0) {
        const fragment = document.createDocumentFragment();

        suggestions.forEach(suggestion => {
            const suggestionItem = document.createElement("div");
            suggestionItem.classList.add("suggestion-item");
            suggestionItem.textContent = suggestion;
            suggestionItem.addEventListener("click", () => {
                searchInput.value = suggestion;
                suggestionsContainer.innerHTML = "";
            
            });

            fragment.appendChild(suggestionItem);
        });

        suggestionsContainer.appendChild(fragment);
    } else {
        suggestionsContainer.innerHTML = "";
    }
}


function search() {
    const inputValue = searchInput.value.toLowerCase();
   
    switch (inputValue) {
        case 'home':
            window.location.href = '#home';
            break;
        case 'about us':
            window.location.href = '#about';
            break;
        case 'apps':
            window.location.href = '#apps';
            break;
        case 'contact':
            window.location.href = '#contact';
            break;
    }
}