"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8917],{93772:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var d=t(74848),r=t(28453);const s={},i="SoundIdEntry",o={id:"develop/adapters/entries/static/sound_id",title:"SoundIdEntry",description:"The SoundIdEntry is an interface derived from StaticEntry, specifically designed for managing custom sounds within the TypeWriter Spigot plugin.",source:"@site/versioned_docs/version-0.4.1/develop/02-adapters/03-entries/static/sound_id.mdx",sourceDirName:"develop/02-adapters/03-entries/static",slug:"/develop/adapters/entries/static/sound_id",permalink:"/TypeWriter/develop/adapters/entries/static/sound_id",draft:!1,unlisted:!1,editUrl:"https://github.com/gabber235/TypeWriter/tree/main/documentation/versioned_docs/version-0.4.1/develop/02-adapters/03-entries/static/sound_id.mdx",tags:[],version:"0.4.1",frontMatter:{},sidebar:"develop",previous:{title:"AssetEntry",permalink:"/TypeWriter/develop/adapters/entries/static/asset"},next:{title:"SoundSourceEntry",permalink:"/TypeWriter/develop/adapters/entries/static/sound_source"}},a={},c=[{value:"Usage",id:"usage",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"soundidentry",children:"SoundIdEntry"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"SoundIdEntry"})," is an interface derived from ",(0,d.jsx)(n.code,{children:"StaticEntry"}),", specifically designed for managing custom sounds within the TypeWriter Spigot plugin.\nIf a server is using a custom resource pack, the ",(0,d.jsx)(n.code,{children:"SoundIdEntry"})," can be used to add a reference to a custom sound within the resource pack."]}),"\n",(0,d.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-kotlin",children:'@Entry("example_sound", "An example sound entry.", Colors.GREEN, Icons.VOLUME_HIGH)\nclass ExampleSoundIdEntry(\n    override val id: String,\n    override val name: String,\n    override val soundId: String,\n) : SoundIdEntry\n'})}),"\n",(0,d.jsxs)(n.p,{children:["Normally a ",(0,d.jsx)(n.code,{children:"SoundIdEntry"})," handled by the interface when an entry needs a sound.\nIf you ever would need to access the sound ID directly, it can be done like this:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-kotlin",children:"val id = // ID of the custom sound\nval entry = Query.findById<ExampleSoundIdEntry>(id)\nval customSound = entry.soundId\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}}}]);