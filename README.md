# angulartesti
Angular ohjelmointitesti

Touteutettava angular sivu src\app\add-item\add-item.component.html 

Toteuta tähän sivu, joka kysyy uuden tietueen tarvitsemat tiedot: Label, value, length, height. Näiden tietojen täytyy toteuttaa seuraavat ehdot:

1. Label kentässä pitää olla arvo.
2. Value numeron pitää olla isompi kuin BackendService.getMinimunValue()
3. Length ja height pitää olla positiivisia lukuja.

Sivulle tulee Value kentän arvon generoiva painike 'Generoi', joka generoi Value kentän arvon siten että

 - jos length on suurempi kuin height ja lisäksi length on suurempi kuin minimiarvo, niin Value = length+height
 - jos length on pienempi kuin kuin height, niin Value = miniarvo+length
 - muutoin Value = kaikkien jo lisättyen tietueiden value arvojen summa, mutta kuitenkin vähintään minimiarvo.
 
 jossa minimiarvo = BackendService.getMinimunValue(), kaikki jo lisätyt tietueet of BackendService:een talletetut tietueet, ja muut arvot vastaavat sivulla lomakkeessa olevia arvoja.
 
Lisäksi sivulle tulee kaksi painiketta: Peru ja Lisää. Peru palaa takaisin dashboard sivulle ilman muutoksia. Lisää -painike lisää uuden tietueen, ja siirtyy dashboard sivulle.

Muotoile sivua asiallisen näköiseksi käyttäen vapaasti suoraan CSS tyylejä tai Bootstrap:ia tms.
