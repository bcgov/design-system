node('maven') {

    stage('checkout') {
       echo "checking out source"
       echo "Build: ${BUILD_ID}"
       checkout scm   
    }

    stage('code quality check') {
       echo "Code Quality Check ...."
       SONARQUBE_PWD = sh (
             script: 'oc env dc/sonarqube --list | awk  -F  "=" \'/SONARQUBE_ADMINPW/{print $2}\'',
             returnStdout: true).trim()
       SONARQUBE_URL = sh (
             script: 'oc get routes -o wide --no-headers | awk \'/sonarqube/{ print match($0,/edge/) ?  "https://"$2 : "http://"$2 }\'',
               returnStdout: true).trim()
       dir('sonar-runner') {
         sh returnStdout: true, script: "./gradlew sonarqube -Dsonar.host.url=${SONARQUBE_URL} -Dsonar.verbose=true --stacktrace --info  -Dsonar.sources=.."
       }
    }

    // Note: openshiftVerifyDeploy requires policy to be added:
    // oc policy add-role-to-user view -z system:serviceaccount:<project-prefix>-tools:jenkins -n <project-prefix>-dev
    // oc policy add-role-to-user view -z system:serviceaccount:<project-prefix>-tools:jenkins -n <project-prefix>-test
    // oc policy add-role-to-user view -z system:serviceaccount:<project-prefix>-tools:jenkins -n <project-prefix>-prod
	
    stage('build') {
       echo "Building..."
       openshiftBuild bldCfg: '<name>', showBuildLogs: 'true'
       echo ">>> Get Image Hash"
       IMAGE_HASH = sh (
         script: 'oc get istag <name>:latest -o template --template="{{.image.dockerImageReference}}"|awk -F ":" \'{print $3}\'',
 	          returnStdout: true).trim()
       echo ">> IMAGE_HASH: $IMAGE_HASH"
       //openshiftTag destStream: '<name>', verbose: 'true', destTag: '$BUILD_ID', srcStream: 'devxp', srcTag: 'latest'
       openshiftTag destStream: '<name>', verbose: 'true', destTag: 'dev', srcStream: 'devxp', srcTag: "${IMAGE_HASH}"
       openshiftVerifyDeployment depCfg: '<dc-dev>', namespace: '<project-prefix>-dev', replicaCount: 1, verbose: 'false', verifyReplicaCount: 'false'
       echo ">>>> Deployment Complete"
    }
}

node('bddstack') {
    stage('Functional Test') {
       //the checkout is mandatory, otherwise functional test would fail
       echo "checking out source"
       checkout scm
       dir('functional-tests') {
           // retrieving variables from buildConfig 
	   TEST_USERNAME = sh (
             script: 'oc env bc/<name> --list | awk  -F  "=" \'/TEST_USERNAME/{print $2}\'',
             returnStdout: true).trim()		  
	   TEST_PASSWORD = sh (
             script: 'oc env bc/<name> --list | awk  -F  "=" \'/TEST_PASSWORD/{print $2}\'',
             returnStdout: true).trim()
	  try {
	    sh 'export TEST_USERNAME=${TEST_USERNAME}\nexport TEST_PASSWORD=${TEST_PASSWORD}\n./gradlew --debug --stacktrace chromeHeadlessTest'
	  } finally { 
	    archiveArtifacts allowEmptyArchive: true, artifacts: 'build/reports/**/*'
            archiveArtifacts allowEmptyArchive: true, artifacts: 'build/test-results/**/*'
            junit 'build/test-results/**/*.xml'
	  }
       }
    }
}

stage('deploy-test') {
  timeout(time: 3, unit: 'DAYS') {
      input message: "Deploy to test?", submitter: 'admin'
  }
  node('master') {
    echo "Send code to test ...."
    openshiftTag destStream: 'devxp', verbose: 'true', destTag: 'test', srcStream: 'devxp', srcTag: "${IMAGE_HASH}"
    openshiftVerifyDeployment depCfg: '<dc-test>', namespace: '<project-prefix>-test', replicaCount: 1, verbose: 'false', verifyReplicaCount: 'false'
    echo "Send email ...."
    mail (to: 'user@domain', subject: "Job '${env.JOB_NAME}' (${env.BUILD_NUMBER}) promoted to test", body: "URL: ${env.BUILD_URL}.");
    echo "Stage deploy-test done"
  }
}

stage('deploy-prod') {
  timeout(time: 3, unit: 'DAYS') {
      input message: "Deploy to prod?", submitter: 'admin'
  }
  node('master') {
    echo "Send code to production ...."
    openshiftTag destStream: '<name>', verbose: 'true', destTag: 'prodblue', srcStream: 'devxp', srcTag: 'prod'
    openshiftTag destStream: '<name>', verbose: 'true', destTag: 'prod', srcStream: 'devxp', srcTag: "${IMAGE_HASH}"
    openshiftVerifyDeployment depCfg: '<dc-prod>', namespace: '<project-prefix>-prod', replicaCount: 1, verbose: 'false', verifyReplicaCount: 'false'
    echo "Send email ...."
    mail (to: 'user@domain', subject: "Job '${env.JOB_NAME}' (${env.BUILD_NUMBER}) promoted to production", body: "URL: ${env.BUILD_URL}.");
    echo "Stage deploy-prod done" 
  }
}
