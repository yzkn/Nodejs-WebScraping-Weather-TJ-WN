// Copyright (c) 2024 YA-androidapp(https://github.com/yzkn) All rights reserved.

const wn_prefectures = [
    {
        url: "https://weathernews.jp/onebox/tenki/hokkaido/",
        area: "北海道",
        prefectures: [
            {
                url: "https://weathernews.jp/onebox/tenki/douou/",
                name: "道央"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/dounan/",
                name: "道南"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/douhoku/",
                name: "道北"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/doutou/",
                name: "道東"
            },
        ]
    },
    {
        url: "https://weathernews.jp/onebox/tenki/tohoku/",
        area: "東北",
        prefectures: [
            {
                url: "https://weathernews.jp/onebox/tenki/aomori/",
                name: "青森"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/iwate/",
                name: "岩手"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/akita/",
                name: "秋田"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/miyagi/",
                name: "宮城"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/yamagata/",
                name: "山形"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/fukushima/",
                name: "福島"
            },
        ]
    },
    {
        url: "https://weathernews.jp/onebox/tenki/kanto/",
        area: "関東",
        prefectures: [
            {
                url: "https://weathernews.jp/onebox/tenki/tokyo/",
                name: "東京"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/kanagawa/",
                name: "神奈川"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/saitama/",
                name: "埼玉"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/chiba/",
                name: "千葉"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/ibaraki/",
                name: "茨城"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/tochigi/",
                name: "栃木"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/gunma/",
                name: "群馬"
            },
        ]
    },
    {
        url: "https://weathernews.jp/onebox/tenki/chubu/",
        area: "中部",
        prefectures: [
            {
                url: "https://weathernews.jp/onebox/tenki/shizuoka/",
                name: "静岡"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/aichi/",
                name: "愛知"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/gifu/",
                name: "岐阜"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/yamanashi/",
                name: "山梨"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/nagano/",
                name: "長野"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/niigata/",
                name: "新潟"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/toyama/",
                name: "富山"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/ishikawa/",
                name: "石川"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/fukui/",
                name: "福井"
            },
        ]
    },
    {
        url: "https://weathernews.jp/onebox/tenki/kinki/",
        area: "近畿",
        prefectures: [
            {
                url: "https://weathernews.jp/onebox/tenki/osaka/",
                name: "大阪"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/hyogo/",
                name: "兵庫"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/kyoto/",
                name: "京都"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/shiga/",
                name: "滋賀"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/nara/",
                name: "奈良"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/wakayama/",
                name: "和歌山"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/mie/",
                name: "三重"
            },
        ]
    },
    {
        url: "https://weathernews.jp/onebox/tenki/chugoku/",
        area: "中国",
        prefectures: [
            {
                url: "https://weathernews.jp/onebox/tenki/hiroshima/",
                name: "広島"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/okayama/",
                name: "岡山"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/yamaguchi/",
                name: "山口"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/shimane/",
                name: "島根"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/tottori/",
                name: "鳥取"
            },
        ]
    },
    {
        url: "https://weathernews.jp/onebox/tenki/shikoku/",
        area: "四国",
        prefectures: [
            {
                url: "https://weathernews.jp/onebox/tenki/kagawa/",
                name: "香川"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/tokushima/",
                name: "徳島"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/ehime/",
                name: "愛媛"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/kouchi/",
                name: "高知"
            },
        ]
    },
    {
        url: "https://weathernews.jp/onebox/tenki/kyushu/",
        area: "九州",
        prefectures: [
            {
                url: "https://weathernews.jp/onebox/tenki/fukuoka/",
                name: "福岡"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/saga/",
                name: "佐賀"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/nagasaki/",
                name: "長崎"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/oita/",
                name: "大分"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/kumamoto/",
                name: "熊本"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/miyazaki/",
                name: "宮崎"
            },
            {
                url: "https://weathernews.jp/onebox/tenki/kagoshima/",
                name: "鹿児島"
            },
        ]
    },
    {
        url: "https://weathernews.jp/onebox/tenki/okinawa/",
        area: "沖縄"
    },
];