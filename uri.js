// Copyright (c) 2024 YA-androidapp(https://github.com/yzkn) All rights reserved.

const URL_CITIES = {
    // : {
    //     tj: {
    //         hourly: "1hour.html",
    //     },
    //     wn: {
    //         hourly: "",
    //     },
    //     prefecture: "",
    //     cityLat: 35.000,
    //     cityLong: 139.000,
    // },
    秩父: {
        tj: {
            hourly: "https://tenki.jp/forecast/3/14/4330/11207/1hour.html"
        },
        wn: {
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11207/"
        },
        prefecture: "埼玉県",
        cityLat: 35.991712261602,
        cityLong: 139.08556240898
    },
    川越: {
        tj: {
            hourly: "https://tenki.jp/forecast/3/14/4310/11201/1hour.html"
        },
        wn: {
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11201/"
        },
        prefecture: "埼玉県",
        cityLat: 35.925126514189,
        cityLong: 139.48581948167
    },
    所沢: {
        tj: {
            hourly: "https://tenki.jp/forecast/3/14/4310/11208/1hour.html"
        },
        wn: {
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11208/"
        },
        prefecture: "埼玉県",
        cityLat: 35.799620524417,
        cityLong: 139.4686886585
    },
    さいたま: {
        tj: {
            hourly: "https://tenki.jp/forecast/3/14/4310/11100/1hour.html"
        },
        wn: {
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11105/"
        },
        prefecture: "埼玉県",
        cityLat: 35.86177106399,
        cityLong: 139.64556791339
    },
    川口: {
        tj: {
            hourly: "https://tenki.jp/forecast/3/14/4310/11203/1hour.html"
        },
        wn: {
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11203/"
        },
        prefecture: "埼玉県",
        cityLat: 35.80672004143,
        cityLong: 139.72339432121
    },
    越谷: {
        tj: {
            hourly: "https://tenki.jp/forecast/3/14/4310/11222/1hour.html"
        },
        wn: {
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11222/"
        },
        prefecture: "埼玉県",
        cityLat: 35.890705217039,
        cityLong: 139.79101021077
    },
    春日部: {
        tj: {
            hourly: "https://tenki.jp/forecast/3/14/4310/11214/1hour.html"
        },
        wn: {
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11214/"
        },
        prefecture: "埼玉県",
        cityLat: 35.974048131451,
        cityLong: 139.75488970907
    },
    久喜: {
        tj: {
            hourly: "https://tenki.jp/forecast/3/14/4320/11232/1hour.html"
        },
        wn: {
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11232/"
        },
        prefecture: "埼玉県",
        cityLat: 35.06201519938,
        cityLong: 139.66685809423
    },
    上尾: {
        tj: {
            hourly: "https://tenki.jp/forecast/3/14/4310/11219/1hour.html"
        },
        wn: {
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11219/"
        },
        prefecture: "埼玉県",
        cityLat: 35.977427799664,
        cityLong: 139.59319214363
    },
    熊谷: {
        tj: {
            hourly: "https://tenki.jp/forecast/3/14/4320/11202/1hour.html"
        },
        wn: {
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11202/"
        },
        prefecture: "埼玉県",
        cityLat: 35.147380318187,
        cityLong: 139.38864451976
    },
    本庄: {
        tj: {
            hourly: "https://tenki.jp/forecast/3/14/4320/11211/1hour.html"
        },
        wn: {
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11211/"
        },
        prefecture: "埼玉県",
        cityLat: 35.243342613061,
        cityLong: 139.19070473666
    },
    東松山: {
        tj: {
            hourly: "https://tenki.jp/forecast/3/14/4320/11212/1hour.html"
        },
        wn: {
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11212/"
        },
        prefecture: "埼玉県",
        cityLat: 35.042183615981,
        cityLong: 139.40000247418
    },
    飯能: {
        tj: {
            hourly: "https://tenki.jp/forecast/3/14/4310/11209/1hour.html"
        },
        wn: {
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11209/"
        },
        prefecture: "埼玉県",
        cityLat: 35.855672857337,
        cityLong: 139.32778516252
    },
    坂戸: {
        tj: {
            hourly: "https://tenki.jp/forecast/3/14/4310/11239/1hour.html"
        },
        wn: {
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11239/"
        },
        prefecture: "埼玉県",
        cityLat: 35.957266643831,
        cityLong: 139.40302013309
    },
    寄居: {
        tj: {
            hourly: "https://tenki.jp/forecast/3/14/4320/11408/1hour.html"
        },
        wn: {
            hourly: "https://weathernews.jp/onebox/tenki/saitama/11408/"
        },
        prefecture: "埼玉県",
        cityLat: 35.118393239164,
        cityLong: 139.1930763508
    },
    千代田: {
        tj: {
            hourly: "https://tenki.jp/forecast/3/16/4410/13101/1hour.html"
        },
        wn: {
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13101/"
        },
        prefecture: "東京都",
        cityLat: 35.694012701131,
        cityLong: 139.75363118181
    },
    台東: {
        tj: {
            hourly: "https://tenki.jp/forecast/3/16/4410/13106/1hour.html"
        },
        wn: {
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13106/"
        },
        prefecture: "東京都",
        cityLat: 35.712657010745,
        cityLong: 139.780009394
    },
    新宿: {
        tj: {
            hourly: "https://tenki.jp/forecast/3/16/4410/13104/1hour.html"
        },
        wn: {
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13104/"
        },
        prefecture: "東京都",
        cityLat: 35.693798120957,
        cityLong: 139.70345354833
    },
    練馬: {
        tj: {
            hourly: "https://tenki.jp/forecast/3/16/4410/13120/1hour.html"
        },
        wn: {
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13120/"
        },
        prefecture: "東京都",
        cityLat: 35.735700598186,
        cityLong: 139.65162027432
    },
    三鷹: {
        tj: {
            hourly: "https://tenki.jp/forecast/3/16/4410/13204/1hour.html"
        },
        wn: {
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13204/"
        },
        prefecture: "東京都",
        cityLat: 35.683231832684,
        cityLong: 139.5598734047
    },
    立川: {
        tj: {
            hourly: "https://tenki.jp/forecast/3/16/4410/13202/1hour.html"
        },
        wn: {
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13202/"
        },
        prefecture: "東京都",
        cityLat: 35.713970787371,
        cityLong: 139.40779581042
    },
    青梅: {
        tj: {
            hourly: "https://tenki.jp/forecast/3/16/4410/13205/1hour.html"
        },
        wn: {
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13205/"
        },
        prefecture: "東京都",
        cityLat: 35.787835876939,
        cityLong: 139.27580602278
    },
    八王子: {
        tj: {
            hourly: "https://tenki.jp/forecast/3/16/4410/13201/1hour.html"
        },
        wn: {
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13201/"
        },
        prefecture: "東京都",
        cityLat: 35.666620597676,
        cityLong: 139.31622854653
    },
    町田: {
        tj: {
            hourly: "https://tenki.jp/forecast/3/16/4410/13209/1hour.html"
        },
        wn: {
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13209/"
        },
        prefecture: "東京都",
        cityLat: 35.546643044099,
        cityLong: 139.43865739694
    },
    世田谷: {
        tj: {
            hourly: "https://tenki.jp/forecast/3/16/4410/13112/1hour.html"
        },
        wn: {
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13112/"
        },
        prefecture: "東京都",
        cityLat: 35.646564043864,
        cityLong: 139.65326150434
    },
    品川: {
        tj: {
            hourly: "https://tenki.jp/forecast/3/16/4410/13109/1hour.html"
        },
        wn: {
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13109/"
        },
        prefecture: "東京都",
        cityLat: 35.609181216094,
        cityLong: 139.73018051239
    },
    大島: {
        tj: {
            hourly: "https://tenki.jp/forecast/3/16/4420/13361/1hour.html"
        },
        wn: {
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13361/"
        },
        prefecture: "東京都",
        cityLat: 34.750075905077,
        cityLong: 139.35558120094
    },
    八丈: {
        tj: {
            hourly: "https://tenki.jp/forecast/3/16/4430/13401/1hour.html"
        },
        wn: {
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13401/"
        },
        prefecture: "東京都",
        cityLat: 33.11268947233,
        cityLong: 139.78908152764
    },
    小笠原: {
        tj: {
            hourly: "https://tenki.jp/forecast/3/16/4440/13421/1hour.html"
        },
        wn: {
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13421/"
        },
        prefecture: "東京都",
        cityLat: 27.094419105914,
        cityLong: 142.19177134034
    },
    奥多摩: {
        tj: {
            hourly: "https://tenki.jp/forecast/3/16/4410/13308/1hour.html"
        },
        wn: {
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13308/"
        },
        prefecture: "東京都",
        cityLat: 35.809511541017,
        cityLong: 139.09622794214
    },
    港: {
        tj: {
            hourly: "https://tenki.jp/forecast/3/16/4410/13103/1hour.html"
        },
        wn: {
            hourly: "https://weathernews.jp/onebox/tenki/tokyo/13103/"
        },
        prefecture: "東京都",
        cityLat: 35.658044819597,
        cityLong: 139.75154738132
    },
    // AAA: {
    //     tj: {
    //         hourly: "1hour.html"
    //     },
    //     wn: {
    //         hourly: ""
    //     },
    //     prefecture: "神奈川県",
    //     cityLat: 35.000,
    //     cityLong: 139.000
    // },
};

exports.URL_CITIES = URL_CITIES;
