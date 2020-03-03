import { Component } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'My Countries';
  msg:string ='';

  countries=[
      {id: 0, countryName: "Spain", population: 46.72},
      {id: 1, countryName: "USA", population: 327.2},
      {id: 2, countryName: "France", population: 66.99},
      {id: 3, countryName: "Germany", population: 82.79}
];

  model:any={};
  model2:any={};
  hideUpdate:boolean=true;
  
  
  addcountry():void{
    //if(this.model!=null){
        this.countries.push(this.model);
        var returned=Object.assign(this.model,this.model2)
        this.model='';
        this.msg='Added field succesfully';
    
    //}
  }
  deletecountry(i):void{
   var answer= confirm('Do you want to remove this?');
   if(answer==true)
   {
     this.countries.splice(i,1);
     this.msg='Deleted field successfully';
   }
  }
  myValue;
  editcountry(i):void{
    this.hideUpdate=false;
    this.model2.id=this.countries[i].id;
    this.model2.countryName=this.countries[i].countryName;
    this.model2.population=this.countries[i].population;
    this.myValue=i;
    
  }

  updatecountry():void{
    let i=this.myValue;
    for(let j=0;j< this.countries.length;j++)
    {
      if(i==j)
      {
        this.countries[i]=this.model2;
        this.model2={};
      }
    }
    this.hideUpdate=true;
  }

  closeAlert():void
  {
    this.msg='';
  }
  
}
