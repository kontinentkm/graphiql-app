import{i as d,a as S,b as g,c as b,d as j,e as y,f as I,g as R,h as $,p as a,D,K as c,j as O,k as V,l as k,m as v,u as x,s as B,n as E,o as U}from"./index-L562FJYG.js";function A(n){return N(n,e=>!V(e),F)}function F(n){return!k(n)&&!v(n)}function N(n,e,t){const i=n.getDirectives().filter(e),u=Object.values(n.getTypeMap()).filter(t);return[h(n),...i.map(s=>K(s)),...u.map(s=>M(s))].filter(Boolean).join(`

`)}function h(n){if(n.description==null&&L(n))return;const e=[],t=n.getQueryType();t&&e.push(`  query: ${t.name}`);const i=n.getMutationType();i&&e.push(`  mutation: ${i.name}`);const u=n.getSubscriptionType();return u&&e.push(`  subscription: ${u.name}`),r(n)+`schema {
${e.join(`
`)}
}`}function L(n){const e=n.getQueryType();if(e&&e.name!=="Query")return!1;const t=n.getMutationType();if(t&&t.name!=="Mutation")return!1;const i=n.getSubscriptionType();return!(i&&i.name!=="Subscription")}function M(n){if(d(n))return _(n);if(S(n))return q(n);if(g(n))return G(n);if(b(n))return Q(n);if(j(n))return z(n);if(y(n))return C(n);I(!1,"Unexpected type: "+R(n))}function _(n){return r(n)+`scalar ${n.name}`+P(n)}function f(n){const e=n.getInterfaces();return e.length?" implements "+e.map(t=>t.name).join(" & "):""}function q(n){return r(n)+`type ${n.name}`+f(n)+m(n)}function G(n){return r(n)+`interface ${n.name}`+f(n)+m(n)}function Q(n){const e=n.getTypes(),t=e.length?" = "+e.join(" | "):"";return r(n)+"union "+n.name+t}function z(n){const e=n.getValues().map((t,i)=>r(t,"  ",!i)+"  "+t.name+l(t.deprecationReason));return r(n)+`enum ${n.name}`+p(e)}function C(n){const e=Object.values(n.getFields()).map((t,i)=>r(t,"  ",!i)+"  "+o(t));return r(n)+`input ${n.name}`+p(e)}function m(n){const e=Object.values(n.getFields()).map((t,i)=>r(t,"  ",!i)+"  "+t.name+T(t.args,"  ")+": "+String(t.type)+l(t.deprecationReason));return p(e)}function p(n){return n.length!==0?` {
`+n.join(`
`)+`
}`:""}function T(n,e=""){return n.length===0?"":n.every(t=>!t.description)?"("+n.map(o).join(", ")+")":`(
`+n.map((t,i)=>r(t,"  "+e,!i)+"  "+e+o(t)).join(`
`)+`
`+e+")"}function o(n){const e=$(n.defaultValue,n.type);let t=n.name+": "+String(n.type);return e&&(t+=` = ${a(e)}`),t+l(n.deprecationReason)}function K(n){return r(n)+"directive @"+n.name+T(n.args)+(n.isRepeatable?" repeatable":"")+" on "+n.locations.join(" | ")}function l(n){return n==null?"":n!==D?` @deprecated(reason: ${a({kind:c.STRING,value:n})})`:" @deprecated"}function P(n){return n.specifiedByURL==null?"":` @specifiedBy(url: ${a({kind:c.STRING,value:n.specifiedByURL})})`}function r(n,e="",t=!0){const{description:i}=n;if(i==null)return"";const u=a({kind:c.STRING,value:i,block:O(i)});return(e&&!t?`
`+e:e)+u.replace(/\n/g,`
`+e)+`
`}const H=({schema:n})=>{const e=x(B);return E.jsx("textarea",{disabled:!0,defaultValue:n?A(n):U[e].no_schema_msg})};export{H as default};
