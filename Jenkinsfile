pipeline {
    agent any
    stages {
       stage('build') {
          steps {
             echo 'Notify GITHUB'
             updateGitHubCommitStatus name: 'build', state: 'pending'
             echo 'build step goes here'
             updateGitHubCommitStatus name: 'build', state: 'success'
          }
       }
       stage(test) {
           steps {
               echo 'Notify GitHub'
               updateGitHubCommitStatus name: 'test', state: 'pending'
               echo 'test step goes here'
               updateGitHubCommitStatus name: 'test', state: 'success'

           }
       }
    }
 }
