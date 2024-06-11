// script.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            displayItems(data);
            window.data = data; // Save data globally for filtering
        })
        .catch(error => console.error('Error fetching data:', error));
});

function displayItems(data) {
    const ul = document.getElementById('itemList');
    ul.innerHTML = '';
    
    data.forEach(category => {
        category.items.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<img src="${item.image}" alt="${item.name}"><span>${item.name}</span>`;
            ul.appendChild(li);
        });
    });
}

function filterList() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const ul = document.getElementById('itemList');
    ul.innerHTML = ''; // Clear current list
    
    window.data.forEach(category => {
        category.items.forEach(item => {
            if (item.name.toLowerCase().includes(filter)) {
                const li = document.createElement('li');
                li.innerHTML = `<img src="${item.image}" alt="${item.name}"><span>${item.name}</span>`;
                ul.appendChild(li);
            }
        });
    });
}
