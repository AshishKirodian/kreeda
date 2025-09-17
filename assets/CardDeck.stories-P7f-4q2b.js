import{C as i}from"./CardDeck-DJxn0t4x.js";import"./react-BawwVeGs.js";import"./Card-DDr_XNil.js";import"./sb-BYqmOTLW.js";import"../vite-inject-mocker-entry.js";import"./@vitest/mocker-2t07N5A2.js";import"./react-dom-BQwc9ApM.js";import"./scheduler-Bb8JjhAW.js";import"./ts-dedent-DrFu-skq.js";const r=[{id:"s-1",title:"Question",body:"Name a hobby you want to try together.",genericFace:{kind:"media",media:{type:"image",src:"https://picsum.photos/320/200?1",alt:"img1"}}},{id:"s-2",title:"Prompt",body:"Share a childhood memory.",genericFace:{kind:"media",media:{type:"image",src:"https://picsum.photos/320/200?2",alt:"img2"}}},{id:"s-3",title:"Tip",body:"Try a short breathing exercise.",genericFace:{kind:"html",html:'<div style="text-align:center"><strong>Breathe in</strong></div>'}}],h={title:"CardDeck/Components/Deck",component:i,args:{initialCards:r}},e={},t={args:{initialCards:r,onPenalty:async a=>(await new Promise(n=>setTimeout(n,350)),{id:`pen-${Date.now()}`,title:"Penalty Drawn",body:`Penalty for card: ${a.title??a.body??a.id}`,genericFace:{kind:"media",media:{type:"image",src:"https://picsum.photos/200/140?random=5",alt:"penalty"}}})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    initialCards: SAMPLE_CARDS,
    onPenalty: async revealed => {
      // story-level mock: return a penalty card after a short delay
      await new Promise(r => setTimeout(r, 350));
      return {
        id: \`pen-\${Date.now()}\`,
        title: "Penalty Drawn",
        body: \`Penalty for card: \${revealed.title ?? revealed.body ?? revealed.id}\`,
        genericFace: {
          kind: "media",
          media: {
            type: "image",
            src: "https://picsum.photos/200/140?random=5",
            alt: "penalty"
          }
        }
      } as GenericCard;
    }
  }
}`,...t.parameters?.docs?.source}}};const u=["Default","WithPenaltyHandler"];export{e as Default,t as WithPenaltyHandler,u as __namedExportsOrder,h as default};
