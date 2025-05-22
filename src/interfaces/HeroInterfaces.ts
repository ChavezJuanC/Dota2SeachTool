//Interface for basic hero
export interface BasicHero {
    id: number;
    name: string;
    localized_name: string;
    primary_attr: string;
    attack_type: string;
    roles: Array<string>;
}

