<template>
    <div>
         <div class="header">
                <div class="header__business flex-aligin-center">
                    <div class="header-toggle flex-aligin-center">
                        <div @click="toggleMenu" class="icon icon-toggle-header mi-24 icon-header"></div>
                        <div class="name-company flex-aligin-center"><span class="company">{{Resource.header.company}}</span> <div class="icon mi-chevron-right mi-14 mi-14-move"></div> </div>
                    </div>
                    <div class="DC flex-aligin-center">
                        <div class="dot"></div>
                        <span>{{Resource.header.verson}}</span>
                    </div>
                </div>
                <div class="notification flex-aligin-center">
                    <div class="icon icon-bell mi-24"></div>
                    <div class="name-company-notification flex-aligin-center">
                        <div class="header-avatar"><img src="../../assets/img/avatar.jpg" alt=""></div>
                        <div class="profile flex-aligin-center">
                            <span class="company name-employee">{{Resource.header.personal}}</span> <div class="icon mi-chevron-down mi-14"></div> 
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
import Resource from "../../Resource/Resource.js"
export default{
    name:"TheHeader",
    data(){
        return{
            Resource
        }
    },
    methods:{
    /**Hàm toggle menu */
       
    }
}
</script>
<style>
@import url(../../css/base/header.css);
@import url(../../css/mains.css)
</style>