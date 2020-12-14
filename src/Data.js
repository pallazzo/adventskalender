
import img_01_1 from './img/img_01_1.png';
import img_01_2 from './img/img_01_2.png';

import img_02_1 from './img/img_02_1.png';

import img_03_1 from './img/img_03_1.png';
import img_03_2 from './img/img_03_2.png';

import img_04_1 from './img/img_04_1.png';
import img_04_2 from './img/img_04_2.png';

import img_05_1 from './img/img_05_1.png';
import img_05_2 from './img/img_05_2.png';

import img_6_1 from './img/img_6_1.png';
import img_6_2 from './img/img_6_2.png';

import img_07_1 from './img/img_07_1.png';
import img_07_2 from './img/img_07_2.png';

import img_08_1 from './img/img_08_1.png';
import img_08_2 from './img/img_08_2.png';

import img_09_1 from './img/img_09_1.png';
import img_09_2 from './img/img_09_2.png';

import img_10_1 from './img/img_10_1.png';
import img_10_2 from './img/img_10_2.png';
import img_10_3 from './img/img_10_3.png';

import img_11_1 from './img/img_11_1.png';
import img_11_2 from './img/img_11_2.png';

import img_12_1 from './img/img_12_1.png';

import img_13_1 from './img/img_13_1.png';

import img_14_1 from './img/img_14_1.png';
import img_14_2 from './img/img_14_2.png';

import img_15_1 from './img/img_15_1.png';

import img_17_1 from './img/img_17_1.png';
import img_17_2 from './img/img_17_2.png';

import img_18_1 from './img/img_18_1.png';
import img_18_2 from './img/img_18_2.png';

import img_22_1 from './img/img_22_1.png';
import img_22_2 from './img/img_22_2.png';

let question_1, question_2, question_3, question_4, question_5, question_6, question_7, question_8, question_9, question_10, question_11, question_12, question_13, question_14, question_15, question_16, question_17, question_18, question_19, question_20, question_21, question_22, question_23, question_24;
let answer_1, answer_2, answer_3, answer_4, answer_5, answer_6, answer_7, answer_8, answer_9, answer_10, answer_11, answer_12, answer_13, answer_14, answer_15, answer_16, answer_17, answer_18, answer_19, answer_20, answer_21, answer_22, answer_23, answer_24;

// -----------------------------------01---------------------------------//
question_1 =  <div>
                <p className="card-text">Ersetze die Symbole durch Ziffern, sodass jede Rechnung stimmt.</p>
                <p className="card-text">Es ist möglich, dass es mehrere Lösungen gibt.</p>
                <p className="card-text font-weight-bold">Wie viele gibt es denn?</p>
                <p className="text-center"><img src={img_01_1} alt="Aufgabe Tag 1"/></p>
              </div>;
answer_1 =    <div>
                <p className="card-text">Es gibt vier Lösungen, wobei allerdings die Zahlen der ersten Zeile und der ersten Spalte gleich bleiben.</p>
                <p className="text-center"><img src={img_01_2} alt="Lösung Tag 1"/></p>
              </div>;
// -----------------------------------02---------------------------------//
question_2 =  <div>
                <p className="card-text">Sieh dir den Stadtplan eine Minute an und präge dir so viele Einzelheiten wie möglich ein! Du musst dann einige Fragen beantworten.</p>
                <p className="text-center"><img src={img_02_1} alt="Aufgabe Tag 2"/></p>
              </div>;
answer_2 =    <div className="text-left">
                <p className="card-text">Beantworte folgende Fragen:</p>
                <ol>
                  <li>Wie kommt man von der Kobe Schule zum Rathaus?</li>
                  <li>In welche Straßen kann man von der Ostallee einbiegen?</li>
                  <li>Wie viele Straßenbrücken gibt es über die Wandse?</li>
                  <li>Beschreibe wie man von der Hemreihe zum Pösselweg kommt.</li>
                </ol>
              </div>;
