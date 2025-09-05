export interface Payments {
    cashOnDelivery(): void
    upiPayments(): void
    cardPayments(): void
    internetBanking(): void
}
export abstract class canarabank implements Payments {
    abstract cashOnDelivery(): void
    abstract upiPayments(): void
    abstract cardPayments(): void
    abstract internetBanking(): void

    recordPaymentDetails (method:string):void {
        console.log(`Canara bank payment ${method}`);
        
    }
}
class Amazon extends canarabank{
    cashOnDelivery(): void {
        this.recordPaymentDetails('cash');
        console.log('cash paymnent');
        
    }
    upiPayments(): void {
        this.recordPaymentDetails('UPI');
        console.log('upi payment');
        
    }
    cardPayments(): void {
        this.recordPaymentDetails('card');
        console.log('card paymet');
        
    }
    internetBanking(): void {
        this.recordPaymentDetails('internet');
        console.log('internet transfer');
        
    }
}
const az = new Amazon;
az.cardPayments();
az.cashOnDelivery();
az.internetBanking();
az.upiPayments();
