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

function rngLokki() {
    var result = getItem()
    document.querySelector(".result").innerHTML = result.name
    document.querySelector(".rngAnnounce").classList.remove("notVisible")
    document.querySelector(".result").classList.remove("notVisible")
    document.querySelector(".rarity").classList.remove("notVisible")
    document.querySelector(".result").className = 'result'
    document.querySelector(".result").className = document.querySelector(".result").className + " " + result.cname
    document.querySelector(".rarity").innerHTML = '1 in ' + result.rarity
    document.querySelector(".rngButton").disabled = true
    document.querySelector(".rngButton").innerHTML = "<b>Wait a second</b>"
    document.querySelector(".rngButton").classList.add("cooldown")
    setTimeout(() => {
        document.querySelector(".rngButton").disabled = false
        document.querySelector(".rngButton").innerHTML = "<b>Roll!</b>"
        document.querySelector(".rngButton").classList.remove("cooldown")
    }, 1000);
}

const skins = [
    {
        name: "Common Lokki",
        cname: "common",
        weight: 3331504,
        rarity: 2
    },
    {
        name: "Uncommon Lokki",
        cname: "uncommon",
        weight: 2221002,
        rarity: 3
    },
    {
        name: "Good Lokki",
        cname: "good",
        weight: 1332601,
        rarity: 5
    },
    {
        name: "Rare Lokki",
        cname: "rare",
        weight: 666300,
        rarity: 10
    },
    {
        name: "Lucky Lokki",
        cname: "lucky",
        weight: 444200,
        rarity: 15
    },
    {
        name: "Nonchalant Lokki",
        cname: "nc",
        weight: 333150,
        rarity: 20
    },
    {
        name: "Thank God Its Lokki",
        cname: "tgil",
        weight: 133260,
        rarity: 50
    },
    {
        name: "Cramming Lokki",
        cname: "cramming",
        weight: 66630,
        rarity: 100
    },
    {
        name: "May Honors Lokki",
        cname: "honors",
        weight: 33315,
        rarity: 200
    },
    {
        name: "Lokki-n",
        cname: "lokkin",
        weight: 22210,
        rarity: 300
    },
    {
        name: "Sleepy Lokki",
        cname: "sleepy",
        weight: 16657,
        rarity: 400
    },
    {
        name: "Lokki The 403rd",
        cname: "the403rd",
        weight: 16533,
        rarity: 403
    },
    {
        name: "ikkoL",
        cname: "ikkol",
        weight: 13326,
        rarity: 500
    },
    {
        name: "Mega Lokki",
        cname: "mega",
        weight: 6663,
        rarity: 1000
    },
    {
        name: "Giga Lokki",
        cname: "giga",
        weight: 3331,
        rarity: 2000
    },
    {
        name: "Tera Lokki",
        cname: "tera",
        weight: 2221,
        rarity: 3000
    },
    {
        name: "Super Lokki",
        cname: "super",
        weight: 1332,
        rarity: 5000
    },
    {
        name: "Ultra Lokki",
        cname: "ultra",
        weight: 66,
        rarity: 100000
    },
    {
        name: "Tainted Lokki",
        cname: "tainted",
        weight: 44,
        rarity: 150000
    },
    {
        name: "Exotic Lokki",
        cname: "exotic",
        weight: 33,
        rarity: 200000
    },
    {
        name: "Mythical Lokki",
        cname: "myth",
        weight: 26,
        rarity: 250000
    },
    {
        name: "Legend Lokki",
        cname: "legend",
        weight: 22,
        rarity: 300000
    },
    {
        name: "Heian Era Lokki",
        cname: "heian",
        weight: 19,
        rarity: 350000
    },
    {
        name: "Gamma Lokki",
        cname: "gamma",
        weight: 16,
        rarity: 400000
    },
    {
        name: "Beta Lokki",
        cname: "beta",
        weight: 13,
        rarity: 500000
    },
    {
        name: "HeadLokki",
        cname: "hl",
        weight: 10,
        rarity: 69420
    },
    {
        name: "Alpha Lokki",
        cname: "alpha",
        weight: 8,
        rarity: 750000
    },
    {
        name: "Sigma Lokki",
        cname: "sigma",
        weight: 8,
        rarity: 800000
    },
    {
        name: "Lokki, The God of Mischief",
        cname: "mischief",
        weight: 7,
        rarity: 900000
    },
    {
        name: "Lokki, Consumer of Reality",
        cname: "consumer",
        weight: 7,
        rarity: 950000
    },
    {
        name: "The Original Lokki",
        cname: "lokki",
        weight: 6,
        rarity: 1000000
    }
];

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
