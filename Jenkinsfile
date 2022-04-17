pipeline {
    agent any
    
    stages {
        stage('Git Pull') {
            steps {
                git branch: 'main', credentialsId: 'git-creds', url: 'https://github.com/aadarshmishra/calc-devops.git'
            }
        }
        stage('Install dependencies'){
            steps{
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh "ng build"
            }
        }
        stage('Test') {
            steps {
                sh 'ng test --sourceMap=false --browsers=ChromeHeadless --watch=false --progress=false'
            }
        }
        stage('Docker Build') {
            steps {
                sh "docker build -t spe-calc ."
            }
        }
        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
                    sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
                    sh "docker tag spe-calc aadarsh96/spe-calc:latest"
                    sh 'docker push aadarsh96/spe-calc:latest'
                }
            }
        }
        stage('Ansible Pull and Run Docker Image') {
            steps {
                ansiblePlaybook becomeUser: null, colorized: true, disableHostKeyChecking: true, inventory: 'inventory', playbook: 'deploy-img.yml', sudoUser: null
            }
        }
    }
}