var xiaokang = new xkTool();

// 添加图片，背景图片会在这里随机选取一个设置为banner
xiaokang.bannerList = [
    "https://cdn.jsdelivr.net/gh/yunwanjia-cloud/banner/25-min.jpg",
    "https://cdn.jsdelivr.net/gh/yunwanjia-cloud/banner/23-min.jpg",
    "https://cdn.jsdelivr.net/gh/yunwanjia-cloud/banner/24-min.jpg",
    "https://cdn.jsdelivr.net/gh/yunwanjia-cloud/banner/2-min.jpg",
    "https://cdn.jsdelivr.net/gh/yunwanjia-cloud/banner/27-min.jpg",
];
xiaokang.randomBanner(true); // true为使用滤镜，不写或者false为不使用滤镜

// 设置随机背景的图片
xiaokang.imgList = [
  //  "https://ae01.alicdn.com/kf/H21b5f6b8496141a1979a33666e1074d9x.jpg",
    "https://cdn.jsdelivr.net/gh/yunwanjia-cloud/banner/0-min.jpg",
    "https://cdn.jsdelivr.net/gh/yunwanjia-cloud/banner/1-min.jpg",
    "https://cdn.jsdelivr.net/gh/yunwanjia-cloud/banner/2-min.jpg",
  ];
  // 调用随机背景
xiaokang.randomBg();

xiaokang.footFish();

var card_category_list = document.getElementsByClassName(
    "card-category-list child"
);
var item = document.getElementsByClassName("card-category-list-item");
function toggle(t) {
    var display = t.parentElement.nextSibling.style.display;
    if (display == "none") {
        t.parentElement.nextSibling.style.display = "block";
        t.parentElement.nextSibling.style.height = "100%";
        t.className = t.className.replace("fa-chevron-up", "fa-chevron-down");
    } else {
        t.parentElement.nextSibling.style.display = "none";
        t.className = t.className.replace("fa-chevron-down", "fa-chevron-up");
    }
}

for (var i = 0; i < card_category_list.length; i++) {
    card_category_list[i].style.display = "none";
    card_category_list[i].style.transition = "all 1s";
    card_category_list[i].previousSibling.innerHTML +=
        '<i class="fa fa-chevron-up menus-expand  menus-closed" aria-hidden="true" style="margin-left:20px;" onclick="toggle(this)"></i>';
}