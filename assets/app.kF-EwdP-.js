import{v as s,a5 as p,a6 as u,a7 as c,a8 as l,a9 as f,aa as d,ab as m,ac as h,ad as A,ae as g,U as v,d as P,u as w,j as y,z as C,af as R,ag as _,ah as b,ai as E}from"./chunks/framework.SHoGXsR8.js";import{t as D}from"./chunks/theme.kIHDAbVg.js";const T={...D};function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=i(T),j=P({name:"VitePressApp",setup(){const{site:e}=w();return y(()=>{C(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),e.value.router.prefetchLinks&&R(),_(),b(),o.setup&&o.setup(),()=>E(o.Layout)}});async function L(){const e=S(),a=O();a.provide(u,e);const t=c(e.route);return a.provide(l,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function O(){return h(j)}function S(){let e=s,a;return A(t=>{let n=g(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=v(()=>import(n),__vite__mapDeps([]))),s&&(e=!1),r},o.NotFound)}s&&L().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{L as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}