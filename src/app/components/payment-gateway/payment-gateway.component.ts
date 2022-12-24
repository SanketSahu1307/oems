import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentApiService } from 'src/app/pages/OemsApiService/payment-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css']
})
export class PaymentGatewayComponent implements OnInit {
  response: any

  constructor(private paymenyService: PaymentApiService) { }

  payment = new FormGroup({
    amount: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
    this.paymenyService.getHello().subscribe(res => {
      console.log(res);

    });
  }

  doPayment() {
    this.paymenyService.createOrder(this.payment.value).subscribe(res => {
      console.log(res);
      this.response = res;
      const options = {
        key: "rzp_test_NJ1Y4x3NutVPMZ", // Enter the Key ID generated from the Dashboard
        amount: this.response.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: this.response.currency,
        name: "Acme Corp",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        "handler": function (response: any) {
          alert("SuccesFully Payment Done...ThankYou..");
        }
        ,
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9999999999"
        },
        notes: {
          address: "Razorpay Corporate Office"
        },
        theme: {
          color: "#3399cc"
        }
      };
      const rzp1 = this.paymenyService.nativeWindow.Razorpay(options);
      rzp1.open();
      rzp1.on('payment.failed', function (response: any) {
        alert("Something Gone Wrong...Please Try Again...")
      });
    }, err => {
      console.log("Spo", err);
      Swal.fire('Something Gone Wrong', 'Please Try Again', 'error')
    })
  }


}
