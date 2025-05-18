import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

import dotenv from "dotenv";

dotenv.config();

// Ich erstelle hier ein ratelimitter der nur 10 anfragen jede 20 sekunden zulässt.
const ratelimit = new Ratelimit({
    red: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(50, "30 s"),
});

export default ratelimit;