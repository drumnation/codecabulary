

class GithubAdapter {
  constructor(username, repo) {
    this.username = username
    this.repo = repo
  }

  get() {
    const url = `https://api.github.com/repos/${this.username}/${this.repo}/compare/learn-co-students:master...${this.username}:master`
    return $.ajax({
      url: url,
      beforeSend: function(xhr) {
        xhr.setRequestHeader("Authorization", "token " + '68eab9012d15fdd95dcb30114694872045149bb8');
      },
    })
  }

  getFileContents(path) {
    const url = `https://api.github.com/repos/${this.username}/${this.repo}/contents/${path}`
    return $.ajax({
      url: url,
      beforeSend: function(xhr) {
        xhr.setRequestHeader("Authorization", "token " + '68eab9012d15fdd95dcb30114694872045149bb8');
        xhr.setRequestHeader("Accept", "application/vnd.github.v3.raw")
      },
    })
  }
}
