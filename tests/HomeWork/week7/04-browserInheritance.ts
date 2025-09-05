import { log } from "console";

export class Browser {
    protected browserName: string;
    protected browserVersion: string;

    constructor(browserName: string, browserVersion: string) {
        this.browserName = browserName;
        this.browserVersion = browserVersion;
    }
    openURL(url: string): void {
        console.log(`opening url ${url} and browser name ${this.browserName} and version ${this.browserVersion}`);

    }
    closeBrowser(): void {
        console.log(`browser ${this.browserName} and version ${this.browserVersion} closed `);

    }
    navigateBack(): void {
        console.log(`navigate basck to ${this.browserName} and version ${this.browserVersion}  `);
    }
}
class Chrome extends Browser {
    constructor(version: string) {
        super("Chrome", version);
    }
    openIncognito(): void {
        console.log(`${this.browserName} -> Opening Incognito window.`);
    }
    clearCache(): void {
        console.log(`${this.browserName} -> Clearing Cache window.`);
    }
}

class Edge extends Browser {
    constructor(version: string) {
        super("Edge", version);
    }
    takeSnap(): void {
        console.log(`${this.browserName} =========> Taking a SnapShot`);

    }
    clearCookies(): void {
        console.log(`${this.browserName} -> Clearing Cookies window.`);
    }

}
class Safari extends Browser {
    constructor(version: string) {
        super("Safari", version)
    }

    readerMode(): void {
        console.log(`${this.browserName} ====> Enabling Reader Mode.`);
    }
    fullScreenMode(): void {
        console.log(`${this.browserName} ====> Entering full-screen mode.`);
    }
}
const ch = new Chrome("12");
ch.openURL("wwww.bbc.co.uk"); ch.openIncognito(); ch.clearCache(); ch.closeBrowser();

const ed = new Edge("14");
ed.openURL("www.google.co.uk"); ed.takeSnap(); ed.clearCookies(); ed.closeBrowser();

const sf = new Safari("234");
sf.openURL("www.bbc.co.uk/iplayer"); sf.readerMode(); sf.fullScreenMode(); sf.closeBrowser();