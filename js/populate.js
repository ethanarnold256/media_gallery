cities = [
    {
        name: "Monaco",
        coordinates: "43° 43′ 52″ N, 7° 25′ 12″ E",
        country: "monaco",
        description: "A beautiful European city-state on the French Riviera. Best known for the historic Grand Prix race, as well as casinos."
    },
    {
        name: "San Marino",
        coordinates: "43° 56′ N, 12° 26′ E",
        country: "sanmarino",
        description: "A land-locked city-state within Italy. Tourism is the largest industry, as everybody comes to see Guaita, a beautiful castle upon a hill."
    },
    {
        name: "Nice",
        coordinates: "43° 42′ 12.24″ N, 7° 15′ 58.68″ E",
        country: "france",
        description: "A French city on the Riviera. Iconic terracotta-roofed buildings populate the coastal road along a beautiful Mediterranean beach."
    },
    {
        name: "Dubrovnik",
        coordinates: "42° 38′ N, 18° 6′ E",
        country: "croatia",
        description: "A Croatian city on the northern coast of the Mediterranean sea. Croatia's best tourist destination, as it is an immensely beautiful sight."
    },
    {
        name: "Venice",
        coordinates: "45° 26′ 15″ N, 12° 20′ 9″ E",
        country: "italy",
        description: "A fantastic floating city located in Italy. A land with not streets, but canals where people travel by wooden boats. Undoubtedly the most beautiful city in Italy."
    },
    {
        name: "Gibraltar",
        coordinates: "36° 8′ 0″ N, 5° 21′ 0″ W",
        country: "gibraltar",
        description: "A British overseas colony located on the southern tip of the Iberian Peninsula. Has a nice mountain at the top of the city."
    }
]

function createArticle(cityObject) {
    filename = cityObject.name.replace(/\s+/g, '').toLowerCase();
    mediaBlock = document.createElement("div");
    mediaBlock.className = "media-block";
        photo = document.createElement("img");
        photo.className = "photo";
        photo.src = "img/" + filename + "-photo.jpg";
        photo.alt = "Photo of " + cityObject.name + ".";
        content = document.createElement("div");
        content.className = "content";
            title = document.createElement("div");
            title.className = "title";
            title.innerHTML = " " + cityObject.name;
                flag = document.createElement("img");
                flag.className = "flag";
                flag.src = "img/" + cityObject.country + "-flag.svg";
                flag.alt = "Flag of " + cityObject.country;
                subtitle = document.createElement("span");
                subtitle.className = "subtitle";
                subtitle.innerHTML = " " + cityObject.coordinates;
            div = document.createElement("div");
            div.class = "";
            div.innerHTML = cityObject.description;
                coatofarms = document.createElement("img");
                coatofarms.className = "coatofarms";
                coatofarms.src = "img/" + filename + "-coatofarms.svg";
                coatofarms.alt = cityObject.name + "'s coat of arms.";
            button = document.createElement("div");
            button.className = "button";
            button.innerHTML = "view";
            div.prepend(coatofarms);
            title.prepend(flag);
            title.append(subtitle);
        content.append(title);
        content.append(div);
        content.append(button);
    mediaBlock.append(photo);
    mediaBlock.append(content);
    return mediaBlock;
}

function populatePage(list) {
    macroContainer = document.getElementById("macro-container");
    for (element in list) {
        macroContainer.prepend(createArticle(list[element]));
    }
}