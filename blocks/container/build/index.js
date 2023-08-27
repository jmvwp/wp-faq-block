!function(){"use strict";var e,t={965:function(){var e=window.wp.blocks,t=window.wp.i18n,l=window.wp.element,n=window.wp.blockEditor,a=window.wp.components;const o="mvwp-faq-container-block",i="mvwp.faq-container-block";var s=window.wp.hooks;const r=(0,s.applyFilters)(`${i}.title.tag`,"h3"),c=(0,s.applyFilters)(`${i}.has_title.default`,!0),p=(0,s.applyFilters)(`${i}.has_description.default`,!1),m=(0,s.applyFilters)(`${i}.always_open.default`,!1),u=["mvwp/faq-item-block"],w=(0,s.applyFilters)(`${i}.template`,[["mvwp/faq-item-block",{}]]);var h={hasTitle:{type:"boolean",default:c},title:{type:"string",source:"html",selector:`.${o}__title`},hasDescription:{type:"boolean",default:p},description:{type:"string",source:"html",selector:`.${o}__description`},alwaysOpen:{type:"boolean",default:m}},v=window.wp.primitives;(0,e.registerBlockType)("mvwp/faq-container-block",{apiVersion:2,supports:{align:["wide","full"],className:!1},attributes:h,edit:function({attributes:e,setAttributes:i}){const{hasTitle:s=c,title:h,hasDescription:v=p,description:_,alwaysOpen:d=m}=e,b=(e,t)=>{i({[e]:t})},f=[o];return d&&f.push(`${o}_is-always-opened`),(0,l.createElement)("div",{...(0,n.useBlockProps)({className:f.join(" ")})},(0,l.createElement)(n.InspectorControls,null,(0,l.createElement)(a.PanelBody,{title:(0,t.__)("Settings","mvwp-blocks")},(0,l.createElement)(a.PanelRow,null,(0,l.createElement)(a.ToggleControl,{label:(0,t.__)("Show title","mvwp-blocks"),checked:s,onChange:()=>b("hasTitle",!s)})),(0,l.createElement)(a.PanelRow,null,(0,l.createElement)(a.ToggleControl,{label:(0,t.__)("Show description","mvwp-blocks"),checked:v,onChange:()=>b("hasDescription",!v)})),(0,l.createElement)(a.PanelRow,null,(0,l.createElement)(a.ToggleControl,{label:(0,t.__)("Always open","mvwp-blocks"),help:(0,t.__)("Leaves items open while opening another item.","mvwp-blocks"),checked:d,onChange:e=>b("alwaysOpen",e)})))),(0,l.createElement)("div",{className:`${o}__header`},s&&(0,l.createElement)(n.RichText,{tagName:r,value:h,placeholder:(0,t.__)("Title","mvwp-blocks"),onChange:e=>b("title",e),className:`${o}__title`}),v&&(0,l.createElement)(n.RichText,{tagName:"div",multiline:"p",value:_,placeholder:(0,t.__)("Description","mvwp-blocks"),onChange:e=>b("description",e),className:`${o}__description`})),(0,l.createElement)("div",{className:`${o}__list`},(0,l.createElement)(n.InnerBlocks,{allowedBlocks:u,template:w})))},save:function({attributes:e}){const{hasTitle:t=c,title:a,hasDescription:i=p,description:s,alwaysOpen:w=m}=e,h=[o];return w&&h.push(`${o}_is-always-opened`),(0,l.createElement)("div",{...n.useBlockProps.save({className:h.join(" ")})},(0,l.createElement)("div",{className:`${o}__header`},t&&(0,l.createElement)(n.RichText.Content,{tagName:r,className:`${o}__title`,value:a}),i&&(0,l.createElement)(n.RichText.Content,{tagName:"div",multiline:"p",value:s,className:`${o}__description`})),(0,l.createElement)("div",{className:`${o}__list`},(0,l.createElement)(n.InnerBlocks.Content,{allowedBlocks:u})))},icon:()=>(0,l.createElement)(v.SVG,{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)(v.Path,{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"})),example:{attributes:{title:(0,t.__)("Frequently Asked Questions","mvwp-blocks"),hasDescription:!0,description:(0,t.__)("This is a description.","mvwp-blocks")},innerBlocks:[{name:"mvwp/faq-item-block",attributes:{title:(0,t.__)("Question 1","mvwp-blocks"),defaultOpen:!0},innerBlocks:[{name:"core/paragraph",attributes:{content:(0,t.__)("This is the answer on the first question.","mvwp-blocks")}}]},{name:"mvwp/faq-item-block",attributes:{title:(0,t.__)("Question 2","mvwp-blocks"),hasTopSubtitle:!0,topSubtitle:(0,t.__)("Question category","mvwp-blocks"),hasBottomSubtitle:!0,bottomSubtitle:(0,t.__)("- Answer author","mvwp-blocks")}}]}})}},l={};function n(e){var a=l[e];if(void 0!==a)return a.exports;var o=l[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=function(t,l,a,o){if(!l){var i=1/0;for(p=0;p<e.length;p++){l=e[p][0],a=e[p][1],o=e[p][2];for(var s=!0,r=0;r<l.length;r++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](l[r])}))?l.splice(r--,1):(s=!1,o<i&&(i=o));if(s){e.splice(p--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var p=e.length;p>0&&e[p-1][2]>o;p--)e[p]=e[p-1];e[p]=[l,a,o]},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};n.O.j=function(t){return 0===e[t]};var t=function(t,l){var a,o,i=l[0],s=l[1],r=l[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(r)var p=r(n)}for(t&&t(l);c<i.length;c++)o=i[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(p)},l=self.webpackChunkwp_faq_block=self.webpackChunkwp_faq_block||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var a=n.O(void 0,[431],(function(){return n(965)}));a=n.O(a)}();