// -----------------------------------03---------------------------------//
question_3 =  <div>
                <p className="card-text">Oje! Deine Weihnachtstanne hat vorzeitig sämtliche Nadeln verloren, und nun erhältst du vom Weihnachtsmann die Aufgabe, innerhalb einer Viertelstunde die Anzahl der auf dem Fliesenboden verstreut liegenden Nadeln zu ermitteln.</p>
                <p className="card-text font-weight-bold">Wie kann dir das gelingen?</p>
                <p className="text-center"><img src={img_03_1} alt="Aufgabe Tag 3"/></p>
              </div>;
answer_3 =    <div>
                <p className="card-text">Ein durchschnittlicher Tannenbaum hat mehrere Hunderttausend Nadeln; sie einzeln zu zählen würde viel länger als eine Viertelstunde dauern. Geh deshalb folgendermaßen vor: Zähle 100 Nadeln ab und wiege diese, um das Durchschnittsgewicht pro Nadel zu erhalten. Lege anschließend alle Nadeln auf die Waage und teile das Gesamtgewicht durch das vorher ermittelte Durchschnittsgewicht einer Nadel.</p>
                <p className="text-center"><img src={img_03_2} alt="Lösung Tag 3"/></p>
              </div>;

// -----------------------------------04---------------------------------//
question_4 =  <div>
                <p className="card-text">Du sollst aus drei Teilen ein Viereck mit 16 Kästchen legen.</p>
                <p className="card-text font-weight-bold">Welches der vier abgebildeten Elemente kannst du dafür nicht verwenden?</p>
                <p className="text-center"><img src={img_04_1} alt="Aufgabe Tag 4"/></p>
              </div>;
answer_4 =    <div>
                <p className="card-text">Das Viereck kann nur aus den Elementen 1, 2, und 4 gelegt werden.</p>
                <p className="card-text">Element 3 kann nicht dafür verwendet werden.</p>
                <p className="text-center"><img src={img_04_2} alt="Lösung Tag 4"/></p>
              </div>;

// -----------------------------------05---------------------------------//
question_5 =  <div>
                <p className="card-text">Im Einstellungsgespräch für ein Kirchenamt wird dir ein Rätsel aufgegeben: &bdquo;Man findet es am Ende der Welt und am Ende der Zeit. Man findet es vorn an jedem Tempel und am Anfang jeden Tages. Man findet es überall in der Mitte und irgendwo im Nichts.&ldquo;</p>
                <p className="card-text font-weight-bold">Was ist gemeint?</p>
                <p className="text-center"><img src={img_05_1} alt="Aufgabe Tag 5"/></p>
              </div>;
answer_5 =    <div className="text-left">
                <p className="card-text">Hat dich der Hinweis auf ein Kirchenamt in die Irre geleitet? Gemeint ist schlicht der Buchstabe &bdquo;t&ldquo;, der am Ende der Wörter &bdquo;Tempel&ldquo; und &bdquo;Tag&ldquo;, in der Mitte des Wortes &bdquo;Mitte&ldquo; sowie an beliebiger Stelle des Wortes &bdquo;Nichts&ldquo; steht.</p>
                <p className="card-text">Einfach wenn man's weiß, nicht wahr?</p>
                <p className="text-center"><img src={img_05_2} alt="Lösung Tag 5"/></p>
              </div>;
// -----------------------------------06---------------------------------//
question_6 =  <div>
                <p className="card-text">Du siehst eine Figur aus Streichhölzern.</p>
                <p className="card-text font-weight-bold">Es sollen nun zwei gleich große Quadrate entstehen.</p>
                <p className="card-text">Dabei darfst du allerdings nur vier Streichhölzer umlegen.</p>
                <p className="text-center"><img src={img_6_1} alt="Aufgabe Tag 6"/></p>
              </div>;
answer_6 =    <div>
                <p className="text-center"><img src={img_6_2} alt="Lösung Tag 6"/></p>
              </div>;

