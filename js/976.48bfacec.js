"use strict";(self["webpackChunkkinocms"]=self["webpackChunkkinocms"]||[]).push([[976],{976:function(e,l,i){i.r(l),i.d(l,{default:function(){return W}});var t=i(252),a=i(963),r=i(577);const s={class:"container"},n={class:"card card-primary"},c=(0,t._)("div",{class:"card-header"},[(0,t._)("h3",{class:"card-title"},"Добавити фільм")],-1),o={class:"card-body"},m={class:"form-group"},d=(0,t._)("label",{for:"nameFilm"},"Назва фільма",-1),p={class:"form-group"},u=(0,t._)("label",{for:"description"},"Опис",-1),g={class:"file-input"},h=(0,t._)("label",{for:"holovnaImg"},"Головна картинка",-1),y={class:"image-delete_btn"},f={class:"image-delete"},k=["src"],_={class:"file-input"},F=(0,t._)("label",{for:"holovnaImg"},"Галерея картинок",-1),b={class:"image-delete_btn2"},I=["src"],w=["onClick"],v={class:"form-group"},S=(0,t._)("label",null,"Посилання на трейлер",-1),D={class:"form-group"},C=(0,t._)("label",null,"Тип фільма",-1),U={class:"form-main"},V=["onClick"],x=["onUpdate:modelValue","id"],q=["for"],T={class:"form-group"},G=(0,t._)("label",null,"Фільм",-1),$={class:"form-main"},H=["id","value"],K=["for"],L={class:"form-group"},R=(0,t._)("h5",null,"SEO блок:",-1),M=(0,t._)("label",null,"URL",-1),O={class:"form-group"},Y=(0,t._)("label",null,"Title",-1),j={class:"form-group"},z=(0,t._)("label",null,"Keywords",-1),A={class:"form-group"},E=(0,t._)("label",null,"Description",-1),J={class:"card-footer"};function X(e,l,i,X,N,P){return(0,t.wg)(),(0,t.iD)("div",s,[(0,t._)("div",n,[c,(0,t._)("form",{onSubmit:l[15]||(l[15]=(0,a.iM)(((...e)=>P.saveFilm&&P.saveFilm(...e)),["prevent"]))},[(0,t._)("div",o,[(0,t._)("div",m,[d,(0,t.wy)((0,t._)("input",{type:"text",class:"form-control",id:"nameFilm",placeholder:"Введіть назву фільма","onUpdate:modelValue":l[0]||(l[0]=e=>N.nameFilm=e),required:""},null,512),[[a.nr,N.nameFilm]])]),(0,t._)("div",p,[u,(0,t.wy)((0,t._)("textarea",{type:"text",class:"form-control",id:"description",placeholder:"Текст","onUpdate:modelValue":l[1]||(l[1]=e=>N.description=e),required:""},null,512),[[a.nr,N.description]])]),(0,t._)("div",g,[h,null===N.imageSrc?((0,t.wg)(),(0,t.iD)("input",{key:0,type:"file",ref:"fileInput",class:"file-input__input",onChange:l[2]||(l[2]=(...e)=>P.handleFileChange&&P.handleFileChange(...e)),required:""},null,544)):(0,t.kq)("",!0),null===N.imageSrc?((0,t.wg)(),(0,t.iD)("button",{key:1,onClick:l[3]||(l[3]=(...e)=>P.triggerFileInput&&P.triggerFileInput(...e)),class:"btn btn-block btn-default"},"Добавити")):(0,t.kq)("",!0),(0,t._)("div",y,[(0,t._)("div",f,[N.imageSrc?((0,t.wg)(),(0,t.iD)("img",{key:0,src:N.imageSrc,class:"imgInput"},null,8,k)):(0,t.kq)("",!0)]),null!==N.imageSrc?((0,t.wg)(),(0,t.iD)("button",{key:0,onClick:l[4]||(l[4]=(...e)=>P.deleteImageSrc&&P.deleteImageSrc(...e)),class:"btn btn-block btn-default"},"Видалити")):(0,t.kq)("",!0)])]),(0,t._)("div",_,[F,(0,t._)("input",{type:"file",ref:"fileInput2",class:"file-input__input",onChange:l[5]||(l[5]=(...e)=>P.handleFileChange2&&P.handleFileChange2(...e)),multiple:""},null,544),N.galleryImgs==[]?((0,t.wg)(),(0,t.iD)("button",{key:0,onClick:l[6]||(l[6]=(...e)=>P.triggerFileInput2&&P.triggerFileInput2(...e)),class:"btn btn-block btn-default"},"Добавити")):(0,t.kq)("",!0),(0,t._)("div",b,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(N.galleryImgs,((e,l)=>((0,t.wg)(),(0,t.iD)("div",{class:"image-delete",key:l},[e?((0,t.wg)(),(0,t.iD)("img",{key:0,src:e,class:"imgInput"},null,8,I)):(0,t.kq)("",!0),e?((0,t.wg)(),(0,t.iD)("span",{key:1,class:"deleteSpan",onClick:e=>P.deleteGalleryImg(l)},"x",8,w)):(0,t.kq)("",!0)])))),128)),N.galleryImgs!=[]?((0,t.wg)(),(0,t.iD)("button",{key:0,onClick:l[7]||(l[7]=(...e)=>P.triggerFileInput2&&P.triggerFileInput2(...e)),class:"btn btn-block btn-default"},"Добавити")):(0,t.kq)("",!0)])]),(0,t._)("div",v,[S,(0,t.wy)((0,t._)("input",{type:"text",class:"form-control",placeholder:"Введіть посилання на трейлер","onUpdate:modelValue":l[8]||(l[8]=e=>N.linkTrailer=e)},null,512),[[a.nr,N.linkTrailer]])]),(0,t._)("div",D,[C,(0,t._)("div",U,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(N.typeFilms,((e,l)=>((0,t.wg)(),(0,t.iD)("div",{class:"form-check",key:l,onClick:i=>P.pushTypeFilm(e,l)},[(0,t.wy)((0,t._)("input",{class:"form-check-input","onUpdate:modelValue":l=>e.checked=l,type:"checkbox",id:e.type},null,8,x),[[a.e8,e.checked]]),(0,t._)("label",{class:"form-check-label",for:e.type},(0,r.zw)(e.type),9,q)],8,V)))),128))])]),(0,t._)("div",T,[G,(0,t._)("div",$,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(N.dataFilms,((e,i)=>((0,t.wg)(),(0,t.iD)("div",{class:"form-check",key:i},[(0,t.wy)((0,t._)("input",{class:"form-check-input","onUpdate:modelValue":l[9]||(l[9]=e=>N.radioData=e),type:"radio",id:e.name,name:"name",value:e.name},null,8,H),[[a.G2,N.radioData]]),(0,t._)("label",{class:"form-check-label",for:e.name},(0,r.zw)(e.name),9,K)])))),128))])]),(0,t._)("div",L,[R,M,(0,t.wy)((0,t._)("input",{type:"text",class:"form-control",placeholder:"URL","onUpdate:modelValue":l[10]||(l[10]=e=>N.url=e)},null,512),[[a.nr,N.url]])]),(0,t._)("div",O,[Y,(0,t.wy)((0,t._)("input",{type:"text",class:"form-control",placeholder:"Title","onUpdate:modelValue":l[11]||(l[11]=e=>N.title=e)},null,512),[[a.nr,N.title]])]),(0,t._)("div",j,[z,(0,t.wy)((0,t._)("input",{type:"text",class:"form-control",placeholder:"word","onUpdate:modelValue":l[12]||(l[12]=e=>N.keywords=e)},null,512),[[a.nr,N.keywords]])]),(0,t._)("div",A,[E,(0,t.wy)((0,t._)("textarea",{type:"text",class:"form-control",placeholder:"Description","onUpdate:modelValue":l[13]||(l[13]=e=>N.descriptionSeo=e)},"\r\n            ",512),[[a.nr,N.descriptionSeo]])])]),(0,t._)("div",J,[(0,t._)("button",{onClick:l[14]||(l[14]=(...e)=>P.saveFilm&&P.saveFilm(...e)),class:"btn btn-primary"},"Зберегти")])],32)])])}var N=i(355),P=i(650),Z={setup(){},data(){return{nameFilm:"",description:"",imageSrc:null,imageSrc2:null,galleryImgs:[],linkTrailer:"",typeFilms:[{type:"2D",checked:!1},{type:"3D",checked:!1},{type:"IMAX",checked:!1}],url:"",title:"",keywords:"",descriptionSeo:"",typeFilm:[],imageUrl:"",fileImgSrc:null,fileGalleryImg:[],dataFilms:[{name:"Вже вийшов",checked:!1},{name:"Скоро вийде",checked:!1}],radioData:"",dataFilm:[]}},methods:{handleFileChange(e){this.fileImgSrc=e.target.files[0],this.imageSrc=URL.createObjectURL(this.fileImgSrc)},handleFileChange2(e){this.fileGalleryImg=[...e.target.files];for(let l of this.fileGalleryImg)this.imageSrc2=URL.createObjectURL(l),this.galleryImgs.push(this.imageSrc2)},triggerFileInput(){this.$refs.fileInput.click()},triggerFileInput2(){this.$refs.fileInput2.click()},deleteImageSrc(){this.imageSrc=null},deleteGalleryImg(e){this.galleryImgs.splice(e,1)},pushTypeFilm(e,l){this.typeFilm.includes(e.type)||!1!==e.checked?this.typeFilm.includes(e.type)&&!0===e.checked&&(this.typeFilm.forEach((function(i,t,a){e.type===i&&(l=t)})),this.typeFilm.splice(l,1)):(this.typeFilm.push(e.type),console.log(this.typeFilm))},async saveFilm(){const e=(0,N.N8)(),l=(0,P.cF)(),i=`films/${this.nameFilm}`,t=(0,N.iH)(e,i);if((0,N.t8)(t,{id:t.key,nameFilm:this.nameFilm,description:this.description,imageFirst:this.fileImgSrc,galleryImgs:this.fileGalleryImg,linkTrailer:this.linkTrailer,typeFilm:this.typeFilm,radioData:this.radioData,url:this.url,title:this.title,keywords:this.keywords,descriptionSeo:this.descriptionSeo}),this.fileImgSrc){const e=(0,P.iH)(l,`films/${t.key}/imageFirst`);(0,P.KV)(e,this.fileImgSrc).then((e=>{(0,P.Jt)(e.ref).then((e=>{(0,N.Vx)(t,{imageFirst:e})}))}))}const a=await get(t),r=a.val()&&a.val().galleryImages||[],s=[...r];await Promise.all(this.fileGalleryImg.map((async e=>{const i="image-"+Date.now()+Math.floor(1e3*Math.random()),a=(0,P.iH)(l,`films/${t.key}/galleryImgs/${i}`);await(0,P.KV)(a,e);const r=await(0,P.Jt)(a);s.push({name:i,url:r})}))),(0,N.Vx)(t,{galleryImages:s}),this.$router.push("films"),this.nameFilm="",this.description="",this.imageSrc=null,this.galleryImgs=[],this.linkTrailer="",this.typeFilms=[{type:"2D",checked:!1},{type:"3D",checked:!1},{type:"IMAX",checked:!1}],this.url="",this.title="",this.keywords="",this.descriptionSeo=""}}},B=i(744);const Q=(0,B.Z)(Z,[["render",X]]);var W=Q}}]);
//# sourceMappingURL=976.48bfacec.js.map