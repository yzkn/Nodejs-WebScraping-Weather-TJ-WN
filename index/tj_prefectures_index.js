// Copyright (c) 2024 YA-androidapp(https://github.com/yzkn) All rights reserved.

const tj_prefectures = [
  {
    url: "https://tenki.jp/forecast/1/",
    area: "北海道地方",
    prefectures: [
      {
        url: "https://tenki.jp/forecast/1/1/",
        name: "道北"
      },
      {
        url: "https://tenki.jp/forecast/1/3/",
        name: "道東"
      },
      {
        url: "https://tenki.jp/forecast/1/2/",
        name: "道央"
      },
      {
        url: "https://tenki.jp/forecast/1/4/",
        name: "道南"
      },
    ]
  },
  {
    url: "https://tenki.jp/forecast/2/",
    area: "東北地方",
    prefectures: [
      {
        url: "https://tenki.jp/forecast/2/5/",
        name: "青森県"
      },
      {
        url: "https://tenki.jp/forecast/2/6/",
        name: "岩手県"
      },
      {
        url: "https://tenki.jp/forecast/2/7/",
        name: "宮城県"
      },
      {
        url: "https://tenki.jp/forecast/2/8/",
        name: "秋田県"
      },
      {
        url: "https://tenki.jp/forecast/2/9/",
        name: "山形県"
      },
      {
        url: "https://tenki.jp/forecast/2/10/",
        name: "福島県"
      },
    ]
  },
  {
    url: "https://tenki.jp/forecast/3/",
    area: "関東・甲信地方",
    prefectures: [
      {
        url: "https://tenki.jp/forecast/3/16/",
        name: "東京都"
      },
      {
        url: "https://tenki.jp/forecast/3/17/",
        name: "神奈川県"
      },
      {
        url: "https://tenki.jp/forecast/3/14/",
        name: "埼玉県"
      },
      {
        url: "https://tenki.jp/forecast/3/15/",
        name: "千葉県"
      },
      {
        url: "https://tenki.jp/forecast/3/11/",
        name: "茨城県"
      },
      {
        url: "https://tenki.jp/forecast/3/12/",
        name: "栃木県"
      },
      {
        url: "https://tenki.jp/forecast/3/13/",
        name: "群馬県"
      },
      {
        url: "https://tenki.jp/forecast/3/22/",
        name: "山梨県"
      },
      {
        url: "https://tenki.jp/forecast/3/23/",
        name: "長野県"
      },
    ]
  },
  {
    url: "https://tenki.jp/forecast/4/",
    area: "北陸地方",
    prefectures: [
      {
        url: "https://tenki.jp/forecast/4/18/",
        name: "新潟県"
      },
      {
        url: "https://tenki.jp/forecast/4/19/",
        name: "富山県"
      },
      {
        url: "https://tenki.jp/forecast/4/20/",
        name: "石川県"
      },
      {
        url: "https://tenki.jp/forecast/4/21/",
        name: "福井県"
      },
    ]
  },
  {
    url: "https://tenki.jp/forecast/5/",
    area: "東海地方",
    prefectures: [
      {
        url: "https://tenki.jp/forecast/5/26/",
        name: "愛知県"
      },
      {
        url: "https://tenki.jp/forecast/5/24/",
        name: "岐阜県"
      },
      {
        url: "https://tenki.jp/forecast/5/25/",
        name: "静岡県"
      },
      {
        url: "https://tenki.jp/forecast/5/27/",
        name: "三重県"
      },
    ]
  },
  {
    url: "https://tenki.jp/forecast/6/",
    area: "近畿地方",
    prefectures: [
      {
        url: "https://tenki.jp/forecast/6/30/",
        name: "大阪府"
      },
      {
        url: "https://tenki.jp/forecast/6/31/",
        name: "兵庫県"
      },
      {
        url: "https://tenki.jp/forecast/6/29/",
        name: "京都府"
      },
      {
        url: "https://tenki.jp/forecast/6/28/",
        name: "滋賀県"
      },
      {
        url: "https://tenki.jp/forecast/6/32/",
        name: "奈良県"
      },
      {
        url: "https://tenki.jp/forecast/6/33/",
        name: "和歌山県"
      },
    ]
  },
  {
    url: "https://tenki.jp/forecast/7/",
    area: "中国地方",
    prefectures: [
      {
        url: "https://tenki.jp/forecast/7/34/",
        name: "鳥取県"
      },
      {
        url: "https://tenki.jp/forecast/7/35/",
        name: "島根県"
      },
      {
        url: "https://tenki.jp/forecast/7/36/",
        name: "岡山県"
      },
      {
        url: "https://tenki.jp/forecast/7/37/",
        name: "広島県"
      },
      {
        url: "https://tenki.jp/forecast/7/38/",
        name: "山口県"
      },
    ]
  },
  {
    url: "https://tenki.jp/forecast/8/",
    area: "四国地方",
    prefectures: [
      {
        url: "https://tenki.jp/forecast/8/39/",
        name: "徳島県"
      },
      {
        url: "https://tenki.jp/forecast/8/40/",
        name: "香川県"
      },
      {
        url: "https://tenki.jp/forecast/8/41/",
        name: "愛媛県"
      },
      {
        url: "https://tenki.jp/forecast/8/42/",
        name: "高知県"
      },
    ]
  },
  {
    url: "https://tenki.jp/forecast/9/",
    area: "九州地方",
    prefectures: [
      {
        url: "https://tenki.jp/forecast/9/43/",
        name: "福岡県"
      },
      {
        url: "https://tenki.jp/forecast/9/44/",
        name: "佐賀県"
      },
      {
        url: "https://tenki.jp/forecast/9/45/",
        name: "長崎県"
      },
      {
        url: "https://tenki.jp/forecast/9/46/",
        name: "熊本県"
      },
      {
        url: "https://tenki.jp/forecast/9/47/",
        name: "大分県"
      },
      {
        url: "https://tenki.jp/forecast/9/48/",
        name: "宮崎県"
      },
      {
        url: "https://tenki.jp/forecast/9/49/",
        name: "鹿児島県"
      },
    ]
  },
  {
    url: "https://tenki.jp/forecast/10/",
    area: "沖縄地方",
    prefectures: [
      {
        url: "https://tenki.jp/forecast/10/50/",
        name: "沖縄県"
      },
    ]
  },
];