// -----------------------------------07---------------------------------//
question_7 =  <div>

                <p className="card-text">Ein Mann ist zum ersten Mal in Hamburg. Er steht an einer Bushaltestelle. Dort hängt ein Schild: Einzelkarte 50 Cent. Tageskarte 1 Euro.</p>
                <p className="card-text">Der Mann steigt in den Bus und legt dem Fahrer, ohne ein Wort zu sagen, einen Euro hin. Der Fahrer gibt dem Mann ein Tagesticket. Der bedankt sich mit einem Nicken.</p>
                <p className="card-text font-weight-bold">Woher wusste der Fahrer, dass der Mann ein Tagesticket und kein Einzelticket wollte?</p>
                <p className="text-center"><img src={img_07_1} alt="Aufgabe Tag 7"/></p>
              </div>;
answer_7 =    <div>
                <p className="card-text">Querdenker lassen sich nicht gerne in die Irre führen. Wenn von einem Euro die Rede ist, sehen die meisten Menschen eine Münze. Querdenker sehen aber zwei Fünzig-Cent-Münzen. Oder fünf Zwanzig-Cent-Münzen.</p>
                <p className="card-text">Und es ist klar: Wenn ein einzelner Reisender dem Fahrer z.B. zwei Fünfzig-Cent-Münzen gibt, dann will er auf jeden Fall ein Tagesticket.</p>
                <p className="text-center"><img src={img_07_2} alt="Lösung Tag 7"/></p>
              </div>;

// -----------------------------------08---------------------------------//
question_8 =  <div>

                <p className="card-text">Bakterien vermehren sich durch Zellteilung: Aus einer Bakterie entstehen in einer Minute zwei der gleichen Größe. Nach 60 Minuten füllen die Bakterien den gesamten Behälter aus.</p>
                <p className="card-text font-weight-bold">Wie lange dauert es, bis die Bakterien die Hälfte des Behälters ausfüllen.</p>
                <p className="text-center"><img src={img_08_1} alt="Aufgabe Tag 8"/></p>
              </div>;
answer_8 =    <div>
                <p className="card-text">Nach 59 Minuten füllen die Bakterien die Hälfte des Behälters aus.</p>
                <p className="card-text">Die Lösung erhält man, indem man zurückrechnet: Nach 60 Minuten füllen die Bakterien den gesamten Behälter aus. Eine Minute vorher (also nach 59 Minuten) füllen sie die Hälfte aus, denn wenn sie sich in der letzten Minute verdopplen, füllen sie dann den ganzen Behälter aus.</p>
                <p className="text-center"><img src={img_08_2} alt="Lösung Tag 8"/></p>
              </div>;

// -----------------------------------09---------------------------------//
question_9 =  <div>
                <p className="card-text">Sie sehen hier eine komplizierte Linie. Links neben der Linie sind einzelne Elemente gezeichnet.</p>
                <p className="card-text font-weight-bold">Finden Sie heraus, welches der Elemente 1-4 Bestandteil der Linie ist!</p>
                <p className="text-center"><img src={img_09_1} alt="Aufgabe Tag 9"/></p>
              </div>;
answer_9 =    <div>
                <p className="card-text">Element Nr. 2 ist in der Linie enthalten.</p>
                <p className="text-center"><img src={img_09_2} alt="Lösung Tag 9"/></p>
              </div>;
              // -----------------------------------10---------------------------------//
question_10 =  <div>
                <p className="card-text font-weight-bold">1) Was wird kürzer, je länger man daran zieht?</p>
                <p className="text-center"><img src={img_10_1} alt="Aufgabe Tag 10_1"/></p>
                <p className="card-text font-weight-bold">2) Welche Richtung ist auf jeden Fall tödlich?</p>
                <p className="text-center"><img src={img_10_2} alt="Aufgabe Tag 10_2"/></p>
                <p className="card-text font-weight-bold">3) Warum tragen alle Waldarbeiter gelb-grün-karierte Hosenträger?</p>
                <p className="text-center"><img src={img_10_3} alt="Aufgabe Tag 10_3"/></p>
              </div>;
