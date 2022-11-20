<template>
    <div>
        <div>{{Resource.sidebarLeft.synthetic}}</div>
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