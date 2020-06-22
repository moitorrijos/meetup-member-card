!function(e){function t(r){if(a[r])return a[r].exports;var n=a[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var a={};t.m=e,t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a(1)},function(e,t,a){"use strict";var r=a(2),n=(a.n(r),a(3)),l=(a.n(n),a(4)),c=(a.n(l),a(5)),__=(a.n(c),wp.i18n.__);(0,wp.blocks.registerBlockType)("cgb/block-meetup-member-card",{title:__("Member Card"),icon:wp.element.createElement("svg",{id:"Solid",height:"512",viewBox:"0 0 512 512",width:"512",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("circle",{cx:"176",cy:"192",r:"32"}),wp.element.createElement("path",{d:"m255.919 324.022c-1.897-46.684-37.019-84.022-79.919-84.022s-78.022 37.338-79.919 84.022c9.958 7.04 42.71 27.978 79.919 27.978s69.961-20.938 79.919-27.978z"}),wp.element.createElement("path",{d:"m72 416h368a24.028 24.028 0 0 0 24-24v-272a24.028 24.028 0 0 0 -24-24h-368a24.027 24.027 0 0 0 -24 24v272a24.027 24.027 0 0 0 24 24zm240-240h112a8 8 0 0 1 0 16h-112a8 8 0 0 1 0-16zm0 48h112a8 8 0 0 1 0 16h-112a8 8 0 0 1 0-16zm0 48h112a8 8 0 0 1 0 16h-112a8 8 0 0 1 0-16zm0 48h112a8 8 0 0 1 0 16h-112a8 8 0 0 1 0-16zm-166.2-90.724a48 48 0 1 1 60.394 0c38.188 13.742 65.806 52.802 65.806 98.724a8 8 0 0 1 -3 6.247c-1.725 1.378-42.771 33.753-93 33.753s-91.275-32.375-93-33.753a8 8 0 0 1 -3-6.247c0-45.922 27.618-84.982 65.8-98.724z"})),category:"common",keywords:[__("team"),__("member"),__("card")],attributes:{title:{type:"string",source:"text",selector:".card-title"},body:{type:"string",source:"text",selector:".card-body"},imageId:{type:"number"},imageAlt:{type:"string",source:"attribute",attribute:"alt",selector:".card-image"},imageUrl:{type:"string",attribute:"src",selector:".card-image"}},edit:function(e){var t=e.className,a=e.attributes,r=e.setAttributes,n=a.imageUrl,i=a.imageAlt,m=a.imageId,o=a.body,s=a.title,u=function(e){r({imageUrl:e.url,imageId:e.id,imageAlt:e.alt})},p=function(e){r({title:e})},d=function(e){r({body:e})};return wp.element.createElement("div",{className:t},wp.element.createElement(l.MediaUpload,{allowedTypes:"image",value:m,onSelect:u,render:function(e){var t=e.open;return wp.element.createElement(c.Button,{className:m?"image-button":"button button-large",onClick:t},m?wp.element.createElement("img",{src:n,alt:i}):__("Upload Image"))}}),wp.element.createElement(l.RichText,{tagName:"h3",placeholder:__("Your Name"),multiline:!1,value:s,className:".card-title",onChange:p}),wp.element.createElement(l.RichText,{tagName:"p",placeholder:__("Your Bio"),value:o,onChange:d,className:"card-body"}))},save:function(e){var t=e.className,a=e.attributes,r=a.title,n=a.body,c=a.imageUrl,i=a.imageAlt;return wp.element.createElement("div",{className:t},c&&wp.element.createElement("img",{className:"card-image",src:c,alt:i}),wp.element.createElement(l.RichText.Content,{tagName:"h3",className:"card-title",value:r}),wp.element.createElement(l.RichText.Content,{tagName:"p",className:"card-body",value:n}))}})},function(e,t){},function(e,t){},function(e,t){e.exports=wp.blockEditor},function(e,t){e.exports=wp.components}]);