const githubUrl = "https://api.github.com/users/girishpandenc"
const reposUrl = "https://api.github.com/users/girishpandenc/repos"
let container =document.querySelector('.container')


fetch(githubUrl).then((response) => {
  return response.json();
  }).then((parsedJsonResponse) => {
    console.log(parsedJsonResponse)
    let photo = document.createElement('img')
    let username = document.createElement('h1');
    let githubInfo = document.createElement('ul')
    let location = document.createElement('li');
    let githubUrl = document.createElement('li');
    let urlLink = document.createElement('a')
    let githubUserName = document.createElement('li');
    let githubRepos = document.createElement('h1')
    
    githubInfo.classList.add("github-info");
    location.classList.add("location");
    githubUrl.classList.add("github-url");
    githubUserName.classList.add("github-username");
    githubRepos.classList.add("github-repos")
       
    photo.src = parsedJsonResponse['avatar_url'];
    username.innerText = parsedJsonResponse['name'];
    location.innerText = "Location: " + parsedJsonResponse['location'];
    githubUserName.innerText = "GitHub Username: " + parsedJsonResponse['login'];
    githubUrl.innerText = "GitHub URL: ";
    urlLink.innerHTML = parsedJsonResponse.login;
    urlLink.href = parsedJsonResponse.html_url;
    githubRepos.innerText = "GitHub Repos"
     
    container.appendChild(photo);
    container.appendChild(username);
    container.appendChild(githubInfo);
    githubInfo.appendChild(location);
    githubInfo.appendChild(githubUrl);
    githubUrl.appendChild(urlLink);
    githubInfo.appendChild(githubUserName);
    container.appendChild(githubRepos);
    githubRepos.appendChild(reposList);
    
  })

  fetch(reposUrl).then((response) => {
    return response.json();
  }).then ((parsedJsonResponse) => {
    console.log(parsedJsonResponse)
    let reposList = document.createElement('p');
    reposList.innerText = parsedJsonResponse[1]['name'] + " " 
    + parsedJsonResponse [2]['name'];
    console.log(reposList.innerText);
    container.appendChild(reposList);
  })