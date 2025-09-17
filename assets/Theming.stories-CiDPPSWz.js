import{j as e}from"./react-BawwVeGs.js";import{C as d}from"./Card-DDr_XNil.js";import{S as r}from"./sampleCards---KBZRPW.js";import"./sb-BYqmOTLW.js";import"../vite-inject-mocker-entry.js";import"./@vitest/mocker-2t07N5A2.js";import"./react-dom-BQwc9ApM.js";import"./scheduler-Bb8JjhAW.js";import"./ts-dedent-DrFu-skq.js";const x={title:"CardDeck/Docs/Theming",parameters:{controls:{hideNoControlsWarning:!0}}},a=()=>e.jsxs("div",{style:{display:"grid",gap:20},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Default"}),e.jsx(d,{card:r[0]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Custom CSS variables (inline)"}),e.jsx("div",{style:{"--kreeda-primary":"#1db954","--kreeda-card-width":"380px",padding:10},children:e.jsx(d,{card:r[0]})})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Contain vs Cover"}),e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsxs("div",{style:{width:320},children:[e.jsx("h4",{children:"Cover (default)"}),e.jsx(d,{card:{...r[0],genericFace:{kind:"media",media:{type:"image",src:"https://picsum.photos/640/360?cover",alt:"cover"}}}})]}),e.jsxs("div",{style:{width:320},children:[e.jsx("h4",{children:"Contain"}),e.jsx(d,{card:{...r[0],genericFace:{kind:"media",media:{type:"image",src:"https://picsum.photos/360/640?contain",alt:"contain"}}},renderGenericFace:(i,s)=>!i||i.kind!=="media"?null:e.jsx("div",{className:"kreeda-media-wrap kreeda-aspect-4x3",children:e.jsx("img",{className:"kreeda-media kreeda-media-contain",src:i.media.src,alt:i.media.alt??""})})})]})]})]})]});a.__docgenInfo={description:"",methods:[],displayName:"Tokens"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <div style={{
    display: "grid",
    gap: 20
  }}>
      <div>
        <h3>Default</h3>
        <Card card={SAMPLE_CARDS[0]} />
      </div>

      <div>
        <h3>Custom CSS variables (inline)</h3>
        <div style={{
        ['--kreeda-primary' as any]: '#1db954',
        ['--kreeda-card-width' as any]: '380px',
        padding: 10
      }}>
          <Card card={SAMPLE_CARDS[0]} />
        </div>
      </div>

      <div>
        <h3>Contain vs Cover</h3>
        <div style={{
        display: 'flex',
        gap: 16
      }}>
          <div style={{
          width: 320
        }}>
            <h4>Cover (default)</h4>
            <Card card={{
            ...SAMPLE_CARDS[0],
            genericFace: {
              kind: 'media',
              media: {
                type: 'image',
                src: 'https://picsum.photos/640/360?cover',
                alt: 'cover'
              }
            }
          }} />
          </div>
          <div style={{
          width: 320
        }}>
            <h4>Contain</h4>
            <Card card={{
            ...SAMPLE_CARDS[0],
            genericFace: {
              kind: 'media',
              media: {
                type: 'image',
                src: 'https://picsum.photos/360/640?contain',
                alt: 'contain'
              }
            }
          }} renderGenericFace={(face: any, card: any) => {
            if (!face || face.kind !== 'media') return null;
            return <div className="kreeda-media-wrap kreeda-aspect-4x3">
                  <img className="kreeda-media kreeda-media-contain" src={face.media.src} alt={face.media.alt ?? ''} />
                </div>;
          }} />
          </div>
        </div>
      </div>
    </div>;
}`,...a.parameters?.docs?.source}}};const y=["Tokens"];export{a as Tokens,y as __namedExportsOrder,x as default};
