var K=Object.defineProperty,W=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var j=(e,t,o)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,k=(e,t)=>{for(var o in t||(t={}))Q.call(t,o)&&j(e,o,t[o]);if(L)for(var o of L(t))Z.call(t,o)&&j(e,o,t[o]);return e},P=(e,t)=>W(e,G(t));import{p as ee,r as p,o as a,c as i,a as n,b as l,d as g,w as f,e as x,T,f as A,v as te,F as y,g as b,t as m,n as B,h as D,E as M,i as F,j as N,k as ne,l as se,m as oe,q as re,s as ce,u as R,x as ae,y as ie,z as le,A as de,B as ue}from"./vendor.f35f0d28.js";const pe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))d(c);new MutationObserver(c=>{for(const s of c)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&d(r)}).observe(document,{childList:!0,subtree:!0});function o(c){const s={};return c.integrity&&(s.integrity=c.integrity),c.referrerpolicy&&(s.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?s.credentials="include":c.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(c){if(c.ep)return;c.ep=!0;const s=o(c);fetch(c.href,s)}};pe();var _=(e,t)=>{const o=e.__vccOpts||e;for(const[d,c]of t)o[d]=c;return o};const _e={components:{PhoneFilled:ee}},me={class:"branch-info flex column justify-center align-center"},he={class:"address flex justify-center"},ve=n("p",null,[g(" \u05E4\u05D0\u05D8\u05D0\u05D8\u05D0\u05E1 \u05E1\u05D5\u05E7\u05D5\u05DC\u05D5\u05D1 58, \u05D7\u05D5\u05DC\u05D5\u05DF | "),n("a",{href:"tel:037734655"},"03-773-4655")],-1),fe={class:"svg-anchor",href:"tel:037734655"},ye={class:"svg-container flex align-center justify-center"},$e=n("p",{class:"open-hours"}," \u05D1\u05D4\u05E9\u05D2\u05D7\u05EA \u05E8\u05D1\u05E0\u05D5\u05EA \u05D7\u05D5\u05DC\u05D5\u05DF | \u05E9\u05E2\u05D5\u05EA \u05DE\u05E9\u05DC\u05D5\u05D7: \u05D0-\u05D3: 11:10-00:50, \u05D4: 11:10-01:30, \u05D5: \u05E1\u05D2\u05D5\u05E8, \u05E9: 20:40-00:59 ",-1);function ge(e,t,o,d,c,s){const r=p("PhoneFilled");return a(),i("div",me,[n("div",he,[ve,n("a",fe,[n("div",ye,[l(r)])])]),$e])}var X=_(_e,[["render",ge]]);const xe={components:{BranchInfo:X},computed:{onHomePage(){return this.$route.name==="home"}}},be={key:0,class:"app-header-wrapper main-layout"},ke={class:"app-header-container full flex align-center justify-center"},Ce=n("div",{class:"logo-container"},[n("img",{src:"https://res.cloudinary.com/dubjerksn/image/upload/v1648396610/Patats/wemxftho7eyqjos5rd0b.png"})],-1);function Be(e,t,o,d,c,s){const r=p("BranchInfo"),u=p("Router-Link");return s.onHomePage?x("",!0):(a(),i("div",be,[n("div",ke,[l(r),l(u,{to:"/"},{default:f(()=>[Ce]),_:1})])]))}var Pe=_(xe,[["render",Be]]);const $={loadFromStorage:Fe,saveToStorage:Se};function Fe(e){var t=localStorage.getItem(e);return t?JSON.parse(t):null}function Se(e,t){localStorage[e]=JSON.stringify(t)}const Ae={components:{AppHeader:Pe},async created(){await this.$store.dispatch({type:"loadProducts"});const e=$.loadFromStorage("cart");e!==null&&this.$store.dispatch({type:"setCart",cart:e})}},we={class:"app"};function Oe(e,t,o,d,c,s){const r=p("AppHeader"),u=p("RouterView");return a(),i("div",we,[l(r),l(T,{mode:"out-in","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"},{default:f(()=>[l(u)]),_:1})])}var Le=_(Ae,[["render",Oe]]),je="/Patatas/assets/delivery-man-white.446e00a6.png",Te="/Patatas/assets/shopping-cart-white.8f5eff79.png";const De={data(){return{isDelivery:!1,selected:"",options:[{text:"\u05D1\u05EA \u05D9\u05DD",value:{fee:20,location:"\u05D1\u05EA \u05D9\u05DD"}},{text:"\u05D7\u05D5\u05DC\u05D5\u05DF",value:{fee:17,location:"\u05D7\u05D5\u05DC\u05D5\u05DF"}},{text:"\u05D0\u05D6\u05D5\u05E8",value:{fee:20,location:"\u05D0\u05D6\u05D5\u05E8"}}]}},methods:{selfPickUp(){this.$store.dispatch({type:"setDeliveryFee",deliveryFee:0}),this.$store.dispatch({type:"setDeliveryLocation",deliveryLocation:"Pick-Up"}),this.$router.push("/holon")},delivery(){this.isDelivery=!0},setDelivery(){this.selected!==""&&(this.$store.dispatch({type:"setDeliveryFee",deliveryFee:this.selected.fee}),this.$store.dispatch({type:"setDeliveryLocation",deliveryLocation:this.selected.location}),this.$router.push("/holon"))}}},Me={class:"delivery-container justify-center flex"},Ne=n("div",{class:"img-container"},[n("img",{src:je})],-1),Re=n("div",{class:"flex align-center justify-center title-container"},[n("p",null,"\u05DE\u05E9\u05DC\u05D5\u05D7")],-1),Xe=[Ne,Re],Ie=n("div",{class:"img-container"},[n("img",{src:Te})],-1),Ve=n("div",{class:"flex align-center justify-center title-container"},[n("p",null,"\u05D0\u05D9\u05E1\u05D5\u05E3 \u05E2\u05E6\u05DE\u05D9")],-1),qe=[Ie,Ve],Ee={key:0,class:"select-delivery-location-container column flex justify-center align-center"},Ue={class:"container flex column justify-start align-center"},He=n("div",{class:"img-container"},[n("img",{src:"https://res.cloudinary.com/dubjerksn/image/upload/v1648666552/Patats/oxvvg9yj68hh1la23niw.png"})],-1),ze=n("div",{class:"title"},[n("p",null,":\u05D1\u05D7\u05E8 \u05E2\u05D9\u05E8 ")],-1),Je={class:"select-container"},Ye=["value"],Ke=n("button",null,[n("p",null,"\u05D4\u05D1\u05D0")],-1),We=[Ke];function Ge(e,t,o,d,c,s){return a(),i(y,null,[n("div",Me,[n("div",{onClick:t[0]||(t[0]=(...r)=>s.delivery&&s.delivery(...r)),class:"delivery-type pointer flex column justify-center align-center"},Xe),n("div",{onClick:t[1]||(t[1]=(...r)=>s.selfPickUp&&s.selfPickUp(...r)),class:"delivery-type pointer flex column justify-center align-center"},qe)]),c.isDelivery?(a(),i("div",Ee,[n("div",Ue,[He,ze,n("div",Je,[A(n("select",{"onUpdate:modelValue":t[2]||(t[2]=r=>c.selected=r)},[(a(!0),i(y,null,b(c.options,r=>(a(),i("option",{key:r.text,value:r.value},m(r.text),9,Ye))),128))],512),[[te,c.selected]])]),n("div",{onClick:t[3]||(t[3]=(...r)=>s.setDelivery&&s.setDelivery(...r)),class:"btn-container"},We)])])):x("",!0)],64)}var I=_(De,[["render",Ge]]);const Qe={components:{PickDelivery:I},data(){return{isDelivery:!1,selected:"",options:[{text:"\u05D1\u05EA \u05D9\u05DD",value:{fee:20,location:"\u05D1\u05EA \u05D9\u05DD"}},{text:"\u05D7\u05D5\u05DC\u05D5\u05DF",value:{fee:17,location:"\u05D7\u05D5\u05DC\u05D5\u05DF"}},{text:"\u05D0\u05D6\u05D5\u05E8",value:{fee:20,location:"\u05D0\u05D6\u05D5\u05E8"}}]}},computed:{deliveryFee(){return this.$store.getters.deliveryFee}},methods:{selfPickUp(){this.$store.dispatch({type:"setDeliveryFee",deliveryFee:0}),this.$store.dispatch({type:"setDeliveryLocation",deliveryLocation:"Pick-Up"}),this.$router.push("/holon")},delivery(){this.isDelivery=!0},setDelivery(){this.selected!==""&&(this.$store.dispatch({type:"setDeliveryFee",deliveryFee:this.selected.fee}),this.$store.dispatch({type:"setDeliveryLocation",deliveryLocation:this.selected.location}),this.$router.push("/holon"))}}},Ze={class:"home-page column flex align-center"},et=n("div",{class:"logo-container"},[n("img",{src:"https://res.cloudinary.com/dubjerksn/image/upload/v1648396610/Patats/wemxftho7eyqjos5rd0b.png"})],-1),tt=n("div",{class:"name-container"},[n("p",null,"\u05E4\u05D0\u05D8\u05D0\u05D8\u05D0\u05E1 \u05D7\u05D5\u05DC\u05D5\u05DF")],-1);function nt(e,t,o,d,c,s){const r=p("PickDelivery");return a(),i("section",Ze,[et,tt,l(r)])}var st=_(Qe,[["render",nt]]);const ot={props:{addon:Object,idx:Number},methods:{onSetAddon(){this.$emit("set-addon",this.idx)}},computed:{addonClass(){return this.addon.selected?"addon-preview selected flex pointer":"addon-preview flex pointer"}}},rt={key:0,class:"regular"},ct={key:1,class:"extra flex"},at={class:"addon-name"},it={class:"price"};function lt(e,t,o,d,c,s){return a(),i("div",{onClick:t[0]||(t[0]=r=>s.onSetAddon()),class:B(s.addonClass)},[o.addon.value===0?(a(),i("div",rt,[n("p",null,m(o.addon.name),1)])):(a(),i("div",ct,[n("p",at,m(o.addon.name),1),n("div",it,[n("p",null,"\u20AA"+m(o.addon.value),1)])]))],2)}var dt=_(ot,[["render",lt]]);const ut={props:{addons:Array},components:{AddonPreview:dt},methods:{emitAddon(e){this.$emit("set-addon",e)}}},pt={class:"addon-list flex"};function _t(e,t,o,d,c,s){const r=p("AddonPreview");return a(),i("section",pt,[(a(!0),i(y,null,b(o.addons,(u,h)=>(a(),i("div",{key:u.name,class:"addon-preview-container"},[l(r,{onSetAddon:s.emitAddon,idx:h,addon:u},null,8,["onSetAddon","idx","addon"])]))),128))])}var V=_(ut,[["render",_t]]);const mt={props:{addons:Array},computed:{selectedAddons(){return this.addons.filter(e=>{if(e.selected)return e})}}},ht={class:"addon-summery"};function vt(e,t,o,d,c,s){return a(!0),i(y,null,b(s.selectedAddons,r=>(a(),i("div",{class:"addon-summery-container",key:r.name},[n("div",ht,[n("p",null,m(r.name),1)])]))),128)}var w=_(mt,[["render",vt]]);const ft={components:{AddonList:V,ProductSummery:w,Right:D},data(){return{note:""}},created(){const{id:e}=this.$route.params;this.$store.dispatch({type:"loadProduct",id:e})},computed:{product(){return this.$store.getters.product}},methods:{setAddon(e){this.$store.dispatch({type:"addProductAddon",idx:e})},addToCart(){this.$store.dispatch({type:"addProductToCart",note:this.note}),this.$router.back()},goBack(){this.$store.dispatch({type:"resetProductAddons"}),this.$router.back()},some(){console.log()}}},yt={class:"top flex row-reverse"},$t={class:"img-container flex"},gt=["src"],xt={class:"product-info flex column"},bt={class:"product-name"},kt={class:"product-description"},Ct={class:"product-price flex column"},Bt=n("span",null,"\u20AA ",-1),Pt={class:"bottom flex column"},Ft={key:0,class:"product-addons flex column"},St=n("p",{class:"heading"},"\u05EA\u05D5\u05E1\u05E4\u05D5\u05EA \u05DC\u05D1\u05D7\u05D9\u05E8\u05D4",-1),At={class:"product-comments"},wt=n("p",{class:"heading"},"\u05D4\u05E2\u05E8\u05D5\u05EA \u05DE\u05D9\u05D5\u05D7\u05D3\u05D5\u05EA?",-1),Ot={class:"add-to-cart flex row-reverse"},Lt=g("\u05D4\u05D5\u05E1\u05E3 \u05DC\u05E1\u05DC");function jt(e,t,o,d,c,s){const r=p("AddonList"),u=M,h=p("Right");return a(),i("div",{onClick:t[2]||(t[2]=F((...v)=>s.goBack&&s.goBack(...v),["prevent"])),class:"wrapper"},[s.product?(a(),i("div",{key:0,onClick:t[1]||(t[1]=F((...v)=>s.some&&s.some(...v),["stop"])),class:"product-details flex column align-center justify-center"},[n("div",yt,[n("div",$t,[n("img",{class:"product-img",src:s.product.img},null,8,gt)]),n("div",xt,[n("div",bt,[n("p",null,m(s.product.name),1)]),n("div",kt,m(s.product.description),1)]),n("div",Ct,[n("p",null,[Bt,g(m(s.product.price),1)])])]),n("div",Pt,[s.product.addons.length>0?(a(),i("div",Ft,[St,l(r,{onSetAddon:s.setAddon,addons:s.product.addons},null,8,["onSetAddon","addons"])])):x("",!0),n("div",At,[wt,A(n("input",{"onUpdate:modelValue":t[0]||(t[0]=v=>c.note=v),placeholder:"\u05E8\u05E9\u05D5\u05DD \u05D4\u05E2\u05E8\u05D5\u05EA \u05DC\u05DE\u05D8\u05D1\u05D7..."},null,512),[[N,c.note]])]),n("div",Ot,[l(u,{onClick:s.addToCart,type:"warning",plain:"",class:"add-btn"},{default:f(()=>[Lt]),_:1},8,["onClick"]),l(u,{onClick:s.goBack,type:"danger",plain:"",class:"go-back-btn"},{default:f(()=>[l(h)]),_:1},8,["onClick"])])])])):x("",!0)])}var q=_(ft,[["render",jt]]);const Tt={components:{AddonList:V,ProductSummery:w,Right:D},data(){return{product:null,note:""}},props:{idx:Number},mounted(){this.product=k({},this.$store.getters.cart[this.idx]),this.$store.dispatch({type:"setProduct",product:this.product}),this.note=this.product.note},computed:{},methods:{setAddon(e){this.$store.dispatch({type:"addProductAddon",idx:e})},saveChanges(){const t={product:P(k({},this.product),{note:this.note}),idx:this.idx};console.log("payload :>> ",t),this.$store.dispatch({type:"saveProductToCart",payload:t}),this.$router.back()},goBack(){this.$router.back()},some(){console.log()}}},Dt={class:"top flex row-reverse"},Mt={class:"img-container flex"},Nt=["src"],Rt={class:"product-info flex column"},Xt={class:"product-name"},It={class:"product-description"},Vt={class:"product-price flex column"},qt=n("span",null,"\u20AA ",-1),Et={class:"bottom flex column"},Ut={key:0,class:"product-addons flex column"},Ht=n("p",{class:"heading"},"\u05EA\u05D5\u05E1\u05E4\u05D5\u05EA \u05DC\u05D1\u05D7\u05D9\u05E8\u05D4",-1),zt={class:"product-comments"},Jt=n("p",{class:"heading"},"\u05D4\u05E2\u05E8\u05D5\u05EA \u05DE\u05D9\u05D5\u05D7\u05D3\u05D5\u05EA?",-1),Yt={class:"add-to-cart flex row-reverse"},Kt=g("\u05E9\u05DE\u05D5\u05E8 \u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD");function Wt(e,t,o,d,c,s){const r=p("AddonList"),u=M,h=p("Right");return a(),i("div",{onClick:t[2]||(t[2]=F((...v)=>s.goBack&&s.goBack(...v),["prevent"])),class:"wrapper"},[c.product?(a(),i("div",{key:0,onClick:t[1]||(t[1]=F((...v)=>s.some&&s.some(...v),["stop"])),class:"product-details flex column align-center justify-center"},[n("div",Dt,[n("div",Mt,[n("img",{class:"product-img",src:c.product.img},null,8,Nt)]),n("div",Rt,[n("div",Xt,[n("p",null,m(c.product.name),1)]),n("div",It,m(c.product.description),1)]),n("div",Vt,[n("p",null,[qt,g(m(c.product.price),1)])])]),n("div",Et,[c.product.addons.length>0?(a(),i("div",Ut,[Ht,l(r,{onSetAddon:s.setAddon,addons:c.product.addons},null,8,["onSetAddon","addons"])])):x("",!0),n("div",zt,[Jt,A(n("input",{"onUpdate:modelValue":t[0]||(t[0]=v=>c.note=v),placeholder:"\u05E8\u05E9\u05D5\u05DD \u05D4\u05E2\u05E8\u05D5\u05EA \u05DC\u05DE\u05D8\u05D1\u05D7..."},null,512),[[N,c.note]])]),n("div",Yt,[l(u,{onClick:s.saveChanges,type:"warning",plain:"",class:"add-btn"},{default:f(()=>[Kt]),_:1},8,["onClick"]),l(u,{onClick:s.goBack,type:"danger",plain:"",class:"go-back-btn"},{default:f(()=>[l(h)]),_:1},8,["onClick"])])])])):x("",!0)])}var Gt=_(Tt,[["render",Wt]]);const Qt={props:{product:Object}},Zt={class:"product-preview flex column align-center"},en={class:"product-img-container"},tn=["src"],nn={class:"product-name-container flex justify-center"},sn={class:"product-name"},on={key:0,class:"product-price flex justify-center align-center"};function rn(e,t,o,d,c,s){const r=p("RouterLink");return a(),ne(r,{to:`/holon/${o.product._id}`},{default:f(()=>[n("div",Zt,[n("div",en,[n("img",{class:"product-img",src:o.product.img,alt:"pic"},null,8,tn)]),n("div",nn,[n("p",sn,m(o.product.name),1)]),o.product.price>0?(a(),i("div",on,[n("p",null,m(o.product.price),1)])):x("",!0)])]),_:1},8,["to"])}var cn=_(Qt,[["render",rn]]);const an={components:{ProductPreview:cn},props:{products:Array,filterBy:Object}},ln={class:"product-list-container flex column"},dn={class:"selected-type-container"},un={class:"animate__fadeInDown"},pn={class:"product-list"};function _n(e,t,o,d,c,s){const r=p("ProductPreview");return a(),i("div",ln,[n("div",dn,[n("h1",un,m(o.filterBy.name),1)]),n("ul",pn,[(a(!0),i(y,null,b(o.products,u=>(a(),i("li",{key:u._id},[l(T,{"enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"},{default:f(()=>[l(r,{product:u},null,8,["product"])]),_:2},1024)]))),128))])])}var mn=_(an,[["render",_n]]);const hn="api/products/";class vn{static getProducts(){return new Promise(async(t,o)=>{try{const c=(await se.get(hn)).data;t(c)}catch(d){o(d)}})}}const C={getTotalPrice:E,getCartSubTotal:yn,getAddonClass:fn};function fn(e,t){return e.map(d=>d.name===t.name).indexOf(!0)!==-1?"addon-preview selected flex pointer":"addon-preview flex pointer"}function E(e){let t=e.price;return e.addons.forEach(o=>{o.selected&&(t+=o.value)}),t}function yn(e){let t=0;return e.forEach(o=>{t+=E(o)}),t}const $n={props:{item:Object,idx:Number},components:{CircleClose:oe,Edit:re,CirclePlus:ce,ProductSummery:w},data(){return{addonsPrice:0}},methods:{remove(e){this.$store.dispatch({type:"removeFromCart",idx:e})}},computed:{productPrice(){return C.getTotalPrice(this.item)},hasAddons(){return this.item.addons.filter(t=>t.selected===!0).length>0}}},gn=n("hr",null,null,-1),xn={class:"item-preview flex row-reverse"},bn={class:"item-actions flex"},kn={class:"item-price flex"},Cn={class:"item-name"},Bn={key:0,class:"addons-container"},Pn=n("p",null,"\u05EA\u05D5\u05E1\u05E4\u05D5\u05EA:",-1),Fn={class:"cart-item-img"},Sn=["src"],An={class:"close-icon-container flex"};function wn(e,t,o,d,c,s){const r=p("Edit"),u=p("Router-Link"),h=p("ProductSummery"),v=p("CircleClose");return a(),i(y,null,[gn,n("div",xn,[n("div",bn,[l(u,{to:{name:"product edit",params:{idx:`${o.idx}`}}},{default:f(()=>[l(r,{class:"pointer"})]),_:1},8,["to"])]),n("div",kn,[n("p",null,"\u20AA"+m(s.productPrice),1)]),n("div",Cn,[n("p",null,m(o.item.name),1),s.hasAddons?(a(),i("div",Bn,[Pn,l(h,{addons:o.item.addons},null,8,["addons"])])):x("",!0)]),n("div",Fn,[n("img",{src:o.item.img,alt:""},null,8,Sn)]),n("div",An,[l(v,{class:"pointer",onClick:t[0]||(t[0]=O=>s.remove(o.idx)),color:"red"})])])],64)}var On=_($n,[["render",wn]]);const Ln={props:{cart:Array},components:{CartItemPreview:On}},jn={class:"cart-item-list-container flex column"};function Tn(e,t,o,d,c,s){const r=p("CartItemPreview");return a(),i("div",jn,[(a(!0),i(y,null,b(o.cart,(u,h)=>(a(),i("div",{key:u.id,class:"cart-item-container flex column"},[l(r,{idx:h,item:u},null,8,["idx","item"])]))),128))])}var U=_(Ln,[["render",Tn]]);const Dn={computed:{cart(){return this.$store.getters.cart},cartSubtotal(){return C.getCartSubTotal(this.cart)},cartTotal(){return C.getCartSubTotal(this.cart)+this.$store.getters.deliveryFee},deliveryFee(){return this.$store.getters.deliveryFee}},methods:{goBack(){this.$router.back()}}},Mn={class:"cart-summery-container flex column justify-center align-center"},Nn={class:"cart-subtotal flex space-between"},Rn=n("span",null,"\u20AA",-1),Xn=n("p",null,":\u05E1\u05D4''\u05DB \u05D1\u05D9\u05E0\u05D9\u05D9\u05DD",-1),In={class:"cart-subtotal flex space-between"},Vn=n("span",null,"\u20AA",-1),qn=n("p",null,":\u05D3\u05DE\u05D9 \u05DE\u05E9\u05DC\u05D5\u05D7",-1),En={class:"cart-total flex space-between"},Un=n("span",null,"\u20AA",-1),Hn=n("p",null,":\u05E1\u05D4''\u05DB",-1),zn={class:"link-wrapper"},Jn=n("div",{class:"purchase-btn flex"},[n("p",null,"\u05DC\u05EA\u05E9\u05DC\u05D5\u05DD")],-1),Yn=n("div",{class:"purchase-btn flex"},[n("p",null,"\u05D7\u05D6\u05E8\u05D4 \u05DC\u05EA\u05E4\u05E8\u05D9\u05D8")],-1),Kn=[Yn];function Wn(e,t,o,d,c,s){const r=p("Router-link");return a(),i("div",Mn,[n("div",Nn,[n("p",null,[Rn,g(m(s.cartSubtotal),1)]),Xn]),n("div",In,[n("p",null,[Vn,g(m(s.deliveryFee),1)]),qn]),n("div",En,[n("p",null,[Un,g(m(s.cartTotal),1)]),Hn]),n("div",zn,[l(r,{to:"/payment"},{default:f(()=>[Jn]),_:1})]),n("div",{onClick:t[0]||(t[0]=(...u)=>s.goBack&&s.goBack(...u)),class:"link-wrapper-back pointer"},Kn)])}var H=_(Dn,[["render",Wn]]);const Gn={props:{className:String},components:{CartList:U,CartAmount:H},computed:{cart(){return this.$store.getters.cart}}},Qn={class:"order-details-container flex column align-center justify-center"},Zn=n("div",{class:"heading flex"},[n("h1",null,"\u05E4\u05E8\u05D8\u05D9 \u05D4\u05D6\u05DE\u05E0\u05D4")],-1);function es(e,t,o,d,c,s){const r=p("CartList"),u=p("CartAmount");return a(),i("section",Qn,[Zn,l(r,{cart:s.cart},null,8,["cart"]),l(u)])}var z=_(Gn,[["render",es]]);const ts={props:{filterBy:Object},data(){return{navArray:[{name:"\u05E4\u05D0\u05D8\u05D0\u05D8\u05D0\u05E1",value:"patatas"},{name:"\u05E2\u05D9\u05E7\u05E8\u05D9\u05D5\u05EA",value:"main"},{name:"\u05E8\u05D0\u05E9\u05D5\u05E0\u05D5\u05EA",value:"appetizer"},{name:"\u05EA\u05D5\u05E1\u05E4\u05D5\u05EA",value:"side"},{name:"\u05E7\u05D9\u05E0\u05D5\u05D7\u05D9\u05DD",value:"desert"},{name:"\u05E9\u05EA\u05D9\u05D9\u05D4 \u05E7\u05DC\u05D4",value:"drink"}]}},methods:{optionClass(e){return e===this.filterBy.value?"menu-option pointer flex active":"menu-option pointer flex"},setFilterBy(e){this.$emit("set-filter-by",e)}}},ns={class:"menu-nav flex column align-center"},ss=n("div",{class:"heading flex"},[n("h1",null,"\u05EA\u05E4\u05E8\u05D9\u05D8 \u05DE\u05DC\u05D0")],-1),os=["onClick"];function rs(e,t,o,d,c,s){return a(),i("section",ns,[ss,(a(!0),i(y,null,b(c.navArray,r=>(a(),i("div",{key:r.value,class:B(s.optionClass(r.value)),onClick:u=>s.setFilterBy(r)},[n("p",null,m(r.name),1)],10,os))),128))])}var cs=_(ts,[["render",rs]]);const as={props:{sideBarClass:String,filterBy:Object},data(){return{navArray:[{name:"\u05E4\u05D0\u05D8\u05D0\u05D8\u05D0\u05E1",value:"patatas"},{name:"\u05E2\u05D9\u05E7\u05E8\u05D9\u05D5\u05EA",value:"main"},{name:"\u05E8\u05D0\u05E9\u05D5\u05E0\u05D5\u05EA",value:"appetizer"},{name:"\u05EA\u05D5\u05E1\u05E4\u05D5\u05EA",value:"side"},{name:"\u05E7\u05D9\u05E0\u05D5\u05D7\u05D9\u05DD",value:"desert"},{name:"\u05E9\u05EA\u05D9\u05D9\u05D4 \u05E7\u05DC\u05D4",value:"drink"}]}},methods:{optionClass(e){return e===this.filterBy.value?"menu-option flex active":"menu-option flex"},setFilterBy(e){this.$emit("set-filter-by",e)}}},is=["onClick"];function ls(e,t,o,d,c,s){return a(),i("div",{class:B(o.sideBarClass)},[(a(!0),i(y,null,b(c.navArray,r=>(a(),i("div",{key:r.value,class:B(s.optionClass(r.value)),onClick:u=>s.setFilterBy(r)},[n("p",null,m(r.name),1)],10,is))),128))],2)}var ds=_(as,[["render",ls]]);const us={props:{filterBy:Object},components:{SideBarNav:ds},data(){return{sideBarClass:"side-bar-nav column flex"}},methods:{setOpenSideBar(){this.sideBarClass="side-bar-nav open column flex"},setFilterBy(e){this.sideBarClass="side-bar-nav column flex",this.$emit("set-filter-by",e)}}},ps={class:"menu-bar flex full align-center"},_s=n("div",{class:"menu-img-container flex"},[n("img",{src:"https://res.cloudinary.com/dubjerksn/image/upload/v1645051716/gc6dpqabpnywvyzghz0f.png",alt:""})],-1),ms=n("div",{class:"title-container flex"},[n("p",null,"\u05EA\u05E4\u05E8\u05D9\u05D8 \u05DE\u05DC\u05D0")],-1),hs=[_s,ms];function vs(e,t,o,d,c,s){const r=p("SideBarNav");return a(),i(y,null,[n("div",ps,[n("div",{onClick:t[0]||(t[0]=(...u)=>s.setOpenSideBar&&s.setOpenSideBar(...u)),class:"menu-bar-container flex pointer"},hs)]),l(r,{sideBarClass:c.sideBarClass,filterBy:o.filterBy,onSetFilterBy:s.setFilterBy},null,8,["sideBarClass","filterBy","onSetFilterBy"])],64)}var fs=_(us,[["render",vs]]);const ys={computed:{cart(){return this.$store.getters.cart},cartTotal(){return C.getCartSubTotal(this.cart)+this.$store.getters.deliveryFee}},methods:{openModal(){this.$store.dispatch({type:"setModalState",isOpen:!0})}}},$s={class:"cart-total"},gs=n("div",{class:"container flex align-center"},[n("div",{class:"title-container"},[n("p",null,"\u05DC\u05D7\u05E5 \u05DC\u05EA\u05E9\u05DC\u05D5\u05DD")]),n("div",{class:"img-container"},[n("img",{src:"https://res.cloudinary.com/dubjerksn/image/upload/v1648498285/Patats/ozshoygfxkbltyo37qwp.png"})])],-1);function xs(e,t,o,d,c,s){return a(),i("div",{onClick:t[0]||(t[0]=(...r)=>s.openModal&&s.openModal(...r)),class:"check-out-bar flex align-center space-between"},[n("div",$s,[n("p",null,"\u20AA "+m(s.cartTotal),1)]),gs])}var bs=_(ys,[["render",xs]]);const ks={components:{CartList:U,CartAmount:H},computed:{cart(){return this.$store.getters.cart},isOpen(){return this.$store.getters.isOpen?"order-summery open flex column align-center":"order-summery flex column align-center"}},methods:{closeModal(){this.$store.dispatch({type:"setModalState",isOpen:!1})},goToCheckOut(){this.$router.push("/payment"),this.closeModal()}}},Cs=n("div",{class:"title flex justify-center"},[n("p",null,"\u05E4\u05E8\u05D8\u05D9 \u05D4\u05D6\u05DE\u05E0\u05D4")],-1),Bs={class:"actions-container flex"},Ps=n("p",null,"\u05D7\u05D6\u05E8\u05D4 \u05DC\u05EA\u05E4\u05E8\u05D9\u05D8",-1),Fs=[Ps],Ss=n("p",null,"\u05DC\u05EA\u05E9\u05DC\u05D5\u05DD",-1),As=[Ss];function ws(e,t,o,d,c,s){const r=p("CartList"),u=p("CartAmount");return a(),i("section",{class:B(s.isOpen)},[Cs,l(r,{cart:s.cart},null,8,["cart"]),l(u),n("div",Bs,[n("div",{onClick:t[0]||(t[0]=(...h)=>s.closeModal&&s.closeModal(...h)),class:"action flex justify-center align-center"},Fs),n("div",{onClick:t[1]||(t[1]=(...h)=>s.goToCheckOut&&s.goToCheckOut(...h)),class:"action flex justify-center align-center"},As)])],2)}var Os=_(ks,[["render",ws]]);const Ls={data(){return{filterBy:{name:"\u05E4\u05D0\u05D8\u05D0\u05D8\u05D0\u05E1",value:"patatas"}}},components:{ProductList:mn,OrderDetails:z,MenuNav:cs,BranchInfo:X,MenuBar:fs,CheckOutBar:bs,OrderSummery:Os},computed:{products(){return this.$store.getters.getFilteredProducts(this.filterBy.value)}},methods:{setFilterBy(e){this.filterBy=e}}},js={class:"dashboard flex"};function Ts(e,t,o,d,c,s){const r=p("BranchInfo"),u=p("MenuBar"),h=p("OrderDetails"),v=p("ProductList"),O=p("MenuNav"),J=p("CheckOutBar"),Y=p("OrderSummery");return a(),i("div",js,[l(r),l(u,{filterBy:c.filterBy,onSetFilterBy:s.setFilterBy},null,8,["filterBy","onSetFilterBy"]),l(h),l(v,{filterBy:c.filterBy,products:s.products},null,8,["filterBy","products"]),l(O,{filterBy:c.filterBy,onSetFilterBy:s.setFilterBy},null,8,["filterBy","onSetFilterBy"]),l(J),l(Y)])}var Ds=_(Ls,[["render",Ts]]);const Ms={components:{DashBoard:Ds,ProductDetails:q}},Ns={class:"branch-container flex"},Rs={class:"products-container main-layout"};function Xs(e,t,o,d,c,s){const r=p("DashBoard"),u=p("RouterView");return a(),i("section",Ns,[n("div",Rs,[l(r),l(u)])])}var Is=_(Ms,[["render",Xs]]);const Vs={computed:{cart(){return this.$store.getters.cart},cartTotal(){return C.getCartSubTotal(this.cart)+this.$store.getters.deliveryFee}}},qs={class:"form-container flex"},Es={class:"payment-form"},Us=R('<div class="info"><div class="heading-container"><h1>\u05E4\u05E8\u05D8\u05D9\u05D9\u05DD \u05D0\u05D9\u05E9\u05D9\u05D9\u05DD</h1></div><div class="input-stack"><div class="input-container flex column"><label for="fname" class="input-title"> \u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 </label><input required type="text" id="fname" name="fname"></div><div class="input-container flex column"><label for="lname" class="input-title"> \u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4 </label><input required type="text" id="lname" name="lname"></div><div class="input-container flex column"><label for="phone" class="input-title"> \u05D8\u05DC\u05E4\u05D5\u05DF </label><input required type="tel" id="phone" name="phone"></div><div class="input-container flex column"><label for="email" class="input-title"> \u05D3\u05D5\u05D0\u05F4\u05DC </label><input type="email" id="email" name="email"></div></div></div><div class="address"><div class="heading-container"><h1>\u05DB\u05EA\u05D5\u05D1\u05EA</h1></div><div class="input-stack"><div class="input-container flex column"><label class="input-title"> \u05D0\u05D6\u05D5\u05E8 \u05DE\u05E9\u05DC\u05D5\u05D7 </label><input></div><div class="input-container flex column"><label for="street" class="input-title"> \u05E8\u05D7\u05D5\u05D1 </label><input required type="text" id="street" name="street"></div><div class="input-container flex column"><label for="street-num" class="input-title"> \u05DE\u05E1\u05E4\u05E8 </label><input required type="text" id="street-num" name="street-num"></div><div class="input-container flex column"><label for="office" class="input-title"> \u05D3\u05D9\u05E8\u05D4/\u05DE\u05E9\u05E8\u05D3 </label><input type="text" id="office" name="office"></div><div class="input-container flex column"><label for="entrance" class="input-title"> \u05DB\u05E0\u05D9\u05E1\u05D4 </label><input type="text" id="entrance" name="entrance"></div><div class="input-container flex column"><label for="floor" class="input-title"> \u05E7\u05D5\u05DE\u05D4 </label><input type="text" id="floor" name="floor"></div><div class="input-container flex column"><label for="serve-amount" class="input-title"> \u05E1\u05D5\u05E2\u05D3\u05D9\u05DD </label><input type="number" id="serve-amount" name="serve-amount"></div><div class="input-container flex column"><label class="input-title"> \u05E1\u05DB\u05D5&#39;&#39;\u05DD </label><input></div><div class="input-container flex column"><label for="note" class="input-title"> \u05D4\u05E2\u05E8\u05D5\u05EA </label><input type="text" id="note" name="note"></div></div></div><hr>',3),Hs={class:"payment"},zs=n("div",{class:"heading-container"},null,-1),Js={class:"input-stack"},Ys={class:"input-container flex column"},Ks=n("label",{for:"pay-amount",class:"input-title"}," \u05E1\u05DB\u05D5\u05DD \u05DC\u05EA\u05E9\u05DC\u05D5\u05DD ",-1),Ws=["value"],Gs=R('<div class="input-container flex column"><label for="payment_cc_fname" class="input-title"> \u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 </label><input type="text" id="payment_cc_fname" name="payment_cc_fname"></div><div class="input-container flex column"><label for="payment_cc_lname" class="input-title"> \u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4 </label><input type="text" id="payment_cc_lname" name="payment_cc_lname"></div><div class="input-container flex column"><label for="payment_cc_id" class="input-title"> \u05DE\u05E1\u05E4\u05E8 \u05EA&#39;&#39;\u05D6 </label><input type="text" id="payment_cc_id" name="payment_cc_id"></div><div class="input-container flex column"><label for="payment_cc_phone" class="input-title"> \u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF </label><input type="text" id="payment_cc_phone" name="payment_cc_phone"></div>',4),Qs=n("div",{class:"input-container flex column"},[n("label",{for:"cc_num",class:"input-title"}," \u05DE\u05E1\u05E4\u05E8 \u05DB\u05E8\u05D8\u05D9\u05E1 "),n("input",{type:"text",id:"cc_num",name:"cc_num",inputmode:"numeric",autocomplete:"cc-number",placeholder:"XXXX XXXX XXXX XXXX"})],-1),Zs=n("div",{class:"input-container flex column"},[n("label",{for:"date-field",class:"input-title"}," \u05EA\u05D5\u05E7\u05E3 "),n("input",{type:"text",id:"date-field",name:"date-field",inputmode:"numeric",autocomplete:"cc-exp",placeholder:"MM / YY"})],-1),eo=n("div",{class:"input-container flex column"},[n("label",{for:"cvc-field",class:"input-title"}," 3 \u05E1\u05E4\u05E8\u05D5\u05EA "),n("input",{type:"text",id:"cvc-field",name:"cvc-field",inputmode:"numeric",autocomplete:"cc-csc",placeholder:"XXX"})],-1);function to(e,t,o,d,c,s){return a(),i("div",qs,[n("form",Es,[Us,n("div",Hs,[zs,n("div",Js,[n("div",Ys,[Ks,n("input",{type:"text",inputmode:"numeric",id:"pay-amount",name:"pay-amount",value:s.cartTotal},null,8,Ws)]),Gs,Qs,Zs,eo])])])])}var no=_(Vs,[["render",to]]);const so={components:{OrderDetails:z,PaymentForm:no}},oo={class:"payment-page main-layout"},ro={class:"page-container flex"};function co(e,t,o,d,c,s){const r=p("OrderDetails"),u=p("PaymentForm");return a(),i("section",oo,[n("div",ro,[l(r),l(u)])])}var ao=_(so,[["render",co]]);const io=ae({history:ie("/Patatas/"),routes:[{path:"/",name:"home",component:st},{path:"/d",name:"delivery",component:I,props:!0},{path:"/holon",name:"holon",component:Is,children:[{path:":id",name:"product details",component:q},{path:"/edit",name:"product edit",component:Gt,props:!0}]},{path:"/payment",name:"payment",component:ao}]});var lo={state:{products:[],product:null,cart:[],branch:null,deliveryFee:null,deliveryLocation:null},getters:{products(e){return e.products},product(e){return e.product},productAddons(e){return e.productAddons},cart(e){return e.cart},branch(e){const t=$.loadFromStorage("branch");return console.log("branch :>> ",t),t||e.branch},deliveryFee(e){const t=$.loadFromStorage("deliveryFee");return t||e.deliveryFee},deliveryLocation(e){return e.deliveryLocation},cartTotal(e){return C.getCartSubTotal(e.cart)+e.deliveryFee},getFilteredProducts:e=>t=>e.products.filter(o=>o.type===t)},mutations:{setProducts(e,{products:t}){e.products=t},setProduct(e,{id:t}){const o=e.products.filter(d=>d._id===t)[0];e.product=o},setProductFromCart(e,{product:t}){e.product=t},addToCart(e,{note:t}){e.product.note=t,e.cart.push(k({},e.product)),e.product.addons=e.product.addons.map(o=>P(k({},o),{selected:!1})),$.saveToStorage("cart",e.cart)},setProductAddon(e,{idx:t}){e.product.addons[t].selected=!e.product.addons[t].selected},saveToCart(e,{payload:t}){e.cart.splice(t.idx,1,t.product)},removeFromCart(e,{idx:t}){e.cart.splice(t,1),$.saveToStorage("cart",e.cart)},setBranch(e,{branch:t}){e.branch=t,$.saveToStorage("branch",e.branch)},setCart(e,{cart:t}){e.cart=t},setDeliveryFee(e,{deliveryFee:t}){e.deliveryFee=t},setDeliveryLocation(e,{deliveryLocation:t}){e.deliveryLocation=t},resetProductAddons(e){e.product.addons=e.product.addons.map(t=>P(k({},t),{selected:!1}))}},actions:{async loadProducts({commit:e}){try{const t=await vn.getProducts();e({type:"setProducts",products:t})}catch(t){console.log("cannot load products",t)}},loadProduct({commit:e},{id:t}){e({type:"setProduct",id:t})},setBranch({commit:e},{branch:t}){e({type:"setBranch",branch:t}),$.saveToStorage("branch",t)},addProductAddon({commit:e},{idx:t}){e({type:"setProductAddon",idx:t})},addProductToCart({commit:e},{note:t}){e({type:"addToCart",note:t})},saveProductToCart({commit:e},{payload:t}){e({type:"saveToCart",payload:t})},removeFromCart({commit:e},{idx:t}){e({type:"removeFromCart",idx:t})},setCart({commit:e},{cart:t}){e({type:"setCart",cart:t})},setProduct({commit:e},{product:t}){e({type:"setProductFromCart",product:t})},resetProductAddons({commit:e}){e({type:"resetProductAddons"})},setDeliveryFee({commit:e},{deliveryFee:t}){e({type:"setDeliveryFee",deliveryFee:t}),$.saveToStorage("deliveryFee",t)},setDeliveryLocation({commit:e},{deliveryLocation:t}){e({type:"setDeliveryLocation",deliveryLocation:t}),$.saveToStorage("deliveryLocation",t)}}},uo={state:{isOpen:!1},getters:{isOpen(e){return e.isOpen}},mutations:{setIsOpen(e,{isOpen:t}){e.isOpen=t}},actions:{setModalState({commit:e},{isOpen:t}){e({type:"setIsOpen",isOpen:t})}}};const po=le({strict:!0,state:{},getters:{},mutations:{},actions:{},modules:{productModule:lo,modalModule:uo}});const S=de(Le);S.use(io);S.use(po);S.use(ue);S.mount("#app");
