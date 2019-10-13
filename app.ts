import { Client } from "@yamdbf/core";
import * as dotenv from "dotenv";
import { join } from "path";
dotenv.config();

const client = new Client({
    commandsDir: join(__dirname, '.' ,'src', 'commands'),
    token: process.env.DSTOKEN,
    pause: true
}).start();

client.once('pause', async () => {
    await client.setDefaultSetting('prefix', '!');
    client.emit('continue');
} );

client.on('clientReady', async () => {
    console.log('Hello!');
});
