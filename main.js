const skins = [
    {
        id: 1,
        name: "Common Lokki",
        cname: "common",
        weight: 2611504,
        rarity: 2
    },
    {
        id: 2,
        name: "Uncommon Lokki",
        cname: "uncommon",
        weight: 1741002,
        rarity: 3
    },
    {
        id: 3,
        name: "Good Lokki",
        cname: "good",
        weight: 1044601,
        rarity: 5
    },
    {
        id: 4,
        name: "Rare Lokki",
        cname: "rare",
        weight: 522300,
        rarity: 10
    },
    {
        id: 5,
        name: "Lucky Lokki",
        cname: "lucky",
        weight: 348200,
        rarity: 15
    },
    {
        id: 6,
        name: "Nonchalant Lokki",
        cname: "nc",
        weight: 261150,
        rarity: 20
    },
    {
        id: 7,
        name: "Thank God Its Lokki",
        cname: "tgil",
        weight: 104460,
        rarity: 50
    },
    {
        id: 8,
        name: "Cramming Lokki",
        cname: "cramming",
        weight: 52230,
        rarity: 100
    },
    {
        id: 9,
        name: "May Honors Lokki",
        cname: "honors",
        weight: 26115,
        rarity: 200
    },
    {
        id: 10,
        name: "Lokki-n",
        cname: "lokkin",
        weight: 17410,
        rarity: 300
    },
    {
        id: 11,
        name: "Sleepy Lokki",
        cname: "sleepy",
        weight: 13057,
        rarity: 400
    },
    {
        id: 12,
        name: "Lokki The 403rd",
        cname: "the403rd",
        weight: 12960,
        rarity: 403
    },
    {
        id: 13,
        name: "ikkoL",
        cname: "ikkol",
        weight: 10446,
        rarity: 500
    },
    {
        id: 14,
        name: "Mega Lokki",
        cname: "mega",
        weight: 5223,
        rarity: 1000
    },
    {
        id: 15,
        name: "Giga Lokki",
        cname: "giga",
        weight: 2611,
        rarity: 2000
    },
    {
        id: 16,
        name: "Tera Lokki",
        cname: "tera",
        weight: 1741,
        rarity: 3000
    },
    {
        id: 17,
        name: "Super Lokki",
        cname: "super",
        weight: 1044,
        rarity: 5000
    },
    {
        id: 18,
        name: "Ultra Lokki",
        cname: "ultra",
        weight: 522,
        rarity: 10000
    },
    {
        id: 19,
        name: "Tainted Lokki",
        cname: "tainted",
        weight: 261,
        rarity: 20000
    },
    {
        id: 20,
        name: "Exotic Lokki",
        cname: "exotic",
        weight: 174,
        rarity: 30000
    },
    {
        id: 21,
        name: "Mythical Lokki",
        cname: "myth",
        weight: 104,
        rarity: 50000
    },
    {
        id: 22,
        name: "Legend Lokki",
        cname: "legend",
        weight: 52,
        rarity: 100000
    },
    {
        id: 23,
        name: "Heian Era Lokki",
        cname: "heian",
        weight: 26,
        rarity: 200000
    },
    {
        id: 24,
        name: "Gamma Lokki",
        cname: "gamma",
        weight: 17,
        rarity: 300000
    },
    {
        id: 25,
        name: "Beta Lokki",
        cname: "beta",
        weight: 10,
        rarity: 500000
    },
    {
        id: 26,
        name: "HeadLokki",
        cname: "hl",
        weight: 90,
        rarity: 69420
    },
    {
        id: 27,
        name: "Alpha Lokki",
        cname: "alpha",
        weight: 8,
        rarity: 600000
    },
    {
        id: 28,
        name: "Sigma Lokki",
        cname: "sigma",
        weight: 7,
        rarity: 700000
    },
    {
        id: 29,
        name: "Lokki, The God of Mischief",
        cname: "mischief",
        weight: 6,
        rarity: 800000
    },
    {
        id: 30,
        name: "Lokki, Consumer of Reality",
        cname: "consumer",
        weight: 5,
        rarity: 900000
    },
    {
        id: 31,
        name: "The Original Lokki",
        cname: "lokki",
        weight: 5,
        rarity: 1000000
    }
];

const persist = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
]

function changeFeat(dir) {
    // dir = 1 (left), dir = 2 (right)
    const allFeat = document.querySelectorAll(".featbox")

    allFeat.forEach((i) => {
        if (i.classList.item(2) != "notActive") {
            current = i.classList.item(1).charAt(4)
        }
    })
    if (dir == 1) {
        if (current != '1') {
            next = Number(current) - 1
        } else {
            next = 6
        }
    } else {
        if (current != '6') {
            next = Number(current) + 1
        } else {
            next = 1
        }
    }
    document.querySelector('.feat' + current).classList.add("notActive")
    document.querySelector('.feat' + next).classList.remove("notActive")
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function loadSave() {
    let currSave = getCookie('saveStr')
    let arraySave = currSave.split("|")
    arraySave.forEach((l, index) => {
        if (l == 1) {
            document.querySelector("#" + skins[index].cname).innerHTML = skins[index].name
            document.querySelector("#" + skins[index].cname).classList.add(skins[index].cname)
        }
    })
}

function rngLokki() {
    const button = document.querySelector(".rngButton")
    const rarity = document.querySelector(".rarity")
    const resulttext = document.querySelector(".result")
    const announce = document.querySelector(".rngAnnounce")
    var result = getItem()
    resulttext.innerHTML = result.name
    announce.classList.remove("notVisible")
    resulttext.classList.remove("notVisible")
    rarity.classList.remove("notVisible")
    resulttext.className = 'result'
    resulttext.className = resulttext.className + " " + result.cname
    rarity.innerHTML = '1 in ' + result.rarity

    document.querySelector("#" + result.cname).innerHTML = result.name
    document.querySelector("#" + result.cname).classList.add(result.cname)
    persist[result.id - 1] = 1
    saveCookie()

    button.disabled = true
    button.innerHTML = "<b>Wait a second</b>"
    button.classList.add("cooldown")
    setTimeout(() => {
        button.disabled = false
        button.innerHTML = "<b>Roll!</b>"
        button.classList.remove("cooldown")
    }, 1000);
}

function saveCookie() {
    var save = persist.join("|")
    document.cookie = "saveStr=" + save + "; max-age=2419200"
}

function tallyTotalWeight() {
    let total = 0;

    skins.forEach((item) => (total += item.weight));

    return total;
}

function getItem() {
    const totalWeight = tallyTotalWeight();

    let randomNumber = Math.floor(Math.random() * totalWeight);

    return skins.find((skin) => {
        if (randomNumber <= skin.weight) {
            return skin;
        } else {
            randomNumber -= skin.weight;
        }
    });
}
