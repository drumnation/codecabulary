# Codecabulary
## Retrieve Multi-File Lab Solutions from Flatiron Students

![Watch](demo.gif)

### CONCEPT

The Golden Hammer returns a compiled list of all Flatiron Student solutions to 1 single file.  This works great for short problems, but stops being a helpful learning tool when the solution spans multiple files. When comparing more complex solutions you can't be sure that an approach will work if you can't see the other files connected to it. 

Codecabulary uses the Github api to compare commits for changes between the original Flatiron lab repo and the final version of the student's fork, returning a list of changed files. Codecabulary then retrieves those files and displays them on the page.