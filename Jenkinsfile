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
             returnStdout: true
           ).trim()
           
       SONARQUBE_URL = sh (
             script: 'oc get routes -o wide --no-headers | awk \'/sonarqube/{ print match($0,/edge/) ?  "https://"$2 : "http://"$2 }\'',
               returnStdout: true
           ).trim()

       dir('sonar-runner') {
         sh returnStdout: true, script: "./gradlew sonarqube -Dsonar.host.url=${SONARQUBE_URL} -Dsonar.verbose=true --stacktrace --info  -Dsonar.sources=.."
       }
    }
	
    stage('build') {
	    echo "Building..."
	    openshiftBuild bldCfg: '<name>', showBuildLogs: 'true'
	    openshiftTag destStream: '<name>', verbose: 'true', destTag: '$BUILD_ID', srcStream: 'devxp', srcTag: 'latest'
	    openshiftTag destStream: '<name>', verbose: 'true', destTag: 'dev', srcStream: 'devxp', srcTag: 'latest'
    }
	
    stage('validation') {
	    echo "Validation ...."
        dir('functional-tests'){
		  	TEST_USERNAME = sh (
             script: 'oc env bc/devxp --list | awk  -F  "=" \'/TEST_USERNAME/{print $2}\'',
             returnStdout: true
           ).trim()
			  
	  		TEST_PASSWORD = sh (
             script: 'oc env bc/devxp --list | awk  -F  "=" \'/TEST_PASSWORD/{print $2}\'',
             returnStdout: true
           ).trim()
			  
        sh "export TEST_USERNAME=${TEST_USERNAME}\nexport TEST_PASSWORD=${TEST_PASSWORD}\n./gradlew --debug --stacktrace phantomJsTest"
      }
    }
	
    // Archive the built artifacts
    archive (allowEmptyArchive: true, includes: 'report/*.html')

}

stage('deploy-test') {
  timeout(time: 10, unit: 'MINUTES') {
      input message: "Deploy to test?", submitter: 'admin'
  }
  echo "Send email ...."
  mail (to: 'user@domain', subject: "Job '${env.JOB_NAME}' (${env.BUILD_NUMBER}) promoted to test", body: "URL: ${env.BUILD_URL}.");
  echo "Send code to test ...."
  node('master'){
     openshiftTag destStream: 'devxp', verbose: 'true', destTag: 'test', srcStream: 'devxp', srcTag: '$BUILD_ID'
  }
  echo "Stage deploy-test done"
}

stage('deploy-prod') {
  timeout(time: 10, unit: 'MINUTES') {
      input message: "Deploy to prod?", submitter: 'admin'
  }
  node('master'){
     openshiftTag destStream: 'devxp', verbose: 'true', destTag: 'prod', srcStream: 'devxp', srcTag: '$BUILD_ID'
  }
}
