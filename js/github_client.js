$(document).ready(function() {
  const $username = $('select#username')
  const $repo = $('input#repo')
  const $submit = $('input#compare-commits')

  $submit.on('click', fetchAndFindCommits)

  function fetchAndFindCommits(event) {
    event.preventDefault()
    const githubAdapter = new GithubAdapter($username.val(), $repo.val())
    githubAdapter.get().then(renderCommits)
  }

  function renderCommits(data) {
    var filenames = data.files.map(file => file)
    var filesList = ""
    $('#commits').html(filesList)
    filenames.forEach(function(file, i, arr) {
      $('#commits').append(
        `<div class="row">
          <div class="col s12">
            <div class="card blue lighten-2">
              <div class="card-content white-text">
                <span class="card-title"><span class="amber-text darken-2-text">${file.filename}</span></span>
                <div class="${i}"><pre></pre></div>
              </div>
              <div class="card-action">
                <a href="${file.raw_url}" target="_blank">VIEW</a>
              </div>
            </div>
          </div>
        </div>`).fadeIn('slow')
      const githubAdapter = new GithubAdapter($username.val(), $repo.val())
      githubAdapter.getFileContents(file.filename).then(function(data) {
        $(`.${i} pre`).text(data)
      })
    })
  }
})
