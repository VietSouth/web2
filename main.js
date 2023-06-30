let header = document.querySelector('header');
let homeWrapper = document.getElementById('wrapperHome')
let navigation = document.querySelector('nav')
let miniMenu = document.getElementById('header-menu')
window.onscroll = function(){
    if(window.scrollY>0){
        header.style.background = 'black';
    }
    else{
        header.style.background = 'transparent'
    }
}

function showMiniMenu(){
    navigation.classList.toggle('active')
}

miniMenu.onclick = function(){
    navigation.classList.toggle('active')
}

function removeActive(array){
    array.forEach(element => {
        element.classList.remove('active')
    });
}

// show kinds item
function addOffKindList(){
    listKinds.forEach(listKind => {
        listKind.classList.add('off')
    });
}
let kindsItems = document.querySelectorAll('.index-branding-content>ul>li')
let listKinds = document.querySelectorAll('.kind-item-list')
kindsItems.forEach((kindsItem,index) => {
    kindsItem.onclick = function(){
        removeActive(kindsItems)
        kindsItem.classList.add('active');
        addOffKindList()
        listKinds[index].classList.remove('off');
    }
});
// highlightsBanner
let bannerWrapper = document.querySelector('.sliders')
let sliders = document.querySelectorAll('.slide')
let sliderBtns = document.querySelectorAll('#highlights-banner button')
let i = 0
let highlightsPage = 
setInterval(() => {
    removeActive(sliders)
    i++
    if(i>sliders.length-1){
        i = 0
    }
    sliders[i].classList.add('active')
}, 5000);

sliderBtns.forEach(sliderBtn => {
    sliderBtn.onclick = function(){
        if(sliderBtn.classList.contains('next')){
            i++
            if(i>sliders.length-1){
                i = 0
            }
            removeActive(sliders)
            sliders[i].classList.add('active')
        }
        else{
            i--
            if(i<0){
                i = sliders.length - 1
            }
            removeActive(sliders)
            sliders[i].classList.add('active')
        }
    }
});
// quotes
let quote = document.querySelector('#quote p span')
let listQuotes = [
    "Hãy nói với bản thân mỗi ngày một lần, tôi thực sự rất tốt.",
    "Hạnh phúc nằm ở hiện tại, ngay trong chính con người bạn",
    "Khoản đầu tư cho bản thân bạn luôn luôn là khoản đầu tư sinh lời nhiều nhất!",
    "Khi bạn thực sự mong muốn điều gì thì Vũ Trụ sẽ chung tay góp sức mang điều đó đến với bạn!",
    "Có những ngày mưa để ta biết quý trọng những ngày nắng",
    "Có 2 loại ánh sáng đẹp nhất trên đời, 1 là của mặt trời, 2 là dáng vẻ nỗ lực của chính bạn!",
    "Hãy yêu lấy chính mình như cách bạn yêu người khác",
    "Hạnh phúc không phải là đích đến mà là hành trình ta đạt được điều mà mình mong muốn",
    "Hãy trân trọng nhau khi có thể vì hợp tan là điều tất yếu của cuộc sống, dù theo cách này hay cách khác"
];
let quoteIndex = 0
setInterval(() => {
    ++quoteIndex
    if(quoteIndex>listQuotes.length-1){
        quoteIndex = 0
    }
    quote.innerHTML = listQuotes[quoteIndex];
}, 60000);
// products
let nameJordanJordanLow = ["Jordan 1Low Smoke Grey","Jordan 1Low Concord","Jordan 1Low Panda","Smoke Grey V2","Smoke Grey V3","Smoke Grey V4","Vintage Grey","Jordan 1Low Light Madder Root",
"Jordan 1Low AllWhite","Jordan 1Low Metalic Gold","Jordan 1Low Varsity Red","Jordan 1Low University Red","Jordan 1Low Ice Blue","Jordan 1Low Marina Blue","Jordan 1Low Grey Blue","Jordan 1Low Siren Blue","Jordan 1Low Dark Teal",
"Jordan 1Low Canyon","Jordan 1Low Wolf Grey","Jordan 1Low Mystic Green","Jordan 1Low Ice Blue","Jordan 1Low Homage","Jordan 1Low Berry","Jordan 1Low Elevate University Blue","Jordan 1Low True Blue","Jordan 1Low Elevate Lucky Green",
"Jordan 1Low Bred Toe","Jordan 1Low Artic Punch","Jordan 1Low Gold Toe","Jordan 1Low Emerald Green"];

let nameJordanMid = ["Jordan 1High Volt Gold","Jordan 1High Zoom Pink Oxford","Jordan 1High Heritage","Jordan 1 Mid Metalic Gold Obsidian","Jordan 1 Mid Diamond","Jordan 1 Mid Smoke V1","Jordan 1 Mid Smoke V3","Jordan 1 Mid Grey Fog",
"Jordan 1High Steal","Jordan 1 Mid Iron Ore","Jordan 1High Atmosphere","Jordan 1 Mid Ice Cream","Jordan 1 Mid Canyon","Jordan 1 Mid Gymred Black","Jordan 1 Mid Black Toe","Jordan 1 Mid White Toe","Jordan 1 Mid Bred Toe",
"Jordan 1 Mid AllWhite","Jordan 1 Mid Wolf Grey","Jordan 1 Mid Shadow","Jordan 1 Mid Chile","Jordan 1 Mid Union Blue","Jordan 1 Mid Tuft Orange","Jordan 1 Mid Signal Blue","Jordan 1 Mid Royal Blue","Jordan 1 Mid Hyper Royal",
"Jordan 1 Mid Pink SE","Jordan 1 Mid Fitness Red","Jordan 1 Mid Ice Blue","Jordan 1High Heirlom","Jordan 1 Mid French Blue","Jordan 1 Mid School","Jordan 1 Mid Letherman","Jordan 1 Mid University Gold"];

