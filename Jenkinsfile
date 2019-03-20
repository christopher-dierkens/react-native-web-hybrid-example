pipeline {
    agent {
      docker { image 'circleci/node:dubnium-browsers' }
    }
    stages {
        stage('Build') {
            steps {
                sh 'git clean -fdx'
                sh 'yarn install --frozen-lockfile'
                sh 'yarn build:web'
            }
        }
        stage('Test') {
            steps {
              parallel(
                lint: {
                  sh 'yarn lint'
                },
                test: {
                  sh 'yarn test'
                }
              )
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
