"use strict";(self.webpackChunkdanxi_doc=self.webpackChunkdanxi_doc||[]).push([[4813],{6273:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(7953),l=a(9772),r=a(9534);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,l.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(r.A,{permalink:a,title:n.createElement(l.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&n.createElement(r.A,{permalink:s,title:n.createElement(l.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},4020:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(7953),l=a(962),r=a(7950);function s(e){let{items:t,component:a=r.A}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(l.i,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}},3165:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var n=a(7953),l=a(8835),r=a(9772),s=a(8096),o=a(7516),i=a(806),g=a(1190),c=a(9808),m=a(6273),p=a(7847),u=a(4020);function d(e){const t=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,r.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,r.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function h(e){let{tag:t}=e;const a=d(t);return n.createElement(n.Fragment,null,n.createElement(o.be,{title:a}),n.createElement(p.A,{tag:"blog_tags_posts"}))}function b(e){let{tag:t,items:a,sidebar:l,listMetadata:s}=e;const o=d(t);return n.createElement(c.A,{sidebar:l},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,o),n.createElement(g.A,{href:t.allTagsPath},n.createElement(r.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),n.createElement(u.A,{items:a}),n.createElement(m.A,{metadata:s}))}function E(e){return n.createElement(o.e3,{className:(0,l.A)(i.G.wrapper.blogPages,i.G.page.blogTagPostListPage)},n.createElement(h,e),n.createElement(b,e))}}}]);