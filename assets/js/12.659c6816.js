(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{404:function(s,a,t){"use strict";t.r(a);var e=t(67),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"ruby-on-rails"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ruby-on-rails"}},[s._v("#")]),s._v(" Ruby on Rails "),t("img",{attrs:{src:"https://img.icons8.com/color/48/000000/ruby-programming-language.png"}})]),s._v(" "),t("p",[s._v("이 문서는 공식 "),t("a",{attrs:{href:"https://rubykr.github.io/rails_guides/getting_started.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("레일즈 가이드"),t("OutboundLink")],1),s._v("를 참고하여 만들었습니다.")]),s._v(" "),t("p",[s._v("Rails는 Ruby 언어로 작성된 웹, 앱 어플리케이션 프레임워크이다.")]),s._v(" "),t("h2",{attrs:{id:"rails-overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rails-overview"}},[s._v("#")]),s._v(" Rails Overview")]),s._v(" "),t("p",[s._v("Ruby on Rails 의 특징 3가지를 알아보자.")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("MVC Architecture")])])]),s._v(" "),t("p",[s._v("Model, View, Controller 를 분리하여 설계하는 아키텍쳐.")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("Rails 에서의 MVC")]),s._v(" "),t("p",[s._v("레일즈에서 모델은 주로 데이터 베이스 테이블과 상호 작용하는 규칙들을 관리한다.")]),s._v(" "),t("p",[s._v("대부분의 경우에 데이터베이스 하나의 테이블은 어플리케이션의 하나의 모들과 대응한다.")])]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("code",[s._v("Convention Over Configuartion")]),s._v(" 👉 설정 보다 관습")])]),s._v(" "),t("p",[s._v("미리 환경을 구축하여 개발자가 세팅하는데 시간을 사용하지 않고 바로 개발, 코딩에 들어가도록 돕는다.")]),s._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[t("code",[s._v("DRY")]),s._v(" 👉 Don't Repeat Yourself")])]),s._v(" "),t("p",[s._v("Software적 철학으로 aviod redundancy. 정규화를 통하여 최소한의 것들로 최대한의 것을 만든다.")]),s._v(" "),t("h2",{attrs:{id:"rails-components"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rails-components"}},[s._v("#")]),s._v(" Rails Components")]),s._v(" "),t("p",[t("code",[s._v("Gem")]),s._v(" 이란?")]),s._v(" "),t("p",[s._v("Rails 에서 사용하는 라이브러리를 의미한다. node 에서 사용하는 npm과 유사한 개념이다.")]),s._v(" "),t("p",[s._v("Rails 는 다음과 같은 개발 컴포넌트를 제공한다.")]),s._v(" "),t("ul",[t("li",[s._v("Action Pack 👉 MVC 에서 VC에 해당하는 부분\n"),t("ul",[t("li",[s._v("Action Controller 👉 Request를 처리하고 파라미터 추출한 뒤 의도된 액션으로 forward 한다. 액션 컨트롤러는 session 관리, template rendering, redirect 관리 서비스를 포함한다.")]),s._v(" "),t("li",[s._v("Action Dispatch 👉 Request 를 원하는 곳으로 연결")]),s._v(" "),t("li",[s._v("Action View 👉 HTML, XML을 만든다. 템풀릿 렌더링, Nested, Partial 템플릿, AJAX 지원을 관리한다.")])])]),s._v(" "),t("li",[s._v("Action Mailer 👉 내장 이메일 서비스 프레임워크")]),s._v(" "),t("li",[s._v("Active Model 👉액션 팩 서비스와 ORM Gem 과 인터페이스 정의.")]),s._v(" "),t("li",[s._v("Active Record 👉 레일즈 앱 모델의 기초. 데이터베이스 추상화와 기본 CRUD 기능 고급 검색 능력과 객체들 간의 관계를 정의하는 기능을 제공.")]),s._v(" "),t("li",[s._v("Active Resource 👉 비즈니스 객체와 RESTful 웹 서비스간의 연결을 위한 프레임 워크. 웹 기반의 자원을 로컬 객체의 CRUD 처럼 매핑.")]),s._v(" "),t("li",[s._v("Active Support 👉 레일즈가 사용하는 유틸리티 클래스와 표준 루비 확장 모음")]),s._v(" "),t("li",[s._v("Railites 👉 다양한 프레임워크와 플러그인을 이어주는 레일즈 핵심 코드")])]),s._v(" "),t("h2",{attrs:{id:"active-record-migration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#active-record-migration"}},[s._v("#")]),s._v(" Active Record Migration")]),s._v(" "),t("h3",{attrs:{id:"rails-database-특징"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rails-database-특징"}},[s._v("#")]),s._v(" Rails Database 특징")]),s._v(" "),t("p",[s._v("레일즈에선 기본적으로 SQLite3 를 내장하여 개발 & 테스트 환경에서 사용하고 나중에 config/database.yml에서 설정을 바꿀 수 있다.")]),s._v(" "),t("p",[s._v("MySQL 데이터 베이스 혹은 PostgreSQL 을 설정할 수 있다.")]),s._v(" "),t("p",[s._v("마이그레이션은 데이터베이스를 루비를 이용해서 데이터베이스에 대한 변경을 적용하기 위한 편리한 방법이다.")]),s._v(" "),t("p",[s._v("따라서 개발자는 SQL을 손수 수정하고 다른 개발자에게 수정 사항을 알려줘야할 책임을 가진다.")]),s._v(" "),t("p",[t("strong",[s._v("Active Records")]),s._v(" 는 이미 실행된 마이그레이션을 추적한다. 따라서 개발자는 소스를 업데이트하고")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("rake db:migrate\n")])])]),t("p",[s._v("명령을 실행만 하면된다. 자동으로 db/schema.rb 파일이 갱신된다.")]),s._v(" "),t("p",[s._v("마이그레이션은 "),t("strong",[s._v("데이터베이스에 독립적")]),s._v("이다. 따라서 개발에서 SQLite3 를 사용하고 제품에서는 MySQL 을 사용할 수 있다.")]),s._v(" "),t("h3",{attrs:{id:"migration-overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#migration-overview"}},[s._v("#")]),s._v(" Migration Overview")]),s._v(" "),t("h4",{attrs:{id:"마이그레이션은-클래스이다"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#마이그레이션은-클래스이다"}},[s._v("#")]),s._v(" 마이그레이션은 클래스이다")]),s._v(" "),t("p",[s._v("마이그레이션은 up (필요한 변경 사항 수행) 과 down (변경 사항 되돌리기) 를 구현한 ActiveRecord::Migration의 서브 클래스이다.")]),s._v(" "),t("p",[s._v("액티브 레코드는 데이터베이스에 독립적이게 일반 데이터 정의 태스크를 수행하는 메소드를 제공하는데 아래와 같다.")]),s._v(" "),t("ul",[t("li",[s._v("create_table")]),s._v(" "),t("li",[s._v("change_table")]),s._v(" "),t("li",[s._v("drop_table")]),s._v(" "),t("li",[s._v("add_column")]),s._v(" "),t("li",[s._v("change_column")]),s._v(" "),t("li",[s._v("rename_column")]),s._v(" "),t("li",[s._v("remove_column")]),s._v(" "),t("li",[s._v("add_index")]),s._v(" "),t("li",[s._v("remove_index")])]),s._v(" "),t("h4",{attrs:{id:"마이그레이션-이름의-의미"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#마이그레이션-이름의-의미"}},[s._v("#")]),s._v(" 마이그레이션 이름의 의미")]),s._v(" "),t("p",[s._v("마이그레이션은 각 클래스당 하나의 파일로 db/migrate에 저장된다. 파일 이름은")]),s._v(" "),t("p",[t("em",[s._v("타임스탬프 마이그레이션 식별자_마이그레이션 이름")])]),s._v(" "),t("p",[s._v("ex) YYYYMMDDHHMMSS_create_products.rb")]),s._v(" "),t("p",[s._v("의 형식으로 구성된다.")]),s._v(" "),t("p",[s._v("이때 반드시 "),t("strong",[s._v("같은 이름을 가진 클래스를 정의")]),s._v(" 해야한다 (CamelCase 형식 사용). 위의 경우 CreateProducts 클래스가 반드시 있어야 적상적으로 클래스를 찾을 수 있다.")]),s._v(" "),t("h4",{attrs:{id:"마이그레이션-변경하기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#마이그레이션-변경하기"}},[s._v("#")]),s._v(" 마이그레이션 변경하기")]),s._v(" "),t("p",[s._v("마이그레이션을 작성하다 문제점이 발견되면 이미 실행된 마이그레이션의 경우 단순히 마이그레이션을 수정하고 다시 실행하는 것만으로 원하는 변경을 반영할 수 없다.")]),s._v(" "),t("p",[s._v("따라서 롤백을 (rake db:rollback) 하고 다시 마이그레이션을 수정한 뒤 정확한 버전에 대하여 rake db:migrate를 실행해야 한다.")]),s._v(" "),t("h2",{attrs:{id:"scaffold"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scaffold"}},[s._v("#")]),s._v(" Scaffold")]),s._v(" "),t("p",[s._v("Scaffold (발판) 방식은 CRUD에 판한 빠른 구현을 제공 해주지만 불필요한 요소가 포함되어 있을 수 있다.")]),s._v(" "),t("p",[s._v("Scaffold 방식을 이용하여 간단한 앱을 구현해보자.")]),s._v(" "),t("h3",{attrs:{id:"rails-프로젝트-생성"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rails-프로젝트-생성"}},[s._v("#")]),s._v(" Rails 프로젝트 생성")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("rails new "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Project_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("의 명령어로 프로젝트를 만든다.")]),s._v(" "),t("p",[s._v("그리고")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("rails server\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#혹은")]),s._v("\nrails s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("명령어로 서버를 동작할 수 있다. 루비로 웹서버는 느리다는 단점이 있다.")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 다음과 같이 명령어를 수행 하였다")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tips : rails g scaffold <DB TABLE NAME> <attributes>")]),s._v("\n$ rails g scaffold Project title:string description:text percent_complete:decimal\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("위의 명령어로 데이터베이스에 대한 설계를 해주고 migration 을 진행 해준다.")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("rake db:migrate\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("여기서 "),t("code",[s._v("rake db")]),s._v(" 명령어에 대하여 알아보자.")]),s._v(" "),t("ul",[t("li",[s._v("rake db:schema:load 👉 새로운 테이블을 생성한다.")]),s._v(" "),t("li",[s._v("rake db:reset 👉 데이터 베이스를 초기화 한다. (db:drop + db:create + db:migrate 를 수행한다 생각하면 됨)")]),s._v(" "),t("li",[s._v("rake db:migrate 👉 아직 수행되지 않은 하나의 migration을 진행한다. 스키마에 변경이 있을때 migration을 수행한다.")]),s._v(" "),t("li",[s._v("rake db:create 👉 데이터 베이스 생성한다.")]),s._v(" "),t("li",[s._v("rake db:drop 👉 데이터 베이스를 삭제한다.")]),s._v(" "),t("li",[s._v("rake db:setup 👉 db:create, db:schema:load, db:seed 를 수행한다")])]),s._v(" "),t("h3",{attrs:{id:"font-추가하기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#font-추가하기"}},[s._v("#")]),s._v(" Font 추가하기")]),s._v(" "),t("p",[s._v("폰트를 프로젝트 내부에 저장해두는 것이 구글 폰트 등 사용할 때 서버가 다운되거나 등의 이유에 있어 제대로 로딩되지 않을껄 대비하여 유리하다.")]),s._v(" "),t("p",[s._v("먼저 app/assets/ 디렉토리에 fonts 라는 폴더를 새로 만들어 준 뒤 다운받은 폰트를 저장한다.")]),s._v(" "),t("p",[s._v("그리고 나서 config/ 디렉토리로 이동하여 applcation.rb 파일에 아래의 내용을 추가 해준다.")]),s._v(" "),t("div",{staticClass:"language-rb line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-rb"}},[t("code",[s._v("config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("assets"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("enabled "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nconfig"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("assets"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("paths "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Rails")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("join"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/app/assets/fonts'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("기본적인 assets 파일 구조에 새로운 파일 fonts 를 config 에 정상적으로 추가되도록 paths 배열에 추가하기 위함이다.")]),s._v(" "),t("h3",{attrs:{id:"controller-살펴보기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#controller-살펴보기"}},[s._v("#")]),s._v(" Controller 살펴보기")]),s._v(" "),t("div",{staticClass:"language-rb line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-rb"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ProjectsController")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ApplicationController")]),s._v("\n  before_action "),t("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":set_project")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" only"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":show")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":edit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":update")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":destroy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("일단 1행부터 살퍄보면 ProjectsController는 ApplicationController 를 상속 받는다.")]),s._v(" "),t("p",[s._v("before_cation은 only 뒤에 오는 배열에 속한 메서드 마다 set_project를 실행하게 한다.")]),s._v(" "),t("div",{staticClass:"language-rb line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-rb"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token method-definition"}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("show")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Use callbacks to share common setup or constraints between actions.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token method-definition"}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set_project")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@project")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Project")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("find"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("params"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":id")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("즉 show 메서드가 실행될 때마다 set_project를 먼저 실행하고 다음으로 show 메서드를 수행하게 된다.")]),s._v(" "),t("p",[s._v("여기서 루비 온 레일즈의 3번째 철학인 DRY를 엿볼 수 있다.")])])}),[],!1,null,null,null);a.default=r.exports}}]);