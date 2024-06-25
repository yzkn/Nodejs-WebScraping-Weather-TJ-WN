// Copyright (c) 2024 YA-androidapp(https://github.com/yzkn) All rights reserved.


const uri = require('./uri.js');
const request = require('request');
const { JSDOM } = require('jsdom');

const scrapeTJ = async (city) => {
    let result = {};

    const url = uri.URL_TJ_CITY[city].hourly;
    console.log({ url });
    request(url, (e, response, body) => {
        if (e) {
            console.error(e);
        }

        if (response.statusCode == 200) {
            try {
                const dom = new JSDOM(body);

                // 日ごと
                uri.ELEMENT_ID_TJ.forEach((elementID, i) => {
                    const tableElement = dom.window.document.querySelector(`#${elementID}`);

                    const dateTdString = tableElement.querySelector('td[colspan="24"]').textContent.trim();

                    const DATE_PATTERN_TJ = /[0-9]{4}年[0-9]{2}月[0-9]{2}日/g;
                    const dateString = `${dateTdString.match(DATE_PATTERN_TJ)}`.replace('年', '-').replace('月', '-').replace('日', '');

                    console.log(`対象日: ${i} ${dateString}`);

                    const hourTDs = tableElement.querySelectorAll('tr.hour td'); // 天気
                    const weatherTDs = tableElement.querySelectorAll('tr.weather td'); // 天気
                    const temperatureTDs = tableElement.querySelectorAll('tr.temperature td'); // 気温
                    const probPrecipTDs = tableElement.querySelectorAll('tr.prob-precip td'); // 降水確率
                    const precipitationTDs = tableElement.querySelectorAll('tr.precipitation td'); // 降水量
                    const humidityTDs = tableElement.querySelectorAll('tr.humidity td'); // 湿度
                    const windBlowTDs = tableElement.querySelectorAll('tr.wind-blow td'); // 風向
                    const windSpeedTDs = tableElement.querySelectorAll('tr.wind-speed td'); // 風速

                    // 時ごと
                    hourTDs.forEach((element, j) => {
                        const hr = element.textContent.trim();
                        const dt = `${dateString}T${hr}:00:00+09:00`;

                        try {
                            result[dt] = {
                                'weatherIcon': weatherTDs[j].querySelector('img').getAttribute('src'),
                                'weather': weatherTDs[j].querySelector('p').textContent.trim(),
                                'temperature': temperatureTDs[j].querySelector('span').textContent.trim(),
                                'probPrecip': probPrecipTDs[j].querySelector('span').textContent.trim(),
                                'precipitation': precipitationTDs[j].querySelector('span').textContent.trim(),
                                'humidity': humidityTDs[j].textContent.trim(),
                                'windBlowIcon': windBlowTDs[j].querySelector('img').getAttribute('src'),
                                'windBlow': windBlowTDs[j].querySelector('p').textContent.trim(),
                                'windSpeed': windSpeedTDs[j].querySelector('span').textContent.trim()
                            }

                        } catch (e) {
                            console.error(e, { i, j });
                        }
                    });
                });

                console.log({ result });
                return result;
            } catch (e) {
                console.error(e);
            }
        }
    });
}

const scrapeWN = async (city) => {
    let result = {};

    const url = uri.URL_WN_CITY[city].hourly;
    console.log({ url });
    request(url, (e, response, body) => {
        if (e) {
            console.error(e)
        }

        if (response.statusCode == 200) {
            try {
                const dom = new JSDOM(body)
                const tableElement = dom.window.document.querySelector('#flick_list_1hour');

                const divGroupElements = tableElement.querySelectorAll('.group');
                divGroupElements.forEach((divGroupElement, index) => {
                    const dateTdString = divGroupElement.querySelector('.date').textContent.trim();

                    const DATE_PATTERN_WN = /[0-9]{2}日/g;
                    const dateString = dateTdString.match(DATE_PATTERN_WN);

                    // console.log(`対象日: ${index} ${dateString}`);
                });

                ;
            } catch (e) {
                console.error(e)
            }
        }
    });
}


const main = async (city) => {
    scrapeTJ(city);
    scrapeWN(city);
};


const CITY_NAME = '秩父市';


main(CITY_NAME);
