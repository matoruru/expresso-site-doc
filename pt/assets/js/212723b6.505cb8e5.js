"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[277],{3905:(e,r,a)=>{a.d(r,{Zo:()=>c,kt:()=>f});var t=a(7294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=t.createContext({}),l=function(e){var r=t.useContext(p),a=r;return e&&(a="function"==typeof e?e(r):s(s({},r),e)),a},c=function(e){var r=l(e.components);return t.createElement(p.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(a),u=n,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return a?t.createElement(f,s(s({ref:r},c),{},{components:a})):t.createElement(f,s({ref:r},c))}));function f(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5162:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=a(7462),n=(a(7294),a(3905));const o={sidebar_position:16},s="Renderizac\xe3o",i={unversionedId:"overview/render",id:"overview/render",title:"Renderizac\xe3o",description:"Expressjs oferece um m\xe9todo render para renderizar uma visualiza\xe7\xe3o e enviar a sequ\xeancia HTML renderizada para o cliente.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/overview/render.md",sourceDirName:"overview",slug:"/overview/render",permalink:"/pt/docs/overview/render",draft:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"Teste",permalink:"/pt/docs/overview/test"},next:{title:"Providers",permalink:"/pt/docs/category/providers"}},p={},l=[{value:"IHandlebars interface example",id:"ihandlebars-interface-example",level:2},{value:"Como usar",id:"como-usar",level:2},{value:"Estrutura de pastas",id:"estrutura-de-pastas",level:2},{value:"Instalando express-handlebars",id:"instalando-express-handlebars",level:2},{value:"Apoie o projeto",id:"apoie-o-projeto",level:2}],c={toc:l},d="wrapper";function m(e){let{components:r,...a}=e;return(0,n.kt)(d,(0,t.Z)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"renderizac\xe3o"},"Renderizac\xe3o"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://expressjs.com/en/5x/api.html#res.render"},"Expressjs"))," oferece um m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"render")," para renderizar uma visualiza\xe7\xe3o e enviar a sequ\xeancia HTML renderizada para o cliente."),(0,n.kt)("p",null,"No ExpressoTS, como oferecemos suporte ao Expressjs, tamb\xe9m oferecemos suporte \xe0 capacidade de renderiza\xe7\xe3o oferecida pelo objeto de resposta HTTP."),(0,n.kt)("p",null,"O ExpressoTS implementa um suporte b\xe1sico para mecanismos de renderiza\xe7\xe3o na classe ",(0,n.kt)("inlineCode",{parentName:"p"},"Application"),". No momento, o n\xfamero de mecanismos de renderiza\xe7\xe3o suportados \xe9 limitado ao Handlebars."),(0,n.kt)("p",null,"Criamos a interface RenderTemplateOptions para fornecer uma estrutura para as op\xe7\xf5es de configura\xe7\xe3o de futuros mecanismos de renderiza\xe7\xe3o.\nAtualmente, oferecemos suporte a um n\xfamero muito limitado de op\xe7\xf5es para o Handlebars, mas expandiremos isso no futuro, n\xe3o apenas as op\xe7\xf5es, mas tamb\xe9m o n\xfamero de mecanismos de renderiza\xe7\xe3o suportados."),(0,n.kt)("h2",{id:"ihandlebars-interface-example"},"IHandlebars interface example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"interface IHandlebars {\n    /**\n     * Especifica o nome da extens\xe3o para os templates do Handlebars.\n    */\n    extName: string;\n\n    /**\n     * Especifica o caminho para o diret\xf3rio que cont\xe9m os templates do Handlebars.\n    */\n    viewPath: string;\n\n    /**\n     * Especifica a fun\xe7\xe3o para renderizar os templates do Handlebars.\n    */\n    engine: Engine;\n}\n\ntype RenderTemplateOptions = IHandlebars;\n")),(0,n.kt)("h2",{id:"como-usar"},"Como usar"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'import { AppInstance, IHandlebars, ServerEnvironment } from "@expressots/core";\n\nasync function bootstrap() {\n    AppInstance.create(container);\n    \n    // Configurando handlebars como motor de renderiza\xe7\xe3o.\n    AppInstance.setEngine<IHandlebars>({\n        extName: "hbs",\n        viewPath: path.join(__dirname, "..", "views"),\n        engine: engine({ defaultLayout: "layout", extname: "hbs" }),\n    });\n\n    AppInstance.listen(3000, ServerEnvironment.Development);\n}\n\nbootstrap();\n')),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Para que o c\xf3digo acima funcione, voc\xea precisa instalar o pacote ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://www.npmjs.com/package/express-handlebars"},"express-handlebars")),", al\xe9m de ter uma estrutura de pastas semelhante \xe0 apresentada abaixo.")),(0,n.kt)("h2",{id:"estrutura-de-pastas"},"Estrutura de pastas"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tree"},"src\n|--views\n|   |--layouts\n|   |   |--layout.hbs\n|   |--index.hbs\n")),(0,n.kt)("h2",{id:"instalando-express-handlebars"},"Instalando express-handlebars"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm i express-handlebars\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"apoie-o-projeto"},"Apoie o projeto"),(0,n.kt)("p",null,"ExpressoTS \xe9 um projeto de c\xf3digo aberto licenciado sob o MIT. \xc9 um projeto independente com desenvolvimento cont\xednuo possibilitado gra\xe7as ao seu suporte. Se voc\xea deseja ajudar, por favor considere:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Se tornar um ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/sponsors/expressots"},"Sponsor no GitHub"))),(0,n.kt)("li",{parentName:"ul"},"Siga a ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/expressots"},"organiza\xe7\xe3o"))," no GitHub e de um Star \u2b50 no projeto"),(0,n.kt)("li",{parentName:"ul"},"Subscreva no nosso canal na Twitch: ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://www.twitch.tv/richardzampieri"},"Richard Zampieri"))),(0,n.kt)("li",{parentName:"ul"},"Entre no nosso ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://discord.com/invite/PyPJfGK"},"Discord"))),(0,n.kt)("li",{parentName:"ul"},"Contribua submetendo ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/expressots/expressots/issues/new/choose"},"issues e pull requests"))),(0,n.kt)("li",{parentName:"ul"},"Compartilhe o projeto com seus amigos e colegas")))}m.isMDXComponent=!0}}]);