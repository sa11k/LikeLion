let url = new URL(window.location.href);
let keywordParam = url.searchParams.get("keyword");

var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(37.5172, 127.0473), //지도의 중심좌표.
    level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
var ps = new kakao.maps.services.Places(); 

map.setMaxLevel(5);

// 마스크 데이터 API 주소
let base_mask_url = "https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?";

//맵이 만들어졌을 때도 마스크 데이터를 불러와 핀 그리기
let mapCenter = map.getCenter();
let mapCenterOld = mapcenter;

let isFirst = true;

if(keywordParam){
    keywordSearch(keywordParam);
    getMaskDataAndDrawMarker(mapCenter.Ha, mapCenter.Ga);
}else{
    getMaskDataAndDrawMarker(mapCenter.Ha, mapCenter.Ga);
}

// 버튼을 누르거나 Enter 눌렀을 때 검색이 되도록 만들기
let search_btn = document.querySelector(".search-btn");
let search_bar = document.querySelector("#search-bar");
let back_btn = document.querySelector(".back-btn-wrapper");
console.log(search_bar);
console.log(search_btn);

search_btn.addEventListener("click", () => {
    let keyword = search_bar.value;
    if(keyword) {
        console.log(keyword + " 검색하셨습니다. ");
        keywordSearch(keyword);
    } else{
        alert("검색어를 입력해주세요.");
    }
});

back_btn.addEventListener("click", () => {
    window.history.back();
});

search_bar.addEventListener("keyup", () => {
    // keycode 13 = Enter Key
    if(event.keyCode === 13){
        search_btn.click();
    }
});

// 지도가 이동, 확대, 축소로 인해 중심좌표가 변경되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
kakao.maps.event.addListener(map, 'center_changed', function() {
    mapCenter = map.getCenter();

    let X = (Math.cos(mapCenter.Ha) * 6400 * 2 * 3.14 / 360) * Math.abs(mapCenter.Ga - mapCenterOld.Ga)
    let Y = 11 * Math.abs(mapCenter.Ha - mapCenterOld.Ha);
    let D = Math.sqrt(Math.pow(X, 2) + Math.pow(Y, 2));

    // 일정 거리만큼 Center가 변경될 시에만 마스크 데이터를 볼러오도록 함
    if(isFirst || D >= 2){
        isFirst = false;
        mapCenterOld = mapCenter;
        getMaskDataAndDrawMarker(mapCenter.Ha, mapCenter.Ga);
    }
});

function keywordSearch(keyword){
    ps.keywordSearch(keyword, keywordSearchCallback);
}

async function keywordSearchCallback (data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {
        const center = new kakao.maps.LatLng(data[0].y, data[0].x);
        map.setCenter(center);
    } else{
        alert("장소 검색에 실패했습니다.");
        document.querySelector(".loader-wrapper").style.display= "none";
    }
}

async function getMaskDataAndDrawMarker(lat,lng){
    document.querySelector(".loader-wrapper").style.display= "flex";
    const maskData = await getMaskData(lat,lng).then((storeData) => {
        document.querySelector(".loader-wrapper").style.display= "none";
        return storeData;
    })

    // 마커를 그리는 부분
    for(const data of maskData) {
       drawMaker(data);
    }
}

async function getMaskData(lat, lng, m = 2000){
    let request_url = `${base_mask_url}lat=${lat}&lng=${lng}&m=${m}`;
    let response = await fetch(request_url);
    let result = await response.json();
    console.log(result.stores);
    return result.stores;
}


// 지도에 마커를 표시하는 함수
function drawMaker(maskData) {
    const image = {
        green:"./green.png",
        yellow:"./yellow.png",
        red:"./red.png",
        grey:"./grey.png",
    }

    const imageSize = new kakao.maps.Size(32, 32);
    const imageOption = { offset : new kakao.maps.Point(15, 20) };

    let imageSrc;
    if(maskData.remain_stat ==='plenty'){
        imageSrc = image.green;
    } else if(maskData.remain_stat === 'some') {
        imageSrc = image.yellow;
    } else if(maskData.remain_stat === 'few') {
        imageSrc = image.red;
    } else {
        imageSrc = image.grey;
    } 

    // 마커 정보를 담은 마커 이미지를 생성
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

    // 마커를 생성하고 지도에 표시
    var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(maskData.lat, maskData.lng),
        image: markerImage,
        clickable: true,
    });

    let infoHTML = `<div class="info-window"><h3>${maskData.name}</h3><a href="https://map.kakao.com/link/to/${maskData.name},${maskData.lat},${maskData.lng}">길찾기</a><p>입고 등록 시간 : ${maskData.stock_at}</p> <p>업데이트 시간 : ${maskData.created_at}</p></div>`;

    var infowindow = new kakao.maps.InfoWindow({
        content : infoHTML,
        removable : true,
    });

    kakao.maps.event.addListener(marker, 'click', function() {
        // 마커 위에 인포윈도우를 표시
        infowindow.open(map, marker);  
  });
}