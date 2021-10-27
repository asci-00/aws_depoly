

## <img align="left" src="https://github.com/asci-00/aws_depoly/blob/main/public/awsicon.png" height="50" alt="aws icon"/> AWS를 사용한 CI/CD 

React 기반 프로젝트 + 형상관리프로그램 (Git) + 배포 서버(AWS 기본제공) + Amplify 서비스(AWS)

기반에서 CI/CD 구현하기
### CI/CD란?

* CI : 개발자를 위한 자동화 프로세스인 지속적인 통합(Continuous Integration)을 의미
  > 애플리케이션에 대한 새로운 코드 변경 사항이 정기적으로 빌드 및 테스트되어 공유 리포지토리에 통합되므로 여러 명의 개발자가 동시에 애플리케이션 개발과 관련된 코드 작업을 할 경우 서로 충돌할 수 있는 문제를 해결
* CD : 지속적인 서비스 제공(Continuous Delivery) 및/또는 지속적인 배포(Continuous Deployment)를 의미
<h3>:memo: 단계</h3>

[ 1. React-app 만들기 ]
<pre>Create-react-app을 통해 기본적인 리액트 웹앱 생성</pre>

[ 2. Repository 만들기 & React-app 소스코드 업로드 ]
<pre>소스코드 형상관리를 위한 Git Repository 생성 및 React 코드 업로드</pre>

[ 3. AWS Amplify 설정 ]
<pre>
1. AWS Amplify 콘솔을 통해 해당 GIt Repository 연결
2. 빌드 설정& 저장 및 배포
3. 제공된 테스트용 배포서버 확인 (https://branch_name.app_id.amplifyapp.com)
</pre>

[ 4. 확인 ]
<pre>
1. Local Storage 에서 개발 후, Git Repository에 업로드
2. AWS Amplify 콘솔에서 빌드 과정 확인
3. 배포 완료시, 배포서버의 변경사항 적용 확인
</pre>

