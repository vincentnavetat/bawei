(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{198:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});a(18);var r=a(0),i=a.n(r),n=a(202),s=a(210),o=a(209),l=a(207),d=a(203);var c=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.data.site.siteMetadata.menuLinks,r=this.props.pageContext,c=r.previous,u=r.next;return i.a.createElement(o.a,{location:this.props.location,title:t,headerLinks:a},i.a.createElement(l.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),i.a.createElement("article",null,i.a.createElement("header",null,i.a.createElement("h1",{style:{marginTop:Object(d.a)(1),marginBottom:0}},e.frontmatter.title),i.a.createElement("p",{style:Object.assign({},Object(d.b)(-.2),{display:"block",marginBottom:Object(d.a)(1)})},e.frontmatter.date)),i.a.createElement("section",{dangerouslySetInnerHTML:{__html:e.html}}),i.a.createElement("hr",{style:{marginBottom:Object(d.a)(1)}}),i.a.createElement("footer",null,i.a.createElement(s.a,null))),i.a.createElement("nav",null,i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.a.createElement("li",null,c&&i.a.createElement(n.a,{to:c.fields.slug,rel:"prev"},"← ",c.frontmatter.title)),i.a.createElement("li",null,u&&i.a.createElement(n.a,{to:u.fields.slug,rel:"next"},u.frontmatter.title," →")))))},r}(i.a.Component);t.default=c;var u="281046381"},202:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(66),s=a.n(n);a.d(t,"a",function(){return s.a});a(204),a(9).default.enqueue,i.a.createContext({})},203:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var r=a(214),i=a.n(r),n=a(215),s=a.n(n);s.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete s.a.googleFonts;var o=new i.a(s.a);var l=o.rhythm,d=o.scale},204:function(e,t,a){var r;e.exports=(r=a(206))&&r.default||r},205:function(e,t,a){"use strict";a(213)("fixed",function(e){return function(){return e(this,"tt","","")}})},206:function(e,t,a){"use strict";a.r(t);a(18);var r=a(0),i=a.n(r),n=a(94);t.default=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(n.a,Object.assign({location:t,pageResources:a},a.json)):null}},207:function(e,t,a){"use strict";var r=a(208),i=a(0),n=a.n(i),s=a(217),o=a.n(s);function l(e){var t=e.description,a=e.lang,i=e.meta,s=e.title,l=r.data.site,d=t||l.siteMetadata.description;return n.a.createElement(o.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(i)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},208:function(e){e.exports={data:{site:{siteMetadata:{title:"Ba Wei, PhD",description:"Neuroscientist in sleep and anaesthesia",author:"Ba Wei"}}}}},209:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(202),s=(a(216),a(49),function(e){var t=e.siteTitle,a=e.menuLinks;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",display:"flex",justifyItems:"space-between",alignItems:"center"}},i.a.createElement("h1",{style:{margin:0,flex:1}},i.a.createElement(n.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),i.a.createElement("div",null,i.a.createElement("nav",null,i.a.createElement("ul",{style:{display:"flex",flex:1}},a.map(function(e){return i.a.createElement("li",{key:e.name,style:{listStyleType:"none",padding:"1rem"}},i.a.createElement(n.a,{style:{color:"white"},to:e.link},e.name))})))))))});s.defaultProps={siteTitle:""};var o=s,l=a(203);var d=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.title,a=e.headerLinks,r=e.children,s=i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},i.a.createElement(n.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},t));return i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},i.a.createElement(o,{siteTitle:t,menuLinks:a}),i.a.createElement("header",null,s),i.a.createElement("main",null,r),i.a.createElement("footer",null,"© ",(new Date).getFullYear()))},r}(i.a.Component);t.a=d},210:function(e,t,a){"use strict";a(205);var r=a(211),i=a(0),n=a.n(i),s=a(212),o=a.n(s),l=a(203);t.a=function(){var e=r.data,t=e.site.siteMetadata,a=t.author,i=t.description;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(2.5)}},n.a.createElement(o.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(l.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,i))}},211:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUDBP/EABYBAQEBAAAAAAAAAAAAAAAAAAIAAf/aAAwDAQACEAMQAAABqTd+Iq0waeGMKtgL/8QAHBAAAwADAAMAAAAAAAAAAAAAAQIDAAQREyEj/9oACAEBAAEFAr08UlpVCGzePJ3fioervj0Scgfl/8QAFxEAAwEAAAAAAAAAAAAAAAAAAQIQEf/aAAgBAwEBPwEZGn//xAAWEQEBAQAAAAAAAAAAAAAAAAAQAQL/2gAIAQIBAT8Bpk//xAAcEAACAQUBAAAAAAAAAAAAAAAAAQIQEjFBYRH/2gAIAQEABj8C9WcIV87k9Ug1qQu0T6ZEf//EABsQAQEBAAIDAAAAAAAAAAAAAAEAEUFRITFh/9oACAEBAAE/IWQ9aB9ZfNGPSRPc/cC8YuAnMDzDEgNTk1//2gAMAwEAAgADAAAAEIgoQv/EABkRAQACAwAAAAAAAAAAAAAAAAEAECFBgf/aAAgBAwEBPxAoV1GYPCv/xAAaEQEAAgMBAAAAAAAAAAAAAAABABEQIUGB/9oACAECAQE/ELWB2BNj3H//xAAcEAEBAQEBAAMBAAAAAAAAAAABEQAxIUFRYaH/2gAIAQEAAT8Q8ZmFbw3j2UjtlE+nAXHyKM3qDNOFpvgQFHCuEFHMM5D+Jz+YEK4Fs3efE3//2Q==",width:50,height:50,src:"/bawei/static/554072edb061b7ebbaad19c25b1234c4/9b664/profile-pic.jpg",srcSet:"/bawei/static/554072edb061b7ebbaad19c25b1234c4/9b664/profile-pic.jpg 1x,\n/bawei/static/554072edb061b7ebbaad19c25b1234c4/06a10/profile-pic.jpg 1.5x,\n/bawei/static/554072edb061b7ebbaad19c25b1234c4/f1b5a/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"Ba Wei",description:"Neuroscientist in sleep and anaesthesia"}}}}},212:function(e,t,a){"use strict";a(29),a(30),a(13),a(92),a(133),a(205);var r=a(14);t.__esModule=!0,t.default=void 0;var i,n=r(a(68)),s=r(a(69)),o=r(a(134)),l=r(a(135)),d=r(a(0)),c=r(a(52)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},A=Object.create({}),p=function(e){var t=u(e),a=f(t);return A[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,h=m&&window.IntersectionObserver,b=new WeakMap;function E(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))})}function y(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function v(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function S(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var j=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},B=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)}).join("")+"<img "+d+s+o+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(x,(0,l.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},x=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,A=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},A,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});x.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var L=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&h&&!t.critical&&!a.seenBefore;var r=t.critical||m&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),A[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,A=e.placeholderClassName,p=e.fluid,g=e.fixed,m=e.backgroundColor,h=e.durationFadeIn,b=e.Tag,y=e.itemProp,w=e.loading,j=e.draggable,L=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,l.default)({opacity:L?1:0,transition:R?"opacity "+h+"ms":"none"},o),Q="boolean"==typeof m?"lightgray":m,C={transitionDelay:h+"ms"},N=(0,l.default)({opacity:this.state.imgLoaded?0:1},R&&C,o,f),k={title:t,alt:this.state.isVisible?"":a,style:N,className:A};if(p){var T=p,M=T[0];return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),Q&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:Q,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&C)}),M.base64&&d.default.createElement(I,{src:M.base64,spreadProps:k,imageVariants:T,generateSources:S}),M.tracedSVG&&d.default.createElement(I,{src:M.tracedSVG,spreadProps:k,imageVariants:T,generateSources:v}),this.state.isVisible&&d.default.createElement("picture",null,E(T),d.default.createElement(x,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:j})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:B((0,l.default)({alt:a,title:t,loading:w},M,{imageVariants:T}))}}))}if(g){var V=g,z=V[0],P=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},n);return"inherit"===n.display&&delete P.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},Q&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:Q,width:z.width,opacity:this.state.imgLoaded?0:1,height:z.height},R&&C)}),z.base64&&d.default.createElement(I,{src:z.base64,spreadProps:k,imageVariants:V,generateSources:S}),z.tracedSVG&&d.default.createElement(I,{src:z.tracedSVG,spreadProps:k,imageVariants:V,generateSources:v}),this.state.isVisible&&d.default.createElement("picture",null,E(V),d.default.createElement(x,{alt:a,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:j})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:B((0,l.default)({alt:a,title:t,loading:w},z,{imageVariants:V}))}}))}return null},t}(d.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),O=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});L.propTypes={resolutions:R,sizes:O,fixed:c.default.oneOfType([R,c.default.arrayOf(R)]),fluid:c.default.oneOfType([O,c.default.arrayOf(O)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var Q=L;t.default=Q}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-a59b64f550d84b836ca4.js.map