let nameNikeBlazer = ["Nike Waffle One","Court Legacy","Blazer Mid 77 Jumbo","Blazer Mid 77 Vintage","Blazer Low Jumbo Blue","Blazer Low Jumbo Orange","Blazer Low 77 OG","Blazer Low 77 Vintage","Blazer Mid 77 infinite"]

let nameNikeAF1 = ["AF1 AllWhite","AF1 Fontanka","AF1 Hangtag","AF1 Black Swoosh","AF1 40th Black White","AF1 40th Green","AF1 By You Baby Blue",
"AF1 By You Baby Blue V2","AF1 By You Vintage V2","AF1 By You Sail Coals","AF1 Guava Ice","AF1 By You Light Smoke","AF1 By You SBB","AF1 Shadow Toe V2",
"AF1 Love Letter","AF1 Green Toe","AF1 By You Chicago","AF1 By You Lucky Coin","AF1 By You Team Orange","AF1 By You Yellow Orche","AF1 By You Halley Quinn",
"AF1 By You Fragment","AF1 By You Panda","AF1 By You Panda Gum","AF1 By You Baby Blue V3"];

let nameNikeDunk = ["Nike Dunk High Cashmere","Nike Dunk High Pink Oxford","Nike Dunk Smoke","Nike Dunk High Panda","Nike Dunk High Iron","Nike Dunk High Yellow Black",
"Dunk Havest Moon","Dunk Pearl","Dunk Photon","Dunk Panda Retro","Dunk Disrupt Malachite","Dunk Low Wolf Grey","Dunk Low Game Royal","Dunk Low Sashiko","Kwondo GD"];

let nameAdidasShoes = ["AdiFOM Q","AdiFOM HQ","AdiFOM Super Star Black","AdiFOM Super Star White","Adidas Mule","Adidas Mule","Adidas Mule","Adidas Mule",
"AdiFOM Q Black","Adidas Ultraboost 22","Adidas Ultraboost 22","Adidas Samba classic white","Adidas Samba classic black","Adidas Samba OG","Yeezy 350 MonoIce","Acis móc đen","Acis móc nâu","Converse Motion"];

let nameNewBalanceShoes = ["NightWatch Green","Running Navi","NB550 Green","NB530 White Light Gold Metalic","NB550 Salt","NB530 Steal Blue",
"NB550 White Purple","NB530 Steal Grey","NB550 Syracuse","NB302","NB550 White Pink","NB Procourt Green","NB550 LWT","NB Procourt Yellow","NB550 WTO",
"NB Procourt Navi","NB5470 Light BLue","NB550 Red","NB550 Grey"];

let nameAdidasSlide = ["Yeezy Slide Azure","Yeezy Slide Onyx","Yeezy Slide Flax","Adilete 22","Adilete 22","Adilete 22","Adilete 22","Adilete 22",
"Adilete 22","Adilete 22"];

let nameTeeDrew = ["Mascot OffWhite","Mascot Orange","Navi","Mascot Pacific","White","Mascot Black","Mascot Brown","Mascot Mageta","Mascot Lime",
"Mascot Royal","Mascot Cream","Burgundy","Golden Yellow","Faded Black","Navi Pinstripe","Mascot Dark Navi","Wash Grape","Mascot Lavender","Bowie Pacific",
"Secret Orange","Dino Pastel Yellow","Mascot Tee Camo","Flame Dusty","Mascot Lilac","Love-Drew Lilac","Daisy-Royal","Mascot Tee Grey","Mascot Tee Hot Pink",
"Jackie Hoa","Secret Offwhite","Theodore Valentine"];

let linkNewEraImg = ["ne1","ne2","ne4","ne5","ne6","ne7","ne8","ne12","ne13","ne14","ne15","ne16","ne17","ne18","ne19",
"ne20","ne21","ne22","ne23"
];

let linkNewEra = [
    
]
linkNewEraImg.forEach((element,index) => {
    linkNewEra[index] = `/assets/img/${element}.jpg`
});


let pageNumberIdList = document.querySelectorAll('.product-page-list ul li')

pageNumberIdList.forEach(pageNumberId => {
    pageNumberId.onclick = function(){
        removeActive(pageNumberIdList)
        pageNumberId.classList.add('active')
    }
});

let productSelects = document.querySelectorAll('.popular-product-wrapper .list-product li[main-product]')
let productsPage = document.querySelector("ul.list-products");

function importProduct(array){
    array.forEach(element => {
        productsPage.innerHTML += `
        <li style="background-image: url(${element});">
            <div class="product-info">
                <button><a href="https://www.facebook.com/profile.php?id=100048029414776">Facebook</a></button>
            </div>
         </li>
        `
    });
}

productSelects.forEach(productSelect => {
    productSelect.onclick = function(){
        importProduct(linkNewEra)
    }
});







