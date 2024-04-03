import{_ as b}from"./uploader-CugjJYdL.js";import{e as y,f as k,j as C,p as P,u as q,h as p,r,o as n,c as d,a as e,b as c,w as i,d as _}from"./index-BXmR9VdA.js";const V={class:"w-full h-full grid justify-items-center items-center pt-16"},j={class:"w-[85%] h-[90%] flex flex-col gap-y-10 bg-gray-100 rounded-xl p-7"},z={class:"flex justify-between"},R=e("h2",{class:"text-[1.3vw]"},"Create Product",-1),B={class:"flex gap-x-4"},E={class:"grid grid-cols-2 w-full place-items-center"},N={class:"grid w-1/2"},U=e("label",{id:"name-label",class:"text-[.8rem] translate-y-[50%] bg-gray-100 w-fit z-10 px-1 ml-2 text-gray-500"}," Product name ",-1),I={class:"grid col-[1/-1] w-full place-items-center py-7"},L=e("header",{class:"flex justify-between place-self-start pb-5"},[e("h2",{class:"text-[1.2vw]"},"Select picture")],-1),T={class:"h-[33vh] aspect-square grid grid-cols-1 grid-rows-1 overflow-hidden"},$={key:0,class:"bg-slate-400 h-[33vh] w-[100%] aspect-square rounded-3xl overflow-hidden place-items-center grid"},D=["src"],F={key:1,class:"bg-slate-400 h-[33vh] w-[100%] aspect-square rounded-3xl overflow-hidden"},H=e("img",{class:"w-full h-full z-10",src:b,alt:"upload image here"},null,-1),O=[H],J=y({__name:"EditProductPage",setup(S){const s=k({name:"",picture:null}),a=C(null),h=P(),u=q();p.get(`/api/product/${u.params.id}`).then(({status:t,data:l})=>{if(t==200){const{product:o}=l.data;s.name=o.name,a.value=o.picture}});const m=t=>{a.value=null,s.picture=null,s.picture=t.target.files[0],a.value=URL.createObjectURL(t.target.files[0])},f=async()=>{const{status:t}=await p.put(`/api/product/${u.params.id}`,s,{headers:{"Content-Type":"multipart/form-data"}});t==202&&h.push("/dashboard/products")},g=async()=>{a.value=null};return(t,l)=>{const o=r("ui-button"),w=r("router-link"),v=r("ui-textfield");return n(),d("div",V,[e("div",j,[e("header",z,[R,e("div",B,[c(w,{to:"/dashboard"},{default:i(()=>[c(o,{class:"w-36 text-[.8vw] font-semibold h-12",outlined:""},{default:i(()=>[_(" Cancel ")]),_:1})]),_:1}),c(o,{class:"w-36 text-[.8vw] font-semibold h-12",unelevated:"",onClick:f},{default:i(()=>[_(" update ")]),_:1})])]),e("div",E,[e("section",N,[U,c(v,{modelValue:s.name,"onUpdate:modelValue":l[0]||(l[0]=x=>s.name=x),outlined:"",required:"","input-type":"text",attrs:{placeholder:"Product name",labelId:"#email-label",autocomplete:"off"},placeholder:"Product name"},null,8,["modelValue"])]),e("section",I,[L,e("section",T,[a.value?(n(),d("div",$,[e("img",{class:"w-[90%] h-[90%] z-10",src:a.value,onerror:g},null,8,D)])):(n(),d("div",F,O)),e("input",{type:"file",required:"",class:"h-[100%] aspect-square z-20 cursor-pointer opacity-0 rounded-3xl",onchange:m})])])])])])}}});export{J as default};