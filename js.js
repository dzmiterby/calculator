let num11=document.querySelector(".num11"),num12=document.querySelector(".num12"),num2=document.querySelector(".num2"),act=document.querySelector(".act"),number=document.querySelectorAll(".number");for(let n of number)n.onclick=addNum1;let action=document.querySelectorAll(".action");for(let n of action)n.onclick=addAct;let actionX=document.querySelectorAll(".action-x");for(let n of actionX)n.onclick=addActx;let delAll=document.querySelector(".del");delAll.onclick=function(){num11.innerHTML="",num12.innerHTML="",act.innerHTML="",num2.innerHTML="";for(var n of number)n.onclick=addNum1};let minus=document.querySelector(".minus");function addNum1(){if(""==act.innerHTML&&0<num12.innerHTML.length&&(num12.innerHTML=""),"."==this.innerHTML&&0==num11.innerHTML.length)num11.innerHTML="0.";else{if("."==this.innerHTML&&num11.innerHTML.includes("."))return null;if("0."==num11.innerHTML)num11.innerHTML+=this.innerHTML;else if(0==num11.innerHTML&&"."!=this.innerHTML)num11.innerHTML="",num11.innerHTML=this.innerHTML;else{if(16==num11.innerHTML.length)return null;num11.innerHTML+=this.innerHTML}}}function addNum2(){if(""==act.innerHTML)return!1;if("."==this.innerHTML&&0==num2.innerHTML.length)num2.innerHTML="0.";else{if("."==this.innerHTML&&num2.innerHTML.includes("."))return null;if("0."==num2.innerHTML)num2.innerHTML+=this.innerHTML;else if(0==num2.innerHTML&&"."!=this.innerHTML)num2.innerHTML="",num2.innerHTML=this.innerHTML;else{if(16==num2.innerHTML.length)return null;num2.innerHTML+=this.innerHTML}}}function addAct(){if(""!=num11.innerHTML&&""==num2.innerHTML)act.innerHTML=this.innerHTML;else{if(""==num12.innerHTML||""!=num11.innerHTML||""!=num2.innerHTML)return null;act.innerHTML=this.innerHTML}for(var n of number)n.onclick=addNum2}function addActx(){if(""!=num11.innerHTML&&""==act.innerHTML&&""==num2.innerHTML){var n,e=this.innerHTML,r=+num11.innerHTML;switch(num11.innerHTML="",e){case"%":num12.innerHTML=r/100;break;case"1/X":num12.innerHTML=1/r;break;case"X²":num12.innerHTML=r*r;break;case"²√X":if(0<r){num12.innerHTML=Math.sqrt(r);break}if(r<=0){num12.innerHTML=0;break}}for(n of number)n.onclick=addNum1}else{if(""==num12.innerHTML||""!=num11.innerHTML||""!=act.innerHTML||""!=num2.innerHTML)return null;var i,e=this.innerHTML,u=+num12.innerHTML;switch(e){case"%":num12.innerHTML=u/100;break;case"1/X":num12.innerHTML=1/u;break;case"X²":num12.innerHTML=u*u;break;case"²√X":if(0<u){num12.innerHTML=Math.sqrt(u);break}if(0==u){num12.innerHTML=0;break}num12.innerHTML=`Ошибка ${u} < 0`}for(i of number)i.onclick=addNum1}}minus.onclick=function(){var n,e;""!=num11.innerHTML&&""==act.innerHTML&&""==num12.innerHTML&&""==num2.innerHTML&&(n=+num11.innerHTML,num11.innerHTML=0-n),""==num11.innerHTML&&""==act.innerHTML&&""!=num12.innerHTML&&""==num2.innerHTML&&(n=+num12.innerHTML,num12.innerHTML="",num11.innerHTML=0-n),""!=num11.innerHTML&&""!=act.innerHTML&&""==num12.innerHTML&&""!=num2.innerHTML&&(e=+num2.innerHTML,num2.innerHTML=0-e),""==num11.innerHTML&&""!=act.innerHTML&&""!=num12.innerHTML&&""!=num2.innerHTML&&(e=+num2.innerHTML,num2.innerHTML=0-e)};let result=document.querySelector(".result");result.onclick=function(){let n;n=0<num11.innerHTML.length?+num11.innerHTML:+num12.innerHTML;var e,r=act.innerHTML,i=+num2.innerHTML;switch(num11.innerHTML="",num2.innerHTML="",act.innerHTML="",r){case"/":num12.innerHTML=n/i;break;case"*":num12.innerHTML=n*i;break;case"-":num12.innerHTML=n-i;break;case"+":num12.innerHTML=n+i}for(e of number)e.onclick=addNum1};