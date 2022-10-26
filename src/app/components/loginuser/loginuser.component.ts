import { Component, OnInit,ViewChild, Renderer2,ElementRef } from '@angular/core';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {

  @ViewChild('desplegarNavAdmin') btnNavAdmin?:ElementRef
  @ViewChild('.NavAdmin') ViewNavAdmin?:ElementRef
  

  constructor(private renderer2: Renderer2) { }

  ngOnInit(): void {
  }

  desplegarNav(){
    const desplegarNavAdmin = this.ViewNavAdmin?.nativeElement
    this.renderer2.removeClass(desplegarNavAdmin,"visually-hidden")
  }

}
