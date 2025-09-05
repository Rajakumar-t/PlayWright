export interface DatabaseConnection{
     connect():void
     disconnect():void
     executeUpdate():void
}
export abstract class MySqlConnection implements DatabaseConnection{
     abstract connect():void
     abstract disconnect():void
     abstract executeUpdate():void
     abstract executeQuery () :void

     connectionmethod (method:string):void{
        console.log(`the connection method ${method}`);
        
     }
}
class PlaywrightConnection extends MySqlConnection{
    connect(): void {
        this.connectionmethod('connected')
       // console.log(`its connected`);
        
    }
    disconnect(): void {
        this.connectionmethod('disconnect')
       // console.log(`its disconnect`);
        
    }
    executeQuery(): void {
        console.log(`method executeQuery executed`);
        
    }
    executeUpdate(): void {
        this.connectionmethod('executeUpdate')
       // console.log(`its executeUpdate`);
    }
}
const pc = new PlaywrightConnection;
pc.connect();pc.disconnect();pc.executeUpdate();pc.executeQuery();