answer_10 =    <div>
                <p className="card-text">Na, habt ihr es gewusst?</p>
                <p className="card-text font-weight-bold">1) Es ist die Zigarre/Zigarette</p>
                <p className="card-text font-weight-bold">2) Es ist die Hin-Richtung</p>
                <p className="card-text font-weight-bold">3) Damit ihre Hosen nicht rutschen!</p>
              </div>;

// -----------------------------------11---------------------------------//
question_11 =  <div>
                <p className="card-text">Hier sieht man einen Würfel und vier Bastelanleitungen.</p>
                <p className="card-text font-weight-bold">Aus welcher Bastelanleitung kann man den gezeichneten Würfel basteln.</p>
                <p className="text-center"><img src={img_11_1} alt="Aufgabe Tag 11"/></p>
              </div>;
answer_11 =    <div>
                <p className="card-text">Nur aus der Bastelanleitung <b>3</b> kann man den abgebildeten Würfel basteln.</p>
                <p className="text-center"><img src={img_11_2} alt="Lösung Tag 11"/></p>
              </div>;

// -----------------------------------12---------------------------------//
question_12 =  <div>
                <p className="card-text">Shakespeare starb am 23. April 1616 in Stratford-upon-Avon. Cervantes, der Schöpfer von Don Quichotte, starb am 23. April 1616 in Madrid.</p>
                <p className="card-text font-weight-bold">Wie konnte einer von des anderen Tod erfahren?</p>
                <p className="text-center"><img src={img_12_1} alt="Aufgabe Tag 12"/></p>
              </div>;
answer_12 =    <div>
                <p className="card-text">Als Cervantes starb, galt in Spanien seit 1582 die Gregorianische Kalenderrechnung (Papst Gregor XIII.). Doch in England zählte noch bis 1752 der Julianische Kalender. Der Unterschied zwischen beiden betrug damals zehn Tage. Heute sind es übrigens 13 Tage.</p>
                <p className="card-text">Somit hatte Shakespeare, als Cervantes starb, noch zehn Tage zu leben. Und er hätte - theoretisch - per Brief benachrichtigt werden können.</p>
              </div>;

// -----------------------------------13---------------------------------//
question_13 =  <div>
                <p className="card-text font-weight-bold">Finde die Regel, nach der die rechte Zahl aus der linken ausgerechnet wird. Ergänze dann die letzte Zahl auf der rechten Seite.</p>
                <p className="text-center"><img src={img_13_1} alt="Aufgabe Tag 13"/></p>
              </div>;
answer_13 =    <div>
                <p className="card-text">Die Regel lautet:<br/>Die linke Zahl wird mit 7 multipliziert und dann wird 1 addiert.</p>
                <p className="card-text">Die gesuchte Zahl heißt:</p>
                <p className="card-text font-weight-bold large-number"> 22</p>
              </div>;

// -----------------------------------14---------------------------------//
question_14 =  <div>
                <p className="card-text">Hier ist eine Reihe von Symbolen angeordnet.</p>
                <p className="card-text">Finde das nächste Symbol!</p>
                <p className="card-text font-weight-bold">Wähle dazu aus der zweiten Reihe das richtige aus.</p>
                <p className="text-center"><img src={img_14_1} alt="Aufgabe Tag 14"/></p>
              </div>;
answer_14 =    <div>
                <p className="card-text">Nr. 2 ist das nächste Symbol.</p>
                <p className="card-text">Die Symbole werden immer um 90° nach links gedreht.</p>
                <p className="text-center"><img src={img_14_2} alt="Lösung Tag 14"/></p>
              </div>;
              // -----------------------------------14---------------------------------//
question_15 =  <div>
                <p className="card-text">Dromedar ja. <br/> Kamel nein.</p>
                <p className="card-text">Dämmungsmaterial nein. <br/> Sparisolation ja.</p>
                <p className="card-text">Magenfreundlich ja. <br/> Magenschonend nein.</p>
                <p className="card-text">Bistrovorhänge nein. <br/> Bistrojalousien ja.</p>
                <p className="card-text font-weight-bold">Welches gemeinsame Muster weisen alle Ja-Wörter auf?</p>

              </div>;
