<template>
    <div>
        <div>{{Resource.sidebarLeft.overview}}</div>
        <h2>Chúng ta không thuộc về nhau</h2>
    </div>
</template>
<script>
import Resource from "../../Resource/Resource.js"
export default{
    name: "RouterView",
    data(){
        return{
            Resource
        }
    }
}
</script>