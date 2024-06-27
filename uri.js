// Copyright (c) 2024 YA-androidapp(https://github.com/yzkn) All rights reserved.

const URL_CITIES = {
    稚内市: {
        tj: {
            prefecture: "北海道",
            subdivisions: "宗谷地方(稚内)",
            subdivisions1: "宗谷地方",
            subdivisions2: "稚内",
            hourly: "https://tenki.jp/forecast/1/1/1100/1214/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "宗谷地方",
            name: "稚内市",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01214/"
        },
        hall: {
            lat: 45.415675,
            long: 141.673082
        }
    },
    猿払村: {
        tj: {
            prefecture: "北海道",
            subdivisions: "宗谷地方(稚内)",
            subdivisions1: "宗谷地方",
            subdivisions2: "稚内",
            hourly: "https://tenki.jp/forecast/1/1/1100/1511/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "宗谷地方",
            name: "猿払村",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01511/"
        },
        hall: {
            lat: 45.330610,
            long: 142.108945
        }
    },
    浜頓別町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "宗谷地方(稚内)",
            subdivisions1: "宗谷地方",
            subdivisions2: "稚内",
            hourly: "https://tenki.jp/forecast/1/1/1100/1512/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "宗谷地方",
            name: "浜頓別町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01512/"
        },
        hall: {
            lat: 45.123716,
            long: 142.359640
        }
    },
    中頓別町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "宗谷地方(稚内)",
            subdivisions1: "宗谷地方",
            subdivisions2: "稚内",
            hourly: "https://tenki.jp/forecast/1/1/1100/1513/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "宗谷地方",
            name: "中頓別町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01513/"
        },
        hall: {
            lat: 44.969710,
            long: 142.286705
        }
    },
    枝幸町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "宗谷地方(稚内)",
            subdivisions1: "宗谷地方",
            subdivisions2: "稚内",
            hourly: "https://tenki.jp/forecast/1/1/1100/1514/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "宗谷地方",
            name: "枝幸町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01514/"
        },
        hall: {
            lat: 44.938700,
            long: 142.581405
        }
    },
    豊富町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "宗谷地方(稚内)",
            subdivisions1: "宗谷地方",
            subdivisions2: "稚内",
            hourly: "https://tenki.jp/forecast/1/1/1100/1516/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "宗谷地方",
            name: "豊富町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01516/"
        },
        hall: {
            lat: 45.102847,
            long: 141.777508
        }
    },
    礼文町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "宗谷地方(稚内)",
            subdivisions1: "宗谷地方",
            subdivisions2: "稚内",
            hourly: "https://tenki.jp/forecast/1/1/1100/1517/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "宗谷地方",
            name: "礼文町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01517/"
        },
        hall: {
            lat: 45.303062,
            long: 141.047717
        }
    },
    利尻町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "宗谷地方(稚内)",
            subdivisions1: "宗谷地方",
            subdivisions2: "稚内",
            hourly: "https://tenki.jp/forecast/1/1/1100/1518/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "宗谷地方",
            name: "利尻町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01518/"
        },
        hall: {
            lat: 45.187041,
            long: 141.139597
        }
    },
    利尻富士町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "宗谷地方(稚内)",
            subdivisions1: "宗谷地方",
            subdivisions2: "稚内",
            hourly: "https://tenki.jp/forecast/1/1/1100/1519/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "宗谷地方",
            name: "利尻富士町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01519/"
        },
        hall: {
            lat: 45.247459,
            long: 141.214719
        }
    },
    幌延町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "宗谷地方(稚内)",
            subdivisions1: "宗谷地方",
            subdivisions2: "稚内",
            hourly: "https://tenki.jp/forecast/1/1/1100/1520/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "宗谷地方",
            name: "幌延町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01520/"
        },
        hall: {
            lat: 45.017635,
            long: 141.849386
        }
    },
    旭川市: {
        tj: {
            prefecture: "北海道",
            subdivisions: "上川地方(旭川)",
            subdivisions1: "上川地方",
            subdivisions2: "旭川",
            hourly: "https://tenki.jp/forecast/1/1/1200/1204/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "上川地方",
            name: "旭川市",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01204/"
        },
        hall: {
            lat: 43.771454,
            long: 142.365373
        }
    },
    士別市: {
        tj: {
            prefecture: "北海道",
            subdivisions: "上川地方(旭川)",
            subdivisions1: "上川地方",
            subdivisions2: "旭川",
            hourly: "https://tenki.jp/forecast/1/1/1200/1220/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "上川地方",
            name: "士別市",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01220/"
        },
        hall: {
            lat: 44.178182,
            long: 142.400927
        }
    },
    名寄市: {
        tj: {
            prefecture: "北海道",
            subdivisions: "上川地方(旭川)",
            subdivisions1: "上川地方",
            subdivisions2: "旭川",
            hourly: "https://tenki.jp/forecast/1/1/1200/1221/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "上川地方",
            name: "名寄市",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01221/"
        },
        hall: {
            lat: 44.355924,
            long: 142.463134
        }
    },
    富良野市: {
        tj: {
            prefecture: "北海道",
            subdivisions: "上川地方(旭川)",
            subdivisions1: "上川地方",
            subdivisions2: "旭川",
            hourly: "https://tenki.jp/forecast/1/1/1200/1229/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "上川地方",
            name: "富良野市",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01229/"
        },
        hall: {
            lat: 43.342354,
            long: 142.383405
        }
    },
    鷹栖町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "上川地方(旭川)",
            subdivisions1: "上川地方",
            subdivisions2: "旭川",
            hourly: "https://tenki.jp/forecast/1/1/1200/1452/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "上川地方",
            name: "鷹栖町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01452/"
        },
        hall: {
            lat: 43.843321,
            long: 142.354382
        }
    },
    東神楽町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "上川地方(旭川)",
            subdivisions1: "上川地方",
            subdivisions2: "旭川",
            hourly: "https://tenki.jp/forecast/1/1/1200/1453/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "上川地方",
            name: "東神楽町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01453/"
        },
        hall: {
            lat: 43.696303,
            long: 142.451571
        }
    },
    当麻町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "上川地方(旭川)",
            subdivisions1: "上川地方",
            subdivisions2: "旭川",
            hourly: "https://tenki.jp/forecast/1/1/1200/1454/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "上川地方",
            name: "当麻町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01454/"
        },
        hall: {
            lat: 43.828201,
            long: 142.508388
        }
    },
    比布町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "上川地方(旭川)",
            subdivisions1: "上川地方",
            subdivisions2: "旭川",
            hourly: "https://tenki.jp/forecast/1/1/1200/1455/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "上川地方",
            name: "比布町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01455/"
        },
        hall: {
            lat: 43.875021,
            long: 142.477699
        }
    },
    愛別町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "上川地方(旭川)",
            subdivisions1: "上川地方",
            subdivisions2: "旭川",
            hourly: "https://tenki.jp/forecast/1/1/1200/1456/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "上川地方",
            name: "愛別町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01456/"
        },
        hall: {
            lat: 43.906679,
            long: 142.577822
        }
    },
    上川町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "上川地方(旭川)",
            subdivisions1: "上川地方",
            subdivisions2: "旭川",
            hourly: "https://tenki.jp/forecast/1/1/1200/1457/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "上川地方",
            name: "上川町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01457/"
        },
        hall: {
            lat: 43.847128,
            long: 142.770459
        }
    },
    東川町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "上川地方(旭川)",
            subdivisions1: "上川地方",
            subdivisions2: "旭川",
            hourly: "https://tenki.jp/forecast/1/1/1200/1458/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "上川地方",
            name: "東川町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01458/"
        },
        hall: {
            lat: 43.698877,
            long: 142.510128
        }
    },
    美瑛町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "上川地方(旭川)",
            subdivisions1: "上川地方",
            subdivisions2: "旭川",
            hourly: "https://tenki.jp/forecast/1/1/1200/1459/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "上川地方",
            name: "美瑛町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01459/"
        },
        hall: {
            lat: 43.588279,
            long: 142.467055
        }
    },
    上富良野町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "上川地方(旭川)",
            subdivisions1: "上川地方",
            subdivisions2: "旭川",
            hourly: "https://tenki.jp/forecast/1/1/1200/1460/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "上川地方",
            name: "上富良野町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01460/"
        },
        hall: {
            lat: 43.455614,
            long: 142.467112
        }
    },
    中富良野町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "上川地方(旭川)",
            subdivisions1: "上川地方",
            subdivisions2: "旭川",
            hourly: "https://tenki.jp/forecast/1/1/1200/1461/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "上川地方",
            name: "中富良野町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01461/"
        },
        hall: {
            lat: 43.405576,
            long: 142.425034
        }
    },
    南富良野町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "上川地方(旭川)",
            subdivisions1: "上川地方",
            subdivisions2: "旭川",
            hourly: "https://tenki.jp/forecast/1/1/1200/1462/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "上川地方",
            name: "南富良野町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01462/"
        },
        hall: {
            lat: 43.164088,
            long: 142.568522
        }
    },
    占冠村: {
        tj: {
            prefecture: "北海道",
            subdivisions: "上川地方(旭川)",
            subdivisions1: "上川地方",
            subdivisions2: "旭川",
            hourly: "https://tenki.jp/forecast/1/1/1200/1463/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "上川地方",
            name: "占冠村",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01463/"
        },
        hall: {
            lat: 42.979836,
            long: 142.398526
        }
    },
    和寒町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "上川地方(旭川)",
            subdivisions1: "上川地方",
            subdivisions2: "旭川",
            hourly: "https://tenki.jp/forecast/1/1/1200/1464/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "上川地方",
            name: "和寒町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01464/"
        },
        hall: {
            lat: 44.023119,
            long: 142.413383
        }
    },
    剣淵町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "上川地方(旭川)",
            subdivisions1: "上川地方",
            subdivisions2: "旭川",
            hourly: "https://tenki.jp/forecast/1/1/1200/1465/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "上川地方",
            name: "剣淵町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01465/"
        },
        hall: {
            lat: 44.095746,
            long: 142.361007
        }
    },
    下川町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "上川地方(旭川)",
            subdivisions1: "上川地方",
            subdivisions2: "旭川",
            hourly: "https://tenki.jp/forecast/1/1/1200/1468/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "上川地方",
            name: "下川町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01468/"
        },
        hall: {
            lat: 44.302576,
            long: 142.635219
        }
    },
    美深町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "上川地方(旭川)",
            subdivisions1: "上川地方",
            subdivisions2: "旭川",
            hourly: "https://tenki.jp/forecast/1/1/1200/1469/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "上川地方",
            name: "美深町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01469/"
        },
        hall: {
            lat: 44.480994,
            long: 142.342963
        }
    },
    音威子府村: {
        tj: {
            prefecture: "北海道",
            subdivisions: "上川地方(旭川)",
            subdivisions1: "上川地方",
            subdivisions2: "旭川",
            hourly: "https://tenki.jp/forecast/1/1/1200/1470/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "上川地方",
            name: "音威子府村",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01470/"
        },
        hall: {
            lat: 44.725096,
            long: 142.262458
        }
    },
    中川町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "上川地方(旭川)",
            subdivisions1: "上川地方",
            subdivisions2: "旭川",
            hourly: "https://tenki.jp/forecast/1/1/1200/1471/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "上川地方",
            name: "中川町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01471/"
        },
        hall: {
            lat: 44.811488,
            long: 142.071409
        }
    },
    幌加内町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "上川地方(旭川)",
            subdivisions1: "上川地方",
            subdivisions2: "旭川",
            hourly: "https://tenki.jp/forecast/1/1/1200/1472/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "上川地方",
            name: "幌加内町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01472/"
        },
        hall: {
            lat: 44.009812,
            long: 142.153828
        }
    },
    留萌市: {
        tj: {
            prefecture: "北海道",
            subdivisions: "留萌地方(留萌)",
            subdivisions1: "留萌地方",
            subdivisions2: "留萌",
            hourly: "https://tenki.jp/forecast/1/1/1300/1212/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "留萌地方",
            name: "留萌市",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01212/"
        },
        hall: {
            lat: 43.940987,
            long: 141.637009
        }
    },
    増毛町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "留萌地方(留萌)",
            subdivisions1: "留萌地方",
            subdivisions2: "留萌",
            hourly: "https://tenki.jp/forecast/1/1/1300/1481/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "留萌地方",
            name: "増毛町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01481/"
        },
        hall: {
            lat: 43.856063,
            long: 141.524978
        }
    },
    小平町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "留萌地方(留萌)",
            subdivisions1: "留萌地方",
            subdivisions2: "留萌",
            hourly: "https://tenki.jp/forecast/1/1/1300/1482/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "留萌地方",
            name: "小平町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01482/"
        },
        hall: {
            lat: 44.015141,
            long: 141.662828
        }
    },
    苫前町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "留萌地方(留萌)",
            subdivisions1: "留萌地方",
            subdivisions2: "留萌",
            hourly: "https://tenki.jp/forecast/1/1/1300/1483/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "留萌地方",
            name: "苫前町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01483/"
        },
        hall: {
            lat: 44.306086,
            long: 141.652932
        }
    },
    羽幌町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "留萌地方(留萌)",
            subdivisions1: "留萌地方",
            subdivisions2: "留萌",
            hourly: "https://tenki.jp/forecast/1/1/1300/1484/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "留萌地方",
            name: "羽幌町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01484/"
        },
        hall: {
            lat: 44.360610,
            long: 141.697249
        }
    },
    初山別村: {
        tj: {
            prefecture: "北海道",
            subdivisions: "留萌地方(留萌)",
            subdivisions1: "留萌地方",
            subdivisions2: "留萌",
            hourly: "https://tenki.jp/forecast/1/1/1300/1485/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "留萌地方",
            name: "初山別村",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01485/"
        },
        hall: {
            lat: 44.532149,
            long: 141.766342
        }
    },
    遠別町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "留萌地方(留萌)",
            subdivisions1: "留萌地方",
            subdivisions2: "留萌",
            hourly: "https://tenki.jp/forecast/1/1/1300/1486/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "留萌地方",
            name: "遠別町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01486/"
        },
        hall: {
            lat: 44.722462,
            long: 141.792322
        }
    },
    天塩町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "留萌地方(留萌)",
            subdivisions1: "留萌地方",
            subdivisions2: "留萌",
            hourly: "https://tenki.jp/forecast/1/1/1300/1487/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "留萌地方",
            name: "天塩町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01487/"
        },
        hall: {
            lat: 44.888121,
            long: 141.745324
        }
    },
    札幌市: {
        tj: {
            prefecture: "北海道",
            subdivisions: "石狩地方(札幌)",
            subdivisions1: "石狩地方",
            subdivisions2: "札幌",
            hourly: "https://tenki.jp/forecast/1/2/1400/1100/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "石狩地方",
            name: "札幌市中央区",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01101/"
        },
        hall: {
            lat: 43.061972,
            long: 141.354374
        }
    },
    札幌市中央区: {
        tj: {
            prefecture: "北海道",
            subdivisions: "石狩地方(札幌)",
            subdivisions1: "石狩地方",
            subdivisions2: "札幌",
            hourly: "https://tenki.jp/forecast/1/2/1400/1101/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "石狩地方",
            name: "札幌市中央区",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01101/"
        },
        hall: {
            lat: 43.061459,
            long: 141.353817
        }
    },
    札幌市北区: {
        tj: {
            prefecture: "北海道",
            subdivisions: "石狩地方(札幌)",
            subdivisions1: "石狩地方",
            subdivisions2: "札幌",
            hourly: "https://tenki.jp/forecast/1/2/1400/1102/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "石狩地方",
            name: "札幌市北区",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01102/"
        },
        hall: {
            lat: 43.090693,
            long: 141.340882
        }
    },
    札幌市東区: {
        tj: {
            prefecture: "北海道",
            subdivisions: "石狩地方(札幌)",
            subdivisions1: "石狩地方",
            subdivisions2: "札幌",
            hourly: "https://tenki.jp/forecast/1/2/1400/1103/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "石狩地方",
            name: "札幌市東区",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01103/"
        },
        hall: {
            lat: 43.076242,
            long: 141.363662
        }
    },
    札幌市白石区: {
        tj: {
            prefecture: "北海道",
            subdivisions: "石狩地方(札幌)",
            subdivisions1: "石狩地方",
            subdivisions2: "札幌",
            hourly: "https://tenki.jp/forecast/1/2/1400/1104/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "石狩地方",
            name: "札幌市白石区",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01104/"
        },
        hall: {
            lat: 43.045445,
            long: 141.396378
        }
    },
    札幌市豊平区: {
        tj: {
            prefecture: "北海道",
            subdivisions: "石狩地方(札幌)",
            subdivisions1: "石狩地方",
            subdivisions2: "札幌",
            hourly: "https://tenki.jp/forecast/1/2/1400/1105/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "石狩地方",
            name: "札幌市豊平区",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01105/"
        },
        hall: {
            lat: 43.031370,
            long: 141.379974
        }
    },
    札幌市南区: {
        tj: {
            prefecture: "北海道",
            subdivisions: "石狩地方(札幌)",
            subdivisions1: "石狩地方",
            subdivisions2: "札幌",
            hourly: "https://tenki.jp/forecast/1/2/1400/1106/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "石狩地方",
            name: "札幌市南区",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01106/"
        },
        hall: {
            lat: 42.989995,
            long: 141.353496
        }
    },
    札幌市西区: {
        tj: {
            prefecture: "北海道",
            subdivisions: "石狩地方(札幌)",
            subdivisions1: "石狩地方",
            subdivisions2: "札幌",
            hourly: "https://tenki.jp/forecast/1/2/1400/1107/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "石狩地方",
            name: "札幌市西区",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01107/"
        },
        hall: {
            lat: 43.074347,
            long: 141.300898
        }
    },
    札幌市厚別区: {
        tj: {
            prefecture: "北海道",
            subdivisions: "石狩地方(札幌)",
            subdivisions1: "石狩地方",
            subdivisions2: "札幌",
            hourly: "https://tenki.jp/forecast/1/2/1400/1108/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "石狩地方",
            name: "札幌市厚別区",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01108/"
        },
        hall: {
            lat: 43.036213,
            long: 141.474733
        }
    },
    札幌市手稲区: {
        tj: {
            prefecture: "北海道",
            subdivisions: "石狩地方(札幌)",
            subdivisions1: "石狩地方",
            subdivisions2: "札幌",
            hourly: "https://tenki.jp/forecast/1/2/1400/1109/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "石狩地方",
            name: "札幌市手稲区",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01109/"
        },
        hall: {
            lat: 43.121972,
            long: 141.245782
        }
    },
    札幌市清田区: {
        tj: {
            prefecture: "北海道",
            subdivisions: "石狩地方(札幌)",
            subdivisions1: "石狩地方",
            subdivisions2: "札幌",
            hourly: "https://tenki.jp/forecast/1/2/1400/1110/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "石狩地方",
            name: "札幌市清田区",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01110/"
        },
        hall: {
            lat: 42.999432,
            long: 141.443842
        }
    },
    江別市: {
        tj: {
            prefecture: "北海道",
            subdivisions: "石狩地方(札幌)",
            subdivisions1: "石狩地方",
            subdivisions2: "札幌",
            hourly: "https://tenki.jp/forecast/1/2/1400/1217/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "石狩地方",
            name: "江別市",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01217/"
        },
        hall: {
            lat: 43.103666,
            long: 141.536103
        }
    },
    千歳市: {
        tj: {
            prefecture: "北海道",
            subdivisions: "石狩地方(札幌)",
            subdivisions1: "石狩地方",
            subdivisions2: "札幌",
            hourly: "https://tenki.jp/forecast/1/2/1400/1224/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "石狩地方",
            name: "千歳市",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01224/"
        },
        hall: {
            lat: 42.821124,
            long: 141.651139
        }
    },
    恵庭市: {
        tj: {
            prefecture: "北海道",
            subdivisions: "石狩地方(札幌)",
            subdivisions1: "石狩地方",
            subdivisions2: "札幌",
            hourly: "https://tenki.jp/forecast/1/2/1400/1231/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "石狩地方",
            name: "恵庭市",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01231/"
        },
        hall: {
            lat: 42.882592,
            long: 141.577799
        }
    },
    北広島市: {
        tj: {
            prefecture: "北海道",
            subdivisions: "石狩地方(札幌)",
            subdivisions1: "石狩地方",
            subdivisions2: "札幌",
            hourly: "https://tenki.jp/forecast/1/2/1400/1234/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "石狩地方",
            name: "北広島市",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01234/"
        },
        hall: {
            lat: 42.985663,
            long: 141.563625
        }
    },
    石狩市: {
        tj: {
            prefecture: "北海道",
            subdivisions: "石狩地方(札幌)",
            subdivisions1: "石狩地方",
            subdivisions2: "札幌",
            hourly: "https://tenki.jp/forecast/1/2/1400/1235/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "石狩地方",
            name: "石狩市",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01235/"
        },
        hall: {
            lat: 43.171365,
            long: 141.315514
        }
    },
    当別町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "石狩地方(札幌)",
            subdivisions1: "石狩地方",
            subdivisions2: "札幌",
            hourly: "https://tenki.jp/forecast/1/2/1400/1303/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "石狩地方",
            name: "当別町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01303/"
        },
        hall: {
            lat: 43.223637,
            long: 141.517003
        }
    },
    新篠津村: {
        tj: {
            prefecture: "北海道",
            subdivisions: "石狩地方(札幌)",
            subdivisions1: "石狩地方",
            subdivisions2: "札幌",
            hourly: "https://tenki.jp/forecast/1/2/1400/1304/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "石狩地方",
            name: "新篠津村",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01304/"
        },
        hall: {
            lat: 43.225368,
            long: 141.649247
        }
    },
    夕張市: {
        tj: {
            prefecture: "北海道",
            subdivisions: "空知地方(岩見沢)",
            subdivisions1: "空知地方",
            subdivisions2: "岩見沢",
            hourly: "https://tenki.jp/forecast/1/2/1500/1209/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "空知地方",
            name: "夕張市",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01209/"
        },
        hall: {
            lat: 43.056814,
            long: 141.974069
        }
    },
    岩見沢市: {
        tj: {
            prefecture: "北海道",
            subdivisions: "空知地方(岩見沢)",
            subdivisions1: "空知地方",
            subdivisions2: "岩見沢",
            hourly: "https://tenki.jp/forecast/1/2/1500/1210/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "空知地方",
            name: "岩見沢市",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01210/"
        },
        hall: {
            lat: 43.196028,
            long: 141.775355
        }
    },
    美唄市: {
        tj: {
            prefecture: "北海道",
            subdivisions: "空知地方(岩見沢)",
            subdivisions1: "空知地方",
            subdivisions2: "岩見沢",
            hourly: "https://tenki.jp/forecast/1/2/1500/1215/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "空知地方",
            name: "美唄市",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01215/"
        },
        hall: {
            lat: 43.332951,
            long: 141.853986
        }
    },
    芦別市: {
        tj: {
            prefecture: "北海道",
            subdivisions: "空知地方(岩見沢)",
            subdivisions1: "空知地方",
            subdivisions2: "岩見沢",
            hourly: "https://tenki.jp/forecast/1/2/1500/1216/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "空知地方",
            name: "芦別市",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01216/"
        },
        hall: {
            lat: 43.518210,
            long: 142.189552
        }
    },
    赤平市: {
        tj: {
            prefecture: "北海道",
            subdivisions: "空知地方(岩見沢)",
            subdivisions1: "空知地方",
            subdivisions2: "岩見沢",
            hourly: "https://tenki.jp/forecast/1/2/1500/1218/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "空知地方",
            name: "赤平市",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01218/"
        },
        hall: {
            lat: 43.558039,
            long: 142.044223
        }
    },
    三笠市: {
        tj: {
            prefecture: "北海道",
            subdivisions: "空知地方(岩見沢)",
            subdivisions1: "空知地方",
            subdivisions2: "岩見沢",
            hourly: "https://tenki.jp/forecast/1/2/1500/1222/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "空知地方",
            name: "三笠市",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01222/"
        },
        hall: {
            lat: 43.245622,
            long: 141.875342
        }
    },
    滝川市: {
        tj: {
            prefecture: "北海道",
            subdivisions: "空知地方(岩見沢)",
            subdivisions1: "空知地方",
            subdivisions2: "岩見沢",
            hourly: "https://tenki.jp/forecast/1/2/1500/1225/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "空知地方",
            name: "滝川市",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01225/"
        },
        hall: {
            lat: 43.557753,
            long: 141.910371
        }
    },
    砂川市: {
        tj: {
            prefecture: "北海道",
            subdivisions: "空知地方(岩見沢)",
            subdivisions1: "空知地方",
            subdivisions2: "岩見沢",
            hourly: "https://tenki.jp/forecast/1/2/1500/1226/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "空知地方",
            name: "砂川市",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01226/"
        },
        hall: {
            lat: 43.494329,
            long: 141.902525
        }
    },
    歌志内市: {
        tj: {
            prefecture: "北海道",
            subdivisions: "空知地方(岩見沢)",
            subdivisions1: "空知地方",
            subdivisions2: "岩見沢",
            hourly: "https://tenki.jp/forecast/1/2/1500/1227/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "空知地方",
            name: "歌志内市",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01227/"
        },
        hall: {
            lat: 43.521682,
            long: 142.035353
        }
    },
    深川市: {
        tj: {
            prefecture: "北海道",
            subdivisions: "空知地方(岩見沢)",
            subdivisions1: "空知地方",
            subdivisions2: "岩見沢",
            hourly: "https://tenki.jp/forecast/1/2/1500/1228/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "空知地方",
            name: "深川市",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01228/"
        },
        hall: {
            lat: 43.723665,
            long: 142.053823
        }
    },
    南幌町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "空知地方(岩見沢)",
            subdivisions1: "空知地方",
            subdivisions2: "岩見沢",
            hourly: "https://tenki.jp/forecast/1/2/1500/1423/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "空知地方",
            name: "南幌町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01423/"
        },
        hall: {
            lat: 43.063739,
            long: 141.650330
        }
    },
    奈井江町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "空知地方(岩見沢)",
            subdivisions1: "空知地方",
            subdivisions2: "岩見沢",
            hourly: "https://tenki.jp/forecast/1/2/1500/1424/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "空知地方",
            name: "奈井江町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01424/"
        },
        hall: {
            lat: 43.425353,
            long: 141.882816
        }
    },
    上砂川町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "空知地方(岩見沢)",
            subdivisions1: "空知地方",
            subdivisions2: "岩見沢",
            hourly: "https://tenki.jp/forecast/1/2/1500/1425/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "空知地方",
            name: "上砂川町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01425/"
        },
        hall: {
            lat: 43.482710,
            long: 141.984202
        }
    },
    由仁町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "空知地方(岩見沢)",
            subdivisions1: "空知地方",
            subdivisions2: "岩見沢",
            hourly: "https://tenki.jp/forecast/1/2/1500/1427/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "空知地方",
            name: "由仁町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01427/"
        },
        hall: {
            lat: 42.999598,
            long: 141.790309
        }
    },
    長沼町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "空知地方(岩見沢)",
            subdivisions1: "空知地方",
            subdivisions2: "岩見沢",
            hourly: "https://tenki.jp/forecast/1/2/1500/1428/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "空知地方",
            name: "長沼町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01428/"
        },
        hall: {
            lat: 43.010340,
            long: 141.695367
        }
    },
    栗山町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "空知地方(岩見沢)",
            subdivisions1: "空知地方",
            subdivisions2: "岩見沢",
            hourly: "https://tenki.jp/forecast/1/2/1500/1429/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "空知地方",
            name: "栗山町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01429/"
        },
        hall: {
            lat: 43.056290,
            long: 141.784099
        }
    },
    月形町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "空知地方(岩見沢)",
            subdivisions1: "空知地方",
            subdivisions2: "岩見沢",
            hourly: "https://tenki.jp/forecast/1/2/1500/1430/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "空知地方",
            name: "月形町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01430/"
        },
        hall: {
            lat: 43.338397,
            long: 141.669604
        }
    },
    浦臼町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "空知地方(岩見沢)",
            subdivisions1: "空知地方",
            subdivisions2: "岩見沢",
            hourly: "https://tenki.jp/forecast/1/2/1500/1431/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "空知地方",
            name: "浦臼町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01431/"
        },
        hall: {
            lat: 43.430363,
            long: 141.818727
        }
    },
    新十津川町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "空知地方(岩見沢)",
            subdivisions1: "空知地方",
            subdivisions2: "岩見沢",
            hourly: "https://tenki.jp/forecast/1/2/1500/1432/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "空知地方",
            name: "新十津川町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01432/"
        },
        hall: {
            lat: 43.548781,
            long: 141.877126
        }
    },
    妹背牛町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "空知地方(岩見沢)",
            subdivisions1: "空知地方",
            subdivisions2: "岩見沢",
            hourly: "https://tenki.jp/forecast/1/2/1500/1433/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "空知地方",
            name: "妹背牛町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01433/"
        },
        hall: {
            lat: 43.700093,
            long: 141.961606
        }
    },
    秩父別町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "空知地方(岩見沢)",
            subdivisions1: "空知地方",
            subdivisions2: "岩見沢",
            hourly: "https://tenki.jp/forecast/1/2/1500/1434/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "空知地方",
            name: "秩父別町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01434/"
        },
        hall: {
            lat: 43.767000,
            long: 141.957896
        }
    },
    雨竜町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "空知地方(岩見沢)",
            subdivisions1: "空知地方",
            subdivisions2: "岩見沢",
            hourly: "https://tenki.jp/forecast/1/2/1500/1436/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "空知地方",
            name: "雨竜町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01436/"
        },
        hall: {
            lat: 43.643943,
            long: 141.889036
        }
    },
    北竜町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "空知地方(岩見沢)",
            subdivisions1: "空知地方",
            subdivisions2: "岩見沢",
            hourly: "https://tenki.jp/forecast/1/2/1500/1437/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "空知地方",
            name: "北竜町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01437/"
        },
        hall: {
            lat: 43.731426,
            long: 141.879409
        }
    },
    沼田町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "空知地方(岩見沢)",
            subdivisions1: "空知地方",
            subdivisions2: "岩見沢",
            hourly: "https://tenki.jp/forecast/1/2/1500/1438/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "空知地方",
            name: "沼田町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01438/"
        },
        hall: {
            lat: 43.806740,
            long: 141.933817
        }
    },
    小樽市: {
        tj: {
            prefecture: "北海道",
            subdivisions: "後志地方(倶知安)",
            subdivisions1: "後志地方",
            subdivisions2: "倶知安",
            hourly: "https://tenki.jp/forecast/1/2/1600/1203/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "後志地方",
            name: "小樽市",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01203/"
        },
        hall: {
            lat: 43.190753,
            long: 140.994605
        }
    },
    島牧村: {
        tj: {
            prefecture: "北海道",
            subdivisions: "後志地方(倶知安)",
            subdivisions1: "後志地方",
            subdivisions2: "倶知安",
            hourly: "https://tenki.jp/forecast/1/2/1600/1391/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "後志地方",
            name: "島牧村",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01391/"
        },
        hall: {
            lat: 42.700471,
            long: 140.061454
        }
    },
    寿都町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "後志地方(倶知安)",
            subdivisions1: "後志地方",
            subdivisions2: "倶知安",
            hourly: "https://tenki.jp/forecast/1/2/1600/1392/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "後志地方",
            name: "寿都町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01392/"
        },
        hall: {
            lat: 42.790984,
            long: 140.228891
        }
    },
    黒松内町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "後志地方(倶知安)",
            subdivisions1: "後志地方",
            subdivisions2: "倶知安",
            hourly: "https://tenki.jp/forecast/1/2/1600/1393/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "後志地方",
            name: "黒松内町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01393/"
        },
        hall: {
            lat: 42.667788,
            long: 140.307739
        }
    },
    蘭越町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "後志地方(倶知安)",
            subdivisions1: "後志地方",
            subdivisions2: "倶知安",
            hourly: "https://tenki.jp/forecast/1/2/1600/1394/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "後志地方",
            name: "蘭越町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01394/"
        },
        hall: {
            lat: 42.809205,
            long: 140.528346
        }
    },
    ニセコ町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "後志地方(倶知安)",
            subdivisions1: "後志地方",
            subdivisions2: "倶知安",
            hourly: "https://tenki.jp/forecast/1/2/1600/1395/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "後志地方",
            name: "ニセコ町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01395/"
        },
        hall: {
            lat: 42.805029,
            long: 140.687991
        }
    },
    真狩村: {
        tj: {
            prefecture: "北海道",
            subdivisions: "後志地方(倶知安)",
            subdivisions1: "後志地方",
            subdivisions2: "倶知安",
            hourly: "https://tenki.jp/forecast/1/2/1600/1396/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "後志地方",
            name: "真狩村",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01396/"
        },
        hall: {
            lat: 42.762955,
            long: 140.803669
        }
    },
    留寿都村: {
        tj: {
            prefecture: "北海道",
            subdivisions: "後志地方(倶知安)",
            subdivisions1: "後志地方",
            subdivisions2: "倶知安",
            hourly: "https://tenki.jp/forecast/1/2/1600/1397/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "後志地方",
            name: "留寿都村",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01397/"
        },
        hall: {
            lat: 42.737263,
            long: 140.875574
        }
    },
    喜茂別町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "後志地方(倶知安)",
            subdivisions1: "後志地方",
            subdivisions2: "倶知安",
            hourly: "https://tenki.jp/forecast/1/2/1600/1398/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "後志地方",
            name: "喜茂別町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01398/"
        },
        hall: {
            lat: 42.795439,
            long: 140.934532
        }
    },
    京極町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "後志地方(倶知安)",
            subdivisions1: "後志地方",
            subdivisions2: "倶知安",
            hourly: "https://tenki.jp/forecast/1/2/1600/1399/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "後志地方",
            name: "京極町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01399/"
        },
        hall: {
            lat: 42.858216,
            long: 140.883999
        }
    },
    倶知安町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "後志地方(倶知安)",
            subdivisions1: "後志地方",
            subdivisions2: "倶知安",
            hourly: "https://tenki.jp/forecast/1/2/1600/1400/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "後志地方",
            name: "倶知安町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01400/"
        },
        hall: {
            lat: 42.901458,
            long: 140.759012
        }
    },
    共和町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "後志地方(倶知安)",
            subdivisions1: "後志地方",
            subdivisions2: "倶知安",
            hourly: "https://tenki.jp/forecast/1/2/1600/1401/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "後志地方",
            name: "共和町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01401/"
        },
        hall: {
            lat: 42.980407,
            long: 140.611175
        }
    },
    岩内町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "後志地方(倶知安)",
            subdivisions1: "後志地方",
            subdivisions2: "倶知安",
            hourly: "https://tenki.jp/forecast/1/2/1600/1402/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "後志地方",
            name: "岩内町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01402/"
        },
        hall: {
            lat: 42.979761,
            long: 140.514773
        }
    },
    泊村: {
        tj: {
            prefecture: "北海道",
            subdivisions: "後志地方(倶知安)",
            subdivisions1: "後志地方",
            subdivisions2: "倶知安",
            hourly: "https://tenki.jp/forecast/1/2/1600/1403/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "後志地方",
            name: "泊村",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01403/"
        },
        hall: {
            lat: 43.063212,
            long: 140.498857
        }
    },
    神恵内村: {
        tj: {
            prefecture: "北海道",
            subdivisions: "後志地方(倶知安)",
            subdivisions1: "後志地方",
            subdivisions2: "倶知安",
            hourly: "https://tenki.jp/forecast/1/2/1600/1404/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "後志地方",
            name: "神恵内村",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01404/"
        },
        hall: {
            lat: 43.143365,
            long: 140.430801
        }
    },
    積丹町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "後志地方(倶知安)",
            subdivisions1: "後志地方",
            subdivisions2: "倶知安",
            hourly: "https://tenki.jp/forecast/1/2/1600/1405/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "後志地方",
            name: "積丹町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01405/"
        },
        hall: {
            lat: 43.298710,
            long: 140.598001
        }
    },
    古平町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "後志地方(倶知安)",
            subdivisions1: "後志地方",
            subdivisions2: "倶知安",
            hourly: "https://tenki.jp/forecast/1/2/1600/1406/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "後志地方",
            name: "古平町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01406/"
        },
        hall: {
            lat: 43.265353,
            long: 140.639078
        }
    },
    仁木町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "後志地方(倶知安)",
            subdivisions1: "後志地方",
            subdivisions2: "倶知安",
            hourly: "https://tenki.jp/forecast/1/2/1600/1407/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "後志地方",
            name: "仁木町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01407/"
        },
        hall: {
            lat: 43.151675,
            long: 140.766168
        }
    },
    余市町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "後志地方(倶知安)",
            subdivisions1: "後志地方",
            subdivisions2: "倶知安",
            hourly: "https://tenki.jp/forecast/1/2/1600/1408/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "後志地方",
            name: "余市町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01408/"
        },
        hall: {
            lat: 43.195343,
            long: 140.783542
        }
    },
    赤井川村: {
        tj: {
            prefecture: "北海道",
            subdivisions: "後志地方(倶知安)",
            subdivisions1: "後志地方",
            subdivisions2: "倶知安",
            hourly: "https://tenki.jp/forecast/1/2/1600/1409/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "後志地方",
            name: "赤井川村",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01409/"
        },
        hall: {
            lat: 43.083479,
            long: 140.813640
        }
    },
    網走市: {
        tj: {
            prefecture: "北海道",
            subdivisions: "網走地方(網走)",
            subdivisions1: "網走地方",
            subdivisions2: "網走",
            hourly: "https://tenki.jp/forecast/1/3/1710/1211/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "網走地方",
            name: "網走市",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01211/"
        },
        hall: {
            lat: 44.020631,
            long: 144.273422
        }
    },
    美幌町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "網走地方(網走)",
            subdivisions1: "網走地方",
            subdivisions2: "網走",
            hourly: "https://tenki.jp/forecast/1/3/1710/1543/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "網走地方",
            name: "美幌町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01543/"
        },
        hall: {
            lat: 43.824248,
            long: 144.107523
        }
    },
    津別町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "網走地方(網走)",
            subdivisions1: "網走地方",
            subdivisions2: "網走",
            hourly: "https://tenki.jp/forecast/1/3/1710/1544/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "網走地方",
            name: "津別町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01544/"
        },
        hall: {
            lat: 43.706261,
            long: 144.025237
        }
    },
    斜里町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "網走地方(網走)",
            subdivisions1: "網走地方",
            subdivisions2: "網走",
            hourly: "https://tenki.jp/forecast/1/3/1710/1545/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "網走地方",
            name: "斜里町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01545/"
        },
        hall: {
            lat: 43.911441,
            long: 144.670713
        }
    },
    清里町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "網走地方(網走)",
            subdivisions1: "網走地方",
            subdivisions2: "網走",
            hourly: "https://tenki.jp/forecast/1/3/1710/1546/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "網走地方",
            name: "清里町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01546/"
        },
        hall: {
            lat: 43.835224,
            long: 144.594582
        }
    },
    小清水町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "網走地方(網走)",
            subdivisions1: "網走地方",
            subdivisions2: "網走",
            hourly: "https://tenki.jp/forecast/1/3/1710/1547/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "網走地方",
            name: "小清水町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01547/"
        },
        hall: {
            lat: 43.857031,
            long: 144.462529
        }
    },
    佐呂間町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "網走地方(網走)",
            subdivisions1: "網走地方",
            subdivisions2: "網走",
            hourly: "https://tenki.jp/forecast/1/3/1710/1552/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "網走地方",
            name: "佐呂間町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01552/"
        },
        hall: {
            lat: 44.017859,
            long: 143.774714
        }
    },
    大空町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "網走地方(網走)",
            subdivisions1: "網走地方",
            subdivisions2: "網走",
            hourly: "https://tenki.jp/forecast/1/3/1710/1564/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "網走地方",
            name: "大空町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01564/"
        },
        hall: {
            lat: 43.911858,
            long: 144.172473
        }
    },
    北見市: {
        tj: {
            prefecture: "北海道",
            subdivisions: "北見地方(北見)",
            subdivisions1: "北見地方",
            subdivisions2: "北見",
            hourly: "https://tenki.jp/forecast/1/3/1720/1208/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "北見地方",
            name: "北見市",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01208/"
        },
        hall: {
            lat: 43.803197,
            long: 143.894925
        }
    },
    訓子府町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "北見地方(北見)",
            subdivisions1: "北見地方",
            subdivisions2: "北見",
            hourly: "https://tenki.jp/forecast/1/3/1720/1549/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "北見地方",
            name: "訓子府町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01549/"
        },
        hall: {
            lat: 43.725328,
            long: 143.741665
        }
    },
    置戸町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "北見地方(北見)",
            subdivisions1: "北見地方",
            subdivisions2: "北見",
            hourly: "https://tenki.jp/forecast/1/3/1720/1550/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "北見地方",
            name: "置戸町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01550/"
        },
        hall: {
            lat: 43.676328,
            long: 143.586402
        }
    },
    紋別市: {
        tj: {
            prefecture: "北海道",
            subdivisions: "紋別地方(紋別)",
            subdivisions1: "紋別地方",
            subdivisions2: "紋別",
            hourly: "https://tenki.jp/forecast/1/3/1730/1219/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "紋別地方",
            name: "紋別市",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01219/"
        },
        hall: {
            lat: 44.356332,
            long: 143.354279
        }
    },
    遠軽町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "紋別地方(紋別)",
            subdivisions1: "紋別地方",
            subdivisions2: "紋別",
            hourly: "https://tenki.jp/forecast/1/3/1730/1555/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "紋別地方",
            name: "遠軽町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01555/"
        },
        hall: {
            lat: 44.061947,
            long: 143.527726
        }
    },
    湧別町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "紋別地方(紋別)",
            subdivisions1: "紋別地方",
            subdivisions2: "紋別",
            hourly: "https://tenki.jp/forecast/1/3/1730/1559/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "紋別地方",
            name: "湧別町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01559/"
        },
        hall: {
            lat: 44.151465,
            long: 143.572919
        }
    },
    滝上町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "紋別地方(紋別)",
            subdivisions1: "紋別地方",
            subdivisions2: "紋別",
            hourly: "https://tenki.jp/forecast/1/3/1730/1560/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "紋別地方",
            name: "滝上町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01560/"
        },
        hall: {
            lat: 44.192270,
            long: 143.077650
        }
    },
    興部町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "紋別地方(紋別)",
            subdivisions1: "紋別地方",
            subdivisions2: "紋別",
            hourly: "https://tenki.jp/forecast/1/3/1730/1561/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "紋別地方",
            name: "興部町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01561/"
        },
        hall: {
            lat: 44.469874,
            long: 143.123699
        }
    },
    西興部村: {
        tj: {
            prefecture: "北海道",
            subdivisions: "紋別地方(紋別)",
            subdivisions1: "紋別地方",
            subdivisions2: "紋別",
            hourly: "https://tenki.jp/forecast/1/3/1730/1562/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "紋別地方",
            name: "西興部村",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01562/"
        },
        hall: {
            lat: 44.328833,
            long: 142.944445
        }
    },
    雄武町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "紋別地方(紋別)",
            subdivisions1: "紋別地方",
            subdivisions2: "紋別",
            hourly: "https://tenki.jp/forecast/1/3/1730/1563/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "紋別地方",
            name: "雄武町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01563/"
        },
        hall: {
            lat: 44.582482,
            long: 142.961863
        }
    },
    根室市: {
        tj: {
            prefecture: "北海道",
            subdivisions: "根室地方(根室)",
            subdivisions1: "根室地方",
            subdivisions2: "根室",
            hourly: "https://tenki.jp/forecast/1/3/1800/1223/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "根室地方",
            name: "根室市",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01223/"
        },
        hall: {
            lat: 43.330036,
            long: 145.582903
        }
    },
    別海町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "根室地方(根室)",
            subdivisions1: "根室地方",
            subdivisions2: "根室",
            hourly: "https://tenki.jp/forecast/1/3/1800/1691/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "根室地方",
            name: "別海町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01691/"
        },
        hall: {
            lat: 43.393990,
            long: 145.117341
        }
    },
    中標津町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "根室地方(根室)",
            subdivisions1: "根室地方",
            subdivisions2: "根室",
            hourly: "https://tenki.jp/forecast/1/3/1800/1692/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "根室地方",
            name: "中標津町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01692/"
        },
        hall: {
            lat: 43.555191,
            long: 144.971504
        }
    },
    標津町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "根室地方(根室)",
            subdivisions1: "根室地方",
            subdivisions2: "根室",
            hourly: "https://tenki.jp/forecast/1/3/1800/1693/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "根室地方",
            name: "標津町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01693/"
        },
        hall: {
            lat: 43.661309,
            long: 145.131325
        }
    },
    羅臼町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "根室地方(根室)",
            subdivisions1: "根室地方",
            subdivisions2: "根室",
            hourly: "https://tenki.jp/forecast/1/3/1800/1694/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "根室地方",
            name: "羅臼町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01694/"
        },
        hall: {
            lat: 44.021953,
            long: 145.189532
        }
    },
    釧路市: {
        tj: {
            prefecture: "北海道",
            subdivisions: "釧路地方(釧路)",
            subdivisions1: "釧路地方",
            subdivisions2: "釧路",
            hourly: "https://tenki.jp/forecast/1/3/1900/1206/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "釧路地方",
            name: "釧路市",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01206/"
        },
        hall: {
            lat: 42.984856,
            long: 144.381670
        }
    },
    釧路町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "釧路地方(釧路)",
            subdivisions1: "釧路地方",
            subdivisions2: "釧路",
            hourly: "https://tenki.jp/forecast/1/3/1900/1661/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "釧路地方",
            name: "釧路町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01661/"
        },
        hall: {
            lat: 42.996124,
            long: 144.466081
        }
    },
    厚岸町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "釧路地方(釧路)",
            subdivisions1: "釧路地方",
            subdivisions2: "釧路",
            hourly: "https://tenki.jp/forecast/1/3/1900/1662/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "釧路地方",
            name: "厚岸町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01662/"
        },
        hall: {
            lat: 43.051951,
            long: 144.847443
        }
    },
    浜中町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "釧路地方(釧路)",
            subdivisions1: "釧路地方",
            subdivisions2: "釧路",
            hourly: "https://tenki.jp/forecast/1/3/1900/1663/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "釧路地方",
            name: "浜中町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01663/"
        },
        hall: {
            lat: 43.076292,
            long: 145.130953
        }
    },
    標茶町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "釧路地方(釧路)",
            subdivisions1: "釧路地方",
            subdivisions2: "釧路",
            hourly: "https://tenki.jp/forecast/1/3/1900/1664/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "釧路地方",
            name: "標茶町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01664/"
        },
        hall: {
            lat: 43.303337,
            long: 144.600665
        }
    },
    弟子屈町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "釧路地方(釧路)",
            subdivisions1: "釧路地方",
            subdivisions2: "釧路",
            hourly: "https://tenki.jp/forecast/1/3/1900/1665/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "釧路地方",
            name: "弟子屈町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01665/"
        },
        hall: {
            lat: 43.485352,
            long: 144.459223
        }
    },
    鶴居村: {
        tj: {
            prefecture: "北海道",
            subdivisions: "釧路地方(釧路)",
            subdivisions1: "釧路地方",
            subdivisions2: "釧路",
            hourly: "https://tenki.jp/forecast/1/3/1900/1667/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "釧路地方",
            name: "鶴居村",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01667/"
        },
        hall: {
            lat: 43.230160,
            long: 144.321165
        }
    },
    白糠町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "釧路地方(釧路)",
            subdivisions1: "釧路地方",
            subdivisions2: "釧路",
            hourly: "https://tenki.jp/forecast/1/3/1900/1668/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "釧路地方",
            name: "白糠町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01668/"
        },
        hall: {
            lat: 42.956161,
            long: 144.071805
        }
    },
    帯広市: {
        tj: {
            prefecture: "北海道",
            subdivisions: "十勝地方(帯広)",
            subdivisions1: "十勝地方",
            subdivisions2: "帯広",
            hourly: "https://tenki.jp/forecast/1/3/2000/1207/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "十勝地方",
            name: "帯広市",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01207/"
        },
        hall: {
            lat: 42.924014,
            long: 143.196195
        }
    },
    音更町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "十勝地方(帯広)",
            subdivisions1: "十勝地方",
            subdivisions2: "帯広",
            hourly: "https://tenki.jp/forecast/1/3/2000/1631/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "十勝地方",
            name: "音更町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01631/"
        },
        hall: {
            lat: 42.994115,
            long: 143.197869
        }
    },
    士幌町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "十勝地方(帯広)",
            subdivisions1: "十勝地方",
            subdivisions2: "帯広",
            hourly: "https://tenki.jp/forecast/1/3/2000/1632/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "十勝地方",
            name: "士幌町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01632/"
        },
        hall: {
            lat: 43.168047,
            long: 143.241344
        }
    },
    上士幌町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "十勝地方(帯広)",
            subdivisions1: "十勝地方",
            subdivisions2: "帯広",
            hourly: "https://tenki.jp/forecast/1/3/2000/1633/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "十勝地方",
            name: "上士幌町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01633/"
        },
        hall: {
            lat: 43.232615,
            long: 143.296243
        }
    },
    鹿追町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "十勝地方(帯広)",
            subdivisions1: "十勝地方",
            subdivisions2: "帯広",
            hourly: "https://tenki.jp/forecast/1/3/2000/1634/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "十勝地方",
            name: "鹿追町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01634/"
        },
        hall: {
            lat: 43.098876,
            long: 142.989028
        }
    },
    新得町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "十勝地方(帯広)",
            subdivisions1: "十勝地方",
            subdivisions2: "帯広",
            hourly: "https://tenki.jp/forecast/1/3/2000/1635/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "十勝地方",
            name: "新得町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01635/"
        },
        hall: {
            lat: 43.079741,
            long: 142.838822
        }
    },
    清水町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "十勝地方(帯広)",
            subdivisions1: "十勝地方",
            subdivisions2: "帯広",
            hourly: "https://tenki.jp/forecast/1/3/2000/1636/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "十勝地方",
            name: "清水町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01636/"
        },
        hall: {
            lat: 43.011423,
            long: 142.884568
        }
    },
    芽室町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "十勝地方(帯広)",
            subdivisions1: "十勝地方",
            subdivisions2: "帯広",
            hourly: "https://tenki.jp/forecast/1/3/2000/1637/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "十勝地方",
            name: "芽室町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01637/"
        },
        hall: {
            lat: 42.911547,
            long: 143.050835
        }
    },
    中札内村: {
        tj: {
            prefecture: "北海道",
            subdivisions: "十勝地方(帯広)",
            subdivisions1: "十勝地方",
            subdivisions2: "帯広",
            hourly: "https://tenki.jp/forecast/1/3/2000/1638/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "十勝地方",
            name: "中札内村",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01638/"
        },
        hall: {
            lat: 42.697864,
            long: 143.134395
        }
    },
    更別村: {
        tj: {
            prefecture: "北海道",
            subdivisions: "十勝地方(帯広)",
            subdivisions1: "十勝地方",
            subdivisions2: "帯広",
            hourly: "https://tenki.jp/forecast/1/3/2000/1639/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "十勝地方",
            name: "更別村",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01639/"
        },
        hall: {
            lat: 42.650415,
            long: 143.187794
        }
    },
    大樹町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "十勝地方(帯広)",
            subdivisions1: "十勝地方",
            subdivisions2: "帯広",
            hourly: "https://tenki.jp/forecast/1/3/2000/1641/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "十勝地方",
            name: "大樹町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01641/"
        },
        hall: {
            lat: 42.497698,
            long: 143.278989
        }
    },
    広尾町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "十勝地方(帯広)",
            subdivisions1: "十勝地方",
            subdivisions2: "帯広",
            hourly: "https://tenki.jp/forecast/1/3/2000/1642/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "十勝地方",
            name: "広尾町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01642/"
        },
        hall: {
            lat: 42.285841,
            long: 143.311498
        }
    },
    幕別町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "十勝地方(帯広)",
            subdivisions1: "十勝地方",
            subdivisions2: "帯広",
            hourly: "https://tenki.jp/forecast/1/3/2000/1643/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "十勝地方",
            name: "幕別町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01643/"
        },
        hall: {
            lat: 42.908198,
            long: 143.356085
        }
    },
    池田町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "十勝地方(帯広)",
            subdivisions1: "十勝地方",
            subdivisions2: "帯広",
            hourly: "https://tenki.jp/forecast/1/3/2000/1644/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "十勝地方",
            name: "池田町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01644/"
        },
        hall: {
            lat: 42.928980,
            long: 143.448472
        }
    },
    豊頃町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "十勝地方(帯広)",
            subdivisions1: "十勝地方",
            subdivisions2: "帯広",
            hourly: "https://tenki.jp/forecast/1/3/2000/1645/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "十勝地方",
            name: "豊頃町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01645/"
        },
        hall: {
            lat: 42.801023,
            long: 143.505900
        }
    },
    本別町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "十勝地方(帯広)",
            subdivisions1: "十勝地方",
            subdivisions2: "帯広",
            hourly: "https://tenki.jp/forecast/1/3/2000/1646/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "十勝地方",
            name: "本別町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01646/"
        },
        hall: {
            lat: 43.124615,
            long: 143.610962
        }
    },
    足寄町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "十勝地方(帯広)",
            subdivisions1: "十勝地方",
            subdivisions2: "帯広",
            hourly: "https://tenki.jp/forecast/1/3/2000/1647/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "十勝地方",
            name: "足寄町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01647/"
        },
        hall: {
            lat: 43.244786,
            long: 143.553930
        }
    },
    陸別町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "十勝地方(帯広)",
            subdivisions1: "十勝地方",
            subdivisions2: "帯広",
            hourly: "https://tenki.jp/forecast/1/3/2000/1648/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "十勝地方",
            name: "陸別町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01648/"
        },
        hall: {
            lat: 43.468914,
            long: 143.747305
        }
    },
    浦幌町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "十勝地方(帯広)",
            subdivisions1: "十勝地方",
            subdivisions2: "帯広",
            hourly: "https://tenki.jp/forecast/1/3/2000/1649/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "十勝地方",
            name: "浦幌町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01649/"
        },
        hall: {
            lat: 42.808947,
            long: 143.658581
        }
    },
    室蘭市: {
        tj: {
            prefecture: "北海道",
            subdivisions: "胆振地方(室蘭)",
            subdivisions1: "胆振地方",
            subdivisions2: "室蘭",
            hourly: "https://tenki.jp/forecast/1/4/2100/1205/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "胆振地方",
            name: "室蘭市",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01205/"
        },
        hall: {
            lat: 42.315204,
            long: 140.973784
        }
    },
    苫小牧市: {
        tj: {
            prefecture: "北海道",
            subdivisions: "胆振地方(室蘭)",
            subdivisions1: "胆振地方",
            subdivisions2: "室蘭",
            hourly: "https://tenki.jp/forecast/1/4/2100/1213/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "胆振地方",
            name: "苫小牧市",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01213/"
        },
        hall: {
            lat: 42.634094,
            long: 141.605503
        }
    },
    登別市: {
        tj: {
            prefecture: "北海道",
            subdivisions: "胆振地方(室蘭)",
            subdivisions1: "胆振地方",
            subdivisions2: "室蘭",
            hourly: "https://tenki.jp/forecast/1/4/2100/1230/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "胆振地方",
            name: "登別市",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01230/"
        },
        hall: {
            lat: 42.412735,
            long: 141.106556
        }
    },
    伊達市: {
        tj: {
            prefecture: "北海道",
            subdivisions: "胆振地方(室蘭)",
            subdivisions1: "胆振地方",
            subdivisions2: "室蘭",
            hourly: "https://tenki.jp/forecast/1/4/2100/1233/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "胆振地方",
            name: "伊達市",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01233/"
        },
        hall: {
            lat: 42.471898,
            long: 140.864702
        }
    },
    豊浦町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "胆振地方(室蘭)",
            subdivisions1: "胆振地方",
            subdivisions2: "室蘭",
            hourly: "https://tenki.jp/forecast/1/4/2100/1571/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "胆振地方",
            name: "豊浦町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01571/"
        },
        hall: {
            lat: 42.583464,
            long: 140.711815
        }
    },
    壮瞥町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "胆振地方(室蘭)",
            subdivisions1: "胆振地方",
            subdivisions2: "室蘭",
            hourly: "https://tenki.jp/forecast/1/4/2100/1575/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "胆振地方",
            name: "壮瞥町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01575/"
        },
        hall: {
            lat: 42.552556,
            long: 140.885472
        }
    },
    白老町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "胆振地方(室蘭)",
            subdivisions1: "胆振地方",
            subdivisions2: "室蘭",
            hourly: "https://tenki.jp/forecast/1/4/2100/1578/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "胆振地方",
            name: "白老町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01578/"
        },
        hall: {
            lat: 42.551259,
            long: 141.355861
        }
    },
    厚真町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "胆振地方(室蘭)",
            subdivisions1: "胆振地方",
            subdivisions2: "室蘭",
            hourly: "https://tenki.jp/forecast/1/4/2100/1581/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "胆振地方",
            name: "厚真町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01581/"
        },
        hall: {
            lat: 42.723566,
            long: 141.877841
        }
    },
    洞爺湖町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "胆振地方(室蘭)",
            subdivisions1: "胆振地方",
            subdivisions2: "室蘭",
            hourly: "https://tenki.jp/forecast/1/4/2100/1584/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "胆振地方",
            name: "洞爺湖町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01584/"
        },
        hall: {
            lat: 42.551223,
            long: 140.764128
        }
    },
    安平町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "胆振地方(室蘭)",
            subdivisions1: "胆振地方",
            subdivisions2: "室蘭",
            hourly: "https://tenki.jp/forecast/1/4/2100/1585/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "胆振地方",
            name: "安平町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01585/"
        },
        hall: {
            lat: 42.762798,
            long: 141.818047
        }
    },
    むかわ町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "胆振地方(室蘭)",
            subdivisions1: "胆振地方",
            subdivisions2: "室蘭",
            hourly: "https://tenki.jp/forecast/1/4/2100/1586/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "胆振地方",
            name: "むかわ町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01586/"
        },
        hall: {
            lat: 42.574741,
            long: 141.926761
        }
    },
    日高町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "日高地方(浦河)",
            subdivisions1: "日高地方",
            subdivisions2: "浦河",
            hourly: "https://tenki.jp/forecast/1/4/2200/1601/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "日高地方",
            name: "日高町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01601/"
        },
        hall: {
            lat: 42.480318,
            long: 142.074359
        }
    },
    平取町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "日高地方(浦河)",
            subdivisions1: "日高地方",
            subdivisions2: "浦河",
            hourly: "https://tenki.jp/forecast/1/4/2200/1602/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "日高地方",
            name: "平取町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01602/"
        },
        hall: {
            lat: 42.585098,
            long: 142.128525
        }
    },
    新冠町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "日高地方(浦河)",
            subdivisions1: "日高地方",
            subdivisions2: "浦河",
            hourly: "https://tenki.jp/forecast/1/4/2200/1604/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "日高地方",
            name: "新冠町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01604/"
        },
        hall: {
            lat: 42.362417,
            long: 142.318315
        }
    },
    浦河町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "日高地方(浦河)",
            subdivisions1: "日高地方",
            subdivisions2: "浦河",
            hourly: "https://tenki.jp/forecast/1/4/2200/1607/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "日高地方",
            name: "浦河町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01607/"
        },
        hall: {
            lat: 42.168355,
            long: 142.768213
        }
    },
    様似町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "日高地方(浦河)",
            subdivisions1: "日高地方",
            subdivisions2: "浦河",
            hourly: "https://tenki.jp/forecast/1/4/2200/1608/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "日高地方",
            name: "様似町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01608/"
        },
        hall: {
            lat: 42.127737,
            long: 142.933797
        }
    },
    えりも町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "日高地方(浦河)",
            subdivisions1: "日高地方",
            subdivisions2: "浦河",
            hourly: "https://tenki.jp/forecast/1/4/2200/1609/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "日高地方",
            name: "えりも町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01609/"
        },
        hall: {
            lat: 42.016298,
            long: 143.148348
        }
    },
    新ひだか町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "日高地方(浦河)",
            subdivisions1: "日高地方",
            subdivisions2: "浦河",
            hourly: "https://tenki.jp/forecast/1/4/2200/1610/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "日高地方",
            name: "新ひだか町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01610/"
        },
        hall: {
            lat: 42.341276,
            long: 142.368588
        }
    },
    函館市: {
        tj: {
            prefecture: "北海道",
            subdivisions: "渡島地方(函館)",
            subdivisions1: "渡島地方",
            subdivisions2: "函館",
            hourly: "https://tenki.jp/forecast/1/4/2300/1202/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "渡島地方",
            name: "函館市",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01202/"
        },
        hall: {
            lat: 41.768712,
            long: 140.729108
        }
    },
    北斗市: {
        tj: {
            prefecture: "北海道",
            subdivisions: "渡島地方(函館)",
            subdivisions1: "渡島地方",
            subdivisions2: "函館",
            hourly: "https://tenki.jp/forecast/1/4/2300/1236/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "渡島地方",
            name: "北斗市",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01236/"
        },
        hall: {
            lat: 41.824174,
            long: 140.653067
        }
    },
    松前町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "渡島地方(函館)",
            subdivisions1: "渡島地方",
            subdivisions2: "函館",
            hourly: "https://tenki.jp/forecast/1/4/2300/1331/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "渡島地方",
            name: "松前町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01331/"
        },
        hall: {
            lat: 41.429981,
            long: 140.110403
        }
    },
    福島町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "渡島地方(函館)",
            subdivisions1: "渡島地方",
            subdivisions2: "函館",
            hourly: "https://tenki.jp/forecast/1/4/2300/1332/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "渡島地方",
            name: "福島町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01332/"
        },
        hall: {
            lat: 41.483783,
            long: 140.251315
        }
    },
    知内町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "渡島地方(函館)",
            subdivisions1: "渡島地方",
            subdivisions2: "函館",
            hourly: "https://tenki.jp/forecast/1/4/2300/1333/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "渡島地方",
            name: "知内町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01333/"
        },
        hall: {
            lat: 41.598377,
            long: 140.418861
        }
    },
    木古内町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "渡島地方(函館)",
            subdivisions1: "渡島地方",
            subdivisions2: "函館",
            hourly: "https://tenki.jp/forecast/1/4/2300/1334/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "渡島地方",
            name: "木古内町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01334/"
        },
        hall: {
            lat: 41.678332,
            long: 140.437635
        }
    },
    七飯町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "渡島地方(函館)",
            subdivisions1: "渡島地方",
            subdivisions2: "函館",
            hourly: "https://tenki.jp/forecast/1/4/2300/1337/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "渡島地方",
            name: "七飯町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01337/"
        },
        hall: {
            lat: 41.895711,
            long: 140.694405
        }
    },
    鹿部町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "渡島地方(函館)",
            subdivisions1: "渡島地方",
            subdivisions2: "函館",
            hourly: "https://tenki.jp/forecast/1/4/2300/1343/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "渡島地方",
            name: "鹿部町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01343/"
        },
        hall: {
            lat: 42.026639,
            long: 140.831672
        }
    },
    森町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "渡島地方(函館)",
            subdivisions1: "渡島地方",
            subdivisions2: "函館",
            hourly: "https://tenki.jp/forecast/1/4/2300/1345/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "渡島地方",
            name: "森町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01345/"
        },
        hall: {
            lat: 42.104992,
            long: 140.576446
        }
    },
    八雲町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "渡島地方(函館)",
            subdivisions1: "渡島地方",
            subdivisions2: "函館",
            hourly: "https://tenki.jp/forecast/1/4/2300/1346/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "檜山地方",
            name: "八雲町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01346/"
        },
        hall: {
            lat: 42.255918,
            long: 140.265224
        }
    },
    長万部町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "渡島地方(函館)",
            subdivisions1: "渡島地方",
            subdivisions2: "函館",
            hourly: "https://tenki.jp/forecast/1/4/2300/1347/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "渡島地方",
            name: "長万部町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01347/"
        },
        hall: {
            lat: 42.513488,
            long: 140.380344
        }
    },
    江差町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "檜山地方(江差)",
            subdivisions1: "檜山地方",
            subdivisions2: "江差",
            hourly: "https://tenki.jp/forecast/1/4/2400/1361/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "檜山地方",
            name: "江差町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01361/"
        },
        hall: {
            lat: 41.869244,
            long: 140.127560
        }
    },
    上ノ国町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "檜山地方(江差)",
            subdivisions1: "檜山地方",
            subdivisions2: "江差",
            hourly: "https://tenki.jp/forecast/1/4/2400/1362/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "檜山地方",
            name: "上ノ国町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01362/"
        },
        hall: {
            lat: 41.801042,
            long: 140.121398
        }
    },
    厚沢部町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "檜山地方(江差)",
            subdivisions1: "檜山地方",
            subdivisions2: "江差",
            hourly: "https://tenki.jp/forecast/1/4/2400/1363/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "檜山地方",
            name: "厚沢部町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01363/"
        },
        hall: {
            lat: 41.920895,
            long: 140.225475
        }
    },
    乙部町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "檜山地方(江差)",
            subdivisions1: "檜山地方",
            subdivisions2: "江差",
            hourly: "https://tenki.jp/forecast/1/4/2400/1364/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "檜山地方",
            name: "乙部町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01364/"
        },
        hall: {
            lat: 41.968504,
            long: 140.135460
        }
    },
    奥尻町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "檜山地方(江差)",
            subdivisions1: "檜山地方",
            subdivisions2: "江差",
            hourly: "https://tenki.jp/forecast/1/4/2400/1367/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "檜山地方",
            name: "奥尻町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01367/"
        },
        hall: {
            lat: 42.172260,
            long: 139.514121
        }
    },
    今金町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "檜山地方(江差)",
            subdivisions1: "檜山地方",
            subdivisions2: "江差",
            hourly: "https://tenki.jp/forecast/1/4/2400/1370/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "檜山地方",
            name: "今金町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01370/"
        },
        hall: {
            lat: 42.429373,
            long: 140.008766
        }
    },
    せたな町: {
        tj: {
            prefecture: "北海道",
            subdivisions: "檜山地方(江差)",
            subdivisions1: "檜山地方",
            subdivisions2: "江差",
            hourly: "https://tenki.jp/forecast/1/4/2400/1371/1hour.html"
        },
        wn: {
            prefecture: "北海道",
            subdivisions: "檜山地方",
            name: "せたな町",
            hourly: "https://weathernews.jp/onebox/tenki/hokkaido/01371/"
        },
        hall: {
            lat: 42.417145,
            long: 139.882999
        }
    },
    那覇市: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "本島中南部(那覇)",
            subdivisions1: "本島中南部",
            subdivisions2: "那覇",
            hourly: "https://tenki.jp/forecast/10/50/9110/47201/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "本島中南部",
            name: "那覇市",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47201/"
        },
        hall: {
            lat: 26.212295,
            long: 127.679218
        }
    },
    宜野湾市: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "本島中南部(那覇)",
            subdivisions1: "本島中南部",
            subdivisions2: "那覇",
            hourly: "https://tenki.jp/forecast/10/50/9110/47205/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "本島中南部",
            name: "宜野湾市",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47205/"
        },
        hall: {
            lat: 26.281581,
            long: 127.778637
        }
    },
    浦添市: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "本島中南部(那覇)",
            subdivisions1: "本島中南部",
            subdivisions2: "那覇",
            hourly: "https://tenki.jp/forecast/10/50/9110/47208/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "本島中南部",
            name: "浦添市",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47208/"
        },
        hall: {
            lat: 26.245816,
            long: 127.721804
        }
    },
    糸満市: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "本島中南部(那覇)",
            subdivisions1: "本島中南部",
            subdivisions2: "那覇",
            hourly: "https://tenki.jp/forecast/10/50/9110/47210/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "本島中南部",
            name: "糸満市",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47210/"
        },
        hall: {
            lat: 26.123542,
            long: 127.665823
        }
    },
    沖縄市: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "本島中南部(那覇)",
            subdivisions1: "本島中南部",
            subdivisions2: "那覇",
            hourly: "https://tenki.jp/forecast/10/50/9110/47211/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "本島中南部",
            name: "沖縄市",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47211/"
        },
        hall: {
            lat: 26.334354,
            long: 127.805694
        }
    },
    豊見城市: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "本島中南部(那覇)",
            subdivisions1: "本島中南部",
            subdivisions2: "那覇",
            hourly: "https://tenki.jp/forecast/10/50/9110/47212/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "本島中南部",
            name: "豊見城市",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47212/"
        },
        hall: {
            lat: 26.177136,
            long: 127.681225
        }
    },
    うるま市: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "本島中南部(那覇)",
            subdivisions1: "本島中南部",
            subdivisions2: "那覇",
            hourly: "https://tenki.jp/forecast/10/50/9110/47213/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "本島中南部",
            name: "うるま市",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47213/"
        },
        hall: {
            lat: 26.379151,
            long: 127.857480
        }
    },
    南城市: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "本島中南部(那覇)",
            subdivisions1: "本島中南部",
            subdivisions2: "那覇",
            hourly: "https://tenki.jp/forecast/10/50/9110/47215/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "本島中南部",
            name: "南城市",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47215/"
        },
        hall: {
            lat: 26.163190,
            long: 127.770625
        }
    },
    読谷村: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "本島中南部(那覇)",
            subdivisions1: "本島中南部",
            subdivisions2: "那覇",
            hourly: "https://tenki.jp/forecast/10/50/9110/47324/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "本島中南部",
            name: "読谷村",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47324/"
        },
        hall: {
            lat: 26.396154,
            long: 127.744424
        }
    },
    嘉手納町: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "本島中南部(那覇)",
            subdivisions1: "本島中南部",
            subdivisions2: "那覇",
            hourly: "https://tenki.jp/forecast/10/50/9110/47325/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "本島中南部",
            name: "嘉手納町",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47325/"
        },
        hall: {
            lat: 26.361723,
            long: 127.755380
        }
    },
    北谷町: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "本島中南部(那覇)",
            subdivisions1: "本島中南部",
            subdivisions2: "那覇",
            hourly: "https://tenki.jp/forecast/10/50/9110/47326/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "本島中南部",
            name: "北谷町",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47326/"
        },
        hall: {
            lat: 26.320069,
            long: 127.763901
        }
    },
    北中城村: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "本島中南部(那覇)",
            subdivisions1: "本島中南部",
            subdivisions2: "那覇",
            hourly: "https://tenki.jp/forecast/10/50/9110/47327/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "本島中南部",
            name: "北中城村",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47327/"
        },
        hall: {
            lat: 26.300770,
            long: 127.792950
        }
    },
    中城村: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "本島中南部(那覇)",
            subdivisions1: "本島中南部",
            subdivisions2: "那覇",
            hourly: "https://tenki.jp/forecast/10/50/9110/47328/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "本島中南部",
            name: "中城村",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47328/"
        },
        hall: {
            lat: 26.262010,
            long: 127.789618
        }
    },
    西原町: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "本島中南部(那覇)",
            subdivisions1: "本島中南部",
            subdivisions2: "那覇",
            hourly: "https://tenki.jp/forecast/10/50/9110/47329/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "本島中南部",
            name: "西原町",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47329/"
        },
        hall: {
            lat: 26.222856,
            long: 127.758819
        }
    },
    与那原町: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "本島中南部(那覇)",
            subdivisions1: "本島中南部",
            subdivisions2: "那覇",
            hourly: "https://tenki.jp/forecast/10/50/9110/47348/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "本島中南部",
            name: "与那原町",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47348/"
        },
        hall: {
            lat: 26.199577,
            long: 127.754456
        }
    },
    南風原町: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "本島中南部(那覇)",
            subdivisions1: "本島中南部",
            subdivisions2: "那覇",
            hourly: "https://tenki.jp/forecast/10/50/9110/47350/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "本島中南部",
            name: "南風原町",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47350/"
        },
        hall: {
            lat: 26.191122,
            long: 127.728554
        }
    },
    渡嘉敷村: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "本島中南部(那覇)",
            subdivisions1: "本島中南部",
            subdivisions2: "那覇",
            hourly: "https://tenki.jp/forecast/10/50/9110/47353/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "本島中南部",
            name: "渡嘉敷村",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47353/"
        },
        hall: {
            lat: 26.197331,
            long: 127.364289
        }
    },
    座間味村: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "本島中南部(那覇)",
            subdivisions1: "本島中南部",
            subdivisions2: "那覇",
            hourly: "https://tenki.jp/forecast/10/50/9110/47354/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "本島中南部",
            name: "座間味村",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47354/"
        },
        hall: {
            lat: 26.228949,
            long: 127.303205
        }
    },
    粟国村: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "本島中南部(那覇)",
            subdivisions1: "本島中南部",
            subdivisions2: "那覇",
            hourly: "https://tenki.jp/forecast/10/50/9110/47355/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "本島中南部",
            name: "粟国村",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47355/"
        },
        hall: {
            lat: 26.581761,
            long: 127.228860
        }
    },
    渡名喜村: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "本島中南部(那覇)",
            subdivisions1: "本島中南部",
            subdivisions2: "那覇",
            hourly: "https://tenki.jp/forecast/10/50/9110/47356/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "本島中南部",
            name: "渡名喜村",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47356/"
        },
        hall: {
            lat: 26.372110,
            long: 127.141122
        }
    },
    八重瀬町: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "本島中南部(那覇)",
            subdivisions1: "本島中南部",
            subdivisions2: "那覇",
            hourly: "https://tenki.jp/forecast/10/50/9110/47362/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "本島中南部",
            name: "八重瀬町",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47362/"
        },
        hall: {
            lat: 26.158340,
            long: 127.718649
        }
    },
    名護市: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "本島北部(名護)",
            subdivisions1: "本島北部",
            subdivisions2: "名護",
            hourly: "https://tenki.jp/forecast/10/50/9120/47209/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "本島北部",
            name: "名護市",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47209/"
        },
        hall: {
            lat: 26.591555,
            long: 127.977474
        }
    },
    国頭村: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "本島北部(名護)",
            subdivisions1: "本島北部",
            subdivisions2: "名護",
            hourly: "https://tenki.jp/forecast/10/50/9120/47301/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "本島北部",
            name: "国頭村",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47301/"
        },
        hall: {
            lat: 26.745725,
            long: 128.178303
        }
    },
    大宜味村: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "本島北部(名護)",
            subdivisions1: "本島北部",
            subdivisions2: "名護",
            hourly: "https://tenki.jp/forecast/10/50/9120/47302/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "本島北部",
            name: "大宜味村",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47302/"
        },
        hall: {
            lat: 26.701778,
            long: 128.120105
        }
    },
    東村: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "本島北部(名護)",
            subdivisions1: "本島北部",
            subdivisions2: "名護",
            hourly: "https://tenki.jp/forecast/10/50/9120/47303/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "本島北部",
            name: "東村",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47303/"
        },
        hall: {
            lat: 26.633284,
            long: 128.156870
        }
    },
    今帰仁村: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "本島北部(名護)",
            subdivisions1: "本島北部",
            subdivisions2: "名護",
            hourly: "https://tenki.jp/forecast/10/50/9120/47306/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "本島北部",
            name: "今帰仁村",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47306/"
        },
        hall: {
            lat: 26.682795,
            long: 127.972915
        }
    },
    本部町: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "本島北部(名護)",
            subdivisions1: "本島北部",
            subdivisions2: "名護",
            hourly: "https://tenki.jp/forecast/10/50/9120/47308/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "本島北部",
            name: "本部町",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47308/"
        },
        hall: {
            lat: 26.658035,
            long: 127.898175
        }
    },
    恩納村: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "本島北部(名護)",
            subdivisions1: "本島北部",
            subdivisions2: "名護",
            hourly: "https://tenki.jp/forecast/10/50/9120/47311/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "本島北部",
            name: "恩納村",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47311/"
        },
        hall: {
            lat: 26.497502,
            long: 127.853570
        }
    },
    宜野座村: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "本島北部(名護)",
            subdivisions1: "本島北部",
            subdivisions2: "名護",
            hourly: "https://tenki.jp/forecast/10/50/9120/47313/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "本島北部",
            name: "宜野座村",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47313/"
        },
        hall: {
            lat: 26.481585,
            long: 127.975615
        }
    },
    金武町: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "本島北部(名護)",
            subdivisions1: "本島北部",
            subdivisions2: "名護",
            hourly: "https://tenki.jp/forecast/10/50/9120/47314/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "本島北部",
            name: "金武町",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47314/"
        },
        hall: {
            lat: 26.456137,
            long: 127.926011
        }
    },
    伊江村: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "本島北部(名護)",
            subdivisions1: "本島北部",
            subdivisions2: "名護",
            hourly: "https://tenki.jp/forecast/10/50/9120/47315/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "本島北部",
            name: "伊江村",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47315/"
        },
        hall: {
            lat: 26.713490,
            long: 127.807014
        }
    },
    伊平屋村: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "本島北部(名護)",
            subdivisions1: "本島北部",
            subdivisions2: "名護",
            hourly: "https://tenki.jp/forecast/10/50/9120/47359/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "本島北部",
            name: "伊平屋村",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47359/"
        },
        hall: {
            lat: 27.039169,
            long: 127.968620
        }
    },
    伊是名村: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "本島北部(名護)",
            subdivisions1: "本島北部",
            subdivisions2: "名護",
            hourly: "https://tenki.jp/forecast/10/50/9120/47360/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "本島北部",
            name: "伊是名村",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47360/"
        },
        hall: {
            lat: 26.928305,
            long: 127.941226
        }
    },
    久米島町: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "久米島(久米島)",
            subdivisions1: "久米島",
            subdivisions2: "久米島",
            hourly: "https://tenki.jp/forecast/10/50/9130/47361/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "久米島",
            name: "久米島町",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47361/"
        },
        hall: {
            lat: 26.340669,
            long: 126.805021
        }
    },
    南大東村: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "大東島地方(南大東)",
            subdivisions1: "大東島地方",
            subdivisions2: "南大東",
            hourly: "https://tenki.jp/forecast/10/50/9200/47357/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "大東島地方",
            name: "南大東村",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47357/"
        },
        hall: {
            lat: 25.828903,
            long: 131.231872
        }
    },
    北大東村: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "大東島地方(南大東)",
            subdivisions1: "大東島地方",
            subdivisions2: "南大東",
            hourly: "https://tenki.jp/forecast/10/50/9200/47358/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "大東島地方",
            name: "北大東村",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47358/"
        },
        hall: {
            lat: 25.945712,
            long: 131.298917
        }
    },
    宮古島市: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "宮古島地方(宮古島)",
            subdivisions1: "宮古島地方",
            subdivisions2: "宮古島",
            hourly: "https://tenki.jp/forecast/10/50/9300/47214/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "宮古島地方",
            name: "宮古島市",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47214/"
        },
        hall: {
            lat: 24.789971,
            long: 125.294752
        }
    },
    多良間村: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "宮古島地方(宮古島)",
            subdivisions1: "宮古島地方",
            subdivisions2: "宮古島",
            hourly: "https://tenki.jp/forecast/10/50/9300/47375/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "宮古島地方",
            name: "多良間村",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47375/"
        },
        hall: {
            lat: 24.669449,
            long: 124.701693
        }
    },
    石垣市: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "石垣島地方(石垣島)",
            subdivisions1: "石垣島地方",
            subdivisions2: "石垣島",
            hourly: "https://tenki.jp/forecast/10/50/9410/47207/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "石垣島地方",
            name: "石垣市",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47207/"
        },
        hall: {
            lat: 24.344419,
            long: 124.185246
        }
    },
    竹富町: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "石垣島地方(石垣島)",
            subdivisions1: "石垣島地方",
            subdivisions2: "石垣島",
            hourly: "https://tenki.jp/forecast/10/50/9410/47381/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "石垣島地方",
            name: "竹富町",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47381/"
        },
        hall: {
            lat: 24.339518,
            long: 124.154522
        }
    },
    与那国町: {
        tj: {
            prefecture: "沖縄県",
            subdivisions: "与那国島地方(与那国島)",
            subdivisions1: "与那国島地方",
            subdivisions2: "与那国島",
            hourly: "https://tenki.jp/forecast/10/50/9420/47382/1hour.html"
        },
        wn: {
            prefecture: "沖縄",
            subdivisions: "与那国島地方",
            name: "与那国町",
            hourly: "https://weathernews.jp/onebox/tenki/okinawa/47382/"
        },
        hall: {
            lat: 24.468034,
            long: 123.004496
        }
    },
    福島市: {
        tj: {
            prefecture: "福島県",
            subdivisions: "中通り(福島)",
            subdivisions1: "中通り",
            subdivisions2: "福島",
            hourly: "https://tenki.jp/forecast/2/10/3610/7201/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "中通り",
            name: "福島市",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07201/"
        },
        hall: {
            lat: 37.760830,
            long: 140.474747
        }
    },
    郡山市: {
        tj: {
            prefecture: "福島県",
            subdivisions: "中通り(福島)",
            subdivisions1: "中通り",
            subdivisions2: "福島",
            hourly: "https://tenki.jp/forecast/2/10/3610/7203/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "中通り",
            name: "郡山市",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07203/"
        },
        hall: {
            lat: 37.400455,
            long: 140.359650
        }
    },
    白河市: {
        tj: {
            prefecture: "福島県",
            subdivisions: "中通り(福島)",
            subdivisions1: "中通り",
            subdivisions2: "福島",
            hourly: "https://tenki.jp/forecast/2/10/3610/7205/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "中通り",
            name: "白河市",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07205/"
        },
        hall: {
            lat: 37.126379,
            long: 140.210923
        }
    },
    須賀川市: {
        tj: {
            prefecture: "福島県",
            subdivisions: "中通り(福島)",
            subdivisions1: "中通り",
            subdivisions2: "福島",
            hourly: "https://tenki.jp/forecast/2/10/3610/7207/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "中通り",
            name: "須賀川市",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07207/"
        },
        hall: {
            lat: 37.286504,
            long: 140.372655
        }
    },
    二本松市: {
        tj: {
            prefecture: "福島県",
            subdivisions: "中通り(福島)",
            subdivisions1: "中通り",
            subdivisions2: "福島",
            hourly: "https://tenki.jp/forecast/2/10/3610/7210/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "中通り",
            name: "二本松市",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07210/"
        },
        hall: {
            lat: 37.584783,
            long: 140.431199
        }
    },
    田村市: {
        tj: {
            prefecture: "福島県",
            subdivisions: "中通り(福島)",
            subdivisions1: "中通り",
            subdivisions2: "福島",
            hourly: "https://tenki.jp/forecast/2/10/3610/7211/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "中通り",
            name: "田村市",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07211/"
        },
        hall: {
            lat: 37.440621,
            long: 140.576310
        }
    },
    伊達市: {
        tj: {
            prefecture: "福島県",
            subdivisions: "中通り(福島)",
            subdivisions1: "中通り",
            subdivisions2: "福島",
            hourly: "https://tenki.jp/forecast/2/10/3610/7213/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "中通り",
            name: "伊達市",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07213/"
        },
        hall: {
            lat: 42.471898,
            long: 140.864702
        }
    },
    本宮市: {
        tj: {
            prefecture: "福島県",
            subdivisions: "中通り(福島)",
            subdivisions1: "中通り",
            subdivisions2: "福島",
            hourly: "https://tenki.jp/forecast/2/10/3610/7214/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "中通り",
            name: "本宮市",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07214/"
        },
        hall: {
            lat: 37.513162,
            long: 140.393877
        }
    },
    桑折町: {
        tj: {
            prefecture: "福島県",
            subdivisions: "中通り(福島)",
            subdivisions1: "中通り",
            subdivisions2: "福島",
            hourly: "https://tenki.jp/forecast/2/10/3610/7301/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "中通り",
            name: "桑折町",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07301/"
        },
        hall: {
            lat: 37.854720,
            long: 140.520851
        }
    },
    国見町: {
        tj: {
            prefecture: "福島県",
            subdivisions: "中通り(福島)",
            subdivisions1: "中通り",
            subdivisions2: "福島",
            hourly: "https://tenki.jp/forecast/2/10/3610/7303/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "中通り",
            name: "国見町",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07303/"
        },
        hall: {
            lat: 37.876810,
            long: 140.549273
        }
    },
    川俣町: {
        tj: {
            prefecture: "福島県",
            subdivisions: "中通り(福島)",
            subdivisions1: "中通り",
            subdivisions2: "福島",
            hourly: "https://tenki.jp/forecast/2/10/3610/7308/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "中通り",
            name: "川俣町",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07308/"
        },
        hall: {
            lat: 37.664989,
            long: 140.598244
        }
    },
    大玉村: {
        tj: {
            prefecture: "福島県",
            subdivisions: "中通り(福島)",
            subdivisions1: "中通り",
            subdivisions2: "福島",
            hourly: "https://tenki.jp/forecast/2/10/3610/7322/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "中通り",
            name: "大玉村",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07322/"
        },
        hall: {
            lat: 37.534362,
            long: 140.371058
        }
    },
    鏡石町: {
        tj: {
            prefecture: "福島県",
            subdivisions: "中通り(福島)",
            subdivisions1: "中通り",
            subdivisions2: "福島",
            hourly: "https://tenki.jp/forecast/2/10/3610/7342/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "中通り",
            name: "鏡石町",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07342/"
        },
        hall: {
            lat: 37.252858,
            long: 140.343405
        }
    },
    天栄村: {
        tj: {
            prefecture: "福島県",
            subdivisions: "中通り(福島)",
            subdivisions1: "中通り",
            subdivisions2: "福島",
            hourly: "https://tenki.jp/forecast/2/10/3610/7344/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "会津",
            name: "天栄村",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07344/"
        },
        hall: {
            lat: 37.255576,
            long: 140.247165
        }
    },
    西郷村: {
        tj: {
            prefecture: "福島県",
            subdivisions: "中通り(福島)",
            subdivisions1: "中通り",
            subdivisions2: "福島",
            hourly: "https://tenki.jp/forecast/2/10/3610/7461/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "中通り",
            name: "西郷村",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07461/"
        },
        hall: {
            lat: 37.141767,
            long: 140.155299
        }
    },
    泉崎村: {
        tj: {
            prefecture: "福島県",
            subdivisions: "中通り(福島)",
            subdivisions1: "中通り",
            subdivisions2: "福島",
            hourly: "https://tenki.jp/forecast/2/10/3610/7464/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "中通り",
            name: "泉崎村",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07464/"
        },
        hall: {
            lat: 37.153784,
            long: 140.303363
        }
    },
    中島村: {
        tj: {
            prefecture: "福島県",
            subdivisions: "中通り(福島)",
            subdivisions1: "中通り",
            subdivisions2: "福島",
            hourly: "https://tenki.jp/forecast/2/10/3610/7465/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "中通り",
            name: "中島村",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07465/"
        },
        hall: {
            lat: 37.148756,
            long: 140.350230
        }
    },
    矢吹町: {
        tj: {
            prefecture: "福島県",
            subdivisions: "中通り(福島)",
            subdivisions1: "中通り",
            subdivisions2: "福島",
            hourly: "https://tenki.jp/forecast/2/10/3610/7466/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "中通り",
            name: "矢吹町",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07466/"
        },
        hall: {
            lat: 37.201221,
            long: 140.338493
        }
    },
    棚倉町: {
        tj: {
            prefecture: "福島県",
            subdivisions: "中通り(福島)",
            subdivisions1: "中通り",
            subdivisions2: "福島",
            hourly: "https://tenki.jp/forecast/2/10/3610/7481/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "中通り",
            name: "棚倉町",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07481/"
        },
        hall: {
            lat: 37.029867,
            long: 140.379591
        }
    },
    矢祭町: {
        tj: {
            prefecture: "福島県",
            subdivisions: "中通り(福島)",
            subdivisions1: "中通り",
            subdivisions2: "福島",
            hourly: "https://tenki.jp/forecast/2/10/3610/7482/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "中通り",
            name: "矢祭町",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07482/"
        },
        hall: {
            lat: 36.871334,
            long: 140.424755
        }
    },
    塙町: {
        tj: {
            prefecture: "福島県",
            subdivisions: "中通り(福島)",
            subdivisions1: "中通り",
            subdivisions2: "福島",
            hourly: "https://tenki.jp/forecast/2/10/3610/7483/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "中通り",
            name: "塙町",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07483/"
        },
        hall: {
            lat: 36.957238,
            long: 140.409647
        }
    },
    鮫川村: {
        tj: {
            prefecture: "福島県",
            subdivisions: "中通り(福島)",
            subdivisions1: "中通り",
            subdivisions2: "福島",
            hourly: "https://tenki.jp/forecast/2/10/3610/7484/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "中通り",
            name: "鮫川村",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07484/"
        },
        hall: {
            lat: 37.042229,
            long: 140.509699
        }
    },
    石川町: {
        tj: {
            prefecture: "福島県",
            subdivisions: "中通り(福島)",
            subdivisions1: "中通り",
            subdivisions2: "福島",
            hourly: "https://tenki.jp/forecast/2/10/3610/7501/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "中通り",
            name: "石川町",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07501/"
        },
        hall: {
            lat: 37.157072,
            long: 140.446775
        }
    },
    玉川村: {
        tj: {
            prefecture: "福島県",
            subdivisions: "中通り(福島)",
            subdivisions1: "中通り",
            subdivisions2: "福島",
            hourly: "https://tenki.jp/forecast/2/10/3610/7502/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "中通り",
            name: "玉川村",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07502/"
        },
        hall: {
            lat: 37.210718,
            long: 140.408939
        }
    },
    平田村: {
        tj: {
            prefecture: "福島県",
            subdivisions: "中通り(福島)",
            subdivisions1: "中通り",
            subdivisions2: "福島",
            hourly: "https://tenki.jp/forecast/2/10/3610/7503/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "中通り",
            name: "平田村",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07503/"
        },
        hall: {
            lat: 37.221995,
            long: 140.575655
        }
    },
    浅川町: {
        tj: {
            prefecture: "福島県",
            subdivisions: "中通り(福島)",
            subdivisions1: "中通り",
            subdivisions2: "福島",
            hourly: "https://tenki.jp/forecast/2/10/3610/7504/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "中通り",
            name: "浅川町",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07504/"
        },
        hall: {
            lat: 37.080947,
            long: 140.412852
        }
    },
    古殿町: {
        tj: {
            prefecture: "福島県",
            subdivisions: "中通り(福島)",
            subdivisions1: "中通り",
            subdivisions2: "福島",
            hourly: "https://tenki.jp/forecast/2/10/3610/7505/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "中通り",
            name: "古殿町",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07505/"
        },
        hall: {
            lat: 37.089182,
            long: 140.555692
        }
    },
    三春町: {
        tj: {
            prefecture: "福島県",
            subdivisions: "中通り(福島)",
            subdivisions1: "中通り",
            subdivisions2: "福島",
            hourly: "https://tenki.jp/forecast/2/10/3610/7521/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "中通り",
            name: "三春町",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07521/"
        },
        hall: {
            lat: 37.440500,
            long: 140.493389
        }
    },
    小野町: {
        tj: {
            prefecture: "福島県",
            subdivisions: "中通り(福島)",
            subdivisions1: "中通り",
            subdivisions2: "福島",
            hourly: "https://tenki.jp/forecast/2/10/3610/7522/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "中通り",
            name: "小野町",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07522/"
        },
        hall: {
            lat: 37.286823,
            long: 140.626280
        }
    },
    いわき市: {
        tj: {
            prefecture: "福島県",
            subdivisions: "浜通り(小名浜)",
            subdivisions1: "浜通り",
            subdivisions2: "小名浜",
            hourly: "https://tenki.jp/forecast/2/10/3620/7204/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "浜通り",
            name: "いわき市",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07204/"
        },
        hall: {
            lat: 37.050456,
            long: 140.887687
        }
    },
    相馬市: {
        tj: {
            prefecture: "福島県",
            subdivisions: "浜通り(小名浜)",
            subdivisions1: "浜通り",
            subdivisions2: "小名浜",
            hourly: "https://tenki.jp/forecast/2/10/3620/7209/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "浜通り",
            name: "相馬市",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07209/"
        },
        hall: {
            lat: 37.797353,
            long: 140.918937
        }
    },
    南相馬市: {
        tj: {
            prefecture: "福島県",
            subdivisions: "浜通り(小名浜)",
            subdivisions1: "浜通り",
            subdivisions2: "小名浜",
            hourly: "https://tenki.jp/forecast/2/10/3620/7212/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "浜通り",
            name: "南相馬市",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07212/"
        },
        hall: {
            lat: 37.642197,
            long: 140.957237
        }
    },
    広野町: {
        tj: {
            prefecture: "福島県",
            subdivisions: "浜通り(小名浜)",
            subdivisions1: "浜通り",
            subdivisions2: "小名浜",
            hourly: "https://tenki.jp/forecast/2/10/3620/7541/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "浜通り",
            name: "広野町",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07541/"
        },
        hall: {
            lat: 37.214403,
            long: 140.994561
        }
    },
    楢葉町: {
        tj: {
            prefecture: "福島県",
            subdivisions: "浜通り(小名浜)",
            subdivisions1: "浜通り",
            subdivisions2: "小名浜",
            hourly: "https://tenki.jp/forecast/2/10/3620/7542/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "浜通り",
            name: "楢葉町",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07542/"
        },
        hall: {
            lat: 37.282605,
            long: 140.993465
        }
    },
    富岡町: {
        tj: {
            prefecture: "福島県",
            subdivisions: "浜通り(小名浜)",
            subdivisions1: "浜通り",
            subdivisions2: "小名浜",
            hourly: "https://tenki.jp/forecast/2/10/3620/7543/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "浜通り",
            name: "富岡町",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07543/"
        },
        hall: {
            lat: 37.345496,
            long: 141.008652
        }
    },
    川内村: {
        tj: {
            prefecture: "福島県",
            subdivisions: "浜通り(小名浜)",
            subdivisions1: "浜通り",
            subdivisions2: "小名浜",
            hourly: "https://tenki.jp/forecast/2/10/3620/7544/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "浜通り",
            name: "川内村",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07544/"
        },
        hall: {
            lat: 37.337680,
            long: 140.809266
        }
    },
    大熊町: {
        tj: {
            prefecture: "福島県",
            subdivisions: "浜通り(小名浜)",
            subdivisions1: "浜通り",
            subdivisions2: "小名浜",
            hourly: "https://tenki.jp/forecast/2/10/3620/7545/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "浜通り",
            name: "大熊町",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07545/"
        },
        hall: {
            lat: 37.382087,
            long: 140.958264
        }
    },
    双葉町: {
        tj: {
            prefecture: "福島県",
            subdivisions: "浜通り(小名浜)",
            subdivisions1: "浜通り",
            subdivisions2: "小名浜",
            hourly: "https://tenki.jp/forecast/2/10/3620/7546/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "浜通り",
            name: "双葉町",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07546/"
        },
        hall: {
            lat: 37.452904,
            long: 141.006374
        }
    },
    浪江町: {
        tj: {
            prefecture: "福島県",
            subdivisions: "浜通り(小名浜)",
            subdivisions1: "浜通り",
            subdivisions2: "小名浜",
            hourly: "https://tenki.jp/forecast/2/10/3620/7547/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "浜通り",
            name: "浪江町",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07547/"
        },
        hall: {
            lat: 37.494594,
            long: 141.000746
        }
    },
    葛尾村: {
        tj: {
            prefecture: "福島県",
            subdivisions: "浜通り(小名浜)",
            subdivisions1: "浜通り",
            subdivisions2: "小名浜",
            hourly: "https://tenki.jp/forecast/2/10/3620/7548/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "浜通り",
            name: "葛尾村",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07548/"
        },
        hall: {
            lat: 37.503547,
            long: 140.764518
        }
    },
    新地町: {
        tj: {
            prefecture: "福島県",
            subdivisions: "浜通り(小名浜)",
            subdivisions1: "浜通り",
            subdivisions2: "小名浜",
            hourly: "https://tenki.jp/forecast/2/10/3620/7561/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "浜通り",
            name: "新地町",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07561/"
        },
        hall: {
            lat: 37.876379,
            long: 140.919591
        }
    },
    飯舘村: {
        tj: {
            prefecture: "福島県",
            subdivisions: "浜通り(小名浜)",
            subdivisions1: "浜通り",
            subdivisions2: "小名浜",
            hourly: "https://tenki.jp/forecast/2/10/3620/7564/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "浜通り",
            name: "飯舘村",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07564/"
        },
        hall: {
            lat: 37.678947,
            long: 140.735091
        }
    },
    会津若松市: {
        tj: {
            prefecture: "福島県",
            subdivisions: "会津(若松)",
            subdivisions1: "会津",
            subdivisions2: "若松",
            hourly: "https://tenki.jp/forecast/2/10/3630/7202/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "会津",
            name: "会津若松市",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07202/"
        },
        hall: {
            lat: 37.494842,
            long: 139.929707
        }
    },
    喜多方市: {
        tj: {
            prefecture: "福島県",
            subdivisions: "会津(若松)",
            subdivisions1: "会津",
            subdivisions2: "若松",
            hourly: "https://tenki.jp/forecast/2/10/3630/7208/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "会津",
            name: "喜多方市",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07208/"
        },
        hall: {
            lat: 37.651134,
            long: 139.874484
        }
    },
    下郷町: {
        tj: {
            prefecture: "福島県",
            subdivisions: "会津(若松)",
            subdivisions1: "会津",
            subdivisions2: "若松",
            hourly: "https://tenki.jp/forecast/2/10/3630/7362/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "会津",
            name: "下郷町",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07362/"
        },
        hall: {
            lat: 37.255571,
            long: 139.872084
        }
    },
    檜枝岐村: {
        tj: {
            prefecture: "福島県",
            subdivisions: "会津(若松)",
            subdivisions1: "会津",
            subdivisions2: "若松",
            hourly: "https://tenki.jp/forecast/2/10/3630/7364/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "会津",
            name: "檜枝岐村",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07364/"
        },
        hall: {
            lat: 37.024141,
            long: 139.388941
        }
    },
    只見町: {
        tj: {
            prefecture: "福島県",
            subdivisions: "会津(若松)",
            subdivisions1: "会津",
            subdivisions2: "若松",
            hourly: "https://tenki.jp/forecast/2/10/3630/7367/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "会津",
            name: "只見町",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07367/"
        },
        hall: {
            lat: 37.348657,
            long: 139.315789
        }
    },
    南会津町: {
        tj: {
            prefecture: "福島県",
            subdivisions: "会津(若松)",
            subdivisions1: "会津",
            subdivisions2: "若松",
            hourly: "https://tenki.jp/forecast/2/10/3630/7368/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "会津",
            name: "南会津町",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07368/"
        },
        hall: {
            lat: 37.200389,
            long: 139.773215
        }
    },
    北塩原村: {
        tj: {
            prefecture: "福島県",
            subdivisions: "会津(若松)",
            subdivisions1: "会津",
            subdivisions2: "若松",
            hourly: "https://tenki.jp/forecast/2/10/3630/7402/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "会津",
            name: "北塩原村",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07402/"
        },
        hall: {
            lat: 37.655673,
            long: 139.937383
        }
    },
    西会津町: {
        tj: {
            prefecture: "福島県",
            subdivisions: "会津(若松)",
            subdivisions1: "会津",
            subdivisions2: "若松",
            hourly: "https://tenki.jp/forecast/2/10/3630/7405/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "会津",
            name: "西会津町",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07405/"
        },
        hall: {
            lat: 37.587396,
            long: 139.649301
        }
    },
    磐梯町: {
        tj: {
            prefecture: "福島県",
            subdivisions: "会津(若松)",
            subdivisions1: "会津",
            subdivisions2: "若松",
            hourly: "https://tenki.jp/forecast/2/10/3630/7407/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "会津",
            name: "磐梯町",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07407/"
        },
        hall: {
            lat: 37.562099,
            long: 139.988766
        }
    },
    猪苗代町: {
        tj: {
            prefecture: "福島県",
            subdivisions: "会津(若松)",
            subdivisions1: "会津",
            subdivisions2: "若松",
            hourly: "https://tenki.jp/forecast/2/10/3630/7408/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "会津",
            name: "猪苗代町",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07408/"
        },
        hall: {
            lat: 37.557799,
            long: 140.104794
        }
    },
    会津坂下町: {
        tj: {
            prefecture: "福島県",
            subdivisions: "会津(若松)",
            subdivisions1: "会津",
            subdivisions2: "若松",
            hourly: "https://tenki.jp/forecast/2/10/3630/7421/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "会津",
            name: "会津坂下町",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07421/"
        },
        hall: {
            lat: 37.561457,
            long: 139.821732
        }
    },
    湯川村: {
        tj: {
            prefecture: "福島県",
            subdivisions: "会津(若松)",
            subdivisions1: "会津",
            subdivisions2: "若松",
            hourly: "https://tenki.jp/forecast/2/10/3630/7422/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "会津",
            name: "湯川村",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07422/"
        },
        hall: {
            lat: 37.565351,
            long: 139.886756
        }
    },
    柳津町: {
        tj: {
            prefecture: "福島県",
            subdivisions: "会津(若松)",
            subdivisions1: "会津",
            subdivisions2: "若松",
            hourly: "https://tenki.jp/forecast/2/10/3630/7423/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "会津",
            name: "柳津町",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07423/"
        },
        hall: {
            lat: 37.526035,
            long: 139.719552
        }
    },
    三島町: {
        tj: {
            prefecture: "福島県",
            subdivisions: "会津(若松)",
            subdivisions1: "会津",
            subdivisions2: "若松",
            hourly: "https://tenki.jp/forecast/2/10/3630/7444/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "会津",
            name: "三島町",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07444/"
        },
        hall: {
            lat: 37.470292,
            long: 139.644441
        }
    },
    金山町: {
        tj: {
            prefecture: "福島県",
            subdivisions: "会津(若松)",
            subdivisions1: "会津",
            subdivisions2: "若松",
            hourly: "https://tenki.jp/forecast/2/10/3630/7445/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "会津",
            name: "金山町",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07445/"
        },
        hall: {
            lat: 38.883440,
            long: 140.339367
        }
    },
    昭和村: {
        tj: {
            prefecture: "福島県",
            subdivisions: "会津(若松)",
            subdivisions1: "会津",
            subdivisions2: "若松",
            hourly: "https://tenki.jp/forecast/2/10/3630/7446/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "会津",
            name: "昭和村",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07446/"
        },
        hall: {
            lat: 37.335446,
            long: 139.610666
        }
    },
    会津美里町: {
        tj: {
            prefecture: "福島県",
            subdivisions: "会津(若松)",
            subdivisions1: "会津",
            subdivisions2: "若松",
            hourly: "https://tenki.jp/forecast/2/10/3630/7447/1hour.html"
        },
        wn: {
            prefecture: "福島",
            subdivisions: "会津",
            name: "会津美里町",
            hourly: "https://weathernews.jp/onebox/tenki/fukushima/07447/"
        },
        hall: {
            lat: 37.464985,
            long: 139.834177
        }
    },
    青森市: {
        tj: {
            prefecture: "青森県",
            subdivisions: "津軽(青森)",
            subdivisions1: "津軽",
            subdivisions2: "青森",
            hourly: "https://tenki.jp/forecast/2/5/3110/2201/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "津軽",
            name: "青森市",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02201/"
        },
        hall: {
            lat: 40.822640,
            long: 140.746957
        }
    },
    弘前市: {
        tj: {
            prefecture: "青森県",
            subdivisions: "津軽(青森)",
            subdivisions1: "津軽",
            subdivisions2: "青森",
            hourly: "https://tenki.jp/forecast/2/5/3110/2202/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "津軽",
            name: "弘前市",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02202/"
        },
        hall: {
            lat: 40.602965,
            long: 140.464008
        }
    },
    黒石市: {
        tj: {
            prefecture: "青森県",
            subdivisions: "津軽(青森)",
            subdivisions1: "津軽",
            subdivisions2: "青森",
            hourly: "https://tenki.jp/forecast/2/5/3110/2204/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "津軽",
            name: "黒石市",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02204/"
        },
        hall: {
            lat: 40.642608,
            long: 140.594547
        }
    },
    五所川原市: {
        tj: {
            prefecture: "青森県",
            subdivisions: "津軽(青森)",
            subdivisions1: "津軽",
            subdivisions2: "青森",
            hourly: "https://tenki.jp/forecast/2/5/3110/2205/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "津軽",
            name: "五所川原市",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02205/"
        },
        hall: {
            lat: 40.807835,
            long: 140.446118
        }
    },
    つがる市: {
        tj: {
            prefecture: "青森県",
            subdivisions: "津軽(青森)",
            subdivisions1: "津軽",
            subdivisions2: "青森",
            hourly: "https://tenki.jp/forecast/2/5/3110/2209/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "津軽",
            name: "つがる市",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02209/"
        },
        hall: {
            lat: 40.808836,
            long: 140.380195
        }
    },
    平川市: {
        tj: {
            prefecture: "青森県",
            subdivisions: "津軽(青森)",
            subdivisions1: "津軽",
            subdivisions2: "青森",
            hourly: "https://tenki.jp/forecast/2/5/3110/2210/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "津軽",
            name: "平川市",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02210/"
        },
        hall: {
            lat: 40.583742,
            long: 140.567123
        }
    },
    平内町: {
        tj: {
            prefecture: "青森県",
            subdivisions: "津軽(青森)",
            subdivisions1: "津軽",
            subdivisions2: "青森",
            hourly: "https://tenki.jp/forecast/2/5/3110/2301/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "津軽",
            name: "平内町",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02301/"
        },
        hall: {
            lat: 40.926023,
            long: 140.955884
        }
    },
    今別町: {
        tj: {
            prefecture: "青森県",
            subdivisions: "津軽(青森)",
            subdivisions1: "津軽",
            subdivisions2: "青森",
            hourly: "https://tenki.jp/forecast/2/5/3110/2303/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "津軽",
            name: "今別町",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02303/"
        },
        hall: {
            lat: 41.181875,
            long: 140.481610
        }
    },
    蓬田村: {
        tj: {
            prefecture: "青森県",
            subdivisions: "津軽(青森)",
            subdivisions1: "津軽",
            subdivisions2: "青森",
            hourly: "https://tenki.jp/forecast/2/5/3110/2304/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "津軽",
            name: "蓬田村",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02304/"
        },
        hall: {
            lat: 40.971779,
            long: 140.656053
        }
    },
    外ヶ浜町: {
        tj: {
            prefecture: "青森県",
            subdivisions: "津軽(青森)",
            subdivisions1: "津軽",
            subdivisions2: "青森",
            hourly: "https://tenki.jp/forecast/2/5/3110/2307/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "津軽",
            name: "外ヶ浜町",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02307/"
        },
        hall: {
            lat: 41.043159,
            long: 140.632243
        }
    },
    鰺ヶ沢町: {
        tj: {
            prefecture: "青森県",
            subdivisions: "津軽(青森)",
            subdivisions1: "津軽",
            subdivisions2: "青森",
            hourly: "https://tenki.jp/forecast/2/5/3110/2321/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "津軽",
            name: "鰺ヶ沢町",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02321/"
        },
        hall: {
            lat: 40.783011,
            long: 140.233912
        }
    },
    深浦町: {
        tj: {
            prefecture: "青森県",
            subdivisions: "津軽(青森)",
            subdivisions1: "津軽",
            subdivisions2: "青森",
            hourly: "https://tenki.jp/forecast/2/5/3110/2323/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "津軽",
            name: "深浦町",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02323/"
        },
        hall: {
            lat: 40.647876,
            long: 139.927431
        }
    },
    西目屋村: {
        tj: {
            prefecture: "青森県",
            subdivisions: "津軽(青森)",
            subdivisions1: "津軽",
            subdivisions2: "青森",
            hourly: "https://tenki.jp/forecast/2/5/3110/2343/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "津軽",
            name: "西目屋村",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02343/"
        },
        hall: {
            lat: 40.577437,
            long: 140.297171
        }
    },
    藤崎町: {
        tj: {
            prefecture: "青森県",
            subdivisions: "津軽(青森)",
            subdivisions1: "津軽",
            subdivisions2: "青森",
            hourly: "https://tenki.jp/forecast/2/5/3110/2361/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "津軽",
            name: "藤崎町",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02361/"
        },
        hall: {
            lat: 40.656064,
            long: 140.502824
        }
    },
    大鰐町: {
        tj: {
            prefecture: "青森県",
            subdivisions: "津軽(青森)",
            subdivisions1: "津軽",
            subdivisions2: "青森",
            hourly: "https://tenki.jp/forecast/2/5/3110/2362/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "津軽",
            name: "大鰐町",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02362/"
        },
        hall: {
            lat: 40.518356,
            long: 140.567878
        }
    },
    田舎館村: {
        tj: {
            prefecture: "青森県",
            subdivisions: "津軽(青森)",
            subdivisions1: "津軽",
            subdivisions2: "青森",
            hourly: "https://tenki.jp/forecast/2/5/3110/2367/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "津軽",
            name: "田舎館村",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02367/"
        },
        hall: {
            lat: 40.631259,
            long: 140.550198
        }
    },
    板柳町: {
        tj: {
            prefecture: "青森県",
            subdivisions: "津軽(青森)",
            subdivisions1: "津軽",
            subdivisions2: "青森",
            hourly: "https://tenki.jp/forecast/2/5/3110/2381/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "津軽",
            name: "板柳町",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02381/"
        },
        hall: {
            lat: 40.695954,
            long: 140.457700
        }
    },
    鶴田町: {
        tj: {
            prefecture: "青森県",
            subdivisions: "津軽(青森)",
            subdivisions1: "津軽",
            subdivisions2: "青森",
            hourly: "https://tenki.jp/forecast/2/5/3110/2384/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "津軽",
            name: "鶴田町",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02384/"
        },
        hall: {
            lat: 40.758819,
            long: 140.428702
        }
    },
    中泊町: {
        tj: {
            prefecture: "青森県",
            subdivisions: "津軽(青森)",
            subdivisions1: "津軽",
            subdivisions2: "青森",
            hourly: "https://tenki.jp/forecast/2/5/3110/2387/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "津軽",
            name: "中泊町",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02387/"
        },
        hall: {
            lat: 40.960427,
            long: 140.434122
        }
    },
    むつ市: {
        tj: {
            prefecture: "青森県",
            subdivisions: "下北(むつ)",
            subdivisions1: "下北",
            subdivisions2: "むつ",
            hourly: "https://tenki.jp/forecast/2/5/3120/2208/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "下北",
            name: "むつ市",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02208/"
        },
        hall: {
            lat: 41.292835,
            long: 141.183174
        }
    },
    大間町: {
        tj: {
            prefecture: "青森県",
            subdivisions: "下北(むつ)",
            subdivisions1: "下北",
            subdivisions2: "むつ",
            hourly: "https://tenki.jp/forecast/2/5/3120/2423/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "下北",
            name: "大間町",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02423/"
        },
        hall: {
            lat: 41.522388,
            long: 140.904830
        }
    },
    東通村: {
        tj: {
            prefecture: "青森県",
            subdivisions: "下北(むつ)",
            subdivisions1: "下北",
            subdivisions2: "むつ",
            hourly: "https://tenki.jp/forecast/2/5/3120/2424/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "下北",
            name: "東通村",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02424/"
        },
        hall: {
            lat: 41.277726,
            long: 141.328900
        }
    },
    風間浦村: {
        tj: {
            prefecture: "青森県",
            subdivisions: "下北(むつ)",
            subdivisions1: "下北",
            subdivisions2: "むつ",
            hourly: "https://tenki.jp/forecast/2/5/3120/2425/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "下北",
            name: "風間浦村",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02425/"
        },
        hall: {
            lat: 41.487487,
            long: 140.995534
        }
    },
    佐井村: {
        tj: {
            prefecture: "青森県",
            subdivisions: "下北(むつ)",
            subdivisions1: "下北",
            subdivisions2: "むつ",
            hourly: "https://tenki.jp/forecast/2/5/3120/2426/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "下北",
            name: "佐井村",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02426/"
        },
        hall: {
            lat: 41.429718,
            long: 140.859175
        }
    },
    八戸市: {
        tj: {
            prefecture: "青森県",
            subdivisions: "三八上北(八戸)",
            subdivisions1: "三八上北",
            subdivisions2: "八戸",
            hourly: "https://tenki.jp/forecast/2/5/3130/2203/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "三八上北",
            name: "八戸市",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02203/"
        },
        hall: {
            lat: 40.512278,
            long: 141.488404
        }
    },
    十和田市: {
        tj: {
            prefecture: "青森県",
            subdivisions: "三八上北(八戸)",
            subdivisions1: "三八上北",
            subdivisions2: "八戸",
            hourly: "https://tenki.jp/forecast/2/5/3130/2206/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "三八上北",
            name: "十和田市",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02206/"
        },
        hall: {
            lat: 40.612703,
            long: 141.205910
        }
    },
    三沢市: {
        tj: {
            prefecture: "青森県",
            subdivisions: "三八上北(八戸)",
            subdivisions1: "三八上北",
            subdivisions2: "八戸",
            hourly: "https://tenki.jp/forecast/2/5/3130/2207/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "三八上北",
            name: "三沢市",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02207/"
        },
        hall: {
            lat: 40.683078,
            long: 141.369093
        }
    },
    野辺地町: {
        tj: {
            prefecture: "青森県",
            subdivisions: "三八上北(八戸)",
            subdivisions1: "三八上北",
            subdivisions2: "八戸",
            hourly: "https://tenki.jp/forecast/2/5/3130/2401/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "三八上北",
            name: "野辺地町",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02401/"
        },
        hall: {
            lat: 40.864447,
            long: 141.128685
        }
    },
    七戸町: {
        tj: {
            prefecture: "青森県",
            subdivisions: "三八上北(八戸)",
            subdivisions1: "三八上北",
            subdivisions2: "八戸",
            hourly: "https://tenki.jp/forecast/2/5/3130/2402/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "三八上北",
            name: "七戸町",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02402/"
        },
        hall: {
            lat: 40.744714,
            long: 141.157991
        }
    },
    六戸町: {
        tj: {
            prefecture: "青森県",
            subdivisions: "三八上北(八戸)",
            subdivisions1: "三八上北",
            subdivisions2: "八戸",
            hourly: "https://tenki.jp/forecast/2/5/3130/2405/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "三八上北",
            name: "六戸町",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02405/"
        },
        hall: {
            lat: 40.609526,
            long: 141.324958
        }
    },
    横浜町: {
        tj: {
            prefecture: "青森県",
            subdivisions: "三八上北(八戸)",
            subdivisions1: "三八上北",
            subdivisions2: "八戸",
            hourly: "https://tenki.jp/forecast/2/5/3130/2406/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "三八上北",
            name: "横浜町",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02406/"
        },
        hall: {
            lat: 41.083155,
            long: 141.247782
        }
    },
    東北町: {
        tj: {
            prefecture: "青森県",
            subdivisions: "三八上北(八戸)",
            subdivisions1: "三八上北",
            subdivisions2: "八戸",
            hourly: "https://tenki.jp/forecast/2/5/3130/2408/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "三八上北",
            name: "東北町",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02408/"
        },
        hall: {
            lat: 40.727871,
            long: 141.257888
        }
    },
    六ヶ所村: {
        tj: {
            prefecture: "青森県",
            subdivisions: "三八上北(八戸)",
            subdivisions1: "三八上北",
            subdivisions2: "八戸",
            hourly: "https://tenki.jp/forecast/2/5/3130/2411/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "三八上北",
            name: "六ヶ所村",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02411/"
        },
        hall: {
            lat: 40.967375,
            long: 141.374434
        }
    },
    おいらせ町: {
        tj: {
            prefecture: "青森県",
            subdivisions: "三八上北(八戸)",
            subdivisions1: "三八上北",
            subdivisions2: "八戸",
            hourly: "https://tenki.jp/forecast/2/5/3130/2412/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "三八上北",
            name: "おいらせ町",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02412/"
        },
        hall: {
            lat: 40.599104,
            long: 141.397822
        }
    },
    三戸町: {
        tj: {
            prefecture: "青森県",
            subdivisions: "三八上北(八戸)",
            subdivisions1: "三八上北",
            subdivisions2: "八戸",
            hourly: "https://tenki.jp/forecast/2/5/3130/2441/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "三八上北",
            name: "三戸町",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02441/"
        },
        hall: {
            lat: 40.378423,
            long: 141.258740
        }
    },
    五戸町: {
        tj: {
            prefecture: "青森県",
            subdivisions: "三八上北(八戸)",
            subdivisions1: "三八上北",
            subdivisions2: "八戸",
            hourly: "https://tenki.jp/forecast/2/5/3130/2442/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "三八上北",
            name: "五戸町",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02442/"
        },
        hall: {
            lat: 40.531208,
            long: 141.307813
        }
    },
    田子町: {
        tj: {
            prefecture: "青森県",
            subdivisions: "三八上北(八戸)",
            subdivisions1: "三八上北",
            subdivisions2: "八戸",
            hourly: "https://tenki.jp/forecast/2/5/3130/2443/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "三八上北",
            name: "田子町",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02443/"
        },
        hall: {
            lat: 40.340030,
            long: 141.152150
        }
    },
    南部町: {
        tj: {
            prefecture: "青森県",
            subdivisions: "三八上北(八戸)",
            subdivisions1: "三八上北",
            subdivisions2: "八戸",
            hourly: "https://tenki.jp/forecast/2/5/3130/2445/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "三八上北",
            name: "南部町",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02445/"
        },
        hall: {
            lat: 40.420343,
            long: 141.330307
        }
    },
    階上町: {
        tj: {
            prefecture: "青森県",
            subdivisions: "三八上北(八戸)",
            subdivisions1: "三八上北",
            subdivisions2: "八戸",
            hourly: "https://tenki.jp/forecast/2/5/3130/2446/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "三八上北",
            name: "階上町",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02446/"
        },
        hall: {
            lat: 40.452454,
            long: 141.621001
        }
    },
    新郷村: {
        tj: {
            prefecture: "青森県",
            subdivisions: "三八上北(八戸)",
            subdivisions1: "三八上北",
            subdivisions2: "八戸",
            hourly: "https://tenki.jp/forecast/2/5/3130/2450/1hour.html"
        },
        wn: {
            prefecture: "青森",
            subdivisions: "三八上北",
            name: "新郷村",
            hourly: "https://weathernews.jp/onebox/tenki/aomori/02450/"
        },
        hall: {
            lat: 40.465784,
            long: 141.173400
        }
    },
    盛岡市: {
        tj: {
            prefecture: "岩手県",
            subdivisions: "内陸(盛岡)",
            subdivisions1: "内陸",
            subdivisions2: "盛岡",
            hourly: "https://tenki.jp/forecast/2/6/3310/3201/1hour.html"
        },
        wn: {
            prefecture: "岩手",
            subdivisions: "内陸",
            name: "盛岡市",
            hourly: "https://weathernews.jp/onebox/tenki/iwate/03201/"
        },
        hall: {
            lat: 39.701795,
            long: 141.154183
        }
    },
    花巻市: {
        tj: {
            prefecture: "岩手県",
            subdivisions: "内陸(盛岡)",
            subdivisions1: "内陸",
            subdivisions2: "盛岡",
            hourly: "https://tenki.jp/forecast/2/6/3310/3205/1hour.html"
        },
        wn: {
            prefecture: "岩手",
            subdivisions: "内陸",
            name: "花巻市",
            hourly: "https://weathernews.jp/onebox/tenki/iwate/03205/"
        },
        hall: {
            lat: 39.388609,
            long: 141.116854
        }
    },
    北上市: {
        tj: {
            prefecture: "岩手県",
            subdivisions: "内陸(盛岡)",
            subdivisions1: "内陸",
            subdivisions2: "盛岡",
            hourly: "https://tenki.jp/forecast/2/6/3310/3206/1hour.html"
        },
        wn: {
            prefecture: "岩手",
            subdivisions: "内陸",
            name: "北上市",
            hourly: "https://weathernews.jp/onebox/tenki/iwate/03206/"
        },
        hall: {
            lat: 39.286817,
            long: 141.113157
        }
    },
    遠野市: {
        tj: {
            prefecture: "岩手県",
            subdivisions: "内陸(盛岡)",
            subdivisions1: "内陸",
            subdivisions2: "盛岡",
            hourly: "https://tenki.jp/forecast/2/6/3310/3208/1hour.html"
        },
        wn: {
            prefecture: "岩手",
            subdivisions: "内陸",
            name: "遠野市",
            hourly: "https://weathernews.jp/onebox/tenki/iwate/03208/"
        },
        hall: {
            lat: 39.331014,
            long: 141.532352
        }
    },
    一関市: {
        tj: {
            prefecture: "岩手県",
            subdivisions: "内陸(盛岡)",
            subdivisions1: "内陸",
            subdivisions2: "盛岡",
            hourly: "https://tenki.jp/forecast/2/6/3310/3209/1hour.html"
        },
        wn: {
            prefecture: "岩手",
            subdivisions: "内陸",
            name: "一関市",
            hourly: "https://weathernews.jp/onebox/tenki/iwate/03209/"
        },
        hall: {
            lat: 38.934754,
            long: 141.126759
        }
    },
    二戸市: {
        tj: {
            prefecture: "岩手県",
            subdivisions: "内陸(盛岡)",
            subdivisions1: "内陸",
            subdivisions2: "盛岡",
            hourly: "https://tenki.jp/forecast/2/6/3310/3213/1hour.html"
        },
        wn: {
            prefecture: "岩手",
            subdivisions: "内陸",
            name: "二戸市",
            hourly: "https://weathernews.jp/onebox/tenki/iwate/03213/"
        },
        hall: {
            lat: 40.271193,
            long: 141.304805
        }
    },
    八幡平市: {
        tj: {
            prefecture: "岩手県",
            subdivisions: "内陸(盛岡)",
            subdivisions1: "内陸",
            subdivisions2: "盛岡",
            hourly: "https://tenki.jp/forecast/2/6/3310/3214/1hour.html"
        },
        wn: {
            prefecture: "岩手",
            subdivisions: "内陸",
            name: "八幡平市",
            hourly: "https://weathernews.jp/onebox/tenki/iwate/03214/"
        },
        hall: {
            lat: 39.956511,
            long: 141.071120
        }
    },
    奥州市: {
        tj: {
            prefecture: "岩手県",
            subdivisions: "内陸(盛岡)",
            subdivisions1: "内陸",
            subdivisions2: "盛岡",
            hourly: "https://tenki.jp/forecast/2/6/3310/3215/1hour.html"
        },
        wn: {
            prefecture: "岩手",
            subdivisions: "内陸",
            name: "奥州市",
            hourly: "https://weathernews.jp/onebox/tenki/iwate/03215/"
        },
        hall: {
            lat: 39.144506,
            long: 141.139116
        }
    },
    滝沢市: {
        tj: {
            prefecture: "岩手県",
            subdivisions: "内陸(盛岡)",
            subdivisions1: "内陸",
            subdivisions2: "盛岡",
            hourly: "https://tenki.jp/forecast/2/6/3310/3216/1hour.html"
        },
        wn: {
            prefecture: "岩手",
            subdivisions: "内陸",
            name: "滝沢市",
            hourly: "https://weathernews.jp/onebox/tenki/iwate/03216/"
        },
        hall: {
            lat: 39.734739,
            long: 141.077065
        }
    },
    雫石町: {
        tj: {
            prefecture: "岩手県",
            subdivisions: "内陸(盛岡)",
            subdivisions1: "内陸",
            subdivisions2: "盛岡",
            hourly: "https://tenki.jp/forecast/2/6/3310/3301/1hour.html"
        },
        wn: {
            prefecture: "岩手",
            subdivisions: "内陸",
            name: "雫石町",
            hourly: "https://weathernews.jp/onebox/tenki/iwate/03301/"
        },
        hall: {
            lat: 39.696319,
            long: 140.975779
        }
    },
    葛巻町: {
        tj: {
            prefecture: "岩手県",
            subdivisions: "内陸(盛岡)",
            subdivisions1: "内陸",
            subdivisions2: "盛岡",
            hourly: "https://tenki.jp/forecast/2/6/3310/3302/1hour.html"
        },
        wn: {
            prefecture: "岩手",
            subdivisions: "内陸",
            name: "葛巻町",
            hourly: "https://weathernews.jp/onebox/tenki/iwate/03302/"
        },
        hall: {
            lat: 40.039958,
            long: 141.437889
        }
    },
    岩手町: {
        tj: {
            prefecture: "岩手県",
            subdivisions: "内陸(盛岡)",
            subdivisions1: "内陸",
            subdivisions2: "盛岡",
            hourly: "https://tenki.jp/forecast/2/6/3310/3303/1hour.html"
        },
        wn: {
            prefecture: "岩手",
            subdivisions: "内陸",
            name: "岩手町",
            hourly: "https://weathernews.jp/onebox/tenki/iwate/03303/"
        },
        hall: {
            lat: 39.972768,
            long: 141.212166
        }
    },
    紫波町: {
        tj: {
            prefecture: "岩手県",
            subdivisions: "内陸(盛岡)",
            subdivisions1: "内陸",
            subdivisions2: "盛岡",
            hourly: "https://tenki.jp/forecast/2/6/3310/3321/1hour.html"
        },
        wn: {
            prefecture: "岩手",
            subdivisions: "内陸",
            name: "紫波町",
            hourly: "https://weathernews.jp/onebox/tenki/iwate/03321/"
        },
        hall: {
            lat: 39.554536,
            long: 141.155796
        }
    },
    矢巾町: {
        tj: {
            prefecture: "岩手県",
            subdivisions: "内陸(盛岡)",
            subdivisions1: "内陸",
            subdivisions2: "盛岡",
            hourly: "https://tenki.jp/forecast/2/6/3310/3322/1hour.html"
        },
        wn: {
            prefecture: "岩手",
            subdivisions: "内陸",
            name: "矢巾町",
            hourly: "https://weathernews.jp/onebox/tenki/iwate/03322/"
        },
        hall: {
            lat: 39.606006,
            long: 141.143001
        }
    },
    西和賀町: {
        tj: {
            prefecture: "岩手県",
            subdivisions: "内陸(盛岡)",
            subdivisions1: "内陸",
            subdivisions2: "盛岡",
            hourly: "https://tenki.jp/forecast/2/6/3310/3366/1hour.html"
        },
        wn: {
            prefecture: "岩手",
            subdivisions: "内陸",
            name: "西和賀町",
            hourly: "https://weathernews.jp/onebox/tenki/iwate/03366/"
        },
        hall: {
            lat: 39.317906,
            long: 140.778754
        }
    },
    金ケ崎町: {
        tj: {
            prefecture: "岩手県",
            subdivisions: "内陸(盛岡)",
            subdivisions1: "内陸",
            subdivisions2: "盛岡",
            hourly: "https://tenki.jp/forecast/2/6/3310/3381/1hour.html"
        },
        wn: {
            prefecture: "岩手",
            subdivisions: "内陸",
            name: "金ケ崎町",
            hourly: "https://weathernews.jp/onebox/tenki/iwate/03381/"
        },
        hall: {
            lat: 39.195687,
            long: 141.116408
        }
    },
    平泉町: {
        tj: {
            prefecture: "岩手県",
            subdivisions: "内陸(盛岡)",
            subdivisions1: "内陸",
            subdivisions2: "盛岡",
            hourly: "https://tenki.jp/forecast/2/6/3310/3402/1hour.html"
        },
        wn: {
            prefecture: "岩手",
            subdivisions: "内陸",
            name: "平泉町",
            hourly: "https://weathernews.jp/onebox/tenki/iwate/03402/"
        },
        hall: {
            lat: 38.986781,
            long: 141.113980
        }
    },
    軽米町: {
        tj: {
            prefecture: "岩手県",
            subdivisions: "内陸(盛岡)",
            subdivisions1: "内陸",
            subdivisions2: "盛岡",
            hourly: "https://tenki.jp/forecast/2/6/3310/3501/1hour.html"
        },
        wn: {
            prefecture: "岩手",
            subdivisions: "内陸",
            name: "軽米町",
            hourly: "https://weathernews.jp/onebox/tenki/iwate/03501/"
        },
        hall: {
            lat: 40.326678,
            long: 141.460349
        }
    },
    九戸村: {
        tj: {
            prefecture: "岩手県",
            subdivisions: "内陸(盛岡)",
            subdivisions1: "内陸",
            subdivisions2: "盛岡",
            hourly: "https://tenki.jp/forecast/2/6/3310/3506/1hour.html"
        },
        wn: {
            prefecture: "岩手",
            subdivisions: "内陸",
            name: "九戸村",
            hourly: "https://weathernews.jp/onebox/tenki/iwate/03506/"
        },
        hall: {
            lat: 40.211356,
            long: 141.418982
        }
    },
    一戸町: {
        tj: {
            prefecture: "岩手県",
            subdivisions: "内陸(盛岡)",
            subdivisions1: "内陸",
            subdivisions2: "盛岡",
            hourly: "https://tenki.jp/forecast/2/6/3310/3524/1hour.html"
        },
        wn: {
            prefecture: "岩手",
            subdivisions: "内陸",
            name: "一戸町",
            hourly: "https://weathernews.jp/onebox/tenki/iwate/03524/"
        },
        hall: {
            lat: 40.212733,
            long: 141.295460
        }
    },
    宮古市: {
        tj: {
            prefecture: "岩手県",
            subdivisions: "沿岸北部(宮古)",
            subdivisions1: "沿岸北部",
            subdivisions2: "宮古",
            hourly: "https://tenki.jp/forecast/2/6/3320/3202/1hour.html"
        },
        wn: {
            prefecture: "岩手",
            subdivisions: "沿岸北部",
            name: "宮古市",
            hourly: "https://weathernews.jp/onebox/tenki/iwate/03202/"
        },
        hall: {
            lat: 39.639554,
            long: 141.946115
        }
    },
    久慈市: {
        tj: {
            prefecture: "岩手県",
            subdivisions: "沿岸北部(宮古)",
            subdivisions1: "沿岸北部",
            subdivisions2: "宮古",
            hourly: "https://tenki.jp/forecast/2/6/3320/3207/1hour.html"
        },
        wn: {
            prefecture: "岩手",
            subdivisions: "沿岸北部",
            name: "久慈市",
            hourly: "https://weathernews.jp/onebox/tenki/iwate/03207/"
        },
        hall: {
            lat: 40.190466,
            long: 141.775644
        }
    },
    山田町: {
        tj: {
            prefecture: "岩手県",
            subdivisions: "沿岸北部(宮古)",
            subdivisions1: "沿岸北部",
            subdivisions2: "宮古",
            hourly: "https://tenki.jp/forecast/2/6/3320/3482/1hour.html"
        },
        wn: {
            prefecture: "岩手",
            subdivisions: "沿岸北部",
            name: "山田町",
            hourly: "https://weathernews.jp/onebox/tenki/iwate/03482/"
        },
        hall: {
            lat: 39.467619,
            long: 141.948923
        }
    },
    岩泉町: {
        tj: {
            prefecture: "岩手県",
            subdivisions: "沿岸北部(宮古)",
            subdivisions1: "沿岸北部",
            subdivisions2: "宮古",
            hourly: "https://tenki.jp/forecast/2/6/3320/3483/1hour.html"
        },
        wn: {
            prefecture: "岩手",
            subdivisions: "沿岸北部",
            name: "岩泉町",
            hourly: "https://weathernews.jp/onebox/tenki/iwate/03483/"
        },
        hall: {
            lat: 39.843204,
            long: 141.796675
        }
    },
    田野畑村: {
        tj: {
            prefecture: "岩手県",
            subdivisions: "沿岸北部(宮古)",
            subdivisions1: "沿岸北部",
            subdivisions2: "宮古",
            hourly: "https://tenki.jp/forecast/2/6/3320/3484/1hour.html"
        },
        wn: {
            prefecture: "岩手",
            subdivisions: "沿岸北部",
            name: "田野畑村",
            hourly: "https://weathernews.jp/onebox/tenki/iwate/03484/"
        },
        hall: {
            lat: 39.930454,
            long: 141.888864
        }
    },
    普代村: {
        tj: {
            prefecture: "岩手県",
            subdivisions: "沿岸北部(宮古)",
            subdivisions1: "沿岸北部",
            subdivisions2: "宮古",
            hourly: "https://tenki.jp/forecast/2/6/3320/3485/1hour.html"
        },
        wn: {
            prefecture: "岩手",
            subdivisions: "沿岸北部",
            name: "普代村",
            hourly: "https://weathernews.jp/onebox/tenki/iwate/03485/"
        },
        hall: {
            lat: 40.005164,
            long: 141.886014
        }
    },
    野田村: {
        tj: {
            prefecture: "岩手県",
            subdivisions: "沿岸北部(宮古)",
            subdivisions1: "沿岸北部",
            subdivisions2: "宮古",
            hourly: "https://tenki.jp/forecast/2/6/3320/3503/1hour.html"
        },
        wn: {
            prefecture: "岩手",
            subdivisions: "沿岸北部",
            name: "野田村",
            hourly: "https://weathernews.jp/onebox/tenki/iwate/03503/"
        },
        hall: {
            lat: 40.110272,
            long: 141.817674
        }
    },
    洋野町: {
        tj: {
            prefecture: "岩手県",
            subdivisions: "沿岸北部(宮古)",
            subdivisions1: "沿岸北部",
            subdivisions2: "宮古",
            hourly: "https://tenki.jp/forecast/2/6/3320/3507/1hour.html"
        },
        wn: {
            prefecture: "岩手",
            subdivisions: "沿岸北部",
            name: "洋野町",
            hourly: "https://weathernews.jp/onebox/tenki/iwate/03507/"
        },
        hall: {
            lat: 40.408298,
            long: 141.718650
        }
    },
    大船渡市: {
        tj: {
            prefecture: "岩手県",
            subdivisions: "沿岸南部(大船渡)",
            subdivisions1: "沿岸南部",
            subdivisions2: "大船渡",
            hourly: "https://tenki.jp/forecast/2/6/3330/3203/1hour.html"
        },
        wn: {
            prefecture: "岩手",
            subdivisions: "沿岸南部",
            name: "大船渡市",
            hourly: "https://weathernews.jp/onebox/tenki/iwate/03203/"
        },
        hall: {
            lat: 39.081901,
            long: 141.708547
        }
    },
    陸前高田市: {
        tj: {
            prefecture: "岩手県",
            subdivisions: "沿岸南部(大船渡)",
            subdivisions1: "沿岸南部",
            subdivisions2: "大船渡",
            hourly: "https://tenki.jp/forecast/2/6/3330/3210/1hour.html"
        },
        wn: {
            prefecture: "岩手",
            subdivisions: "沿岸南部",
            name: "陸前高田市",
            hourly: "https://weathernews.jp/onebox/tenki/iwate/03210/"
        },
        hall: {
            lat: 39.020413,
            long: 141.633321
        }
    },
    釜石市: {
        tj: {
            prefecture: "岩手県",
            subdivisions: "沿岸南部(大船渡)",
            subdivisions1: "沿岸南部",
            subdivisions2: "大船渡",
            hourly: "https://tenki.jp/forecast/2/6/3330/3211/1hour.html"
        },
        wn: {
            prefecture: "岩手",
            subdivisions: "沿岸南部",
            name: "釜石市",
            hourly: "https://weathernews.jp/onebox/tenki/iwate/03211/"
        },
        hall: {
            lat: 39.275810,
            long: 141.885716
        }
    },
    住田町: {
        tj: {
            prefecture: "岩手県",
            subdivisions: "沿岸南部(大船渡)",
            subdivisions1: "沿岸南部",
            subdivisions2: "大船渡",
            hourly: "https://tenki.jp/forecast/2/6/3330/3441/1hour.html"
        },
        wn: {
            prefecture: "岩手",
            subdivisions: "沿岸南部",
            name: "住田町",
            hourly: "https://weathernews.jp/onebox/tenki/iwate/03441/"
        },
        hall: {
            lat: 39.142209,
            long: 141.575052
        }
    },
    大槌町: {
        tj: {
            prefecture: "岩手県",
            subdivisions: "沿岸南部(大船渡)",
            subdivisions1: "沿岸南部",
            subdivisions2: "大船渡",
            hourly: "https://tenki.jp/forecast/2/6/3330/3461/1hour.html"
        },
        wn: {
            prefecture: "岩手",
            subdivisions: "沿岸南部",
            name: "大槌町",
            hourly: "https://weathernews.jp/onebox/tenki/iwate/03461/"
        },
        hall: {
            lat: 39.358196,
            long: 141.899731
        }
    },
    仙台市: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "東部(仙台)",
            subdivisions1: "東部",
            subdivisions2: "仙台",
            hourly: "https://tenki.jp/forecast/2/7/3410/4100/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "西部",
            name: "仙台市青葉区",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04101/"
        },
        hall: {
            lat: 38.268008,
            long: 140.869617
        }
    },
    仙台市青葉区: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "東部(仙台)",
            subdivisions1: "東部",
            subdivisions2: "仙台",
            hourly: "https://tenki.jp/forecast/2/7/3410/4101/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "西部",
            name: "仙台市青葉区",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04101/"
        },
        hall: {
            lat: 38.269087,
            long: 140.870378
        }
    },
    仙台市宮城野区: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "東部(仙台)",
            subdivisions1: "東部",
            subdivisions2: "仙台",
            hourly: "https://tenki.jp/forecast/2/7/3410/4102/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "東部",
            name: "仙台市宮城野区",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04102/"
        },
        hall: {
            lat: 38.266189,
            long: 140.909841
        }
    },
    仙台市若林区: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "東部(仙台)",
            subdivisions1: "東部",
            subdivisions2: "仙台",
            hourly: "https://tenki.jp/forecast/2/7/3410/4103/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "東部",
            name: "仙台市若林区",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04103/"
        },
        hall: {
            lat: 38.244180,
            long: 140.900748
        }
    },
    仙台市太白区: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "東部(仙台)",
            subdivisions1: "東部",
            subdivisions2: "仙台",
            hourly: "https://tenki.jp/forecast/2/7/3410/4104/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "西部",
            name: "仙台市太白区",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04104/"
        },
        hall: {
            lat: 38.224395,
            long: 140.877212
        }
    },
    石巻市: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "東部(仙台)",
            subdivisions1: "東部",
            subdivisions2: "仙台",
            hourly: "https://tenki.jp/forecast/2/7/3410/4202/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "東部",
            name: "石巻市",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04202/"
        },
        hall: {
            lat: 38.434457,
            long: 141.302906
        }
    },
    塩竈市: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "東部(仙台)",
            subdivisions1: "東部",
            subdivisions2: "仙台",
            hourly: "https://tenki.jp/forecast/2/7/3410/4203/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "東部",
            name: "塩竈市",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04203/"
        },
        hall: {
            lat: 38.314360,
            long: 141.022030
        }
    },
    気仙沼市: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "東部(仙台)",
            subdivisions1: "東部",
            subdivisions2: "仙台",
            hourly: "https://tenki.jp/forecast/2/7/3410/4205/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "東部",
            name: "気仙沼市",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04205/"
        },
        hall: {
            lat: 38.908127,
            long: 141.570044
        }
    },
    名取市: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "東部(仙台)",
            subdivisions1: "東部",
            subdivisions2: "仙台",
            hourly: "https://tenki.jp/forecast/2/7/3410/4207/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "東部",
            name: "名取市",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04207/"
        },
        hall: {
            lat: 38.171501,
            long: 140.891849
        }
    },
    角田市: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "東部(仙台)",
            subdivisions1: "東部",
            subdivisions2: "仙台",
            hourly: "https://tenki.jp/forecast/2/7/3410/4208/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "東部",
            name: "角田市",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04208/"
        },
        hall: {
            lat: 37.977016,
            long: 140.781543
        }
    },
    多賀城市: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "東部(仙台)",
            subdivisions1: "東部",
            subdivisions2: "仙台",
            hourly: "https://tenki.jp/forecast/2/7/3410/4209/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "東部",
            name: "多賀城市",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04209/"
        },
        hall: {
            lat: 38.293803,
            long: 141.004369
        }
    },
    岩沼市: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "東部(仙台)",
            subdivisions1: "東部",
            subdivisions2: "仙台",
            hourly: "https://tenki.jp/forecast/2/7/3410/4211/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "東部",
            name: "岩沼市",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04211/"
        },
        hall: {
            lat: 38.104303,
            long: 140.869949
        }
    },
    登米市: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "東部(仙台)",
            subdivisions1: "東部",
            subdivisions2: "仙台",
            hourly: "https://tenki.jp/forecast/2/7/3410/4212/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "東部",
            name: "登米市",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04212/"
        },
        hall: {
            lat: 38.691856,
            long: 141.187720
        }
    },
    栗原市: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "東部(仙台)",
            subdivisions1: "東部",
            subdivisions2: "仙台",
            hourly: "https://tenki.jp/forecast/2/7/3410/4213/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "西部",
            name: "栗原市",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04213/"
        },
        hall: {
            lat: 38.730062,
            long: 141.021508
        }
    },
    東松島市: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "東部(仙台)",
            subdivisions1: "東部",
            subdivisions2: "仙台",
            hourly: "https://tenki.jp/forecast/2/7/3410/4214/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "東部",
            name: "東松島市",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04214/"
        },
        hall: {
            lat: 38.426134,
            long: 141.210278
        }
    },
    大崎市: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "東部(仙台)",
            subdivisions1: "東部",
            subdivisions2: "仙台",
            hourly: "https://tenki.jp/forecast/2/7/3410/4215/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "西部",
            name: "大崎市",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04215/"
        },
        hall: {
            lat: 38.577540,
            long: 140.955725
        }
    },
    富谷市: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "東部(仙台)",
            subdivisions1: "東部",
            subdivisions2: "仙台",
            hourly: "https://tenki.jp/forecast/2/7/3410/4216/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "東部",
            name: "富谷市",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04216/"
        },
        hall: {
            lat: 38.399918,
            long: 140.895485
        }
    },
    大河原町: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "東部(仙台)",
            subdivisions1: "東部",
            subdivisions2: "仙台",
            hourly: "https://tenki.jp/forecast/2/7/3410/4321/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "東部",
            name: "大河原町",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04321/"
        },
        hall: {
            lat: 38.049412,
            long: 140.730774
        }
    },
    村田町: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "東部(仙台)",
            subdivisions1: "東部",
            subdivisions2: "仙台",
            hourly: "https://tenki.jp/forecast/2/7/3410/4322/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "東部",
            name: "村田町",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04322/"
        },
        hall: {
            lat: 38.118589,
            long: 140.722404
        }
    },
    柴田町: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "東部(仙台)",
            subdivisions1: "東部",
            subdivisions2: "仙台",
            hourly: "https://tenki.jp/forecast/2/7/3410/4323/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "東部",
            name: "柴田町",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04323/"
        },
        hall: {
            lat: 38.056599,
            long: 140.765798
        }
    },
    丸森町: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "東部(仙台)",
            subdivisions1: "東部",
            subdivisions2: "仙台",
            hourly: "https://tenki.jp/forecast/2/7/3410/4341/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "東部",
            name: "丸森町",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04341/"
        },
        hall: {
            lat: 37.911536,
            long: 140.765365
        }
    },
    亘理町: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "東部(仙台)",
            subdivisions1: "東部",
            subdivisions2: "仙台",
            hourly: "https://tenki.jp/forecast/2/7/3410/4361/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "東部",
            name: "亘理町",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04361/"
        },
        hall: {
            lat: 38.044263,
            long: 140.867924
        }
    },
    山元町: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "東部(仙台)",
            subdivisions1: "東部",
            subdivisions2: "仙台",
            hourly: "https://tenki.jp/forecast/2/7/3410/4362/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "東部",
            name: "山元町",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04362/"
        },
        hall: {
            lat: 37.962706,
            long: 140.878052
        }
    },
    松島町: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "東部(仙台)",
            subdivisions1: "東部",
            subdivisions2: "仙台",
            hourly: "https://tenki.jp/forecast/2/7/3410/4401/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "東部",
            name: "松島町",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04401/"
        },
        hall: {
            lat: 38.380149,
            long: 141.067291
        }
    },
    七ヶ浜町: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "東部(仙台)",
            subdivisions1: "東部",
            subdivisions2: "仙台",
            hourly: "https://tenki.jp/forecast/2/7/3410/4404/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "東部",
            name: "七ヶ浜町",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04404/"
        },
        hall: {
            lat: 38.304554,
            long: 141.059143
        }
    },
    利府町: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "東部(仙台)",
            subdivisions1: "東部",
            subdivisions2: "仙台",
            hourly: "https://tenki.jp/forecast/2/7/3410/4406/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "東部",
            name: "利府町",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04406/"
        },
        hall: {
            lat: 38.330355,
            long: 140.975793
        }
    },
    大郷町: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "東部(仙台)",
            subdivisions1: "東部",
            subdivisions2: "仙台",
            hourly: "https://tenki.jp/forecast/2/7/3410/4422/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "東部",
            name: "大郷町",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04422/"
        },
        hall: {
            lat: 38.424244,
            long: 141.004460
        }
    },
    涌谷町: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "東部(仙台)",
            subdivisions1: "東部",
            subdivisions2: "仙台",
            hourly: "https://tenki.jp/forecast/2/7/3410/4501/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "東部",
            name: "涌谷町",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04501/"
        },
        hall: {
            lat: 38.539704,
            long: 141.128105
        }
    },
    美里町: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "東部(仙台)",
            subdivisions1: "東部",
            subdivisions2: "仙台",
            hourly: "https://tenki.jp/forecast/2/7/3410/4505/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "東部",
            name: "美里町",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04505/"
        },
        hall: {
            lat: 38.544400,
            long: 141.056717
        }
    },
    女川町: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "東部(仙台)",
            subdivisions1: "東部",
            subdivisions2: "仙台",
            hourly: "https://tenki.jp/forecast/2/7/3410/4581/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "東部",
            name: "女川町",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04581/"
        },
        hall: {
            lat: 38.445388,
            long: 141.442693
        }
    },
    南三陸町: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "東部(仙台)",
            subdivisions1: "東部",
            subdivisions2: "仙台",
            hourly: "https://tenki.jp/forecast/2/7/3410/4606/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "東部",
            name: "南三陸町",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04606/"
        },
        hall: {
            lat: 38.680666,
            long: 141.462492
        }
    },
    仙台市泉区: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "西部(白石)",
            subdivisions1: "西部",
            subdivisions2: "白石",
            hourly: "https://tenki.jp/forecast/2/7/3420/4105/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "西部",
            name: "仙台市泉区",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04105/"
        },
        hall: {
            lat: 38.326361,
            long: 140.881615
        }
    },
    白石市: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "西部(白石)",
            subdivisions1: "西部",
            subdivisions2: "白石",
            hourly: "https://tenki.jp/forecast/2/7/3420/4206/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "西部",
            name: "白石市",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04206/"
        },
        hall: {
            lat: 38.002467,
            long: 140.619888
        }
    },
    蔵王町: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "西部(白石)",
            subdivisions1: "西部",
            subdivisions2: "白石",
            hourly: "https://tenki.jp/forecast/2/7/3420/4301/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "西部",
            name: "蔵王町",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04301/"
        },
        hall: {
            lat: 38.098128,
            long: 140.658680
        }
    },
    七ヶ宿町: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "西部(白石)",
            subdivisions1: "西部",
            subdivisions2: "白石",
            hourly: "https://tenki.jp/forecast/2/7/3420/4302/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "西部",
            name: "七ヶ宿町",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04302/"
        },
        hall: {
            lat: 37.993063,
            long: 140.441615
        }
    },
    川崎町: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "西部(白石)",
            subdivisions1: "西部",
            subdivisions2: "白石",
            hourly: "https://tenki.jp/forecast/2/7/3420/4324/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "西部",
            name: "川崎町",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04324/"
        },
        hall: {
            lat: 38.177751,
            long: 140.643188
        }
    },
    大和町: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "西部(白石)",
            subdivisions1: "西部",
            subdivisions2: "白石",
            hourly: "https://tenki.jp/forecast/2/7/3420/4421/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "西部",
            name: "大和町",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04421/"
        },
        hall: {
            lat: 38.437330,
            long: 140.886309
        }
    },
    大衡村: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "西部(白石)",
            subdivisions1: "西部",
            subdivisions2: "白石",
            hourly: "https://tenki.jp/forecast/2/7/3420/4424/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "西部",
            name: "大衡村",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04424/"
        },
        hall: {
            lat: 38.467278,
            long: 140.879982
        }
    },
    色麻町: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "西部(白石)",
            subdivisions1: "西部",
            subdivisions2: "白石",
            hourly: "https://tenki.jp/forecast/2/7/3420/4444/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "西部",
            name: "色麻町",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04444/"
        },
        hall: {
            lat: 38.548921,
            long: 140.849876
        }
    },
    加美町: {
        tj: {
            prefecture: "宮城県",
            subdivisions: "西部(白石)",
            subdivisions1: "西部",
            subdivisions2: "白石",
            hourly: "https://tenki.jp/forecast/2/7/3420/4445/1hour.html"
        },
        wn: {
            prefecture: "宮城",
            subdivisions: "西部",
            name: "加美町",
            hourly: "https://weathernews.jp/onebox/tenki/miyagi/04445/"
        },
        hall: {
            lat: 38.571770,
            long: 140.854759
        }
    },
    秋田市: {
        tj: {
            prefecture: "秋田県",
            subdivisions: "沿岸(秋田)",
            subdivisions1: "沿岸",
            subdivisions2: "秋田",
            hourly: "https://tenki.jp/forecast/2/8/3210/5201/1hour.html"
        },
        wn: {
            prefecture: "秋田",
            subdivisions: "沿岸",
            name: "秋田市",
            hourly: "https://weathernews.jp/onebox/tenki/akita/05201/"
        },
        hall: {
            lat: 39.719929,
            long: 140.102512
        }
    },
    能代市: {
        tj: {
            prefecture: "秋田県",
            subdivisions: "沿岸(秋田)",
            subdivisions1: "沿岸",
            subdivisions2: "秋田",
            hourly: "https://tenki.jp/forecast/2/8/3210/5202/1hour.html"
        },
        wn: {
            prefecture: "秋田",
            subdivisions: "沿岸",
            name: "能代市",
            hourly: "https://weathernews.jp/onebox/tenki/akita/05202/"
        },
        hall: {
            lat: 40.212131,
            long: 140.026641
        }
    },
    男鹿市: {
        tj: {
            prefecture: "秋田県",
            subdivisions: "沿岸(秋田)",
            subdivisions1: "沿岸",
            subdivisions2: "秋田",
            hourly: "https://tenki.jp/forecast/2/8/3210/5206/1hour.html"
        },
        wn: {
            prefecture: "秋田",
            subdivisions: "沿岸",
            name: "男鹿市",
            hourly: "https://weathernews.jp/onebox/tenki/akita/05206/"
        },
        hall: {
            lat: 39.886721,
            long: 139.847500
        }
    },
    由利本荘市: {
        tj: {
            prefecture: "秋田県",
            subdivisions: "沿岸(秋田)",
            subdivisions1: "沿岸",
            subdivisions2: "秋田",
            hourly: "https://tenki.jp/forecast/2/8/3210/5210/1hour.html"
        },
        wn: {
            prefecture: "秋田",
            subdivisions: "沿岸",
            name: "由利本荘市",
            hourly: "https://weathernews.jp/onebox/tenki/akita/05210/"
        },
        hall: {
            lat: 39.385814,
            long: 140.048819
        }
    },
    潟上市: {
        tj: {
            prefecture: "秋田県",
            subdivisions: "沿岸(秋田)",
            subdivisions1: "沿岸",
            subdivisions2: "秋田",
            hourly: "https://tenki.jp/forecast/2/8/3210/5211/1hour.html"
        },
        wn: {
            prefecture: "秋田",
            subdivisions: "沿岸",
            name: "潟上市",
            hourly: "https://weathernews.jp/onebox/tenki/akita/05211/"
        },
        hall: {
            lat: 39.857288,
            long: 140.013049
        }
    },
    にかほ市: {
        tj: {
            prefecture: "秋田県",
            subdivisions: "沿岸(秋田)",
            subdivisions1: "沿岸",
            subdivisions2: "秋田",
            hourly: "https://tenki.jp/forecast/2/8/3210/5214/1hour.html"
        },
        wn: {
            prefecture: "秋田",
            subdivisions: "沿岸",
            name: "にかほ市",
            hourly: "https://weathernews.jp/onebox/tenki/akita/05214/"
        },
        hall: {
            lat: 39.203067,
            long: 139.907649
        }
    },
    藤里町: {
        tj: {
            prefecture: "秋田県",
            subdivisions: "沿岸(秋田)",
            subdivisions1: "沿岸",
            subdivisions2: "秋田",
            hourly: "https://tenki.jp/forecast/2/8/3210/5346/1hour.html"
        },
        wn: {
            prefecture: "秋田",
            subdivisions: "沿岸",
            name: "藤里町",
            hourly: "https://weathernews.jp/onebox/tenki/akita/05346/"
        },
        hall: {
            lat: 40.278399,
            long: 140.261879
        }
    },
    三種町: {
        tj: {
            prefecture: "秋田県",
            subdivisions: "沿岸(秋田)",
            subdivisions1: "沿岸",
            subdivisions2: "秋田",
            hourly: "https://tenki.jp/forecast/2/8/3210/5348/1hour.html"
        },
        wn: {
            prefecture: "秋田",
            subdivisions: "沿岸",
            name: "三種町",
            hourly: "https://weathernews.jp/onebox/tenki/akita/05348/"
        },
        hall: {
            lat: 40.101615,
            long: 140.004981
        }
    },
    八峰町: {
        tj: {
            prefecture: "秋田県",
            subdivisions: "沿岸(秋田)",
            subdivisions1: "沿岸",
            subdivisions2: "秋田",
            hourly: "https://tenki.jp/forecast/2/8/3210/5349/1hour.html"
        },
        wn: {
            prefecture: "秋田",
            subdivisions: "沿岸",
            name: "八峰町",
            hourly: "https://weathernews.jp/onebox/tenki/akita/05349/"
        },
        hall: {
            lat: 40.318715,
            long: 140.038618
        }
    },
    五城目町: {
        tj: {
            prefecture: "秋田県",
            subdivisions: "沿岸(秋田)",
            subdivisions1: "沿岸",
            subdivisions2: "秋田",
            hourly: "https://tenki.jp/forecast/2/8/3210/5361/1hour.html"
        },
        wn: {
            prefecture: "秋田",
            subdivisions: "沿岸",
            name: "五城目町",
            hourly: "https://weathernews.jp/onebox/tenki/akita/05361/"
        },
        hall: {
            lat: 39.943895,
            long: 140.111309
        }
    },
    八郎潟町: {
        tj: {
            prefecture: "秋田県",
            subdivisions: "沿岸(秋田)",
            subdivisions1: "沿岸",
            subdivisions2: "秋田",
            hourly: "https://tenki.jp/forecast/2/8/3210/5363/1hour.html"
        },
        wn: {
            prefecture: "秋田",
            subdivisions: "沿岸",
            name: "八郎潟町",
            hourly: "https://weathernews.jp/onebox/tenki/akita/05363/"
        },
        hall: {
            lat: 39.949023,
            long: 140.073358
        }
    },
    井川町: {
        tj: {
            prefecture: "秋田県",
            subdivisions: "沿岸(秋田)",
            subdivisions1: "沿岸",
            subdivisions2: "秋田",
            hourly: "https://tenki.jp/forecast/2/8/3210/5366/1hour.html"
        },
        wn: {
            prefecture: "秋田",
            subdivisions: "沿岸",
            name: "井川町",
            hourly: "https://weathernews.jp/onebox/tenki/akita/05366/"
        },
        hall: {
            lat: 39.914188,
            long: 140.081265
        }
    },
    大潟村: {
        tj: {
            prefecture: "秋田県",
            subdivisions: "沿岸(秋田)",
            subdivisions1: "沿岸",
            subdivisions2: "秋田",
            hourly: "https://tenki.jp/forecast/2/8/3210/5368/1hour.html"
        },
        wn: {
            prefecture: "秋田",
            subdivisions: "沿岸",
            name: "大潟村",
            hourly: "https://weathernews.jp/onebox/tenki/akita/05368/"
        },
        hall: {
            lat: 40.017788,
            long: 139.960064
        }
    },
    横手市: {
        tj: {
            prefecture: "秋田県",
            subdivisions: "内陸(横手)",
            subdivisions1: "内陸",
            subdivisions2: "横手",
            hourly: "https://tenki.jp/forecast/2/8/3220/5203/1hour.html"
        },
        wn: {
            prefecture: "秋田",
            subdivisions: "内陸",
            name: "横手市",
            hourly: "https://weathernews.jp/onebox/tenki/akita/05203/"
        },
        hall: {
            lat: 39.313777,
            long: 140.566636
        }
    },
    大館市: {
        tj: {
            prefecture: "秋田県",
            subdivisions: "内陸(横手)",
            subdivisions1: "内陸",
            subdivisions2: "横手",
            hourly: "https://tenki.jp/forecast/2/8/3220/5204/1hour.html"
        },
        wn: {
            prefecture: "秋田",
            subdivisions: "内陸",
            name: "大館市",
            hourly: "https://weathernews.jp/onebox/tenki/akita/05204/"
        },
        hall: {
            lat: 40.271685,
            long: 140.565241
        }
    },
    湯沢市: {
        tj: {
            prefecture: "秋田県",
            subdivisions: "内陸(横手)",
            subdivisions1: "内陸",
            subdivisions2: "横手",
            hourly: "https://tenki.jp/forecast/2/8/3220/5207/1hour.html"
        },
        wn: {
            prefecture: "秋田",
            subdivisions: "内陸",
            name: "湯沢市",
            hourly: "https://weathernews.jp/onebox/tenki/akita/05207/"
        },
        hall: {
            lat: 39.164074,
            long: 140.494683
        }
    },
    鹿角市: {
        tj: {
            prefecture: "秋田県",
            subdivisions: "内陸(横手)",
            subdivisions1: "内陸",
            subdivisions2: "横手",
            hourly: "https://tenki.jp/forecast/2/8/3220/5209/1hour.html"
        },
        wn: {
            prefecture: "秋田",
            subdivisions: "内陸",
            name: "鹿角市",
            hourly: "https://weathernews.jp/onebox/tenki/akita/05209/"
        },
        hall: {
            lat: 40.215789,
            long: 140.788519
        }
    },
    大仙市: {
        tj: {
            prefecture: "秋田県",
            subdivisions: "内陸(横手)",
            subdivisions1: "内陸",
            subdivisions2: "横手",
            hourly: "https://tenki.jp/forecast/2/8/3220/5212/1hour.html"
        },
        wn: {
            prefecture: "秋田",
            subdivisions: "内陸",
            name: "大仙市",
            hourly: "https://weathernews.jp/onebox/tenki/akita/05212/"
        },
        hall: {
            lat: 39.453090,
            long: 140.475448
        }
    },
    北秋田市: {
        tj: {
            prefecture: "秋田県",
            subdivisions: "内陸(横手)",
            subdivisions1: "内陸",
            subdivisions2: "横手",
            hourly: "https://tenki.jp/forecast/2/8/3220/5213/1hour.html"
        },
        wn: {
            prefecture: "秋田",
            subdivisions: "内陸",
            name: "北秋田市",
            hourly: "https://weathernews.jp/onebox/tenki/akita/05213/"
        },
        hall: {
            lat: 40.226046,
            long: 140.370728
        }
    },
    仙北市: {
        tj: {
            prefecture: "秋田県",
            subdivisions: "内陸(横手)",
            subdivisions1: "内陸",
            subdivisions2: "横手",
            hourly: "https://tenki.jp/forecast/2/8/3220/5215/1hour.html"
        },
        wn: {
            prefecture: "秋田",
            subdivisions: "内陸",
            name: "仙北市",
            hourly: "https://weathernews.jp/onebox/tenki/akita/05215/"
        },
        hall: {
            lat: 39.700044,
            long: 140.730728
        }
    },
    小坂町: {
        tj: {
            prefecture: "秋田県",
            subdivisions: "内陸(横手)",
            subdivisions1: "内陸",
            subdivisions2: "横手",
            hourly: "https://tenki.jp/forecast/2/8/3220/5303/1hour.html"
        },
        wn: {
            prefecture: "秋田",
            subdivisions: "内陸",
            name: "小坂町",
            hourly: "https://weathernews.jp/onebox/tenki/akita/05303/"
        },
        hall: {
            lat: 40.332926,
            long: 140.736191
        }
    },
    上小阿仁村: {
        tj: {
            prefecture: "秋田県",
            subdivisions: "内陸(横手)",
            subdivisions1: "内陸",
            subdivisions2: "横手",
            hourly: "https://tenki.jp/forecast/2/8/3220/5327/1hour.html"
        },
        wn: {
            prefecture: "秋田",
            subdivisions: "内陸",
            name: "上小阿仁村",
            hourly: "https://weathernews.jp/onebox/tenki/akita/05327/"
        },
        hall: {
            lat: 40.063263,
            long: 140.295736
        }
    },
    美郷町: {
        tj: {
            prefecture: "秋田県",
            subdivisions: "内陸(横手)",
            subdivisions1: "内陸",
            subdivisions2: "横手",
            hourly: "https://tenki.jp/forecast/2/8/3220/5434/1hour.html"
        },
        wn: {
            prefecture: "秋田",
            subdivisions: "内陸",
            name: "美郷町",
            hourly: "https://weathernews.jp/onebox/tenki/akita/05434/"
        },
        hall: {
            lat: 39.461633,
            long: 140.582127
        }
    },
    羽後町: {
        tj: {
            prefecture: "秋田県",
            subdivisions: "内陸(横手)",
            subdivisions1: "内陸",
            subdivisions2: "横手",
            hourly: "https://tenki.jp/forecast/2/8/3220/5463/1hour.html"
        },
        wn: {
            prefecture: "秋田",
            subdivisions: "内陸",
            name: "羽後町",
            hourly: "https://weathernews.jp/onebox/tenki/akita/05463/"
        },
        hall: {
            lat: 39.199323,
            long: 140.412881
        }
    },
    東成瀬村: {
        tj: {
            prefecture: "秋田県",
            subdivisions: "内陸(横手)",
            subdivisions1: "内陸",
            subdivisions2: "横手",
            hourly: "https://tenki.jp/forecast/2/8/3220/5464/1hour.html"
        },
        wn: {
            prefecture: "秋田",
            subdivisions: "内陸",
            name: "東成瀬村",
            hourly: "https://weathernews.jp/onebox/tenki/akita/05464/"
        },
        hall: {
            lat: 39.179185,
            long: 140.648892
        }
    },
    山形市: {
        tj: {
            prefecture: "山形県",
            subdivisions: "村山(山形)",
            subdivisions1: "村山",
            subdivisions2: "山形",
            hourly: "https://tenki.jp/forecast/2/9/3510/6201/1hour.html"
        },
        wn: {
            prefecture: "山形",
            subdivisions: "村山",
            name: "山形市",
            hourly: "https://weathernews.jp/onebox/tenki/yamagata/06201/"
        },
        hall: {
            lat: 38.255436,
            long: 140.339605
        }
    },
    寒河江市: {
        tj: {
            prefecture: "山形県",
            subdivisions: "村山(山形)",
            subdivisions1: "村山",
            subdivisions2: "山形",
            hourly: "https://tenki.jp/forecast/2/9/3510/6206/1hour.html"
        },
        wn: {
            prefecture: "山形",
            subdivisions: "村山",
            name: "寒河江市",
            hourly: "https://weathernews.jp/onebox/tenki/yamagata/06206/"
        },
        hall: {
            lat: 38.380954,
            long: 140.276068
        }
    },
    上山市: {
        tj: {
            prefecture: "山形県",
            subdivisions: "村山(山形)",
            subdivisions1: "村山",
            subdivisions2: "山形",
            hourly: "https://tenki.jp/forecast/2/9/3510/6207/1hour.html"
        },
        wn: {
            prefecture: "山形",
            subdivisions: "村山",
            name: "上山市",
            hourly: "https://weathernews.jp/onebox/tenki/yamagata/06207/"
        },
        hall: {
            lat: 38.149562,
            long: 140.267830
        }
    },
    村山市: {
        tj: {
            prefecture: "山形県",
            subdivisions: "村山(山形)",
            subdivisions1: "村山",
            subdivisions2: "山形",
            hourly: "https://tenki.jp/forecast/2/9/3510/6208/1hour.html"
        },
        wn: {
            prefecture: "山形",
            subdivisions: "村山",
            name: "村山市",
            hourly: "https://weathernews.jp/onebox/tenki/yamagata/06208/"
        },
        hall: {
            lat: 38.483352,
            long: 140.380380
        }
    },
    天童市: {
        tj: {
            prefecture: "山形県",
            subdivisions: "村山(山形)",
            subdivisions1: "村山",
            subdivisions2: "山形",
            hourly: "https://tenki.jp/forecast/2/9/3510/6210/1hour.html"
        },
        wn: {
            prefecture: "山形",
            subdivisions: "村山",
            name: "天童市",
            hourly: "https://weathernews.jp/onebox/tenki/yamagata/06210/"
        },
        hall: {
            lat: 38.362177,
            long: 140.377802
        }
    },
    東根市: {
        tj: {
            prefecture: "山形県",
            subdivisions: "村山(山形)",
            subdivisions1: "村山",
            subdivisions2: "山形",
            hourly: "https://tenki.jp/forecast/2/9/3510/6211/1hour.html"
        },
        wn: {
            prefecture: "山形",
            subdivisions: "村山",
            name: "東根市",
            hourly: "https://weathernews.jp/onebox/tenki/yamagata/06211/"
        },
        hall: {
            lat: 38.431292,
            long: 140.391021
        }
    },
    尾花沢市: {
        tj: {
            prefecture: "山形県",
            subdivisions: "村山(山形)",
            subdivisions1: "村山",
            subdivisions2: "山形",
            hourly: "https://tenki.jp/forecast/2/9/3510/6212/1hour.html"
        },
        wn: {
            prefecture: "山形",
            subdivisions: "村山",
            name: "尾花沢市",
            hourly: "https://weathernews.jp/onebox/tenki/yamagata/06212/"
        },
        hall: {
            lat: 38.600620,
            long: 140.405693
        }
    },
    山辺町: {
        tj: {
            prefecture: "山形県",
            subdivisions: "村山(山形)",
            subdivisions1: "村山",
            subdivisions2: "山形",
            hourly: "https://tenki.jp/forecast/2/9/3510/6301/1hour.html"
        },
        wn: {
            prefecture: "山形",
            subdivisions: "村山",
            name: "山辺町",
            hourly: "https://weathernews.jp/onebox/tenki/yamagata/06301/"
        },
        hall: {
            lat: 38.289217,
            long: 140.262180
        }
    },
    中山町: {
        tj: {
            prefecture: "山形県",
            subdivisions: "村山(山形)",
            subdivisions1: "村山",
            subdivisions2: "山形",
            hourly: "https://tenki.jp/forecast/2/9/3510/6302/1hour.html"
        },
        wn: {
            prefecture: "山形",
            subdivisions: "村山",
            name: "中山町",
            hourly: "https://weathernews.jp/onebox/tenki/yamagata/06302/"
        },
        hall: {
            lat: 38.333122,
            long: 140.283051
        }
    },
    河北町: {
        tj: {
            prefecture: "山形県",
            subdivisions: "村山(山形)",
            subdivisions1: "村山",
            subdivisions2: "山形",
            hourly: "https://tenki.jp/forecast/2/9/3510/6321/1hour.html"
        },
        wn: {
            prefecture: "山形",
            subdivisions: "村山",
            name: "河北町",
            hourly: "https://weathernews.jp/onebox/tenki/yamagata/06321/"
        },
        hall: {
            lat: 38.426632,
            long: 140.314590
        }
    },
    西川町: {
        tj: {
            prefecture: "山形県",
            subdivisions: "村山(山形)",
            subdivisions1: "村山",
            subdivisions2: "山形",
            hourly: "https://tenki.jp/forecast/2/9/3510/6322/1hour.html"
        },
        wn: {
            prefecture: "山形",
            subdivisions: "村山",
            name: "西川町",
            hourly: "https://weathernews.jp/onebox/tenki/yamagata/06322/"
        },
        hall: {
            lat: 38.426487,
            long: 140.147661
        }
    },
    朝日町: {
        tj: {
            prefecture: "山形県",
            subdivisions: "村山(山形)",
            subdivisions1: "村山",
            subdivisions2: "山形",
            hourly: "https://tenki.jp/forecast/2/9/3510/6323/1hour.html"
        },
        wn: {
            prefecture: "山形",
            subdivisions: "村山",
            name: "朝日町",
            hourly: "https://weathernews.jp/onebox/tenki/yamagata/06323/"
        },
        hall: {
            lat: 38.299293,
            long: 140.145924
        }
    },
    大江町: {
        tj: {
            prefecture: "山形県",
            subdivisions: "村山(山形)",
            subdivisions1: "村山",
            subdivisions2: "山形",
            hourly: "https://tenki.jp/forecast/2/9/3510/6324/1hour.html"
        },
        wn: {
            prefecture: "山形",
            subdivisions: "村山",
            name: "大江町",
            hourly: "https://weathernews.jp/onebox/tenki/yamagata/06324/"
        },
        hall: {
            lat: 38.380713,
            long: 140.206793
        }
    },
    大石田町: {
        tj: {
            prefecture: "山形県",
            subdivisions: "村山(山形)",
            subdivisions1: "村山",
            subdivisions2: "山形",
            hourly: "https://tenki.jp/forecast/2/9/3510/6341/1hour.html"
        },
        wn: {
            prefecture: "山形",
            subdivisions: "村山",
            name: "大石田町",
            hourly: "https://weathernews.jp/onebox/tenki/yamagata/06341/"
        },
        hall: {
            lat: 38.593877,
            long: 140.372647
        }
    },
    米沢市: {
        tj: {
            prefecture: "山形県",
            subdivisions: "置賜(米沢)",
            subdivisions1: "置賜",
            subdivisions2: "米沢",
            hourly: "https://tenki.jp/forecast/2/9/3520/6202/1hour.html"
        },
        wn: {
            prefecture: "山形",
            subdivisions: "置賜",
            name: "米沢市",
            hourly: "https://weathernews.jp/onebox/tenki/yamagata/06202/"
        },
        hall: {
            lat: 37.921869,
            long: 140.116140
        }
    },
    長井市: {
        tj: {
            prefecture: "山形県",
            subdivisions: "置賜(米沢)",
            subdivisions1: "置賜",
            subdivisions2: "米沢",
            hourly: "https://tenki.jp/forecast/2/9/3520/6209/1hour.html"
        },
        wn: {
            prefecture: "山形",
            subdivisions: "置賜",
            name: "長井市",
            hourly: "https://weathernews.jp/onebox/tenki/yamagata/06209/"
        },
        hall: {
            lat: 38.106088,
            long: 140.033947
        }
    },
    南陽市: {
        tj: {
            prefecture: "山形県",
            subdivisions: "置賜(米沢)",
            subdivisions1: "置賜",
            subdivisions2: "米沢",
            hourly: "https://tenki.jp/forecast/2/9/3520/6213/1hour.html"
        },
        wn: {
            prefecture: "山形",
            subdivisions: "置賜",
            name: "南陽市",
            hourly: "https://weathernews.jp/onebox/tenki/yamagata/06213/"
        },
        hall: {
            lat: 38.055116,
            long: 140.148309
        }
    },
    高畠町: {
        tj: {
            prefecture: "山形県",
            subdivisions: "置賜(米沢)",
            subdivisions1: "置賜",
            subdivisions2: "米沢",
            hourly: "https://tenki.jp/forecast/2/9/3520/6381/1hour.html"
        },
        wn: {
            prefecture: "山形",
            subdivisions: "置賜",
            name: "高畠町",
            hourly: "https://weathernews.jp/onebox/tenki/yamagata/06381/"
        },
        hall: {
            lat: 38.002745,
            long: 140.189113
        }
    },
    川西町: {
        tj: {
            prefecture: "山形県",
            subdivisions: "置賜(米沢)",
            subdivisions1: "置賜",
            subdivisions2: "米沢",
            hourly: "https://tenki.jp/forecast/2/9/3520/6382/1hour.html"
        },
        wn: {
            prefecture: "山形",
            subdivisions: "置賜",
            name: "川西町",
            hourly: "https://weathernews.jp/onebox/tenki/yamagata/06382/"
        },
        hall: {
            lat: 38.005203,
            long: 140.053181
        }
    },
    小国町: {
        tj: {
            prefecture: "山形県",
            subdivisions: "置賜(米沢)",
            subdivisions1: "置賜",
            subdivisions2: "米沢",
            hourly: "https://tenki.jp/forecast/2/9/3520/6401/1hour.html"
        },
        wn: {
            prefecture: "山形",
            subdivisions: "置賜",
            name: "小国町",
            hourly: "https://weathernews.jp/onebox/tenki/yamagata/06401/"
        },
        hall: {
            lat: 38.061391,
            long: 139.743333
        }
    },
    白鷹町: {
        tj: {
            prefecture: "山形県",
            subdivisions: "置賜(米沢)",
            subdivisions1: "置賜",
            subdivisions2: "米沢",
            hourly: "https://tenki.jp/forecast/2/9/3520/6402/1hour.html"
        },
        wn: {
            prefecture: "山形",
            subdivisions: "置賜",
            name: "白鷹町",
            hourly: "https://weathernews.jp/onebox/tenki/yamagata/06402/"
        },
        hall: {
            lat: 38.183069,
            long: 140.098571
        }
    },
    飯豊町: {
        tj: {
            prefecture: "山形県",
            subdivisions: "置賜(米沢)",
            subdivisions1: "置賜",
            subdivisions2: "米沢",
            hourly: "https://tenki.jp/forecast/2/9/3520/6403/1hour.html"
        },
        wn: {
            prefecture: "山形",
            subdivisions: "置賜",
            name: "飯豊町",
            hourly: "https://weathernews.jp/onebox/tenki/yamagata/06403/"
        },
        hall: {
            lat: 38.045714,
            long: 139.987617
        }
    },
    鶴岡市: {
        tj: {
            prefecture: "山形県",
            subdivisions: "庄内(酒田)",
            subdivisions1: "庄内",
            subdivisions2: "酒田",
            hourly: "https://tenki.jp/forecast/2/9/3530/6203/1hour.html"
        },
        wn: {
            prefecture: "山形",
            subdivisions: "庄内",
            name: "鶴岡市",
            hourly: "https://weathernews.jp/onebox/tenki/yamagata/06203/"
        },
        hall: {
            lat: 38.727183,
            long: 139.826725
        }
    },
    酒田市: {
        tj: {
            prefecture: "山形県",
            subdivisions: "庄内(酒田)",
            subdivisions1: "庄内",
            subdivisions2: "酒田",
            hourly: "https://tenki.jp/forecast/2/9/3530/6204/1hour.html"
        },
        wn: {
            prefecture: "山形",
            subdivisions: "庄内",
            name: "酒田市",
            hourly: "https://weathernews.jp/onebox/tenki/yamagata/06204/"
        },
        hall: {
            lat: 38.914386,
            long: 139.836513
        }
    },
    三川町: {
        tj: {
            prefecture: "山形県",
            subdivisions: "庄内(酒田)",
            subdivisions1: "庄内",
            subdivisions2: "酒田",
            hourly: "https://tenki.jp/forecast/2/9/3530/6426/1hour.html"
        },
        wn: {
            prefecture: "山形",
            subdivisions: "庄内",
            name: "三川町",
            hourly: "https://weathernews.jp/onebox/tenki/yamagata/06426/"
        },
        hall: {
            lat: 38.794529,
            long: 139.849612
        }
    },
    庄内町: {
        tj: {
            prefecture: "山形県",
            subdivisions: "庄内(酒田)",
            subdivisions1: "庄内",
            subdivisions2: "酒田",
            hourly: "https://tenki.jp/forecast/2/9/3530/6428/1hour.html"
        },
        wn: {
            prefecture: "山形",
            subdivisions: "庄内",
            name: "庄内町",
            hourly: "https://weathernews.jp/onebox/tenki/yamagata/06428/"
        },
        hall: {
            lat: 38.849558,
            long: 139.904036
        }
    },
    遊佐町: {
        tj: {
            prefecture: "山形県",
            subdivisions: "庄内(酒田)",
            subdivisions1: "庄内",
            subdivisions2: "酒田",
            hourly: "https://tenki.jp/forecast/2/9/3530/6461/1hour.html"
        },
        wn: {
            prefecture: "山形",
            subdivisions: "庄内",
            name: "遊佐町",
            hourly: "https://weathernews.jp/onebox/tenki/yamagata/06461/"
        },
        hall: {
            lat: 39.014836,
            long: 139.908662
        }
    },
    新庄市: {
        tj: {
            prefecture: "山形県",
            subdivisions: "最上(新庄)",
            subdivisions1: "最上",
            subdivisions2: "新庄",
            hourly: "https://tenki.jp/forecast/2/9/3540/6205/1hour.html"
        },
        wn: {
            prefecture: "山形",
            subdivisions: "最上",
            name: "新庄市",
            hourly: "https://weathernews.jp/onebox/tenki/yamagata/06205/"
        },
        hall: {
            lat: 38.764960,
            long: 140.301664
        }
    },
    金山町: {
        tj: {
            prefecture: "山形県",
            subdivisions: "最上(新庄)",
            subdivisions1: "最上",
            subdivisions2: "新庄",
            hourly: "https://tenki.jp/forecast/2/9/3540/6361/1hour.html"
        },
        wn: {
            prefecture: "山形",
            subdivisions: "最上",
            name: "金山町",
            hourly: "https://weathernews.jp/onebox/tenki/yamagata/06361/"
        },
        hall: {
            lat: 38.883440,
            long: 140.339367
        }
    },
    最上町: {
        tj: {
            prefecture: "山形県",
            subdivisions: "最上(新庄)",
            subdivisions1: "最上",
            subdivisions2: "新庄",
            hourly: "https://tenki.jp/forecast/2/9/3540/6362/1hour.html"
        },
        wn: {
            prefecture: "山形",
            subdivisions: "最上",
            name: "最上町",
            hourly: "https://weathernews.jp/onebox/tenki/yamagata/06362/"
        },
        hall: {
            lat: 38.758467,
            long: 140.519359
        }
    },
    舟形町: {
        tj: {
            prefecture: "山形県",
            subdivisions: "最上(新庄)",
            subdivisions1: "最上",
            subdivisions2: "新庄",
            hourly: "https://tenki.jp/forecast/2/9/3540/6363/1hour.html"
        },
        wn: {
            prefecture: "山形",
            subdivisions: "最上",
            name: "舟形町",
            hourly: "https://weathernews.jp/onebox/tenki/yamagata/06363/"
        },
        hall: {
            lat: 38.691417,
            long: 140.319988
        }
    },
    真室川町: {
        tj: {
            prefecture: "山形県",
            subdivisions: "最上(新庄)",
            subdivisions1: "最上",
            subdivisions2: "新庄",
            hourly: "https://tenki.jp/forecast/2/9/3540/6364/1hour.html"
        },
        wn: {
            prefecture: "山形",
            subdivisions: "最上",
            name: "真室川町",
            hourly: "https://weathernews.jp/onebox/tenki/yamagata/06364/"
        },
        hall: {
            lat: 38.856918,
            long: 140.251564
        }
    },
    大蔵村: {
        tj: {
            prefecture: "山形県",
            subdivisions: "最上(新庄)",
            subdivisions1: "最上",
            subdivisions2: "新庄",
            hourly: "https://tenki.jp/forecast/2/9/3540/6365/1hour.html"
        },
        wn: {
            prefecture: "山形",
            subdivisions: "最上",
            name: "大蔵村",
            hourly: "https://weathernews.jp/onebox/tenki/yamagata/06365/"
        },
        hall: {
            lat: 38.704121,
            long: 140.230368
        }
    },
    鮭川村: {
        tj: {
            prefecture: "山形県",
            subdivisions: "最上(新庄)",
            subdivisions1: "最上",
            subdivisions2: "新庄",
            hourly: "https://tenki.jp/forecast/2/9/3540/6366/1hour.html"
        },
        wn: {
            prefecture: "山形",
            subdivisions: "最上",
            name: "鮭川村",
            hourly: "https://weathernews.jp/onebox/tenki/yamagata/06366/"
        },
        hall: {
            lat: 38.796455,
            long: 140.222007
        }
    },
    戸沢村: {
        tj: {
            prefecture: "山形県",
            subdivisions: "最上(新庄)",
            subdivisions1: "最上",
            subdivisions2: "新庄",
            hourly: "https://tenki.jp/forecast/2/9/3540/6367/1hour.html"
        },
        wn: {
            prefecture: "山形",
            subdivisions: "最上",
            name: "戸沢村",
            hourly: "https://weathernews.jp/onebox/tenki/yamagata/06367/"
        },
        hall: {
            lat: 38.737601,
            long: 140.143569
        }
    },
    水戸市: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "北部(水戸)",
            subdivisions1: "北部",
            subdivisions2: "水戸",
            hourly: "https://tenki.jp/forecast/3/11/4010/8201/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "北部",
            name: "水戸市",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08201/"
        },
        hall: {
            lat: 36.365861,
            long: 140.471222
        }
    },
    日立市: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "北部(水戸)",
            subdivisions1: "北部",
            subdivisions2: "水戸",
            hourly: "https://tenki.jp/forecast/3/11/4010/8202/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "北部",
            name: "日立市",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08202/"
        },
        hall: {
            lat: 36.599016,
            long: 140.651546
        }
    },
    常陸太田市: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "北部(水戸)",
            subdivisions1: "北部",
            subdivisions2: "水戸",
            hourly: "https://tenki.jp/forecast/3/11/4010/8212/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "北部",
            name: "常陸太田市",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08212/"
        },
        hall: {
            lat: 36.538227,
            long: 140.530929
        }
    },
    高萩市: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "北部(水戸)",
            subdivisions1: "北部",
            subdivisions2: "水戸",
            hourly: "https://tenki.jp/forecast/3/11/4010/8214/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "北部",
            name: "高萩市",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08214/"
        },
        hall: {
            lat: 36.713674,
            long: 140.709506
        }
    },
    北茨城市: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "北部(水戸)",
            subdivisions1: "北部",
            subdivisions2: "水戸",
            hourly: "https://tenki.jp/forecast/3/11/4010/8215/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "北部",
            name: "北茨城市",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08215/"
        },
        hall: {
            lat: 36.801892,
            long: 140.751032
        }
    },
    笠間市: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "北部(水戸)",
            subdivisions1: "北部",
            subdivisions2: "水戸",
            hourly: "https://tenki.jp/forecast/3/11/4010/8216/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "北部",
            name: "笠間市",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08216/"
        },
        hall: {
            lat: 36.345128,
            long: 140.304232
        }
    },
    ひたちなか市: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "北部(水戸)",
            subdivisions1: "北部",
            subdivisions2: "水戸",
            hourly: "https://tenki.jp/forecast/3/11/4010/8221/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "北部",
            name: "ひたちなか市",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08221/"
        },
        hall: {
            lat: 36.396615,
            long: 140.534676
        }
    },
    常陸大宮市: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "北部(水戸)",
            subdivisions1: "北部",
            subdivisions2: "水戸",
            hourly: "https://tenki.jp/forecast/3/11/4010/8225/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "北部",
            name: "常陸大宮市",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08225/"
        },
        hall: {
            lat: 36.542592,
            long: 140.411012
        }
    },
    那珂市: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "北部(水戸)",
            subdivisions1: "北部",
            subdivisions2: "水戸",
            hourly: "https://tenki.jp/forecast/3/11/4010/8226/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "北部",
            name: "那珂市",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08226/"
        },
        hall: {
            lat: 36.457424,
            long: 140.486726
        }
    },
    小美玉市: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "北部(水戸)",
            subdivisions1: "北部",
            subdivisions2: "水戸",
            hourly: "https://tenki.jp/forecast/3/11/4010/8236/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "北部",
            name: "小美玉市",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08236/"
        },
        hall: {
            lat: 36.239283,
            long: 140.352589
        }
    },
    茨城町: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "北部(水戸)",
            subdivisions1: "北部",
            subdivisions2: "水戸",
            hourly: "https://tenki.jp/forecast/3/11/4010/8302/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "北部",
            name: "茨城町",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08302/"
        },
        hall: {
            lat: 36.286921,
            long: 140.424517
        }
    },
    大洗町: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "北部(水戸)",
            subdivisions1: "北部",
            subdivisions2: "水戸",
            hourly: "https://tenki.jp/forecast/3/11/4010/8309/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "北部",
            name: "大洗町",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08309/"
        },
        hall: {
            lat: 36.313356,
            long: 140.574888
        }
    },
    城里町: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "北部(水戸)",
            subdivisions1: "北部",
            subdivisions2: "水戸",
            hourly: "https://tenki.jp/forecast/3/11/4010/8310/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "北部",
            name: "城里町",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08310/"
        },
        hall: {
            lat: 36.479297,
            long: 140.376241
        }
    },
    東海村: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "北部(水戸)",
            subdivisions1: "北部",
            subdivisions2: "水戸",
            hourly: "https://tenki.jp/forecast/3/11/4010/8341/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "北部",
            name: "東海村",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08341/"
        },
        hall: {
            lat: 36.472882,
            long: 140.566301
        }
    },
    大子町: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "北部(水戸)",
            subdivisions1: "北部",
            subdivisions2: "水戸",
            hourly: "https://tenki.jp/forecast/3/11/4010/8364/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "北部",
            name: "大子町",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08364/"
        },
        hall: {
            lat: 36.764415,
            long: 140.363437
        }
    },
    土浦市: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "南部(土浦)",
            subdivisions1: "南部",
            subdivisions2: "土浦",
            hourly: "https://tenki.jp/forecast/3/11/4020/8203/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "南部",
            name: "土浦市",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08203/"
        },
        hall: {
            lat: 36.078391,
            long: 140.204143
        }
    },
    古河市: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "南部(土浦)",
            subdivisions1: "南部",
            subdivisions2: "土浦",
            hourly: "https://tenki.jp/forecast/3/11/4020/8204/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "南部",
            name: "古河市",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08204/"
        },
        hall: {
            lat: 36.178228,
            long: 139.755371
        }
    },
    石岡市: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "南部(土浦)",
            subdivisions1: "南部",
            subdivisions2: "土浦",
            hourly: "https://tenki.jp/forecast/3/11/4020/8205/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "南部",
            name: "石岡市",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08205/"
        },
        hall: {
            lat: 36.190840,
            long: 140.287242
        }
    },
    結城市: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "南部(土浦)",
            subdivisions1: "南部",
            subdivisions2: "土浦",
            hourly: "https://tenki.jp/forecast/3/11/4020/8207/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "南部",
            name: "結城市",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08207/"
        },
        hall: {
            lat: 36.289625,
            long: 139.871470
        }
    },
    龍ケ崎市: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "南部(土浦)",
            subdivisions1: "南部",
            subdivisions2: "土浦",
            hourly: "https://tenki.jp/forecast/3/11/4020/8208/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "南部",
            name: "龍ケ崎市",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08208/"
        },
        hall: {
            lat: 35.911594,
            long: 140.182265
        }
    },
    下妻市: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "南部(土浦)",
            subdivisions1: "南部",
            subdivisions2: "土浦",
            hourly: "https://tenki.jp/forecast/3/11/4020/8210/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "南部",
            name: "下妻市",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08210/"
        },
        hall: {
            lat: 36.184388,
            long: 139.968231
        }
    },
    常総市: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "南部(土浦)",
            subdivisions1: "南部",
            subdivisions2: "土浦",
            hourly: "https://tenki.jp/forecast/3/11/4020/8211/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "南部",
            name: "常総市",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08211/"
        },
        hall: {
            lat: 36.023563,
            long: 139.993934
        }
    },
    取手市: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "南部(土浦)",
            subdivisions1: "南部",
            subdivisions2: "土浦",
            hourly: "https://tenki.jp/forecast/3/11/4020/8217/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "南部",
            name: "取手市",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08217/"
        },
        hall: {
            lat: 35.911474,
            long: 140.050305
        }
    },
    牛久市: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "南部(土浦)",
            subdivisions1: "南部",
            subdivisions2: "土浦",
            hourly: "https://tenki.jp/forecast/3/11/4020/8219/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "南部",
            name: "牛久市",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08219/"
        },
        hall: {
            lat: 35.979397,
            long: 140.149532
        }
    },
    つくば市: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "南部(土浦)",
            subdivisions1: "南部",
            subdivisions2: "土浦",
            hourly: "https://tenki.jp/forecast/3/11/4020/8220/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "南部",
            name: "つくば市",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08220/"
        },
        hall: {
            lat: 36.083560,
            long: 140.076473
        }
    },
    鹿嶋市: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "南部(土浦)",
            subdivisions1: "南部",
            subdivisions2: "土浦",
            hourly: "https://tenki.jp/forecast/3/11/4020/8222/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "南部",
            name: "鹿嶋市",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08222/"
        },
        hall: {
            lat: 35.965721,
            long: 140.644852
        }
    },
    潮来市: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "南部(土浦)",
            subdivisions1: "南部",
            subdivisions2: "土浦",
            hourly: "https://tenki.jp/forecast/3/11/4020/8223/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "南部",
            name: "潮来市",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08223/"
        },
        hall: {
            lat: 35.947134,
            long: 140.555364
        }
    },
    守谷市: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "南部(土浦)",
            subdivisions1: "南部",
            subdivisions2: "土浦",
            hourly: "https://tenki.jp/forecast/3/11/4020/8224/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "南部",
            name: "守谷市",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08224/"
        },
        hall: {
            lat: 35.951327,
            long: 139.975465
        }
    },
    筑西市: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "南部(土浦)",
            subdivisions1: "南部",
            subdivisions2: "土浦",
            hourly: "https://tenki.jp/forecast/3/11/4020/8227/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "南部",
            name: "筑西市",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08227/"
        },
        hall: {
            lat: 36.305263,
            long: 139.979417
        }
    },
    坂東市: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "南部(土浦)",
            subdivisions1: "南部",
            subdivisions2: "土浦",
            hourly: "https://tenki.jp/forecast/3/11/4020/8228/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "南部",
            name: "坂東市",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08228/"
        },
        hall: {
            lat: 36.048363,
            long: 139.888680
        }
    },
    稲敷市: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "南部(土浦)",
            subdivisions1: "南部",
            subdivisions2: "土浦",
            hourly: "https://tenki.jp/forecast/3/11/4020/8229/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "南部",
            name: "稲敷市",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08229/"
        },
        hall: {
            lat: 35.972927,
            long: 140.303583
        }
    },
    かすみがうら市: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "南部(土浦)",
            subdivisions1: "南部",
            subdivisions2: "土浦",
            hourly: "https://tenki.jp/forecast/3/11/4020/8230/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "南部",
            name: "かすみがうら市",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08230/"
        },
        hall: {
            lat: 36.151812,
            long: 140.237006
        }
    },
    桜川市: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "南部(土浦)",
            subdivisions1: "南部",
            subdivisions2: "土浦",
            hourly: "https://tenki.jp/forecast/3/11/4020/8231/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "南部",
            name: "桜川市",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08231/"
        },
        hall: {
            lat: 36.327273,
            long: 140.090478
        }
    },
    神栖市: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "南部(土浦)",
            subdivisions1: "南部",
            subdivisions2: "土浦",
            hourly: "https://tenki.jp/forecast/3/11/4020/8232/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "南部",
            name: "神栖市",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08232/"
        },
        hall: {
            lat: 35.889972,
            long: 140.664527
        }
    },
    行方市: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "南部(土浦)",
            subdivisions1: "南部",
            subdivisions2: "土浦",
            hourly: "https://tenki.jp/forecast/3/11/4020/8233/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "南部",
            name: "行方市",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08233/"
        },
        hall: {
            lat: 35.990166,
            long: 140.489100
        }
    },
    鉾田市: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "南部(土浦)",
            subdivisions1: "南部",
            subdivisions2: "土浦",
            hourly: "https://tenki.jp/forecast/3/11/4020/8234/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "南部",
            name: "鉾田市",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08234/"
        },
        hall: {
            lat: 36.158687,
            long: 140.516437
        }
    },
    つくばみらい市: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "南部(土浦)",
            subdivisions1: "南部",
            subdivisions2: "土浦",
            hourly: "https://tenki.jp/forecast/3/11/4020/8235/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "南部",
            name: "つくばみらい市",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08235/"
        },
        hall: {
            lat: 35.962911,
            long: 140.037069
        }
    },
    美浦村: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "南部(土浦)",
            subdivisions1: "南部",
            subdivisions2: "土浦",
            hourly: "https://tenki.jp/forecast/3/11/4020/8442/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "南部",
            name: "美浦村",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08442/"
        },
        hall: {
            lat: 36.004554,
            long: 140.301906
        }
    },
    阿見町: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "南部(土浦)",
            subdivisions1: "南部",
            subdivisions2: "土浦",
            hourly: "https://tenki.jp/forecast/3/11/4020/8443/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "南部",
            name: "阿見町",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08443/"
        },
        hall: {
            lat: 36.030870,
            long: 140.214769
        }
    },
    河内町: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "南部(土浦)",
            subdivisions1: "南部",
            subdivisions2: "土浦",
            hourly: "https://tenki.jp/forecast/3/11/4020/8447/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "南部",
            name: "河内町",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08447/"
        },
        hall: {
            lat: 35.884743,
            long: 140.244516
        }
    },
    八千代町: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "南部(土浦)",
            subdivisions1: "南部",
            subdivisions2: "土浦",
            hourly: "https://tenki.jp/forecast/3/11/4020/8521/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "南部",
            name: "八千代町",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08521/"
        },
        hall: {
            lat: 36.181632,
            long: 139.891145
        }
    },
    五霞町: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "南部(土浦)",
            subdivisions1: "南部",
            subdivisions2: "土浦",
            hourly: "https://tenki.jp/forecast/3/11/4020/8542/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "南部",
            name: "五霞町",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08542/"
        },
        hall: {
            lat: 36.114116,
            long: 139.745832
        }
    },
    境町: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "南部(土浦)",
            subdivisions1: "南部",
            subdivisions2: "土浦",
            hourly: "https://tenki.jp/forecast/3/11/4020/8546/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "南部",
            name: "境町",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08546/"
        },
        hall: {
            lat: 36.108529,
            long: 139.795054
        }
    },
    利根町: {
        tj: {
            prefecture: "茨城県",
            subdivisions: "南部(土浦)",
            subdivisions1: "南部",
            subdivisions2: "土浦",
            hourly: "https://tenki.jp/forecast/3/11/4020/8564/1hour.html"
        },
        wn: {
            prefecture: "茨城",
            subdivisions: "南部",
            name: "利根町",
            hourly: "https://weathernews.jp/onebox/tenki/ibaraki/08564/"
        },
        hall: {
            lat: 35.857825,
            long: 140.139106
        }
    },
    宇都宮市: {
        tj: {
            prefecture: "栃木県",
            subdivisions: "南部(宇都宮)",
            subdivisions1: "南部",
            subdivisions2: "宇都宮",
            hourly: "https://tenki.jp/forecast/3/12/4110/9201/1hour.html"
        },
        wn: {
            prefecture: "栃木",
            subdivisions: "南部",
            name: "宇都宮市",
            hourly: "https://weathernews.jp/onebox/tenki/tochigi/09201/"
        },
        hall: {
            lat: 36.555115,
            long: 139.882807
        }
    },
    足利市: {
        tj: {
            prefecture: "栃木県",
            subdivisions: "南部(宇都宮)",
            subdivisions1: "南部",
            subdivisions2: "宇都宮",
            hourly: "https://tenki.jp/forecast/3/12/4110/9202/1hour.html"
        },
        wn: {
            prefecture: "栃木",
            subdivisions: "南部",
            name: "足利市",
            hourly: "https://weathernews.jp/onebox/tenki/tochigi/09202/"
        },
        hall: {
            lat: 36.340146,
            long: 139.449696
        }
    },
    栃木市: {
        tj: {
            prefecture: "栃木県",
            subdivisions: "南部(宇都宮)",
            subdivisions1: "南部",
            subdivisions2: "宇都宮",
            hourly: "https://tenki.jp/forecast/3/12/4110/9203/1hour.html"
        },
        wn: {
            prefecture: "栃木",
            subdivisions: "南部",
            name: "栃木市",
            hourly: "https://weathernews.jp/onebox/tenki/tochigi/09203/"
        },
        hall: {
            lat: 36.382414,
            long: 139.734111
        }
    },
    佐野市: {
        tj: {
            prefecture: "栃木県",
            subdivisions: "南部(宇都宮)",
            subdivisions1: "南部",
            subdivisions2: "宇都宮",
            hourly: "https://tenki.jp/forecast/3/12/4110/9204/1hour.html"
        },
        wn: {
            prefecture: "栃木",
            subdivisions: "南部",
            name: "佐野市",
            hourly: "https://weathernews.jp/onebox/tenki/tochigi/09204/"
        },
        hall: {
            lat: 36.314369,
            long: 139.578356
        }
    },
    鹿沼市: {
        tj: {
            prefecture: "栃木県",
            subdivisions: "南部(宇都宮)",
            subdivisions1: "南部",
            subdivisions2: "宇都宮",
            hourly: "https://tenki.jp/forecast/3/12/4110/9205/1hour.html"
        },
        wn: {
            prefecture: "栃木",
            subdivisions: "南部",
            name: "鹿沼市",
            hourly: "https://weathernews.jp/onebox/tenki/tochigi/09205/"
        },
        hall: {
            lat: 36.566681,
            long: 139.745045
        }
    },
    小山市: {
        tj: {
            prefecture: "栃木県",
            subdivisions: "南部(宇都宮)",
            subdivisions1: "南部",
            subdivisions2: "宇都宮",
            hourly: "https://tenki.jp/forecast/3/12/4110/9208/1hour.html"
        },
        wn: {
            prefecture: "栃木",
            subdivisions: "南部",
            name: "小山市",
            hourly: "https://weathernews.jp/onebox/tenki/tochigi/09208/"
        },
        hall: {
            lat: 36.314496,
            long: 139.800778
        }
    },
    真岡市: {
        tj: {
            prefecture: "栃木県",
            subdivisions: "南部(宇都宮)",
            subdivisions1: "南部",
            subdivisions2: "宇都宮",
            hourly: "https://tenki.jp/forecast/3/12/4110/9209/1hour.html"
        },
        wn: {
            prefecture: "栃木",
            subdivisions: "南部",
            name: "真岡市",
            hourly: "https://weathernews.jp/onebox/tenki/tochigi/09209/"
        },
        hall: {
            lat: 36.440515,
            long: 140.012467
        }
    },
    さくら市: {
        tj: {
            prefecture: "栃木県",
            subdivisions: "南部(宇都宮)",
            subdivisions1: "南部",
            subdivisions2: "宇都宮",
            hourly: "https://tenki.jp/forecast/3/12/4110/9214/1hour.html"
        },
        wn: {
            prefecture: "栃木",
            subdivisions: "南部",
            name: "さくら市",
            hourly: "https://weathernews.jp/onebox/tenki/tochigi/09214/"
        },
        hall: {
            lat: 36.685295,
            long: 139.966474
        }
    },
    那須烏山市: {
        tj: {
            prefecture: "栃木県",
            subdivisions: "南部(宇都宮)",
            subdivisions1: "南部",
            subdivisions2: "宇都宮",
            hourly: "https://tenki.jp/forecast/3/12/4110/9215/1hour.html"
        },
        wn: {
            prefecture: "栃木",
            subdivisions: "南部",
            name: "那須烏山市",
            hourly: "https://weathernews.jp/onebox/tenki/tochigi/09215/"
        },
        hall: {
            lat: 36.656891,
            long: 140.151376
        }
    },
    下野市: {
        tj: {
            prefecture: "栃木県",
            subdivisions: "南部(宇都宮)",
            subdivisions1: "南部",
            subdivisions2: "宇都宮",
            hourly: "https://tenki.jp/forecast/3/12/4110/9216/1hour.html"
        },
        wn: {
            prefecture: "栃木",
            subdivisions: "南部",
            name: "下野市",
            hourly: "https://weathernews.jp/onebox/tenki/tochigi/09216/"
        },
        hall: {
            lat: 36.395227,
            long: 139.851920
        }
    },
    上三川町: {
        tj: {
            prefecture: "栃木県",
            subdivisions: "南部(宇都宮)",
            subdivisions1: "南部",
            subdivisions2: "宇都宮",
            hourly: "https://tenki.jp/forecast/3/12/4110/9301/1hour.html"
        },
        wn: {
            prefecture: "栃木",
            subdivisions: "南部",
            name: "上三川町",
            hourly: "https://weathernews.jp/onebox/tenki/tochigi/09301/"
        },
        hall: {
            lat: 36.439268,
            long: 139.910214
        }
    },
    益子町: {
        tj: {
            prefecture: "栃木県",
            subdivisions: "南部(宇都宮)",
            subdivisions1: "南部",
            subdivisions2: "宇都宮",
            hourly: "https://tenki.jp/forecast/3/12/4110/9342/1hour.html"
        },
        wn: {
            prefecture: "栃木",
            subdivisions: "南部",
            name: "益子町",
            hourly: "https://weathernews.jp/onebox/tenki/tochigi/09342/"
        },
        hall: {
            lat: 36.467353,
            long: 140.093381
        }
    },
    茂木町: {
        tj: {
            prefecture: "栃木県",
            subdivisions: "南部(宇都宮)",
            subdivisions1: "南部",
            subdivisions2: "宇都宮",
            hourly: "https://tenki.jp/forecast/3/12/4110/9343/1hour.html"
        },
        wn: {
            prefecture: "栃木",
            subdivisions: "南部",
            name: "茂木町",
            hourly: "https://weathernews.jp/onebox/tenki/tochigi/09343/"
        },
        hall: {
            lat: 36.532184,
            long: 140.187535
        }
    },
    市貝町: {
        tj: {
            prefecture: "栃木県",
            subdivisions: "南部(宇都宮)",
            subdivisions1: "南部",
            subdivisions2: "宇都宮",
            hourly: "https://tenki.jp/forecast/3/12/4110/9344/1hour.html"
        },
        wn: {
            prefecture: "栃木",
            subdivisions: "南部",
            name: "市貝町",
            hourly: "https://weathernews.jp/onebox/tenki/tochigi/09344/"
        },
        hall: {
            lat: 36.543242,
            long: 140.102113
        }
    },
    芳賀町: {
        tj: {
            prefecture: "栃木県",
            subdivisions: "南部(宇都宮)",
            subdivisions1: "南部",
            subdivisions2: "宇都宮",
            hourly: "https://tenki.jp/forecast/3/12/4110/9345/1hour.html"
        },
        wn: {
            prefecture: "栃木",
            subdivisions: "南部",
            name: "芳賀町",
            hourly: "https://weathernews.jp/onebox/tenki/tochigi/09345/"
        },
        hall: {
            lat: 36.548212,
            long: 140.058199
        }
    },
    壬生町: {
        tj: {
            prefecture: "栃木県",
            subdivisions: "南部(宇都宮)",
            subdivisions1: "南部",
            subdivisions2: "宇都宮",
            hourly: "https://tenki.jp/forecast/3/12/4110/9361/1hour.html"
        },
        wn: {
            prefecture: "栃木",
            subdivisions: "南部",
            name: "壬生町",
            hourly: "https://weathernews.jp/onebox/tenki/tochigi/09361/"
        },
        hall: {
            lat: 36.442178,
            long: 139.814668
        }
    },
    野木町: {
        tj: {
            prefecture: "栃木県",
            subdivisions: "南部(宇都宮)",
            subdivisions1: "南部",
            subdivisions2: "宇都宮",
            hourly: "https://tenki.jp/forecast/3/12/4110/9364/1hour.html"
        },
        wn: {
            prefecture: "栃木",
            subdivisions: "南部",
            name: "野木町",
            hourly: "https://weathernews.jp/onebox/tenki/tochigi/09364/"
        },
        hall: {
            lat: 36.233263,
            long: 139.740818
        }
    },
    高根沢町: {
        tj: {
            prefecture: "栃木県",
            subdivisions: "南部(宇都宮)",
            subdivisions1: "南部",
            subdivisions2: "宇都宮",
            hourly: "https://tenki.jp/forecast/3/12/4110/9386/1hour.html"
        },
        wn: {
            prefecture: "栃木",
            subdivisions: "南部",
            name: "高根沢町",
            hourly: "https://weathernews.jp/onebox/tenki/tochigi/09386/"
        },
        hall: {
            lat: 36.630976,
            long: 139.986672
        }
    },
    那珂川町: {
        tj: {
            prefecture: "栃木県",
            subdivisions: "南部(宇都宮)",
            subdivisions1: "南部",
            subdivisions2: "宇都宮",
            hourly: "https://tenki.jp/forecast/3/12/4110/9411/1hour.html"
        },
        wn: {
            prefecture: "栃木",
            subdivisions: "南部",
            name: "那珂川町",
            hourly: "https://weathernews.jp/onebox/tenki/tochigi/09411/"
        },
        hall: {
            lat: 36.736223,
            long: 140.172820
        }
    },
    日光市: {
        tj: {
            prefecture: "栃木県",
            subdivisions: "北部(大田原)",
            subdivisions1: "北部",
            subdivisions2: "大田原",
            hourly: "https://tenki.jp/forecast/3/12/4120/9206/1hour.html"
        },
        wn: {
            prefecture: "栃木",
            subdivisions: "北部",
            name: "日光市",
            hourly: "https://weathernews.jp/onebox/tenki/tochigi/09206/"
        },
        hall: {
            lat: 36.719861,
            long: 139.698204
        }
    },
    大田原市: {
        tj: {
            prefecture: "栃木県",
            subdivisions: "北部(大田原)",
            subdivisions1: "北部",
            subdivisions2: "大田原",
            hourly: "https://tenki.jp/forecast/3/12/4120/9210/1hour.html"
        },
        wn: {
            prefecture: "栃木",
            subdivisions: "北部",
            name: "大田原市",
            hourly: "https://weathernews.jp/onebox/tenki/tochigi/09210/"
        },
        hall: {
            lat: 36.871076,
            long: 140.015458
        }
    },
    矢板市: {
        tj: {
            prefecture: "栃木県",
            subdivisions: "北部(大田原)",
            subdivisions1: "北部",
            subdivisions2: "大田原",
            hourly: "https://tenki.jp/forecast/3/12/4120/9211/1hour.html"
        },
        wn: {
            prefecture: "栃木",
            subdivisions: "北部",
            name: "矢板市",
            hourly: "https://weathernews.jp/onebox/tenki/tochigi/09211/"
        },
        hall: {
            lat: 36.806732,
            long: 139.924226
        }
    },
    那須塩原市: {
        tj: {
            prefecture: "栃木県",
            subdivisions: "北部(大田原)",
            subdivisions1: "北部",
            subdivisions2: "大田原",
            hourly: "https://tenki.jp/forecast/3/12/4120/9213/1hour.html"
        },
        wn: {
            prefecture: "栃木",
            subdivisions: "北部",
            name: "那須塩原市",
            hourly: "https://weathernews.jp/onebox/tenki/tochigi/09213/"
        },
        hall: {
            lat: 36.961690,
            long: 140.046044
        }
    },
    塩谷町: {
        tj: {
            prefecture: "栃木県",
            subdivisions: "北部(大田原)",
            subdivisions1: "北部",
            subdivisions2: "大田原",
            hourly: "https://tenki.jp/forecast/3/12/4120/9384/1hour.html"
        },
        wn: {
            prefecture: "栃木",
            subdivisions: "北部",
            name: "塩谷町",
            hourly: "https://weathernews.jp/onebox/tenki/tochigi/09384/"
        },
        hall: {
            lat: 36.778810,
            long: 139.856950
        }
    },
    那須町: {
        tj: {
            prefecture: "栃木県",
            subdivisions: "北部(大田原)",
            subdivisions1: "北部",
            subdivisions2: "大田原",
            hourly: "https://tenki.jp/forecast/3/12/4120/9407/1hour.html"
        },
        wn: {
            prefecture: "栃木",
            subdivisions: "北部",
            name: "那須町",
            hourly: "https://weathernews.jp/onebox/tenki/tochigi/09407/"
        },
        hall: {
            lat: 37.019770,
            long: 140.121008
        }
    },
    前橋市: {
        tj: {
            prefecture: "群馬県",
            subdivisions: "南部(前橋)",
            subdivisions1: "南部",
            subdivisions2: "前橋",
            hourly: "https://tenki.jp/forecast/3/13/4210/10201/1hour.html"
        },
        wn: {
            prefecture: "群馬",
            subdivisions: "南部",
            name: "前橋市",
            hourly: "https://weathernews.jp/onebox/tenki/gunma/10201/"
        },
        hall: {
            lat: 36.389413,
            long: 139.063493
        }
    },
    高崎市: {
        tj: {
            prefecture: "群馬県",
            subdivisions: "南部(前橋)",
            subdivisions1: "南部",
            subdivisions2: "前橋",
            hourly: "https://tenki.jp/forecast/3/13/4210/10202/1hour.html"
        },
        wn: {
            prefecture: "群馬",
            subdivisions: "南部",
            name: "高崎市",
            hourly: "https://weathernews.jp/onebox/tenki/gunma/10202/"
        },
        hall: {
            lat: 36.321950,
            long: 139.003355
        }
    },
    桐生市: {
        tj: {
            prefecture: "群馬県",
            subdivisions: "南部(前橋)",
            subdivisions1: "南部",
            subdivisions2: "前橋",
            hourly: "https://tenki.jp/forecast/3/13/4210/10203/1hour.html"
        },
        wn: {
            prefecture: "群馬",
            subdivisions: "南部",
            name: "桐生市",
            hourly: "https://weathernews.jp/onebox/tenki/gunma/10203/"
        },
        hall: {
            lat: 36.405210,
            long: 139.330646
        }
    },
    伊勢崎市: {
        tj: {
            prefecture: "群馬県",
            subdivisions: "南部(前橋)",
            subdivisions1: "南部",
            subdivisions2: "前橋",
            hourly: "https://tenki.jp/forecast/3/13/4210/10204/1hour.html"
        },
        wn: {
            prefecture: "群馬",
            subdivisions: "南部",
            name: "伊勢崎市",
            hourly: "https://weathernews.jp/onebox/tenki/gunma/10204/"
        },
        hall: {
            lat: 36.311341,
            long: 139.196960
        }
    },
    太田市: {
        tj: {
            prefecture: "群馬県",
            subdivisions: "南部(前橋)",
            subdivisions1: "南部",
            subdivisions2: "前橋",
            hourly: "https://tenki.jp/forecast/3/13/4210/10205/1hour.html"
        },
        wn: {
            prefecture: "群馬",
            subdivisions: "南部",
            name: "太田市",
            hourly: "https://weathernews.jp/onebox/tenki/gunma/10205/"
        },
        hall: {
            lat: 36.291127,
            long: 139.375360
        }
    },
    館林市: {
        tj: {
            prefecture: "群馬県",
            subdivisions: "南部(前橋)",
            subdivisions1: "南部",
            subdivisions2: "前橋",
            hourly: "https://tenki.jp/forecast/3/13/4210/10207/1hour.html"
        },
        wn: {
            prefecture: "群馬",
            subdivisions: "南部",
            name: "館林市",
            hourly: "https://weathernews.jp/onebox/tenki/gunma/10207/"
        },
        hall: {
            lat: 36.244841,
            long: 139.542057
        }
    },
    渋川市: {
        tj: {
            prefecture: "群馬県",
            subdivisions: "南部(前橋)",
            subdivisions1: "南部",
            subdivisions2: "前橋",
            hourly: "https://tenki.jp/forecast/3/13/4210/10208/1hour.html"
        },
        wn: {
            prefecture: "群馬",
            subdivisions: "南部",
            name: "渋川市",
            hourly: "https://weathernews.jp/onebox/tenki/gunma/10208/"
        },
        hall: {
            lat: 36.489480,
            long: 139.000394
        }
    },
    藤岡市: {
        tj: {
            prefecture: "群馬県",
            subdivisions: "南部(前橋)",
            subdivisions1: "南部",
            subdivisions2: "前橋",
            hourly: "https://tenki.jp/forecast/3/13/4210/10209/1hour.html"
        },
        wn: {
            prefecture: "群馬",
            subdivisions: "南部",
            name: "藤岡市",
            hourly: "https://weathernews.jp/onebox/tenki/gunma/10209/"
        },
        hall: {
            lat: 36.258509,
            long: 139.074564
        }
    },
    富岡市: {
        tj: {
            prefecture: "群馬県",
            subdivisions: "南部(前橋)",
            subdivisions1: "南部",
            subdivisions2: "前橋",
            hourly: "https://tenki.jp/forecast/3/13/4210/10210/1hour.html"
        },
        wn: {
            prefecture: "群馬",
            subdivisions: "南部",
            name: "富岡市",
            hourly: "https://weathernews.jp/onebox/tenki/gunma/10210/"
        },
        hall: {
            lat: 36.259852,
            long: 138.889954
        }
    },
    安中市: {
        tj: {
            prefecture: "群馬県",
            subdivisions: "南部(前橋)",
            subdivisions1: "南部",
            subdivisions2: "前橋",
            hourly: "https://tenki.jp/forecast/3/13/4210/10211/1hour.html"
        },
        wn: {
            prefecture: "群馬",
            subdivisions: "南部",
            name: "安中市",
            hourly: "https://weathernews.jp/onebox/tenki/gunma/10211/"
        },
        hall: {
            lat: 36.326298,
            long: 138.887244
        }
    },
    みどり市: {
        tj: {
            prefecture: "群馬県",
            subdivisions: "南部(前橋)",
            subdivisions1: "南部",
            subdivisions2: "前橋",
            hourly: "https://tenki.jp/forecast/3/13/4210/10212/1hour.html"
        },
        wn: {
            prefecture: "群馬",
            subdivisions: "南部",
            name: "みどり市",
            hourly: "https://weathernews.jp/onebox/tenki/gunma/10212/"
        },
        hall: {
            lat: 36.394819,
            long: 139.281076
        }
    },
    榛東村: {
        tj: {
            prefecture: "群馬県",
            subdivisions: "南部(前橋)",
            subdivisions1: "南部",
            subdivisions2: "前橋",
            hourly: "https://tenki.jp/forecast/3/13/4210/10344/1hour.html"
        },
        wn: {
            prefecture: "群馬",
            subdivisions: "南部",
            name: "榛東村",
            hourly: "https://weathernews.jp/onebox/tenki/gunma/10344/"
        },
        hall: {
            lat: 36.438647,
            long: 138.967118
        }
    },
    吉岡町: {
        tj: {
            prefecture: "群馬県",
            subdivisions: "南部(前橋)",
            subdivisions1: "南部",
            subdivisions2: "前橋",
            hourly: "https://tenki.jp/forecast/3/13/4210/10345/1hour.html"
        },
        wn: {
            prefecture: "群馬",
            subdivisions: "南部",
            name: "吉岡町",
            hourly: "https://weathernews.jp/onebox/tenki/gunma/10345/"
        },
        hall: {
            lat: 36.447443,
            long: 139.009700
        }
    },
    上野村: {
        tj: {
            prefecture: "群馬県",
            subdivisions: "南部(前橋)",
            subdivisions1: "南部",
            subdivisions2: "前橋",
            hourly: "https://tenki.jp/forecast/3/13/4210/10366/1hour.html"
        },
        wn: {
            prefecture: "群馬",
            subdivisions: "南部",
            name: "上野村",
            hourly: "https://weathernews.jp/onebox/tenki/gunma/10366/"
        },
        hall: {
            lat: 36.083135,
            long: 138.777334
        }
    },
    神流町: {
        tj: {
            prefecture: "群馬県",
            subdivisions: "南部(前橋)",
            subdivisions1: "南部",
            subdivisions2: "前橋",
            hourly: "https://tenki.jp/forecast/3/13/4210/10367/1hour.html"
        },
        wn: {
            prefecture: "群馬",
            subdivisions: "南部",
            name: "神流町",
            hourly: "https://weathernews.jp/onebox/tenki/gunma/10367/"
        },
        hall: {
            lat: 36.116013,
            long: 138.916991
        }
    },
    下仁田町: {
        tj: {
            prefecture: "群馬県",
            subdivisions: "南部(前橋)",
            subdivisions1: "南部",
            subdivisions2: "前橋",
            hourly: "https://tenki.jp/forecast/3/13/4210/10382/1hour.html"
        },
        wn: {
            prefecture: "群馬",
            subdivisions: "南部",
            name: "下仁田町",
            hourly: "https://weathernews.jp/onebox/tenki/gunma/10382/"
        },
        hall: {
            lat: 36.212470,
            long: 138.789083
        }
    },
    南牧村: {
        tj: {
            prefecture: "群馬県",
            subdivisions: "南部(前橋)",
            subdivisions1: "南部",
            subdivisions2: "前橋",
            hourly: "https://tenki.jp/forecast/3/13/4210/10383/1hour.html"
        },
        wn: {
            prefecture: "群馬",
            subdivisions: "南部",
            name: "南牧村",
            hourly: "https://weathernews.jp/onebox/tenki/gunma/10383/"
        },
        hall: {
            lat: 36.158553,
            long: 138.711406
        }
    },
    甘楽町: {
        tj: {
            prefecture: "群馬県",
            subdivisions: "南部(前橋)",
            subdivisions1: "南部",
            subdivisions2: "前橋",
            hourly: "https://tenki.jp/forecast/3/13/4210/10384/1hour.html"
        },
        wn: {
            prefecture: "群馬",
            subdivisions: "南部",
            name: "甘楽町",
            hourly: "https://weathernews.jp/onebox/tenki/gunma/10384/"
        },
        hall: {
            lat: 36.243009,
            long: 138.921752
        }
    },
    玉村町: {
        tj: {
            prefecture: "群馬県",
            subdivisions: "南部(前橋)",
            subdivisions1: "南部",
            subdivisions2: "前橋",
            hourly: "https://tenki.jp/forecast/3/13/4210/10464/1hour.html"
        },
        wn: {
            prefecture: "群馬",
            subdivisions: "南部",
            name: "玉村町",
            hourly: "https://weathernews.jp/onebox/tenki/gunma/10464/"
        },
        hall: {
            lat: 36.304435,
            long: 139.114916
        }
    },
    板倉町: {
        tj: {
            prefecture: "群馬県",
            subdivisions: "南部(前橋)",
            subdivisions1: "南部",
            subdivisions2: "前橋",
            hourly: "https://tenki.jp/forecast/3/13/4210/10521/1hour.html"
        },
        wn: {
            prefecture: "群馬",
            subdivisions: "南部",
            name: "板倉町",
            hourly: "https://weathernews.jp/onebox/tenki/gunma/10521/"
        },
        hall: {
            lat: 36.225962,
            long: 139.601938
        }
    },
    明和町: {
        tj: {
            prefecture: "群馬県",
            subdivisions: "南部(前橋)",
            subdivisions1: "南部",
            subdivisions2: "前橋",
            hourly: "https://tenki.jp/forecast/3/13/4210/10522/1hour.html"
        },
        wn: {
            prefecture: "群馬",
            subdivisions: "南部",
            name: "明和町",
            hourly: "https://weathernews.jp/onebox/tenki/gunma/10522/"
        },
        hall: {
            lat: 36.211283,
            long: 139.534228
        }
    },
    千代田町: {
        tj: {
            prefecture: "群馬県",
            subdivisions: "南部(前橋)",
            subdivisions1: "南部",
            subdivisions2: "前橋",
            hourly: "https://tenki.jp/forecast/3/13/4210/10523/1hour.html"
        },
        wn: {
            prefecture: "群馬",
            subdivisions: "南部",
            name: "千代田町",
            hourly: "https://weathernews.jp/onebox/tenki/gunma/10523/"
        },
        hall: {
            lat: 36.217754,
            long: 139.442437
        }
    },
    大泉町: {
        tj: {
            prefecture: "群馬県",
            subdivisions: "南部(前橋)",
            subdivisions1: "南部",
            subdivisions2: "前橋",
            hourly: "https://tenki.jp/forecast/3/13/4210/10524/1hour.html"
        },
        wn: {
            prefecture: "群馬",
            subdivisions: "南部",
            name: "大泉町",
            hourly: "https://weathernews.jp/onebox/tenki/gunma/10524/"
        },
        hall: {
            lat: 36.247862,
            long: 139.404843
        }
    },
    邑楽町: {
        tj: {
            prefecture: "群馬県",
            subdivisions: "南部(前橋)",
            subdivisions1: "南部",
            subdivisions2: "前橋",
            hourly: "https://tenki.jp/forecast/3/13/4210/10525/1hour.html"
        },
        wn: {
            prefecture: "群馬",
            subdivisions: "南部",
            name: "邑楽町",
            hourly: "https://weathernews.jp/onebox/tenki/gunma/10525/"
        },
        hall: {
            lat: 36.252392,
            long: 139.462300
        }
    },
    沼田市: {
        tj: {
            prefecture: "群馬県",
            subdivisions: "北部(みなかみ)",
            subdivisions1: "北部",
            subdivisions2: "みなかみ",
            hourly: "https://tenki.jp/forecast/3/13/4220/10206/1hour.html"
        },
        wn: {
            prefecture: "群馬",
            subdivisions: "北部",
            name: "沼田市",
            hourly: "https://weathernews.jp/onebox/tenki/gunma/10206/"
        },
        hall: {
            lat: 36.643960,
            long: 139.042784
        }
    },
    中之条町: {
        tj: {
            prefecture: "群馬県",
            subdivisions: "北部(みなかみ)",
            subdivisions1: "北部",
            subdivisions2: "みなかみ",
            hourly: "https://tenki.jp/forecast/3/13/4220/10421/1hour.html"
        },
        wn: {
            prefecture: "群馬",
            subdivisions: "北部",
            name: "中之条町",
            hourly: "https://weathernews.jp/onebox/tenki/gunma/10421/"
        },
        hall: {
            lat: 36.589843,
            long: 138.841075
        }
    },
    長野原町: {
        tj: {
            prefecture: "群馬県",
            subdivisions: "北部(みなかみ)",
            subdivisions1: "北部",
            subdivisions2: "みなかみ",
            hourly: "https://tenki.jp/forecast/3/13/4220/10424/1hour.html"
        },
        wn: {
            prefecture: "群馬",
            subdivisions: "北部",
            name: "長野原町",
            hourly: "https://weathernews.jp/onebox/tenki/gunma/10424/"
        },
        hall: {
            lat: 36.544321,
            long: 138.649837
        }
    },
    嬬恋村: {
        tj: {
            prefecture: "群馬県",
            subdivisions: "北部(みなかみ)",
            subdivisions1: "北部",
            subdivisions2: "みなかみ",
            hourly: "https://tenki.jp/forecast/3/13/4220/10425/1hour.html"
        },
        wn: {
            prefecture: "群馬",
            subdivisions: "北部",
            name: "嬬恋村",
            hourly: "https://weathernews.jp/onebox/tenki/gunma/10425/"
        },
        hall: {
            lat: 36.516735,
            long: 138.530298
        }
    },
    草津町: {
        tj: {
            prefecture: "群馬県",
            subdivisions: "北部(みなかみ)",
            subdivisions1: "北部",
            subdivisions2: "みなかみ",
            hourly: "https://tenki.jp/forecast/3/13/4220/10426/1hour.html"
        },
        wn: {
            prefecture: "群馬",
            subdivisions: "北部",
            name: "草津町",
            hourly: "https://weathernews.jp/onebox/tenki/gunma/10426/"
        },
        hall: {
            lat: 36.620711,
            long: 138.596127
        }
    },
    高山村: {
        tj: {
            prefecture: "群馬県",
            subdivisions: "北部(みなかみ)",
            subdivisions1: "北部",
            subdivisions2: "みなかみ",
            hourly: "https://tenki.jp/forecast/3/13/4220/10428/1hour.html"
        },
        wn: {
            prefecture: "群馬",
            subdivisions: "北部",
            name: "高山村",
            hourly: "https://weathernews.jp/onebox/tenki/gunma/10428/"
        },
        hall: {
            lat: 36.620809,
            long: 138.943477
        }
    },
    東吾妻町: {
        tj: {
            prefecture: "群馬県",
            subdivisions: "北部(みなかみ)",
            subdivisions1: "北部",
            subdivisions2: "みなかみ",
            hourly: "https://tenki.jp/forecast/3/13/4220/10429/1hour.html"
        },
        wn: {
            prefecture: "群馬",
            subdivisions: "北部",
            name: "東吾妻町",
            hourly: "https://weathernews.jp/onebox/tenki/gunma/10429/"
        },
        hall: {
            lat: 36.571564,
            long: 138.820571
        }
    },
    片品村: {
        tj: {
            prefecture: "群馬県",
            subdivisions: "北部(みなかみ)",
            subdivisions1: "北部",
            subdivisions2: "みなかみ",
            hourly: "https://tenki.jp/forecast/3/13/4220/10443/1hour.html"
        },
        wn: {
            prefecture: "群馬",
            subdivisions: "北部",
            name: "片品村",
            hourly: "https://weathernews.jp/onebox/tenki/gunma/10443/"
        },
        hall: {
            lat: 36.772549,
            long: 139.225241
        }
    },
    川場村: {
        tj: {
            prefecture: "群馬県",
            subdivisions: "北部(みなかみ)",
            subdivisions1: "北部",
            subdivisions2: "みなかみ",
            hourly: "https://tenki.jp/forecast/3/13/4220/10444/1hour.html"
        },
        wn: {
            prefecture: "群馬",
            subdivisions: "北部",
            name: "川場村",
            hourly: "https://weathernews.jp/onebox/tenki/gunma/10444/"
        },
        hall: {
            lat: 36.692532,
            long: 139.103459
        }
    },
    昭和村: {
        tj: {
            prefecture: "群馬県",
            subdivisions: "北部(みなかみ)",
            subdivisions1: "北部",
            subdivisions2: "みなかみ",
            hourly: "https://tenki.jp/forecast/3/13/4220/10448/1hour.html"
        },
        wn: {
            prefecture: "群馬",
            subdivisions: "北部",
            name: "昭和村",
            hourly: "https://weathernews.jp/onebox/tenki/gunma/10448/"
        },
        hall: {
            lat: 37.335446,
            long: 139.610666
        }
    },
    みなかみ町: {
        tj: {
            prefecture: "群馬県",
            subdivisions: "北部(みなかみ)",
            subdivisions1: "北部",
            subdivisions2: "みなかみ",
            hourly: "https://tenki.jp/forecast/3/13/4220/10449/1hour.html"
        },
        wn: {
            prefecture: "群馬",
            subdivisions: "北部",
            name: "みなかみ町",
            hourly: "https://weathernews.jp/onebox/tenki/gunma/10449/"
        },
        hall: {
            lat: 36.678650,
            long: 138.999055
        }
    },
    さいたま市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11100/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "さいたま市浦和区",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11107/"
        },
        hall: {
            lat: 35.861515,
            long: 139.645502
        }
    },
    さいたま市西区: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11101/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "さいたま市西区",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11101/"
        },
        hall: {
            lat: 35.925166,
            long: 139.579633
        }
    },
    さいたま市北区: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11102/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "さいたま市北区",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11102/"
        },
        hall: {
            lat: 35.931390,
            long: 139.620287
        }
    },
    さいたま市大宮区: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11103/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "さいたま市大宮区",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11103/"
        },
        hall: {
            lat: 35.901785,
            long: 139.630631
        }
    },
    さいたま市見沼区: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11104/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "さいたま市見沼区",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11104/"
        },
        hall: {
            lat: 35.935216,
            long: 139.654427
        }
    },
    さいたま市中央区: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11105/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "さいたま市中央区",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11105/"
        },
        hall: {
            lat: 35.883965,
            long: 139.626177
        }
    },
    さいたま市桜区: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11106/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "さいたま市桜区",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11106/"
        },
        hall: {
            lat: 35.855876,
            long: 139.609766
        }
    },
    さいたま市浦和区: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11107/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "さいたま市浦和区",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11107/"
        },
        hall: {
            lat: 35.861970,
            long: 139.645408
        }
    },
    さいたま市南区: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11108/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "さいたま市南区",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11108/"
        },
        hall: {
            lat: 35.845260,
            long: 139.645437
        }
    },
    さいたま市緑区: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11109/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "さいたま市緑区",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11109/"
        },
        hall: {
            lat: 35.871095,
            long: 139.684017
        }
    },
    さいたま市岩槻区: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11110/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "さいたま市岩槻区",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11110/"
        },
        hall: {
            lat: 35.949882,
            long: 139.694182
        }
    },
    川越市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11201/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "川越市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11201/"
        },
        hall: {
            lat: 35.925112,
            long: 139.485840
        }
    },
    川口市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11203/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "川口市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11203/"
        },
        hall: {
            lat: 35.806733,
            long: 139.723400
        }
    },
    所沢市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11208/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "所沢市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11208/"
        },
        hall: {
            lat: 35.799672,
            long: 139.468613
        }
    },
    飯能市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11209/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "飯能市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11209/"
        },
        hall: {
            lat: 35.855760,
            long: 139.327791
        }
    },
    春日部市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11214/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "春日部市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11214/"
        },
        hall: {
            lat: 35.975305,
            long: 139.752409
        }
    },
    狭山市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11215/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "狭山市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11215/"
        },
        hall: {
            lat: 35.852907,
            long: 139.412227
        }
    },
    上尾市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11219/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "上尾市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11219/"
        },
        hall: {
            lat: 35.977408,
            long: 139.593203
        }
    },
    草加市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11221/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "草加市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11221/"
        },
        hall: {
            lat: 35.825393,
            long: 139.805373
        }
    },
    越谷市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11222/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "越谷市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11222/"
        },
        hall: {
            lat: 35.890643,
            long: 139.791037
        }
    },
    蕨市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11223/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "蕨市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11223/"
        },
        hall: {
            lat: 35.825565,
            long: 139.679579
        }
    },
    戸田市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11224/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "戸田市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11224/"
        },
        hall: {
            lat: 35.817635,
            long: 139.677931
        }
    },
    入間市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11225/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "入間市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11225/"
        },
        hall: {
            lat: 35.835769,
            long: 139.391058
        }
    },
    朝霞市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11227/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "朝霞市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11227/"
        },
        hall: {
            lat: 35.797255,
            long: 139.593919
        }
    },
    志木市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11228/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "志木市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11228/"
        },
        hall: {
            lat: 35.836590,
            long: 139.580248
        }
    },
    和光市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11229/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "和光市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11229/"
        },
        hall: {
            lat: 35.781104,
            long: 139.605693
        }
    },
    新座市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11230/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "新座市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11230/"
        },
        hall: {
            lat: 35.793497,
            long: 139.565330
        }
    },
    桶川市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11231/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "桶川市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11231/"
        },
        hall: {
            lat: 36.002966,
            long: 139.558177
        }
    },
    北本市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11233/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "北本市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11233/"
        },
        hall: {
            lat: 36.027026,
            long: 139.530240
        }
    },
    八潮市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11234/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "八潮市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11234/"
        },
        hall: {
            lat: 35.822539,
            long: 139.839175
        }
    },
    富士見市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11235/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "富士見市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11235/"
        },
        hall: {
            lat: 35.856759,
            long: 139.549074
        }
    },
    三郷市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11237/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "三郷市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11237/"
        },
        hall: {
            lat: 35.830132,
            long: 139.872247
        }
    },
    蓮田市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11238/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "蓮田市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11238/"
        },
        hall: {
            lat: 35.994504,
            long: 139.662200
        }
    },
    坂戸市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11239/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "坂戸市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11239/"
        },
        hall: {
            lat: 35.957262,
            long: 139.402983
        }
    },
    幸手市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11240/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "幸手市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11240/"
        },
        hall: {
            lat: 36.078089,
            long: 139.725805
        }
    },
    鶴ヶ島市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11241/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "鶴ヶ島市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11241/"
        },
        hall: {
            lat: 35.934523,
            long: 139.393126
        }
    },
    日高市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11242/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "日高市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11242/"
        },
        hall: {
            lat: 35.907748,
            long: 139.339140
        }
    },
    吉川市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11243/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "吉川市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11243/"
        },
        hall: {
            lat: 35.895962,
            long: 139.855651
        }
    },
    ふじみ野市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11245/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "ふじみ野市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11245/"
        },
        hall: {
            lat: 35.879396,
            long: 139.519820
        }
    },
    白岡市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11246/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "白岡市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11246/"
        },
        hall: {
            lat: 36.019070,
            long: 139.676861
        }
    },
    伊奈町: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11301/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "伊奈町",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11301/"
        },
        hall: {
            lat: 35.999865,
            long: 139.623877
        }
    },
    三芳町: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11324/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "三芳町",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11324/"
        },
        hall: {
            lat: 35.828347,
            long: 139.526514
        }
    },
    毛呂山町: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11326/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "毛呂山町",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11326/"
        },
        hall: {
            lat: 35.941596,
            long: 139.315954
        }
    },
    越生町: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11327/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "越生町",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11327/"
        },
        hall: {
            lat: 35.964478,
            long: 139.294202
        }
    },
    川島町: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11346/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "川島町",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11346/"
        },
        hall: {
            lat: 35.992494,
            long: 139.484352
        }
    },
    宮代町: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11442/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "宮代町",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11442/"
        },
        hall: {
            lat: 36.022593,
            long: 139.723069
        }
    },
    杉戸町: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11464/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "杉戸町",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11464/"
        },
        hall: {
            lat: 36.025618,
            long: 139.736829
        }
    },
    松伏町: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "南部(さいたま)",
            subdivisions1: "南部",
            subdivisions2: "さいたま",
            hourly: "https://tenki.jp/forecast/3/14/4310/11465/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "南部",
            name: "松伏町",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11465/"
        },
        hall: {
            lat: 35.925751,
            long: 139.815139
        }
    },
    熊谷市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "北部(熊谷)",
            subdivisions1: "北部",
            subdivisions2: "熊谷",
            hourly: "https://tenki.jp/forecast/3/14/4320/11202/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "北部",
            name: "熊谷市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11202/"
        },
        hall: {
            lat: 36.147362,
            long: 139.388664
        }
    },
    行田市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "北部(熊谷)",
            subdivisions1: "北部",
            subdivisions2: "熊谷",
            hourly: "https://tenki.jp/forecast/3/14/4320/11206/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "北部",
            name: "行田市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11206/"
        },
        hall: {
            lat: 36.138951,
            long: 139.455646
        }
    },
    加須市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "北部(熊谷)",
            subdivisions1: "北部",
            subdivisions2: "熊谷",
            hourly: "https://tenki.jp/forecast/3/14/4320/11210/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "北部",
            name: "加須市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11210/"
        },
        hall: {
            lat: 36.131438,
            long: 139.601775
        }
    },
    本庄市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "北部(熊谷)",
            subdivisions1: "北部",
            subdivisions2: "熊谷",
            hourly: "https://tenki.jp/forecast/3/14/4320/11211/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "北部",
            name: "本庄市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11211/"
        },
        hall: {
            lat: 36.243329,
            long: 139.190629
        }
    },
    東松山市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "北部(熊谷)",
            subdivisions1: "北部",
            subdivisions2: "熊谷",
            hourly: "https://tenki.jp/forecast/3/14/4320/11212/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "北部",
            name: "東松山市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11212/"
        },
        hall: {
            lat: 36.042162,
            long: 139.399950
        }
    },
    羽生市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "北部(熊谷)",
            subdivisions1: "北部",
            subdivisions2: "熊谷",
            hourly: "https://tenki.jp/forecast/3/14/4320/11216/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "北部",
            name: "羽生市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11216/"
        },
        hall: {
            lat: 36.172667,
            long: 139.548592
        }
    },
    鴻巣市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "北部(熊谷)",
            subdivisions1: "北部",
            subdivisions2: "熊谷",
            hourly: "https://tenki.jp/forecast/3/14/4320/11217/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "北部",
            name: "鴻巣市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11217/"
        },
        hall: {
            lat: 36.065758,
            long: 139.522172
        }
    },
    深谷市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "北部(熊谷)",
            subdivisions1: "北部",
            subdivisions2: "熊谷",
            hourly: "https://tenki.jp/forecast/3/14/4320/11218/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "北部",
            name: "深谷市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11218/"
        },
        hall: {
            lat: 36.197018,
            long: 139.281714
        }
    },
    久喜市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "北部(熊谷)",
            subdivisions1: "北部",
            subdivisions2: "熊谷",
            hourly: "https://tenki.jp/forecast/3/14/4320/11232/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "北部",
            name: "久喜市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11232/"
        },
        hall: {
            lat: 36.062059,
            long: 139.666838
        }
    },
    滑川町: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "北部(熊谷)",
            subdivisions1: "北部",
            subdivisions2: "熊谷",
            hourly: "https://tenki.jp/forecast/3/14/4320/11341/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "北部",
            name: "滑川町",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11341/"
        },
        hall: {
            lat: 36.065990,
            long: 139.360919
        }
    },
    嵐山町: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "北部(熊谷)",
            subdivisions1: "北部",
            subdivisions2: "熊谷",
            hourly: "https://tenki.jp/forecast/3/14/4320/11342/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "北部",
            name: "嵐山町",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11342/"
        },
        hall: {
            lat: 36.056568,
            long: 139.320514
        }
    },
    小川町: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "北部(熊谷)",
            subdivisions1: "北部",
            subdivisions2: "熊谷",
            hourly: "https://tenki.jp/forecast/3/14/4320/11343/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "北部",
            name: "小川町",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11343/"
        },
        hall: {
            lat: 36.056657,
            long: 139.261789
        }
    },
    吉見町: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "北部(熊谷)",
            subdivisions1: "北部",
            subdivisions2: "熊谷",
            hourly: "https://tenki.jp/forecast/3/14/4320/11347/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "北部",
            name: "吉見町",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11347/"
        },
        hall: {
            lat: 36.039853,
            long: 139.453730
        }
    },
    鳩山町: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "北部(熊谷)",
            subdivisions1: "北部",
            subdivisions2: "熊谷",
            hourly: "https://tenki.jp/forecast/3/14/4320/11348/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "北部",
            name: "鳩山町",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11348/"
        },
        hall: {
            lat: 35.981468,
            long: 139.334106
        }
    },
    ときがわ町: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "北部(熊谷)",
            subdivisions1: "北部",
            subdivisions2: "熊谷",
            hourly: "https://tenki.jp/forecast/3/14/4320/11349/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "北部",
            name: "ときがわ町",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11349/"
        },
        hall: {
            lat: 36.008570,
            long: 139.296763
        }
    },
    東秩父村: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "北部(熊谷)",
            subdivisions1: "北部",
            subdivisions2: "熊谷",
            hourly: "https://tenki.jp/forecast/3/14/4320/11369/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "北部",
            name: "東秩父村",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11369/"
        },
        hall: {
            lat: 36.058148,
            long: 139.194573
        }
    },
    美里町: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "北部(熊谷)",
            subdivisions1: "北部",
            subdivisions2: "熊谷",
            hourly: "https://tenki.jp/forecast/3/14/4320/11381/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "北部",
            name: "美里町",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11381/"
        },
        hall: {
            lat: 38.544400,
            long: 141.056717
        }
    },
    神川町: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "北部(熊谷)",
            subdivisions1: "北部",
            subdivisions2: "熊谷",
            hourly: "https://tenki.jp/forecast/3/14/4320/11383/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "北部",
            name: "神川町",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11383/"
        },
        hall: {
            lat: 36.213901,
            long: 139.101578
        }
    },
    上里町: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "北部(熊谷)",
            subdivisions1: "北部",
            subdivisions2: "熊谷",
            hourly: "https://tenki.jp/forecast/3/14/4320/11385/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "北部",
            name: "上里町",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11385/"
        },
        hall: {
            lat: 36.251615,
            long: 139.144870
        }
    },
    寄居町: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "北部(熊谷)",
            subdivisions1: "北部",
            subdivisions2: "熊谷",
            hourly: "https://tenki.jp/forecast/3/14/4320/11408/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "北部",
            name: "寄居町",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11408/"
        },
        hall: {
            lat: 36.118348,
            long: 139.193014
        }
    },
    秩父市: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "秩父地方(秩父)",
            subdivisions1: "秩父地方",
            subdivisions2: "秩父",
            hourly: "https://tenki.jp/forecast/3/14/4330/11207/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "秩父地方",
            name: "秩父市",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11207/"
        },
        hall: {
            lat: 35.991681,
            long: 139.085475
        }
    },
    横瀬町: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "秩父地方(秩父)",
            subdivisions1: "秩父地方",
            subdivisions2: "秩父",
            hourly: "https://tenki.jp/forecast/3/14/4330/11361/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "秩父地方",
            name: "横瀬町",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11361/"
        },
        hall: {
            lat: 35.987286,
            long: 139.100049
        }
    },
    皆野町: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "秩父地方(秩父)",
            subdivisions1: "秩父地方",
            subdivisions2: "秩父",
            hourly: "https://tenki.jp/forecast/3/14/4330/11362/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "秩父地方",
            name: "皆野町",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11362/"
        },
        hall: {
            lat: 36.070845,
            long: 139.098754
        }
    },
    長瀞町: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "秩父地方(秩父)",
            subdivisions1: "秩父地方",
            subdivisions2: "秩父",
            hourly: "https://tenki.jp/forecast/3/14/4330/11363/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "秩父地方",
            name: "長瀞町",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11363/"
        },
        hall: {
            lat: 36.114787,
            long: 139.109720
        }
    },
    小鹿野町: {
        tj: {
            prefecture: "埼玉県",
            subdivisions: "秩父地方(秩父)",
            subdivisions1: "秩父地方",
            subdivisions2: "秩父",
            hourly: "https://tenki.jp/forecast/3/14/4330/11365/1hour.html"
        },
        wn: {
            prefecture: "埼玉",
            subdivisions: "秩父地方",
            name: "小鹿野町",
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11365/"
        },
        hall: {
            lat: 36.017238,
            long: 139.008680
        }
    },
    千葉市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北西部(千葉)",
            subdivisions1: "北西部",
            subdivisions2: "千葉",
            hourly: "https://tenki.jp/forecast/3/15/4510/12100/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北西部",
            name: "千葉市中央区",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12101/"
        },
        hall: {
            lat: 35.607037,
            long: 140.106068
        }
    },
    千葉市中央区: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北西部(千葉)",
            subdivisions1: "北西部",
            subdivisions2: "千葉",
            hourly: "https://tenki.jp/forecast/3/15/4510/12101/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北西部",
            name: "千葉市中央区",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12101/"
        },
        hall: {
            lat: 35.607428,
            long: 140.123049
        }
    },
    千葉市花見川区: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北西部(千葉)",
            subdivisions1: "北西部",
            subdivisions2: "千葉",
            hourly: "https://tenki.jp/forecast/3/15/4510/12102/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北西部",
            name: "千葉市花見川区",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12102/"
        },
        hall: {
            lat: 35.662876,
            long: 140.069061
        }
    },
    千葉市稲毛区: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北西部(千葉)",
            subdivisions1: "北西部",
            subdivisions2: "千葉",
            hourly: "https://tenki.jp/forecast/3/15/4510/12103/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北西部",
            name: "千葉市稲毛区",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12103/"
        },
        hall: {
            lat: 35.636202,
            long: 140.107106
        }
    },
    千葉市若葉区: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北西部(千葉)",
            subdivisions1: "北西部",
            subdivisions2: "千葉",
            hourly: "https://tenki.jp/forecast/3/15/4510/12104/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北西部",
            name: "千葉市若葉区",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12104/"
        },
        hall: {
            lat: 35.634016,
            long: 140.155653
        }
    },
    千葉市緑区: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北西部(千葉)",
            subdivisions1: "北西部",
            subdivisions2: "千葉",
            hourly: "https://tenki.jp/forecast/3/15/4510/12105/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北西部",
            name: "千葉市緑区",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12105/"
        },
        hall: {
            lat: 35.560501,
            long: 140.176153
        }
    },
    千葉市美浜区: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北西部(千葉)",
            subdivisions1: "北西部",
            subdivisions2: "千葉",
            hourly: "https://tenki.jp/forecast/3/15/4510/12106/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北西部",
            name: "千葉市美浜区",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12106/"
        },
        hall: {
            lat: 35.640552,
            long: 140.063040
        }
    },
    市川市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北西部(千葉)",
            subdivisions1: "北西部",
            subdivisions2: "千葉",
            hourly: "https://tenki.jp/forecast/3/15/4510/12203/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北西部",
            name: "市川市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12203/"
        },
        hall: {
            lat: 35.721857,
            long: 139.931067
        }
    },
    船橋市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北西部(千葉)",
            subdivisions1: "北西部",
            subdivisions2: "千葉",
            hourly: "https://tenki.jp/forecast/3/15/4510/12204/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北西部",
            name: "船橋市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12204/"
        },
        hall: {
            lat: 35.694711,
            long: 139.982621
        }
    },
    松戸市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北西部(千葉)",
            subdivisions1: "北西部",
            subdivisions2: "千葉",
            hourly: "https://tenki.jp/forecast/3/15/4510/12207/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北西部",
            name: "松戸市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12207/"
        },
        hall: {
            lat: 35.787652,
            long: 139.903226
        }
    },
    野田市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北西部(千葉)",
            subdivisions1: "北西部",
            subdivisions2: "千葉",
            hourly: "https://tenki.jp/forecast/3/15/4510/12208/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北西部",
            name: "野田市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12208/"
        },
        hall: {
            lat: 35.955106,
            long: 139.874828
        }
    },
    成田市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北西部(千葉)",
            subdivisions1: "北西部",
            subdivisions2: "千葉",
            hourly: "https://tenki.jp/forecast/3/15/4510/12211/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北西部",
            name: "成田市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12211/"
        },
        hall: {
            lat: 35.776605,
            long: 140.318781
        }
    },
    佐倉市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北西部(千葉)",
            subdivisions1: "北西部",
            subdivisions2: "千葉",
            hourly: "https://tenki.jp/forecast/3/15/4510/12212/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北西部",
            name: "佐倉市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12212/"
        },
        hall: {
            lat: 35.723441,
            long: 140.223972
        }
    },
    習志野市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北西部(千葉)",
            subdivisions1: "北西部",
            subdivisions2: "千葉",
            hourly: "https://tenki.jp/forecast/3/15/4510/12216/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北西部",
            name: "習志野市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12216/"
        },
        hall: {
            lat: 35.681631,
            long: 140.027288
        }
    },
    柏市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北西部(千葉)",
            subdivisions1: "北西部",
            subdivisions2: "千葉",
            hourly: "https://tenki.jp/forecast/3/15/4510/12217/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北西部",
            name: "柏市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12217/"
        },
        hall: {
            lat: 35.868295,
            long: 139.976199
        }
    },
    市原市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北西部(千葉)",
            subdivisions1: "北西部",
            subdivisions2: "千葉",
            hourly: "https://tenki.jp/forecast/3/15/4510/12219/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北西部",
            name: "市原市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12219/"
        },
        hall: {
            lat: 35.497897,
            long: 140.115594
        }
    },
    流山市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北西部(千葉)",
            subdivisions1: "北西部",
            subdivisions2: "千葉",
            hourly: "https://tenki.jp/forecast/3/15/4510/12220/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北西部",
            name: "流山市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12220/"
        },
        hall: {
            lat: 35.856287,
            long: 139.902586
        }
    },
    八千代市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北西部(千葉)",
            subdivisions1: "北西部",
            subdivisions2: "千葉",
            hourly: "https://tenki.jp/forecast/3/15/4510/12221/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北西部",
            name: "八千代市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12221/"
        },
        hall: {
            lat: 35.722381,
            long: 140.099915
        }
    },
    我孫子市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北西部(千葉)",
            subdivisions1: "北西部",
            subdivisions2: "千葉",
            hourly: "https://tenki.jp/forecast/3/15/4510/12222/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北西部",
            name: "我孫子市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12222/"
        },
        hall: {
            lat: 35.864162,
            long: 140.028225
        }
    },
    鎌ヶ谷市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北西部(千葉)",
            subdivisions1: "北西部",
            subdivisions2: "千葉",
            hourly: "https://tenki.jp/forecast/3/15/4510/12224/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北西部",
            name: "鎌ケ谷市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12224/"
        },
        hall: {
            lat: 35.776765,
            long: 140.000736
        }
    },
    浦安市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北西部(千葉)",
            subdivisions1: "北西部",
            subdivisions2: "千葉",
            hourly: "https://tenki.jp/forecast/3/15/4510/12227/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北西部",
            name: "浦安市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12227/"
        },
        hall: {
            lat: 35.653988,
            long: 139.902187
        }
    },
    四街道市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北西部(千葉)",
            subdivisions1: "北西部",
            subdivisions2: "千葉",
            hourly: "https://tenki.jp/forecast/3/15/4510/12228/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北西部",
            name: "四街道市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12228/"
        },
        hall: {
            lat: 35.669713,
            long: 140.167957
        }
    },
    八街市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北西部(千葉)",
            subdivisions1: "北西部",
            subdivisions2: "千葉",
            hourly: "https://tenki.jp/forecast/3/15/4510/12230/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北西部",
            name: "八街市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12230/"
        },
        hall: {
            lat: 35.665859,
            long: 140.317913
        }
    },
    印西市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北西部(千葉)",
            subdivisions1: "北西部",
            subdivisions2: "千葉",
            hourly: "https://tenki.jp/forecast/3/15/4510/12231/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北西部",
            name: "印西市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12231/"
        },
        hall: {
            lat: 35.832332,
            long: 140.145765
        }
    },
    白井市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北西部(千葉)",
            subdivisions1: "北西部",
            subdivisions2: "千葉",
            hourly: "https://tenki.jp/forecast/3/15/4510/12232/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北西部",
            name: "白井市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12232/"
        },
        hall: {
            lat: 35.791503,
            long: 140.056372
        }
    },
    富里市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北西部(千葉)",
            subdivisions1: "北西部",
            subdivisions2: "千葉",
            hourly: "https://tenki.jp/forecast/3/15/4510/12233/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北西部",
            name: "富里市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12233/"
        },
        hall: {
            lat: 35.726810,
            long: 140.343071
        }
    },
    酒々井町: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北西部(千葉)",
            subdivisions1: "北西部",
            subdivisions2: "千葉",
            hourly: "https://tenki.jp/forecast/3/15/4510/12322/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北西部",
            name: "酒々井町",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12322/"
        },
        hall: {
            lat: 35.724751,
            long: 140.269483
        }
    },
    栄町: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北西部(千葉)",
            subdivisions1: "北西部",
            subdivisions2: "千葉",
            hourly: "https://tenki.jp/forecast/3/15/4510/12329/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北西部",
            name: "栄町",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12329/"
        },
        hall: {
            lat: 35.840866,
            long: 140.243945
        }
    },
    銚子市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北東部(銚子)",
            subdivisions1: "北東部",
            subdivisions2: "銚子",
            hourly: "https://tenki.jp/forecast/3/15/4520/12202/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北東部",
            name: "銚子市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12202/"
        },
        hall: {
            lat: 35.734667,
            long: 140.826791
        }
    },
    茂原市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北東部(銚子)",
            subdivisions1: "北東部",
            subdivisions2: "銚子",
            hourly: "https://tenki.jp/forecast/3/15/4520/12210/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北東部",
            name: "茂原市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12210/"
        },
        hall: {
            lat: 35.428540,
            long: 140.288050
        }
    },
    東金市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北東部(銚子)",
            subdivisions1: "北東部",
            subdivisions2: "銚子",
            hourly: "https://tenki.jp/forecast/3/15/4520/12213/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北東部",
            name: "東金市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12213/"
        },
        hall: {
            lat: 35.559932,
            long: 140.366115
        }
    },
    旭市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北東部(銚子)",
            subdivisions1: "北東部",
            subdivisions2: "銚子",
            hourly: "https://tenki.jp/forecast/3/15/4520/12215/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北東部",
            name: "旭市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12215/"
        },
        hall: {
            lat: 35.716034,
            long: 140.648178
        }
    },
    匝瑳市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北東部(銚子)",
            subdivisions1: "北東部",
            subdivisions2: "銚子",
            hourly: "https://tenki.jp/forecast/3/15/4520/12235/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北東部",
            name: "匝瑳市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12235/"
        },
        hall: {
            lat: 35.707914,
            long: 140.564356
        }
    },
    香取市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北東部(銚子)",
            subdivisions1: "北東部",
            subdivisions2: "銚子",
            hourly: "https://tenki.jp/forecast/3/15/4520/12236/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北東部",
            name: "香取市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12236/"
        },
        hall: {
            lat: 35.897730,
            long: 140.499248
        }
    },
    山武市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北東部(銚子)",
            subdivisions1: "北東部",
            subdivisions2: "銚子",
            hourly: "https://tenki.jp/forecast/3/15/4520/12237/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北東部",
            name: "山武市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12237/"
        },
        hall: {
            lat: 35.602992,
            long: 140.413531
        }
    },
    大網白里市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北東部(銚子)",
            subdivisions1: "北東部",
            subdivisions2: "銚子",
            hourly: "https://tenki.jp/forecast/3/15/4520/12239/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北東部",
            name: "大網白里市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12239/"
        },
        hall: {
            lat: 35.521708,
            long: 140.320963
        }
    },
    神崎町: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北東部(銚子)",
            subdivisions1: "北東部",
            subdivisions2: "銚子",
            hourly: "https://tenki.jp/forecast/3/15/4520/12342/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北東部",
            name: "神崎町",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12342/"
        },
        hall: {
            lat: 35.901611,
            long: 140.405326
        }
    },
    多古町: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北東部(銚子)",
            subdivisions1: "北東部",
            subdivisions2: "銚子",
            hourly: "https://tenki.jp/forecast/3/15/4520/12347/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北東部",
            name: "多古町",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12347/"
        },
        hall: {
            lat: 35.735592,
            long: 140.467727
        }
    },
    東庄町: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北東部(銚子)",
            subdivisions1: "北東部",
            subdivisions2: "銚子",
            hourly: "https://tenki.jp/forecast/3/15/4520/12349/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北東部",
            name: "東庄町",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12349/"
        },
        hall: {
            lat: 35.837150,
            long: 140.668786
        }
    },
    九十九里町: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北東部(銚子)",
            subdivisions1: "北東部",
            subdivisions2: "銚子",
            hourly: "https://tenki.jp/forecast/3/15/4520/12403/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北東部",
            name: "九十九里町",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12403/"
        },
        hall: {
            lat: 35.535065,
            long: 140.440250
        }
    },
    芝山町: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北東部(銚子)",
            subdivisions1: "北東部",
            subdivisions2: "銚子",
            hourly: "https://tenki.jp/forecast/3/15/4520/12409/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北東部",
            name: "芝山町",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12409/"
        },
        hall: {
            lat: 35.693064,
            long: 140.414255
        }
    },
    横芝光町: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北東部(銚子)",
            subdivisions1: "北東部",
            subdivisions2: "銚子",
            hourly: "https://tenki.jp/forecast/3/15/4520/12410/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北東部",
            name: "横芝光町",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12410/"
        },
        hall: {
            lat: 35.665609,
            long: 140.504396
        }
    },
    一宮町: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北東部(銚子)",
            subdivisions1: "北東部",
            subdivisions2: "銚子",
            hourly: "https://tenki.jp/forecast/3/15/4520/12421/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北東部",
            name: "一宮町",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12421/"
        },
        hall: {
            lat: 35.372812,
            long: 140.368734
        }
    },
    睦沢町: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北東部(銚子)",
            subdivisions1: "北東部",
            subdivisions2: "銚子",
            hourly: "https://tenki.jp/forecast/3/15/4520/12422/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北東部",
            name: "睦沢町",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12422/"
        },
        hall: {
            lat: 35.361091,
            long: 140.319275
        }
    },
    長生村: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北東部(銚子)",
            subdivisions1: "北東部",
            subdivisions2: "銚子",
            hourly: "https://tenki.jp/forecast/3/15/4520/12423/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北東部",
            name: "長生村",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12423/"
        },
        hall: {
            lat: 35.412179,
            long: 140.354058
        }
    },
    白子町: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北東部(銚子)",
            subdivisions1: "北東部",
            subdivisions2: "銚子",
            hourly: "https://tenki.jp/forecast/3/15/4520/12424/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北東部",
            name: "白子町",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12424/"
        },
        hall: {
            lat: 35.454340,
            long: 140.374253
        }
    },
    長柄町: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北東部(銚子)",
            subdivisions1: "北東部",
            subdivisions2: "銚子",
            hourly: "https://tenki.jp/forecast/3/15/4520/12426/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北東部",
            name: "長柄町",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12426/"
        },
        hall: {
            lat: 35.431152,
            long: 140.227073
        }
    },
    長南町: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "北東部(銚子)",
            subdivisions1: "北東部",
            subdivisions2: "銚子",
            hourly: "https://tenki.jp/forecast/3/15/4520/12427/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "北東部",
            name: "長南町",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12427/"
        },
        hall: {
            lat: 35.386066,
            long: 140.236779
        }
    },
    館山市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "南部(館山)",
            subdivisions1: "南部",
            subdivisions2: "館山",
            hourly: "https://tenki.jp/forecast/3/15/4530/12205/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "南部",
            name: "館山市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12205/"
        },
        hall: {
            lat: 34.996608,
            long: 139.870085
        }
    },
    木更津市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "南部(館山)",
            subdivisions1: "南部",
            subdivisions2: "館山",
            hourly: "https://tenki.jp/forecast/3/15/4530/12206/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "南部",
            name: "木更津市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12206/"
        },
        hall: {
            lat: 35.381208,
            long: 139.924905
        }
    },
    勝浦市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "南部(館山)",
            subdivisions1: "南部",
            subdivisions2: "館山",
            hourly: "https://tenki.jp/forecast/3/15/4530/12218/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "南部",
            name: "勝浦市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12218/"
        },
        hall: {
            lat: 35.152211,
            long: 140.320868
        }
    },
    鴨川市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "南部(館山)",
            subdivisions1: "南部",
            subdivisions2: "館山",
            hourly: "https://tenki.jp/forecast/3/15/4530/12223/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "南部",
            name: "鴨川市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12223/"
        },
        hall: {
            lat: 35.114017,
            long: 140.098805
        }
    },
    君津市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "南部(館山)",
            subdivisions1: "南部",
            subdivisions2: "館山",
            hourly: "https://tenki.jp/forecast/3/15/4530/12225/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "南部",
            name: "君津市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12225/"
        },
        hall: {
            lat: 35.330424,
            long: 139.902561
        }
    },
    富津市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "南部(館山)",
            subdivisions1: "南部",
            subdivisions2: "館山",
            hourly: "https://tenki.jp/forecast/3/15/4530/12226/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "南部",
            name: "富津市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12226/"
        },
        hall: {
            lat: 35.304140,
            long: 139.857113
        }
    },
    袖ケ浦市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "南部(館山)",
            subdivisions1: "南部",
            subdivisions2: "館山",
            hourly: "https://tenki.jp/forecast/3/15/4530/12229/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "南部",
            name: "袖ケ浦市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12229/"
        },
        hall: {
            lat: 35.429945,
            long: 139.954353
        }
    },
    南房総市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "南部(館山)",
            subdivisions1: "南部",
            subdivisions2: "館山",
            hourly: "https://tenki.jp/forecast/3/15/4530/12234/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "南部",
            name: "南房総市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12234/"
        },
        hall: {
            lat: 35.043147,
            long: 139.839997
        }
    },
    いすみ市: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "南部(館山)",
            subdivisions1: "南部",
            subdivisions2: "館山",
            hourly: "https://tenki.jp/forecast/3/15/4530/12238/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "南部",
            name: "いすみ市",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12238/"
        },
        hall: {
            lat: 35.253887,
            long: 140.385117
        }
    },
    大多喜町: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "南部(館山)",
            subdivisions1: "南部",
            subdivisions2: "館山",
            hourly: "https://tenki.jp/forecast/3/15/4530/12441/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "南部",
            name: "大多喜町",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12441/"
        },
        hall: {
            lat: 35.284822,
            long: 140.245419
        }
    },
    御宿町: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "南部(館山)",
            subdivisions1: "南部",
            subdivisions2: "館山",
            hourly: "https://tenki.jp/forecast/3/15/4530/12443/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "南部",
            name: "御宿町",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12443/"
        },
        hall: {
            lat: 35.191484,
            long: 140.348785
        }
    },
    鋸南町: {
        tj: {
            prefecture: "千葉県",
            subdivisions: "南部(館山)",
            subdivisions1: "南部",
            subdivisions2: "館山",
            hourly: "https://tenki.jp/forecast/3/15/4530/12463/1hour.html"
        },
        wn: {
            prefecture: "千葉",
            subdivisions: "南部",
            name: "鋸南町",
            hourly: "https://weathernews.jp/onebox/tenki/chiba/12463/"
        },
        hall: {
            lat: 35.111131,
            long: 139.835645
        }
    },
    千代田区: {
        tj: {
            prefecture: "東京都",
            subdivisions: "東京23区",
            subdivisions1: "東京23区",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13101/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "千代田区",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13101/"
        },
        hall: {
            lat: 35.694003,
            long: 139.753634
        }
    },
    中央区: {
        tj: {
            prefecture: "東京都",
            subdivisions: "東京23区",
            subdivisions1: "東京23区",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13102/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "中央区",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13102/"
        },
        hall: {
            lat: 35.670587,
            long: 139.772003
        }
    },
    港区: {
        tj: {
            prefecture: "東京都",
            subdivisions: "東京23区",
            subdivisions1: "東京23区",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13103/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "港区",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13103/"
        },
        hall: {
            lat: 35.658071,
            long: 139.751599
        }
    },
    新宿区: {
        tj: {
            prefecture: "東京都",
            subdivisions: "東京23区",
            subdivisions1: "東京23区",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13104/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "新宿区",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13104/"
        },
        hall: {
            lat: 35.693890,
            long: 139.703463
        }
    },
    文京区: {
        tj: {
            prefecture: "東京都",
            subdivisions: "東京23区",
            subdivisions1: "東京23区",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13105/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "文京区",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13105/"
        },
        hall: {
            lat: 35.707976,
            long: 139.752473
        }
    },
    台東区: {
        tj: {
            prefecture: "東京都",
            subdivisions: "東京23区",
            subdivisions1: "東京23区",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13106/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "台東区",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13106/"
        },
        hall: {
            lat: 35.712607,
            long: 139.779984
        }
    },
    墨田区: {
        tj: {
            prefecture: "東京都",
            subdivisions: "東京23区",
            subdivisions1: "東京23区",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13107/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "墨田区",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13107/"
        },
        hall: {
            lat: 35.710724,
            long: 139.801497
        }
    },
    江東区: {
        tj: {
            prefecture: "東京都",
            subdivisions: "東京23区",
            subdivisions1: "東京23区",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13108/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "江東区",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13108/"
        },
        hall: {
            lat: 35.672859,
            long: 139.817365
        }
    },
    品川区: {
        tj: {
            prefecture: "東京都",
            subdivisions: "東京23区",
            subdivisions1: "東京23区",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13109/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "品川区",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13109/"
        },
        hall: {
            lat: 35.609066,
            long: 139.730250
        }
    },
    目黒区: {
        tj: {
            prefecture: "東京都",
            subdivisions: "東京23区",
            subdivisions1: "東京23区",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13110/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "目黒区",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13110/"
        },
        hall: {
            lat: 35.641410,
            long: 139.698118
        }
    },
    大田区: {
        tj: {
            prefecture: "東京都",
            subdivisions: "東京23区",
            subdivisions1: "東京23区",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13111/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "大田区",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13111/"
        },
        hall: {
            lat: 35.561260,
            long: 139.715987
        }
    },
    世田谷区: {
        tj: {
            prefecture: "東京都",
            subdivisions: "東京23区",
            subdivisions1: "東京23区",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13112/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "世田谷区",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13112/"
        },
        hall: {
            lat: 35.646481,
            long: 139.653208
        }
    },
    渋谷区: {
        tj: {
            prefecture: "東京都",
            subdivisions: "東京23区",
            subdivisions1: "東京23区",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13113/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "渋谷区",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13113/"
        },
        hall: {
            lat: 35.663982,
            long: 139.697948
        }
    },
    中野区: {
        tj: {
            prefecture: "東京都",
            subdivisions: "東京23区",
            subdivisions1: "東京23区",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13114/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "中野区",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13114/"
        },
        hall: {
            lat: 35.707268,
            long: 139.663738
        }
    },
    杉並区: {
        tj: {
            prefecture: "東京都",
            subdivisions: "東京23区",
            subdivisions1: "東京23区",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13115/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "杉並区",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13115/"
        },
        hall: {
            lat: 35.699546,
            long: 139.636414
        }
    },
    豊島区: {
        tj: {
            prefecture: "東京都",
            subdivisions: "東京23区",
            subdivisions1: "東京23区",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13116/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "豊島区",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13116/"
        },
        hall: {
            lat: 35.726121,
            long: 139.716678
        }
    },
    北区: {
        tj: {
            prefecture: "東京都",
            subdivisions: "東京23区",
            subdivisions1: "東京23区",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13117/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "北区",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13117/"
        },
        hall: {
            lat: 35.752805,
            long: 139.733657
        }
    },
    荒川区: {
        tj: {
            prefecture: "東京都",
            subdivisions: "東京23区",
            subdivisions1: "東京23区",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13118/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "荒川区",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13118/"
        },
        hall: {
            lat: 35.736083,
            long: 139.783372
        }
    },
    板橋区: {
        tj: {
            prefecture: "東京都",
            subdivisions: "東京23区",
            subdivisions1: "東京23区",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13119/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "板橋区",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13119/"
        },
        hall: {
            lat: 35.751245,
            long: 139.709246
        }
    },
    練馬区: {
        tj: {
            prefecture: "東京都",
            subdivisions: "東京23区",
            subdivisions1: "東京23区",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13120/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "練馬区",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13120/"
        },
        hall: {
            lat: 35.735600,
            long: 139.651725
        }
    },
    足立区: {
        tj: {
            prefecture: "東京都",
            subdivisions: "東京23区",
            subdivisions1: "東京23区",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13121/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "足立区",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13121/"
        },
        hall: {
            lat: 35.774945,
            long: 139.804584
        }
    },
    葛飾区: {
        tj: {
            prefecture: "東京都",
            subdivisions: "東京23区",
            subdivisions1: "東京23区",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13122/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "葛飾区",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13122/"
        },
        hall: {
            lat: 35.743430,
            long: 139.847213
        }
    },
    江戸川区: {
        tj: {
            prefecture: "東京都",
            subdivisions: "東京23区",
            subdivisions1: "東京23区",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13123/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "江戸川区",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13123/"
        },
        hall: {
            lat: 35.706648,
            long: 139.868312
        }
    },
    八王子市: {
        tj: {
            prefecture: "東京都",
            subdivisions: "多摩",
            subdivisions1: "多摩",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13201/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "八王子市",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13201/"
        },
        hall: {
            lat: 35.666570,
            long: 139.316075
        }
    },
    立川市: {
        tj: {
            prefecture: "東京都",
            subdivisions: "多摩",
            subdivisions1: "多摩",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13202/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "立川市",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13202/"
        },
        hall: {
            lat: 35.713981,
            long: 139.407846
        }
    },
    武蔵野市: {
        tj: {
            prefecture: "東京都",
            subdivisions: "多摩",
            subdivisions1: "多摩",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13203/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "武蔵野市",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13203/"
        },
        hall: {
            lat: 35.717837,
            long: 139.565938
        }
    },
    三鷹市: {
        tj: {
            prefecture: "東京都",
            subdivisions: "多摩",
            subdivisions1: "多摩",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13204/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "三鷹市",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13204/"
        },
        hall: {
            lat: 35.683308,
            long: 139.559883
        }
    },
    青梅市: {
        tj: {
            prefecture: "東京都",
            subdivisions: "多摩",
            subdivisions1: "多摩",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13205/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "青梅市",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13205/"
        },
        hall: {
            lat: 35.788171,
            long: 139.274994
        }
    },
    府中市: {
        tj: {
            prefecture: "東京都",
            subdivisions: "多摩",
            subdivisions1: "多摩",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13206/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "府中市",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13206/"
        },
        hall: {
            lat: 35.669404,
            long: 139.477591
        }
    },
    昭島市: {
        tj: {
            prefecture: "東京都",
            subdivisions: "多摩",
            subdivisions1: "多摩",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13207/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "昭島市",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13207/"
        },
        hall: {
            lat: 35.705705,
            long: 139.353773
        }
    },
    調布市: {
        tj: {
            prefecture: "東京都",
            subdivisions: "多摩",
            subdivisions1: "多摩",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13208/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "調布市",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13208/"
        },
        hall: {
            lat: 35.650628,
            long: 139.540683
        }
    },
    町田市: {
        tj: {
            prefecture: "東京都",
            subdivisions: "多摩",
            subdivisions1: "多摩",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13209/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "町田市",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13209/"
        },
        hall: {
            lat: 35.546559,
            long: 139.438527
        }
    },
    小金井市: {
        tj: {
            prefecture: "東京都",
            subdivisions: "多摩",
            subdivisions1: "多摩",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13210/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "小金井市",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13210/"
        },
        hall: {
            lat: 35.699479,
            long: 139.502989
        }
    },
    小平市: {
        tj: {
            prefecture: "東京都",
            subdivisions: "多摩",
            subdivisions1: "多摩",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13211/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "小平市",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13211/"
        },
        hall: {
            lat: 35.728496,
            long: 139.477474
        }
    },
    日野市: {
        tj: {
            prefecture: "東京都",
            subdivisions: "多摩",
            subdivisions1: "多摩",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13212/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "日野市",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13212/"
        },
        hall: {
            lat: 35.671347,
            long: 139.394981
        }
    },
    東村山市: {
        tj: {
            prefecture: "東京都",
            subdivisions: "多摩",
            subdivisions1: "多摩",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13213/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "東村山市",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13213/"
        },
        hall: {
            lat: 35.754624,
            long: 139.468484
        }
    },
    国分寺市: {
        tj: {
            prefecture: "東京都",
            subdivisions: "多摩",
            subdivisions1: "多摩",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13214/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "国分寺市",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13214/"
        },
        hall: {
            lat: 35.710943,
            long: 139.462252
        }
    },
    国立市: {
        tj: {
            prefecture: "東京都",
            subdivisions: "多摩",
            subdivisions1: "多摩",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13215/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "国立市",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13215/"
        },
        hall: {
            lat: 35.683912,
            long: 139.441366
        }
    },
    福生市: {
        tj: {
            prefecture: "東京都",
            subdivisions: "多摩",
            subdivisions1: "多摩",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13218/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "福生市",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13218/"
        },
        hall: {
            lat: 35.738601,
            long: 139.326744
        }
    },
    狛江市: {
        tj: {
            prefecture: "東京都",
            subdivisions: "多摩",
            subdivisions1: "多摩",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13219/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "狛江市",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13219/"
        },
        hall: {
            lat: 35.634814,
            long: 139.578696
        }
    },
    東大和市: {
        tj: {
            prefecture: "東京都",
            subdivisions: "多摩",
            subdivisions1: "多摩",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13220/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "東大和市",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13220/"
        },
        hall: {
            lat: 35.745328,
            long: 139.426591
        }
    },
    清瀬市: {
        tj: {
            prefecture: "東京都",
            subdivisions: "多摩",
            subdivisions1: "多摩",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13221/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "清瀬市",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13221/"
        },
        hall: {
            lat: 35.785275,
            long: 139.526850
        }
    },
    東久留米市: {
        tj: {
            prefecture: "東京都",
            subdivisions: "多摩",
            subdivisions1: "多摩",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13222/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "東久留米市",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13222/"
        },
        hall: {
            lat: 35.757992,
            long: 139.529673
        }
    },
    武蔵村山市: {
        tj: {
            prefecture: "東京都",
            subdivisions: "多摩",
            subdivisions1: "多摩",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13223/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "武蔵村山市",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13223/"
        },
        hall: {
            lat: 35.754906,
            long: 139.387421
        }
    },
    多摩市: {
        tj: {
            prefecture: "東京都",
            subdivisions: "多摩",
            subdivisions1: "多摩",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13224/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "多摩市",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13224/"
        },
        hall: {
            lat: 35.636959,
            long: 139.446366
        }
    },
    稲城市: {
        tj: {
            prefecture: "東京都",
            subdivisions: "多摩",
            subdivisions1: "多摩",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13225/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "稲城市",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13225/"
        },
        hall: {
            lat: 35.637938,
            long: 139.504603
        }
    },
    羽村市: {
        tj: {
            prefecture: "東京都",
            subdivisions: "多摩",
            subdivisions1: "多摩",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13227/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "羽村市",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13227/"
        },
        hall: {
            lat: 35.767168,
            long: 139.311042
        }
    },
    あきる野市: {
        tj: {
            prefecture: "東京都",
            subdivisions: "多摩",
            subdivisions1: "多摩",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13228/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "あきる野市",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13228/"
        },
        hall: {
            lat: 35.728959,
            long: 139.294046
        }
    },
    西東京市: {
        tj: {
            prefecture: "東京都",
            subdivisions: "多摩",
            subdivisions1: "多摩",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13229/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "西東京市",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13229/"
        },
        hall: {
            lat: 35.725499,
            long: 139.538159
        }
    },
    瑞穂町: {
        tj: {
            prefecture: "東京都",
            subdivisions: "多摩",
            subdivisions1: "多摩",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13303/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "瑞穂町",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13303/"
        },
        hall: {
            lat: 35.771924,
            long: 139.354116
        }
    },
    日の出町: {
        tj: {
            prefecture: "東京都",
            subdivisions: "多摩",
            subdivisions1: "多摩",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13305/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "日の出町",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13305/"
        },
        hall: {
            lat: 35.742115,
            long: 139.257405
        }
    },
    檜原村: {
        tj: {
            prefecture: "東京都",
            subdivisions: "多摩",
            subdivisions1: "多摩",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13307/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "檜原村",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13307/"
        },
        hall: {
            lat: 35.726840,
            long: 139.148852
        }
    },
    奥多摩町: {
        tj: {
            prefecture: "東京都",
            subdivisions: "多摩",
            subdivisions1: "多摩",
            subdivisions2: "",
            hourly: "https://tenki.jp/forecast/3/16/4410/13308/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "東京地方",
            name: "奥多摩町",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13308/"
        },
        hall: {
            lat: 35.809520,
            long: 139.096214
        }
    },
    大島町: {
        tj: {
            prefecture: "東京都",
            subdivisions: "伊豆諸島北部(大島)",
            subdivisions1: "伊豆諸島北部",
            subdivisions2: "大島",
            hourly: "https://tenki.jp/forecast/3/16/4420/13361/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "伊豆諸島北部",
            name: "大島町",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13361/"
        },
        hall: {
            lat: 34.750058,
            long: 139.355619
        }
    },
    利島村: {
        tj: {
            prefecture: "東京都",
            subdivisions: "伊豆諸島北部(大島)",
            subdivisions1: "伊豆諸島北部",
            subdivisions2: "大島",
            hourly: "https://tenki.jp/forecast/3/16/4420/13362/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "伊豆諸島北部",
            name: "利島村",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13362/"
        },
        hall: {
            lat: 34.529354,
            long: 139.282584
        }
    },
    新島村: {
        tj: {
            prefecture: "東京都",
            subdivisions: "伊豆諸島北部(大島)",
            subdivisions1: "伊豆諸島北部",
            subdivisions2: "大島",
            hourly: "https://tenki.jp/forecast/3/16/4420/13363/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "伊豆諸島北部",
            name: "新島村",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13363/"
        },
        hall: {
            lat: 34.377138,
            long: 139.256556
        }
    },
    神津島村: {
        tj: {
            prefecture: "東京都",
            subdivisions: "伊豆諸島北部(大島)",
            subdivisions1: "伊豆諸島北部",
            subdivisions2: "大島",
            hourly: "https://tenki.jp/forecast/3/16/4420/13364/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "伊豆諸島北部",
            name: "神津島村",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13364/"
        },
        hall: {
            lat: 34.205371,
            long: 139.134426
        }
    },
    三宅村: {
        tj: {
            prefecture: "東京都",
            subdivisions: "伊豆諸島南部(八丈島)",
            subdivisions1: "伊豆諸島南部",
            subdivisions2: "八丈島",
            hourly: "https://tenki.jp/forecast/3/16/4430/13381/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "伊豆諸島南部",
            name: "三宅村",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13381/"
        },
        hall: {
            lat: 34.075779,
            long: 139.479747
        }
    },
    御蔵島村: {
        tj: {
            prefecture: "東京都",
            subdivisions: "伊豆諸島南部(八丈島)",
            subdivisions1: "伊豆諸島南部",
            subdivisions2: "八丈島",
            hourly: "https://tenki.jp/forecast/3/16/4430/13382/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "伊豆諸島南部",
            name: "御蔵島村",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13382/"
        },
        hall: {
            lat: 33.897156,
            long: 139.596009
        }
    },
    八丈町: {
        tj: {
            prefecture: "東京都",
            subdivisions: "伊豆諸島南部(八丈島)",
            subdivisions1: "伊豆諸島南部",
            subdivisions2: "八丈島",
            hourly: "https://tenki.jp/forecast/3/16/4430/13401/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "伊豆諸島南部",
            name: "八丈町",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13401/"
        },
        hall: {
            lat: 33.112802,
            long: 139.789065
        }
    },
    青ヶ島村: {
        tj: {
            prefecture: "東京都",
            subdivisions: "伊豆諸島南部(八丈島)",
            subdivisions1: "伊豆諸島南部",
            subdivisions2: "八丈島",
            hourly: "https://tenki.jp/forecast/3/16/4430/13402/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "伊豆諸島南部",
            name: "青ヶ島村",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13402/"
        },
        hall: {
            lat: 32.466537,
            long: 139.763337
        }
    },
    小笠原村: {
        tj: {
            prefecture: "東京都",
            subdivisions: "小笠原諸島(父島)",
            subdivisions1: "小笠原諸島",
            subdivisions2: "父島",
            hourly: "https://tenki.jp/forecast/3/16/4440/13421/1hour.html"
        },
        wn: {
            prefecture: "東京",
            subdivisions: "小笠原諸島",
            name: "小笠原村",
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13421/"
        },
        hall: {
            lat: 27.094380,
            long: 142.191904
        }
    },
    横浜市: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14100/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "横浜市中区",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14104/"
        },
        hall: {
            lat: 35.450195,
            long: 139.634903
        }
    },
    横浜市鶴見区: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14101/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "横浜市鶴見区",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14101/"
        },
        hall: {
            lat: 35.508398,
            long: 139.682384
        }
    },
    横浜市神奈川区: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14102/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "横浜市神奈川区",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14102/"
        },
        hall: {
            lat: 35.477051,
            long: 139.629293
        }
    },
    横浜市西区: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14103/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "横浜市西区",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14103/"
        },
        hall: {
            lat: 35.453609,
            long: 139.616877
        }
    },
    横浜市中区: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14104/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "横浜市中区",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14104/"
        },
        hall: {
            lat: 35.444688,
            long: 139.642203
        }
    },
    横浜市南区: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14105/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "横浜市南区",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14105/"
        },
        hall: {
            lat: 35.434423,
            long: 139.627509
        }
    },
    横浜市保土ヶ谷区: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14106/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "横浜市保土ケ谷区",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14106/"
        },
        hall: {
            lat: 35.459854,
            long: 139.596029
        }
    },
    横浜市磯子区: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14107/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "横浜市磯子区",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14107/"
        },
        hall: {
            lat: 35.402489,
            long: 139.618458
        }
    },
    横浜市金沢区: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14108/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "横浜市金沢区",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14108/"
        },
        hall: {
            lat: 35.337199,
            long: 139.624497
        }
    },
    横浜市港北区: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14109/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "横浜市港北区",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14109/"
        },
        hall: {
            lat: 35.519016,
            long: 139.633197
        }
    },
    横浜市戸塚区: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14110/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "横浜市戸塚区",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14110/"
        },
        hall: {
            lat: 35.400223,
            long: 139.533467
        }
    },
    横浜市港南区: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14111/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "横浜市港南区",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14111/"
        },
        hall: {
            lat: 35.400799,
            long: 139.592511
        }
    },
    横浜市旭区: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14112/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "横浜市旭区",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14112/"
        },
        hall: {
            lat: 35.474761,
            long: 139.544800
        }
    },
    横浜市緑区: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14113/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "横浜市緑区",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14113/"
        },
        hall: {
            lat: 35.512407,
            long: 139.538011
        }
    },
    横浜市瀬谷区: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14114/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "横浜市瀬谷区",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14114/"
        },
        hall: {
            lat: 35.466397,
            long: 139.499188
        }
    },
    横浜市栄区: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14115/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "横浜市栄区",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14115/"
        },
        hall: {
            lat: 35.364390,
            long: 139.554106
        }
    },
    横浜市泉区: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14116/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "横浜市泉区",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14116/"
        },
        hall: {
            lat: 35.417899,
            long: 139.488693
        }
    },
    横浜市青葉区: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14117/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "横浜市青葉区",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14117/"
        },
        hall: {
            lat: 35.552831,
            long: 139.537092
        }
    },
    横浜市都筑区: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14118/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "横浜市都筑区",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14118/"
        },
        hall: {
            lat: 35.544937,
            long: 139.571030
        }
    },
    川崎市: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14130/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "川崎市川崎区",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14131/"
        },
        hall: {
            lat: 35.530822,
            long: 139.703002
        }
    },
    川崎市川崎区: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14131/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "川崎市川崎区",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14131/"
        },
        hall: {
            lat: 35.529394,
            long: 139.703279
        }
    },
    川崎市幸区: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14132/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "川崎市幸区",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14132/"
        },
        hall: {
            lat: 35.544449,
            long: 139.686978
        }
    },
    川崎市中原区: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14133/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "川崎市中原区",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14133/"
        },
        hall: {
            lat: 35.576258,
            long: 139.655756
        }
    },
    川崎市高津区: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14134/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "川崎市高津区",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14134/"
        },
        hall: {
            lat: 35.599443,
            long: 139.608032
        }
    },
    川崎市多摩区: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14135/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "川崎市多摩区",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14135/"
        },
        hall: {
            lat: 35.619609,
            long: 139.562113
        }
    },
    川崎市宮前区: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14136/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "川崎市宮前区",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14136/"
        },
        hall: {
            lat: 35.589216,
            long: 139.578580
        }
    },
    川崎市麻生区: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14137/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "川崎市麻生区",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14137/"
        },
        hall: {
            lat: 35.603769,
            long: 139.505686
        }
    },
    横須賀市: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14201/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "横須賀市",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14201/"
        },
        hall: {
            lat: 35.281276,
            long: 139.672284
        }
    },
    平塚市: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14203/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "平塚市",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14203/"
        },
        hall: {
            lat: 35.335502,
            long: 139.349412
        }
    },
    鎌倉市: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14204/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "鎌倉市",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14204/"
        },
        hall: {
            lat: 35.319228,
            long: 139.546690
        }
    },
    藤沢市: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14205/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "藤沢市",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14205/"
        },
        hall: {
            lat: 35.338940,
            long: 139.491116
        }
    },
    茅ヶ崎市: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14207/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "茅ヶ崎市",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14207/"
        },
        hall: {
            lat: 35.333879,
            long: 139.404702
        }
    },
    逗子市: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14208/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "逗子市",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14208/"
        },
        hall: {
            lat: 35.295592,
            long: 139.580414
        }
    },
    三浦市: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14210/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "三浦市",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14210/"
        },
        hall: {
            lat: 35.144176,
            long: 139.620765
        }
    },
    大和市: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14213/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "大和市",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14213/"
        },
        hall: {
            lat: 35.487515,
            long: 139.457950
        }
    },
    海老名市: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14215/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "海老名市",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14215/"
        },
        hall: {
            lat: 35.446449,
            long: 139.390803
        }
    },
    座間市: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14216/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "座間市",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14216/"
        },
        hall: {
            lat: 35.488640,
            long: 139.407637
        }
    },
    綾瀬市: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14218/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "綾瀬市",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14218/"
        },
        hall: {
            lat: 35.437161,
            long: 139.426348
        }
    },
    葉山町: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14301/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "葉山町",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14301/"
        },
        hall: {
            lat: 35.272025,
            long: 139.586275
        }
    },
    寒川町: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14321/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "寒川町",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14321/"
        },
        hall: {
            lat: 35.372963,
            long: 139.384188
        }
    },
    大磯町: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14341/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "大磯町",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14341/"
        },
        hall: {
            lat: 35.306940,
            long: 139.311348
        }
    },
    二宮町: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "東部(横浜)",
            subdivisions1: "東部",
            subdivisions2: "横浜",
            hourly: "https://tenki.jp/forecast/3/17/4610/14342/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "東部",
            name: "二宮町",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14342/"
        },
        hall: {
            lat: 35.299494,
            long: 139.255525
        }
    },
    相模原市: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "西部(小田原)",
            subdivisions1: "西部",
            subdivisions2: "小田原",
            hourly: "https://tenki.jp/forecast/3/17/4620/14150/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "西部",
            name: "相模原市中央区",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14152/"
        },
        hall: {
            lat: 35.571376,
            long: 139.373268
        }
    },
    相模原市緑区: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "西部(小田原)",
            subdivisions1: "西部",
            subdivisions2: "小田原",
            hourly: "https://tenki.jp/forecast/3/17/4620/14151/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "西部",
            name: "相模原市緑区",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14151/"
        },
        hall: {
            lat: 35.595639,
            long: 139.337590
        }
    },
    相模原市中央区: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "西部(小田原)",
            subdivisions1: "西部",
            subdivisions2: "小田原",
            hourly: "https://tenki.jp/forecast/3/17/4620/14152/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "西部",
            name: "相模原市中央区",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14152/"
        },
        hall: {
            lat: 35.571376,
            long: 139.373268
        }
    },
    相模原市南区: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "西部(小田原)",
            subdivisions1: "西部",
            subdivisions2: "小田原",
            hourly: "https://tenki.jp/forecast/3/17/4620/14153/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "西部",
            name: "相模原市南区",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14153/"
        },
        hall: {
            lat: 35.530342,
            long: 139.430092
        }
    },
    小田原市: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "西部(小田原)",
            subdivisions1: "西部",
            subdivisions2: "小田原",
            hourly: "https://tenki.jp/forecast/3/17/4620/14206/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "西部",
            name: "小田原市",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14206/"
        },
        hall: {
            lat: 35.264694,
            long: 139.152355
        }
    },
    秦野市: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "西部(小田原)",
            subdivisions1: "西部",
            subdivisions2: "小田原",
            hourly: "https://tenki.jp/forecast/3/17/4620/14211/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "西部",
            name: "秦野市",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14211/"
        },
        hall: {
            lat: 35.374800,
            long: 139.219946
        }
    },
    厚木市: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "西部(小田原)",
            subdivisions1: "西部",
            subdivisions2: "小田原",
            hourly: "https://tenki.jp/forecast/3/17/4620/14212/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "西部",
            name: "厚木市",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14212/"
        },
        hall: {
            lat: 35.443049,
            long: 139.362442
        }
    },
    伊勢原市: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "西部(小田原)",
            subdivisions1: "西部",
            subdivisions2: "小田原",
            hourly: "https://tenki.jp/forecast/3/17/4620/14214/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "西部",
            name: "伊勢原市",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14214/"
        },
        hall: {
            lat: 35.402985,
            long: 139.314906
        }
    },
    南足柄市: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "西部(小田原)",
            subdivisions1: "西部",
            subdivisions2: "小田原",
            hourly: "https://tenki.jp/forecast/3/17/4620/14217/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "西部",
            name: "南足柄市",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14217/"
        },
        hall: {
            lat: 35.320633,
            long: 139.099729
        }
    },
    中井町: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "西部(小田原)",
            subdivisions1: "西部",
            subdivisions2: "小田原",
            hourly: "https://tenki.jp/forecast/3/17/4620/14361/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "西部",
            name: "中井町",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14361/"
        },
        hall: {
            lat: 35.330751,
            long: 139.218766
        }
    },
    大井町: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "西部(小田原)",
            subdivisions1: "西部",
            subdivisions2: "小田原",
            hourly: "https://tenki.jp/forecast/3/17/4620/14362/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "西部",
            name: "大井町",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14362/"
        },
        hall: {
            lat: 35.326619,
            long: 139.156649
        }
    },
    松田町: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "西部(小田原)",
            subdivisions1: "西部",
            subdivisions2: "小田原",
            hourly: "https://tenki.jp/forecast/3/17/4620/14363/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "西部",
            name: "松田町",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14363/"
        },
        hall: {
            lat: 35.348199,
            long: 139.139337
        }
    },
    山北町: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "西部(小田原)",
            subdivisions1: "西部",
            subdivisions2: "小田原",
            hourly: "https://tenki.jp/forecast/3/17/4620/14364/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "西部",
            name: "山北町",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14364/"
        },
        hall: {
            lat: 35.360631,
            long: 139.083806
        }
    },
    開成町: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "西部(小田原)",
            subdivisions1: "西部",
            subdivisions2: "小田原",
            hourly: "https://tenki.jp/forecast/3/17/4620/14366/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "西部",
            name: "開成町",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14366/"
        },
        hall: {
            lat: 35.336058,
            long: 139.123410
        }
    },
    箱根町: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "西部(小田原)",
            subdivisions1: "西部",
            subdivisions2: "小田原",
            hourly: "https://tenki.jp/forecast/3/17/4620/14382/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "西部",
            name: "箱根町",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14382/"
        },
        hall: {
            lat: 35.232301,
            long: 139.106886
        }
    },
    真鶴町: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "西部(小田原)",
            subdivisions1: "西部",
            subdivisions2: "小田原",
            hourly: "https://tenki.jp/forecast/3/17/4620/14383/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "西部",
            name: "真鶴町",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14383/"
        },
        hall: {
            lat: 35.158399,
            long: 139.137233
        }
    },
    湯河原町: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "西部(小田原)",
            subdivisions1: "西部",
            subdivisions2: "小田原",
            hourly: "https://tenki.jp/forecast/3/17/4620/14384/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "西部",
            name: "湯河原町",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14384/"
        },
        hall: {
            lat: 35.147931,
            long: 139.108336
        }
    },
    愛川町: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "西部(小田原)",
            subdivisions1: "西部",
            subdivisions2: "小田原",
            hourly: "https://tenki.jp/forecast/3/17/4620/14401/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "西部",
            name: "愛川町",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14401/"
        },
        hall: {
            lat: 35.528746,
            long: 139.321720
        }
    },
    清川村: {
        tj: {
            prefecture: "神奈川県",
            subdivisions: "西部(小田原)",
            subdivisions1: "西部",
            subdivisions2: "小田原",
            hourly: "https://tenki.jp/forecast/3/17/4620/14402/1hour.html"
        },
        wn: {
            prefecture: "神奈川",
            subdivisions: "西部",
            name: "清川村",
            hourly: "https://weathernews.jp/onebox/tenki/kanagawa/14402/"
        },
        hall: {
            lat: 35.482330,
            long: 139.276374
        }
    },
    甲府市: {
        tj: {
            prefecture: "山梨県",
            subdivisions: "中・西部(甲府)",
            subdivisions1: "中・西部",
            subdivisions2: "甲府",
            hourly: "https://tenki.jp/forecast/3/22/4910/19201/1hour.html"
        },
        wn: {
            prefecture: "山梨",
            subdivisions: "中・西部",
            name: "甲府市",
            hourly: "https://weathernews.jp/onebox/tenki/yamanashi/19201/"
        },
        hall: {
            lat: 35.662033,
            long: 138.568339
        }
    },
    山梨市: {
        tj: {
            prefecture: "山梨県",
            subdivisions: "中・西部(甲府)",
            subdivisions1: "中・西部",
            subdivisions2: "甲府",
            hourly: "https://tenki.jp/forecast/3/22/4910/19205/1hour.html"
        },
        wn: {
            prefecture: "山梨",
            subdivisions: "中・西部",
            name: "山梨市",
            hourly: "https://weathernews.jp/onebox/tenki/yamanashi/19205/"
        },
        hall: {
            lat: 35.693429,
            long: 138.686955
        }
    },
    韮崎市: {
        tj: {
            prefecture: "山梨県",
            subdivisions: "中・西部(甲府)",
            subdivisions1: "中・西部",
            subdivisions2: "甲府",
            hourly: "https://tenki.jp/forecast/3/22/4910/19207/1hour.html"
        },
        wn: {
            prefecture: "山梨",
            subdivisions: "中・西部",
            name: "韮崎市",
            hourly: "https://weathernews.jp/onebox/tenki/yamanashi/19207/"
        },
        hall: {
            lat: 35.708804,
            long: 138.446192
        }
    },
    南アルプス市: {
        tj: {
            prefecture: "山梨県",
            subdivisions: "中・西部(甲府)",
            subdivisions1: "中・西部",
            subdivisions2: "甲府",
            hourly: "https://tenki.jp/forecast/3/22/4910/19208/1hour.html"
        },
        wn: {
            prefecture: "山梨",
            subdivisions: "中・西部",
            name: "南アルプス市",
            hourly: "https://weathernews.jp/onebox/tenki/yamanashi/19208/"
        },
        hall: {
            lat: 35.608361,
            long: 138.465005
        }
    },
    北杜市: {
        tj: {
            prefecture: "山梨県",
            subdivisions: "中・西部(甲府)",
            subdivisions1: "中・西部",
            subdivisions2: "甲府",
            hourly: "https://tenki.jp/forecast/3/22/4910/19209/1hour.html"
        },
        wn: {
            prefecture: "山梨",
            subdivisions: "中・西部",
            name: "北杜市",
            hourly: "https://weathernews.jp/onebox/tenki/yamanashi/19209/"
        },
        hall: {
            lat: 35.776501,
            long: 138.423537
        }
    },
    甲斐市: {
        tj: {
            prefecture: "山梨県",
            subdivisions: "中・西部(甲府)",
            subdivisions1: "中・西部",
            subdivisions2: "甲府",
            hourly: "https://tenki.jp/forecast/3/22/4910/19210/1hour.html"
        },
        wn: {
            prefecture: "山梨",
            subdivisions: "中・西部",
            name: "甲斐市",
            hourly: "https://weathernews.jp/onebox/tenki/yamanashi/19210/"
        },
        hall: {
            lat: 35.660829,
            long: 138.515796
        }
    },
    笛吹市: {
        tj: {
            prefecture: "山梨県",
            subdivisions: "中・西部(甲府)",
            subdivisions1: "中・西部",
            subdivisions2: "甲府",
            hourly: "https://tenki.jp/forecast/3/22/4910/19211/1hour.html"
        },
        wn: {
            prefecture: "山梨",
            subdivisions: "中・西部",
            name: "笛吹市",
            hourly: "https://weathernews.jp/onebox/tenki/yamanashi/19211/"
        },
        hall: {
            lat: 35.647296,
            long: 138.639730
        }
    },
    甲州市: {
        tj: {
            prefecture: "山梨県",
            subdivisions: "中・西部(甲府)",
            subdivisions1: "中・西部",
            subdivisions2: "甲府",
            hourly: "https://tenki.jp/forecast/3/22/4910/19213/1hour.html"
        },
        wn: {
            prefecture: "山梨",
            subdivisions: "中・西部",
            name: "甲州市",
            hourly: "https://weathernews.jp/onebox/tenki/yamanashi/19213/"
        },
        hall: {
            lat: 35.704286,
            long: 138.729424
        }
    },
    中央市: {
        tj: {
            prefecture: "山梨県",
            subdivisions: "中・西部(甲府)",
            subdivisions1: "中・西部",
            subdivisions2: "甲府",
            hourly: "https://tenki.jp/forecast/3/22/4910/19214/1hour.html"
        },
        wn: {
            prefecture: "山梨",
            subdivisions: "中・西部",
            name: "中央市",
            hourly: "https://weathernews.jp/onebox/tenki/yamanashi/19214/"
        },
        hall: {
            lat: 35.599643,
            long: 138.517269
        }
    },
    市川三郷町: {
        tj: {
            prefecture: "山梨県",
            subdivisions: "中・西部(甲府)",
            subdivisions1: "中・西部",
            subdivisions2: "甲府",
            hourly: "https://tenki.jp/forecast/3/22/4910/19346/1hour.html"
        },
        wn: {
            prefecture: "山梨",
            subdivisions: "中・西部",
            name: "市川三郷町",
            hourly: "https://weathernews.jp/onebox/tenki/yamanashi/19346/"
        },
        hall: {
            lat: 35.565120,
            long: 138.502406
        }
    },
    早川町: {
        tj: {
            prefecture: "山梨県",
            subdivisions: "中・西部(甲府)",
            subdivisions1: "中・西部",
            subdivisions2: "甲府",
            hourly: "https://tenki.jp/forecast/3/22/4910/19364/1hour.html"
        },
        wn: {
            prefecture: "山梨",
            subdivisions: "中・西部",
            name: "早川町",
            hourly: "https://weathernews.jp/onebox/tenki/yamanashi/19364/"
        },
        hall: {
            lat: 35.412658,
            long: 138.363192
        }
    },
    身延町: {
        tj: {
            prefecture: "山梨県",
            subdivisions: "中・西部(甲府)",
            subdivisions1: "中・西部",
            subdivisions2: "甲府",
            hourly: "https://tenki.jp/forecast/3/22/4910/19365/1hour.html"
        },
        wn: {
            prefecture: "山梨",
            subdivisions: "中・西部",
            name: "身延町",
            hourly: "https://weathernews.jp/onebox/tenki/yamanashi/19365/"
        },
        hall: {
            lat: 35.467569,
            long: 138.442488
        }
    },
    南部町: {
        tj: {
            prefecture: "山梨県",
            subdivisions: "中・西部(甲府)",
            subdivisions1: "中・西部",
            subdivisions2: "甲府",
            hourly: "https://tenki.jp/forecast/3/22/4910/19366/1hour.html"
        },
        wn: {
            prefecture: "山梨",
            subdivisions: "中・西部",
            name: "南部町",
            hourly: "https://weathernews.jp/onebox/tenki/yamanashi/19366/"
        },
        hall: {
            lat: 40.420343,
            long: 141.330307
        }
    },
    富士川町: {
        tj: {
            prefecture: "山梨県",
            subdivisions: "中・西部(甲府)",
            subdivisions1: "中・西部",
            subdivisions2: "甲府",
            hourly: "https://tenki.jp/forecast/3/22/4910/19368/1hour.html"
        },
        wn: {
            prefecture: "山梨",
            subdivisions: "中・西部",
            name: "富士川町",
            hourly: "https://weathernews.jp/onebox/tenki/yamanashi/19368/"
        },
        hall: {
            lat: 35.560952,
            long: 138.461969
        }
    },
    昭和町: {
        tj: {
            prefecture: "山梨県",
            subdivisions: "中・西部(甲府)",
            subdivisions1: "中・西部",
            subdivisions2: "甲府",
            hourly: "https://tenki.jp/forecast/3/22/4910/19384/1hour.html"
        },
        wn: {
            prefecture: "山梨",
            subdivisions: "中・西部",
            name: "昭和町",
            hourly: "https://weathernews.jp/onebox/tenki/yamanashi/19384/"
        },
        hall: {
            lat: 35.627928,
            long: 138.535148
        }
    },
    富士吉田市: {
        tj: {
            prefecture: "山梨県",
            subdivisions: "東部・富士五湖(河口湖)",
            subdivisions1: "東部・富士五湖",
            subdivisions2: "河口湖",
            hourly: "https://tenki.jp/forecast/3/22/4920/19202/1hour.html"
        },
        wn: {
            prefecture: "山梨",
            subdivisions: "東部・富士五湖",
            name: "富士吉田市",
            hourly: "https://weathernews.jp/onebox/tenki/yamanashi/19202/"
        },
        hall: {
            lat: 35.487499,
            long: 138.807857
        }
    },
    都留市: {
        tj: {
            prefecture: "山梨県",
            subdivisions: "東部・富士五湖(河口湖)",
            subdivisions1: "東部・富士五湖",
            subdivisions2: "河口湖",
            hourly: "https://tenki.jp/forecast/3/22/4920/19204/1hour.html"
        },
        wn: {
            prefecture: "山梨",
            subdivisions: "東部・富士五湖",
            name: "都留市",
            hourly: "https://weathernews.jp/onebox/tenki/yamanashi/19204/"
        },
        hall: {
            lat: 35.551565,
            long: 138.905470
        }
    },
    大月市: {
        tj: {
            prefecture: "山梨県",
            subdivisions: "東部・富士五湖(河口湖)",
            subdivisions1: "東部・富士五湖",
            subdivisions2: "河口湖",
            hourly: "https://tenki.jp/forecast/3/22/4920/19206/1hour.html"
        },
        wn: {
            prefecture: "山梨",
            subdivisions: "東部・富士五湖",
            name: "大月市",
            hourly: "https://weathernews.jp/onebox/tenki/yamanashi/19206/"
        },
        hall: {
            lat: 35.610474,
            long: 138.940041
        }
    },
    上野原市: {
        tj: {
            prefecture: "山梨県",
            subdivisions: "東部・富士五湖(河口湖)",
            subdivisions1: "東部・富士五湖",
            subdivisions2: "河口湖",
            hourly: "https://tenki.jp/forecast/3/22/4920/19212/1hour.html"
        },
        wn: {
            prefecture: "山梨",
            subdivisions: "東部・富士五湖",
            name: "上野原市",
            hourly: "https://weathernews.jp/onebox/tenki/yamanashi/19212/"
        },
        hall: {
            lat: 35.630301,
            long: 139.108751
        }
    },
    道志村: {
        tj: {
            prefecture: "山梨県",
            subdivisions: "東部・富士五湖(河口湖)",
            subdivisions1: "東部・富士五湖",
            subdivisions2: "河口湖",
            hourly: "https://tenki.jp/forecast/3/22/4920/19422/1hour.html"
        },
        wn: {
            prefecture: "山梨",
            subdivisions: "東部・富士五湖",
            name: "道志村",
            hourly: "https://weathernews.jp/onebox/tenki/yamanashi/19422/"
        },
        hall: {
            lat: 35.528025,
            long: 139.033429
        }
    },
    西桂町: {
        tj: {
            prefecture: "山梨県",
            subdivisions: "東部・富士五湖(河口湖)",
            subdivisions1: "東部・富士五湖",
            subdivisions2: "河口湖",
            hourly: "https://tenki.jp/forecast/3/22/4920/19423/1hour.html"
        },
        wn: {
            prefecture: "山梨",
            subdivisions: "東部・富士五湖",
            name: "西桂町",
            hourly: "https://weathernews.jp/onebox/tenki/yamanashi/19423/"
        },
        hall: {
            lat: 35.524082,
            long: 138.846880
        }
    },
    忍野村: {
        tj: {
            prefecture: "山梨県",
            subdivisions: "東部・富士五湖(河口湖)",
            subdivisions1: "東部・富士五湖",
            subdivisions2: "河口湖",
            hourly: "https://tenki.jp/forecast/3/22/4920/19424/1hour.html"
        },
        wn: {
            prefecture: "山梨",
            subdivisions: "東部・富士五湖",
            name: "忍野村",
            hourly: "https://weathernews.jp/onebox/tenki/yamanashi/19424/"
        },
        hall: {
            lat: 35.460062,
            long: 138.847853
        }
    },
    山中湖村: {
        tj: {
            prefecture: "山梨県",
            subdivisions: "東部・富士五湖(河口湖)",
            subdivisions1: "東部・富士五湖",
            subdivisions2: "河口湖",
            hourly: "https://tenki.jp/forecast/3/22/4920/19425/1hour.html"
        },
        wn: {
            prefecture: "山梨",
            subdivisions: "東部・富士五湖",
            name: "山中湖村",
            hourly: "https://weathernews.jp/onebox/tenki/yamanashi/19425/"
        },
        hall: {
            lat: 35.410644,
            long: 138.861078
        }
    },
    鳴沢村: {
        tj: {
            prefecture: "山梨県",
            subdivisions: "東部・富士五湖(河口湖)",
            subdivisions1: "東部・富士五湖",
            subdivisions2: "河口湖",
            hourly: "https://tenki.jp/forecast/3/22/4920/19429/1hour.html"
        },
        wn: {
            prefecture: "山梨",
            subdivisions: "東部・富士五湖",
            name: "鳴沢村",
            hourly: "https://weathernews.jp/onebox/tenki/yamanashi/19429/"
        },
        hall: {
            lat: 35.481318,
            long: 138.706609
        }
    },
    富士河口湖町: {
        tj: {
            prefecture: "山梨県",
            subdivisions: "東部・富士五湖(河口湖)",
            subdivisions1: "東部・富士五湖",
            subdivisions2: "河口湖",
            hourly: "https://tenki.jp/forecast/3/22/4920/19430/1hour.html"
        },
        wn: {
            prefecture: "山梨",
            subdivisions: "東部・富士五湖",
            name: "富士河口湖町",
            hourly: "https://weathernews.jp/onebox/tenki/yamanashi/19430/"
        },
        hall: {
            lat: 35.497297,
            long: 138.754926
        }
    },
    小菅村: {
        tj: {
            prefecture: "山梨県",
            subdivisions: "東部・富士五湖(河口湖)",
            subdivisions1: "東部・富士五湖",
            subdivisions2: "河口湖",
            hourly: "https://tenki.jp/forecast/3/22/4920/19442/1hour.html"
        },
        wn: {
            prefecture: "山梨",
            subdivisions: "東部・富士五湖",
            name: "小菅村",
            hourly: "https://weathernews.jp/onebox/tenki/yamanashi/19442/"
        },
        hall: {
            lat: 35.760274,
            long: 138.940283
        }
    },
    丹波山村: {
        tj: {
            prefecture: "山梨県",
            subdivisions: "東部・富士五湖(河口湖)",
            subdivisions1: "東部・富士五湖",
            subdivisions2: "河口湖",
            hourly: "https://tenki.jp/forecast/3/22/4920/19443/1hour.html"
        },
        wn: {
            prefecture: "山梨",
            subdivisions: "東部・富士五湖",
            name: "丹波山村",
            hourly: "https://weathernews.jp/onebox/tenki/yamanashi/19443/"
        },
        hall: {
            lat: 35.791744,
            long: 138.917785
        }
    },
    長野市: {
        tj: {
            prefecture: "長野県",
            subdivisions: "北部(長野)",
            subdivisions1: "北部",
            subdivisions2: "長野",
            hourly: "https://tenki.jp/forecast/3/23/4810/20201/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "北部",
            name: "長野市",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20201/"
        },
        hall: {
            lat: 36.648631,
            long: 138.194287
        }
    },
    須坂市: {
        tj: {
            prefecture: "長野県",
            subdivisions: "北部(長野)",
            subdivisions1: "北部",
            subdivisions2: "長野",
            hourly: "https://tenki.jp/forecast/3/23/4810/20207/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "北部",
            name: "須坂市",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20207/"
        },
        hall: {
            lat: 36.651117,
            long: 138.307275
        }
    },
    中野市: {
        tj: {
            prefecture: "長野県",
            subdivisions: "北部(長野)",
            subdivisions1: "北部",
            subdivisions2: "長野",
            hourly: "https://tenki.jp/forecast/3/23/4810/20211/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "北部",
            name: "中野市",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20211/"
        },
        hall: {
            lat: 36.742027,
            long: 138.369470
        }
    },
    大町市: {
        tj: {
            prefecture: "長野県",
            subdivisions: "北部(長野)",
            subdivisions1: "北部",
            subdivisions2: "長野",
            hourly: "https://tenki.jp/forecast/3/23/4810/20212/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "北部",
            name: "大町市",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20212/"
        },
        hall: {
            lat: 36.502976,
            long: 137.851169
        }
    },
    飯山市: {
        tj: {
            prefecture: "長野県",
            subdivisions: "北部(長野)",
            subdivisions1: "北部",
            subdivisions2: "長野",
            hourly: "https://tenki.jp/forecast/3/23/4810/20213/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "北部",
            name: "飯山市",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20213/"
        },
        hall: {
            lat: 36.851745,
            long: 138.365498
        }
    },
    千曲市: {
        tj: {
            prefecture: "長野県",
            subdivisions: "北部(長野)",
            subdivisions1: "北部",
            subdivisions2: "長野",
            hourly: "https://tenki.jp/forecast/3/23/4810/20218/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "北部",
            name: "千曲市",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20218/"
        },
        hall: {
            lat: 36.530707,
            long: 138.114895
        }
    },
    池田町: {
        tj: {
            prefecture: "長野県",
            subdivisions: "北部(長野)",
            subdivisions1: "北部",
            subdivisions2: "長野",
            hourly: "https://tenki.jp/forecast/3/23/4810/20481/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "北部",
            name: "池田町",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20481/"
        },
        hall: {
            lat: 42.928980,
            long: 143.448472
        }
    },
    松川村: {
        tj: {
            prefecture: "長野県",
            subdivisions: "北部(長野)",
            subdivisions1: "北部",
            subdivisions2: "長野",
            hourly: "https://tenki.jp/forecast/3/23/4810/20482/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "北部",
            name: "松川村",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20482/"
        },
        hall: {
            lat: 36.424045,
            long: 137.854556
        }
    },
    白馬村: {
        tj: {
            prefecture: "長野県",
            subdivisions: "北部(長野)",
            subdivisions1: "北部",
            subdivisions2: "長野",
            hourly: "https://tenki.jp/forecast/3/23/4810/20485/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "北部",
            name: "白馬村",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20485/"
        },
        hall: {
            lat: 36.698070,
            long: 137.861969
        }
    },
    小谷村: {
        tj: {
            prefecture: "長野県",
            subdivisions: "北部(長野)",
            subdivisions1: "北部",
            subdivisions2: "長野",
            hourly: "https://tenki.jp/forecast/3/23/4810/20486/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "北部",
            name: "小谷村",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20486/"
        },
        hall: {
            lat: 36.779206,
            long: 137.908305
        }
    },
    坂城町: {
        tj: {
            prefecture: "長野県",
            subdivisions: "北部(長野)",
            subdivisions1: "北部",
            subdivisions2: "長野",
            hourly: "https://tenki.jp/forecast/3/23/4810/20521/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "北部",
            name: "坂城町",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20521/"
        },
        hall: {
            lat: 36.461839,
            long: 138.180106
        }
    },
    小布施町: {
        tj: {
            prefecture: "長野県",
            subdivisions: "北部(長野)",
            subdivisions1: "北部",
            subdivisions2: "長野",
            hourly: "https://tenki.jp/forecast/3/23/4810/20541/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "北部",
            name: "小布施町",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20541/"
        },
        hall: {
            lat: 36.697478,
            long: 138.312146
        }
    },
    高山村: {
        tj: {
            prefecture: "長野県",
            subdivisions: "北部(長野)",
            subdivisions1: "北部",
            subdivisions2: "長野",
            hourly: "https://tenki.jp/forecast/3/23/4810/20543/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "北部",
            name: "高山村",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20543/"
        },
        hall: {
            lat: 36.620809,
            long: 138.943477
        }
    },
    山ノ内町: {
        tj: {
            prefecture: "長野県",
            subdivisions: "北部(長野)",
            subdivisions1: "北部",
            subdivisions2: "長野",
            hourly: "https://tenki.jp/forecast/3/23/4810/20561/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "北部",
            name: "山ノ内町",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20561/"
        },
        hall: {
            lat: 36.744606,
            long: 138.412621
        }
    },
    木島平村: {
        tj: {
            prefecture: "長野県",
            subdivisions: "北部(長野)",
            subdivisions1: "北部",
            subdivisions2: "長野",
            hourly: "https://tenki.jp/forecast/3/23/4810/20562/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "北部",
            name: "木島平村",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20562/"
        },
        hall: {
            lat: 36.857947,
            long: 138.406966
        }
    },
    野沢温泉村: {
        tj: {
            prefecture: "長野県",
            subdivisions: "北部(長野)",
            subdivisions1: "北部",
            subdivisions2: "長野",
            hourly: "https://tenki.jp/forecast/3/23/4810/20563/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "北部",
            name: "野沢温泉村",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20563/"
        },
        hall: {
            lat: 36.922728,
            long: 138.440456
        }
    },
    信濃町: {
        tj: {
            prefecture: "長野県",
            subdivisions: "北部(長野)",
            subdivisions1: "北部",
            subdivisions2: "長野",
            hourly: "https://tenki.jp/forecast/3/23/4810/20583/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "北部",
            name: "信濃町",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20583/"
        },
        hall: {
            lat: 36.806379,
            long: 138.206991
        }
    },
    小川村: {
        tj: {
            prefecture: "長野県",
            subdivisions: "北部(長野)",
            subdivisions1: "北部",
            subdivisions2: "長野",
            hourly: "https://tenki.jp/forecast/3/23/4810/20588/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "北部",
            name: "小川村",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20588/"
        },
        hall: {
            lat: 36.617135,
            long: 137.974801
        }
    },
    飯綱町: {
        tj: {
            prefecture: "長野県",
            subdivisions: "北部(長野)",
            subdivisions1: "北部",
            subdivisions2: "長野",
            hourly: "https://tenki.jp/forecast/3/23/4810/20590/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "北部",
            name: "飯綱町",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20590/"
        },
        hall: {
            lat: 36.754421,
            long: 138.235480
        }
    },
    栄村: {
        tj: {
            prefecture: "長野県",
            subdivisions: "北部(長野)",
            subdivisions1: "北部",
            subdivisions2: "長野",
            hourly: "https://tenki.jp/forecast/3/23/4810/20602/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "北部",
            name: "栄村",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20602/"
        },
        hall: {
            lat: 36.987481,
            long: 138.577359
        }
    },
    松本市: {
        tj: {
            prefecture: "長野県",
            subdivisions: "中部(松本)",
            subdivisions1: "中部",
            subdivisions2: "松本",
            hourly: "https://tenki.jp/forecast/3/23/4820/20202/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "中部",
            name: "松本市",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20202/"
        },
        hall: {
            lat: 36.238096,
            long: 137.971992
        }
    },
    上田市: {
        tj: {
            prefecture: "長野県",
            subdivisions: "中部(松本)",
            subdivisions1: "中部",
            subdivisions2: "松本",
            hourly: "https://tenki.jp/forecast/3/23/4820/20203/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "中部",
            name: "上田市",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20203/"
        },
        hall: {
            lat: 36.401978,
            long: 138.248676
        }
    },
    岡谷市: {
        tj: {
            prefecture: "長野県",
            subdivisions: "中部(松本)",
            subdivisions1: "中部",
            subdivisions2: "松本",
            hourly: "https://tenki.jp/forecast/3/23/4820/20204/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "中部",
            name: "岡谷市",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20204/"
        },
        hall: {
            lat: 36.067003,
            long: 138.049557
        }
    },
    諏訪市: {
        tj: {
            prefecture: "長野県",
            subdivisions: "中部(松本)",
            subdivisions1: "中部",
            subdivisions2: "松本",
            hourly: "https://tenki.jp/forecast/3/23/4820/20206/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "中部",
            name: "諏訪市",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20206/"
        },
        hall: {
            lat: 36.039175,
            long: 138.113984
        }
    },
    小諸市: {
        tj: {
            prefecture: "長野県",
            subdivisions: "中部(松本)",
            subdivisions1: "中部",
            subdivisions2: "松本",
            hourly: "https://tenki.jp/forecast/3/23/4820/20208/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "中部",
            name: "小諸市",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20208/"
        },
        hall: {
            lat: 36.326874,
            long: 138.426021
        }
    },
    茅野市: {
        tj: {
            prefecture: "長野県",
            subdivisions: "中部(松本)",
            subdivisions1: "中部",
            subdivisions2: "松本",
            hourly: "https://tenki.jp/forecast/3/23/4820/20214/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "中部",
            name: "茅野市",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20214/"
        },
        hall: {
            lat: 35.995571,
            long: 138.158896
        }
    },
    塩尻市: {
        tj: {
            prefecture: "長野県",
            subdivisions: "中部(松本)",
            subdivisions1: "中部",
            subdivisions2: "松本",
            hourly: "https://tenki.jp/forecast/3/23/4820/20215/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "中部",
            name: "塩尻市",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20215/"
        },
        hall: {
            lat: 36.115020,
            long: 137.953380
        }
    },
    佐久市: {
        tj: {
            prefecture: "長野県",
            subdivisions: "中部(松本)",
            subdivisions1: "中部",
            subdivisions2: "松本",
            hourly: "https://tenki.jp/forecast/3/23/4820/20217/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "中部",
            name: "佐久市",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20217/"
        },
        hall: {
            lat: 36.248788,
            long: 138.476831
        }
    },
    東御市: {
        tj: {
            prefecture: "長野県",
            subdivisions: "中部(松本)",
            subdivisions1: "中部",
            subdivisions2: "松本",
            hourly: "https://tenki.jp/forecast/3/23/4820/20219/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "中部",
            name: "東御市",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20219/"
        },
        hall: {
            lat: 36.359550,
            long: 138.330295
        }
    },
    安曇野市: {
        tj: {
            prefecture: "長野県",
            subdivisions: "中部(松本)",
            subdivisions1: "中部",
            subdivisions2: "松本",
            hourly: "https://tenki.jp/forecast/3/23/4820/20220/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "中部",
            name: "安曇野市",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20220/"
        },
        hall: {
            lat: 36.303933,
            long: 137.905755
        }
    },
    小海町: {
        tj: {
            prefecture: "長野県",
            subdivisions: "中部(松本)",
            subdivisions1: "中部",
            subdivisions2: "松本",
            hourly: "https://tenki.jp/forecast/3/23/4820/20303/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "中部",
            name: "小海町",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20303/"
        },
        hall: {
            lat: 36.095241,
            long: 138.483515
        }
    },
    川上村: {
        tj: {
            prefecture: "長野県",
            subdivisions: "中部(松本)",
            subdivisions1: "中部",
            subdivisions2: "松本",
            hourly: "https://tenki.jp/forecast/3/23/4820/20304/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "中部",
            name: "川上村",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20304/"
        },
        hall: {
            lat: 35.975136,
            long: 138.578477
        }
    },
    南牧村: {
        tj: {
            prefecture: "長野県",
            subdivisions: "中部(松本)",
            subdivisions1: "中部",
            subdivisions2: "松本",
            hourly: "https://tenki.jp/forecast/3/23/4820/20305/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "中部",
            name: "南牧村",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20305/"
        },
        hall: {
            lat: 36.158553,
            long: 138.711406
        }
    },
    南相木村: {
        tj: {
            prefecture: "長野県",
            subdivisions: "中部(松本)",
            subdivisions1: "中部",
            subdivisions2: "松本",
            hourly: "https://tenki.jp/forecast/3/23/4820/20306/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "中部",
            name: "南相木村",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20306/"
        },
        hall: {
            lat: 36.036072,
            long: 138.546890
        }
    },
    北相木村: {
        tj: {
            prefecture: "長野県",
            subdivisions: "中部(松本)",
            subdivisions1: "中部",
            subdivisions2: "松本",
            hourly: "https://tenki.jp/forecast/3/23/4820/20307/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "中部",
            name: "北相木村",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20307/"
        },
        hall: {
            lat: 36.059195,
            long: 138.551203
        }
    },
    佐久穂町: {
        tj: {
            prefecture: "長野県",
            subdivisions: "中部(松本)",
            subdivisions1: "中部",
            subdivisions2: "松本",
            hourly: "https://tenki.jp/forecast/3/23/4820/20309/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "中部",
            name: "佐久穂町",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20309/"
        },
        hall: {
            lat: 36.160980,
            long: 138.483425
        }
    },
    軽井沢町: {
        tj: {
            prefecture: "長野県",
            subdivisions: "中部(松本)",
            subdivisions1: "中部",
            subdivisions2: "松本",
            hourly: "https://tenki.jp/forecast/3/23/4820/20321/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "中部",
            name: "軽井沢町",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20321/"
        },
        hall: {
            lat: 36.348310,
            long: 138.596966
        }
    },
    御代田町: {
        tj: {
            prefecture: "長野県",
            subdivisions: "中部(松本)",
            subdivisions1: "中部",
            subdivisions2: "松本",
            hourly: "https://tenki.jp/forecast/3/23/4820/20323/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "中部",
            name: "御代田町",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20323/"
        },
        hall: {
            lat: 36.322732,
            long: 138.506505
        }
    },
    立科町: {
        tj: {
            prefecture: "長野県",
            subdivisions: "中部(松本)",
            subdivisions1: "中部",
            subdivisions2: "松本",
            hourly: "https://tenki.jp/forecast/3/23/4820/20324/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "中部",
            name: "立科町",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20324/"
        },
        hall: {
            lat: 36.272089,
            long: 138.315991
        }
    },
    青木村: {
        tj: {
            prefecture: "長野県",
            subdivisions: "中部(松本)",
            subdivisions1: "中部",
            subdivisions2: "松本",
            hourly: "https://tenki.jp/forecast/3/23/4820/20349/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "中部",
            name: "青木村",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20349/"
        },
        hall: {
            lat: 36.369998,
            long: 138.128698
        }
    },
    長和町: {
        tj: {
            prefecture: "長野県",
            subdivisions: "中部(松本)",
            subdivisions1: "中部",
            subdivisions2: "松本",
            hourly: "https://tenki.jp/forecast/3/23/4820/20350/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "中部",
            name: "長和町",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20350/"
        },
        hall: {
            lat: 36.269903,
            long: 138.258071
        }
    },
    下諏訪町: {
        tj: {
            prefecture: "長野県",
            subdivisions: "中部(松本)",
            subdivisions1: "中部",
            subdivisions2: "松本",
            hourly: "https://tenki.jp/forecast/3/23/4820/20361/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "中部",
            name: "下諏訪町",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20361/"
        },
        hall: {
            lat: 36.069577,
            long: 138.080068
        }
    },
    富士見町: {
        tj: {
            prefecture: "長野県",
            subdivisions: "中部(松本)",
            subdivisions1: "中部",
            subdivisions2: "松本",
            hourly: "https://tenki.jp/forecast/3/23/4820/20362/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "中部",
            name: "富士見町",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20362/"
        },
        hall: {
            lat: 35.914652,
            long: 138.240740
        }
    },
    原村: {
        tj: {
            prefecture: "長野県",
            subdivisions: "中部(松本)",
            subdivisions1: "中部",
            subdivisions2: "松本",
            hourly: "https://tenki.jp/forecast/3/23/4820/20363/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "中部",
            name: "原村",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20363/"
        },
        hall: {
            lat: 35.964354,
            long: 138.217471
        }
    },
    麻績村: {
        tj: {
            prefecture: "長野県",
            subdivisions: "中部(松本)",
            subdivisions1: "中部",
            subdivisions2: "松本",
            hourly: "https://tenki.jp/forecast/3/23/4820/20446/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "中部",
            name: "麻績村",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20446/"
        },
        hall: {
            lat: 36.456086,
            long: 138.045267
        }
    },
    生坂村: {
        tj: {
            prefecture: "長野県",
            subdivisions: "中部(松本)",
            subdivisions1: "中部",
            subdivisions2: "松本",
            hourly: "https://tenki.jp/forecast/3/23/4820/20448/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "中部",
            name: "生坂村",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20448/"
        },
        hall: {
            lat: 36.425234,
            long: 137.927484
        }
    },
    山形村: {
        tj: {
            prefecture: "長野県",
            subdivisions: "中部(松本)",
            subdivisions1: "中部",
            subdivisions2: "松本",
            hourly: "https://tenki.jp/forecast/3/23/4820/20450/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "中部",
            name: "山形村",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20450/"
        },
        hall: {
            lat: 36.168104,
            long: 137.878970
        }
    },
    朝日村: {
        tj: {
            prefecture: "長野県",
            subdivisions: "中部(松本)",
            subdivisions1: "中部",
            subdivisions2: "松本",
            hourly: "https://tenki.jp/forecast/3/23/4820/20451/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "中部",
            name: "朝日村",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20451/"
        },
        hall: {
            lat: 36.129115,
            long: 137.867267
        }
    },
    筑北村: {
        tj: {
            prefecture: "長野県",
            subdivisions: "中部(松本)",
            subdivisions1: "中部",
            subdivisions2: "松本",
            hourly: "https://tenki.jp/forecast/3/23/4820/20452/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "中部",
            name: "筑北村",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20452/"
        },
        hall: {
            lat: 36.402654,
            long: 138.011775
        }
    },
    飯田市: {
        tj: {
            prefecture: "長野県",
            subdivisions: "南部(飯田)",
            subdivisions1: "南部",
            subdivisions2: "飯田",
            hourly: "https://tenki.jp/forecast/3/23/4830/20205/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "南部",
            name: "飯田市",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20205/"
        },
        hall: {
            lat: 35.514703,
            long: 137.821824
        }
    },
    伊那市: {
        tj: {
            prefecture: "長野県",
            subdivisions: "南部(飯田)",
            subdivisions1: "南部",
            subdivisions2: "飯田",
            hourly: "https://tenki.jp/forecast/3/23/4830/20209/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "南部",
            name: "伊那市",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20209/"
        },
        hall: {
            lat: 35.827478,
            long: 137.954083
        }
    },
    駒ヶ根市: {
        tj: {
            prefecture: "長野県",
            subdivisions: "南部(飯田)",
            subdivisions1: "南部",
            subdivisions2: "飯田",
            hourly: "https://tenki.jp/forecast/3/23/4830/20210/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "南部",
            name: "駒ヶ根市",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20210/"
        },
        hall: {
            lat: 35.728861,
            long: 137.933993
        }
    },
    辰野町: {
        tj: {
            prefecture: "長野県",
            subdivisions: "南部(飯田)",
            subdivisions1: "南部",
            subdivisions2: "飯田",
            hourly: "https://tenki.jp/forecast/3/23/4830/20382/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "南部",
            name: "辰野町",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20382/"
        },
        hall: {
            lat: 35.982413,
            long: 137.987428
        }
    },
    箕輪町: {
        tj: {
            prefecture: "長野県",
            subdivisions: "南部(飯田)",
            subdivisions1: "南部",
            subdivisions2: "飯田",
            hourly: "https://tenki.jp/forecast/3/23/4830/20383/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "南部",
            name: "箕輪町",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20383/"
        },
        hall: {
            lat: 35.915020,
            long: 137.981992
        }
    },
    飯島町: {
        tj: {
            prefecture: "長野県",
            subdivisions: "南部(飯田)",
            subdivisions1: "南部",
            subdivisions2: "飯田",
            hourly: "https://tenki.jp/forecast/3/23/4830/20384/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "南部",
            name: "飯島町",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20384/"
        },
        hall: {
            lat: 35.676622,
            long: 137.919523
        }
    },
    南箕輪村: {
        tj: {
            prefecture: "長野県",
            subdivisions: "南部(飯田)",
            subdivisions1: "南部",
            subdivisions2: "飯田",
            hourly: "https://tenki.jp/forecast/3/23/4830/20385/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "南部",
            name: "南箕輪村",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20385/"
        },
        hall: {
            lat: 35.872853,
            long: 137.975084
        }
    },
    中川村: {
        tj: {
            prefecture: "長野県",
            subdivisions: "南部(飯田)",
            subdivisions1: "南部",
            subdivisions2: "飯田",
            hourly: "https://tenki.jp/forecast/3/23/4830/20386/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "南部",
            name: "中川村",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20386/"
        },
        hall: {
            lat: 35.634617,
            long: 137.945961
        }
    },
    宮田村: {
        tj: {
            prefecture: "長野県",
            subdivisions: "南部(飯田)",
            subdivisions1: "南部",
            subdivisions2: "飯田",
            hourly: "https://tenki.jp/forecast/3/23/4830/20388/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "南部",
            name: "宮田村",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20388/"
        },
        hall: {
            lat: 35.768882,
            long: 137.944209
        }
    },
    松川町: {
        tj: {
            prefecture: "長野県",
            subdivisions: "南部(飯田)",
            subdivisions1: "南部",
            subdivisions2: "飯田",
            hourly: "https://tenki.jp/forecast/3/23/4830/20402/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "南部",
            name: "松川町",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20402/"
        },
        hall: {
            lat: 35.597231,
            long: 137.909667
        }
    },
    高森町: {
        tj: {
            prefecture: "長野県",
            subdivisions: "南部(飯田)",
            subdivisions1: "南部",
            subdivisions2: "飯田",
            hourly: "https://tenki.jp/forecast/3/23/4830/20403/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "南部",
            name: "高森町",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20403/"
        },
        hall: {
            lat: 35.551542,
            long: 137.878519
        }
    },
    阿南町: {
        tj: {
            prefecture: "長野県",
            subdivisions: "南部(飯田)",
            subdivisions1: "南部",
            subdivisions2: "飯田",
            hourly: "https://tenki.jp/forecast/3/23/4830/20404/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "南部",
            name: "阿南町",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20404/"
        },
        hall: {
            lat: 35.323620,
            long: 137.816090
        }
    },
    阿智村: {
        tj: {
            prefecture: "長野県",
            subdivisions: "南部(飯田)",
            subdivisions1: "南部",
            subdivisions2: "飯田",
            hourly: "https://tenki.jp/forecast/3/23/4830/20407/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "南部",
            name: "阿智村",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20407/"
        },
        hall: {
            lat: 35.443791,
            long: 137.747444
        }
    },
    平谷村: {
        tj: {
            prefecture: "長野県",
            subdivisions: "南部(飯田)",
            subdivisions1: "南部",
            subdivisions2: "飯田",
            hourly: "https://tenki.jp/forecast/3/23/4830/20409/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "南部",
            name: "平谷村",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20409/"
        },
        hall: {
            lat: 35.323279,
            long: 137.630083
        }
    },
    根羽村: {
        tj: {
            prefecture: "長野県",
            subdivisions: "南部(飯田)",
            subdivisions1: "南部",
            subdivisions2: "飯田",
            hourly: "https://tenki.jp/forecast/3/23/4830/20410/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "南部",
            name: "根羽村",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20410/"
        },
        hall: {
            lat: 35.255296,
            long: 137.581784
        }
    },
    下條村: {
        tj: {
            prefecture: "長野県",
            subdivisions: "南部(飯田)",
            subdivisions1: "南部",
            subdivisions2: "飯田",
            hourly: "https://tenki.jp/forecast/3/23/4830/20411/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "南部",
            name: "下條村",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20411/"
        },
        hall: {
            lat: 35.397330,
            long: 137.785926
        }
    },
    売木村: {
        tj: {
            prefecture: "長野県",
            subdivisions: "南部(飯田)",
            subdivisions1: "南部",
            subdivisions2: "飯田",
            hourly: "https://tenki.jp/forecast/3/23/4830/20412/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "南部",
            name: "売木村",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20412/"
        },
        hall: {
            lat: 35.271068,
            long: 137.711191
        }
    },
    天龍村: {
        tj: {
            prefecture: "長野県",
            subdivisions: "南部(飯田)",
            subdivisions1: "南部",
            subdivisions2: "飯田",
            hourly: "https://tenki.jp/forecast/3/23/4830/20413/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "南部",
            name: "天龍村",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20413/"
        },
        hall: {
            lat: 35.276307,
            long: 137.854244
        }
    },
    泰阜村: {
        tj: {
            prefecture: "長野県",
            subdivisions: "南部(飯田)",
            subdivisions1: "南部",
            subdivisions2: "飯田",
            hourly: "https://tenki.jp/forecast/3/23/4830/20414/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "南部",
            name: "泰阜村",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20414/"
        },
        hall: {
            lat: 35.377434,
            long: 137.846157
        }
    },
    喬木村: {
        tj: {
            prefecture: "長野県",
            subdivisions: "南部(飯田)",
            subdivisions1: "南部",
            subdivisions2: "飯田",
            hourly: "https://tenki.jp/forecast/3/23/4830/20415/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "南部",
            name: "喬木村",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20415/"
        },
        hall: {
            lat: 35.513823,
            long: 137.873751
        }
    },
    豊丘村: {
        tj: {
            prefecture: "長野県",
            subdivisions: "南部(飯田)",
            subdivisions1: "南部",
            subdivisions2: "飯田",
            hourly: "https://tenki.jp/forecast/3/23/4830/20416/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "南部",
            name: "豊丘村",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20416/"
        },
        hall: {
            lat: 35.551497,
            long: 137.895791
        }
    },
    大鹿村: {
        tj: {
            prefecture: "長野県",
            subdivisions: "南部(飯田)",
            subdivisions1: "南部",
            subdivisions2: "飯田",
            hourly: "https://tenki.jp/forecast/3/23/4830/20417/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "南部",
            name: "大鹿村",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20417/"
        },
        hall: {
            lat: 35.578234,
            long: 138.034044
        }
    },
    上松町: {
        tj: {
            prefecture: "長野県",
            subdivisions: "南部(飯田)",
            subdivisions1: "南部",
            subdivisions2: "飯田",
            hourly: "https://tenki.jp/forecast/3/23/4830/20422/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "南部",
            name: "上松町",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20422/"
        },
        hall: {
            lat: 35.782187,
            long: 137.693235
        }
    },
    南木曽町: {
        tj: {
            prefecture: "長野県",
            subdivisions: "南部(飯田)",
            subdivisions1: "南部",
            subdivisions2: "飯田",
            hourly: "https://tenki.jp/forecast/3/23/4830/20423/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "南部",
            name: "南木曽町",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20423/"
        },
        hall: {
            lat: 35.603787,
            long: 137.608936
        }
    },
    木祖村: {
        tj: {
            prefecture: "長野県",
            subdivisions: "南部(飯田)",
            subdivisions1: "南部",
            subdivisions2: "飯田",
            hourly: "https://tenki.jp/forecast/3/23/4830/20425/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "南部",
            name: "木祖村",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20425/"
        },
        hall: {
            lat: 35.936307,
            long: 137.783163
        }
    },
    王滝村: {
        tj: {
            prefecture: "長野県",
            subdivisions: "南部(飯田)",
            subdivisions1: "南部",
            subdivisions2: "飯田",
            hourly: "https://tenki.jp/forecast/3/23/4830/20429/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "南部",
            name: "王滝村",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20429/"
        },
        hall: {
            lat: 35.809343,
            long: 137.551076
        }
    },
    大桑村: {
        tj: {
            prefecture: "長野県",
            subdivisions: "南部(飯田)",
            subdivisions1: "南部",
            subdivisions2: "飯田",
            hourly: "https://tenki.jp/forecast/3/23/4830/20430/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "南部",
            name: "大桑村",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20430/"
        },
        hall: {
            lat: 35.689240,
            long: 137.671432
        }
    },
    木曽町: {
        tj: {
            prefecture: "長野県",
            subdivisions: "南部(飯田)",
            subdivisions1: "南部",
            subdivisions2: "飯田",
            hourly: "https://tenki.jp/forecast/3/23/4830/20432/1hour.html"
        },
        wn: {
            prefecture: "長野",
            subdivisions: "南部",
            name: "木曽町",
            hourly: "https://weathernews.jp/onebox/tenki/nagano/20432/"
        },
        hall: {
            lat: 35.841898,
            long: 137.691330
        }
    },
    新潟市: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "下越(新潟)",
            subdivisions1: "下越",
            subdivisions2: "新潟",
            hourly: "https://tenki.jp/forecast/4/18/5410/15100/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "下越",
            name: "新潟市中央区",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15103/"
        },
        hall: {
            lat: 37.916128,
            long: 139.036402
        }
    },
    新潟市北区: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "下越(新潟)",
            subdivisions1: "下越",
            subdivisions2: "新潟",
            hourly: "https://tenki.jp/forecast/4/18/5410/15101/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "下越",
            name: "新潟市北区",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15101/"
        },
        hall: {
            lat: 37.913539,
            long: 139.221624
        }
    },
    新潟市東区: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "下越(新潟)",
            subdivisions1: "下越",
            subdivisions2: "新潟",
            hourly: "https://tenki.jp/forecast/4/18/5410/15102/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "下越",
            name: "新潟市東区",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15102/"
        },
        hall: {
            lat: 37.924894,
            long: 139.092606
        }
    },
    新潟市中央区: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "下越(新潟)",
            subdivisions1: "下越",
            subdivisions2: "新潟",
            hourly: "https://tenki.jp/forecast/4/18/5410/15103/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "下越",
            name: "新潟市中央区",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15103/"
        },
        hall: {
            lat: 37.922505,
            long: 139.043229
        }
    },
    新潟市江南区: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "下越(新潟)",
            subdivisions1: "下越",
            subdivisions2: "新潟",
            hourly: "https://tenki.jp/forecast/4/18/5410/15104/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "下越",
            name: "新潟市江南区",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15104/"
        },
        hall: {
            lat: 37.867660,
            long: 139.094013
        }
    },
    新潟市秋葉区: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "下越(新潟)",
            subdivisions1: "下越",
            subdivisions2: "新潟",
            hourly: "https://tenki.jp/forecast/4/18/5410/15105/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "下越",
            name: "新潟市秋葉区",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15105/"
        },
        hall: {
            lat: 37.788362,
            long: 139.114618
        }
    },
    新潟市南区: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "下越(新潟)",
            subdivisions1: "下越",
            subdivisions2: "新潟",
            hourly: "https://tenki.jp/forecast/4/18/5410/15106/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "下越",
            name: "新潟市南区",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15106/"
        },
        hall: {
            lat: 37.765817,
            long: 139.019184
        }
    },
    新潟市西区: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "下越(新潟)",
            subdivisions1: "下越",
            subdivisions2: "新潟",
            hourly: "https://tenki.jp/forecast/4/18/5410/15107/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "下越",
            name: "新潟市西区",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15107/"
        },
        hall: {
            lat: 37.874081,
            long: 138.971648
        }
    },
    新潟市西蒲区: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "下越(新潟)",
            subdivisions1: "下越",
            subdivisions2: "新潟",
            hourly: "https://tenki.jp/forecast/4/18/5410/15108/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "下越",
            name: "新潟市西蒲区",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15108/"
        },
        hall: {
            lat: 37.760333,
            long: 138.889253
        }
    },
    新発田市: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "下越(新潟)",
            subdivisions1: "下越",
            subdivisions2: "新潟",
            hourly: "https://tenki.jp/forecast/4/18/5410/15206/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "下越",
            name: "新発田市",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15206/"
        },
        hall: {
            lat: 37.947954,
            long: 139.327151
        }
    },
    村上市: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "下越(新潟)",
            subdivisions1: "下越",
            subdivisions2: "新潟",
            hourly: "https://tenki.jp/forecast/4/18/5410/15212/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "下越",
            name: "村上市",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15212/"
        },
        hall: {
            lat: 38.223990,
            long: 139.480040
        }
    },
    燕市: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "下越(新潟)",
            subdivisions1: "下越",
            subdivisions2: "新潟",
            hourly: "https://tenki.jp/forecast/4/18/5410/15213/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "下越",
            name: "燕市",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15213/"
        },
        hall: {
            lat: 37.673149,
            long: 138.882249
        }
    },
    五泉市: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "下越(新潟)",
            subdivisions1: "下越",
            subdivisions2: "新潟",
            hourly: "https://tenki.jp/forecast/4/18/5410/15218/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "下越",
            name: "五泉市",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15218/"
        },
        hall: {
            lat: 37.744483,
            long: 139.182568
        }
    },
    阿賀野市: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "下越(新潟)",
            subdivisions1: "下越",
            subdivisions2: "新潟",
            hourly: "https://tenki.jp/forecast/4/18/5410/15223/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "下越",
            name: "阿賀野市",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15223/"
        },
        hall: {
            lat: 37.834509,
            long: 139.226002
        }
    },
    胎内市: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "下越(新潟)",
            subdivisions1: "下越",
            subdivisions2: "新潟",
            hourly: "https://tenki.jp/forecast/4/18/5410/15227/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "下越",
            name: "胎内市",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15227/"
        },
        hall: {
            lat: 38.059708,
            long: 139.410350
        }
    },
    聖籠町: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "下越(新潟)",
            subdivisions1: "下越",
            subdivisions2: "新潟",
            hourly: "https://tenki.jp/forecast/4/18/5410/15307/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "下越",
            name: "聖籠町",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15307/"
        },
        hall: {
            lat: 37.974526,
            long: 139.274374
        }
    },
    弥彦村: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "下越(新潟)",
            subdivisions1: "下越",
            subdivisions2: "新潟",
            hourly: "https://tenki.jp/forecast/4/18/5410/15342/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "下越",
            name: "弥彦村",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15342/"
        },
        hall: {
            lat: 37.691007,
            long: 138.855252
        }
    },
    阿賀町: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "下越(新潟)",
            subdivisions1: "下越",
            subdivisions2: "新潟",
            hourly: "https://tenki.jp/forecast/4/18/5410/15385/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "下越",
            name: "阿賀町",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15385/"
        },
        hall: {
            lat: 37.675487,
            long: 139.458781
        }
    },
    関川村: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "下越(新潟)",
            subdivisions1: "下越",
            subdivisions2: "新潟",
            hourly: "https://tenki.jp/forecast/4/18/5410/15581/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "下越",
            name: "関川村",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15581/"
        },
        hall: {
            lat: 38.089412,
            long: 139.564957
        }
    },
    粟島浦村: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "下越(新潟)",
            subdivisions1: "下越",
            subdivisions2: "新潟",
            hourly: "https://tenki.jp/forecast/4/18/5410/15586/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "下越",
            name: "粟島浦村",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15586/"
        },
        hall: {
            lat: 38.468213,
            long: 139.254360
        }
    },
    長岡市: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "中越(長岡)",
            subdivisions1: "中越",
            subdivisions2: "長岡",
            hourly: "https://tenki.jp/forecast/4/18/5420/15202/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "中越",
            name: "長岡市",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15202/"
        },
        hall: {
            lat: 37.446587,
            long: 138.851224
        }
    },
    三条市: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "中越(長岡)",
            subdivisions1: "中越",
            subdivisions2: "長岡",
            hourly: "https://tenki.jp/forecast/4/18/5420/15204/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "中越",
            name: "三条市",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15204/"
        },
        hall: {
            lat: 37.636768,
            long: 138.961700
        }
    },
    柏崎市: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "中越(長岡)",
            subdivisions1: "中越",
            subdivisions2: "長岡",
            hourly: "https://tenki.jp/forecast/4/18/5420/15205/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "中越",
            name: "柏崎市",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15205/"
        },
        hall: {
            lat: 37.364903,
            long: 138.557756
        }
    },
    小千谷市: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "中越(長岡)",
            subdivisions1: "中越",
            subdivisions2: "長岡",
            hourly: "https://tenki.jp/forecast/4/18/5420/15208/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "中越",
            name: "小千谷市",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15208/"
        },
        hall: {
            lat: 37.314350,
            long: 138.795097
        }
    },
    加茂市: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "中越(長岡)",
            subdivisions1: "中越",
            subdivisions2: "長岡",
            hourly: "https://tenki.jp/forecast/4/18/5420/15209/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "中越",
            name: "加茂市",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15209/"
        },
        hall: {
            lat: 37.666335,
            long: 139.040220
        }
    },
    十日町市: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "中越(長岡)",
            subdivisions1: "中越",
            subdivisions2: "長岡",
            hourly: "https://tenki.jp/forecast/4/18/5420/15210/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "中越",
            name: "十日町市",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15210/"
        },
        hall: {
            lat: 37.127588,
            long: 138.755710
        }
    },
    見附市: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "中越(長岡)",
            subdivisions1: "中越",
            subdivisions2: "長岡",
            hourly: "https://tenki.jp/forecast/4/18/5420/15211/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "中越",
            name: "見附市",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15211/"
        },
        hall: {
            lat: 37.531496,
            long: 138.912724
        }
    },
    魚沼市: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "中越(長岡)",
            subdivisions1: "中越",
            subdivisions2: "長岡",
            hourly: "https://tenki.jp/forecast/4/18/5420/15225/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "中越",
            name: "魚沼市",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15225/"
        },
        hall: {
            lat: 37.236431,
            long: 138.963775
        }
    },
    南魚沼市: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "中越(長岡)",
            subdivisions1: "中越",
            subdivisions2: "長岡",
            hourly: "https://tenki.jp/forecast/4/18/5420/15226/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "中越",
            name: "南魚沼市",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15226/"
        },
        hall: {
            lat: 37.065522,
            long: 138.876081
        }
    },
    田上町: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "中越(長岡)",
            subdivisions1: "中越",
            subdivisions2: "長岡",
            hourly: "https://tenki.jp/forecast/4/18/5420/15361/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "中越",
            name: "田上町",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15361/"
        },
        hall: {
            lat: 37.698857,
            long: 139.057993
        }
    },
    出雲崎町: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "中越(長岡)",
            subdivisions1: "中越",
            subdivisions2: "長岡",
            hourly: "https://tenki.jp/forecast/4/18/5420/15405/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "中越",
            name: "出雲崎町",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15405/"
        },
        hall: {
            lat: 37.530715,
            long: 138.709361
        }
    },
    湯沢町: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "中越(長岡)",
            subdivisions1: "中越",
            subdivisions2: "長岡",
            hourly: "https://tenki.jp/forecast/4/18/5420/15461/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "中越",
            name: "湯沢町",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15461/"
        },
        hall: {
            lat: 36.934007,
            long: 138.817424
        }
    },
    津南町: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "中越(長岡)",
            subdivisions1: "中越",
            subdivisions2: "長岡",
            hourly: "https://tenki.jp/forecast/4/18/5420/15482/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "中越",
            name: "津南町",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15482/"
        },
        hall: {
            lat: 37.014313,
            long: 138.652547
        }
    },
    刈羽村: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "中越(長岡)",
            subdivisions1: "中越",
            subdivisions2: "長岡",
            hourly: "https://tenki.jp/forecast/4/18/5420/15504/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "中越",
            name: "刈羽村",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15504/"
        },
        hall: {
            lat: 37.422361,
            long: 138.622442
        }
    },
    糸魚川市: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "上越(高田)",
            subdivisions1: "上越",
            subdivisions2: "高田",
            hourly: "https://tenki.jp/forecast/4/18/5430/15216/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "上越",
            name: "糸魚川市",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15216/"
        },
        hall: {
            lat: 37.039025,
            long: 137.862658
        }
    },
    妙高市: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "上越(高田)",
            subdivisions1: "上越",
            subdivisions2: "高田",
            hourly: "https://tenki.jp/forecast/4/18/5430/15217/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "上越",
            name: "妙高市",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15217/"
        },
        hall: {
            lat: 37.025265,
            long: 138.253485
        }
    },
    上越市: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "上越(高田)",
            subdivisions1: "上越",
            subdivisions2: "高田",
            hourly: "https://tenki.jp/forecast/4/18/5430/15222/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "上越",
            name: "上越市",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15222/"
        },
        hall: {
            lat: 37.147873,
            long: 138.236039
        }
    },
    佐渡市: {
        tj: {
            prefecture: "新潟県",
            subdivisions: "佐渡(相川)",
            subdivisions1: "佐渡",
            subdivisions2: "相川",
            hourly: "https://tenki.jp/forecast/4/18/5440/15224/1hour.html"
        },
        wn: {
            prefecture: "新潟",
            subdivisions: "佐渡",
            name: "佐渡市",
            hourly: "https://weathernews.jp/onebox/tenki/niigata/15224/"
        },
        hall: {
            lat: 38.018302,
            long: 138.368138
        }
    },
    富山市: {
        tj: {
            prefecture: "富山県",
            subdivisions: "東部(富山)",
            subdivisions1: "東部",
            subdivisions2: "富山",
            hourly: "https://tenki.jp/forecast/4/19/5510/16201/1hour.html"
        },
        wn: {
            prefecture: "富山",
            subdivisions: "東部",
            name: "富山市",
            hourly: "https://weathernews.jp/onebox/tenki/toyama/16201/"
        },
        hall: {
            lat: 36.695982,
            long: 137.213449
        }
    },
    魚津市: {
        tj: {
            prefecture: "富山県",
            subdivisions: "東部(富山)",
            subdivisions1: "東部",
            subdivisions2: "富山",
            hourly: "https://tenki.jp/forecast/4/19/5510/16204/1hour.html"
        },
        wn: {
            prefecture: "富山",
            subdivisions: "東部",
            name: "魚津市",
            hourly: "https://weathernews.jp/onebox/tenki/toyama/16204/"
        },
        hall: {
            lat: 36.827367,
            long: 137.409190
        }
    },
    滑川市: {
        tj: {
            prefecture: "富山県",
            subdivisions: "東部(富山)",
            subdivisions1: "東部",
            subdivisions2: "富山",
            hourly: "https://tenki.jp/forecast/4/19/5510/16206/1hour.html"
        },
        wn: {
            prefecture: "富山",
            subdivisions: "東部",
            name: "滑川市",
            hourly: "https://weathernews.jp/onebox/tenki/toyama/16206/"
        },
        hall: {
            lat: 36.764394,
            long: 137.341180
        }
    },
    黒部市: {
        tj: {
            prefecture: "富山県",
            subdivisions: "東部(富山)",
            subdivisions1: "東部",
            subdivisions2: "富山",
            hourly: "https://tenki.jp/forecast/4/19/5510/16207/1hour.html"
        },
        wn: {
            prefecture: "富山",
            subdivisions: "東部",
            name: "黒部市",
            hourly: "https://weathernews.jp/onebox/tenki/toyama/16207/"
        },
        hall: {
            lat: 36.871510,
            long: 137.448028
        }
    },
    舟橋村: {
        tj: {
            prefecture: "富山県",
            subdivisions: "東部(富山)",
            subdivisions1: "東部",
            subdivisions2: "富山",
            hourly: "https://tenki.jp/forecast/4/19/5510/16321/1hour.html"
        },
        wn: {
            prefecture: "富山",
            subdivisions: "東部",
            name: "舟橋村",
            hourly: "https://weathernews.jp/onebox/tenki/toyama/16321/"
        },
        hall: {
            lat: 36.703525,
            long: 137.307372
        }
    },
    上市町: {
        tj: {
            prefecture: "富山県",
            subdivisions: "東部(富山)",
            subdivisions1: "東部",
            subdivisions2: "富山",
            hourly: "https://tenki.jp/forecast/4/19/5510/16322/1hour.html"
        },
        wn: {
            prefecture: "富山",
            subdivisions: "東部",
            name: "上市町",
            hourly: "https://weathernews.jp/onebox/tenki/toyama/16322/"
        },
        hall: {
            lat: 36.698429,
            long: 137.362586
        }
    },
    立山町: {
        tj: {
            prefecture: "富山県",
            subdivisions: "東部(富山)",
            subdivisions1: "東部",
            subdivisions2: "富山",
            hourly: "https://tenki.jp/forecast/4/19/5510/16323/1hour.html"
        },
        wn: {
            prefecture: "富山",
            subdivisions: "東部",
            name: "立山町",
            hourly: "https://weathernews.jp/onebox/tenki/toyama/16323/"
        },
        hall: {
            lat: 36.663346,
            long: 137.313658
        }
    },
    入善町: {
        tj: {
            prefecture: "富山県",
            subdivisions: "東部(富山)",
            subdivisions1: "東部",
            subdivisions2: "富山",
            hourly: "https://tenki.jp/forecast/4/19/5510/16342/1hour.html"
        },
        wn: {
            prefecture: "富山",
            subdivisions: "東部",
            name: "入善町",
            hourly: "https://weathernews.jp/onebox/tenki/toyama/16342/"
        },
        hall: {
            lat: 36.933578,
            long: 137.502128
        }
    },
    朝日町: {
        tj: {
            prefecture: "富山県",
            subdivisions: "東部(富山)",
            subdivisions1: "東部",
            subdivisions2: "富山",
            hourly: "https://tenki.jp/forecast/4/19/5510/16343/1hour.html"
        },
        wn: {
            prefecture: "富山",
            subdivisions: "東部",
            name: "朝日町",
            hourly: "https://weathernews.jp/onebox/tenki/toyama/16343/"
        },
        hall: {
            lat: 38.299293,
            long: 140.145924
        }
    },
    高岡市: {
        tj: {
            prefecture: "富山県",
            subdivisions: "西部(伏木)",
            subdivisions1: "西部",
            subdivisions2: "伏木",
            hourly: "https://tenki.jp/forecast/4/19/5520/16202/1hour.html"
        },
        wn: {
            prefecture: "富山",
            subdivisions: "西部",
            name: "高岡市",
            hourly: "https://weathernews.jp/onebox/tenki/toyama/16202/"
        },
        hall: {
            lat: 36.754099,
            long: 137.025717
        }
    },
    氷見市: {
        tj: {
            prefecture: "富山県",
            subdivisions: "西部(伏木)",
            subdivisions1: "西部",
            subdivisions2: "伏木",
            hourly: "https://tenki.jp/forecast/4/19/5520/16205/1hour.html"
        },
        wn: {
            prefecture: "富山",
            subdivisions: "西部",
            name: "氷見市",
            hourly: "https://weathernews.jp/onebox/tenki/toyama/16205/"
        },
        hall: {
            lat: 36.855978,
            long: 136.972868
        }
    },
    砺波市: {
        tj: {
            prefecture: "富山県",
            subdivisions: "西部(伏木)",
            subdivisions1: "西部",
            subdivisions2: "伏木",
            hourly: "https://tenki.jp/forecast/4/19/5520/16208/1hour.html"
        },
        wn: {
            prefecture: "富山",
            subdivisions: "西部",
            name: "砺波市",
            hourly: "https://weathernews.jp/onebox/tenki/toyama/16208/"
        },
        hall: {
            lat: 36.647467,
            long: 136.962167
        }
    },
    小矢部市: {
        tj: {
            prefecture: "富山県",
            subdivisions: "西部(伏木)",
            subdivisions1: "西部",
            subdivisions2: "伏木",
            hourly: "https://tenki.jp/forecast/4/19/5520/16209/1hour.html"
        },
        wn: {
            prefecture: "富山",
            subdivisions: "西部",
            name: "小矢部市",
            hourly: "https://weathernews.jp/onebox/tenki/toyama/16209/"
        },
        hall: {
            lat: 36.675531,
            long: 136.868653
        }
    },
    南砺市: {
        tj: {
            prefecture: "富山県",
            subdivisions: "西部(伏木)",
            subdivisions1: "西部",
            subdivisions2: "伏木",
            hourly: "https://tenki.jp/forecast/4/19/5520/16210/1hour.html"
        },
        wn: {
            prefecture: "富山",
            subdivisions: "西部",
            name: "南砺市",
            hourly: "https://weathernews.jp/onebox/tenki/toyama/16210/"
        },
        hall: {
            lat: 36.557453,
            long: 136.875434
        }
    },
    射水市: {
        tj: {
            prefecture: "富山県",
            subdivisions: "西部(伏木)",
            subdivisions1: "西部",
            subdivisions2: "伏木",
            hourly: "https://tenki.jp/forecast/4/19/5520/16211/1hour.html"
        },
        wn: {
            prefecture: "富山",
            subdivisions: "西部",
            name: "射水市",
            hourly: "https://weathernews.jp/onebox/tenki/toyama/16211/"
        },
        hall: {
            lat: 36.730479,
            long: 137.075399
        }
    },
    金沢市: {
        tj: {
            prefecture: "石川県",
            subdivisions: "加賀(金沢)",
            subdivisions1: "加賀",
            subdivisions2: "金沢",
            hourly: "https://tenki.jp/forecast/4/20/5610/17201/1hour.html"
        },
        wn: {
            prefecture: "石川",
            subdivisions: "加賀",
            name: "金沢市",
            hourly: "https://weathernews.jp/onebox/tenki/ishikawa/17201/"
        },
        hall: {
            lat: 36.561051,
            long: 136.656633
        }
    },
    小松市: {
        tj: {
            prefecture: "石川県",
            subdivisions: "加賀(金沢)",
            subdivisions1: "加賀",
            subdivisions2: "金沢",
            hourly: "https://tenki.jp/forecast/4/20/5610/17203/1hour.html"
        },
        wn: {
            prefecture: "石川",
            subdivisions: "加賀",
            name: "小松市",
            hourly: "https://weathernews.jp/onebox/tenki/ishikawa/17203/"
        },
        hall: {
            lat: 36.408357,
            long: 136.445588
        }
    },
    加賀市: {
        tj: {
            prefecture: "石川県",
            subdivisions: "加賀(金沢)",
            subdivisions1: "加賀",
            subdivisions2: "金沢",
            hourly: "https://tenki.jp/forecast/4/20/5610/17206/1hour.html"
        },
        wn: {
            prefecture: "石川",
            subdivisions: "加賀",
            name: "加賀市",
            hourly: "https://weathernews.jp/onebox/tenki/ishikawa/17206/"
        },
        hall: {
            lat: 36.302669,
            long: 136.314685
        }
    },
    かほく市: {
        tj: {
            prefecture: "石川県",
            subdivisions: "加賀(金沢)",
            subdivisions1: "加賀",
            subdivisions2: "金沢",
            hourly: "https://tenki.jp/forecast/4/20/5610/17209/1hour.html"
        },
        wn: {
            prefecture: "石川",
            subdivisions: "加賀",
            name: "かほく市",
            hourly: "https://weathernews.jp/onebox/tenki/ishikawa/17209/"
        },
        hall: {
            lat: 36.719973,
            long: 136.706668
        }
    },
    白山市: {
        tj: {
            prefecture: "石川県",
            subdivisions: "加賀(金沢)",
            subdivisions1: "加賀",
            subdivisions2: "金沢",
            hourly: "https://tenki.jp/forecast/4/20/5610/17210/1hour.html"
        },
        wn: {
            prefecture: "石川",
            subdivisions: "加賀",
            name: "白山市",
            hourly: "https://weathernews.jp/onebox/tenki/ishikawa/17210/"
        },
        hall: {
            lat: 36.514427,
            long: 136.565833
        }
    },
    能美市: {
        tj: {
            prefecture: "石川県",
            subdivisions: "加賀(金沢)",
            subdivisions1: "加賀",
            subdivisions2: "金沢",
            hourly: "https://tenki.jp/forecast/4/20/5610/17211/1hour.html"
        },
        wn: {
            prefecture: "石川",
            subdivisions: "加賀",
            name: "能美市",
            hourly: "https://weathernews.jp/onebox/tenki/ishikawa/17211/"
        },
        hall: {
            lat: 36.446888,
            long: 136.554028
        }
    },
    野々市市: {
        tj: {
            prefecture: "石川県",
            subdivisions: "加賀(金沢)",
            subdivisions1: "加賀",
            subdivisions2: "金沢",
            hourly: "https://tenki.jp/forecast/4/20/5610/17212/1hour.html"
        },
        wn: {
            prefecture: "石川",
            subdivisions: "加賀",
            name: "野々市市",
            hourly: "https://weathernews.jp/onebox/tenki/ishikawa/17212/"
        },
        hall: {
            lat: 36.519466,
            long: 136.609685
        }
    },
    川北町: {
        tj: {
            prefecture: "石川県",
            subdivisions: "加賀(金沢)",
            subdivisions1: "加賀",
            subdivisions2: "金沢",
            hourly: "https://tenki.jp/forecast/4/20/5610/17324/1hour.html"
        },
        wn: {
            prefecture: "石川",
            subdivisions: "加賀",
            name: "川北町",
            hourly: "https://weathernews.jp/onebox/tenki/ishikawa/17324/"
        },
        hall: {
            lat: 36.468505,
            long: 136.542407
        }
    },
    津幡町: {
        tj: {
            prefecture: "石川県",
            subdivisions: "加賀(金沢)",
            subdivisions1: "加賀",
            subdivisions2: "金沢",
            hourly: "https://tenki.jp/forecast/4/20/5610/17361/1hour.html"
        },
        wn: {
            prefecture: "石川",
            subdivisions: "加賀",
            name: "津幡町",
            hourly: "https://weathernews.jp/onebox/tenki/ishikawa/17361/"
        },
        hall: {
            lat: 36.668798,
            long: 136.728885
        }
    },
    内灘町: {
        tj: {
            prefecture: "石川県",
            subdivisions: "加賀(金沢)",
            subdivisions1: "加賀",
            subdivisions2: "金沢",
            hourly: "https://tenki.jp/forecast/4/20/5610/17365/1hour.html"
        },
        wn: {
            prefecture: "石川",
            subdivisions: "加賀",
            name: "内灘町",
            hourly: "https://weathernews.jp/onebox/tenki/ishikawa/17365/"
        },
        hall: {
            lat: 36.653530,
            long: 136.645125
        }
    },
    七尾市: {
        tj: {
            prefecture: "石川県",
            subdivisions: "能登(輪島)",
            subdivisions1: "能登",
            subdivisions2: "輪島",
            hourly: "https://tenki.jp/forecast/4/20/5620/17202/1hour.html"
        },
        wn: {
            prefecture: "石川",
            subdivisions: "能登",
            name: "七尾市",
            hourly: "https://weathernews.jp/onebox/tenki/ishikawa/17202/"
        },
        hall: {
            lat: 37.043108,
            long: 136.967296
        }
    },
    輪島市: {
        tj: {
            prefecture: "石川県",
            subdivisions: "能登(輪島)",
            subdivisions1: "能登",
            subdivisions2: "輪島",
            hourly: "https://tenki.jp/forecast/4/20/5620/17204/1hour.html"
        },
        wn: {
            prefecture: "石川",
            subdivisions: "能登",
            name: "輪島市",
            hourly: "https://weathernews.jp/onebox/tenki/ishikawa/17204/"
        },
        hall: {
            lat: 37.390554,
            long: 136.899172
        }
    },
    珠洲市: {
        tj: {
            prefecture: "石川県",
            subdivisions: "能登(輪島)",
            subdivisions1: "能登",
            subdivisions2: "輪島",
            hourly: "https://tenki.jp/forecast/4/20/5620/17205/1hour.html"
        },
        wn: {
            prefecture: "石川",
            subdivisions: "能登",
            name: "珠洲市",
            hourly: "https://weathernews.jp/onebox/tenki/ishikawa/17205/"
        },
        hall: {
            lat: 37.436369,
            long: 137.260406
        }
    },
    羽咋市: {
        tj: {
            prefecture: "石川県",
            subdivisions: "能登(輪島)",
            subdivisions1: "能登",
            subdivisions2: "輪島",
            hourly: "https://tenki.jp/forecast/4/20/5620/17207/1hour.html"
        },
        wn: {
            prefecture: "石川",
            subdivisions: "能登",
            name: "羽咋市",
            hourly: "https://weathernews.jp/onebox/tenki/ishikawa/17207/"
        },
        hall: {
            lat: 36.893599,
            long: 136.778999
        }
    },
    志賀町: {
        tj: {
            prefecture: "石川県",
            subdivisions: "能登(輪島)",
            subdivisions1: "能登",
            subdivisions2: "輪島",
            hourly: "https://tenki.jp/forecast/4/20/5620/17384/1hour.html"
        },
        wn: {
            prefecture: "石川",
            subdivisions: "能登",
            name: "志賀町",
            hourly: "https://weathernews.jp/onebox/tenki/ishikawa/17384/"
        },
        hall: {
            lat: 37.006187,
            long: 136.778010
        }
    },
    宝達志水町: {
        tj: {
            prefecture: "石川県",
            subdivisions: "能登(輪島)",
            subdivisions1: "能登",
            subdivisions2: "輪島",
            hourly: "https://tenki.jp/forecast/4/20/5620/17386/1hour.html"
        },
        wn: {
            prefecture: "石川",
            subdivisions: "能登",
            name: "宝達志水町",
            hourly: "https://weathernews.jp/onebox/tenki/ishikawa/17386/"
        },
        hall: {
            lat: 36.862759,
            long: 136.797557
        }
    },
    中能登町: {
        tj: {
            prefecture: "石川県",
            subdivisions: "能登(輪島)",
            subdivisions1: "能登",
            subdivisions2: "輪島",
            hourly: "https://tenki.jp/forecast/4/20/5620/17407/1hour.html"
        },
        wn: {
            prefecture: "石川",
            subdivisions: "能登",
            name: "中能登町",
            hourly: "https://weathernews.jp/onebox/tenki/ishikawa/17407/"
        },
        hall: {
            lat: 36.988890,
            long: 136.901476
        }
    },
    穴水町: {
        tj: {
            prefecture: "石川県",
            subdivisions: "能登(輪島)",
            subdivisions1: "能登",
            subdivisions2: "輪島",
            hourly: "https://tenki.jp/forecast/4/20/5620/17461/1hour.html"
        },
        wn: {
            prefecture: "石川",
            subdivisions: "能登",
            name: "穴水町",
            hourly: "https://weathernews.jp/onebox/tenki/ishikawa/17461/"
        },
        hall: {
            lat: 37.230874,
            long: 136.912479
        }
    },
    能登町: {
        tj: {
            prefecture: "石川県",
            subdivisions: "能登(輪島)",
            subdivisions1: "能登",
            subdivisions2: "輪島",
            hourly: "https://tenki.jp/forecast/4/20/5620/17463/1hour.html"
        },
        wn: {
            prefecture: "石川",
            subdivisions: "能登",
            name: "能登町",
            hourly: "https://weathernews.jp/onebox/tenki/ishikawa/17463/"
        },
        hall: {
            lat: 37.310414,
            long: 137.147782
        }
    },
    福井市: {
        tj: {
            prefecture: "福井県",
            subdivisions: "嶺北(福井)",
            subdivisions1: "嶺北",
            subdivisions2: "福井",
            hourly: "https://tenki.jp/forecast/4/21/5710/18201/1hour.html"
        },
        wn: {
            prefecture: "福井",
            subdivisions: "嶺北",
            name: "福井市",
            hourly: "https://weathernews.jp/onebox/tenki/fukui/18201/"
        },
        hall: {
            lat: 36.064120,
            long: 136.219452
        }
    },
    大野市: {
        tj: {
            prefecture: "福井県",
            subdivisions: "嶺北(福井)",
            subdivisions1: "嶺北",
            subdivisions2: "福井",
            hourly: "https://tenki.jp/forecast/4/21/5710/18205/1hour.html"
        },
        wn: {
            prefecture: "福井",
            subdivisions: "嶺北",
            name: "大野市",
            hourly: "https://weathernews.jp/onebox/tenki/fukui/18205/"
        },
        hall: {
            lat: 35.980564,
            long: 136.487692
        }
    },
    勝山市: {
        tj: {
            prefecture: "福井県",
            subdivisions: "嶺北(福井)",
            subdivisions1: "嶺北",
            subdivisions2: "福井",
            hourly: "https://tenki.jp/forecast/4/21/5710/18206/1hour.html"
        },
        wn: {
            prefecture: "福井",
            subdivisions: "嶺北",
            name: "勝山市",
            hourly: "https://weathernews.jp/onebox/tenki/fukui/18206/"
        },
        hall: {
            lat: 36.060917,
            long: 136.500542
        }
    },
    鯖江市: {
        tj: {
            prefecture: "福井県",
            subdivisions: "嶺北(福井)",
            subdivisions1: "嶺北",
            subdivisions2: "福井",
            hourly: "https://tenki.jp/forecast/4/21/5710/18207/1hour.html"
        },
        wn: {
            prefecture: "福井",
            subdivisions: "嶺北",
            name: "鯖江市",
            hourly: "https://weathernews.jp/onebox/tenki/fukui/18207/"
        },
        hall: {
            lat: 35.956565,
            long: 136.184238
        }
    },
    あわら市: {
        tj: {
            prefecture: "福井県",
            subdivisions: "嶺北(福井)",
            subdivisions1: "嶺北",
            subdivisions2: "福井",
            hourly: "https://tenki.jp/forecast/4/21/5710/18208/1hour.html"
        },
        wn: {
            prefecture: "福井",
            subdivisions: "嶺北",
            name: "あわら市",
            hourly: "https://weathernews.jp/onebox/tenki/fukui/18208/"
        },
        hall: {
            lat: 36.211361,
            long: 136.229012
        }
    },
    越前市: {
        tj: {
            prefecture: "福井県",
            subdivisions: "嶺北(福井)",
            subdivisions1: "嶺北",
            subdivisions2: "福井",
            hourly: "https://tenki.jp/forecast/4/21/5710/18209/1hour.html"
        },
        wn: {
            prefecture: "福井",
            subdivisions: "嶺北",
            name: "越前市",
            hourly: "https://weathernews.jp/onebox/tenki/fukui/18209/"
        },
        hall: {
            lat: 35.903920,
            long: 136.168989
        }
    },
    坂井市: {
        tj: {
            prefecture: "福井県",
            subdivisions: "嶺北(福井)",
            subdivisions1: "嶺北",
            subdivisions2: "福井",
            hourly: "https://tenki.jp/forecast/4/21/5710/18210/1hour.html"
        },
        wn: {
            prefecture: "福井",
            subdivisions: "嶺北",
            name: "坂井市",
            hourly: "https://weathernews.jp/onebox/tenki/fukui/18210/"
        },
        hall: {
            lat: 36.166805,
            long: 136.231501
        }
    },
    永平寺町: {
        tj: {
            prefecture: "福井県",
            subdivisions: "嶺北(福井)",
            subdivisions1: "嶺北",
            subdivisions2: "福井",
            hourly: "https://tenki.jp/forecast/4/21/5710/18322/1hour.html"
        },
        wn: {
            prefecture: "福井",
            subdivisions: "嶺北",
            name: "永平寺町",
            hourly: "https://weathernews.jp/onebox/tenki/fukui/18322/"
        },
        hall: {
            lat: 36.092248,
            long: 136.298724
        }
    },
    池田町: {
        tj: {
            prefecture: "福井県",
            subdivisions: "嶺北(福井)",
            subdivisions1: "嶺北",
            subdivisions2: "福井",
            hourly: "https://tenki.jp/forecast/4/21/5710/18382/1hour.html"
        },
        wn: {
            prefecture: "福井",
            subdivisions: "嶺北",
            name: "池田町",
            hourly: "https://weathernews.jp/onebox/tenki/fukui/18382/"
        },
        hall: {
            lat: 42.928980,
            long: 143.448472
        }
    },
    南越前町: {
        tj: {
            prefecture: "福井県",
            subdivisions: "嶺北(福井)",
            subdivisions1: "嶺北",
            subdivisions2: "福井",
            hourly: "https://tenki.jp/forecast/4/21/5710/18404/1hour.html"
        },
        wn: {
            prefecture: "福井",
            subdivisions: "嶺北",
            name: "南越前町",
            hourly: "https://weathernews.jp/onebox/tenki/fukui/18404/"
        },
        hall: {
            lat: 35.835150,
            long: 136.194435
        }
    },
    越前町: {
        tj: {
            prefecture: "福井県",
            subdivisions: "嶺北(福井)",
            subdivisions1: "嶺北",
            subdivisions2: "福井",
            hourly: "https://tenki.jp/forecast/4/21/5710/18423/1hour.html"
        },
        wn: {
            prefecture: "福井",
            subdivisions: "嶺北",
            name: "越前町",
            hourly: "https://weathernews.jp/onebox/tenki/fukui/18423/"
        },
        hall: {
            lat: 35.974199,
            long: 136.129191
        }
    },
    敦賀市: {
        tj: {
            prefecture: "福井県",
            subdivisions: "嶺南(敦賀)",
            subdivisions1: "嶺南",
            subdivisions2: "敦賀",
            hourly: "https://tenki.jp/forecast/4/21/5720/18202/1hour.html"
        },
        wn: {
            prefecture: "福井",
            subdivisions: "嶺南",
            name: "敦賀市",
            hourly: "https://weathernews.jp/onebox/tenki/fukui/18202/"
        },
        hall: {
            lat: 35.645588,
            long: 136.055437
        }
    },
    小浜市: {
        tj: {
            prefecture: "福井県",
            subdivisions: "嶺南(敦賀)",
            subdivisions1: "嶺南",
            subdivisions2: "敦賀",
            hourly: "https://tenki.jp/forecast/4/21/5720/18204/1hour.html"
        },
        wn: {
            prefecture: "福井",
            subdivisions: "嶺南",
            name: "小浜市",
            hourly: "https://weathernews.jp/onebox/tenki/fukui/18204/"
        },
        hall: {
            lat: 35.495593,
            long: 135.746647
        }
    },
    美浜町: {
        tj: {
            prefecture: "福井県",
            subdivisions: "嶺南(敦賀)",
            subdivisions1: "嶺南",
            subdivisions2: "敦賀",
            hourly: "https://tenki.jp/forecast/4/21/5720/18442/1hour.html"
        },
        wn: {
            prefecture: "福井",
            subdivisions: "嶺南",
            name: "美浜町",
            hourly: "https://weathernews.jp/onebox/tenki/fukui/18442/"
        },
        hall: {
            lat: 35.600600,
            long: 135.940619
        }
    },
    高浜町: {
        tj: {
            prefecture: "福井県",
            subdivisions: "嶺南(敦賀)",
            subdivisions1: "嶺南",
            subdivisions2: "敦賀",
            hourly: "https://tenki.jp/forecast/4/21/5720/18481/1hour.html"
        },
        wn: {
            prefecture: "福井",
            subdivisions: "嶺南",
            name: "高浜町",
            hourly: "https://weathernews.jp/onebox/tenki/fukui/18481/"
        },
        hall: {
            lat: 35.487904,
            long: 135.545969
        }
    },
    おおい町: {
        tj: {
            prefecture: "福井県",
            subdivisions: "嶺南(敦賀)",
            subdivisions1: "嶺南",
            subdivisions2: "敦賀",
            hourly: "https://tenki.jp/forecast/4/21/5720/18483/1hour.html"
        },
        wn: {
            prefecture: "福井",
            subdivisions: "嶺南",
            name: "おおい町",
            hourly: "https://weathernews.jp/onebox/tenki/fukui/18483/"
        },
        hall: {
            lat: 35.481128,
            long: 135.617885
        }
    },
    若狭町: {
        tj: {
            prefecture: "福井県",
            subdivisions: "嶺南(敦賀)",
            subdivisions1: "嶺南",
            subdivisions2: "敦賀",
            hourly: "https://tenki.jp/forecast/4/21/5720/18501/1hour.html"
        },
        wn: {
            prefecture: "福井",
            subdivisions: "嶺南",
            name: "若狭町",
            hourly: "https://weathernews.jp/onebox/tenki/fukui/18501/"
        },
        hall: {
            lat: 35.548882,
            long: 135.908384
        }
    },
    岐阜市: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21201/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "岐阜市",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21201/"
        },
        hall: {
            lat: 35.426201,
            long: 136.759937
        }
    },
    大垣市: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21202/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "大垣市",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21202/"
        },
        hall: {
            lat: 35.359890,
            long: 136.612795
        }
    },
    多治見市: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21204/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "多治見市",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21204/"
        },
        hall: {
            lat: 35.332773,
            long: 137.132078
        }
    },
    関市: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21205/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "関市",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21205/"
        },
        hall: {
            lat: 35.495777,
            long: 136.917895
        }
    },
    中津川市: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21206/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "中津川市",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21206/"
        },
        hall: {
            lat: 35.487493,
            long: 137.500616
        }
    },
    美濃市: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21207/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "美濃市",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21207/"
        },
        hall: {
            lat: 35.544713,
            long: 136.907570
        }
    },
    瑞浪市: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21208/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "瑞浪市",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21208/"
        },
        hall: {
            lat: 35.361740,
            long: 137.254639
        }
    },
    羽島市: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21209/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "羽島市",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21209/"
        },
        hall: {
            lat: 35.319489,
            long: 136.702718
        }
    },
    恵那市: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21210/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "恵那市",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21210/"
        },
        hall: {
            lat: 35.449320,
            long: 137.412817
        }
    },
    美濃加茂市: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21211/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "美濃加茂市",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21211/"
        },
        hall: {
            lat: 35.440242,
            long: 137.015664
        }
    },
    土岐市: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21212/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "土岐市",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21212/"
        },
        hall: {
            lat: 35.352497,
            long: 137.183205
        }
    },
    各務原市: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21213/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "各務原市",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21213/"
        },
        hall: {
            lat: 35.398621,
            long: 136.848479
        }
    },
    可児市: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21214/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "可児市",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21214/"
        },
        hall: {
            lat: 35.426132,
            long: 137.061075
        }
    },
    山県市: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21215/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "山県市",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21215/"
        },
        hall: {
            lat: 35.506111,
            long: 136.781401
        }
    },
    瑞穂市: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21216/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "瑞穂市",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21216/"
        },
        hall: {
            lat: 35.391826,
            long: 136.690784
        }
    },
    本巣市: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21218/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "本巣市",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21218/"
        },
        hall: {
            lat: 35.483052,
            long: 136.678771
        }
    },
    郡上市: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21219/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "郡上市",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21219/"
        },
        hall: {
            lat: 35.748569,
            long: 136.964368
        }
    },
    海津市: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21221/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "海津市",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21221/"
        },
        hall: {
            lat: 35.220470,
            long: 136.636612
        }
    },
    岐南町: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21302/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "岐南町",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21302/"
        },
        hall: {
            lat: 35.389594,
            long: 136.782620
        }
    },
    笠松町: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21303/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "笠松町",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21303/"
        },
        hall: {
            lat: 35.367222,
            long: 136.763192
        }
    },
    養老町: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21341/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "養老町",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21341/"
        },
        hall: {
            lat: 35.308411,
            long: 136.561359
        }
    },
    垂井町: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21361/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "垂井町",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21361/"
        },
        hall: {
            lat: 35.366268,
            long: 136.537944
        }
    },
    関ケ原町: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21362/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "関ケ原町",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21362/"
        },
        hall: {
            lat: 35.365523,
            long: 136.466976
        }
    },
    神戸町: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21381/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "神戸町",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21381/"
        },
        hall: {
            lat: 35.417349,
            long: 136.608517
        }
    },
    輪之内町: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21382/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "輪之内町",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21382/"
        },
        hall: {
            lat: 35.285113,
            long: 136.637444
        }
    },
    安八町: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21383/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "安八町",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21383/"
        },
        hall: {
            lat: 35.335418,
            long: 136.665415
        }
    },
    揖斐川町: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21401/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "揖斐川町",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21401/"
        },
        hall: {
            lat: 35.486948,
            long: 136.568200
        }
    },
    大野町: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21403/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "大野町",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21403/"
        },
        hall: {
            lat: 35.470675,
            long: 136.627636
        }
    },
    池田町: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21404/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "池田町",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21404/"
        },
        hall: {
            lat: 42.928980,
            long: 143.448472
        }
    },
    北方町: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21421/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "北方町",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21421/"
        },
        hall: {
            lat: 35.435721,
            long: 136.684408
        }
    },
    坂祝町: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21501/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "坂祝町",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21501/"
        },
        hall: {
            lat: 35.426734,
            long: 136.985370
        }
    },
    富加町: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21502/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "富加町",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21502/"
        },
        hall: {
            lat: 35.484761,
            long: 136.979707
        }
    },
    川辺町: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21503/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "川辺町",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21503/"
        },
        hall: {
            lat: 35.486548,
            long: 137.070605
        }
    },
    七宗町: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21504/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "七宗町",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21504/"
        },
        hall: {
            lat: 35.543840,
            long: 137.119946
        }
    },
    八百津町: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21505/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "八百津町",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21505/"
        },
        hall: {
            lat: 35.475988,
            long: 137.141499
        }
    },
    白川町: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21506/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "白川町",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21506/"
        },
        hall: {
            lat: 35.581862,
            long: 137.187821
        }
    },
    東白川村: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21507/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "東白川村",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21507/"
        },
        hall: {
            lat: 35.642560,
            long: 137.323745
        }
    },
    御嵩町: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "美濃地方(岐阜)",
            subdivisions1: "美濃地方",
            subdivisions2: "岐阜",
            hourly: "https://tenki.jp/forecast/5/24/5210/21521/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "美濃地方",
            name: "御嵩町",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21521/"
        },
        hall: {
            lat: 35.434493,
            long: 137.130885
        }
    },
    高山市: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "飛騨地方(高山)",
            subdivisions1: "飛騨地方",
            subdivisions2: "高山",
            hourly: "https://tenki.jp/forecast/5/24/5220/21203/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "飛騨地方",
            name: "高山市",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21203/"
        },
        hall: {
            lat: 36.146093,
            long: 137.252206
        }
    },
    飛騨市: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "飛騨地方(高山)",
            subdivisions1: "飛騨地方",
            subdivisions2: "高山",
            hourly: "https://tenki.jp/forecast/5/24/5220/21217/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "飛騨地方",
            name: "飛騨市",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21217/"
        },
        hall: {
            lat: 36.238144,
            long: 137.186246
        }
    },
    下呂市: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "飛騨地方(高山)",
            subdivisions1: "飛騨地方",
            subdivisions2: "高山",
            hourly: "https://tenki.jp/forecast/5/24/5220/21220/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "飛騨地方",
            name: "下呂市",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21220/"
        },
        hall: {
            lat: 35.805879,
            long: 137.244061
        }
    },
    白川村: {
        tj: {
            prefecture: "岐阜県",
            subdivisions: "飛騨地方(高山)",
            subdivisions1: "飛騨地方",
            subdivisions2: "高山",
            hourly: "https://tenki.jp/forecast/5/24/5220/21604/1hour.html"
        },
        wn: {
            prefecture: "岐阜",
            subdivisions: "飛騨地方",
            name: "白川村",
            hourly: "https://weathernews.jp/onebox/tenki/gifu/21604/"
        },
        hall: {
            lat: 36.270904,
            long: 136.898542
        }
    },
    静岡市: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "中部(静岡)",
            subdivisions1: "中部",
            subdivisions2: "静岡",
            hourly: "https://tenki.jp/forecast/5/25/5010/22100/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "中部",
            name: "静岡市葵区",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22101/"
        },
        hall: {
            lat: 34.975473,
            long: 138.382388
        }
    },
    静岡市葵区: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "中部(静岡)",
            subdivisions1: "中部",
            subdivisions2: "静岡",
            hourly: "https://tenki.jp/forecast/5/25/5010/22101/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "中部",
            name: "静岡市葵区",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22101/"
        },
        hall: {
            lat: 34.975135,
            long: 138.383259
        }
    },
    静岡市駿河区: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "中部(静岡)",
            subdivisions1: "中部",
            subdivisions2: "静岡",
            hourly: "https://tenki.jp/forecast/5/25/5010/22102/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "中部",
            name: "静岡市駿河区",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22102/"
        },
        hall: {
            lat: 34.960745,
            long: 138.404047
        }
    },
    静岡市清水区: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "中部(静岡)",
            subdivisions1: "中部",
            subdivisions2: "静岡",
            hourly: "https://tenki.jp/forecast/5/25/5010/22103/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "中部",
            name: "静岡市清水区",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22103/"
        },
        hall: {
            lat: 35.015730,
            long: 138.489603
        }
    },
    島田市: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "中部(静岡)",
            subdivisions1: "中部",
            subdivisions2: "静岡",
            hourly: "https://tenki.jp/forecast/5/25/5010/22209/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "中部",
            name: "島田市",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22209/"
        },
        hall: {
            lat: 34.836170,
            long: 138.176943
        }
    },
    焼津市: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "中部(静岡)",
            subdivisions1: "中部",
            subdivisions2: "静岡",
            hourly: "https://tenki.jp/forecast/5/25/5010/22212/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "中部",
            name: "焼津市",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22212/"
        },
        hall: {
            lat: 34.867170,
            long: 138.322812
        }
    },
    藤枝市: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "中部(静岡)",
            subdivisions1: "中部",
            subdivisions2: "静岡",
            hourly: "https://tenki.jp/forecast/5/25/5010/22214/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "中部",
            name: "藤枝市",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22214/"
        },
        hall: {
            lat: 34.867349,
            long: 138.257548
        }
    },
    牧之原市: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "中部(静岡)",
            subdivisions1: "中部",
            subdivisions2: "静岡",
            hourly: "https://tenki.jp/forecast/5/25/5010/22226/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "中部",
            name: "牧之原市",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22226/"
        },
        hall: {
            lat: 34.740059,
            long: 138.224641
        }
    },
    吉田町: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "中部(静岡)",
            subdivisions1: "中部",
            subdivisions2: "静岡",
            hourly: "https://tenki.jp/forecast/5/25/5010/22424/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "中部",
            name: "吉田町",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22424/"
        },
        hall: {
            lat: 34.770870,
            long: 138.251943
        }
    },
    川根本町: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "中部(静岡)",
            subdivisions1: "中部",
            subdivisions2: "静岡",
            hourly: "https://tenki.jp/forecast/5/25/5010/22429/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "中部",
            name: "川根本町",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22429/"
        },
        hall: {
            lat: 35.046822,
            long: 138.081695
        }
    },
    熱海市: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "伊豆(網代)",
            subdivisions1: "伊豆",
            subdivisions2: "網代",
            hourly: "https://tenki.jp/forecast/5/25/5020/22205/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "伊豆",
            name: "熱海市",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22205/"
        },
        hall: {
            lat: 35.095987,
            long: 139.071546
        }
    },
    伊東市: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "伊豆(網代)",
            subdivisions1: "伊豆",
            subdivisions2: "網代",
            hourly: "https://tenki.jp/forecast/5/25/5020/22208/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "伊豆",
            name: "伊東市",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22208/"
        },
        hall: {
            lat: 34.965680,
            long: 139.102048
        }
    },
    下田市: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "伊豆(網代)",
            subdivisions1: "伊豆",
            subdivisions2: "網代",
            hourly: "https://tenki.jp/forecast/5/25/5020/22219/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "伊豆",
            name: "下田市",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22219/"
        },
        hall: {
            lat: 34.679536,
            long: 138.945316
        }
    },
    伊豆市: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "伊豆(網代)",
            subdivisions1: "伊豆",
            subdivisions2: "網代",
            hourly: "https://tenki.jp/forecast/5/25/5020/22222/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "伊豆",
            name: "伊豆市",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22222/"
        },
        hall: {
            lat: 34.976591,
            long: 138.946715
        }
    },
    伊豆の国市: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "伊豆(網代)",
            subdivisions1: "伊豆",
            subdivisions2: "網代",
            hourly: "https://tenki.jp/forecast/5/25/5020/22225/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "伊豆",
            name: "伊豆の国市",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22225/"
        },
        hall: {
            lat: 35.027713,
            long: 138.928885
        }
    },
    東伊豆町: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "伊豆(網代)",
            subdivisions1: "伊豆",
            subdivisions2: "網代",
            hourly: "https://tenki.jp/forecast/5/25/5020/22301/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "伊豆",
            name: "東伊豆町",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22301/"
        },
        hall: {
            lat: 34.772816,
            long: 139.041265
        }
    },
    河津町: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "伊豆(網代)",
            subdivisions1: "伊豆",
            subdivisions2: "網代",
            hourly: "https://tenki.jp/forecast/5/25/5020/22302/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "伊豆",
            name: "河津町",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22302/"
        },
        hall: {
            lat: 34.757018,
            long: 138.987622
        }
    },
    南伊豆町: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "伊豆(網代)",
            subdivisions1: "伊豆",
            subdivisions2: "網代",
            hourly: "https://tenki.jp/forecast/5/25/5020/22304/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "伊豆",
            name: "南伊豆町",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22304/"
        },
        hall: {
            lat: 34.651089,
            long: 138.858533
        }
    },
    松崎町: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "伊豆(網代)",
            subdivisions1: "伊豆",
            subdivisions2: "網代",
            hourly: "https://tenki.jp/forecast/5/25/5020/22305/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "伊豆",
            name: "松崎町",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22305/"
        },
        hall: {
            lat: 34.752763,
            long: 138.778757
        }
    },
    西伊豆町: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "伊豆(網代)",
            subdivisions1: "伊豆",
            subdivisions2: "網代",
            hourly: "https://tenki.jp/forecast/5/25/5020/22306/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "伊豆",
            name: "西伊豆町",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22306/"
        },
        hall: {
            lat: 34.771693,
            long: 138.775334
        }
    },
    函南町: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "伊豆(網代)",
            subdivisions1: "伊豆",
            subdivisions2: "網代",
            hourly: "https://tenki.jp/forecast/5/25/5020/22325/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "伊豆",
            name: "函南町",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22325/"
        },
        hall: {
            lat: 35.088937,
            long: 138.953348
        }
    },
    沼津市: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "東部(三島)",
            subdivisions1: "東部",
            subdivisions2: "三島",
            hourly: "https://tenki.jp/forecast/5/25/5030/22203/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "東部",
            name: "沼津市",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22203/"
        },
        hall: {
            lat: 35.095723,
            long: 138.863337
        }
    },
    三島市: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "東部(三島)",
            subdivisions1: "東部",
            subdivisions2: "三島",
            hourly: "https://tenki.jp/forecast/5/25/5030/22206/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "東部",
            name: "三島市",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22206/"
        },
        hall: {
            lat: 35.118483,
            long: 138.918501
        }
    },
    富士宮市: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "東部(三島)",
            subdivisions1: "東部",
            subdivisions2: "三島",
            hourly: "https://tenki.jp/forecast/5/25/5030/22207/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "東部",
            name: "富士宮市",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22207/"
        },
        hall: {
            lat: 35.221983,
            long: 138.621656
        }
    },
    富士市: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "東部(三島)",
            subdivisions1: "東部",
            subdivisions2: "三島",
            hourly: "https://tenki.jp/forecast/5/25/5030/22210/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "東部",
            name: "富士市",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22210/"
        },
        hall: {
            lat: 35.161386,
            long: 138.676311
        }
    },
    御殿場市: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "東部(三島)",
            subdivisions1: "東部",
            subdivisions2: "三島",
            hourly: "https://tenki.jp/forecast/5/25/5030/22215/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "東部",
            name: "御殿場市",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22215/"
        },
        hall: {
            lat: 35.308615,
            long: 138.934506
        }
    },
    裾野市: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "東部(三島)",
            subdivisions1: "東部",
            subdivisions2: "三島",
            hourly: "https://tenki.jp/forecast/5/25/5030/22220/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "東部",
            name: "裾野市",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22220/"
        },
        hall: {
            lat: 35.173891,
            long: 138.906724
        }
    },
    清水町: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "東部(三島)",
            subdivisions1: "東部",
            subdivisions2: "三島",
            hourly: "https://tenki.jp/forecast/5/25/5030/22341/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "東部",
            name: "清水町",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22341/"
        },
        hall: {
            lat: 43.011423,
            long: 142.884568
        }
    },
    長泉町: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "東部(三島)",
            subdivisions1: "東部",
            subdivisions2: "三島",
            hourly: "https://tenki.jp/forecast/5/25/5030/22342/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "東部",
            name: "長泉町",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22342/"
        },
        hall: {
            lat: 35.137712,
            long: 138.897258
        }
    },
    小山町: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "東部(三島)",
            subdivisions1: "東部",
            subdivisions2: "三島",
            hourly: "https://tenki.jp/forecast/5/25/5030/22344/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "東部",
            name: "小山町",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22344/"
        },
        hall: {
            lat: 35.360110,
            long: 138.987296
        }
    },
    浜松市: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "西部(浜松)",
            subdivisions1: "西部",
            subdivisions2: "浜松",
            hourly: "https://tenki.jp/forecast/5/25/5040/22130/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "西部",
            name: "浜松市中央区",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22138/"
        },
        hall: {
            lat: 34.710865,
            long: 137.726117
        }
    },
    浜松市中央区: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "西部(浜松)",
            subdivisions1: "西部",
            subdivisions2: "浜松",
            hourly: "https://tenki.jp/forecast/5/25/5040/22138/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "西部",
            name: "浜松市中央区",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22138/"
        },
        hall: {
            lat: 34.710865,
            long: 137.726117
        }
    },
    浜松市浜名区: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "西部(浜松)",
            subdivisions1: "西部",
            subdivisions2: "浜松",
            hourly: "https://tenki.jp/forecast/5/25/5040/22139/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "西部",
            name: "浜松市浜名区",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22139/"
        },
        hall: {
            lat: 34.791715,
            long: 137.783389
        }
    },
    浜松市天竜区: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "西部(浜松)",
            subdivisions1: "西部",
            subdivisions2: "浜松",
            hourly: "https://tenki.jp/forecast/5/25/5040/22140/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "西部",
            name: "浜松市天竜区",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22140/"
        },
        hall: {
            lat: 34.872686,
            long: 137.815924
        }
    },
    磐田市: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "西部(浜松)",
            subdivisions1: "西部",
            subdivisions2: "浜松",
            hourly: "https://tenki.jp/forecast/5/25/5040/22211/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "西部",
            name: "磐田市",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22211/"
        },
        hall: {
            lat: 34.717881,
            long: 137.851511
        }
    },
    掛川市: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "西部(浜松)",
            subdivisions1: "西部",
            subdivisions2: "浜松",
            hourly: "https://tenki.jp/forecast/5/25/5040/22213/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "西部",
            name: "掛川市",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22213/"
        },
        hall: {
            lat: 34.768717,
            long: 137.998403
        }
    },
    袋井市: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "西部(浜松)",
            subdivisions1: "西部",
            subdivisions2: "浜松",
            hourly: "https://tenki.jp/forecast/5/25/5040/22216/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "西部",
            name: "袋井市",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22216/"
        },
        hall: {
            lat: 34.750160,
            long: 137.924624
        }
    },
    湖西市: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "西部(浜松)",
            subdivisions1: "西部",
            subdivisions2: "浜松",
            hourly: "https://tenki.jp/forecast/5/25/5040/22221/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "西部",
            name: "湖西市",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22221/"
        },
        hall: {
            lat: 34.718474,
            long: 137.531617
        }
    },
    御前崎市: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "西部(浜松)",
            subdivisions1: "西部",
            subdivisions2: "浜松",
            hourly: "https://tenki.jp/forecast/5/25/5040/22223/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "西部",
            name: "御前崎市",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22223/"
        },
        hall: {
            lat: 34.637977,
            long: 138.128117
        }
    },
    菊川市: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "西部(浜松)",
            subdivisions1: "西部",
            subdivisions2: "浜松",
            hourly: "https://tenki.jp/forecast/5/25/5040/22224/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "西部",
            name: "菊川市",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22224/"
        },
        hall: {
            lat: 34.757721,
            long: 138.084539
        }
    },
    森町: {
        tj: {
            prefecture: "静岡県",
            subdivisions: "西部(浜松)",
            subdivisions1: "西部",
            subdivisions2: "浜松",
            hourly: "https://tenki.jp/forecast/5/25/5040/22461/1hour.html"
        },
        wn: {
            prefecture: "静岡",
            subdivisions: "西部",
            name: "森町",
            hourly: "https://weathernews.jp/onebox/tenki/shizuoka/22461/"
        },
        hall: {
            lat: 42.104992,
            long: 140.576446
        }
    },
    名古屋市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23100/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "名古屋市中区",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23106/"
        },
        hall: {
            lat: 35.181433,
            long: 136.906421
        }
    },
    名古屋市千種区: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23101/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "名古屋市千種区",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23101/"
        },
        hall: {
            lat: 35.166534,
            long: 136.946400
        }
    },
    名古屋市東区: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23102/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "名古屋市東区",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23102/"
        },
        hall: {
            lat: 35.179314,
            long: 136.926043
        }
    },
    名古屋市北区: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23103/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "名古屋市北区",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23103/"
        },
        hall: {
            lat: 35.194169,
            long: 136.911558
        }
    },
    名古屋市西区: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23104/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "名古屋市西区",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23104/"
        },
        hall: {
            lat: 35.189109,
            long: 136.890058
        }
    },
    名古屋市中村区: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23105/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "名古屋市中村区",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23105/"
        },
        hall: {
            lat: 35.176718,
            long: 136.868633
        }
    },
    名古屋市中区: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23106/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "名古屋市中区",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23106/"
        },
        hall: {
            lat: 35.168607,
            long: 136.910156
        }
    },
    名古屋市昭和区: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23107/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "名古屋市昭和区",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23107/"
        },
        hall: {
            lat: 35.150216,
            long: 136.934166
        }
    },
    名古屋市瑞穂区: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23108/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "名古屋市瑞穂区",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23108/"
        },
        hall: {
            lat: 35.131439,
            long: 136.934953
        }
    },
    名古屋市熱田区: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23109/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "名古屋市熱田区",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23109/"
        },
        hall: {
            lat: 35.128372,
            long: 136.910317
        }
    },
    名古屋市中川区: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23110/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "名古屋市中川区",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23110/"
        },
        hall: {
            lat: 35.141539,
            long: 136.854816
        }
    },
    名古屋市港区: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23111/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "名古屋市港区",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23111/"
        },
        hall: {
            lat: 35.107792,
            long: 136.885553
        }
    },
    名古屋市南区: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23112/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "名古屋市南区",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23112/"
        },
        hall: {
            lat: 35.095127,
            long: 136.931212
        }
    },
    名古屋市守山区: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23113/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "名古屋市守山区",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23113/"
        },
        hall: {
            lat: 35.203343,
            long: 136.976330
        }
    },
    名古屋市緑区: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23114/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "名古屋市緑区",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23114/"
        },
        hall: {
            lat: 35.070721,
            long: 136.952602
        }
    },
    名古屋市名東区: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23115/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "名古屋市名東区",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23115/"
        },
        hall: {
            lat: 35.175862,
            long: 137.010239
        }
    },
    名古屋市天白区: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23116/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "名古屋市天白区",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23116/"
        },
        hall: {
            lat: 35.122740,
            long: 136.975049
        }
    },
    岡崎市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23202/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "岡崎市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23202/"
        },
        hall: {
            lat: 34.954809,
            long: 137.172999
        }
    },
    一宮市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23203/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "一宮市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23203/"
        },
        hall: {
            lat: 35.304013,
            long: 136.802344
        }
    },
    瀬戸市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23204/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "瀬戸市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23204/"
        },
        hall: {
            lat: 35.223620,
            long: 137.084117
        }
    },
    半田市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23205/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "半田市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23205/"
        },
        hall: {
            lat: 34.892626,
            long: 136.937850
        }
    },
    春日井市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23206/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "春日井市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23206/"
        },
        hall: {
            lat: 35.247664,
            long: 136.972232
        }
    },
    津島市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23208/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "津島市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23208/"
        },
        hall: {
            lat: 35.177040,
            long: 136.741236
        }
    },
    碧南市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23209/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "碧南市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23209/"
        },
        hall: {
            lat: 34.884782,
            long: 136.993362
        }
    },
    刈谷市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23210/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "刈谷市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23210/"
        },
        hall: {
            lat: 34.988864,
            long: 137.002060
        }
    },
    豊田市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23211/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "東部",
            name: "豊田市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23211/"
        },
        hall: {
            lat: 35.082345,
            long: 137.156224
        }
    },
    安城市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23212/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "安城市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23212/"
        },
        hall: {
            lat: 34.958644,
            long: 137.080297
        }
    },
    西尾市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23213/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "西尾市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23213/"
        },
        hall: {
            lat: 34.862009,
            long: 137.061741
        }
    },
    犬山市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23215/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "犬山市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23215/"
        },
        hall: {
            lat: 35.378641,
            long: 136.944625
        }
    },
    常滑市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23216/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "常滑市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23216/"
        },
        hall: {
            lat: 34.896088,
            long: 136.854483
        }
    },
    江南市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23217/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "江南市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23217/"
        },
        hall: {
            lat: 35.331953,
            long: 136.870453
        }
    },
    小牧市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23219/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "小牧市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23219/"
        },
        hall: {
            lat: 35.290311,
            long: 136.910948
        }
    },
    稲沢市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23220/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "稲沢市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23220/"
        },
        hall: {
            lat: 35.248135,
            long: 136.780216
        }
    },
    東海市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23222/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "東海市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23222/"
        },
        hall: {
            lat: 35.022976,
            long: 136.902229
        }
    },
    大府市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23223/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "大府市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23223/"
        },
        hall: {
            lat: 35.011611,
            long: 136.963868
        }
    },
    知多市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23224/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "知多市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23224/"
        },
        hall: {
            lat: 34.996533,
            long: 136.864755
        }
    },
    知立市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23225/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "知立市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23225/"
        },
        hall: {
            lat: 35.001285,
            long: 137.050843
        }
    },
    尾張旭市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23226/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "尾張旭市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23226/"
        },
        hall: {
            lat: 35.216568,
            long: 137.035412
        }
    },
    高浜市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23227/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "高浜市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23227/"
        },
        hall: {
            lat: 34.927630,
            long: 136.987660
        }
    },
    岩倉市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23228/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "岩倉市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23228/"
        },
        hall: {
            lat: 35.279433,
            long: 136.871428
        }
    },
    豊明市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23229/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "豊明市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23229/"
        },
        hall: {
            lat: 35.053756,
            long: 137.013124
        }
    },
    日進市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23230/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "日進市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23230/"
        },
        hall: {
            lat: 35.132018,
            long: 137.039414
        }
    },
    愛西市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23232/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "愛西市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23232/"
        },
        hall: {
            lat: 35.152802,
            long: 136.728217
        }
    },
    清須市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23233/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "清須市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23233/"
        },
        hall: {
            lat: 35.199848,
            long: 136.852934
        }
    },
    北名古屋市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23234/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "北名古屋市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23234/"
        },
        hall: {
            lat: 35.245657,
            long: 136.865961
        }
    },
    弥富市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23235/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "弥富市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23235/"
        },
        hall: {
            lat: 35.110124,
            long: 136.724770
        }
    },
    みよし市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23236/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "みよし市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23236/"
        },
        hall: {
            lat: 35.089699,
            long: 137.074728
        }
    },
    あま市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23237/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "あま市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23237/"
        },
        hall: {
            lat: 35.188243,
            long: 136.803701
        }
    },
    長久手市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23238/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "長久手市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23238/"
        },
        hall: {
            lat: 35.184120,
            long: 137.048631
        }
    },
    東郷町: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23302/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "東郷町",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23302/"
        },
        hall: {
            lat: 35.096790,
            long: 137.052623
        }
    },
    豊山町: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23342/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "豊山町",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23342/"
        },
        hall: {
            lat: 35.250462,
            long: 136.911977
        }
    },
    大口町: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23361/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "大口町",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23361/"
        },
        hall: {
            lat: 35.332444,
            long: 136.907694
        }
    },
    扶桑町: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23362/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "扶桑町",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23362/"
        },
        hall: {
            lat: 35.359140,
            long: 136.913079
        }
    },
    大治町: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23424/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "大治町",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23424/"
        },
        hall: {
            lat: 35.175089,
            long: 136.820100
        }
    },
    蟹江町: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23425/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "蟹江町",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23425/"
        },
        hall: {
            lat: 35.132339,
            long: 136.786679
        }
    },
    飛島村: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23427/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "飛島村",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23427/"
        },
        hall: {
            lat: 35.078804,
            long: 136.791157
        }
    },
    阿久比町: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23441/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "阿久比町",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23441/"
        },
        hall: {
            lat: 34.932569,
            long: 136.915512
        }
    },
    東浦町: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23442/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "東浦町",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23442/"
        },
        hall: {
            lat: 34.977139,
            long: 136.965569
        }
    },
    南知多町: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23445/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "南知多町",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23445/"
        },
        hall: {
            lat: 34.715169,
            long: 136.929934
        }
    },
    美浜町: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23446/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "美浜町",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23446/"
        },
        hall: {
            lat: 35.600600,
            long: 135.940619
        }
    },
    武豊町: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23447/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "武豊町",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23447/"
        },
        hall: {
            lat: 34.850970,
            long: 136.914937
        }
    },
    幸田町: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "西部(名古屋)",
            subdivisions1: "西部",
            subdivisions2: "名古屋",
            hourly: "https://tenki.jp/forecast/5/26/5110/23501/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "西部",
            name: "幸田町",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23501/"
        },
        hall: {
            lat: 34.864425,
            long: 137.165667
        }
    },
    豊橋市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "東部(豊橋)",
            subdivisions1: "東部",
            subdivisions2: "豊橋",
            hourly: "https://tenki.jp/forecast/5/26/5120/23201/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "東部",
            name: "豊橋市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23201/"
        },
        hall: {
            lat: 34.769199,
            long: 137.391469
        }
    },
    豊川市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "東部(豊橋)",
            subdivisions1: "東部",
            subdivisions2: "豊橋",
            hourly: "https://tenki.jp/forecast/5/26/5120/23207/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "東部",
            name: "豊川市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23207/"
        },
        hall: {
            lat: 34.826784,
            long: 137.375578
        }
    },
    蒲郡市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "東部(豊橋)",
            subdivisions1: "東部",
            subdivisions2: "豊橋",
            hourly: "https://tenki.jp/forecast/5/26/5120/23214/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "東部",
            name: "蒲郡市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23214/"
        },
        hall: {
            lat: 34.826439,
            long: 137.219653
        }
    },
    新城市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "東部(豊橋)",
            subdivisions1: "東部",
            subdivisions2: "豊橋",
            hourly: "https://tenki.jp/forecast/5/26/5120/23221/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "東部",
            name: "新城市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23221/"
        },
        hall: {
            lat: 34.899012,
            long: 137.497858
        }
    },
    田原市: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "東部(豊橋)",
            subdivisions1: "東部",
            subdivisions2: "豊橋",
            hourly: "https://tenki.jp/forecast/5/26/5120/23231/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "東部",
            name: "田原市",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23231/"
        },
        hall: {
            lat: 34.668972,
            long: 137.263830
        }
    },
    設楽町: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "東部(豊橋)",
            subdivisions1: "東部",
            subdivisions2: "豊橋",
            hourly: "https://tenki.jp/forecast/5/26/5120/23561/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "東部",
            name: "設楽町",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23561/"
        },
        hall: {
            lat: 35.097298,
            long: 137.571225
        }
    },
    東栄町: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "東部(豊橋)",
            subdivisions1: "東部",
            subdivisions2: "豊橋",
            hourly: "https://tenki.jp/forecast/5/26/5120/23562/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "東部",
            name: "東栄町",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23562/"
        },
        hall: {
            lat: 35.076930,
            long: 137.697833
        }
    },
    豊根村: {
        tj: {
            prefecture: "愛知県",
            subdivisions: "東部(豊橋)",
            subdivisions1: "東部",
            subdivisions2: "豊橋",
            hourly: "https://tenki.jp/forecast/5/26/5120/23563/1hour.html"
        },
        wn: {
            prefecture: "愛知",
            subdivisions: "東部",
            name: "豊根村",
            hourly: "https://weathernews.jp/onebox/tenki/aichi/23563/"
        },
        hall: {
            lat: 35.146394,
            long: 137.719871
        }
    },
    津市: {
        tj: {
            prefecture: "三重県",
            subdivisions: "北中部(津)",
            subdivisions1: "北中部",
            subdivisions2: "津",
            hourly: "https://tenki.jp/forecast/5/27/5310/24201/1hour.html"
        },
        wn: {
            prefecture: "三重",
            subdivisions: "北中部",
            name: "津市",
            hourly: "https://weathernews.jp/onebox/tenki/mie/24201/"
        },
        hall: {
            lat: 34.718563,
            long: 136.505443
        }
    },
    四日市市: {
        tj: {
            prefecture: "三重県",
            subdivisions: "北中部(津)",
            subdivisions1: "北中部",
            subdivisions2: "津",
            hourly: "https://tenki.jp/forecast/5/27/5310/24202/1hour.html"
        },
        wn: {
            prefecture: "三重",
            subdivisions: "北中部",
            name: "四日市市",
            hourly: "https://weathernews.jp/onebox/tenki/mie/24202/"
        },
        hall: {
            lat: 34.965092,
            long: 136.624427
        }
    },
    松阪市: {
        tj: {
            prefecture: "三重県",
            subdivisions: "北中部(津)",
            subdivisions1: "北中部",
            subdivisions2: "津",
            hourly: "https://tenki.jp/forecast/5/27/5310/24204/1hour.html"
        },
        wn: {
            prefecture: "三重",
            subdivisions: "北中部",
            name: "松阪市",
            hourly: "https://weathernews.jp/onebox/tenki/mie/24204/"
        },
        hall: {
            lat: 34.577974,
            long: 136.527595
        }
    },
    桑名市: {
        tj: {
            prefecture: "三重県",
            subdivisions: "北中部(津)",
            subdivisions1: "北中部",
            subdivisions2: "津",
            hourly: "https://tenki.jp/forecast/5/27/5310/24205/1hour.html"
        },
        wn: {
            prefecture: "三重",
            subdivisions: "北中部",
            name: "桑名市",
            hourly: "https://weathernews.jp/onebox/tenki/mie/24205/"
        },
        hall: {
            lat: 35.062288,
            long: 136.683539
        }
    },
    鈴鹿市: {
        tj: {
            prefecture: "三重県",
            subdivisions: "北中部(津)",
            subdivisions1: "北中部",
            subdivisions2: "津",
            hourly: "https://tenki.jp/forecast/5/27/5310/24207/1hour.html"
        },
        wn: {
            prefecture: "三重",
            subdivisions: "北中部",
            name: "鈴鹿市",
            hourly: "https://weathernews.jp/onebox/tenki/mie/24207/"
        },
        hall: {
            lat: 34.881866,
            long: 136.584185
        }
    },
    名張市: {
        tj: {
            prefecture: "三重県",
            subdivisions: "北中部(津)",
            subdivisions1: "北中部",
            subdivisions2: "津",
            hourly: "https://tenki.jp/forecast/5/27/5310/24208/1hour.html"
        },
        wn: {
            prefecture: "三重",
            subdivisions: "北中部",
            name: "名張市",
            hourly: "https://weathernews.jp/onebox/tenki/mie/24208/"
        },
        hall: {
            lat: 34.627662,
            long: 136.108299
        }
    },
    亀山市: {
        tj: {
            prefecture: "三重県",
            subdivisions: "北中部(津)",
            subdivisions1: "北中部",
            subdivisions2: "津",
            hourly: "https://tenki.jp/forecast/5/27/5310/24210/1hour.html"
        },
        wn: {
            prefecture: "三重",
            subdivisions: "北中部",
            name: "亀山市",
            hourly: "https://weathernews.jp/onebox/tenki/mie/24210/"
        },
        hall: {
            lat: 34.855755,
            long: 136.451645
        }
    },
    いなべ市: {
        tj: {
            prefecture: "三重県",
            subdivisions: "北中部(津)",
            subdivisions1: "北中部",
            subdivisions2: "津",
            hourly: "https://tenki.jp/forecast/5/27/5310/24214/1hour.html"
        },
        wn: {
            prefecture: "三重",
            subdivisions: "北中部",
            name: "いなべ市",
            hourly: "https://weathernews.jp/onebox/tenki/mie/24214/"
        },
        hall: {
            lat: 35.158426,
            long: 136.516697
        }
    },
    伊賀市: {
        tj: {
            prefecture: "三重県",
            subdivisions: "北中部(津)",
            subdivisions1: "北中部",
            subdivisions2: "津",
            hourly: "https://tenki.jp/forecast/5/27/5310/24216/1hour.html"
        },
        wn: {
            prefecture: "三重",
            subdivisions: "北中部",
            name: "伊賀市",
            hourly: "https://weathernews.jp/onebox/tenki/mie/24216/"
        },
        hall: {
            lat: 34.749886,
            long: 136.142286
        }
    },
    木曽岬町: {
        tj: {
            prefecture: "三重県",
            subdivisions: "北中部(津)",
            subdivisions1: "北中部",
            subdivisions2: "津",
            hourly: "https://tenki.jp/forecast/5/27/5310/24303/1hour.html"
        },
        wn: {
            prefecture: "三重",
            subdivisions: "北中部",
            name: "木曽岬町",
            hourly: "https://weathernews.jp/onebox/tenki/mie/24303/"
        },
        hall: {
            lat: 35.075958,
            long: 136.731353
        }
    },
    東員町: {
        tj: {
            prefecture: "三重県",
            subdivisions: "北中部(津)",
            subdivisions1: "北中部",
            subdivisions2: "津",
            hourly: "https://tenki.jp/forecast/5/27/5310/24324/1hour.html"
        },
        wn: {
            prefecture: "三重",
            subdivisions: "北中部",
            name: "東員町",
            hourly: "https://weathernews.jp/onebox/tenki/mie/24324/"
        },
        hall: {
            lat: 35.074125,
            long: 136.583756
        }
    },
    菰野町: {
        tj: {
            prefecture: "三重県",
            subdivisions: "北中部(津)",
            subdivisions1: "北中部",
            subdivisions2: "津",
            hourly: "https://tenki.jp/forecast/5/27/5310/24341/1hour.html"
        },
        wn: {
            prefecture: "三重",
            subdivisions: "北中部",
            name: "菰野町",
            hourly: "https://weathernews.jp/onebox/tenki/mie/24341/"
        },
        hall: {
            lat: 35.020001,
            long: 136.507346
        }
    },
    朝日町: {
        tj: {
            prefecture: "三重県",
            subdivisions: "北中部(津)",
            subdivisions1: "北中部",
            subdivisions2: "津",
            hourly: "https://tenki.jp/forecast/5/27/5310/24343/1hour.html"
        },
        wn: {
            prefecture: "三重",
            subdivisions: "北中部",
            name: "朝日町",
            hourly: "https://weathernews.jp/onebox/tenki/mie/24343/"
        },
        hall: {
            lat: 38.299293,
            long: 140.145924
        }
    },
    川越町: {
        tj: {
            prefecture: "三重県",
            subdivisions: "北中部(津)",
            subdivisions1: "北中部",
            subdivisions2: "津",
            hourly: "https://tenki.jp/forecast/5/27/5310/24344/1hour.html"
        },
        wn: {
            prefecture: "三重",
            subdivisions: "北中部",
            name: "川越町",
            hourly: "https://weathernews.jp/onebox/tenki/mie/24344/"
        },
        hall: {
            lat: 35.022950,
            long: 136.673971
        }
    },
    多気町: {
        tj: {
            prefecture: "三重県",
            subdivisions: "北中部(津)",
            subdivisions1: "北中部",
            subdivisions2: "津",
            hourly: "https://tenki.jp/forecast/5/27/5310/24441/1hour.html"
        },
        wn: {
            prefecture: "三重",
            subdivisions: "北中部",
            name: "多気町",
            hourly: "https://weathernews.jp/onebox/tenki/mie/24441/"
        },
        hall: {
            lat: 34.496156,
            long: 136.546149
        }
    },
    明和町: {
        tj: {
            prefecture: "三重県",
            subdivisions: "北中部(津)",
            subdivisions1: "北中部",
            subdivisions2: "津",
            hourly: "https://tenki.jp/forecast/5/27/5310/24442/1hour.html"
        },
        wn: {
            prefecture: "三重",
            subdivisions: "北中部",
            name: "明和町",
            hourly: "https://weathernews.jp/onebox/tenki/mie/24442/"
        },
        hall: {
            lat: 36.211283,
            long: 139.534228
        }
    },
    伊勢市: {
        tj: {
            prefecture: "三重県",
            subdivisions: "南部(尾鷲)",
            subdivisions1: "南部",
            subdivisions2: "尾鷲",
            hourly: "https://tenki.jp/forecast/5/27/5320/24203/1hour.html"
        },
        wn: {
            prefecture: "三重",
            subdivisions: "南部",
            name: "伊勢市",
            hourly: "https://weathernews.jp/onebox/tenki/mie/24203/"
        },
        hall: {
            lat: 34.487506,
            long: 136.709286
        }
    },
    尾鷲市: {
        tj: {
            prefecture: "三重県",
            subdivisions: "南部(尾鷲)",
            subdivisions1: "南部",
            subdivisions2: "尾鷲",
            hourly: "https://tenki.jp/forecast/5/27/5320/24209/1hour.html"
        },
        wn: {
            prefecture: "三重",
            subdivisions: "南部",
            name: "尾鷲市",
            hourly: "https://weathernews.jp/onebox/tenki/mie/24209/"
        },
        hall: {
            lat: 34.070799,
            long: 136.190998
        }
    },
    鳥羽市: {
        tj: {
            prefecture: "三重県",
            subdivisions: "南部(尾鷲)",
            subdivisions1: "南部",
            subdivisions2: "尾鷲",
            hourly: "https://tenki.jp/forecast/5/27/5320/24211/1hour.html"
        },
        wn: {
            prefecture: "三重",
            subdivisions: "南部",
            name: "鳥羽市",
            hourly: "https://weathernews.jp/onebox/tenki/mie/24211/"
        },
        hall: {
            lat: 34.481432,
            long: 136.843378
        }
    },
    熊野市: {
        tj: {
            prefecture: "三重県",
            subdivisions: "南部(尾鷲)",
            subdivisions1: "南部",
            subdivisions2: "尾鷲",
            hourly: "https://tenki.jp/forecast/5/27/5320/24212/1hour.html"
        },
        wn: {
            prefecture: "三重",
            subdivisions: "南部",
            name: "熊野市",
            hourly: "https://weathernews.jp/onebox/tenki/mie/24212/"
        },
        hall: {
            lat: 33.888620,
            long: 136.100288
        }
    },
    志摩市: {
        tj: {
            prefecture: "三重県",
            subdivisions: "南部(尾鷲)",
            subdivisions1: "南部",
            subdivisions2: "尾鷲",
            hourly: "https://tenki.jp/forecast/5/27/5320/24215/1hour.html"
        },
        wn: {
            prefecture: "三重",
            subdivisions: "南部",
            name: "志摩市",
            hourly: "https://weathernews.jp/onebox/tenki/mie/24215/"
        },
        hall: {
            lat: 34.328218,
            long: 136.829655
        }
    },
    大台町: {
        tj: {
            prefecture: "三重県",
            subdivisions: "南部(尾鷲)",
            subdivisions1: "南部",
            subdivisions2: "尾鷲",
            hourly: "https://tenki.jp/forecast/5/27/5320/24443/1hour.html"
        },
        wn: {
            prefecture: "三重",
            subdivisions: "南部",
            name: "大台町",
            hourly: "https://weathernews.jp/onebox/tenki/mie/24443/"
        },
        hall: {
            lat: 34.393370,
            long: 136.407876
        }
    },
    玉城町: {
        tj: {
            prefecture: "三重県",
            subdivisions: "南部(尾鷲)",
            subdivisions1: "南部",
            subdivisions2: "尾鷲",
            hourly: "https://tenki.jp/forecast/5/27/5320/24461/1hour.html"
        },
        wn: {
            prefecture: "三重",
            subdivisions: "南部",
            name: "玉城町",
            hourly: "https://weathernews.jp/onebox/tenki/mie/24461/"
        },
        hall: {
            lat: 34.490276,
            long: 136.630932
        }
    },
    度会町: {
        tj: {
            prefecture: "三重県",
            subdivisions: "南部(尾鷲)",
            subdivisions1: "南部",
            subdivisions2: "尾鷲",
            hourly: "https://tenki.jp/forecast/5/27/5320/24470/1hour.html"
        },
        wn: {
            prefecture: "三重",
            subdivisions: "南部",
            name: "度会町",
            hourly: "https://weathernews.jp/onebox/tenki/mie/24470/"
        },
        hall: {
            lat: 34.438900,
            long: 136.622510
        }
    },
    大紀町: {
        tj: {
            prefecture: "三重県",
            subdivisions: "南部(尾鷲)",
            subdivisions1: "南部",
            subdivisions2: "尾鷲",
            hourly: "https://tenki.jp/forecast/5/27/5320/24471/1hour.html"
        },
        wn: {
            prefecture: "三重",
            subdivisions: "南部",
            name: "大紀町",
            hourly: "https://weathernews.jp/onebox/tenki/mie/24471/"
        },
        hall: {
            lat: 34.358023,
            long: 136.415798
        }
    },
    南伊勢町: {
        tj: {
            prefecture: "三重県",
            subdivisions: "南部(尾鷲)",
            subdivisions1: "南部",
            subdivisions2: "尾鷲",
            hourly: "https://tenki.jp/forecast/5/27/5320/24472/1hour.html"
        },
        wn: {
            prefecture: "三重",
            subdivisions: "南部",
            name: "南伊勢町",
            hourly: "https://weathernews.jp/onebox/tenki/mie/24472/"
        },
        hall: {
            lat: 34.352059,
            long: 136.703650
        }
    },
    紀北町: {
        tj: {
            prefecture: "三重県",
            subdivisions: "南部(尾鷲)",
            subdivisions1: "南部",
            subdivisions2: "尾鷲",
            hourly: "https://tenki.jp/forecast/5/27/5320/24543/1hour.html"
        },
        wn: {
            prefecture: "三重",
            subdivisions: "南部",
            name: "紀北町",
            hourly: "https://weathernews.jp/onebox/tenki/mie/24543/"
        },
        hall: {
            lat: 34.211469,
            long: 136.337275
        }
    },
    御浜町: {
        tj: {
            prefecture: "三重県",
            subdivisions: "南部(尾鷲)",
            subdivisions1: "南部",
            subdivisions2: "尾鷲",
            hourly: "https://tenki.jp/forecast/5/27/5320/24561/1hour.html"
        },
        wn: {
            prefecture: "三重",
            subdivisions: "南部",
            name: "御浜町",
            hourly: "https://weathernews.jp/onebox/tenki/mie/24561/"
        },
        hall: {
            lat: 33.814505,
            long: 136.048677
        }
    },
    紀宝町: {
        tj: {
            prefecture: "三重県",
            subdivisions: "南部(尾鷲)",
            subdivisions1: "南部",
            subdivisions2: "尾鷲",
            hourly: "https://tenki.jp/forecast/5/27/5320/24562/1hour.html"
        },
        wn: {
            prefecture: "三重",
            subdivisions: "南部",
            name: "紀宝町",
            hourly: "https://weathernews.jp/onebox/tenki/mie/24562/"
        },
        hall: {
            lat: 33.733870,
            long: 136.009715
        }
    },
    大津市: {
        tj: {
            prefecture: "滋賀県",
            subdivisions: "南部(大津)",
            subdivisions1: "南部",
            subdivisions2: "大津",
            hourly: "https://tenki.jp/forecast/6/28/6010/25201/1hour.html"
        },
        wn: {
            prefecture: "滋賀",
            subdivisions: "北部",
            name: "大津市",
            hourly: "https://weathernews.jp/onebox/tenki/shiga/25201/"
        },
        hall: {
            lat: 35.018357,
            long: 135.854666
        }
    },
    近江八幡市: {
        tj: {
            prefecture: "滋賀県",
            subdivisions: "南部(大津)",
            subdivisions1: "南部",
            subdivisions2: "大津",
            hourly: "https://tenki.jp/forecast/6/28/6010/25204/1hour.html"
        },
        wn: {
            prefecture: "滋賀",
            subdivisions: "南部",
            name: "近江八幡市",
            hourly: "https://weathernews.jp/onebox/tenki/shiga/25204/"
        },
        hall: {
            lat: 35.128214,
            long: 136.097846
        }
    },
    草津市: {
        tj: {
            prefecture: "滋賀県",
            subdivisions: "南部(大津)",
            subdivisions1: "南部",
            subdivisions2: "大津",
            hourly: "https://tenki.jp/forecast/6/28/6010/25206/1hour.html"
        },
        wn: {
            prefecture: "滋賀",
            subdivisions: "南部",
            name: "草津市",
            hourly: "https://weathernews.jp/onebox/tenki/shiga/25206/"
        },
        hall: {
            lat: 35.013123,
            long: 135.959994
        }
    },
    守山市: {
        tj: {
            prefecture: "滋賀県",
            subdivisions: "南部(大津)",
            subdivisions1: "南部",
            subdivisions2: "大津",
            hourly: "https://tenki.jp/forecast/6/28/6010/25207/1hour.html"
        },
        wn: {
            prefecture: "滋賀",
            subdivisions: "南部",
            name: "守山市",
            hourly: "https://weathernews.jp/onebox/tenki/shiga/25207/"
        },
        hall: {
            lat: 35.058327,
            long: 135.994020
        }
    },
    栗東市: {
        tj: {
            prefecture: "滋賀県",
            subdivisions: "南部(大津)",
            subdivisions1: "南部",
            subdivisions2: "大津",
            hourly: "https://tenki.jp/forecast/6/28/6010/25208/1hour.html"
        },
        wn: {
            prefecture: "滋賀",
            subdivisions: "南部",
            name: "栗東市",
            hourly: "https://weathernews.jp/onebox/tenki/shiga/25208/"
        },
        hall: {
            lat: 35.021614,
            long: 135.997993
        }
    },
    甲賀市: {
        tj: {
            prefecture: "滋賀県",
            subdivisions: "南部(大津)",
            subdivisions1: "南部",
            subdivisions2: "大津",
            hourly: "https://tenki.jp/forecast/6/28/6010/25209/1hour.html"
        },
        wn: {
            prefecture: "滋賀",
            subdivisions: "南部",
            name: "甲賀市",
            hourly: "https://weathernews.jp/onebox/tenki/shiga/25209/"
        },
        hall: {
            lat: 34.966120,
            long: 136.167084
        }
    },
    野洲市: {
        tj: {
            prefecture: "滋賀県",
            subdivisions: "南部(大津)",
            subdivisions1: "南部",
            subdivisions2: "大津",
            hourly: "https://tenki.jp/forecast/6/28/6010/25210/1hour.html"
        },
        wn: {
            prefecture: "滋賀",
            subdivisions: "南部",
            name: "野洲市",
            hourly: "https://weathernews.jp/onebox/tenki/shiga/25210/"
        },
        hall: {
            lat: 35.067470,
            long: 136.025873
        }
    },
    湖南市: {
        tj: {
            prefecture: "滋賀県",
            subdivisions: "南部(大津)",
            subdivisions1: "南部",
            subdivisions2: "大津",
            hourly: "https://tenki.jp/forecast/6/28/6010/25211/1hour.html"
        },
        wn: {
            prefecture: "滋賀",
            subdivisions: "南部",
            name: "湖南市",
            hourly: "https://weathernews.jp/onebox/tenki/shiga/25211/"
        },
        hall: {
            lat: 35.004106,
            long: 136.084693
        }
    },
    東近江市: {
        tj: {
            prefecture: "滋賀県",
            subdivisions: "南部(大津)",
            subdivisions1: "南部",
            subdivisions2: "大津",
            hourly: "https://tenki.jp/forecast/6/28/6010/25213/1hour.html"
        },
        wn: {
            prefecture: "滋賀",
            subdivisions: "南部",
            name: "東近江市",
            hourly: "https://weathernews.jp/onebox/tenki/shiga/25213/"
        },
        hall: {
            lat: 35.112603,
            long: 136.207620
        }
    },
    日野町: {
        tj: {
            prefecture: "滋賀県",
            subdivisions: "南部(大津)",
            subdivisions1: "南部",
            subdivisions2: "大津",
            hourly: "https://tenki.jp/forecast/6/28/6010/25383/1hour.html"
        },
        wn: {
            prefecture: "滋賀",
            subdivisions: "南部",
            name: "日野町",
            hourly: "https://weathernews.jp/onebox/tenki/shiga/25383/"
        },
        hall: {
            lat: 35.018018,
            long: 136.246023
        }
    },
    竜王町: {
        tj: {
            prefecture: "滋賀県",
            subdivisions: "南部(大津)",
            subdivisions1: "南部",
            subdivisions2: "大津",
            hourly: "https://tenki.jp/forecast/6/28/6010/25384/1hour.html"
        },
        wn: {
            prefecture: "滋賀",
            subdivisions: "南部",
            name: "竜王町",
            hourly: "https://weathernews.jp/onebox/tenki/shiga/25384/"
        },
        hall: {
            lat: 35.060750,
            long: 136.124438
        }
    },
    彦根市: {
        tj: {
            prefecture: "滋賀県",
            subdivisions: "北部(彦根)",
            subdivisions1: "北部",
            subdivisions2: "彦根",
            hourly: "https://tenki.jp/forecast/6/28/6020/25202/1hour.html"
        },
        wn: {
            prefecture: "滋賀",
            subdivisions: "北部",
            name: "彦根市",
            hourly: "https://weathernews.jp/onebox/tenki/shiga/25202/"
        },
        hall: {
            lat: 35.274464,
            long: 136.259623
        }
    },
    長浜市: {
        tj: {
            prefecture: "滋賀県",
            subdivisions: "北部(彦根)",
            subdivisions1: "北部",
            subdivisions2: "彦根",
            hourly: "https://tenki.jp/forecast/6/28/6020/25203/1hour.html"
        },
        wn: {
            prefecture: "滋賀",
            subdivisions: "北部",
            name: "長浜市",
            hourly: "https://weathernews.jp/onebox/tenki/shiga/25203/"
        },
        hall: {
            lat: 35.380758,
            long: 136.278384
        }
    },
    高島市: {
        tj: {
            prefecture: "滋賀県",
            subdivisions: "北部(彦根)",
            subdivisions1: "北部",
            subdivisions2: "彦根",
            hourly: "https://tenki.jp/forecast/6/28/6020/25212/1hour.html"
        },
        wn: {
            prefecture: "滋賀",
            subdivisions: "北部",
            name: "高島市",
            hourly: "https://weathernews.jp/onebox/tenki/shiga/25212/"
        },
        hall: {
            lat: 35.353052,
            long: 136.035785
        }
    },
    米原市: {
        tj: {
            prefecture: "滋賀県",
            subdivisions: "北部(彦根)",
            subdivisions1: "北部",
            subdivisions2: "彦根",
            hourly: "https://tenki.jp/forecast/6/28/6020/25214/1hour.html"
        },
        wn: {
            prefecture: "滋賀",
            subdivisions: "北部",
            name: "米原市",
            hourly: "https://weathernews.jp/onebox/tenki/shiga/25214/"
        },
        hall: {
            lat: 35.315046,
            long: 136.291402
        }
    },
    愛荘町: {
        tj: {
            prefecture: "滋賀県",
            subdivisions: "北部(彦根)",
            subdivisions1: "北部",
            subdivisions2: "彦根",
            hourly: "https://tenki.jp/forecast/6/28/6020/25425/1hour.html"
        },
        wn: {
            prefecture: "滋賀",
            subdivisions: "北部",
            name: "愛荘町",
            hourly: "https://weathernews.jp/onebox/tenki/shiga/25425/"
        },
        hall: {
            lat: 35.168834,
            long: 136.212306
        }
    },
    豊郷町: {
        tj: {
            prefecture: "滋賀県",
            subdivisions: "北部(彦根)",
            subdivisions1: "北部",
            subdivisions2: "彦根",
            hourly: "https://tenki.jp/forecast/6/28/6020/25441/1hour.html"
        },
        wn: {
            prefecture: "滋賀",
            subdivisions: "北部",
            name: "豊郷町",
            hourly: "https://weathernews.jp/onebox/tenki/shiga/25441/"
        },
        hall: {
            lat: 35.200171,
            long: 136.230302
        }
    },
    甲良町: {
        tj: {
            prefecture: "滋賀県",
            subdivisions: "北部(彦根)",
            subdivisions1: "北部",
            subdivisions2: "彦根",
            hourly: "https://tenki.jp/forecast/6/28/6020/25442/1hour.html"
        },
        wn: {
            prefecture: "滋賀",
            subdivisions: "北部",
            name: "甲良町",
            hourly: "https://weathernews.jp/onebox/tenki/shiga/25442/"
        },
        hall: {
            lat: 35.204224,
            long: 136.261350
        }
    },
    多賀町: {
        tj: {
            prefecture: "滋賀県",
            subdivisions: "北部(彦根)",
            subdivisions1: "北部",
            subdivisions2: "彦根",
            hourly: "https://tenki.jp/forecast/6/28/6020/25443/1hour.html"
        },
        wn: {
            prefecture: "滋賀",
            subdivisions: "北部",
            name: "多賀町",
            hourly: "https://weathernews.jp/onebox/tenki/shiga/25443/"
        },
        hall: {
            lat: 35.222035,
            long: 136.292199
        }
    },
    京都市: {
        tj: {
            prefecture: "京都府",
            subdivisions: "南部(京都)",
            subdivisions1: "南部",
            subdivisions2: "京都",
            hourly: "https://tenki.jp/forecast/6/29/6110/26100/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "南部",
            name: "京都市中京区",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26104/"
        },
        hall: {
            lat: 35.011574,
            long: 135.768181
        }
    },
    京都市北区: {
        tj: {
            prefecture: "京都府",
            subdivisions: "南部(京都)",
            subdivisions1: "南部",
            subdivisions2: "京都",
            hourly: "https://tenki.jp/forecast/6/29/6110/26101/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "南部",
            name: "京都市北区",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26101/"
        },
        hall: {
            lat: 35.040970,
            long: 135.753991
        }
    },
    京都市上京区: {
        tj: {
            prefecture: "京都府",
            subdivisions: "南部(京都)",
            subdivisions1: "南部",
            subdivisions2: "京都",
            hourly: "https://tenki.jp/forecast/6/29/6110/26102/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "南部",
            name: "京都市上京区",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26102/"
        },
        hall: {
            lat: 35.029530,
            long: 135.756697
        }
    },
    京都市左京区: {
        tj: {
            prefecture: "京都府",
            subdivisions: "南部(京都)",
            subdivisions1: "南部",
            subdivisions2: "京都",
            hourly: "https://tenki.jp/forecast/6/29/6110/26103/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "南部",
            name: "京都市左京区",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26103/"
        },
        hall: {
            lat: 35.048580,
            long: 135.778575
        }
    },
    京都市中京区: {
        tj: {
            prefecture: "京都府",
            subdivisions: "南部(京都)",
            subdivisions1: "南部",
            subdivisions2: "京都",
            hourly: "https://tenki.jp/forecast/6/29/6110/26104/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "南部",
            name: "京都市中京区",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26104/"
        },
        hall: {
            lat: 35.010404,
            long: 135.751433
        }
    },
    京都市東山区: {
        tj: {
            prefecture: "京都府",
            subdivisions: "南部(京都)",
            subdivisions1: "南部",
            subdivisions2: "京都",
            hourly: "https://tenki.jp/forecast/6/29/6110/26105/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "南部",
            name: "京都市東山区",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26105/"
        },
        hall: {
            lat: 34.997082,
            long: 135.776282
        }
    },
    京都市下京区: {
        tj: {
            prefecture: "京都府",
            subdivisions: "南部(京都)",
            subdivisions1: "南部",
            subdivisions2: "京都",
            hourly: "https://tenki.jp/forecast/6/29/6110/26106/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "南部",
            name: "京都市下京区",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26106/"
        },
        hall: {
            lat: 34.987560,
            long: 135.755469
        }
    },
    京都市南区: {
        tj: {
            prefecture: "京都府",
            subdivisions: "南部(京都)",
            subdivisions1: "南部",
            subdivisions2: "京都",
            hourly: "https://tenki.jp/forecast/6/29/6110/26107/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "南部",
            name: "京都市南区",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26107/"
        },
        hall: {
            lat: 34.976756,
            long: 135.746418
        }
    },
    京都市右京区: {
        tj: {
            prefecture: "京都府",
            subdivisions: "南部(京都)",
            subdivisions1: "南部",
            subdivisions2: "京都",
            hourly: "https://tenki.jp/forecast/6/29/6110/26108/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "南部",
            name: "京都市右京区",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26108/"
        },
        hall: {
            lat: 35.010116,
            long: 135.715996
        }
    },
    京都市伏見区: {
        tj: {
            prefecture: "京都府",
            subdivisions: "南部(京都)",
            subdivisions1: "南部",
            subdivisions2: "京都",
            hourly: "https://tenki.jp/forecast/6/29/6110/26109/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "南部",
            name: "京都市伏見区",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26109/"
        },
        hall: {
            lat: 34.935546,
            long: 135.761321
        }
    },
    京都市山科区: {
        tj: {
            prefecture: "京都府",
            subdivisions: "南部(京都)",
            subdivisions1: "南部",
            subdivisions2: "京都",
            hourly: "https://tenki.jp/forecast/6/29/6110/26110/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "南部",
            name: "京都市山科区",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26110/"
        },
        hall: {
            lat: 34.972297,
            long: 135.813625
        }
    },
    京都市西京区: {
        tj: {
            prefecture: "京都府",
            subdivisions: "南部(京都)",
            subdivisions1: "南部",
            subdivisions2: "京都",
            hourly: "https://tenki.jp/forecast/6/29/6110/26111/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "南部",
            name: "京都市西京区",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26111/"
        },
        hall: {
            lat: 34.985027,
            long: 135.693108
        }
    },
    宇治市: {
        tj: {
            prefecture: "京都府",
            subdivisions: "南部(京都)",
            subdivisions1: "南部",
            subdivisions2: "京都",
            hourly: "https://tenki.jp/forecast/6/29/6110/26204/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "南部",
            name: "宇治市",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26204/"
        },
        hall: {
            lat: 34.884400,
            long: 135.799780
        }
    },
    亀岡市: {
        tj: {
            prefecture: "京都府",
            subdivisions: "南部(京都)",
            subdivisions1: "南部",
            subdivisions2: "京都",
            hourly: "https://tenki.jp/forecast/6/29/6110/26206/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "南部",
            name: "亀岡市",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26206/"
        },
        hall: {
            lat: 35.013475,
            long: 135.573512
        }
    },
    城陽市: {
        tj: {
            prefecture: "京都府",
            subdivisions: "南部(京都)",
            subdivisions1: "南部",
            subdivisions2: "京都",
            hourly: "https://tenki.jp/forecast/6/29/6110/26207/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "南部",
            name: "城陽市",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26207/"
        },
        hall: {
            lat: 34.852958,
            long: 135.780074
        }
    },
    向日市: {
        tj: {
            prefecture: "京都府",
            subdivisions: "南部(京都)",
            subdivisions1: "南部",
            subdivisions2: "京都",
            hourly: "https://tenki.jp/forecast/6/29/6110/26208/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "南部",
            name: "向日市",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26208/"
        },
        hall: {
            lat: 34.948392,
            long: 135.698402
        }
    },
    長岡京市: {
        tj: {
            prefecture: "京都府",
            subdivisions: "南部(京都)",
            subdivisions1: "南部",
            subdivisions2: "京都",
            hourly: "https://tenki.jp/forecast/6/29/6110/26209/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "南部",
            name: "長岡京市",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26209/"
        },
        hall: {
            lat: 34.926462,
            long: 135.695256
        }
    },
    八幡市: {
        tj: {
            prefecture: "京都府",
            subdivisions: "南部(京都)",
            subdivisions1: "南部",
            subdivisions2: "京都",
            hourly: "https://tenki.jp/forecast/6/29/6110/26210/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "南部",
            name: "八幡市",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26210/"
        },
        hall: {
            lat: 34.875439,
            long: 135.707124
        }
    },
    京田辺市: {
        tj: {
            prefecture: "京都府",
            subdivisions: "南部(京都)",
            subdivisions1: "南部",
            subdivisions2: "京都",
            hourly: "https://tenki.jp/forecast/6/29/6110/26211/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "南部",
            name: "京田辺市",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26211/"
        },
        hall: {
            lat: 34.814442,
            long: 135.767842
        }
    },
    南丹市: {
        tj: {
            prefecture: "京都府",
            subdivisions: "南部(京都)",
            subdivisions1: "南部",
            subdivisions2: "京都",
            hourly: "https://tenki.jp/forecast/6/29/6110/26213/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "南部",
            name: "南丹市",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26213/"
        },
        hall: {
            lat: 35.107355,
            long: 135.470625
        }
    },
    木津川市: {
        tj: {
            prefecture: "京都府",
            subdivisions: "南部(京都)",
            subdivisions1: "南部",
            subdivisions2: "京都",
            hourly: "https://tenki.jp/forecast/6/29/6110/26214/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "南部",
            name: "木津川市",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26214/"
        },
        hall: {
            lat: 34.737179,
            long: 135.820058
        }
    },
    大山崎町: {
        tj: {
            prefecture: "京都府",
            subdivisions: "南部(京都)",
            subdivisions1: "南部",
            subdivisions2: "京都",
            hourly: "https://tenki.jp/forecast/6/29/6110/26303/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "南部",
            name: "大山崎町",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26303/"
        },
        hall: {
            lat: 34.902795,
            long: 135.688476
        }
    },
    久御山町: {
        tj: {
            prefecture: "京都府",
            subdivisions: "南部(京都)",
            subdivisions1: "南部",
            subdivisions2: "京都",
            hourly: "https://tenki.jp/forecast/6/29/6110/26322/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "南部",
            name: "久御山町",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26322/"
        },
        hall: {
            lat: 34.881502,
            long: 135.732564
        }
    },
    井手町: {
        tj: {
            prefecture: "京都府",
            subdivisions: "南部(京都)",
            subdivisions1: "南部",
            subdivisions2: "京都",
            hourly: "https://tenki.jp/forecast/6/29/6110/26343/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "南部",
            name: "井手町",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26343/"
        },
        hall: {
            lat: 34.800514,
            long: 135.814567
        }
    },
    宇治田原町: {
        tj: {
            prefecture: "京都府",
            subdivisions: "南部(京都)",
            subdivisions1: "南部",
            subdivisions2: "京都",
            hourly: "https://tenki.jp/forecast/6/29/6110/26344/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "南部",
            name: "宇治田原町",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26344/"
        },
        hall: {
            lat: 34.844761,
            long: 135.868108
        }
    },
    笠置町: {
        tj: {
            prefecture: "京都府",
            subdivisions: "南部(京都)",
            subdivisions1: "南部",
            subdivisions2: "京都",
            hourly: "https://tenki.jp/forecast/6/29/6110/26364/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "南部",
            name: "笠置町",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26364/"
        },
        hall: {
            lat: 34.760497,
            long: 135.939380
        }
    },
    和束町: {
        tj: {
            prefecture: "京都府",
            subdivisions: "南部(京都)",
            subdivisions1: "南部",
            subdivisions2: "京都",
            hourly: "https://tenki.jp/forecast/6/29/6110/26365/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "南部",
            name: "和束町",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26365/"
        },
        hall: {
            lat: 34.795726,
            long: 135.904866
        }
    },
    精華町: {
        tj: {
            prefecture: "京都府",
            subdivisions: "南部(京都)",
            subdivisions1: "南部",
            subdivisions2: "京都",
            hourly: "https://tenki.jp/forecast/6/29/6110/26366/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "南部",
            name: "精華町",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26366/"
        },
        hall: {
            lat: 34.760819,
            long: 135.785686
        }
    },
    南山城村: {
        tj: {
            prefecture: "京都府",
            subdivisions: "南部(京都)",
            subdivisions1: "南部",
            subdivisions2: "京都",
            hourly: "https://tenki.jp/forecast/6/29/6110/26367/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "南部",
            name: "南山城村",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26367/"
        },
        hall: {
            lat: 34.772787,
            long: 135.993665
        }
    },
    京丹波町: {
        tj: {
            prefecture: "京都府",
            subdivisions: "南部(京都)",
            subdivisions1: "南部",
            subdivisions2: "京都",
            hourly: "https://tenki.jp/forecast/6/29/6110/26407/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "南部",
            name: "京丹波町",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26407/"
        },
        hall: {
            lat: 35.169997,
            long: 135.419305
        }
    },
    福知山市: {
        tj: {
            prefecture: "京都府",
            subdivisions: "北部(舞鶴)",
            subdivisions1: "北部",
            subdivisions2: "舞鶴",
            hourly: "https://tenki.jp/forecast/6/29/6120/26201/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "北部",
            name: "福知山市",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26201/"
        },
        hall: {
            lat: 35.296725,
            long: 135.126532
        }
    },
    舞鶴市: {
        tj: {
            prefecture: "京都府",
            subdivisions: "北部(舞鶴)",
            subdivisions1: "北部",
            subdivisions2: "舞鶴",
            hourly: "https://tenki.jp/forecast/6/29/6120/26202/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "北部",
            name: "舞鶴市",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26202/"
        },
        hall: {
            lat: 35.474797,
            long: 135.385992
        }
    },
    綾部市: {
        tj: {
            prefecture: "京都府",
            subdivisions: "北部(舞鶴)",
            subdivisions1: "北部",
            subdivisions2: "舞鶴",
            hourly: "https://tenki.jp/forecast/6/29/6120/26203/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "北部",
            name: "綾部市",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26203/"
        },
        hall: {
            lat: 35.298916,
            long: 135.258812
        }
    },
    宮津市: {
        tj: {
            prefecture: "京都府",
            subdivisions: "北部(舞鶴)",
            subdivisions1: "北部",
            subdivisions2: "舞鶴",
            hourly: "https://tenki.jp/forecast/6/29/6120/26205/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "北部",
            name: "宮津市",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26205/"
        },
        hall: {
            lat: 35.535577,
            long: 135.195567
        }
    },
    京丹後市: {
        tj: {
            prefecture: "京都府",
            subdivisions: "北部(舞鶴)",
            subdivisions1: "北部",
            subdivisions2: "舞鶴",
            hourly: "https://tenki.jp/forecast/6/29/6120/26212/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "北部",
            name: "京丹後市",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26212/"
        },
        hall: {
            lat: 35.624169,
            long: 135.060997
        }
    },
    伊根町: {
        tj: {
            prefecture: "京都府",
            subdivisions: "北部(舞鶴)",
            subdivisions1: "北部",
            subdivisions2: "舞鶴",
            hourly: "https://tenki.jp/forecast/6/29/6120/26463/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "北部",
            name: "伊根町",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26463/"
        },
        hall: {
            lat: 35.675172,
            long: 135.272853
        }
    },
    与謝野町: {
        tj: {
            prefecture: "京都府",
            subdivisions: "北部(舞鶴)",
            subdivisions1: "北部",
            subdivisions2: "舞鶴",
            hourly: "https://tenki.jp/forecast/6/29/6120/26465/1hour.html"
        },
        wn: {
            prefecture: "京都",
            subdivisions: "北部",
            name: "与謝野町",
            hourly: "https://weathernews.jp/onebox/tenki/kyoto/26465/"
        },
        hall: {
            lat: 35.565375,
            long: 135.152916
        }
    },
    大阪市: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27100/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "大阪市北区",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27127/"
        },
        hall: {
            lat: 34.693891,
            long: 135.502046
        }
    },
    大阪市都島区: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27102/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "大阪市都島区",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27102/"
        },
        hall: {
            lat: 34.701279,
            long: 135.528090
        }
    },
    大阪市福島区: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27103/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "大阪市福島区",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27103/"
        },
        hall: {
            lat: 34.692357,
            long: 135.472232
        }
    },
    大阪市此花区: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27104/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "大阪市此花区",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27104/"
        },
        hall: {
            lat: 34.683038,
            long: 135.452225
        }
    },
    大阪市西区: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27106/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "大阪市西区",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27106/"
        },
        hall: {
            lat: 34.676384,
            long: 135.486111
        }
    },
    大阪市港区: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27107/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "大阪市港区",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27107/"
        },
        hall: {
            lat: 34.663918,
            long: 135.460611
        }
    },
    大阪市大正区: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27108/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "大阪市大正区",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27108/"
        },
        hall: {
            lat: 34.650417,
            long: 135.472694
        }
    },
    大阪市天王寺区: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27109/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "大阪市天王寺区",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27109/"
        },
        hall: {
            lat: 34.657869,
            long: 135.519370
        }
    },
    大阪市浪速区: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27111/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "大阪市浪速区",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27111/"
        },
        hall: {
            lat: 34.659419,
            long: 135.499550
        }
    },
    大阪市西淀川区: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27113/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "大阪市西淀川区",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27113/"
        },
        hall: {
            lat: 34.711409,
            long: 135.456202
        }
    },
    大阪市東淀川区: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27114/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "大阪市東淀川区",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27114/"
        },
        hall: {
            lat: 34.741313,
            long: 135.529340
        }
    },
    大阪市東成区: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27115/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "大阪市東成区",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27115/"
        },
        hall: {
            lat: 34.669996,
            long: 135.541223
        }
    },
    大阪市生野区: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27116/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "大阪市生野区",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27116/"
        },
        hall: {
            lat: 34.653745,
            long: 135.534447
        }
    },
    大阪市旭区: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27117/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "大阪市旭区",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27117/"
        },
        hall: {
            lat: 34.721266,
            long: 135.544142
        }
    },
    大阪市城東区: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27118/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "大阪市城東区",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27118/"
        },
        hall: {
            lat: 34.703199,
            long: 135.544812
        }
    },
    大阪市阿倍野区: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27119/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "大阪市阿倍野区",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27119/"
        },
        hall: {
            lat: 34.638969,
            long: 135.518499
        }
    },
    大阪市住吉区: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27120/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "大阪市住吉区",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27120/"
        },
        hall: {
            lat: 34.603718,
            long: 135.500498
        }
    },
    大阪市東住吉区: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27121/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "大阪市東住吉区",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27121/"
        },
        hall: {
            lat: 34.622118,
            long: 135.526612
        }
    },
    大阪市西成区: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27122/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "大阪市西成区",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27122/"
        },
        hall: {
            lat: 34.635058,
            long: 135.494587
        }
    },
    大阪市淀川区: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27123/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "大阪市淀川区",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27123/"
        },
        hall: {
            lat: 34.721006,
            long: 135.486746
        }
    },
    大阪市鶴見区: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27124/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "大阪市鶴見区",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27124/"
        },
        hall: {
            lat: 34.704566,
            long: 135.574190
        }
    },
    大阪市住之江区: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27125/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "大阪市住之江区",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27125/"
        },
        hall: {
            lat: 34.609670,
            long: 135.482717
        }
    },
    大阪市平野区: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27126/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "大阪市平野区",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27126/"
        },
        hall: {
            lat: 34.621160,
            long: 135.545999
        }
    },
    大阪市北区: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27127/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "大阪市北区",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27127/"
        },
        hall: {
            lat: 34.705581,
            long: 135.510095
        }
    },
    大阪市中央区: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27128/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "大阪市中央区",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27128/"
        },
        hall: {
            lat: 34.681225,
            long: 135.509687
        }
    },
    堺市: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27140/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "堺市堺区",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27141/"
        },
        hall: {
            lat: 34.573354,
            long: 135.483020
        }
    },
    堺市堺区: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27141/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "堺市堺区",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27141/"
        },
        hall: {
            lat: 34.573354,
            long: 135.483020
        }
    },
    堺市中区: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27142/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "堺市中区",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27142/"
        },
        hall: {
            lat: 34.528312,
            long: 135.498724
        }
    },
    堺市東区: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27143/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "堺市東区",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27143/"
        },
        hall: {
            lat: 34.538228,
            long: 135.536474
        }
    },
    堺市西区: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27144/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "堺市西区",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27144/"
        },
        hall: {
            lat: 34.535063,
            long: 135.464014
        }
    },
    堺市南区: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27145/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "堺市南区",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27145/"
        },
        hall: {
            lat: 34.486444,
            long: 135.490540
        }
    },
    堺市北区: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27146/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "堺市北区",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27146/"
        },
        hall: {
            lat: 34.565478,
            long: 135.517192
        }
    },
    堺市美原区: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27147/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "堺市美原区",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27147/"
        },
        hall: {
            lat: 34.538483,
            long: 135.559827
        }
    },
    岸和田市: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27202/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "岸和田市",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27202/"
        },
        hall: {
            lat: 34.460597,
            long: 135.370871
        }
    },
    豊中市: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27203/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "豊中市",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27203/"
        },
        hall: {
            lat: 34.781239,
            long: 135.469889
        }
    },
    池田市: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27204/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "池田市",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27204/"
        },
        hall: {
            lat: 34.821686,
            long: 135.428555
        }
    },
    吹田市: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27205/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "吹田市",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27205/"
        },
        hall: {
            lat: 34.759405,
            long: 135.516799
        }
    },
    泉大津市: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27206/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "泉大津市",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27206/"
        },
        hall: {
            lat: 34.504268,
            long: 135.410472
        }
    },
    高槻市: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27207/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "高槻市",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27207/"
        },
        hall: {
            lat: 34.846100,
            long: 135.617216
        }
    },
    貝塚市: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27208/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "貝塚市",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27208/"
        },
        hall: {
            lat: 34.437408,
            long: 135.358119
        }
    },
    守口市: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27209/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "守口市",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27209/"
        },
        hall: {
            lat: 34.735811,
            long: 135.561724
        }
    },
    枚方市: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27210/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "枚方市",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27210/"
        },
        hall: {
            lat: 34.814465,
            long: 135.650642
        }
    },
    茨木市: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27211/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "茨木市",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27211/"
        },
        hall: {
            lat: 34.816153,
            long: 135.568503
        }
    },
    八尾市: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27212/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "八尾市",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27212/"
        },
        hall: {
            lat: 34.626884,
            long: 135.600948
        }
    },
    泉佐野市: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27213/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "泉佐野市",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27213/"
        },
        hall: {
            lat: 34.406839,
            long: 135.327337
        }
    },
    富田林市: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27214/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "富田林市",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27214/"
        },
        hall: {
            lat: 34.499675,
            long: 135.597280
        }
    },
    寝屋川市: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27215/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "寝屋川市",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27215/"
        },
        hall: {
            lat: 34.766079,
            long: 135.628008
        }
    },
    河内長野市: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27216/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "河内長野市",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27216/"
        },
        hall: {
            lat: 34.458107,
            long: 135.564119
        }
    },
    松原市: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27217/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "松原市",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27217/"
        },
        hall: {
            lat: 34.577901,
            long: 135.551786
        }
    },
    大東市: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27218/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "大東市",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27218/"
        },
        hall: {
            lat: 34.712013,
            long: 135.623471
        }
    },
    和泉市: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27219/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "和泉市",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27219/"
        },
        hall: {
            lat: 34.483151,
            long: 135.423306
        }
    },
    箕面市: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27220/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "箕面市",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27220/"
        },
        hall: {
            lat: 34.826929,
            long: 135.470379
        }
    },
    柏原市: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27221/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "柏原市",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27221/"
        },
        hall: {
            lat: 34.578286,
            long: 135.629246
        }
    },
    羽曳野市: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27222/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "羽曳野市",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27222/"
        },
        hall: {
            lat: 34.558002,
            long: 135.606226
        }
    },
    門真市: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27223/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "門真市",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27223/"
        },
        hall: {
            lat: 34.739145,
            long: 135.586899
        }
    },
    摂津市: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27224/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "摂津市",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27224/"
        },
        hall: {
            lat: 34.777387,
            long: 135.561886
        }
    },
    高石市: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27225/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "高石市",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27225/"
        },
        hall: {
            lat: 34.520673,
            long: 135.442395
        }
    },
    藤井寺市: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27226/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "藤井寺市",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27226/"
        },
        hall: {
            lat: 34.574283,
            long: 135.597476
        }
    },
    東大阪市: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27227/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "東大阪市",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27227/"
        },
        hall: {
            lat: 34.679324,
            long: 135.600898
        }
    },
    泉南市: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27228/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "泉南市",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27228/"
        },
        hall: {
            lat: 34.366007,
            long: 135.273300
        }
    },
    四條畷市: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27229/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "四條畷市",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27229/"
        },
        hall: {
            lat: 34.740064,
            long: 135.639727
        }
    },
    交野市: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27230/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "交野市",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27230/"
        },
        hall: {
            lat: 34.787958,
            long: 135.679978
        }
    },
    大阪狭山市: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27231/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "大阪狭山市",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27231/"
        },
        hall: {
            lat: 34.503718,
            long: 135.555748
        }
    },
    阪南市: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27232/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "阪南市",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27232/"
        },
        hall: {
            lat: 34.359594,
            long: 135.239656
        }
    },
    島本町: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27301/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "島本町",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27301/"
        },
        hall: {
            lat: 34.883819,
            long: 135.663009
        }
    },
    豊能町: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27321/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "豊能町",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27321/"
        },
        hall: {
            lat: 34.918850,
            long: 135.494096
        }
    },
    能勢町: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27322/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "能勢町",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27322/"
        },
        hall: {
            lat: 34.973436,
            long: 135.413888
        }
    },
    忠岡町: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27341/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "忠岡町",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27341/"
        },
        hall: {
            lat: 34.487125,
            long: 135.401497
        }
    },
    熊取町: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27361/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "熊取町",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27361/"
        },
        hall: {
            lat: 34.401308,
            long: 135.355863
        }
    },
    田尻町: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27362/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "田尻町",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27362/"
        },
        hall: {
            lat: 34.393782,
            long: 135.291176
        }
    },
    岬町: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27366/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "岬町",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27366/"
        },
        hall: {
            lat: 34.316900,
            long: 135.142085
        }
    },
    太子町: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27381/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "太子町",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27381/"
        },
        hall: {
            lat: 34.518656,
            long: 135.647734
        }
    },
    河南町: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27382/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "河南町",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27382/"
        },
        hall: {
            lat: 34.491637,
            long: 135.629880
        }
    },
    千早赤阪村: {
        tj: {
            prefecture: "大阪府",
            subdivisions: "大阪府(大阪)",
            subdivisions1: "大阪府",
            subdivisions2: "大阪",
            hourly: "https://tenki.jp/forecast/6/30/6200/27383/1hour.html"
        },
        wn: {
            prefecture: "大阪",
            subdivisions: "大阪府",
            name: "千早赤阪村",
            hourly: "https://weathernews.jp/onebox/tenki/osaka/27383/"
        },
        hall: {
            lat: 34.464601,
            long: 135.622531
        }
    },
    神戸市: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28100/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "神戸市中央区",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28110/"
        },
        hall: {
            lat: 34.689495,
            long: 135.195728
        }
    },
    神戸市東灘区: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28101/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "神戸市東灘区",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28101/"
        },
        hall: {
            lat: 34.720159,
            long: 135.265429
        }
    },
    神戸市灘区: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28102/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "神戸市灘区",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28102/"
        },
        hall: {
            lat: 34.712356,
            long: 135.239571
        }
    },
    神戸市兵庫区: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28105/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "神戸市兵庫区",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28105/"
        },
        hall: {
            lat: 34.680584,
            long: 135.165383
        }
    },
    神戸市長田区: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28106/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "神戸市長田区",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28106/"
        },
        hall: {
            lat: 34.665686,
            long: 135.150854
        }
    },
    神戸市須磨区: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28107/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "神戸市須磨区",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28107/"
        },
        hall: {
            lat: 34.658634,
            long: 135.133702
        }
    },
    神戸市垂水区: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28108/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "神戸市垂水区",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28108/"
        },
        hall: {
            lat: 34.630610,
            long: 135.056919
        }
    },
    神戸市北区: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28109/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "神戸市北区",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28109/"
        },
        hall: {
            lat: 34.724205,
            long: 135.146196
        }
    },
    神戸市中央区: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28110/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "神戸市中央区",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28110/"
        },
        hall: {
            lat: 34.689702,
            long: 135.194857
        }
    },
    神戸市西区: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28111/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "神戸市西区",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28111/"
        },
        hall: {
            lat: 34.720914,
            long: 135.019337
        }
    },
    姫路市: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28201/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "姫路市",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28201/"
        },
        hall: {
            lat: 34.815496,
            long: 134.685458
        }
    },
    尼崎市: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28202/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "尼崎市",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28202/"
        },
        hall: {
            lat: 34.733554,
            long: 135.406394
        }
    },
    明石市: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28203/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "明石市",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28203/"
        },
        hall: {
            lat: 34.643109,
            long: 134.997182
        }
    },
    西宮市: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28204/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "西宮市",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28204/"
        },
        hall: {
            lat: 34.737691,
            long: 135.341830
        }
    },
    洲本市: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28205/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "洲本市",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28205/"
        },
        hall: {
            lat: 34.342522,
            long: 134.895653
        }
    },
    芦屋市: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28206/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "芦屋市",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28206/"
        },
        hall: {
            lat: 34.726522,
            long: 135.304179
        }
    },
    伊丹市: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28207/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "伊丹市",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28207/"
        },
        hall: {
            lat: 34.784568,
            long: 135.400362
        }
    },
    相生市: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28208/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "相生市",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28208/"
        },
        hall: {
            lat: 34.803662,
            long: 134.468193
        }
    },
    加古川市: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28210/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "加古川市",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28210/"
        },
        hall: {
            lat: 34.756620,
            long: 134.840900
        }
    },
    赤穂市: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28212/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "赤穂市",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28212/"
        },
        hall: {
            lat: 34.754974,
            long: 134.390354
        }
    },
    西脇市: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28213/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "西脇市",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28213/"
        },
        hall: {
            lat: 34.983430,
            long: 134.979730
        }
    },
    宝塚市: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28214/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "宝塚市",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28214/"
        },
        hall: {
            lat: 34.799817,
            long: 135.360098
        }
    },
    三木市: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28215/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "三木市",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28215/"
        },
        hall: {
            lat: 34.796922,
            long: 134.990188
        }
    },
    高砂市: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28216/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "高砂市",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28216/"
        },
        hall: {
            lat: 34.766321,
            long: 134.790509
        }
    },
    川西市: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28217/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "川西市",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28217/"
        },
        hall: {
            lat: 34.830132,
            long: 135.417222
        }
    },
    小野市: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28218/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "小野市",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28218/"
        },
        hall: {
            lat: 34.857880,
            long: 134.939881
        }
    },
    三田市: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28219/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "三田市",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28219/"
        },
        hall: {
            lat: 34.889672,
            long: 135.225290
        }
    },
    加西市: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28220/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "加西市",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28220/"
        },
        hall: {
            lat: 34.927811,
            long: 134.841819
        }
    },
    丹波篠山市: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28221/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "丹波篠山市",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28221/"
        },
        hall: {
            lat: 35.075673,
            long: 135.219002
        }
    },
    丹波市: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28223/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "丹波市",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28223/"
        },
        hall: {
            lat: 35.177259,
            long: 135.035816
        }
    },
    南あわじ市: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28224/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "南あわじ市",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28224/"
        },
        hall: {
            lat: 34.294417,
            long: 134.779952
        }
    },
    淡路市: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28226/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "淡路市",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28226/"
        },
        hall: {
            lat: 34.439847,
            long: 134.914633
        }
    },
    宍粟市: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28227/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "宍粟市",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28227/"
        },
        hall: {
            lat: 35.004435,
            long: 134.549377
        }
    },
    加東市: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28228/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "加東市",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28228/"
        },
        hall: {
            lat: 34.917370,
            long: 134.973345
        }
    },
    たつの市: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28229/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "たつの市",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28229/"
        },
        hall: {
            lat: 34.857847,
            long: 134.545397
        }
    },
    猪名川町: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28301/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "猪名川町",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28301/"
        },
        hall: {
            lat: 34.894966,
            long: 135.376164
        }
    },
    多可町: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28365/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "多可町",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28365/"
        },
        hall: {
            lat: 35.050315,
            long: 134.923359
        }
    },
    稲美町: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28381/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "稲美町",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28381/"
        },
        hall: {
            lat: 34.748627,
            long: 134.913384
        }
    },
    播磨町: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28382/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "播磨町",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28382/"
        },
        hall: {
            lat: 34.715302,
            long: 134.867911
        }
    },
    市川町: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28442/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "市川町",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28442/"
        },
        hall: {
            lat: 34.989365,
            long: 134.763289
        }
    },
    福崎町: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28443/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "福崎町",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28443/"
        },
        hall: {
            lat: 34.950319,
            long: 134.760245
        }
    },
    神河町: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28446/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "神河町",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28446/"
        },
        hall: {
            lat: 35.064235,
            long: 134.739856
        }
    },
    太子町: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28464/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "太子町",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28464/"
        },
        hall: {
            lat: 34.518656,
            long: 135.647734
        }
    },
    上郡町: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28481/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "上郡町",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28481/"
        },
        hall: {
            lat: 34.873583,
            long: 134.356098
        }
    },
    佐用町: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "南部(神戸)",
            subdivisions1: "南部",
            subdivisions2: "神戸",
            hourly: "https://tenki.jp/forecast/6/31/6310/28501/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "南部",
            name: "佐用町",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28501/"
        },
        hall: {
            lat: 35.004296,
            long: 134.355771
        }
    },
    豊岡市: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "北部(豊岡)",
            subdivisions1: "北部",
            subdivisions2: "豊岡",
            hourly: "https://tenki.jp/forecast/6/31/6320/28209/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "北部",
            name: "豊岡市",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28209/"
        },
        hall: {
            lat: 35.544475,
            long: 134.820187
        }
    },
    養父市: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "北部(豊岡)",
            subdivisions1: "北部",
            subdivisions2: "豊岡",
            hourly: "https://tenki.jp/forecast/6/31/6320/28222/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "北部",
            name: "養父市",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28222/"
        },
        hall: {
            lat: 35.404640,
            long: 134.767668
        }
    },
    朝来市: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "北部(豊岡)",
            subdivisions1: "北部",
            subdivisions2: "豊岡",
            hourly: "https://tenki.jp/forecast/6/31/6320/28225/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "北部",
            name: "朝来市",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28225/"
        },
        hall: {
            lat: 35.339835,
            long: 134.853117
        }
    },
    香美町: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "北部(豊岡)",
            subdivisions1: "北部",
            subdivisions2: "豊岡",
            hourly: "https://tenki.jp/forecast/6/31/6320/28585/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "北部",
            name: "香美町",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28585/"
        },
        hall: {
            lat: 35.632169,
            long: 134.629175
        }
    },
    新温泉町: {
        tj: {
            prefecture: "兵庫県",
            subdivisions: "北部(豊岡)",
            subdivisions1: "北部",
            subdivisions2: "豊岡",
            hourly: "https://tenki.jp/forecast/6/31/6320/28586/1hour.html"
        },
        wn: {
            prefecture: "兵庫",
            subdivisions: "北部",
            name: "新温泉町",
            hourly: "https://weathernews.jp/onebox/tenki/hyogo/28586/"
        },
        hall: {
            lat: 35.623509,
            long: 134.448942
        }
    },
    奈良市: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "北部(奈良)",
            subdivisions1: "北部",
            subdivisions2: "奈良",
            hourly: "https://tenki.jp/forecast/6/32/6410/29201/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "北部",
            name: "奈良市",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29201/"
        },
        hall: {
            lat: 34.685117,
            long: 135.804995
        }
    },
    大和高田市: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "北部(奈良)",
            subdivisions1: "北部",
            subdivisions2: "奈良",
            hourly: "https://tenki.jp/forecast/6/32/6410/29202/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "北部",
            name: "大和高田市",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29202/"
        },
        hall: {
            lat: 34.515750,
            long: 135.737387
        }
    },
    大和郡山市: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "北部(奈良)",
            subdivisions1: "北部",
            subdivisions2: "奈良",
            hourly: "https://tenki.jp/forecast/6/32/6410/29203/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "北部",
            name: "大和郡山市",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29203/"
        },
        hall: {
            lat: 34.649616,
            long: 135.782715
        }
    },
    天理市: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "北部(奈良)",
            subdivisions1: "北部",
            subdivisions2: "奈良",
            hourly: "https://tenki.jp/forecast/6/32/6410/29204/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "北部",
            name: "天理市",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29204/"
        },
        hall: {
            lat: 34.596617,
            long: 135.837367
        }
    },
    橿原市: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "北部(奈良)",
            subdivisions1: "北部",
            subdivisions2: "奈良",
            hourly: "https://tenki.jp/forecast/6/32/6410/29205/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "北部",
            name: "橿原市",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29205/"
        },
        hall: {
            lat: 34.509453,
            long: 135.792756
        }
    },
    桜井市: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "北部(奈良)",
            subdivisions1: "北部",
            subdivisions2: "奈良",
            hourly: "https://tenki.jp/forecast/6/32/6410/29206/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "北部",
            name: "桜井市",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29206/"
        },
        hall: {
            lat: 34.518840,
            long: 135.842740
        }
    },
    五條市: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "北部(奈良)",
            subdivisions1: "北部",
            subdivisions2: "奈良",
            hourly: "https://tenki.jp/forecast/6/32/6410/29207/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "南部",
            name: "五條市",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29207/"
        },
        hall: {
            lat: 34.356358,
            long: 135.695556
        }
    },
    御所市: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "北部(奈良)",
            subdivisions1: "北部",
            subdivisions2: "奈良",
            hourly: "https://tenki.jp/forecast/6/32/6410/29208/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "北部",
            name: "御所市",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29208/"
        },
        hall: {
            lat: 34.463340,
            long: 135.740177
        }
    },
    生駒市: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "北部(奈良)",
            subdivisions1: "北部",
            subdivisions2: "奈良",
            hourly: "https://tenki.jp/forecast/6/32/6410/29209/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "北部",
            name: "生駒市",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29209/"
        },
        hall: {
            lat: 34.691979,
            long: 135.700553
        }
    },
    香芝市: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "北部(奈良)",
            subdivisions1: "北部",
            subdivisions2: "奈良",
            hourly: "https://tenki.jp/forecast/6/32/6410/29210/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "北部",
            name: "香芝市",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29210/"
        },
        hall: {
            lat: 34.541295,
            long: 135.699162
        }
    },
    葛城市: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "北部(奈良)",
            subdivisions1: "北部",
            subdivisions2: "奈良",
            hourly: "https://tenki.jp/forecast/6/32/6410/29211/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "北部",
            name: "葛城市",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29211/"
        },
        hall: {
            lat: 34.489158,
            long: 135.726563
        }
    },
    宇陀市: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "北部(奈良)",
            subdivisions1: "北部",
            subdivisions2: "奈良",
            hourly: "https://tenki.jp/forecast/6/32/6410/29212/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "北部",
            name: "宇陀市",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29212/"
        },
        hall: {
            lat: 34.528073,
            long: 135.952303
        }
    },
    山添村: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "北部(奈良)",
            subdivisions1: "北部",
            subdivisions2: "奈良",
            hourly: "https://tenki.jp/forecast/6/32/6410/29322/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "北部",
            name: "山添村",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29322/"
        },
        hall: {
            lat: 34.681261,
            long: 136.043797
        }
    },
    平群町: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "北部(奈良)",
            subdivisions1: "北部",
            subdivisions2: "奈良",
            hourly: "https://tenki.jp/forecast/6/32/6410/29342/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "北部",
            name: "平群町",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29342/"
        },
        hall: {
            lat: 34.629155,
            long: 135.700711
        }
    },
    三郷町: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "北部(奈良)",
            subdivisions1: "北部",
            subdivisions2: "奈良",
            hourly: "https://tenki.jp/forecast/6/32/6410/29343/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "北部",
            name: "三郷町",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29343/"
        },
        hall: {
            lat: 34.599977,
            long: 135.695425
        }
    },
    斑鳩町: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "北部(奈良)",
            subdivisions1: "北部",
            subdivisions2: "奈良",
            hourly: "https://tenki.jp/forecast/6/32/6410/29344/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "北部",
            name: "斑鳩町",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29344/"
        },
        hall: {
            lat: 34.608852,
            long: 135.730593
        }
    },
    安堵町: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "北部(奈良)",
            subdivisions1: "北部",
            subdivisions2: "奈良",
            hourly: "https://tenki.jp/forecast/6/32/6410/29345/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "北部",
            name: "安堵町",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29345/"
        },
        hall: {
            lat: 34.606488,
            long: 135.756781
        }
    },
    川西町: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "北部(奈良)",
            subdivisions1: "北部",
            subdivisions2: "奈良",
            hourly: "https://tenki.jp/forecast/6/32/6410/29361/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "北部",
            name: "川西町",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29361/"
        },
        hall: {
            lat: 38.005203,
            long: 140.053181
        }
    },
    三宅町: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "北部(奈良)",
            subdivisions1: "北部",
            subdivisions2: "奈良",
            hourly: "https://tenki.jp/forecast/6/32/6410/29362/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "北部",
            name: "三宅町",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29362/"
        },
        hall: {
            lat: 34.573678,
            long: 135.773177
        }
    },
    田原本町: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "北部(奈良)",
            subdivisions1: "北部",
            subdivisions2: "奈良",
            hourly: "https://tenki.jp/forecast/6/32/6410/29363/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "北部",
            name: "田原本町",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29363/"
        },
        hall: {
            lat: 34.556667,
            long: 135.794940
        }
    },
    高取町: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "北部(奈良)",
            subdivisions1: "北部",
            subdivisions2: "奈良",
            hourly: "https://tenki.jp/forecast/6/32/6410/29401/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "北部",
            name: "高取町",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29401/"
        },
        hall: {
            lat: 34.449468,
            long: 135.793168
        }
    },
    明日香村: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "北部(奈良)",
            subdivisions1: "北部",
            subdivisions2: "奈良",
            hourly: "https://tenki.jp/forecast/6/32/6410/29402/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "北部",
            name: "明日香村",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29402/"
        },
        hall: {
            lat: 34.470509,
            long: 135.812540
        }
    },
    上牧町: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "北部(奈良)",
            subdivisions1: "北部",
            subdivisions2: "奈良",
            hourly: "https://tenki.jp/forecast/6/32/6410/29424/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "北部",
            name: "上牧町",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29424/"
        },
        hall: {
            lat: 34.562723,
            long: 135.716674
        }
    },
    王寺町: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "北部(奈良)",
            subdivisions1: "北部",
            subdivisions2: "奈良",
            hourly: "https://tenki.jp/forecast/6/32/6410/29425/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "北部",
            name: "王寺町",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29425/"
        },
        hall: {
            lat: 34.594696,
            long: 135.706705
        }
    },
    広陵町: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "北部(奈良)",
            subdivisions1: "北部",
            subdivisions2: "奈良",
            hourly: "https://tenki.jp/forecast/6/32/6410/29426/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "北部",
            name: "広陵町",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29426/"
        },
        hall: {
            lat: 34.542740,
            long: 135.750842
        }
    },
    河合町: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "北部(奈良)",
            subdivisions1: "北部",
            subdivisions2: "奈良",
            hourly: "https://tenki.jp/forecast/6/32/6410/29427/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "北部",
            name: "河合町",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29427/"
        },
        hall: {
            lat: 34.578369,
            long: 135.736699
        }
    },
    吉野町: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "北部(奈良)",
            subdivisions1: "北部",
            subdivisions2: "奈良",
            hourly: "https://tenki.jp/forecast/6/32/6410/29441/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "北部",
            name: "吉野町",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29441/"
        },
        hall: {
            lat: 34.396046,
            long: 135.857612
        }
    },
    大淀町: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "北部(奈良)",
            subdivisions1: "北部",
            subdivisions2: "奈良",
            hourly: "https://tenki.jp/forecast/6/32/6410/29442/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "北部",
            name: "大淀町",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29442/"
        },
        hall: {
            lat: 34.390529,
            long: 135.789798
        }
    },
    下市町: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "北部(奈良)",
            subdivisions1: "北部",
            subdivisions2: "奈良",
            hourly: "https://tenki.jp/forecast/6/32/6410/29443/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "北部",
            name: "下市町",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29443/"
        },
        hall: {
            lat: 34.360951,
            long: 135.791872
        }
    },
    曽爾村: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "南部(風屋)",
            subdivisions1: "南部",
            subdivisions2: "風屋",
            hourly: "https://tenki.jp/forecast/6/32/6420/29385/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "南部",
            name: "曽爾村",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29385/"
        },
        hall: {
            lat: 34.510664,
            long: 136.124475
        }
    },
    御杖村: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "南部(風屋)",
            subdivisions1: "南部",
            subdivisions2: "風屋",
            hourly: "https://tenki.jp/forecast/6/32/6420/29386/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "南部",
            name: "御杖村",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29386/"
        },
        hall: {
            lat: 34.488391,
            long: 136.165910
        }
    },
    黒滝村: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "南部(風屋)",
            subdivisions1: "南部",
            subdivisions2: "風屋",
            hourly: "https://tenki.jp/forecast/6/32/6420/29444/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "南部",
            name: "黒滝村",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29444/"
        },
        hall: {
            lat: 34.309276,
            long: 135.852250
        }
    },
    天川村: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "南部(風屋)",
            subdivisions1: "南部",
            subdivisions2: "風屋",
            hourly: "https://tenki.jp/forecast/6/32/6420/29446/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "南部",
            name: "天川村",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29446/"
        },
        hall: {
            lat: 34.241929,
            long: 135.855135
        }
    },
    野迫川村: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "南部(風屋)",
            subdivisions1: "南部",
            subdivisions2: "風屋",
            hourly: "https://tenki.jp/forecast/6/32/6420/29447/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "南部",
            name: "野迫川村",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29447/"
        },
        hall: {
            lat: 34.166293,
            long: 135.633030
        }
    },
    十津川村: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "南部(風屋)",
            subdivisions1: "南部",
            subdivisions2: "風屋",
            hourly: "https://tenki.jp/forecast/6/32/6420/29449/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "南部",
            name: "十津川村",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29449/"
        },
        hall: {
            lat: 33.988504,
            long: 135.792611
        }
    },
    下北山村: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "南部(風屋)",
            subdivisions1: "南部",
            subdivisions2: "風屋",
            hourly: "https://tenki.jp/forecast/6/32/6420/29450/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "南部",
            name: "下北山村",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29450/"
        },
        hall: {
            lat: 34.005080,
            long: 135.955178
        }
    },
    上北山村: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "南部(風屋)",
            subdivisions1: "南部",
            subdivisions2: "風屋",
            hourly: "https://tenki.jp/forecast/6/32/6420/29451/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "南部",
            name: "上北山村",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29451/"
        },
        hall: {
            lat: 34.134321,
            long: 136.000149
        }
    },
    川上村: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "南部(風屋)",
            subdivisions1: "南部",
            subdivisions2: "風屋",
            hourly: "https://tenki.jp/forecast/6/32/6420/29452/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "南部",
            name: "川上村",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29452/"
        },
        hall: {
            lat: 35.975136,
            long: 138.578477
        }
    },
    東吉野村: {
        tj: {
            prefecture: "奈良県",
            subdivisions: "南部(風屋)",
            subdivisions1: "南部",
            subdivisions2: "風屋",
            hourly: "https://tenki.jp/forecast/6/32/6420/29453/1hour.html"
        },
        wn: {
            prefecture: "奈良",
            subdivisions: "南部",
            name: "東吉野村",
            hourly: "https://weathernews.jp/onebox/tenki/nara/29453/"
        },
        hall: {
            lat: 34.403541,
            long: 135.968307
        }
    },
    和歌山市: {
        tj: {
            prefecture: "和歌山県",
            subdivisions: "北部(和歌山)",
            subdivisions1: "北部",
            subdivisions2: "和歌山",
            hourly: "https://tenki.jp/forecast/6/33/6510/30201/1hour.html"
        },
        wn: {
            prefecture: "和歌山",
            subdivisions: "北部",
            name: "和歌山市",
            hourly: "https://weathernews.jp/onebox/tenki/wakayama/30201/"
        },
        hall: {
            lat: 34.230514,
            long: 135.170808
        }
    },
    海南市: {
        tj: {
            prefecture: "和歌山県",
            subdivisions: "北部(和歌山)",
            subdivisions1: "北部",
            subdivisions2: "和歌山",
            hourly: "https://tenki.jp/forecast/6/33/6510/30202/1hour.html"
        },
        wn: {
            prefecture: "和歌山",
            subdivisions: "北部",
            name: "海南市",
            hourly: "https://weathernews.jp/onebox/tenki/wakayama/30202/"
        },
        hall: {
            lat: 34.157533,
            long: 135.239675
        }
    },
    橋本市: {
        tj: {
            prefecture: "和歌山県",
            subdivisions: "北部(和歌山)",
            subdivisions1: "北部",
            subdivisions2: "和歌山",
            hourly: "https://tenki.jp/forecast/6/33/6510/30203/1hour.html"
        },
        wn: {
            prefecture: "和歌山",
            subdivisions: "北部",
            name: "橋本市",
            hourly: "https://weathernews.jp/onebox/tenki/wakayama/30203/"
        },
        hall: {
            lat: 34.314876,
            long: 135.605208
        }
    },
    有田市: {
        tj: {
            prefecture: "和歌山県",
            subdivisions: "北部(和歌山)",
            subdivisions1: "北部",
            subdivisions2: "和歌山",
            hourly: "https://tenki.jp/forecast/6/33/6510/30204/1hour.html"
        },
        wn: {
            prefecture: "和歌山",
            subdivisions: "北部",
            name: "有田市",
            hourly: "https://weathernews.jp/onebox/tenki/wakayama/30204/"
        },
        hall: {
            lat: 34.083104,
            long: 135.127727
        }
    },
    御坊市: {
        tj: {
            prefecture: "和歌山県",
            subdivisions: "北部(和歌山)",
            subdivisions1: "北部",
            subdivisions2: "和歌山",
            hourly: "https://tenki.jp/forecast/6/33/6510/30205/1hour.html"
        },
        wn: {
            prefecture: "和歌山",
            subdivisions: "北部",
            name: "御坊市",
            hourly: "https://weathernews.jp/onebox/tenki/wakayama/30205/"
        },
        hall: {
            lat: 33.891412,
            long: 135.152406
        }
    },
    紀の川市: {
        tj: {
            prefecture: "和歌山県",
            subdivisions: "北部(和歌山)",
            subdivisions1: "北部",
            subdivisions2: "和歌山",
            hourly: "https://tenki.jp/forecast/6/33/6510/30208/1hour.html"
        },
        wn: {
            prefecture: "和歌山",
            subdivisions: "北部",
            name: "紀の川市",
            hourly: "https://weathernews.jp/onebox/tenki/wakayama/30208/"
        },
        hall: {
            lat: 34.269538,
            long: 135.362576
        }
    },
    岩出市: {
        tj: {
            prefecture: "和歌山県",
            subdivisions: "北部(和歌山)",
            subdivisions1: "北部",
            subdivisions2: "和歌山",
            hourly: "https://tenki.jp/forecast/6/33/6510/30209/1hour.html"
        },
        wn: {
            prefecture: "和歌山",
            subdivisions: "北部",
            name: "岩出市",
            hourly: "https://weathernews.jp/onebox/tenki/wakayama/30209/"
        },
        hall: {
            lat: 34.256267,
            long: 135.311451
        }
    },
    紀美野町: {
        tj: {
            prefecture: "和歌山県",
            subdivisions: "北部(和歌山)",
            subdivisions1: "北部",
            subdivisions2: "和歌山",
            hourly: "https://tenki.jp/forecast/6/33/6510/30304/1hour.html"
        },
        wn: {
            prefecture: "和歌山",
            subdivisions: "北部",
            name: "紀美野町",
            hourly: "https://weathernews.jp/onebox/tenki/wakayama/30304/"
        },
        hall: {
            lat: 34.167192,
            long: 135.307575
        }
    },
    かつらぎ町: {
        tj: {
            prefecture: "和歌山県",
            subdivisions: "北部(和歌山)",
            subdivisions1: "北部",
            subdivisions2: "和歌山",
            hourly: "https://tenki.jp/forecast/6/33/6510/30341/1hour.html"
        },
        wn: {
            prefecture: "和歌山",
            subdivisions: "北部",
            name: "かつらぎ町",
            hourly: "https://weathernews.jp/onebox/tenki/wakayama/30341/"
        },
        hall: {
            lat: 34.296416,
            long: 135.503802
        }
    },
    九度山町: {
        tj: {
            prefecture: "和歌山県",
            subdivisions: "北部(和歌山)",
            subdivisions1: "北部",
            subdivisions2: "和歌山",
            hourly: "https://tenki.jp/forecast/6/33/6510/30343/1hour.html"
        },
        wn: {
            prefecture: "和歌山",
            subdivisions: "北部",
            name: "九度山町",
            hourly: "https://weathernews.jp/onebox/tenki/wakayama/30343/"
        },
        hall: {
            lat: 34.287192,
            long: 135.562242
        }
    },
    高野町: {
        tj: {
            prefecture: "和歌山県",
            subdivisions: "北部(和歌山)",
            subdivisions1: "北部",
            subdivisions2: "和歌山",
            hourly: "https://tenki.jp/forecast/6/33/6510/30344/1hour.html"
        },
        wn: {
            prefecture: "和歌山",
            subdivisions: "北部",
            name: "高野町",
            hourly: "https://weathernews.jp/onebox/tenki/wakayama/30344/"
        },
        hall: {
            lat: 34.216077,
            long: 135.586536
        }
    },
    湯浅町: {
        tj: {
            prefecture: "和歌山県",
            subdivisions: "北部(和歌山)",
            subdivisions1: "北部",
            subdivisions2: "和歌山",
            hourly: "https://tenki.jp/forecast/6/33/6510/30361/1hour.html"
        },
        wn: {
            prefecture: "和歌山",
            subdivisions: "北部",
            name: "湯浅町",
            hourly: "https://weathernews.jp/onebox/tenki/wakayama/30361/"
        },
        hall: {
            lat: 34.029418,
            long: 135.190427
        }
    },
    広川町: {
        tj: {
            prefecture: "和歌山県",
            subdivisions: "北部(和歌山)",
            subdivisions1: "北部",
            subdivisions2: "和歌山",
            hourly: "https://tenki.jp/forecast/6/33/6510/30362/1hour.html"
        },
        wn: {
            prefecture: "和歌山",
            subdivisions: "北部",
            name: "広川町",
            hourly: "https://weathernews.jp/onebox/tenki/wakayama/30362/"
        },
        hall: {
            lat: 34.029957,
            long: 135.173072
        }
    },
    有田川町: {
        tj: {
            prefecture: "和歌山県",
            subdivisions: "北部(和歌山)",
            subdivisions1: "北部",
            subdivisions2: "和歌山",
            hourly: "https://tenki.jp/forecast/6/33/6510/30366/1hour.html"
        },
        wn: {
            prefecture: "和歌山",
            subdivisions: "北部",
            name: "有田川町",
            hourly: "https://weathernews.jp/onebox/tenki/wakayama/30366/"
        },
        hall: {
            lat: 34.057488,
            long: 135.216116
        }
    },
    美浜町: {
        tj: {
            prefecture: "和歌山県",
            subdivisions: "北部(和歌山)",
            subdivisions1: "北部",
            subdivisions2: "和歌山",
            hourly: "https://tenki.jp/forecast/6/33/6510/30381/1hour.html"
        },
        wn: {
            prefecture: "和歌山",
            subdivisions: "北部",
            name: "美浜町",
            hourly: "https://weathernews.jp/onebox/tenki/wakayama/30381/"
        },
        hall: {
            lat: 35.600600,
            long: 135.940619
        }
    },
    日高町: {
        tj: {
            prefecture: "和歌山県",
            subdivisions: "北部(和歌山)",
            subdivisions1: "北部",
            subdivisions2: "和歌山",
            hourly: "https://tenki.jp/forecast/6/33/6510/30382/1hour.html"
        },
        wn: {
            prefecture: "和歌山",
            subdivisions: "北部",
            name: "日高町",
            hourly: "https://weathernews.jp/onebox/tenki/wakayama/30382/"
        },
        hall: {
            lat: 42.480318,
            long: 142.074359
        }
    },
    由良町: {
        tj: {
            prefecture: "和歌山県",
            subdivisions: "北部(和歌山)",
            subdivisions1: "北部",
            subdivisions2: "和歌山",
            hourly: "https://tenki.jp/forecast/6/33/6510/30383/1hour.html"
        },
        wn: {
            prefecture: "和歌山",
            subdivisions: "北部",
            name: "由良町",
            hourly: "https://weathernews.jp/onebox/tenki/wakayama/30383/"
        },
        hall: {
            lat: 33.959251,
            long: 135.118187
        }
    },
    印南町: {
        tj: {
            prefecture: "和歌山県",
            subdivisions: "北部(和歌山)",
            subdivisions1: "北部",
            subdivisions2: "和歌山",
            hourly: "https://tenki.jp/forecast/6/33/6510/30390/1hour.html"
        },
        wn: {
            prefecture: "和歌山",
            subdivisions: "北部",
            name: "印南町",
            hourly: "https://weathernews.jp/onebox/tenki/wakayama/30390/"
        },
        hall: {
            lat: 33.819533,
            long: 135.222515
        }
    },
    みなべ町: {
        tj: {
            prefecture: "和歌山県",
            subdivisions: "北部(和歌山)",
            subdivisions1: "北部",
            subdivisions2: "和歌山",
            hourly: "https://tenki.jp/forecast/6/33/6510/30391/1hour.html"
        },
        wn: {
            prefecture: "和歌山",
            subdivisions: "北部",
            name: "みなべ町",
            hourly: "https://weathernews.jp/onebox/tenki/wakayama/30391/"
        },
        hall: {
            lat: 33.772333,
            long: 135.321434
        }
    },
    日高川町: {
        tj: {
            prefecture: "和歌山県",
            subdivisions: "北部(和歌山)",
            subdivisions1: "北部",
            subdivisions2: "和歌山",
            hourly: "https://tenki.jp/forecast/6/33/6510/30392/1hour.html"
        },
        wn: {
            prefecture: "和歌山",
            subdivisions: "北部",
            name: "日高川町",
            hourly: "https://weathernews.jp/onebox/tenki/wakayama/30392/"
        },
        hall: {
            lat: 33.911693,
            long: 135.186000
        }
    },
    田辺市: {
        tj: {
            prefecture: "和歌山県",
            subdivisions: "南部(潮岬)",
            subdivisions1: "南部",
            subdivisions2: "潮岬",
            hourly: "https://tenki.jp/forecast/6/33/6520/30206/1hour.html"
        },
        wn: {
            prefecture: "和歌山",
            subdivisions: "南部",
            name: "田辺市",
            hourly: "https://weathernews.jp/onebox/tenki/wakayama/30206/"
        },
        hall: {
            lat: 33.728010,
            long: 135.377662
        }
    },
    新宮市: {
        tj: {
            prefecture: "和歌山県",
            subdivisions: "南部(潮岬)",
            subdivisions1: "南部",
            subdivisions2: "潮岬",
            hourly: "https://tenki.jp/forecast/6/33/6520/30207/1hour.html"
        },
        wn: {
            prefecture: "和歌山",
            subdivisions: "南部",
            name: "新宮市",
            hourly: "https://weathernews.jp/onebox/tenki/wakayama/30207/"
        },
        hall: {
            lat: 33.724224,
            long: 135.992525
        }
    },
    白浜町: {
        tj: {
            prefecture: "和歌山県",
            subdivisions: "南部(潮岬)",
            subdivisions1: "南部",
            subdivisions2: "潮岬",
            hourly: "https://tenki.jp/forecast/6/33/6520/30401/1hour.html"
        },
        wn: {
            prefecture: "和歌山",
            subdivisions: "南部",
            name: "白浜町",
            hourly: "https://weathernews.jp/onebox/tenki/wakayama/30401/"
        },
        hall: {
            lat: 33.678188,
            long: 135.348108
        }
    },
    上富田町: {
        tj: {
            prefecture: "和歌山県",
            subdivisions: "南部(潮岬)",
            subdivisions1: "南部",
            subdivisions2: "潮岬",
            hourly: "https://tenki.jp/forecast/6/33/6520/30404/1hour.html"
        },
        wn: {
            prefecture: "和歌山",
            subdivisions: "南部",
            name: "上富田町",
            hourly: "https://weathernews.jp/onebox/tenki/wakayama/30404/"
        },
        hall: {
            lat: 33.696352,
            long: 135.428802
        }
    },
    すさみ町: {
        tj: {
            prefecture: "和歌山県",
            subdivisions: "南部(潮岬)",
            subdivisions1: "南部",
            subdivisions2: "潮岬",
            hourly: "https://tenki.jp/forecast/6/33/6520/30406/1hour.html"
        },
        wn: {
            prefecture: "和歌山",
            subdivisions: "南部",
            name: "すさみ町",
            hourly: "https://weathernews.jp/onebox/tenki/wakayama/30406/"
        },
        hall: {
            lat: 33.550062,
            long: 135.496678
        }
    },
    那智勝浦町: {
        tj: {
            prefecture: "和歌山県",
            subdivisions: "南部(潮岬)",
            subdivisions1: "南部",
            subdivisions2: "潮岬",
            hourly: "https://tenki.jp/forecast/6/33/6520/30421/1hour.html"
        },
        wn: {
            prefecture: "和歌山",
            subdivisions: "南部",
            name: "那智勝浦町",
            hourly: "https://weathernews.jp/onebox/tenki/wakayama/30421/"
        },
        hall: {
            lat: 33.625988,
            long: 135.941042
        }
    },
    太地町: {
        tj: {
            prefecture: "和歌山県",
            subdivisions: "南部(潮岬)",
            subdivisions1: "南部",
            subdivisions2: "潮岬",
            hourly: "https://tenki.jp/forecast/6/33/6520/30422/1hour.html"
        },
        wn: {
            prefecture: "和歌山",
            subdivisions: "南部",
            name: "太地町",
            hourly: "https://weathernews.jp/onebox/tenki/wakayama/30422/"
        },
        hall: {
            lat: 33.594037,
            long: 135.943964
        }
    },
    古座川町: {
        tj: {
            prefecture: "和歌山県",
            subdivisions: "南部(潮岬)",
            subdivisions1: "南部",
            subdivisions2: "潮岬",
            hourly: "https://tenki.jp/forecast/6/33/6520/30424/1hour.html"
        },
        wn: {
            prefecture: "和歌山",
            subdivisions: "南部",
            name: "古座川町",
            hourly: "https://weathernews.jp/onebox/tenki/wakayama/30424/"
        },
        hall: {
            lat: 33.531990,
            long: 135.814999
        }
    },
    北山村: {
        tj: {
            prefecture: "和歌山県",
            subdivisions: "南部(潮岬)",
            subdivisions1: "南部",
            subdivisions2: "潮岬",
            hourly: "https://tenki.jp/forecast/6/33/6520/30427/1hour.html"
        },
        wn: {
            prefecture: "和歌山",
            subdivisions: "南部",
            name: "北山村",
            hourly: "https://weathernews.jp/onebox/tenki/wakayama/30427/"
        },
        hall: {
            lat: 33.932100,
            long: 135.969303
        }
    },
    串本町: {
        tj: {
            prefecture: "和歌山県",
            subdivisions: "南部(潮岬)",
            subdivisions1: "南部",
            subdivisions2: "潮岬",
            hourly: "https://tenki.jp/forecast/6/33/6520/30428/1hour.html"
        },
        wn: {
            prefecture: "和歌山",
            subdivisions: "南部",
            name: "串本町",
            hourly: "https://weathernews.jp/onebox/tenki/wakayama/30428/"
        },
        hall: {
            lat: 33.485686,
            long: 135.787016
        }
    },
    鳥取市: {
        tj: {
            prefecture: "鳥取県",
            subdivisions: "東部(鳥取)",
            subdivisions1: "東部",
            subdivisions2: "鳥取",
            hourly: "https://tenki.jp/forecast/7/34/6910/31201/1hour.html"
        },
        wn: {
            prefecture: "鳥取",
            subdivisions: "東部",
            name: "鳥取市",
            hourly: "https://weathernews.jp/onebox/tenki/tottori/31201/"
        },
        hall: {
            lat: 35.494452,
            long: 134.222154
        }
    },
    岩美町: {
        tj: {
            prefecture: "鳥取県",
            subdivisions: "東部(鳥取)",
            subdivisions1: "東部",
            subdivisions2: "鳥取",
            hourly: "https://tenki.jp/forecast/7/34/6910/31302/1hour.html"
        },
        wn: {
            prefecture: "鳥取",
            subdivisions: "東部",
            name: "岩美町",
            hourly: "https://weathernews.jp/onebox/tenki/tottori/31302/"
        },
        hall: {
            lat: 35.575896,
            long: 134.332087
        }
    },
    若桜町: {
        tj: {
            prefecture: "鳥取県",
            subdivisions: "東部(鳥取)",
            subdivisions1: "東部",
            subdivisions2: "鳥取",
            hourly: "https://tenki.jp/forecast/7/34/6910/31325/1hour.html"
        },
        wn: {
            prefecture: "鳥取",
            subdivisions: "東部",
            name: "若桜町",
            hourly: "https://weathernews.jp/onebox/tenki/tottori/31325/"
        },
        hall: {
            lat: 35.340149,
            long: 134.400992
        }
    },
    智頭町: {
        tj: {
            prefecture: "鳥取県",
            subdivisions: "東部(鳥取)",
            subdivisions1: "東部",
            subdivisions2: "鳥取",
            hourly: "https://tenki.jp/forecast/7/34/6910/31328/1hour.html"
        },
        wn: {
            prefecture: "鳥取",
            subdivisions: "東部",
            name: "智頭町",
            hourly: "https://weathernews.jp/onebox/tenki/tottori/31328/"
        },
        hall: {
            lat: 35.265081,
            long: 134.226587
        }
    },
    八頭町: {
        tj: {
            prefecture: "鳥取県",
            subdivisions: "東部(鳥取)",
            subdivisions1: "東部",
            subdivisions2: "鳥取",
            hourly: "https://tenki.jp/forecast/7/34/6910/31329/1hour.html"
        },
        wn: {
            prefecture: "鳥取",
            subdivisions: "東部",
            name: "八頭町",
            hourly: "https://weathernews.jp/onebox/tenki/tottori/31329/"
        },
        hall: {
            lat: 35.409211,
            long: 134.250526
        }
    },
    米子市: {
        tj: {
            prefecture: "鳥取県",
            subdivisions: "中・西部(米子)",
            subdivisions1: "中・西部",
            subdivisions2: "米子",
            hourly: "https://tenki.jp/forecast/7/34/6920/31202/1hour.html"
        },
        wn: {
            prefecture: "鳥取",
            subdivisions: "中・西部",
            name: "米子市",
            hourly: "https://weathernews.jp/onebox/tenki/tottori/31202/"
        },
        hall: {
            lat: 35.428136,
            long: 133.330939
        }
    },
    倉吉市: {
        tj: {
            prefecture: "鳥取県",
            subdivisions: "中・西部(米子)",
            subdivisions1: "中・西部",
            subdivisions2: "米子",
            hourly: "https://tenki.jp/forecast/7/34/6920/31203/1hour.html"
        },
        wn: {
            prefecture: "鳥取",
            subdivisions: "中・西部",
            name: "倉吉市",
            hourly: "https://weathernews.jp/onebox/tenki/tottori/31203/"
        },
        hall: {
            lat: 35.430182,
            long: 133.825561
        }
    },
    境港市: {
        tj: {
            prefecture: "鳥取県",
            subdivisions: "中・西部(米子)",
            subdivisions1: "中・西部",
            subdivisions2: "米子",
            hourly: "https://tenki.jp/forecast/7/34/6920/31204/1hour.html"
        },
        wn: {
            prefecture: "鳥取",
            subdivisions: "中・西部",
            name: "境港市",
            hourly: "https://weathernews.jp/onebox/tenki/tottori/31204/"
        },
        hall: {
            lat: 35.539606,
            long: 133.231600
        }
    },
    三朝町: {
        tj: {
            prefecture: "鳥取県",
            subdivisions: "中・西部(米子)",
            subdivisions1: "中・西部",
            subdivisions2: "米子",
            hourly: "https://tenki.jp/forecast/7/34/6920/31364/1hour.html"
        },
        wn: {
            prefecture: "鳥取",
            subdivisions: "中・西部",
            name: "三朝町",
            hourly: "https://weathernews.jp/onebox/tenki/tottori/31364/"
        },
        hall: {
            lat: 35.408461,
            long: 133.861742
        }
    },
    湯梨浜町: {
        tj: {
            prefecture: "鳥取県",
            subdivisions: "中・西部(米子)",
            subdivisions1: "中・西部",
            subdivisions2: "米子",
            hourly: "https://tenki.jp/forecast/7/34/6920/31370/1hour.html"
        },
        wn: {
            prefecture: "鳥取",
            subdivisions: "中・西部",
            name: "湯梨浜町",
            hourly: "https://weathernews.jp/onebox/tenki/tottori/31370/"
        },
        hall: {
            lat: 35.489915,
            long: 133.864681
        }
    },
    琴浦町: {
        tj: {
            prefecture: "鳥取県",
            subdivisions: "中・西部(米子)",
            subdivisions1: "中・西部",
            subdivisions2: "米子",
            hourly: "https://tenki.jp/forecast/7/34/6920/31371/1hour.html"
        },
        wn: {
            prefecture: "鳥取",
            subdivisions: "中・西部",
            name: "琴浦町",
            hourly: "https://weathernews.jp/onebox/tenki/tottori/31371/"
        },
        hall: {
            lat: 35.495184,
            long: 133.692779
        }
    },
    北栄町: {
        tj: {
            prefecture: "鳥取県",
            subdivisions: "中・西部(米子)",
            subdivisions1: "中・西部",
            subdivisions2: "米子",
            hourly: "https://tenki.jp/forecast/7/34/6920/31372/1hour.html"
        },
        wn: {
            prefecture: "鳥取",
            subdivisions: "中・西部",
            name: "北栄町",
            hourly: "https://weathernews.jp/onebox/tenki/tottori/31372/"
        },
        hall: {
            lat: 35.490011,
            long: 133.758294
        }
    },
    日吉津村: {
        tj: {
            prefecture: "鳥取県",
            subdivisions: "中・西部(米子)",
            subdivisions1: "中・西部",
            subdivisions2: "米子",
            hourly: "https://tenki.jp/forecast/7/34/6920/31384/1hour.html"
        },
        wn: {
            prefecture: "鳥取",
            subdivisions: "中・西部",
            name: "日吉津村",
            hourly: "https://weathernews.jp/onebox/tenki/tottori/31384/"
        },
        hall: {
            lat: 35.440179,
            long: 133.380808
        }
    },
    大山町: {
        tj: {
            prefecture: "鳥取県",
            subdivisions: "中・西部(米子)",
            subdivisions1: "中・西部",
            subdivisions2: "米子",
            hourly: "https://tenki.jp/forecast/7/34/6920/31386/1hour.html"
        },
        wn: {
            prefecture: "鳥取",
            subdivisions: "中・西部",
            name: "大山町",
            hourly: "https://weathernews.jp/onebox/tenki/tottori/31386/"
        },
        hall: {
            lat: 35.510779,
            long: 133.496123
        }
    },
    南部町: {
        tj: {
            prefecture: "鳥取県",
            subdivisions: "中・西部(米子)",
            subdivisions1: "中・西部",
            subdivisions2: "米子",
            hourly: "https://tenki.jp/forecast/7/34/6920/31389/1hour.html"
        },
        wn: {
            prefecture: "鳥取",
            subdivisions: "中・西部",
            name: "南部町",
            hourly: "https://weathernews.jp/onebox/tenki/tottori/31389/"
        },
        hall: {
            lat: 40.420343,
            long: 141.330307
        }
    },
    伯耆町: {
        tj: {
            prefecture: "鳥取県",
            subdivisions: "中・西部(米子)",
            subdivisions1: "中・西部",
            subdivisions2: "米子",
            hourly: "https://tenki.jp/forecast/7/34/6920/31390/1hour.html"
        },
        wn: {
            prefecture: "鳥取",
            subdivisions: "中・西部",
            name: "伯耆町",
            hourly: "https://weathernews.jp/onebox/tenki/tottori/31390/"
        },
        hall: {
            lat: 35.385230,
            long: 133.407384
        }
    },
    日南町: {
        tj: {
            prefecture: "鳥取県",
            subdivisions: "中・西部(米子)",
            subdivisions1: "中・西部",
            subdivisions2: "米子",
            hourly: "https://tenki.jp/forecast/7/34/6920/31401/1hour.html"
        },
        wn: {
            prefecture: "鳥取",
            subdivisions: "中・西部",
            name: "日南町",
            hourly: "https://weathernews.jp/onebox/tenki/tottori/31401/"
        },
        hall: {
            lat: 35.163311,
            long: 133.306255
        }
    },
    日野町: {
        tj: {
            prefecture: "鳥取県",
            subdivisions: "中・西部(米子)",
            subdivisions1: "中・西部",
            subdivisions2: "米子",
            hourly: "https://tenki.jp/forecast/7/34/6920/31402/1hour.html"
        },
        wn: {
            prefecture: "鳥取",
            subdivisions: "中・西部",
            name: "日野町",
            hourly: "https://weathernews.jp/onebox/tenki/tottori/31402/"
        },
        hall: {
            lat: 35.018018,
            long: 136.246023
        }
    },
    江府町: {
        tj: {
            prefecture: "鳥取県",
            subdivisions: "中・西部(米子)",
            subdivisions1: "中・西部",
            subdivisions2: "米子",
            hourly: "https://tenki.jp/forecast/7/34/6920/31403/1hour.html"
        },
        wn: {
            prefecture: "鳥取",
            subdivisions: "中・西部",
            name: "江府町",
            hourly: "https://weathernews.jp/onebox/tenki/tottori/31403/"
        },
        hall: {
            lat: 35.275893,
            long: 133.479132
        }
    },
    松江市: {
        tj: {
            prefecture: "島根県",
            subdivisions: "東部(松江)",
            subdivisions1: "東部",
            subdivisions2: "松江",
            hourly: "https://tenki.jp/forecast/7/35/6810/32201/1hour.html"
        },
        wn: {
            prefecture: "島根",
            subdivisions: "東部",
            name: "松江市",
            hourly: "https://weathernews.jp/onebox/tenki/shimane/32201/"
        },
        hall: {
            lat: 35.467815,
            long: 133.048517
        }
    },
    出雲市: {
        tj: {
            prefecture: "島根県",
            subdivisions: "東部(松江)",
            subdivisions1: "東部",
            subdivisions2: "松江",
            hourly: "https://tenki.jp/forecast/7/35/6810/32203/1hour.html"
        },
        wn: {
            prefecture: "島根",
            subdivisions: "東部",
            name: "出雲市",
            hourly: "https://weathernews.jp/onebox/tenki/shimane/32203/"
        },
        hall: {
            lat: 35.366917,
            long: 132.754712
        }
    },
    安来市: {
        tj: {
            prefecture: "島根県",
            subdivisions: "東部(松江)",
            subdivisions1: "東部",
            subdivisions2: "松江",
            hourly: "https://tenki.jp/forecast/7/35/6810/32206/1hour.html"
        },
        wn: {
            prefecture: "島根",
            subdivisions: "東部",
            name: "安来市",
            hourly: "https://weathernews.jp/onebox/tenki/shimane/32206/"
        },
        hall: {
            lat: 35.431451,
            long: 133.250851
        }
    },
    雲南市: {
        tj: {
            prefecture: "島根県",
            subdivisions: "東部(松江)",
            subdivisions1: "東部",
            subdivisions2: "松江",
            hourly: "https://tenki.jp/forecast/7/35/6810/32209/1hour.html"
        },
        wn: {
            prefecture: "島根",
            subdivisions: "東部",
            name: "雲南市",
            hourly: "https://weathernews.jp/onebox/tenki/shimane/32209/"
        },
        hall: {
            lat: 35.307718,
            long: 132.900345
        }
    },
    奥出雲町: {
        tj: {
            prefecture: "島根県",
            subdivisions: "東部(松江)",
            subdivisions1: "東部",
            subdivisions2: "松江",
            hourly: "https://tenki.jp/forecast/7/35/6810/32343/1hour.html"
        },
        wn: {
            prefecture: "島根",
            subdivisions: "東部",
            name: "奥出雲町",
            hourly: "https://weathernews.jp/onebox/tenki/shimane/32343/"
        },
        hall: {
            lat: 35.197428,
            long: 133.002549
        }
    },
    飯南町: {
        tj: {
            prefecture: "島根県",
            subdivisions: "東部(松江)",
            subdivisions1: "東部",
            subdivisions2: "松江",
            hourly: "https://tenki.jp/forecast/7/35/6810/32386/1hour.html"
        },
        wn: {
            prefecture: "島根",
            subdivisions: "東部",
            name: "飯南町",
            hourly: "https://weathernews.jp/onebox/tenki/shimane/32386/"
        },
        hall: {
            lat: 35.000040,
            long: 132.713872
        }
    },
    浜田市: {
        tj: {
            prefecture: "島根県",
            subdivisions: "西部(浜田)",
            subdivisions1: "西部",
            subdivisions2: "浜田",
            hourly: "https://tenki.jp/forecast/7/35/6820/32202/1hour.html"
        },
        wn: {
            prefecture: "島根",
            subdivisions: "西部",
            name: "浜田市",
            hourly: "https://weathernews.jp/onebox/tenki/shimane/32202/"
        },
        hall: {
            lat: 34.899255,
            long: 132.079883
        }
    },
    益田市: {
        tj: {
            prefecture: "島根県",
            subdivisions: "西部(浜田)",
            subdivisions1: "西部",
            subdivisions2: "浜田",
            hourly: "https://tenki.jp/forecast/7/35/6820/32204/1hour.html"
        },
        wn: {
            prefecture: "島根",
            subdivisions: "西部",
            name: "益田市",
            hourly: "https://weathernews.jp/onebox/tenki/shimane/32204/"
        },
        hall: {
            lat: 34.674814,
            long: 131.842862
        }
    },
    大田市: {
        tj: {
            prefecture: "島根県",
            subdivisions: "西部(浜田)",
            subdivisions1: "西部",
            subdivisions2: "浜田",
            hourly: "https://tenki.jp/forecast/7/35/6820/32205/1hour.html"
        },
        wn: {
            prefecture: "島根",
            subdivisions: "西部",
            name: "大田市",
            hourly: "https://weathernews.jp/onebox/tenki/shimane/32205/"
        },
        hall: {
            lat: 35.192090,
            long: 132.499351
        }
    },
    江津市: {
        tj: {
            prefecture: "島根県",
            subdivisions: "西部(浜田)",
            subdivisions1: "西部",
            subdivisions2: "浜田",
            hourly: "https://tenki.jp/forecast/7/35/6820/32207/1hour.html"
        },
        wn: {
            prefecture: "島根",
            subdivisions: "西部",
            name: "江津市",
            hourly: "https://weathernews.jp/onebox/tenki/shimane/32207/"
        },
        hall: {
            lat: 35.011621,
            long: 132.217754
        }
    },
    川本町: {
        tj: {
            prefecture: "島根県",
            subdivisions: "西部(浜田)",
            subdivisions1: "西部",
            subdivisions2: "浜田",
            hourly: "https://tenki.jp/forecast/7/35/6820/32441/1hour.html"
        },
        wn: {
            prefecture: "島根",
            subdivisions: "西部",
            name: "川本町",
            hourly: "https://weathernews.jp/onebox/tenki/shimane/32441/"
        },
        hall: {
            lat: 34.995211,
            long: 132.495853
        }
    },
    美郷町: {
        tj: {
            prefecture: "島根県",
            subdivisions: "西部(浜田)",
            subdivisions1: "西部",
            subdivisions2: "浜田",
            hourly: "https://tenki.jp/forecast/7/35/6820/32448/1hour.html"
        },
        wn: {
            prefecture: "島根",
            subdivisions: "西部",
            name: "美郷町",
            hourly: "https://weathernews.jp/onebox/tenki/shimane/32448/"
        },
        hall: {
            lat: 39.461633,
            long: 140.582127
        }
    },
    邑南町: {
        tj: {
            prefecture: "島根県",
            subdivisions: "西部(浜田)",
            subdivisions1: "西部",
            subdivisions2: "浜田",
            hourly: "https://tenki.jp/forecast/7/35/6820/32449/1hour.html"
        },
        wn: {
            prefecture: "島根",
            subdivisions: "西部",
            name: "邑南町",
            hourly: "https://weathernews.jp/onebox/tenki/shimane/32449/"
        },
        hall: {
            lat: 34.893934,
            long: 132.437976
        }
    },
    津和野町: {
        tj: {
            prefecture: "島根県",
            subdivisions: "西部(浜田)",
            subdivisions1: "西部",
            subdivisions2: "浜田",
            hourly: "https://tenki.jp/forecast/7/35/6820/32501/1hour.html"
        },
        wn: {
            prefecture: "島根",
            subdivisions: "西部",
            name: "津和野町",
            hourly: "https://weathernews.jp/onebox/tenki/shimane/32501/"
        },
        hall: {
            lat: 34.541961,
            long: 131.835080
        }
    },
    吉賀町: {
        tj: {
            prefecture: "島根県",
            subdivisions: "西部(浜田)",
            subdivisions1: "西部",
            subdivisions2: "浜田",
            hourly: "https://tenki.jp/forecast/7/35/6820/32505/1hour.html"
        },
        wn: {
            prefecture: "島根",
            subdivisions: "西部",
            name: "吉賀町",
            hourly: "https://weathernews.jp/onebox/tenki/shimane/32505/"
        },
        hall: {
            lat: 34.353510,
            long: 131.935137
        }
    },
    海士町: {
        tj: {
            prefecture: "島根県",
            subdivisions: "隠岐(西郷)",
            subdivisions1: "隠岐",
            subdivisions2: "西郷",
            hourly: "https://tenki.jp/forecast/7/35/6830/32525/1hour.html"
        },
        wn: {
            prefecture: "島根",
            subdivisions: "隠岐",
            name: "海士町",
            hourly: "https://weathernews.jp/onebox/tenki/shimane/32525/"
        },
        hall: {
            lat: 36.096561,
            long: 133.096701
        }
    },
    西ノ島町: {
        tj: {
            prefecture: "島根県",
            subdivisions: "隠岐(西郷)",
            subdivisions1: "隠岐",
            subdivisions2: "西郷",
            hourly: "https://tenki.jp/forecast/7/35/6830/32526/1hour.html"
        },
        wn: {
            prefecture: "島根",
            subdivisions: "隠岐",
            name: "西ノ島町",
            hourly: "https://weathernews.jp/onebox/tenki/shimane/32526/"
        },
        hall: {
            lat: 36.091825,
            long: 133.013467
        }
    },
    知夫村: {
        tj: {
            prefecture: "島根県",
            subdivisions: "隠岐(西郷)",
            subdivisions1: "隠岐",
            subdivisions2: "西郷",
            hourly: "https://tenki.jp/forecast/7/35/6830/32527/1hour.html"
        },
        wn: {
            prefecture: "島根",
            subdivisions: "隠岐",
            name: "知夫村",
            hourly: "https://weathernews.jp/onebox/tenki/shimane/32527/"
        },
        hall: {
            lat: 36.013927,
            long: 133.039372
        }
    },
    隠岐の島町: {
        tj: {
            prefecture: "島根県",
            subdivisions: "隠岐(西郷)",
            subdivisions1: "隠岐",
            subdivisions2: "西郷",
            hourly: "https://tenki.jp/forecast/7/35/6830/32528/1hour.html"
        },
        wn: {
            prefecture: "島根",
            subdivisions: "隠岐",
            name: "隠岐の島町",
            hourly: "https://weathernews.jp/onebox/tenki/shimane/32528/"
        },
        hall: {
            lat: 36.213394,
            long: 133.311818
        }
    },
    岡山市: {
        tj: {
            prefecture: "岡山県",
            subdivisions: "南部(岡山)",
            subdivisions1: "南部",
            subdivisions2: "岡山",
            hourly: "https://tenki.jp/forecast/7/36/6610/33100/1hour.html"
        },
        wn: {
            prefecture: "岡山",
            subdivisions: "南部",
            name: "岡山市北区",
            hourly: "https://weathernews.jp/onebox/tenki/okayama/33101/"
        },
        hall: {
            lat: 34.655107,
            long: 133.919566
        }
    },
    岡山市北区: {
        tj: {
            prefecture: "岡山県",
            subdivisions: "南部(岡山)",
            subdivisions1: "南部",
            subdivisions2: "岡山",
            hourly: "https://tenki.jp/forecast/7/36/6610/33101/1hour.html"
        },
        wn: {
            prefecture: "岡山",
            subdivisions: "南部",
            name: "岡山市北区",
            hourly: "https://weathernews.jp/onebox/tenki/okayama/33101/"
        },
        hall: {
            lat: 34.655107,
            long: 133.919566
        }
    },
    岡山市中区: {
        tj: {
            prefecture: "岡山県",
            subdivisions: "南部(岡山)",
            subdivisions1: "南部",
            subdivisions2: "岡山",
            hourly: "https://tenki.jp/forecast/7/36/6610/33102/1hour.html"
        },
        wn: {
            prefecture: "岡山",
            subdivisions: "南部",
            name: "岡山市中区",
            hourly: "https://weathernews.jp/onebox/tenki/okayama/33102/"
        },
        hall: {
            lat: 34.670776,
            long: 133.943144
        }
    },
    岡山市東区: {
        tj: {
            prefecture: "岡山県",
            subdivisions: "南部(岡山)",
            subdivisions1: "南部",
            subdivisions2: "岡山",
            hourly: "https://tenki.jp/forecast/7/36/6610/33103/1hour.html"
        },
        wn: {
            prefecture: "岡山",
            subdivisions: "南部",
            name: "岡山市東区",
            hourly: "https://weathernews.jp/onebox/tenki/okayama/33103/"
        },
        hall: {
            lat: 34.651374,
            long: 134.029463
        }
    },
    岡山市南区: {
        tj: {
            prefecture: "岡山県",
            subdivisions: "南部(岡山)",
            subdivisions1: "南部",
            subdivisions2: "岡山",
            hourly: "https://tenki.jp/forecast/7/36/6610/33104/1hour.html"
        },
        wn: {
            prefecture: "岡山",
            subdivisions: "南部",
            name: "岡山市南区",
            hourly: "https://weathernews.jp/onebox/tenki/okayama/33104/"
        },
        hall: {
            lat: 34.599771,
            long: 133.919553
        }
    },
    倉敷市: {
        tj: {
            prefecture: "岡山県",
            subdivisions: "南部(岡山)",
            subdivisions1: "南部",
            subdivisions2: "岡山",
            hourly: "https://tenki.jp/forecast/7/36/6610/33202/1hour.html"
        },
        wn: {
            prefecture: "岡山",
            subdivisions: "南部",
            name: "倉敷市",
            hourly: "https://weathernews.jp/onebox/tenki/okayama/33202/"
        },
        hall: {
            lat: 34.584677,
            long: 133.772281
        }
    },
    玉野市: {
        tj: {
            prefecture: "岡山県",
            subdivisions: "南部(岡山)",
            subdivisions1: "南部",
            subdivisions2: "岡山",
            hourly: "https://tenki.jp/forecast/7/36/6610/33204/1hour.html"
        },
        wn: {
            prefecture: "岡山",
            subdivisions: "南部",
            name: "玉野市",
            hourly: "https://weathernews.jp/onebox/tenki/okayama/33204/"
        },
        hall: {
            lat: 34.491979,
            long: 133.946012
        }
    },
    笠岡市: {
        tj: {
            prefecture: "岡山県",
            subdivisions: "南部(岡山)",
            subdivisions1: "南部",
            subdivisions2: "岡山",
            hourly: "https://tenki.jp/forecast/7/36/6610/33205/1hour.html"
        },
        wn: {
            prefecture: "岡山",
            subdivisions: "南部",
            name: "笠岡市",
            hourly: "https://weathernews.jp/onebox/tenki/okayama/33205/"
        },
        hall: {
            lat: 34.507182,
            long: 133.507441
        }
    },
    井原市: {
        tj: {
            prefecture: "岡山県",
            subdivisions: "南部(岡山)",
            subdivisions1: "南部",
            subdivisions2: "岡山",
            hourly: "https://tenki.jp/forecast/7/36/6610/33207/1hour.html"
        },
        wn: {
            prefecture: "岡山",
            subdivisions: "南部",
            name: "井原市",
            hourly: "https://weathernews.jp/onebox/tenki/okayama/33207/"
        },
        hall: {
            lat: 34.597709,
            long: 133.463798
        }
    },
    総社市: {
        tj: {
            prefecture: "岡山県",
            subdivisions: "南部(岡山)",
            subdivisions1: "南部",
            subdivisions2: "岡山",
            hourly: "https://tenki.jp/forecast/7/36/6610/33208/1hour.html"
        },
        wn: {
            prefecture: "岡山",
            subdivisions: "南部",
            name: "総社市",
            hourly: "https://weathernews.jp/onebox/tenki/okayama/33208/"
        },
        hall: {
            lat: 34.672810,
            long: 133.746531
        }
    },
    高梁市: {
        tj: {
            prefecture: "岡山県",
            subdivisions: "南部(岡山)",
            subdivisions1: "南部",
            subdivisions2: "岡山",
            hourly: "https://tenki.jp/forecast/7/36/6610/33209/1hour.html"
        },
        wn: {
            prefecture: "岡山",
            subdivisions: "南部",
            name: "高梁市",
            hourly: "https://weathernews.jp/onebox/tenki/okayama/33209/"
        },
        hall: {
            lat: 34.791361,
            long: 133.616678
        }
    },
    備前市: {
        tj: {
            prefecture: "岡山県",
            subdivisions: "南部(岡山)",
            subdivisions1: "南部",
            subdivisions2: "岡山",
            hourly: "https://tenki.jp/forecast/7/36/6610/33211/1hour.html"
        },
        wn: {
            prefecture: "岡山",
            subdivisions: "南部",
            name: "備前市",
            hourly: "https://weathernews.jp/onebox/tenki/okayama/33211/"
        },
        hall: {
            lat: 34.745183,
            long: 134.188803
        }
    },
    瀬戸内市: {
        tj: {
            prefecture: "岡山県",
            subdivisions: "南部(岡山)",
            subdivisions1: "南部",
            subdivisions2: "岡山",
            hourly: "https://tenki.jp/forecast/7/36/6610/33212/1hour.html"
        },
        wn: {
            prefecture: "岡山",
            subdivisions: "南部",
            name: "瀬戸内市",
            hourly: "https://weathernews.jp/onebox/tenki/okayama/33212/"
        },
        hall: {
            lat: 34.664893,
            long: 134.092849
        }
    },
    赤磐市: {
        tj: {
            prefecture: "岡山県",
            subdivisions: "南部(岡山)",
            subdivisions1: "南部",
            subdivisions2: "岡山",
            hourly: "https://tenki.jp/forecast/7/36/6610/33213/1hour.html"
        },
        wn: {
            prefecture: "岡山",
            subdivisions: "南部",
            name: "赤磐市",
            hourly: "https://weathernews.jp/onebox/tenki/okayama/33213/"
        },
        hall: {
            lat: 34.755396,
            long: 134.018848
        }
    },
    浅口市: {
        tj: {
            prefecture: "岡山県",
            subdivisions: "南部(岡山)",
            subdivisions1: "南部",
            subdivisions2: "岡山",
            hourly: "https://tenki.jp/forecast/7/36/6610/33216/1hour.html"
        },
        wn: {
            prefecture: "岡山",
            subdivisions: "南部",
            name: "浅口市",
            hourly: "https://weathernews.jp/onebox/tenki/okayama/33216/"
        },
        hall: {
            lat: 34.527834,
            long: 133.584911
        }
    },
    和気町: {
        tj: {
            prefecture: "岡山県",
            subdivisions: "南部(岡山)",
            subdivisions1: "南部",
            subdivisions2: "岡山",
            hourly: "https://tenki.jp/forecast/7/36/6610/33346/1hour.html"
        },
        wn: {
            prefecture: "岡山",
            subdivisions: "南部",
            name: "和気町",
            hourly: "https://weathernews.jp/onebox/tenki/okayama/33346/"
        },
        hall: {
            lat: 34.802882,
            long: 134.157539
        }
    },
    早島町: {
        tj: {
            prefecture: "岡山県",
            subdivisions: "南部(岡山)",
            subdivisions1: "南部",
            subdivisions2: "岡山",
            hourly: "https://tenki.jp/forecast/7/36/6610/33423/1hour.html"
        },
        wn: {
            prefecture: "岡山",
            subdivisions: "南部",
            name: "早島町",
            hourly: "https://weathernews.jp/onebox/tenki/okayama/33423/"
        },
        hall: {
            lat: 34.600822,
            long: 133.828304
        }
    },
    里庄町: {
        tj: {
            prefecture: "岡山県",
            subdivisions: "南部(岡山)",
            subdivisions1: "南部",
            subdivisions2: "岡山",
            hourly: "https://tenki.jp/forecast/7/36/6610/33445/1hour.html"
        },
        wn: {
            prefecture: "岡山",
            subdivisions: "南部",
            name: "里庄町",
            hourly: "https://weathernews.jp/onebox/tenki/okayama/33445/"
        },
        hall: {
            lat: 34.513740,
            long: 133.556886
        }
    },
    矢掛町: {
        tj: {
            prefecture: "岡山県",
            subdivisions: "南部(岡山)",
            subdivisions1: "南部",
            subdivisions2: "岡山",
            hourly: "https://tenki.jp/forecast/7/36/6610/33461/1hour.html"
        },
        wn: {
            prefecture: "岡山",
            subdivisions: "南部",
            name: "矢掛町",
            hourly: "https://weathernews.jp/onebox/tenki/okayama/33461/"
        },
        hall: {
            lat: 34.627596,
            long: 133.587085
        }
    },
    吉備中央町: {
        tj: {
            prefecture: "岡山県",
            subdivisions: "南部(岡山)",
            subdivisions1: "南部",
            subdivisions2: "岡山",
            hourly: "https://tenki.jp/forecast/7/36/6610/33681/1hour.html"
        },
        wn: {
            prefecture: "岡山",
            subdivisions: "南部",
            name: "吉備中央町",
            hourly: "https://weathernews.jp/onebox/tenki/okayama/33681/"
        },
        hall: {
            lat: 34.863404,
            long: 133.693500
        }
    },
    津山市: {
        tj: {
            prefecture: "岡山県",
            subdivisions: "北部(津山)",
            subdivisions1: "北部",
            subdivisions2: "津山",
            hourly: "https://tenki.jp/forecast/7/36/6620/33203/1hour.html"
        },
        wn: {
            prefecture: "岡山",
            subdivisions: "北部",
            name: "津山市",
            hourly: "https://weathernews.jp/onebox/tenki/okayama/33203/"
        },
        hall: {
            lat: 35.069118,
            long: 134.004543
        }
    },
    新見市: {
        tj: {
            prefecture: "岡山県",
            subdivisions: "北部(津山)",
            subdivisions1: "北部",
            subdivisions2: "津山",
            hourly: "https://tenki.jp/forecast/7/36/6620/33210/1hour.html"
        },
        wn: {
            prefecture: "岡山",
            subdivisions: "北部",
            name: "新見市",
            hourly: "https://weathernews.jp/onebox/tenki/okayama/33210/"
        },
        hall: {
            lat: 34.977058,
            long: 133.470345
        }
    },
    真庭市: {
        tj: {
            prefecture: "岡山県",
            subdivisions: "北部(津山)",
            subdivisions1: "北部",
            subdivisions2: "津山",
            hourly: "https://tenki.jp/forecast/7/36/6620/33214/1hour.html"
        },
        wn: {
            prefecture: "岡山",
            subdivisions: "北部",
            name: "真庭市",
            hourly: "https://weathernews.jp/onebox/tenki/okayama/33214/"
        },
        hall: {
            lat: 35.075591,
            long: 133.752756
        }
    },
    美作市: {
        tj: {
            prefecture: "岡山県",
            subdivisions: "北部(津山)",
            subdivisions1: "北部",
            subdivisions2: "津山",
            hourly: "https://tenki.jp/forecast/7/36/6620/33215/1hour.html"
        },
        wn: {
            prefecture: "岡山",
            subdivisions: "北部",
            name: "美作市",
            hourly: "https://weathernews.jp/onebox/tenki/okayama/33215/"
        },
        hall: {
            lat: 35.008594,
            long: 134.148578
        }
    },
    新庄村: {
        tj: {
            prefecture: "岡山県",
            subdivisions: "北部(津山)",
            subdivisions1: "北部",
            subdivisions2: "津山",
            hourly: "https://tenki.jp/forecast/7/36/6620/33586/1hour.html"
        },
        wn: {
            prefecture: "岡山",
            subdivisions: "北部",
            name: "新庄村",
            hourly: "https://weathernews.jp/onebox/tenki/okayama/33586/"
        },
        hall: {
            lat: 35.179691,
            long: 133.567755
        }
    },
    鏡野町: {
        tj: {
            prefecture: "岡山県",
            subdivisions: "北部(津山)",
            subdivisions1: "北部",
            subdivisions2: "津山",
            hourly: "https://tenki.jp/forecast/7/36/6620/33606/1hour.html"
        },
        wn: {
            prefecture: "岡山",
            subdivisions: "北部",
            name: "鏡野町",
            hourly: "https://weathernews.jp/onebox/tenki/okayama/33606/"
        },
        hall: {
            lat: 35.091772,
            long: 133.933030
        }
    },
    勝央町: {
        tj: {
            prefecture: "岡山県",
            subdivisions: "北部(津山)",
            subdivisions1: "北部",
            subdivisions2: "津山",
            hourly: "https://tenki.jp/forecast/7/36/6620/33622/1hour.html"
        },
        wn: {
            prefecture: "岡山",
            subdivisions: "北部",
            name: "勝央町",
            hourly: "https://weathernews.jp/onebox/tenki/okayama/33622/"
        },
        hall: {
            lat: 35.041790,
            long: 134.116172
        }
    },
    奈義町: {
        tj: {
            prefecture: "岡山県",
            subdivisions: "北部(津山)",
            subdivisions1: "北部",
            subdivisions2: "津山",
            hourly: "https://tenki.jp/forecast/7/36/6620/33623/1hour.html"
        },
        wn: {
            prefecture: "岡山",
            subdivisions: "北部",
            name: "奈義町",
            hourly: "https://weathernews.jp/onebox/tenki/okayama/33623/"
        },
        hall: {
            lat: 35.123024,
            long: 134.177427
        }
    },
    西粟倉村: {
        tj: {
            prefecture: "岡山県",
            subdivisions: "北部(津山)",
            subdivisions1: "北部",
            subdivisions2: "津山",
            hourly: "https://tenki.jp/forecast/7/36/6620/33643/1hour.html"
        },
        wn: {
            prefecture: "岡山",
            subdivisions: "北部",
            name: "西粟倉村",
            hourly: "https://weathernews.jp/onebox/tenki/okayama/33643/"
        },
        hall: {
            lat: 35.171765,
            long: 134.335689
        }
    },
    久米南町: {
        tj: {
            prefecture: "岡山県",
            subdivisions: "北部(津山)",
            subdivisions1: "北部",
            subdivisions2: "津山",
            hourly: "https://tenki.jp/forecast/7/36/6620/33663/1hour.html"
        },
        wn: {
            prefecture: "岡山",
            subdivisions: "北部",
            name: "久米南町",
            hourly: "https://weathernews.jp/onebox/tenki/okayama/33663/"
        },
        hall: {
            lat: 34.929179,
            long: 133.960647
        }
    },
    美咲町: {
        tj: {
            prefecture: "岡山県",
            subdivisions: "北部(津山)",
            subdivisions1: "北部",
            subdivisions2: "津山",
            hourly: "https://tenki.jp/forecast/7/36/6620/33666/1hour.html"
        },
        wn: {
            prefecture: "岡山",
            subdivisions: "北部",
            name: "美咲町",
            hourly: "https://weathernews.jp/onebox/tenki/okayama/33666/"
        },
        hall: {
            lat: 34.997967,
            long: 133.958149
        }
    },
    広島市: {
        tj: {
            prefecture: "広島県",
            subdivisions: "南部(広島)",
            subdivisions1: "南部",
            subdivisions2: "広島",
            hourly: "https://tenki.jp/forecast/7/37/6710/34100/1hour.html"
        },
        wn: {
            prefecture: "広島",
            subdivisions: "南部",
            name: "広島市中区",
            hourly: "https://weathernews.jp/onebox/tenki/hiroshima/34101/"
        },
        hall: {
            lat: 34.385253,
            long: 132.455337
        }
    },
    広島市中区: {
        tj: {
            prefecture: "広島県",
            subdivisions: "南部(広島)",
            subdivisions1: "南部",
            subdivisions2: "広島",
            hourly: "https://tenki.jp/forecast/7/37/6710/34101/1hour.html"
        },
        wn: {
            prefecture: "広島",
            subdivisions: "南部",
            name: "広島市中区",
            hourly: "https://weathernews.jp/onebox/tenki/hiroshima/34101/"
        },
        hall: {
            lat: 34.386288,
            long: 132.454992
        }
    },
    広島市東区: {
        tj: {
            prefecture: "広島県",
            subdivisions: "南部(広島)",
            subdivisions1: "南部",
            subdivisions2: "広島",
            hourly: "https://tenki.jp/forecast/7/37/6710/34102/1hour.html"
        },
        wn: {
            prefecture: "広島",
            subdivisions: "南部",
            name: "広島市東区",
            hourly: "https://weathernews.jp/onebox/tenki/hiroshima/34102/"
        },
        hall: {
            lat: 34.395333,
            long: 132.482384
        }
    },
    広島市南区: {
        tj: {
            prefecture: "広島県",
            subdivisions: "南部(広島)",
            subdivisions1: "南部",
            subdivisions2: "広島",
            hourly: "https://tenki.jp/forecast/7/37/6710/34103/1hour.html"
        },
        wn: {
            prefecture: "広島",
            subdivisions: "南部",
            name: "広島市南区",
            hourly: "https://weathernews.jp/onebox/tenki/hiroshima/34103/"
        },
        hall: {
            lat: 34.379884,
            long: 132.469061
        }
    },
    広島市西区: {
        tj: {
            prefecture: "広島県",
            subdivisions: "南部(広島)",
            subdivisions1: "南部",
            subdivisions2: "広島",
            hourly: "https://tenki.jp/forecast/7/37/6710/34104/1hour.html"
        },
        wn: {
            prefecture: "広島",
            subdivisions: "南部",
            name: "広島市西区",
            hourly: "https://weathernews.jp/onebox/tenki/hiroshima/34104/"
        },
        hall: {
            lat: 34.393966,
            long: 132.434426
        }
    },
    広島市安佐南区: {
        tj: {
            prefecture: "広島県",
            subdivisions: "南部(広島)",
            subdivisions1: "南部",
            subdivisions2: "広島",
            hourly: "https://tenki.jp/forecast/7/37/6710/34105/1hour.html"
        },
        wn: {
            prefecture: "広島",
            subdivisions: "南部",
            name: "広島市安佐南区",
            hourly: "https://weathernews.jp/onebox/tenki/hiroshima/34105/"
        },
        hall: {
            lat: 34.451850,
            long: 132.471641
        }
    },
    広島市安佐北区: {
        tj: {
            prefecture: "広島県",
            subdivisions: "南部(広島)",
            subdivisions1: "南部",
            subdivisions2: "広島",
            hourly: "https://tenki.jp/forecast/7/37/6710/34106/1hour.html"
        },
        wn: {
            prefecture: "広島",
            subdivisions: "南部",
            name: "広島市安佐北区",
            hourly: "https://weathernews.jp/onebox/tenki/hiroshima/34106/"
        },
        hall: {
            lat: 34.518282,
            long: 132.507633
        }
    },
    広島市安芸区: {
        tj: {
            prefecture: "広島県",
            subdivisions: "南部(広島)",
            subdivisions1: "南部",
            subdivisions2: "広島",
            hourly: "https://tenki.jp/forecast/7/37/6710/34107/1hour.html"
        },
        wn: {
            prefecture: "広島",
            subdivisions: "南部",
            name: "広島市安芸区",
            hourly: "https://weathernews.jp/onebox/tenki/hiroshima/34107/"
        },
        hall: {
            lat: 34.371756,
            long: 132.525542
        }
    },
    広島市佐伯区: {
        tj: {
            prefecture: "広島県",
            subdivisions: "南部(広島)",
            subdivisions1: "南部",
            subdivisions2: "広島",
            hourly: "https://tenki.jp/forecast/7/37/6710/34108/1hour.html"
        },
        wn: {
            prefecture: "広島",
            subdivisions: "南部",
            name: "広島市佐伯区",
            hourly: "https://weathernews.jp/onebox/tenki/hiroshima/34108/"
        },
        hall: {
            lat: 34.364460,
            long: 132.360820
        }
    },
    呉市: {
        tj: {
            prefecture: "広島県",
            subdivisions: "南部(広島)",
            subdivisions1: "南部",
            subdivisions2: "広島",
            hourly: "https://tenki.jp/forecast/7/37/6710/34202/1hour.html"
        },
        wn: {
            prefecture: "広島",
            subdivisions: "南部",
            name: "呉市",
            hourly: "https://weathernews.jp/onebox/tenki/hiroshima/34202/"
        },
        hall: {
            lat: 34.249254,
            long: 132.565805
        }
    },
    竹原市: {
        tj: {
            prefecture: "広島県",
            subdivisions: "南部(広島)",
            subdivisions1: "南部",
            subdivisions2: "広島",
            hourly: "https://tenki.jp/forecast/7/37/6710/34203/1hour.html"
        },
        wn: {
            prefecture: "広島",
            subdivisions: "南部",
            name: "竹原市",
            hourly: "https://weathernews.jp/onebox/tenki/hiroshima/34203/"
        },
        hall: {
            lat: 34.341794,
            long: 132.907091
        }
    },
    三原市: {
        tj: {
            prefecture: "広島県",
            subdivisions: "南部(広島)",
            subdivisions1: "南部",
            subdivisions2: "広島",
            hourly: "https://tenki.jp/forecast/7/37/6710/34204/1hour.html"
        },
        wn: {
            prefecture: "広島",
            subdivisions: "南部",
            name: "三原市",
            hourly: "https://weathernews.jp/onebox/tenki/hiroshima/34204/"
        },
        hall: {
            lat: 34.397470,
            long: 133.078525
        }
    },
    尾道市: {
        tj: {
            prefecture: "広島県",
            subdivisions: "南部(広島)",
            subdivisions1: "南部",
            subdivisions2: "広島",
            hourly: "https://tenki.jp/forecast/7/37/6710/34205/1hour.html"
        },
        wn: {
            prefecture: "広島",
            subdivisions: "南部",
            name: "尾道市",
            hourly: "https://weathernews.jp/onebox/tenki/hiroshima/34205/"
        },
        hall: {
            lat: 34.409162,
            long: 133.205628
        }
    },
    福山市: {
        tj: {
            prefecture: "広島県",
            subdivisions: "南部(広島)",
            subdivisions1: "南部",
            subdivisions2: "広島",
            hourly: "https://tenki.jp/forecast/7/37/6710/34207/1hour.html"
        },
        wn: {
            prefecture: "広島",
            subdivisions: "南部",
            name: "福山市",
            hourly: "https://weathernews.jp/onebox/tenki/hiroshima/34207/"
        },
        hall: {
            lat: 34.485927,
            long: 133.362340
        }
    },
    府中市: {
        tj: {
            prefecture: "広島県",
            subdivisions: "南部(広島)",
            subdivisions1: "南部",
            subdivisions2: "広島",
            hourly: "https://tenki.jp/forecast/7/37/6710/34208/1hour.html"
        },
        wn: {
            prefecture: "広島",
            subdivisions: "南部",
            name: "府中市",
            hourly: "https://weathernews.jp/onebox/tenki/hiroshima/34208/"
        },
        hall: {
            lat: 35.669404,
            long: 139.477591
        }
    },
    大竹市: {
        tj: {
            prefecture: "広島県",
            subdivisions: "南部(広島)",
            subdivisions1: "南部",
            subdivisions2: "広島",
            hourly: "https://tenki.jp/forecast/7/37/6710/34211/1hour.html"
        },
        wn: {
            prefecture: "広島",
            subdivisions: "南部",
            name: "大竹市",
            hourly: "https://weathernews.jp/onebox/tenki/hiroshima/34211/"
        },
        hall: {
            lat: 34.237952,
            long: 132.222361
        }
    },
    東広島市: {
        tj: {
            prefecture: "広島県",
            subdivisions: "南部(広島)",
            subdivisions1: "南部",
            subdivisions2: "広島",
            hourly: "https://tenki.jp/forecast/7/37/6710/34212/1hour.html"
        },
        wn: {
            prefecture: "広島",
            subdivisions: "南部",
            name: "東広島市",
            hourly: "https://weathernews.jp/onebox/tenki/hiroshima/34212/"
        },
        hall: {
            lat: 34.426787,
            long: 132.743746
        }
    },
    廿日市市: {
        tj: {
            prefecture: "広島県",
            subdivisions: "南部(広島)",
            subdivisions1: "南部",
            subdivisions2: "広島",
            hourly: "https://tenki.jp/forecast/7/37/6710/34213/1hour.html"
        },
        wn: {
            prefecture: "広島",
            subdivisions: "南部",
            name: "廿日市市",
            hourly: "https://weathernews.jp/onebox/tenki/hiroshima/34213/"
        },
        hall: {
            lat: 34.348416,
            long: 132.331541
        }
    },
    江田島市: {
        tj: {
            prefecture: "広島県",
            subdivisions: "南部(広島)",
            subdivisions1: "南部",
            subdivisions2: "広島",
            hourly: "https://tenki.jp/forecast/7/37/6710/34215/1hour.html"
        },
        wn: {
            prefecture: "広島",
            subdivisions: "南部",
            name: "江田島市",
            hourly: "https://weathernews.jp/onebox/tenki/hiroshima/34215/"
        },
        hall: {
            lat: 34.174967,
            long: 132.462210
        }
    },
    府中町: {
        tj: {
            prefecture: "広島県",
            subdivisions: "南部(広島)",
            subdivisions1: "南部",
            subdivisions2: "広島",
            hourly: "https://tenki.jp/forecast/7/37/6710/34302/1hour.html"
        },
        wn: {
            prefecture: "広島",
            subdivisions: "南部",
            name: "府中町",
            hourly: "https://weathernews.jp/onebox/tenki/hiroshima/34302/"
        },
        hall: {
            lat: 34.392589,
            long: 132.504544
        }
    },
    海田町: {
        tj: {
            prefecture: "広島県",
            subdivisions: "南部(広島)",
            subdivisions1: "南部",
            subdivisions2: "広島",
            hourly: "https://tenki.jp/forecast/7/37/6710/34304/1hour.html"
        },
        wn: {
            prefecture: "広島",
            subdivisions: "南部",
            name: "海田町",
            hourly: "https://weathernews.jp/onebox/tenki/hiroshima/34304/"
        },
        hall: {
            lat: 34.366403,
            long: 132.536253
        }
    },
    熊野町: {
        tj: {
            prefecture: "広島県",
            subdivisions: "南部(広島)",
            subdivisions1: "南部",
            subdivisions2: "広島",
            hourly: "https://tenki.jp/forecast/7/37/6710/34307/1hour.html"
        },
        wn: {
            prefecture: "広島",
            subdivisions: "南部",
            name: "熊野町",
            hourly: "https://weathernews.jp/onebox/tenki/hiroshima/34307/"
        },
        hall: {
            lat: 34.335783,
            long: 132.584604
        }
    },
    坂町: {
        tj: {
            prefecture: "広島県",
            subdivisions: "南部(広島)",
            subdivisions1: "南部",
            subdivisions2: "広島",
            hourly: "https://tenki.jp/forecast/7/37/6710/34309/1hour.html"
        },
        wn: {
            prefecture: "広島",
            subdivisions: "南部",
            name: "坂町",
            hourly: "https://weathernews.jp/onebox/tenki/hiroshima/34309/"
        },
        hall: {
            lat: 34.341282,
            long: 132.513639
        }
    },
    大崎上島町: {
        tj: {
            prefecture: "広島県",
            subdivisions: "南部(広島)",
            subdivisions1: "南部",
            subdivisions2: "広島",
            hourly: "https://tenki.jp/forecast/7/37/6710/34431/1hour.html"
        },
        wn: {
            prefecture: "広島",
            subdivisions: "南部",
            name: "大崎上島町",
            hourly: "https://weathernews.jp/onebox/tenki/hiroshima/34431/"
        },
        hall: {
            lat: 34.269552,
            long: 132.914963
        }
    },
    世羅町: {
        tj: {
            prefecture: "広島県",
            subdivisions: "南部(広島)",
            subdivisions1: "南部",
            subdivisions2: "広島",
            hourly: "https://tenki.jp/forecast/7/37/6710/34462/1hour.html"
        },
        wn: {
            prefecture: "広島",
            subdivisions: "南部",
            name: "世羅町",
            hourly: "https://weathernews.jp/onebox/tenki/hiroshima/34462/"
        },
        hall: {
            lat: 34.586837,
            long: 133.056631
        }
    },
    神石高原町: {
        tj: {
            prefecture: "広島県",
            subdivisions: "南部(広島)",
            subdivisions1: "南部",
            subdivisions2: "広島",
            hourly: "https://tenki.jp/forecast/7/37/6710/34545/1hour.html"
        },
        wn: {
            prefecture: "広島",
            subdivisions: "南部",
            name: "神石高原町",
            hourly: "https://weathernews.jp/onebox/tenki/hiroshima/34545/"
        },
        hall: {
            lat: 34.703612,
            long: 133.251651
        }
    },
    三次市: {
        tj: {
            prefecture: "広島県",
            subdivisions: "北部(庄原)",
            subdivisions1: "北部",
            subdivisions2: "庄原",
            hourly: "https://tenki.jp/forecast/7/37/6720/34209/1hour.html"
        },
        wn: {
            prefecture: "広島",
            subdivisions: "北部",
            name: "三次市",
            hourly: "https://weathernews.jp/onebox/tenki/hiroshima/34209/"
        },
        hall: {
            lat: 34.805627,
            long: 132.851790
        }
    },
    庄原市: {
        tj: {
            prefecture: "広島県",
            subdivisions: "北部(庄原)",
            subdivisions1: "北部",
            subdivisions2: "庄原",
            hourly: "https://tenki.jp/forecast/7/37/6720/34210/1hour.html"
        },
        wn: {
            prefecture: "広島",
            subdivisions: "北部",
            name: "庄原市",
            hourly: "https://weathernews.jp/onebox/tenki/hiroshima/34210/"
        },
        hall: {
            lat: 34.857743,
            long: 133.017264
        }
    },
    安芸高田市: {
        tj: {
            prefecture: "広島県",
            subdivisions: "北部(庄原)",
            subdivisions1: "北部",
            subdivisions2: "庄原",
            hourly: "https://tenki.jp/forecast/7/37/6720/34214/1hour.html"
        },
        wn: {
            prefecture: "広島",
            subdivisions: "北部",
            name: "安芸高田市",
            hourly: "https://weathernews.jp/onebox/tenki/hiroshima/34214/"
        },
        hall: {
            lat: 34.666099,
            long: 132.703977
        }
    },
    安芸太田町: {
        tj: {
            prefecture: "広島県",
            subdivisions: "北部(庄原)",
            subdivisions1: "北部",
            subdivisions2: "庄原",
            hourly: "https://tenki.jp/forecast/7/37/6720/34368/1hour.html"
        },
        wn: {
            prefecture: "広島",
            subdivisions: "北部",
            name: "安芸太田町",
            hourly: "https://weathernews.jp/onebox/tenki/hiroshima/34368/"
        },
        hall: {
            lat: 34.576731,
            long: 132.227141
        }
    },
    北広島町: {
        tj: {
            prefecture: "広島県",
            subdivisions: "北部(庄原)",
            subdivisions1: "北部",
            subdivisions2: "庄原",
            hourly: "https://tenki.jp/forecast/7/37/6720/34369/1hour.html"
        },
        wn: {
            prefecture: "広島",
            subdivisions: "北部",
            name: "北広島町",
            hourly: "https://weathernews.jp/onebox/tenki/hiroshima/34369/"
        },
        hall: {
            lat: 34.674541,
            long: 132.538427
        }
    },
    下関市: {
        tj: {
            prefecture: "山口県",
            subdivisions: "西部(下関)",
            subdivisions1: "西部",
            subdivisions2: "下関",
            hourly: "https://tenki.jp/forecast/7/38/8110/35201/1hour.html"
        },
        wn: {
            prefecture: "山口",
            subdivisions: "西部",
            name: "下関市",
            hourly: "https://weathernews.jp/onebox/tenki/yamaguchi/35201/"
        },
        hall: {
            lat: 33.957279,
            long: 130.940935
        }
    },
    宇部市: {
        tj: {
            prefecture: "山口県",
            subdivisions: "西部(下関)",
            subdivisions1: "西部",
            subdivisions2: "下関",
            hourly: "https://tenki.jp/forecast/7/38/8110/35202/1hour.html"
        },
        wn: {
            prefecture: "山口",
            subdivisions: "西部",
            name: "宇部市",
            hourly: "https://weathernews.jp/onebox/tenki/yamaguchi/35202/"
        },
        hall: {
            lat: 33.951824,
            long: 131.247310
        }
    },
    山陽小野田市: {
        tj: {
            prefecture: "山口県",
            subdivisions: "西部(下関)",
            subdivisions1: "西部",
            subdivisions2: "下関",
            hourly: "https://tenki.jp/forecast/7/38/8110/35216/1hour.html"
        },
        wn: {
            prefecture: "山口",
            subdivisions: "西部",
            name: "山陽小野田市",
            hourly: "https://weathernews.jp/onebox/tenki/yamaguchi/35216/"
        },
        hall: {
            lat: 34.003089,
            long: 131.181786
        }
    },
    山口市: {
        tj: {
            prefecture: "山口県",
            subdivisions: "中部(山口)",
            subdivisions1: "中部",
            subdivisions2: "山口",
            hourly: "https://tenki.jp/forecast/7/38/8120/35203/1hour.html"
        },
        wn: {
            prefecture: "山口",
            subdivisions: "中部",
            name: "山口市",
            hourly: "https://weathernews.jp/onebox/tenki/yamaguchi/35203/"
        },
        hall: {
            lat: 34.178178,
            long: 131.473511
        }
    },
    防府市: {
        tj: {
            prefecture: "山口県",
            subdivisions: "中部(山口)",
            subdivisions1: "中部",
            subdivisions2: "山口",
            hourly: "https://tenki.jp/forecast/7/38/8120/35206/1hour.html"
        },
        wn: {
            prefecture: "山口",
            subdivisions: "中部",
            name: "防府市",
            hourly: "https://weathernews.jp/onebox/tenki/yamaguchi/35206/"
        },
        hall: {
            lat: 34.051756,
            long: 131.562627
        }
    },
    下松市: {
        tj: {
            prefecture: "山口県",
            subdivisions: "中部(山口)",
            subdivisions1: "中部",
            subdivisions2: "山口",
            hourly: "https://tenki.jp/forecast/7/38/8120/35207/1hour.html"
        },
        wn: {
            prefecture: "山口",
            subdivisions: "中部",
            name: "下松市",
            hourly: "https://weathernews.jp/onebox/tenki/yamaguchi/35207/"
        },
        hall: {
            lat: 34.015038,
            long: 131.870317
        }
    },
    周南市: {
        tj: {
            prefecture: "山口県",
            subdivisions: "中部(山口)",
            subdivisions1: "中部",
            subdivisions2: "山口",
            hourly: "https://tenki.jp/forecast/7/38/8120/35215/1hour.html"
        },
        wn: {
            prefecture: "山口",
            subdivisions: "中部",
            name: "周南市",
            hourly: "https://weathernews.jp/onebox/tenki/yamaguchi/35215/"
        },
        hall: {
            lat: 34.055135,
            long: 131.806293
        }
    },
    岩国市: {
        tj: {
            prefecture: "山口県",
            subdivisions: "東部(柳井)",
            subdivisions1: "東部",
            subdivisions2: "柳井",
            hourly: "https://tenki.jp/forecast/7/38/8130/35208/1hour.html"
        },
        wn: {
            prefecture: "山口",
            subdivisions: "東部",
            name: "岩国市",
            hourly: "https://weathernews.jp/onebox/tenki/yamaguchi/35208/"
        },
        hall: {
            lat: 34.166500,
            long: 132.218942
        }
    },
    光市: {
        tj: {
            prefecture: "山口県",
            subdivisions: "東部(柳井)",
            subdivisions1: "東部",
            subdivisions2: "柳井",
            hourly: "https://tenki.jp/forecast/7/38/8130/35210/1hour.html"
        },
        wn: {
            prefecture: "山口",
            subdivisions: "東部",
            name: "光市",
            hourly: "https://weathernews.jp/onebox/tenki/yamaguchi/35210/"
        },
        hall: {
            lat: 33.961916,
            long: 131.942296
        }
    },
    柳井市: {
        tj: {
            prefecture: "山口県",
            subdivisions: "東部(柳井)",
            subdivisions1: "東部",
            subdivisions2: "柳井",
            hourly: "https://tenki.jp/forecast/7/38/8130/35212/1hour.html"
        },
        wn: {
            prefecture: "山口",
            subdivisions: "東部",
            name: "柳井市",
            hourly: "https://weathernews.jp/onebox/tenki/yamaguchi/35212/"
        },
        hall: {
            lat: 33.963839,
            long: 132.101597
        }
    },
    周防大島町: {
        tj: {
            prefecture: "山口県",
            subdivisions: "東部(柳井)",
            subdivisions1: "東部",
            subdivisions2: "柳井",
            hourly: "https://tenki.jp/forecast/7/38/8130/35305/1hour.html"
        },
        wn: {
            prefecture: "山口",
            subdivisions: "東部",
            name: "周防大島町",
            hourly: "https://weathernews.jp/onebox/tenki/yamaguchi/35305/"
        },
        hall: {
            lat: 33.927628,
            long: 132.195320
        }
    },
    和木町: {
        tj: {
            prefecture: "山口県",
            subdivisions: "東部(柳井)",
            subdivisions1: "東部",
            subdivisions2: "柳井",
            hourly: "https://tenki.jp/forecast/7/38/8130/35321/1hour.html"
        },
        wn: {
            prefecture: "山口",
            subdivisions: "東部",
            name: "和木町",
            hourly: "https://weathernews.jp/onebox/tenki/yamaguchi/35321/"
        },
        hall: {
            lat: 34.202408,
            long: 132.220405
        }
    },
    上関町: {
        tj: {
            prefecture: "山口県",
            subdivisions: "東部(柳井)",
            subdivisions1: "東部",
            subdivisions2: "柳井",
            hourly: "https://tenki.jp/forecast/7/38/8130/35341/1hour.html"
        },
        wn: {
            prefecture: "山口",
            subdivisions: "東部",
            name: "上関町",
            hourly: "https://weathernews.jp/onebox/tenki/yamaguchi/35341/"
        },
        hall: {
            lat: 33.830795,
            long: 132.110214
        }
    },
    田布施町: {
        tj: {
            prefecture: "山口県",
            subdivisions: "東部(柳井)",
            subdivisions1: "東部",
            subdivisions2: "柳井",
            hourly: "https://tenki.jp/forecast/7/38/8130/35343/1hour.html"
        },
        wn: {
            prefecture: "山口",
            subdivisions: "東部",
            name: "田布施町",
            hourly: "https://weathernews.jp/onebox/tenki/yamaguchi/35343/"
        },
        hall: {
            lat: 33.954677,
            long: 132.041366
        }
    },
    平生町: {
        tj: {
            prefecture: "山口県",
            subdivisions: "東部(柳井)",
            subdivisions1: "東部",
            subdivisions2: "柳井",
            hourly: "https://tenki.jp/forecast/7/38/8130/35344/1hour.html"
        },
        wn: {
            prefecture: "山口",
            subdivisions: "東部",
            name: "平生町",
            hourly: "https://weathernews.jp/onebox/tenki/yamaguchi/35344/"
        },
        hall: {
            lat: 33.938193,
            long: 132.073607
        }
    },
    萩市: {
        tj: {
            prefecture: "山口県",
            subdivisions: "北部(萩)",
            subdivisions1: "北部",
            subdivisions2: "萩",
            hourly: "https://tenki.jp/forecast/7/38/8140/35204/1hour.html"
        },
        wn: {
            prefecture: "山口",
            subdivisions: "北部",
            name: "萩市",
            hourly: "https://weathernews.jp/onebox/tenki/yamaguchi/35204/"
        },
        hall: {
            lat: 34.408107,
            long: 131.399104
        }
    },
    長門市: {
        tj: {
            prefecture: "山口県",
            subdivisions: "北部(萩)",
            subdivisions1: "北部",
            subdivisions2: "萩",
            hourly: "https://tenki.jp/forecast/7/38/8140/35211/1hour.html"
        },
        wn: {
            prefecture: "山口",
            subdivisions: "北部",
            name: "長門市",
            hourly: "https://weathernews.jp/onebox/tenki/yamaguchi/35211/"
        },
        hall: {
            lat: 34.370959,
            long: 131.182198
        }
    },
    美祢市: {
        tj: {
            prefecture: "山口県",
            subdivisions: "北部(萩)",
            subdivisions1: "北部",
            subdivisions2: "萩",
            hourly: "https://tenki.jp/forecast/7/38/8140/35213/1hour.html"
        },
        wn: {
            prefecture: "山口",
            subdivisions: "北部",
            name: "美祢市",
            hourly: "https://weathernews.jp/onebox/tenki/yamaguchi/35213/"
        },
        hall: {
            lat: 34.166767,
            long: 131.206198
        }
    },
    阿武町: {
        tj: {
            prefecture: "山口県",
            subdivisions: "北部(萩)",
            subdivisions1: "北部",
            subdivisions2: "萩",
            hourly: "https://tenki.jp/forecast/7/38/8140/35502/1hour.html"
        },
        wn: {
            prefecture: "山口",
            subdivisions: "北部",
            name: "阿武町",
            hourly: "https://weathernews.jp/onebox/tenki/yamaguchi/35502/"
        },
        hall: {
            lat: 34.503352,
            long: 131.471360
        }
    },
    徳島市: {
        tj: {
            prefecture: "徳島県",
            subdivisions: "北部(徳島)",
            subdivisions1: "北部",
            subdivisions2: "徳島",
            hourly: "https://tenki.jp/forecast/8/39/7110/36201/1hour.html"
        },
        wn: {
            prefecture: "徳島",
            subdivisions: "北部",
            name: "徳島市",
            hourly: "https://weathernews.jp/onebox/tenki/tokushima/36201/"
        },
        hall: {
            lat: 34.070234,
            long: 134.554713
        }
    },
    鳴門市: {
        tj: {
            prefecture: "徳島県",
            subdivisions: "北部(徳島)",
            subdivisions1: "北部",
            subdivisions2: "徳島",
            hourly: "https://tenki.jp/forecast/8/39/7110/36202/1hour.html"
        },
        wn: {
            prefecture: "徳島",
            subdivisions: "北部",
            name: "鳴門市",
            hourly: "https://weathernews.jp/onebox/tenki/tokushima/36202/"
        },
        hall: {
            lat: 34.172590,
            long: 134.608800
        }
    },
    小松島市: {
        tj: {
            prefecture: "徳島県",
            subdivisions: "北部(徳島)",
            subdivisions1: "北部",
            subdivisions2: "徳島",
            hourly: "https://tenki.jp/forecast/8/39/7110/36203/1hour.html"
        },
        wn: {
            prefecture: "徳島",
            subdivisions: "北部",
            name: "小松島市",
            hourly: "https://weathernews.jp/onebox/tenki/tokushima/36203/"
        },
        hall: {
            lat: 34.004713,
            long: 134.590603
        }
    },
    吉野川市: {
        tj: {
            prefecture: "徳島県",
            subdivisions: "北部(徳島)",
            subdivisions1: "北部",
            subdivisions2: "徳島",
            hourly: "https://tenki.jp/forecast/8/39/7110/36205/1hour.html"
        },
        wn: {
            prefecture: "徳島",
            subdivisions: "北部",
            name: "吉野川市",
            hourly: "https://weathernews.jp/onebox/tenki/tokushima/36205/"
        },
        hall: {
            lat: 34.066235,
            long: 134.358667
        }
    },
    阿波市: {
        tj: {
            prefecture: "徳島県",
            subdivisions: "北部(徳島)",
            subdivisions1: "北部",
            subdivisions2: "徳島",
            hourly: "https://tenki.jp/forecast/8/39/7110/36206/1hour.html"
        },
        wn: {
            prefecture: "徳島",
            subdivisions: "北部",
            name: "阿波市",
            hourly: "https://weathernews.jp/onebox/tenki/tokushima/36206/"
        },
        hall: {
            lat: 34.102138,
            long: 134.297456
        }
    },
    美馬市: {
        tj: {
            prefecture: "徳島県",
            subdivisions: "北部(徳島)",
            subdivisions1: "北部",
            subdivisions2: "徳島",
            hourly: "https://tenki.jp/forecast/8/39/7110/36207/1hour.html"
        },
        wn: {
            prefecture: "徳島",
            subdivisions: "北部",
            name: "美馬市",
            hourly: "https://weathernews.jp/onebox/tenki/tokushima/36207/"
        },
        hall: {
            lat: 34.053387,
            long: 134.169725
        }
    },
    三好市: {
        tj: {
            prefecture: "徳島県",
            subdivisions: "北部(徳島)",
            subdivisions1: "北部",
            subdivisions2: "徳島",
            hourly: "https://tenki.jp/forecast/8/39/7110/36208/1hour.html"
        },
        wn: {
            prefecture: "徳島",
            subdivisions: "北部",
            name: "三好市",
            hourly: "https://weathernews.jp/onebox/tenki/tokushima/36208/"
        },
        hall: {
            lat: 34.026044,
            long: 133.807180
        }
    },
    佐那河内村: {
        tj: {
            prefecture: "徳島県",
            subdivisions: "北部(徳島)",
            subdivisions1: "北部",
            subdivisions2: "徳島",
            hourly: "https://tenki.jp/forecast/8/39/7110/36321/1hour.html"
        },
        wn: {
            prefecture: "徳島",
            subdivisions: "北部",
            name: "佐那河内村",
            hourly: "https://weathernews.jp/onebox/tenki/tokushima/36321/"
        },
        hall: {
            lat: 33.993786,
            long: 134.457703
        }
    },
    石井町: {
        tj: {
            prefecture: "徳島県",
            subdivisions: "北部(徳島)",
            subdivisions1: "北部",
            subdivisions2: "徳島",
            hourly: "https://tenki.jp/forecast/8/39/7110/36341/1hour.html"
        },
        wn: {
            prefecture: "徳島",
            subdivisions: "北部",
            name: "石井町",
            hourly: "https://weathernews.jp/onebox/tenki/tokushima/36341/"
        },
        hall: {
            lat: 34.074698,
            long: 134.440764
        }
    },
    神山町: {
        tj: {
            prefecture: "徳島県",
            subdivisions: "北部(徳島)",
            subdivisions1: "北部",
            subdivisions2: "徳島",
            hourly: "https://tenki.jp/forecast/8/39/7110/36342/1hour.html"
        },
        wn: {
            prefecture: "徳島",
            subdivisions: "北部",
            name: "神山町",
            hourly: "https://weathernews.jp/onebox/tenki/tokushima/36342/"
        },
        hall: {
            lat: 33.967225,
            long: 134.350531
        }
    },
    松茂町: {
        tj: {
            prefecture: "徳島県",
            subdivisions: "北部(徳島)",
            subdivisions1: "北部",
            subdivisions2: "徳島",
            hourly: "https://tenki.jp/forecast/8/39/7110/36401/1hour.html"
        },
        wn: {
            prefecture: "徳島",
            subdivisions: "北部",
            name: "松茂町",
            hourly: "https://weathernews.jp/onebox/tenki/tokushima/36401/"
        },
        hall: {
            lat: 34.133849,
            long: 134.580537
        }
    },
    北島町: {
        tj: {
            prefecture: "徳島県",
            subdivisions: "北部(徳島)",
            subdivisions1: "北部",
            subdivisions2: "徳島",
            hourly: "https://tenki.jp/forecast/8/39/7110/36402/1hour.html"
        },
        wn: {
            prefecture: "徳島",
            subdivisions: "北部",
            name: "北島町",
            hourly: "https://weathernews.jp/onebox/tenki/tokushima/36402/"
        },
        hall: {
            lat: 34.125594,
            long: 134.546985
        }
    },
    藍住町: {
        tj: {
            prefecture: "徳島県",
            subdivisions: "北部(徳島)",
            subdivisions1: "北部",
            subdivisions2: "徳島",
            hourly: "https://tenki.jp/forecast/8/39/7110/36403/1hour.html"
        },
        wn: {
            prefecture: "徳島",
            subdivisions: "北部",
            name: "藍住町",
            hourly: "https://weathernews.jp/onebox/tenki/tokushima/36403/"
        },
        hall: {
            lat: 34.126776,
            long: 134.495112
        }
    },
    板野町: {
        tj: {
            prefecture: "徳島県",
            subdivisions: "北部(徳島)",
            subdivisions1: "北部",
            subdivisions2: "徳島",
            hourly: "https://tenki.jp/forecast/8/39/7110/36404/1hour.html"
        },
        wn: {
            prefecture: "徳島",
            subdivisions: "北部",
            name: "板野町",
            hourly: "https://weathernews.jp/onebox/tenki/tokushima/36404/"
        },
        hall: {
            lat: 34.144364,
            long: 134.462616
        }
    },
    上板町: {
        tj: {
            prefecture: "徳島県",
            subdivisions: "北部(徳島)",
            subdivisions1: "北部",
            subdivisions2: "徳島",
            hourly: "https://tenki.jp/forecast/8/39/7110/36405/1hour.html"
        },
        wn: {
            prefecture: "徳島",
            subdivisions: "北部",
            name: "上板町",
            hourly: "https://weathernews.jp/onebox/tenki/tokushima/36405/"
        },
        hall: {
            lat: 34.121365,
            long: 134.404999
        }
    },
    つるぎ町: {
        tj: {
            prefecture: "徳島県",
            subdivisions: "北部(徳島)",
            subdivisions1: "北部",
            subdivisions2: "徳島",
            hourly: "https://tenki.jp/forecast/8/39/7110/36468/1hour.html"
        },
        wn: {
            prefecture: "徳島",
            subdivisions: "北部",
            name: "つるぎ町",
            hourly: "https://weathernews.jp/onebox/tenki/tokushima/36468/"
        },
        hall: {
            lat: 34.037307,
            long: 134.064051
        }
    },
    東みよし町: {
        tj: {
            prefecture: "徳島県",
            subdivisions: "北部(徳島)",
            subdivisions1: "北部",
            subdivisions2: "徳島",
            hourly: "https://tenki.jp/forecast/8/39/7110/36489/1hour.html"
        },
        wn: {
            prefecture: "徳島",
            subdivisions: "北部",
            name: "東みよし町",
            hourly: "https://weathernews.jp/onebox/tenki/tokushima/36489/"
        },
        hall: {
            lat: 34.036785,
            long: 133.936760
        }
    },
    阿南市: {
        tj: {
            prefecture: "徳島県",
            subdivisions: "南部(日和佐)",
            subdivisions1: "南部",
            subdivisions2: "日和佐",
            hourly: "https://tenki.jp/forecast/8/39/7120/36204/1hour.html"
        },
        wn: {
            prefecture: "徳島",
            subdivisions: "南部",
            name: "阿南市",
            hourly: "https://weathernews.jp/onebox/tenki/tokushima/36204/"
        },
        hall: {
            lat: 33.921762,
            long: 134.659566
        }
    },
    勝浦町: {
        tj: {
            prefecture: "徳島県",
            subdivisions: "南部(日和佐)",
            subdivisions1: "南部",
            subdivisions2: "日和佐",
            hourly: "https://tenki.jp/forecast/8/39/7120/36301/1hour.html"
        },
        wn: {
            prefecture: "徳島",
            subdivisions: "南部",
            name: "勝浦町",
            hourly: "https://weathernews.jp/onebox/tenki/tokushima/36301/"
        },
        hall: {
            lat: 33.931453,
            long: 134.511251
        }
    },
    上勝町: {
        tj: {
            prefecture: "徳島県",
            subdivisions: "南部(日和佐)",
            subdivisions1: "南部",
            subdivisions2: "日和佐",
            hourly: "https://tenki.jp/forecast/8/39/7120/36302/1hour.html"
        },
        wn: {
            prefecture: "徳島",
            subdivisions: "南部",
            name: "上勝町",
            hourly: "https://weathernews.jp/onebox/tenki/tokushima/36302/"
        },
        hall: {
            lat: 33.888841,
            long: 134.401819
        }
    },
    那賀町: {
        tj: {
            prefecture: "徳島県",
            subdivisions: "南部(日和佐)",
            subdivisions1: "南部",
            subdivisions2: "日和佐",
            hourly: "https://tenki.jp/forecast/8/39/7120/36368/1hour.html"
        },
        wn: {
            prefecture: "徳島",
            subdivisions: "南部",
            name: "那賀町",
            hourly: "https://weathernews.jp/onebox/tenki/tokushima/36368/"
        },
        hall: {
            lat: 33.857497,
            long: 134.496736
        }
    },
    牟岐町: {
        tj: {
            prefecture: "徳島県",
            subdivisions: "南部(日和佐)",
            subdivisions1: "南部",
            subdivisions2: "日和佐",
            hourly: "https://tenki.jp/forecast/8/39/7120/36383/1hour.html"
        },
        wn: {
            prefecture: "徳島",
            subdivisions: "南部",
            name: "牟岐町",
            hourly: "https://weathernews.jp/onebox/tenki/tokushima/36383/"
        },
        hall: {
            lat: 33.668312,
            long: 134.420661
        }
    },
    美波町: {
        tj: {
            prefecture: "徳島県",
            subdivisions: "南部(日和佐)",
            subdivisions1: "南部",
            subdivisions2: "日和佐",
            hourly: "https://tenki.jp/forecast/8/39/7120/36387/1hour.html"
        },
        wn: {
            prefecture: "徳島",
            subdivisions: "南部",
            name: "美波町",
            hourly: "https://weathernews.jp/onebox/tenki/tokushima/36387/"
        },
        hall: {
            lat: 33.734573,
            long: 134.535413
        }
    },
    海陽町: {
        tj: {
            prefecture: "徳島県",
            subdivisions: "南部(日和佐)",
            subdivisions1: "南部",
            subdivisions2: "日和佐",
            hourly: "https://tenki.jp/forecast/8/39/7120/36388/1hour.html"
        },
        wn: {
            prefecture: "徳島",
            subdivisions: "南部",
            name: "海陽町",
            hourly: "https://weathernews.jp/onebox/tenki/tokushima/36388/"
        },
        hall: {
            lat: 33.602043,
            long: 134.351866
        }
    },
    高松市: {
        tj: {
            prefecture: "香川県",
            subdivisions: "香川県(高松)",
            subdivisions1: "香川県",
            subdivisions2: "高松",
            hourly: "https://tenki.jp/forecast/8/40/7200/37201/1hour.html"
        },
        wn: {
            prefecture: "香川",
            subdivisions: "香川県",
            name: "高松市",
            hourly: "https://weathernews.jp/onebox/tenki/kagawa/37201/"
        },
        hall: {
            lat: 34.342791,
            long: 134.046574
        }
    },
    丸亀市: {
        tj: {
            prefecture: "香川県",
            subdivisions: "香川県(高松)",
            subdivisions1: "香川県",
            subdivisions2: "高松",
            hourly: "https://tenki.jp/forecast/8/40/7200/37202/1hour.html"
        },
        wn: {
            prefecture: "香川",
            subdivisions: "香川県",
            name: "丸亀市",
            hourly: "https://weathernews.jp/onebox/tenki/kagawa/37202/"
        },
        hall: {
            lat: 34.289886,
            long: 133.798713
        }
    },
    坂出市: {
        tj: {
            prefecture: "香川県",
            subdivisions: "香川県(高松)",
            subdivisions1: "香川県",
            subdivisions2: "高松",
            hourly: "https://tenki.jp/forecast/8/40/7200/37203/1hour.html"
        },
        wn: {
            prefecture: "香川",
            subdivisions: "香川県",
            name: "坂出市",
            hourly: "https://weathernews.jp/onebox/tenki/kagawa/37203/"
        },
        hall: {
            lat: 34.316692,
            long: 133.860493
        }
    },
    善通寺市: {
        tj: {
            prefecture: "香川県",
            subdivisions: "香川県(高松)",
            subdivisions1: "香川県",
            subdivisions2: "高松",
            hourly: "https://tenki.jp/forecast/8/40/7200/37204/1hour.html"
        },
        wn: {
            prefecture: "香川",
            subdivisions: "香川県",
            name: "善通寺市",
            hourly: "https://weathernews.jp/onebox/tenki/kagawa/37204/"
        },
        hall: {
            lat: 34.227160,
            long: 133.787188
        }
    },
    観音寺市: {
        tj: {
            prefecture: "香川県",
            subdivisions: "香川県(高松)",
            subdivisions1: "香川県",
            subdivisions2: "高松",
            hourly: "https://tenki.jp/forecast/8/40/7200/37205/1hour.html"
        },
        wn: {
            prefecture: "香川",
            subdivisions: "香川県",
            name: "観音寺市",
            hourly: "https://weathernews.jp/onebox/tenki/kagawa/37205/"
        },
        hall: {
            lat: 34.127370,
            long: 133.661597
        }
    },
    さぬき市: {
        tj: {
            prefecture: "香川県",
            subdivisions: "香川県(高松)",
            subdivisions1: "香川県",
            subdivisions2: "高松",
            hourly: "https://tenki.jp/forecast/8/40/7200/37206/1hour.html"
        },
        wn: {
            prefecture: "香川",
            subdivisions: "香川県",
            name: "さぬき市",
            hourly: "https://weathernews.jp/onebox/tenki/kagawa/37206/"
        },
        hall: {
            lat: 34.325210,
            long: 134.171989
        }
    },
    東かがわ市: {
        tj: {
            prefecture: "香川県",
            subdivisions: "香川県(高松)",
            subdivisions1: "香川県",
            subdivisions2: "高松",
            hourly: "https://tenki.jp/forecast/8/40/7200/37207/1hour.html"
        },
        wn: {
            prefecture: "香川",
            subdivisions: "香川県",
            name: "東かがわ市",
            hourly: "https://weathernews.jp/onebox/tenki/kagawa/37207/"
        },
        hall: {
            lat: 34.243803,
            long: 134.358837
        }
    },
    三豊市: {
        tj: {
            prefecture: "香川県",
            subdivisions: "香川県(高松)",
            subdivisions1: "香川県",
            subdivisions2: "高松",
            hourly: "https://tenki.jp/forecast/8/40/7200/37208/1hour.html"
        },
        wn: {
            prefecture: "香川",
            subdivisions: "香川県",
            name: "三豊市",
            hourly: "https://weathernews.jp/onebox/tenki/kagawa/37208/"
        },
        hall: {
            lat: 34.182556,
            long: 133.715203
        }
    },
    土庄町: {
        tj: {
            prefecture: "香川県",
            subdivisions: "香川県(高松)",
            subdivisions1: "香川県",
            subdivisions2: "高松",
            hourly: "https://tenki.jp/forecast/8/40/7200/37322/1hour.html"
        },
        wn: {
            prefecture: "香川",
            subdivisions: "香川県",
            name: "土庄町",
            hourly: "https://weathernews.jp/onebox/tenki/kagawa/37322/"
        },
        hall: {
            lat: 34.486653,
            long: 134.188629
        }
    },
    小豆島町: {
        tj: {
            prefecture: "香川県",
            subdivisions: "香川県(高松)",
            subdivisions1: "香川県",
            subdivisions2: "高松",
            hourly: "https://tenki.jp/forecast/8/40/7200/37324/1hour.html"
        },
        wn: {
            prefecture: "香川",
            subdivisions: "香川県",
            name: "小豆島町",
            hourly: "https://weathernews.jp/onebox/tenki/kagawa/37324/"
        },
        hall: {
            lat: 34.479714,
            long: 134.308880
        }
    },
    三木町: {
        tj: {
            prefecture: "香川県",
            subdivisions: "香川県(高松)",
            subdivisions1: "香川県",
            subdivisions2: "高松",
            hourly: "https://tenki.jp/forecast/8/40/7200/37341/1hour.html"
        },
        wn: {
            prefecture: "香川",
            subdivisions: "香川県",
            name: "三木町",
            hourly: "https://weathernews.jp/onebox/tenki/kagawa/37341/"
        },
        hall: {
            lat: 34.268355,
            long: 134.134363
        }
    },
    直島町: {
        tj: {
            prefecture: "香川県",
            subdivisions: "香川県(高松)",
            subdivisions1: "香川県",
            subdivisions2: "高松",
            hourly: "https://tenki.jp/forecast/8/40/7200/37364/1hour.html"
        },
        wn: {
            prefecture: "香川",
            subdivisions: "香川県",
            name: "直島町",
            hourly: "https://weathernews.jp/onebox/tenki/kagawa/37364/"
        },
        hall: {
            lat: 34.459830,
            long: 133.995638
        }
    },
    宇多津町: {
        tj: {
            prefecture: "香川県",
            subdivisions: "香川県(高松)",
            subdivisions1: "香川県",
            subdivisions2: "高松",
            hourly: "https://tenki.jp/forecast/8/40/7200/37386/1hour.html"
        },
        wn: {
            prefecture: "香川",
            subdivisions: "香川県",
            name: "宇多津町",
            hourly: "https://weathernews.jp/onebox/tenki/kagawa/37386/"
        },
        hall: {
            lat: 34.310301,
            long: 133.825566
        }
    },
    綾川町: {
        tj: {
            prefecture: "香川県",
            subdivisions: "香川県(高松)",
            subdivisions1: "香川県",
            subdivisions2: "高松",
            hourly: "https://tenki.jp/forecast/8/40/7200/37387/1hour.html"
        },
        wn: {
            prefecture: "香川",
            subdivisions: "香川県",
            name: "綾川町",
            hourly: "https://weathernews.jp/onebox/tenki/kagawa/37387/"
        },
        hall: {
            lat: 34.249613,
            long: 133.923099
        }
    },
    琴平町: {
        tj: {
            prefecture: "香川県",
            subdivisions: "香川県(高松)",
            subdivisions1: "香川県",
            subdivisions2: "高松",
            hourly: "https://tenki.jp/forecast/8/40/7200/37403/1hour.html"
        },
        wn: {
            prefecture: "香川",
            subdivisions: "香川県",
            name: "琴平町",
            hourly: "https://weathernews.jp/onebox/tenki/kagawa/37403/"
        },
        hall: {
            lat: 34.191420,
            long: 133.823303
        }
    },
    多度津町: {
        tj: {
            prefecture: "香川県",
            subdivisions: "香川県(高松)",
            subdivisions1: "香川県",
            subdivisions2: "高松",
            hourly: "https://tenki.jp/forecast/8/40/7200/37404/1hour.html"
        },
        wn: {
            prefecture: "香川",
            subdivisions: "香川県",
            name: "多度津町",
            hourly: "https://weathernews.jp/onebox/tenki/kagawa/37404/"
        },
        hall: {
            lat: 34.272711,
            long: 133.758553
        }
    },
    まんのう町: {
        tj: {
            prefecture: "香川県",
            subdivisions: "香川県(高松)",
            subdivisions1: "香川県",
            subdivisions2: "高松",
            hourly: "https://tenki.jp/forecast/8/40/7200/37406/1hour.html"
        },
        wn: {
            prefecture: "香川",
            subdivisions: "香川県",
            name: "まんのう町",
            hourly: "https://weathernews.jp/onebox/tenki/kagawa/37406/"
        },
        hall: {
            lat: 34.192334,
            long: 133.841393
        }
    },
    松山市: {
        tj: {
            prefecture: "愛媛県",
            subdivisions: "中予(松山)",
            subdivisions1: "中予",
            subdivisions2: "松山",
            hourly: "https://tenki.jp/forecast/8/41/7310/38201/1hour.html"
        },
        wn: {
            prefecture: "愛媛",
            subdivisions: "中予",
            name: "松山市",
            hourly: "https://weathernews.jp/onebox/tenki/ehime/38201/"
        },
        hall: {
            lat: 33.839157,
            long: 132.765556
        }
    },
    伊予市: {
        tj: {
            prefecture: "愛媛県",
            subdivisions: "中予(松山)",
            subdivisions1: "中予",
            subdivisions2: "松山",
            hourly: "https://tenki.jp/forecast/8/41/7310/38210/1hour.html"
        },
        wn: {
            prefecture: "愛媛",
            subdivisions: "中予",
            name: "伊予市",
            hourly: "https://weathernews.jp/onebox/tenki/ehime/38210/"
        },
        hall: {
            lat: 33.757461,
            long: 132.703778
        }
    },
    東温市: {
        tj: {
            prefecture: "愛媛県",
            subdivisions: "中予(松山)",
            subdivisions1: "中予",
            subdivisions2: "松山",
            hourly: "https://tenki.jp/forecast/8/41/7310/38215/1hour.html"
        },
        wn: {
            prefecture: "愛媛",
            subdivisions: "中予",
            name: "東温市",
            hourly: "https://weathernews.jp/onebox/tenki/ehime/38215/"
        },
        hall: {
            lat: 33.791027,
            long: 132.872299
        }
    },
    久万高原町: {
        tj: {
            prefecture: "愛媛県",
            subdivisions: "中予(松山)",
            subdivisions1: "中予",
            subdivisions2: "松山",
            hourly: "https://tenki.jp/forecast/8/41/7310/38386/1hour.html"
        },
        wn: {
            prefecture: "愛媛",
            subdivisions: "中予",
            name: "久万高原町",
            hourly: "https://weathernews.jp/onebox/tenki/ehime/38386/"
        },
        hall: {
            lat: 33.655603,
            long: 132.901665
        }
    },
    松前町: {
        tj: {
            prefecture: "愛媛県",
            subdivisions: "中予(松山)",
            subdivisions1: "中予",
            subdivisions2: "松山",
            hourly: "https://tenki.jp/forecast/8/41/7310/38401/1hour.html"
        },
        wn: {
            prefecture: "愛媛",
            subdivisions: "中予",
            name: "松前町",
            hourly: "https://weathernews.jp/onebox/tenki/ehime/38401/"
        },
        hall: {
            lat: 41.429981,
            long: 140.110403
        }
    },
    砥部町: {
        tj: {
            prefecture: "愛媛県",
            subdivisions: "中予(松山)",
            subdivisions1: "中予",
            subdivisions2: "松山",
            hourly: "https://tenki.jp/forecast/8/41/7310/38402/1hour.html"
        },
        wn: {
            prefecture: "愛媛",
            subdivisions: "中予",
            name: "砥部町",
            hourly: "https://weathernews.jp/onebox/tenki/ehime/38402/"
        },
        hall: {
            lat: 33.749260,
            long: 132.792233
        }
    },
    今治市: {
        tj: {
            prefecture: "愛媛県",
            subdivisions: "東予(新居浜)",
            subdivisions1: "東予",
            subdivisions2: "新居浜",
            hourly: "https://tenki.jp/forecast/8/41/7320/38202/1hour.html"
        },
        wn: {
            prefecture: "愛媛",
            subdivisions: "東予",
            name: "今治市",
            hourly: "https://weathernews.jp/onebox/tenki/ehime/38202/"
        },
        hall: {
            lat: 34.066043,
            long: 132.997658
        }
    },
    新居浜市: {
        tj: {
            prefecture: "愛媛県",
            subdivisions: "東予(新居浜)",
            subdivisions1: "東予",
            subdivisions2: "新居浜",
            hourly: "https://tenki.jp/forecast/8/41/7320/38205/1hour.html"
        },
        wn: {
            prefecture: "愛媛",
            subdivisions: "東予",
            name: "新居浜市",
            hourly: "https://weathernews.jp/onebox/tenki/ehime/38205/"
        },
        hall: {
            lat: 33.960329,
            long: 133.283379
        }
    },
    西条市: {
        tj: {
            prefecture: "愛媛県",
            subdivisions: "東予(新居浜)",
            subdivisions1: "東予",
            subdivisions2: "新居浜",
            hourly: "https://tenki.jp/forecast/8/41/7320/38206/1hour.html"
        },
        wn: {
            prefecture: "愛媛",
            subdivisions: "東予",
            name: "西条市",
            hourly: "https://weathernews.jp/onebox/tenki/ehime/38206/"
        },
        hall: {
            lat: 33.919615,
            long: 133.181186
        }
    },
    四国中央市: {
        tj: {
            prefecture: "愛媛県",
            subdivisions: "東予(新居浜)",
            subdivisions1: "東予",
            subdivisions2: "新居浜",
            hourly: "https://tenki.jp/forecast/8/41/7320/38213/1hour.html"
        },
        wn: {
            prefecture: "愛媛",
            subdivisions: "東予",
            name: "四国中央市",
            hourly: "https://weathernews.jp/onebox/tenki/ehime/38213/"
        },
        hall: {
            lat: 33.980694,
            long: 133.549188
        }
    },
    上島町: {
        tj: {
            prefecture: "愛媛県",
            subdivisions: "東予(新居浜)",
            subdivisions1: "東予",
            subdivisions2: "新居浜",
            hourly: "https://tenki.jp/forecast/8/41/7320/38356/1hour.html"
        },
        wn: {
            prefecture: "愛媛",
            subdivisions: "東予",
            name: "上島町",
            hourly: "https://weathernews.jp/onebox/tenki/ehime/38356/"
        },
        hall: {
            lat: 34.257467,
            long: 133.204492
        }
    },
    宇和島市: {
        tj: {
            prefecture: "愛媛県",
            subdivisions: "南予(宇和島)",
            subdivisions1: "南予",
            subdivisions2: "宇和島",
            hourly: "https://tenki.jp/forecast/8/41/7330/38203/1hour.html"
        },
        wn: {
            prefecture: "愛媛",
            subdivisions: "南予",
            name: "宇和島市",
            hourly: "https://weathernews.jp/onebox/tenki/ehime/38203/"
        },
        hall: {
            lat: 33.223340,
            long: 132.560563
        }
    },
    八幡浜市: {
        tj: {
            prefecture: "愛媛県",
            subdivisions: "南予(宇和島)",
            subdivisions1: "南予",
            subdivisions2: "宇和島",
            hourly: "https://tenki.jp/forecast/8/41/7330/38204/1hour.html"
        },
        wn: {
            prefecture: "愛媛",
            subdivisions: "南予",
            name: "八幡浜市",
            hourly: "https://weathernews.jp/onebox/tenki/ehime/38204/"
        },
        hall: {
            lat: 33.462898,
            long: 132.423334
        }
    },
    大洲市: {
        tj: {
            prefecture: "愛媛県",
            subdivisions: "南予(宇和島)",
            subdivisions1: "南予",
            subdivisions2: "宇和島",
            hourly: "https://tenki.jp/forecast/8/41/7330/38207/1hour.html"
        },
        wn: {
            prefecture: "愛媛",
            subdivisions: "南予",
            name: "大洲市",
            hourly: "https://weathernews.jp/onebox/tenki/ehime/38207/"
        },
        hall: {
            lat: 33.506285,
            long: 132.544514
        }
    },
    西予市: {
        tj: {
            prefecture: "愛媛県",
            subdivisions: "南予(宇和島)",
            subdivisions1: "南予",
            subdivisions2: "宇和島",
            hourly: "https://tenki.jp/forecast/8/41/7330/38214/1hour.html"
        },
        wn: {
            prefecture: "愛媛",
            subdivisions: "南予",
            name: "西予市",
            hourly: "https://weathernews.jp/onebox/tenki/ehime/38214/"
        },
        hall: {
            lat: 33.363017,
            long: 132.510967
        }
    },
    内子町: {
        tj: {
            prefecture: "愛媛県",
            subdivisions: "南予(宇和島)",
            subdivisions1: "南予",
            subdivisions2: "宇和島",
            hourly: "https://tenki.jp/forecast/8/41/7330/38422/1hour.html"
        },
        wn: {
            prefecture: "愛媛",
            subdivisions: "南予",
            name: "内子町",
            hourly: "https://weathernews.jp/onebox/tenki/ehime/38422/"
        },
        hall: {
            lat: 33.532937,
            long: 132.658083
        }
    },
    伊方町: {
        tj: {
            prefecture: "愛媛県",
            subdivisions: "南予(宇和島)",
            subdivisions1: "南予",
            subdivisions2: "宇和島",
            hourly: "https://tenki.jp/forecast/8/41/7330/38442/1hour.html"
        },
        wn: {
            prefecture: "愛媛",
            subdivisions: "南予",
            name: "伊方町",
            hourly: "https://weathernews.jp/onebox/tenki/ehime/38442/"
        },
        hall: {
            lat: 33.488593,
            long: 132.353998
        }
    },
    松野町: {
        tj: {
            prefecture: "愛媛県",
            subdivisions: "南予(宇和島)",
            subdivisions1: "南予",
            subdivisions2: "宇和島",
            hourly: "https://tenki.jp/forecast/8/41/7330/38484/1hour.html"
        },
        wn: {
            prefecture: "愛媛",
            subdivisions: "南予",
            name: "松野町",
            hourly: "https://weathernews.jp/onebox/tenki/ehime/38484/"
        },
        hall: {
            lat: 33.227142,
            long: 132.711304
        }
    },
    鬼北町: {
        tj: {
            prefecture: "愛媛県",
            subdivisions: "南予(宇和島)",
            subdivisions1: "南予",
            subdivisions2: "宇和島",
            hourly: "https://tenki.jp/forecast/8/41/7330/38488/1hour.html"
        },
        wn: {
            prefecture: "愛媛",
            subdivisions: "南予",
            name: "鬼北町",
            hourly: "https://weathernews.jp/onebox/tenki/ehime/38488/"
        },
        hall: {
            lat: 33.255792,
            long: 132.684032
        }
    },
    愛南町: {
        tj: {
            prefecture: "愛媛県",
            subdivisions: "南予(宇和島)",
            subdivisions1: "南予",
            subdivisions2: "宇和島",
            hourly: "https://tenki.jp/forecast/8/41/7330/38506/1hour.html"
        },
        wn: {
            prefecture: "愛媛",
            subdivisions: "南予",
            name: "愛南町",
            hourly: "https://weathernews.jp/onebox/tenki/ehime/38506/"
        },
        hall: {
            lat: 32.962168,
            long: 132.583326
        }
    },
    高知市: {
        tj: {
            prefecture: "高知県",
            subdivisions: "中部(高知)",
            subdivisions1: "中部",
            subdivisions2: "高知",
            hourly: "https://tenki.jp/forecast/8/42/7410/39201/1hour.html"
        },
        wn: {
            prefecture: "高知",
            subdivisions: "中部",
            name: "高知市",
            hourly: "https://weathernews.jp/onebox/tenki/kouchi/39201/"
        },
        hall: {
            lat: 33.558722,
            long: 133.531094
        }
    },
    南国市: {
        tj: {
            prefecture: "高知県",
            subdivisions: "中部(高知)",
            subdivisions1: "中部",
            subdivisions2: "高知",
            hourly: "https://tenki.jp/forecast/8/42/7410/39204/1hour.html"
        },
        wn: {
            prefecture: "高知",
            subdivisions: "中部",
            name: "南国市",
            hourly: "https://weathernews.jp/onebox/tenki/kouchi/39204/"
        },
        hall: {
            lat: 33.575673,
            long: 133.641460
        }
    },
    土佐市: {
        tj: {
            prefecture: "高知県",
            subdivisions: "中部(高知)",
            subdivisions1: "中部",
            subdivisions2: "高知",
            hourly: "https://tenki.jp/forecast/8/42/7410/39205/1hour.html"
        },
        wn: {
            prefecture: "高知",
            subdivisions: "中部",
            name: "土佐市",
            hourly: "https://weathernews.jp/onebox/tenki/kouchi/39205/"
        },
        hall: {
            lat: 33.495999,
            long: 133.425055
        }
    },
    須崎市: {
        tj: {
            prefecture: "高知県",
            subdivisions: "中部(高知)",
            subdivisions1: "中部",
            subdivisions2: "高知",
            hourly: "https://tenki.jp/forecast/8/42/7410/39206/1hour.html"
        },
        wn: {
            prefecture: "高知",
            subdivisions: "中部",
            name: "須崎市",
            hourly: "https://weathernews.jp/onebox/tenki/kouchi/39206/"
        },
        hall: {
            lat: 33.400745,
            long: 133.282959
        }
    },
    香南市: {
        tj: {
            prefecture: "高知県",
            subdivisions: "中部(高知)",
            subdivisions1: "中部",
            subdivisions2: "高知",
            hourly: "https://tenki.jp/forecast/8/42/7410/39211/1hour.html"
        },
        wn: {
            prefecture: "高知",
            subdivisions: "中部",
            name: "香南市",
            hourly: "https://weathernews.jp/onebox/tenki/kouchi/39211/"
        },
        hall: {
            lat: 33.564362,
            long: 133.700788
        }
    },
    香美市: {
        tj: {
            prefecture: "高知県",
            subdivisions: "中部(高知)",
            subdivisions1: "中部",
            subdivisions2: "高知",
            hourly: "https://tenki.jp/forecast/8/42/7410/39212/1hour.html"
        },
        wn: {
            prefecture: "高知",
            subdivisions: "中部",
            name: "香美市",
            hourly: "https://weathernews.jp/onebox/tenki/kouchi/39212/"
        },
        hall: {
            lat: 33.603860,
            long: 133.686245
        }
    },
    本山町: {
        tj: {
            prefecture: "高知県",
            subdivisions: "中部(高知)",
            subdivisions1: "中部",
            subdivisions2: "高知",
            hourly: "https://tenki.jp/forecast/8/42/7410/39341/1hour.html"
        },
        wn: {
            prefecture: "高知",
            subdivisions: "中部",
            name: "本山町",
            hourly: "https://weathernews.jp/onebox/tenki/kouchi/39341/"
        },
        hall: {
            lat: 33.759656,
            long: 133.586721
        }
    },
    大豊町: {
        tj: {
            prefecture: "高知県",
            subdivisions: "中部(高知)",
            subdivisions1: "中部",
            subdivisions2: "高知",
            hourly: "https://tenki.jp/forecast/8/42/7410/39344/1hour.html"
        },
        wn: {
            prefecture: "高知",
            subdivisions: "中部",
            name: "大豊町",
            hourly: "https://weathernews.jp/onebox/tenki/kouchi/39344/"
        },
        hall: {
            lat: 33.768665,
            long: 133.643036
        }
    },
    土佐町: {
        tj: {
            prefecture: "高知県",
            subdivisions: "中部(高知)",
            subdivisions1: "中部",
            subdivisions2: "高知",
            hourly: "https://tenki.jp/forecast/8/42/7410/39363/1hour.html"
        },
        wn: {
            prefecture: "高知",
            subdivisions: "中部",
            name: "土佐町",
            hourly: "https://weathernews.jp/onebox/tenki/kouchi/39363/"
        },
        hall: {
            lat: 33.737026,
            long: 133.531791
        }
    },
    大川村: {
        tj: {
            prefecture: "高知県",
            subdivisions: "中部(高知)",
            subdivisions1: "中部",
            subdivisions2: "高知",
            hourly: "https://tenki.jp/forecast/8/42/7410/39364/1hour.html"
        },
        wn: {
            prefecture: "高知",
            subdivisions: "中部",
            name: "大川村",
            hourly: "https://weathernews.jp/onebox/tenki/kouchi/39364/"
        },
        hall: {
            lat: 33.783927,
            long: 133.466613
        }
    },
    いの町: {
        tj: {
            prefecture: "高知県",
            subdivisions: "中部(高知)",
            subdivisions1: "中部",
            subdivisions2: "高知",
            hourly: "https://tenki.jp/forecast/8/42/7410/39386/1hour.html"
        },
        wn: {
            prefecture: "高知",
            subdivisions: "中部",
            name: "いの町",
            hourly: "https://weathernews.jp/onebox/tenki/kouchi/39386/"
        },
        hall: {
            lat: 33.548689,
            long: 133.427583
        }
    },
    仁淀川町: {
        tj: {
            prefecture: "高知県",
            subdivisions: "中部(高知)",
            subdivisions1: "中部",
            subdivisions2: "高知",
            hourly: "https://tenki.jp/forecast/8/42/7410/39387/1hour.html"
        },
        wn: {
            prefecture: "高知",
            subdivisions: "中部",
            name: "仁淀川町",
            hourly: "https://weathernews.jp/onebox/tenki/kouchi/39387/"
        },
        hall: {
            lat: 33.575286,
            long: 133.171000
        }
    },
    佐川町: {
        tj: {
            prefecture: "高知県",
            subdivisions: "中部(高知)",
            subdivisions1: "中部",
            subdivisions2: "高知",
            hourly: "https://tenki.jp/forecast/8/42/7410/39402/1hour.html"
        },
        wn: {
            prefecture: "高知",
            subdivisions: "中部",
            name: "佐川町",
            hourly: "https://weathernews.jp/onebox/tenki/kouchi/39402/"
        },
        hall: {
            lat: 33.500809,
            long: 133.286642
        }
    },
    越知町: {
        tj: {
            prefecture: "高知県",
            subdivisions: "中部(高知)",
            subdivisions1: "中部",
            subdivisions2: "高知",
            hourly: "https://tenki.jp/forecast/8/42/7410/39403/1hour.html"
        },
        wn: {
            prefecture: "高知",
            subdivisions: "中部",
            name: "越知町",
            hourly: "https://weathernews.jp/onebox/tenki/kouchi/39403/"
        },
        hall: {
            lat: 33.532848,
            long: 133.252221
        }
    },
    日高村: {
        tj: {
            prefecture: "高知県",
            subdivisions: "中部(高知)",
            subdivisions1: "中部",
            subdivisions2: "高知",
            hourly: "https://tenki.jp/forecast/8/42/7410/39410/1hour.html"
        },
        wn: {
            prefecture: "高知",
            subdivisions: "中部",
            name: "日高村",
            hourly: "https://weathernews.jp/onebox/tenki/kouchi/39410/"
        },
        hall: {
            lat: 33.535083,
            long: 133.373201
        }
    },
    室戸市: {
        tj: {
            prefecture: "高知県",
            subdivisions: "東部(室戸岬)",
            subdivisions1: "東部",
            subdivisions2: "室戸岬",
            hourly: "https://tenki.jp/forecast/8/42/7420/39202/1hour.html"
        },
        wn: {
            prefecture: "高知",
            subdivisions: "東部",
            name: "室戸市",
            hourly: "https://weathernews.jp/onebox/tenki/kouchi/39202/"
        },
        hall: {
            lat: 33.289955,
            long: 134.151981
        }
    },
    安芸市: {
        tj: {
            prefecture: "高知県",
            subdivisions: "東部(室戸岬)",
            subdivisions1: "東部",
            subdivisions2: "室戸岬",
            hourly: "https://tenki.jp/forecast/8/42/7420/39203/1hour.html"
        },
        wn: {
            prefecture: "高知",
            subdivisions: "東部",
            name: "安芸市",
            hourly: "https://weathernews.jp/onebox/tenki/kouchi/39203/"
        },
        hall: {
            lat: 33.502416,
            long: 133.907074
        }
    },
    東洋町: {
        tj: {
            prefecture: "高知県",
            subdivisions: "東部(室戸岬)",
            subdivisions1: "東部",
            subdivisions2: "室戸岬",
            hourly: "https://tenki.jp/forecast/8/42/7420/39301/1hour.html"
        },
        wn: {
            prefecture: "高知",
            subdivisions: "東部",
            name: "東洋町",
            hourly: "https://weathernews.jp/onebox/tenki/kouchi/39301/"
        },
        hall: {
            lat: 33.527976,
            long: 134.279968
        }
    },
    奈半利町: {
        tj: {
            prefecture: "高知県",
            subdivisions: "東部(室戸岬)",
            subdivisions1: "東部",
            subdivisions2: "室戸岬",
            hourly: "https://tenki.jp/forecast/8/42/7420/39302/1hour.html"
        },
        wn: {
            prefecture: "高知",
            subdivisions: "東部",
            name: "奈半利町",
            hourly: "https://weathernews.jp/onebox/tenki/kouchi/39302/"
        },
        hall: {
            lat: 33.424179,
            long: 134.020957
        }
    },
    田野町: {
        tj: {
            prefecture: "高知県",
            subdivisions: "東部(室戸岬)",
            subdivisions1: "東部",
            subdivisions2: "室戸岬",
            hourly: "https://tenki.jp/forecast/8/42/7420/39303/1hour.html"
        },
        wn: {
            prefecture: "高知",
            subdivisions: "東部",
            name: "田野町",
            hourly: "https://weathernews.jp/onebox/tenki/kouchi/39303/"
        },
        hall: {
            lat: 33.427713,
            long: 134.008209
        }
    },
    安田町: {
        tj: {
            prefecture: "高知県",
            subdivisions: "東部(室戸岬)",
            subdivisions1: "東部",
            subdivisions2: "室戸岬",
            hourly: "https://tenki.jp/forecast/8/42/7420/39304/1hour.html"
        },
        wn: {
            prefecture: "高知",
            subdivisions: "東部",
            name: "安田町",
            hourly: "https://weathernews.jp/onebox/tenki/kouchi/39304/"
        },
        hall: {
            lat: 33.439080,
            long: 133.981215
        }
    },
    北川村: {
        tj: {
            prefecture: "高知県",
            subdivisions: "東部(室戸岬)",
            subdivisions1: "東部",
            subdivisions2: "室戸岬",
            hourly: "https://tenki.jp/forecast/8/42/7420/39305/1hour.html"
        },
        wn: {
            prefecture: "高知",
            subdivisions: "東部",
            name: "北川村",
            hourly: "https://weathernews.jp/onebox/tenki/kouchi/39305/"
        },
        hall: {
            lat: 33.447694,
            long: 134.042069
        }
    },
    馬路村: {
        tj: {
            prefecture: "高知県",
            subdivisions: "東部(室戸岬)",
            subdivisions1: "東部",
            subdivisions2: "室戸岬",
            hourly: "https://tenki.jp/forecast/8/42/7420/39306/1hour.html"
        },
        wn: {
            prefecture: "高知",
            subdivisions: "東部",
            name: "馬路村",
            hourly: "https://weathernews.jp/onebox/tenki/kouchi/39306/"
        },
        hall: {
            lat: 33.555347,
            long: 134.048114
        }
    },
    芸西村: {
        tj: {
            prefecture: "高知県",
            subdivisions: "東部(室戸岬)",
            subdivisions1: "東部",
            subdivisions2: "室戸岬",
            hourly: "https://tenki.jp/forecast/8/42/7420/39307/1hour.html"
        },
        wn: {
            prefecture: "高知",
            subdivisions: "東部",
            name: "芸西村",
            hourly: "https://weathernews.jp/onebox/tenki/kouchi/39307/"
        },
        hall: {
            lat: 33.526915,
            long: 133.808942
        }
    },
    宿毛市: {
        tj: {
            prefecture: "高知県",
            subdivisions: "西部(清水)",
            subdivisions1: "西部",
            subdivisions2: "清水",
            hourly: "https://tenki.jp/forecast/8/42/7430/39208/1hour.html"
        },
        wn: {
            prefecture: "高知",
            subdivisions: "西部",
            name: "宿毛市",
            hourly: "https://weathernews.jp/onebox/tenki/kouchi/39208/"
        },
        hall: {
            lat: 32.934013,
            long: 132.702033
        }
    },
    土佐清水市: {
        tj: {
            prefecture: "高知県",
            subdivisions: "西部(清水)",
            subdivisions1: "西部",
            subdivisions2: "清水",
            hourly: "https://tenki.jp/forecast/8/42/7430/39209/1hour.html"
        },
        wn: {
            prefecture: "高知",
            subdivisions: "西部",
            name: "土佐清水市",
            hourly: "https://weathernews.jp/onebox/tenki/kouchi/39209/"
        },
        hall: {
            lat: 32.781603,
            long: 132.955100
        }
    },
    四万十市: {
        tj: {
            prefecture: "高知県",
            subdivisions: "西部(清水)",
            subdivisions1: "西部",
            subdivisions2: "清水",
            hourly: "https://tenki.jp/forecast/8/42/7430/39210/1hour.html"
        },
        wn: {
            prefecture: "高知",
            subdivisions: "西部",
            name: "四万十市",
            hourly: "https://weathernews.jp/onebox/tenki/kouchi/39210/"
        },
        hall: {
            lat: 32.991385,
            long: 132.933750
        }
    },
    中土佐町: {
        tj: {
            prefecture: "高知県",
            subdivisions: "西部(清水)",
            subdivisions1: "西部",
            subdivisions2: "清水",
            hourly: "https://tenki.jp/forecast/8/42/7430/39401/1hour.html"
        },
        wn: {
            prefecture: "高知",
            subdivisions: "西部",
            name: "中土佐町",
            hourly: "https://weathernews.jp/onebox/tenki/kouchi/39401/"
        },
        hall: {
            lat: 33.329273,
            long: 133.224785
        }
    },
    檮原町: {
        tj: {
            prefecture: "高知県",
            subdivisions: "西部(清水)",
            subdivisions1: "西部",
            subdivisions2: "清水",
            hourly: "https://tenki.jp/forecast/8/42/7430/39405/1hour.html"
        },
        wn: {
            prefecture: "高知",
            subdivisions: "西部",
            name: "檮原町",
            hourly: "https://weathernews.jp/onebox/tenki/kouchi/39405/"
        },
        hall: {
            lat: 33.392170,
            long: 132.927065
        }
    },
    津野町: {
        tj: {
            prefecture: "高知県",
            subdivisions: "西部(清水)",
            subdivisions1: "西部",
            subdivisions2: "清水",
            hourly: "https://tenki.jp/forecast/8/42/7430/39411/1hour.html"
        },
        wn: {
            prefecture: "高知",
            subdivisions: "西部",
            name: "津野町",
            hourly: "https://weathernews.jp/onebox/tenki/kouchi/39411/"
        },
        hall: {
            lat: 33.446666,
            long: 133.199377
        }
    },
    四万十町: {
        tj: {
            prefecture: "高知県",
            subdivisions: "西部(清水)",
            subdivisions1: "西部",
            subdivisions2: "清水",
            hourly: "https://tenki.jp/forecast/8/42/7430/39412/1hour.html"
        },
        wn: {
            prefecture: "高知",
            subdivisions: "西部",
            name: "四万十町",
            hourly: "https://weathernews.jp/onebox/tenki/kouchi/39412/"
        },
        hall: {
            lat: 33.211606,
            long: 133.137037
        }
    },
    大月町: {
        tj: {
            prefecture: "高知県",
            subdivisions: "西部(清水)",
            subdivisions1: "西部",
            subdivisions2: "清水",
            hourly: "https://tenki.jp/forecast/8/42/7430/39424/1hour.html"
        },
        wn: {
            prefecture: "高知",
            subdivisions: "西部",
            name: "大月町",
            hourly: "https://weathernews.jp/onebox/tenki/kouchi/39424/"
        },
        hall: {
            lat: 32.841481,
            long: 132.706990
        }
    },
    三原村: {
        tj: {
            prefecture: "高知県",
            subdivisions: "西部(清水)",
            subdivisions1: "西部",
            subdivisions2: "清水",
            hourly: "https://tenki.jp/forecast/8/42/7430/39427/1hour.html"
        },
        wn: {
            prefecture: "高知",
            subdivisions: "西部",
            name: "三原村",
            hourly: "https://weathernews.jp/onebox/tenki/kouchi/39427/"
        },
        hall: {
            lat: 32.906090,
            long: 132.847250
        }
    },
    黒潮町: {
        tj: {
            prefecture: "高知県",
            subdivisions: "西部(清水)",
            subdivisions1: "西部",
            subdivisions2: "清水",
            hourly: "https://tenki.jp/forecast/8/42/7430/39428/1hour.html"
        },
        wn: {
            prefecture: "高知",
            subdivisions: "西部",
            name: "黒潮町",
            hourly: "https://weathernews.jp/onebox/tenki/kouchi/39428/"
        },
        hall: {
            lat: 33.024965,
            long: 133.004158
        }
    },
    福岡市: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "福岡地方(福岡)",
            subdivisions1: "福岡地方",
            subdivisions2: "福岡",
            hourly: "https://tenki.jp/forecast/9/43/8210/40130/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "福岡地方",
            name: "福岡市中央区",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40133/"
        },
        hall: {
            lat: 33.590313,
            long: 130.401735
        }
    },
    福岡市東区: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "福岡地方(福岡)",
            subdivisions1: "福岡地方",
            subdivisions2: "福岡",
            hourly: "https://tenki.jp/forecast/9/43/8210/40131/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "福岡地方",
            name: "福岡市東区",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40131/"
        },
        hall: {
            lat: 33.617744,
            long: 130.417363
        }
    },
    福岡市博多区: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "福岡地方(福岡)",
            subdivisions1: "福岡地方",
            subdivisions2: "福岡",
            hourly: "https://tenki.jp/forecast/9/43/8210/40132/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "福岡地方",
            name: "福岡市博多区",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40132/"
        },
        hall: {
            lat: 33.590895,
            long: 130.414354
        }
    },
    福岡市中央区: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "福岡地方(福岡)",
            subdivisions1: "福岡地方",
            subdivisions2: "福岡",
            hourly: "https://tenki.jp/forecast/9/43/8210/40133/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "福岡地方",
            name: "福岡市中央区",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40133/"
        },
        hall: {
            lat: 33.589238,
            long: 130.392819
        }
    },
    福岡市南区: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "福岡地方(福岡)",
            subdivisions1: "福岡地方",
            subdivisions2: "福岡",
            hourly: "https://tenki.jp/forecast/9/43/8210/40134/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "福岡地方",
            name: "福岡市南区",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40134/"
        },
        hall: {
            lat: 33.561561,
            long: 130.426442
        }
    },
    福岡市西区: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "福岡地方(福岡)",
            subdivisions1: "福岡地方",
            subdivisions2: "福岡",
            hourly: "https://tenki.jp/forecast/9/43/8210/40135/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "福岡地方",
            name: "福岡市西区",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40135/"
        },
        hall: {
            lat: 33.582917,
            long: 130.323133
        }
    },
    福岡市城南区: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "福岡地方(福岡)",
            subdivisions1: "福岡地方",
            subdivisions2: "福岡",
            hourly: "https://tenki.jp/forecast/9/43/8210/40136/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "福岡地方",
            name: "福岡市城南区",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40136/"
        },
        hall: {
            lat: 33.575686,
            long: 130.369912
        }
    },
    福岡市早良区: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "福岡地方(福岡)",
            subdivisions1: "福岡地方",
            subdivisions2: "福岡",
            hourly: "https://tenki.jp/forecast/9/43/8210/40137/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "福岡地方",
            name: "福岡市早良区",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40137/"
        },
        hall: {
            lat: 33.581944,
            long: 130.348409
        }
    },
    筑紫野市: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "福岡地方(福岡)",
            subdivisions1: "福岡地方",
            subdivisions2: "福岡",
            hourly: "https://tenki.jp/forecast/9/43/8210/40217/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "福岡地方",
            name: "筑紫野市",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40217/"
        },
        hall: {
            lat: 33.487386,
            long: 130.526007
        }
    },
    春日市: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "福岡地方(福岡)",
            subdivisions1: "福岡地方",
            subdivisions2: "福岡",
            hourly: "https://tenki.jp/forecast/9/43/8210/40218/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "福岡地方",
            name: "春日市",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40218/"
        },
        hall: {
            lat: 33.532629,
            long: 130.470368
        }
    },
    大野城市: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "福岡地方(福岡)",
            subdivisions1: "福岡地方",
            subdivisions2: "福岡",
            hourly: "https://tenki.jp/forecast/9/43/8210/40219/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "福岡地方",
            name: "大野城市",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40219/"
        },
        hall: {
            lat: 33.536290,
            long: 130.478697
        }
    },
    宗像市: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "福岡地方(福岡)",
            subdivisions1: "福岡地方",
            subdivisions2: "福岡",
            hourly: "https://tenki.jp/forecast/9/43/8210/40220/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "福岡地方",
            name: "宗像市",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40220/"
        },
        hall: {
            lat: 33.805448,
            long: 130.540651
        }
    },
    太宰府市: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "福岡地方(福岡)",
            subdivisions1: "福岡地方",
            subdivisions2: "福岡",
            hourly: "https://tenki.jp/forecast/9/43/8210/40221/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "福岡地方",
            name: "太宰府市",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40221/"
        },
        hall: {
            lat: 33.512835,
            long: 130.523876
        }
    },
    古賀市: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "福岡地方(福岡)",
            subdivisions1: "福岡地方",
            subdivisions2: "福岡",
            hourly: "https://tenki.jp/forecast/9/43/8210/40223/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "福岡地方",
            name: "古賀市",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40223/"
        },
        hall: {
            lat: 33.728664,
            long: 130.469995
        }
    },
    福津市: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "福岡地方(福岡)",
            subdivisions1: "福岡地方",
            subdivisions2: "福岡",
            hourly: "https://tenki.jp/forecast/9/43/8210/40224/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "福岡地方",
            name: "福津市",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40224/"
        },
        hall: {
            lat: 33.766897,
            long: 130.491038
        }
    },
    糸島市: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "福岡地方(福岡)",
            subdivisions1: "福岡地方",
            subdivisions2: "福岡",
            hourly: "https://tenki.jp/forecast/9/43/8210/40230/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "福岡地方",
            name: "糸島市",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40230/"
        },
        hall: {
            lat: 33.557450,
            long: 130.195500
        }
    },
    那珂川市: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "福岡地方(福岡)",
            subdivisions1: "福岡地方",
            subdivisions2: "福岡",
            hourly: "https://tenki.jp/forecast/9/43/8210/40231/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "福岡地方",
            name: "那珂川市",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40231/"
        },
        hall: {
            lat: 33.499597,
            long: 130.422200
        }
    },
    宇美町: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "福岡地方(福岡)",
            subdivisions1: "福岡地方",
            subdivisions2: "福岡",
            hourly: "https://tenki.jp/forecast/9/43/8210/40341/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "福岡地方",
            name: "宇美町",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40341/"
        },
        hall: {
            lat: 33.567768,
            long: 130.511208
        }
    },
    篠栗町: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "福岡地方(福岡)",
            subdivisions1: "福岡地方",
            subdivisions2: "福岡",
            hourly: "https://tenki.jp/forecast/9/43/8210/40342/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "福岡地方",
            name: "篠栗町",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40342/"
        },
        hall: {
            lat: 33.623869,
            long: 130.526207
        }
    },
    志免町: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "福岡地方(福岡)",
            subdivisions1: "福岡地方",
            subdivisions2: "福岡",
            hourly: "https://tenki.jp/forecast/9/43/8210/40343/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "福岡地方",
            name: "志免町",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40343/"
        },
        hall: {
            lat: 33.591503,
            long: 130.479807
        }
    },
    須恵町: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "福岡地方(福岡)",
            subdivisions1: "福岡地方",
            subdivisions2: "福岡",
            hourly: "https://tenki.jp/forecast/9/43/8210/40344/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "福岡地方",
            name: "須惠町",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40344/"
        },
        hall: {
            lat: 33.587268,
            long: 130.507234
        }
    },
    新宮町: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "福岡地方(福岡)",
            subdivisions1: "福岡地方",
            subdivisions2: "福岡",
            hourly: "https://tenki.jp/forecast/9/43/8210/40345/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "福岡地方",
            name: "新宮町",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40345/"
        },
        hall: {
            lat: 33.715313,
            long: 130.446567
        }
    },
    久山町: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "福岡地方(福岡)",
            subdivisions1: "福岡地方",
            subdivisions2: "福岡",
            hourly: "https://tenki.jp/forecast/9/43/8210/40348/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "福岡地方",
            name: "久山町",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40348/"
        },
        hall: {
            lat: 33.646726,
            long: 130.499906
        }
    },
    粕屋町: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "福岡地方(福岡)",
            subdivisions1: "福岡地方",
            subdivisions2: "福岡",
            hourly: "https://tenki.jp/forecast/9/43/8210/40349/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "福岡地方",
            name: "粕屋町",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40349/"
        },
        hall: {
            lat: 33.610854,
            long: 130.480582
        }
    },
    北九州市: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "北九州地方(八幡)",
            subdivisions1: "北九州地方",
            subdivisions2: "八幡",
            hourly: "https://tenki.jp/forecast/9/43/8220/40100/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "北九州地方",
            name: "北九州市小倉北区",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40106/"
        },
        hall: {
            lat: 33.883408,
            long: 130.875183
        }
    },
    北九州市門司区: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "北九州地方(八幡)",
            subdivisions1: "北九州地方",
            subdivisions2: "八幡",
            hourly: "https://tenki.jp/forecast/9/43/8220/40101/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "北九州地方",
            name: "北九州市門司区",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40101/"
        },
        hall: {
            lat: 33.941238,
            long: 130.959546
        }
    },
    北九州市若松区: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "北九州地方(八幡)",
            subdivisions1: "北九州地方",
            subdivisions2: "八幡",
            hourly: "https://tenki.jp/forecast/9/43/8220/40103/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "北九州地方",
            name: "北九州市若松区",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40103/"
        },
        hall: {
            lat: 33.905435,
            long: 130.811221
        }
    },
    北九州市戸畑区: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "北九州地方(八幡)",
            subdivisions1: "北九州地方",
            subdivisions2: "八幡",
            hourly: "https://tenki.jp/forecast/9/43/8220/40105/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "北九州地方",
            name: "北九州市戸畑区",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40105/"
        },
        hall: {
            lat: 33.893442,
            long: 130.829800
        }
    },
    北九州市小倉北区: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "北九州地方(八幡)",
            subdivisions1: "北九州地方",
            subdivisions2: "八幡",
            hourly: "https://tenki.jp/forecast/9/43/8220/40106/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "北九州地方",
            name: "北九州市小倉北区",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40106/"
        },
        hall: {
            lat: 33.880890,
            long: 130.873361
        }
    },
    北九州市小倉南区: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "北九州地方(八幡)",
            subdivisions1: "北九州地方",
            subdivisions2: "八幡",
            hourly: "https://tenki.jp/forecast/9/43/8220/40107/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "北九州地方",
            name: "北九州市小倉南区",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40107/"
        },
        hall: {
            lat: 33.846525,
            long: 130.884808
        }
    },
    北九州市八幡東区: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "北九州地方(八幡)",
            subdivisions1: "北九州地方",
            subdivisions2: "八幡",
            hourly: "https://tenki.jp/forecast/9/43/8220/40108/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "北九州地方",
            name: "北九州市八幡東区",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40108/"
        },
        hall: {
            lat: 33.863540,
            long: 130.811892
        }
    },
    北九州市八幡西区: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "北九州地方(八幡)",
            subdivisions1: "北九州地方",
            subdivisions2: "八幡",
            hourly: "https://tenki.jp/forecast/9/43/8220/40109/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "北九州地方",
            name: "北九州市八幡西区",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40109/"
        },
        hall: {
            lat: 33.866410,
            long: 130.764303
        }
    },
    行橋市: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "北九州地方(八幡)",
            subdivisions1: "北九州地方",
            subdivisions2: "八幡",
            hourly: "https://tenki.jp/forecast/9/43/8220/40213/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "北九州地方",
            name: "行橋市",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40213/"
        },
        hall: {
            lat: 33.728762,
            long: 130.982963
        }
    },
    豊前市: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "北九州地方(八幡)",
            subdivisions1: "北九州地方",
            subdivisions2: "八幡",
            hourly: "https://tenki.jp/forecast/9/43/8220/40214/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "北九州地方",
            name: "豊前市",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40214/"
        },
        hall: {
            lat: 33.611538,
            long: 131.129941
        }
    },
    中間市: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "北九州地方(八幡)",
            subdivisions1: "北九州地方",
            subdivisions2: "八幡",
            hourly: "https://tenki.jp/forecast/9/43/8220/40215/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "北九州地方",
            name: "中間市",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40215/"
        },
        hall: {
            lat: 33.816699,
            long: 130.709026
        }
    },
    芦屋町: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "北九州地方(八幡)",
            subdivisions1: "北九州地方",
            subdivisions2: "八幡",
            hourly: "https://tenki.jp/forecast/9/43/8220/40381/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "北九州地方",
            name: "芦屋町",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40381/"
        },
        hall: {
            lat: 33.893862,
            long: 130.663874
        }
    },
    水巻町: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "北九州地方(八幡)",
            subdivisions1: "北九州地方",
            subdivisions2: "八幡",
            hourly: "https://tenki.jp/forecast/9/43/8220/40382/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "北九州地方",
            name: "水巻町",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40382/"
        },
        hall: {
            lat: 33.854850,
            long: 130.694783
        }
    },
    岡垣町: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "北九州地方(八幡)",
            subdivisions1: "北九州地方",
            subdivisions2: "八幡",
            hourly: "https://tenki.jp/forecast/9/43/8220/40383/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "北九州地方",
            name: "岡垣町",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40383/"
        },
        hall: {
            lat: 33.853491,
            long: 130.611749
        }
    },
    遠賀町: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "北九州地方(八幡)",
            subdivisions1: "北九州地方",
            subdivisions2: "八幡",
            hourly: "https://tenki.jp/forecast/9/43/8220/40384/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "北九州地方",
            name: "遠賀町",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40384/"
        },
        hall: {
            lat: 33.848166,
            long: 130.668341
        }
    },
    苅田町: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "北九州地方(八幡)",
            subdivisions1: "北九州地方",
            subdivisions2: "八幡",
            hourly: "https://tenki.jp/forecast/9/43/8220/40621/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "北九州地方",
            name: "苅田町",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40621/"
        },
        hall: {
            lat: 33.776006,
            long: 130.980475
        }
    },
    みやこ町: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "北九州地方(八幡)",
            subdivisions1: "北九州地方",
            subdivisions2: "八幡",
            hourly: "https://tenki.jp/forecast/9/43/8220/40625/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "北九州地方",
            name: "みやこ町",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40625/"
        },
        hall: {
            lat: 33.699236,
            long: 130.920096
        }
    },
    吉富町: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "北九州地方(八幡)",
            subdivisions1: "北九州地方",
            subdivisions2: "八幡",
            hourly: "https://tenki.jp/forecast/9/43/8220/40642/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "北九州地方",
            name: "吉富町",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40642/"
        },
        hall: {
            lat: 33.602643,
            long: 131.175951
        }
    },
    上毛町: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "北九州地方(八幡)",
            subdivisions1: "北九州地方",
            subdivisions2: "八幡",
            hourly: "https://tenki.jp/forecast/9/43/8220/40646/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "北九州地方",
            name: "上毛町",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40646/"
        },
        hall: {
            lat: 33.578425,
            long: 131.164207
        }
    },
    築上町: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "北九州地方(八幡)",
            subdivisions1: "北九州地方",
            subdivisions2: "八幡",
            hourly: "https://tenki.jp/forecast/9/43/8220/40647/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "北九州地方",
            name: "築上町",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40647/"
        },
        hall: {
            lat: 33.656381,
            long: 131.055784
        }
    },
    直方市: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "筑豊地方(飯塚)",
            subdivisions1: "筑豊地方",
            subdivisions2: "飯塚",
            hourly: "https://tenki.jp/forecast/9/43/8230/40204/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "筑豊地方",
            name: "直方市",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40204/"
        },
        hall: {
            lat: 33.744181,
            long: 130.729652
        }
    },
    飯塚市: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "筑豊地方(飯塚)",
            subdivisions1: "筑豊地方",
            subdivisions2: "飯塚",
            hourly: "https://tenki.jp/forecast/9/43/8230/40205/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "筑豊地方",
            name: "飯塚市",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40205/"
        },
        hall: {
            lat: 33.646083,
            long: 130.691422
        }
    },
    田川市: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "筑豊地方(飯塚)",
            subdivisions1: "筑豊地方",
            subdivisions2: "飯塚",
            hourly: "https://tenki.jp/forecast/9/43/8230/40206/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "筑豊地方",
            name: "田川市",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40206/"
        },
        hall: {
            lat: 33.638760,
            long: 130.806298
        }
    },
    宮若市: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "筑豊地方(飯塚)",
            subdivisions1: "筑豊地方",
            subdivisions2: "飯塚",
            hourly: "https://tenki.jp/forecast/9/43/8230/40226/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "筑豊地方",
            name: "宮若市",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40226/"
        },
        hall: {
            lat: 33.723666,
            long: 130.667417
        }
    },
    嘉麻市: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "筑豊地方(飯塚)",
            subdivisions1: "筑豊地方",
            subdivisions2: "飯塚",
            hourly: "https://tenki.jp/forecast/9/43/8230/40227/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "筑豊地方",
            name: "嘉麻市",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40227/"
        },
        hall: {
            lat: 33.598421,
            long: 130.719217
        }
    },
    小竹町: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "筑豊地方(飯塚)",
            subdivisions1: "筑豊地方",
            subdivisions2: "飯塚",
            hourly: "https://tenki.jp/forecast/9/43/8230/40401/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "筑豊地方",
            name: "小竹町",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40401/"
        },
        hall: {
            lat: 33.696782,
            long: 130.707784
        }
    },
    鞍手町: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "筑豊地方(飯塚)",
            subdivisions1: "筑豊地方",
            subdivisions2: "飯塚",
            hourly: "https://tenki.jp/forecast/9/43/8230/40402/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "筑豊地方",
            name: "鞍手町",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40402/"
        },
        hall: {
            lat: 33.792112,
            long: 130.674008
        }
    },
    桂川町: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "筑豊地方(飯塚)",
            subdivisions1: "筑豊地方",
            subdivisions2: "飯塚",
            hourly: "https://tenki.jp/forecast/9/43/8230/40421/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "筑豊地方",
            name: "桂川町",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40421/"
        },
        hall: {
            lat: 33.578889,
            long: 130.678118
        }
    },
    香春町: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "筑豊地方(飯塚)",
            subdivisions1: "筑豊地方",
            subdivisions2: "飯塚",
            hourly: "https://tenki.jp/forecast/9/43/8230/40601/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "筑豊地方",
            name: "香春町",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40601/"
        },
        hall: {
            lat: 33.668006,
            long: 130.847401
        }
    },
    添田町: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "筑豊地方(飯塚)",
            subdivisions1: "筑豊地方",
            subdivisions2: "飯塚",
            hourly: "https://tenki.jp/forecast/9/43/8230/40602/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "筑豊地方",
            name: "添田町",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40602/"
        },
        hall: {
            lat: 33.571816,
            long: 130.854088
        }
    },
    糸田町: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "筑豊地方(飯塚)",
            subdivisions1: "筑豊地方",
            subdivisions2: "飯塚",
            hourly: "https://tenki.jp/forecast/9/43/8230/40604/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "筑豊地方",
            name: "糸田町",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40604/"
        },
        hall: {
            lat: 33.652736,
            long: 130.778958
        }
    },
    川崎町: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "筑豊地方(飯塚)",
            subdivisions1: "筑豊地方",
            subdivisions2: "飯塚",
            hourly: "https://tenki.jp/forecast/9/43/8230/40605/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "筑豊地方",
            name: "川崎町",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40605/"
        },
        hall: {
            lat: 38.177751,
            long: 140.643188
        }
    },
    大任町: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "筑豊地方(飯塚)",
            subdivisions1: "筑豊地方",
            subdivisions2: "飯塚",
            hourly: "https://tenki.jp/forecast/9/43/8230/40608/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "筑豊地方",
            name: "大任町",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40608/"
        },
        hall: {
            lat: 33.612164,
            long: 130.853742
        }
    },
    赤村: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "筑豊地方(飯塚)",
            subdivisions1: "筑豊地方",
            subdivisions2: "飯塚",
            hourly: "https://tenki.jp/forecast/9/43/8230/40609/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "筑豊地方",
            name: "赤村",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40609/"
        },
        hall: {
            lat: 33.616692,
            long: 130.870855
        }
    },
    福智町: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "筑豊地方(飯塚)",
            subdivisions1: "筑豊地方",
            subdivisions2: "飯塚",
            hourly: "https://tenki.jp/forecast/9/43/8230/40610/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "筑豊地方",
            name: "福智町",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40610/"
        },
        hall: {
            lat: 33.683263,
            long: 130.780120
        }
    },
    大牟田市: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "筑後地方(久留米)",
            subdivisions1: "筑後地方",
            subdivisions2: "久留米",
            hourly: "https://tenki.jp/forecast/9/43/8240/40202/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "筑後地方",
            name: "大牟田市",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40202/"
        },
        hall: {
            lat: 33.030248,
            long: 130.446058
        }
    },
    久留米市: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "筑後地方(久留米)",
            subdivisions1: "筑後地方",
            subdivisions2: "久留米",
            hourly: "https://tenki.jp/forecast/9/43/8240/40203/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "筑後地方",
            name: "久留米市",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40203/"
        },
        hall: {
            lat: 33.319286,
            long: 130.508371
        }
    },
    柳川市: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "筑後地方(久留米)",
            subdivisions1: "筑後地方",
            subdivisions2: "久留米",
            hourly: "https://tenki.jp/forecast/9/43/8240/40207/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "筑後地方",
            name: "柳川市",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40207/"
        },
        hall: {
            lat: 33.163064,
            long: 130.405739
        }
    },
    八女市: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "筑後地方(久留米)",
            subdivisions1: "筑後地方",
            subdivisions2: "久留米",
            hourly: "https://tenki.jp/forecast/9/43/8240/40210/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "筑後地方",
            name: "八女市",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40210/"
        },
        hall: {
            lat: 33.211952,
            long: 130.557912
        }
    },
    筑後市: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "筑後地方(久留米)",
            subdivisions1: "筑後地方",
            subdivisions2: "久留米",
            hourly: "https://tenki.jp/forecast/9/43/8240/40211/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "筑後地方",
            name: "筑後市",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40211/"
        },
        hall: {
            lat: 33.212246,
            long: 130.502151
        }
    },
    大川市: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "筑後地方(久留米)",
            subdivisions1: "筑後地方",
            subdivisions2: "久留米",
            hourly: "https://tenki.jp/forecast/9/43/8240/40212/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "筑後地方",
            name: "大川市",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40212/"
        },
        hall: {
            lat: 33.206622,
            long: 130.383922
        }
    },
    小郡市: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "筑後地方(久留米)",
            subdivisions1: "筑後地方",
            subdivisions2: "久留米",
            hourly: "https://tenki.jp/forecast/9/43/8240/40216/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "筑後地方",
            name: "小郡市",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40216/"
        },
        hall: {
            lat: 33.396450,
            long: 130.555541
        }
    },
    うきは市: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "筑後地方(久留米)",
            subdivisions1: "筑後地方",
            subdivisions2: "久留米",
            hourly: "https://tenki.jp/forecast/9/43/8240/40225/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "筑後地方",
            name: "うきは市",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40225/"
        },
        hall: {
            lat: 33.347305,
            long: 130.754928
        }
    },
    朝倉市: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "筑後地方(久留米)",
            subdivisions1: "筑後地方",
            subdivisions2: "久留米",
            hourly: "https://tenki.jp/forecast/9/43/8240/40228/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "筑後地方",
            name: "朝倉市",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40228/"
        },
        hall: {
            lat: 33.423412,
            long: 130.665573
        }
    },
    みやま市: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "筑後地方(久留米)",
            subdivisions1: "筑後地方",
            subdivisions2: "久留米",
            hourly: "https://tenki.jp/forecast/9/43/8240/40229/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "筑後地方",
            name: "みやま市",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40229/"
        },
        hall: {
            lat: 33.152434,
            long: 130.474734
        }
    },
    筑前町: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "筑後地方(久留米)",
            subdivisions1: "筑後地方",
            subdivisions2: "久留米",
            hourly: "https://tenki.jp/forecast/9/43/8240/40447/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "筑後地方",
            name: "筑前町",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40447/"
        },
        hall: {
            lat: 33.457033,
            long: 130.595183
        }
    },
    東峰村: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "筑後地方(久留米)",
            subdivisions1: "筑後地方",
            subdivisions2: "久留米",
            hourly: "https://tenki.jp/forecast/9/43/8240/40448/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "筑後地方",
            name: "東峰村",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40448/"
        },
        hall: {
            lat: 33.397314,
            long: 130.869919
        }
    },
    大刀洗町: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "筑後地方(久留米)",
            subdivisions1: "筑後地方",
            subdivisions2: "久留米",
            hourly: "https://tenki.jp/forecast/9/43/8240/40503/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "筑後地方",
            name: "大刀洗町",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40503/"
        },
        hall: {
            lat: 33.372425,
            long: 130.622454
        }
    },
    大木町: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "筑後地方(久留米)",
            subdivisions1: "筑後地方",
            subdivisions2: "久留米",
            hourly: "https://tenki.jp/forecast/9/43/8240/40522/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "筑後地方",
            name: "大木町",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40522/"
        },
        hall: {
            lat: 33.210453,
            long: 130.439806
        }
    },
    広川町: {
        tj: {
            prefecture: "福岡県",
            subdivisions: "筑後地方(久留米)",
            subdivisions1: "筑後地方",
            subdivisions2: "久留米",
            hourly: "https://tenki.jp/forecast/9/43/8240/40544/1hour.html"
        },
        wn: {
            prefecture: "福岡",
            subdivisions: "筑後地方",
            name: "広川町",
            hourly: "https://weathernews.jp/onebox/tenki/fukuoka/40544/"
        },
        hall: {
            lat: 34.029957,
            long: 135.173072
        }
    },
    佐賀市: {
        tj: {
            prefecture: "佐賀県",
            subdivisions: "南部(佐賀)",
            subdivisions1: "南部",
            subdivisions2: "佐賀",
            hourly: "https://tenki.jp/forecast/9/44/8510/41201/1hour.html"
        },
        wn: {
            prefecture: "佐賀",
            subdivisions: "南部",
            name: "佐賀市",
            hourly: "https://weathernews.jp/onebox/tenki/saga/41201/"
        },
        hall: {
            lat: 33.263543,
            long: 130.300835
        }
    },
    鳥栖市: {
        tj: {
            prefecture: "佐賀県",
            subdivisions: "南部(佐賀)",
            subdivisions1: "南部",
            subdivisions2: "佐賀",
            hourly: "https://tenki.jp/forecast/9/44/8510/41203/1hour.html"
        },
        wn: {
            prefecture: "佐賀",
            subdivisions: "南部",
            name: "鳥栖市",
            hourly: "https://weathernews.jp/onebox/tenki/saga/41203/"
        },
        hall: {
            lat: 33.378061,
            long: 130.505025
        }
    },
    多久市: {
        tj: {
            prefecture: "佐賀県",
            subdivisions: "南部(佐賀)",
            subdivisions1: "南部",
            subdivisions2: "佐賀",
            hourly: "https://tenki.jp/forecast/9/44/8510/41204/1hour.html"
        },
        wn: {
            prefecture: "佐賀",
            subdivisions: "南部",
            name: "多久市",
            hourly: "https://weathernews.jp/onebox/tenki/saga/41204/"
        },
        hall: {
            lat: 33.288513,
            long: 130.110061
        }
    },
    武雄市: {
        tj: {
            prefecture: "佐賀県",
            subdivisions: "南部(佐賀)",
            subdivisions1: "南部",
            subdivisions2: "佐賀",
            hourly: "https://tenki.jp/forecast/9/44/8510/41206/1hour.html"
        },
        wn: {
            prefecture: "佐賀",
            subdivisions: "南部",
            name: "武雄市",
            hourly: "https://weathernews.jp/onebox/tenki/saga/41206/"
        },
        hall: {
            lat: 33.194873,
            long: 130.021557
        }
    },
    鹿島市: {
        tj: {
            prefecture: "佐賀県",
            subdivisions: "南部(佐賀)",
            subdivisions1: "南部",
            subdivisions2: "佐賀",
            hourly: "https://tenki.jp/forecast/9/44/8510/41207/1hour.html"
        },
        wn: {
            prefecture: "佐賀",
            subdivisions: "南部",
            name: "鹿島市",
            hourly: "https://weathernews.jp/onebox/tenki/saga/41207/"
        },
        hall: {
            lat: 33.103804,
            long: 130.098603
        }
    },
    小城市: {
        tj: {
            prefecture: "佐賀県",
            subdivisions: "南部(佐賀)",
            subdivisions1: "南部",
            subdivisions2: "佐賀",
            hourly: "https://tenki.jp/forecast/9/44/8510/41208/1hour.html"
        },
        wn: {
            prefecture: "佐賀",
            subdivisions: "南部",
            name: "小城市",
            hourly: "https://weathernews.jp/onebox/tenki/saga/41208/"
        },
        hall: {
            lat: 33.273776,
            long: 130.217280
        }
    },
    嬉野市: {
        tj: {
            prefecture: "佐賀県",
            subdivisions: "南部(佐賀)",
            subdivisions1: "南部",
            subdivisions2: "佐賀",
            hourly: "https://tenki.jp/forecast/9/44/8510/41209/1hour.html"
        },
        wn: {
            prefecture: "佐賀",
            subdivisions: "南部",
            name: "嬉野市",
            hourly: "https://weathernews.jp/onebox/tenki/saga/41209/"
        },
        hall: {
            lat: 33.128092,
            long: 130.060120
        }
    },
    神埼市: {
        tj: {
            prefecture: "佐賀県",
            subdivisions: "南部(佐賀)",
            subdivisions1: "南部",
            subdivisions2: "佐賀",
            hourly: "https://tenki.jp/forecast/9/44/8510/41210/1hour.html"
        },
        wn: {
            prefecture: "佐賀",
            subdivisions: "南部",
            name: "神埼市",
            hourly: "https://weathernews.jp/onebox/tenki/saga/41210/"
        },
        hall: {
            lat: 33.311423,
            long: 130.371662
        }
    },
    吉野ヶ里町: {
        tj: {
            prefecture: "佐賀県",
            subdivisions: "南部(佐賀)",
            subdivisions1: "南部",
            subdivisions2: "佐賀",
            hourly: "https://tenki.jp/forecast/9/44/8510/41327/1hour.html"
        },
        wn: {
            prefecture: "佐賀",
            subdivisions: "南部",
            name: "吉野ヶ里町",
            hourly: "https://weathernews.jp/onebox/tenki/saga/41327/"
        },
        hall: {
            lat: 33.321148,
            long: 130.398753
        }
    },
    基山町: {
        tj: {
            prefecture: "佐賀県",
            subdivisions: "南部(佐賀)",
            subdivisions1: "南部",
            subdivisions2: "佐賀",
            hourly: "https://tenki.jp/forecast/9/44/8510/41341/1hour.html"
        },
        wn: {
            prefecture: "佐賀",
            subdivisions: "南部",
            name: "基山町",
            hourly: "https://weathernews.jp/onebox/tenki/saga/41341/"
        },
        hall: {
            lat: 33.426944,
            long: 130.523052
        }
    },
    上峰町: {
        tj: {
            prefecture: "佐賀県",
            subdivisions: "南部(佐賀)",
            subdivisions1: "南部",
            subdivisions2: "佐賀",
            hourly: "https://tenki.jp/forecast/9/44/8510/41345/1hour.html"
        },
        wn: {
            prefecture: "佐賀",
            subdivisions: "南部",
            name: "上峰町",
            hourly: "https://weathernews.jp/onebox/tenki/saga/41345/"
        },
        hall: {
            lat: 33.319626,
            long: 130.426137
        }
    },
    みやき町: {
        tj: {
            prefecture: "佐賀県",
            subdivisions: "南部(佐賀)",
            subdivisions1: "南部",
            subdivisions2: "佐賀",
            hourly: "https://tenki.jp/forecast/9/44/8510/41346/1hour.html"
        },
        wn: {
            prefecture: "佐賀",
            subdivisions: "南部",
            name: "みやき町",
            hourly: "https://weathernews.jp/onebox/tenki/saga/41346/"
        },
        hall: {
            lat: 33.324943,
            long: 130.454590
        }
    },
    大町町: {
        tj: {
            prefecture: "佐賀県",
            subdivisions: "南部(佐賀)",
            subdivisions1: "南部",
            subdivisions2: "佐賀",
            hourly: "https://tenki.jp/forecast/9/44/8510/41423/1hour.html"
        },
        wn: {
            prefecture: "佐賀",
            subdivisions: "南部",
            name: "大町町",
            hourly: "https://weathernews.jp/onebox/tenki/saga/41423/"
        },
        hall: {
            lat: 33.213871,
            long: 130.116032
        }
    },
    江北町: {
        tj: {
            prefecture: "佐賀県",
            subdivisions: "南部(佐賀)",
            subdivisions1: "南部",
            subdivisions2: "佐賀",
            hourly: "https://tenki.jp/forecast/9/44/8510/41424/1hour.html"
        },
        wn: {
            prefecture: "佐賀",
            subdivisions: "南部",
            name: "江北町",
            hourly: "https://weathernews.jp/onebox/tenki/saga/41424/"
        },
        hall: {
            lat: 33.220464,
            long: 130.157310
        }
    },
    白石町: {
        tj: {
            prefecture: "佐賀県",
            subdivisions: "南部(佐賀)",
            subdivisions1: "南部",
            subdivisions2: "佐賀",
            hourly: "https://tenki.jp/forecast/9/44/8510/41425/1hour.html"
        },
        wn: {
            prefecture: "佐賀",
            subdivisions: "南部",
            name: "白石町",
            hourly: "https://weathernews.jp/onebox/tenki/saga/41425/"
        },
        hall: {
            lat: 33.181082,
            long: 130.143493
        }
    },
    太良町: {
        tj: {
            prefecture: "佐賀県",
            subdivisions: "南部(佐賀)",
            subdivisions1: "南部",
            subdivisions2: "佐賀",
            hourly: "https://tenki.jp/forecast/9/44/8510/41441/1hour.html"
        },
        wn: {
            prefecture: "佐賀",
            subdivisions: "南部",
            name: "太良町",
            hourly: "https://weathernews.jp/onebox/tenki/saga/41441/"
        },
        hall: {
            lat: 33.019436,
            long: 130.179126
        }
    },
    唐津市: {
        tj: {
            prefecture: "佐賀県",
            subdivisions: "北部(伊万里)",
            subdivisions1: "北部",
            subdivisions2: "伊万里",
            hourly: "https://tenki.jp/forecast/9/44/8520/41202/1hour.html"
        },
        wn: {
            prefecture: "佐賀",
            subdivisions: "北部",
            name: "唐津市",
            hourly: "https://weathernews.jp/onebox/tenki/saga/41202/"
        },
        hall: {
            lat: 33.449801,
            long: 129.967680
        }
    },
    伊万里市: {
        tj: {
            prefecture: "佐賀県",
            subdivisions: "北部(伊万里)",
            subdivisions1: "北部",
            subdivisions2: "伊万里",
            hourly: "https://tenki.jp/forecast/9/44/8520/41205/1hour.html"
        },
        wn: {
            prefecture: "佐賀",
            subdivisions: "北部",
            name: "伊万里市",
            hourly: "https://weathernews.jp/onebox/tenki/saga/41205/"
        },
        hall: {
            lat: 33.264741,
            long: 129.880702
        }
    },
    玄海町: {
        tj: {
            prefecture: "佐賀県",
            subdivisions: "北部(伊万里)",
            subdivisions1: "北部",
            subdivisions2: "伊万里",
            hourly: "https://tenki.jp/forecast/9/44/8520/41387/1hour.html"
        },
        wn: {
            prefecture: "佐賀",
            subdivisions: "北部",
            name: "玄海町",
            hourly: "https://weathernews.jp/onebox/tenki/saga/41387/"
        },
        hall: {
            lat: 33.472164,
            long: 129.874689
        }
    },
    有田町: {
        tj: {
            prefecture: "佐賀県",
            subdivisions: "北部(伊万里)",
            subdivisions1: "北部",
            subdivisions2: "伊万里",
            hourly: "https://tenki.jp/forecast/9/44/8520/41401/1hour.html"
        },
        wn: {
            prefecture: "佐賀",
            subdivisions: "北部",
            name: "有田町",
            hourly: "https://weathernews.jp/onebox/tenki/saga/41401/"
        },
        hall: {
            lat: 33.210574,
            long: 129.849014
        }
    },
    長崎市: {
        tj: {
            prefecture: "長崎県",
            subdivisions: "南部(長崎)",
            subdivisions1: "南部",
            subdivisions2: "長崎",
            hourly: "https://tenki.jp/forecast/9/45/8410/42201/1hour.html"
        },
        wn: {
            prefecture: "長崎",
            subdivisions: "南部",
            name: "長崎市",
            hourly: "https://weathernews.jp/onebox/tenki/nagasaki/42201/"
        },
        hall: {
            lat: 32.749527,
            long: 129.879811
        }
    },
    島原市: {
        tj: {
            prefecture: "長崎県",
            subdivisions: "南部(長崎)",
            subdivisions1: "南部",
            subdivisions2: "長崎",
            hourly: "https://tenki.jp/forecast/9/45/8410/42203/1hour.html"
        },
        wn: {
            prefecture: "長崎",
            subdivisions: "南部",
            name: "島原市",
            hourly: "https://weathernews.jp/onebox/tenki/nagasaki/42203/"
        },
        hall: {
            lat: 32.787998,
            long: 130.370300
        }
    },
    諫早市: {
        tj: {
            prefecture: "長崎県",
            subdivisions: "南部(長崎)",
            subdivisions1: "南部",
            subdivisions2: "長崎",
            hourly: "https://tenki.jp/forecast/9/45/8410/42204/1hour.html"
        },
        wn: {
            prefecture: "長崎",
            subdivisions: "南部",
            name: "諫早市",
            hourly: "https://weathernews.jp/onebox/tenki/nagasaki/42204/"
        },
        hall: {
            lat: 32.844208,
            long: 130.053601
        }
    },
    大村市: {
        tj: {
            prefecture: "長崎県",
            subdivisions: "南部(長崎)",
            subdivisions1: "南部",
            subdivisions2: "長崎",
            hourly: "https://tenki.jp/forecast/9/45/8410/42205/1hour.html"
        },
        wn: {
            prefecture: "長崎",
            subdivisions: "南部",
            name: "大村市",
            hourly: "https://weathernews.jp/onebox/tenki/nagasaki/42205/"
        },
        hall: {
            lat: 32.899960,
            long: 129.958217
        }
    },
    西海市: {
        tj: {
            prefecture: "長崎県",
            subdivisions: "南部(長崎)",
            subdivisions1: "南部",
            subdivisions2: "長崎",
            hourly: "https://tenki.jp/forecast/9/45/8410/42212/1hour.html"
        },
        wn: {
            prefecture: "長崎",
            subdivisions: "五島",
            name: "西海市",
            hourly: "https://weathernews.jp/onebox/tenki/nagasaki/42212/"
        },
        hall: {
            lat: 32.933117,
            long: 129.642962
        }
    },
    雲仙市: {
        tj: {
            prefecture: "長崎県",
            subdivisions: "南部(長崎)",
            subdivisions1: "南部",
            subdivisions2: "長崎",
            hourly: "https://tenki.jp/forecast/9/45/8410/42213/1hour.html"
        },
        wn: {
            prefecture: "長崎",
            subdivisions: "南部",
            name: "雲仙市",
            hourly: "https://weathernews.jp/onebox/tenki/nagasaki/42213/"
        },
        hall: {
            lat: 32.835214,
            long: 130.187508
        }
    },
    南島原市: {
        tj: {
            prefecture: "長崎県",
            subdivisions: "南部(長崎)",
            subdivisions1: "南部",
            subdivisions2: "長崎",
            hourly: "https://tenki.jp/forecast/9/45/8410/42214/1hour.html"
        },
        wn: {
            prefecture: "長崎",
            subdivisions: "南部",
            name: "南島原市",
            hourly: "https://weathernews.jp/onebox/tenki/nagasaki/42214/"
        },
        hall: {
            lat: 32.659716,
            long: 130.297783
        }
    },
    長与町: {
        tj: {
            prefecture: "長崎県",
            subdivisions: "南部(長崎)",
            subdivisions1: "南部",
            subdivisions2: "長崎",
            hourly: "https://tenki.jp/forecast/9/45/8410/42307/1hour.html"
        },
        wn: {
            prefecture: "長崎",
            subdivisions: "南部",
            name: "長与町",
            hourly: "https://weathernews.jp/onebox/tenki/nagasaki/42307/"
        },
        hall: {
            lat: 32.825170,
            long: 129.875071
        }
    },
    時津町: {
        tj: {
            prefecture: "長崎県",
            subdivisions: "南部(長崎)",
            subdivisions1: "南部",
            subdivisions2: "長崎",
            hourly: "https://tenki.jp/forecast/9/45/8410/42308/1hour.html"
        },
        wn: {
            prefecture: "長崎",
            subdivisions: "南部",
            name: "時津町",
            hourly: "https://weathernews.jp/onebox/tenki/nagasaki/42308/"
        },
        hall: {
            lat: 32.828885,
            long: 129.848527
        }
    },
    佐世保市: {
        tj: {
            prefecture: "長崎県",
            subdivisions: "北部(佐世保)",
            subdivisions1: "北部",
            subdivisions2: "佐世保",
            hourly: "https://tenki.jp/forecast/9/45/8420/42202/1hour.html"
        },
        wn: {
            prefecture: "長崎",
            subdivisions: "五島",
            name: "佐世保市",
            hourly: "https://weathernews.jp/onebox/tenki/nagasaki/42202/"
        },
        hall: {
            lat: 33.179904,
            long: 129.715090
        }
    },
    平戸市: {
        tj: {
            prefecture: "長崎県",
            subdivisions: "北部(佐世保)",
            subdivisions1: "北部",
            subdivisions2: "佐世保",
            hourly: "https://tenki.jp/forecast/9/45/8420/42207/1hour.html"
        },
        wn: {
            prefecture: "長崎",
            subdivisions: "北部",
            name: "平戸市",
            hourly: "https://weathernews.jp/onebox/tenki/nagasaki/42207/"
        },
        hall: {
            lat: 33.368065,
            long: 129.553671
        }
    },
    松浦市: {
        tj: {
            prefecture: "長崎県",
            subdivisions: "北部(佐世保)",
            subdivisions1: "北部",
            subdivisions2: "佐世保",
            hourly: "https://tenki.jp/forecast/9/45/8420/42208/1hour.html"
        },
        wn: {
            prefecture: "長崎",
            subdivisions: "北部",
            name: "松浦市",
            hourly: "https://weathernews.jp/onebox/tenki/nagasaki/42208/"
        },
        hall: {
            lat: 33.341023,
            long: 129.709047
        }
    },
    東彼杵町: {
        tj: {
            prefecture: "長崎県",
            subdivisions: "北部(佐世保)",
            subdivisions1: "北部",
            subdivisions2: "佐世保",
            hourly: "https://tenki.jp/forecast/9/45/8420/42321/1hour.html"
        },
        wn: {
            prefecture: "長崎",
            subdivisions: "北部",
            name: "東彼杵町",
            hourly: "https://weathernews.jp/onebox/tenki/nagasaki/42321/"
        },
        hall: {
            lat: 33.037031,
            long: 129.917149
        }
    },
    川棚町: {
        tj: {
            prefecture: "長崎県",
            subdivisions: "北部(佐世保)",
            subdivisions1: "北部",
            subdivisions2: "佐世保",
            hourly: "https://tenki.jp/forecast/9/45/8420/42322/1hour.html"
        },
        wn: {
            prefecture: "長崎",
            subdivisions: "北部",
            name: "川棚町",
            hourly: "https://weathernews.jp/onebox/tenki/nagasaki/42322/"
        },
        hall: {
            lat: 33.072743,
            long: 129.861600
        }
    },
    波佐見町: {
        tj: {
            prefecture: "長崎県",
            subdivisions: "北部(佐世保)",
            subdivisions1: "北部",
            subdivisions2: "佐世保",
            hourly: "https://tenki.jp/forecast/9/45/8420/42323/1hour.html"
        },
        wn: {
            prefecture: "長崎",
            subdivisions: "北部",
            name: "波佐見町",
            hourly: "https://weathernews.jp/onebox/tenki/nagasaki/42323/"
        },
        hall: {
            lat: 33.137890,
            long: 129.895548
        }
    },
    佐々町: {
        tj: {
            prefecture: "長崎県",
            subdivisions: "北部(佐世保)",
            subdivisions1: "北部",
            subdivisions2: "佐世保",
            hourly: "https://tenki.jp/forecast/9/45/8420/42391/1hour.html"
        },
        wn: {
            prefecture: "長崎",
            subdivisions: "北部",
            name: "佐々町",
            hourly: "https://weathernews.jp/onebox/tenki/nagasaki/42391/"
        },
        hall: {
            lat: 33.238426,
            long: 129.650353
        }
    },
    対馬市: {
        tj: {
            prefecture: "長崎県",
            subdivisions: "壱岐・対馬(厳原)",
            subdivisions1: "壱岐・対馬",
            subdivisions2: "厳原",
            hourly: "https://tenki.jp/forecast/9/45/8430/42209/1hour.html"
        },
        wn: {
            prefecture: "長崎",
            subdivisions: "壱岐・対馬",
            name: "対馬市",
            hourly: "https://weathernews.jp/onebox/tenki/nagasaki/42209/"
        },
        hall: {
            lat: 34.202643,
            long: 129.287518
        }
    },
    壱岐市: {
        tj: {
            prefecture: "長崎県",
            subdivisions: "壱岐・対馬(厳原)",
            subdivisions1: "壱岐・対馬",
            subdivisions2: "厳原",
            hourly: "https://tenki.jp/forecast/9/45/8430/42210/1hour.html"
        },
        wn: {
            prefecture: "長崎",
            subdivisions: "壱岐・対馬",
            name: "壱岐市",
            hourly: "https://weathernews.jp/onebox/tenki/nagasaki/42210/"
        },
        hall: {
            lat: 33.749978,
            long: 129.691377
        }
    },
    五島市: {
        tj: {
            prefecture: "長崎県",
            subdivisions: "五島(福江)",
            subdivisions1: "五島",
            subdivisions2: "福江",
            hourly: "https://tenki.jp/forecast/9/45/8440/42211/1hour.html"
        },
        wn: {
            prefecture: "長崎",
            subdivisions: "五島",
            name: "五島市",
            hourly: "https://weathernews.jp/onebox/tenki/nagasaki/42211/"
        },
        hall: {
            lat: 32.695777,
            long: 128.840890
        }
    },
    小値賀町: {
        tj: {
            prefecture: "長崎県",
            subdivisions: "五島(福江)",
            subdivisions1: "五島",
            subdivisions2: "福江",
            hourly: "https://tenki.jp/forecast/9/45/8440/42383/1hour.html"
        },
        wn: {
            prefecture: "長崎",
            subdivisions: "五島",
            name: "小値賀町",
            hourly: "https://weathernews.jp/onebox/tenki/nagasaki/42383/"
        },
        hall: {
            lat: 33.191074,
            long: 129.058766
        }
    },
    新上五島町: {
        tj: {
            prefecture: "長崎県",
            subdivisions: "五島(福江)",
            subdivisions1: "五島",
            subdivisions2: "福江",
            hourly: "https://tenki.jp/forecast/9/45/8440/42411/1hour.html"
        },
        wn: {
            prefecture: "長崎",
            subdivisions: "五島",
            name: "新上五島町",
            hourly: "https://weathernews.jp/onebox/tenki/nagasaki/42411/"
        },
        hall: {
            lat: 32.984553,
            long: 129.073401
        }
    },
    熊本市: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "熊本地方(熊本)",
            subdivisions1: "熊本地方",
            subdivisions2: "熊本",
            hourly: "https://tenki.jp/forecast/9/46/8610/43100/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "熊本地方",
            name: "熊本市中央区",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43101/"
        },
        hall: {
            lat: 32.803078,
            long: 130.707897
        }
    },
    熊本市中央区: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "熊本地方(熊本)",
            subdivisions1: "熊本地方",
            subdivisions2: "熊本",
            hourly: "https://tenki.jp/forecast/9/46/8610/43101/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "熊本地方",
            name: "熊本市中央区",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43101/"
        },
        hall: {
            lat: 32.803218,
            long: 130.708223
        }
    },
    熊本市東区: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "熊本地方(熊本)",
            subdivisions1: "熊本地方",
            subdivisions2: "熊本",
            hourly: "https://tenki.jp/forecast/9/46/8610/43102/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "熊本地方",
            name: "熊本市東区",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43102/"
        },
        hall: {
            lat: 32.780530,
            long: 130.768061
        }
    },
    熊本市西区: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "熊本地方(熊本)",
            subdivisions1: "熊本地方",
            subdivisions2: "熊本",
            hourly: "https://tenki.jp/forecast/9/46/8610/43103/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "熊本地方",
            name: "熊本市西区",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43103/"
        },
        hall: {
            lat: 32.776371,
            long: 130.647562
        }
    },
    熊本市南区: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "熊本地方(熊本)",
            subdivisions1: "熊本地方",
            subdivisions2: "熊本",
            hourly: "https://tenki.jp/forecast/9/46/8610/43104/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "熊本地方",
            name: "熊本市南区",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43104/"
        },
        hall: {
            lat: 32.715360,
            long: 130.678922
        }
    },
    熊本市北区: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "熊本地方(熊本)",
            subdivisions1: "熊本地方",
            subdivisions2: "熊本",
            hourly: "https://tenki.jp/forecast/9/46/8610/43105/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "熊本地方",
            name: "熊本市北区",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43105/"
        },
        hall: {
            lat: 32.903561,
            long: 130.694263
        }
    },
    八代市: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "熊本地方(熊本)",
            subdivisions1: "熊本地方",
            subdivisions2: "熊本",
            hourly: "https://tenki.jp/forecast/9/46/8610/43202/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "熊本地方",
            name: "八代市",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43202/"
        },
        hall: {
            lat: 32.507498,
            long: 130.601808
        }
    },
    荒尾市: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "熊本地方(熊本)",
            subdivisions1: "熊本地方",
            subdivisions2: "熊本",
            hourly: "https://tenki.jp/forecast/9/46/8610/43204/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "熊本地方",
            name: "荒尾市",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43204/"
        },
        hall: {
            lat: 32.986838,
            long: 130.433036
        }
    },
    玉名市: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "熊本地方(熊本)",
            subdivisions1: "熊本地方",
            subdivisions2: "熊本",
            hourly: "https://tenki.jp/forecast/9/46/8610/43206/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "熊本地方",
            name: "玉名市",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43206/"
        },
        hall: {
            lat: 32.935266,
            long: 130.562877
        }
    },
    山鹿市: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "熊本地方(熊本)",
            subdivisions1: "熊本地方",
            subdivisions2: "熊本",
            hourly: "https://tenki.jp/forecast/9/46/8610/43208/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "熊本地方",
            name: "山鹿市",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43208/"
        },
        hall: {
            lat: 33.016728,
            long: 130.691297
        }
    },
    菊池市: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "熊本地方(熊本)",
            subdivisions1: "熊本地方",
            subdivisions2: "熊本",
            hourly: "https://tenki.jp/forecast/9/46/8610/43210/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "熊本地方",
            name: "菊池市",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43210/"
        },
        hall: {
            lat: 32.979485,
            long: 130.813241
        }
    },
    宇土市: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "熊本地方(熊本)",
            subdivisions1: "熊本地方",
            subdivisions2: "熊本",
            hourly: "https://tenki.jp/forecast/9/46/8610/43211/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "熊本地方",
            name: "宇土市",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43211/"
        },
        hall: {
            lat: 32.687362,
            long: 130.658435
        }
    },
    宇城市: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "熊本地方(熊本)",
            subdivisions1: "熊本地方",
            subdivisions2: "熊本",
            hourly: "https://tenki.jp/forecast/9/46/8610/43213/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "熊本地方",
            name: "宇城市",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43213/"
        },
        hall: {
            lat: 32.647814,
            long: 130.684287
        }
    },
    合志市: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "熊本地方(熊本)",
            subdivisions1: "熊本地方",
            subdivisions2: "熊本",
            hourly: "https://tenki.jp/forecast/9/46/8610/43216/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "熊本地方",
            name: "合志市",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43216/"
        },
        hall: {
            lat: 32.885996,
            long: 130.789726
        }
    },
    美里町: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "熊本地方(熊本)",
            subdivisions1: "熊本地方",
            subdivisions2: "熊本",
            hourly: "https://tenki.jp/forecast/9/46/8610/43348/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "熊本地方",
            name: "美里町",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43348/"
        },
        hall: {
            lat: 38.544400,
            long: 141.056717
        }
    },
    玉東町: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "熊本地方(熊本)",
            subdivisions1: "熊本地方",
            subdivisions2: "熊本",
            hourly: "https://tenki.jp/forecast/9/46/8610/43364/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "熊本地方",
            name: "玉東町",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43364/"
        },
        hall: {
            lat: 32.918905,
            long: 130.628593
        }
    },
    南関町: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "熊本地方(熊本)",
            subdivisions1: "熊本地方",
            subdivisions2: "熊本",
            hourly: "https://tenki.jp/forecast/9/46/8610/43367/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "熊本地方",
            name: "南関町",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43367/"
        },
        hall: {
            lat: 33.059565,
            long: 130.543640
        }
    },
    長洲町: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "熊本地方(熊本)",
            subdivisions1: "熊本地方",
            subdivisions2: "熊本",
            hourly: "https://tenki.jp/forecast/9/46/8610/43368/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "熊本地方",
            name: "長洲町",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43368/"
        },
        hall: {
            lat: 32.929756,
            long: 130.452700
        }
    },
    和水町: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "熊本地方(熊本)",
            subdivisions1: "熊本地方",
            subdivisions2: "熊本",
            hourly: "https://tenki.jp/forecast/9/46/8610/43369/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "熊本地方",
            name: "和水町",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43369/"
        },
        hall: {
            lat: 32.978158,
            long: 130.605813
        }
    },
    大津町: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "熊本地方(熊本)",
            subdivisions1: "熊本地方",
            subdivisions2: "熊本",
            hourly: "https://tenki.jp/forecast/9/46/8610/43403/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "熊本地方",
            name: "大津町",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43403/"
        },
        hall: {
            lat: 32.877904,
            long: 130.868653
        }
    },
    菊陽町: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "熊本地方(熊本)",
            subdivisions1: "熊本地方",
            subdivisions2: "熊本",
            hourly: "https://tenki.jp/forecast/9/46/8610/43404/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "熊本地方",
            name: "菊陽町",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43404/"
        },
        hall: {
            lat: 32.862515,
            long: 130.828654
        }
    },
    西原村: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "熊本地方(熊本)",
            subdivisions1: "熊本地方",
            subdivisions2: "熊本",
            hourly: "https://tenki.jp/forecast/9/46/8610/43432/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "熊本地方",
            name: "西原村",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43432/"
        },
        hall: {
            lat: 32.834719,
            long: 130.903036
        }
    },
    御船町: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "熊本地方(熊本)",
            subdivisions1: "熊本地方",
            subdivisions2: "熊本",
            hourly: "https://tenki.jp/forecast/9/46/8610/43441/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "熊本地方",
            name: "御船町",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43441/"
        },
        hall: {
            lat: 32.714585,
            long: 130.801821
        }
    },
    嘉島町: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "熊本地方(熊本)",
            subdivisions1: "熊本地方",
            subdivisions2: "熊本",
            hourly: "https://tenki.jp/forecast/9/46/8610/43442/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "熊本地方",
            name: "嘉島町",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43442/"
        },
        hall: {
            lat: 32.740072,
            long: 130.757303
        }
    },
    益城町: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "熊本地方(熊本)",
            subdivisions1: "熊本地方",
            subdivisions2: "熊本",
            hourly: "https://tenki.jp/forecast/9/46/8610/43443/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "熊本地方",
            name: "益城町",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43443/"
        },
        hall: {
            lat: 32.791608,
            long: 130.816338
        }
    },
    甲佐町: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "熊本地方(熊本)",
            subdivisions1: "熊本地方",
            subdivisions2: "熊本",
            hourly: "https://tenki.jp/forecast/9/46/8610/43444/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "熊本地方",
            name: "甲佐町",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43444/"
        },
        hall: {
            lat: 32.651356,
            long: 130.811466
        }
    },
    山都町: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "熊本地方(熊本)",
            subdivisions1: "熊本地方",
            subdivisions2: "熊本",
            hourly: "https://tenki.jp/forecast/9/46/8610/43447/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "熊本地方",
            name: "山都町",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43447/"
        },
        hall: {
            lat: 32.685387,
            long: 130.990443
        }
    },
    氷川町: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "熊本地方(熊本)",
            subdivisions1: "熊本地方",
            subdivisions2: "熊本",
            hourly: "https://tenki.jp/forecast/9/46/8610/43468/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "熊本地方",
            name: "氷川町",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43468/"
        },
        hall: {
            lat: 32.582402,
            long: 130.673753
        }
    },
    阿蘇市: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "阿蘇地方(阿蘇乙姫)",
            subdivisions1: "阿蘇地方",
            subdivisions2: "阿蘇乙姫",
            hourly: "https://tenki.jp/forecast/9/46/8620/43214/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "阿蘇地方",
            name: "阿蘇市",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43214/"
        },
        hall: {
            lat: 32.952222,
            long: 131.121389
        }
    },
    南小国町: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "阿蘇地方(阿蘇乙姫)",
            subdivisions1: "阿蘇地方",
            subdivisions2: "阿蘇乙姫",
            hourly: "https://tenki.jp/forecast/9/46/8620/43423/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "阿蘇地方",
            name: "南小国町",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43423/"
        },
        hall: {
            lat: 33.098192,
            long: 131.070724
        }
    },
    小国町: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "阿蘇地方(阿蘇乙姫)",
            subdivisions1: "阿蘇地方",
            subdivisions2: "阿蘇乙姫",
            hourly: "https://tenki.jp/forecast/9/46/8620/43424/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "阿蘇地方",
            name: "小国町",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43424/"
        },
        hall: {
            lat: 38.061391,
            long: 139.743333
        }
    },
    産山村: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "阿蘇地方(阿蘇乙姫)",
            subdivisions1: "阿蘇地方",
            subdivisions2: "阿蘇乙姫",
            hourly: "https://tenki.jp/forecast/9/46/8620/43425/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "阿蘇地方",
            name: "産山村",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43425/"
        },
        hall: {
            lat: 32.995747,
            long: 131.216799
        }
    },
    高森町: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "阿蘇地方(阿蘇乙姫)",
            subdivisions1: "阿蘇地方",
            subdivisions2: "阿蘇乙姫",
            hourly: "https://tenki.jp/forecast/9/46/8620/43428/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "阿蘇地方",
            name: "高森町",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43428/"
        },
        hall: {
            lat: 35.551542,
            long: 137.878519
        }
    },
    南阿蘇村: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "阿蘇地方(阿蘇乙姫)",
            subdivisions1: "阿蘇地方",
            subdivisions2: "阿蘇乙姫",
            hourly: "https://tenki.jp/forecast/9/46/8620/43433/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "阿蘇地方",
            name: "南阿蘇村",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43433/"
        },
        hall: {
            lat: 32.845046,
            long: 131.017881
        }
    },
    水俣市: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "天草・芦北地方(牛深)",
            subdivisions1: "天草・芦北地方",
            subdivisions2: "牛深",
            hourly: "https://tenki.jp/forecast/9/46/8630/43205/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "天草・芦北地方",
            name: "水俣市",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43205/"
        },
        hall: {
            lat: 32.211883,
            long: 130.408725
        }
    },
    上天草市: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "天草・芦北地方(牛深)",
            subdivisions1: "天草・芦北地方",
            subdivisions2: "牛深",
            hourly: "https://tenki.jp/forecast/9/46/8630/43212/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "天草・芦北地方",
            name: "上天草市",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43212/"
        },
        hall: {
            lat: 32.587422,
            long: 130.430405
        }
    },
    天草市: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "天草・芦北地方(牛深)",
            subdivisions1: "天草・芦北地方",
            subdivisions2: "牛深",
            hourly: "https://tenki.jp/forecast/9/46/8630/43215/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "天草・芦北地方",
            name: "天草市",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43215/"
        },
        hall: {
            lat: 32.458621,
            long: 130.193010
        }
    },
    芦北町: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "天草・芦北地方(牛深)",
            subdivisions1: "天草・芦北地方",
            subdivisions2: "牛深",
            hourly: "https://tenki.jp/forecast/9/46/8630/43482/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "天草・芦北地方",
            name: "芦北町",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43482/"
        },
        hall: {
            lat: 32.299102,
            long: 130.493119
        }
    },
    津奈木町: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "天草・芦北地方(牛深)",
            subdivisions1: "天草・芦北地方",
            subdivisions2: "牛深",
            hourly: "https://tenki.jp/forecast/9/46/8630/43484/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "天草・芦北地方",
            name: "津奈木町",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43484/"
        },
        hall: {
            lat: 32.233892,
            long: 130.439621
        }
    },
    苓北町: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "天草・芦北地方(牛深)",
            subdivisions1: "天草・芦北地方",
            subdivisions2: "牛深",
            hourly: "https://tenki.jp/forecast/9/46/8630/43531/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "天草・芦北地方",
            name: "苓北町",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43531/"
        },
        hall: {
            lat: 32.513413,
            long: 130.054720
        }
    },
    人吉市: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "球磨地方(人吉)",
            subdivisions1: "球磨地方",
            subdivisions2: "人吉",
            hourly: "https://tenki.jp/forecast/9/46/8640/43203/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "球磨地方",
            name: "人吉市",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43203/"
        },
        hall: {
            lat: 32.205633,
            long: 130.760157
        }
    },
    錦町: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "球磨地方(人吉)",
            subdivisions1: "球磨地方",
            subdivisions2: "人吉",
            hourly: "https://tenki.jp/forecast/9/46/8640/43501/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "球磨地方",
            name: "錦町",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43501/"
        },
        hall: {
            lat: 32.200987,
            long: 130.840902
        }
    },
    多良木町: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "球磨地方(人吉)",
            subdivisions1: "球磨地方",
            subdivisions2: "人吉",
            hourly: "https://tenki.jp/forecast/9/46/8640/43505/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "球磨地方",
            name: "多良木町",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43505/"
        },
        hall: {
            lat: 32.264039,
            long: 130.935795
        }
    },
    湯前町: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "球磨地方(人吉)",
            subdivisions1: "球磨地方",
            subdivisions2: "人吉",
            hourly: "https://tenki.jp/forecast/9/46/8640/43506/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "球磨地方",
            name: "湯前町",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43506/"
        },
        hall: {
            lat: 32.276144,
            long: 130.980987
        }
    },
    水上村: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "球磨地方(人吉)",
            subdivisions1: "球磨地方",
            subdivisions2: "人吉",
            hourly: "https://tenki.jp/forecast/9/46/8640/43507/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "球磨地方",
            name: "水上村",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43507/"
        },
        hall: {
            lat: 32.314379,
            long: 131.009541
        }
    },
    相良村: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "球磨地方(人吉)",
            subdivisions1: "球磨地方",
            subdivisions2: "人吉",
            hourly: "https://tenki.jp/forecast/9/46/8640/43510/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "球磨地方",
            name: "相良村",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43510/"
        },
        hall: {
            lat: 32.235260,
            long: 130.797985
        }
    },
    五木村: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "球磨地方(人吉)",
            subdivisions1: "球磨地方",
            subdivisions2: "人吉",
            hourly: "https://tenki.jp/forecast/9/46/8640/43511/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "球磨地方",
            name: "五木村",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43511/"
        },
        hall: {
            lat: 32.397343,
            long: 130.827833
        }
    },
    山江村: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "球磨地方(人吉)",
            subdivisions1: "球磨地方",
            subdivisions2: "人吉",
            hourly: "https://tenki.jp/forecast/9/46/8640/43512/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "球磨地方",
            name: "山江村",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43512/"
        },
        hall: {
            lat: 32.246465,
            long: 130.767136
        }
    },
    球磨村: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "球磨地方(人吉)",
            subdivisions1: "球磨地方",
            subdivisions2: "人吉",
            hourly: "https://tenki.jp/forecast/9/46/8640/43513/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "球磨地方",
            name: "球磨村",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43513/"
        },
        hall: {
            lat: 32.252621,
            long: 130.651274
        }
    },
    あさぎり町: {
        tj: {
            prefecture: "熊本県",
            subdivisions: "球磨地方(人吉)",
            subdivisions1: "球磨地方",
            subdivisions2: "人吉",
            hourly: "https://tenki.jp/forecast/9/46/8640/43514/1hour.html"
        },
        wn: {
            prefecture: "熊本",
            subdivisions: "球磨地方",
            name: "あさぎり町",
            hourly: "https://weathernews.jp/onebox/tenki/kumamoto/43514/"
        },
        hall: {
            lat: 32.240321,
            long: 130.897827
        }
    },
    大分市: {
        tj: {
            prefecture: "大分県",
            subdivisions: "中部(大分)",
            subdivisions1: "中部",
            subdivisions2: "大分",
            hourly: "https://tenki.jp/forecast/9/47/8310/44201/1hour.html"
        },
        wn: {
            prefecture: "大分",
            subdivisions: "中部",
            name: "大分市",
            hourly: "https://weathernews.jp/onebox/tenki/oita/44201/"
        },
        hall: {
            lat: 33.239526,
            long: 131.609377
        }
    },
    別府市: {
        tj: {
            prefecture: "大分県",
            subdivisions: "中部(大分)",
            subdivisions1: "中部",
            subdivisions2: "大分",
            hourly: "https://tenki.jp/forecast/9/47/8310/44202/1hour.html"
        },
        wn: {
            prefecture: "大分",
            subdivisions: "中部",
            name: "別府市",
            hourly: "https://weathernews.jp/onebox/tenki/oita/44202/"
        },
        hall: {
            lat: 33.284642,
            long: 131.491328
        }
    },
    臼杵市: {
        tj: {
            prefecture: "大分県",
            subdivisions: "中部(大分)",
            subdivisions1: "中部",
            subdivisions2: "大分",
            hourly: "https://tenki.jp/forecast/9/47/8310/44206/1hour.html"
        },
        wn: {
            prefecture: "大分",
            subdivisions: "中部",
            name: "臼杵市",
            hourly: "https://weathernews.jp/onebox/tenki/oita/44206/"
        },
        hall: {
            lat: 33.125948,
            long: 131.804638
        }
    },
    津久見市: {
        tj: {
            prefecture: "大分県",
            subdivisions: "中部(大分)",
            subdivisions1: "中部",
            subdivisions2: "大分",
            hourly: "https://tenki.jp/forecast/9/47/8310/44207/1hour.html"
        },
        wn: {
            prefecture: "大分",
            subdivisions: "中部",
            name: "津久見市",
            hourly: "https://weathernews.jp/onebox/tenki/oita/44207/"
        },
        hall: {
            lat: 33.072339,
            long: 131.861219
        }
    },
    杵築市: {
        tj: {
            prefecture: "大分県",
            subdivisions: "中部(大分)",
            subdivisions1: "中部",
            subdivisions2: "大分",
            hourly: "https://tenki.jp/forecast/9/47/8310/44210/1hour.html"
        },
        wn: {
            prefecture: "大分",
            subdivisions: "中部",
            name: "杵築市",
            hourly: "https://weathernews.jp/onebox/tenki/oita/44210/"
        },
        hall: {
            lat: 33.417029,
            long: 131.616089
        }
    },
    由布市: {
        tj: {
            prefecture: "大分県",
            subdivisions: "中部(大分)",
            subdivisions1: "中部",
            subdivisions2: "大分",
            hourly: "https://tenki.jp/forecast/9/47/8310/44213/1hour.html"
        },
        wn: {
            prefecture: "大分",
            subdivisions: "中部",
            name: "由布市",
            hourly: "https://weathernews.jp/onebox/tenki/oita/44213/"
        },
        hall: {
            lat: 33.179996,
            long: 131.426792
        }
    },
    日出町: {
        tj: {
            prefecture: "大分県",
            subdivisions: "中部(大分)",
            subdivisions1: "中部",
            subdivisions2: "大分",
            hourly: "https://tenki.jp/forecast/9/47/8310/44341/1hour.html"
        },
        wn: {
            prefecture: "大分",
            subdivisions: "中部",
            name: "日出町",
            hourly: "https://weathernews.jp/onebox/tenki/oita/44341/"
        },
        hall: {
            lat: 33.369442,
            long: 131.532536
        }
    },
    中津市: {
        tj: {
            prefecture: "大分県",
            subdivisions: "北部(中津)",
            subdivisions1: "北部",
            subdivisions2: "中津",
            hourly: "https://tenki.jp/forecast/9/47/8320/44203/1hour.html"
        },
        wn: {
            prefecture: "大分",
            subdivisions: "北部",
            name: "中津市",
            hourly: "https://weathernews.jp/onebox/tenki/oita/44203/"
        },
        hall: {
            lat: 33.598302,
            long: 131.188240
        }
    },
    豊後高田市: {
        tj: {
            prefecture: "大分県",
            subdivisions: "北部(中津)",
            subdivisions1: "北部",
            subdivisions2: "中津",
            hourly: "https://tenki.jp/forecast/9/47/8320/44209/1hour.html"
        },
        wn: {
            prefecture: "大分",
            subdivisions: "北部",
            name: "豊後高田市",
            hourly: "https://weathernews.jp/onebox/tenki/oita/44209/"
        },
        hall: {
            lat: 33.556202,
            long: 131.446931
        }
    },
    宇佐市: {
        tj: {
            prefecture: "大分県",
            subdivisions: "北部(中津)",
            subdivisions1: "北部",
            subdivisions2: "中津",
            hourly: "https://tenki.jp/forecast/9/47/8320/44211/1hour.html"
        },
        wn: {
            prefecture: "大分",
            subdivisions: "北部",
            name: "宇佐市",
            hourly: "https://weathernews.jp/onebox/tenki/oita/44211/"
        },
        hall: {
            lat: 33.532327,
            long: 131.350337
        }
    },
    国東市: {
        tj: {
            prefecture: "大分県",
            subdivisions: "北部(中津)",
            subdivisions1: "北部",
            subdivisions2: "中津",
            hourly: "https://tenki.jp/forecast/9/47/8320/44214/1hour.html"
        },
        wn: {
            prefecture: "大分",
            subdivisions: "北部",
            name: "国東市",
            hourly: "https://weathernews.jp/onebox/tenki/oita/44214/"
        },
        hall: {
            lat: 33.563327,
            long: 131.732264
        }
    },
    姫島村: {
        tj: {
            prefecture: "大分県",
            subdivisions: "北部(中津)",
            subdivisions1: "北部",
            subdivisions2: "中津",
            hourly: "https://tenki.jp/forecast/9/47/8320/44322/1hour.html"
        },
        wn: {
            prefecture: "大分",
            subdivisions: "北部",
            name: "姫島村",
            hourly: "https://weathernews.jp/onebox/tenki/oita/44322/"
        },
        hall: {
            lat: 33.724536,
            long: 131.645143
        }
    },
    日田市: {
        tj: {
            prefecture: "大分県",
            subdivisions: "西部(日田)",
            subdivisions1: "西部",
            subdivisions2: "日田",
            hourly: "https://tenki.jp/forecast/9/47/8330/44204/1hour.html"
        },
        wn: {
            prefecture: "大分",
            subdivisions: "西部",
            name: "日田市",
            hourly: "https://weathernews.jp/onebox/tenki/oita/44204/"
        },
        hall: {
            lat: 33.321041,
            long: 130.941310
        }
    },
    竹田市: {
        tj: {
            prefecture: "大分県",
            subdivisions: "西部(日田)",
            subdivisions1: "西部",
            subdivisions2: "日田",
            hourly: "https://tenki.jp/forecast/9/47/8330/44208/1hour.html"
        },
        wn: {
            prefecture: "大分",
            subdivisions: "西部",
            name: "竹田市",
            hourly: "https://weathernews.jp/onebox/tenki/oita/44208/"
        },
        hall: {
            lat: 32.973673,
            long: 131.397838
        }
    },
    九重町: {
        tj: {
            prefecture: "大分県",
            subdivisions: "西部(日田)",
            subdivisions1: "西部",
            subdivisions2: "日田",
            hourly: "https://tenki.jp/forecast/9/47/8330/44461/1hour.html"
        },
        wn: {
            prefecture: "大分",
            subdivisions: "西部",
            name: "九重町",
            hourly: "https://weathernews.jp/onebox/tenki/oita/44461/"
        },
        hall: {
            lat: 33.228521,
            long: 131.188797
        }
    },
    玖珠町: {
        tj: {
            prefecture: "大分県",
            subdivisions: "西部(日田)",
            subdivisions1: "西部",
            subdivisions2: "日田",
            hourly: "https://tenki.jp/forecast/9/47/8330/44462/1hour.html"
        },
        wn: {
            prefecture: "大分",
            subdivisions: "西部",
            name: "玖珠町",
            hourly: "https://weathernews.jp/onebox/tenki/oita/44462/"
        },
        hall: {
            lat: 33.283135,
            long: 131.151553
        }
    },
    佐伯市: {
        tj: {
            prefecture: "大分県",
            subdivisions: "南部(佐伯)",
            subdivisions1: "南部",
            subdivisions2: "佐伯",
            hourly: "https://tenki.jp/forecast/9/47/8340/44205/1hour.html"
        },
        wn: {
            prefecture: "大分",
            subdivisions: "南部",
            name: "佐伯市",
            hourly: "https://weathernews.jp/onebox/tenki/oita/44205/"
        },
        hall: {
            lat: 32.960204,
            long: 131.899499
        }
    },
    豊後大野市: {
        tj: {
            prefecture: "大分県",
            subdivisions: "南部(佐伯)",
            subdivisions1: "南部",
            subdivisions2: "佐伯",
            hourly: "https://tenki.jp/forecast/9/47/8340/44212/1hour.html"
        },
        wn: {
            prefecture: "大分",
            subdivisions: "南部",
            name: "豊後大野市",
            hourly: "https://weathernews.jp/onebox/tenki/oita/44212/"
        },
        hall: {
            lat: 32.978152,
            long: 131.585011
        }
    },
    宮崎市: {
        tj: {
            prefecture: "宮崎県",
            subdivisions: "南部平野部(宮崎)",
            subdivisions1: "南部平野部",
            subdivisions2: "宮崎",
            hourly: "https://tenki.jp/forecast/9/48/8710/45201/1hour.html"
        },
        wn: {
            prefecture: "宮崎",
            subdivisions: "南部平野部",
            name: "宮崎市",
            hourly: "https://weathernews.jp/onebox/tenki/miyazaki/45201/"
        },
        hall: {
            lat: 31.907676,
            long: 131.420244
        }
    },
    日南市: {
        tj: {
            prefecture: "宮崎県",
            subdivisions: "南部平野部(宮崎)",
            subdivisions1: "南部平野部",
            subdivisions2: "宮崎",
            hourly: "https://tenki.jp/forecast/9/48/8710/45204/1hour.html"
        },
        wn: {
            prefecture: "宮崎",
            subdivisions: "南部平野部",
            name: "日南市",
            hourly: "https://weathernews.jp/onebox/tenki/miyazaki/45204/"
        },
        hall: {
            lat: 31.601811,
            long: 131.378761
        }
    },
    串間市: {
        tj: {
            prefecture: "宮崎県",
            subdivisions: "南部平野部(宮崎)",
            subdivisions1: "南部平野部",
            subdivisions2: "宮崎",
            hourly: "https://tenki.jp/forecast/9/48/8710/45207/1hour.html"
        },
        wn: {
            prefecture: "宮崎",
            subdivisions: "南部平野部",
            name: "串間市",
            hourly: "https://weathernews.jp/onebox/tenki/miyazaki/45207/"
        },
        hall: {
            lat: 31.464539,
            long: 131.228306
        }
    },
    国富町: {
        tj: {
            prefecture: "宮崎県",
            subdivisions: "南部平野部(宮崎)",
            subdivisions1: "南部平野部",
            subdivisions2: "宮崎",
            hourly: "https://tenki.jp/forecast/9/48/8710/45382/1hour.html"
        },
        wn: {
            prefecture: "宮崎",
            subdivisions: "南部平野部",
            name: "国富町",
            hourly: "https://weathernews.jp/onebox/tenki/miyazaki/45382/"
        },
        hall: {
            lat: 31.990646,
            long: 131.323535
        }
    },
    綾町: {
        tj: {
            prefecture: "宮崎県",
            subdivisions: "南部平野部(宮崎)",
            subdivisions1: "南部平野部",
            subdivisions2: "宮崎",
            hourly: "https://tenki.jp/forecast/9/48/8710/45383/1hour.html"
        },
        wn: {
            prefecture: "宮崎",
            subdivisions: "南部平野部",
            name: "綾町",
            hourly: "https://weathernews.jp/onebox/tenki/miyazaki/45383/"
        },
        hall: {
            lat: 31.999135,
            long: 131.253182
        }
    },
    延岡市: {
        tj: {
            prefecture: "宮崎県",
            subdivisions: "北部平野部(延岡)",
            subdivisions1: "北部平野部",
            subdivisions2: "延岡",
            hourly: "https://tenki.jp/forecast/9/48/8720/45203/1hour.html"
        },
        wn: {
            prefecture: "宮崎",
            subdivisions: "北部平野部",
            name: "延岡市",
            hourly: "https://weathernews.jp/onebox/tenki/miyazaki/45203/"
        },
        hall: {
            lat: 32.582401,
            long: 131.664859
        }
    },
    日向市: {
        tj: {
            prefecture: "宮崎県",
            subdivisions: "北部平野部(延岡)",
            subdivisions1: "北部平野部",
            subdivisions2: "延岡",
            hourly: "https://tenki.jp/forecast/9/48/8720/45206/1hour.html"
        },
        wn: {
            prefecture: "宮崎",
            subdivisions: "北部平野部",
            name: "日向市",
            hourly: "https://weathernews.jp/onebox/tenki/miyazaki/45206/"
        },
        hall: {
            lat: 32.422947,
            long: 131.623962
        }
    },
    西都市: {
        tj: {
            prefecture: "宮崎県",
            subdivisions: "北部平野部(延岡)",
            subdivisions1: "北部平野部",
            subdivisions2: "延岡",
            hourly: "https://tenki.jp/forecast/9/48/8720/45208/1hour.html"
        },
        wn: {
            prefecture: "宮崎",
            subdivisions: "北部平野部",
            name: "西都市",
            hourly: "https://weathernews.jp/onebox/tenki/miyazaki/45208/"
        },
        hall: {
            lat: 32.107862,
            long: 131.400948
        }
    },
    高鍋町: {
        tj: {
            prefecture: "宮崎県",
            subdivisions: "北部平野部(延岡)",
            subdivisions1: "北部平野部",
            subdivisions2: "延岡",
            hourly: "https://tenki.jp/forecast/9/48/8720/45401/1hour.html"
        },
        wn: {
            prefecture: "宮崎",
            subdivisions: "北部平野部",
            name: "高鍋町",
            hourly: "https://weathernews.jp/onebox/tenki/miyazaki/45401/"
        },
        hall: {
            lat: 32.127990,
            long: 131.503341
        }
    },
    新富町: {
        tj: {
            prefecture: "宮崎県",
            subdivisions: "北部平野部(延岡)",
            subdivisions1: "北部平野部",
            subdivisions2: "延岡",
            hourly: "https://tenki.jp/forecast/9/48/8720/45402/1hour.html"
        },
        wn: {
            prefecture: "宮崎",
            subdivisions: "北部平野部",
            name: "新富町",
            hourly: "https://weathernews.jp/onebox/tenki/miyazaki/45402/"
        },
        hall: {
            lat: 32.068937,
            long: 131.487984
        }
    },
    木城町: {
        tj: {
            prefecture: "宮崎県",
            subdivisions: "北部平野部(延岡)",
            subdivisions1: "北部平野部",
            subdivisions2: "延岡",
            hourly: "https://tenki.jp/forecast/9/48/8720/45404/1hour.html"
        },
        wn: {
            prefecture: "宮崎",
            subdivisions: "北部平野部",
            name: "木城町",
            hourly: "https://weathernews.jp/onebox/tenki/miyazaki/45404/"
        },
        hall: {
            lat: 32.163784,
            long: 131.473354
        }
    },
    川南町: {
        tj: {
            prefecture: "宮崎県",
            subdivisions: "北部平野部(延岡)",
            subdivisions1: "北部平野部",
            subdivisions2: "延岡",
            hourly: "https://tenki.jp/forecast/9/48/8720/45405/1hour.html"
        },
        wn: {
            prefecture: "宮崎",
            subdivisions: "北部平野部",
            name: "川南町",
            hourly: "https://weathernews.jp/onebox/tenki/miyazaki/45405/"
        },
        hall: {
            lat: 32.192009,
            long: 131.525816
        }
    },
    都農町: {
        tj: {
            prefecture: "宮崎県",
            subdivisions: "北部平野部(延岡)",
            subdivisions1: "北部平野部",
            subdivisions2: "延岡",
            hourly: "https://tenki.jp/forecast/9/48/8720/45406/1hour.html"
        },
        wn: {
            prefecture: "宮崎",
            subdivisions: "北部平野部",
            name: "都農町",
            hourly: "https://weathernews.jp/onebox/tenki/miyazaki/45406/"
        },
        hall: {
            lat: 32.256434,
            long: 131.559690
        }
    },
    門川町: {
        tj: {
            prefecture: "宮崎県",
            subdivisions: "北部平野部(延岡)",
            subdivisions1: "北部平野部",
            subdivisions2: "延岡",
            hourly: "https://tenki.jp/forecast/9/48/8720/45421/1hour.html"
        },
        wn: {
            prefecture: "宮崎",
            subdivisions: "北部平野部",
            name: "門川町",
            hourly: "https://weathernews.jp/onebox/tenki/miyazaki/45421/"
        },
        hall: {
            lat: 32.470914,
            long: 131.646471
        }
    },
    都城市: {
        tj: {
            prefecture: "宮崎県",
            subdivisions: "南部山沿い(都城)",
            subdivisions1: "南部山沿い",
            subdivisions2: "都城",
            hourly: "https://tenki.jp/forecast/9/48/8730/45202/1hour.html"
        },
        wn: {
            prefecture: "宮崎",
            subdivisions: "南部山沿い",
            name: "都城市",
            hourly: "https://weathernews.jp/onebox/tenki/miyazaki/45202/"
        },
        hall: {
            lat: 31.719519,
            long: 131.061497
        }
    },
    小林市: {
        tj: {
            prefecture: "宮崎県",
            subdivisions: "南部山沿い(都城)",
            subdivisions1: "南部山沿い",
            subdivisions2: "都城",
            hourly: "https://tenki.jp/forecast/9/48/8730/45205/1hour.html"
        },
        wn: {
            prefecture: "宮崎",
            subdivisions: "南部山沿い",
            name: "小林市",
            hourly: "https://weathernews.jp/onebox/tenki/miyazaki/45205/"
        },
        hall: {
            lat: 31.996657,
            long: 130.972674
        }
    },
    えびの市: {
        tj: {
            prefecture: "宮崎県",
            subdivisions: "南部山沿い(都城)",
            subdivisions1: "南部山沿い",
            subdivisions2: "都城",
            hourly: "https://tenki.jp/forecast/9/48/8730/45209/1hour.html"
        },
        wn: {
            prefecture: "宮崎",
            subdivisions: "南部山沿い",
            name: "えびの市",
            hourly: "https://weathernews.jp/onebox/tenki/miyazaki/45209/"
        },
        hall: {
            lat: 32.045347,
            long: 130.810841
        }
    },
    三股町: {
        tj: {
            prefecture: "宮崎県",
            subdivisions: "南部山沿い(都城)",
            subdivisions1: "南部山沿い",
            subdivisions2: "都城",
            hourly: "https://tenki.jp/forecast/9/48/8730/45341/1hour.html"
        },
        wn: {
            prefecture: "宮崎",
            subdivisions: "南部山沿い",
            name: "三股町",
            hourly: "https://weathernews.jp/onebox/tenki/miyazaki/45341/"
        },
        hall: {
            lat: 31.730686,
            long: 131.124920
        }
    },
    高原町: {
        tj: {
            prefecture: "宮崎県",
            subdivisions: "南部山沿い(都城)",
            subdivisions1: "南部山沿い",
            subdivisions2: "都城",
            hourly: "https://tenki.jp/forecast/9/48/8730/45361/1hour.html"
        },
        wn: {
            prefecture: "宮崎",
            subdivisions: "南部山沿い",
            name: "高原町",
            hourly: "https://weathernews.jp/onebox/tenki/miyazaki/45361/"
        },
        hall: {
            lat: 31.928413,
            long: 131.007870
        }
    },
    西米良村: {
        tj: {
            prefecture: "宮崎県",
            subdivisions: "北部山沿い(高千穂)",
            subdivisions1: "北部山沿い",
            subdivisions2: "高千穂",
            hourly: "https://tenki.jp/forecast/9/48/8740/45403/1hour.html"
        },
        wn: {
            prefecture: "宮崎",
            subdivisions: "北部山沿い",
            name: "西米良村",
            hourly: "https://weathernews.jp/onebox/tenki/miyazaki/45403/"
        },
        hall: {
            lat: 32.226354,
            long: 131.154452
        }
    },
    諸塚村: {
        tj: {
            prefecture: "宮崎県",
            subdivisions: "北部山沿い(高千穂)",
            subdivisions1: "北部山沿い",
            subdivisions2: "高千穂",
            hourly: "https://tenki.jp/forecast/9/48/8740/45429/1hour.html"
        },
        wn: {
            prefecture: "宮崎",
            subdivisions: "北部山沿い",
            name: "諸塚村",
            hourly: "https://weathernews.jp/onebox/tenki/miyazaki/45429/"
        },
        hall: {
            lat: 32.512184,
            long: 131.330319
        }
    },
    椎葉村: {
        tj: {
            prefecture: "宮崎県",
            subdivisions: "北部山沿い(高千穂)",
            subdivisions1: "北部山沿い",
            subdivisions2: "高千穂",
            hourly: "https://tenki.jp/forecast/9/48/8740/45430/1hour.html"
        },
        wn: {
            prefecture: "宮崎",
            subdivisions: "北部山沿い",
            name: "椎葉村",
            hourly: "https://weathernews.jp/onebox/tenki/miyazaki/45430/"
        },
        hall: {
            lat: 32.467408,
            long: 131.158228
        }
    },
    美郷町: {
        tj: {
            prefecture: "宮崎県",
            subdivisions: "北部山沿い(高千穂)",
            subdivisions1: "北部山沿い",
            subdivisions2: "高千穂",
            hourly: "https://tenki.jp/forecast/9/48/8740/45431/1hour.html"
        },
        wn: {
            prefecture: "宮崎",
            subdivisions: "北部山沿い",
            name: "美郷町",
            hourly: "https://weathernews.jp/onebox/tenki/miyazaki/45431/"
        },
        hall: {
            lat: 39.461633,
            long: 140.582127
        }
    },
    高千穂町: {
        tj: {
            prefecture: "宮崎県",
            subdivisions: "北部山沿い(高千穂)",
            subdivisions1: "北部山沿い",
            subdivisions2: "高千穂",
            hourly: "https://tenki.jp/forecast/9/48/8740/45441/1hour.html"
        },
        wn: {
            prefecture: "宮崎",
            subdivisions: "北部山沿い",
            name: "高千穂町",
            hourly: "https://weathernews.jp/onebox/tenki/miyazaki/45441/"
        },
        hall: {
            lat: 32.711651,
            long: 131.307871
        }
    },
    日之影町: {
        tj: {
            prefecture: "宮崎県",
            subdivisions: "北部山沿い(高千穂)",
            subdivisions1: "北部山沿い",
            subdivisions2: "高千穂",
            hourly: "https://tenki.jp/forecast/9/48/8740/45442/1hour.html"
        },
        wn: {
            prefecture: "宮崎",
            subdivisions: "北部山沿い",
            name: "日之影町",
            hourly: "https://weathernews.jp/onebox/tenki/miyazaki/45442/"
        },
        hall: {
            lat: 32.659422,
            long: 131.380921
        }
    },
    五ヶ瀬町: {
        tj: {
            prefecture: "宮崎県",
            subdivisions: "北部山沿い(高千穂)",
            subdivisions1: "北部山沿い",
            subdivisions2: "高千穂",
            hourly: "https://tenki.jp/forecast/9/48/8740/45443/1hour.html"
        },
        wn: {
            prefecture: "宮崎",
            subdivisions: "北部山沿い",
            name: "五ヶ瀬町",
            hourly: "https://weathernews.jp/onebox/tenki/miyazaki/45443/"
        },
        hall: {
            lat: 32.683380,
            long: 131.196910
        }
    },
    奄美市: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "奄美地方(名瀬)",
            subdivisions1: "奄美地方",
            subdivisions2: "名瀬",
            hourly: "https://tenki.jp/forecast/9/49/1000/46222/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "奄美地方",
            name: "奄美市",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46222/"
        },
        hall: {
            lat: 28.377273,
            long: 129.493780
        }
    },
    十島村: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "奄美地方(名瀬)",
            subdivisions1: "奄美地方",
            subdivisions2: "名瀬",
            hourly: "https://tenki.jp/forecast/9/49/1000/46304/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "奄美地方",
            name: "十島村",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46304/"
        },
        hall: {
            lat: 31.593157,
            long: 130.560588
        }
    },
    大和村: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "奄美地方(名瀬)",
            subdivisions1: "奄美地方",
            subdivisions2: "名瀬",
            hourly: "https://tenki.jp/forecast/9/49/1000/46523/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "奄美地方",
            name: "大和村",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46523/"
        },
        hall: {
            lat: 28.358076,
            long: 129.395262
        }
    },
    宇検村: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "奄美地方(名瀬)",
            subdivisions1: "奄美地方",
            subdivisions2: "名瀬",
            hourly: "https://tenki.jp/forecast/9/49/1000/46524/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "奄美地方",
            name: "宇検村",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46524/"
        },
        hall: {
            lat: 28.280773,
            long: 129.297208
        }
    },
    瀬戸内町: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "奄美地方(名瀬)",
            subdivisions1: "奄美地方",
            subdivisions2: "名瀬",
            hourly: "https://tenki.jp/forecast/9/49/1000/46525/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "奄美地方",
            name: "瀬戸内町",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46525/"
        },
        hall: {
            lat: 28.146484,
            long: 129.314734
        }
    },
    龍郷町: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "奄美地方(名瀬)",
            subdivisions1: "奄美地方",
            subdivisions2: "名瀬",
            hourly: "https://tenki.jp/forecast/9/49/1000/46527/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "奄美地方",
            name: "龍郷町",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46527/"
        },
        hall: {
            lat: 28.413300,
            long: 129.589355
        }
    },
    喜界町: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "奄美地方(名瀬)",
            subdivisions1: "奄美地方",
            subdivisions2: "名瀬",
            hourly: "https://tenki.jp/forecast/9/49/1000/46529/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "奄美地方",
            name: "喜界町",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46529/"
        },
        hall: {
            lat: 28.316838,
            long: 129.940035
        }
    },
    徳之島町: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "奄美地方(名瀬)",
            subdivisions1: "奄美地方",
            subdivisions2: "名瀬",
            hourly: "https://tenki.jp/forecast/9/49/1000/46530/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "奄美地方",
            name: "徳之島町",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46530/"
        },
        hall: {
            lat: 27.726329,
            long: 129.018622
        }
    },
    天城町: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "奄美地方(名瀬)",
            subdivisions1: "奄美地方",
            subdivisions2: "名瀬",
            hourly: "https://tenki.jp/forecast/9/49/1000/46531/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "奄美地方",
            name: "天城町",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46531/"
        },
        hall: {
            lat: 27.811660,
            long: 128.897749
        }
    },
    伊仙町: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "奄美地方(名瀬)",
            subdivisions1: "奄美地方",
            subdivisions2: "名瀬",
            hourly: "https://tenki.jp/forecast/9/49/1000/46532/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "奄美地方",
            name: "伊仙町",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46532/"
        },
        hall: {
            lat: 27.673186,
            long: 128.937762
        }
    },
    和泊町: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "奄美地方(名瀬)",
            subdivisions1: "奄美地方",
            subdivisions2: "名瀬",
            hourly: "https://tenki.jp/forecast/9/49/1000/46533/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "奄美地方",
            name: "和泊町",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46533/"
        },
        hall: {
            lat: 27.392559,
            long: 128.655253
        }
    },
    知名町: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "奄美地方(名瀬)",
            subdivisions1: "奄美地方",
            subdivisions2: "名瀬",
            hourly: "https://tenki.jp/forecast/9/49/1000/46534/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "奄美地方",
            name: "知名町",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46534/"
        },
        hall: {
            lat: 27.333676,
            long: 128.573732
        }
    },
    与論町: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "奄美地方(名瀬)",
            subdivisions1: "奄美地方",
            subdivisions2: "名瀬",
            hourly: "https://tenki.jp/forecast/9/49/1000/46535/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "奄美地方",
            name: "与論町",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46535/"
        },
        hall: {
            lat: 27.044947,
            long: 128.421638
        }
    },
    鹿児島市: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "薩摩地方(鹿児島)",
            subdivisions1: "薩摩地方",
            subdivisions2: "鹿児島",
            hourly: "https://tenki.jp/forecast/9/49/8810/46201/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "薩摩地方",
            name: "鹿児島市",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46201/"
        },
        hall: {
            lat: 31.596789,
            long: 130.557339
        }
    },
    枕崎市: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "薩摩地方(鹿児島)",
            subdivisions1: "薩摩地方",
            subdivisions2: "鹿児島",
            hourly: "https://tenki.jp/forecast/9/49/8810/46204/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "薩摩地方",
            name: "枕崎市",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46204/"
        },
        hall: {
            lat: 31.272922,
            long: 130.296991
        }
    },
    阿久根市: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "薩摩地方(鹿児島)",
            subdivisions1: "薩摩地方",
            subdivisions2: "鹿児島",
            hourly: "https://tenki.jp/forecast/9/49/8810/46206/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "薩摩地方",
            name: "阿久根市",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46206/"
        },
        hall: {
            lat: 32.014364,
            long: 130.192622
        }
    },
    出水市: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "薩摩地方(鹿児島)",
            subdivisions1: "薩摩地方",
            subdivisions2: "鹿児島",
            hourly: "https://tenki.jp/forecast/9/49/8810/46208/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "薩摩地方",
            name: "出水市",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46208/"
        },
        hall: {
            lat: 32.090458,
            long: 130.352647
        }
    },
    指宿市: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "薩摩地方(鹿児島)",
            subdivisions1: "薩摩地方",
            subdivisions2: "鹿児島",
            hourly: "https://tenki.jp/forecast/9/49/8810/46210/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "薩摩地方",
            name: "指宿市",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46210/"
        },
        hall: {
            lat: 31.252805,
            long: 130.633118
        }
    },
    薩摩川内市: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "薩摩地方(鹿児島)",
            subdivisions1: "薩摩地方",
            subdivisions2: "鹿児島",
            hourly: "https://tenki.jp/forecast/9/49/8810/46215/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "薩摩地方",
            name: "薩摩川内市",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46215/"
        },
        hall: {
            lat: 31.813486,
            long: 130.303950
        }
    },
    日置市: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "薩摩地方(鹿児島)",
            subdivisions1: "薩摩地方",
            subdivisions2: "鹿児島",
            hourly: "https://tenki.jp/forecast/9/49/8810/46216/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "薩摩地方",
            name: "日置市",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46216/"
        },
        hall: {
            lat: 31.633709,
            long: 130.402436
        }
    },
    霧島市: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "薩摩地方(鹿児島)",
            subdivisions1: "薩摩地方",
            subdivisions2: "鹿児島",
            hourly: "https://tenki.jp/forecast/9/49/8810/46218/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "薩摩地方",
            name: "霧島市",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46218/"
        },
        hall: {
            lat: 31.741015,
            long: 130.763136
        }
    },
    いちき串木野市: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "薩摩地方(鹿児島)",
            subdivisions1: "薩摩地方",
            subdivisions2: "鹿児島",
            hourly: "https://tenki.jp/forecast/9/49/8810/46219/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "薩摩地方",
            name: "いちき串木野市",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46219/"
        },
        hall: {
            lat: 31.714542,
            long: 130.271934
        }
    },
    南さつま市: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "薩摩地方(鹿児島)",
            subdivisions1: "薩摩地方",
            subdivisions2: "鹿児島",
            hourly: "https://tenki.jp/forecast/9/49/8810/46220/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "薩摩地方",
            name: "南さつま市",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46220/"
        },
        hall: {
            lat: 31.416570,
            long: 130.323494
        }
    },
    南九州市: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "薩摩地方(鹿児島)",
            subdivisions1: "薩摩地方",
            subdivisions2: "鹿児島",
            hourly: "https://tenki.jp/forecast/9/49/8810/46223/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "薩摩地方",
            name: "南九州市",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46223/"
        },
        hall: {
            lat: 31.378251,
            long: 130.441623
        }
    },
    伊佐市: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "薩摩地方(鹿児島)",
            subdivisions1: "薩摩地方",
            subdivisions2: "鹿児島",
            hourly: "https://tenki.jp/forecast/9/49/8810/46224/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "薩摩地方",
            name: "伊佐市",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46224/"
        },
        hall: {
            lat: 32.057152,
            long: 130.612934
        }
    },
    姶良市: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "薩摩地方(鹿児島)",
            subdivisions1: "薩摩地方",
            subdivisions2: "鹿児島",
            hourly: "https://tenki.jp/forecast/9/49/8810/46225/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "薩摩地方",
            name: "姶良市",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46225/"
        },
        hall: {
            lat: 31.728213,
            long: 130.627758
        }
    },
    さつま町: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "薩摩地方(鹿児島)",
            subdivisions1: "薩摩地方",
            subdivisions2: "鹿児島",
            hourly: "https://tenki.jp/forecast/9/49/8810/46392/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "薩摩地方",
            name: "さつま町",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46392/"
        },
        hall: {
            lat: 31.906331,
            long: 130.455340
        }
    },
    長島町: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "薩摩地方(鹿児島)",
            subdivisions1: "薩摩地方",
            subdivisions2: "鹿児島",
            hourly: "https://tenki.jp/forecast/9/49/8810/46404/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "薩摩地方",
            name: "長島町",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46404/"
        },
        hall: {
            lat: 32.199320,
            long: 130.176919
        }
    },
    湧水町: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "薩摩地方(鹿児島)",
            subdivisions1: "薩摩地方",
            subdivisions2: "鹿児島",
            hourly: "https://tenki.jp/forecast/9/49/8810/46452/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "薩摩地方",
            name: "湧水町",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46452/"
        },
        hall: {
            lat: 31.951654,
            long: 130.721025
        }
    },
    鹿屋市: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "大隅地方(鹿屋)",
            subdivisions1: "大隅地方",
            subdivisions2: "鹿屋",
            hourly: "https://tenki.jp/forecast/9/49/8820/46203/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "大隅地方",
            name: "鹿屋市",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46203/"
        },
        hall: {
            lat: 31.378268,
            long: 130.852223
        }
    },
    垂水市: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "大隅地方(鹿屋)",
            subdivisions1: "大隅地方",
            subdivisions2: "鹿屋",
            hourly: "https://tenki.jp/forecast/9/49/8820/46214/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "大隅地方",
            name: "垂水市",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46214/"
        },
        hall: {
            lat: 31.492758,
            long: 130.700930
        }
    },
    曽於市: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "大隅地方(鹿屋)",
            subdivisions1: "大隅地方",
            subdivisions2: "鹿屋",
            hourly: "https://tenki.jp/forecast/9/49/8820/46217/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "大隅地方",
            name: "曽於市",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46217/"
        },
        hall: {
            lat: 31.653622,
            long: 131.019255
        }
    },
    志布志市: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "大隅地方(鹿屋)",
            subdivisions1: "大隅地方",
            subdivisions2: "鹿屋",
            hourly: "https://tenki.jp/forecast/9/49/8820/46221/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "大隅地方",
            name: "志布志市",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46221/"
        },
        hall: {
            lat: 31.477513,
            long: 131.099826
        }
    },
    大崎町: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "大隅地方(鹿屋)",
            subdivisions1: "大隅地方",
            subdivisions2: "鹿屋",
            hourly: "https://tenki.jp/forecast/9/49/8820/46468/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "大隅地方",
            name: "大崎町",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46468/"
        },
        hall: {
            lat: 31.429102,
            long: 131.005592
        }
    },
    東串良町: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "大隅地方(鹿屋)",
            subdivisions1: "大隅地方",
            subdivisions2: "鹿屋",
            hourly: "https://tenki.jp/forecast/9/49/8820/46482/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "大隅地方",
            name: "東串良町",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46482/"
        },
        hall: {
            lat: 31.385790,
            long: 130.973339
        }
    },
    錦江町: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "大隅地方(鹿屋)",
            subdivisions1: "大隅地方",
            subdivisions2: "鹿屋",
            hourly: "https://tenki.jp/forecast/9/49/8820/46490/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "大隅地方",
            name: "錦江町",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46490/"
        },
        hall: {
            lat: 31.243572,
            long: 130.787485
        }
    },
    南大隅町: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "大隅地方(鹿屋)",
            subdivisions1: "大隅地方",
            subdivisions2: "鹿屋",
            hourly: "https://tenki.jp/forecast/9/49/8820/46491/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "大隅地方",
            name: "南大隅町",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46491/"
        },
        hall: {
            lat: 31.217486,
            long: 130.768442
        }
    },
    肝付町: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "大隅地方(鹿屋)",
            subdivisions1: "大隅地方",
            subdivisions2: "鹿屋",
            hourly: "https://tenki.jp/forecast/9/49/8820/46492/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "大隅地方",
            name: "肝付町",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46492/"
        },
        hall: {
            lat: 31.344362,
            long: 130.945223
        }
    },
    西之表市: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "種子島・屋久島地方(種子島)",
            subdivisions1: "種子島・屋久島地方",
            subdivisions2: "種子島",
            hourly: "https://tenki.jp/forecast/9/49/8830/46213/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "種子島・屋久島地方",
            name: "西之表市",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46213/"
        },
        hall: {
            lat: 30.732453,
            long: 130.997035
        }
    },
    三島村: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "種子島・屋久島地方(種子島)",
            subdivisions1: "種子島・屋久島地方",
            subdivisions2: "種子島",
            hourly: "https://tenki.jp/forecast/9/49/8830/46303/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "種子島・屋久島地方",
            name: "三島村",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46303/"
        },
        hall: {
            lat: 31.594533,
            long: 130.560735
        }
    },
    中種子町: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "種子島・屋久島地方(種子島)",
            subdivisions1: "種子島・屋久島地方",
            subdivisions2: "種子島",
            hourly: "https://tenki.jp/forecast/9/49/8830/46501/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "種子島・屋久島地方",
            name: "中種子町",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46501/"
        },
        hall: {
            lat: 30.532821,
            long: 130.958847
        }
    },
    南種子町: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "種子島・屋久島地方(種子島)",
            subdivisions1: "種子島・屋久島地方",
            subdivisions2: "種子島",
            hourly: "https://tenki.jp/forecast/9/49/8830/46502/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "種子島・屋久島地方",
            name: "南種子町",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46502/"
        },
        hall: {
            lat: 30.413905,
            long: 130.900937
        }
    },
    屋久島町: {
        tj: {
            prefecture: "鹿児島県",
            subdivisions: "種子島・屋久島地方(種子島)",
            subdivisions1: "種子島・屋久島地方",
            subdivisions2: "種子島",
            hourly: "https://tenki.jp/forecast/9/49/8830/46505/1hour.html"
        },
        wn: {
            prefecture: "鹿児島",
            subdivisions: "種子島・屋久島地方",
            name: "屋久島町",
            hourly: "https://weathernews.jp/onebox/tenki/kagoshima/46505/"
        },
        hall: {
            lat: 30.389893,
            long: 130.651119
        }
    }
};

exports.URL_CITIES = URL_CITIES;
