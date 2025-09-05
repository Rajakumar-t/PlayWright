import { connect } from "http2";

export interface DatabaseConnection {
    connect1(): void;
    disconnect(): void;
    executeUpdate(): void;


}

class playwrightConnection implements DatabaseConnection {
    connect1(): void {
       console.log(`connected`);
       
    }
    disconnect(): void {
        console.log(`disconnected`);
        
    }
    executeUpdate(): void {
        console.log(`execute upadted`);
        
    }
}
const pl = new playwrightConnection;
pl.connect1()
pl.disconnect()
pl.executeUpdate()

