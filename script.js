
const provinces = {
    "Hậu Giang": ["TP. Vị Thanh", "Huyện Phụng Hiệp", "Huyện Châu Thành A", "Huyện Vị Thuỷ", "Huyện Châu Thành","Huyện Long Mỹ ","Thành phố Ngã Bảy"],
    "Cần Thơ": ["Ninh Kiều", "Bình Thủy", "Cái Răng", "Ô Môn", "Thốt Nốt"],
};


const form = document.getElementById("dataForm");
const displayData = document.getElementById("displayData");
const provinceDropdown = document.getElementById("province");
const districtDropdown = document.getElementById("district");


for (const province in provinces) {
    const option = document.createElement("option");
    option.value = province;
    option.textContent = province;
    provinceDropdown.appendChild(option);
}

function populateDistricts() {
    const selectedProvince = provinceDropdown.value;
    districtDropdown.innerHTML = "<option value='' disabled selected>Chọn Quận / Huyện</option>";
    const districts = provinces[selectedProvince];
    for (const district of districts) {
        const option = document.createElement("option");
        option.value = district;
        option.textContent = district;
        districtDropdown.appendChild(option);
    }
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const selectedProvince = provinceDropdown.value;
    const selectedDistrict = districtDropdown.value;

    displayData.innerHTML = `<strong>Số Điện Thoại:</strong> ${phone}<br>`;
    displayData.innerHTML += `<strong>Email:</strong> ${email}<br>`;
    displayData.innerHTML += `<strong>Tỉnh / Thành Phố:</strong> ${selectedProvince}<br>`;
    displayData.innerHTML += `<strong>Quận / Huyện:</strong> ${selectedDistrict}`;
});
