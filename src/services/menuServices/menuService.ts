import menu from "../../data/menu.json"
import type Menu from './../../interfaces/IMenu';

const menus = menu as Menu

export function getMenuBySystem(system : string){
    return menus.data.filter(x => x.system === system);
}