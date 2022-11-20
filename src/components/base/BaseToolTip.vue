<template>
  <div :class="[style ? 'identityToolTip' : '']" class="baseToolTip" role="tooltip">
    <div
      :data-tooltip="content"
      @mouseover="mouseover"
      @mouseout="mouseout"
      class="navbar-item__link"
    >
      <span>{{ name }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "tooTip",
  props: ["name", "content", "icon", "isShow", "style"],
  methods: {
    /**
     * Hàm xử lý khi di chuột đến navbar menu sẽ hiện tooltip
     * @param {*} e: tham số truyền vào là event
     * Author: Đào Văn Hùng (1/10/2022)
     */
    mouseover(e) {
      try {
        const title = e.target.dataset.tooltip;
        const tooltipDiv = document.createElement("div");
        tooltipDiv.className = "contentToolTip";
        tooltipDiv.textContent = title;
        e.target.appendChild(tooltipDiv);
        const cords = e.target.getBoundingClientRect();
        const { top, left } = cords;
        tooltipDiv.style.left = `${left + 80}px`;
        tooltipDiv.style.top = `${top + 20}px`;
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Hàm xử lý khi dời chuột khỏi navbar menu sẽ ẩn tooltip
     * @param {*} e: tham số truyền vào là event
     * Author: Đào Văn Hùng (1/10/2022)
     */
    mouseout(e) {
      try {
        const tooltip = e.target.querySelector(".contentToolTip");
        if (!tooltip) return;
        tooltip.parentNode.removeChild(tooltip);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style>
.contentToolTip {
  position: fixed;
  transform: translateX(-50%);
  background-color: #5b5d64;
  padding: 5px 10px;
  border-radius: 2px;
  display: block;
  font-size: 12px;
  color: white;
  font-size: 12px;
  z-index: 10;
}
.identityToolTip {
  margin-bottom: 4px;
  font-weight: bold;
  font-size: 12px;
}
</style>
