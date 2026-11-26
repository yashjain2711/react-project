
pipeline {
    agent any

    tools {
        nodejs 'NodeJS-20'
    }

    options {
        timestamps()
    }

    stages {

        stage('Checkout SCM') {
            steps {
                checkout scm
                echo 'Code successfully pulled from GitHub'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to Local Nginx') {
            steps {
                sh '''
                    mkdir -p /var/www/html/react-app
                    cp -r dist/. /var/www/html/react-app/
                '''
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
            echo 'Open: http://localhost/react-app/'
        }

        failure {
            echo 'Pipeline failed. Check Jenkins console output.'
        }
    }
}
