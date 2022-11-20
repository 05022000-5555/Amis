<template>
    <button  class="button">{{name}}</button>
</template>
<style>
    .button{
        padding: 8px 19px 9px 19px;
        border: none;
        outline: none;
        border-radius: 5px;
        cursor: pointer;
        color: #111111;
        /* background: rgba(58, 56, 56, 0.377); */
        border: 1px solid #8d9096;
        background-color: transparent;
        transition: all 0.1s linear;
        font-weight: 600;
        }  
        .button:active{
            background: rgba(97, 94, 94, 0.418); 
        }
        .button:hover{
            background-color: #d2d3d6;
        }
        .buttonColor{
            color: white;
            background-color: #2ca01c;
            border: none;
        }
        .buttonColor:active:active{
            background-color: #248b15;
        }  
        .buttonColor:hover{
            background-color: #35bf22;
        }
        .buttonNormal{
            background-color: #fff;
            color: #111111;
            border: 1px solid #111;
        }
        .buttonNormal:hover{
            background: #fff;
        }
        .buttonNormal:active{
            background: #bbb;
        }
        .btnCancel:focus, .btnSave:focus{
            background: #d2d3d6;
        }
        .btnSave:focus{
            background: #d2d3d6;
        }
        .buttonColor:focus{
            background-color: #248b15;
        }
</style>
<script>
export default  {
    name: 'ButtonMiSa',
    props: {
        name: String
    },
    
}
</script>
