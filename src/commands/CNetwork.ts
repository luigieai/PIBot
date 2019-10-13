import { Command } from "@yamdbf/core";
import { Message } from "discord.js";
import { networkInterfaces } from "os";
import * as publicIp from "public-ip";

export class CNetwork extends Command{
    constructor(){
        super({
            name: 'network',
            desc: 'comandoDeTeste',
            usage:'<prefix>network',
            aliases: ['ip']
        });
    }
    public async action(message: Message, args: any) {
        message.react('👍');
        let ipLocal : string = this.getLocalExternal();
        let ipExterno : string = await publicIp.v4();
        let msg : string = `IP da rede LOCAL: ${ipLocal}\nIP da rede EXTERNA: ${ipExterno}`
        message.channel.send(msg);
    }

    private getLocalExternal() : any {
        return [].concat(...Object.values(networkInterfaces()))
        .filter(details => details.family === 'IPv4' && !details.internal)
        .pop().address
    }

}