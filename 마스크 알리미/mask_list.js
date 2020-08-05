let url = new URL(window.location.href);
let keywordParam = url.searchParams.get("keyword");

var ps = new kakao.maps.services.Places(); 

// 마스크 데이터 API 주소
let base_mask_url = "https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?";

let back_btn = document.querySelector(".back-btn-wrapper");

back_btn.addEventListener("click", () => {
    window.history.back();
})


if(keywordParam){
    keywordSearch(keywordParam);
}else{
    alert("검색어가 없습니다. 뒤로 돌아갑니다.");
    window.history.back();
}

function keywordSearch(keyword){
    ps.keywordSearch(keyword, keywordSearchCallback);
}

async function keywordSearchCallback (data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {
        getMaskDataAndDrawTable(data[0].y, data[0].x);
    } else{
        alert("장소 검색에 실패했습니다.");
        document.querySelector(".loader-wrapper").style.display= "none";
    }
}

async function getMaskDataAndDrawTable(lat,lng){
    document.querySelector(".loader-wrapper").style.display= "flex";
    const maskData = await getMaskData(lat,lng).then((storeData) => {
        document.querySelector(".loader-wrapper").style.display= "none";
        return storeData;
    })

    // 마커를 그리는 부분
    let idx = 0;
    let result = "";
    for(const data of maskData) {
        let color;
        if(data.remain_stat ==='plenty'){
            color = "green";
        } else if(data.remain_stat === 'some') {
            color = "yellow";
        } else if(data.remain_stat === 'few') {
            color = "red";
        } else {
            color = "grey";
        } 
        result += `<tr>
                <th scope="row>${idx++}</th>
                <td><a href="https://map.kakao.com/link/to/${data.name},${data.lat},${data.lng}">${data.name}</a></td>
                <td><span class="dot ${color}"></span></td>
                <td>입고 등록 시간 : ${data.stock_at}</td>
                <td>업데이트 시간 : ${data.created_at}</td>       
             </tr>`
    }
    document.querySelector(".result").innerHTML = result;
} 

async function getMaskData(lat, lng, m = 2000){
    let request_url = `${base_mask_url}lat=${lat}&lng=${lng}&m=${m}`;
    let response = await fetch(request_url);
    let result = await response.json();
    console.log(result.stores);
    return result.stores;
}