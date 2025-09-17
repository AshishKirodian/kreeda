import{a as l,j as e}from"./react-BawwVeGs.js";import{C as z}from"./Card-BuBDad0F.js";function p(v,y=Math.random){const t=v.slice();for(let d=t.length-1;d>0;d--){const i=Math.floor(y()*(d+1));[t[d],t[i]]=[t[i],t[d]]}return t}function D(v,y){const t={includeSensitive:!1,...y},d=l.useMemo(()=>v.filter(n=>t.includeSensitive?!0:!n.sensitive),[v,t.includeSensitive]),[i,m]=l.useState(()=>p(d,t.rng)),[f,c]=l.useState([]),[h,k]=l.useState([]),[u,g]=l.useState(null),b=l.useMemo(()=>i[0]??null,[i]),s=l.useCallback((n,a)=>{k(r=>[{card:n,action:a,ts:new Date().toISOString()},...r])},[]),w=l.useCallback(()=>{if(u)return u;if(i.length===0)return null;const[n,...a]=i;return m(a),g(n),s(n,"draw"),n},[i,u,s]),q=l.useCallback(n=>{const a=i.findIndex(x=>x.id===n);if(a===-1)return null;const r=i[a];return m(x=>{const C=x.slice();return C.splice(a,1),C}),g(r),s(r,"reveal"),r},[i,s]),o=l.useCallback(()=>{u&&(m(n=>[...n,u]),s(u,"accept"),g(null))},[u,s]),j=l.useCallback(async n=>{if(!u)return null;s(u,"penalty");let a=null;if(n)try{const r=await n(u);a=r===void 0?null:r}catch{a=null}return a&&s(a,"penalty-drawn"),g(null),a??null},[u,s]),M=l.useCallback(()=>{if(i.length===0)return null;const[n,...a]=i;return m(a),c(r=>[n,...r]),s(n,"discard"),n},[i,s]),S=l.useCallback(n=>{let a=t.rng??Math.random;if(typeof n=="number"){let r=n>>>0;a=()=>(r=(1664525*r+1013904223)%4294967296,r/4294967296)}m(r=>p(r,a)),c(r=>p(r,a))},[t.rng]),F=l.useCallback(()=>{m(p(d,t.rng)),c([]),k([]),g(null)},[d,t.rng]),R=l.useCallback(n=>{m(a=>a.filter(n)),c(a=>a.filter(n)),k(a=>a.filter(r=>n(r.card)))},[]),G=l.useCallback((n=1)=>i.slice(0,n),[i]);return{deck:i,top:b,discard:f,history:h,revealed:u,draw:w,reveal:q,accept:o,penalty:j,discardTop:M,shuffle:S,reset:F,filter:R,peek:G}}const T=({initialCards:v=[],includeSensitive:y=!1,onPenalty:t})=>{const{top:d,revealed:i,draw:m,accept:f,penalty:c,peek:h,history:k,discardTop:u,shuffle:g,reset:b}=D(v,{includeSensitive:y}),s=()=>{m()},w=()=>{f()},q=async()=>{await c(t)};return e.jsxs("div",{style:{fontFamily:"system-ui, sans-serif"},children:[e.jsxs("div",{style:{marginBottom:12},children:[e.jsx("button",{onClick:()=>g(),type:"button",children:"Shuffle"}),e.jsx("button",{onClick:()=>b(),type:"button",style:{marginLeft:8},children:"Reset"})]}),e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Top of deck"}),d?e.jsx(z,{card:{...d,title:"",subtitle:"",body:""}}):e.jsx("div",{children:"No cards left"}),e.jsxs("div",{style:{marginTop:8},children:[e.jsx("button",{onClick:s,children:"Draw"}),e.jsx("button",{onClick:()=>u(),style:{marginLeft:8},children:"Discard"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Revealed"}),i?e.jsxs(e.Fragment,{children:[e.jsx(z,{card:i}),e.jsxs("div",{style:{marginTop:8},children:[e.jsx("button",{onClick:w,children:"Accept"}),e.jsx("button",{onClick:q,style:{marginLeft:8},children:"Penalty"})]})]}):e.jsx("div",{children:"No revealed card"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Peek (next 3)"}),e.jsx("div",{style:{display:"grid",gap:8},children:h(3).map(o=>e.jsxs("div",{style:{border:"1px dashed #ccc",padding:8,borderRadius:6},children:[e.jsx("strong",{children:o.title??"—"}),e.jsx("div",{style:{fontSize:12,color:"#666"},children:o.subtitle??""})]},o.id))}),e.jsx("h4",{style:{marginTop:16},children:"History"}),e.jsx("div",{style:{maxHeight:220,overflow:"auto",fontSize:13},children:k.map((o,j)=>e.jsxs("div",{style:{borderBottom:"1px solid #eee",paddingBottom:6,marginBottom:6},children:[e.jsx("div",{style:{color:"#444"},children:o.action}),e.jsx("div",{style:{color:"#999",fontSize:11},children:o.ts})]},j))})]})]})]})};T.__docgenInfo={description:"",methods:[],displayName:"CardDeck",props:{initialCards:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"union",raw:'"image" | "gif" | "video" | "svg" | "other"',elements:[{name:"literal",value:'"image"'},{name:"literal",value:'"gif"'},{name:"literal",value:'"video"'},{name:"literal",value:'"svg"'},{name:"literal",value:'"other"'}],required:!0}},{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!1}},{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"loading",value:{name:"union",raw:'"lazy" | "eager"',elements:[{name:"literal",value:'"lazy"'},{name:"literal",value:'"eager"'}],required:!1}}]},required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "none" }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"none"',required:!0}}]}}]},{name:"null"}],required:!1}},{key:"meta",value:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>",required:!1}}]}}],raw:"GenericCard[]"},description:"",defaultValue:{value:"[]",computed:!1}},includeSensitive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onPenalty:{required:!1,tsType:{name:"signature",type:"function",raw:"(revealed: GenericCard) => void | Promise<GenericCard | null | undefined>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"union",raw:'"image" | "gif" | "video" | "svg" | "other"',elements:[{name:"literal",value:'"image"'},{name:"literal",value:'"gif"'},{name:"literal",value:'"video"'},{name:"literal",value:'"svg"'},{name:"literal",value:'"other"'}],required:!0}},{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!1}},{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"loading",value:{name:"union",raw:'"lazy" | "eager"',elements:[{name:"literal",value:'"lazy"'},{name:"literal",value:'"eager"'}],required:!1}}]},required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "none" }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"none"',required:!0}}]}}]},{name:"null"}],required:!1}},{key:"meta",value:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>",required:!1}}]}},name:"revealed"}],return:{name:"union",raw:"void | Promise<GenericCard | null | undefined>",elements:[{name:"void"},{name:"Promise",elements:[{name:"union",raw:"GenericCard | null | undefined",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"union",raw:'"image" | "gif" | "video" | "svg" | "other"',elements:[{name:"literal",value:'"image"'},{name:"literal",value:'"gif"'},{name:"literal",value:'"video"'},{name:"literal",value:'"svg"'},{name:"literal",value:'"other"'}],required:!0}},{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!1}},{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"loading",value:{name:"union",raw:'"lazy" | "eager"',elements:[{name:"literal",value:'"lazy"'},{name:"literal",value:'"eager"'}],required:!1}}]},required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "none" }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"none"',required:!0}}]}}]},{name:"null"}],required:!1}},{key:"meta",value:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>",required:!1}}]}},{name:"null"},{name:"undefined"}]}],raw:"Promise<GenericCard | null | undefined>"}]}}},description:""}}};export{T as C};
