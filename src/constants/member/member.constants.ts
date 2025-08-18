import { IconProps } from "../../assets/components/type";
import { MEMBERS_BY_GENERATION } from "./member.constants.arry";

export type MemberLink = {
    label: string;
    url: string;    
    icon?: ((props: IconProps) => JSX.Element) | null;
};

export type Member = {
    name: string;
    role: string;
    leader?:boolean; 
    links: MemberLink[];
};


export type Generation = {
    id: string; // e.g., "8"
    label: string; // e.g., "8기"
    members: Member[];
};

export const GENERATIONS: Generation[] = [
    { id: "8", label: "8기", members: MEMBERS_BY_GENERATION["8"] ?? [] },
    { id: "7", label: "7기", members: MEMBERS_BY_GENERATION["7"] ?? [] },
    { id: "6", label: "6기", members: MEMBERS_BY_GENERATION["6"] ?? [] },
    { id: "5", label: "5기", members: MEMBERS_BY_GENERATION["5"] ?? [] },
    { id: "4", label: "4기", members: MEMBERS_BY_GENERATION["4"] ?? [] },
    { id: "3", label: "3기", members: MEMBERS_BY_GENERATION["3"] ?? [] },
    { id: "2", label: "2기", members: MEMBERS_BY_GENERATION["2"] ?? [] },
    { id: "1", label: "1기", members: MEMBERS_BY_GENERATION["1"] ?? [] },
]; 