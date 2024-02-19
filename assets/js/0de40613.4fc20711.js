"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9842],{38779:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var t=r(74848),i=r(28453);const s={},a="Query Entries",d={id:"develop/adapters/querying",title:"Query Entries",description:"Sometimes you need to find an entry by any of it's fields or by type. This can be done with the Query class.",source:"@site/docs/develop/02-adapters/04-querying.mdx",sourceDirName:"develop/02-adapters",slug:"/develop/adapters/querying",permalink:"/TypeWriter/beta/develop/adapters/querying",draft:!1,unlisted:!1,editUrl:"https://github.com/gabber235/TypeWriter/tree/main/documentation/docs/develop/02-adapters/04-querying.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"develop",previous:{title:"EventEntry",permalink:"/TypeWriter/beta/develop/adapters/entries/trigger/event"},next:{title:"Triggering Entries",permalink:"/TypeWriter/beta/develop/adapters/triggering"}},o={},l=[];function c(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"query-entries",children:"Query Entries"}),"\n",(0,t.jsxs)(n.p,{children:["Sometimes you need to find an entry by any of it's fields or by type. This can be done with the ",(0,t.jsx)(n.code,{children:"Query"})," class."]}),"\n",(0,t.jsx)(n.p,{children:"If you need to find all entries of a specific type:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val entries = Query.find<MyEntry>()\n"})}),"\n",(0,t.jsx)(n.p,{children:"Sometimes you need it by a specific criteria:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val entries = Query.findWhere<MyEntry> {\n    it.someField == "some value"\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"You can also find a single entry:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val entry = Query.findFirstWhere<MyEntry> {\n    it.someField == "some value"\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Sometimes you need to find an entry by it's id:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val entry = Query.findById<MyEntry>(id)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Other times you need to find entries by their page:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val entries = Query.findWhereFromPage<MyEntry>(pageId) {\n    it.someField == "some value"\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);