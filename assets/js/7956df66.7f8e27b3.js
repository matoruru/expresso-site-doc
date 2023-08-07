"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[35],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var s=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=s.createContext({}),l=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return s.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,d=u["".concat(c,".").concat(m)]||u[m]||h[m]||r;return n?s.createElement(d,a(a({ref:t},p),{},{components:n})):s.createElement(d,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<r;l++)a[l]=n[l];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=n(7462),o=(n(7294),n(3905));const r={sidebar_position:6},a="Use Cases",i={unversionedId:"overview/usecase",id:"overview/usecase",title:"Use Cases",description:"From a UML standpoint, use cases provide a way to model the interactions between users, other systems, and a software application. A use case describes a specific scenario or flow of events between the actors and the system, leading to a certain outcome.",source:"@site/docs/overview/usecase.md",sourceDirName:"overview",slug:"/overview/usecase",permalink:"/docs/overview/usecase",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Controllers",permalink:"/docs/overview/controller"},next:{title:"Providers",permalink:"/docs/overview/providers"}},c={},l=[{value:"We recommend",id:"we-recommend",level:2},{value:"Example",id:"example",level:2},{value:"Explanation",id:"explanation",level:2},{value:"Constructor injection",id:"constructor-injection",level:3},{value:"Support the project",id:"support-the-project",level:2}],p={toc:l},u="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,s.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-cases"},"Use Cases"),(0,o.kt)("p",null,"From a UML standpoint, use cases provide a way to model the interactions between users, other systems, and a software application. A use case describes a specific scenario or flow of events between the actors and the system, leading to a certain outcome."),(0,o.kt)("p",null,"In the context of ExpressoTS, use cases represent the business logic of the application, allowing for a clear separation between the controller and the request execution."),(0,o.kt)("h2",{id:"we-recommend"},"We recommend"),(0,o.kt)("p",null,"Despite you can use any design pattern you want such as ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/overview/controller#a-mvc-approach"},"MVC")),", in the ExpressoTS opinionated template we reinforce the use of the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"},"Clean architecture"))," and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898"},"SOLID principles")),". We believe that this approach will help you to build a more maintainable and scalable application."),(0,o.kt)("p",null,"It is best practice to have one use case per controller, with the controller being responsible for calling the corresponding use case that will implement the business logic of the request. The request payload, also known as request DTO in ExpressoTS, contains the information required to execute the use case."),(0,o.kt)("p",null,'A use case in ExpressoTS contains only the business logic of the application, keeping it separate from the controller logic. It is common to have response DTOs as part of the use case, defining the response format of the request. The use case typically contains a single function called "execute", responsible for executing the logic of that particular use case.'),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"It is worth noting that having multiple use cases implemented within a single class violates the single responsibility principle and should be avoided.")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Here is an example of a use case diagram for a project x:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Project X Use Case Diagram",src:n(1088).Z,width:"750",height:"428"})),(0,o.kt)("p",null,"In the use case diagram above, the actor represents the user interacting with the system. To execute the Login use case, the user must provide specific information known as the payload or, in the case of ExpressoTS, the request DTO. This information is necessary to trigger the use case and for the system to deliver the desired outcome."),(0,o.kt)("p",null,"It is important to note that the use case should exclusively contain the business logic of the application, with no additional or unrelated functionalities. This approach helps to ensure a clear separation of concerns, promoting maintainability, and scalability of the system."),(0,o.kt)("p",null,"Here is a simple implementation of the use case:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@provide(LoginUserUseCase)\nclass LoginUserUseCase {\n\n  execute(payload: ILoginUserRequestDTO): boolean {\n    const { email, password } = payload;\n    \n    if (isAuthenticated(email, password)) {\n      return true;\n    }\n    \n    return false;\n  }\n}\n\nexport { LoginUserUseCase };\n")),(0,o.kt)("h2",{id:"explanation"},"Explanation"),(0,o.kt)("p",null,"The implementation of use cases in ExpressoTS follows the best practices of software design, where each use case is responsible for implementing a specific business logic. As shown in the example code snippet, a use case typically contains only one function, called execute, which is responsible for executing the business logic defined in that use case. The use case may also include a response DTO that defines the format of the response for that particular use case."),(0,o.kt)("p",null,"Also, it is common to use constructors in use cases to inject dependencies such as providers and repositories. This allows for better code modularity and testability."),(0,o.kt)("h3",{id:"constructor-injection"},"Constructor injection"),(0,o.kt)("p",null,"With ExpressoTS ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/overview/di"},"Dependency Injection"))," system we can use the constructor in the use cases to inject dependencies, such as providers, repositories, entities or any other helper class necessary to deliver the usecase response. This allows for better modularity and testability of the code."),(0,o.kt)("p",null,"Here is an example of a use case with constructor injection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class ExampleUseCase {\n  \n  constructor(\n    private yourInjection1: Injection1, \n    private yourInjection2: Injection2\n  ) {}  \n  \n  execute() {\n    this.yourInjection1.foo();\n    this.yourInjection2.bar();\n  }\n}\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"It is important to adhere to the principle of single responsibility when implementing use cases. Each use case should only handle a specific business logic, and if you find yourself implementing multiple use cases in a single class, it is time to review your implementation to ensure that each use case has a clear and concise responsibility.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"support-the-project"},"Support the project"),(0,o.kt)("p",null,"ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Become a sponsor on ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/sponsors/expressots"},"Sponsor no GitHub"))),(0,o.kt)("li",{parentName:"ul"},"Follow the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/expressots"},"organization"))," on GitHub and Star \u2b50 the project"),(0,o.kt)("li",{parentName:"ul"},"Subscribe to the Twitch channel: ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://www.twitch.tv/richardzampieri"},"Richard Zampieri"))),(0,o.kt)("li",{parentName:"ul"},"Join our ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://discord.com/invite/PyPJfGK"},"Discord"))),(0,o.kt)("li",{parentName:"ul"},"Contribute submitting ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/expressots/expressots/issues/new/choose"},"issues and pull requests"))),(0,o.kt)("li",{parentName:"ul"},"Share the project with your friends and colleagues")))}h.isMDXComponent=!0},1088:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/use-case-project-x-d20e76cb969011bd096d033e582bf2ff.png"}}]);