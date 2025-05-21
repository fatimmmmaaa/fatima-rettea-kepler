const username= 'fatimmmmaaa'

fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(repos => {
        const repositories = repos; 
        console.log('Repositories:', repositories);

        const repoList = document.getElementById('repo-list');


        repositories.forEach(repo => {
            const listItem = document.createElement('li');
            listItem.textContent = repo.name;
            repoList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Error fetching repos:', error);
    });