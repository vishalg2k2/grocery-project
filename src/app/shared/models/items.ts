export class items{
    id!:number;
    name!:string;
    price!:number;
    tags?:string[];
    favorite:boolean = false;
    stars:number = 0;
    imageUrl!:string;
    origins!:string[];
    deliveryTime!:string;
}