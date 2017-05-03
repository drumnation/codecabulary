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
        xhr.setRequestHeader("Authorization", "token " + 'bbac7448f0264448f5fe957af412f27af20c02be');
      },
    })
  }

  getFileContents(path) {
    const url = `https://api.github.com/repos/${this.username}/${this.repo}/contents/${path}`
    return $.ajax({
      url: url,
      beforeSend: function(xhr) {
        xhr.setRequestHeader("Authorization", "token " + 'bbac7448f0264448f5fe957af412f27af20c02be');
        xhr.setRequestHeader("Accept", "application/vnd.github.v3.raw")
      },
    })
  }
}
