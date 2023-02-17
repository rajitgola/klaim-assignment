export interface IMenuItem {
    title : string;
    route : string;
    isPublic ?: boolean;
    actionMethod : any;  // to be used for click event method call decision
}