============
--NodeJS Template Project--
============
--Hogyan lett a projekt létrehozva? (package.json fájl létrehozása)--
    I.	Nyissuk meg a terminált. (A szerver ne fusson)
    II.	npm init (Ezzel elkezdjük létrehozni a konfigurációs fájlunkat)
        1.	Package name-hez írjuk a következőt: node-project (vagy ami a projektünk neve)
        2.	Version: elég egy entert nyomnunk 
        3.	Description: Leírása a projektnek (valamilyen stringet megadunk, majd enter)
        4.	Entry point: elég egy entert nyomnunk
        5.	Test command: elég egy entert nyomnunk
        6.	Git repository: elég egy entert nyomnunk
        7.	Keywords: elég egy entert nyomnunk
        8.	Author: beírhatjuk a saját nevünket.
        9.	License: elég egy entert nyomnunk
    III.	Ezután megjelenik az, hogy ez a fájl, amit szeretnénk-e, majd egy enter megadásával létrehozhatjuk a package.json fájlt. Innentől létezik a fájl alap információkkal a projektünkről. Ezen kívül még sok minden belekerülhet majd ebbe a fájlba, a későbbiekben. Ez a fájl fog például abban segíteni, hogy amikor elkezdünk csomagokat telepíteni, ez számon fogja tartani, hogy milyen csomagok kerültek telepítésre.
============
--Milyen függőségek lesznek telepítve?--

I. A következő függőség amit telepíteni fogunk a nodemon. Ez a függőség fog például nekünk abba segíteni, hogyha a projektünkben változtatunk bármit, automatikusan újraindítsa a szerverünket például.
    Telepítése: npm install nodemon --save-dev
    - A nodemon utáni résszel azt fogjuk meghatározni, hogy ez egy fejlesztői függőség. 
    - Innentől a szerver indítása esetén a következő parancsot használjuk: nodemon fajlnev.js.
        - Viszont van lehetőségünk egy szkriptet is írni az indításra:
            - A package.json fájlunkban a ”scripts” résznél a ”start”: után adjuk meg a következőt: ”nodemon fajlnev.js”
            - Innentől az indítás: npm run start

II. Express Telepítése
    npm install express

III. Express Session telepítése
    npm install express-session

IV. MYSQL Telepítése
    npm install mysql
    
============
Készítette: Kardos Krisztián
============
