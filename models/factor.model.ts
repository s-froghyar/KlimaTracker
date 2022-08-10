import { ICategory } from "../interfaces/categories.interface";
import { FactorSource } from "../interfaces/search_dto";
import { categories } from "./categories";

/**
 *  Factor class to hold all necessary data about the specific emission factor
 */
export class Factor {
  id: string = "";
  name: string = "";
  description!: string;
  region!: string;
  
  category: ICategory;

  constructor(factor: FactorSource) {
    console.log(factor);
    
    this.id = factor.id;
    this.name = factor.name;
    this.description = factor.description;
    this.category = this.getCategory(factor.category);
  }

  private getCategory(categoryName: string): ICategory {
    const categoryInd = categories.findIndex((cat) => {
      return cat.name === categoryName;
    });
    return Object.assign({}, categories[categoryInd]);
  }
}
