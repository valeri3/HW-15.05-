import { Routes } from '@angular/router';
import {CardsContainerComponent} from "./cards-container/cards-container.component";
import {CardsBlockComponent} from "./cards-block/cards-block.component";

export const routes: Routes = [
  {path: "cards-container",component:CardsContainerComponent},
  {path: "cards-block",component:CardsBlockComponent}
];
