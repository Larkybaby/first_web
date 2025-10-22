import { videosinterface } from "@interfaces/videos.interface/interfacevideos_2";
import { video } from "@interfaces/videos.interface/interfacevideos"

export class datosvideos{
    static date(videoss: video): videosinterface{
        return{
        id: videoss.id.kind,
        title: videoss.snippet.title,
        description: videoss.snippet.description,
        image: videoss.snippet.thumbnails.high?.url || '', 
    }
    }
    static datearray(dates: video[]): videosinterface[]{
        return dates.map(videoss => this.date(videoss))
    }
}