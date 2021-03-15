const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl : 'http://localhost:9000',
    options: {
      'sonar.projectName': 'digital-form-builder',
      'sonar.projectDescription': 'Description for "My App" project...',
      'sonar.login': 'admin',
      'sonar.password': 'gautam',
      'sonar.projectBaseDir':'.',
      'sonar.projectKey':'digital-form-builder'
    }
  },
  () => process.exit()
)
