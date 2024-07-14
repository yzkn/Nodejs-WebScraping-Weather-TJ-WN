// Copyright (c) 2024 YA-androidapp(https://github.com/yzkn) All rights reserved.

const scrape = require("./scrape.js");

const fastify = require("fastify")({
    logger: false,
    // logger: true,
});

const path = require('path');
const fastifyStatic = require('@fastify/static');

fastify.register(require('@fastify/cors'), (instance) => {
    return (req, callback) => {
        const corsOptions = {
            // This is NOT recommended for production as it enables reflection exploits
            origin: true
        };

        // do not include CORS headers for requests from localhost
        if (/^localhost$/m.test(req.headers.origin)) {
            corsOptions.origin = false
        }

        // callback expects two parameters: error and options
        callback(null, corsOptions)
    }
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

fastify.get("/version", (request, reply) => {
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send({ version: "1.0.0" });
});

fastify.register(fastifyStatic, {
    root: path.join(__dirname, 'public'),
    prefix: '/', // optional: default '/'
})

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
