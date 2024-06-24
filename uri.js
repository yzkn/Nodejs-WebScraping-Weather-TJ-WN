// Copyright (c) 2024 YA-androidapp(https://github.com/yzkn) All rights reserved.


const URL_TJ_CITY = {
    "秩父市": {
        "hourly": "https://tenki.jp/forecast/3/14/4330/11207/1hour.html"
    }
};

const URL_WN_CITY = {
    "秩父市": {
        "hourly": "https://weathernews.jp/onebox/35.9885561111111/139.088661944444/q=%E7%A7%A9%E7%88%B6&v=f988b21532dea38f5cd48ad7a9095eace6a808032d6885925677fe43a041034e"
    }
};


const ELEMENT_ID_TJ = ['forecast-point-1h-today', 'forecast-point-1h-tomorrow', 'forecast-point-1h-dayaftertomorrow'];


exports.URL_TJ_CITY = URL_TJ_CITY;
exports.URL_WN_CITY = URL_WN_CITY;

exports.ELEMENT_ID_TJ = ELEMENT_ID_TJ;
