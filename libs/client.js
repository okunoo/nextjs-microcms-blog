import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain:"blog-tutorial-js",
    apiKey:process.env.API_KEY,
});

