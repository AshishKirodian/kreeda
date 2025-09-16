import{r as d,j as e}from"./iframe-HITTCS31.js";import{C as a}from"./Card-DXYJt7m0.js";import{C as o}from"./CardDeck-DfUa1aCa.js";import{p as c}from"./purify.es-CEVJ7K31.js";import"./preload-helper-D9Z9MdNV.js";const i=[{id:"c1",title:"Question",body:"What is one hobby you’d like to try?",tags:["conversation"],genericFace:{kind:"media",media:{type:"image",src:"https://picsum.photos/400/240?random=1",alt:"random image"}}},{id:"c2",title:"Challenge",body:"Do 5 pushups now!",tags:["fun"],genericFace:{kind:"media",media:{type:"gif",src:"https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",alt:"pushups gif"}}},{id:"c3",title:"Prompt",body:"Share a funny school memory.",tags:["memory"],genericFace:{kind:"gif",media:{type:"gif",src:"https://media.giphy.com/media/26FPOztY0CYf2gSOw/giphy.gif",alt:"funny gif"}}},{id:"c4",title:"Tip",body:"Take a deep breath.",tags:["wellness"],genericFace:{kind:"html",html:'<div style="text-align:center"><h3>Relax</h3><p>Breathe in 4-4-8</p></div>'}},{id:"c5",title:"Video",body:"Watch this flower bloom.",tags:["calm"],genericFace:{kind:"media",media:{type:"video",src:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",alt:"flower video"}}},{id:"c6",title:"Wildcard",body:"Invent a new rule for the game.",tags:["wild"],genericFace:{kind:"none"}}],x={title:"CardDeck/Docs/Welcome",parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"A quick interactive tour of Kreeda's Card & Deck components."}}}},t=()=>{const[r,s]=d.useState(!0);return e.jsxs("div",{style:{fontFamily:"Inter, system-ui, sans-serif",padding:20,maxWidth:1200},children:[e.jsx("h1",{style:{marginTop:0},children:"Welcome — Kreeda CardDeck"}),e.jsx("h3",{children:"Step-by-step quick start"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Open ",e.jsx("strong",{children:"CardDeck → Components → Card"})," to inspect single card variants and controls."]}),e.jsxs("li",{children:["Click ",e.jsx("strong",{children:"Reveal"})," (or press ",e.jsx("kbd",{children:"Enter"}),"/",e.jsx("kbd",{children:"Space"}),") to flip the card."]}),e.jsxs("li",{children:["Open ",e.jsx("strong",{children:"CardDeck → Components → Deck"})," to try ",e.jsx("em",{children:"Draw"}),", ",e.jsx("em",{children:"Accept"})," and ",e.jsx("em",{children:"Penalty"}),"."]}),e.jsxs("li",{children:["Open ",e.jsx("strong",{children:"CardDeck → Interactive → TwoPlayerGame"})," for the two-player demo."]}),e.jsx("li",{children:"Use the top toolbar to switch themes and the viewport menu to test mobile/tablet layouts."})]}),e.jsx("h3",{style:{marginTop:18},children:"Live examples"}),e.jsxs("div",{style:{display:"flex",gap:20,flexWrap:"wrap"},children:[e.jsxs("div",{style:{flex:"1 1 320px"},children:[e.jsx("h4",{children:"Single Card"}),e.jsx(a,{card:i[0]}),e.jsx("p",{style:{color:"#6b7280",fontSize:13},children:'Try changing the "Card" story controls to mutate props live.'})]}),e.jsxs("div",{style:{flex:"1 1 360px"},children:[e.jsx("h4",{children:"Deck (Draw / Accept / Penalty)"}),e.jsx(o,{initialCards:i,onPenalty:async n=>(await new Promise(l=>setTimeout(l,300)),{id:`pen-${Date.now()}`,title:"Penalty Card",body:`Penalty for: ${n.title??n.body??n.id}`,genericFace:{kind:"media",media:{type:"image",src:"https://picsum.photos/200/120",alt:"penalty"}}})})]})]}),e.jsx("h3",{style:{marginTop:18},children:"Sanitize HTML faces"}),e.jsxs("label",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx("input",{type:"checkbox",checked:r,onChange:()=>s(n=>!n)}),e.jsx("span",{style:{color:"#374151"},children:"Sanitize HTML before rendering"})]}),e.jsx("div",{style:{marginTop:10},children:e.jsx(a,{card:i.find(n=>n.genericFace?.kind==="html")??i[0],sanitizeHtml:r?n=>c.sanitize(n):void 0})}),e.jsx("h3",{style:{marginTop:18},children:"Theming & Overrides"}),e.jsxs("p",{style:{color:"#6b7280"},children:["Try the theme toolbar (top-right) to switch theme. To override in your app, set CSS variables (e.g.",e.jsx("code",{children:"--kreeda-primary"}),", ",e.jsx("code",{children:"--kreeda-card-width"}),") in global CSS."]}),e.jsx("pre",{style:{background:"#fafafa",padding:12},children:`/* example (global CSS) */
:root {
  --kreeda-primary: #1db954;
  --kreeda-card-width: 380px;
}`}),e.jsx("h3",{style:{marginTop:18},children:"Accessibility & responsiveness"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Keyboard: use ",e.jsx("kbd",{children:"Enter"})," / ",e.jsx("kbd",{children:"Space"})," to flip cards."]}),e.jsx("li",{children:"Use the Viewport addon to test mobile / tablet / landscape modes."}),e.jsx("li",{children:"Open the A11y panel to run automated accessibility checks."})]})]})};t.__docgenInfo={description:"",methods:[],displayName:"Guide"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const [sanitize, setSanitize] = useState(true);
  return <div style={{
    fontFamily: "Inter, system-ui, sans-serif",
    padding: 20,
    maxWidth: 1200
  }}>
      <h1 style={{
      marginTop: 0
    }}>Welcome — Kreeda CardDeck</h1>

      <h3>Step-by-step quick start</h3>
      <ol>
        <li>Open <strong>CardDeck → Components → Card</strong> to inspect single card variants and controls.</li>
        <li>Click <strong>Reveal</strong> (or press <kbd>Enter</kbd>/<kbd>Space</kbd>) to flip the card.</li>
        <li>Open <strong>CardDeck → Components → Deck</strong> to try <em>Draw</em>, <em>Accept</em> and <em>Penalty</em>.</li>
        <li>Open <strong>CardDeck → Interactive → TwoPlayerGame</strong> for the two-player demo.</li>
        <li>Use the top toolbar to switch themes and the viewport menu to test mobile/tablet layouts.</li>
      </ol>

      <h3 style={{
      marginTop: 18
    }}>Live examples</h3>
      <div style={{
      display: "flex",
      gap: 20,
      flexWrap: "wrap"
    }}>
        <div style={{
        flex: "1 1 320px"
      }}>
          <h4>Single Card</h4>
          <Card card={SAMPLE_CARDS[0]} />
          <p style={{
          color: "#6b7280",
          fontSize: 13
        }}>Try changing the "Card" story controls to mutate props live.</p>
        </div>

        <div style={{
        flex: "1 1 360px"
      }}>
          <h4>Deck (Draw / Accept / Penalty)</h4>
          <CardDeck initialCards={SAMPLE_CARDS} onPenalty={async revealed => {
          // story-level mock penalty: return a card after short delay
          await new Promise(r => setTimeout(r, 300));
          return {
            id: \`pen-\${Date.now()}\`,
            title: "Penalty Card",
            body: \`Penalty for: \${revealed.title ?? revealed.body ?? revealed.id}\`,
            genericFace: {
              kind: "media",
              media: {
                type: "image",
                src: "https://picsum.photos/200/120",
                alt: "penalty"
              }
            }
          };
        }} />
        </div>
      </div>

      <h3 style={{
      marginTop: 18
    }}>Sanitize HTML faces</h3>
      <label style={{
      display: "flex",
      gap: 8,
      alignItems: "center"
    }}>
        <input type="checkbox" checked={sanitize} onChange={() => setSanitize(s => !s)} />
        <span style={{
        color: "#374151"
      }}>Sanitize HTML before rendering</span>
      </label>
      <div style={{
      marginTop: 10
    }}>
        <Card card={SAMPLE_CARDS.find(c => c.genericFace?.kind === "html") ?? SAMPLE_CARDS[0]} sanitizeHtml={sanitize ? html => DOMPurify.sanitize(html) : undefined} />
      </div>

      <h3 style={{
      marginTop: 18
    }}>Theming & Overrides</h3>
      <p style={{
      color: "#6b7280"
    }}>
        Try the theme toolbar (top-right) to switch theme. To override in your app, set CSS variables (e.g.
        <code>--kreeda-primary</code>, <code>--kreeda-card-width</code>) in global CSS.
      </p>
      <pre style={{
      background: "#fafafa",
      padding: 12
    }}>
      {\`/* example (global CSS) */
:root {
  --kreeda-primary: #1db954;
  --kreeda-card-width: 380px;
}\`}
      </pre>

      <h3 style={{
      marginTop: 18
    }}>Accessibility & responsiveness</h3>
      <ul>
        <li>Keyboard: use <kbd>Enter</kbd> / <kbd>Space</kbd> to flip cards.</li>
        <li>Use the Viewport addon to test mobile / tablet / landscape modes.</li>
        <li>Open the A11y panel to run automated accessibility checks.</li>
      </ul>
    </div>;
}`,...t.parameters?.docs?.source}}};const b=["Guide"];export{t as Guide,b as __namedExportsOrder,x as default};
