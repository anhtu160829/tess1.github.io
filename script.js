let API_URL = "";
let REFRESH_TIME = 5000;

// Load config.json
fetch("config.json")
    .then(res => res.json())
    .then(config => {
        API_URL = config.api_url;
        REFRESH_TIME = config.refresh_time;
        loadData();
        setInterval(loadData, REFRESH_TIME);
    });

// Lấy dữ liệu từ API
async function loadData() {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();

        document.getElementById("phien").innerText = data.phien ?? "--";
        document.getElementById("xx1").innerText = data.xuc_xac_1 ?? "--";
        document.getElementById("xx2").innerText = data.xuc_xac_2 ?? "--";
        document.getElementById("xx3").innerText = data.xuc_xac_3 ?? "--";
        document.getElementById("tong").innerText = data.tong ?? "--";
        document.getElementById("ketqua").innerText = data.ket_qua ?? "--";
        document.getElementById("phien_hien_tai").innerText = data.phien_hien_tai ?? "--";
        document.getElementById("du_doan").innerText = data.du_doan ?? "--";

        document.getElementById("status").innerText =
            "Cập nhật lúc: " + new Date().toLocaleTimeString();
    } catch (error) {
        document.getElementById("status").innerText = "Lỗi tải dữ liệu API";
        console.error(error);
    }
}
