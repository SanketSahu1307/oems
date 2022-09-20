import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fake-store',
  templateUrl: './fake-store.component.html',
  styleUrls: ['./fake-store.component.css']
})
export class FakeStoreComponent implements OnInit {

  constructor(private http: HttpClient) { }

  products: any;
  product: any

  ngOnInit(): void {
    this.getFakeProduct();



  }

  getFakeProduct() {
    this.http.get(`https://fakestoreapi.com/products`).subscribe(res => {
      this.products = res;
      for (let i = 0; i < this.products.length; i++) {
        console.log(this.products[i]);
        this.product = this.products[i];


        // col-md-3
        var col = document.createElement('div');
        col.setAttribute("class", "col-md-3");

        var card = document.createElement('div');
        card.setAttribute("class", "card");
        card.style.margin="5px";
        
        col.appendChild(card);

        var content = document.getElementById("placeHere");
        ////////main
        var contentsssss = content?.appendChild(col);

        var cardBody = document.createElement('div');
        cardBody.setAttribute("class", "card-body");
        card.appendChild(cardBody);

        var cardTitle = document.createElement('div');
        cardTitle.setAttribute("class", "card-title");
        cardBody.appendChild(cardTitle);

        var img = document.createElement('img')
        img.setAttribute('src', this.products[i].image);
        img.style.cssText = "height: 200px;width: 200px;"
        img.getElementsByClassName("imgStyle")
        cardTitle.appendChild(img);

        var cardText = document.createElement('div');
        cardText.setAttribute("class", "card-text");
        cardText.style.color="#000"
        cardBody.appendChild(cardText);

        var cardTextP=document.createElement('p');
        cardTextP.innerHTML=this.products[i].title;
        // var written=console.log(p.textContent);
        
        cardText.appendChild(cardTextP);

        var cardTextSpan=document.createElement('span');
        cardTextSpan.innerHTML=this.products[i].rating.rate+" | Rating : ("+this.products[i].rating.count+")";
        cardTextSpan.style.cssText="padding: 1px 8px;background-color: palegreen;border-radius: 10px;"
        cardText.appendChild(cardTextSpan);

        
        var cardTextPrice=document.createElement('p');
        cardTextPrice.innerHTML="&#x20b9; "+this.products[i].price;
        cardTextPrice.style.margin="7px"
        cardText.appendChild(cardTextPrice);



      }

    }, err => {
      console.log("something gone wrong...", err);

    })
  }

  htmlCard() {





  }

}
