export default interface Menu {
    data: Data[];
}

export interface Data {
    system: string;
    menus: MenuItem[];
}

export interface MenuItem {
    id?: number;
    name: string;
    icon: string;
    submenus: Submenu[];
}

export interface Submenu {
    name: string;
    description: string;
    url: string;
    icon: string;
}