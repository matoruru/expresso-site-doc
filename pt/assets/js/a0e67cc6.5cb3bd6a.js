"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[474],{3905:(e,o,a)=>{a.d(o,{Zo:()=>l,kt:()=>v});var r=a(7294);function n(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function s(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,r)}return a}function t(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?s(Object(a),!0).forEach((function(o){n(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function i(e,o){if(null==e)return{};var a,r,n=function(e,o){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],o.indexOf(a)>=0||(n[a]=e[a]);return n}(e,o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var o=r.useContext(p),a=o;return e&&(a="function"==typeof e?e(o):t(t({},o),e)),a},l=function(e){var o=d(e.components);return r.createElement(p.Provider,{value:o},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},c=r.forwardRef((function(e,o){var a=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=d(a),c=n,v=m["".concat(p,".").concat(c)]||m[c]||u[c]||s;return a?r.createElement(v,t(t({ref:o},l),{},{components:a})):r.createElement(v,t({ref:o},l))}));function v(e,o){var a=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var s=a.length,t=new Array(s);t[0]=c;var i={};for(var p in o)hasOwnProperty.call(o,p)&&(i[p]=o[p]);i.originalType=e,i[m]="string"==typeof e?e:n,t[1]=i;for(var d=2;d<s;d++)t[d]=a[d];return r.createElement.apply(null,t)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5719:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>p,contentTitle:()=>t,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const s={sidebar_position:7},t="Provedores",i={unversionedId:"overview/providers",id:"overview/providers",title:"Provedores",description:"Do ponto de vista da arquitetura limpa, os Providers s\xe3o respons\xe1veis por fornecer dados e/ou mecanismos para componentes de n\xedvel superior no sistema, como casos de uso ou apresentadores, e podem abstrair os detalhes de como os dados/mecanismos s\xe3o realmente recuperados, armazenados ou executados. Essa abstra\xe7\xe3o permite que o sistema mude facilmente entre diferentes fontes/provedores de dados sem afetar os componentes de n\xedvel superior.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/overview/providers.md",sourceDirName:"overview",slug:"/overview/providers",permalink:"/pt/docs/overview/providers",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Casos de Uso",permalink:"/pt/docs/overview/usecase"},next:{title:"Reposit\xf3rios",permalink:"/pt/docs/overview/repositories"}},p={},d=[{value:"Objetivo do provedor",id:"objetivo-do-provedor",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Implementa\xe7\xe3o do Provedor",id:"implementa\xe7\xe3o-do-provedor",level:3},{value:"Consumindo o provedor no caso de uso",id:"consumindo-o-provedor-no-caso-de-uso",level:3},{value:"Apoie o projeto",id:"apoie-o-projeto",level:2}],l={toc:d},m="wrapper";function u(e){let{components:o,...a}=e;return(0,n.kt)(m,(0,r.Z)({},l,a,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"provedores"},"Provedores"),(0,n.kt)("p",null,"Do ponto de vista da arquitetura limpa, os ",(0,n.kt)("inlineCode",{parentName:"p"},"Providers")," s\xe3o respons\xe1veis por fornecer dados e/ou mecanismos para componentes de n\xedvel superior no sistema, como casos de uso ou apresentadores, e podem abstrair os detalhes de como os dados/mecanismos s\xe3o realmente recuperados, armazenados ou executados. Essa abstra\xe7\xe3o permite que o sistema mude facilmente entre diferentes fontes/provedores de dados sem afetar os componentes de n\xedvel superior."),(0,n.kt)("p",null,"Os provedores podem ser implementados como classes ou fun\xe7\xf5es, e normalmente fazem uso de componentes de infraestrutura, como bancos de dados, servi\xe7os da web ou sistemas de arquivos para realmente recuperar ou armazenar dados e executar outras tarefas. O objetivo de um provedor \xe9 encapsular todos os detalhes desses componentes de n\xedvel inferior e apresentar uma interface simples e de alto n\xedvel para o resto do sistema."),(0,n.kt)("h2",{id:"objetivo-do-provedor"},"Objetivo do provedor"),(0,n.kt)("p",null,'O objetivo de um Provedor \xe9 encapsular todos os detalhes dos componentes "substitu\xedveis" e apresentar uma interface simples e de alto n\xedvel para o resto do sistema.'),(0,n.kt)("p",null,"No contexto da inje\xe7\xe3o de depend\xeancia, os provedores s\xe3o usados para desacoplar a cria\xe7\xe3o e configura\xe7\xe3o de objetos de seu uso, o que permite testes mais f\xe1ceis, manuten\xe7\xe3o e escalabilidade do c\xf3digo. Ao usar provedores para gerenciar depend\xeancias, os desenvolvedores podem evitar o acoplamento estreito de componentes e, em vez disso, focar no design de alto n\xedvel do sistema."),(0,n.kt)("p",null,"Em geral, os provedores s\xe3o um aspecto importante do c\xf3digo limpo porque ajudam a promover o desacoplamento, a manutenibilidade e a flexibilidade em sistemas de software."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"O ExpressoTS utiliza providers para estender a capacidade da aplica\xe7\xe3o fornecendo funcionalidades adicionais.")),(0,n.kt)("h2",{id:"exemplo"},"Exemplo"),(0,n.kt)("p",null,"Vamos pegar o exemplo fornecido na se\xe7\xe3o ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/pt/docs/overview/usecase#example"},"Use Case")),"."),(0,n.kt)("p",null,"Neste cen\xe1rio, o usu\xe1rio est\xe1 tentando fazer login no sistema, e de acordo com a especifica\xe7\xe3o, o usu\xe1rio pode tentar inserir suas credenciais tr\xeas vezes antes que o sistema bloqueie sua conta. Se a conta do usu\xe1rio estiver bloqueada, o sistema envia um e-mail para notificar o usu\xe1rio."),(0,n.kt)("p",null,"A funcionalidade de e-mail \xe9 fornecida por um provider, que \xe9 usado pelo use case para enviar o e-mail para o usu\xe1rio. Esse provider \xe9 injetado no construtor do use case, permitindo que o desenvolvedor aproveite as interfaces p\xfablicas do provider."),(0,n.kt)("p",null,"Um dos benef\xedcios imediatos do uso de providers \xe9 que eles facilitam testes mais f\xe1ceis, pois o c\xf3digo est\xe1 desacoplado dos casos de uso, e um componente pode ser facilmente substitu\xeddo por outro componente que implemente a mesma interface."),(0,n.kt)("h3",{id:"implementa\xe7\xe3o-do-provedor"},"Implementa\xe7\xe3o do Provedor"),(0,n.kt)("p",null,"Aqui est\xe1 um exemplo de implementa\xe7\xe3o de um provedor em ExpressoTS para envio de e-mails:"),(0,n.kt)("p",null,"N\xf3s estamos usando ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://mailtrap.io/"},"Mailtrap"))," como nosso provedor de email e a lib nodemailer para enviar emails."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'import nodemailer from "nodemailer";\nimport Mail from "nodemailer/lib/mailer";\n\nconst enum EmailType {\n    Welcome = 0,\n    CreateUser,\n    ChangePassword,\n    Login,\n    RecoveryPassword\n}\n\n@provide(MailTrapProvider)\nclass MailTrapProvider {\n\n    private transporter: Mail;\n\n    constructor() {\n\n        this.transporter = nodemailer.createTransport({\n            host: Env.Mailtrap.HOST,\n            port: Env.Mailtrap.PORT,\n            auth: {\n                user: Env.Mailtrap.USERNAME,\n                pass: Env.Mailtrap.PASSWORD\n            }\n        });\n    }\n\n    private mailSender(message: IMessage): Promise<void> {\n        await this.transporter.sendMail({\n            to: {\n                name: message.to.name,\n                address: message.to.email\n            },\n            from: {\n                name: message.from.name,\n                address: message.from.email\n            },\n            subject: message.subject,\n            html: message.body\n        })\n    }\n\n    sendEmail(emailType: EmailType): Promise<void> {\n        switch (emailType) {\n            case EmailType.Login:\n                break;\n            case EmailType.Welcome:\n                break;\n            case EmailType.RecoveryPassword:\n                break;\n            case EmailType.ChangePassword:\n                break;\n            case EmailType.CreateUser:\n                this.MailSender({\n                    to: {\n                        name: "User",\n                        email: Env.Mailtrap.INBOX_ALIAS\n                    },\n                    from: {\n                        name: "ExpressoTS",\n                        email: "noreply@expresso-ts.com"\n                    },\n                    subject: "Successfully logged in!",\n                    body: "<h1>Welcome to the system!</h1>"\n                });\n                break;\n        }\n    }\n}\n\nexport { MailTrapProvider, EmailType };\n')),(0,n.kt)("p",null,"Nessa implementa\xe7\xe3o, h\xe1 uma fun\xe7\xe3o auxiliar privada e uma \xfanica interface p\xfablica chamada ",(0,n.kt)("inlineCode",{parentName:"p"},"sendEmail()"),"  que ser\xe1 usada no caso de uso. O provedor \xe9 injetado no construtor para ser usado pelo caso de uso."),(0,n.kt)("h3",{id:"consumindo-o-provedor-no-caso-de-uso"},"Consumindo o provedor no caso de uso"),(0,n.kt)("p",null,"Aqui est\xe1 a implementa\xe7\xe3o do caso de uso fazendo uso do provedor:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"@provide(LoginUserUseCase)\nclass LoginUserUseCase {\n\n  constructor(private mailTrapProvider?: MailTrapProvider) { }\n  \n  execute(payload: ILoginUserRequestDTO): boolean {\n    const { email, password } = payload;\n    \n    if (isAuthenticated(email, password)) {\n        return true;\n    }\n\n     // Implementa\xe7\xe3o da l\xf3gica do caso de uso\n     mailTrapProvider?.sendEmail(EmailType.Login);\n    \n    return false;\n  }\n}\n\nexport { LoginUserUseCase };\n")),(0,n.kt)("p",null,"No caso de uso acima, injetamos o ",(0,n.kt)("inlineCode",{parentName:"p"},"MailTrapProvider")," no construtor fazendo uso do container ioC. No m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"execute()")," do caso de uso, estamos chamando o m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"sendEmail()")," do provedor para enviar um e-mail para o usu\xe1rio em caso de login sem sucesso."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"apoie-o-projeto"},"Apoie o projeto"),(0,n.kt)("p",null,"ExpressoTS \xe9 um projeto de c\xf3digo aberto licenciado sob o MIT. \xc9 um projeto independente com desenvolvimento cont\xednuo possibilitado gra\xe7as ao seu suporte. Se voc\xea deseja ajudar, por favor considere:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Se tornar um ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/sponsors/expressots"},"Sponsor no GitHub"))),(0,n.kt)("li",{parentName:"ul"},"Siga a ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/expressots"},"organiza\xe7\xe3o"))," no GitHub e de um Star \u2b50 no projeto"),(0,n.kt)("li",{parentName:"ul"},"Subscreva no nosso canal na Twitch: ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://www.twitch.tv/richardzampieri"},"Richard Zampieri"))),(0,n.kt)("li",{parentName:"ul"},"Entre no nosso ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://discord.com/invite/PyPJfGK"},"Discord"))),(0,n.kt)("li",{parentName:"ul"},"Contribua submetendo ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/expressots/expressots/issues/new/choose"},"issues e pull requests"))),(0,n.kt)("li",{parentName:"ul"},"Compartilhe o projeto com seus amigos e colegas")))}u.isMDXComponent=!0}}]);