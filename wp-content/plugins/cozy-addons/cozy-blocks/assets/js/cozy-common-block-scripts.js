(()=>{"use strict";const e=window.React,o=window.wp.i18n,t=window.wp.compose,a=window.wp.blockEditor,n=window.wp.components,l=window.wp.hooks,r=()=>(0,e.createElement)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"black"},(0,e.createElement)("path",{d:"M19.6851 4.2H4.3251C3.4851 4.2 2.8051 4.88002 2.8051 5.72002V14.58C2.8051 15.42 3.4851 16.2 4.3251 16.2H9.4051V17.02L7.88511 18.24C7.62511 18.46 7.5051 18.88 7.6051 19.2C7.7251 19.52 8.02511 19.8 8.36511 19.8H15.5651C15.9051 19.8 16.2251 19.52 16.3451 19.2C16.4651 18.88 16.3651 18.48 16.1051 18.26L14.6051 17.02V16.2H19.6851C20.5251 16.2 21.2051 15.42 21.2051 14.58V5.72002C21.2051 4.88002 20.5251 4.2 19.6851 4.2ZM13.4451 17.96L13.9251 18.4H10.0051L10.5251 17.94C10.6851 17.8 10.8051 17.56 10.8051 17.34V16.18H13.2051V17.34C13.2051 17.56 13.2851 17.82 13.4451 17.96ZM19.6051 14.6H4.4051V5.8H19.6051V14.6Z"})),c=()=>(0,e.createElement)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"black"},(0,e.createElement)("path",{d:"M13.125 18.2001C13.125 18.5401 12.865 18.8001 12.525 18.8001H11.485C11.145 18.8001 10.885 18.5401 10.885 18.2001C10.885 17.8601 11.145 17.6 11.485 17.6H12.525C12.865 17.6 13.125 17.8601 13.125 18.2001ZM19.405 19.68C19.405 20.52 18.725 21.2001 17.885 21.2001H6.12498C5.28498 21.2001 4.60498 20.52 4.60498 19.68V4.32007C4.60498 3.48007 5.28498 2.80005 6.12498 2.80005H17.885C18.725 2.80005 19.405 3.48007 19.405 4.32007V19.68ZM6.20498 4.40005V15.4001H17.805V4.40005H6.20498ZM17.805 19.6V16.6H6.20498V19.6H17.805Z"})),s=()=>(0,e.createElement)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"black"},(0,e.createElement)("path",{d:"M13.3852 18.0001C13.3852 18.3401 13.1252 18.6 12.7852 18.6H11.2452C10.9052 18.6 10.6452 18.3401 10.6452 18.0001C10.6452 17.6601 10.9052 17.4001 11.2452 17.4001H12.7852C13.1052 17.4001 13.3852 17.6601 13.3852 18.0001ZM17.2052 19.68C17.2052 20.52 16.5252 21.2001 15.6852 21.2001H8.32517C7.48517 21.2001 6.80518 20.52 6.80518 19.68V4.32007C6.80518 3.48007 7.48517 2.80005 8.32517 2.80005H15.6852C16.5252 2.80005 17.2052 3.48007 17.2052 4.32007V19.68ZM8.40518 4.40005V15H15.6052V4.40005H8.40518ZM15.6052 19.6V16.2001H8.40518V19.6H15.6052Z"})),i=["core/buttons","core/button","core/columns","core/column","core/group","core/heading","core/paragraph"];(0,l.addFilter)("blocks.registerBlockType","cozy-responsive-show/register-block-attribute",((e,o)=>i.includes(o)?Object.assign({},e,{attributes:Object.assign({},e.attributes,{cozyResponsiveShow:{type:"object",default:{desktopShow:!0,tabletShow:!0,tabletViewport:980,mobileShow:!0,mobileViewport:767}}})}):e));const d=(0,t.createHigherOrderComponent)((t=>l=>{if(!i.includes(l.name)&&!l.attributes.cozyResponsiveShow)return(0,e.createElement)(t,{...l});const{attributes:d,setAttributes:b}=l,{cozyResponsiveShow:m}=d;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a.InspectorControls,{key:"setting",group:"settings"},(0,e.createElement)(n.PanelBody,{title:(0,o.__)("Cozy Responsive Visibility","cozy-addons"),initialOpen:!1},(0,e.createElement)(n.TabPanel,{className:"cozy-tab-panel",activeClass:"active-tab",tabs:[{name:"cozy-responsive-show__desktop",title:(0,o.__)("Desktop","cozy-addons"),className:"tab-one",icon:(0,e.createElement)(r,null)},{name:"cozy-responsive-show__tablet",title:(0,o.__)("Tablet","cozy-addons"),className:"tab-two",icon:(0,e.createElement)(c,null)},{name:"cozy-responsive-show__mobile",title:(0,o.__)("Mobile","cozy-addons"),className:"tab-three",icon:(0,e.createElement)(s,null)}]},(t=>(0,e.createElement)(e.Fragment,null,"cozy-responsive-show__desktop"===t.name&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.ToggleControl,{label:(0,o.__)("Show/Hide","cozy-addons"),checked:m.desktopShow,onChange:e=>b({...d,cozyResponsiveShow:{...m,desktopShow:e}})})),"cozy-responsive-show__tablet"===t.name&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.ToggleControl,{label:(0,o.__)("Show/Hide","cozy-addons"),checked:m.tabletShow,onChange:e=>{b(e?{...d,cozyResponsiveShow:{...m,tabletShow:e}}:{...d,cozyResponsiveShow:{...m,tabletShow:e,mobileShow:e}})}}),(0,e.createElement)(n.RangeControl,{label:(0,o.__)("Viewport Width","cozy-addons"),min:768,max:1023,step:1,value:m.tabletViewport,onChange:e=>b({...d,cozyResponsiveShow:{...m,tabletViewport:Math.abs(e)}})})),"cozy-responsive-show__mobile"===t.name&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.ToggleControl,{label:(0,o.__)("Show/Hide","cozy-addons"),checked:m.mobileShow,onChange:e=>b({...d,cozyResponsiveShow:{...m,mobileShow:e}})}),(0,e.createElement)(n.RangeControl,{label:(0,o.__)("Viewport Width","cozy-addons"),min:100,max:767,step:1,value:m.mobileViewport,onChange:e=>b({...d,cozyResponsiveShow:{...m,mobileViewport:Math.abs(e)}})}))))))),(0,e.createElement)(t,{...l}))}));(0,l.addFilter)("editor.BlockEdit","cozy-responsive-show/set-responsive-show-control",d);const b=["core/buttons","core/button","core/group","core/columns","core/column","core/image"];(0,l.addFilter)("blocks.registerBlockType","cozy-hover-effect/register-block-attribute",((e,o)=>b.includes(o)?Object.assign({},e,{attributes:Object.assign({},e.attributes,{cozyHoverEffect:{type:"object",default:{hasOverflow:!1,overflow:"hidden",hasZIndex:!1,zIndex:0,boxShadow:{enabled:!1,color:"#000",horizontal:0,vertical:0,blur:10,spread:0,position:""},boxShadowHover:{enabled:!1,color:"#000",horizontal:0,vertical:0,blur:10,spread:0,position:""},transformEnabled:!1,transform:{translateX:0,translateY:0,rotate:0,scale:1},transformDefaultEnabled:!1,transformDefault:{translateX:0,translateY:0,rotate:0,scale:1}}}})}):e));const m=(0,t.createHigherOrderComponent)((t=>l=>{if(!b.includes(l.name)&&!l.attributes.cozyHoverEffect)return(0,e.createElement)(t,{...l});const{attributes:r,setAttributes:c}=l,{cozyHoverEffect:s}=r,i=`\n\t#block-${l.clientId}:not(.wp-block-button) {\n\t\t${s?.transformDefaultEnabled?`\n\t\t\ttransform: translate(${s?.transformDefault?.translateX}px, ${s?.transformDefault?.translateY}px) rotate(${s?.transformDefault?.rotate}deg) scale(${s?.transformDefault?.scale}) ;\n\t\t`:""}\n\t\t${s.boxShadow.enabled?`\n\t\t\tbox-shadow: ${s.boxShadow.horizontal}px ${s.boxShadow.vertical}px ${s.boxShadow.blur}px ${s.boxShadow.spread}px ${s.boxShadow.color} ${s.boxShadow.position};\n\t\t`:""}\n\t\t${s?.hasZIndex?`z-index:${s?.zIndex};`:""}\n\t\t${s?.hasOverflow?`overflow:${s?.overflow};`:""}\n\t}\n\t#block-${l.clientId}.wp-block-button .wp-block-button__link {\n\t\t${s?.transformDefaultEnabled?`\n\t\t\ttransform: translate(${s?.transformDefault?.translateX}px, ${s?.transformDefault?.translateY}px) rotate(${s?.transformDefault?.rotate}deg) scale(${s?.transformDefault?.scale}) ;\n\t\t`:""}\n\t\t${s.boxShadow.enabled?`\n\t\t\tbox-shadow: ${s.boxShadow.horizontal}px ${s.boxShadow.vertical}px ${s.boxShadow.blur}px ${s.boxShadow.spread}px ${s.boxShadow.color} ${s.boxShadow.position};\n\t\t`:""}\n\t\t${s.hasZIndex?`z-index:${s?.zIndex};`:""}\n\t\t${s?.hasOverflow?`overflow:${s?.overflow};`:""}\n\t}\n\n\t#block-${l.clientId}:hover:not(.wp-block-button) {\n\t\t${s.transformEnabled?`\n\t\t\ttransform: translate(${s.transform.translateX}px, ${s.transform.translateY}px) rotate(${s.transform.rotate}deg) scale(${s.transform.scale}) ;\n\t\t`:""}\n\t\t${s.boxShadowHover.enabled?`\n\t\t\t\t  box-shadow: ${s.boxShadowHover.horizontal}px ${s.boxShadowHover.vertical}px ${s.boxShadowHover.blur}px ${s.boxShadowHover.spread}px ${s.boxShadowHover.color} ${s.boxShadowHover.position};\n\t\t\t  `:""}\n\t}\n\n\t#block-${l.clientId}.wp-block-button .wp-block-button__link:hover {\n\t\t${s.transformEnabled?`\n\t\t\ttransform: translate(${s.transform.translateX}px, ${s.transform.translateY}px) rotate(${s.transform.rotate}deg) scale(${s.transform.scale}) ;\n\t\t`:""}\n\t\t${s.boxShadowHover.enabled?`\n\t\t\t\t  box-shadow: ${s.boxShadowHover.horizontal}px ${s.boxShadowHover.vertical}px ${s.boxShadowHover.blur}px ${s.boxShadowHover.spread}px ${s.boxShadowHover.color} ${s.boxShadowHover.position};\n\t\t\t  `:""}\n\t}\n\t\t`;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("style",{dangerouslySetInnerHTML:{__html:i}}),(0,e.createElement)(a.InspectorControls,{key:"setting",group:"settings"},(0,e.createElement)(n.PanelBody,{title:(0,o.__)("Cozy Hover Effect","cozy-addons"),initialOpen:!1},(0,e.createElement)(n.ToggleControl,{label:(0,o.__)("Add z-index","cozy-addons"),checked:s?.hasZIndex,onChange:e=>c({...r,cozyHoverEffect:{...s,hasZIndex:e}})}),s?.hasZIndex&&(0,e.createElement)(n.RangeControl,{label:(0,o.__)("Z Index","cozy-addons"),min:-10,max:100,step:1,value:s?.zIndex,onChange:e=>c({...r,cozyHoverEffect:{...s,zIndex:e}})}),(0,e.createElement)(n.ToggleControl,{label:(0,o.__)("Enable Overflow","cozy-addons"),checked:s?.hasOverflow,onChange:e=>c({...r,cozyHoverEffect:{...s,hasOverflow:e}})}),s?.hasOverflow&&(0,e.createElement)(n.SelectControl,{label:(0,o.__)("Overflow","cozy-addons"),options:[{label:(0,o.__)("Hidden","cozy-addons"),value:"hidden"},{label:(0,o.__)("Visible","cozy-addons"),value:"visible"},{label:(0,o.__)("Scroll","cozy-addons"),value:"scroll"}],value:s?.overflow,onChange:e=>c({...r,cozyHoverEffect:{...s,overflow:e}})}),(0,e.createElement)(n.BaseControl,null,(0,e.createElement)(n.BaseControl.VisualLabel,null,(0,o.__)("Box Shadow","cozy-addons")),(0,e.createElement)(n.TabPanel,{className:"cozy-tab-panel",activeClass:"active-tab",tabs:[{name:"cozy-hover-effect__box-shadow-default",title:(0,o.__)("Default","cozy-addons"),className:"tab-one"},{name:"cozy-hover-effect__box-shadow-hover",title:(0,o.__)("Hover","cozy-addons"),className:"tab-one"}]},(t=>(0,e.createElement)(e.Fragment,null,"cozy-hover-effect__box-shadow-default"===t.name&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.ToggleControl,{label:(0,o.__)("Enable Transform","cozy-addons"),checked:s?.transformDefaultEnabled,onChange:e=>c({...r,cozyHoverEffect:{...s,transformDefaultEnabled:e}})}),s?.transformDefaultEnabled&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.BaseControl,null,(0,e.createElement)(n.BaseControl.VisualLabel,null,(0,o.__)("Translate","cozy-addons")),(0,e.createElement)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",columnGap:"10px",height:"50px"}},(0,e.createElement)(n.TextControl,{label:(0,o.__)("Horizontal","cozy-addons"),type:"number",autoComplete:"off",inputMode:"numeric",max:"Infinity",placeholder:(0,o.__)("Auto","cozy-addons"),value:s?.transformDefault?.translateX,onChange:e=>{c({...r,cozyHoverEffect:{...s,transformDefault:{...s.transformDefault,translateX:e}}})}}),(0,e.createElement)(n.TextControl,{label:(0,o.__)("Vertical","cozy-addons"),type:"number",autoComplete:"off",inputMode:"numeric",max:"Infinity",placeholder:(0,o.__)("Auto","cozy-addons"),value:s?.transformDefault?.translateY,onChange:e=>{c({...r,cozyHoverEffect:{...s,transformDefault:{...s.transformDefault,translateY:e}}})}}))),(0,e.createElement)(n.RangeControl,{label:(0,o.__)("Rotate","cozy-addons"),min:-360,max:360,step:1,value:s?.transformDefault?.rotate,onChange:e=>c({...r,cozyHoverEffect:{...s,transformDefault:{...s.transformDefault,rotate:e}}})}),(0,e.createElement)(n.RangeControl,{label:(0,o.__)("Scale","cozy-addons"),min:0,max:10,step:.1,value:s?.transformDefault?.scale,onChange:e=>c({...r,cozyHoverEffect:{...s,transformDefault:{...s.transformDefault,scale:e}}})})),(0,e.createElement)(n.ToggleControl,{label:(0,o.__)("Enable Box Shadow","cozy-addons"),checked:s.boxShadow.enabled,onChange:e=>c({...r,cozyHoverEffect:{...s,boxShadow:{...s.boxShadow,enabled:e}}})}),s.boxShadow.enabled&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.RangeControl,{label:(0,o.__)("Horizontal","cozy-addons"),min:-100,max:100,step:1,value:s.boxShadow.horizontal,onChange:e=>c({...r,cozyHoverEffect:{...s,boxShadow:{...s.boxShadow,horizontal:e}}})}),(0,e.createElement)(n.RangeControl,{label:(0,o.__)("Vertical","cozy-addons"),min:-100,max:100,step:1,value:s.boxShadow.vertical,onChange:e=>c({...r,cozyHoverEffect:{...s,boxShadow:{...s.boxShadow,vertical:e}}})}),(0,e.createElement)(n.RangeControl,{label:(0,o.__)("Blur","cozy-addons"),min:0,max:100,step:1,value:s.boxShadow.blur,onChange:e=>c({...r,cozyHoverEffect:{...s,boxShadow:{...s.boxShadow,blur:e}}})}),(0,e.createElement)(n.RangeControl,{label:(0,o.__)("Spread","cozy-addons"),min:-100,max:100,step:1,value:s.boxShadow.spread,onChange:e=>c({...r,cozyHoverEffect:{...s,boxShadow:{...s.boxShadow,spread:e}}})}),(0,e.createElement)(n.SelectControl,{label:(0,o.__)("Position","cozy-addons"),options:[{label:(0,o.__)("Inset","cozy-addons"),value:"inset"},{label:(0,o.__)("Outline","cozy-addons"),value:""}],value:s.boxShadow.position,onChange:e=>c({...r,cozyHoverEffect:{...s,boxShadow:{...s.boxShadow,position:e}}})}),(0,e.createElement)(a.PanelColorSettings,{className:"cozy-color-control",enableAlpha:!0,title:(0,o.__)("Shadow Color","cozy-addons"),colorSettings:[{label:(0,o.__)("Default","cozy-addons"),value:s.boxShadow.color,onChange:e=>c({...r,cozyHoverEffect:{...s,boxShadow:{...s.boxShadow,color:e}}})}]}))),"cozy-hover-effect__box-shadow-hover"===t.name&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.ToggleControl,{label:(0,o.__)("Enable Transform","cozy-addons"),checked:s.transformEnabled,onChange:e=>c({...r,cozyHoverEffect:{...s,transformEnabled:e}})}),s.transformEnabled&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.BaseControl,null,(0,e.createElement)(n.BaseControl.VisualLabel,null,(0,o.__)("Translate","cozy-addons")),(0,e.createElement)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",columnGap:"10px",height:"50px"}},(0,e.createElement)(n.TextControl,{label:(0,o.__)("Horizontal","cozy-addons"),type:"number",autoComplete:"off",inputMode:"numeric",max:"Infinity",placeholder:(0,o.__)("Auto","cozy-addons"),value:s.transform.translateX,onChange:e=>{c({...r,cozyHoverEffect:{...s,transform:{...s.transform,translateX:e}}})}}),(0,e.createElement)(n.TextControl,{label:(0,o.__)("Vertical","cozy-addons"),type:"number",autoComplete:"off",inputMode:"numeric",max:"Infinity",placeholder:(0,o.__)("Auto","cozy-addons"),value:s.transform.translateY,onChange:e=>{c({...r,cozyHoverEffect:{...s,transform:{...s.transform,translateY:e}}})}}))),(0,e.createElement)(n.RangeControl,{label:(0,o.__)("Rotate","cozy-addons"),min:-360,max:360,step:1,value:s.transform.rotate,onChange:e=>c({...r,cozyHoverEffect:{...s,transform:{...s.transform,rotate:e}}})}),(0,e.createElement)(n.RangeControl,{label:(0,o.__)("Scale","cozy-addons"),min:0,max:10,step:.1,value:s.transform.scale,onChange:e=>c({...r,cozyHoverEffect:{...s,transform:{...s.transform,scale:e}}})})),(0,e.createElement)(n.ToggleControl,{label:(0,o.__)("Enable Box Shadow","cozy-addons"),checked:s.boxShadowHover.enabled,onChange:e=>c({...r,cozyHoverEffect:{...s,boxShadowHover:{...s.boxShadowHover,enabled:e}}})}),s.boxShadowHover.enabled&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.RangeControl,{label:(0,o.__)("Horizontal","cozy-addons"),min:-100,max:100,step:1,value:s.boxShadowHover.horizontal,onChange:e=>c({...r,cozyHoverEffect:{...s,boxShadowHover:{...s.boxShadowHover,horizontal:e}}})}),(0,e.createElement)(n.RangeControl,{label:(0,o.__)("Vertical","cozy-addons"),min:-100,max:100,step:1,value:s.boxShadowHover.vertical,onChange:e=>c({...r,cozyHoverEffect:{...s,boxShadowHover:{...s.boxShadowHover,vertical:e}}})}),(0,e.createElement)(n.RangeControl,{label:(0,o.__)("Blur","cozy-addons"),min:0,max:100,step:1,value:s.boxShadowHover.blur,onChange:e=>c({...r,cozyHoverEffect:{...s,boxShadowHover:{...s.boxShadowHover,blur:e}}})}),(0,e.createElement)(n.RangeControl,{label:(0,o.__)("Spread","cozy-addons"),min:-100,max:100,step:1,value:s.boxShadowHover.spread,onChange:e=>c({...r,cozyHoverEffect:{...s,boxShadowHover:{...s.boxShadowHover,spread:e}}})}),(0,e.createElement)(n.SelectControl,{label:(0,o.__)("Position","cozy-addons"),options:[{label:(0,o.__)("Inset","cozy-addons"),value:"inset"},{label:(0,o.__)("Outline","cozy-addons"),value:""}],value:s.boxShadowHover.position,onChange:e=>c({...r,cozyHoverEffect:{...s,boxShadowHover:{...s.boxShadowHover,position:e}}})}),(0,e.createElement)(a.PanelColorSettings,{className:"cozy-color-control",enableAlpha:!0,title:(0,o.__)("Shadow Color","cozy-addons"),colorSettings:[{label:(0,o.__)("Hover","cozy-addons"),value:s.boxShadowHover.color,onChange:e=>c({...r,cozyHoverEffect:{...s,boxShadowHover:{...s.boxShadowHover,color:e}}})}]}))))))))),(0,e.createElement)(t,{...l}))}));(0,l.addFilter)("editor.BlockEdit","cozy-hover-effect/set-hover-effect-control",m);const u=["core/buttons","core/button","core/group","core/columns","core/column","core/heading","core/paragraph","cozy-block/mega-menu"];(0,l.addFilter)("blocks.registerBlockType","cozy-blocks-custom-fonts/register-block-attribute",((e,o)=>u.includes(o)?Object.assign({},e,{attributes:Object.assign({},e.attributes,{cozyCustomFont:{type:"string",default:""}})}):e));const h=(0,t.createHigherOrderComponent)((t=>l=>{if(!u.includes(l.name)&&!l.attributes.cozyHoverEffect)return(0,e.createElement)(t,{...l});const{attributes:r,setAttributes:c}=l,{cozyCustomFont:s}=r,i=function(){let e=[{label:"Default",value:""}];if("object"==typeof googleFonts.collection)for(let o in googleFonts.collection)e.push({label:googleFonts.collection[o],value:o});return e}(),d=`\n\t#block-${l.clientId} {\n\t\tfont-family: ${s} !important;\n\t}\n\t`;return(0,e.createElement)(e.Fragment,null,""!=s&&null!=s&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)("link",{rel:"stylesheet",href:`https://fonts.googleapis.com/css2?family=${s}:wght@400;500;600;700;800`}),(0,e.createElement)("style",{dangerouslySetInnerHTML:{__html:d}})),(0,e.createElement)(a.InspectorControls,{key:"style",group:"styles"},(0,e.createElement)(n.PanelBody,{title:(0,o.__)("Google Fonts","cozy-addons")},(0,e.createElement)("span",{className:"clear-cozy-custom-font clear-cozy-hover-attributes",onClick:()=>c({...r,cozyCustomFont:""})},(0,o.__)("Reset","cozy-addons")),(0,e.createElement)(n.SelectControl,{label:(0,o.__)("Fonts","cozy-addons"),options:i,value:s,onChange:e=>c({...r,cozyCustomFont:e})}))),(0,e.createElement)(t,{...l}))}));(0,l.addFilter)("editor.BlockEdit","cozy-blocks-custom-fonts/set-custom-fonts-control",h);const p=window.wp.element,v=window.wp.blocks,{createHigherOrderComponent:y}=wp.compose,{InspectorControls:g,PanelColorSettings:f}=wp.blockEditor,{PanelBody:w,BaseControl:z,TextControl:_}=wp.components,x=["core/button","core/navigation"];wp.hooks.addFilter("blocks.registerBlockType","custom-attributes/set-cozy-hover-styles",((e,o)=>x.includes(o)?"core/button"===o?Object.assign({},e,{attributes:Object.assign({},e.attributes,{cozyHoverStyles:{type:"object",default:{bgColor:"",color:"",borderColor:""}}})}):"core/navigation"===o?Object.assign({},e,{attributes:Object.assign({},e.attributes,{cozyMenuPadding:{type:"object",default:{top:0,right:0,bottom:0,left:0}},cozyHoverColor:{type:"object",default:{menuText:"",menuBg:"",submenuText:"",submenuBg:""}}})}):void 0:e));const C=y((t=>a=>{if(!x.includes(a.name)&&!a.attributes.cozyHoverStyles||!x.includes(a.name)&&!a.attributes.cozyHoverColor)return(0,e.createElement)(t,{...a});const{attributes:n,setAttributes:l}=a,{cozyHoverStyles:r,cozyHoverColor:c,cozyMenuPadding:s}=n;let i="";"core/button"===a.name&&(i=`#block-${a.clientId}.wp-block-button .wp-block-button__link:hover {\n\t\t\tbackground-color: ${r.bgColor} !important;\n\t\t\tcolor: ${r.color} !important;\n\t\t\tborder-color: ${r.borderColor} !important;\n\t\t}\n\t`),"core/navigation"===a.name&&(i=`\n\t\t#block-${a.clientId}.wp-block-navigation .wp-block-navigation__container > .wp-block-navigation-item {\n\t\t\tpadding: ${s.top}px ${s.right}px ${s.bottom}px ${s.left}px;\n\t\t} \n\t\t#block-${a.clientId}.wp-block-navigation .wp-block-navigation-item:hover {\n\t\t\tbackground-color: ${c.menuBg} !important;\n\t\t  }\n\t\t  #block-${a.clientId}.wp-block-navigation .wp-block-navigation-item:hover .wp-block-navigation-item__content, #block-${a.clientId}.wp-block-navigation .wp-block-navigation-item.has-child:hover .wp-block-navigation__submenu-icon svg {\n\t\t\tcolor: ${c.menuText} !important;\n\t\t  } \n\t\t  #block-${a.clientId}.wp-block-navigation .wp-block-navigation-item.has-child .wp-block-navigation__submenu-container .wp-block-navigation-item:hover {\n\t\t\tbackground-color: ${c.submenuBg} !important;\n\t\t  }\n\t\t  #block-${a.clientId}.wp-block-navigation .wp-block-navigation-item.has-child .wp-block-navigation__submenu-container .wp-block-navigation-item:hover .wp-block-navigation-item__content, #block-${a.clientId}.wp-block-navigation .wp-block-navigation-item.has-child > .wp-block-navigation__submenu-container .wp-block-navigation__submenu-container > .wp-block-navigation-item:hover > .wp-block-navigation-item__content, #block-${a.clientId}.wp-block-navigation .wp-block-navigation-item.has-child .wp-block-navigation__submenu-container .wp-block-navigation-item:hover .wp-block-navigation__submenu-icon svg {\n\t\t\tcolor: ${c.submenuText} !important;\n\t\t  }\n\t\t  `);const[d,b]=(0,p.useState)(!1),m=(e,o)=>{let t={...n.cozyMenuPadding};t={...t,top:Math.abs(o),right:Math.abs(o),bottom:Math.abs(o),left:Math.abs(o)},l(d?{...n,cozyMenuPadding:t}:{...n,cozyMenuPadding:{...n.cozyMenuPadding,[e]:Math.abs(o)}})};return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("style",{dangerouslySetInnerHTML:{__html:i}}),(0,e.createElement)(g,{key:"style",group:"styles"},"core/navigation"===a.name&&(0,e.createElement)(w,{title:(0,o.__)("Padding","cozy-addons")},(0,e.createElement)(z,null,(0,e.createElement)(z.VisualLabel,null,(0,o.__)("Padding","cozy-addons")),(0,e.createElement)("div",{style:{display:"flex",gap:"5px",height:"50px",position:"relative"}},(0,e.createElement)("button",{className:"cozy-link-styles "+(d?"":"cozy-attr-link-disabled"),onClick:()=>b(!d)},(0,e.createElement)("svg",{width:"10",height:"16",viewBox:"0 0 15 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("path",{d:"M6.18931 9.59516L6.18931 19.3466H8.70581V9.59516H6.18931Z",fill:"black"}),(0,e.createElement)("path",{d:"M0.0553284 7.88029L0.0553284 13.2126H2.53381L2.53381 7.88029C2.82201 4.53678 5.6079 3.53757 6.94321 3.4415C10.9203 3.15534 12.1019 6.00678 12.3901 7.88029V13.2126L14.8398 13.2126V7.88029C14.1251 1.90809 9.2776 0.780139 6.94321 0.962687C1.84791 1.30857 0.0553284 5.92031 0.0553284 7.88029Z",fill:"black"}),(0,e.createElement)("path",{d:"M0.0553284 20.9042L0.0553284 15.5718H2.53381L2.53381 20.9042C2.82201 24.2477 5.6079 25.2469 6.94321 25.343C10.9203 25.6291 12.1019 22.7777 12.3901 20.9042V15.5718L14.8398 15.5718V20.9042C14.1251 26.8764 9.2776 28.0043 6.94321 27.8218C1.84791 27.4759 0.0553284 22.8641 0.0553284 20.9042Z",fill:"black"}))),(0,e.createElement)(_,{type:"number",step:1,min:0,label:(0,o.__)("Top","cozy-addons"),value:s.top,onChange:e=>m("top",e)}),(0,e.createElement)(_,{type:"number",step:1,min:0,label:(0,o.__)("Right","cozy-addons"),value:s.right,onChange:e=>m("right",e)}),(0,e.createElement)(_,{type:"number",step:1,min:0,label:(0,o.__)("Bottom","cozy-addons"),value:s.bottom,onChange:e=>m("bottom",e)}),(0,e.createElement)(_,{type:"number",step:1,min:0,label:(0,o.__)("Left","cozy-addons"),value:s.left,onChange:e=>m("left",e)})))),(0,e.createElement)(w,{title:(0,o.__)("Hover Styles","cozy-addons"),className:"cozy-block-hover-panel"},"core/button"===a.name&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)("span",{className:"clear-cozy-hover-attributes",onClick:()=>l({...n,cozyHoverStyles:{...n.cozyHoverStyles,bgColor:"",color:"",borderColor:""}})},(0,o.__)("Clear","cozy-addons")),(0,e.createElement)(f,{className:"cozy-color-control",enableAlpha:!0,colorSettings:[{label:(0,o.__)("Background Color","cozy-addons"),value:r.bgColor,onChange:e=>l({...n,cozyHoverStyles:{...n.cozyHoverStyles,bgColor:e}})},{label:(0,o.__)("Text Color","cozy-addons"),value:r.color,onChange:e=>l({...n,cozyHoverStyles:{...n.cozyHoverStyles,color:e}})},{label:(0,o.__)("Border Color","cozy-addons"),value:r.borderColor,onChange:e=>l({...n,cozyHoverStyles:{...n.cozyHoverStyles,borderColor:e}})}]})),"core/navigation"===a.name&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)("span",{className:"clear-cozy-hover-attributes",onClick:()=>l({...n,cozyHoverColor:{...n.cozyHoverColor,menuText:"",menuBg:"",submenuText:"",submenuBg:""}})},(0,o.__)("Clear","cozy-addons")),(0,e.createElement)(f,{className:"cozy-color-control",enableAlpha:!0,colorSettings:[{label:(0,o.__)("Menu Text","cozy-addons"),value:c.menuText,onChange:e=>l({...n,cozyHoverColor:{...n.cozyHoverColor,menuText:e}})},{label:(0,o.__)("Menu Background","cozy-addons"),value:c.menuBg,onChange:e=>l({...n,cozyHoverColor:{...n.cozyHoverColor,menuBg:e}})},{label:(0,o.__)("Submenu Text","cozy-addons"),value:c.submenuText,onChange:e=>l({...n,cozyHoverColor:{...n.cozyHoverColor,submenuText:e}})},{label:(0,o.__)("Submenu Background","cozy-addons"),value:c.submenuBg,onChange:e=>l({...n,cozyHoverColor:{...n.cozyHoverColor,submenuBg:e}})}]})))),(0,e.createElement)(t,{...a}))}),"withCozyHoverStyles");wp.hooks.addFilter("editor.BlockEdit","custom-attributes/set-cozy-hover-styles",C);const E="cozy-block/cozy-woo-query";(0,v.registerBlockVariation)("core/query",{name:E,title:"Cozy Query Loop",description:"Cozy Blocks Query Loop Variation.",isActive:({namespace:e,query:o})=>e===E&&"product"===o.postType,attributes:{namespace:E,query:{perPage:6,pages:0,offset:0,postType:"product",order:"desc",orderBy:"date",author:"",search:"",exclude:[],sticky:"",inherit:!1}},scope:["block"]})})();