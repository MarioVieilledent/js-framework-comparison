(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var B,f,ue,x,X,fe,z,L={},ae=[],Se=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,J=Array.isArray;function $(_,e){for(var t in e)_[t]=e[t];return _}function pe(_){var e=_.parentNode;e&&e.removeChild(_)}function we(_,e,t){var r,i,o,l={};for(o in e)o=="key"?r=e[o]:o=="ref"?i=e[o]:l[o]=e[o];if(arguments.length>2&&(l.children=arguments.length>3?B.call(arguments,2):t),typeof _=="function"&&_.defaultProps!=null)for(o in _.defaultProps)l[o]===void 0&&(l[o]=_.defaultProps[o]);return A(_,l,r,i,null)}function A(_,e,t,r,i){var o={type:_,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++ue};return i==null&&f.vnode!=null&&f.vnode(o),o}function V(_){return _.children}function D(_,e){this.props=_,this.context=e}function M(_,e){if(e==null)return _.__?M(_.__,_.__.__k.indexOf(_)+1):null;for(var t;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null)return t.__e;return typeof _.type=="function"?M(_):null}function de(_){var e,t;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,e=0;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null){_.__e=_.__c.base=t.__e;break}return de(_)}}function Y(_){(!_.__d&&(_.__d=!0)&&x.push(_)&&!F.__r++||X!==f.debounceRendering)&&((X=f.debounceRendering)||fe)(F)}function F(){var _,e,t,r,i,o,l,s,u;for(x.sort(z);_=x.shift();)_.__d&&(e=x.length,r=void 0,i=void 0,o=void 0,s=(l=(t=_).__v).__e,(u=t.__P)&&(r=[],i=[],(o=$({},l)).__v=l.__v+1,K(u,l,o,t.__n,u.ownerSVGElement!==void 0,l.__h!=null?[s]:null,r,s??M(l),l.__h,i),ye(r,l,i),l.__e!=s&&de(l)),x.length>e&&x.sort(z));F.__r=0}function he(_,e,t,r,i,o,l,s,u,m,d){var n,h,p,c,a,C,v,g,w,H,k=0,N=r&&r.__k||ae,E=N.length,P=E,b=e.length;for(t.__k=[],n=0;n<b;n++)(c=t.__k[n]=(c=e[n])==null||typeof c=="boolean"||typeof c=="function"?null:typeof c=="string"||typeof c=="number"||typeof c=="bigint"?A(null,c,null,null,c):J(c)?A(V,{children:c},null,null,null):c.__b>0?A(c.type,c.props,c.key,c.ref?c.ref:null,c.__v):c)!=null&&(c.__=t,c.__b=t.__b+1,(g=He(c,N,v=n+k,P))===-1?p=L:(p=N[g]||L,N[g]=void 0,P--),K(_,c,p,i,o,l,s,u,m,d),a=c.__e,(h=c.ref)&&p.ref!=h&&(p.ref&&Q(p.ref,null,c),d.push(h,c.__c||a,c)),a!=null&&(C==null&&(C=a),H=!(w=p===L||p.__v===null)&&g===v,w?g==-1&&k--:g!==v&&(g===v+1?(k++,H=!0):g>v?P>b-v?(k+=g-v,H=!0):k--:k=g<v&&g==v-1?g-v:0),v=n+k,H=H||g==n&&!w,typeof c.type!="function"||g===v&&p.__k!==c.__k?typeof c.type=="function"||H?c.__d!==void 0?(u=c.__d,c.__d=void 0):u=a.nextSibling:u=me(_,a,u):u=ve(c,u,_),typeof t.type=="function"&&(t.__d=u)));for(t.__e=C,n=E;n--;)N[n]!=null&&(typeof t.type=="function"&&N[n].__e!=null&&N[n].__e==t.__d&&(t.__d=N[n].__e.nextSibling),ge(N[n],N[n]))}function ve(_,e,t){for(var r,i=_.__k,o=0;i&&o<i.length;o++)(r=i[o])&&(r.__=_,e=typeof r.type=="function"?ve(r,e,t):me(t,r.__e,e));return e}function me(_,e,t){return t==null||t.parentNode!==_?_.insertBefore(e,null):e==t&&e.parentNode!=null||_.insertBefore(e,t),e.nextSibling}function He(_,e,t,r){var i=_.key,o=_.type,l=t-1,s=t+1,u=e[t];if(u===null||u&&i==u.key&&o===u.type)return t;if(r>(u!=null?1:0))for(;l>=0||s<e.length;){if(l>=0){if((u=e[l])&&i==u.key&&o===u.type)return l;l--}if(s<e.length){if((u=e[s])&&i==u.key&&o===u.type)return s;s++}}return-1}function $e(_,e,t,r,i){var o;for(o in t)o==="children"||o==="key"||o in e||O(_,o,null,t[o],r);for(o in e)i&&typeof e[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||t[o]===e[o]||O(_,o,e[o],t[o],r)}function Z(_,e,t){e[0]==="-"?_.setProperty(e,t??""):_[e]=t==null?"":typeof t!="number"||Se.test(e)?t:t+"px"}function O(_,e,t,r,i){var o;e:if(e==="style")if(typeof t=="string")_.style.cssText=t;else{if(typeof r=="string"&&(_.style.cssText=r=""),r)for(e in r)t&&e in t||Z(_.style,e,"");if(t)for(e in t)r&&t[e]===r[e]||Z(_.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in _?e.toLowerCase().slice(2):e.slice(2),_.l||(_.l={}),_.l[e+o]=t,t?r||_.addEventListener(e,o?_e:ee,o):_.removeEventListener(e,o?_e:ee,o);else if(e!=="dangerouslySetInnerHTML"){if(i)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e in _)try{_[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?_.removeAttribute(e):_.setAttribute(e,t))}}function ee(_){return this.l[_.type+!1](f.event?f.event(_):_)}function _e(_){return this.l[_.type+!0](f.event?f.event(_):_)}function K(_,e,t,r,i,o,l,s,u,m){var d,n,h,p,c,a,C,v,g,w,H,k,N,E,P,b=e.type;if(e.constructor!==void 0)return null;t.__h!=null&&(u=t.__h,s=e.__e=t.__e,e.__h=null,o=[s]),(d=f.__b)&&d(e);try{e:if(typeof b=="function"){if(v=e.props,g=(d=b.contextType)&&r[d.__c],w=d?g?g.props.value:d.__:r,t.__c?C=(n=e.__c=t.__c).__=n.__E:("prototype"in b&&b.prototype.render?e.__c=n=new b(v,w):(e.__c=n=new D(v,w),n.constructor=b,n.render=Pe),g&&g.sub(n),n.props=v,n.state||(n.state={}),n.context=w,n.__n=r,h=n.__d=!0,n.__h=[],n._sb=[]),n.__s==null&&(n.__s=n.state),b.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=$({},n.__s)),$(n.__s,b.getDerivedStateFromProps(v,n.__s))),p=n.props,c=n.state,n.__v=e,h)b.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(b.getDerivedStateFromProps==null&&v!==p&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(v,w),!n.__e&&(n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(v,n.__s,w)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(n.props=v,n.state=n.__s,n.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(T){T&&(T.__=e)}),H=0;H<n._sb.length;H++)n.__h.push(n._sb[H]);n._sb=[],n.__h.length&&l.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(v,n.__s,w),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(p,c,a)})}if(n.context=w,n.props=v,n.__P=_,n.__e=!1,k=f.__r,N=0,"prototype"in b&&b.prototype.render){for(n.state=n.__s,n.__d=!1,k&&k(e),d=n.render(n.props,n.state,n.context),E=0;E<n._sb.length;E++)n.__h.push(n._sb[E]);n._sb=[]}else do n.__d=!1,k&&k(e),d=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++N<25);n.state=n.__s,n.getChildContext!=null&&(r=$($({},r),n.getChildContext())),h||n.getSnapshotBeforeUpdate==null||(a=n.getSnapshotBeforeUpdate(p,c)),he(_,J(P=d!=null&&d.type===V&&d.key==null?d.props.children:d)?P:[P],e,t,r,i,o,l,s,u,m),n.base=e.__e,e.__h=null,n.__h.length&&l.push(n),C&&(n.__E=n.__=null)}else o==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=Ee(t.__e,e,t,r,i,o,l,u,m);(d=f.diffed)&&d(e)}catch(T){e.__v=null,(u||o!=null)&&(e.__e=s,e.__h=!!u,o[o.indexOf(s)]=null),f.__e(T,e,t)}}function ye(_,e,t){for(var r=0;r<t.length;r++)Q(t[r],t[++r],t[++r]);f.__c&&f.__c(e,_),_.some(function(i){try{_=i.__h,i.__h=[],_.some(function(o){o.call(i)})}catch(o){f.__e(o,i.__v)}})}function Ee(_,e,t,r,i,o,l,s,u){var m,d,n,h=t.props,p=e.props,c=e.type,a=0;if(c==="svg"&&(i=!0),o!=null){for(;a<o.length;a++)if((m=o[a])&&"setAttribute"in m==!!c&&(c?m.localName===c:m.nodeType===3)){_=m,o[a]=null;break}}if(_==null){if(c===null)return document.createTextNode(p);_=i?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c,p.is&&p),o=null,s=!1}if(c===null)h===p||s&&_.data===p||(_.data=p);else{if(o=o&&B.call(_.childNodes),d=(h=t.props||L).dangerouslySetInnerHTML,n=p.dangerouslySetInnerHTML,!s){if(o!=null)for(h={},a=0;a<_.attributes.length;a++)h[_.attributes[a].name]=_.attributes[a].value;(n||d)&&(n&&(d&&n.__html==d.__html||n.__html===_.innerHTML)||(_.innerHTML=n&&n.__html||""))}if($e(_,p,h,i,s),n)e.__k=[];else if(he(_,J(a=e.props.children)?a:[a],e,t,r,i&&c!=="foreignObject",o,l,o?o[0]:t.__k&&M(t,0),s,u),o!=null)for(a=o.length;a--;)o[a]!=null&&pe(o[a]);s||("value"in p&&(a=p.value)!==void 0&&(a!==_.value||c==="progress"&&!a||c==="option"&&a!==h.value)&&O(_,"value",a,h.value,!1),"checked"in p&&(a=p.checked)!==void 0&&a!==_.checked&&O(_,"checked",a,h.checked,!1))}return _}function Q(_,e,t){try{typeof _=="function"?_(e):_.current=e}catch(r){f.__e(r,t)}}function ge(_,e,t){var r,i;if(f.unmount&&f.unmount(_),(r=_.ref)&&(r.current&&r.current!==_.__e||Q(r,null,e)),(r=_.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){f.__e(o,e)}r.base=r.__P=null,_.__c=void 0}if(r=_.__k)for(i=0;i<r.length;i++)r[i]&&ge(r[i],e,t||typeof _.type!="function");t||_.__e==null||pe(_.__e),_.__=_.__e=_.__d=void 0}function Pe(_,e,t){return this.constructor(_,t)}function xe(_,e,t){var r,i,o,l;f.__&&f.__(_,e),i=(r=typeof t=="function")?null:t&&t.__k||e.__k,o=[],l=[],K(e,_=(!r&&t||e).__k=we(V,null,[_]),i||L,L,e.ownerSVGElement!==void 0,!r&&t?[t]:i?null:e.firstChild?B.call(e.childNodes):null,o,!r&&t?t:i?i.__e:e.firstChild,r,l),ye(o,_,l)}B=ae.slice,f={__e:function(_,e,t,r){for(var i,o,l;e=e.__;)if((i=e.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(_)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(_,r||{}),l=i.__d),l)return i.__E=i}catch(s){_=s}throw _}},ue=0,D.prototype.setState=function(_,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=$({},this.state),typeof _=="function"&&(_=_($({},t),this.props)),_&&$(t,_),_!=null&&this.__v&&(e&&this._sb.push(e),Y(this))},D.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),Y(this))},D.prototype.render=V,x=[],fe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,z=function(_,e){return _.__v.__b-e.__v.__b},F.__r=0;var W,y,q,te,R=0,be=[],U=[],ne=f.__b,oe=f.__r,re=f.diffed,ie=f.__c,le=f.unmount;function ke(_,e){f.__h&&f.__h(y,_,R||e),R=0;var t=y.__H||(y.__H={__:[],__h:[]});return _>=t.__.length&&t.__.push({__V:U}),t.__[_]}function se(_){return R=1,Ce(Ne,_)}function Ce(_,e,t){var r=ke(W++,2);if(r.t=_,!r.__c&&(r.__=[t?t(e):Ne(void 0,e),function(s){var u=r.__N?r.__N[0]:r.__[0],m=r.t(u,s);u!==m&&(r.__N=[m,r.__[1]],r.__c.setState({}))}],r.__c=y,!y.u)){var i=function(s,u,m){if(!r.__c.__H)return!0;var d=r.__c.__H.__.filter(function(h){return h.__c});if(d.every(function(h){return!h.__N}))return!o||o.call(this,s,u,m);var n=!1;return d.forEach(function(h){if(h.__N){var p=h.__[0];h.__=h.__N,h.__N=void 0,p!==h.__[0]&&(n=!0)}}),!(!n&&r.__c.props===s)&&(!o||o.call(this,s,u,m))};y.u=!0;var o=y.shouldComponentUpdate,l=y.componentWillUpdate;y.componentWillUpdate=function(s,u,m){if(this.__e){var d=o;o=void 0,i(s,u,m),o=d}l&&l.call(this,s,u,m)},y.shouldComponentUpdate=i}return r.__N||r.__}function Le(_,e){var t=ke(W++,3);!f.__s&&De(t.__H,e)&&(t.__=_,t.i=e,y.__H.__h.push(t))}function Te(){for(var _;_=be.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(I),_.__H.__h.forEach(G),_.__H.__h=[]}catch(e){_.__H.__h=[],f.__e(e,_.__v)}}f.__b=function(_){y=null,ne&&ne(_)},f.__r=function(_){oe&&oe(_),W=0;var e=(y=_.__c).__H;e&&(q===y?(e.__h=[],y.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=U,t.__N=t.i=void 0})):(e.__h.forEach(I),e.__h.forEach(G),e.__h=[],W=0)),q=y},f.diffed=function(_){re&&re(_);var e=_.__c;e&&e.__H&&(e.__H.__h.length&&(be.push(e)!==1&&te===f.requestAnimationFrame||((te=f.requestAnimationFrame)||Ae)(Te)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==U&&(t.__=t.__V),t.i=void 0,t.__V=U})),q=y=null},f.__c=function(_,e){e.some(function(t){try{t.__h.forEach(I),t.__h=t.__h.filter(function(r){return!r.__||G(r)})}catch(r){e.some(function(i){i.__h&&(i.__h=[])}),e=[],f.__e(r,t.__v)}}),ie&&ie(_,e)},f.unmount=function(_){le&&le(_);var e,t=_.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{I(r)}catch(i){e=i}}),t.__H=void 0,e&&f.__e(e,t.__v))};var ce=typeof requestAnimationFrame=="function";function Ae(_){var e,t=function(){clearTimeout(r),ce&&cancelAnimationFrame(e),setTimeout(_)},r=setTimeout(t,100);ce&&(e=requestAnimationFrame(t))}function I(_){var e=y,t=_.__c;typeof t=="function"&&(_.__c=void 0,t()),y=e}function G(_){var e=y;_.__c=_.__(),y=e}function De(_,e){return!_||_.length!==e.length||e.some(function(t,r){return t!==_[r]})}function Ne(_,e){return typeof e=="function"?e(_):e}const Ue="/assets/logo-6000b0e9.svg";var Ie=0;function S(_,e,t,r,i,o){var l,s,u={};for(s in e)s=="ref"?l=e[s]:u[s]=e[s];var m={type:_,props:u,key:t,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Ie,__source:i,__self:o};if(typeof _=="function"&&(l=_.defaultProps))for(s in l)u[s]===void 0&&(u[s]=l[s]);return f.vnode&&f.vnode(m),m}function Me(_){return S("div",{className:"elem",children:[S("span",{className:"message",children:_.message.message}),S("span",{className:"date",children:_.message.date.toString()})]})}const Fe="Preact app",j="jsFrameworkComparison-react-messages";function Oe(){const[_,e]=se(0),[t,r]=se([]);Le(()=>{let l=setInterval(()=>{e(s=>s+1)},1e3);return r(JSON.parse(window.localStorage.getItem(j)??"[]")),()=>clearInterval(l)},[]);const i=l=>{r([...t,{message:l.target.value,date:new Date}]),window.localStorage.setItem(j,JSON.stringify(t))},o=()=>{r([]),window.localStorage.setItem(j,"[]")};return S("div",{className:"App",children:[S("header",{className:"header",children:[S("h1",{children:Fe}),S("img",{src:Ue,className:"logo",alt:"logo"}),S("span",{children:_})]}),S("div",{className:"content",children:[S("input",{type:"text",onBlur:l=>i(l),onKeyDown:l=>l.key==="Enter"?i(l):{}}),t.map((l,s)=>S(Me,{message:l},s)),S("button",{onClick:()=>o(),children:"Empty"})]})]})}xe(S(Oe,{}),document.getElementById("app"));
