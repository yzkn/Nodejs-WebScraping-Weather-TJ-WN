// Copyright (c) 2024 YA-androidapp(https://github.com/yzkn) All rights reserved.

const scrape = require("./scrape.js");

const fastify = require("fastify")({
    logger: false,
});

fastify.get("/all", async (request, reply) => {
    const result = scrape.scrape();

    reply.send(result);

    reply
        .code(200)
        .header("Content-Type", "application/json")
        .type("application/json");
    await reply;
});

fastify.get("/location/:city", async (request, reply) => {
    const { city } = request.params;

    const result = scrape.scrape("", city);

    reply.send(result);

    reply
        .code(200)
        .header("Content-Type", "application/json")
        .type("application/json");
    await reply;
});

fastify.get("/prefecture/:prefecture", async (request, reply) => {
    const { prefecture } = request.params;

    const result = scrape.scrape(prefecture, "");

    reply.send(result);

    reply
        .code(200)
        .header("Content-Type", "application/json")
        .type("application/json");
    await reply;
});

fastify.get("/", (request, reply) => {
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send({ version: "1.0.0" });
});

fastify.listen(
    { port: process.env.PORT, host: "localhost" },
    function (err, address) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log(`Your app is listening on ${address}`);
    }
);
