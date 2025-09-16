import{r as d,j as a}from"./iframe-HITTCS31.js";const y=({card:n,onReveal:m,className:o="",initiallyFlipped:g=!1,sanitizeHtml:i,renderGenericFace:t})=>{const[s,v]=d.useState(g),l=e=>{e&&e.stopPropagation(),v(r=>{const u=!r;return r||m?.(),u})},c=d.useMemo(()=>{const e=n.genericFace;if(!e)return null;if(t)return t(e,n);if(e.kind==="media"||e.kind==="gif"){const r=e.media;return r?r.type==="video"?a.jsx("video",{controls:!0,className:"kreeda-media",src:r.src}):a.jsx("img",{className:"kreeda-media",src:r.src,alt:r.alt??n.title??"",loading:r.loading??"lazy"}):null}if(e.kind==="html"){const r=e.html??"",u=i?i(r):r;return a.jsx("div",{className:"kreeda-html-face",dangerouslySetInnerHTML:{__html:u}})}return e.kind==="node"?e.node:null},[n,t,i]);return a.jsx("div",{className:`kreeda-root ${o}`,style:{maxWidth:"100%"},children:a.jsx("div",{className:"kreeda-card",style:{maxWidth:"var(--kreeda-card-width)"},children:a.jsxs("div",{className:"kreeda-card-inner",style:{transform:s?"rotateY(180deg)":"rotateY(0deg)"},role:"button",tabIndex:0,"aria-pressed":s,"aria-label":`Card ${n.title??""} (press Enter or Space to flip)`,onClick:l,onKeyDown:e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),l(e))},children:[a.jsxs("div",{className:"kreeda-card-face kreeda-card-front",children:[n.title&&a.jsx("div",{className:"kreeda-card-title",children:n.title}),n.subtitle&&a.jsx("div",{className:"kreeda-card-subtitle",children:n.subtitle}),n.body&&a.jsx("div",{className:"kreeda-card-body",children:n.body}),a.jsxs("div",{className:"kreeda-card-meta",children:[a.jsx("div",{className:"kreeda-tag",children:(n.tags||[]).slice(0,2).join(", ")}),a.jsx("button",{className:"kreeda-btn",onClick:e=>{e.stopPropagation(),l()},"aria-label":"Reveal",type:"button",children:"Reveal"})]})]}),a.jsx("div",{className:"kreeda-card-face kreeda-card-back",children:c??a.jsxs("div",{style:{textAlign:"center",color:"var(--kreeda-muted)"},children:[a.jsx("div",{style:{fontWeight:700},children:n.title}),a.jsx("div",{style:{marginTop:8},children:"No generic face"})]})})]})})})};y.__docgenInfo={description:"",methods:[],displayName:"Card",props:{card:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  id: CardId;
  title?: string;
  subtitle?: string;
  body?: string; // textual content
  tags?: string[];
  sensitive?: boolean;
  genericFace?: GenericFace | null;
  meta?: Record<string, unknown>;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!1}},{key:"subtitle",value:{name:"string",required:!1}},{key:"body",value:{name:"string",required:!1}},{key:"tags",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"sensitive",value:{name:"boolean",required:!1}},{key:"genericFace",value:{name:"union",raw:"GenericFace | null",elements:[{name:"union",raw:`| { kind: "media"; media: Media }
| { kind: "html"; html: string }
| { kind: "node"; node: unknown }
| { kind: "gif"; media: Media } // optional explicit gif branch
| { kind: "none" }`,elements:[{name:"signature",type:"object",raw:'{ kind: "media"; media: Media }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"media"',required:!0}},{key:"media",value:{name:"signature",type:"object",raw:`{
  type: "image" | "gif" | "video" | "svg" | "other";
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
}`,signature:{properties:[{key:"type",value:{name:"union",raw:'"image" | "gif" | "video" | "svg" | "other"',elements:[{name:"literal",value:'"image"'},{name:"literal",value:'"gif"'},{name:"literal",value:'"video"'},{name:"literal",value:'"svg"'},{name:"literal",value:'"other"'}],required:!0}},{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!1}},{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"loading",value:{name:"union",raw:'"lazy" | "eager"',elements:[{name:"literal",value:'"lazy"'},{name:"literal",value:'"eager"'}],required:!1}}]},required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "html"; html: string }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"html"',required:!0}},{key:"html",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "node"; node: unknown }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"node"',required:!0}},{key:"node",value:{name:"unknown",required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "gif"; media: Media }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"gif"',required:!0}},{key:"media",value:{name:"signature",type:"object",raw:`{
  type: "image" | "gif" | "video" | "svg" | "other";
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
}`,signature:{properties:[{key:"type",value:{name:"union",raw:'"image" | "gif" | "video" | "svg" | "other"',elements:[{name:"literal",value:'"image"'},{name:"literal",value:'"gif"'},{name:"literal",value:'"video"'},{name:"literal",value:'"svg"'},{name:"literal",value:'"other"'}],required:!0}},{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!1}},{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"loading",value:{name:"union",raw:'"lazy" | "eager"',elements:[{name:"literal",value:'"lazy"'},{name:"literal",value:'"eager"'}],required:!1}}]},required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "none" }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"none"',required:!0}}]}}]},{name:"null"}],required:!1}},{key:"meta",value:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>",required:!1}}]}},description:""},onReveal:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},initiallyFlipped:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},sanitizeHtml:{required:!1,tsType:{name:"signature",type:"function",raw:"(html: string) => string",signature:{arguments:[{type:{name:"string"},name:"html"}],return:{name:"string"}}},description:""},renderGenericFace:{required:!1,tsType:{name:"signature",type:"function",raw:'(face: GenericCard["genericFace"], card: GenericCard) => React.ReactNode',signature:{arguments:[{type:{name:"union",raw:'GenericCard["genericFace"]'},name:"face"},{type:{name:"signature",type:"object",raw:`{
  id: CardId;
  title?: string;
  subtitle?: string;
  body?: string; // textual content
  tags?: string[];
  sensitive?: boolean;
  genericFace?: GenericFace | null;
  meta?: Record<string, unknown>;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!1}},{key:"subtitle",value:{name:"string",required:!1}},{key:"body",value:{name:"string",required:!1}},{key:"tags",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"sensitive",value:{name:"boolean",required:!1}},{key:"genericFace",value:{name:"union",raw:"GenericFace | null",elements:[{name:"union",raw:`| { kind: "media"; media: Media }
| { kind: "html"; html: string }
| { kind: "node"; node: unknown }
| { kind: "gif"; media: Media } // optional explicit gif branch
| { kind: "none" }`,elements:[{name:"signature",type:"object",raw:'{ kind: "media"; media: Media }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"media"',required:!0}},{key:"media",value:{name:"signature",type:"object",raw:`{
  type: "image" | "gif" | "video" | "svg" | "other";
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
}`,signature:{properties:[{key:"type",value:{name:"union",raw:'"image" | "gif" | "video" | "svg" | "other"',elements:[{name:"literal",value:'"image"'},{name:"literal",value:'"gif"'},{name:"literal",value:'"video"'},{name:"literal",value:'"svg"'},{name:"literal",value:'"other"'}],required:!0}},{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!1}},{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"loading",value:{name:"union",raw:'"lazy" | "eager"',elements:[{name:"literal",value:'"lazy"'},{name:"literal",value:'"eager"'}],required:!1}}]},required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "html"; html: string }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"html"',required:!0}},{key:"html",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "node"; node: unknown }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"node"',required:!0}},{key:"node",value:{name:"unknown",required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "gif"; media: Media }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"gif"',required:!0}},{key:"media",value:{name:"signature",type:"object",raw:`{
  type: "image" | "gif" | "video" | "svg" | "other";
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
}`,signature:{properties:[{key:"type",value:{name:"union",raw:'"image" | "gif" | "video" | "svg" | "other"',elements:[{name:"literal",value:'"image"'},{name:"literal",value:'"gif"'},{name:"literal",value:'"video"'},{name:"literal",value:'"svg"'},{name:"literal",value:'"other"'}],required:!0}},{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!1}},{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"loading",value:{name:"union",raw:'"lazy" | "eager"',elements:[{name:"literal",value:'"lazy"'},{name:"literal",value:'"eager"'}],required:!1}}]},required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "none" }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"none"',required:!0}}]}}]},{name:"null"}],required:!1}},{key:"meta",value:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>",required:!1}}]}},name:"card"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""}}};export{y as C};
