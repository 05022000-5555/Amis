<template>
    <div id="toast" >
     <!-- Success -->
     <div class="toast " :class="[type? type : '']">
         <div class="toast_icon">
             <!-- <i class="fa-solid fa-circle-check"></i> -->
             <div :class="[icon? icon : '']" ></div>
         </div>
         <div class="toast_body">
             <h3 class="toast_title">{{status}}</h3>
             <p class="toast_message">{{message}}</p>
         </div>
         <div class="toast_close">
             <i class="fa-solid fa-xmark"></i>
         </div>
     </div>
 </div>
</template>
<script>
export default{
name: "ToastMessage",
props:[ "type","icon", "status", "message"]
}
</script>
<style>
 
.toast {
background: #fff;
display: flex;
align-items: center;
border-radius: 2px;
border-left: 4px solid;
box-shadow: 0 5px 8px rgba(0, 0, 0, 0.08);
margin-bottom: 30px;
min-width: 400;
max-width: 450px;
transition: all linear 0.3s;
/* transform: translateX(calc(100% + 32px)); */
}
.toast_body {
flex-grow: 1;
}
.toast_icon {
font-size: 24px;
padding: 0 16px;
}
/* .toast_body {

} */
.toast_title {
font-size: 16px;
font-weight: 600;
color: #333;
}
.toast_msg {
font-size: 14px;
font-weight: 600;
color: #888;
margin-top: 6px;
line-height: 1.5;
}
.toast_close {
font-size: 20px;
padding: 0 16px;
cursor: pointer;
}
.toast--success {
border-color: #47d864;
}
.toast--success .toast_icon {
color: #47d864;
}
.toast--error {
border-color: #ff623d;
}
.toast--error .toast_icon {
color: #ff623d;
}
.toast--warning {
border-color: #ffc021;
}
.toast--warning .toast_icon {
color: #ffc021;
}
/* id toast */
#toast {
position: fixed;
top: 32px;
right: 32px;
animation: slideLeft ease 0.3s, fadeOut linear 1s 3s forwards;
}
@keyframes slideLeft {
from {
 opacity: 0;
 transform: translateX(calc(100% + 32px));
}
to {
 opacity: 1;
 transform: translateX(0);
}
}
@keyframes fadeOut{
 from {
     transform: translateX(0);
 }
 to {
     transform: translateX(calc(100% + 32px));
   }
}

</style>