answer_15 =    <div>
                <p className="card-text">Worte können ein Innenleben führen! In den Ja-Wörtern entdeckt ihr die Städte Rom, Paris, Genf und Troja.</p>
                <p className="text-center"><img src={img_15_1} alt="Lösung Tag 15"/></p>
              </div>;
// -----------------------------------17---------------------------------//
question_17 =  <div>
                <p className="card-text">Sie sehen eine Figur aus Streichhölzern.</p>
                <p className="card-text font-weight-bold">Es sollen nun zwei gleich große Quadrate entstehen.</p>
                <p className="card-text">Dabei dürfen Sie allerdings nur vier Streichhölzer umlegen.</p>
                <p className="text-center"><img src={img_17_1} alt="Aufgabe Tag 17"/></p>
              </div>;
answer_17 =    <div>
                <p className="text-center"><img src={img_17_2} alt="Lösung Tag 17"/></p>
              </div>
// -----------------------------------18---------------------------------//
question_18 =  <div>
                <p className="card-text">Hier geht es um die Erkennung gleicher Strukturen.</p>
                <p className="card-text">Zwei der abgebildeten Quadrate sind gleich.</p>
                <p className="card-text"><i>Achtung: </i>Sie können auch gedreht sein.</p>
                <p className="card-text font-weight-bold">Um welche beiden handelt es sich?</p>
                <p className="text-center"><img src={img_18_1} alt="Aufgabe Tag 3"/></p>
              </div>;
answer_18 =    <div>
                <p className="card-text">Die Quadrate 1 und 5 sind gleich. Dabei ist Nummer 5 um 180° gedreht.</p>
                <p className="text-center"><img src={img_18_2} alt="Lösung Tag 3"/></p>
              </div>
// -----------------------------------20---------------------------------//
question_20 =
<div >
<p className="card-text">Zwei Wächter.<br/>Der eine schaut nur Richtung Norden.<br/>Der andere schaut nur Richtung Süden.<br/>Beide kommunizieren nicht.<br/>Kein Geräusch, keine Geste, kein Spiegel, kein Wasser.</p>
<p className="card-text">Plötzlich sagt der eine:</p>
<p className="card-text">Woher weiß er das?</p>
</div>;

answer_20 =
<div >
<p className="card-text">Querdenker versetzen sich gerne in die Situation hinein. Die beiden Wächter stehen sich genau gegenüber. Doch die meisten von uns gehen davon aus, dass sie Rücken an Rücken stehen. Weil das ja logischer ist...</p>

</div>;

// -----------------------------------21---------------------------------//
question_21 = <div>
<p>A, B, und C werden des Diebstahls verdächtigt, doch nur einer hat die Tat begangen. Zwei von ihnen sind notorische Lügner, sie sagen nicht die Wahrheit; nur einer ist ehrlich.</p>
<p>Können Sie dennoch anhand der Aussagen ermittlen, wer von den dreien der Täter ist?</p>
<ul>
<li>A: Ich bin unschuldig!</li>
<li>B: C lügt!</li>
<li>C: A ist der Täter!</li>
</ul>
</div>;

answer_21 = <div><p>A ist der Täter, C sagt die Wahrheit.</p>
          <p>Nehmen wir an, B sei der Dieb, dann wäre sowohl die Aussage von A als auch die von B wahr. Da jedoch nur einer die Wahrheit sagt, kann dies nicht die Lösung sein.</p>
          <p>Das gleiche gilt, wenn C der gesuchte Täter wäre. Auch hier wären zwei Aussagen - die von A und B - wahr, was nicht sein kann.</p>
          </div>;
// -----------------------------------22---------------------------------//
question_22 =  <div>
                <p className="card-text">Sie sehen einen Würfel und eine Drehachse, die durch den Würfel verläuft. Drehen Sie nun den Würfel in Gedanken zweimal um 90° im Uhrzeigersinn.</p>
                <p className="card-text font-weight-bold">Wie sieht dann der Würfel aus?</p>
                <p className="card-text">Entscheiden Sie sich für eine der vier Möglichkeiten.</p>
                <p className="text-center"><img src={img_22_1} alt="Aufgabe Tag 22"/></p>
              </div>;
