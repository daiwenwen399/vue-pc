<template>
    <div class="spec-preview">
        <img :src="imgUrl" />
        <div class="event" @mousemove="move" ref="event"></div>
        <div class="big">
            <img :src="bigImgUrl" ref="bigimg" />
        </div>
        <!-- 遮罩区 -->
        <div class="mask" ref="mask"></div>
    </div>
</template>

<script>
export default {
    name: "Zoom",
    props: {
        imgUrl: String,
        bigImgUrl: String,
    },
    methods: {
        move(e) {
            // 获得鼠标与盒子边框的距离
            const { offsetX, offsetY } = e;
            // 获取区域
            const maskDiv = this.$refs.mask;
            const eventDiv = this.$refs.event;
            const bigimgDiv = this.$refs.bigimg;

            // 获取偏移量
            // 距离左边的距离=鼠标离左边的距离 - 蒙版区域的宽/2
            let posW = offsetX - maskDiv.offsetWidth / 2;
            let posY = offsetY - maskDiv.offsetHeight / 2;
            // 判断临界值
            if (posW <= 0) {
                posW = 0;
            } else if (posW >= eventDiv.offsetWidth - maskDiv.offsetWidth) {
                posW = eventDiv.offsetWidth - maskDiv.offsetWidth;
            }
            if (posY <= 0) {
                posY = 0;
            } else if (posY >= eventDiv.offsetHeight - maskDiv.offsetHeight) {
                posY = eventDiv.offsetHeight - maskDiv.offsetHeight;
            }
            // 将偏移量赋值给蒙版区域
            maskDiv.style.left = posW + "px";
            maskDiv.style.top = posY + "px";
            // 将偏移量赋值给大图区域
            bigimgDiv.style.left = -posW * 2 + "px";
            bigimgDiv.style.top = -posY * 2 + "px";
        },
    },
};
</script>

<style lang="less">
.spec-preview {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;

    img {
        width: 100%;
        height: 100%;
    }

    .event {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 998;
    }

    .mask {
        width: 50%;
        height: 50%;
        background-color: rgba(0, 255, 0, 0.3);
        position: absolute;
        left: 0;
        top: 0;
        display: none;
    }

    .big {
        width: 100%;
        height: 100%;
        position: absolute;
        top: -1px;
        left: 100%;
        border: 1px solid #aaa;
        overflow: hidden;
        z-index: 998;
        display: none;
        background: white;

        img {
            width: 200%;
            max-width: 200%;
            height: 200%;
            position: absolute;
            left: 0;
            top: 0;
        }
    }

    .event:hover ~ .mask,
    .event:hover ~ .big {
        display: block;
    }
}
</style>