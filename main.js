const githubUrl = "https://api.github.com/users/girishpandenc"
const reposUrl = "https://api.github.com/users/girishpandenc/repos"
let Container =document.querySelector('.container')


fetch(githubUrl).then((response) => {
  return response.json();
  }).then((parsedJsonResponse) => {
    console.log(parsedJsonResponse)
    let photo = document.createElement('img')
    let username = document.createElement('h1');
    let location = document.createElement('h2');
    let githubUrl = document.createElement('h2');
    let githubUserName = document.createElement('h2');
    
    photo.src = parsedJsonResponse['avatar_url'];
    username.innerText = parsedJsonResponse['name'];
    location.innerText = "Location: " + parsedJsonResponse['location'];
    githubUserName.innerText = "GitHub Username: " + parsedJsonResponse['login'];
    githubUrl.innerText = "GitHub URL: " + parsedJsonResponse['url'];
     
    Container.appendChild(photo);
    Container.appendChild(username);
    Container.appendChild(location);
    Container.appendChild(githubUrl);
    Container.appendChild(githubUserName);
    
  })

  fetch(reposUrl).then((response) => {
    return response.json();
  }).then ((parsedJsonResponse) => {
    console.log(parsedJsonResponse)
    let reposList = document.createElement('p');
    reposList.innerText = parsedJsonResponse[1]['name'] + " " 
    + parsedJsonResponse [2]['name'];
    console.log(reposList.innerText);
    Container.appendChild(reposList);
  })