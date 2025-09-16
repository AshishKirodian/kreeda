import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./iframe-ZVNyQdGD.js";import{C as R,S as j}from"./sampleCards-BSaAT2Ky.js";import"./preload-helper-D9Z9MdNV.js";function g(d,u=Math.random){const r=d.slice();for(let o=r.length-1;o>0;o--){const t=Math.floor(u()*(o+1));[r[o],r[t]]=[r[t],r[o]]}return r}function T(d,u){const r={includeAdult:!1,...u},o=l.useMemo(()=>d.filter(n=>r.includeAdult?!0:!n.adultOnly),[d,r.includeAdult]),[t,c]=l.useState(()=>g(o)),[y,p]=l.useState([]),[x,a]=l.useState([]),C=l.useMemo(()=>t[0]??null,[t]),v=l.useCallback(()=>{if(t.length===0)return null;const[n,...s]=t;return c(s),a(i=>[n,...i]),n},[t]),S=l.useCallback(n=>{const s=t.findIndex(m=>m.id===n);if(s===-1)return null;const i=t[s];return c(m=>{const b=m.slice();return b.splice(s,1),b}),a(m=>[i,...m]),i},[t]),A=l.useCallback(()=>{if(t.length===0)return null;const[n,...s]=t;return c(s),p(i=>[n,...i]),n},[t]),D=l.useCallback(n=>{let s=Math.random;if(typeof n=="number"){let i=n>>>0;s=()=>(i=(1664525*i+1013904223)%4294967296,i/4294967296)}c(i=>g(i,s))},[]),M=l.useCallback(()=>{c(g(o)),p([]),a([])},[o]),w=l.useCallback(n=>{c(s=>s.filter(n)),p(s=>s.filter(n)),a(s=>s.filter(n))},[]),O=l.useCallback((n=1)=>t.slice(0,n),[t]);return{deck:t,top:C,discard:y,history:x,draw:v,reveal:S,discardTop:A,shuffle:D,reset:M,filter:w,peek:O}}const k=({initialCards:d=j,includeAdult:u=!1})=>{const{top:r,history:o,draw:t,discardTop:c,shuffle:y,reset:p,peek:x}=T(d,{includeAdult:u});return e.jsxs("div",{style:{fontFamily:"system-ui, sans-serif"},children:[e.jsxs("div",{style:{marginBottom:12},children:[e.jsx("button",{onClick:()=>y(),type:"button",children:"Shuffle"}),e.jsx("button",{onClick:()=>p(),type:"button",style:{marginLeft:8},children:"Reset"})]}),e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Top of deck"}),r?e.jsx(R,{card:r,onReveal:()=>t()}):e.jsx("div",{children:"No cards left"}),e.jsxs("div",{style:{marginTop:8},children:[e.jsx("button",{onClick:()=>t(),type:"button",children:"Draw"}),e.jsx("button",{onClick:()=>c(),type:"button",style:{marginLeft:8},children:"Discard"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Peek (next 3)"}),e.jsx("div",{style:{display:"grid",gap:8},children:x(3).map(a=>e.jsxs("div",{style:{border:"1px dashed #ccc",padding:8,borderRadius:6},children:[e.jsx("strong",{children:a.title}),e.jsx("div",{style:{fontSize:12,color:"#666"},children:a.category})]},a.id))})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"History"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:o.map(a=>e.jsxs("div",{style:{borderBottom:"1px solid #eee",paddingBottom:6},children:[e.jsx("strong",{children:a.title}),e.jsx("div",{style:{fontSize:12},children:a.description})]},a.id))})]})]})]})};k.__docgenInfo={description:`Minimal demo component:
- initialCards?: defaults to SAMPLE_CARDS
- includeAdult?: boolean`,methods:[],displayName:"CardDeck",props:{initialCards:{required:!1,tsType:{name:"any"},description:"",defaultValue:{value:`[
  {
    id: "c1",
    title: "Talk About Boundaries",
    description: "Share one boundary you value in intimate settings. Listen respectfully.",
    category: "consent",
    adultOnly: false,
    tags: ["boundaries", "communication"]
  },
  {
    id: "c2",
    title: "Favorite Comfort Ritual",
    description: "Describe a simple ritual that helps you feel relaxed and connected.",
    category: "wellness",
    adultOnly: false,
    tags: ["comfort", "routine"]
  },
  {
    id: "c3",
    title: "Consent Check",
    description: "Practice a short explicit consent phrase you both agree on.",
    category: "consent",
    adultOnly: false,
    tags: ["consent", "phrases"]
  },
  {
    id: "c4",
    title: "Communication Icebreaker",
    description: "Name something that makes you feel appreciated; why does it matter?",
    category: "communication",
    adultOnly: false,
    tags: ["gratitude"]
  },
  {
    id: "c5",
    title: "Healthy Myth Busting",
    description: "Name a common sexual wellness myth you’ve heard and whether you think it’s true.",
    category: "education",
    adultOnly: false,
    tags: ["myth", "facts"]
  }
]`,computed:!1}},includeAdult:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const N={title:"CardDeck/Deck",component:k,args:{initialCards:j,includeAdult:!1}},f={},h={args:{includeAdult:!0}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"{}",...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    includeAdult: true
  }
}`,...h.parameters?.docs?.source}}};const P=["Default","WithAdultCards"];export{f as Default,h as WithAdultCards,P as __namedExportsOrder,N as default};
