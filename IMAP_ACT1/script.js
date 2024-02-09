document.addEventListener("DOMContentLoaded", function() {
    var regionInfo = document.getElementById("regionInfo");
    
    document.querySelector("map[name='philippinesmap']").addEventListener("click", function(event) {
        event.preventDefault();
        var target = event.target;
        if (target.tagName.toLowerCase() === "area") {
        var region = target.getAttribute("data-region");
        if (region) {
            displayRegionInfo(region);
            }
        }
    });

    function displayRegionInfo(region) {
        var regionInfoText;
        var regionInfoImage;
    
        switch (region) {
            case "bolinao":
                regionInfoText = "Bolinao is a town on the west coast of Luzon Island, in the northern Philippines.<br>The Spanish colonial St. James the Great Parish Church dates from the 1600s, and has an exterior made of black coral stones.<br> The University of the Philippines' Bolinao Marine Laboratory supports the conservation of giant clams and other sea life.<br> Atop Punta Piedra Point, the 1903 Cape Bolinao Lighthouse overlooks white-sand Patar Beach.";
                regionInfoImage = "bolinao.png";
                var imageWidth = "350px";
                var imageHeight = "450px";
                break;
            case "manila":
                regionInfoText = "Manila, the capital of the Philippines, is a densely populated bayside city on the island of Luzon, which mixes Spanish colonial architecture with modern skyscrapers.<br> Intramuros, a walled city in colonial times, is the heart of Old Manila.<br> It is home to the baroque 16th-century San Agustin Church as well as Fort Santiago, a storied citadel and former military prison.";
                regionInfoImage = "manila.png"; 
                var imageWidth = "350px";
                var imageHeight = "550px";
                break;
            case "angeles":
                regionInfoText = "Angeles is a city in the Philippines. Dotting the Santo Rosario District are period buildings, such as the colonial Holy Rosary Church, built in the late 19th century.<br> Housed in a restored 1920s building, the Museo Ning Angeles explores local history. City landmarks include the opulent 1890s Pamintuan Mansion and the stone Founders' Residence, built in 1824.<br> West of the city is the active volcano Mount Pinatubo.";
                regionInfoImage = "angeles.png";
                var imageWidth = "350px";
                var imageHeight = "550px";
                break;
            case "leyte":
                regionInfoText = "Leyte, officially the Municipality of Leyte, is a 4th class municipality in the province of Leyte, Philippines.<br> According to the 2020 census, it has a population of 40,397 people.";
                regionInfoImage = "leyte.png";
                var imageWidth = "350px";
                var imageHeight = "550px";
                break;
            case "bacolod city":
                regionInfoText = "Bacolod is a city on the northwest coast of Negros Island in the Philippines. The 19th-century San Sebastian Cathedral stands beside Bacolod Public Plaza.<br> Its original bells are on display in the churchyard outside. The Dizon-Ramos Museum is a 1950s house packed with memorabilia and photographs of the prominent family that once lived there.<br> The Capitol Park and Lagoon has a lake and 2 golden water buffalo statues.";
                regionInfoImage = "bacolod.png";
                var imageWidth = "350px";
                var imageHeight = "550px";
                break;
            case "iloilo city":
                regionInfoText = "Iloilo City is on Panay Island in the Philippines. It's known for its Spanish colonial churches and old houses.<br> On Jaro Plaza, Jaro Cathedral has a shrine to the local patron saint, Our Lady of the Candles. Nelly’s Garden is an iconic 1920s mansion. Museo Iloilo explores local history.<br> The Iloilo Esplanade is a pathway along the Iloilo River. To the west, the 18th-century Miagao Church has an ornate sandstone facade.";
                regionInfoImage = "iloilo.png";
                var imageWidth = "350px";
                var imageHeight = "450px";
                break;
            case "cagayan de oro":
                regionInfoText = "Cagayan de Oro, officially the City of Cagayan de Oro, is a 1st class highly urbanized city in the region of Northern Mindanao, Philippines.<br> It is the capital of the province of Misamis Oriental where it is geographically situated but governed administratively independent from the provincial government.";
                regionInfoImage = "cagayan de oro.png";
                var imageWidth = "350px";
                var imageHeight = "450px";
                break;
            case "davao city":
                regionInfoText = "Davao City, on the southern Philippine island of Mindanao, is a coastal commercial center near 2,954m-high Mount Apo, the country’s highest peak.<br> In the city center, People’s Park is known for its colorful indigenous sculptures and lighted fountains. It's also home to Durian Dome, named after the pungent, spiky fruit that grows in abundance on Mindanao.<br> The Davao River cuts through the city.";
                regionInfoImage = "davao.png";
                var imageWidth = "350px";
                var imageHeight = "450px";
                break;
            case "general santos city":
                regionInfoText = "General Santos, officially the City of General Santos, and abbreviated as GenSan, is a 1st class highly urbanized city in the region of Soccsksargen, Philippines.<br> According to the 2020 census, it has a population of 697,315 people.";
                regionInfoImage = "general santos city.png";
                var imageWidth = "350px";
                var imageHeight = "450px";
                break;
            default:
                regionInfoText = "Region information not available.";
                break;
        }
    
        var regionInfoHTML = "<h3>Region Information:</h3><p>" + regionInfoText + "</p>";
        if (regionInfoImage) {
        regionInfoHTML += "<img src='" + regionInfoImage + "' alt='Region Image' style='width: " + imageWidth + "; height: " + imageHeight + ";'>";
        }
    
        regionInfo.innerHTML = regionInfoHTML;
    }
});
