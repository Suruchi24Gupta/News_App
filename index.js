fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=69ce1d5304034a3ba30c1149e349d407')
.then(response => response.json())
.then(data => displayData(data))
.catch(error => console.error('Error:', error));

function displayData(data) {
    const dataContainer = document.getElementById('data-container');

    data.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `Name: ${item.name}, Age: ${item.age}`;
        dataContainer.appendChild(div);
    });
}