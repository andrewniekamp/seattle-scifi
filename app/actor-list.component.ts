import { Component } from 'angular2/core'
import { Actor } from './actor.model';
import { ActorComponent } from './actor.component';
import { ActorService } from './actor.service';
import { OnInit } from 'angular2/core';
import { EditActorDetailsComponent } from './edit-actor-details.component';
//import update later

@Component({
  selector: 'actor-list',
  inputs: ['actorList'],
  directives: [ActorComponent, EditActorDetailsComponent], //update directive needed later
  template:
  `
  <actor-display *ngFor="#currentActor of actorList"
    (click)="actorClicked(currentActor)"
    [actor]="currentActor">
  </actor-display>
  <edit-actor-details *ngIf="selectedActor" [actor]="selectedActor"></edit-actor-details>
  `,
  providers: [ActorService]
})
export class ActorListComponent {
  public actorList: Actor[];
  public selectedActor: Actor;

  constructor(private actorService: ActorService) {

  }

  ngOnInit() {
    this.actorList = this.actorService.getActors();
  }

  actorClicked(clickedActor: Actor): void {
    this.selectedActor = clickedActor;
  }
}
