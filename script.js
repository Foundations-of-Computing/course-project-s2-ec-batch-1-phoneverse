const phones = {
    Apple: [
      {
        name: "iPhone 15",
        image: "images/iphone15.png",
        displays: "15.54 cm / 6.1″ (diagonal) all-screen OLED display",
        battery: "20 hours",
        camera: "Dual-camera system (48MP Main and 12MP Ultra Wide)",
        storage: "128GB / 256GB / 512GB",
        price: "Rs. 79,900",
        rating: "4.8/5",
      },
      {
        name: "iPhone 14",
        image: "images/iphone14.png",
        displays: "15.40 cm / 6.1″ (diagonal) all-screen OLED display",
        battery: "20 hours",
        camera: "Dual 12MP camera system (Main and Ultra Wide)",
        storage: "128GB / 256GB / 512GB",
        price: "Rs. 79,900",
        rating: "4.8/5",
      },
      {
        name: "iPhone 14 Pro Max",
        image: "images/iphone14pro.png",
        displays: "17.00 cm / 6.7″ (diagonal) all-screen OLED display",
        battery: "29 hours",
        camera:
          "Pro camera system (48MP Main, 12MP Ultra Wide and 12MP Telephoto)",
        storage: "128GB / 256GB / 512GB / 1TB",
        price: "Rs. 1,19,900",
        rating: "4.6/5",
      },
    ],
    Samsung: [
      {
        name: "Galaxy S23",
        image: "images/galaxys23.png",
        displays: "15.49 cm (6.1 inch) Full HD+ Display",
        battery: "3900 mAh Lithium Ion Battery",
        camera: "50MP + 10MP + 12MP | 12MP Front Camera",
        storage: "8 GB RAM | 128 GB ROM",
        price: "Rs. ₹95,999",
        rating: "4.6/5",
      },
      ,
      {
        name: "Galaxy Z Flip5",
        image: "images/galaxyzflip5.png",
        displays: "Snapdragon 8 Gen 2, Foldable",
        battery: "29 hours",
        camera:
          "Pro camera system (48MP Main, 12MP Ultra Wide and 12MP Telephoto)",
        storage: "128GB / 256GB / 512GB / 1TB",
        price: "Rs. 1,19,900",
        rating: "4.6/5",
      },
      ,
      {
        name: "Galaxy A54",
        image: "images/galaxya54.png",
        displays: "Exynos 1380, Octa Core Processor",
        battery: "5000 mAh Battery",
        camera: "50MP + 12MP + 5MP | 32MP Front Camera",
        storage: "8 GB RAM | 256 GB ROM | Expandable Upto 1 TB",
        price: "₹45,999",
        rating: "4.3/5",
      },
      ,
    ],
    Motorola: [
      {
        name: "Moto Edge 40",
        image: "images/t1.png",
        displays:
          "16.51 cm (6.5 inch) Full HD+ Display,Dimensity 8020 Processor",
        battery: "4400 mAh Battery",
        camera: "50MP + 13MP | 32MP Front Camera",
        storage: "8 GB RAM | 256 GB ROM",
        price: "₹34,999",
        rating: "4.3/5",
      },
      {
        name: "Moto G73",
        image: "images/t2.png",
        displays:
          "16.51 cm (6.5 inch) Full HD+ Display,Mediatek Dimensity 930 Processor",
        battery: "5000 mAh Battery",
        camera: "50MP + 8MP | 16MP Front Camera",
        storage: "8 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
        price: "₹21,999",
        rating: "4/5",
      },
      {
        name: "Moto E13",
        image: "images/t3.png",
        displays: "16.51 cm (6.5 inch) HD+ Display,Unisoc T606 Processor",
        battery: "5000 mAh Battery",
        camera: "13MP Rear Camera | 5MP Front Camera",
        storage: "4 GB RAM | 64 GB ROM | Expandable Upto 1 TB",
        price: "₹10,999",
        rating: "4.1/5",
      },
    ],
  };
  function showphones(brand) {
    const phoneList = phones[brand] || [];
    document.getElementById("phoneList").innerHTML =
      `<h2>${brand} Phones</h2><div class='phonecontainer'>` +
      phoneList
        .map(
          (phone, index) => `
                        <div class='phonecard' onclick="showphonedetails('${brand}', ${index})">
                            <img src="${phone.image}" alt="${phone.name}">
                            <h3>${phone.name}</h3>
                            <p>${phone.displays.split(",")[0]}</p>
                        </div>
                    `
        )
        .join("") +
      `</div>`;

    document.getElementById("phoneDetails").style.display = "none";
  }

  function showphonedetails(brand, index) {
    const phone = phones[brand][index];

    document.getElementById("popuptitle").textContent = phone.name;
    document.getElementById("popupimage").src = phone.image;
    document.getElementById("popupdisplays").textContent = phone.displays;
    document.getElementById("popupbattery").textContent = phone.battery;
    document.getElementById("popupcamera").textContent = phone.camera;
    document.getElementById("popupstorage").textContent = phone.storage;
    document.getElementById("popupprice").textContent = phone.price;
    document.getElementById("popuprating").textContent = phone.rating;

    document.getElementById("phonePopup").style.display = "block";
  }
  function closePopup() {
    document.getElementById("phonePopup").style.display = "none";
  }