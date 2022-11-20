<template>
    <div>
        <div>{{Resource.sidebarLeft.tax}}</div>
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