import { ReactNode } from "react";

export interface IAccordian {
    layout: ILayout[];
}

export interface ILayout {
    title: string;
    content: ReactNode;
    panelId: string;
}

export interface IClientsList {
    clients: ICLient[];
}

export interface ICLient {
    name: string;
    src: string;
}
