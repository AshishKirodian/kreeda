import{j as t}from"./iframe-DKxQL3-B.js";import{p as m}from"./purify.es-CEVJ7K31.js";import{C as d}from"./Card-B60ipekr.js";import"./preload-helper-D9Z9MdNV.js";const i={id:"c-1",title:"Conversation Starter",subtitle:"Small prompt",body:"Share one thing you appreciate about your partner today.",tags:["communication"],genericFace:{kind:"media",media:{type:"image",src:"https://picsum.photos/400/260",alt:"scenery"}}},y={title:"CardDeck/Components/Card",component:d,args:{card:i}},a={},e={args:{card:{...i,genericFace:{kind:"media",media:{type:"image",src:"https://picsum.photos/420/280?grayscale",alt:"grayscale"}}}}},r={args:{card:{...i,genericFace:{kind:"html",html:'<div style="text-align:center"><h3>Tip</h3><p>Try a 4-4-8 breathing exercise.</p><img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="gif" /></div>'}}},render:s=>t.jsx(d,{...s,sanitizeHtml:c=>m.sanitize(c)})},n={args:{card:{...i,genericFace:{kind:"node",node:{message:"Custom node"}}}},render:s=>{const c=o=>o&&o.kind==="node"?t.jsxs("div",{style:{textAlign:"center"},children:[t.jsx("div",{style:{fontWeight:700},children:"Custom Render"}),t.jsx("pre",{style:{fontSize:12},children:JSON.stringify(o.node,null,2)})]}):null;return t.jsx(d,{...s,renderGenericFace:c})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      ...SAMPLE_CARD,
      genericFace: {
        kind: "media",
        media: {
          type: "image",
          src: "https://picsum.photos/420/280?grayscale",
          alt: "grayscale"
        }
      }
    }
  }
}`,...e.parameters?.docs?.source},description:{story:"Simple arg-only story for an image back.",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      ...SAMPLE_CARD,
      genericFace: {
        kind: "html",
        html: \`<div style="text-align:center"><h3>Tip</h3><p>Try a 4-4-8 breathing exercise.</p><img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="gif" /></div>\`
      }
    }
  },
  render: args => {
    // args has the card prop (from args above). Pass sanitizeHtml explicitly.
    return <Card {...args} sanitizeHtml={(html: string) => DOMPurify.sanitize(html)} />;
  }
}`,...r.parameters?.docs?.source},description:{story:"Story that needs to pass a function prop (sanitizeHtml).\nWe use `render` so we can pass the function directly and satisfy TypeScript.",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      ...SAMPLE_CARD,
      genericFace: {
        kind: "node",
        node: {
          message: "Custom node"
        }
      }
    }
  },
  render: args => {
    const renderGenericFace = (face: GenericCard["genericFace"]) => {
      if (!face) return null;
      if (face.kind === "node") {
        return <div style={{
          textAlign: "center"
        }}>
            <div style={{
            fontWeight: 700
          }}>Custom Render</div>
            <pre style={{
            fontSize: 12
          }}>{JSON.stringify((face as any).node, null, 2)}</pre>
          </div>;
      }
      return null;
    };
    return <Card {...args} renderGenericFace={renderGenericFace} />;
  }
}`,...n.parameters?.docs?.source},description:{story:`Story that needs a custom renderGenericFace function.
We type the incoming 'face' param to avoid implicit any.`,...n.parameters?.docs?.description}}};const h=["Default","WithImageBack","WithHtmlBack_Sanitized","CustomRenderBack"];export{n as CustomRenderBack,a as Default,r as WithHtmlBack_Sanitized,e as WithImageBack,h as __namedExportsOrder,y as default};
