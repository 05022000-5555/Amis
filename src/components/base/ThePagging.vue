<template>
  <div class="navigation">
    <div class="total-record">
      {{Resource.pagging.total}}: <strong>{{ total }}</strong> {{Resource.pagging.records}}
    </div>
    <div class="pagging-right">
      <div class="pagging-dropdown">
        <div class="selection" v-show="isShow">
          <ul>
            <li
              v-for="(item, index) in arr"
              :key="index"
              @click="TotalRecord(item.value)"
              :class="[itemPerPage == item.value ? 'bg-pagging' : '']"
            >
              {{ item.message }}
            </li>
          </ul>
        </div>
        <div class="number-page">
          <div class="number10">{{Resource.pagging.tenRecords}}</div>
        </div>
        <div @click="isShow = !isShow" class="icon-dropdown">
          <div class="icon btnUp mi-arow-down" :class="[isShow? 'mi-arow-down-rotate':'']"></div>
        </div>
        <!-- <i  @click="isShow = !isShow" :class="[isShow ? 'fa-angle-up' : '']" class="fa-solid fa-angle-down btnUp"></i> -->
      </div>
      <vue-awesome-paginate
        :total-items="total"
        :items-per-page="itemPerPage"
        :max-pages-shown="3"
        :current-page="1"
        prev-button-content="Trước"
        next-button-content="Sau"
        :on-click="onClickHandler"
        paginate-buttons-class="btn"
        active-page-class="btn-active"
        back-button-class="back-btn"
        next-button-class="next-btn"
      />
    </div>
  </div>
</template>
<script>
// import axios from 'axios'
import Resource from "../../Resource/Resource.js"
export default {
  name: "ThePagging",
  data() {
    return {
      showResult: false,
      isShow: false,
      paggingData: [],
      arr: [
        { message: Resource.pagging.tenRecords, value: 10 },
        { message: Resource.pagging.twentyRecords, value: 20 },
        { message: Resource.pagging.thirtyRecords, value: 30 },
        { message: Resource.pagging.fiftyRecords, value: 50 },
        { message: Resource.pagging.oneHundredRecords, value: 100 },
      ],
      total: Number,
      itemPerPage: 10,
      curentPage: 1,
      Resource
    };
  },
  methods: {
    /**
     * Hàm xử lí lấy số trang (currentPage) và truyền sang components table để hiện thị
     * @param {*} page: số trang
     */
    onClickHandler(page) {
      this.curentPage = page;
      this.emitter.emit("getCurentPage", this.curentPage);
      // console.log(this.curentPage)
    },

    /**
     * Chọn số lượng bản ghi sẽ hiện trên màn hình
     * @param {*} amountRecord: Số bản ghi hiện trên màn hình
     */
    TotalRecord(amountRecord) {
      this.itemPerPage = amountRecord;
      this.emitter.emit("getPageSize", this.itemPerPage);
      this.curentPage = 1;
      this.emitter.emit("getCurentPage", this.curentPage);
    },
  },

  mounted() {
    /**
     * clickoutside hide pagging
     * Author: Đào Văn Hùng (13/9/2022)
     */
    document.body.addEventListener("click", (e) => {
      const selection = document.querySelector(".selection");
      const btnUp = document.querySelector(".btnUp");
      if (!e.target.contains(selection) && !e.target.contains(btnUp)) {
        this.isShow = false;
      }
    });

    /**
     * Khi chưa có dữ liệu thì tổng số bản ghi sẽ bằng 0
     * Author: Đào Văn Hùng(24/8/2022)
     */
    this.total = 180;

    /**
     * Click arrow pagging sẽ hiện selection
     * Author: Đào Văn Hùng (23/8/2022)
     */
    const SelectText = document.querySelectorAll(".selection li");
    [...SelectText].forEach((item) => {
      item.addEventListener("click", () => {
        this.isShow = false;
        document.querySelector(".number10").textContent = item.textContent;
        document.querySelector(".btnUp").classList.toggle("fa-angle-up");
        item.classList.add("bg-pagging");
      });
    });

    /**
     * Tính tổng số lượng bản ghi
     * @param {*} data : Lấy dữ liệu từ components table
     * Author: Đào Văn Hùng (22/8/2022)
     */
  },
  updated(){
    this.emitter.on("getPageNumber", (data) => {
      this.total = data;
    });
  }
};
</script>
<style>
ul,
ol {
  list-style: none;
}
.bg-pagging {
  background: #2ca01c !important;
  color: #fff !important;
}
.navigation {
  padding: 16px;
  padding-right: 40px;
  background: #fff;
}
/* dropdown*/
.pagging-dropdown {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #bbb;
  width: 200px;
  height: 32px;
  cursor: pointer;
  z-index: 1;
}
.selection {
  position: absolute;
  bottom: 110%;
  border: 1px solid #bbb;
  /* border-bottom: none; */
  width: 200px;
  border-radius: 2px;
  background: #fff;
  z-index: 10;
  /* display: none; */
}
.show-dropdown {
  display: block;
}
.selection ul li {
  padding: 8px 10px;
  cursor: pointer;
}
.selection ul li:hover {
  background-color: rgba(187, 187, 187, 0.267);
  color: #35bf22;
}
.number10 {
  padding-left: 10px;
  cursor: pointer;
}
.pagging-dropdown .icon-dropdown {
  position: absolute;
  right: 0;
  /* top: 50%; */
  /* transform: translateY(-50%); */
  padding: 16px 12px;
  cursor: pointer;
  z-index: 1;
}
.mi-arow-down-rotate {
  transform: rotate(180deg);
}
.pagging-dropdown .btnUp:hover {
  background-color: rgba(187, 187, 187, 0.301);
}
.pagging-number {
  display: flex;
  align-items: center;
  gap: 8px;
}
.pagging-number p {
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #bbb;
}
.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pagging-right {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

/* pagging */
.btn {
  height: 25px;
  width: 25px;
  border: none;
  margin-inline: 5px;
  cursor: pointer;
  font-size: 13px;
  background: none;
}
.back-btn,
.next-btn {
  font-family: notosans;
  font-size: 13px;
  background: none;
}
.back-btn {
  margin-right: 10px;
}
/* .next-btn {
    background-color: red;
  } */
.btn-active {
  border: 1px solid #bbb;
  font-weight: bold;
  /* color: white; */
}
.icon-dropdown {
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: red; */
}
.icon-dropdown .btnUp {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
>
