// Copyright (c) 2024 YA-androidapp(https://github.com/yzkn) All rights reserved.


const uri = require("./uri.js");

const request = require("sync-request");
const { JSDOM } = require("jsdom");
const {
    addDays,
    addHours,
    addMonths,
    format: datefnsFormat,
    isAfter,
    parse: datefnsParse,
    set,
    startOfMonth,
} = require("date-fns");

const ELEMENT_ID_TJ = [
    "forecast-point-1h-today",
    "forecast-point-1h-tomorrow",
    "forecast-point-1h-dayaftertomorrow",
];

const getTextContent = (element) => {
    let text = "";
    element.childNodes.forEach((child) => {
        if (child.toString() == "[object Text]") {
            text += child.data;
        }
    });
    return text;
};

const scrapeTJ = (city) => {
    let tjResult = {};

    const now = new Date();

    const url = uri.URL_CITIES[city].tj.hourly;
    const response = request("GET", url);
    if (response.statusCode == 200) {
        const dom = new JSDOM(response.getBody());

        const DATE_PATTERN_TJ = /[0-9]{4}年[0-9]{2}月[0-9]{2}日/g;

        // 日ごと
        ELEMENT_ID_TJ.forEach((elementID, i) => {
            const tableElement = dom.window.document.querySelector(`#${elementID}`);

            const dateTdString = tableElement
                .querySelector('td[colspan="24"]')
                .textContent.trim();

            const hourTDs = tableElement.querySelectorAll("tr.hour td"); // 天気
            const weatherTDs = tableElement.querySelectorAll("tr.weather td"); // 天気
            const temperatureTDs = tableElement.querySelectorAll("tr.temperature td"); // 気温
            const probPrecipTDs = tableElement.querySelectorAll("tr.prob-precip td"); // 降水確率
            const precipitationTDs = tableElement.querySelectorAll(
                "tr.precipitation td"
            ); // 降水量
            const humidityTDs = tableElement.querySelectorAll("tr.humidity td"); // 湿度
            const windBlowTDs = tableElement.querySelectorAll("tr.wind-blow td"); // 風向
            const windSpeedTDs = tableElement.querySelectorAll("tr.wind-speed td"); // 風速

            // 時ごと
            hourTDs.forEach((element, j) => {
                const matched = `${dateTdString.match(DATE_PATTERN_TJ)}`;
                const parsed = datefnsParse(
                    `${matched} 00:00:00`,
                    "yyyy年MM月dd日 HH:mm:ss",
                    new Date()
                );
                const hr = parseInt(element.textContent.trim());

                const _dt = addHours(parsed, hr);

                // 第一引数が第二引数より未来か
                if (isAfter(_dt, now)) {

                    const dt = datefnsFormat(
                        _dt,
                        "yyyy-MM-dd'T'HH:mm:ss'+09:00'"
                    );

                    tjResult[dt] = {
                        weatherIcon: weatherTDs[j].querySelector("img").getAttribute("src"),
                        weather: weatherTDs[j].querySelector("p").textContent.trim(),
                        temperature: temperatureTDs[j]
                            .querySelector("span")
                            .textContent.trim(),
                        probPrecip: probPrecipTDs[j].querySelector("span").textContent.trim(),
                        precipitation: precipitationTDs[j]
                            .querySelector("span")
                            .textContent.trim(),
                        humidity: humidityTDs[j].textContent.trim(),
                        windBlowIcon: windBlowTDs[j].querySelector("img").getAttribute("src"),
                        windBlow: windBlowTDs[j].querySelector("p").textContent.trim(),
                        windSpeed: windSpeedTDs[j].querySelector("span").textContent.trim(),
                    };
                }
            });
        });
    }

    return tjResult;
};

const scrapeWN = (city) => {
    let wnResult = {};

    const url = uri.URL_CITIES[city].wn.hourly;
    const response = request("GET", url);
    if (response.statusCode == 200) {
        const dom = new JSDOM(response.getBody());
        const tableElement = dom.window.document.querySelector("#flick_list_1hour");
        const divGroupElements = tableElement.querySelectorAll(".group");

        // 日ごと
        divGroupElements.forEach((divGroupElement, i) => {
            const dateTdString = divGroupElement
                .querySelector(".date")
                .textContent.trim();

            const DATE_PATTERN_WN = /[0-9]{1,2}/g;
            const matched = `${dateTdString.match(DATE_PATTERN_WN)}`;
            const day = parseInt(matched);

            let today = new Date();
            let baseDate = startOfMonth(today);
            let dateOfThisMonth = set(baseDate, { date: day });
            let dateOfNextMonth = set(addMonths(baseDate, 1), { date: day });
            let targetDate =
                addDays(today, -1) < dateOfThisMonth
                    ? dateOfThisMonth
                    : dateOfNextMonth;

            // 時ごと
            const listElements = divGroupElement.querySelectorAll("ul.list");

            listElements.forEach((listElement, j) => {
                const dateString = listElement
                    .querySelector(".time p")
                    .textContent.trim();
                const hr = parseInt(dateString);

                const _dt = addHours(targetDate, hr);
                const dt = datefnsFormat(
                    _dt,
                    "yyyy-MM-dd'T'HH:mm:ss'+09:00'"
                );

                wnResult[dt] = {
                    weatherIcon: listElement
                        .querySelector(".weather img")
                        .getAttribute("src"),
                    temperature: getTextContent(
                        listElement.querySelector(".temp p")
                    ).trim(),
                    precipitation: getTextContent(
                        listElement.querySelector(".rain p")
                    ).trim(),
                    windBlowIcon: listElement
                        .querySelector(".wind img")
                        .getAttribute("src"),
                    windSpeed: getTextContent(
                        listElement.querySelector(".wind p")
                    ).trim(),
                };
            });
        });
    }

    return wnResult;
};

const scrape = (prefName = "", cityName = "") => {
    let result = {};

    if (prefName != "") {
        const filtered = Object.keys(uri.URL_CITIES)
            .filter(key => uri.URL_CITIES[key].wn.prefecture == prefName)
            .reduce((obj, key) => {
                obj[key] = uri.URL_CITIES[key]
                return obj
            }, {});

        Object.keys(filtered).forEach((city) => {
            result[city] = {
                hall: uri.URL_CITIES[city].hall,
                tj: scrapeTJ(city),
                wn: scrapeWN(city),
            };
        });
    } else if (cityName == "") {
        Object.keys(uri.URL_CITIES).forEach((city) => {
            result[city] = {
                hall: uri.URL_CITIES[city].hall,
                tj: scrapeTJ(city),
                wn: scrapeWN(city),
            };
        });
    } else if (cityName.includes(',')) {
        cityName.split(',').forEach((part) => {
            const city = part.trim();
            result[city] = {
                hall: uri.URL_CITIES[city].hall,
                tj: scrapeTJ(city),
                wn: scrapeWN(city),
            };
        });
    } else {
        result[cityName] = {
            hall: uri.URL_CITIES[cityName].hall,
            tj: scrapeTJ(cityName),
            wn: scrapeWN(cityName),
        };
    }

    // const jsonString = JSON.stringify(result, null, "\t")
    // console.log(jsonString.slice(0, 1000));

    return result;
};

exports.scrape = scrape;
