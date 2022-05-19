"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6136],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(t),d=i,h=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return t?r.createElement(h,a(a({ref:n},u),{},{components:t})):r.createElement(h,a({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8606:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],c={id:"mocking-open-with-url",slug:"api/mocking-open-with-url",title:"Mocking Open With URL (Deep Links)",sidebar_label:"Mocking Open With URL (Deep Links)"},p=void 0,l={unversionedId:"mocking-open-with-url",id:"mocking-open-with-url",isDocsHomePage:!1,title:"Mocking Open With URL (Deep Links)",description:"Mocking Open With URL (Deep Links)",source:"@site/../docs/APIRef.MockingOpenWithURL.md",sourceDirName:".",slug:"/api/mocking-open-with-url",permalink:"/Detox/docs/next/api/mocking-open-with-url",editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/APIRef.MockingOpenWithURL.md",tags:[],version:"current",frontMatter:{id:"mocking-open-with-url",slug:"api/mocking-open-with-url",title:"Mocking Open With URL (Deep Links)",sidebar_label:"Mocking Open With URL (Deep Links)"},sidebar:"tutorialSidebar",previous:{title:"Launch Arguments",permalink:"/Detox/docs/next/api/launch-args"},next:{title:"Mocking User Notifications",permalink:"/Detox/docs/next/api/mocking-user-notifications"}},u=[{value:"Mocking Open With URL (Deep Links)",id:"mocking-open-with-url-deep-links",children:[{value:"Mocking App Launch With a URL",id:"mocking-app-launch-with-a-url",children:[{value:"Example",id:"example",children:[],level:4}],level:3},{value:"Mocking Opening With a URL On a Launched App",id:"mocking-opening-with-a-url-on-a-launched-app",children:[],level:3}],level:2}],s={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"mocking-open-with-url-deep-links"},"Mocking Open With URL (Deep Links)"),(0,o.kt)("p",null,"You can mock opening the app from URL to test your app\u2019s deep link handling mechanism."),(0,o.kt)("h3",{id:"mocking-app-launch-with-a-url"},"Mocking App Launch With a URL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await device.launchApp({newInstance: true, url, sourceApp: bundleId}); // sourceApp is an optional iOS-only argument\n")),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"describe('launch app from URL', () => {\n    it('should handle URL successfully', async () => {\n      await device.launchApp({\n        newInstance: true,\n        url: 'scheme://some.url',\n        sourceApp: 'com.apple.mobilesafari'\n      });\n      await expect(element(by.text('a label'))).toBeVisible();\n    });\n  });\n")),(0,o.kt)("h3",{id:"mocking-opening-with-a-url-on-a-launched-app"},"Mocking Opening With a URL On a Launched App"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"iOS-only")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await device.openURL({url: 'scheme://some.url', sourceApp: 'com.apple.mobilesafari'});\n")))}m.isMDXComponent=!0}}]);