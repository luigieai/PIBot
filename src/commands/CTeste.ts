import { Command } from "@yamdbf/core";
import { Message } from "discord.js";

export class CTeste extends Command{
    constructor(){
        super({
            name: 'teste',
            desc: 'comandoDeTeste',
            usage:'<prefix>teste',
            
        });
    }
    public async action(message: Message, args: any) {
        message.channel.send('testado');
    }
}