<template>
    <div>
        <div class="sizebar-left">
            <div class="sb-left-logo">
                <div class="icon icon-toggle"></div>
                <div class="add"></div>
                <div class="sb-left-avatar">
                    <img src="../../assets/img/Logo_Module_TiengViet_White.66947422.svg" alt="">
                </div>
            </div>
            <div class="navbar-menu">
                <ul class="navbar-list">
                    <li class="navbar-item">
                        <router-link class="navbar-item__link" data-tooltip="Tổng quan"  @mouseover="mouseover" @mouseout="mouseout" to="/overview">
                            <div class="icon icon-dashboard"></div> <span>{{Resource.sidebarLeft.overview}}</span>
                        </router-link>
                    </li>
                    <li class="navbar-item actived">
                        <router-link data-tooltip="Tiền mặt"  @mouseover="mouseover" @mouseout="mouseout"  class="navbar-item__link"  to="/employee">
                            <div class="icon icon-cash mi-24"></div> <span>{{Resource.sidebarLeft.cash}}</span>
                        </router-link>
                    </li>
                    <li class="navbar-item">
                        <router-link data-tooltip="Tiền gửi"  @mouseover="mouseover" @mouseout="mouseout"  class="navbar-item__link"  to="/Deposits">
                            <div class="icon icon-bank mi-24"></div> <span>{{Resource.sidebarLeft.deposits}}</span>
                        </router-link>
                    </li>
                    <li class="navbar-item">
                        <router-link data-tooltip="Mua hàng"  @mouseover="mouseover" @mouseout="mouseout"  class="navbar-item__link"  to="/Purchase">
                            <div class="icon icon-pu mi-24"></div> <span>{{Resource.sidebarLeft.purchase}}</span>
                        </router-link>
                    </li>
                    <li class="navbar-item">
                        <router-link data-tooltip="Bán hàng"  @mouseover="mouseover" @mouseout="mouseout"  class="navbar-item__link"  to="/Sale">
                            <div class="icon icon-sale mi-24"></div> <span>{{Resource.sidebarLeft.sell}}</span>
                        </router-link>
                    </li>
                    <li class="navbar-item">
                        <router-link data-tooltip="Quản lí hoá đơn"  @mouseover="mouseover" @mouseout="mouseout"  class="navbar-item__link" to="/Management">
                            <div class="icon icon-invoice mi-24"></div> <span>{{Resource.sidebarLeft.manageInvoice}}</span>
                        </router-link>
                    </li>
                    <li class="navbar-item">
                        <router-link data-tooltip="Kho"  @mouseover="mouseover" @mouseout="mouseout"  class="navbar-item__link" to="/Repos" >
                            <div class="icon icon-stock mi-24"></div> <span>{{Resource.sidebarLeft.repo}}</span>

                        </router-link>
                    </li>
                    <li class="navbar-item">
                        <router-link data-tooltip="Công cụ dụng cụ"  @mouseover="mouseover" @mouseout="mouseout"  class="navbar-item__link"  to="/Tool">
                            <div class="icon icon-tool mi-24"></div> <span>{{Resource.sidebarLeft.tool}}</span>
                        </router-link>
                    </li>
                    <li class="navbar-item">
                        <router-link data-tooltip="Tài sản cố định"  @mouseover="mouseover" @mouseout="mouseout"   class="navbar-item__link" to="/asset">
                            <div class="icon icon-assets mi-24"></div> <span>{{Resource.sidebarLeft.asset}}</span>

                        </router-link>
                    </li>
                    <li class="navbar-item">
                        <router-link data-tooltip="Tiền lương"  @mouseover="mouseover" @mouseout="mouseout"   class="navbar-item__link" to="/Payroll">
                            <div class="icon icon-stock mi-24"></div> <span>{{Resource.sidebarLeft.salary}}</span>

                        </router-link>
                    </li>
                    <li class="navbar-item" >
                        <router-link data-tooltip="Thuế"  @mouseover="mouseover" @mouseout="mouseout"  class="navbar-item__link" to="/tax" >
                            <div class="icon icon-tax mi-24"></div> <span>{{Resource.sidebarLeft.tax}}</span>

                        </router-link>
                    </li>
                    <li class="navbar-item">
                        <router-link data-tooltip="Giá thành"  @mouseover="mouseover" @mouseout="mouseout"  class="navbar-item__link" to="/Price" >
                            <div class="icon icon-dashboard mi-24"></div> <span>{{Resource.sidebarLeft.price}}</span>
                        </router-link>
                    </li>
                    <li class="navbar-item">
                        <router-link data-tooltip="Tổng hợp"  @mouseover="mouseover" @mouseout="mouseout" class="navbar-item__link" to="/Synthetic">
                            <div class="icon icon-general mi-24"></div> <span>{{Resource.sidebarLeft.synthetic}}</span>
                        </router-link>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>
<style scoped>
    @import url(../../css/base/sizebar-left.css);
</style>
<script>
import Resource from "../../Resource/Resource.js"
export default {
    name: "TheSizebarLeft",
    data(){
        return{
            Resource
        }
    },
    methods: {

       /**
        * Hàm xử lý khi di chuột đến navbar menu sẽ hiện tooltip
        * @param {*} e: tham số truyền vào là event
        */
        mouseover(e){
            try {
                const title = e.target.dataset.tooltip
                const tooltipDiv = document.createElement("div");
                tooltipDiv.className = "tooltip-text";
                tooltipDiv.textContent = title;
                e.target.appendChild(tooltipDiv);
                const cords = e.target.getBoundingClientRect();
                const { top, left } = cords;
                tooltipDiv.style.left = `${left+ 170}px`;
                tooltipDiv.style.top = `${top + 20}px`;
            } catch (error) {
                console.log(error)
            }
        },

        /**
        * Hàm xử lý khi dời chuột khỏi navbar menu sẽ ẩn tooltip
        * @param {*} e: tham số truyền vào là event
        */
        mouseout(e){
            try{
                const tooltip = e.target.querySelector(".tooltip-text");
                if (!tooltip) return;
                tooltip.parentNode.removeChild(tooltip);
            }
            catch(error)
            {
                console.log(error) 
            }
        }
    }
}
</script>
<style>
.tooltip-text{
  position: fixed;
  transform: translateX(-50%);
  background-color: #5b5d64;
  padding: 5px 10px;
  border-radius: 2px;
  display: block;
  color: white;
  font-size: 12px;
  z-index: 10;
}
.navbar-item__link span,.navbar-item__link .icon{
    pointer-events: none;
}

</style>