/* SCORM 1.2 wrapper — Global Migration Atlas.
   Finds the LMS API, tracks which routes the student explores,
   reports completion when all routes have been viewed,
   and persists progress in suspend_data. No-ops gracefully outside an LMS. */
(function(){
 var API=null, initialized=false, viewed={}, total=0;

 function findAPI(win){
   var tries=0;
   while(win && tries<10){
     if(win.API) return win.API;
     if(win.parent && win.parent!==win){ win=win.parent; }
     else if(win.opener){ win=win.opener; }
     else break;
     tries++;
   }
   return null;
 }
 function lmsInit(){
   try{
     API=findAPI(window);
     if(!API) return;
     if(API.LMSInitialize('')==='true'||API.LMSInitialize('')===true) initialized=true;
     if(!initialized) return;
     var status=API.LMSGetValue('cmi.core.lesson_status');
     if(status==='not attempted'||status==='') API.LMSSetValue('cmi.core.lesson_status','incomplete');
     var susp=API.LMSGetValue('cmi.suspend_data');
     if(susp){ try{ JSON.parse(susp).forEach(function(id){viewed[id]=true;}); }catch(e){} }
     API.LMSCommit('');
   }catch(e){}
 }
 function save(){
   if(!initialized) return;
   try{
     API.LMSSetValue('cmi.suspend_data',JSON.stringify(Object.keys(viewed)));
     var n=Object.keys(viewed).length;
     if(total>0){
       var score=Math.round(100*n/total);
       API.LMSSetValue('cmi.core.score.min','0');
       API.LMSSetValue('cmi.core.score.max','100');
       API.LMSSetValue('cmi.core.score.raw',String(score));
       if(n>=total) API.LMSSetValue('cmi.core.lesson_status','completed');
     }
     API.LMSCommit('');
   }catch(e){}
 }
 function updateBadge(){
   var el=document.getElementById('scorm-progress');
   if(!el||total===0) return;
   var n=Object.keys(viewed).length;
   el.textContent='📚 Routes explored: '+n+' of '+total+(n>=total?' — complete!':'');
 }
 window.addEventListener('load',function(){
   lmsInit();
   /* wrap the atlas's selectRoute to track exploration */
   var t=setInterval(function(){
     if(typeof window.selectRoute==='function' && typeof window.ROUTES!=='undefined'||typeof ROUTES!=='undefined'){
       clearInterval(t);
       try{ total=(window.ROUTES||ROUTES).length; }catch(e){ total=0; }
       var orig=window.selectRoute;
       window.selectRoute=function(id){
         orig(id);
         if(!viewed[id]){ viewed[id]=true; save(); }
         updateBadge();
       };
       updateBadge();
     }
   },200);
   setTimeout(function(){clearInterval(t);},10000);
 });
 function finish(){
   if(!initialized) return;
   try{ save(); API.LMSFinish(''); initialized=false; }catch(e){}
 }
 window.addEventListener('beforeunload',finish);
 window.addEventListener('unload',finish);
})();
