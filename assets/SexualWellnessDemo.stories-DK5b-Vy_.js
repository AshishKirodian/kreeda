import{a as c,j as e}from"./react-BawwVeGs.js";import{C as l}from"./CardDeck-DJxn0t4x.js";import{C as p}from"./Card-DDr_XNil.js";import{S as r}from"./sampleCards---KBZRPW.js";import{p as m}from"./dompurify-CEVJ7K31.js";import"./sb-BYqmOTLW.js";import"../vite-inject-mocker-entry.js";import"./@vitest/mocker-2t07N5A2.js";import"./react-dom-BQwc9ApM.js";import"./scheduler-Bb8JjhAW.js";import"./ts-dedent-DrFu-skq.js";const g=[{id:"sw-1",title:"Consent Check",subtitle:"Communication prompt",body:"Ask your partner: 'Is this comfortable for you right now?'",tags:["consent"],sensitive:!0,genericFace:{kind:"media",media:{type:"image",src:"https://picsum.photos/420/240?sex1",alt:"calm"}}},{id:"sw-2",title:"Sensate Focus",body:"Take 60 seconds to explore touch without pressure or goal.",tags:["mindful"],sensitive:!0,genericFace:{kind:"html",html:"<div style='text-align:center'><strong>Tip</strong><p>Breathe slowly together.</p></div>"}},{id:"sw-3",title:"Playful dare",body:"Give a sincere compliment and hold eye contact for 10 seconds.",tags:["playful"],sensitive:!1,genericFace:{kind:"media",media:{type:"gif",src:"https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",alt:"smile"}}}],A={title:"CardDeck/Demos/SexualWellnessDemo",component:l,parameters:{controls:{hideNoControlsWarning:!0}}},t={render:o=>{const[i,d]=c.useState(!1),s=[...g,...r].map(n=>({...n})),a=i?s:s.filter(n=>!n.sensitive);return e.jsxs("div",{style:{display:"grid",gap:20},children:[e.jsxs("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("h2",{style:{margin:0},children:"Kreeda — Sexual Wellness Demo"}),e.jsx("div",{style:{display:"flex",gap:12,alignItems:"center"},children:e.jsxs("label",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx("input",{type:"checkbox",checked:i,onChange:n=>d(n.target.checked)}),e.jsx("span",{style:{color:"#6b7280"},children:"Show sensitive prompts"})]})})]}),e.jsxs("section",{style:{display:"grid",gridTemplateColumns:"1fr 420px",gap:20},children:[e.jsx("div",{children:e.jsx(l,{...o,initialCards:a})}),e.jsxs("aside",{style:{width:420},children:[e.jsx("h4",{style:{marginTop:0},children:"Example Card Preview"}),e.jsx("p",{className:"kreeda-small",children:"Click any card in the deck to reveal it in the deck pane. Sensitive cards are marked."}),e.jsx("div",{style:{marginTop:10},children:e.jsx(p,{card:a[0]??r[0],sanitizeHtml:n=>m.sanitize(n)})})]})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [allowSensitive, setAllowSensitive] = useState(false);
    const merged = [...SEXUAL_SAMPLES, ...SAMPLE_CARDS].map(c => ({
      ...c
    }));
    const initial = allowSensitive ? merged : merged.filter(c => !c.sensitive);
    return <div style={{
      display: "grid",
      gap: 20
    }}>
        <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
          <h2 style={{
          margin: 0
        }}>Kreeda — Sexual Wellness Demo</h2>
          <div style={{
          display: "flex",
          gap: 12,
          alignItems: "center"
        }}>
            <label style={{
            display: "flex",
            gap: 8,
            alignItems: "center"
          }}>
              <input type="checkbox" checked={allowSensitive} onChange={e => setAllowSensitive(e.target.checked)} />
              <span style={{
              color: "#6b7280"
            }}>Show sensitive prompts</span>
            </label>
          </div>
        </header>

        <section style={{
        display: "grid",
        gridTemplateColumns: "1fr 420px",
        gap: 20
      }}>
          <div>
            <CardDeck {...args} initialCards={initial} />
          </div>

          <aside style={{
          width: 420
        }}>
            <h4 style={{
            marginTop: 0
          }}>Example Card Preview</h4>
            <p className="kreeda-small">Click any card in the deck to reveal it in the deck pane. Sensitive cards are marked.</p>

            {/* preview top of deck or first card */}
            <div style={{
            marginTop: 10
          }}>
              <Card card={initial[0] ?? SAMPLE_CARDS[0]} sanitizeHtml={html => DOMPurify.sanitize(html)} />
            </div>
          </aside>
        </section>
      </div>;
  }
}`,...t.parameters?.docs?.source}}};const b=["App"];export{t as App,b as __namedExportsOrder,A as default};
