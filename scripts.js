function changeSocialMediaLinks() {
  for (let li of socialMidias.children) {
    const social = li.getAttribute('class')

    if (linksSocialMedia[social] === '') {
      li.style.opacity = 0.4
      li.children[0].style.cursor = 'default'
    } else {
      li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    }
  }
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userGitHubName.textContent = data.name
      userGitHubBio.textContent = data.bio
      userGitHubProfile.href = data.html_url
      userGitHubProfile.children[1].textContent = data.login
      userGitHubPhoto.src = data.avatar_url
    })
}

const linksSocialMedia = {
  github: 'wesleypestana',
  youtube: 'maykbrito',
  facebook: '',
  instagram: 'wes.pestana',
  twitter: ''
}

changeSocialMediaLinks()

getGitHubProfileInfos()
