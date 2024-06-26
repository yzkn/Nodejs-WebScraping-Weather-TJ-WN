// Copyright (c) 2024 YA-androidapp(https://github.com/yzkn) All rights reserved.


const URL_CITIES = {
    "秩父": {
        "tj": {
            "hourly": "https://tenki.jp/forecast/3/14/4330/11207/1hour.html"
        },
        "wn": {
            "hourly": "https://weathernews.jp/onebox/tenki/saitama/11207/"
        },
        "prefecture": "埼玉県",
        "cityLat": 35.991712261602,
        "cityLong": 139.08556240898
    },
    "川越": {
        "tj": {
            "hourly": "https://tenki.jp/forecast/3/14/4310/11201/1hour.html"
        },
        "wn": {
            "hourly": "https://weathernews.jp/onebox/tenki/saitama/11201/"
        },
        "prefecture": "埼玉県",
        "cityLat": 35.925126514189,
        "cityLong": 139.48581948167
    },
    "所沢": {
        "tj": {
            "hourly": "https://tenki.jp/forecast/3/14/4310/11208/1hour.html"
        },
        "wn": {
            "hourly": "https://weathernews.jp/onebox/tenki/saitama/11208/"
        },
        "prefecture": "埼玉県",
        "cityLat": 35.799620524417,
        "cityLong": 139.4686886585
    },
    "さいたま": {
        "tj": {
            "hourly": "https://tenki.jp/forecast/3/14/4310/11100/1hour.html"
        },
        "wn": {
            "hourly": "https://weathernews.jp/onebox/tenki/saitama/11105/"
        },
        "prefecture": "埼玉県",
        "cityLat": 35.86177106399,
        "cityLong": 139.64556791339
    },
    "川口": {
        "tj": {
            "hourly": "https://tenki.jp/forecast/3/14/4310/11203/1hour.html"
        },
        "wn": {
            "hourly": "https://weathernews.jp/onebox/tenki/saitama/11203/"
        },
        "prefecture": "埼玉県",
        "cityLat": 35.80672004143,
        "cityLong": 139.72339432121
    },
    "越谷": {
        "tj": {
            "hourly": "https://tenki.jp/forecast/3/14/4310/11222/1hour.html"
        },
        "wn": {
            "hourly": "https://weathernews.jp/onebox/tenki/saitama/11222/"
        },
        "prefecture": "埼玉県",
        "cityLat": 35.890705217039,
        "cityLong": 139.79101021077
    },
    "春日部": {
        "tj": {
            "hourly": "https://tenki.jp/forecast/3/14/4310/11214/1hour.html"
        },
        "wn": {
            "hourly": "https://weathernews.jp/onebox/tenki/saitama/11214/"
        },
        "prefecture": "埼玉県",
        "cityLat": 35.974048131451,
        "cityLong": 139.75488970907
    },
    "久喜": {
        "tj": {
            "hourly": "https://tenki.jp/forecast/3/14/4320/11232/1hour.html"
        },
        "wn": {
            "hourly": "https://weathernews.jp/onebox/tenki/saitama/11232/"
        },
        "prefecture": "埼玉県",
        "cityLat": 35.06201519938,
        "cityLong": 139.66685809423
    },
    "上尾": {
        "tj": {
            "hourly": "https://tenki.jp/forecast/3/14/4310/11219/1hour.html"
        },
        "wn": {
            "hourly": "https://weathernews.jp/onebox/tenki/saitama/11219/"
        },
        "prefecture": "埼玉県",
        "cityLat": 35.977427799664,
        "cityLong": 139.59319214363
    },
    "熊谷": {
        "tj": {
            "hourly": "https://tenki.jp/forecast/3/14/4320/11202/1hour.html"
        },
        "wn": {
            "hourly": "https://weathernews.jp/onebox/tenki/saitama/11202/"
        },
        "prefecture": "埼玉県",
        "cityLat": 35.147380318187,
        "cityLong": 139.38864451976
    },
    "本庄": {
        "tj": {
            "hourly": "https://tenki.jp/forecast/3/14/4320/11211/1hour.html"
        },
        "wn": {
            "hourly": "https://weathernews.jp/onebox/tenki/saitama/11211/"
        },
        "prefecture": "埼玉県",
        "cityLat": 35.243342613061,
        "cityLong": 139.19070473666
    },
    "東松山": {
        "tj": {
            "hourly": "https://tenki.jp/forecast/3/14/4320/11212/1hour.html"
        },
        "wn": {
            "hourly": "https://weathernews.jp/onebox/tenki/saitama/11212/"
        },
        "prefecture": "埼玉県",
        "cityLat": 35.042183615981,
        "cityLong": 139.40000247418
    },
    "飯能": {
        "tj": {
            "hourly": "https://tenki.jp/forecast/3/14/4310/11209/1hour.html"
        },
        "wn": {
            "hourly": "https://weathernews.jp/onebox/tenki/saitama/11209/"
        },
        "prefecture": "埼玉県",
        "cityLat": 35.855672857337,
        "cityLong": 139.32778516252
    },
    "坂戸": {
        "tj": {
            "hourly": "https://tenki.jp/forecast/3/14/4310/11239/1hour.html"
        },
        "wn": {
            "hourly": "https://weathernews.jp/onebox/tenki/saitama/11239/"
        },
        "prefecture": "埼玉県",
        "cityLat": 35.957266643831,
        "cityLong": 139.40302013309
    },
    "寄居": {
        "tj": {
            "hourly": "https://tenki.jp/forecast/3/14/4320/11408/1hour.html"
        },
        "wn": {
            "hourly": "https://weathernews.jp/onebox/tenki/saitama/11408/"
        },
        "prefecture": "埼玉県",
        "cityLat": 35.118393239164,
        "cityLong": 139.1930763508
    },
    // "": {
    //     "tj": {
    //         "hourly": "1hour.html"
    //     },
    //     "wn": {
    //         "hourly": ""
    //     },
    //     "prefecture": "",
    //     "cityLat": 35.000,
    //     "cityLong": 139.000
    // }
};


exports.URL_CITIES = URL_CITIES;
