
pipeline {
    agent any

    stages {

        stage('Checkout SCM') {
            steps {
                checkout scm
          
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

}
