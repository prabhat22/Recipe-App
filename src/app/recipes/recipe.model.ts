import { Ingredient } from 'src/app/shared/ingredient-model';

export class Recipe
{
    recipeName:String;
    recipeDesc:string;
    recipeImgPath:String;
    ingredients:Ingredient[];
    constructor(name:string, desc:string, path:string,ingredients:Ingredient[])
    {
        this.recipeName=name;
        this.recipeDesc=desc;
        this.recipeImgPath=path;
        this.ingredients=ingredients;
    }
}