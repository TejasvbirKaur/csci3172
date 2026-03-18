async function getRecipes() {
    const ingredients = document.getElementById('ingredients').value;
    const diet = document.getElementById('diet').value;
    const resultsDiv = document.getElementById('results');

    resultsDiv.innerHTML = "Loading...";

    try {
        const response = await fetch(
            `http://localhost:3000/api/recipes?ingredients=${ingredients}&diet=${diet}`
        );

        const data = await response.json();

        if (data.error) {
            resultsDiv.innerHTML = `<p class="text-danger">${data.error}</p>`;
            return;
        }

        resultsDiv.innerHTML = "";

        data.forEach(recipe => {
            const card = `
                <div class="card p-3">
                    <h5>${recipe.title}</h5>
                </div>
            `;
            resultsDiv.innerHTML += card;
        });

    } catch (error) {
        resultsDiv.innerHTML = `<p class="text-danger">Error fetching recipes</p>`;
    }
}