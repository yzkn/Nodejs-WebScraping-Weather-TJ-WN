// Copyright (c) 2024 YA-androidapp(https://github.com/yzkn) All rights reserved.

const tj_cities = [
    {
        prefName: "愛知県",
        subdivisions: [
            {
                name: "西部(名古屋)",
                cities: [
                    { url: "https://tenki.jp/forecast/5/26/5110/23100/", name: "名古屋市" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23101/", name: "名古屋市千種区" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23102/", name: "名古屋市東区" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23103/", name: "名古屋市北区" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23104/", name: "名古屋市西区" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23105/", name: "名古屋市中村区" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23106/", name: "名古屋市中区" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23107/", name: "名古屋市昭和区" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23108/", name: "名古屋市瑞穂区" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23109/", name: "名古屋市熱田区" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23110/", name: "名古屋市中川区" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23111/", name: "名古屋市港区" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23112/", name: "名古屋市南区" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23113/", name: "名古屋市守山区" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23114/", name: "名古屋市緑区" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23115/", name: "名古屋市名東区" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23116/", name: "名古屋市天白区" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23202/", name: "岡崎市" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23203/", name: "一宮市" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23204/", name: "瀬戸市" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23205/", name: "半田市" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23206/", name: "春日井市" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23208/", name: "津島市" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23209/", name: "碧南市" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23210/", name: "刈谷市" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23211/", name: "豊田市" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23212/", name: "安城市" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23213/", name: "西尾市" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23215/", name: "犬山市" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23216/", name: "常滑市" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23217/", name: "江南市" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23219/", name: "小牧市" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23220/", name: "稲沢市" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23222/", name: "東海市" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23223/", name: "大府市" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23224/", name: "知多市" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23225/", name: "知立市" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23226/", name: "尾張旭市" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23227/", name: "高浜市" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23228/", name: "岩倉市" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23229/", name: "豊明市" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23230/", name: "日進市" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23232/", name: "愛西市" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23233/", name: "清須市" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23234/", name: "北名古屋市" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23235/", name: "弥富市" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23236/", name: "みよし市" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23237/", name: "あま市" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23238/", name: "長久手市" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23302/", name: "東郷町" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23342/", name: "豊山町" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23361/", name: "大口町" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23362/", name: "扶桑町" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23424/", name: "大治町" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23425/", name: "蟹江町" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23427/", name: "飛島村" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23441/", name: "阿久比町" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23442/", name: "東浦町" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23445/", name: "南知多町" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23446/", name: "美浜町" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23447/", name: "武豊町" },
                    { url: "https://tenki.jp/forecast/5/26/5110/23501/", name: "幸田町" },
                ]
            },
            {
                name: "東部(豊橋)",
                cities: [
                    { url: "https://tenki.jp/forecast/5/26/5120/23201/", name: "豊橋市" },
                    { url: "https://tenki.jp/forecast/5/26/5120/23207/", name: "豊川市" },
                    { url: "https://tenki.jp/forecast/5/26/5120/23214/", name: "蒲郡市" },
                    { url: "https://tenki.jp/forecast/5/26/5120/23221/", name: "新城市" },
                    { url: "https://tenki.jp/forecast/5/26/5120/23231/", name: "田原市" },
                    { url: "https://tenki.jp/forecast/5/26/5120/23561/", name: "設楽町" },
                    { url: "https://tenki.jp/forecast/5/26/5120/23562/", name: "東栄町" },
                    { url: "https://tenki.jp/forecast/5/26/5120/23563/", name: "豊根村" },
                ]
            },
        ]
    },
    {
        prefName: "愛媛県",
        subdivisions: [
            {
                name: "中予(松山)",
                cities: [
                    { url: "https://tenki.jp/forecast/8/41/7310/38201/", name: "松山市" },
                    { url: "https://tenki.jp/forecast/8/41/7310/38210/", name: "伊予市" },
                    { url: "https://tenki.jp/forecast/8/41/7310/38215/", name: "東温市" },
                    { url: "https://tenki.jp/forecast/8/41/7310/38386/", name: "久万高原町" },
                    { url: "https://tenki.jp/forecast/8/41/7310/38401/", name: "松前町" },
                    { url: "https://tenki.jp/forecast/8/41/7310/38402/", name: "砥部町" },
                ]
            },
            {
                name: "東予(新居浜)",
                cities: [
                    { url: "https://tenki.jp/forecast/8/41/7320/38202/", name: "今治市" },
                    { url: "https://tenki.jp/forecast/8/41/7320/38205/", name: "新居浜市" },
                    { url: "https://tenki.jp/forecast/8/41/7320/38206/", name: "西条市" },
                    { url: "https://tenki.jp/forecast/8/41/7320/38213/", name: "四国中央市" },
                    { url: "https://tenki.jp/forecast/8/41/7320/38356/", name: "上島町" },
                ]
            },
            {
                name: "南予(宇和島)",
                cities: [
                    { url: "https://tenki.jp/forecast/8/41/7330/38203/", name: "宇和島市" },
                    { url: "https://tenki.jp/forecast/8/41/7330/38204/", name: "八幡浜市" },
                    { url: "https://tenki.jp/forecast/8/41/7330/38207/", name: "大洲市" },
                    { url: "https://tenki.jp/forecast/8/41/7330/38214/", name: "西予市" },
                    { url: "https://tenki.jp/forecast/8/41/7330/38422/", name: "内子町" },
                    { url: "https://tenki.jp/forecast/8/41/7330/38442/", name: "伊方町" },
                    { url: "https://tenki.jp/forecast/8/41/7330/38484/", name: "松野町" },
                    { url: "https://tenki.jp/forecast/8/41/7330/38488/", name: "鬼北町" },
                    { url: "https://tenki.jp/forecast/8/41/7330/38506/", name: "愛南町" },
                ]
            },
        ]
    },
    {
        prefName: "茨城県",
        subdivisions: [
            {
                name: "北部(水戸)",
                cities: [
                    { url: "https://tenki.jp/forecast/3/11/4010/8201/", name: "水戸市" },
                    { url: "https://tenki.jp/forecast/3/11/4010/8202/", name: "日立市" },
                    { url: "https://tenki.jp/forecast/3/11/4010/8212/", name: "常陸太田市" },
                    { url: "https://tenki.jp/forecast/3/11/4010/8214/", name: "高萩市" },
                    { url: "https://tenki.jp/forecast/3/11/4010/8215/", name: "北茨城市" },
                    { url: "https://tenki.jp/forecast/3/11/4010/8216/", name: "笠間市" },
                    { url: "https://tenki.jp/forecast/3/11/4010/8221/", name: "ひたちなか市" },
                    { url: "https://tenki.jp/forecast/3/11/4010/8225/", name: "常陸大宮市" },
                    { url: "https://tenki.jp/forecast/3/11/4010/8226/", name: "那珂市" },
                    { url: "https://tenki.jp/forecast/3/11/4010/8236/", name: "小美玉市" },
                    { url: "https://tenki.jp/forecast/3/11/4010/8302/", name: "茨城町" },
                    { url: "https://tenki.jp/forecast/3/11/4010/8309/", name: "大洗町" },
                    { url: "https://tenki.jp/forecast/3/11/4010/8310/", name: "城里町" },
                    { url: "https://tenki.jp/forecast/3/11/4010/8341/", name: "東海村" },
                    { url: "https://tenki.jp/forecast/3/11/4010/8364/", name: "大子町" },
                ]
            },
            {
                name: "南部(土浦)",
                cities: [
                    { url: "https://tenki.jp/forecast/3/11/4020/8203/", name: "土浦市" },
                    { url: "https://tenki.jp/forecast/3/11/4020/8204/", name: "古河市" },
                    { url: "https://tenki.jp/forecast/3/11/4020/8205/", name: "石岡市" },
                    { url: "https://tenki.jp/forecast/3/11/4020/8207/", name: "結城市" },
                    { url: "https://tenki.jp/forecast/3/11/4020/8208/", name: "龍ケ崎市" },
                    { url: "https://tenki.jp/forecast/3/11/4020/8210/", name: "下妻市" },
                    { url: "https://tenki.jp/forecast/3/11/4020/8211/", name: "常総市" },
                    { url: "https://tenki.jp/forecast/3/11/4020/8217/", name: "取手市" },
                    { url: "https://tenki.jp/forecast/3/11/4020/8219/", name: "牛久市" },
                    { url: "https://tenki.jp/forecast/3/11/4020/8220/", name: "つくば市" },
                    { url: "https://tenki.jp/forecast/3/11/4020/8222/", name: "鹿嶋市" },
                    { url: "https://tenki.jp/forecast/3/11/4020/8223/", name: "潮来市" },
                    { url: "https://tenki.jp/forecast/3/11/4020/8224/", name: "守谷市" },
                    { url: "https://tenki.jp/forecast/3/11/4020/8227/", name: "筑西市" },
                    { url: "https://tenki.jp/forecast/3/11/4020/8228/", name: "坂東市" },
                    { url: "https://tenki.jp/forecast/3/11/4020/8229/", name: "稲敷市" },
                    { url: "https://tenki.jp/forecast/3/11/4020/8230/", name: "かすみがうら市" },
                    { url: "https://tenki.jp/forecast/3/11/4020/8231/", name: "桜川市" },
                    { url: "https://tenki.jp/forecast/3/11/4020/8232/", name: "神栖市" },
                    { url: "https://tenki.jp/forecast/3/11/4020/8233/", name: "行方市" },
                    { url: "https://tenki.jp/forecast/3/11/4020/8234/", name: "鉾田市" },
                    { url: "https://tenki.jp/forecast/3/11/4020/8235/", name: "つくばみらい市" },
                    { url: "https://tenki.jp/forecast/3/11/4020/8442/", name: "美浦村" },
                    { url: "https://tenki.jp/forecast/3/11/4020/8443/", name: "阿見町" },
                    { url: "https://tenki.jp/forecast/3/11/4020/8447/", name: "河内町" },
                    { url: "https://tenki.jp/forecast/3/11/4020/8521/", name: "八千代町" },
                    { url: "https://tenki.jp/forecast/3/11/4020/8542/", name: "五霞町" },
                    { url: "https://tenki.jp/forecast/3/11/4020/8546/", name: "境町" },
                    { url: "https://tenki.jp/forecast/3/11/4020/8564/", name: "利根町" },
                ]
            },
        ]
    },
    {
        prefName: "岡山県",
        subdivisions: [
            {
                name: "南部(岡山)",
                cities: [
                    { url: "https://tenki.jp/forecast/7/36/6610/33100/", name: "岡山市" },
                    { url: "https://tenki.jp/forecast/7/36/6610/33101/", name: "岡山市北区" },
                    { url: "https://tenki.jp/forecast/7/36/6610/33102/", name: "岡山市中区" },
                    { url: "https://tenki.jp/forecast/7/36/6610/33103/", name: "岡山市東区" },
                    { url: "https://tenki.jp/forecast/7/36/6610/33104/", name: "岡山市南区" },
                    { url: "https://tenki.jp/forecast/7/36/6610/33202/", name: "倉敷市" },
                    { url: "https://tenki.jp/forecast/7/36/6610/33204/", name: "玉野市" },
                    { url: "https://tenki.jp/forecast/7/36/6610/33205/", name: "笠岡市" },
                    { url: "https://tenki.jp/forecast/7/36/6610/33207/", name: "井原市" },
                    { url: "https://tenki.jp/forecast/7/36/6610/33208/", name: "総社市" },
                    { url: "https://tenki.jp/forecast/7/36/6610/33209/", name: "高梁市" },
                    { url: "https://tenki.jp/forecast/7/36/6610/33211/", name: "備前市" },
                    { url: "https://tenki.jp/forecast/7/36/6610/33212/", name: "瀬戸内市" },
                    { url: "https://tenki.jp/forecast/7/36/6610/33213/", name: "赤磐市" },
                    { url: "https://tenki.jp/forecast/7/36/6610/33216/", name: "浅口市" },
                    { url: "https://tenki.jp/forecast/7/36/6610/33346/", name: "和気町" },
                    { url: "https://tenki.jp/forecast/7/36/6610/33423/", name: "早島町" },
                    { url: "https://tenki.jp/forecast/7/36/6610/33445/", name: "里庄町" },
                    { url: "https://tenki.jp/forecast/7/36/6610/33461/", name: "矢掛町" },
                    { url: "https://tenki.jp/forecast/7/36/6610/33681/", name: "吉備中央町" },
                ]
            },
            {
                name: "北部(津山)",
                cities: [
                    { url: "https://tenki.jp/forecast/7/36/6620/33203/", name: "津山市" },
                    { url: "https://tenki.jp/forecast/7/36/6620/33210/", name: "新見市" },
                    { url: "https://tenki.jp/forecast/7/36/6620/33214/", name: "真庭市" },
                    { url: "https://tenki.jp/forecast/7/36/6620/33215/", name: "美作市" },
                    { url: "https://tenki.jp/forecast/7/36/6620/33586/", name: "新庄村" },
                    { url: "https://tenki.jp/forecast/7/36/6620/33606/", name: "鏡野町" },
                    { url: "https://tenki.jp/forecast/7/36/6620/33622/", name: "勝央町" },
                    { url: "https://tenki.jp/forecast/7/36/6620/33623/", name: "奈義町" },
                    { url: "https://tenki.jp/forecast/7/36/6620/33643/", name: "西粟倉村" },
                    { url: "https://tenki.jp/forecast/7/36/6620/33663/", name: "久米南町" },
                    { url: "https://tenki.jp/forecast/7/36/6620/33666/", name: "美咲町" },
                ]
            },
        ]
    },
    {
        prefName: "沖縄県",
        subdivisions: [
            {
                name: "本島中南部(那覇)",
                cities: [
                    { url: "https://tenki.jp/forecast/10/50/9110/47201/", name: "那覇市" },
                    { url: "https://tenki.jp/forecast/10/50/9110/47205/", name: "宜野湾市" },
                    { url: "https://tenki.jp/forecast/10/50/9110/47208/", name: "浦添市" },
                    { url: "https://tenki.jp/forecast/10/50/9110/47210/", name: "糸満市" },
                    { url: "https://tenki.jp/forecast/10/50/9110/47211/", name: "沖縄市" },
                    { url: "https://tenki.jp/forecast/10/50/9110/47212/", name: "豊見城市" },
                    { url: "https://tenki.jp/forecast/10/50/9110/47213/", name: "うるま市" },
                    { url: "https://tenki.jp/forecast/10/50/9110/47215/", name: "南城市" },
                    { url: "https://tenki.jp/forecast/10/50/9110/47324/", name: "読谷村" },
                    { url: "https://tenki.jp/forecast/10/50/9110/47325/", name: "嘉手納町" },
                    { url: "https://tenki.jp/forecast/10/50/9110/47326/", name: "北谷町" },
                    { url: "https://tenki.jp/forecast/10/50/9110/47327/", name: "北中城村" },
                    { url: "https://tenki.jp/forecast/10/50/9110/47328/", name: "中城村" },
                    { url: "https://tenki.jp/forecast/10/50/9110/47329/", name: "西原町" },
                    { url: "https://tenki.jp/forecast/10/50/9110/47348/", name: "与那原町" },
                    { url: "https://tenki.jp/forecast/10/50/9110/47350/", name: "南風原町" },
                    { url: "https://tenki.jp/forecast/10/50/9110/47353/", name: "渡嘉敷村" },
                    { url: "https://tenki.jp/forecast/10/50/9110/47354/", name: "座間味村" },
                    { url: "https://tenki.jp/forecast/10/50/9110/47355/", name: "粟国村" },
                    { url: "https://tenki.jp/forecast/10/50/9110/47356/", name: "渡名喜村" },
                    { url: "https://tenki.jp/forecast/10/50/9110/47362/", name: "八重瀬町" },
                ]
            },
            {
                name: "本島北部(名護)",
                cities: [
                    { url: "https://tenki.jp/forecast/10/50/9120/47209/", name: "名護市" },
                    { url: "https://tenki.jp/forecast/10/50/9120/47301/", name: "国頭村" },
                    { url: "https://tenki.jp/forecast/10/50/9120/47302/", name: "大宜味村" },
                    { url: "https://tenki.jp/forecast/10/50/9120/47303/", name: "東村" },
                    { url: "https://tenki.jp/forecast/10/50/9120/47306/", name: "今帰仁村" },
                    { url: "https://tenki.jp/forecast/10/50/9120/47308/", name: "本部町" },
                    { url: "https://tenki.jp/forecast/10/50/9120/47311/", name: "恩納村" },
                    { url: "https://tenki.jp/forecast/10/50/9120/47313/", name: "宜野座村" },
                    { url: "https://tenki.jp/forecast/10/50/9120/47314/", name: "金武町" },
                    { url: "https://tenki.jp/forecast/10/50/9120/47315/", name: "伊江村" },
                    { url: "https://tenki.jp/forecast/10/50/9120/47359/", name: "伊平屋村" },
                    { url: "https://tenki.jp/forecast/10/50/9120/47360/", name: "伊是名村" },
                ]
            },
            {
                name: "久米島(久米島)",
                cities: [
                    { url: "https://tenki.jp/forecast/10/50/9130/47361/", name: "久米島町" },
                ]
            },
            {
                name: "大東島地方(南大東)",
                cities: [
                    { url: "https://tenki.jp/forecast/10/50/9200/47357/", name: "南大東村" },
                    { url: "https://tenki.jp/forecast/10/50/9200/47358/", name: "北大東村" },
                ]
            },
            {
                name: "宮古島地方(宮古島)",
                cities: [
                    { url: "https://tenki.jp/forecast/10/50/9300/47214/", name: "宮古島市" },
                    { url: "https://tenki.jp/forecast/10/50/9300/47375/", name: "多良間村" },
                ]
            },
            {
                name: "石垣島地方(石垣島)",
                cities: [
                    { url: "https://tenki.jp/forecast/10/50/9410/47207/", name: "石垣市" },
                    { url: "https://tenki.jp/forecast/10/50/9410/47381/", name: "竹富町" },
                ]
            },
            {
                name: "与那国島地方(与那国島)",
                cities: [
                    { url: "https://tenki.jp/forecast/10/50/9420/47382/", name: "与那国町" },
                ]
            },
        ]
    },
    {
        prefName: "岩手県",
        subdivisions: [
            {
                name: "内陸(盛岡)",
                cities: [
                    { url: "https://tenki.jp/forecast/2/6/3310/3201/", name: "盛岡市" },
                    { url: "https://tenki.jp/forecast/2/6/3310/3205/", name: "花巻市" },
                    { url: "https://tenki.jp/forecast/2/6/3310/3206/", name: "北上市" },
                    { url: "https://tenki.jp/forecast/2/6/3310/3208/", name: "遠野市" },
                    { url: "https://tenki.jp/forecast/2/6/3310/3209/", name: "一関市" },
                    { url: "https://tenki.jp/forecast/2/6/3310/3213/", name: "二戸市" },
                    { url: "https://tenki.jp/forecast/2/6/3310/3214/", name: "八幡平市" },
                    { url: "https://tenki.jp/forecast/2/6/3310/3215/", name: "奥州市" },
                    { url: "https://tenki.jp/forecast/2/6/3310/3216/", name: "滝沢市" },
                    { url: "https://tenki.jp/forecast/2/6/3310/3301/", name: "雫石町" },
                    { url: "https://tenki.jp/forecast/2/6/3310/3302/", name: "葛巻町" },
                    { url: "https://tenki.jp/forecast/2/6/3310/3303/", name: "岩手町" },
                    { url: "https://tenki.jp/forecast/2/6/3310/3321/", name: "紫波町" },
                    { url: "https://tenki.jp/forecast/2/6/3310/3322/", name: "矢巾町" },
                    { url: "https://tenki.jp/forecast/2/6/3310/3366/", name: "西和賀町" },
                    { url: "https://tenki.jp/forecast/2/6/3310/3381/", name: "金ケ崎町" },
                    { url: "https://tenki.jp/forecast/2/6/3310/3402/", name: "平泉町" },
                    { url: "https://tenki.jp/forecast/2/6/3310/3501/", name: "軽米町" },
                    { url: "https://tenki.jp/forecast/2/6/3310/3506/", name: "九戸村" },
                    { url: "https://tenki.jp/forecast/2/6/3310/3524/", name: "一戸町" },
                ]
            },
            {
                name: "沿岸北部(宮古)",
                cities: [
                    { url: "https://tenki.jp/forecast/2/6/3320/3202/", name: "宮古市" },
                    { url: "https://tenki.jp/forecast/2/6/3320/3207/", name: "久慈市" },
                    { url: "https://tenki.jp/forecast/2/6/3320/3482/", name: "山田町" },
                    { url: "https://tenki.jp/forecast/2/6/3320/3483/", name: "岩泉町" },
                    { url: "https://tenki.jp/forecast/2/6/3320/3484/", name: "田野畑村" },
                    { url: "https://tenki.jp/forecast/2/6/3320/3485/", name: "普代村" },
                    { url: "https://tenki.jp/forecast/2/6/3320/3503/", name: "野田村" },
                    { url: "https://tenki.jp/forecast/2/6/3320/3507/", name: "洋野町" },
                ]
            },
            {
                name: "沿岸南部(大船渡)",
                cities: [
                    { url: "https://tenki.jp/forecast/2/6/3330/3203/", name: "大船渡市" },
                    { url: "https://tenki.jp/forecast/2/6/3330/3210/", name: "陸前高田市" },
                    { url: "https://tenki.jp/forecast/2/6/3330/3211/", name: "釜石市" },
                    { url: "https://tenki.jp/forecast/2/6/3330/3441/", name: "住田町" },
                    { url: "https://tenki.jp/forecast/2/6/3330/3461/", name: "大槌町" },
                ]
            },
        ]
    },
    {
        prefName: "岐阜県",
        subdivisions: [
            {
                name: "美濃地方(岐阜)",
                cities: [
                    { url: "https://tenki.jp/forecast/5/24/5210/21201/", name: "岐阜市" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21202/", name: "大垣市" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21204/", name: "多治見市" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21205/", name: "関市" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21206/", name: "中津川市" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21207/", name: "美濃市" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21208/", name: "瑞浪市" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21209/", name: "羽島市" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21210/", name: "恵那市" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21211/", name: "美濃加茂市" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21212/", name: "土岐市" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21213/", name: "各務原市" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21214/", name: "可児市" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21215/", name: "山県市" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21216/", name: "瑞穂市" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21218/", name: "本巣市" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21219/", name: "郡上市" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21221/", name: "海津市" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21302/", name: "岐南町" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21303/", name: "笠松町" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21341/", name: "養老町" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21361/", name: "垂井町" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21362/", name: "関ケ原町" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21381/", name: "神戸町" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21382/", name: "輪之内町" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21383/", name: "安八町" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21401/", name: "揖斐川町" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21403/", name: "大野町" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21404/", name: "池田町" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21421/", name: "北方町" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21501/", name: "坂祝町" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21502/", name: "富加町" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21503/", name: "川辺町" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21504/", name: "七宗町" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21505/", name: "八百津町" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21506/", name: "白川町" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21507/", name: "東白川村" },
                    { url: "https://tenki.jp/forecast/5/24/5210/21521/", name: "御嵩町" },
                ]
            },
            {
                name: "飛騨地方(高山)",
                cities: [
                    { url: "https://tenki.jp/forecast/5/24/5220/21203/", name: "高山市" },
                    { url: "https://tenki.jp/forecast/5/24/5220/21217/", name: "飛騨市" },
                    { url: "https://tenki.jp/forecast/5/24/5220/21220/", name: "下呂市" },
                    { url: "https://tenki.jp/forecast/5/24/5220/21604/", name: "白川村" },
                ]
            },
        ]
    },
    {
        prefName: "宮崎県",
        subdivisions: [
            {
                name: "南部平野部(宮崎)",
                cities: [
                    { url: "https://tenki.jp/forecast/9/48/8710/45201/", name: "宮崎市" },
                    { url: "https://tenki.jp/forecast/9/48/8710/45204/", name: "日南市" },
                    { url: "https://tenki.jp/forecast/9/48/8710/45207/", name: "串間市" },
                    { url: "https://tenki.jp/forecast/9/48/8710/45382/", name: "国富町" },
                    { url: "https://tenki.jp/forecast/9/48/8710/45383/", name: "綾町" },
                ]
            },
            {
                name: "北部平野部(延岡)",
                cities: [
                    { url: "https://tenki.jp/forecast/9/48/8720/45203/", name: "延岡市" },
                    { url: "https://tenki.jp/forecast/9/48/8720/45206/", name: "日向市" },
                    { url: "https://tenki.jp/forecast/9/48/8720/45208/", name: "西都市" },
                    { url: "https://tenki.jp/forecast/9/48/8720/45401/", name: "高鍋町" },
                    { url: "https://tenki.jp/forecast/9/48/8720/45402/", name: "新富町" },
                    { url: "https://tenki.jp/forecast/9/48/8720/45404/", name: "木城町" },
                    { url: "https://tenki.jp/forecast/9/48/8720/45405/", name: "川南町" },
                    { url: "https://tenki.jp/forecast/9/48/8720/45406/", name: "都農町" },
                    { url: "https://tenki.jp/forecast/9/48/8720/45421/", name: "門川町" },
                ]
            },
            {
                name: "南部山沿い(都城)",
                cities: [
                    { url: "https://tenki.jp/forecast/9/48/8730/45202/", name: "都城市" },
                    { url: "https://tenki.jp/forecast/9/48/8730/45205/", name: "小林市" },
                    { url: "https://tenki.jp/forecast/9/48/8730/45209/", name: "えびの市" },
                    { url: "https://tenki.jp/forecast/9/48/8730/45341/", name: "三股町" },
                    { url: "https://tenki.jp/forecast/9/48/8730/45361/", name: "高原町" },
                ]
            },
            {
                name: "北部山沿い(高千穂)",
                cities: [
                    { url: "https://tenki.jp/forecast/9/48/8740/45403/", name: "西米良村" },
                    { url: "https://tenki.jp/forecast/9/48/8740/45429/", name: "諸塚村" },
                    { url: "https://tenki.jp/forecast/9/48/8740/45430/", name: "椎葉村" },
                    { url: "https://tenki.jp/forecast/9/48/8740/45431/", name: "美郷町" },
                    { url: "https://tenki.jp/forecast/9/48/8740/45441/", name: "高千穂町" },
                    { url: "https://tenki.jp/forecast/9/48/8740/45442/", name: "日之影町" },
                    { url: "https://tenki.jp/forecast/9/48/8740/45443/", name: "五ヶ瀬町" },
                ]
            },
        ]
    },
    {
        prefName: "宮城県",
        subdivisions: [
            {
                name: "東部(仙台)",
                cities: [
                    { url: "https://tenki.jp/forecast/2/7/3410/4100/", name: "仙台市" },
                    { url: "https://tenki.jp/forecast/2/7/3410/4101/", name: "仙台市青葉区" },
                    { url: "https://tenki.jp/forecast/2/7/3410/4102/", name: "仙台市宮城野区" },
                    { url: "https://tenki.jp/forecast/2/7/3410/4103/", name: "仙台市若林区" },
                    { url: "https://tenki.jp/forecast/2/7/3410/4104/", name: "仙台市太白区" },
                    { url: "https://tenki.jp/forecast/2/7/3410/4202/", name: "石巻市" },
                    { url: "https://tenki.jp/forecast/2/7/3410/4203/", name: "塩竈市" },
                    { url: "https://tenki.jp/forecast/2/7/3410/4205/", name: "気仙沼市" },
                    { url: "https://tenki.jp/forecast/2/7/3410/4207/", name: "名取市" },
                    { url: "https://tenki.jp/forecast/2/7/3410/4208/", name: "角田市" },
                    { url: "https://tenki.jp/forecast/2/7/3410/4209/", name: "多賀城市" },
                    { url: "https://tenki.jp/forecast/2/7/3410/4211/", name: "岩沼市" },
                    { url: "https://tenki.jp/forecast/2/7/3410/4212/", name: "登米市" },
                    { url: "https://tenki.jp/forecast/2/7/3410/4213/", name: "栗原市" },
                    { url: "https://tenki.jp/forecast/2/7/3410/4214/", name: "東松島市" },
                    { url: "https://tenki.jp/forecast/2/7/3410/4215/", name: "大崎市" },
                    { url: "https://tenki.jp/forecast/2/7/3410/4216/", name: "富谷市" },
                    { url: "https://tenki.jp/forecast/2/7/3410/4321/", name: "大河原町" },
                    { url: "https://tenki.jp/forecast/2/7/3410/4322/", name: "村田町" },
                    { url: "https://tenki.jp/forecast/2/7/3410/4323/", name: "柴田町" },
                    { url: "https://tenki.jp/forecast/2/7/3410/4341/", name: "丸森町" },
                    { url: "https://tenki.jp/forecast/2/7/3410/4361/", name: "亘理町" },
                    { url: "https://tenki.jp/forecast/2/7/3410/4362/", name: "山元町" },
                    { url: "https://tenki.jp/forecast/2/7/3410/4401/", name: "松島町" },
                    { url: "https://tenki.jp/forecast/2/7/3410/4404/", name: "七ヶ浜町" },
                    { url: "https://tenki.jp/forecast/2/7/3410/4406/", name: "利府町" },
                    { url: "https://tenki.jp/forecast/2/7/3410/4422/", name: "大郷町" },
                    { url: "https://tenki.jp/forecast/2/7/3410/4501/", name: "涌谷町" },
                    { url: "https://tenki.jp/forecast/2/7/3410/4505/", name: "美里町" },
                    { url: "https://tenki.jp/forecast/2/7/3410/4581/", name: "女川町" },
                    { url: "https://tenki.jp/forecast/2/7/3410/4606/", name: "南三陸町" },
                ]
            },
            {
                name: "西部(白石)",
                cities: [
                    { url: "https://tenki.jp/forecast/2/7/3420/4105/", name: "仙台市泉区" },
                    { url: "https://tenki.jp/forecast/2/7/3420/4206/", name: "白石市" },
                    { url: "https://tenki.jp/forecast/2/7/3420/4301/", name: "蔵王町" },
                    { url: "https://tenki.jp/forecast/2/7/3420/4302/", name: "七ヶ宿町" },
                    { url: "https://tenki.jp/forecast/2/7/3420/4324/", name: "川崎町" },
                    { url: "https://tenki.jp/forecast/2/7/3420/4421/", name: "大和町" },
                    { url: "https://tenki.jp/forecast/2/7/3420/4424/", name: "大衡村" },
                    { url: "https://tenki.jp/forecast/2/7/3420/4444/", name: "色麻町" },
                    { url: "https://tenki.jp/forecast/2/7/3420/4445/", name: "加美町" },
                ]
            },
        ]
    },
    {
        prefName: "京都府",
        subdivisions: [
            {
                name: "南部(京都)",
                cities: [
                    { url: "https://tenki.jp/forecast/6/29/6110/26100/", name: "京都市" },
                    { url: "https://tenki.jp/forecast/6/29/6110/26101/", name: "京都市北区" },
                    { url: "https://tenki.jp/forecast/6/29/6110/26102/", name: "京都市上京区" },
                    { url: "https://tenki.jp/forecast/6/29/6110/26103/", name: "京都市左京区" },
                    { url: "https://tenki.jp/forecast/6/29/6110/26104/", name: "京都市中京区" },
                    { url: "https://tenki.jp/forecast/6/29/6110/26105/", name: "京都市東山区" },
                    { url: "https://tenki.jp/forecast/6/29/6110/26106/", name: "京都市下京区" },
                    { url: "https://tenki.jp/forecast/6/29/6110/26107/", name: "京都市南区" },
                    { url: "https://tenki.jp/forecast/6/29/6110/26108/", name: "京都市右京区" },
                    { url: "https://tenki.jp/forecast/6/29/6110/26109/", name: "京都市伏見区" },
                    { url: "https://tenki.jp/forecast/6/29/6110/26110/", name: "京都市山科区" },
                    { url: "https://tenki.jp/forecast/6/29/6110/26111/", name: "京都市西京区" },
                    { url: "https://tenki.jp/forecast/6/29/6110/26204/", name: "宇治市" },
                    { url: "https://tenki.jp/forecast/6/29/6110/26206/", name: "亀岡市" },
                    { url: "https://tenki.jp/forecast/6/29/6110/26207/", name: "城陽市" },
                    { url: "https://tenki.jp/forecast/6/29/6110/26208/", name: "向日市" },
                    { url: "https://tenki.jp/forecast/6/29/6110/26209/", name: "長岡京市" },
                    { url: "https://tenki.jp/forecast/6/29/6110/26210/", name: "八幡市" },
                    { url: "https://tenki.jp/forecast/6/29/6110/26211/", name: "京田辺市" },
                    { url: "https://tenki.jp/forecast/6/29/6110/26213/", name: "南丹市" },
                    { url: "https://tenki.jp/forecast/6/29/6110/26214/", name: "木津川市" },
                    { url: "https://tenki.jp/forecast/6/29/6110/26303/", name: "大山崎町" },
                    { url: "https://tenki.jp/forecast/6/29/6110/26322/", name: "久御山町" },
                    { url: "https://tenki.jp/forecast/6/29/6110/26343/", name: "井手町" },
                    { url: "https://tenki.jp/forecast/6/29/6110/26344/", name: "宇治田原町" },
                    { url: "https://tenki.jp/forecast/6/29/6110/26364/", name: "笠置町" },
                    { url: "https://tenki.jp/forecast/6/29/6110/26365/", name: "和束町" },
                    { url: "https://tenki.jp/forecast/6/29/6110/26366/", name: "精華町" },
                    { url: "https://tenki.jp/forecast/6/29/6110/26367/", name: "南山城村" },
                    { url: "https://tenki.jp/forecast/6/29/6110/26407/", name: "京丹波町" },
                ]
            },
            {
                name: "北部(舞鶴)",
                cities: [
                    { url: "https://tenki.jp/forecast/6/29/6120/26201/", name: "福知山市" },
                    { url: "https://tenki.jp/forecast/6/29/6120/26202/", name: "舞鶴市" },
                    { url: "https://tenki.jp/forecast/6/29/6120/26203/", name: "綾部市" },
                    { url: "https://tenki.jp/forecast/6/29/6120/26205/", name: "宮津市" },
                    { url: "https://tenki.jp/forecast/6/29/6120/26212/", name: "京丹後市" },
                    { url: "https://tenki.jp/forecast/6/29/6120/26463/", name: "伊根町" },
                    { url: "https://tenki.jp/forecast/6/29/6120/26465/", name: "与謝野町" },
                ]
            },
        ]
    },
    {
        prefName: "熊本県",
        subdivisions: [
            {
                name: "熊本地方(熊本)",
                cities: [
                    { url: "https://tenki.jp/forecast/9/46/8610/43100/", name: "熊本市" },
                    { url: "https://tenki.jp/forecast/9/46/8610/43101/", name: "熊本市中央区" },
                    { url: "https://tenki.jp/forecast/9/46/8610/43102/", name: "熊本市東区" },
                    { url: "https://tenki.jp/forecast/9/46/8610/43103/", name: "熊本市西区" },
                    { url: "https://tenki.jp/forecast/9/46/8610/43104/", name: "熊本市南区" },
                    { url: "https://tenki.jp/forecast/9/46/8610/43105/", name: "熊本市北区" },
                    { url: "https://tenki.jp/forecast/9/46/8610/43202/", name: "八代市" },
                    { url: "https://tenki.jp/forecast/9/46/8610/43204/", name: "荒尾市" },
                    { url: "https://tenki.jp/forecast/9/46/8610/43206/", name: "玉名市" },
                    { url: "https://tenki.jp/forecast/9/46/8610/43208/", name: "山鹿市" },
                    { url: "https://tenki.jp/forecast/9/46/8610/43210/", name: "菊池市" },
                    { url: "https://tenki.jp/forecast/9/46/8610/43211/", name: "宇土市" },
                    { url: "https://tenki.jp/forecast/9/46/8610/43213/", name: "宇城市" },
                    { url: "https://tenki.jp/forecast/9/46/8610/43216/", name: "合志市" },
                    { url: "https://tenki.jp/forecast/9/46/8610/43348/", name: "美里町" },
                    { url: "https://tenki.jp/forecast/9/46/8610/43364/", name: "玉東町" },
                    { url: "https://tenki.jp/forecast/9/46/8610/43367/", name: "南関町" },
                    { url: "https://tenki.jp/forecast/9/46/8610/43368/", name: "長洲町" },
                    { url: "https://tenki.jp/forecast/9/46/8610/43369/", name: "和水町" },
                    { url: "https://tenki.jp/forecast/9/46/8610/43403/", name: "大津町" },
                    { url: "https://tenki.jp/forecast/9/46/8610/43404/", name: "菊陽町" },
                    { url: "https://tenki.jp/forecast/9/46/8610/43432/", name: "西原村" },
                    { url: "https://tenki.jp/forecast/9/46/8610/43441/", name: "御船町" },
                    { url: "https://tenki.jp/forecast/9/46/8610/43442/", name: "嘉島町" },
                    { url: "https://tenki.jp/forecast/9/46/8610/43443/", name: "益城町" },
                    { url: "https://tenki.jp/forecast/9/46/8610/43444/", name: "甲佐町" },
                    { url: "https://tenki.jp/forecast/9/46/8610/43447/", name: "山都町" },
                    { url: "https://tenki.jp/forecast/9/46/8610/43468/", name: "氷川町" },
                ]
            },
            {
                name: "阿蘇地方(阿蘇乙姫)",
                cities: [
                    { url: "https://tenki.jp/forecast/9/46/8620/43214/", name: "阿蘇市" },
                    { url: "https://tenki.jp/forecast/9/46/8620/43423/", name: "南小国町" },
                    { url: "https://tenki.jp/forecast/9/46/8620/43424/", name: "小国町" },
                    { url: "https://tenki.jp/forecast/9/46/8620/43425/", name: "産山村" },
                    { url: "https://tenki.jp/forecast/9/46/8620/43428/", name: "高森町" },
                    { url: "https://tenki.jp/forecast/9/46/8620/43433/", name: "南阿蘇村" },
                ]
            },
            {
                name: "天草・芦北地方(牛深)",
                cities: [
                    { url: "https://tenki.jp/forecast/9/46/8630/43205/", name: "水俣市" },
                    { url: "https://tenki.jp/forecast/9/46/8630/43212/", name: "上天草市" },
                    { url: "https://tenki.jp/forecast/9/46/8630/43215/", name: "天草市" },
                    { url: "https://tenki.jp/forecast/9/46/8630/43482/", name: "芦北町" },
                    { url: "https://tenki.jp/forecast/9/46/8630/43484/", name: "津奈木町" },
                    { url: "https://tenki.jp/forecast/9/46/8630/43531/", name: "苓北町" },
                ]
            },
            {
                name: "球磨地方(人吉)",
                cities: [
                    { url: "https://tenki.jp/forecast/9/46/8640/43203/", name: "人吉市" },
                    { url: "https://tenki.jp/forecast/9/46/8640/43501/", name: "錦町" },
                    { url: "https://tenki.jp/forecast/9/46/8640/43505/", name: "多良木町" },
                    { url: "https://tenki.jp/forecast/9/46/8640/43506/", name: "湯前町" },
                    { url: "https://tenki.jp/forecast/9/46/8640/43507/", name: "水上村" },
                    { url: "https://tenki.jp/forecast/9/46/8640/43510/", name: "相良村" },
                    { url: "https://tenki.jp/forecast/9/46/8640/43511/", name: "五木村" },
                    { url: "https://tenki.jp/forecast/9/46/8640/43512/", name: "山江村" },
                    { url: "https://tenki.jp/forecast/9/46/8640/43513/", name: "球磨村" },
                    { url: "https://tenki.jp/forecast/9/46/8640/43514/", name: "あさぎり町" },
                ]
            },
        ]
    },
    {
        prefName: "群馬県",
        subdivisions: [
            {
                name: "南部(前橋)",
                cities: [
                    { url: "https://tenki.jp/forecast/3/13/4210/10201/", name: "前橋市" },
                    { url: "https://tenki.jp/forecast/3/13/4210/10202/", name: "高崎市" },
                    { url: "https://tenki.jp/forecast/3/13/4210/10203/", name: "桐生市" },
                    { url: "https://tenki.jp/forecast/3/13/4210/10204/", name: "伊勢崎市" },
                    { url: "https://tenki.jp/forecast/3/13/4210/10205/", name: "太田市" },
                    { url: "https://tenki.jp/forecast/3/13/4210/10207/", name: "館林市" },
                    { url: "https://tenki.jp/forecast/3/13/4210/10208/", name: "渋川市" },
                    { url: "https://tenki.jp/forecast/3/13/4210/10209/", name: "藤岡市" },
                    { url: "https://tenki.jp/forecast/3/13/4210/10210/", name: "富岡市" },
                    { url: "https://tenki.jp/forecast/3/13/4210/10211/", name: "安中市" },
                    { url: "https://tenki.jp/forecast/3/13/4210/10212/", name: "みどり市" },
                    { url: "https://tenki.jp/forecast/3/13/4210/10344/", name: "榛東村" },
                    { url: "https://tenki.jp/forecast/3/13/4210/10345/", name: "吉岡町" },
                    { url: "https://tenki.jp/forecast/3/13/4210/10366/", name: "上野村" },
                    { url: "https://tenki.jp/forecast/3/13/4210/10367/", name: "神流町" },
                    { url: "https://tenki.jp/forecast/3/13/4210/10382/", name: "下仁田町" },
                    { url: "https://tenki.jp/forecast/3/13/4210/10383/", name: "南牧村" },
                    { url: "https://tenki.jp/forecast/3/13/4210/10384/", name: "甘楽町" },
                    { url: "https://tenki.jp/forecast/3/13/4210/10464/", name: "玉村町" },
                    { url: "https://tenki.jp/forecast/3/13/4210/10521/", name: "板倉町" },
                    { url: "https://tenki.jp/forecast/3/13/4210/10522/", name: "明和町" },
                    { url: "https://tenki.jp/forecast/3/13/4210/10523/", name: "千代田町" },
                    { url: "https://tenki.jp/forecast/3/13/4210/10524/", name: "大泉町" },
                    { url: "https://tenki.jp/forecast/3/13/4210/10525/", name: "邑楽町" },
                ]
            },
            {
                name: "北部(みなかみ)",
                cities: [
                    { url: "https://tenki.jp/forecast/3/13/4220/10206/", name: "沼田市" },
                    { url: "https://tenki.jp/forecast/3/13/4220/10421/", name: "中之条町" },
                    { url: "https://tenki.jp/forecast/3/13/4220/10424/", name: "長野原町" },
                    { url: "https://tenki.jp/forecast/3/13/4220/10425/", name: "嬬恋村" },
                    { url: "https://tenki.jp/forecast/3/13/4220/10426/", name: "草津町" },
                    { url: "https://tenki.jp/forecast/3/13/4220/10428/", name: "高山村" },
                    { url: "https://tenki.jp/forecast/3/13/4220/10429/", name: "東吾妻町" },
                    { url: "https://tenki.jp/forecast/3/13/4220/10443/", name: "片品村" },
                    { url: "https://tenki.jp/forecast/3/13/4220/10444/", name: "川場村" },
                    { url: "https://tenki.jp/forecast/3/13/4220/10448/", name: "昭和村" },
                    { url: "https://tenki.jp/forecast/3/13/4220/10449/", name: "みなかみ町" },
                ]
            },
        ]
    },
    {
        prefName: "広島県",
        subdivisions: [
            {
                name: "南部(広島)",
                cities: [
                    { url: "https://tenki.jp/forecast/7/37/6710/34100/", name: "広島市" },
                    { url: "https://tenki.jp/forecast/7/37/6710/34101/", name: "広島市中区" },
                    { url: "https://tenki.jp/forecast/7/37/6710/34102/", name: "広島市東区" },
                    { url: "https://tenki.jp/forecast/7/37/6710/34103/", name: "広島市南区" },
                    { url: "https://tenki.jp/forecast/7/37/6710/34104/", name: "広島市西区" },
                    { url: "https://tenki.jp/forecast/7/37/6710/34105/", name: "広島市安佐南区" },
                    { url: "https://tenki.jp/forecast/7/37/6710/34106/", name: "広島市安佐北区" },
                    { url: "https://tenki.jp/forecast/7/37/6710/34107/", name: "広島市安芸区" },
                    { url: "https://tenki.jp/forecast/7/37/6710/34108/", name: "広島市佐伯区" },
                    { url: "https://tenki.jp/forecast/7/37/6710/34202/", name: "呉市" },
                    { url: "https://tenki.jp/forecast/7/37/6710/34203/", name: "竹原市" },
                    { url: "https://tenki.jp/forecast/7/37/6710/34204/", name: "三原市" },
                    { url: "https://tenki.jp/forecast/7/37/6710/34205/", name: "尾道市" },
                    { url: "https://tenki.jp/forecast/7/37/6710/34207/", name: "福山市" },
                    { url: "https://tenki.jp/forecast/7/37/6710/34208/", name: "府中市" },
                    { url: "https://tenki.jp/forecast/7/37/6710/34211/", name: "大竹市" },
                    { url: "https://tenki.jp/forecast/7/37/6710/34212/", name: "東広島市" },
                    { url: "https://tenki.jp/forecast/7/37/6710/34213/", name: "廿日市市" },
                    { url: "https://tenki.jp/forecast/7/37/6710/34215/", name: "江田島市" },
                    { url: "https://tenki.jp/forecast/7/37/6710/34302/", name: "府中町" },
                    { url: "https://tenki.jp/forecast/7/37/6710/34304/", name: "海田町" },
                    { url: "https://tenki.jp/forecast/7/37/6710/34307/", name: "熊野町" },
                    { url: "https://tenki.jp/forecast/7/37/6710/34309/", name: "坂町" },
                    { url: "https://tenki.jp/forecast/7/37/6710/34431/", name: "大崎上島町" },
                    { url: "https://tenki.jp/forecast/7/37/6710/34462/", name: "世羅町" },
                    { url: "https://tenki.jp/forecast/7/37/6710/34545/", name: "神石高原町" },
                ]
            },
            {
                name: "北部(庄原)",
                cities: [
                    { url: "https://tenki.jp/forecast/7/37/6720/34209/", name: "三次市" },
                    { url: "https://tenki.jp/forecast/7/37/6720/34210/", name: "庄原市" },
                    { url: "https://tenki.jp/forecast/7/37/6720/34214/", name: "安芸高田市" },
                    { url: "https://tenki.jp/forecast/7/37/6720/34368/", name: "安芸太田町" },
                    { url: "https://tenki.jp/forecast/7/37/6720/34369/", name: "北広島町" },
                ]
            },
        ]
    },
    {
        prefName: "香川県",
        subdivisions: [
            {
                name: "香川県(高松)",
                cities: [
                    { url: "https://tenki.jp/forecast/8/40/7200/37201/", name: "高松市" },
                    { url: "https://tenki.jp/forecast/8/40/7200/37202/", name: "丸亀市" },
                    { url: "https://tenki.jp/forecast/8/40/7200/37203/", name: "坂出市" },
                    { url: "https://tenki.jp/forecast/8/40/7200/37204/", name: "善通寺市" },
                    { url: "https://tenki.jp/forecast/8/40/7200/37205/", name: "観音寺市" },
                    { url: "https://tenki.jp/forecast/8/40/7200/37206/", name: "さぬき市" },
                    { url: "https://tenki.jp/forecast/8/40/7200/37207/", name: "東かがわ市" },
                    { url: "https://tenki.jp/forecast/8/40/7200/37208/", name: "三豊市" },
                    { url: "https://tenki.jp/forecast/8/40/7200/37322/", name: "土庄町" },
                    { url: "https://tenki.jp/forecast/8/40/7200/37324/", name: "小豆島町" },
                    { url: "https://tenki.jp/forecast/8/40/7200/37341/", name: "三木町" },
                    { url: "https://tenki.jp/forecast/8/40/7200/37364/", name: "直島町" },
                    { url: "https://tenki.jp/forecast/8/40/7200/37386/", name: "宇多津町" },
                    { url: "https://tenki.jp/forecast/8/40/7200/37387/", name: "綾川町" },
                    { url: "https://tenki.jp/forecast/8/40/7200/37403/", name: "琴平町" },
                    { url: "https://tenki.jp/forecast/8/40/7200/37404/", name: "多度津町" },
                    { url: "https://tenki.jp/forecast/8/40/7200/37406/", name: "まんのう町" },
                ]
            },
        ]
    },
    {
        prefName: "高知県",
        subdivisions: [
            {
                name: "中部(高知)",
                cities: [
                    { url: "https://tenki.jp/forecast/8/42/7410/39201/", name: "高知市" },
                    { url: "https://tenki.jp/forecast/8/42/7410/39204/", name: "南国市" },
                    { url: "https://tenki.jp/forecast/8/42/7410/39205/", name: "土佐市" },
                    { url: "https://tenki.jp/forecast/8/42/7410/39206/", name: "須崎市" },
                    { url: "https://tenki.jp/forecast/8/42/7410/39211/", name: "香南市" },
                    { url: "https://tenki.jp/forecast/8/42/7410/39212/", name: "香美市" },
                    { url: "https://tenki.jp/forecast/8/42/7410/39341/", name: "本山町" },
                    { url: "https://tenki.jp/forecast/8/42/7410/39344/", name: "大豊町" },
                    { url: "https://tenki.jp/forecast/8/42/7410/39363/", name: "土佐町" },
                    { url: "https://tenki.jp/forecast/8/42/7410/39364/", name: "大川村" },
                    { url: "https://tenki.jp/forecast/8/42/7410/39386/", name: "いの町" },
                    { url: "https://tenki.jp/forecast/8/42/7410/39387/", name: "仁淀川町" },
                    { url: "https://tenki.jp/forecast/8/42/7410/39402/", name: "佐川町" },
                    { url: "https://tenki.jp/forecast/8/42/7410/39403/", name: "越知町" },
                    { url: "https://tenki.jp/forecast/8/42/7410/39410/", name: "日高村" },
                ]
            },
            {
                name: "東部(室戸岬)",
                cities: [
                    { url: "https://tenki.jp/forecast/8/42/7420/39202/", name: "室戸市" },
                    { url: "https://tenki.jp/forecast/8/42/7420/39203/", name: "安芸市" },
                    { url: "https://tenki.jp/forecast/8/42/7420/39301/", name: "東洋町" },
                    { url: "https://tenki.jp/forecast/8/42/7420/39302/", name: "奈半利町" },
                    { url: "https://tenki.jp/forecast/8/42/7420/39303/", name: "田野町" },
                    { url: "https://tenki.jp/forecast/8/42/7420/39304/", name: "安田町" },
                    { url: "https://tenki.jp/forecast/8/42/7420/39305/", name: "北川村" },
                    { url: "https://tenki.jp/forecast/8/42/7420/39306/", name: "馬路村" },
                    { url: "https://tenki.jp/forecast/8/42/7420/39307/", name: "芸西村" },
                ]
            },
            {
                name: "西部(清水)",
                cities: [
                    { url: "https://tenki.jp/forecast/8/42/7430/39208/", name: "宿毛市" },
                    { url: "https://tenki.jp/forecast/8/42/7430/39209/", name: "土佐清水市" },
                    { url: "https://tenki.jp/forecast/8/42/7430/39210/", name: "四万十市" },
                    { url: "https://tenki.jp/forecast/8/42/7430/39401/", name: "中土佐町" },
                    { url: "https://tenki.jp/forecast/8/42/7430/39405/", name: "檮原町" },
                    { url: "https://tenki.jp/forecast/8/42/7430/39411/", name: "津野町" },
                    { url: "https://tenki.jp/forecast/8/42/7430/39412/", name: "四万十町" },
                    { url: "https://tenki.jp/forecast/8/42/7430/39424/", name: "大月町" },
                    { url: "https://tenki.jp/forecast/8/42/7430/39427/", name: "三原村" },
                    { url: "https://tenki.jp/forecast/8/42/7430/39428/", name: "黒潮町" },
                ]
            },
        ]
    },
    {
        prefName: "佐賀県",
        subdivisions: [
            {
                name: "南部(佐賀)",
                cities: [
                    { url: "https://tenki.jp/forecast/9/44/8510/41201/", name: "佐賀市" },
                    { url: "https://tenki.jp/forecast/9/44/8510/41203/", name: "鳥栖市" },
                    { url: "https://tenki.jp/forecast/9/44/8510/41204/", name: "多久市" },
                    { url: "https://tenki.jp/forecast/9/44/8510/41206/", name: "武雄市" },
                    { url: "https://tenki.jp/forecast/9/44/8510/41207/", name: "鹿島市" },
                    { url: "https://tenki.jp/forecast/9/44/8510/41208/", name: "小城市" },
                    { url: "https://tenki.jp/forecast/9/44/8510/41209/", name: "嬉野市" },
                    { url: "https://tenki.jp/forecast/9/44/8510/41210/", name: "神埼市" },
                    { url: "https://tenki.jp/forecast/9/44/8510/41327/", name: "吉野ヶ里町" },
                    { url: "https://tenki.jp/forecast/9/44/8510/41341/", name: "基山町" },
                    { url: "https://tenki.jp/forecast/9/44/8510/41345/", name: "上峰町" },
                    { url: "https://tenki.jp/forecast/9/44/8510/41346/", name: "みやき町" },
                    { url: "https://tenki.jp/forecast/9/44/8510/41423/", name: "大町町" },
                    { url: "https://tenki.jp/forecast/9/44/8510/41424/", name: "江北町" },
                    { url: "https://tenki.jp/forecast/9/44/8510/41425/", name: "白石町" },
                    { url: "https://tenki.jp/forecast/9/44/8510/41441/", name: "太良町" },
                ]
            },
            {
                name: "北部(伊万里)",
                cities: [
                    { url: "https://tenki.jp/forecast/9/44/8520/41202/", name: "唐津市" },
                    { url: "https://tenki.jp/forecast/9/44/8520/41205/", name: "伊万里市" },
                    { url: "https://tenki.jp/forecast/9/44/8520/41387/", name: "玄海町" },
                    { url: "https://tenki.jp/forecast/9/44/8520/41401/", name: "有田町" },
                ]
            },
        ]
    },
    {
        prefName: "埼玉県",
        subdivisions: [
            {
                name: "南部(さいたま)",
                cities: [
                    { url: "https://tenki.jp/forecast/3/14/4310/11100/", name: "さいたま市" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11101/", name: "さいたま市西区" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11102/", name: "さいたま市北区" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11103/", name: "さいたま市大宮区" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11104/", name: "さいたま市見沼区" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11105/", name: "さいたま市中央区" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11106/", name: "さいたま市桜区" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11107/", name: "さいたま市浦和区" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11108/", name: "さいたま市南区" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11109/", name: "さいたま市緑区" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11110/", name: "さいたま市岩槻区" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11201/", name: "川越市" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11203/", name: "川口市" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11208/", name: "所沢市" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11209/", name: "飯能市" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11214/", name: "春日部市" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11215/", name: "狭山市" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11219/", name: "上尾市" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11221/", name: "草加市" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11222/", name: "越谷市" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11223/", name: "蕨市" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11224/", name: "戸田市" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11225/", name: "入間市" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11227/", name: "朝霞市" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11228/", name: "志木市" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11229/", name: "和光市" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11230/", name: "新座市" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11231/", name: "桶川市" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11233/", name: "北本市" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11234/", name: "八潮市" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11235/", name: "富士見市" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11237/", name: "三郷市" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11238/", name: "蓮田市" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11239/", name: "坂戸市" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11240/", name: "幸手市" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11241/", name: "鶴ヶ島市" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11242/", name: "日高市" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11243/", name: "吉川市" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11245/", name: "ふじみ野市" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11246/", name: "白岡市" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11301/", name: "伊奈町" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11324/", name: "三芳町" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11326/", name: "毛呂山町" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11327/", name: "越生町" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11346/", name: "川島町" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11442/", name: "宮代町" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11464/", name: "杉戸町" },
                    { url: "https://tenki.jp/forecast/3/14/4310/11465/", name: "松伏町" },
                ]
            },
            {
                name: "北部(熊谷)",
                cities: [
                    { url: "https://tenki.jp/forecast/3/14/4320/11202/", name: "熊谷市" },
                    { url: "https://tenki.jp/forecast/3/14/4320/11206/", name: "行田市" },
                    { url: "https://tenki.jp/forecast/3/14/4320/11210/", name: "加須市" },
                    { url: "https://tenki.jp/forecast/3/14/4320/11211/", name: "本庄市" },
                    { url: "https://tenki.jp/forecast/3/14/4320/11212/", name: "東松山市" },
                    { url: "https://tenki.jp/forecast/3/14/4320/11216/", name: "羽生市" },
                    { url: "https://tenki.jp/forecast/3/14/4320/11217/", name: "鴻巣市" },
                    { url: "https://tenki.jp/forecast/3/14/4320/11218/", name: "深谷市" },
                    { url: "https://tenki.jp/forecast/3/14/4320/11232/", name: "久喜市" },
                    { url: "https://tenki.jp/forecast/3/14/4320/11341/", name: "滑川町" },
                    { url: "https://tenki.jp/forecast/3/14/4320/11342/", name: "嵐山町" },
                    { url: "https://tenki.jp/forecast/3/14/4320/11343/", name: "小川町" },
                    { url: "https://tenki.jp/forecast/3/14/4320/11347/", name: "吉見町" },
                    { url: "https://tenki.jp/forecast/3/14/4320/11348/", name: "鳩山町" },
                    { url: "https://tenki.jp/forecast/3/14/4320/11349/", name: "ときがわ町" },
                    { url: "https://tenki.jp/forecast/3/14/4320/11369/", name: "東秩父村" },
                    { url: "https://tenki.jp/forecast/3/14/4320/11381/", name: "美里町" },
                    { url: "https://tenki.jp/forecast/3/14/4320/11383/", name: "神川町" },
                    { url: "https://tenki.jp/forecast/3/14/4320/11385/", name: "上里町" },
                    { url: "https://tenki.jp/forecast/3/14/4320/11408/", name: "寄居町" },
                ]
            },
            {
                name: "秩父地方(秩父)",
                cities: [
                    { url: "https://tenki.jp/forecast/3/14/4330/11207/", name: "秩父市" },
                    { url: "https://tenki.jp/forecast/3/14/4330/11361/", name: "横瀬町" },
                    { url: "https://tenki.jp/forecast/3/14/4330/11362/", name: "皆野町" },
                    { url: "https://tenki.jp/forecast/3/14/4330/11363/", name: "長瀞町" },
                    { url: "https://tenki.jp/forecast/3/14/4330/11365/", name: "小鹿野町" },
                ]
            },
        ]
    },
    {
        prefName: "三重県",
        subdivisions: [
            {
                name: "北中部(津)",
                cities: [
                    { url: "https://tenki.jp/forecast/5/27/5310/24201/", name: "津市" },
                    { url: "https://tenki.jp/forecast/5/27/5310/24202/", name: "四日市市" },
                    { url: "https://tenki.jp/forecast/5/27/5310/24204/", name: "松阪市" },
                    { url: "https://tenki.jp/forecast/5/27/5310/24205/", name: "桑名市" },
                    { url: "https://tenki.jp/forecast/5/27/5310/24207/", name: "鈴鹿市" },
                    { url: "https://tenki.jp/forecast/5/27/5310/24208/", name: "名張市" },
                    { url: "https://tenki.jp/forecast/5/27/5310/24210/", name: "亀山市" },
                    { url: "https://tenki.jp/forecast/5/27/5310/24214/", name: "いなべ市" },
                    { url: "https://tenki.jp/forecast/5/27/5310/24216/", name: "伊賀市" },
                    { url: "https://tenki.jp/forecast/5/27/5310/24303/", name: "木曽岬町" },
                    { url: "https://tenki.jp/forecast/5/27/5310/24324/", name: "東員町" },
                    { url: "https://tenki.jp/forecast/5/27/5310/24341/", name: "菰野町" },
                    { url: "https://tenki.jp/forecast/5/27/5310/24343/", name: "朝日町" },
                    { url: "https://tenki.jp/forecast/5/27/5310/24344/", name: "川越町" },
                    { url: "https://tenki.jp/forecast/5/27/5310/24441/", name: "多気町" },
                    { url: "https://tenki.jp/forecast/5/27/5310/24442/", name: "明和町" },
                ]
            },
            {
                name: "南部(尾鷲)",
                cities: [
                    { url: "https://tenki.jp/forecast/5/27/5320/24203/", name: "伊勢市" },
                    { url: "https://tenki.jp/forecast/5/27/5320/24209/", name: "尾鷲市" },
                    { url: "https://tenki.jp/forecast/5/27/5320/24211/", name: "鳥羽市" },
                    { url: "https://tenki.jp/forecast/5/27/5320/24212/", name: "熊野市" },
                    { url: "https://tenki.jp/forecast/5/27/5320/24215/", name: "志摩市" },
                    { url: "https://tenki.jp/forecast/5/27/5320/24443/", name: "大台町" },
                    { url: "https://tenki.jp/forecast/5/27/5320/24461/", name: "玉城町" },
                    { url: "https://tenki.jp/forecast/5/27/5320/24470/", name: "度会町" },
                    { url: "https://tenki.jp/forecast/5/27/5320/24471/", name: "大紀町" },
                    { url: "https://tenki.jp/forecast/5/27/5320/24472/", name: "南伊勢町" },
                    { url: "https://tenki.jp/forecast/5/27/5320/24543/", name: "紀北町" },
                    { url: "https://tenki.jp/forecast/5/27/5320/24561/", name: "御浜町" },
                    { url: "https://tenki.jp/forecast/5/27/5320/24562/", name: "紀宝町" },
                ]
            },
        ]
    },
    {
        prefName: "山形県",
        subdivisions: [
            {
                name: "村山(山形)",
                cities: [
                    { url: "https://tenki.jp/forecast/2/9/3510/6201/", name: "山形市" },
                    { url: "https://tenki.jp/forecast/2/9/3510/6206/", name: "寒河江市" },
                    { url: "https://tenki.jp/forecast/2/9/3510/6207/", name: "上山市" },
                    { url: "https://tenki.jp/forecast/2/9/3510/6208/", name: "村山市" },
                    { url: "https://tenki.jp/forecast/2/9/3510/6210/", name: "天童市" },
                    { url: "https://tenki.jp/forecast/2/9/3510/6211/", name: "東根市" },
                    { url: "https://tenki.jp/forecast/2/9/3510/6212/", name: "尾花沢市" },
                    { url: "https://tenki.jp/forecast/2/9/3510/6301/", name: "山辺町" },
                    { url: "https://tenki.jp/forecast/2/9/3510/6302/", name: "中山町" },
                    { url: "https://tenki.jp/forecast/2/9/3510/6321/", name: "河北町" },
                    { url: "https://tenki.jp/forecast/2/9/3510/6322/", name: "西川町" },
                    { url: "https://tenki.jp/forecast/2/9/3510/6323/", name: "朝日町" },
                    { url: "https://tenki.jp/forecast/2/9/3510/6324/", name: "大江町" },
                    { url: "https://tenki.jp/forecast/2/9/3510/6341/", name: "大石田町" },
                ]
            },
            {
                name: "置賜(米沢)",
                cities: [
                    { url: "https://tenki.jp/forecast/2/9/3520/6202/", name: "米沢市" },
                    { url: "https://tenki.jp/forecast/2/9/3520/6209/", name: "長井市" },
                    { url: "https://tenki.jp/forecast/2/9/3520/6213/", name: "南陽市" },
                    { url: "https://tenki.jp/forecast/2/9/3520/6381/", name: "高畠町" },
                    { url: "https://tenki.jp/forecast/2/9/3520/6382/", name: "川西町" },
                    { url: "https://tenki.jp/forecast/2/9/3520/6401/", name: "小国町" },
                    { url: "https://tenki.jp/forecast/2/9/3520/6402/", name: "白鷹町" },
                    { url: "https://tenki.jp/forecast/2/9/3520/6403/", name: "飯豊町" },
                ]
            },
            {
                name: "庄内(酒田)",
                cities: [
                    { url: "https://tenki.jp/forecast/2/9/3530/6203/", name: "鶴岡市" },
                    { url: "https://tenki.jp/forecast/2/9/3530/6204/", name: "酒田市" },
                    { url: "https://tenki.jp/forecast/2/9/3530/6426/", name: "三川町" },
                    { url: "https://tenki.jp/forecast/2/9/3530/6428/", name: "庄内町" },
                    { url: "https://tenki.jp/forecast/2/9/3530/6461/", name: "遊佐町" },
                ]
            },
            {
                name: "最上(新庄)",
                cities: [
                    { url: "https://tenki.jp/forecast/2/9/3540/6205/", name: "新庄市" },
                    { url: "https://tenki.jp/forecast/2/9/3540/6361/", name: "金山町" },
                    { url: "https://tenki.jp/forecast/2/9/3540/6362/", name: "最上町" },
                    { url: "https://tenki.jp/forecast/2/9/3540/6363/", name: "舟形町" },
                    { url: "https://tenki.jp/forecast/2/9/3540/6364/", name: "真室川町" },
                    { url: "https://tenki.jp/forecast/2/9/3540/6365/", name: "大蔵村" },
                    { url: "https://tenki.jp/forecast/2/9/3540/6366/", name: "鮭川村" },
                    { url: "https://tenki.jp/forecast/2/9/3540/6367/", name: "戸沢村" },
                ]
            },
        ]
    },
    {
        prefName: "山口県",
        subdivisions: [
            {
                name: "西部(下関)",
                cities: [
                    { url: "https://tenki.jp/forecast/7/38/8110/35201/", name: "下関市" },
                    { url: "https://tenki.jp/forecast/7/38/8110/35202/", name: "宇部市" },
                    { url: "https://tenki.jp/forecast/7/38/8110/35216/", name: "山陽小野田市" },
                ]
            },
            {
                name: "中部(山口)",
                cities: [
                    { url: "https://tenki.jp/forecast/7/38/8120/35203/", name: "山口市" },
                    { url: "https://tenki.jp/forecast/7/38/8120/35206/", name: "防府市" },
                    { url: "https://tenki.jp/forecast/7/38/8120/35207/", name: "下松市" },
                    { url: "https://tenki.jp/forecast/7/38/8120/35215/", name: "周南市" },
                ]
            },
            {
                name: "東部(柳井)",
                cities: [
                    { url: "https://tenki.jp/forecast/7/38/8130/35208/", name: "岩国市" },
                    { url: "https://tenki.jp/forecast/7/38/8130/35210/", name: "光市" },
                    { url: "https://tenki.jp/forecast/7/38/8130/35212/", name: "柳井市" },
                    { url: "https://tenki.jp/forecast/7/38/8130/35305/", name: "周防大島町" },
                    { url: "https://tenki.jp/forecast/7/38/8130/35321/", name: "和木町" },
                    { url: "https://tenki.jp/forecast/7/38/8130/35341/", name: "上関町" },
                    { url: "https://tenki.jp/forecast/7/38/8130/35343/", name: "田布施町" },
                    { url: "https://tenki.jp/forecast/7/38/8130/35344/", name: "平生町" },
                ]
            },
            {
                name: "北部(萩)",
                cities: [
                    { url: "https://tenki.jp/forecast/7/38/8140/35204/", name: "萩市" },
                    { url: "https://tenki.jp/forecast/7/38/8140/35211/", name: "長門市" },
                    { url: "https://tenki.jp/forecast/7/38/8140/35213/", name: "美祢市" },
                    { url: "https://tenki.jp/forecast/7/38/8140/35502/", name: "阿武町" },
                ]
            },
        ]
    },
    {
        prefName: "山梨県",
        subdivisions: [
            {
                name: "中・西部(甲府)",
                cities: [
                    { url: "https://tenki.jp/forecast/3/22/4910/19201/", name: "甲府市" },
                    { url: "https://tenki.jp/forecast/3/22/4910/19205/", name: "山梨市" },
                    { url: "https://tenki.jp/forecast/3/22/4910/19207/", name: "韮崎市" },
                    { url: "https://tenki.jp/forecast/3/22/4910/19208/", name: "南アルプス市" },
                    { url: "https://tenki.jp/forecast/3/22/4910/19209/", name: "北杜市" },
                    { url: "https://tenki.jp/forecast/3/22/4910/19210/", name: "甲斐市" },
                    { url: "https://tenki.jp/forecast/3/22/4910/19211/", name: "笛吹市" },
                    { url: "https://tenki.jp/forecast/3/22/4910/19213/", name: "甲州市" },
                    { url: "https://tenki.jp/forecast/3/22/4910/19214/", name: "中央市" },
                    { url: "https://tenki.jp/forecast/3/22/4910/19346/", name: "市川三郷町" },
                    { url: "https://tenki.jp/forecast/3/22/4910/19364/", name: "早川町" },
                    { url: "https://tenki.jp/forecast/3/22/4910/19365/", name: "身延町" },
                    { url: "https://tenki.jp/forecast/3/22/4910/19366/", name: "南部町" },
                    { url: "https://tenki.jp/forecast/3/22/4910/19368/", name: "富士川町" },
                    { url: "https://tenki.jp/forecast/3/22/4910/19384/", name: "昭和町" },
                ]
            },
            {
                name: "東部・富士五湖(河口湖)",
                cities: [
                    { url: "https://tenki.jp/forecast/3/22/4920/19202/", name: "富士吉田市" },
                    { url: "https://tenki.jp/forecast/3/22/4920/19204/", name: "都留市" },
                    { url: "https://tenki.jp/forecast/3/22/4920/19206/", name: "大月市" },
                    { url: "https://tenki.jp/forecast/3/22/4920/19212/", name: "上野原市" },
                    { url: "https://tenki.jp/forecast/3/22/4920/19422/", name: "道志村" },
                    { url: "https://tenki.jp/forecast/3/22/4920/19423/", name: "西桂町" },
                    { url: "https://tenki.jp/forecast/3/22/4920/19424/", name: "忍野村" },
                    { url: "https://tenki.jp/forecast/3/22/4920/19425/", name: "山中湖村" },
                    { url: "https://tenki.jp/forecast/3/22/4920/19429/", name: "鳴沢村" },
                    { url: "https://tenki.jp/forecast/3/22/4920/19430/", name: "富士河口湖町" },
                    { url: "https://tenki.jp/forecast/3/22/4920/19442/", name: "小菅村" },
                    { url: "https://tenki.jp/forecast/3/22/4920/19443/", name: "丹波山村" },
                ]
            },
        ]
    },
    {
        prefName: "滋賀県",
        subdivisions: [
            {
                name: "南部(大津)",
                cities: [
                    { url: "https://tenki.jp/forecast/6/28/6010/25201/", name: "大津市" },
                    { url: "https://tenki.jp/forecast/6/28/6010/25204/", name: "近江八幡市" },
                    { url: "https://tenki.jp/forecast/6/28/6010/25206/", name: "草津市" },
                    { url: "https://tenki.jp/forecast/6/28/6010/25207/", name: "守山市" },
                    { url: "https://tenki.jp/forecast/6/28/6010/25208/", name: "栗東市" },
                    { url: "https://tenki.jp/forecast/6/28/6010/25209/", name: "甲賀市" },
                    { url: "https://tenki.jp/forecast/6/28/6010/25210/", name: "野洲市" },
                    { url: "https://tenki.jp/forecast/6/28/6010/25211/", name: "湖南市" },
                    { url: "https://tenki.jp/forecast/6/28/6010/25213/", name: "東近江市" },
                    { url: "https://tenki.jp/forecast/6/28/6010/25383/", name: "日野町" },
                    { url: "https://tenki.jp/forecast/6/28/6010/25384/", name: "竜王町" },
                ]
            },
            {
                name: "北部(彦根)",
                cities: [
                    { url: "https://tenki.jp/forecast/6/28/6020/25202/", name: "彦根市" },
                    { url: "https://tenki.jp/forecast/6/28/6020/25203/", name: "長浜市" },
                    { url: "https://tenki.jp/forecast/6/28/6020/25212/", name: "高島市" },
                    { url: "https://tenki.jp/forecast/6/28/6020/25214/", name: "米原市" },
                    { url: "https://tenki.jp/forecast/6/28/6020/25425/", name: "愛荘町" },
                    { url: "https://tenki.jp/forecast/6/28/6020/25441/", name: "豊郷町" },
                    { url: "https://tenki.jp/forecast/6/28/6020/25442/", name: "甲良町" },
                    { url: "https://tenki.jp/forecast/6/28/6020/25443/", name: "多賀町" },
                ]
            },
        ]
    },
    {
        prefName: "鹿児島県",
        subdivisions: [
            {
                name: "薩摩地方(鹿児島)",
                cities: [
                    { url: "https://tenki.jp/forecast/9/49/8810/46201/", name: "鹿児島市" },
                    { url: "https://tenki.jp/forecast/9/49/8810/46204/", name: "枕崎市" },
                    { url: "https://tenki.jp/forecast/9/49/8810/46206/", name: "阿久根市" },
                    { url: "https://tenki.jp/forecast/9/49/8810/46208/", name: "出水市" },
                    { url: "https://tenki.jp/forecast/9/49/8810/46210/", name: "指宿市" },
                    { url: "https://tenki.jp/forecast/9/49/8810/46215/", name: "薩摩川内市" },
                    { url: "https://tenki.jp/forecast/9/49/8810/46216/", name: "日置市" },
                    { url: "https://tenki.jp/forecast/9/49/8810/46218/", name: "霧島市" },
                    { url: "https://tenki.jp/forecast/9/49/8810/46219/", name: "いちき串木野市" },
                    { url: "https://tenki.jp/forecast/9/49/8810/46220/", name: "南さつま市" },
                    { url: "https://tenki.jp/forecast/9/49/8810/46223/", name: "南九州市" },
                    { url: "https://tenki.jp/forecast/9/49/8810/46224/", name: "伊佐市" },
                    { url: "https://tenki.jp/forecast/9/49/8810/46225/", name: "姶良市" },
                    { url: "https://tenki.jp/forecast/9/49/8810/46392/", name: "さつま町" },
                    { url: "https://tenki.jp/forecast/9/49/8810/46404/", name: "長島町" },
                    { url: "https://tenki.jp/forecast/9/49/8810/46452/", name: "湧水町" },
                ]
            },
            {
                name: "大隅地方(鹿屋)",
                cities: [
                    { url: "https://tenki.jp/forecast/9/49/8820/46203/", name: "鹿屋市" },
                    { url: "https://tenki.jp/forecast/9/49/8820/46214/", name: "垂水市" },
                    { url: "https://tenki.jp/forecast/9/49/8820/46217/", name: "曽於市" },
                    { url: "https://tenki.jp/forecast/9/49/8820/46221/", name: "志布志市" },
                    { url: "https://tenki.jp/forecast/9/49/8820/46468/", name: "大崎町" },
                    { url: "https://tenki.jp/forecast/9/49/8820/46482/", name: "東串良町" },
                    { url: "https://tenki.jp/forecast/9/49/8820/46490/", name: "錦江町" },
                    { url: "https://tenki.jp/forecast/9/49/8820/46491/", name: "南大隅町" },
                    { url: "https://tenki.jp/forecast/9/49/8820/46492/", name: "肝付町" },
                ]
            },
            {
                name: "種子島・屋久島地方(種子島)",
                cities: [
                    { url: "https://tenki.jp/forecast/9/49/8830/46213/", name: "西之表市" },
                    { url: "https://tenki.jp/forecast/9/49/8830/46303/", name: "三島村" },
                    { url: "https://tenki.jp/forecast/9/49/8830/46501/", name: "中種子町" },
                    { url: "https://tenki.jp/forecast/9/49/8830/46502/", name: "南種子町" },
                    { url: "https://tenki.jp/forecast/9/49/8830/46505/", name: "屋久島町" },
                ]
            },
            {
                name: "奄美地方(名瀬)",
                cities: [
                    { url: "https://tenki.jp/forecast/9/49/1000/46222/", name: "奄美市" },
                    { url: "https://tenki.jp/forecast/9/49/1000/46304/", name: "十島村" },
                    { url: "https://tenki.jp/forecast/9/49/1000/46523/", name: "大和村" },
                    { url: "https://tenki.jp/forecast/9/49/1000/46524/", name: "宇検村" },
                    { url: "https://tenki.jp/forecast/9/49/1000/46525/", name: "瀬戸内町" },
                    { url: "https://tenki.jp/forecast/9/49/1000/46527/", name: "龍郷町" },
                    { url: "https://tenki.jp/forecast/9/49/1000/46529/", name: "喜界町" },
                    { url: "https://tenki.jp/forecast/9/49/1000/46530/", name: "徳之島町" },
                    { url: "https://tenki.jp/forecast/9/49/1000/46531/", name: "天城町" },
                    { url: "https://tenki.jp/forecast/9/49/1000/46532/", name: "伊仙町" },
                    { url: "https://tenki.jp/forecast/9/49/1000/46533/", name: "和泊町" },
                    { url: "https://tenki.jp/forecast/9/49/1000/46534/", name: "知名町" },
                    { url: "https://tenki.jp/forecast/9/49/1000/46535/", name: "与論町" },
                ]
            },
        ]
    },
    {
        prefName: "秋田県",
        subdivisions: [
            {
                name: "沿岸(秋田)",
                cities: [
                    { url: "https://tenki.jp/forecast/2/8/3210/5201/", name: "秋田市" },
                    { url: "https://tenki.jp/forecast/2/8/3210/5202/", name: "能代市" },
                    { url: "https://tenki.jp/forecast/2/8/3210/5206/", name: "男鹿市" },
                    { url: "https://tenki.jp/forecast/2/8/3210/5210/", name: "由利本荘市" },
                    { url: "https://tenki.jp/forecast/2/8/3210/5211/", name: "潟上市" },
                    { url: "https://tenki.jp/forecast/2/8/3210/5214/", name: "にかほ市" },
                    { url: "https://tenki.jp/forecast/2/8/3210/5346/", name: "藤里町" },
                    { url: "https://tenki.jp/forecast/2/8/3210/5348/", name: "三種町" },
                    { url: "https://tenki.jp/forecast/2/8/3210/5349/", name: "八峰町" },
                    { url: "https://tenki.jp/forecast/2/8/3210/5361/", name: "五城目町" },
                    { url: "https://tenki.jp/forecast/2/8/3210/5363/", name: "八郎潟町" },
                    { url: "https://tenki.jp/forecast/2/8/3210/5366/", name: "井川町" },
                    { url: "https://tenki.jp/forecast/2/8/3210/5368/", name: "大潟村" },
                ]
            },
            {
                name: "内陸(横手)",
                cities: [
                    { url: "https://tenki.jp/forecast/2/8/3220/5203/", name: "横手市" },
                    { url: "https://tenki.jp/forecast/2/8/3220/5204/", name: "大館市" },
                    { url: "https://tenki.jp/forecast/2/8/3220/5207/", name: "湯沢市" },
                    { url: "https://tenki.jp/forecast/2/8/3220/5209/", name: "鹿角市" },
                    { url: "https://tenki.jp/forecast/2/8/3220/5212/", name: "大仙市" },
                    { url: "https://tenki.jp/forecast/2/8/3220/5213/", name: "北秋田市" },
                    { url: "https://tenki.jp/forecast/2/8/3220/5215/", name: "仙北市" },
                    { url: "https://tenki.jp/forecast/2/8/3220/5303/", name: "小坂町" },
                    { url: "https://tenki.jp/forecast/2/8/3220/5327/", name: "上小阿仁村" },
                    { url: "https://tenki.jp/forecast/2/8/3220/5434/", name: "美郷町" },
                    { url: "https://tenki.jp/forecast/2/8/3220/5463/", name: "羽後町" },
                    { url: "https://tenki.jp/forecast/2/8/3220/5464/", name: "東成瀬村" },
                ]
            },
        ]
    },
    {
        prefName: "新潟県",
        subdivisions: [
            {
                name: "下越(新潟)",
                cities: [
                    { url: "https://tenki.jp/forecast/4/18/5410/15100/", name: "新潟市" },
                    { url: "https://tenki.jp/forecast/4/18/5410/15101/", name: "新潟市北区" },
                    { url: "https://tenki.jp/forecast/4/18/5410/15102/", name: "新潟市東区" },
                    { url: "https://tenki.jp/forecast/4/18/5410/15103/", name: "新潟市中央区" },
                    { url: "https://tenki.jp/forecast/4/18/5410/15104/", name: "新潟市江南区" },
                    { url: "https://tenki.jp/forecast/4/18/5410/15105/", name: "新潟市秋葉区" },
                    { url: "https://tenki.jp/forecast/4/18/5410/15106/", name: "新潟市南区" },
                    { url: "https://tenki.jp/forecast/4/18/5410/15107/", name: "新潟市西区" },
                    { url: "https://tenki.jp/forecast/4/18/5410/15108/", name: "新潟市西蒲区" },
                    { url: "https://tenki.jp/forecast/4/18/5410/15206/", name: "新発田市" },
                    { url: "https://tenki.jp/forecast/4/18/5410/15212/", name: "村上市" },
                    { url: "https://tenki.jp/forecast/4/18/5410/15213/", name: "燕市" },
                    { url: "https://tenki.jp/forecast/4/18/5410/15218/", name: "五泉市" },
                    { url: "https://tenki.jp/forecast/4/18/5410/15223/", name: "阿賀野市" },
                    { url: "https://tenki.jp/forecast/4/18/5410/15227/", name: "胎内市" },
                    { url: "https://tenki.jp/forecast/4/18/5410/15307/", name: "聖籠町" },
                    { url: "https://tenki.jp/forecast/4/18/5410/15342/", name: "弥彦村" },
                    { url: "https://tenki.jp/forecast/4/18/5410/15385/", name: "阿賀町" },
                    { url: "https://tenki.jp/forecast/4/18/5410/15581/", name: "関川村" },
                    { url: "https://tenki.jp/forecast/4/18/5410/15586/", name: "粟島浦村" },
                ]
            },
            {
                name: "中越(長岡)",
                cities: [
                    { url: "https://tenki.jp/forecast/4/18/5420/15202/", name: "長岡市" },
                    { url: "https://tenki.jp/forecast/4/18/5420/15204/", name: "三条市" },
                    { url: "https://tenki.jp/forecast/4/18/5420/15205/", name: "柏崎市" },
                    { url: "https://tenki.jp/forecast/4/18/5420/15208/", name: "小千谷市" },
                    { url: "https://tenki.jp/forecast/4/18/5420/15209/", name: "加茂市" },
                    { url: "https://tenki.jp/forecast/4/18/5420/15210/", name: "十日町市" },
                    { url: "https://tenki.jp/forecast/4/18/5420/15211/", name: "見附市" },
                    { url: "https://tenki.jp/forecast/4/18/5420/15225/", name: "魚沼市" },
                    { url: "https://tenki.jp/forecast/4/18/5420/15226/", name: "南魚沼市" },
                    { url: "https://tenki.jp/forecast/4/18/5420/15361/", name: "田上町" },
                    { url: "https://tenki.jp/forecast/4/18/5420/15405/", name: "出雲崎町" },
                    { url: "https://tenki.jp/forecast/4/18/5420/15461/", name: "湯沢町" },
                    { url: "https://tenki.jp/forecast/4/18/5420/15482/", name: "津南町" },
                    { url: "https://tenki.jp/forecast/4/18/5420/15504/", name: "刈羽村" },
                ]
            },
            {
                name: "上越(高田)",
                cities: [
                    { url: "https://tenki.jp/forecast/4/18/5430/15216/", name: "糸魚川市" },
                    { url: "https://tenki.jp/forecast/4/18/5430/15217/", name: "妙高市" },
                    { url: "https://tenki.jp/forecast/4/18/5430/15222/", name: "上越市" },
                ]
            },
            {
                name: "佐渡(相川)",
                cities: [
                    { url: "https://tenki.jp/forecast/4/18/5440/15224/", name: "佐渡市" },
                ]
            },
        ]
    },
    {
        prefName: "神奈川県",
        subdivisions: [
            {
                name: "東部(横浜)",
                cities: [
                    { url: "https://tenki.jp/forecast/3/17/4610/14100/", name: "横浜市" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14101/", name: "横浜市鶴見区" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14102/", name: "横浜市神奈川区" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14103/", name: "横浜市西区" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14104/", name: "横浜市中区" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14105/", name: "横浜市南区" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14106/", name: "横浜市保土ヶ谷区" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14107/", name: "横浜市磯子区" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14108/", name: "横浜市金沢区" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14109/", name: "横浜市港北区" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14110/", name: "横浜市戸塚区" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14111/", name: "横浜市港南区" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14112/", name: "横浜市旭区" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14113/", name: "横浜市緑区" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14114/", name: "横浜市瀬谷区" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14115/", name: "横浜市栄区" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14116/", name: "横浜市泉区" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14117/", name: "横浜市青葉区" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14118/", name: "横浜市都筑区" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14130/", name: "川崎市" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14131/", name: "川崎市川崎区" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14132/", name: "川崎市幸区" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14133/", name: "川崎市中原区" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14134/", name: "川崎市高津区" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14135/", name: "川崎市多摩区" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14136/", name: "川崎市宮前区" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14137/", name: "川崎市麻生区" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14201/", name: "横須賀市" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14203/", name: "平塚市" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14204/", name: "鎌倉市" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14205/", name: "藤沢市" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14207/", name: "茅ヶ崎市" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14208/", name: "逗子市" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14210/", name: "三浦市" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14213/", name: "大和市" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14215/", name: "海老名市" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14216/", name: "座間市" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14218/", name: "綾瀬市" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14301/", name: "葉山町" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14321/", name: "寒川町" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14341/", name: "大磯町" },
                    { url: "https://tenki.jp/forecast/3/17/4610/14342/", name: "二宮町" },
                ]
            },
            {
                name: "西部(小田原)",
                cities: [
                    { url: "https://tenki.jp/forecast/3/17/4620/14150/", name: "相模原市" },
                    { url: "https://tenki.jp/forecast/3/17/4620/14151/", name: "相模原市緑区" },
                    { url: "https://tenki.jp/forecast/3/17/4620/14152/", name: "相模原市中央区" },
                    { url: "https://tenki.jp/forecast/3/17/4620/14153/", name: "相模原市南区" },
                    { url: "https://tenki.jp/forecast/3/17/4620/14206/", name: "小田原市" },
                    { url: "https://tenki.jp/forecast/3/17/4620/14211/", name: "秦野市" },
                    { url: "https://tenki.jp/forecast/3/17/4620/14212/", name: "厚木市" },
                    { url: "https://tenki.jp/forecast/3/17/4620/14214/", name: "伊勢原市" },
                    { url: "https://tenki.jp/forecast/3/17/4620/14217/", name: "南足柄市" },
                    { url: "https://tenki.jp/forecast/3/17/4620/14361/", name: "中井町" },
                    { url: "https://tenki.jp/forecast/3/17/4620/14362/", name: "大井町" },
                    { url: "https://tenki.jp/forecast/3/17/4620/14363/", name: "松田町" },
                    { url: "https://tenki.jp/forecast/3/17/4620/14364/", name: "山北町" },
                    { url: "https://tenki.jp/forecast/3/17/4620/14366/", name: "開成町" },
                    { url: "https://tenki.jp/forecast/3/17/4620/14382/", name: "箱根町" },
                    { url: "https://tenki.jp/forecast/3/17/4620/14383/", name: "真鶴町" },
                    { url: "https://tenki.jp/forecast/3/17/4620/14384/", name: "湯河原町" },
                    { url: "https://tenki.jp/forecast/3/17/4620/14401/", name: "愛川町" },
                    { url: "https://tenki.jp/forecast/3/17/4620/14402/", name: "清川村" },
                ]
            },
        ]
    },
    {
        prefName: "青森県",
        subdivisions: [
            {
                name: "津軽(青森)",
                cities: [
                    { url: "https://tenki.jp/forecast/2/5/3110/2201/", name: "青森市" },
                    { url: "https://tenki.jp/forecast/2/5/3110/2202/", name: "弘前市" },
                    { url: "https://tenki.jp/forecast/2/5/3110/2204/", name: "黒石市" },
                    { url: "https://tenki.jp/forecast/2/5/3110/2205/", name: "五所川原市" },
                    { url: "https://tenki.jp/forecast/2/5/3110/2209/", name: "つがる市" },
                    { url: "https://tenki.jp/forecast/2/5/3110/2210/", name: "平川市" },
                    { url: "https://tenki.jp/forecast/2/5/3110/2301/", name: "平内町" },
                    { url: "https://tenki.jp/forecast/2/5/3110/2303/", name: "今別町" },
                    { url: "https://tenki.jp/forecast/2/5/3110/2304/", name: "蓬田村" },
                    { url: "https://tenki.jp/forecast/2/5/3110/2307/", name: "外ヶ浜町" },
                    { url: "https://tenki.jp/forecast/2/5/3110/2321/", name: "鰺ヶ沢町" },
                    { url: "https://tenki.jp/forecast/2/5/3110/2323/", name: "深浦町" },
                    { url: "https://tenki.jp/forecast/2/5/3110/2343/", name: "西目屋村" },
                    { url: "https://tenki.jp/forecast/2/5/3110/2361/", name: "藤崎町" },
                    { url: "https://tenki.jp/forecast/2/5/3110/2362/", name: "大鰐町" },
                    { url: "https://tenki.jp/forecast/2/5/3110/2367/", name: "田舎館村" },
                    { url: "https://tenki.jp/forecast/2/5/3110/2381/", name: "板柳町" },
                    { url: "https://tenki.jp/forecast/2/5/3110/2384/", name: "鶴田町" },
                    { url: "https://tenki.jp/forecast/2/5/3110/2387/", name: "中泊町" },
                ]
            },
            {
                name: "下北(むつ)",
                cities: [
                    { url: "https://tenki.jp/forecast/2/5/3120/2208/", name: "むつ市" },
                    { url: "https://tenki.jp/forecast/2/5/3120/2423/", name: "大間町" },
                    { url: "https://tenki.jp/forecast/2/5/3120/2424/", name: "東通村" },
                    { url: "https://tenki.jp/forecast/2/5/3120/2425/", name: "風間浦村" },
                    { url: "https://tenki.jp/forecast/2/5/3120/2426/", name: "佐井村" },
                ]
            },
            {
                name: "三八上北(八戸)",
                cities: [
                    { url: "https://tenki.jp/forecast/2/5/3130/2203/", name: "八戸市" },
                    { url: "https://tenki.jp/forecast/2/5/3130/2206/", name: "十和田市" },
                    { url: "https://tenki.jp/forecast/2/5/3130/2207/", name: "三沢市" },
                    { url: "https://tenki.jp/forecast/2/5/3130/2401/", name: "野辺地町" },
                    { url: "https://tenki.jp/forecast/2/5/3130/2402/", name: "七戸町" },
                    { url: "https://tenki.jp/forecast/2/5/3130/2405/", name: "六戸町" },
                    { url: "https://tenki.jp/forecast/2/5/3130/2406/", name: "横浜町" },
                    { url: "https://tenki.jp/forecast/2/5/3130/2408/", name: "東北町" },
                    { url: "https://tenki.jp/forecast/2/5/3130/2411/", name: "六ヶ所村" },
                    { url: "https://tenki.jp/forecast/2/5/3130/2412/", name: "おいらせ町" },
                    { url: "https://tenki.jp/forecast/2/5/3130/2441/", name: "三戸町" },
                    { url: "https://tenki.jp/forecast/2/5/3130/2442/", name: "五戸町" },
                    { url: "https://tenki.jp/forecast/2/5/3130/2443/", name: "田子町" },
                    { url: "https://tenki.jp/forecast/2/5/3130/2445/", name: "南部町" },
                    { url: "https://tenki.jp/forecast/2/5/3130/2446/", name: "階上町" },
                    { url: "https://tenki.jp/forecast/2/5/3130/2450/", name: "新郷村" },
                ]
            },
        ]
    },
    {
        prefName: "静岡県",
        subdivisions: [
            {
                name: "中部(静岡)",
                cities: [
                    { url: "https://tenki.jp/forecast/5/25/5010/22100/", name: "静岡市" },
                    { url: "https://tenki.jp/forecast/5/25/5010/22101/", name: "静岡市葵区" },
                    { url: "https://tenki.jp/forecast/5/25/5010/22102/", name: "静岡市駿河区" },
                    { url: "https://tenki.jp/forecast/5/25/5010/22103/", name: "静岡市清水区" },
                    { url: "https://tenki.jp/forecast/5/25/5010/22209/", name: "島田市" },
                    { url: "https://tenki.jp/forecast/5/25/5010/22212/", name: "焼津市" },
                    { url: "https://tenki.jp/forecast/5/25/5010/22214/", name: "藤枝市" },
                    { url: "https://tenki.jp/forecast/5/25/5010/22226/", name: "牧之原市" },
                    { url: "https://tenki.jp/forecast/5/25/5010/22424/", name: "吉田町" },
                    { url: "https://tenki.jp/forecast/5/25/5010/22429/", name: "川根本町" },
                ]
            },
            {
                name: "伊豆(網代)",
                cities: [
                    { url: "https://tenki.jp/forecast/5/25/5020/22205/", name: "熱海市" },
                    { url: "https://tenki.jp/forecast/5/25/5020/22208/", name: "伊東市" },
                    { url: "https://tenki.jp/forecast/5/25/5020/22219/", name: "下田市" },
                    { url: "https://tenki.jp/forecast/5/25/5020/22222/", name: "伊豆市" },
                    { url: "https://tenki.jp/forecast/5/25/5020/22225/", name: "伊豆の国市" },
                    { url: "https://tenki.jp/forecast/5/25/5020/22301/", name: "東伊豆町" },
                    { url: "https://tenki.jp/forecast/5/25/5020/22302/", name: "河津町" },
                    { url: "https://tenki.jp/forecast/5/25/5020/22304/", name: "南伊豆町" },
                    { url: "https://tenki.jp/forecast/5/25/5020/22305/", name: "松崎町" },
                    { url: "https://tenki.jp/forecast/5/25/5020/22306/", name: "西伊豆町" },
                    { url: "https://tenki.jp/forecast/5/25/5020/22325/", name: "函南町" },
                ]
            },
            {
                name: "東部(三島)",
                cities: [
                    { url: "https://tenki.jp/forecast/5/25/5030/22203/", name: "沼津市" },
                    { url: "https://tenki.jp/forecast/5/25/5030/22206/", name: "三島市" },
                    { url: "https://tenki.jp/forecast/5/25/5030/22207/", name: "富士宮市" },
                    { url: "https://tenki.jp/forecast/5/25/5030/22210/", name: "富士市" },
                    { url: "https://tenki.jp/forecast/5/25/5030/22215/", name: "御殿場市" },
                    { url: "https://tenki.jp/forecast/5/25/5030/22220/", name: "裾野市" },
                    { url: "https://tenki.jp/forecast/5/25/5030/22341/", name: "清水町" },
                    { url: "https://tenki.jp/forecast/5/25/5030/22342/", name: "長泉町" },
                    { url: "https://tenki.jp/forecast/5/25/5030/22344/", name: "小山町" },
                ]
            },
            {
                name: "西部(浜松)",
                cities: [
                    { url: "https://tenki.jp/forecast/5/25/5040/22130/", name: "浜松市" },
                    { url: "https://tenki.jp/forecast/5/25/5040/22138/", name: "浜松市中央区" },
                    { url: "https://tenki.jp/forecast/5/25/5040/22139/", name: "浜松市浜名区" },
                    { url: "https://tenki.jp/forecast/5/25/5040/22140/", name: "浜松市天竜区" },
                    { url: "https://tenki.jp/forecast/5/25/5040/22211/", name: "磐田市" },
                    { url: "https://tenki.jp/forecast/5/25/5040/22213/", name: "掛川市" },
                    { url: "https://tenki.jp/forecast/5/25/5040/22216/", name: "袋井市" },
                    { url: "https://tenki.jp/forecast/5/25/5040/22221/", name: "湖西市" },
                    { url: "https://tenki.jp/forecast/5/25/5040/22223/", name: "御前崎市" },
                    { url: "https://tenki.jp/forecast/5/25/5040/22224/", name: "菊川市" },
                    { url: "https://tenki.jp/forecast/5/25/5040/22461/", name: "森町" },
                ]
            },
        ]
    },
    {
        prefName: "石川県",
        subdivisions: [
            {
                name: "加賀(金沢)",
                cities: [
                    { url: "https://tenki.jp/forecast/4/20/5610/17201/", name: "金沢市" },
                    { url: "https://tenki.jp/forecast/4/20/5610/17203/", name: "小松市" },
                    { url: "https://tenki.jp/forecast/4/20/5610/17206/", name: "加賀市" },
                    { url: "https://tenki.jp/forecast/4/20/5610/17209/", name: "かほく市" },
                    { url: "https://tenki.jp/forecast/4/20/5610/17210/", name: "白山市" },
                    { url: "https://tenki.jp/forecast/4/20/5610/17211/", name: "能美市" },
                    { url: "https://tenki.jp/forecast/4/20/5610/17212/", name: "野々市市" },
                    { url: "https://tenki.jp/forecast/4/20/5610/17324/", name: "川北町" },
                    { url: "https://tenki.jp/forecast/4/20/5610/17361/", name: "津幡町" },
                    { url: "https://tenki.jp/forecast/4/20/5610/17365/", name: "内灘町" },
                ]
            },
            {
                name: "能登(輪島)",
                cities: [
                    { url: "https://tenki.jp/forecast/4/20/5620/17202/", name: "七尾市" },
                    { url: "https://tenki.jp/forecast/4/20/5620/17204/", name: "輪島市" },
                    { url: "https://tenki.jp/forecast/4/20/5620/17205/", name: "珠洲市" },
                    { url: "https://tenki.jp/forecast/4/20/5620/17207/", name: "羽咋市" },
                    { url: "https://tenki.jp/forecast/4/20/5620/17384/", name: "志賀町" },
                    { url: "https://tenki.jp/forecast/4/20/5620/17386/", name: "宝達志水町" },
                    { url: "https://tenki.jp/forecast/4/20/5620/17407/", name: "中能登町" },
                    { url: "https://tenki.jp/forecast/4/20/5620/17461/", name: "穴水町" },
                    { url: "https://tenki.jp/forecast/4/20/5620/17463/", name: "能登町" },
                ]
            },
        ]
    },
    {
        prefName: "千葉県",
        subdivisions: [
            {
                name: "北西部(千葉)",
                cities: [
                    { url: "https://tenki.jp/forecast/3/15/4510/12100/", name: "千葉市" },
                    { url: "https://tenki.jp/forecast/3/15/4510/12101/", name: "千葉市中央区" },
                    { url: "https://tenki.jp/forecast/3/15/4510/12102/", name: "千葉市花見川区" },
                    { url: "https://tenki.jp/forecast/3/15/4510/12103/", name: "千葉市稲毛区" },
                    { url: "https://tenki.jp/forecast/3/15/4510/12104/", name: "千葉市若葉区" },
                    { url: "https://tenki.jp/forecast/3/15/4510/12105/", name: "千葉市緑区" },
                    { url: "https://tenki.jp/forecast/3/15/4510/12106/", name: "千葉市美浜区" },
                    { url: "https://tenki.jp/forecast/3/15/4510/12203/", name: "市川市" },
                    { url: "https://tenki.jp/forecast/3/15/4510/12204/", name: "船橋市" },
                    { url: "https://tenki.jp/forecast/3/15/4510/12207/", name: "松戸市" },
                    { url: "https://tenki.jp/forecast/3/15/4510/12208/", name: "野田市" },
                    { url: "https://tenki.jp/forecast/3/15/4510/12211/", name: "成田市" },
                    { url: "https://tenki.jp/forecast/3/15/4510/12212/", name: "佐倉市" },
                    { url: "https://tenki.jp/forecast/3/15/4510/12216/", name: "習志野市" },
                    { url: "https://tenki.jp/forecast/3/15/4510/12217/", name: "柏市" },
                    { url: "https://tenki.jp/forecast/3/15/4510/12219/", name: "市原市" },
                    { url: "https://tenki.jp/forecast/3/15/4510/12220/", name: "流山市" },
                    { url: "https://tenki.jp/forecast/3/15/4510/12221/", name: "八千代市" },
                    { url: "https://tenki.jp/forecast/3/15/4510/12222/", name: "我孫子市" },
                    { url: "https://tenki.jp/forecast/3/15/4510/12224/", name: "鎌ヶ谷市" },
                    { url: "https://tenki.jp/forecast/3/15/4510/12227/", name: "浦安市" },
                    { url: "https://tenki.jp/forecast/3/15/4510/12228/", name: "四街道市" },
                    { url: "https://tenki.jp/forecast/3/15/4510/12230/", name: "八街市" },
                    { url: "https://tenki.jp/forecast/3/15/4510/12231/", name: "印西市" },
                    { url: "https://tenki.jp/forecast/3/15/4510/12232/", name: "白井市" },
                    { url: "https://tenki.jp/forecast/3/15/4510/12233/", name: "富里市" },
                    { url: "https://tenki.jp/forecast/3/15/4510/12322/", name: "酒々井町" },
                    { url: "https://tenki.jp/forecast/3/15/4510/12329/", name: "栄町" },
                ]
            },
            {
                name: "北東部(銚子)",
                cities: [
                    { url: "https://tenki.jp/forecast/3/15/4520/12202/", name: "銚子市" },
                    { url: "https://tenki.jp/forecast/3/15/4520/12210/", name: "茂原市" },
                    { url: "https://tenki.jp/forecast/3/15/4520/12213/", name: "東金市" },
                    { url: "https://tenki.jp/forecast/3/15/4520/12215/", name: "旭市" },
                    { url: "https://tenki.jp/forecast/3/15/4520/12235/", name: "匝瑳市" },
                    { url: "https://tenki.jp/forecast/3/15/4520/12236/", name: "香取市" },
                    { url: "https://tenki.jp/forecast/3/15/4520/12237/", name: "山武市" },
                    { url: "https://tenki.jp/forecast/3/15/4520/12239/", name: "大網白里市" },
                    { url: "https://tenki.jp/forecast/3/15/4520/12342/", name: "神崎町" },
                    { url: "https://tenki.jp/forecast/3/15/4520/12347/", name: "多古町" },
                    { url: "https://tenki.jp/forecast/3/15/4520/12349/", name: "東庄町" },
                    { url: "https://tenki.jp/forecast/3/15/4520/12403/", name: "九十九里町" },
                    { url: "https://tenki.jp/forecast/3/15/4520/12409/", name: "芝山町" },
                    { url: "https://tenki.jp/forecast/3/15/4520/12410/", name: "横芝光町" },
                    { url: "https://tenki.jp/forecast/3/15/4520/12421/", name: "一宮町" },
                    { url: "https://tenki.jp/forecast/3/15/4520/12422/", name: "睦沢町" },
                    { url: "https://tenki.jp/forecast/3/15/4520/12423/", name: "長生村" },
                    { url: "https://tenki.jp/forecast/3/15/4520/12424/", name: "白子町" },
                    { url: "https://tenki.jp/forecast/3/15/4520/12426/", name: "長柄町" },
                    { url: "https://tenki.jp/forecast/3/15/4520/12427/", name: "長南町" },
                ]
            },
            {
                name: "南部(館山)",
                cities: [
                    { url: "https://tenki.jp/forecast/3/15/4530/12205/", name: "館山市" },
                    { url: "https://tenki.jp/forecast/3/15/4530/12206/", name: "木更津市" },
                    { url: "https://tenki.jp/forecast/3/15/4530/12218/", name: "勝浦市" },
                    { url: "https://tenki.jp/forecast/3/15/4530/12223/", name: "鴨川市" },
                    { url: "https://tenki.jp/forecast/3/15/4530/12225/", name: "君津市" },
                    { url: "https://tenki.jp/forecast/3/15/4530/12226/", name: "富津市" },
                    { url: "https://tenki.jp/forecast/3/15/4530/12229/", name: "袖ケ浦市" },
                    { url: "https://tenki.jp/forecast/3/15/4530/12234/", name: "南房総市" },
                    { url: "https://tenki.jp/forecast/3/15/4530/12238/", name: "いすみ市" },
                    { url: "https://tenki.jp/forecast/3/15/4530/12441/", name: "大多喜町" },
                    { url: "https://tenki.jp/forecast/3/15/4530/12443/", name: "御宿町" },
                    { url: "https://tenki.jp/forecast/3/15/4530/12463/", name: "鋸南町" },
                ]
            },
        ]
    },
    {
        prefName: "大阪府",
        subdivisions: [
            {
                name: "大阪府(大阪)",
                cities: [
                    { url: "https://tenki.jp/forecast/6/30/6200/27100/", name: "大阪市" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27102/", name: "大阪市都島区" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27103/", name: "大阪市福島区" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27104/", name: "大阪市此花区" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27106/", name: "大阪市西区" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27107/", name: "大阪市港区" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27108/", name: "大阪市大正区" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27109/", name: "大阪市天王寺区" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27111/", name: "大阪市浪速区" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27113/", name: "大阪市西淀川区" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27114/", name: "大阪市東淀川区" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27115/", name: "大阪市東成区" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27116/", name: "大阪市生野区" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27117/", name: "大阪市旭区" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27118/", name: "大阪市城東区" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27119/", name: "大阪市阿倍野区" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27120/", name: "大阪市住吉区" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27121/", name: "大阪市東住吉区" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27122/", name: "大阪市西成区" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27123/", name: "大阪市淀川区" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27124/", name: "大阪市鶴見区" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27125/", name: "大阪市住之江区" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27126/", name: "大阪市平野区" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27127/", name: "大阪市北区" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27128/", name: "大阪市中央区" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27140/", name: "堺市" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27141/", name: "堺市堺区" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27142/", name: "堺市中区" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27143/", name: "堺市東区" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27144/", name: "堺市西区" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27145/", name: "堺市南区" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27146/", name: "堺市北区" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27147/", name: "堺市美原区" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27202/", name: "岸和田市" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27203/", name: "豊中市" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27204/", name: "池田市" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27205/", name: "吹田市" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27206/", name: "泉大津市" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27207/", name: "高槻市" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27208/", name: "貝塚市" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27209/", name: "守口市" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27210/", name: "枚方市" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27211/", name: "茨木市" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27212/", name: "八尾市" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27213/", name: "泉佐野市" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27214/", name: "富田林市" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27215/", name: "寝屋川市" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27216/", name: "河内長野市" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27217/", name: "松原市" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27218/", name: "大東市" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27219/", name: "和泉市" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27220/", name: "箕面市" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27221/", name: "柏原市" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27222/", name: "羽曳野市" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27223/", name: "門真市" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27224/", name: "摂津市" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27225/", name: "高石市" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27226/", name: "藤井寺市" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27227/", name: "東大阪市" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27228/", name: "泉南市" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27229/", name: "四條畷市" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27230/", name: "交野市" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27231/", name: "大阪狭山市" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27232/", name: "阪南市" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27301/", name: "島本町" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27321/", name: "豊能町" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27322/", name: "能勢町" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27341/", name: "忠岡町" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27361/", name: "熊取町" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27362/", name: "田尻町" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27366/", name: "岬町" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27381/", name: "太子町" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27382/", name: "河南町" },
                    { url: "https://tenki.jp/forecast/6/30/6200/27383/", name: "千早赤阪村" },
                ]
            },
        ]
    },
    {
        prefName: "大分県",
        subdivisions: [
            {
                name: "中部(大分)",
                cities: [
                    { url: "https://tenki.jp/forecast/9/47/8310/44201/", name: "大分市" },
                    { url: "https://tenki.jp/forecast/9/47/8310/44202/", name: "別府市" },
                    { url: "https://tenki.jp/forecast/9/47/8310/44206/", name: "臼杵市" },
                    { url: "https://tenki.jp/forecast/9/47/8310/44207/", name: "津久見市" },
                    { url: "https://tenki.jp/forecast/9/47/8310/44210/", name: "杵築市" },
                    { url: "https://tenki.jp/forecast/9/47/8310/44213/", name: "由布市" },
                    { url: "https://tenki.jp/forecast/9/47/8310/44341/", name: "日出町" },
                ]
            },
            {
                name: "北部(中津)",
                cities: [
                    { url: "https://tenki.jp/forecast/9/47/8320/44203/", name: "中津市" },
                    { url: "https://tenki.jp/forecast/9/47/8320/44209/", name: "豊後高田市" },
                    { url: "https://tenki.jp/forecast/9/47/8320/44211/", name: "宇佐市" },
                    { url: "https://tenki.jp/forecast/9/47/8320/44214/", name: "国東市" },
                    { url: "https://tenki.jp/forecast/9/47/8320/44322/", name: "姫島村" },
                ]
            },
            {
                name: "西部(日田)",
                cities: [
                    { url: "https://tenki.jp/forecast/9/47/8330/44204/", name: "日田市" },
                    { url: "https://tenki.jp/forecast/9/47/8330/44208/", name: "竹田市" },
                    { url: "https://tenki.jp/forecast/9/47/8330/44461/", name: "九重町" },
                    { url: "https://tenki.jp/forecast/9/47/8330/44462/", name: "玖珠町" },
                ]
            },
            {
                name: "南部(佐伯)",
                cities: [
                    { url: "https://tenki.jp/forecast/9/47/8340/44205/", name: "佐伯市" },
                    { url: "https://tenki.jp/forecast/9/47/8340/44212/", name: "豊後大野市" },
                ]
            },
        ]
    },
    {
        prefName: "長崎県",
        subdivisions: [
            {
                name: "南部(長崎)",
                cities: [
                    { url: "https://tenki.jp/forecast/9/45/8410/42201/", name: "長崎市" },
                    { url: "https://tenki.jp/forecast/9/45/8410/42203/", name: "島原市" },
                    { url: "https://tenki.jp/forecast/9/45/8410/42204/", name: "諫早市" },
                    { url: "https://tenki.jp/forecast/9/45/8410/42205/", name: "大村市" },
                    { url: "https://tenki.jp/forecast/9/45/8410/42212/", name: "西海市" },
                    { url: "https://tenki.jp/forecast/9/45/8410/42213/", name: "雲仙市" },
                    { url: "https://tenki.jp/forecast/9/45/8410/42214/", name: "南島原市" },
                    { url: "https://tenki.jp/forecast/9/45/8410/42307/", name: "長与町" },
                    { url: "https://tenki.jp/forecast/9/45/8410/42308/", name: "時津町" },
                ]
            },
            {
                name: "北部(佐世保)",
                cities: [
                    { url: "https://tenki.jp/forecast/9/45/8420/42202/", name: "佐世保市" },
                    { url: "https://tenki.jp/forecast/9/45/8420/42207/", name: "平戸市" },
                    { url: "https://tenki.jp/forecast/9/45/8420/42208/", name: "松浦市" },
                    { url: "https://tenki.jp/forecast/9/45/8420/42321/", name: "東彼杵町" },
                    { url: "https://tenki.jp/forecast/9/45/8420/42322/", name: "川棚町" },
                    { url: "https://tenki.jp/forecast/9/45/8420/42323/", name: "波佐見町" },
                    { url: "https://tenki.jp/forecast/9/45/8420/42391/", name: "佐々町" },
                ]
            },
            {
                name: "壱岐・対馬(厳原)",
                cities: [
                    { url: "https://tenki.jp/forecast/9/45/8430/42209/", name: "対馬市" },
                    { url: "https://tenki.jp/forecast/9/45/8430/42210/", name: "壱岐市" },
                ]
            },
            {
                name: "五島(福江)",
                cities: [
                    { url: "https://tenki.jp/forecast/9/45/8440/42211/", name: "五島市" },
                    { url: "https://tenki.jp/forecast/9/45/8440/42383/", name: "小値賀町" },
                    { url: "https://tenki.jp/forecast/9/45/8440/42411/", name: "新上五島町" },
                ]
            },
        ]
    },
    {
        prefName: "長野県",
        subdivisions: [
            {
                name: "北部(長野)",
                cities: [
                    { url: "https://tenki.jp/forecast/3/23/4810/20201/", name: "長野市" },
                    { url: "https://tenki.jp/forecast/3/23/4810/20207/", name: "須坂市" },
                    { url: "https://tenki.jp/forecast/3/23/4810/20211/", name: "中野市" },
                    { url: "https://tenki.jp/forecast/3/23/4810/20212/", name: "大町市" },
                    { url: "https://tenki.jp/forecast/3/23/4810/20213/", name: "飯山市" },
                    { url: "https://tenki.jp/forecast/3/23/4810/20218/", name: "千曲市" },
                    { url: "https://tenki.jp/forecast/3/23/4810/20481/", name: "池田町" },
                    { url: "https://tenki.jp/forecast/3/23/4810/20482/", name: "松川村" },
                    { url: "https://tenki.jp/forecast/3/23/4810/20485/", name: "白馬村" },
                    { url: "https://tenki.jp/forecast/3/23/4810/20486/", name: "小谷村" },
                    { url: "https://tenki.jp/forecast/3/23/4810/20521/", name: "坂城町" },
                    { url: "https://tenki.jp/forecast/3/23/4810/20541/", name: "小布施町" },
                    { url: "https://tenki.jp/forecast/3/23/4810/20543/", name: "高山村" },
                    { url: "https://tenki.jp/forecast/3/23/4810/20561/", name: "山ノ内町" },
                    { url: "https://tenki.jp/forecast/3/23/4810/20562/", name: "木島平村" },
                    { url: "https://tenki.jp/forecast/3/23/4810/20563/", name: "野沢温泉村" },
                    { url: "https://tenki.jp/forecast/3/23/4810/20583/", name: "信濃町" },
                    { url: "https://tenki.jp/forecast/3/23/4810/20588/", name: "小川村" },
                    { url: "https://tenki.jp/forecast/3/23/4810/20590/", name: "飯綱町" },
                    { url: "https://tenki.jp/forecast/3/23/4810/20602/", name: "栄村" },
                ]
            },
            {
                name: "中部(松本)",
                cities: [
                    { url: "https://tenki.jp/forecast/3/23/4820/20202/", name: "松本市" },
                    { url: "https://tenki.jp/forecast/3/23/4820/20203/", name: "上田市" },
                    { url: "https://tenki.jp/forecast/3/23/4820/20204/", name: "岡谷市" },
                    { url: "https://tenki.jp/forecast/3/23/4820/20206/", name: "諏訪市" },
                    { url: "https://tenki.jp/forecast/3/23/4820/20208/", name: "小諸市" },
                    { url: "https://tenki.jp/forecast/3/23/4820/20214/", name: "茅野市" },
                    { url: "https://tenki.jp/forecast/3/23/4820/20215/", name: "塩尻市" },
                    { url: "https://tenki.jp/forecast/3/23/4820/20217/", name: "佐久市" },
                    { url: "https://tenki.jp/forecast/3/23/4820/20219/", name: "東御市" },
                    { url: "https://tenki.jp/forecast/3/23/4820/20220/", name: "安曇野市" },
                    { url: "https://tenki.jp/forecast/3/23/4820/20303/", name: "小海町" },
                    { url: "https://tenki.jp/forecast/3/23/4820/20304/", name: "川上村" },
                    { url: "https://tenki.jp/forecast/3/23/4820/20305/", name: "南牧村" },
                    { url: "https://tenki.jp/forecast/3/23/4820/20306/", name: "南相木村" },
                    { url: "https://tenki.jp/forecast/3/23/4820/20307/", name: "北相木村" },
                    { url: "https://tenki.jp/forecast/3/23/4820/20309/", name: "佐久穂町" },
                    { url: "https://tenki.jp/forecast/3/23/4820/20321/", name: "軽井沢町" },
                    { url: "https://tenki.jp/forecast/3/23/4820/20323/", name: "御代田町" },
                    { url: "https://tenki.jp/forecast/3/23/4820/20324/", name: "立科町" },
                    { url: "https://tenki.jp/forecast/3/23/4820/20349/", name: "青木村" },
                    { url: "https://tenki.jp/forecast/3/23/4820/20350/", name: "長和町" },
                    { url: "https://tenki.jp/forecast/3/23/4820/20361/", name: "下諏訪町" },
                    { url: "https://tenki.jp/forecast/3/23/4820/20362/", name: "富士見町" },
                    { url: "https://tenki.jp/forecast/3/23/4820/20363/", name: "原村" },
                    { url: "https://tenki.jp/forecast/3/23/4820/20446/", name: "麻績村" },
                    { url: "https://tenki.jp/forecast/3/23/4820/20448/", name: "生坂村" },
                    { url: "https://tenki.jp/forecast/3/23/4820/20450/", name: "山形村" },
                    { url: "https://tenki.jp/forecast/3/23/4820/20451/", name: "朝日村" },
                    { url: "https://tenki.jp/forecast/3/23/4820/20452/", name: "筑北村" },
                ]
            },
            {
                name: "南部(飯田)",
                cities: [
                    { url: "https://tenki.jp/forecast/3/23/4830/20205/", name: "飯田市" },
                    { url: "https://tenki.jp/forecast/3/23/4830/20209/", name: "伊那市" },
                    { url: "https://tenki.jp/forecast/3/23/4830/20210/", name: "駒ヶ根市" },
                    { url: "https://tenki.jp/forecast/3/23/4830/20382/", name: "辰野町" },
                    { url: "https://tenki.jp/forecast/3/23/4830/20383/", name: "箕輪町" },
                    { url: "https://tenki.jp/forecast/3/23/4830/20384/", name: "飯島町" },
                    { url: "https://tenki.jp/forecast/3/23/4830/20385/", name: "南箕輪村" },
                    { url: "https://tenki.jp/forecast/3/23/4830/20386/", name: "中川村" },
                    { url: "https://tenki.jp/forecast/3/23/4830/20388/", name: "宮田村" },
                    { url: "https://tenki.jp/forecast/3/23/4830/20402/", name: "松川町" },
                    { url: "https://tenki.jp/forecast/3/23/4830/20403/", name: "高森町" },
                    { url: "https://tenki.jp/forecast/3/23/4830/20404/", name: "阿南町" },
                    { url: "https://tenki.jp/forecast/3/23/4830/20407/", name: "阿智村" },
                    { url: "https://tenki.jp/forecast/3/23/4830/20409/", name: "平谷村" },
                    { url: "https://tenki.jp/forecast/3/23/4830/20410/", name: "根羽村" },
                    { url: "https://tenki.jp/forecast/3/23/4830/20411/", name: "下條村" },
                    { url: "https://tenki.jp/forecast/3/23/4830/20412/", name: "売木村" },
                    { url: "https://tenki.jp/forecast/3/23/4830/20413/", name: "天龍村" },
                    { url: "https://tenki.jp/forecast/3/23/4830/20414/", name: "泰阜村" },
                    { url: "https://tenki.jp/forecast/3/23/4830/20415/", name: "喬木村" },
                    { url: "https://tenki.jp/forecast/3/23/4830/20416/", name: "豊丘村" },
                    { url: "https://tenki.jp/forecast/3/23/4830/20417/", name: "大鹿村" },
                    { url: "https://tenki.jp/forecast/3/23/4830/20422/", name: "上松町" },
                    { url: "https://tenki.jp/forecast/3/23/4830/20423/", name: "南木曽町" },
                    { url: "https://tenki.jp/forecast/3/23/4830/20425/", name: "木祖村" },
                    { url: "https://tenki.jp/forecast/3/23/4830/20429/", name: "王滝村" },
                    { url: "https://tenki.jp/forecast/3/23/4830/20430/", name: "大桑村" },
                    { url: "https://tenki.jp/forecast/3/23/4830/20432/", name: "木曽町" },
                ]
            },
        ]
    },
    {
        prefName: "鳥取県",
        subdivisions: [
            {
                name: "東部(鳥取)",
                cities: [
                    { url: "https://tenki.jp/forecast/7/34/6910/31201/", name: "鳥取市" },
                    { url: "https://tenki.jp/forecast/7/34/6910/31302/", name: "岩美町" },
                    { url: "https://tenki.jp/forecast/7/34/6910/31325/", name: "若桜町" },
                    { url: "https://tenki.jp/forecast/7/34/6910/31328/", name: "智頭町" },
                    { url: "https://tenki.jp/forecast/7/34/6910/31329/", name: "八頭町" },
                ]
            },
            {
                name: "中・西部(米子)",
                cities: [
                    { url: "https://tenki.jp/forecast/7/34/6920/31202/", name: "米子市" },
                    { url: "https://tenki.jp/forecast/7/34/6920/31203/", name: "倉吉市" },
                    { url: "https://tenki.jp/forecast/7/34/6920/31204/", name: "境港市" },
                    { url: "https://tenki.jp/forecast/7/34/6920/31364/", name: "三朝町" },
                    { url: "https://tenki.jp/forecast/7/34/6920/31370/", name: "湯梨浜町" },
                    { url: "https://tenki.jp/forecast/7/34/6920/31371/", name: "琴浦町" },
                    { url: "https://tenki.jp/forecast/7/34/6920/31372/", name: "北栄町" },
                    { url: "https://tenki.jp/forecast/7/34/6920/31384/", name: "日吉津村" },
                    { url: "https://tenki.jp/forecast/7/34/6920/31386/", name: "大山町" },
                    { url: "https://tenki.jp/forecast/7/34/6920/31389/", name: "南部町" },
                    { url: "https://tenki.jp/forecast/7/34/6920/31390/", name: "伯耆町" },
                    { url: "https://tenki.jp/forecast/7/34/6920/31401/", name: "日南町" },
                    { url: "https://tenki.jp/forecast/7/34/6920/31402/", name: "日野町" },
                    { url: "https://tenki.jp/forecast/7/34/6920/31403/", name: "江府町" },
                ]
            },
        ]
    },
    {
        prefName: "島根県",
        subdivisions: [
            {
                name: "東部(松江)",
                cities: [
                    { url: "https://tenki.jp/forecast/7/35/6810/32201/", name: "松江市" },
                    { url: "https://tenki.jp/forecast/7/35/6810/32203/", name: "出雲市" },
                    { url: "https://tenki.jp/forecast/7/35/6810/32206/", name: "安来市" },
                    { url: "https://tenki.jp/forecast/7/35/6810/32209/", name: "雲南市" },
                    { url: "https://tenki.jp/forecast/7/35/6810/32343/", name: "奥出雲町" },
                    { url: "https://tenki.jp/forecast/7/35/6810/32386/", name: "飯南町" },
                ]
            },
            {
                name: "西部(浜田)",
                cities: [
                    { url: "https://tenki.jp/forecast/7/35/6820/32202/", name: "浜田市" },
                    { url: "https://tenki.jp/forecast/7/35/6820/32204/", name: "益田市" },
                    { url: "https://tenki.jp/forecast/7/35/6820/32205/", name: "大田市" },
                    { url: "https://tenki.jp/forecast/7/35/6820/32207/", name: "江津市" },
                    { url: "https://tenki.jp/forecast/7/35/6820/32441/", name: "川本町" },
                    { url: "https://tenki.jp/forecast/7/35/6820/32448/", name: "美郷町" },
                    { url: "https://tenki.jp/forecast/7/35/6820/32449/", name: "邑南町" },
                    { url: "https://tenki.jp/forecast/7/35/6820/32501/", name: "津和野町" },
                    { url: "https://tenki.jp/forecast/7/35/6820/32505/", name: "吉賀町" },
                ]
            },
            {
                name: "隠岐(西郷)",
                cities: [
                    { url: "https://tenki.jp/forecast/7/35/6830/32525/", name: "海士町" },
                    { url: "https://tenki.jp/forecast/7/35/6830/32526/", name: "西ノ島町" },
                    { url: "https://tenki.jp/forecast/7/35/6830/32527/", name: "知夫村" },
                    { url: "https://tenki.jp/forecast/7/35/6830/32528/", name: "隠岐の島町" },
                ]
            },
        ]
    },
    {
        prefName: "東京都",
        subdivisions: [
            {
                name: "東京23区",
                cities: [
                    { url: "https://tenki.jp/forecast/3/16/4410/13101/", name: "千代田区" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13102/", name: "中央区" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13103/", name: "港区" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13104/", name: "新宿区" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13105/", name: "文京区" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13106/", name: "台東区" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13107/", name: "墨田区" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13108/", name: "江東区" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13109/", name: "品川区" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13110/", name: "目黒区" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13111/", name: "大田区" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13112/", name: "世田谷区" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13113/", name: "渋谷区" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13114/", name: "中野区" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13115/", name: "杉並区" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13116/", name: "豊島区" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13117/", name: "北区" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13118/", name: "荒川区" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13119/", name: "板橋区" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13120/", name: "練馬区" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13121/", name: "足立区" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13122/", name: "葛飾区" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13123/", name: "江戸川区" },
                ]
            },
            {
                name: "多摩",
                cities: [
                    { url: "https://tenki.jp/forecast/3/16/4410/13201/", name: "八王子市" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13202/", name: "立川市" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13203/", name: "武蔵野市" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13204/", name: "三鷹市" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13205/", name: "青梅市" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13206/", name: "府中市" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13207/", name: "昭島市" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13208/", name: "調布市" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13209/", name: "町田市" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13210/", name: "小金井市" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13211/", name: "小平市" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13212/", name: "日野市" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13213/", name: "東村山市" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13214/", name: "国分寺市" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13215/", name: "国立市" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13218/", name: "福生市" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13219/", name: "狛江市" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13220/", name: "東大和市" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13221/", name: "清瀬市" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13222/", name: "東久留米市" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13223/", name: "武蔵村山市" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13224/", name: "多摩市" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13225/", name: "稲城市" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13227/", name: "羽村市" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13228/", name: "あきる野市" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13229/", name: "西東京市" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13303/", name: "瑞穂町" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13305/", name: "日の出町" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13307/", name: "檜原村" },
                    { url: "https://tenki.jp/forecast/3/16/4410/13308/", name: "奥多摩町" },
                ]
            },
            {
                name: "伊豆諸島北部(大島)",
                cities: [
                    { url: "https://tenki.jp/forecast/3/16/4420/13361/", name: "大島町" },
                    { url: "https://tenki.jp/forecast/3/16/4420/13362/", name: "利島村" },
                    { url: "https://tenki.jp/forecast/3/16/4420/13363/", name: "新島村" },
                    { url: "https://tenki.jp/forecast/3/16/4420/13364/", name: "神津島村" },
                ]
            },
            {
                name: "伊豆諸島南部(八丈島)",
                cities: [
                    { url: "https://tenki.jp/forecast/3/16/4430/13381/", name: "三宅村" },
                    { url: "https://tenki.jp/forecast/3/16/4430/13382/", name: "御蔵島村" },
                    { url: "https://tenki.jp/forecast/3/16/4430/13401/", name: "八丈町" },
                    { url: "https://tenki.jp/forecast/3/16/4430/13402/", name: "青ヶ島村" },
                ]
            },
            {
                name: "小笠原諸島(父島)",
                cities: [
                    { url: "https://tenki.jp/forecast/3/16/4440/13421/", name: "小笠原村" },
                ]
            },
        ]
    },
    {
        prefName: "道央",
        subdivisions: [
            {
                name: "石狩地方(札幌)",
                cities: [
                    { url: "https://tenki.jp/forecast/1/2/1400/1100/", name: "札幌市" },
                    { url: "https://tenki.jp/forecast/1/2/1400/1101/", name: "札幌市中央区" },
                    { url: "https://tenki.jp/forecast/1/2/1400/1102/", name: "札幌市北区" },
                    { url: "https://tenki.jp/forecast/1/2/1400/1103/", name: "札幌市東区" },
                    { url: "https://tenki.jp/forecast/1/2/1400/1104/", name: "札幌市白石区" },
                    { url: "https://tenki.jp/forecast/1/2/1400/1105/", name: "札幌市豊平区" },
                    { url: "https://tenki.jp/forecast/1/2/1400/1106/", name: "札幌市南区" },
                    { url: "https://tenki.jp/forecast/1/2/1400/1107/", name: "札幌市西区" },
                    { url: "https://tenki.jp/forecast/1/2/1400/1108/", name: "札幌市厚別区" },
                    { url: "https://tenki.jp/forecast/1/2/1400/1109/", name: "札幌市手稲区" },
                    { url: "https://tenki.jp/forecast/1/2/1400/1110/", name: "札幌市清田区" },
                    { url: "https://tenki.jp/forecast/1/2/1400/1217/", name: "江別市" },
                    { url: "https://tenki.jp/forecast/1/2/1400/1224/", name: "千歳市" },
                    { url: "https://tenki.jp/forecast/1/2/1400/1231/", name: "恵庭市" },
                    { url: "https://tenki.jp/forecast/1/2/1400/1234/", name: "北広島市" },
                    { url: "https://tenki.jp/forecast/1/2/1400/1235/", name: "石狩市" },
                    { url: "https://tenki.jp/forecast/1/2/1400/1303/", name: "当別町" },
                    { url: "https://tenki.jp/forecast/1/2/1400/1304/", name: "新篠津村" },
                ]
            },
            {
                name: "空知地方(岩見沢)",
                cities: [
                    { url: "https://tenki.jp/forecast/1/2/1500/1209/", name: "夕張市" },
                    { url: "https://tenki.jp/forecast/1/2/1500/1210/", name: "岩見沢市" },
                    { url: "https://tenki.jp/forecast/1/2/1500/1215/", name: "美唄市" },
                    { url: "https://tenki.jp/forecast/1/2/1500/1216/", name: "芦別市" },
                    { url: "https://tenki.jp/forecast/1/2/1500/1218/", name: "赤平市" },
                    { url: "https://tenki.jp/forecast/1/2/1500/1222/", name: "三笠市" },
                    { url: "https://tenki.jp/forecast/1/2/1500/1225/", name: "滝川市" },
                    { url: "https://tenki.jp/forecast/1/2/1500/1226/", name: "砂川市" },
                    { url: "https://tenki.jp/forecast/1/2/1500/1227/", name: "歌志内市" },
                    { url: "https://tenki.jp/forecast/1/2/1500/1228/", name: "深川市" },
                    { url: "https://tenki.jp/forecast/1/2/1500/1423/", name: "南幌町" },
                    { url: "https://tenki.jp/forecast/1/2/1500/1424/", name: "奈井江町" },
                    { url: "https://tenki.jp/forecast/1/2/1500/1425/", name: "上砂川町" },
                    { url: "https://tenki.jp/forecast/1/2/1500/1427/", name: "由仁町" },
                    { url: "https://tenki.jp/forecast/1/2/1500/1428/", name: "長沼町" },
                    { url: "https://tenki.jp/forecast/1/2/1500/1429/", name: "栗山町" },
                    { url: "https://tenki.jp/forecast/1/2/1500/1430/", name: "月形町" },
                    { url: "https://tenki.jp/forecast/1/2/1500/1431/", name: "浦臼町" },
                    { url: "https://tenki.jp/forecast/1/2/1500/1432/", name: "新十津川町" },
                    { url: "https://tenki.jp/forecast/1/2/1500/1433/", name: "妹背牛町" },
                    { url: "https://tenki.jp/forecast/1/2/1500/1434/", name: "秩父別町" },
                    { url: "https://tenki.jp/forecast/1/2/1500/1436/", name: "雨竜町" },
                    { url: "https://tenki.jp/forecast/1/2/1500/1437/", name: "北竜町" },
                    { url: "https://tenki.jp/forecast/1/2/1500/1438/", name: "沼田町" },
                ]
            },
            {
                name: "後志地方(倶知安)",
                cities: [
                    { url: "https://tenki.jp/forecast/1/2/1600/1203/", name: "小樽市" },
                    { url: "https://tenki.jp/forecast/1/2/1600/1391/", name: "島牧村" },
                    { url: "https://tenki.jp/forecast/1/2/1600/1392/", name: "寿都町" },
                    { url: "https://tenki.jp/forecast/1/2/1600/1393/", name: "黒松内町" },
                    { url: "https://tenki.jp/forecast/1/2/1600/1394/", name: "蘭越町" },
                    { url: "https://tenki.jp/forecast/1/2/1600/1395/", name: "ニセコ町" },
                    { url: "https://tenki.jp/forecast/1/2/1600/1396/", name: "真狩村" },
                    { url: "https://tenki.jp/forecast/1/2/1600/1397/", name: "留寿都村" },
                    { url: "https://tenki.jp/forecast/1/2/1600/1398/", name: "喜茂別町" },
                    { url: "https://tenki.jp/forecast/1/2/1600/1399/", name: "京極町" },
                    { url: "https://tenki.jp/forecast/1/2/1600/1400/", name: "倶知安町" },
                    { url: "https://tenki.jp/forecast/1/2/1600/1401/", name: "共和町" },
                    { url: "https://tenki.jp/forecast/1/2/1600/1402/", name: "岩内町" },
                    { url: "https://tenki.jp/forecast/1/2/1600/1403/", name: "泊村" },
                    { url: "https://tenki.jp/forecast/1/2/1600/1404/", name: "神恵内村" },
                    { url: "https://tenki.jp/forecast/1/2/1600/1405/", name: "積丹町" },
                    { url: "https://tenki.jp/forecast/1/2/1600/1406/", name: "古平町" },
                    { url: "https://tenki.jp/forecast/1/2/1600/1407/", name: "仁木町" },
                    { url: "https://tenki.jp/forecast/1/2/1600/1408/", name: "余市町" },
                    { url: "https://tenki.jp/forecast/1/2/1600/1409/", name: "赤井川村" },
                ]
            },
        ]
    },
    {
        prefName: "道東",
        subdivisions: [
            {
                name: "網走地方(網走)",
                cities: [
                    { url: "https://tenki.jp/forecast/1/3/1710/1211/", name: "網走市" },
                    { url: "https://tenki.jp/forecast/1/3/1710/1543/", name: "美幌町" },
                    { url: "https://tenki.jp/forecast/1/3/1710/1544/", name: "津別町" },
                    { url: "https://tenki.jp/forecast/1/3/1710/1545/", name: "斜里町" },
                    { url: "https://tenki.jp/forecast/1/3/1710/1546/", name: "清里町" },
                    { url: "https://tenki.jp/forecast/1/3/1710/1547/", name: "小清水町" },
                    { url: "https://tenki.jp/forecast/1/3/1710/1552/", name: "佐呂間町" },
                    { url: "https://tenki.jp/forecast/1/3/1710/1564/", name: "大空町" },
                ]
            },
            {
                name: "北見地方(北見)",
                cities: [
                    { url: "https://tenki.jp/forecast/1/3/1720/1208/", name: "北見市" },
                    { url: "https://tenki.jp/forecast/1/3/1720/1549/", name: "訓子府町" },
                    { url: "https://tenki.jp/forecast/1/3/1720/1550/", name: "置戸町" },
                ]
            },
            {
                name: "紋別地方(紋別)",
                cities: [
                    { url: "https://tenki.jp/forecast/1/3/1730/1219/", name: "紋別市" },
                    { url: "https://tenki.jp/forecast/1/3/1730/1555/", name: "遠軽町" },
                    { url: "https://tenki.jp/forecast/1/3/1730/1559/", name: "湧別町" },
                    { url: "https://tenki.jp/forecast/1/3/1730/1560/", name: "滝上町" },
                    { url: "https://tenki.jp/forecast/1/3/1730/1561/", name: "興部町" },
                    { url: "https://tenki.jp/forecast/1/3/1730/1562/", name: "西興部村" },
                    { url: "https://tenki.jp/forecast/1/3/1730/1563/", name: "雄武町" },
                ]
            },
            {
                name: "根室地方(根室)",
                cities: [
                    { url: "https://tenki.jp/forecast/1/3/1800/1223/", name: "根室市" },
                    { url: "https://tenki.jp/forecast/1/3/1800/1691/", name: "別海町" },
                    { url: "https://tenki.jp/forecast/1/3/1800/1692/", name: "中標津町" },
                    { url: "https://tenki.jp/forecast/1/3/1800/1693/", name: "標津町" },
                    { url: "https://tenki.jp/forecast/1/3/1800/1694/", name: "羅臼町" },
                ]
            },
            {
                name: "釧路地方(釧路)",
                cities: [
                    { url: "https://tenki.jp/forecast/1/3/1900/1206/", name: "釧路市" },
                    { url: "https://tenki.jp/forecast/1/3/1900/1661/", name: "釧路町" },
                    { url: "https://tenki.jp/forecast/1/3/1900/1662/", name: "厚岸町" },
                    { url: "https://tenki.jp/forecast/1/3/1900/1663/", name: "浜中町" },
                    { url: "https://tenki.jp/forecast/1/3/1900/1664/", name: "標茶町" },
                    { url: "https://tenki.jp/forecast/1/3/1900/1665/", name: "弟子屈町" },
                    { url: "https://tenki.jp/forecast/1/3/1900/1667/", name: "鶴居村" },
                    { url: "https://tenki.jp/forecast/1/3/1900/1668/", name: "白糠町" },
                ]
            },
            {
                name: "十勝地方(帯広)",
                cities: [
                    { url: "https://tenki.jp/forecast/1/3/2000/1207/", name: "帯広市" },
                    { url: "https://tenki.jp/forecast/1/3/2000/1631/", name: "音更町" },
                    { url: "https://tenki.jp/forecast/1/3/2000/1632/", name: "士幌町" },
                    { url: "https://tenki.jp/forecast/1/3/2000/1633/", name: "上士幌町" },
                    { url: "https://tenki.jp/forecast/1/3/2000/1634/", name: "鹿追町" },
                    { url: "https://tenki.jp/forecast/1/3/2000/1635/", name: "新得町" },
                    { url: "https://tenki.jp/forecast/1/3/2000/1636/", name: "清水町" },
                    { url: "https://tenki.jp/forecast/1/3/2000/1637/", name: "芽室町" },
                    { url: "https://tenki.jp/forecast/1/3/2000/1638/", name: "中札内村" },
                    { url: "https://tenki.jp/forecast/1/3/2000/1639/", name: "更別村" },
                    { url: "https://tenki.jp/forecast/1/3/2000/1641/", name: "大樹町" },
                    { url: "https://tenki.jp/forecast/1/3/2000/1642/", name: "広尾町" },
                    { url: "https://tenki.jp/forecast/1/3/2000/1643/", name: "幕別町" },
                    { url: "https://tenki.jp/forecast/1/3/2000/1644/", name: "池田町" },
                    { url: "https://tenki.jp/forecast/1/3/2000/1645/", name: "豊頃町" },
                    { url: "https://tenki.jp/forecast/1/3/2000/1646/", name: "本別町" },
                    { url: "https://tenki.jp/forecast/1/3/2000/1647/", name: "足寄町" },
                    { url: "https://tenki.jp/forecast/1/3/2000/1648/", name: "陸別町" },
                    { url: "https://tenki.jp/forecast/1/3/2000/1649/", name: "浦幌町" },
                ]
            },
        ]
    },
    {
        prefName: "道南",
        subdivisions: [
            {
                name: "胆振地方(室蘭)",
                cities: [
                    { url: "https://tenki.jp/forecast/1/4/2100/1205/", name: "室蘭市" },
                    { url: "https://tenki.jp/forecast/1/4/2100/1213/", name: "苫小牧市" },
                    { url: "https://tenki.jp/forecast/1/4/2100/1230/", name: "登別市" },
                    { url: "https://tenki.jp/forecast/1/4/2100/1233/", name: "伊達市" },
                    { url: "https://tenki.jp/forecast/1/4/2100/1571/", name: "豊浦町" },
                    { url: "https://tenki.jp/forecast/1/4/2100/1575/", name: "壮瞥町" },
                    { url: "https://tenki.jp/forecast/1/4/2100/1578/", name: "白老町" },
                    { url: "https://tenki.jp/forecast/1/4/2100/1581/", name: "厚真町" },
                    { url: "https://tenki.jp/forecast/1/4/2100/1584/", name: "洞爺湖町" },
                    { url: "https://tenki.jp/forecast/1/4/2100/1585/", name: "安平町" },
                    { url: "https://tenki.jp/forecast/1/4/2100/1586/", name: "むかわ町" },
                ]
            },
            {
                name: "日高地方(浦河)",
                cities: [
                    { url: "https://tenki.jp/forecast/1/4/2200/1601/", name: "日高町" },
                    { url: "https://tenki.jp/forecast/1/4/2200/1602/", name: "平取町" },
                    { url: "https://tenki.jp/forecast/1/4/2200/1604/", name: "新冠町" },
                    { url: "https://tenki.jp/forecast/1/4/2200/1607/", name: "浦河町" },
                    { url: "https://tenki.jp/forecast/1/4/2200/1608/", name: "様似町" },
                    { url: "https://tenki.jp/forecast/1/4/2200/1609/", name: "えりも町" },
                    { url: "https://tenki.jp/forecast/1/4/2200/1610/", name: "新ひだか町" },
                ]
            },
            {
                name: "渡島地方(函館)",
                cities: [
                    { url: "https://tenki.jp/forecast/1/4/2300/1202/", name: "函館市" },
                    { url: "https://tenki.jp/forecast/1/4/2300/1236/", name: "北斗市" },
                    { url: "https://tenki.jp/forecast/1/4/2300/1331/", name: "松前町" },
                    { url: "https://tenki.jp/forecast/1/4/2300/1332/", name: "福島町" },
                    { url: "https://tenki.jp/forecast/1/4/2300/1333/", name: "知内町" },
                    { url: "https://tenki.jp/forecast/1/4/2300/1334/", name: "木古内町" },
                    { url: "https://tenki.jp/forecast/1/4/2300/1337/", name: "七飯町" },
                    { url: "https://tenki.jp/forecast/1/4/2300/1343/", name: "鹿部町" },
                    { url: "https://tenki.jp/forecast/1/4/2300/1345/", name: "森町" },
                    { url: "https://tenki.jp/forecast/1/4/2300/1346/", name: "八雲町" },
                    { url: "https://tenki.jp/forecast/1/4/2300/1347/", name: "長万部町" },
                ]
            },
            {
                name: "檜山地方(江差)",
                cities: [
                    { url: "https://tenki.jp/forecast/1/4/2400/1361/", name: "江差町" },
                    { url: "https://tenki.jp/forecast/1/4/2400/1362/", name: "上ノ国町" },
                    { url: "https://tenki.jp/forecast/1/4/2400/1363/", name: "厚沢部町" },
                    { url: "https://tenki.jp/forecast/1/4/2400/1364/", name: "乙部町" },
                    { url: "https://tenki.jp/forecast/1/4/2400/1367/", name: "奥尻町" },
                    { url: "https://tenki.jp/forecast/1/4/2400/1370/", name: "今金町" },
                    { url: "https://tenki.jp/forecast/1/4/2400/1371/", name: "せたな町" },
                ]
            },
        ]
    },
    {
        prefName: "道北",
        subdivisions: [
            {
                name: "宗谷地方(稚内)",
                cities: [
                    { url: "https://tenki.jp/forecast/1/1/1100/1214/", name: "稚内市" },
                    { url: "https://tenki.jp/forecast/1/1/1100/1511/", name: "猿払村" },
                    { url: "https://tenki.jp/forecast/1/1/1100/1512/", name: "浜頓別町" },
                    { url: "https://tenki.jp/forecast/1/1/1100/1513/", name: "中頓別町" },
                    { url: "https://tenki.jp/forecast/1/1/1100/1514/", name: "枝幸町" },
                    { url: "https://tenki.jp/forecast/1/1/1100/1516/", name: "豊富町" },
                    { url: "https://tenki.jp/forecast/1/1/1100/1517/", name: "礼文町" },
                    { url: "https://tenki.jp/forecast/1/1/1100/1518/", name: "利尻町" },
                    { url: "https://tenki.jp/forecast/1/1/1100/1519/", name: "利尻富士町" },
                    { url: "https://tenki.jp/forecast/1/1/1100/1520/", name: "幌延町" },
                ]
            },
            {
                name: "上川地方(旭川)",
                cities: [
                    { url: "https://tenki.jp/forecast/1/1/1200/1204/", name: "旭川市" },
                    { url: "https://tenki.jp/forecast/1/1/1200/1220/", name: "士別市" },
                    { url: "https://tenki.jp/forecast/1/1/1200/1221/", name: "名寄市" },
                    { url: "https://tenki.jp/forecast/1/1/1200/1229/", name: "富良野市" },
                    { url: "https://tenki.jp/forecast/1/1/1200/1452/", name: "鷹栖町" },
                    { url: "https://tenki.jp/forecast/1/1/1200/1453/", name: "東神楽町" },
                    { url: "https://tenki.jp/forecast/1/1/1200/1454/", name: "当麻町" },
                    { url: "https://tenki.jp/forecast/1/1/1200/1455/", name: "比布町" },
                    { url: "https://tenki.jp/forecast/1/1/1200/1456/", name: "愛別町" },
                    { url: "https://tenki.jp/forecast/1/1/1200/1457/", name: "上川町" },
                    { url: "https://tenki.jp/forecast/1/1/1200/1458/", name: "東川町" },
                    { url: "https://tenki.jp/forecast/1/1/1200/1459/", name: "美瑛町" },
                    { url: "https://tenki.jp/forecast/1/1/1200/1460/", name: "上富良野町" },
                    { url: "https://tenki.jp/forecast/1/1/1200/1461/", name: "中富良野町" },
                    { url: "https://tenki.jp/forecast/1/1/1200/1462/", name: "南富良野町" },
                    { url: "https://tenki.jp/forecast/1/1/1200/1463/", name: "占冠村" },
                    { url: "https://tenki.jp/forecast/1/1/1200/1464/", name: "和寒町" },
                    { url: "https://tenki.jp/forecast/1/1/1200/1465/", name: "剣淵町" },
                    { url: "https://tenki.jp/forecast/1/1/1200/1468/", name: "下川町" },
                    { url: "https://tenki.jp/forecast/1/1/1200/1469/", name: "美深町" },
                    { url: "https://tenki.jp/forecast/1/1/1200/1470/", name: "音威子府村" },
                    { url: "https://tenki.jp/forecast/1/1/1200/1471/", name: "中川町" },
                    { url: "https://tenki.jp/forecast/1/1/1200/1472/", name: "幌加内町" },
                ]
            },
            {
                name: "留萌地方(留萌)",
                cities: [
                    { url: "https://tenki.jp/forecast/1/1/1300/1212/", name: "留萌市" },
                    { url: "https://tenki.jp/forecast/1/1/1300/1481/", name: "増毛町" },
                    { url: "https://tenki.jp/forecast/1/1/1300/1482/", name: "小平町" },
                    { url: "https://tenki.jp/forecast/1/1/1300/1483/", name: "苫前町" },
                    { url: "https://tenki.jp/forecast/1/1/1300/1484/", name: "羽幌町" },
                    { url: "https://tenki.jp/forecast/1/1/1300/1485/", name: "初山別村" },
                    { url: "https://tenki.jp/forecast/1/1/1300/1486/", name: "遠別町" },
                    { url: "https://tenki.jp/forecast/1/1/1300/1487/", name: "天塩町" },
                ]
            },
        ]
    },
    {
        prefName: "徳島県",
        subdivisions: [
            {
                name: "北部(徳島)",
                cities: [
                    { url: "https://tenki.jp/forecast/8/39/7110/36201/", name: "徳島市" },
                    { url: "https://tenki.jp/forecast/8/39/7110/36202/", name: "鳴門市" },
                    { url: "https://tenki.jp/forecast/8/39/7110/36203/", name: "小松島市" },
                    { url: "https://tenki.jp/forecast/8/39/7110/36205/", name: "吉野川市" },
                    { url: "https://tenki.jp/forecast/8/39/7110/36206/", name: "阿波市" },
                    { url: "https://tenki.jp/forecast/8/39/7110/36207/", name: "美馬市" },
                    { url: "https://tenki.jp/forecast/8/39/7110/36208/", name: "三好市" },
                    { url: "https://tenki.jp/forecast/8/39/7110/36321/", name: "佐那河内村" },
                    { url: "https://tenki.jp/forecast/8/39/7110/36341/", name: "石井町" },
                    { url: "https://tenki.jp/forecast/8/39/7110/36342/", name: "神山町" },
                    { url: "https://tenki.jp/forecast/8/39/7110/36401/", name: "松茂町" },
                    { url: "https://tenki.jp/forecast/8/39/7110/36402/", name: "北島町" },
                    { url: "https://tenki.jp/forecast/8/39/7110/36403/", name: "藍住町" },
                    { url: "https://tenki.jp/forecast/8/39/7110/36404/", name: "板野町" },
                    { url: "https://tenki.jp/forecast/8/39/7110/36405/", name: "上板町" },
                    { url: "https://tenki.jp/forecast/8/39/7110/36468/", name: "つるぎ町" },
                    { url: "https://tenki.jp/forecast/8/39/7110/36489/", name: "東みよし町" },
                ]
            },
            {
                name: "南部(日和佐)",
                cities: [
                    { url: "https://tenki.jp/forecast/8/39/7120/36204/", name: "阿南市" },
                    { url: "https://tenki.jp/forecast/8/39/7120/36301/", name: "勝浦町" },
                    { url: "https://tenki.jp/forecast/8/39/7120/36302/", name: "上勝町" },
                    { url: "https://tenki.jp/forecast/8/39/7120/36368/", name: "那賀町" },
                    { url: "https://tenki.jp/forecast/8/39/7120/36383/", name: "牟岐町" },
                    { url: "https://tenki.jp/forecast/8/39/7120/36387/", name: "美波町" },
                    { url: "https://tenki.jp/forecast/8/39/7120/36388/", name: "海陽町" },
                ]
            },
        ]
    },
    {
        prefName: "栃木県",
        subdivisions: [
            {
                name: "南部(宇都宮)",
                cities: [
                    { url: "https://tenki.jp/forecast/3/12/4110/9201/", name: "宇都宮市" },
                    { url: "https://tenki.jp/forecast/3/12/4110/9202/", name: "足利市" },
                    { url: "https://tenki.jp/forecast/3/12/4110/9203/", name: "栃木市" },
                    { url: "https://tenki.jp/forecast/3/12/4110/9204/", name: "佐野市" },
                    { url: "https://tenki.jp/forecast/3/12/4110/9205/", name: "鹿沼市" },
                    { url: "https://tenki.jp/forecast/3/12/4110/9208/", name: "小山市" },
                    { url: "https://tenki.jp/forecast/3/12/4110/9209/", name: "真岡市" },
                    { url: "https://tenki.jp/forecast/3/12/4110/9214/", name: "さくら市" },
                    { url: "https://tenki.jp/forecast/3/12/4110/9215/", name: "那須烏山市" },
                    { url: "https://tenki.jp/forecast/3/12/4110/9216/", name: "下野市" },
                    { url: "https://tenki.jp/forecast/3/12/4110/9301/", name: "上三川町" },
                    { url: "https://tenki.jp/forecast/3/12/4110/9342/", name: "益子町" },
                    { url: "https://tenki.jp/forecast/3/12/4110/9343/", name: "茂木町" },
                    { url: "https://tenki.jp/forecast/3/12/4110/9344/", name: "市貝町" },
                    { url: "https://tenki.jp/forecast/3/12/4110/9345/", name: "芳賀町" },
                    { url: "https://tenki.jp/forecast/3/12/4110/9361/", name: "壬生町" },
                    { url: "https://tenki.jp/forecast/3/12/4110/9364/", name: "野木町" },
                    { url: "https://tenki.jp/forecast/3/12/4110/9386/", name: "高根沢町" },
                    { url: "https://tenki.jp/forecast/3/12/4110/9411/", name: "那珂川町" },
                ]
            },
            {
                name: "北部(大田原)",
                cities: [
                    { url: "https://tenki.jp/forecast/3/12/4120/9206/", name: "日光市" },
                    { url: "https://tenki.jp/forecast/3/12/4120/9210/", name: "大田原市" },
                    { url: "https://tenki.jp/forecast/3/12/4120/9211/", name: "矢板市" },
                    { url: "https://tenki.jp/forecast/3/12/4120/9213/", name: "那須塩原市" },
                    { url: "https://tenki.jp/forecast/3/12/4120/9384/", name: "塩谷町" },
                    { url: "https://tenki.jp/forecast/3/12/4120/9407/", name: "那須町" },
                ]
            },
        ]
    },
    {
        prefName: "奈良県",
        subdivisions: [
            {
                name: "北部(奈良)",
                cities: [
                    { url: "https://tenki.jp/forecast/6/32/6410/29201/", name: "奈良市" },
                    { url: "https://tenki.jp/forecast/6/32/6410/29202/", name: "大和高田市" },
                    { url: "https://tenki.jp/forecast/6/32/6410/29203/", name: "大和郡山市" },
                    { url: "https://tenki.jp/forecast/6/32/6410/29204/", name: "天理市" },
                    { url: "https://tenki.jp/forecast/6/32/6410/29205/", name: "橿原市" },
                    { url: "https://tenki.jp/forecast/6/32/6410/29206/", name: "桜井市" },
                    { url: "https://tenki.jp/forecast/6/32/6410/29207/", name: "五條市" },
                    { url: "https://tenki.jp/forecast/6/32/6410/29208/", name: "御所市" },
                    { url: "https://tenki.jp/forecast/6/32/6410/29209/", name: "生駒市" },
                    { url: "https://tenki.jp/forecast/6/32/6410/29210/", name: "香芝市" },
                    { url: "https://tenki.jp/forecast/6/32/6410/29211/", name: "葛城市" },
                    { url: "https://tenki.jp/forecast/6/32/6410/29212/", name: "宇陀市" },
                    { url: "https://tenki.jp/forecast/6/32/6410/29322/", name: "山添村" },
                    { url: "https://tenki.jp/forecast/6/32/6410/29342/", name: "平群町" },
                    { url: "https://tenki.jp/forecast/6/32/6410/29343/", name: "三郷町" },
                    { url: "https://tenki.jp/forecast/6/32/6410/29344/", name: "斑鳩町" },
                    { url: "https://tenki.jp/forecast/6/32/6410/29345/", name: "安堵町" },
                    { url: "https://tenki.jp/forecast/6/32/6410/29361/", name: "川西町" },
                    { url: "https://tenki.jp/forecast/6/32/6410/29362/", name: "三宅町" },
                    { url: "https://tenki.jp/forecast/6/32/6410/29363/", name: "田原本町" },
                    { url: "https://tenki.jp/forecast/6/32/6410/29401/", name: "高取町" },
                    { url: "https://tenki.jp/forecast/6/32/6410/29402/", name: "明日香村" },
                    { url: "https://tenki.jp/forecast/6/32/6410/29424/", name: "上牧町" },
                    { url: "https://tenki.jp/forecast/6/32/6410/29425/", name: "王寺町" },
                    { url: "https://tenki.jp/forecast/6/32/6410/29426/", name: "広陵町" },
                    { url: "https://tenki.jp/forecast/6/32/6410/29427/", name: "河合町" },
                    { url: "https://tenki.jp/forecast/6/32/6410/29441/", name: "吉野町" },
                    { url: "https://tenki.jp/forecast/6/32/6410/29442/", name: "大淀町" },
                    { url: "https://tenki.jp/forecast/6/32/6410/29443/", name: "下市町" },
                ]
            },
            {
                name: "南部(風屋)",
                cities: [
                    { url: "https://tenki.jp/forecast/6/32/6420/29385/", name: "曽爾村" },
                    { url: "https://tenki.jp/forecast/6/32/6420/29386/", name: "御杖村" },
                    { url: "https://tenki.jp/forecast/6/32/6420/29444/", name: "黒滝村" },
                    { url: "https://tenki.jp/forecast/6/32/6420/29446/", name: "天川村" },
                    { url: "https://tenki.jp/forecast/6/32/6420/29447/", name: "野迫川村" },
                    { url: "https://tenki.jp/forecast/6/32/6420/29449/", name: "十津川村" },
                    { url: "https://tenki.jp/forecast/6/32/6420/29450/", name: "下北山村" },
                    { url: "https://tenki.jp/forecast/6/32/6420/29451/", name: "上北山村" },
                    { url: "https://tenki.jp/forecast/6/32/6420/29452/", name: "川上村" },
                    { url: "https://tenki.jp/forecast/6/32/6420/29453/", name: "東吉野村" },
                ]
            },
        ]
    },
    {
        prefName: "富山県",
        subdivisions: [
            {
                name: "東部(富山)",
                cities: [
                    { url: "https://tenki.jp/forecast/4/19/5510/16201/", name: "富山市" },
                    { url: "https://tenki.jp/forecast/4/19/5510/16204/", name: "魚津市" },
                    { url: "https://tenki.jp/forecast/4/19/5510/16206/", name: "滑川市" },
                    { url: "https://tenki.jp/forecast/4/19/5510/16207/", name: "黒部市" },
                    { url: "https://tenki.jp/forecast/4/19/5510/16321/", name: "舟橋村" },
                    { url: "https://tenki.jp/forecast/4/19/5510/16322/", name: "上市町" },
                    { url: "https://tenki.jp/forecast/4/19/5510/16323/", name: "立山町" },
                    { url: "https://tenki.jp/forecast/4/19/5510/16342/", name: "入善町" },
                    { url: "https://tenki.jp/forecast/4/19/5510/16343/", name: "朝日町" },
                ]
            },
            {
                name: "西部(伏木)",
                cities: [
                    { url: "https://tenki.jp/forecast/4/19/5520/16202/", name: "高岡市" },
                    { url: "https://tenki.jp/forecast/4/19/5520/16205/", name: "氷見市" },
                    { url: "https://tenki.jp/forecast/4/19/5520/16208/", name: "砺波市" },
                    { url: "https://tenki.jp/forecast/4/19/5520/16209/", name: "小矢部市" },
                    { url: "https://tenki.jp/forecast/4/19/5520/16210/", name: "南砺市" },
                    { url: "https://tenki.jp/forecast/4/19/5520/16211/", name: "射水市" },
                ]
            },
        ]
    },
    {
        prefName: "福井県",
        subdivisions: [
            {
                name: "嶺北(福井)",
                cities: [
                    { url: "https://tenki.jp/forecast/4/21/5710/18201/", name: "福井市" },
                    { url: "https://tenki.jp/forecast/4/21/5710/18205/", name: "大野市" },
                    { url: "https://tenki.jp/forecast/4/21/5710/18206/", name: "勝山市" },
                    { url: "https://tenki.jp/forecast/4/21/5710/18207/", name: "鯖江市" },
                    { url: "https://tenki.jp/forecast/4/21/5710/18208/", name: "あわら市" },
                    { url: "https://tenki.jp/forecast/4/21/5710/18209/", name: "越前市" },
                    { url: "https://tenki.jp/forecast/4/21/5710/18210/", name: "坂井市" },
                    { url: "https://tenki.jp/forecast/4/21/5710/18322/", name: "永平寺町" },
                    { url: "https://tenki.jp/forecast/4/21/5710/18382/", name: "池田町" },
                    { url: "https://tenki.jp/forecast/4/21/5710/18404/", name: "南越前町" },
                    { url: "https://tenki.jp/forecast/4/21/5710/18423/", name: "越前町" },
                ]
            },
            {
                name: "嶺南(敦賀)",
                cities: [
                    { url: "https://tenki.jp/forecast/4/21/5720/18202/", name: "敦賀市" },
                    { url: "https://tenki.jp/forecast/4/21/5720/18204/", name: "小浜市" },
                    { url: "https://tenki.jp/forecast/4/21/5720/18442/", name: "美浜町" },
                    { url: "https://tenki.jp/forecast/4/21/5720/18481/", name: "高浜町" },
                    { url: "https://tenki.jp/forecast/4/21/5720/18483/", name: "おおい町" },
                    { url: "https://tenki.jp/forecast/4/21/5720/18501/", name: "若狭町" },
                ]
            },
        ]
    },
    {
        prefName: "福岡県",
        subdivisions: [
            {
                name: "福岡地方(福岡)",
                cities: [
                    { url: "https://tenki.jp/forecast/9/43/8210/40130/", name: "福岡市" },
                    { url: "https://tenki.jp/forecast/9/43/8210/40131/", name: "福岡市東区" },
                    { url: "https://tenki.jp/forecast/9/43/8210/40132/", name: "福岡市博多区" },
                    { url: "https://tenki.jp/forecast/9/43/8210/40133/", name: "福岡市中央区" },
                    { url: "https://tenki.jp/forecast/9/43/8210/40134/", name: "福岡市南区" },
                    { url: "https://tenki.jp/forecast/9/43/8210/40135/", name: "福岡市西区" },
                    { url: "https://tenki.jp/forecast/9/43/8210/40136/", name: "福岡市城南区" },
                    { url: "https://tenki.jp/forecast/9/43/8210/40137/", name: "福岡市早良区" },
                    { url: "https://tenki.jp/forecast/9/43/8210/40217/", name: "筑紫野市" },
                    { url: "https://tenki.jp/forecast/9/43/8210/40218/", name: "春日市" },
                    { url: "https://tenki.jp/forecast/9/43/8210/40219/", name: "大野城市" },
                    { url: "https://tenki.jp/forecast/9/43/8210/40220/", name: "宗像市" },
                    { url: "https://tenki.jp/forecast/9/43/8210/40221/", name: "太宰府市" },
                    { url: "https://tenki.jp/forecast/9/43/8210/40223/", name: "古賀市" },
                    { url: "https://tenki.jp/forecast/9/43/8210/40224/", name: "福津市" },
                    { url: "https://tenki.jp/forecast/9/43/8210/40230/", name: "糸島市" },
                    { url: "https://tenki.jp/forecast/9/43/8210/40231/", name: "那珂川市" },
                    { url: "https://tenki.jp/forecast/9/43/8210/40341/", name: "宇美町" },
                    { url: "https://tenki.jp/forecast/9/43/8210/40342/", name: "篠栗町" },
                    { url: "https://tenki.jp/forecast/9/43/8210/40343/", name: "志免町" },
                    { url: "https://tenki.jp/forecast/9/43/8210/40344/", name: "須恵町" },
                    { url: "https://tenki.jp/forecast/9/43/8210/40345/", name: "新宮町" },
                    { url: "https://tenki.jp/forecast/9/43/8210/40348/", name: "久山町" },
                    { url: "https://tenki.jp/forecast/9/43/8210/40349/", name: "粕屋町" },
                ]
            },
            {
                name: "北九州地方(八幡)",
                cities: [
                    { url: "https://tenki.jp/forecast/9/43/8220/40100/", name: "北九州市" },
                    { url: "https://tenki.jp/forecast/9/43/8220/40101/", name: "北九州市門司区" },
                    { url: "https://tenki.jp/forecast/9/43/8220/40103/", name: "北九州市若松区" },
                    { url: "https://tenki.jp/forecast/9/43/8220/40105/", name: "北九州市戸畑区" },
                    { url: "https://tenki.jp/forecast/9/43/8220/40106/", name: "北九州市小倉北区" },
                    { url: "https://tenki.jp/forecast/9/43/8220/40107/", name: "北九州市小倉南区" },
                    { url: "https://tenki.jp/forecast/9/43/8220/40108/", name: "北九州市八幡東区" },
                    { url: "https://tenki.jp/forecast/9/43/8220/40109/", name: "北九州市八幡西区" },
                    { url: "https://tenki.jp/forecast/9/43/8220/40213/", name: "行橋市" },
                    { url: "https://tenki.jp/forecast/9/43/8220/40214/", name: "豊前市" },
                    { url: "https://tenki.jp/forecast/9/43/8220/40215/", name: "中間市" },
                    { url: "https://tenki.jp/forecast/9/43/8220/40381/", name: "芦屋町" },
                    { url: "https://tenki.jp/forecast/9/43/8220/40382/", name: "水巻町" },
                    { url: "https://tenki.jp/forecast/9/43/8220/40383/", name: "岡垣町" },
                    { url: "https://tenki.jp/forecast/9/43/8220/40384/", name: "遠賀町" },
                    { url: "https://tenki.jp/forecast/9/43/8220/40621/", name: "苅田町" },
                    { url: "https://tenki.jp/forecast/9/43/8220/40625/", name: "みやこ町" },
                    { url: "https://tenki.jp/forecast/9/43/8220/40642/", name: "吉富町" },
                    { url: "https://tenki.jp/forecast/9/43/8220/40646/", name: "上毛町" },
                    { url: "https://tenki.jp/forecast/9/43/8220/40647/", name: "築上町" },
                ]
            },
            {
                name: "筑豊地方(飯塚)",
                cities: [
                    { url: "https://tenki.jp/forecast/9/43/8230/40204/", name: "直方市" },
                    { url: "https://tenki.jp/forecast/9/43/8230/40205/", name: "飯塚市" },
                    { url: "https://tenki.jp/forecast/9/43/8230/40206/", name: "田川市" },
                    { url: "https://tenki.jp/forecast/9/43/8230/40226/", name: "宮若市" },
                    { url: "https://tenki.jp/forecast/9/43/8230/40227/", name: "嘉麻市" },
                    { url: "https://tenki.jp/forecast/9/43/8230/40401/", name: "小竹町" },
                    { url: "https://tenki.jp/forecast/9/43/8230/40402/", name: "鞍手町" },
                    { url: "https://tenki.jp/forecast/9/43/8230/40421/", name: "桂川町" },
                    { url: "https://tenki.jp/forecast/9/43/8230/40601/", name: "香春町" },
                    { url: "https://tenki.jp/forecast/9/43/8230/40602/", name: "添田町" },
                    { url: "https://tenki.jp/forecast/9/43/8230/40604/", name: "糸田町" },
                    { url: "https://tenki.jp/forecast/9/43/8230/40605/", name: "川崎町" },
                    { url: "https://tenki.jp/forecast/9/43/8230/40608/", name: "大任町" },
                    { url: "https://tenki.jp/forecast/9/43/8230/40609/", name: "赤村" },
                    { url: "https://tenki.jp/forecast/9/43/8230/40610/", name: "福智町" },
                ]
            },
            {
                name: "筑後地方(久留米)",
                cities: [
                    { url: "https://tenki.jp/forecast/9/43/8240/40202/", name: "大牟田市" },
                    { url: "https://tenki.jp/forecast/9/43/8240/40203/", name: "久留米市" },
                    { url: "https://tenki.jp/forecast/9/43/8240/40207/", name: "柳川市" },
                    { url: "https://tenki.jp/forecast/9/43/8240/40210/", name: "八女市" },
                    { url: "https://tenki.jp/forecast/9/43/8240/40211/", name: "筑後市" },
                    { url: "https://tenki.jp/forecast/9/43/8240/40212/", name: "大川市" },
                    { url: "https://tenki.jp/forecast/9/43/8240/40216/", name: "小郡市" },
                    { url: "https://tenki.jp/forecast/9/43/8240/40225/", name: "うきは市" },
                    { url: "https://tenki.jp/forecast/9/43/8240/40228/", name: "朝倉市" },
                    { url: "https://tenki.jp/forecast/9/43/8240/40229/", name: "みやま市" },
                    { url: "https://tenki.jp/forecast/9/43/8240/40447/", name: "筑前町" },
                    { url: "https://tenki.jp/forecast/9/43/8240/40448/", name: "東峰村" },
                    { url: "https://tenki.jp/forecast/9/43/8240/40503/", name: "大刀洗町" },
                    { url: "https://tenki.jp/forecast/9/43/8240/40522/", name: "大木町" },
                    { url: "https://tenki.jp/forecast/9/43/8240/40544/", name: "広川町" },
                ]
            },
        ]
    },
    {
        prefName: "福島県",
        subdivisions: [
            {
                name: "中通り(福島)",
                cities: [
                    { url: "https://tenki.jp/forecast/2/10/3610/7201/", name: "福島市" },
                    { url: "https://tenki.jp/forecast/2/10/3610/7203/", name: "郡山市" },
                    { url: "https://tenki.jp/forecast/2/10/3610/7205/", name: "白河市" },
                    { url: "https://tenki.jp/forecast/2/10/3610/7207/", name: "須賀川市" },
                    { url: "https://tenki.jp/forecast/2/10/3610/7210/", name: "二本松市" },
                    { url: "https://tenki.jp/forecast/2/10/3610/7211/", name: "田村市" },
                    { url: "https://tenki.jp/forecast/2/10/3610/7213/", name: "伊達市" },
                    { url: "https://tenki.jp/forecast/2/10/3610/7214/", name: "本宮市" },
                    { url: "https://tenki.jp/forecast/2/10/3610/7301/", name: "桑折町" },
                    { url: "https://tenki.jp/forecast/2/10/3610/7303/", name: "国見町" },
                    { url: "https://tenki.jp/forecast/2/10/3610/7308/", name: "川俣町" },
                    { url: "https://tenki.jp/forecast/2/10/3610/7322/", name: "大玉村" },
                    { url: "https://tenki.jp/forecast/2/10/3610/7342/", name: "鏡石町" },
                    { url: "https://tenki.jp/forecast/2/10/3610/7344/", name: "天栄村" },
                    { url: "https://tenki.jp/forecast/2/10/3610/7461/", name: "西郷村" },
                    { url: "https://tenki.jp/forecast/2/10/3610/7464/", name: "泉崎村" },
                    { url: "https://tenki.jp/forecast/2/10/3610/7465/", name: "中島村" },
                    { url: "https://tenki.jp/forecast/2/10/3610/7466/", name: "矢吹町" },
                    { url: "https://tenki.jp/forecast/2/10/3610/7481/", name: "棚倉町" },
                    { url: "https://tenki.jp/forecast/2/10/3610/7482/", name: "矢祭町" },
                    { url: "https://tenki.jp/forecast/2/10/3610/7483/", name: "塙町" },
                    { url: "https://tenki.jp/forecast/2/10/3610/7484/", name: "鮫川村" },
                    { url: "https://tenki.jp/forecast/2/10/3610/7501/", name: "石川町" },
                    { url: "https://tenki.jp/forecast/2/10/3610/7502/", name: "玉川村" },
                    { url: "https://tenki.jp/forecast/2/10/3610/7503/", name: "平田村" },
                    { url: "https://tenki.jp/forecast/2/10/3610/7504/", name: "浅川町" },
                    { url: "https://tenki.jp/forecast/2/10/3610/7505/", name: "古殿町" },
                    { url: "https://tenki.jp/forecast/2/10/3610/7521/", name: "三春町" },
                    { url: "https://tenki.jp/forecast/2/10/3610/7522/", name: "小野町" },
                ]
            },
            {
                name: "浜通り(小名浜)",
                cities: [
                    { url: "https://tenki.jp/forecast/2/10/3620/7204/", name: "いわき市" },
                    { url: "https://tenki.jp/forecast/2/10/3620/7209/", name: "相馬市" },
                    { url: "https://tenki.jp/forecast/2/10/3620/7212/", name: "南相馬市" },
                    { url: "https://tenki.jp/forecast/2/10/3620/7541/", name: "広野町" },
                    { url: "https://tenki.jp/forecast/2/10/3620/7542/", name: "楢葉町" },
                    { url: "https://tenki.jp/forecast/2/10/3620/7543/", name: "富岡町" },
                    { url: "https://tenki.jp/forecast/2/10/3620/7544/", name: "川内村" },
                    { url: "https://tenki.jp/forecast/2/10/3620/7545/", name: "大熊町" },
                    { url: "https://tenki.jp/forecast/2/10/3620/7546/", name: "双葉町" },
                    { url: "https://tenki.jp/forecast/2/10/3620/7547/", name: "浪江町" },
                    { url: "https://tenki.jp/forecast/2/10/3620/7548/", name: "葛尾村" },
                    { url: "https://tenki.jp/forecast/2/10/3620/7561/", name: "新地町" },
                    { url: "https://tenki.jp/forecast/2/10/3620/7564/", name: "飯舘村" },
                ]
            },
            {
                name: "会津(若松)",
                cities: [
                    { url: "https://tenki.jp/forecast/2/10/3630/7202/", name: "会津若松市" },
                    { url: "https://tenki.jp/forecast/2/10/3630/7208/", name: "喜多方市" },
                    { url: "https://tenki.jp/forecast/2/10/3630/7362/", name: "下郷町" },
                    { url: "https://tenki.jp/forecast/2/10/3630/7364/", name: "檜枝岐村" },
                    { url: "https://tenki.jp/forecast/2/10/3630/7367/", name: "只見町" },
                    { url: "https://tenki.jp/forecast/2/10/3630/7368/", name: "南会津町" },
                    { url: "https://tenki.jp/forecast/2/10/3630/7402/", name: "北塩原村" },
                    { url: "https://tenki.jp/forecast/2/10/3630/7405/", name: "西会津町" },
                    { url: "https://tenki.jp/forecast/2/10/3630/7407/", name: "磐梯町" },
                    { url: "https://tenki.jp/forecast/2/10/3630/7408/", name: "猪苗代町" },
                    { url: "https://tenki.jp/forecast/2/10/3630/7421/", name: "会津坂下町" },
                    { url: "https://tenki.jp/forecast/2/10/3630/7422/", name: "湯川村" },
                    { url: "https://tenki.jp/forecast/2/10/3630/7423/", name: "柳津町" },
                    { url: "https://tenki.jp/forecast/2/10/3630/7444/", name: "三島町" },
                    { url: "https://tenki.jp/forecast/2/10/3630/7445/", name: "金山町" },
                    { url: "https://tenki.jp/forecast/2/10/3630/7446/", name: "昭和村" },
                    { url: "https://tenki.jp/forecast/2/10/3630/7447/", name: "会津美里町" },
                ]
            },
        ]
    },
    {
        prefName: "兵庫県",
        subdivisions: [
            {
                name: "南部(神戸)",
                cities: [
                    { url: "https://tenki.jp/forecast/6/31/6310/28100/", name: "神戸市" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28101/", name: "神戸市東灘区" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28102/", name: "神戸市灘区" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28105/", name: "神戸市兵庫区" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28106/", name: "神戸市長田区" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28107/", name: "神戸市須磨区" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28108/", name: "神戸市垂水区" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28109/", name: "神戸市北区" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28110/", name: "神戸市中央区" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28111/", name: "神戸市西区" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28201/", name: "姫路市" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28202/", name: "尼崎市" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28203/", name: "明石市" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28204/", name: "西宮市" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28205/", name: "洲本市" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28206/", name: "芦屋市" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28207/", name: "伊丹市" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28208/", name: "相生市" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28210/", name: "加古川市" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28212/", name: "赤穂市" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28213/", name: "西脇市" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28214/", name: "宝塚市" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28215/", name: "三木市" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28216/", name: "高砂市" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28217/", name: "川西市" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28218/", name: "小野市" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28219/", name: "三田市" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28220/", name: "加西市" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28221/", name: "丹波篠山市" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28223/", name: "丹波市" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28224/", name: "南あわじ市" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28226/", name: "淡路市" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28227/", name: "宍粟市" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28228/", name: "加東市" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28229/", name: "たつの市" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28301/", name: "猪名川町" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28365/", name: "多可町" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28381/", name: "稲美町" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28382/", name: "播磨町" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28442/", name: "市川町" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28443/", name: "福崎町" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28446/", name: "神河町" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28464/", name: "太子町" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28481/", name: "上郡町" },
                    { url: "https://tenki.jp/forecast/6/31/6310/28501/", name: "佐用町" },
                ]
            },
            {
                name: "北部(豊岡)",
                cities: [
                    { url: "https://tenki.jp/forecast/6/31/6320/28209/", name: "豊岡市" },
                    { url: "https://tenki.jp/forecast/6/31/6320/28222/", name: "養父市" },
                    { url: "https://tenki.jp/forecast/6/31/6320/28225/", name: "朝来市" },
                    { url: "https://tenki.jp/forecast/6/31/6320/28585/", name: "香美町" },
                    { url: "https://tenki.jp/forecast/6/31/6320/28586/", name: "新温泉町" },
                ]
            },
        ]
    },
    {
        prefName: "和歌山県",
        subdivisions: [
            {
                name: "北部(和歌山)",
                cities: [
                    { url: "https://tenki.jp/forecast/6/33/6510/30201/", name: "和歌山市" },
                    { url: "https://tenki.jp/forecast/6/33/6510/30202/", name: "海南市" },
                    { url: "https://tenki.jp/forecast/6/33/6510/30203/", name: "橋本市" },
                    { url: "https://tenki.jp/forecast/6/33/6510/30204/", name: "有田市" },
                    { url: "https://tenki.jp/forecast/6/33/6510/30205/", name: "御坊市" },
                    { url: "https://tenki.jp/forecast/6/33/6510/30208/", name: "紀の川市" },
                    { url: "https://tenki.jp/forecast/6/33/6510/30209/", name: "岩出市" },
                    { url: "https://tenki.jp/forecast/6/33/6510/30304/", name: "紀美野町" },
                    { url: "https://tenki.jp/forecast/6/33/6510/30341/", name: "かつらぎ町" },
                    { url: "https://tenki.jp/forecast/6/33/6510/30343/", name: "九度山町" },
                    { url: "https://tenki.jp/forecast/6/33/6510/30344/", name: "高野町" },
                    { url: "https://tenki.jp/forecast/6/33/6510/30361/", name: "湯浅町" },
                    { url: "https://tenki.jp/forecast/6/33/6510/30362/", name: "広川町" },
                    { url: "https://tenki.jp/forecast/6/33/6510/30366/", name: "有田川町" },
                    { url: "https://tenki.jp/forecast/6/33/6510/30381/", name: "美浜町" },
                    { url: "https://tenki.jp/forecast/6/33/6510/30382/", name: "日高町" },
                    { url: "https://tenki.jp/forecast/6/33/6510/30383/", name: "由良町" },
                    { url: "https://tenki.jp/forecast/6/33/6510/30390/", name: "印南町" },
                    { url: "https://tenki.jp/forecast/6/33/6510/30391/", name: "みなべ町" },
                    { url: "https://tenki.jp/forecast/6/33/6510/30392/", name: "日高川町" },
                ]
            },
            {
                name: "南部(潮岬)",
                cities: [
                    { url: "https://tenki.jp/forecast/6/33/6520/30206/", name: "田辺市" },
                    { url: "https://tenki.jp/forecast/6/33/6520/30207/", name: "新宮市" },
                    { url: "https://tenki.jp/forecast/6/33/6520/30401/", name: "白浜町" },
                    { url: "https://tenki.jp/forecast/6/33/6520/30404/", name: "上富田町" },
                    { url: "https://tenki.jp/forecast/6/33/6520/30406/", name: "すさみ町" },
                    { url: "https://tenki.jp/forecast/6/33/6520/30421/", name: "那智勝浦町" },
                    { url: "https://tenki.jp/forecast/6/33/6520/30422/", name: "太地町" },
                    { url: "https://tenki.jp/forecast/6/33/6520/30424/", name: "古座川町" },
                    { url: "https://tenki.jp/forecast/6/33/6520/30427/", name: "北山村" },
                    { url: "https://tenki.jp/forecast/6/33/6520/30428/", name: "串本町" },
                ]
            },
        ]
    }
];