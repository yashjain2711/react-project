
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
                            cp -r dist/. /home/yashjain/Desktop/project/jenkins/

                            echo "Deployment completed successfully!"
                    '''
            }
        }
            
    }

}



