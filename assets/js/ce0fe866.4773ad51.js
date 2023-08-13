"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2226],{6885:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),i=a(2004);const o={player:"player_DXFF",bar:"bar_YnB5",progress:"progress_ekEV"};function r(e){let{url:t}=e,[a,r]=(0,n.useState)(0);return n.createElement("div",{className:o.player},n.createElement(l,{progress:a}),n.createElement(i.Z,{url:t,playing:!0,loop:!0,muted:!0,width:"100%",height:"100%",progressInterval:100,onProgress:e=>r(100*e.played),className:o.player}))}function l(e){let{progress:t}=e;return n.createElement("div",{className:o.bar},n.createElement("div",{className:o.progress,style:{width:`${t}%`}}))}},3857:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var n=a(7462),i=(a(7294),a(3905)),o=a(6885);const r={},l="First Cinematic",d={unversionedId:"docs/first-cinematic",id:"docs/first-cinematic",title:"First Cinematic",description:"This guide will lead you through making your first cinematic.",source:"@site/docs/docs/04-first-cinematic.mdx",sourceDirName:"docs",slug:"/docs/first-cinematic",permalink:"/TypeWriter/docs/first-cinematic",draft:!1,editUrl:"https://github.com/gabber235/TypeWriter/tree/main/documentation/docs/docs/04-first-cinematic.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"First Interaction",permalink:"/TypeWriter/docs/first-interaction"},next:{title:"Facts",permalink:"/TypeWriter/docs/facts"}},s={},c=[{value:"What are Cinematics?",id:"what-are-cinematics",level:2},{value:"Creating a Cinematic",id:"creating-a-cinematic",level:2},{value:"Creating the Page",id:"creating-the-page",level:3},{value:"Adding a Camera Entry",id:"adding-a-camera-entry",level:3},{value:"Triggering the Cinematic",id:"triggering-the-cinematic",level:2},{value:"Adding dialogue",id:"adding-dialogue",level:2},{value:"Adding Particles",id:"adding-particles",level:2},{value:"Adding a Self NPC",id:"adding-a-self-npc",level:2},{value:"Next steps",id:"next-steps",level:2}],m={toc:c},p="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"first-cinematic"},"First Cinematic"),(0,i.kt)("p",null,"This guide will lead you through making your first cinematic."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This guide uses the ",(0,i.kt)("a",{parentName:"p",href:"../adapters/BasicAdapter"},"Basic Adapter"),", hence it must be installed before following this guide.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This guide builds upon the ",(0,i.kt)("a",{parentName:"p",href:"first-interaction"},"First Interaction")," guide.\nWe strongly recommend reading through it before following this guide.")),(0,i.kt)("h2",{id:"what-are-cinematics"},"What are Cinematics?"),(0,i.kt)("p",null,"Cinematics are a way to have different actions happen in a precise order over time. This includes having the player's camera move around\nfrom location to location, having particles show up at different locations at different times, having NPCs move around,\nand much more!"),(0,i.kt)("p",null,"This makes cinematics useful in a wide variety of scenarios, with some examples being:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A cutscene in a quest"),(0,i.kt)("li",{parentName:"ul"},"As part of a tutorial"),(0,i.kt)("li",{parentName:"ul"},"Fast travel"),(0,i.kt)("li",{parentName:"ul"},"Random encounters"),(0,i.kt)("li",{parentName:"ul"},"And a lot more")),(0,i.kt)("h2",{id:"creating-a-cinematic"},"Creating a Cinematic"),(0,i.kt)("p",null,"We'll start off by making a simple cinematic with a cinematic camera entry, with the cinematic being triggered through\na command. Later in the guide we'll continue the ",(0,i.kt)("a",{parentName:"p",href:"first-interaction"},"First Interaction")," guide to trigger the cinematic\nfrom a flower."),(0,i.kt)("h3",{id:"creating-the-page"},"Creating the Page"),(0,i.kt)("p",null,"Start off by clicking add page. Here, choose the ",(0,i.kt)("strong",{parentName:"p"},"Cinematic")," type in the dropdown menu, and name the page ",(0,i.kt)("inlineCode",{parentName:"p"},"flower_cinematic"),"."),(0,i.kt)(o.Z,{url:a(9822).Z,mdxType:"Player"}),(0,i.kt)("h3",{id:"adding-a-camera-entry"},"Adding a Camera Entry"),(0,i.kt)("p",null,"Let's now add an entry to the newly created page. Click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Add Entry")," button or the ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," in the top right corner,\nthen search for ",(0,i.kt)("inlineCode",{parentName:"p"},"add: camera"),", and add the ",(0,i.kt)("inlineCode",{parentName:"p"},"Add Camera Cinematic")," entry. You should now see the entry on your screen.\nLet's rename the entry to ",(0,i.kt)("inlineCode",{parentName:"p"},"camera_view"),". Then, click ",(0,i.kt)("inlineCode",{parentName:"p"},"Add Segment")," to add a new segment to the entry."),(0,i.kt)("p",null,"You'll now see a lot of new fields that aren't in the other pages. Let's go through those."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Cinematics Layout",src:a(7141).Z,width:"1621",height:"491"})),(0,i.kt)("blockquote",null,(0,i.kt)("h4",{parentName:"blockquote",id:"track-duration-1"},"Track Duration (1)"),(0,i.kt)("p",{parentName:"blockquote"},"The track duration field is where you decide the duration of the entire cinematic.\nIt's important to note that the duration is in amount of frames, and not in seconds.\nYou can however easily convert from seconds to frames, as 20 frames is equal to 1 second.")),(0,i.kt)("blockquote",null,(0,i.kt)("h4",{parentName:"blockquote",id:"segments-2"},"Segments (2)"),(0,i.kt)("p",{parentName:"blockquote"},"A segment is what the entry does in that specific time frame. Entries can have multiple segments, but an entry can't\nhave overlapping segments. For that, create another entry.")),(0,i.kt)("blockquote",null,(0,i.kt)("h4",{parentName:"blockquote",id:"segments-track-3"},"Segments Track (3)"),(0,i.kt)("p",{parentName:"blockquote"},"This is where the segments of entries are displayed to you. Here you can change when a segment starts and when it ends.\nKeep in mind you can also do this on each segment's sidebar by modifying the ",(0,i.kt)("inlineCode",{parentName:"p"},"Start Frame")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"End Frame")," fields.")),(0,i.kt)("p",null,"Now that that's explained, we need to add a segment to the camera_view entry.\nMake sure you have the camera view entry selected, and then click ",(0,i.kt)("inlineCode",{parentName:"p"},"Add Segment")," on the entry sidebar.\nThis creates a new segment that spans the entire track."),(0,i.kt)("p",null,"We now want to make this segment do something, and to do that, we need to add paths.\nFor the camera entry, this will be the locations it moves the player's POV between.\nLet's start with making two paths. To do that, click the ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," symbol next to Path on the sidebar twice.\nExpanding ",(0,i.kt)("inlineCode",{parentName:"p"},"Path #1"),", you'll see a new area called ",(0,i.kt)("inlineCode",{parentName:"p"},"Location")," with several fields to specify the location of this path.\nWe now need to decide on two locations. To more easily continue the guide later on, I recommend picking two locations\naround a red tulip. We then fill in ",(0,i.kt)("inlineCode",{parentName:"p"},"Path #1"),"'s location, and expand ",(0,i.kt)("inlineCode",{parentName:"p"},"Path #2")," and add the location of that path.\nRemember to add two different locations. You can see example paths in the screenshot below."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example Camera Paths",src:a(3026).Z,width:"419",height:"637"})),(0,i.kt)("p",null,"You should now have a functioning cinematic!\nLet's ",(0,i.kt)("inlineCode",{parentName:"p"},"Publish")," and check it out. Type ",(0,i.kt)("inlineCode",{parentName:"p"},"/tw cinematic start flower_cinematic")," in chat, and\nthe cinematic should start playing!"),(0,i.kt)(o.Z,{url:a(4675).Z,mdxType:"Player"}),(0,i.kt)("p",null,"As you see in the beginning of the camera path, the camera weirdly turns around.\nThis is because when starting the cinematic, Minecraft needs a few frames to set everything up.\nTo make it not noticeable, we can start the cinematic a few frames later.\nThe recommended amount is ",(0,i.kt)("inlineCode",{parentName:"p"},"20 frames"),", which is 1 second. To do this, we can either change the ",(0,i.kt)("inlineCode",{parentName:"p"},"Start Frame")," field\non the segment, or drag the segment on the track to our desired starting point."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"To make it really feel cinematic, you can add a black screen at the beginning of the cinematic.\nUsing the ",(0,i.kt)("a",{parentName:"p",href:"/adapters/BasicAdapter/entries/cinematic/blinding_cinematic"},"Blinding Cinematic")," entry, you can make the screen\ngo black for the first ",(0,i.kt)("inlineCode",{parentName:"p"},"20 frames"),".")),(0,i.kt)("p",null,"Currently we only have one segment, which means the cinematic will end after the segment is done.\nWe can add more segments to create different camera paths."),(0,i.kt)("p",null,"Try adding a new segment, and then adding mutliple paths to that segment.\nIf you have done everything correctly, you should now have a cinematic that looks something like this:"),(0,i.kt)(o.Z,{url:a(7730).Z,mdxType:"Player"}),(0,i.kt)("h2",{id:"triggering-the-cinematic"},"Triggering the Cinematic"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"I strongly recommend picking a specific red tulip and changing the cinematic paths to be around it if you havn't done so already.")),(0,i.kt)("p",null,"Now, you probably want the cinematic to be triggered when a player does something, and not through a command.\nLet's do that by modifying the flower example from ",(0,i.kt)("a",{parentName:"p",href:"first-interaction"},"First Interaction")," so that one of the\noptions causes the cinematic to play."),(0,i.kt)("p",null,"Let's head over to the Flower page by clicking on it in the Pages sidebar. We then simply want to add a new entry.\nSearch for ",(0,i.kt)("inlineCode",{parentName:"p"},"add: cinematic")," when adding a new entry, and select ",(0,i.kt)("inlineCode",{parentName:"p"},"Add Cinematic")," entry. We'll then rename this entry to\n",(0,i.kt)("inlineCode",{parentName:"p"},"play_flower_cinematic"),", and in the entry sidebar, click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Page")," field. Here you should see the ",(0,i.kt)("inlineCode",{parentName:"p"},"Flower Cinematic")," page\nthat we made earlier. Select that page, and then select the ",(0,i.kt)("inlineCode",{parentName:"p"},"Inspect Flower")," entry. Here we want to add a new option.\nLet's call it ",(0,i.kt)("inlineCode",{parentName:"p"},"Look at flower"),". In the new option, add a new Trigger, and select ",(0,i.kt)("inlineCode",{parentName:"p"},"Play Flower Cinematic")," option in the search box."),(0,i.kt)(o.Z,{url:a(5893).Z,mdxType:"Player"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Strongly recommended to pick a specific red tulip and changing the cinematic paths to be around it.")),(0,i.kt)("p",null,"You should now be able to select the option ",(0,i.kt)("inlineCode",{parentName:"p"},"Smell the flower")," when clicking a red tulip, and it'll play the cinematic."),(0,i.kt)("h2",{id:"adding-dialogue"},"Adding dialogue"),(0,i.kt)("p",null,"Let's make the cinematic have dialogue when it's playing. To do this, head back to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Flower Cinematic")," page.\nHere, add a new entry and search for ",(0,i.kt)("inlineCode",{parentName:"p"},"add: actionbar"),", and select the ",(0,i.kt)("inlineCode",{parentName:"p"},"Add Actionbar Dialogue Cinematic")," entry.\nWe'll then rename this entry to ",(0,i.kt)("inlineCode",{parentName:"p"},"flower_dialogue"),". Now, let's first add a speaker to the entry. Let's use the Flower Speaker.\nAfter that, click ",(0,i.kt)("inlineCode",{parentName:"p"},"Add Segment")," to add a segment to the dialogue entry, and select it."),(0,i.kt)("p",null,"Let's change the time frame of the dialogue to start after 1 second. To do this, we can either change the Start Frame field, or drag the segment on the track\nto our desired starting point. We also have to remember that duration is in frames, not seconds, and remembering from earlier, 1 second equals 20 frames, change the Start Frame to 20."),(0,i.kt)("p",null,"We then have to add the text to be displayed. Insert ",(0,i.kt)("inlineCode",{parentName:"p"},"That flower looks <red><bold>stunning")," to the Text field."),(0,i.kt)("p",null,"And we're done! Dialogue should now appear 1 second into the cinematic.\nThere are a few different dialogue entries as well. Here's a quick overview:"),(0,i.kt)("blockquote",null,(0,i.kt)("h4",{parentName:"blockquote",id:"actionbar-dialogue-cinematic"},"Actionbar Dialogue Cinematic"),(0,i.kt)("p",{parentName:"blockquote"},"Will send the speaker & the message in the actionbar.")),(0,i.kt)("blockquote",null,(0,i.kt)("h4",{parentName:"blockquote",id:"subtitle-dialogue-cinematic"},"Subtitle Dialogue Cinematic"),(0,i.kt)("p",{parentName:"blockquote"},"Will send the speaker in the actionbar, and sends the message as a subtitle (middle of screen).")),(0,i.kt)("blockquote",null,(0,i.kt)("h4",{parentName:"blockquote",id:"spoken-dialogue-cinematic"},"Spoken Dialogue Cinematic"),(0,i.kt)("p",{parentName:"blockquote"},"Will send the speaker & message in chat.")),(0,i.kt)(o.Z,{url:a(3431).Z,mdxType:"Player"}),(0,i.kt)("h2",{id:"adding-particles"},"Adding Particles"),(0,i.kt)("p",null,"You can also add particles to be displayed during the cinematic. Let's do so hearts appear around the red tulip.\nTo do this, add a new entry and search ",(0,i.kt)("inlineCode",{parentName:"p"},"add: particle"),", and add the ",(0,i.kt)("inlineCode",{parentName:"p"},"Add Particle Cinematic")," entry, and rename it to\n",(0,i.kt)("inlineCode",{parentName:"p"},"flower_particle"),"\nFor this entry, we modify the particle effect on the entry itself and not on the segments.\nLet's start by selecting the particle type. Click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Particle")," field in the entry sidebar, and scroll down until\nyou find the ",(0,i.kt)("inlineCode",{parentName:"p"},"HEART")," particle and then select it. Then, enter the location of your Red Tulip in the location field above."),(0,i.kt)("p",null,"We will then define the particle offsets, speed & spawnCountPerTick. Think of the offset fields as a box around the location\nyou've specified, and particles can spawn anywhere inside the box.\nWe will set offsetX and offsetZ to ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),", and leave offsetY at ",(0,i.kt)("inlineCode",{parentName:"p"},"0.5"),". We'll then set the speed to ",(0,i.kt)("inlineCode",{parentName:"p"},"0.1")," as to not get a lot of\nhearts spawning at the same time, and we will set spawnCountPerTick to 1, meaning that 1 heart will spawn every tick."),(0,i.kt)("p",null,"Now, we will add a segment to the particle entry, and we're finished! If you now play your cinematic, heart particles\nshould spawn around the red tulip."),(0,i.kt)(o.Z,{url:a(7312).Z,mdxType:"Player"}),(0,i.kt)("h2",{id:"adding-a-self-npc"},"Adding a Self NPC"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For this step, you have to type ",(0,i.kt)("inlineCode",{parentName:"p"},"/tw connect")," from in game as a player, otherwise you won't be able to record the NPC movement.")),(0,i.kt)("p",null,'Want players to be able to see "themselves" while in a cinematic? Well, you can! Let\'s add a self NPC that walks over and looks at the flower\nduring the cinematic. To do this, add a new entry and search ',(0,i.kt)("inlineCode",{parentName:"p"},"add: self npc"),", add the ",(0,i.kt)("inlineCode",{parentName:"p"},"Add Self Npc Cinematic")," entry, and rename it\nto ",(0,i.kt)("inlineCode",{parentName:"p"},"player_walk"),". We then want to click ",(0,i.kt)("inlineCode",{parentName:"p"},"Add RecordedSegmeent"),", and select the new segment that has been made. Now, you'll first need\nto create an artifact by clicking the Artifact field. There, select ",(0,i.kt)("inlineCode",{parentName:"p"},"Add Npc Movement Artifact"),", and select ",(0,i.kt)("inlineCode",{parentName:"p"},"Flower Static")," as the static page\nto store the artifact in. Then, rename the artifact to ",(0,i.kt)("inlineCode",{parentName:"p"},"player_look_at_flower"),". "),(0,i.kt)("p",null,"We then first want to ",(0,i.kt)("inlineCode",{parentName:"p"},"Publish"),", before heading back to the cinematic page, select the player walk segment again,\nand now we want to click on the camera button to the right of ",(0,i.kt)("inlineCode",{parentName:"p"},"Artifact"),", and open our Minecraft. Here you'll see a bossbar telling you\nto press ",(0,i.kt)("inlineCode",{parentName:"p"},"F")," to start recording. Pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"F")," will cause the cinematic to start playing without the Camera Entry, and all your movements during the\ncinematic will be saved and be used for the NPC movement. You'll want to move to where you want to start the NPC movement, and hit ",(0,i.kt)("inlineCode",{parentName:"p"},"F"),", before\nfollowing the cinematic to add movement to it."),(0,i.kt)("p",null,"If you now play the cinematic again, an NPC with the skin of the player watching the cinematic should appear, with all the movement you did."),(0,i.kt)(o.Z,{url:a(3177).Z,mdxType:"Player"}),(0,i.kt)("h2",{id:"next-steps"},"Next steps"),(0,i.kt)("p",null,"You should now know how to make simple cinematics, but remember, cinematics have a lot more to offer!\nTry messing about with the other options like NPCs that walk around, playing sounds, blinding cinematic & more!"))}h.isMDXComponent=!0},4675:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/medias/cinematic-1-5b55a6f5685f40c8ca434b4b914f78ae.webm"},7730:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/medias/cinematic-2-2f7acba03bda847d1b6569ab9935b312.webm"},3431:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/medias/cinematic-3-f5df516150bb3f079b94723b64d6858b.webm"},7312:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/medias/cinematic-4-6234ff3b39882804c10a9d1b74476372.webm"},3177:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/medias/cinematic-5-24df74db0aa65e25c985d37d370bdc8b.webm"},5893:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/medias/cinematic-trigger-1d972979e950f19ccaa8e0f439051331.webm"},9822:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/medias/page-creation-a0bee4b28600df8d03e484e8b1f63852.webm"},3026:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/camera-paths-example-85e66a3d2047463f8b66670468311b3b.png"},7141:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cinematic-layout-c53671cf1f38a05081a54c616fef04c4.png"}}]);