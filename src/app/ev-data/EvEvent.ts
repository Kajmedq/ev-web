import { EvEventType } from "./EvEventType";

export interface EvEvent {
    type: EvEventType;
    title: string;
    date: Date;
    location: string;
    host: string;
    description: string;
    abstract: string;

    link: string;
}