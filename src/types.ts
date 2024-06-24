import {Dispatch, SetStateAction} from "react";

export type Client = {
    name: string,
    contact: string,
    cid: string,
    admin: string,
    regDate: string
}

export type formSelect = {
    title: string,
    name: string,
    options: string[],
    values: string[],
    handler: Dispatch<SetStateAction<string>>
}

export type formInput = {
    title: string,
    name: string,
    type: string,
    handler: Dispatch<SetStateAction<string>>
}