import { Component } from '@angular/core';

@Component({
  selector: 'app-bt07-animals',
  templateUrl: './bt07-animals.component.html',
  styleUrls: ['./bt07-animals.component.css']
})
export class Bt07AnimalsComponent {
  animals = [
    { name: "cat", size: "small", weight: 5 },
    { name: "dog", size: "small", weight: 10 },
    { name: "lion", size: "medium", weight: 150 },
    { name: "elephant", size: "big", weight: 5000 }
  ];

  getAnimalNames(animals: { name: string }[]): string[] {
    return animals.map(animal => animal.name);
  }

 filterLightAnimals(animals: any[]): { name: string; size: string; weight: number }[] {
  return animals.filter((animal: { weight: number; }) => animal.weight < 150);
}
  

  getTotalWeight(animals: { weight: number }[]): number {
    return animals.reduce((acc, cur) => acc + cur.weight, 0);
  }

  getTotalWeightOfLightAnimals(animals: { weight: number }[]): number {
    return animals.filter(animal => animal.weight < 150).reduce((acc, cur) => acc + cur.weight, 0);
  }
}
