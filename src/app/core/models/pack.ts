export class Pack {
    public id?: string;
    public name: string;
    public description: string;
    public price: number;
    public numberOfOffers: number;
    public unlimited: boolean;
    public recommended: boolean;
    public createdAt: Date;
    public updatedAt: Date;


    public constructor(
        name:string,
        description: string,
        price: number,
        numberOfOffers: number,
        unlimited: boolean,
        recommended: boolean,
        createdAt: Date,
        updatedAt: Date,
        id?: string
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.numberOfOffers = numberOfOffers;
        this.unlimited = unlimited;
        this.recommended = recommended;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
