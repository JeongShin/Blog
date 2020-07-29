(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{407:function(t,e,_){"use strict";_.r(e);var v=_(67),a=Object(v.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"database"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#database"}},[t._v("#")]),t._v(" Database")]),t._v(" "),_("h2",{attrs:{id:"데이터베이스-기초"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#데이터베이스-기초"}},[t._v("#")]),t._v(" 데이터베이스 기초")]),t._v(" "),_("h3",{attrs:{id:"데이터-모델-분류"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#데이터-모델-분류"}},[t._v("#")]),t._v(" 데이터 모델 분류")]),t._v(" "),_("ul",[_("li",[t._v("관계형 데이터 모델")])]),t._v(" "),_("p",[t._v("관계형 데이터 모델은 테이블(릴레이션)의 형식으로 표현하는 확실한 이론적 기반과 간결한 표현형식으로 "),_("strong",[t._v("가장 많은 상용 DBMS가 사용")]),t._v("한다.")]),t._v(" "),_("ul",[_("li",[t._v("객체지향 데이터 모델")])]),t._v(" "),_("p",[t._v("데이터 구조가 복잡하여 관계형 모델이 부적당한 경우 데이터를 클래스 단위로 표현하여 상속, 캡슐화 등의 객체 지향 개념을상도입하고 있다.")]),t._v(" "),_("ul",[_("li",[t._v("계층형 데이터 모델")])]),t._v(" "),_("p",[t._v("데이터를 트리 구조로 표현하며 각 노드가 레코드가 된다.")]),t._v(" "),_("ul",[_("li",[t._v("네트워크 데이터 모델")])]),t._v(" "),_("p",[t._v("계층형을 보완한 모델로 트리가 아닌 그래프 형태로 표현한다.")]),t._v(" "),_("h3",{attrs:{id:"스키마와-인스턴스"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#스키마와-인스턴스"}},[t._v("#")]),t._v(" 스키마와 인스턴스")]),t._v(" "),_("p",[_("code",[t._v("스키마")])]),t._v(" "),_("p",[t._v("👉 메타 데이터와 같은 의미로 데이터 베이스의 구조에 대한 정보를 의미한다. 대부분 데이터베이스 설계과정에서 정의되며 자주 변경되지 않는 특징을 가진다.")]),t._v(" "),_("p",[t._v("👉 스키마는 데이터 항목, 데이터 타입과 같은 구조와 데이터가 만족해야할 제약 조건까지 포함한다.")]),t._v(" "),_("p",[_("code",[t._v("인스턴스")])]),t._v(" "),_("p",[t._v("👉 스키마에 대한 실제 데이터를 인스턴스라 한다.")]),t._v(" "),_("h3",{attrs:{id:"스키마-아키텍처"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#스키마-아키텍처"}},[t._v("#")]),t._v(" 스키마 아키텍처")]),t._v(" "),_("ol",[_("li",[t._v("논리적 단계 : 논리적 스키마")])]),t._v(" "),_("p",[t._v("논리적 단계에서는 전체 데이터 베이스의 논리적 구조를 기술한다. 논리적 스키마는 논리적 데이터 모델을 사용하며 관계형 모델의 경우에는 데이터베이스 테이블들의 집합 및 제약조건들로 표현된다.")]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[t._v("내부 단계 : 내부 스키마")])]),t._v(" "),_("p",[t._v("내부 단계에서는 데이터베이스의 물리적 구조를 기술한다. 데이터 저장 구조의 세부 사항과 데이터 접근 경로들을 기술한다.")]),t._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[t._v("외부 단계 : 외부 스키마")])]),t._v(" "),_("p",[t._v("사용자 뷰에 해당한다. 사용자가 관심을 갖는 데이터베이스의 부분을 기술하고 나머지는 숨긴다.")]),t._v(" "),_("h3",{attrs:{id:"데이터의-독립성"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#데이터의-독립성"}},[t._v("#")]),t._v(" 데이터의 독립성")]),t._v(" "),_("p",[t._v("3 단계 스키마 아키텍처를 통해 상위 스키마와 하위 스키마가 매핑을 통해 "),_("strong",[t._v("데이터의 독립성")]),t._v("을 제공할 수 있다.")]),t._v(" "),_("p",[_("code",[t._v("물리적 데이터 독립성")])]),t._v(" "),_("p",[t._v("논리적 스키마 또는 외부 스키마의 정의를 변경할 필요 없이 물리적 스키마를 수정할 수 있는 능력을 의미한다.")]),t._v(" "),_("p",[t._v("예를들어, 학사 DB에서 전공 별 학생들에 대한 데이터 검색이 빈번한 경우, 학생 테이블을 전공에 대해 정렬한든지 인덱스를 추가하여 논리적 스키마를 변경하지 않아도 성능을 향상시킬 수 있다.")]),t._v(" "),_("p",[_("code",[t._v("논리적 데이터 독립성")])]),t._v(" "),_("p",[t._v("외부 스키마의 정의를 변경할 필요 없이 논리적 스키마를 수정 할 수 있는 능력.")]),t._v(" "),_("p",[t._v("예를들어 학생 테이블의 경우 새로운 응용 프로그램의 개발을 위해 학년을 나타내는 속성을 추가한다고 기존 응용 프로그램은 수정할 필요가 없다.")]),t._v(" "),_("p",[_("code",[t._v("데이터 추상화")])]),t._v(" "),_("p",[t._v("응용 프로그램에서는 데이터의 물리적 구조나 상세한 내용은 알 필요가 없음. 따라서 추상화를 통해 필요한 데이터만 제공.")]),t._v(" "),_("h2",{attrs:{id:"트랜잭션"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#트랜잭션"}},[t._v("#")]),t._v(" 트랜잭션")]),t._v(" "),_("p",[t._v("데이터베이스 시스템은 다수의 사용자에 대해서도 데이터에 대한 동시적 접근 상황에서 항상 데이터의 알관성이 유지되어야 하며 혹시나 발생하는 시스템 장애에도 데이터의 손실이 없어야 한다.")]),t._v(" "),_("p",[t._v("정의 👉 일련의 데이터베이스 연산들로 이루어진 논리적인 연산 단위")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("트랜잭션의 ACID 특징")]),t._v(" "),_("p",[t._v("A - Atomicity")]),t._v(" "),_("p",[t._v("All or Nothing, 즉, 모든 연산이 완전히 수행되든지 전혀 수행되지 않아야 한다.")]),t._v(" "),_("p",[t._v("C - Consistency")]),t._v(" "),_("p",[t._v("완료한 트랜잭션은 시스템 장애 발생 시에도 그 효과가 지속적이어야 함")]),t._v(" "),_("p",[t._v("I - Isolation")]),t._v(" "),_("p",[t._v("트랙잭션의 효과가 다른 트랜잭션의 영향으로부터 독립적이어야 함")]),t._v(" "),_("p",[t._v("D - Durability")])]),t._v(" "),_("p",[t._v("출처 : 단국대학교 소프트웨어학과 이석균 교수님 - 데이터 베이스 기초, 고급 데이터 베이스 자료내용")]),t._v(" "),_("h2",{attrs:{id:"무결성-제약-조건"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#무결성-제약-조건"}},[t._v("#")]),t._v(" 무결성 제약 조건")]),t._v(" "),_("h2",{attrs:{id:"normalization-정규화"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#normalization-정규화"}},[t._v("#")]),t._v(" Normalization - 정규화")]),t._v(" "),_("p",[t._v("관계형 데이터베이스의 설계과정에서 "),_("strong",[t._v("redundancy를 최소화")]),t._v(" 하고 데이터를 구조화 하는걸 정규화 (normalization) 이라고 한다.")]),t._v(" "),_("h3",{attrs:{id:"정규화를-해야하는-이유-⁉️"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#정규화를-해야하는-이유-⁉️"}},[t._v("#")]),t._v(" 정규화를 해야하는 이유 ⁉️")]),t._v(" "),_("p",[t._v("정규화를 전혀 고려하지 않은 데이터베이스의 경우 불필요한 데이터 중복이 발생 (redundancy) 할 수 있고 데이터 중복으로 인해 공간도 낭비될 뿐만아니라 "),_("code",[t._v("Anomaly")]),t._v(" 가 발생할 수 있다.")]),t._v(" "),_("p",[t._v("👉 Insertion Anomaly")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("id")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("이름")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("강의명")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("담당 교수")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("신정웅")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("데이터베이스")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("이석균 교수님")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("정익효")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("데이터베이스")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("이석균 교수님")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("지영본")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("데이터베이스")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("이석균 교수님")])])])]),t._v(" "),_("p",[t._v("위와 같은 데이터가 있다고 가정해보자. 이때 새로운 학생이 데이터베이스 수업에 추가되면 또 같은 값에 대한 Insertion 이 이루어 진다. 아직까진 그렇게 큰 문제가 아닐 수 있다.")]),t._v(" "),_("p",[t._v("👉 Deletion Anomaly")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("id")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("이름")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("강의명")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("담당 교수")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("신정웅")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("데이터베이스")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("이석균 교수님")])])])]),t._v(" "),_("p",[t._v("위의 데이터에서 지영본, 정익효 학생의 수강 내역이 삭제되었다고 가정해보자. 이때 마지막 남은 신정웅 학생의 수강내역 마저 삭제가 되면 데이터베이스 강의명과 담당교수에 대한 데이터가 아예 없어진다. 즉, 없는 수업이 되어 버린다.")]),t._v(" "),_("p",[t._v("데이터베이스에서 수강내역만을 삭제했을 뿐인데 강의에 대한 데이터까지 전부 삭제되는 불상사가 발생한 것이다.")]),t._v(" "),_("p",[t._v("👉 Updation Anomaly")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("id")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("이름")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("강의명")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("담당 교수")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("신정웅")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("데이터베이스")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("s",[t._v("이석균")]),t._v(" 우진운 교수님")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("정익효")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("데이터베이스")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("이석균 교수님")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("지영본")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("데이터베이스")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("s",[t._v("이석균")]),t._v(" 우진운 교수님")])])])]),t._v(" "),_("p",[t._v("만약 위와 같이 데이터베이스 수업 담당 교수가 이석균 교수님에서 우진운 교수님으로 바뀌었다고 가정해보자.")]),t._v(" "),_("p",[t._v("그렇다면 중복된 이석균 교수님에 대한 모든 데이터가 다 update 되어야 한다. 만약 위와 같이 1개라도 제대로 update가 이루어지지 않으면 담당 교수는 이석균 교수님인지 우진운 교수님인지 혼돈에 휩싸일 수 있다.")]),t._v(" "),_("p",[t._v("데이터베이스 정규화는 단계별로 이루어진다. 하나씩 알아보자.")]),t._v(" "),_("h3",{attrs:{id:"_1nf-first-normal-form"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1nf-first-normal-form"}},[t._v("#")]),t._v(" 1NF - First Normal Form")]),t._v(" "),_("p",[t._v("1NF 혹은 First Normal Form 은 가장 기초적인 정규화 단계이다. 1NF 조차 지켜지지 않은 데이터베이스는 설계가 아주 잘못되었다고 볼 수 있다.")]),t._v(" "),_("p",[t._v("따라서 데이터베이스에서 모든 테이블은 "),_("strong",[t._v("최소한의 조건")]),t._v("으로 1NF는 항상 만족해야한다.")]),t._v(" "),_("p",[t._v("👉 Rule 1")]),t._v(" "),_("p",[t._v("모든 필드, 행은 "),_("strong",[t._v("atomic values")]),t._v(" 를 가져야 한다.")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("Col 1")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("Col 2")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("Col 3")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("A")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("X, Y")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("Z")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("B")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("W")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("F")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("C")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("D")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("F")])])])]),t._v(" "),_("p",[t._v("위의 경우 X, Y 값을 동시에 가지기 때문에 위반 사례가 된다.")]),t._v(" "),_("p",[t._v("👉 Rule 2")]),t._v(" "),_("p",[t._v("모든 필드의 값들은 같은 타입을 가져야 한다.")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("생일")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("이름")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("성별")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("96-11-27")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("지영본")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("여")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("08-07-09")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("정익효")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("남")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("R")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("이현수")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("남")])])])]),t._v(" "),_("p",[t._v("👉 Rule 3")]),t._v(" "),_("p",[t._v("모든 행들은 유니크한 Name (필드 명) 을 가져야 한다.")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("생일")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("이름 ❌ 성 ⭕️")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("이름")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("96-11-27")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("지")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("영본")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("08-07-09")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("정")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("익효")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("95-03-11")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("이")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("현수")])])])]),t._v(" "),_("p",[t._v("같은 한 테이블에 필드명을 가지게 되면 많은 혼란을 초래할 수 있다.")]),t._v(" "),_("h3",{attrs:{id:"_2nf-second-normal-form"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2nf-second-normal-form"}},[t._v("#")]),t._v(" 2NF - Second Normal Form")]),t._v(" "),_("p",[t._v("2NF 이해하기 위해서는 "),_("code",[t._v("partial dependency")]),t._v(" 에 대한 개념이 필요하다.")]),t._v(" "),_("p",[t._v("아래와 같은 테이블이 있닥고 가정해보자.")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("학번")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("이름")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("학과")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("1324981")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("지영본")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("도예과")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("4358941")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("정익효")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("도예과")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("1342818")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("이현수")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("성악과")])])])]),t._v(" "),_("p",[t._v("이때 학번의 필드는 데이터를 Table에서 fetch 할때 해당 튜플을 유일하게 식별 가능하다.")]),t._v(" "),_("p",[t._v("예를들어 학번이 1324981인 학생의 학과를 조회할 때 학번으로 학생의 학과를 알아낼 수 있다.")]),t._v(" "),_("p",[t._v("따라서 다른 필드들 (이름, 학과) 이러한 필드 (학번, primary key)에 종속성을 가지게 된다. 이를 "),_("strong",[t._v("dependency")]),t._v(" 혹은 "),_("strong",[t._v("functional dependency")]),t._v(" 라고 말할 수 있다. 그렇다면 partial dependency 는 무엇일까?")]),t._v(" "),_("p",[t._v("Pratial Dependency 는 primary key 가 "),_("strong",[t._v("composite key, 즉, 두개 이상의 필드가 키로 쓰일때")]),t._v(" 발생할 수 있다.")]),t._v(" "),_("p",[t._v("다음과 같은 학생의 수강 내역을 저장하는 테이블이 있다고 가정하자.")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("학번")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("이름")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("강의명")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("성적")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("담당 교수")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("1324981")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("지영본")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("데이터베이스")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("A+")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("ㅇㅇㅇ 교수님")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("4358941")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("정익효")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("알고리즘")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("B+")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("XXX 교수님")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("1342818")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("이현수")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("데이터베이스")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("F")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("ㅇㅇㅇ 교수님")])])])]),t._v(" "),_("p",[t._v("이때 학번 + 강의명이 primary key 로 사용될 수 있다. 그렇다면 종속성을 따져보자.")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("{학번, 강의명} 👉 성적\n학번 👉 이름\n강의명 👉 담당 교수\n")])])]),_("p",[t._v("따라서 담당교수 필드, 이름 필드 등은 primary key 에 대하여 부분적인 종속성, partial dependency 를 가진다.")]),t._v(" "),_("p",[t._v("2NF는 이러한 partial dependency 를 없애는걸 의미한다. {학번, 이름}에 대한 테이블, {학번, 강의명, 성적} 에 대한 테이블, {강의명, 담당교수} 에 대한 테이블로 분리해주어 모든 기본키가 아닌 필드는 기본키에 대해서 "),_("code",[t._v("full functional dependency")]),t._v(" 를 가지도록 설계해야 한다.")]),t._v(" "),_("h3",{attrs:{id:"_3nf"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3nf"}},[t._v("#")]),t._v(" 3NF")]),t._v(" "),_("h3",{attrs:{id:"bcnf"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#bcnf"}},[t._v("#")]),t._v(" BCNF")]),t._v(" "),_("p",[t._v("출처 : "),_("a",{attrs:{href:"https://ko.wikipedia.org/wiki/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%EC%A0%95%EA%B7%9C%ED%99%94",target:"_blank",rel:"noopener noreferrer"}},[t._v("위키 피디아"),_("OutboundLink")],1),t._v(" "),_("a",{attrs:{href:"https://www.youtube.com/watch?v=mUtAPbb1ECM",target:"_blank",rel:"noopener noreferrer"}},[t._v("YouTube : Studytonight"),_("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);