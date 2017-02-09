import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { MDL } from '../MaterialDesignLiteUpgradeElement';

@Component({
  selector: 'app',
  templateUrl: 'src/app/views/index.component.html',
})
export class IndexComponent {
  
  public tasks: FirebaseListObservable<any[]>;
  public users: FirebaseListObservable<any[]>;
  public assignUserName: Object;
  public assignTaskName: Object;
  public taskAssignUsers: any[]

  constructor(af: AngularFire){
    this.tasks = af.database.list('/tasks');
    this.users = af.database.list('/users');

    this.tasks.subscribe((itemKeys) =>{
        itemKeys.forEach((itemKey) => {
            if(itemKey.user){
                let user = af.database.object('/users/'+itemKey.user);
                user.subscribe((itemData) => {
                    itemKey.user = itemData;                
                });
            }            
            this.taskAssignUsers = itemKeys;
        });
    })
    
    //this.tasks.push({title: "Task4", description: "This is Task4", status: false})
    
  }

  assignUser(name, key){
    this.assignUserName = {name: name, key: key};

  }
  assignTask(name, key){
    this.assignTaskName = {name: name, key: key};
  }
 
  assign(){
    //console.log(this.assignTaskName['key'])
    //let uKey = String(this.assignUserName['key'])
    //console.log(uKey)
    //this.tasks.update(this.assignTaskName['key'], { users: {user: uKey} });
    // let tempObj = {};
    // tempObj[this.assignUserName['key']] = true;
    // this.tasks.update(this.assignTaskName['key'], tempObj );
    this.tasks.update(this.assignTaskName['key'], {user: this.assignUserName['key']} );
  }
}