answer_22 =    <div>
                <p className="card-text">Nach zweimaliger Drehung ergibt sich das Bild Nr. 2.</p>
                <p className="text-center"><img src={img_22_2} alt="Lösung Tag 22"/></p>
              </div>
// -----------------------------------23---------------------------------//

// -----------------------------------24---------------------------------//
question_24 =
  <div>
     <div className="flip-card-front">
       <p className="card-text">Sie sehen einen Würfel und eine Drehachse, die durch den Würfel verläuft. Drehen Sie nun den Würfel in Gedanken zweimal um 90° im Uhrzeigersinn.</p>
       <p className="card-text font-weight-bold">Wie sieht dann der Würfel aus?</p>
       <p className="card-text">Entscheiden Sie sich für eine der vier Möglichkeiten.</p>
       <p className="text-center"><img src={img_22_1} alt="Aufgabe Tag 22"/></p>
     </div>
     <div className="flip-card-back">
       <p className="card-text">Nach zweimaliger Drehung ergibt sich das Bild Nr. 2.</p>
       <p className="text-center"><img src={img_22_2} alt="Lösung Tag 22"/></p>
     </div>
 </div>
;


let question_25 = question_1;
let answer_25 = answer_1;

let question_26 = question_2;
let answer_26 = answer_2;

let question_27 = question_3;
let answer_27 = answer_3;
// -----------------------------------END OF DATA------------------------//
export function Question(quizId) {
  let result;
  switch(quizId){
    case 1:
      result = question_1;
      break;
    case 2:
      result = question_2;
      break;
    case 3:
      result = question_3;
      break;
    case 4:
      result = question_4;
      break;
    case 5:
      result = question_5;
      break;
    case 6:
      result = question_6;
      break;
    case 7:
      result = question_7;
      break;
    case 8:
      result = question_8;
      break;
    case 9:
      result = question_9;
      break;
    case 10:
      result = question_10;
      break;
    case 11:
      result = question_11;
      break;
    case 12:
      result = question_12;
      break;
    case 13:
      result = question_13;
      break;
    case 14:
      result = question_14;
      break;
    case 15:
      result = question_15;
      break;
    case 16:
      result = question_16;
      break;
    case 17:
      result = question_17;
      break;
    case 18:
      result = question_18;
      break;
    case 19:
      result = question_19;
      break;
    case 20:
      result = question_20;
      break;
    case 21:
      result = question_21;
      break;
    case 22:
      result = question_22;
      break;
    case 23:
      result = question_23;
      break;
    case 24:
      result = question_24;
      break;
    default:
      result = '';

  }
  return result;
}


export function Answer(quizId) {
  let result;
  switch(quizId){
    case 1:
      result = answer_1;
      break;
    case 2:
      result = answer_2;
      break;
    case 3:
      result = answer_3;
      break;
    case 4:
      result = answer_4;
      break;
    case 5:
      result = answer_5;
      break;
    case 6:
      result = answer_6;
      break;
    case 7:
      result = answer_7;
      break;
    case 8:
      result = answer_8;
      break;
    case 9:
      result = answer_9;
      break;
    case 10:
      result = answer_10;
      break;
    case 11:
      result = answer_11;
      break;
    case 12:
      result = answer_12;
      break;
    case 13:
      result = answer_13;
      break;
    case 14:
      result = answer_14;
      break;
    case 15:
      result = answer_15;
      break;
    case 16:
      result = answer_16;
      break;
    case 17:
      result = answer_17;
      break;
    case 18:
      result = answer_18;
      break;
    case 19:
      result = answer_19;
      break;
    case 20:
      result = answer_20;
      break;
    case 21:
      result = answer_21;
      break;
    case 22:
      result = answer_22;
      break;
    case 23:
      result = answer_23;
      break;
    case 24:
      result = answer_24;
      break;
    default:
      result = '';
  }
  return result;
}
