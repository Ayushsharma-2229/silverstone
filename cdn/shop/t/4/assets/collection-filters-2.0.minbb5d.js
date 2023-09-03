!function(){var e={2136:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var s=n(4942),i=n(8971),o=n(2870),r=n(2627);class l{constructor(e,t=this.defaultOptions){(0,s.Z)(this,"defaultOptions",{presetContentHeight:!1,duration:300,callback:()=>{}}),(0,s.Z)(this,"selectors",{items:[".sf__accordion-item"],buttons:[".sf__accordion-button"],contents:[".sf__accordion-content"]}),(0,s.Z)(this,"openClass","open"),(0,s.Z)(this,"initClass","acc-initialized"),(0,s.Z)(this,"removeEvents",null),(0,s.Z)(this,"destroy",(()=>{this.removeEvents(),window.removeEventListener("resize",this.debouncedSetContentHeight)})),(0,s.Z)(this,"setContentOpacity",(()=>{this.domNodes.contents.forEach((e=>e.style.opacity=1))})),(0,s.Z)(this,"setItemOverflowState",(()=>{var e,t;null===(e=this.domNodes)||void 0===e||null===(t=e.items)||void 0===t||t.forEach(((e,t)=>{var n,s,i,o,r,l;let a=null===(n=this.domNodes)||void 0===n||null===(s=n.contents)||void 0===s?void 0:s[t];const c=null!=e&&null!==(i=e.classList)&&void 0!==i&&null!==(o=i.contains)&&void 0!==o&&o.call(i,this.openClass)?"remove":"add";null==a||null===(r=a.classList)||void 0===r||null===(l=r[c])||void 0===l||l.call(r,"overflow-hidden")}))})),(0,s.Z)(this,"setContentHeight",(()=>{this.domNodes=(0,o.zt)(this.selectors,this.container);const{items:e,contents:t}=this.domNodes;e.forEach(((e,n)=>{var s,i;if(null!=e&&e.classList.contains(this.openClass)){var o,r,l;null==e||null===(o=e.style)||void 0===o||o.setProperty("--content-max-height","auto");const s=null==t||null===(r=t[n])||void 0===r?void 0:r.scrollHeight;null==e||null===(l=e.style)||void 0===l||l.setProperty("--content-max-height",`${s}px`)}else{var a;null==e||null===(a=e.style)||void 0===a||a.setProperty("--content-max-height",0)}null==t||null===(s=t[n])||void 0===s||null===(i=s.classList)||void 0===i||i.add("max-height-set")})),this.setItemOverflowState(),this.setContentOpacity()})),(0,s.Z)(this,"toggle",(e=>{var t,n,s,i,o,r,l,a,c;const d=null===(t=this.domNodes)||void 0===t||null===(n=t.items)||void 0===n?void 0:n[e],u=null===(s=this.domNodes)||void 0===s||null===(i=s.contents)||void 0===i?void 0:i[e],h=null==d||null===(o=d.classList)||void 0===o?void 0:o.contains(this.openClass);null==d||null===(r=d.classList)||void 0===r||r.toggle(this.openClass);const m=h?0:null===(l=this.domNodes)||void 0===l||null===(a=l.contents)||void 0===a||null===(c=a[e])||void 0===c?void 0:c.scrollHeight;var f;(null==d||d.style.setProperty("--content-max-height",`${m}px`),h)?null==u||null===(f=u.classList)||void 0===f||f.add("overflow-hidden"):setTimeout((()=>{var e;null==u||null===(e=u.classList)||void 0===e||e.remove("overflow-hidden")}),350)})),e&&!e.classList.contains(this.initClass)&&(this.container=e,this.domNodes=(0,o.zt)(this.selectors,this.container),this.options=Object.assign({},this.defaultOptions,t),this.debouncedSetContentHeight=(0,r.D)(this.setContentHeight.bind(this),300),this.init())}init(){var e,t;null===(e=this.container)||void 0===e||null===(t=e.style)||void 0===t||t.setProperty("--duration",` ${this.options.duration}ms`),this.removeEvents=(0,i.X)({context:this.container,selector:this.selectors.buttons[0],handler:(e,t)=>{t.classList.add("pointer-events-none");const n=this.domNodes.buttons.indexOf(t);this.toggle(n),setTimeout((()=>{t.classList.remove("pointer-events-none")}),350)}}),this.options.presetContentHeight?window.requestAnimationFrame(this.setContentHeight):(this.setItemOverflowState(),this.setContentOpacity()),window.addEventListener("resize",this.debouncedSetContentHeight),"function"==typeof this.options.callback&&this.options.callback(),this.container.classList.add(this.initClass)}}class a{constructor(){(0,s.Z)(this,"selectedTags",new Set),(0,s.Z)(this,"currentPage",1),(0,s.Z)(this,"innerWidth",window.innerWidth),(0,s.Z)(this,"selectors",{section:'[data-section-type="collection-template"]',collectionContainer:".sf__collection-container",sidebar:".sf__sidebar",openSidebar:".sf__sidebar-open",closeSidebar:".sf__sidebar-close",sidebarContent:".sf__sidebar-content",sidebarWrapper:".sf__sidebar-wrapper",filterWrapper:".sf__filter-wrapper",tagsFilter:"[data-tags-filter]",mbSortIcon:".sf__sortmb-icon",mbSortWrapper:".sf__sortmb-wrapper",mbSortList:".sf__sortmb-list",mbSortListItems:[".sf__sortmb-list li"],mbSortListItemActive:".sf__sortmb-list li.active",mbSortCloseIcon:".sf__hidden-sortmb"}),(0,s.Z)(this,"initSidebarFilter",(()=>{const{sidebar:e,filterWrapper:t}=this.domNodes;if(e&&t){this.accs&&this.accs.destroy();let e=this.setPresetContentHeight();t.classList.remove("acc-initialized"),this.accs=new l(t,{presetContentHeight:e,callback:()=>t.classList.add("opacity-100")})}this.toggleSidebarFilter(),window.addEventListener("resize",(()=>{this.innerWidth=window.innerWidth,this.responsiveSidebar()}))})),(0,s.Z)(this,"setPresetContentHeight",(()=>{var e;let t=!0,n=null===(e=this.domNodes.sidebar)||void 0===e?void 0:e.dataset.type;return this.innerWidth<1280?t=!1:this.innerWidth>1279&&"fixed"!==n?t=!0:"fixed"===n&&(t=!1),t})),(0,s.Z)(this,"responsiveSidebar",(()=>{var e;let t=null===(e=this.domNodes.sidebar)||void 0===e?void 0:e.dataset.type;var n,s,i;"leftColumn"!==t&&"rightColumn"!==t||(this.innerWidth>1279?null===(n=this.domNodes.sidebar)||void 0===n||n.style.removeProperty("display"):(null===(s=this.domNodes.sidebar)||void 0===s||s.style.setProperty("display","none"),null===(i=this.domNodes.sidebar)||void 0===i||i.style.setProperty("--tw-bg-opacity","0")))})),(0,s.Z)(this,"toggleSidebarFilter",(()=>{const{section:e,sidebar:t,openSidebar:n,closeSidebar:s}=this.domNodes;null==n||n.addEventListener("click",(t=>{t.preventDefault(),this.openSidebarFilter(),e.classList.add("sidebar-open"),document.documentElement.classList.add("prevent-scroll")})),null==s||s.addEventListener("click",this.closeSidebarFilter),null==t||t.addEventListener("click",(n=>{n.target===t&&(this.closeSidebarFilter(),e.classList.remove("sidebar-open"),document.documentElement.classList.remove("prevent-scroll"))}))})),(0,s.Z)(this,"openSidebarFilter",(()=>{const{sidebar:e,sidebarContent:t}=this.domNodes;null==e||e.style.setProperty("display","block"),setTimeout((()=>{var n;null==e||e.style.setProperty("--tw-bg-opacity","0.5"),null==t||t.style.setProperty("--tw-translate-x","0"),null===(n=this.accs)||void 0===n||n.setContentHeight()}),50)})),(0,s.Z)(this,"closeSidebarFilter",(()=>{const{sidebar:e,sidebarContent:t}=this.domNodes,n=e.dataset.type;(this.innerWidth<1280||"fixed"===n)&&(null==e||e.style.setProperty("--tw-bg-opacity","0"),null==t||t.style.setProperty("--tw-translate-x","-100%"),document.documentElement.classList.remove("prevent-scroll"),setTimeout((()=>{null==e||e.style.setProperty("display","none")}),200))})),(0,s.Z)(this,"initSortbyMobile",(()=>{(0,i.X)({selector:this.selectors.mbSortIcon,handler:this.openSortByMobile}),document.body.addEventListener("click",this.handleSortWrapperClick);let e=this.domNodes.mbSortListItemActive;(0,i.X)({selector:this.selectors.mbSortListItems[0],handler:(t,n)=>{if(n!==e){var s,i,o,r,l;null===(s=e)||void 0===s||null===(i=s.classList)||void 0===i||null===(o=i.remove)||void 0===o||o.call(i,"active"),n.classList.add("active"),e=n,this.closeSortByMobile();const t=n.dataset.value;t&&(null===(r=window.spratlyTheme)||void 0===r||null===(l=r.CollectionTagsFilters)||void 0===l||l._onSorting(t));const a=document.querySelector("[data-form-sortby] select");a.selectedIndex=n.dataset.index;a.closest("form").dispatchEvent(new Event("input"))}}})})),(0,s.Z)(this,"openSortByMobile",(()=>{const{mbSortWrapper:e,mbSortList:t}=this.domNodes;null==e||e.style.setProperty("display","block"),setTimeout((()=>{document.documentElement.classList.add("overflow-hidden"),null==e||e.style.setProperty("--tw-bg-opacity","0.5"),null==t||t.style.setProperty("--tw-translate-y","0")}),200)})),(0,s.Z)(this,"closeSortByMobile",(e=>{const{mbSortWrapper:t,mbSortList:n}=this.domNodes;null==t||t.style.setProperty("--tw-bg-opacity","0"),null==n||n.style.setProperty("--tw-translate-y","100%"),document.documentElement.classList.remove("overflow-hidden"),setTimeout((()=>{null==t||t.style.setProperty("display","none")}),200)})),(0,s.Z)(this,"handleSortWrapperClick",(e=>{var t,n,s;const i=null===(t=e.target)||void 0===t?void 0:t.closest(this.selectors.mbSortList),o=null===(n=e.target)||void 0===n?void 0:n.closest(this.selectors.mbSortIcon),r=null===(s=e.target)||void 0===s?void 0:s.closest(this.selectors.mbSortCloseIcon);(!i&&!o||r)&&this.closeSortByMobile()}))}init(){this.queryDomNodes(),this.sectionId=this.domNodes.section.dataset.sectionId,this.initSortbyMobile(),window.requestAnimationFrame(this.initSidebarFilter)}queryDomNodes(){this.domNodes=(0,o.zt)(this.selectors)}}},6010:function(){class e extends HTMLElement{constructor(){super(),this.querySelector("a").addEventListener("click",(e=>{e.preventDefault();(this.closest("collection-filters-form")||document.querySelector("collection-filters-form")).onActiveFilterClick(e)}))}}customElements.define("facet-remove",e)},5626:function(){class e extends HTMLElement{constructor(){super(),this.querySelectorAll("input").forEach((e=>e.addEventListener("change",this.onRangeChange.bind(this)))),this.setMinAndMaxValues()}onRangeChange(e){this.adjustToValidValues(e.currentTarget),this.setMinAndMaxValues()}setMinAndMaxValues(){const e=this.querySelectorAll("input"),t=e[0],n=e[1];n.value&&t.setAttribute("max",n.value),t.value&&n.setAttribute("min",t.value),""===t.value&&n.setAttribute("min",0),""===n.value&&t.setAttribute("max",n.getAttribute("max"))}adjustToValidValues(e){const t=Number(e.value),n=Number(e.getAttribute("min")),s=Number(e.getAttribute("max"));t<n&&(e.value=n),t>s&&(e.value=s)}}customElements.define("price-range",e)},6295:function(e,t,n){"use strict";n.r(t);n(2422);t.default=new class{constructor(){return this.component=this.component.bind(this),this.component}component(e,t,...n){if("function"==typeof e)return e({...t,children:n});n&&(n=n.filter((e=>null!==e))),t&&(t.class&&(t.className=t.class),delete t.children);let s="fragment"!==e?function(e,t){t=t||{};let n=document.createElement(e);try{n=Object.assign(n,t)}catch{const e=Object.keys(t);for(let s=0;s<e.length;s++)"dataSet"!==t[s]&&n.setAttribute(e[s],t[e[s]])}return n}(e,t):document.createDocumentFragment();if(-1!==["svg","path","rect","text","circle","g"].indexOf(e)){s=document.createElementNS("http://www.w3.org/2000/svg",e);for(const e in t){const n="className"===e?"class":e;s.setAttribute(n,t[e])}}for(const e of n)Array.isArray(e)?s.append(...e):s.append(e);if(null!=t&&t.dataSet)for(const e in t.dataSet)Object.prototype.hasOwnProperty.call(t.dataSet,e)&&(s.dataset[e]=t.dataSet[e]);return t&&!window.__aleartedJSXData&&Object.keys(t).find((e=>e.match(/^data-/)))&&(alert("Do not use data-* in your JSX component! Use dataSet instead!! - Check the console.trace for more info"),window.__aleartedJSXData=!0),null!=t&&t.ref&&("function"==typeof t.ref?t.ref(s):t.ref=s),null!=t&&t.on&&Object.entries(t.on).forEach((([e,t])=>{s.addEventListener(e,t)})),null!=t&&t.style&&Object.entries(t.style).forEach((([e,t])=>{s.style.setProperty(e,t)})),s}}},2627:function(e,t,n){"use strict";function s(e,t=300){let n;return(...s)=>{clearTimeout(n),n=setTimeout((()=>e.apply(this,s)),t)}}n.d(t,{D:function(){return s}})},8971:function(e,t,n){"use strict";n.d(t,{X:function(){return s}});const s=({context:e=document.documentElement,event:t="click",selector:n,handler:s})=>{const i=function(e){for(let t=e.target;t&&t!==this;t=t.parentNode)if(t.matches(n)){s.call(t,e,t);break}};return e.addEventListener(t,i,!1),()=>{e.removeEventListener(t,i,!1)}}},2870:function(e,t,n){"use strict";n.d(t,{zt:function(){return o},k3:function(){return l}});var s=n(643),i=n.n(s);n(2837),n(6295).default;function o(e={},t=document){return Object.entries(e).reduce(((e,[n,s])=>{var i;const o="string"==typeof s,r=o?"querySelector":"querySelectorAll",l=o?s:s[0];return e[n]=null==t||null===(i=t[r])||void 0===i?void 0:i.call(t,l),!o&&e[n]&&(e[n]=[...e[n]]),e}),{})}window.__getSectionInstanceByType=e=>window.Shopify.theme.sections.instances.find((t=>t.type===e));const r=document.querySelector("#scroll-to-top-target");function l(e){i()(r,e)}},2837:function(e,t,n){"use strict";const{themeScriptURLs:s,themeStyleURLs:i}=window},2422:function(){!function(){function e(){var e=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();e.forEach((function(e){var n=e instanceof Node;t.appendChild(n?e:document.createTextNode(String(e)))})),this.appendChild(t)}[Element.prototype,Document.prototype,DocumentFragment.prototype].forEach((function(t){t.hasOwnProperty("append")||Object.defineProperty(t,"append",{configurable:!0,enumerable:!0,writable:!0,value:e})}))}()},643:function(e){var t="complete",n="canceled";function s(e,t,n){Math.max(0,t),Math.max(0,n),e.self===e?e.scrollTo(t,n):(e.scrollLeft=t,e.scrollTop=n)}function i(e){var n=e._scrollSettings;if(n){var o=n.maxSynchronousAlignments,r=function(e,t){var n,s,i,o,r,l,a,c=e.align,d=e.target.getBoundingClientRect(),u=c&&null!=c.left?c.left:.5,h=c&&null!=c.top?c.top:.5,m=c&&null!=c.leftOffset?c.leftOffset:0,f=c&&null!=c.topOffset?c.topOffset:0,p=u,v=h;if(e.isWindow(t))l=Math.min(d.width,t.innerWidth),a=Math.min(d.height,t.innerHeight),s=d.left+t.pageXOffset-t.innerWidth*p+l*p,i=d.top+t.pageYOffset-t.innerHeight*v+a*v,s-=m,i-=f,s=e.align.lockX?t.pageXOffset:s,i=e.align.lockY?t.pageYOffset:i,o=s-t.pageXOffset,r=i-t.pageYOffset;else{l=d.width,a=d.height,n=t.getBoundingClientRect();var g=d.left-(n.left-t.scrollLeft),y=d.top-(n.top-t.scrollTop);s=g+l*p-t.clientWidth*p,i=y+a*v-t.clientHeight*v,s-=m,i-=f,s=Math.max(Math.min(s,t.scrollWidth-t.clientWidth),0),i=Math.max(Math.min(i,t.scrollHeight-t.clientHeight),0),s=e.align.lockX?t.scrollLeft:s,i=e.align.lockY?t.scrollTop:i,o=s-t.scrollLeft,r=i-t.scrollTop}return{x:s,y:i,differenceX:o,differenceY:r}}(n,e),l=Date.now()-n.startTime,a=Math.min(1/n.time*l,1);if(n.endIterations>=o)return s(e,r.x,r.y),e._scrollSettings=null,n.end(t);var c=1-n.ease(a);if(s(e,r.x-r.differenceX*c,r.y-r.differenceY*c),l>=n.time)return n.endIterations++,n.scrollAncestor&&i(n.scrollAncestor),void i(e);!function(e){if("requestAnimationFrame"in window)return window.requestAnimationFrame(e);setTimeout(e,16)}(i.bind(null,e))}}function o(e){return e.self===e}function r(e){return"pageXOffset"in e||(e.scrollHeight!==e.clientHeight||e.scrollWidth!==e.clientWidth)&&"hidden"!==getComputedStyle(e).overflow}function l(){return!0}function a(e){if(e.assignedSlot)return a(e.assignedSlot);if(e.parentElement)return"BODY"===e.parentElement.tagName?e.parentElement.ownerDocument.defaultView||e.parentElement.ownerDocument.ownerWindow:e.parentElement;if(e.getRootNode){var t=e.getRootNode();if(11===t.nodeType)return t.host}}e.exports=function(e,s,c){if(e){"function"==typeof s&&(c=s,s=null),s||(s={}),s.time=isNaN(s.time)?1e3:s.time,s.ease=s.ease||function(e){return 1-Math.pow(1-e,e/2)},s.align=s.align||{};var d=a(e),u=1,h=s.validTarget||l,m=s.isScrollable;s.debug;for(var f=[];d;)if(s.debug,h(d,u)&&(m?m(d,r):r(d))&&(u++,f.push(d)),!(d=a(d))){p(t);break}return f.reduce(((t,r,l)=>function(e,t,s,r,l){var a,c=!t._scrollSettings,d=t._scrollSettings,u=Date.now(),h={passive:!0};function m(e){t._scrollSettings=null,t.parentElement&&t.parentElement._scrollSettings&&t.parentElement._scrollSettings.end(e),s.debug,l(e),a&&(t.removeEventListener("touchstart",a,h),t.removeEventListener("wheel",a,h))}d&&d.end(n);var f=s.maxSynchronousAlignments;return null==f&&(f=3),t._scrollSettings={startTime:u,endIterations:0,target:e,time:s.time,ease:s.ease,align:s.align,isWindow:s.isWindow||o,maxSynchronousAlignments:f,end:m,scrollAncestor:r},"cancellable"in s&&!s.cancellable||(a=m.bind(null,n),t.addEventListener("touchstart",a,h),t.addEventListener("wheel",a,h)),c&&i(t),a}(e,r,s,f[l+1],p)),null)}function p(e){--u||c&&c(e)}}},4942:function(e,t,n){"use strict";function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return s}})}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,n),o.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){"use strict";var e=n(4942),t=n(2627);class s{constructor(t,n={}){(0,e.Z)(this,"selectors",{loadingBar:"al-loading-bar",loadingOverlay:"al-loading-overlay"}),(0,e.Z)(this,"defaultOptions",{overlay:null,thickness:"3px",color:"gray",startDuration:1e3,finishDuration:300}),this.options=Object.assign({},this.defaultOptions,n),this.target=t,this.overlay=this.options.overlay||this.target,this.cleanUp=this.cleanUp.bind(this),this.setLoadingData()}setLoadingData(){const{overlay:e,options:{startDuration:t,finishDuration:n,thickness:s,color:i}}=this;e.style.setProperty("--al-thickness",` ${s}`),e.style.setProperty("--al-color",` ${i}`),e.style.setProperty("--al-start-duration",` ${t}ms`),e.style.setProperty("--al-finish-duration",` ${n}ms`)}start(){this.target.classList.add(this.selectors.loadingBar,"start","loading"),this.overlay.classList.add(this.selectors.loadingOverlay,"overlay-show")}finish(e=(()=>{})){const{target:t,overlay:n,cleanUp:s,options:{finishDuration:i}}=this,o=window.getComputedStyle(t,":before").width;t.style.setProperty("--al-end-width",o),t.classList.add("loaded"),t.classList.remove("loading"),setTimeout((()=>{t.classList.add("finished"),n.classList.remove("overlay-show")}),50),setTimeout(s,2*i),setTimeout(e,i)}cleanUp(){this.target.classList.remove(this.selectors.loadingBar,"start","loaded","finished"),this.overlay.classList.remove(this.selectors.loadingOverlay)}}n(5626),n(6010);function i(e,t){t=t||{};var n=e.tabIndex;e.tabIndex=-1,e.dataset.tabIndex=n,e.focus(),void 0!==t.className&&e.classList.add(t.className),e.addEventListener("blur",(function s(i){i.target.removeEventListener(i.type,s),e.tabIndex=n,delete e.dataset.tabIndex,void 0!==t.className&&e.classList.remove(t.className)}))}var o={};function r(e,t){t=t||{};var n=function(e){return Array.prototype.slice.call(e.querySelectorAll("[tabindex],[draggable],a[href],area,button:enabled,input:not([type=hidden]):enabled,object,select:enabled,textarea:enabled")).filter((function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)}))}(e),s=t.elementToFocus||e,r=n[0],a=n[n.length-1];l(),o.focusin=function(t){e===t.target||e.contains(t.target)||r.focus(),t.target!==e&&t.target!==a&&t.target!==r||document.addEventListener("keydown",o.keydown)},o.focusout=function(){document.removeEventListener("keydown",o.keydown)},o.keydown=function(t){9===t.keyCode&&(t.target!==a||t.shiftKey||(t.preventDefault(),r.focus()),t.target!==e&&t.target!==r||!t.shiftKey||(t.preventDefault(),a.focus()))},document.addEventListener("focusout",o.focusout),document.addEventListener("focusin",o.focusin),i(s,t)}function l(){document.removeEventListener("focusin",o.focusin),document.removeEventListener("focusout",o.focusout),document.removeEventListener("keydown",o.keydown)}class a extends HTMLElement{constructor(){super(),this.mainDetailsToggle=this.querySelector("details");const e=this.querySelectorAll("summary");this.addAccessibilityAttributes(e),"iPhone"===navigator.platform&&document.documentElement.style.setProperty("--viewport-height",`${window.innerHeight}px`),this.addEventListener("keyup",this.onKeyUp.bind(this)),this.addEventListener("focusout",this.onFocusOut.bind(this)),this.bindEvents()}bindEvents(){this.querySelectorAll("summary").forEach((e=>e.addEventListener("click",this.onSummaryClick.bind(this)))),this.querySelectorAll("button").forEach((e=>e.addEventListener("click",this.onCloseButtonClick.bind(this))))}addAccessibilityAttributes(e){e.forEach((e=>{e.setAttribute("role","button"),e.setAttribute("aria-expanded",!1),e.setAttribute("aria-controls",e.nextElementSibling.id)}))}onKeyUp(e){if("ESCAPE"!==e.code.toUpperCase())return;const t=e.target.closest("details[open]");t&&(t===this.mainDetailsToggle?this.closeMenuDrawer(this.mainDetailsToggle.querySelector("summary")):this.closeSubmenu(t))}onSummaryClick(e){const t=e.currentTarget,n=t.parentNode,s=n.hasAttribute("open");n===this.mainDetailsToggle?(s&&e.preventDefault(),s?this.closeMenuDrawer(t):this.openMenuDrawer(t)):(r(t.nextElementSibling,n.querySelector("button")),setTimeout((()=>{n.classList.add("menu-opening")})))}openMenuDrawer(e){setTimeout((()=>{this.mainDetailsToggle.classList.add("menu-opening")})),e.setAttribute("aria-expanded",!0),r(this.mainDetailsToggle,e),document.body.classList.add(`overflow-hidden-${this.dataset.breakpoint}`)}closeMenuDrawer(e,t=!1){void 0!==e&&(this.mainDetailsToggle.classList.remove("menu-opening"),this.mainDetailsToggle.querySelectorAll("details").forEach((e=>{e.removeAttribute("open"),e.classList.remove("menu-opening")})),this.mainDetailsToggle.querySelector("summary").setAttribute("aria-expanded",!1),document.body.classList.remove(`overflow-hidden-${this.dataset.breakpoint}`),l(),this.closeAnimation(this.mainDetailsToggle))}onFocusOut(e){setTimeout((()=>{this.mainDetailsToggle.hasAttribute("open")&&!this.mainDetailsToggle.contains(document.activeElement)&&this.closeMenuDrawer()}))}onCloseButtonClick(e){const t=e.currentTarget.closest("details");this.closeSubmenu(t)}closeSubmenu(e){e.classList.remove("menu-opening"),l(),this.closeAnimation(e)}closeAnimation(e){let t;const n=s=>{void 0===t&&(t=s);s-t<400?window.requestAnimationFrame(n):(e.removeAttribute("open"),e.closest("details[open]")&&r(e.closest("details[open]"),e.querySelector("summary")))};window.requestAnimationFrame(n)}}function c(e){var t,n,s,i,o,r=[];for(t=document.getElementsByClassName("select-items"),n=document.getElementsByClassName("select-selected"),i=t.length,o=n.length,s=0;s<o;s++)e==n[s]?r.push(s):n[s].classList.remove("select-arrow-active");for(s=0;s<i;s++)r.indexOf(s)&&t[s].classList.add("select-hide")}customElements.define("menu-drawer",a),document.addEventListener("click",c);var d=n(2870),u=n(2136);const h={leftColumn:"#CollectionProductGrid",rightColumn:"#CollectionProductGrid",fixed:'[data-section-type="collection-template"]',mobile:'[data-section-type="collection-template"]'};class m extends HTMLElement{constructor(){var n;super(),(0,e.Z)(this,"screen",""),(0,e.Z)(this,"setLoadingTarget",(()=>{const e=window.innerWidth<768?"mobile":"desktop";e!==this.screen&&(this.loading=new s("mobile"===e?document.querySelector(h.mobile):document.querySelector(h[this.dataset.view])),this.screen=e)})),(0,e.Z)(this,"reInitEvents",(()=>{var e;const t=window.spratlyTheme.Collection;t&&t.init(!0),null===(e=this.collectionFiltersInstance)||void 0===e||e.init(),window.spratlyTheme.Products.initProductForms({context:this.productGrid}).then((()=>{var e,n,s,i,o,r;null===(e=window)||void 0===e||null===(n=e.spratlyTheme)||void 0===n||null===(s=n.CompareProduct)||void 0===s||s.setCompareButtonsState(),null===(i=window)||void 0===i||null===(o=i.spratlyTheme)||void 0===o||null===(r=o.Wishlist)||void 0===r||r.setWishlistButtonsState(),function(e){let t,n,s,i,o,r,l,a,d,u,h;if(t=e.getElementsByClassName("sf__custom-select"),i=t.length,t.length>0)for(n=0;n<i;n++){var m;for(r=t[n].getElementsByTagName("select")[0],o=r.length,l=document.createElement("DIV"),l.setAttribute("class","select-selected"),h=document.createElement("SPAN"),h.innerHTML=null===(m=r.options[r.selectedIndex])||void 0===m?void 0:m.innerHTML,t[n].appendChild(l),l.appendChild(h),u=document.createElement("SPAN"),u.innerHTML='<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"/></svg>',u.setAttribute("class","select-arrow"),l.appendChild(u),a=document.createElement("DIV"),a.setAttribute("class","select-items select-hide"),s=0;s<o;s++)d=document.createElement("DIV"),d.innerHTML=r.options[s].innerHTML,r.options[s].getAttribute("selected")&&d.setAttribute("class","same-as-selected"),d.addEventListener("click",(function(e){let t,n,s,i,o,r,l;for(i=this.parentNode.parentNode.getElementsByTagName("select")[0],r=i.length,o=this.parentNode.previousSibling,n=0;n<r;n++)if(i.options[n].innerHTML==this.innerHTML){for(i.selectedIndex=n,o.childNodes[0].innerHTML=this.innerHTML,t=this.parentNode.getElementsByClassName("same-as-selected"),l=t.length,s=0;s<l;s++)t[s].removeAttribute("class");this.setAttribute("class","same-as-selected");break}i.dispatchEvent(new Event("change")),i.dispatchEvent(new Event("click")),o.click()})),a.appendChild(d);t[n].appendChild(a),l.addEventListener("click",(function(e){e.stopPropagation(),c(this),this.nextSibling.classList.toggle("select-hide"),this.classList.toggle("select-arrow-active")}))}}(t.domNodes.container)})).catch(console.error)})),(0,e.Z)(this,"renderSectionFromCache",(async(e,t,n)=>{const s=this.filterData.find(e).html;this.renderFilters(s,t),this.renderProductGrid(s),"function"==typeof n&&n()})),this.filterData=[],this.onActiveFilterClick=this.onActiveFilterClick.bind(this),this.debouncedOnSubmit=(0,t.D)((e=>{this.onSubmitHandler(e)}),500),this.querySelector("form").addEventListener("input",this.debouncedOnSubmit.bind(this)),window.addEventListener("popstate",this.onHistoryChange.bind(this)),this.setLoadingTarget(),window.addEventListener("resize",(0,t.D)(this.setLoadingTarget,500)),this.collectionFiltersInstance=new u.Z,null===(n=this.collectionFiltersInstance)||void 0===n||n.init()}onSubmitHandler(e){e.preventDefault();const t=new FormData(e.target.closest("form")),n=new URLSearchParams(t).toString();this.renderPage(n,e)}onActiveFilterClick(e){e.preventDefault(),this.toggleActiveFacets(),this.renderPage(new URL(e.currentTarget.href).searchParams.toString())}onHistoryChange(e){var t;const n=(null===(t=e.state)||void 0===t?void 0:t.searchParams)||"";this.renderPage(n,null,!1)}toggleActiveFacets(e=!0){document.querySelectorAll(".js-facet-remove").forEach((t=>{t.classList.toggle("disabled",e)}))}renderPage(e,t,n=!0){const s=this.getSections();this.loading.start(),s.forEach((n=>{const s=`${window.location.pathname}?section_id=${n.section}&${e}`,i=e=>e.url===s,o=()=>{this.reInitEvents(),this.loading.finish((()=>(0,d.k3)()))};this.filterData.some(i)?this.renderSectionFromCache(i,t,o):this.renderSectionFromFetch(s,t,o)})),n&&this.updateURLHash(e)}renderSectionFromFetch(e,t,n){fetch(e).then((e=>e.text())).then((s=>{const i=s;this.filterData=[...this.filterData,{html:i,url:e}],this.renderFilters(i,t),this.renderProductGrid(i),"function"==typeof n&&n()}))}renderProductGrid(e){document.getElementById("CollectionProductGrid").innerHTML=(new DOMParser).parseFromString(e,"text/html").getElementById("CollectionProductGrid").innerHTML}renderProductCount(e){}renderFilters(e,t){const n=(new DOMParser).parseFromString(e,"text/html"),s=n.querySelectorAll("#CollectionFiltersForm .js-filter");Array.from(s).filter((e=>!(e=>{var n;return e.dataset.index===(null==t||null===(n=t.target.closest(".js-filter"))||void 0===n?void 0:n.dataset.index)})(e))).forEach((e=>{document.querySelector(`.js-filter[data-index="${e.dataset.index}"]`).innerHTML=e.innerHTML})),this.renderActiveFacets(n),this.renderAdditionalElements(n)}renderActiveFacets(e){[".active-facets-mobile",".active-facets-desktop"].forEach((t=>{const n=e.querySelector(t);n&&(document.querySelector(t).innerHTML=n.innerHTML)})),this.toggleActiveFacets(!1)}renderAdditionalElements(e){[".mobile-facets__open",".mobile-facets__count",".sorting"].forEach((t=>{e.querySelector(t)&&(document.querySelector(t).innerHTML=e.querySelector(t).innerHTML)}))}renderCounts(e,t){[".count-bubble",".facets__selected"].forEach((n=>{const s=t.querySelector(n);e.querySelector(n)&&s&&(t.querySelector(n).outerHTML=e.querySelector(n).outerHTML)}))}updateURLHash(e){history.pushState({searchParams:e},"",`${window.location.pathname}${e&&"?".concat(e)}`)}getSections(){return[{id:"main-collection-product-grid",section:document.getElementById("main-collection-product-grid").dataset.id}]}}customElements.define("collection-filters-form",m)}()}();