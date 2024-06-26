// Copyright (c) 2024 YA-androidapp(https://github.com/yzkn) All rights reserved.

const wn_cities = [
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/aichi/week/",
        prefName: "愛知",
        subdivisions: [
            {
                name: "西部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23101/",
                        name: "名古屋市千種区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23102/",
                        name: "名古屋市東区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23103/",
                        name: "名古屋市北区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23104/",
                        name: "名古屋市西区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23105/",
                        name: "名古屋市中村区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23106/",
                        name: "名古屋市中区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23107/",
                        name: "名古屋市昭和区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23108/",
                        name: "名古屋市瑞穂区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23109/",
                        name: "名古屋市熱田区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23110/",
                        name: "名古屋市中川区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23111/",
                        name: "名古屋市港区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23112/",
                        name: "名古屋市南区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23113/",
                        name: "名古屋市守山区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23114/",
                        name: "名古屋市緑区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23115/",
                        name: "名古屋市名東区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23116/",
                        name: "名古屋市天白区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23202/",
                        name: "岡崎市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23203/",
                        name: "一宮市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23204/",
                        name: "瀬戸市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23205/",
                        name: "半田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23206/",
                        name: "春日井市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23208/",
                        name: "津島市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23209/",
                        name: "碧南市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23210/",
                        name: "刈谷市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23212/",
                        name: "安城市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23213/",
                        name: "西尾市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23215/",
                        name: "犬山市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23216/",
                        name: "常滑市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23217/",
                        name: "江南市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23219/",
                        name: "小牧市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23220/",
                        name: "稲沢市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23222/",
                        name: "東海市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23223/",
                        name: "大府市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23224/",
                        name: "知多市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23225/",
                        name: "知立市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23226/",
                        name: "尾張旭市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23227/",
                        name: "高浜市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23228/",
                        name: "岩倉市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23229/",
                        name: "豊明市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23230/",
                        name: "日進市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23232/",
                        name: "愛西市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23233/",
                        name: "清須市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23234/",
                        name: "北名古屋市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23235/",
                        name: "弥富市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23236/",
                        name: "みよし市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23237/",
                        name: "あま市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23238/",
                        name: "長久手市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23302/",
                        name: "東郷町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23342/",
                        name: "豊山町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23361/",
                        name: "大口町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23362/",
                        name: "扶桑町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23424/",
                        name: "大治町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23425/",
                        name: "蟹江町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23427/",
                        name: "飛島村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23441/",
                        name: "阿久比町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23442/",
                        name: "東浦町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23445/",
                        name: "南知多町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23446/",
                        name: "美浜町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23447/",
                        name: "武豊町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23501/",
                        name: "幸田町"
                    },
                ]
            },
            {
                name: "東部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23201/",
                        name: "豊橋市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23207/",
                        name: "豊川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23211/",
                        name: "豊田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23214/",
                        name: "蒲郡市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23221/",
                        name: "新城市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23231/",
                        name: "田原市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23561/",
                        name: "設楽町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23562/",
                        name: "東栄町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aichi/23563/",
                        name: "豊根村"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/akita/week/",
        prefName: "秋田",
        subdivisions: [
            {
                name: "沿岸",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/akita/05201/",
                        name: "秋田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/akita/05202/",
                        name: "能代市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/akita/05206/",
                        name: "男鹿市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/akita/05210/",
                        name: "由利本荘市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/akita/05211/",
                        name: "潟上市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/akita/05214/",
                        name: "にかほ市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/akita/05346/",
                        name: "藤里町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/akita/05348/",
                        name: "三種町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/akita/05349/",
                        name: "八峰町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/akita/05361/",
                        name: "五城目町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/akita/05363/",
                        name: "八郎潟町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/akita/05366/",
                        name: "井川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/akita/05368/",
                        name: "大潟村"
                    },
                ]
            },
            {
                name: "内陸",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/akita/05203/",
                        name: "横手市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/akita/05204/",
                        name: "大館市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/akita/05207/",
                        name: "湯沢市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/akita/05209/",
                        name: "鹿角市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/akita/05212/",
                        name: "大仙市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/akita/05213/",
                        name: "北秋田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/akita/05215/",
                        name: "仙北市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/akita/05303/",
                        name: "小坂町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/akita/05327/",
                        name: "上小阿仁村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/akita/05434/",
                        name: "美郷町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/akita/05463/",
                        name: "羽後町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/akita/05464/",
                        name: "東成瀬村"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/aomori/week/",
        prefName: "青森",
        subdivisions: [
            {
                name: "津軽",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02201/",
                        name: "青森市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02202/",
                        name: "弘前市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02204/",
                        name: "黒石市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02205/",
                        name: "五所川原市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02209/",
                        name: "つがる市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02210/",
                        name: "平川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02301/",
                        name: "平内町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02303/",
                        name: "今別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02304/",
                        name: "蓬田村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02307/",
                        name: "外ヶ浜町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02321/",
                        name: "鰺ヶ沢町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02323/",
                        name: "深浦町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02343/",
                        name: "西目屋村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02361/",
                        name: "藤崎町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02362/",
                        name: "大鰐町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02367/",
                        name: "田舎館村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02381/",
                        name: "板柳町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02384/",
                        name: "鶴田町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02387/",
                        name: "中泊町"
                    },
                ]
            },
            {
                name: "下北",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02208/",
                        name: "むつ市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02423/",
                        name: "大間町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02424/",
                        name: "東通村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02425/",
                        name: "風間浦村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02426/",
                        name: "佐井村"
                    },
                ]
            },
            {
                name: "三八上北",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02203/",
                        name: "八戸市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02206/",
                        name: "十和田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02207/",
                        name: "三沢市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02401/",
                        name: "野辺地町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02402/",
                        name: "七戸町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02405/",
                        name: "六戸町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02406/",
                        name: "横浜町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02408/",
                        name: "東北町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02411/",
                        name: "六ヶ所村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02412/",
                        name: "おいらせ町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02441/",
                        name: "三戸町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02442/",
                        name: "五戸町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02443/",
                        name: "田子町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02445/",
                        name: "南部町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02446/",
                        name: "階上町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/aomori/02450/",
                        name: "新郷村"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/chiba/week/",
        prefName: "千葉",
        subdivisions: [
            {
                name: "北西部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12101/",
                        name: "千葉市中央区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12102/",
                        name: "千葉市花見川区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12103/",
                        name: "千葉市稲毛区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12104/",
                        name: "千葉市若葉区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12105/",
                        name: "千葉市緑区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12106/",
                        name: "千葉市美浜区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12203/",
                        name: "市川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12204/",
                        name: "船橋市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12207/",
                        name: "松戸市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12208/",
                        name: "野田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12211/",
                        name: "成田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12212/",
                        name: "佐倉市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12216/",
                        name: "習志野市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12217/",
                        name: "柏市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12219/",
                        name: "市原市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12220/",
                        name: "流山市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12221/",
                        name: "八千代市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12222/",
                        name: "我孫子市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12224/",
                        name: "鎌ケ谷市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12227/",
                        name: "浦安市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12228/",
                        name: "四街道市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12230/",
                        name: "八街市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12231/",
                        name: "印西市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12232/",
                        name: "白井市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12233/",
                        name: "富里市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12322/",
                        name: "酒々井町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12329/",
                        name: "栄町"
                    },
                ]
            },
            {
                name: "北東部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12202/",
                        name: "銚子市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12210/",
                        name: "茂原市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12213/",
                        name: "東金市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12215/",
                        name: "旭市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12235/",
                        name: "匝瑳市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12236/",
                        name: "香取市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12237/",
                        name: "山武市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12239/",
                        name: "大網白里市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12342/",
                        name: "神崎町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12347/",
                        name: "多古町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12349/",
                        name: "東庄町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12403/",
                        name: "九十九里町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12409/",
                        name: "芝山町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12410/",
                        name: "横芝光町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12421/",
                        name: "一宮町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12422/",
                        name: "睦沢町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12423/",
                        name: "長生村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12424/",
                        name: "白子町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12426/",
                        name: "長柄町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12427/",
                        name: "長南町"
                    },
                ]
            },
            {
                name: "南部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12205/",
                        name: "館山市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12206/",
                        name: "木更津市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12218/",
                        name: "勝浦市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12223/",
                        name: "鴨川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12225/",
                        name: "君津市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12226/",
                        name: "富津市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12229/",
                        name: "袖ケ浦市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12234/",
                        name: "南房総市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12238/",
                        name: "いすみ市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12441/",
                        name: "大多喜町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12443/",
                        name: "御宿町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/chiba/12463/",
                        name: "鋸南町"
                    },
                ]
            }
        ]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/douhoku/week/",
        prefName: "道北",
        subdivisions: [
            {
                name: "宗谷地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01214/",
                        name: "稚内市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01511/",
                        name: "猿払村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01512/",
                        name: "浜頓別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01513/",
                        name: "中頓別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01514/",
                        name: "枝幸町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01516/",
                        name: "豊富町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01517/",
                        name: "礼文町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01518/",
                        name: "利尻町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01519/",
                        name: "利尻富士町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01520/",
                        name: "幌延町"
                    },
                ]
            },
            {
                name: "上川地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01204/",
                        name: "旭川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01220/",
                        name: "士別市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01221/",
                        name: "名寄市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01229/",
                        name: "富良野市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01452/",
                        name: "鷹栖町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01453/",
                        name: "東神楽町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01454/",
                        name: "当麻町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01455/",
                        name: "比布町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01456/",
                        name: "愛別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01457/",
                        name: "上川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01458/",
                        name: "東川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01459/",
                        name: "美瑛町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01460/",
                        name: "上富良野町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01461/",
                        name: "中富良野町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01462/",
                        name: "南富良野町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01463/",
                        name: "占冠村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01464/",
                        name: "和寒町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01465/",
                        name: "剣淵町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01468/",
                        name: "下川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01469/",
                        name: "美深町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01470/",
                        name: "音威子府村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01471/",
                        name: "中川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01472/",
                        name: "幌加内町"
                    },
                ]
            },
            {
                name: "留萌地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01212/",
                        name: "留萌市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01481/",
                        name: "増毛町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01482/",
                        name: "小平町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01483/",
                        name: "苫前町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01484/",
                        name: "羽幌町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01485/",
                        name: "初山別村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01486/",
                        name: "遠別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01487/",
                        name: "天塩町"
                    },
                ]
            },
            {
                name: "網走地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01211/",
                        name: "網走市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01543/",
                        name: "美幌町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01544/",
                        name: "津別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01545/",
                        name: "斜里町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01546/",
                        name: "清里町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01547/",
                        name: "小清水町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01552/",
                        name: "佐呂間町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01564/",
                        name: "大空町"
                    },
                ]
            },
            {
                name: "北見地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01208/",
                        name: "北見市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01549/",
                        name: "訓子府町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01550/",
                        name: "置戸町"
                    },
                ]
            },
            {
                name: "紋別地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01219/",
                        name: "紋別市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01555/",
                        name: "遠軽町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01559/",
                        name: "湧別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01560/",
                        name: "滝上町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01561/",
                        name: "興部町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01562/",
                        name: "西興部村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01563/",
                        name: "雄武町"
                    },
                ]
            },
            {
                name: "根室地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01223/",
                        name: "根室市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01691/",
                        name: "別海町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01692/",
                        name: "中標津町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01693/",
                        name: "標津町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01694/",
                        name: "羅臼町"
                    },
                ]
            },
            {
                name: "釧路地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01206/",
                        name: "釧路市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01661/",
                        name: "釧路町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01662/",
                        name: "厚岸町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01663/",
                        name: "浜中町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01664/",
                        name: "標茶町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01665/",
                        name: "弟子屈町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01667/",
                        name: "鶴居村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01668/",
                        name: "白糠町"
                    },
                ]
            },
            {
                name: "十勝地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01207/",
                        name: "帯広市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01631/",
                        name: "音更町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01632/",
                        name: "士幌町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01633/",
                        name: "上士幌町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01634/",
                        name: "鹿追町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01635/",
                        name: "新得町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01636/",
                        name: "清水町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01637/",
                        name: "芽室町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01638/",
                        name: "中札内村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01639/",
                        name: "更別村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01641/",
                        name: "大樹町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01642/",
                        name: "広尾町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01643/",
                        name: "幕別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01644/",
                        name: "池田町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01645/",
                        name: "豊頃町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01646/",
                        name: "本別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01647/",
                        name: "足寄町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01648/",
                        name: "陸別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01649/",
                        name: "浦幌町"
                    },
                ]
            },
            {
                name: "胆振地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01205/",
                        name: "室蘭市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01213/",
                        name: "苫小牧市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01230/",
                        name: "登別市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01233/",
                        name: "伊達市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01571/",
                        name: "豊浦町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01575/",
                        name: "壮瞥町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01578/",
                        name: "白老町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01581/",
                        name: "厚真町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01584/",
                        name: "洞爺湖町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01585/",
                        name: "安平町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01586/",
                        name: "むかわ町"
                    },
                ]
            },
            {
                name: "日高地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01601/",
                        name: "日高町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01602/",
                        name: "平取町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01604/",
                        name: "新冠町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01607/",
                        name: "浦河町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01608/",
                        name: "様似町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01609/",
                        name: "えりも町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01610/",
                        name: "新ひだか町"
                    },
                ]
            },
            {
                name: "石狩地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01101/",
                        name: "札幌市中央区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01102/",
                        name: "札幌市北区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01103/",
                        name: "札幌市東区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01104/",
                        name: "札幌市白石区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01105/",
                        name: "札幌市豊平区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01106/",
                        name: "札幌市南区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01107/",
                        name: "札幌市西区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01108/",
                        name: "札幌市厚別区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01109/",
                        name: "札幌市手稲区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01110/",
                        name: "札幌市清田区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01217/",
                        name: "江別市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01224/",
                        name: "千歳市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01231/",
                        name: "恵庭市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01234/",
                        name: "北広島市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01235/",
                        name: "石狩市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01303/",
                        name: "当別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01304/",
                        name: "新篠津村"
                    },
                ]
            },
            {
                name: "空知地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01209/",
                        name: "夕張市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01210/",
                        name: "岩見沢市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01215/",
                        name: "美唄市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01216/",
                        name: "芦別市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01218/",
                        name: "赤平市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01222/",
                        name: "三笠市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01225/",
                        name: "滝川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01226/",
                        name: "砂川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01227/",
                        name: "歌志内市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01228/",
                        name: "深川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01423/",
                        name: "南幌町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01424/",
                        name: "奈井江町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01425/",
                        name: "上砂川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01427/",
                        name: "由仁町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01428/",
                        name: "長沼町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01429/",
                        name: "栗山町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01430/",
                        name: "月形町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01431/",
                        name: "浦臼町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01432/",
                        name: "新十津川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01433/",
                        name: "妹背牛町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01434/",
                        name: "秩父別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01436/",
                        name: "雨竜町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01437/",
                        name: "北竜町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01438/",
                        name: "沼田町"
                    },
                ]
            },
            {
                name: "後志地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01203/",
                        name: "小樽市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01391/",
                        name: "島牧村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01392/",
                        name: "寿都町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01393/",
                        name: "黒松内町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01394/",
                        name: "蘭越町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01395/",
                        name: "ニセコ町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01396/",
                        name: "真狩村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01397/",
                        name: "留寿都村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01398/",
                        name: "喜茂別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01399/",
                        name: "京極町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01400/",
                        name: "倶知安町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01401/",
                        name: "共和町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01402/",
                        name: "岩内町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01403/",
                        name: "泊村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01404/",
                        name: "神恵内村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01405/",
                        name: "積丹町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01406/",
                        name: "古平町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01407/",
                        name: "仁木町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01408/",
                        name: "余市町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01409/",
                        name: "赤井川村"
                    },
                ]
            },
            {
                name: "渡島地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01202/",
                        name: "函館市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01236/",
                        name: "北斗市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01331/",
                        name: "松前町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01332/",
                        name: "福島町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01333/",
                        name: "知内町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01334/",
                        name: "木古内町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01337/",
                        name: "七飯町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01343/",
                        name: "鹿部町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01345/",
                        name: "森町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01347/",
                        name: "長万部町"
                    },
                ]
            },
            {
                name: "檜山地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01346/",
                        name: "八雲町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01361/",
                        name: "江差町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01362/",
                        name: "上ノ国町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01363/",
                        name: "厚沢部町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01364/",
                        name: "乙部町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01367/",
                        name: "奥尻町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01370/",
                        name: "今金町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01371/",
                        name: "せたな町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/dounan/week/",
        prefName: "道南",
        subdivisions: [
            {
                name: "宗谷地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01214/",
                        name: "稚内市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01511/",
                        name: "猿払村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01512/",
                        name: "浜頓別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01513/",
                        name: "中頓別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01514/",
                        name: "枝幸町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01516/",
                        name: "豊富町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01517/",
                        name: "礼文町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01518/",
                        name: "利尻町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01519/",
                        name: "利尻富士町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01520/",
                        name: "幌延町"
                    },
                ]
            },
            {
                name: "上川地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01204/",
                        name: "旭川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01220/",
                        name: "士別市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01221/",
                        name: "名寄市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01229/",
                        name: "富良野市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01452/",
                        name: "鷹栖町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01453/",
                        name: "東神楽町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01454/",
                        name: "当麻町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01455/",
                        name: "比布町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01456/",
                        name: "愛別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01457/",
                        name: "上川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01458/",
                        name: "東川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01459/",
                        name: "美瑛町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01460/",
                        name: "上富良野町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01461/",
                        name: "中富良野町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01462/",
                        name: "南富良野町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01463/",
                        name: "占冠村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01464/",
                        name: "和寒町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01465/",
                        name: "剣淵町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01468/",
                        name: "下川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01469/",
                        name: "美深町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01470/",
                        name: "音威子府村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01471/",
                        name: "中川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01472/",
                        name: "幌加内町"
                    },
                ]
            },
            {
                name: "留萌地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01212/",
                        name: "留萌市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01481/",
                        name: "増毛町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01482/",
                        name: "小平町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01483/",
                        name: "苫前町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01484/",
                        name: "羽幌町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01485/",
                        name: "初山別村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01486/",
                        name: "遠別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01487/",
                        name: "天塩町"
                    },
                ]
            },
            {
                name: "網走地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01211/",
                        name: "網走市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01543/",
                        name: "美幌町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01544/",
                        name: "津別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01545/",
                        name: "斜里町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01546/",
                        name: "清里町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01547/",
                        name: "小清水町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01552/",
                        name: "佐呂間町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01564/",
                        name: "大空町"
                    },
                ]
            },
            {
                name: "北見地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01208/",
                        name: "北見市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01549/",
                        name: "訓子府町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01550/",
                        name: "置戸町"
                    },
                ]
            },
            {
                name: "紋別地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01219/",
                        name: "紋別市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01555/",
                        name: "遠軽町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01559/",
                        name: "湧別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01560/",
                        name: "滝上町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01561/",
                        name: "興部町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01562/",
                        name: "西興部村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01563/",
                        name: "雄武町"
                    },
                ]
            },
            {
                name: "根室地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01223/",
                        name: "根室市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01691/",
                        name: "別海町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01692/",
                        name: "中標津町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01693/",
                        name: "標津町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01694/",
                        name: "羅臼町"
                    },
                ]
            },
            {
                name: "釧路地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01206/",
                        name: "釧路市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01661/",
                        name: "釧路町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01662/",
                        name: "厚岸町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01663/",
                        name: "浜中町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01664/",
                        name: "標茶町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01665/",
                        name: "弟子屈町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01667/",
                        name: "鶴居村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01668/",
                        name: "白糠町"
                    },
                ]
            },
            {
                name: "十勝地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01207/",
                        name: "帯広市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01631/",
                        name: "音更町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01632/",
                        name: "士幌町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01633/",
                        name: "上士幌町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01634/",
                        name: "鹿追町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01635/",
                        name: "新得町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01636/",
                        name: "清水町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01637/",
                        name: "芽室町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01638/",
                        name: "中札内村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01639/",
                        name: "更別村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01641/",
                        name: "大樹町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01642/",
                        name: "広尾町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01643/",
                        name: "幕別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01644/",
                        name: "池田町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01645/",
                        name: "豊頃町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01646/",
                        name: "本別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01647/",
                        name: "足寄町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01648/",
                        name: "陸別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01649/",
                        name: "浦幌町"
                    },
                ]
            },
            {
                name: "胆振地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01205/",
                        name: "室蘭市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01213/",
                        name: "苫小牧市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01230/",
                        name: "登別市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01233/",
                        name: "伊達市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01571/",
                        name: "豊浦町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01575/",
                        name: "壮瞥町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01578/",
                        name: "白老町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01581/",
                        name: "厚真町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01584/",
                        name: "洞爺湖町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01585/",
                        name: "安平町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01586/",
                        name: "むかわ町"
                    },
                ]
            },
            {
                name: "日高地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01601/",
                        name: "日高町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01602/",
                        name: "平取町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01604/",
                        name: "新冠町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01607/",
                        name: "浦河町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01608/",
                        name: "様似町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01609/",
                        name: "えりも町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01610/",
                        name: "新ひだか町"
                    },
                ]
            },
            {
                name: "石狩地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01101/",
                        name: "札幌市中央区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01102/",
                        name: "札幌市北区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01103/",
                        name: "札幌市東区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01104/",
                        name: "札幌市白石区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01105/",
                        name: "札幌市豊平区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01106/",
                        name: "札幌市南区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01107/",
                        name: "札幌市西区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01108/",
                        name: "札幌市厚別区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01109/",
                        name: "札幌市手稲区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01110/",
                        name: "札幌市清田区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01217/",
                        name: "江別市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01224/",
                        name: "千歳市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01231/",
                        name: "恵庭市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01234/",
                        name: "北広島市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01235/",
                        name: "石狩市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01303/",
                        name: "当別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01304/",
                        name: "新篠津村"
                    },
                ]
            },
            {
                name: "空知地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01209/",
                        name: "夕張市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01210/",
                        name: "岩見沢市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01215/",
                        name: "美唄市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01216/",
                        name: "芦別市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01218/",
                        name: "赤平市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01222/",
                        name: "三笠市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01225/",
                        name: "滝川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01226/",
                        name: "砂川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01227/",
                        name: "歌志内市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01228/",
                        name: "深川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01423/",
                        name: "南幌町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01424/",
                        name: "奈井江町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01425/",
                        name: "上砂川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01427/",
                        name: "由仁町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01428/",
                        name: "長沼町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01429/",
                        name: "栗山町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01430/",
                        name: "月形町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01431/",
                        name: "浦臼町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01432/",
                        name: "新十津川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01433/",
                        name: "妹背牛町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01434/",
                        name: "秩父別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01436/",
                        name: "雨竜町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01437/",
                        name: "北竜町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01438/",
                        name: "沼田町"
                    },
                ]
            },
            {
                name: "後志地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01203/",
                        name: "小樽市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01391/",
                        name: "島牧村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01392/",
                        name: "寿都町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01393/",
                        name: "黒松内町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01394/",
                        name: "蘭越町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01395/",
                        name: "ニセコ町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01396/",
                        name: "真狩村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01397/",
                        name: "留寿都村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01398/",
                        name: "喜茂別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01399/",
                        name: "京極町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01400/",
                        name: "倶知安町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01401/",
                        name: "共和町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01402/",
                        name: "岩内町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01403/",
                        name: "泊村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01404/",
                        name: "神恵内村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01405/",
                        name: "積丹町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01406/",
                        name: "古平町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01407/",
                        name: "仁木町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01408/",
                        name: "余市町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01409/",
                        name: "赤井川村"
                    },
                ]
            },
            {
                name: "渡島地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01202/",
                        name: "函館市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01236/",
                        name: "北斗市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01331/",
                        name: "松前町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01332/",
                        name: "福島町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01333/",
                        name: "知内町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01334/",
                        name: "木古内町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01337/",
                        name: "七飯町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01343/",
                        name: "鹿部町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01345/",
                        name: "森町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01347/",
                        name: "長万部町"
                    },
                ]
            },
            {
                name: "檜山地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01346/",
                        name: "八雲町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01361/",
                        name: "江差町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01362/",
                        name: "上ノ国町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01363/",
                        name: "厚沢部町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01364/",
                        name: "乙部町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01367/",
                        name: "奥尻町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01370/",
                        name: "今金町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01371/",
                        name: "せたな町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/douou/week/",
        prefName: "道央",
        subdivisions: [
            {
                name: "宗谷地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01214/",
                        name: "稚内市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01511/",
                        name: "猿払村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01512/",
                        name: "浜頓別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01513/",
                        name: "中頓別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01514/",
                        name: "枝幸町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01516/",
                        name: "豊富町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01517/",
                        name: "礼文町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01518/",
                        name: "利尻町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01519/",
                        name: "利尻富士町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01520/",
                        name: "幌延町"
                    },
                ]
            },
            {
                name: "上川地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01204/",
                        name: "旭川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01220/",
                        name: "士別市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01221/",
                        name: "名寄市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01229/",
                        name: "富良野市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01452/",
                        name: "鷹栖町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01453/",
                        name: "東神楽町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01454/",
                        name: "当麻町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01455/",
                        name: "比布町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01456/",
                        name: "愛別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01457/",
                        name: "上川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01458/",
                        name: "東川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01459/",
                        name: "美瑛町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01460/",
                        name: "上富良野町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01461/",
                        name: "中富良野町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01462/",
                        name: "南富良野町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01463/",
                        name: "占冠村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01464/",
                        name: "和寒町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01465/",
                        name: "剣淵町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01468/",
                        name: "下川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01469/",
                        name: "美深町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01470/",
                        name: "音威子府村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01471/",
                        name: "中川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01472/",
                        name: "幌加内町"
                    },
                ]
            },
            {
                name: "留萌地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01212/",
                        name: "留萌市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01481/",
                        name: "増毛町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01482/",
                        name: "小平町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01483/",
                        name: "苫前町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01484/",
                        name: "羽幌町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01485/",
                        name: "初山別村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01486/",
                        name: "遠別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01487/",
                        name: "天塩町"
                    },
                ]
            },
            {
                name: "網走地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01211/",
                        name: "網走市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01543/",
                        name: "美幌町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01544/",
                        name: "津別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01545/",
                        name: "斜里町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01546/",
                        name: "清里町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01547/",
                        name: "小清水町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01552/",
                        name: "佐呂間町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01564/",
                        name: "大空町"
                    },
                ]
            },
            {
                name: "北見地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01208/",
                        name: "北見市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01549/",
                        name: "訓子府町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01550/",
                        name: "置戸町"
                    },
                ]
            },
            {
                name: "紋別地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01219/",
                        name: "紋別市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01555/",
                        name: "遠軽町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01559/",
                        name: "湧別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01560/",
                        name: "滝上町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01561/",
                        name: "興部町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01562/",
                        name: "西興部村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01563/",
                        name: "雄武町"
                    },
                ]
            },
            {
                name: "根室地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01223/",
                        name: "根室市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01691/",
                        name: "別海町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01692/",
                        name: "中標津町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01693/",
                        name: "標津町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01694/",
                        name: "羅臼町"
                    },
                ]
            },
            {
                name: "釧路地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01206/",
                        name: "釧路市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01661/",
                        name: "釧路町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01662/",
                        name: "厚岸町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01663/",
                        name: "浜中町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01664/",
                        name: "標茶町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01665/",
                        name: "弟子屈町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01667/",
                        name: "鶴居村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01668/",
                        name: "白糠町"
                    },
                ]
            },
            {
                name: "十勝地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01207/",
                        name: "帯広市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01631/",
                        name: "音更町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01632/",
                        name: "士幌町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01633/",
                        name: "上士幌町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01634/",
                        name: "鹿追町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01635/",
                        name: "新得町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01636/",
                        name: "清水町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01637/",
                        name: "芽室町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01638/",
                        name: "中札内村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01639/",
                        name: "更別村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01641/",
                        name: "大樹町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01642/",
                        name: "広尾町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01643/",
                        name: "幕別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01644/",
                        name: "池田町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01645/",
                        name: "豊頃町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01646/",
                        name: "本別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01647/",
                        name: "足寄町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01648/",
                        name: "陸別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01649/",
                        name: "浦幌町"
                    },
                ]
            },
            {
                name: "胆振地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01205/",
                        name: "室蘭市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01213/",
                        name: "苫小牧市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01230/",
                        name: "登別市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01233/",
                        name: "伊達市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01571/",
                        name: "豊浦町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01575/",
                        name: "壮瞥町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01578/",
                        name: "白老町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01581/",
                        name: "厚真町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01584/",
                        name: "洞爺湖町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01585/",
                        name: "安平町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01586/",
                        name: "むかわ町"
                    },
                ]
            },
            {
                name: "日高地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01601/",
                        name: "日高町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01602/",
                        name: "平取町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01604/",
                        name: "新冠町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01607/",
                        name: "浦河町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01608/",
                        name: "様似町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01609/",
                        name: "えりも町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01610/",
                        name: "新ひだか町"
                    },
                ]
            },
            {
                name: "石狩地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01101/",
                        name: "札幌市中央区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01102/",
                        name: "札幌市北区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01103/",
                        name: "札幌市東区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01104/",
                        name: "札幌市白石区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01105/",
                        name: "札幌市豊平区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01106/",
                        name: "札幌市南区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01107/",
                        name: "札幌市西区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01108/",
                        name: "札幌市厚別区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01109/",
                        name: "札幌市手稲区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01110/",
                        name: "札幌市清田区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01217/",
                        name: "江別市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01224/",
                        name: "千歳市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01231/",
                        name: "恵庭市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01234/",
                        name: "北広島市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01235/",
                        name: "石狩市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01303/",
                        name: "当別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01304/",
                        name: "新篠津村"
                    },
                ]
            },
            {
                name: "空知地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01209/",
                        name: "夕張市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01210/",
                        name: "岩見沢市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01215/",
                        name: "美唄市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01216/",
                        name: "芦別市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01218/",
                        name: "赤平市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01222/",
                        name: "三笠市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01225/",
                        name: "滝川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01226/",
                        name: "砂川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01227/",
                        name: "歌志内市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01228/",
                        name: "深川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01423/",
                        name: "南幌町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01424/",
                        name: "奈井江町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01425/",
                        name: "上砂川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01427/",
                        name: "由仁町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01428/",
                        name: "長沼町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01429/",
                        name: "栗山町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01430/",
                        name: "月形町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01431/",
                        name: "浦臼町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01432/",
                        name: "新十津川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01433/",
                        name: "妹背牛町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01434/",
                        name: "秩父別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01436/",
                        name: "雨竜町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01437/",
                        name: "北竜町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01438/",
                        name: "沼田町"
                    },
                ]
            },
            {
                name: "後志地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01203/",
                        name: "小樽市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01391/",
                        name: "島牧村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01392/",
                        name: "寿都町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01393/",
                        name: "黒松内町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01394/",
                        name: "蘭越町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01395/",
                        name: "ニセコ町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01396/",
                        name: "真狩村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01397/",
                        name: "留寿都村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01398/",
                        name: "喜茂別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01399/",
                        name: "京極町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01400/",
                        name: "倶知安町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01401/",
                        name: "共和町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01402/",
                        name: "岩内町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01403/",
                        name: "泊村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01404/",
                        name: "神恵内村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01405/",
                        name: "積丹町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01406/",
                        name: "古平町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01407/",
                        name: "仁木町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01408/",
                        name: "余市町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01409/",
                        name: "赤井川村"
                    },
                ]
            },
            {
                name: "渡島地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01202/",
                        name: "函館市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01236/",
                        name: "北斗市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01331/",
                        name: "松前町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01332/",
                        name: "福島町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01333/",
                        name: "知内町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01334/",
                        name: "木古内町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01337/",
                        name: "七飯町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01343/",
                        name: "鹿部町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01345/",
                        name: "森町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01347/",
                        name: "長万部町"
                    },
                ]
            },
            {
                name: "檜山地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01346/",
                        name: "八雲町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01361/",
                        name: "江差町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01362/",
                        name: "上ノ国町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01363/",
                        name: "厚沢部町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01364/",
                        name: "乙部町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01367/",
                        name: "奥尻町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01370/",
                        name: "今金町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01371/",
                        name: "せたな町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/doutou/week/",
        prefName: "道東",
        subdivisions: [
            {
                name: "宗谷地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01214/",
                        name: "稚内市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01511/",
                        name: "猿払村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01512/",
                        name: "浜頓別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01513/",
                        name: "中頓別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01514/",
                        name: "枝幸町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01516/",
                        name: "豊富町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01517/",
                        name: "礼文町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01518/",
                        name: "利尻町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01519/",
                        name: "利尻富士町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01520/",
                        name: "幌延町"
                    },
                ]
            },
            {
                name: "上川地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01204/",
                        name: "旭川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01220/",
                        name: "士別市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01221/",
                        name: "名寄市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01229/",
                        name: "富良野市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01452/",
                        name: "鷹栖町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01453/",
                        name: "東神楽町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01454/",
                        name: "当麻町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01455/",
                        name: "比布町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01456/",
                        name: "愛別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01457/",
                        name: "上川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01458/",
                        name: "東川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01459/",
                        name: "美瑛町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01460/",
                        name: "上富良野町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01461/",
                        name: "中富良野町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01462/",
                        name: "南富良野町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01463/",
                        name: "占冠村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01464/",
                        name: "和寒町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01465/",
                        name: "剣淵町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01468/",
                        name: "下川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01469/",
                        name: "美深町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01470/",
                        name: "音威子府村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01471/",
                        name: "中川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01472/",
                        name: "幌加内町"
                    },
                ]
            },
            {
                name: "留萌地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01212/",
                        name: "留萌市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01481/",
                        name: "増毛町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01482/",
                        name: "小平町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01483/",
                        name: "苫前町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01484/",
                        name: "羽幌町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01485/",
                        name: "初山別村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01486/",
                        name: "遠別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01487/",
                        name: "天塩町"
                    },
                ]
            },
            {
                name: "網走地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01211/",
                        name: "網走市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01543/",
                        name: "美幌町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01544/",
                        name: "津別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01545/",
                        name: "斜里町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01546/",
                        name: "清里町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01547/",
                        name: "小清水町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01552/",
                        name: "佐呂間町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01564/",
                        name: "大空町"
                    },
                ]
            },
            {
                name: "北見地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01208/",
                        name: "北見市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01549/",
                        name: "訓子府町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01550/",
                        name: "置戸町"
                    },
                ]
            },
            {
                name: "紋別地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01219/",
                        name: "紋別市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01555/",
                        name: "遠軽町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01559/",
                        name: "湧別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01560/",
                        name: "滝上町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01561/",
                        name: "興部町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01562/",
                        name: "西興部村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01563/",
                        name: "雄武町"
                    },
                ]
            },
            {
                name: "根室地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01223/",
                        name: "根室市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01691/",
                        name: "別海町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01692/",
                        name: "中標津町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01693/",
                        name: "標津町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01694/",
                        name: "羅臼町"
                    },
                ]
            },
            {
                name: "釧路地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01206/",
                        name: "釧路市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01661/",
                        name: "釧路町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01662/",
                        name: "厚岸町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01663/",
                        name: "浜中町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01664/",
                        name: "標茶町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01665/",
                        name: "弟子屈町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01667/",
                        name: "鶴居村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01668/",
                        name: "白糠町"
                    },
                ]
            },
            {
                name: "十勝地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01207/",
                        name: "帯広市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01631/",
                        name: "音更町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01632/",
                        name: "士幌町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01633/",
                        name: "上士幌町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01634/",
                        name: "鹿追町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01635/",
                        name: "新得町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01636/",
                        name: "清水町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01637/",
                        name: "芽室町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01638/",
                        name: "中札内村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01639/",
                        name: "更別村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01641/",
                        name: "大樹町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01642/",
                        name: "広尾町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01643/",
                        name: "幕別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01644/",
                        name: "池田町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01645/",
                        name: "豊頃町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01646/",
                        name: "本別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01647/",
                        name: "足寄町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01648/",
                        name: "陸別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01649/",
                        name: "浦幌町"
                    },
                ]
            },
            {
                name: "胆振地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01205/",
                        name: "室蘭市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01213/",
                        name: "苫小牧市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01230/",
                        name: "登別市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01233/",
                        name: "伊達市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01571/",
                        name: "豊浦町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01575/",
                        name: "壮瞥町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01578/",
                        name: "白老町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01581/",
                        name: "厚真町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01584/",
                        name: "洞爺湖町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01585/",
                        name: "安平町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01586/",
                        name: "むかわ町"
                    },
                ]
            },
            {
                name: "日高地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01601/",
                        name: "日高町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01602/",
                        name: "平取町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01604/",
                        name: "新冠町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01607/",
                        name: "浦河町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01608/",
                        name: "様似町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01609/",
                        name: "えりも町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01610/",
                        name: "新ひだか町"
                    },
                ]
            },
            {
                name: "石狩地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01101/",
                        name: "札幌市中央区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01102/",
                        name: "札幌市北区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01103/",
                        name: "札幌市東区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01104/",
                        name: "札幌市白石区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01105/",
                        name: "札幌市豊平区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01106/",
                        name: "札幌市南区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01107/",
                        name: "札幌市西区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01108/",
                        name: "札幌市厚別区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01109/",
                        name: "札幌市手稲区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01110/",
                        name: "札幌市清田区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01217/",
                        name: "江別市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01224/",
                        name: "千歳市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01231/",
                        name: "恵庭市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01234/",
                        name: "北広島市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01235/",
                        name: "石狩市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01303/",
                        name: "当別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01304/",
                        name: "新篠津村"
                    },
                ]
            },
            {
                name: "空知地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01209/",
                        name: "夕張市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01210/",
                        name: "岩見沢市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01215/",
                        name: "美唄市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01216/",
                        name: "芦別市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01218/",
                        name: "赤平市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01222/",
                        name: "三笠市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01225/",
                        name: "滝川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01226/",
                        name: "砂川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01227/",
                        name: "歌志内市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01228/",
                        name: "深川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01423/",
                        name: "南幌町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01424/",
                        name: "奈井江町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01425/",
                        name: "上砂川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01427/",
                        name: "由仁町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01428/",
                        name: "長沼町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01429/",
                        name: "栗山町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01430/",
                        name: "月形町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01431/",
                        name: "浦臼町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01432/",
                        name: "新十津川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01433/",
                        name: "妹背牛町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01434/",
                        name: "秩父別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01436/",
                        name: "雨竜町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01437/",
                        name: "北竜町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01438/",
                        name: "沼田町"
                    },
                ]
            },
            {
                name: "後志地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01203/",
                        name: "小樽市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01391/",
                        name: "島牧村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01392/",
                        name: "寿都町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01393/",
                        name: "黒松内町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01394/",
                        name: "蘭越町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01395/",
                        name: "ニセコ町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01396/",
                        name: "真狩村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01397/",
                        name: "留寿都村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01398/",
                        name: "喜茂別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01399/",
                        name: "京極町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01400/",
                        name: "倶知安町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01401/",
                        name: "共和町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01402/",
                        name: "岩内町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01403/",
                        name: "泊村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01404/",
                        name: "神恵内村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01405/",
                        name: "積丹町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01406/",
                        name: "古平町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01407/",
                        name: "仁木町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01408/",
                        name: "余市町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01409/",
                        name: "赤井川村"
                    },
                ]
            },
            {
                name: "渡島地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01202/",
                        name: "函館市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01236/",
                        name: "北斗市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01331/",
                        name: "松前町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01332/",
                        name: "福島町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01333/",
                        name: "知内町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01334/",
                        name: "木古内町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01337/",
                        name: "七飯町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01343/",
                        name: "鹿部町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01345/",
                        name: "森町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01347/",
                        name: "長万部町"
                    },
                ]
            },
            {
                name: "檜山地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01346/",
                        name: "八雲町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01361/",
                        name: "江差町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01362/",
                        name: "上ノ国町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01363/",
                        name: "厚沢部町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01364/",
                        name: "乙部町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01367/",
                        name: "奥尻町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01370/",
                        name: "今金町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01371/",
                        name: "せたな町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/ehime/week/",
        prefName: "愛媛",
        subdivisions: [
            {
                name: "中予",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/ehime/38201/",
                        name: "松山市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ehime/38210/",
                        name: "伊予市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ehime/38215/",
                        name: "東温市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ehime/38386/",
                        name: "久万高原町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ehime/38401/",
                        name: "松前町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ehime/38402/",
                        name: "砥部町"
                    },
                ]
            },
            {
                name: "東予",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/ehime/38202/",
                        name: "今治市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ehime/38205/",
                        name: "新居浜市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ehime/38206/",
                        name: "西条市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ehime/38213/",
                        name: "四国中央市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ehime/38356/",
                        name: "上島町"
                    },
                ]
            },
            {
                name: "南予",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/ehime/38203/",
                        name: "宇和島市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ehime/38204/",
                        name: "八幡浜市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ehime/38207/",
                        name: "大洲市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ehime/38214/",
                        name: "西予市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ehime/38422/",
                        name: "内子町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ehime/38442/",
                        name: "伊方町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ehime/38484/",
                        name: "松野町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ehime/38488/",
                        name: "鬼北町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ehime/38506/",
                        name: "愛南町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/fukui/week/",
        prefName: "福井",
        subdivisions: [
            {
                name: "嶺北",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukui/18201/",
                        name: "福井市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukui/18205/",
                        name: "大野市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukui/18206/",
                        name: "勝山市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukui/18207/",
                        name: "鯖江市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukui/18208/",
                        name: "あわら市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukui/18209/",
                        name: "越前市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukui/18210/",
                        name: "坂井市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukui/18322/",
                        name: "永平寺町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukui/18382/",
                        name: "池田町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukui/18404/",
                        name: "南越前町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukui/18423/",
                        name: "越前町"
                    },
                ]
            },
            {
                name: "嶺南",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukui/18202/",
                        name: "敦賀市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukui/18204/",
                        name: "小浜市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukui/18442/",
                        name: "美浜町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukui/18481/",
                        name: "高浜町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukui/18483/",
                        name: "おおい町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukui/18501/",
                        name: "若狭町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/fukuoka/week/",
        prefName: "福岡",
        subdivisions: [
            {
                name: "福岡地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40131/",
                        name: "福岡市東区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40132/",
                        name: "福岡市博多区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40133/",
                        name: "福岡市中央区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40134/",
                        name: "福岡市南区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40135/",
                        name: "福岡市西区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40136/",
                        name: "福岡市城南区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40137/",
                        name: "福岡市早良区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40217/",
                        name: "筑紫野市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40218/",
                        name: "春日市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40219/",
                        name: "大野城市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40220/",
                        name: "宗像市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40221/",
                        name: "太宰府市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40223/",
                        name: "古賀市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40224/",
                        name: "福津市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40230/",
                        name: "糸島市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40231/",
                        name: "那珂川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40341/",
                        name: "宇美町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40342/",
                        name: "篠栗町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40343/",
                        name: "志免町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40344/",
                        name: "須惠町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40345/",
                        name: "新宮町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40348/",
                        name: "久山町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40349/",
                        name: "粕屋町"
                    },
                ]
            },
            {
                name: "北九州地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40101/",
                        name: "北九州市門司区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40103/",
                        name: "北九州市若松区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40105/",
                        name: "北九州市戸畑区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40106/",
                        name: "北九州市小倉北区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40107/",
                        name: "北九州市小倉南区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40108/",
                        name: "北九州市八幡東区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40109/",
                        name: "北九州市八幡西区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40213/",
                        name: "行橋市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40214/",
                        name: "豊前市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40215/",
                        name: "中間市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40381/",
                        name: "芦屋町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40382/",
                        name: "水巻町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40383/",
                        name: "岡垣町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40384/",
                        name: "遠賀町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40621/",
                        name: "苅田町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40625/",
                        name: "みやこ町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40642/",
                        name: "吉富町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40646/",
                        name: "上毛町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40647/",
                        name: "築上町"
                    },
                ]
            },
            {
                name: "筑豊地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40204/",
                        name: "直方市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40205/",
                        name: "飯塚市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40206/",
                        name: "田川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40226/",
                        name: "宮若市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40227/",
                        name: "嘉麻市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40401/",
                        name: "小竹町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40402/",
                        name: "鞍手町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40421/",
                        name: "桂川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40601/",
                        name: "香春町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40602/",
                        name: "添田町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40604/",
                        name: "糸田町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40605/",
                        name: "川崎町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40608/",
                        name: "大任町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40609/",
                        name: "赤村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40610/",
                        name: "福智町"
                    },
                ]
            },
            {
                name: "筑後地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40202/",
                        name: "大牟田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40203/",
                        name: "久留米市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40207/",
                        name: "柳川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40210/",
                        name: "八女市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40211/",
                        name: "筑後市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40212/",
                        name: "大川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40216/",
                        name: "小郡市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40225/",
                        name: "うきは市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40228/",
                        name: "朝倉市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40229/",
                        name: "みやま市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40447/",
                        name: "筑前町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40448/",
                        name: "東峰村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40503/",
                        name: "大刀洗町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40522/",
                        name: "大木町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukuoka/40544/",
                        name: "広川町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/fukushima/week/",
        prefName: "福島",
        subdivisions: [
            {
                name: "中通り",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07201/",
                        name: "福島市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07203/",
                        name: "郡山市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07205/",
                        name: "白河市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07207/",
                        name: "須賀川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07210/",
                        name: "二本松市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07211/",
                        name: "田村市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07213/",
                        name: "伊達市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07214/",
                        name: "本宮市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07301/",
                        name: "桑折町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07303/",
                        name: "国見町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07308/",
                        name: "川俣町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07322/",
                        name: "大玉村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07342/",
                        name: "鏡石町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07461/",
                        name: "西郷村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07464/",
                        name: "泉崎村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07465/",
                        name: "中島村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07466/",
                        name: "矢吹町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07481/",
                        name: "棚倉町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07482/",
                        name: "矢祭町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07483/",
                        name: "塙町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07484/",
                        name: "鮫川村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07501/",
                        name: "石川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07502/",
                        name: "玉川村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07503/",
                        name: "平田村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07504/",
                        name: "浅川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07505/",
                        name: "古殿町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07521/",
                        name: "三春町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07522/",
                        name: "小野町"
                    },
                ]
            },
            {
                name: "浜通り",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07204/",
                        name: "いわき市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07209/",
                        name: "相馬市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07212/",
                        name: "南相馬市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07541/",
                        name: "広野町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07542/",
                        name: "楢葉町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07543/",
                        name: "富岡町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07544/",
                        name: "川内村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07545/",
                        name: "大熊町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07546/",
                        name: "双葉町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07547/",
                        name: "浪江町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07548/",
                        name: "葛尾村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07561/",
                        name: "新地町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07564/",
                        name: "飯舘村"
                    },
                ]
            },
            {
                name: "会津",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07202/",
                        name: "会津若松市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07208/",
                        name: "喜多方市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07344/",
                        name: "天栄村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07362/",
                        name: "下郷町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07364/",
                        name: "檜枝岐村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07367/",
                        name: "只見町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07368/",
                        name: "南会津町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07402/",
                        name: "北塩原村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07405/",
                        name: "西会津町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07407/",
                        name: "磐梯町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07408/",
                        name: "猪苗代町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07421/",
                        name: "会津坂下町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07422/",
                        name: "湯川村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07423/",
                        name: "柳津町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07444/",
                        name: "三島町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07445/",
                        name: "金山町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07446/",
                        name: "昭和村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/fukushima/07447/",
                        name: "会津美里町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/gifu/week/",
        prefName: "岐阜",
        subdivisions: [
            {
                name: "美濃地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21201/",
                        name: "岐阜市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21202/",
                        name: "大垣市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21204/",
                        name: "多治見市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21205/",
                        name: "関市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21206/",
                        name: "中津川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21207/",
                        name: "美濃市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21208/",
                        name: "瑞浪市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21209/",
                        name: "羽島市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21210/",
                        name: "恵那市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21211/",
                        name: "美濃加茂市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21212/",
                        name: "土岐市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21213/",
                        name: "各務原市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21214/",
                        name: "可児市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21215/",
                        name: "山県市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21216/",
                        name: "瑞穂市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21218/",
                        name: "本巣市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21219/",
                        name: "郡上市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21221/",
                        name: "海津市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21302/",
                        name: "岐南町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21303/",
                        name: "笠松町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21341/",
                        name: "養老町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21361/",
                        name: "垂井町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21362/",
                        name: "関ケ原町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21381/",
                        name: "神戸町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21382/",
                        name: "輪之内町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21383/",
                        name: "安八町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21401/",
                        name: "揖斐川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21403/",
                        name: "大野町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21404/",
                        name: "池田町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21421/",
                        name: "北方町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21501/",
                        name: "坂祝町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21502/",
                        name: "富加町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21503/",
                        name: "川辺町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21504/",
                        name: "七宗町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21505/",
                        name: "八百津町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21506/",
                        name: "白川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21507/",
                        name: "東白川村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21521/",
                        name: "御嵩町"
                    },
                ]
            },
            {
                name: "飛騨地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21203/",
                        name: "高山市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21217/",
                        name: "飛騨市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21220/",
                        name: "下呂市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gifu/21604/",
                        name: "白川村"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/gunma/week/",
        prefName: "群馬",
        subdivisions: [
            {
                name: "南部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/gunma/10201/",
                        name: "前橋市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gunma/10202/",
                        name: "高崎市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gunma/10203/",
                        name: "桐生市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gunma/10204/",
                        name: "伊勢崎市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gunma/10205/",
                        name: "太田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gunma/10207/",
                        name: "館林市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gunma/10208/",
                        name: "渋川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gunma/10209/",
                        name: "藤岡市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gunma/10210/",
                        name: "富岡市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gunma/10211/",
                        name: "安中市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gunma/10212/",
                        name: "みどり市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gunma/10344/",
                        name: "榛東村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gunma/10345/",
                        name: "吉岡町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gunma/10366/",
                        name: "上野村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gunma/10367/",
                        name: "神流町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gunma/10382/",
                        name: "下仁田町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gunma/10383/",
                        name: "南牧村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gunma/10384/",
                        name: "甘楽町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gunma/10464/",
                        name: "玉村町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gunma/10521/",
                        name: "板倉町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gunma/10522/",
                        name: "明和町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gunma/10523/",
                        name: "千代田町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gunma/10524/",
                        name: "大泉町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gunma/10525/",
                        name: "邑楽町"
                    },
                ]
            },
            {
                name: "北部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/gunma/10206/",
                        name: "沼田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gunma/10421/",
                        name: "中之条町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gunma/10424/",
                        name: "長野原町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gunma/10425/",
                        name: "嬬恋村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gunma/10426/",
                        name: "草津町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gunma/10428/",
                        name: "高山村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gunma/10429/",
                        name: "東吾妻町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gunma/10443/",
                        name: "片品村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gunma/10444/",
                        name: "川場村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gunma/10448/",
                        name: "昭和村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/gunma/10449/",
                        name: "みなかみ町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/hiroshima/week/",
        prefName: "広島",
        subdivisions: [
            {
                name: "南部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hiroshima/34101/",
                        name: "広島市中区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hiroshima/34102/",
                        name: "広島市東区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hiroshima/34103/",
                        name: "広島市南区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hiroshima/34104/",
                        name: "広島市西区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hiroshima/34105/",
                        name: "広島市安佐南区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hiroshima/34106/",
                        name: "広島市安佐北区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hiroshima/34107/",
                        name: "広島市安芸区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hiroshima/34108/",
                        name: "広島市佐伯区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hiroshima/34202/",
                        name: "呉市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hiroshima/34203/",
                        name: "竹原市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hiroshima/34204/",
                        name: "三原市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hiroshima/34205/",
                        name: "尾道市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hiroshima/34207/",
                        name: "福山市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hiroshima/34208/",
                        name: "府中市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hiroshima/34211/",
                        name: "大竹市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hiroshima/34212/",
                        name: "東広島市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hiroshima/34213/",
                        name: "廿日市市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hiroshima/34215/",
                        name: "江田島市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hiroshima/34302/",
                        name: "府中町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hiroshima/34304/",
                        name: "海田町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hiroshima/34307/",
                        name: "熊野町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hiroshima/34309/",
                        name: "坂町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hiroshima/34431/",
                        name: "大崎上島町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hiroshima/34462/",
                        name: "世羅町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hiroshima/34545/",
                        name: "神石高原町"
                    },
                ]
            },
            {
                name: "北部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hiroshima/34209/",
                        name: "三次市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hiroshima/34210/",
                        name: "庄原市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hiroshima/34214/",
                        name: "安芸高田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hiroshima/34368/",
                        name: "安芸太田町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hiroshima/34369/",
                        name: "北広島町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/hokkaido/week/",
        prefName: "北海道地方",
        subdivisions: [
            {
                name: "宗谷地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01214/",
                        name: "稚内市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01511/",
                        name: "猿払村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01512/",
                        name: "浜頓別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01513/",
                        name: "中頓別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01514/",
                        name: "枝幸町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01516/",
                        name: "豊富町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01517/",
                        name: "礼文町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01518/",
                        name: "利尻町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01519/",
                        name: "利尻富士町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01520/",
                        name: "幌延町"
                    },
                ]
            },
            {
                name: "上川地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01204/",
                        name: "旭川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01220/",
                        name: "士別市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01221/",
                        name: "名寄市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01229/",
                        name: "富良野市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01452/",
                        name: "鷹栖町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01453/",
                        name: "東神楽町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01454/",
                        name: "当麻町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01455/",
                        name: "比布町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01456/",
                        name: "愛別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01457/",
                        name: "上川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01458/",
                        name: "東川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01459/",
                        name: "美瑛町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01460/",
                        name: "上富良野町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01461/",
                        name: "中富良野町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01462/",
                        name: "南富良野町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01463/",
                        name: "占冠村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01464/",
                        name: "和寒町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01465/",
                        name: "剣淵町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01468/",
                        name: "下川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01469/",
                        name: "美深町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01470/",
                        name: "音威子府村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01471/",
                        name: "中川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01472/",
                        name: "幌加内町"
                    },
                ]
            },
            {
                name: "留萌地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01212/",
                        name: "留萌市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01481/",
                        name: "増毛町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01482/",
                        name: "小平町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01483/",
                        name: "苫前町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01484/",
                        name: "羽幌町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01485/",
                        name: "初山別村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01486/",
                        name: "遠別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01487/",
                        name: "天塩町"
                    },
                ]
            },
            {
                name: "網走地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01211/",
                        name: "網走市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01543/",
                        name: "美幌町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01544/",
                        name: "津別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01545/",
                        name: "斜里町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01546/",
                        name: "清里町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01547/",
                        name: "小清水町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01552/",
                        name: "佐呂間町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01564/",
                        name: "大空町"
                    },
                ]
            },
            {
                name: "北見地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01208/",
                        name: "北見市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01549/",
                        name: "訓子府町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01550/",
                        name: "置戸町"
                    },
                ]
            },
            {
                name: "紋別地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01219/",
                        name: "紋別市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01555/",
                        name: "遠軽町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01559/",
                        name: "湧別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01560/",
                        name: "滝上町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01561/",
                        name: "興部町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01562/",
                        name: "西興部村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01563/",
                        name: "雄武町"
                    },
                ]
            },
            {
                name: "根室地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01223/",
                        name: "根室市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01691/",
                        name: "別海町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01692/",
                        name: "中標津町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01693/",
                        name: "標津町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01694/",
                        name: "羅臼町"
                    },
                ]
            },
            {
                name: "釧路地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01206/",
                        name: "釧路市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01661/",
                        name: "釧路町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01662/",
                        name: "厚岸町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01663/",
                        name: "浜中町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01664/",
                        name: "標茶町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01665/",
                        name: "弟子屈町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01667/",
                        name: "鶴居村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01668/",
                        name: "白糠町"
                    },
                ]
            },
            {
                name: "十勝地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01207/",
                        name: "帯広市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01631/",
                        name: "音更町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01632/",
                        name: "士幌町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01633/",
                        name: "上士幌町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01634/",
                        name: "鹿追町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01635/",
                        name: "新得町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01636/",
                        name: "清水町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01637/",
                        name: "芽室町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01638/",
                        name: "中札内村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01639/",
                        name: "更別村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01641/",
                        name: "大樹町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01642/",
                        name: "広尾町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01643/",
                        name: "幕別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01644/",
                        name: "池田町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01645/",
                        name: "豊頃町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01646/",
                        name: "本別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01647/",
                        name: "足寄町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01648/",
                        name: "陸別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01649/",
                        name: "浦幌町"
                    },
                ]
            },
            {
                name: "胆振地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01205/",
                        name: "室蘭市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01213/",
                        name: "苫小牧市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01230/",
                        name: "登別市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01233/",
                        name: "伊達市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01571/",
                        name: "豊浦町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01575/",
                        name: "壮瞥町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01578/",
                        name: "白老町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01581/",
                        name: "厚真町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01584/",
                        name: "洞爺湖町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01585/",
                        name: "安平町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01586/",
                        name: "むかわ町"
                    },
                ]
            },
            {
                name: "日高地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01601/",
                        name: "日高町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01602/",
                        name: "平取町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01604/",
                        name: "新冠町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01607/",
                        name: "浦河町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01608/",
                        name: "様似町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01609/",
                        name: "えりも町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01610/",
                        name: "新ひだか町"
                    },
                ]
            },
            {
                name: "石狩地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01101/",
                        name: "札幌市中央区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01102/",
                        name: "札幌市北区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01103/",
                        name: "札幌市東区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01104/",
                        name: "札幌市白石区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01105/",
                        name: "札幌市豊平区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01106/",
                        name: "札幌市南区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01107/",
                        name: "札幌市西区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01108/",
                        name: "札幌市厚別区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01109/",
                        name: "札幌市手稲区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01110/",
                        name: "札幌市清田区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01217/",
                        name: "江別市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01224/",
                        name: "千歳市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01231/",
                        name: "恵庭市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01234/",
                        name: "北広島市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01235/",
                        name: "石狩市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01303/",
                        name: "当別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01304/",
                        name: "新篠津村"
                    },
                ]
            },
            {
                name: "空知地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01209/",
                        name: "夕張市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01210/",
                        name: "岩見沢市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01215/",
                        name: "美唄市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01216/",
                        name: "芦別市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01218/",
                        name: "赤平市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01222/",
                        name: "三笠市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01225/",
                        name: "滝川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01226/",
                        name: "砂川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01227/",
                        name: "歌志内市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01228/",
                        name: "深川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01423/",
                        name: "南幌町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01424/",
                        name: "奈井江町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01425/",
                        name: "上砂川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01427/",
                        name: "由仁町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01428/",
                        name: "長沼町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01429/",
                        name: "栗山町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01430/",
                        name: "月形町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01431/",
                        name: "浦臼町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01432/",
                        name: "新十津川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01433/",
                        name: "妹背牛町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01434/",
                        name: "秩父別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01436/",
                        name: "雨竜町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01437/",
                        name: "北竜町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01438/",
                        name: "沼田町"
                    },
                ]
            },
            {
                name: "後志地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01203/",
                        name: "小樽市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01391/",
                        name: "島牧村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01392/",
                        name: "寿都町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01393/",
                        name: "黒松内町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01394/",
                        name: "蘭越町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01395/",
                        name: "ニセコ町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01396/",
                        name: "真狩村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01397/",
                        name: "留寿都村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01398/",
                        name: "喜茂別町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01399/",
                        name: "京極町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01400/",
                        name: "倶知安町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01401/",
                        name: "共和町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01402/",
                        name: "岩内町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01403/",
                        name: "泊村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01404/",
                        name: "神恵内村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01405/",
                        name: "積丹町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01406/",
                        name: "古平町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01407/",
                        name: "仁木町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01408/",
                        name: "余市町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01409/",
                        name: "赤井川村"
                    },
                ]
            },
            {
                name: "渡島地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01202/",
                        name: "函館市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01236/",
                        name: "北斗市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01331/",
                        name: "松前町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01332/",
                        name: "福島町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01333/",
                        name: "知内町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01334/",
                        name: "木古内町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01337/",
                        name: "七飯町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01343/",
                        name: "鹿部町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01345/",
                        name: "森町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01347/",
                        name: "長万部町"
                    },
                ]
            },
            {
                name: "檜山地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01346/",
                        name: "八雲町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01361/",
                        name: "江差町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01362/",
                        name: "上ノ国町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01363/",
                        name: "厚沢部町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01364/",
                        name: "乙部町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01367/",
                        name: "奥尻町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01370/",
                        name: "今金町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hokkaido/01371/",
                        name: "せたな町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/hyogo/week/",
        prefName: "兵庫",
        subdivisions: [
            {
                name: "南部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28101/",
                        name: "神戸市東灘区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28102/",
                        name: "神戸市灘区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28105/",
                        name: "神戸市兵庫区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28106/",
                        name: "神戸市長田区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28107/",
                        name: "神戸市須磨区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28108/",
                        name: "神戸市垂水区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28109/",
                        name: "神戸市北区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28110/",
                        name: "神戸市中央区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28111/",
                        name: "神戸市西区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28201/",
                        name: "姫路市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28202/",
                        name: "尼崎市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28203/",
                        name: "明石市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28204/",
                        name: "西宮市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28205/",
                        name: "洲本市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28206/",
                        name: "芦屋市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28207/",
                        name: "伊丹市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28208/",
                        name: "相生市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28210/",
                        name: "加古川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28212/",
                        name: "赤穂市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28213/",
                        name: "西脇市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28214/",
                        name: "宝塚市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28215/",
                        name: "三木市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28216/",
                        name: "高砂市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28217/",
                        name: "川西市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28218/",
                        name: "小野市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28219/",
                        name: "三田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28220/",
                        name: "加西市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28221/",
                        name: "丹波篠山市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28223/",
                        name: "丹波市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28224/",
                        name: "南あわじ市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28226/",
                        name: "淡路市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28227/",
                        name: "宍粟市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28228/",
                        name: "加東市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28229/",
                        name: "たつの市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28301/",
                        name: "猪名川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28365/",
                        name: "多可町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28381/",
                        name: "稲美町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28382/",
                        name: "播磨町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28442/",
                        name: "市川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28443/",
                        name: "福崎町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28446/",
                        name: "神河町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28464/",
                        name: "太子町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28481/",
                        name: "上郡町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28501/",
                        name: "佐用町"
                    },
                ]
            },
            {
                name: "北部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28209/",
                        name: "豊岡市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28222/",
                        name: "養父市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28225/",
                        name: "朝来市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28585/",
                        name: "香美町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/hyogo/28586/",
                        name: "新温泉町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/ibaraki/week/",
        prefName: "茨城",
        subdivisions: [
            {
                name: "北部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08201/",
                        name: "水戸市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08202/",
                        name: "日立市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08212/",
                        name: "常陸太田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08214/",
                        name: "高萩市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08215/",
                        name: "北茨城市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08216/",
                        name: "笠間市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08221/",
                        name: "ひたちなか市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08225/",
                        name: "常陸大宮市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08226/",
                        name: "那珂市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08236/",
                        name: "小美玉市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08302/",
                        name: "茨城町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08309/",
                        name: "大洗町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08310/",
                        name: "城里町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08341/",
                        name: "東海村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08364/",
                        name: "大子町"
                    },
                ]
            },
            {
                name: "南部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08203/",
                        name: "土浦市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08204/",
                        name: "古河市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08205/",
                        name: "石岡市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08207/",
                        name: "結城市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08208/",
                        name: "龍ケ崎市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08210/",
                        name: "下妻市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08211/",
                        name: "常総市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08217/",
                        name: "取手市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08219/",
                        name: "牛久市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08220/",
                        name: "つくば市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08222/",
                        name: "鹿嶋市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08223/",
                        name: "潮来市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08224/",
                        name: "守谷市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08227/",
                        name: "筑西市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08228/",
                        name: "坂東市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08229/",
                        name: "稲敷市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08230/",
                        name: "かすみがうら市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08231/",
                        name: "桜川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08232/",
                        name: "神栖市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08233/",
                        name: "行方市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08234/",
                        name: "鉾田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08235/",
                        name: "つくばみらい市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08442/",
                        name: "美浦村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08443/",
                        name: "阿見町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08447/",
                        name: "河内町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08521/",
                        name: "八千代町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08542/",
                        name: "五霞町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08546/",
                        name: "境町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ibaraki/08564/",
                        name: "利根町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/ishikawa/week/",
        prefName: "石川",
        subdivisions: [
            {
                name: "加賀",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/ishikawa/17201/",
                        name: "金沢市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ishikawa/17203/",
                        name: "小松市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ishikawa/17206/",
                        name: "加賀市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ishikawa/17209/",
                        name: "かほく市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ishikawa/17210/",
                        name: "白山市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ishikawa/17211/",
                        name: "能美市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ishikawa/17212/",
                        name: "野々市市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ishikawa/17324/",
                        name: "川北町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ishikawa/17361/",
                        name: "津幡町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ishikawa/17365/",
                        name: "内灘町"
                    },
                ]
            },
            {
                name: "能登",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/ishikawa/17202/",
                        name: "七尾市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ishikawa/17204/",
                        name: "輪島市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ishikawa/17205/",
                        name: "珠洲市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ishikawa/17207/",
                        name: "羽咋市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ishikawa/17384/",
                        name: "志賀町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ishikawa/17386/",
                        name: "宝達志水町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ishikawa/17407/",
                        name: "中能登町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ishikawa/17461/",
                        name: "穴水町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/ishikawa/17463/",
                        name: "能登町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/iwate/week/",
        prefName: "岩手",
        subdivisions: [
            {
                name: "内陸",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/iwate/03201/",
                        name: "盛岡市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/iwate/03205/",
                        name: "花巻市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/iwate/03206/",
                        name: "北上市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/iwate/03208/",
                        name: "遠野市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/iwate/03209/",
                        name: "一関市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/iwate/03213/",
                        name: "二戸市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/iwate/03214/",
                        name: "八幡平市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/iwate/03215/",
                        name: "奥州市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/iwate/03216/",
                        name: "滝沢市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/iwate/03301/",
                        name: "雫石町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/iwate/03302/",
                        name: "葛巻町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/iwate/03303/",
                        name: "岩手町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/iwate/03321/",
                        name: "紫波町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/iwate/03322/",
                        name: "矢巾町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/iwate/03366/",
                        name: "西和賀町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/iwate/03381/",
                        name: "金ケ崎町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/iwate/03402/",
                        name: "平泉町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/iwate/03501/",
                        name: "軽米町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/iwate/03506/",
                        name: "九戸村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/iwate/03524/",
                        name: "一戸町"
                    },
                ]
            },
            {
                name: "沿岸北部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/iwate/03202/",
                        name: "宮古市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/iwate/03207/",
                        name: "久慈市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/iwate/03482/",
                        name: "山田町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/iwate/03483/",
                        name: "岩泉町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/iwate/03484/",
                        name: "田野畑村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/iwate/03485/",
                        name: "普代村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/iwate/03503/",
                        name: "野田村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/iwate/03507/",
                        name: "洋野町"
                    },
                ]
            },
            {
                name: "沿岸南部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/iwate/03203/",
                        name: "大船渡市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/iwate/03210/",
                        name: "陸前高田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/iwate/03211/",
                        name: "釜石市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/iwate/03441/",
                        name: "住田町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/iwate/03461/",
                        name: "大槌町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/kagawa/week/",
        prefName: "香川",
        subdivisions: [
            {
                name: "香川県",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagawa/37201/",
                        name: "高松市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagawa/37202/",
                        name: "丸亀市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagawa/37203/",
                        name: "坂出市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagawa/37204/",
                        name: "善通寺市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagawa/37205/",
                        name: "観音寺市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagawa/37206/",
                        name: "さぬき市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagawa/37207/",
                        name: "東かがわ市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagawa/37208/",
                        name: "三豊市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagawa/37322/",
                        name: "土庄町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagawa/37324/",
                        name: "小豆島町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagawa/37341/",
                        name: "三木町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagawa/37364/",
                        name: "直島町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagawa/37386/",
                        name: "宇多津町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagawa/37387/",
                        name: "綾川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagawa/37403/",
                        name: "琴平町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagawa/37404/",
                        name: "多度津町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagawa/37406/",
                        name: "まんのう町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/kagoshima/week/",
        prefName: "鹿児島",
        subdivisions: [
            {
                name: "薩摩地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46201/",
                        name: "鹿児島市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46204/",
                        name: "枕崎市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46206/",
                        name: "阿久根市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46208/",
                        name: "出水市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46210/",
                        name: "指宿市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46215/",
                        name: "薩摩川内市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46216/",
                        name: "日置市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46218/",
                        name: "霧島市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46219/",
                        name: "いちき串木野市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46220/",
                        name: "南さつま市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46223/",
                        name: "南九州市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46224/",
                        name: "伊佐市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46225/",
                        name: "姶良市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46392/",
                        name: "さつま町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46404/",
                        name: "長島町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46452/",
                        name: "湧水町"
                    },
                ]
            },
            {
                name: "大隅地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46203/",
                        name: "鹿屋市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46214/",
                        name: "垂水市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46217/",
                        name: "曽於市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46221/",
                        name: "志布志市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46468/",
                        name: "大崎町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46482/",
                        name: "東串良町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46490/",
                        name: "錦江町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46491/",
                        name: "南大隅町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46492/",
                        name: "肝付町"
                    },
                ]
            },
            {
                name: "種子島・屋久島地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46213/",
                        name: "西之表市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46303/",
                        name: "三島村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46501/",
                        name: "中種子町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46502/",
                        name: "南種子町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46505/",
                        name: "屋久島町"
                    },
                ]
            },
            {
                name: "奄美地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46222/",
                        name: "奄美市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46304/",
                        name: "十島村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46523/",
                        name: "大和村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46524/",
                        name: "宇検村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46525/",
                        name: "瀬戸内町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46527/",
                        name: "龍郷町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46529/",
                        name: "喜界町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46530/",
                        name: "徳之島町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46531/",
                        name: "天城町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46532/",
                        name: "伊仙町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46533/",
                        name: "和泊町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46534/",
                        name: "知名町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kagoshima/46535/",
                        name: "与論町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/kanagawa/week/",
        prefName: "神奈川",
        subdivisions: [
            {
                name: "東部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14101/",
                        name: "横浜市鶴見区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14102/",
                        name: "横浜市神奈川区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14103/",
                        name: "横浜市西区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14104/",
                        name: "横浜市中区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14105/",
                        name: "横浜市南区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14106/",
                        name: "横浜市保土ケ谷区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14107/",
                        name: "横浜市磯子区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14108/",
                        name: "横浜市金沢区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14109/",
                        name: "横浜市港北区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14110/",
                        name: "横浜市戸塚区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14111/",
                        name: "横浜市港南区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14112/",
                        name: "横浜市旭区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14113/",
                        name: "横浜市緑区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14114/",
                        name: "横浜市瀬谷区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14115/",
                        name: "横浜市栄区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14116/",
                        name: "横浜市泉区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14117/",
                        name: "横浜市青葉区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14118/",
                        name: "横浜市都筑区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14131/",
                        name: "川崎市川崎区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14132/",
                        name: "川崎市幸区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14133/",
                        name: "川崎市中原区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14134/",
                        name: "川崎市高津区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14135/",
                        name: "川崎市多摩区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14136/",
                        name: "川崎市宮前区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14137/",
                        name: "川崎市麻生区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14201/",
                        name: "横須賀市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14203/",
                        name: "平塚市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14204/",
                        name: "鎌倉市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14205/",
                        name: "藤沢市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14207/",
                        name: "茅ヶ崎市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14208/",
                        name: "逗子市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14210/",
                        name: "三浦市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14213/",
                        name: "大和市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14215/",
                        name: "海老名市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14216/",
                        name: "座間市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14218/",
                        name: "綾瀬市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14301/",
                        name: "葉山町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14321/",
                        name: "寒川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14341/",
                        name: "大磯町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14342/",
                        name: "二宮町"
                    },
                ]
            },
            {
                name: "西部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14151/",
                        name: "相模原市緑区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14152/",
                        name: "相模原市中央区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14153/",
                        name: "相模原市南区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14206/",
                        name: "小田原市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14211/",
                        name: "秦野市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14212/",
                        name: "厚木市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14214/",
                        name: "伊勢原市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14217/",
                        name: "南足柄市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14361/",
                        name: "中井町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14362/",
                        name: "大井町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14363/",
                        name: "松田町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14364/",
                        name: "山北町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14366/",
                        name: "開成町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14382/",
                        name: "箱根町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14383/",
                        name: "真鶴町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14384/",
                        name: "湯河原町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14401/",
                        name: "愛川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kanagawa/14402/",
                        name: "清川村"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/kouchi/week/",
        prefName: "高知",
        subdivisions: [
            {
                name: "中部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/kouchi/39201/",
                        name: "高知市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kouchi/39204/",
                        name: "南国市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kouchi/39205/",
                        name: "土佐市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kouchi/39206/",
                        name: "須崎市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kouchi/39211/",
                        name: "香南市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kouchi/39212/",
                        name: "香美市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kouchi/39341/",
                        name: "本山町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kouchi/39344/",
                        name: "大豊町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kouchi/39363/",
                        name: "土佐町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kouchi/39364/",
                        name: "大川村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kouchi/39386/",
                        name: "いの町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kouchi/39387/",
                        name: "仁淀川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kouchi/39402/",
                        name: "佐川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kouchi/39403/",
                        name: "越知町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kouchi/39410/",
                        name: "日高村"
                    },
                ]
            },
            {
                name: "東部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/kouchi/39202/",
                        name: "室戸市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kouchi/39203/",
                        name: "安芸市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kouchi/39301/",
                        name: "東洋町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kouchi/39302/",
                        name: "奈半利町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kouchi/39303/",
                        name: "田野町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kouchi/39304/",
                        name: "安田町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kouchi/39305/",
                        name: "北川村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kouchi/39306/",
                        name: "馬路村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kouchi/39307/",
                        name: "芸西村"
                    },
                ]
            },
            {
                name: "西部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/kouchi/39208/",
                        name: "宿毛市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kouchi/39209/",
                        name: "土佐清水市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kouchi/39210/",
                        name: "四万十市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kouchi/39401/",
                        name: "中土佐町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kouchi/39405/",
                        name: "檮原町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kouchi/39411/",
                        name: "津野町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kouchi/39412/",
                        name: "四万十町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kouchi/39424/",
                        name: "大月町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kouchi/39427/",
                        name: "三原村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kouchi/39428/",
                        name: "黒潮町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/kumamoto/week/",
        prefName: "熊本",
        subdivisions: [
            {
                name: "熊本地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43101/",
                        name: "熊本市中央区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43102/",
                        name: "熊本市東区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43103/",
                        name: "熊本市西区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43104/",
                        name: "熊本市南区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43105/",
                        name: "熊本市北区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43202/",
                        name: "八代市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43204/",
                        name: "荒尾市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43206/",
                        name: "玉名市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43208/",
                        name: "山鹿市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43210/",
                        name: "菊池市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43211/",
                        name: "宇土市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43213/",
                        name: "宇城市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43216/",
                        name: "合志市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43348/",
                        name: "美里町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43364/",
                        name: "玉東町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43367/",
                        name: "南関町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43368/",
                        name: "長洲町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43369/",
                        name: "和水町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43403/",
                        name: "大津町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43404/",
                        name: "菊陽町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43432/",
                        name: "西原村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43441/",
                        name: "御船町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43442/",
                        name: "嘉島町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43443/",
                        name: "益城町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43444/",
                        name: "甲佐町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43447/",
                        name: "山都町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43468/",
                        name: "氷川町"
                    },
                ]
            },
            {
                name: "阿蘇地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43214/",
                        name: "阿蘇市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43423/",
                        name: "南小国町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43424/",
                        name: "小国町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43425/",
                        name: "産山村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43428/",
                        name: "高森町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43433/",
                        name: "南阿蘇村"
                    },
                ]
            },
            {
                name: "天草・芦北地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43205/",
                        name: "水俣市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43212/",
                        name: "上天草市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43215/",
                        name: "天草市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43482/",
                        name: "芦北町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43484/",
                        name: "津奈木町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43531/",
                        name: "苓北町"
                    },
                ]
            },
            {
                name: "球磨地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43203/",
                        name: "人吉市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43501/",
                        name: "錦町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43505/",
                        name: "多良木町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43506/",
                        name: "湯前町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43507/",
                        name: "水上村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43510/",
                        name: "相良村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43511/",
                        name: "五木村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43512/",
                        name: "山江村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43513/",
                        name: "球磨村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kumamoto/43514/",
                        name: "あさぎり町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/kyoto/week/",
        prefName: "京都",
        subdivisions: [
            {
                name: "南部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26101/",
                        name: "京都市北区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26102/",
                        name: "京都市上京区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26103/",
                        name: "京都市左京区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26104/",
                        name: "京都市中京区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26105/",
                        name: "京都市東山区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26106/",
                        name: "京都市下京区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26107/",
                        name: "京都市南区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26108/",
                        name: "京都市右京区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26109/",
                        name: "京都市伏見区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26110/",
                        name: "京都市山科区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26111/",
                        name: "京都市西京区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26204/",
                        name: "宇治市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26206/",
                        name: "亀岡市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26207/",
                        name: "城陽市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26208/",
                        name: "向日市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26209/",
                        name: "長岡京市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26210/",
                        name: "八幡市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26211/",
                        name: "京田辺市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26213/",
                        name: "南丹市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26214/",
                        name: "木津川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26303/",
                        name: "大山崎町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26322/",
                        name: "久御山町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26343/",
                        name: "井手町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26344/",
                        name: "宇治田原町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26364/",
                        name: "笠置町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26365/",
                        name: "和束町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26366/",
                        name: "精華町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26367/",
                        name: "南山城村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26407/",
                        name: "京丹波町"
                    },
                ]
            },
            {
                name: "北部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26201/",
                        name: "福知山市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26202/",
                        name: "舞鶴市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26203/",
                        name: "綾部市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26205/",
                        name: "宮津市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26212/",
                        name: "京丹後市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26463/",
                        name: "伊根町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/kyoto/26465/",
                        name: "与謝野町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/mie/week/",
        prefName: "三重",
        subdivisions: [
            {
                name: "北中部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/mie/24201/",
                        name: "津市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/mie/24202/",
                        name: "四日市市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/mie/24204/",
                        name: "松阪市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/mie/24205/",
                        name: "桑名市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/mie/24207/",
                        name: "鈴鹿市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/mie/24208/",
                        name: "名張市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/mie/24210/",
                        name: "亀山市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/mie/24214/",
                        name: "いなべ市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/mie/24216/",
                        name: "伊賀市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/mie/24303/",
                        name: "木曽岬町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/mie/24324/",
                        name: "東員町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/mie/24341/",
                        name: "菰野町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/mie/24343/",
                        name: "朝日町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/mie/24344/",
                        name: "川越町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/mie/24441/",
                        name: "多気町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/mie/24442/",
                        name: "明和町"
                    },
                ]
            },
            {
                name: "南部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/mie/24203/",
                        name: "伊勢市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/mie/24209/",
                        name: "尾鷲市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/mie/24211/",
                        name: "鳥羽市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/mie/24212/",
                        name: "熊野市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/mie/24215/",
                        name: "志摩市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/mie/24443/",
                        name: "大台町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/mie/24461/",
                        name: "玉城町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/mie/24470/",
                        name: "度会町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/mie/24471/",
                        name: "大紀町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/mie/24472/",
                        name: "南伊勢町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/mie/24543/",
                        name: "紀北町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/mie/24561/",
                        name: "御浜町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/mie/24562/",
                        name: "紀宝町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/miyagi/week/",
        prefName: "宮城",
        subdivisions: [
            {
                name: "東部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04102/",
                        name: "仙台市宮城野区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04103/",
                        name: "仙台市若林区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04202/",
                        name: "石巻市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04203/",
                        name: "塩竈市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04205/",
                        name: "気仙沼市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04207/",
                        name: "名取市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04208/",
                        name: "角田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04209/",
                        name: "多賀城市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04211/",
                        name: "岩沼市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04212/",
                        name: "登米市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04214/",
                        name: "東松島市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04216/",
                        name: "富谷市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04321/",
                        name: "大河原町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04322/",
                        name: "村田町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04323/",
                        name: "柴田町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04341/",
                        name: "丸森町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04361/",
                        name: "亘理町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04362/",
                        name: "山元町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04401/",
                        name: "松島町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04404/",
                        name: "七ヶ浜町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04406/",
                        name: "利府町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04422/",
                        name: "大郷町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04501/",
                        name: "涌谷町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04505/",
                        name: "美里町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04581/",
                        name: "女川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04606/",
                        name: "南三陸町"
                    },
                ]
            },
            {
                name: "西部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04101/",
                        name: "仙台市青葉区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04104/",
                        name: "仙台市太白区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04105/",
                        name: "仙台市泉区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04206/",
                        name: "白石市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04213/",
                        name: "栗原市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04215/",
                        name: "大崎市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04301/",
                        name: "蔵王町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04302/",
                        name: "七ヶ宿町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04324/",
                        name: "川崎町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04421/",
                        name: "大和町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04424/",
                        name: "大衡村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04444/",
                        name: "色麻町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyagi/04445/",
                        name: "加美町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/miyazaki/week/",
        prefName: "宮崎",
        subdivisions: [
            {
                name: "南部平野部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyazaki/45201/",
                        name: "宮崎市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyazaki/45204/",
                        name: "日南市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyazaki/45207/",
                        name: "串間市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyazaki/45382/",
                        name: "国富町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyazaki/45383/",
                        name: "綾町"
                    },
                ]
            },
            {
                name: "北部平野部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyazaki/45203/",
                        name: "延岡市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyazaki/45206/",
                        name: "日向市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyazaki/45208/",
                        name: "西都市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyazaki/45401/",
                        name: "高鍋町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyazaki/45402/",
                        name: "新富町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyazaki/45404/",
                        name: "木城町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyazaki/45405/",
                        name: "川南町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyazaki/45406/",
                        name: "都農町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyazaki/45421/",
                        name: "門川町"
                    },
                ]
            },
            {
                name: "南部山沿い",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyazaki/45202/",
                        name: "都城市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyazaki/45205/",
                        name: "小林市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyazaki/45209/",
                        name: "えびの市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyazaki/45341/",
                        name: "三股町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyazaki/45361/",
                        name: "高原町"
                    },
                ]
            },
            {
                name: "北部山沿い",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyazaki/45403/",
                        name: "西米良村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyazaki/45429/",
                        name: "諸塚村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyazaki/45430/",
                        name: "椎葉村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyazaki/45431/",
                        name: "美郷町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyazaki/45441/",
                        name: "高千穂町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyazaki/45442/",
                        name: "日之影町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/miyazaki/45443/",
                        name: "五ヶ瀬町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/nagano/week/",
        prefName: "長野",
        subdivisions: [
            {
                name: "北部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20201/",
                        name: "長野市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20207/",
                        name: "須坂市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20211/",
                        name: "中野市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20212/",
                        name: "大町市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20213/",
                        name: "飯山市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20218/",
                        name: "千曲市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20481/",
                        name: "池田町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20482/",
                        name: "松川村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20485/",
                        name: "白馬村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20486/",
                        name: "小谷村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20521/",
                        name: "坂城町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20541/",
                        name: "小布施町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20543/",
                        name: "高山村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20561/",
                        name: "山ノ内町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20562/",
                        name: "木島平村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20563/",
                        name: "野沢温泉村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20583/",
                        name: "信濃町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20588/",
                        name: "小川村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20590/",
                        name: "飯綱町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20602/",
                        name: "栄村"
                    },
                ]
            },
            {
                name: "中部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20202/",
                        name: "松本市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20203/",
                        name: "上田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20204/",
                        name: "岡谷市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20206/",
                        name: "諏訪市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20208/",
                        name: "小諸市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20214/",
                        name: "茅野市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20215/",
                        name: "塩尻市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20217/",
                        name: "佐久市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20219/",
                        name: "東御市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20220/",
                        name: "安曇野市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20303/",
                        name: "小海町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20304/",
                        name: "川上村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20305/",
                        name: "南牧村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20306/",
                        name: "南相木村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20307/",
                        name: "北相木村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20309/",
                        name: "佐久穂町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20321/",
                        name: "軽井沢町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20323/",
                        name: "御代田町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20324/",
                        name: "立科町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20349/",
                        name: "青木村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20350/",
                        name: "長和町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20361/",
                        name: "下諏訪町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20362/",
                        name: "富士見町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20363/",
                        name: "原村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20446/",
                        name: "麻績村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20448/",
                        name: "生坂村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20450/",
                        name: "山形村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20451/",
                        name: "朝日村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20452/",
                        name: "筑北村"
                    },
                ]
            },
            {
                name: "南部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20205/",
                        name: "飯田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20209/",
                        name: "伊那市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20210/",
                        name: "駒ヶ根市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20382/",
                        name: "辰野町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20383/",
                        name: "箕輪町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20384/",
                        name: "飯島町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20385/",
                        name: "南箕輪村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20386/",
                        name: "中川村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20388/",
                        name: "宮田村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20402/",
                        name: "松川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20403/",
                        name: "高森町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20404/",
                        name: "阿南町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20407/",
                        name: "阿智村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20409/",
                        name: "平谷村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20410/",
                        name: "根羽村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20411/",
                        name: "下條村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20412/",
                        name: "売木村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20413/",
                        name: "天龍村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20414/",
                        name: "泰阜村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20415/",
                        name: "喬木村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20416/",
                        name: "豊丘村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20417/",
                        name: "大鹿村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20422/",
                        name: "上松町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20423/",
                        name: "南木曽町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20425/",
                        name: "木祖村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20429/",
                        name: "王滝村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20430/",
                        name: "大桑村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagano/20432/",
                        name: "木曽町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/nagasaki/week/",
        prefName: "長崎",
        subdivisions: [
            {
                name: "南部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagasaki/42201/",
                        name: "長崎市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagasaki/42203/",
                        name: "島原市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagasaki/42204/",
                        name: "諫早市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagasaki/42205/",
                        name: "大村市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagasaki/42213/",
                        name: "雲仙市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagasaki/42214/",
                        name: "南島原市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagasaki/42307/",
                        name: "長与町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagasaki/42308/",
                        name: "時津町"
                    },
                ]
            },
            {
                name: "北部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagasaki/42207/",
                        name: "平戸市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagasaki/42208/",
                        name: "松浦市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagasaki/42321/",
                        name: "東彼杵町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagasaki/42322/",
                        name: "川棚町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagasaki/42323/",
                        name: "波佐見町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagasaki/42391/",
                        name: "佐々町"
                    },
                ]
            },
            {
                name: "壱岐・対馬",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagasaki/42209/",
                        name: "対馬市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagasaki/42210/",
                        name: "壱岐市"
                    },
                ]
            },
            {
                name: "五島",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagasaki/42202/",
                        name: "佐世保市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagasaki/42211/",
                        name: "五島市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagasaki/42212/",
                        name: "西海市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagasaki/42383/",
                        name: "小値賀町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nagasaki/42411/",
                        name: "新上五島町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/nara/week/",
        prefName: "奈良",
        subdivisions: [
            {
                name: "北部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29201/",
                        name: "奈良市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29202/",
                        name: "大和高田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29203/",
                        name: "大和郡山市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29204/",
                        name: "天理市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29205/",
                        name: "橿原市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29206/",
                        name: "桜井市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29208/",
                        name: "御所市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29209/",
                        name: "生駒市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29210/",
                        name: "香芝市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29211/",
                        name: "葛城市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29212/",
                        name: "宇陀市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29322/",
                        name: "山添村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29342/",
                        name: "平群町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29343/",
                        name: "三郷町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29344/",
                        name: "斑鳩町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29345/",
                        name: "安堵町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29361/",
                        name: "川西町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29362/",
                        name: "三宅町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29363/",
                        name: "田原本町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29401/",
                        name: "高取町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29402/",
                        name: "明日香村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29424/",
                        name: "上牧町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29425/",
                        name: "王寺町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29426/",
                        name: "広陵町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29427/",
                        name: "河合町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29441/",
                        name: "吉野町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29442/",
                        name: "大淀町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29443/",
                        name: "下市町"
                    },
                ]
            },
            {
                name: "南部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29207/",
                        name: "五條市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29385/",
                        name: "曽爾村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29386/",
                        name: "御杖村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29444/",
                        name: "黒滝村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29446/",
                        name: "天川村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29447/",
                        name: "野迫川村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29449/",
                        name: "十津川村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29450/",
                        name: "下北山村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29451/",
                        name: "上北山村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29452/",
                        name: "川上村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/nara/29453/",
                        name: "東吉野村"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/niigata/week/",
        prefName: "新潟",
        subdivisions: [
            {
                name: "下越",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15101/",
                        name: "新潟市北区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15102/",
                        name: "新潟市東区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15103/",
                        name: "新潟市中央区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15104/",
                        name: "新潟市江南区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15105/",
                        name: "新潟市秋葉区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15106/",
                        name: "新潟市南区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15107/",
                        name: "新潟市西区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15108/",
                        name: "新潟市西蒲区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15206/",
                        name: "新発田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15212/",
                        name: "村上市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15213/",
                        name: "燕市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15218/",
                        name: "五泉市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15223/",
                        name: "阿賀野市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15227/",
                        name: "胎内市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15307/",
                        name: "聖籠町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15342/",
                        name: "弥彦村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15385/",
                        name: "阿賀町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15581/",
                        name: "関川村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15586/",
                        name: "粟島浦村"
                    },
                ]
            },
            {
                name: "中越",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15202/",
                        name: "長岡市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15204/",
                        name: "三条市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15205/",
                        name: "柏崎市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15208/",
                        name: "小千谷市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15209/",
                        name: "加茂市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15210/",
                        name: "十日町市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15211/",
                        name: "見附市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15225/",
                        name: "魚沼市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15226/",
                        name: "南魚沼市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15361/",
                        name: "田上町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15405/",
                        name: "出雲崎町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15461/",
                        name: "湯沢町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15482/",
                        name: "津南町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15504/",
                        name: "刈羽村"
                    },
                ]
            },
            {
                name: "上越",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15216/",
                        name: "糸魚川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15217/",
                        name: "妙高市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15222/",
                        name: "上越市"
                    },
                ]
            },
            {
                name: "佐渡",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/niigata/15224/",
                        name: "佐渡市"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/oita/week/",
        prefName: "大分",
        subdivisions: [
            {
                name: "中部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/oita/44201/",
                        name: "大分市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/oita/44202/",
                        name: "別府市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/oita/44206/",
                        name: "臼杵市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/oita/44207/",
                        name: "津久見市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/oita/44210/",
                        name: "杵築市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/oita/44213/",
                        name: "由布市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/oita/44341/",
                        name: "日出町"
                    },
                ]
            },
            {
                name: "北部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/oita/44203/",
                        name: "中津市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/oita/44209/",
                        name: "豊後高田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/oita/44211/",
                        name: "宇佐市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/oita/44214/",
                        name: "国東市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/oita/44322/",
                        name: "姫島村"
                    },
                ]
            },
            {
                name: "西部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/oita/44204/",
                        name: "日田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/oita/44208/",
                        name: "竹田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/oita/44461/",
                        name: "九重町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/oita/44462/",
                        name: "玖珠町"
                    },
                ]
            },
            {
                name: "南部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/oita/44205/",
                        name: "佐伯市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/oita/44212/",
                        name: "豊後大野市"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/okayama/week/",
        prefName: "岡山",
        subdivisions: [
            {
                name: "南部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/okayama/33101/",
                        name: "岡山市北区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okayama/33102/",
                        name: "岡山市中区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okayama/33103/",
                        name: "岡山市東区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okayama/33104/",
                        name: "岡山市南区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okayama/33202/",
                        name: "倉敷市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okayama/33204/",
                        name: "玉野市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okayama/33205/",
                        name: "笠岡市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okayama/33207/",
                        name: "井原市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okayama/33208/",
                        name: "総社市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okayama/33209/",
                        name: "高梁市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okayama/33211/",
                        name: "備前市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okayama/33212/",
                        name: "瀬戸内市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okayama/33213/",
                        name: "赤磐市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okayama/33216/",
                        name: "浅口市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okayama/33346/",
                        name: "和気町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okayama/33423/",
                        name: "早島町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okayama/33445/",
                        name: "里庄町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okayama/33461/",
                        name: "矢掛町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okayama/33681/",
                        name: "吉備中央町"
                    },
                ]
            },
            {
                name: "北部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/okayama/33203/",
                        name: "津山市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okayama/33210/",
                        name: "新見市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okayama/33214/",
                        name: "真庭市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okayama/33215/",
                        name: "美作市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okayama/33586/",
                        name: "新庄村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okayama/33606/",
                        name: "鏡野町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okayama/33622/",
                        name: "勝央町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okayama/33623/",
                        name: "奈義町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okayama/33643/",
                        name: "西粟倉村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okayama/33663/",
                        name: "久米南町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okayama/33666/",
                        name: "美咲町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/okinawa/week/",
        prefName: "沖縄",
        subdivisions: [
            {
                name: "本島中南部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47201/",
                        name: "那覇市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47205/",
                        name: "宜野湾市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47208/",
                        name: "浦添市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47210/",
                        name: "糸満市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47211/",
                        name: "沖縄市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47212/",
                        name: "豊見城市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47213/",
                        name: "うるま市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47215/",
                        name: "南城市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47324/",
                        name: "読谷村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47325/",
                        name: "嘉手納町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47326/",
                        name: "北谷町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47327/",
                        name: "北中城村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47328/",
                        name: "中城村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47329/",
                        name: "西原町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47348/",
                        name: "与那原町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47350/",
                        name: "南風原町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47353/",
                        name: "渡嘉敷村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47354/",
                        name: "座間味村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47355/",
                        name: "粟国村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47356/",
                        name: "渡名喜村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47362/",
                        name: "八重瀬町"
                    },
                ]
            },
            {
                name: "本島北部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47209/",
                        name: "名護市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47301/",
                        name: "国頭村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47302/",
                        name: "大宜味村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47303/",
                        name: "東村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47306/",
                        name: "今帰仁村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47308/",
                        name: "本部町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47311/",
                        name: "恩納村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47313/",
                        name: "宜野座村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47314/",
                        name: "金武町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47315/",
                        name: "伊江村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47359/",
                        name: "伊平屋村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47360/",
                        name: "伊是名村"
                    },
                ]
            },
            {
                name: "久米島",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47361/",
                        name: "久米島町"
                    },
                ]
            },
            {
                name: "大東島地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47357/",
                        name: "南大東村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47358/",
                        name: "北大東村"
                    },
                ]
            },
            {
                name: "宮古島地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47214/",
                        name: "宮古島市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47375/",
                        name: "多良間村"
                    },
                ]
            },
            {
                name: "石垣島地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47207/",
                        name: "石垣市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47381/",
                        name: "竹富町"
                    },
                ]
            },
            {
                name: "与那国島地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/okinawa/47382/",
                        name: "与那国町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/osaka/week/",
        prefName: "大阪",
        subdivisions: [
            {
                name: "大阪府",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27102/",
                        name: "大阪市都島区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27103/",
                        name: "大阪市福島区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27104/",
                        name: "大阪市此花区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27106/",
                        name: "大阪市西区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27107/",
                        name: "大阪市港区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27108/",
                        name: "大阪市大正区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27109/",
                        name: "大阪市天王寺区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27111/",
                        name: "大阪市浪速区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27113/",
                        name: "大阪市西淀川区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27114/",
                        name: "大阪市東淀川区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27115/",
                        name: "大阪市東成区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27116/",
                        name: "大阪市生野区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27117/",
                        name: "大阪市旭区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27118/",
                        name: "大阪市城東区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27119/",
                        name: "大阪市阿倍野区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27120/",
                        name: "大阪市住吉区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27121/",
                        name: "大阪市東住吉区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27122/",
                        name: "大阪市西成区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27123/",
                        name: "大阪市淀川区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27124/",
                        name: "大阪市鶴見区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27125/",
                        name: "大阪市住之江区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27126/",
                        name: "大阪市平野区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27127/",
                        name: "大阪市北区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27128/",
                        name: "大阪市中央区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27141/",
                        name: "堺市堺区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27142/",
                        name: "堺市中区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27143/",
                        name: "堺市東区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27144/",
                        name: "堺市西区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27145/",
                        name: "堺市南区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27146/",
                        name: "堺市北区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27147/",
                        name: "堺市美原区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27202/",
                        name: "岸和田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27203/",
                        name: "豊中市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27204/",
                        name: "池田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27205/",
                        name: "吹田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27206/",
                        name: "泉大津市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27207/",
                        name: "高槻市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27208/",
                        name: "貝塚市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27209/",
                        name: "守口市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27210/",
                        name: "枚方市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27211/",
                        name: "茨木市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27212/",
                        name: "八尾市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27213/",
                        name: "泉佐野市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27214/",
                        name: "富田林市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27215/",
                        name: "寝屋川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27216/",
                        name: "河内長野市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27217/",
                        name: "松原市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27218/",
                        name: "大東市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27219/",
                        name: "和泉市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27220/",
                        name: "箕面市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27221/",
                        name: "柏原市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27222/",
                        name: "羽曳野市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27223/",
                        name: "門真市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27224/",
                        name: "摂津市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27225/",
                        name: "高石市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27226/",
                        name: "藤井寺市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27227/",
                        name: "東大阪市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27228/",
                        name: "泉南市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27229/",
                        name: "四條畷市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27230/",
                        name: "交野市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27231/",
                        name: "大阪狭山市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27232/",
                        name: "阪南市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27301/",
                        name: "島本町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27321/",
                        name: "豊能町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27322/",
                        name: "能勢町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27341/",
                        name: "忠岡町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27361/",
                        name: "熊取町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27362/",
                        name: "田尻町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27366/",
                        name: "岬町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27381/",
                        name: "太子町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27382/",
                        name: "河南町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/osaka/27383/",
                        name: "千早赤阪村"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/saga/week/",
        prefName: "佐賀",
        subdivisions: [
            {
                name: "南部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/saga/41201/",
                        name: "佐賀市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saga/41203/",
                        name: "鳥栖市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saga/41204/",
                        name: "多久市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saga/41206/",
                        name: "武雄市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saga/41207/",
                        name: "鹿島市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saga/41208/",
                        name: "小城市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saga/41209/",
                        name: "嬉野市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saga/41210/",
                        name: "神埼市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saga/41327/",
                        name: "吉野ヶ里町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saga/41341/",
                        name: "基山町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saga/41345/",
                        name: "上峰町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saga/41346/",
                        name: "みやき町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saga/41423/",
                        name: "大町町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saga/41424/",
                        name: "江北町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saga/41425/",
                        name: "白石町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saga/41441/",
                        name: "太良町"
                    },
                ]
            },
            {
                name: "北部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/saga/41202/",
                        name: "唐津市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saga/41205/",
                        name: "伊万里市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saga/41387/",
                        name: "玄海町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saga/41401/",
                        name: "有田町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/saitama/week/",
        prefName: "埼玉",
        subdivisions: [
            {
                name: "南部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11101/",
                        name: "さいたま市西区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11102/",
                        name: "さいたま市北区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11103/",
                        name: "さいたま市大宮区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11104/",
                        name: "さいたま市見沼区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11105/",
                        name: "さいたま市中央区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11106/",
                        name: "さいたま市桜区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11107/",
                        name: "さいたま市浦和区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11108/",
                        name: "さいたま市南区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11109/",
                        name: "さいたま市緑区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11110/",
                        name: "さいたま市岩槻区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11201/",
                        name: "川越市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11203/",
                        name: "川口市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11208/",
                        name: "所沢市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11209/",
                        name: "飯能市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11214/",
                        name: "春日部市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11215/",
                        name: "狭山市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11219/",
                        name: "上尾市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11221/",
                        name: "草加市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11222/",
                        name: "越谷市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11223/",
                        name: "蕨市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11224/",
                        name: "戸田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11225/",
                        name: "入間市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11227/",
                        name: "朝霞市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11228/",
                        name: "志木市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11229/",
                        name: "和光市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11230/",
                        name: "新座市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11231/",
                        name: "桶川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11233/",
                        name: "北本市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11234/",
                        name: "八潮市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11235/",
                        name: "富士見市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11237/",
                        name: "三郷市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11238/",
                        name: "蓮田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11239/",
                        name: "坂戸市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11240/",
                        name: "幸手市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11241/",
                        name: "鶴ヶ島市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11242/",
                        name: "日高市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11243/",
                        name: "吉川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11245/",
                        name: "ふじみ野市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11246/",
                        name: "白岡市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11301/",
                        name: "伊奈町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11324/",
                        name: "三芳町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11326/",
                        name: "毛呂山町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11327/",
                        name: "越生町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11346/",
                        name: "川島町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11442/",
                        name: "宮代町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11464/",
                        name: "杉戸町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11465/",
                        name: "松伏町"
                    },
                ]
            },
            {
                name: "北部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11202/",
                        name: "熊谷市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11206/",
                        name: "行田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11210/",
                        name: "加須市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11211/",
                        name: "本庄市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11212/",
                        name: "東松山市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11216/",
                        name: "羽生市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11217/",
                        name: "鴻巣市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11218/",
                        name: "深谷市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11232/",
                        name: "久喜市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11341/",
                        name: "滑川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11342/",
                        name: "嵐山町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11343/",
                        name: "小川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11347/",
                        name: "吉見町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11348/",
                        name: "鳩山町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11349/",
                        name: "ときがわ町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11369/",
                        name: "東秩父村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11381/",
                        name: "美里町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11383/",
                        name: "神川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11385/",
                        name: "上里町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11408/",
                        name: "寄居町"
                    },
                ]
            },
            {
                name: "秩父地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11207/",
                        name: "秩父市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11361/",
                        name: "横瀬町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11362/",
                        name: "皆野町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11363/",
                        name: "長瀞町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/saitama/11365/",
                        name: "小鹿野町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/shiga/week/",
        prefName: "滋賀",
        subdivisions: [
            {
                name: "南部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/shiga/25204/",
                        name: "近江八幡市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shiga/25206/",
                        name: "草津市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shiga/25207/",
                        name: "守山市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shiga/25208/",
                        name: "栗東市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shiga/25209/",
                        name: "甲賀市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shiga/25210/",
                        name: "野洲市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shiga/25211/",
                        name: "湖南市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shiga/25213/",
                        name: "東近江市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shiga/25383/",
                        name: "日野町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shiga/25384/",
                        name: "竜王町"
                    },
                ]
            },
            {
                name: "北部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/shiga/25201/",
                        name: "大津市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shiga/25202/",
                        name: "彦根市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shiga/25203/",
                        name: "長浜市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shiga/25212/",
                        name: "高島市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shiga/25214/",
                        name: "米原市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shiga/25425/",
                        name: "愛荘町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shiga/25441/",
                        name: "豊郷町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shiga/25442/",
                        name: "甲良町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shiga/25443/",
                        name: "多賀町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/shimane/week/",
        prefName: "島根",
        subdivisions: [
            {
                name: "東部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/shimane/32201/",
                        name: "松江市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shimane/32203/",
                        name: "出雲市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shimane/32206/",
                        name: "安来市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shimane/32209/",
                        name: "雲南市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shimane/32343/",
                        name: "奥出雲町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shimane/32386/",
                        name: "飯南町"
                    },
                ]
            },
            {
                name: "西部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/shimane/32202/",
                        name: "浜田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shimane/32204/",
                        name: "益田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shimane/32205/",
                        name: "大田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shimane/32207/",
                        name: "江津市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shimane/32441/",
                        name: "川本町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shimane/32448/",
                        name: "美郷町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shimane/32449/",
                        name: "邑南町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shimane/32501/",
                        name: "津和野町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shimane/32505/",
                        name: "吉賀町"
                    },
                ]
            },
            {
                name: "隠岐",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/shimane/32525/",
                        name: "海士町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shimane/32526/",
                        name: "西ノ島町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shimane/32527/",
                        name: "知夫村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shimane/32528/",
                        name: "隠岐の島町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/shizuoka/week/",
        prefName: "静岡",
        subdivisions: [
            {
                name: "中部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22101/",
                        name: "静岡市葵区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22102/",
                        name: "静岡市駿河区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22103/",
                        name: "静岡市清水区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22209/",
                        name: "島田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22212/",
                        name: "焼津市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22214/",
                        name: "藤枝市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22226/",
                        name: "牧之原市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22424/",
                        name: "吉田町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22429/",
                        name: "川根本町"
                    },
                ]
            },
            {
                name: "伊豆",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22205/",
                        name: "熱海市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22208/",
                        name: "伊東市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22219/",
                        name: "下田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22222/",
                        name: "伊豆市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22225/",
                        name: "伊豆の国市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22301/",
                        name: "東伊豆町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22302/",
                        name: "河津町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22304/",
                        name: "南伊豆町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22305/",
                        name: "松崎町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22306/",
                        name: "西伊豆町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22325/",
                        name: "函南町"
                    },
                ]
            },
            {
                name: "東部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22203/",
                        name: "沼津市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22206/",
                        name: "三島市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22207/",
                        name: "富士宮市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22210/",
                        name: "富士市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22215/",
                        name: "御殿場市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22220/",
                        name: "裾野市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22341/",
                        name: "清水町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22342/",
                        name: "長泉町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22344/",
                        name: "小山町"
                    },
                ]
            },
            {
                name: "西部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22138/",
                        name: "浜松市中央区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22139/",
                        name: "浜松市浜名区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22140/",
                        name: "浜松市天竜区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22211/",
                        name: "磐田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22213/",
                        name: "掛川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22216/",
                        name: "袋井市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22221/",
                        name: "湖西市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22223/",
                        name: "御前崎市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22224/",
                        name: "菊川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/shizuoka/22461/",
                        name: "森町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/tochigi/week/",
        prefName: "栃木",
        subdivisions: [
            {
                name: "南部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/tochigi/09201/",
                        name: "宇都宮市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tochigi/09202/",
                        name: "足利市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tochigi/09203/",
                        name: "栃木市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tochigi/09204/",
                        name: "佐野市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tochigi/09205/",
                        name: "鹿沼市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tochigi/09208/",
                        name: "小山市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tochigi/09209/",
                        name: "真岡市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tochigi/09214/",
                        name: "さくら市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tochigi/09215/",
                        name: "那須烏山市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tochigi/09216/",
                        name: "下野市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tochigi/09301/",
                        name: "上三川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tochigi/09342/",
                        name: "益子町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tochigi/09343/",
                        name: "茂木町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tochigi/09344/",
                        name: "市貝町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tochigi/09345/",
                        name: "芳賀町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tochigi/09361/",
                        name: "壬生町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tochigi/09364/",
                        name: "野木町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tochigi/09386/",
                        name: "高根沢町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tochigi/09411/",
                        name: "那珂川町"
                    },
                ]
            },
            {
                name: "北部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/tochigi/09206/",
                        name: "日光市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tochigi/09210/",
                        name: "大田原市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tochigi/09211/",
                        name: "矢板市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tochigi/09213/",
                        name: "那須塩原市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tochigi/09384/",
                        name: "塩谷町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tochigi/09407/",
                        name: "那須町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/tokushima/week/",
        prefName: "徳島",
        subdivisions: [
            {
                name: "北部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokushima/36201/",
                        name: "徳島市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokushima/36202/",
                        name: "鳴門市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokushima/36203/",
                        name: "小松島市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokushima/36205/",
                        name: "吉野川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokushima/36206/",
                        name: "阿波市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokushima/36207/",
                        name: "美馬市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokushima/36208/",
                        name: "三好市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokushima/36321/",
                        name: "佐那河内村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokushima/36341/",
                        name: "石井町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokushima/36342/",
                        name: "神山町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokushima/36401/",
                        name: "松茂町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokushima/36402/",
                        name: "北島町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokushima/36403/",
                        name: "藍住町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokushima/36404/",
                        name: "板野町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokushima/36405/",
                        name: "上板町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokushima/36468/",
                        name: "つるぎ町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokushima/36489/",
                        name: "東みよし町"
                    },
                ]
            },
            {
                name: "南部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokushima/36204/",
                        name: "阿南市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokushima/36301/",
                        name: "勝浦町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokushima/36302/",
                        name: "上勝町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokushima/36368/",
                        name: "那賀町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokushima/36383/",
                        name: "牟岐町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokushima/36387/",
                        name: "美波町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokushima/36388/",
                        name: "海陽町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/tokyo/week/",
        prefName: "東京",
        subdivisions: [
            {
                name: "東京地方",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13101/",
                        name: "千代田区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13102/",
                        name: "中央区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13103/",
                        name: "港区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13104/",
                        name: "新宿区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13105/",
                        name: "文京区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13106/",
                        name: "台東区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13107/",
                        name: "墨田区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13108/",
                        name: "江東区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13109/",
                        name: "品川区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13110/",
                        name: "目黒区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13111/",
                        name: "大田区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13112/",
                        name: "世田谷区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13113/",
                        name: "渋谷区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13114/",
                        name: "中野区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13115/",
                        name: "杉並区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13116/",
                        name: "豊島区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13117/",
                        name: "北区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13118/",
                        name: "荒川区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13119/",
                        name: "板橋区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13120/",
                        name: "練馬区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13121/",
                        name: "足立区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13122/",
                        name: "葛飾区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13123/",
                        name: "江戸川区"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13201/",
                        name: "八王子市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13202/",
                        name: "立川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13203/",
                        name: "武蔵野市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13204/",
                        name: "三鷹市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13205/",
                        name: "青梅市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13206/",
                        name: "府中市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13207/",
                        name: "昭島市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13208/",
                        name: "調布市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13209/",
                        name: "町田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13210/",
                        name: "小金井市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13211/",
                        name: "小平市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13212/",
                        name: "日野市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13213/",
                        name: "東村山市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13214/",
                        name: "国分寺市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13215/",
                        name: "国立市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13218/",
                        name: "福生市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13219/",
                        name: "狛江市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13220/",
                        name: "東大和市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13221/",
                        name: "清瀬市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13222/",
                        name: "東久留米市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13223/",
                        name: "武蔵村山市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13224/",
                        name: "多摩市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13225/",
                        name: "稲城市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13227/",
                        name: "羽村市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13228/",
                        name: "あきる野市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13229/",
                        name: "西東京市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13303/",
                        name: "瑞穂町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13305/",
                        name: "日の出町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13307/",
                        name: "檜原村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13308/",
                        name: "奥多摩町"
                    },
                ]
            },
            {
                name: "伊豆諸島北部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13361/",
                        name: "大島町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13362/",
                        name: "利島村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13363/",
                        name: "新島村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13364/",
                        name: "神津島村"
                    },
                ]
            },
            {
                name: "伊豆諸島南部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13381/",
                        name: "三宅村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13382/",
                        name: "御蔵島村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13401/",
                        name: "八丈町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13402/",
                        name: "青ヶ島村"
                    },
                ]
            },
            {
                name: "小笠原諸島",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/tokyo/13421/",
                        name: "小笠原村"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/tottori/week/",
        prefName: "鳥取",
        subdivisions: [
            {
                name: "東部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/tottori/31201/",
                        name: "鳥取市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tottori/31302/",
                        name: "岩美町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tottori/31325/",
                        name: "若桜町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tottori/31328/",
                        name: "智頭町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tottori/31329/",
                        name: "八頭町"
                    },
                ]
            },
            {
                name: "中・西部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/tottori/31202/",
                        name: "米子市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tottori/31203/",
                        name: "倉吉市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tottori/31204/",
                        name: "境港市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tottori/31364/",
                        name: "三朝町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tottori/31370/",
                        name: "湯梨浜町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tottori/31371/",
                        name: "琴浦町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tottori/31372/",
                        name: "北栄町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tottori/31384/",
                        name: "日吉津村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tottori/31386/",
                        name: "大山町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tottori/31389/",
                        name: "南部町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tottori/31390/",
                        name: "伯耆町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tottori/31401/",
                        name: "日南町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tottori/31402/",
                        name: "日野町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/tottori/31403/",
                        name: "江府町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/toyama/week/",
        prefName: "富山",
        subdivisions: [
            {
                name: "東部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/toyama/16201/",
                        name: "富山市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/toyama/16204/",
                        name: "魚津市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/toyama/16206/",
                        name: "滑川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/toyama/16207/",
                        name: "黒部市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/toyama/16321/",
                        name: "舟橋村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/toyama/16322/",
                        name: "上市町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/toyama/16323/",
                        name: "立山町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/toyama/16342/",
                        name: "入善町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/toyama/16343/",
                        name: "朝日町"
                    },
                ]
            },
            {
                name: "西部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/toyama/16202/",
                        name: "高岡市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/toyama/16205/",
                        name: "氷見市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/toyama/16208/",
                        name: "砺波市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/toyama/16209/",
                        name: "小矢部市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/toyama/16210/",
                        name: "南砺市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/toyama/16211/",
                        name: "射水市"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/wakayama/week/",
        prefName: "和歌山",
        subdivisions: [
            {
                name: "北部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/wakayama/30201/",
                        name: "和歌山市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/wakayama/30202/",
                        name: "海南市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/wakayama/30203/",
                        name: "橋本市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/wakayama/30204/",
                        name: "有田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/wakayama/30205/",
                        name: "御坊市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/wakayama/30208/",
                        name: "紀の川市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/wakayama/30209/",
                        name: "岩出市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/wakayama/30304/",
                        name: "紀美野町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/wakayama/30341/",
                        name: "かつらぎ町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/wakayama/30343/",
                        name: "九度山町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/wakayama/30344/",
                        name: "高野町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/wakayama/30361/",
                        name: "湯浅町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/wakayama/30362/",
                        name: "広川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/wakayama/30366/",
                        name: "有田川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/wakayama/30381/",
                        name: "美浜町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/wakayama/30382/",
                        name: "日高町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/wakayama/30383/",
                        name: "由良町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/wakayama/30390/",
                        name: "印南町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/wakayama/30391/",
                        name: "みなべ町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/wakayama/30392/",
                        name: "日高川町"
                    },
                ]
            },
            {
                name: "南部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/wakayama/30206/",
                        name: "田辺市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/wakayama/30207/",
                        name: "新宮市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/wakayama/30401/",
                        name: "白浜町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/wakayama/30404/",
                        name: "上富田町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/wakayama/30406/",
                        name: "すさみ町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/wakayama/30421/",
                        name: "那智勝浦町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/wakayama/30422/",
                        name: "太地町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/wakayama/30424/",
                        name: "古座川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/wakayama/30427/",
                        name: "北山村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/wakayama/30428/",
                        name: "串本町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/yamagata/week/",
        prefName: "山形",
        subdivisions: [
            {
                name: "村山",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamagata/06201/",
                        name: "山形市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamagata/06206/",
                        name: "寒河江市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamagata/06207/",
                        name: "上山市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamagata/06208/",
                        name: "村山市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamagata/06210/",
                        name: "天童市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamagata/06211/",
                        name: "東根市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamagata/06212/",
                        name: "尾花沢市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamagata/06301/",
                        name: "山辺町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamagata/06302/",
                        name: "中山町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamagata/06321/",
                        name: "河北町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamagata/06322/",
                        name: "西川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamagata/06323/",
                        name: "朝日町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamagata/06324/",
                        name: "大江町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamagata/06341/",
                        name: "大石田町"
                    },
                ]
            },
            {
                name: "置賜",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamagata/06202/",
                        name: "米沢市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamagata/06209/",
                        name: "長井市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamagata/06213/",
                        name: "南陽市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamagata/06381/",
                        name: "高畠町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamagata/06382/",
                        name: "川西町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamagata/06401/",
                        name: "小国町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamagata/06402/",
                        name: "白鷹町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamagata/06403/",
                        name: "飯豊町"
                    },
                ]
            },
            {
                name: "庄内",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamagata/06203/",
                        name: "鶴岡市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamagata/06204/",
                        name: "酒田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamagata/06426/",
                        name: "三川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamagata/06428/",
                        name: "庄内町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamagata/06461/",
                        name: "遊佐町"
                    },
                ]
            },
            {
                name: "最上",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamagata/06205/",
                        name: "新庄市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamagata/06361/",
                        name: "金山町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamagata/06362/",
                        name: "最上町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamagata/06363/",
                        name: "舟形町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamagata/06364/",
                        name: "真室川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamagata/06365/",
                        name: "大蔵村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamagata/06366/",
                        name: "鮭川村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamagata/06367/",
                        name: "戸沢村"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/yamaguchi/week/",
        prefName: "山口",
        subdivisions: [
            {
                name: "西部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamaguchi/35201/",
                        name: "下関市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamaguchi/35202/",
                        name: "宇部市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamaguchi/35216/",
                        name: "山陽小野田市"
                    },
                ]
            },
            {
                name: "中部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamaguchi/35203/",
                        name: "山口市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamaguchi/35206/",
                        name: "防府市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamaguchi/35207/",
                        name: "下松市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamaguchi/35215/",
                        name: "周南市"
                    },
                ]
            },
            {
                name: "東部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamaguchi/35208/",
                        name: "岩国市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamaguchi/35210/",
                        name: "光市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamaguchi/35212/",
                        name: "柳井市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamaguchi/35305/",
                        name: "周防大島町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamaguchi/35321/",
                        name: "和木町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamaguchi/35341/",
                        name: "上関町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamaguchi/35343/",
                        name: "田布施町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamaguchi/35344/",
                        name: "平生町"
                    },
                ]
            },
            {
                name: "北部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamaguchi/35204/",
                        name: "萩市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamaguchi/35211/",
                        name: "長門市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamaguchi/35213/",
                        name: "美祢市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamaguchi/35502/",
                        name: "阿武町"
                    },
                ]
            }]
    },
    {
        prefWeekUrl: "https://weathernews.jp/onebox/tenki/yamanashi/week/",
        prefName: "山梨",
        subdivisions: [
            {
                name: "中・西部",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamanashi/19201/",
                        name: "甲府市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamanashi/19205/",
                        name: "山梨市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamanashi/19207/",
                        name: "韮崎市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamanashi/19208/",
                        name: "南アルプス市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamanashi/19209/",
                        name: "北杜市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamanashi/19210/",
                        name: "甲斐市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamanashi/19211/",
                        name: "笛吹市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamanashi/19213/",
                        name: "甲州市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamanashi/19214/",
                        name: "中央市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamanashi/19346/",
                        name: "市川三郷町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamanashi/19364/",
                        name: "早川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamanashi/19365/",
                        name: "身延町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamanashi/19366/",
                        name: "南部町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamanashi/19368/",
                        name: "富士川町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamanashi/19384/",
                        name: "昭和町"
                    },
                ]
            },
            {
                name: "東部・富士五湖",
                cities: [
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamanashi/19202/",
                        name: "富士吉田市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamanashi/19204/",
                        name: "都留市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamanashi/19206/",
                        name: "大月市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamanashi/19212/",
                        name: "上野原市"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamanashi/19422/",
                        name: "道志村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamanashi/19423/",
                        name: "西桂町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamanashi/19424/",
                        name: "忍野村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamanashi/19425/",
                        name: "山中湖村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamanashi/19429/",
                        name: "鳴沢村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamanashi/19430/",
                        name: "富士河口湖町"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamanashi/19442/",
                        name: "小菅村"
                    },
                    {
                        url: "https://weathernews.jp/onebox/tenki/yamanashi/19443/",
                        name: "丹波山村"
                    },
                ]
            }
        ]
    }
];