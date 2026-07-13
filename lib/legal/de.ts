import type { LegalDict } from './types';

// Deutsch. Übersetzung von ./en.ts: der englische Text ist und bleibt die
// rechtlich verbindliche Fassung; darauf weist shell.legalNote auf jeder Seite
// hin. Anwendbares Recht ist das Recht von England und Wales, deshalb bleiben
// alle britischen Bezüge (Consumer Rights Act 2015, ICO, 999, Samaritans)
// unverändert stehen. In den Rechtstexten wird durchgehend gesiezt.

export const de: LegalDict = {
  terms: {
    metaTitle: 'Nutzungsbedingungen',
    metaDesc: 'Die Bedingungen für die Nutzung der Symponia-App und dieser Website, betrieben von Boroto Ltd.',
    kicker: 'Rechtliches',
    title: 'Nutzungsbedingungen',
    updated: 'Zuletzt aktualisiert: Juli 2026',
    intro:
      'Diese Nutzungsbedingungen (die „Bedingungen“) regeln Ihren Zugang zu und Ihre Nutzung der mobilen Anwendung Symponia sowie dieser Website (zusammen der „Dienst“). Der Dienst wird von Boroto Ltd betrieben, einer in England und Wales eingetragenen Gesellschaft („Boroto“, „wir“, „uns“ oder „unser“). Bitte lesen Sie diese Bedingungen sorgfältig. Indem Sie den Dienst herunterladen, darauf zugreifen oder ihn nutzen, erklären Sie sich mit ihnen einverstanden. Wenn Sie nicht einverstanden sind, nutzen Sie den Dienst bitte nicht.',
    sections: [
      {
        h: '1. Wer wir sind und wie Sie uns erreichen',
        blocks: [
          { t: 'p', x: 'Der Dienst wird von Boroto Ltd bereitgestellt, eingetragen in England und Wales. Sie können uns jederzeit unter [hello@symponia.io](mailto:hello@symponia.io) kontaktieren. Unsere Handelsregisternummer und die Anschrift unseres eingetragenen Sitzes ergeben sich aus unseren veröffentlichten Registerunterlagen und werden auf Anfrage mitgeteilt.' },
        ],
      },
      {
        h: '2. Zugangsvoraussetzungen und Alter',
        blocks: [
          { t: 'p', x: 'Sie müssen mindestens **18 Jahre alt** sein, um ein Konto anzulegen und Symponia zu nutzen. Mit der Nutzung des Dienstes bestätigen Sie, dass Sie 18 Jahre oder älter sind und die rechtliche Fähigkeit besitzen, diese Bedingungen einzugehen. Symponia richtet sich an Erwachsene und ist weder für Kinder gestaltet noch an sie gerichtet.' },
        ],
      },
      {
        h: '3. Ihr Konto',
        blocks: [
          { t: 'p', x: 'Für bestimmte Funktionen müssen Sie ein Konto anlegen und sich anmelden. Sie verpflichten sich, zutreffende Angaben zu machen, Ihre Zugangsdaten sicher aufzubewahren und für alle Aktivitäten verantwortlich zu sein, die unter Ihrem Konto stattfinden. Teilen Sie uns unverzüglich unter [hello@symponia.io](mailto:hello@symponia.io) mit, wenn Sie vermuten, dass ohne Ihre Erlaubnis auf Ihr Konto zugegriffen wurde. Sie können Ihr Konto jederzeit in der App löschen (Tab „Profil“, Bereich „Konto“, „Konto löschen“).' },
        ],
      },
      {
        h: '4. Was Symponia ist',
        blocks: [
          { t: 'p', x: 'Symponia ist ein KI-gestütztes Werkzeug zur persönlichen Reflexion und Selbsterkundung. Zu den Funktionen gehören:' },
          {
            t: 'ul',
            x: [
              'drei Modi: Archetyp, Mein Tag und Gespräch;',
              'eine Übung zu den Tier-Archetypen und eine Zusammenschau Ihrer Ergebnisse;',
              'personalisierte tägliche Reflexionen;',
              'sitzungsbasierter Zugang zu Gesprächen mit der App.',
            ],
          },
          { t: 'p', x: 'Wir können Funktionen von Zeit zu Zeit hinzufügen, ändern oder entfernen, um den Dienst zu verbessern.' },
        ],
      },
      {
        h: '5. Symponia ist kein medizinischer Dienst und kein Krisendienst',
        blocks: [
          { t: 'p', x: 'Symponia ist **kein medizinischer, therapeutischer, psychiatrischer, psychologischer oder beratender Dienst** und kein Ersatz für professionelle Versorgung. Nichts in der App und nichts, was Symponia erzeugt, stellt professionelle Beratung, Diagnose oder Behandlung dar, und nichts davon sollte als solche verstanden werden.' },
          { t: 'p', x: 'Symponia kann in einem Notfall nicht helfen und bietet keine Krisenunterstützung. **Wenn Sie sich in einer Krise befinden oder befürchten, sich selbst oder anderen Schaden zuzufügen, wenden Sie sich unverzüglich an Ihren örtlichen Notdienst oder an eine qualifizierte Fachperson.** Im Vereinigten Königreich können Sie 999 anrufen oder die Samaritans kostenlos unter 116 123 erreichen.' },
        ],
      },
      {
        h: '6. KI-generierte Inhalte',
        blocks: [
          { t: 'p', x: 'Die Antworten von Symponia werden von künstlicher Intelligenz erzeugt. KI kann falsch, unvollständig oder irreführend sein, und ihre Antworten passen möglicherweise nicht zu Ihrer Situation. Sie sind selbst dafür verantwortlich, wie Sie das, was Symponia hervorbringt, deuten und was Sie daraufhin tun; nutzen Sie Ihr eigenes Urteilsvermögen und holen Sie, wo angebracht, qualifizierten fachlichen Rat ein. Wir gewährleisten nicht, dass Ausgaben zutreffend, verlässlich oder für einen bestimmten Zweck geeignet sind.' },
        ],
      },
      {
        h: '7. Abonnements, Preise und automatische Verlängerung',
        id: 'tokens',
        blocks: [
          { t: 'p', x: '**Kostenloses Startguthaben.** Neue Nutzerinnen und Nutzer erhalten ein begrenztes kostenloses Guthaben, um Symponia vor einem Abonnement auszuprobieren.' },
          { t: 'p', x: '**Symponia Monatlich.** Ein Abonnement umfasst 350 Reflexionsgespräche pro Kalendermonat. Es gilt der Preis, der zum Zeitpunkt des Kaufs im App Store angezeigt wird; Apple legt die Preise je Land fest und kann sie ändern. Bei jeder Verlängerung wird ein neues Guthaben von 350 Gesprächen gewährt; nicht genutzte Gespräche werden nicht übertragen. Die täglichen Reflexionen sind kostenlos, werden nicht auf Ihre Gespräche angerechnet und sind auf 10 innerhalb von 24 Stunden begrenzt.' },
          { t: 'p', x: '**Abrechnung und Verlängerung.** Abonnements werden von Apple über den In-App-Kauf verkauft und abgewickelt und über Ihre Apple ID abgerechnet. Ihr Abonnement verlängert sich am Ende jedes Abrechnungszeitraums automatisch zum dann geltenden Preis, sofern Sie nicht mindestens 24 Stunden vor Ende des Zeitraums kündigen. Sie können Ihr Abonnement jederzeit in Ihren Apple-ID-Einstellungen verwalten oder kündigen (Einstellungen, Ihr Name, Abonnements). Das Löschen der App kündigt Ihr Abonnement nicht.' },
          { t: 'p', x: '**Zahlung.** Die Zahlung wird von Apple eingezogen. Wir sehen und speichern Ihre Zahlungskartendaten zu keinem Zeitpunkt. Die Preise werden in der App angezeigt und können sich ändern; wir werden Preisänderungen im erforderlichen Umfang ankündigen, und eine Änderung berührt keinen bereits bezahlten Abrechnungszeitraum.' },
        ],
      },
      {
        h: '8. Kündigung und Erstattungen',
        blocks: [
          { t: 'p', x: 'Sie können Ihr Abonnement jederzeit wie oben beschrieben kündigen und behalten den Zugang bis zum Ende des Zeitraums, den Sie bezahlt haben. Käufe erfolgen über Apple, und Erstattungen werden von Apple nach dessen Richtlinien bearbeitet. Alle Einzelheiten, einschließlich Ihrer gesetzlichen Verbraucherrechte, finden Sie in unseren [Erstattungsrichtlinien](/refunds). Nichts in diesen Bedingungen berührt Ihre gesetzlichen Rechte nach dem Consumer Rights Act 2015 oder nach anderem anwendbaren Verbraucherrecht.' },
        ],
      },
      {
        h: '9. Zulässige Nutzung',
        blocks: [
          { t: 'p', x: 'Sie verpflichten sich, Folgendes zu unterlassen:' },
          {
            t: 'ul',
            x: [
              'den Dienst für rechtswidrige, schädigende oder betrügerische Zwecke zu nutzen;',
              'den Dienst zurückzuentwickeln, zu dekompilieren, auszulesen (Scraping) oder zu versuchen, den zugrunde liegenden Quellcode, die Prompts oder die Modelle zu extrahieren, außer soweit diese Beschränkung gesetzlich unzulässig ist;',
              'den Dienst zu nutzen, um sich selbst oder andere zu belästigen, zu beschimpfen, zu bedrohen oder zu schädigen;',
              'über Ihre Identität oder Ihr Alter zu täuschen oder das Konto einer anderen Person ohne deren Erlaubnis zu nutzen;',
              'Bots, Skripte oder andere automatisierte Mittel einzusetzen, um auf den Dienst zuzugreifen oder Gespräche zu erzeugen;',
              'den Dienst oder seine Systeme zu stören, zu beeinträchtigen oder sich unbefugt Zugang zu ihnen zu verschaffen.',
            ],
          },
          { t: 'p', x: 'Wir können den Zugang aussetzen oder beenden, wenn Sie gegen diese Bedingungen verstoßen oder den Dienst in einer Weise nutzen, die einen Schaden für Sie, für andere oder für uns befürchten lässt.' },
        ],
      },
      {
        h: '10. Geistiges Eigentum',
        blocks: [
          { t: 'p', x: 'Der Dienst, einschließlich der Software von Symponia, des Tier-Archetypen-Modells, der Prompts, Texte, des Designs und der Marke, steht im Eigentum von Boroto Ltd oder deren Lizenzgebern und ist durch Rechte des geistigen Eigentums geschützt. Wir gewähren Ihnen ein beschränktes, persönliches, nicht ausschließliches, nicht übertragbares und widerrufliches Recht, den Dienst im Einklang mit diesen Bedingungen für Ihre eigenen persönlichen, nicht kommerziellen Zwecke zu nutzen. Ohne unsere schriftliche Erlaubnis dürfen Sie den Dienst nicht vervielfältigen, verbreiten oder daraus abgeleitete Werke erstellen.' },
          { t: 'p', x: 'Die Reflexionen und Gespräche, die Sie erzeugen, gehören Ihnen. Wir erheben keinen Eigentumsanspruch auf Ihre persönlichen Inhalte. Sie gewähren uns ein beschränktes Recht, diese Inhalte nur insoweit zu verarbeiten, wie es für den Betrieb und die Bereitstellung des Dienstes für Sie erforderlich ist, wie in unserer [Datenschutzerklärung](/privacy) beschrieben.' },
        ],
      },
      {
        h: '11. Dienste Dritter',
        blocks: [
          { t: 'p', x: 'Der Dienst greift auf Dritte zurück, darunter Apple (Vertrieb, Anmeldung und Zahlungen), Anthropic (die KI Claude, die die Antworten erzeugt) und Supabase (sicheres Hosting). Für Ihre Nutzung der App gilt zusätzlich Apples [Licensed Application End User License Agreement](/eula). Für Dienste Dritter sind wir nicht verantwortlich; für deren Teil der Nutzung gelten deren eigene Bedingungen und Datenschutzerklärungen.' },
        ],
      },
      {
        h: '12. Verfügbarkeit und Änderungen des Dienstes',
        blocks: [
          { t: 'p', x: 'Wir bemühen uns, Symponia verfügbar zu halten, gewährleisten jedoch nicht, dass der Dienst unterbrechungsfrei, sicher oder fehlerfrei ist. Der Dienst kann während Wartungsarbeiten oder aus Gründen außerhalb unseres Einflussbereichs nicht verfügbar sein, und wir können ihn ganz oder teilweise ändern, aussetzen oder einstellen. Wenn wir eine kostenpflichtige Funktion einstellen, handeln wir fair und im Einklang mit Ihren Verbraucherrechten.' },
        ],
      },
      {
        h: '13. Sperrung und Beendigung',
        blocks: [
          { t: 'p', x: 'Sie können die Nutzung des Dienstes jederzeit beenden und Ihr Konto löschen. Wir können Ihren Zugang aussetzen oder beenden, wenn Sie gegen diese Bedingungen verstoßen, wenn dies gesetzlich vorgeschrieben ist oder wenn die weitere Bereitstellung des Dienstes für Sie nicht in zumutbarer Weise möglich ist. Bestimmungen, die ihrer Natur nach über die Beendigung hinaus fortgelten sollen (einschließlich geistiges Eigentum, Haftungsausschlüsse, Haftungsbeschränkung und anwendbares Recht), gelten weiter.' },
        ],
      },
      {
        h: '14. Haftungsausschlüsse',
        blocks: [
          { t: 'p', x: 'Mit Ausnahme der Pflichten, die wir in diesen Bedingungen ausdrücklich übernehmen, und der Rechte, die Ihnen nach Verbraucherrecht zustehen und nicht ausgeschlossen werden können, wird der Dienst „wie besehen“ und „wie verfügbar“ bereitgestellt, und wir übernehmen keinerlei ausdrückliche oder stillschweigende Gewährleistungen hinsichtlich des Dienstes, seiner Inhalte oder KI-generierter Ausgaben.' },
        ],
      },
      {
        h: '15. Unsere Haftung Ihnen gegenüber',
        blocks: [
          { t: 'p', x: 'Nichts in diesen Bedingungen beschränkt oder schließt unsere Haftung aus, wo dies rechtswidrig wäre. Dazu gehören die Haftung für Tod oder Personenschaden aufgrund unserer Fahrlässigkeit, für Betrug oder arglistige Täuschung sowie jede weitere Haftung, die nach anwendbarem Recht nicht beschränkt oder ausgeschlossen werden kann, einschließlich Ihrer gesetzlichen Verbraucherrechte.' },
          { t: 'p', x: 'Vorbehaltlich des vorstehenden Absatzes und im größtmöglichen gesetzlich zulässigen Umfang gilt: Wir haften nicht für Verluste oder Schäden, die nicht vorhersehbar waren, nicht für Schäden, die daraus entstehen, dass Sie sich auf KI-generierte Inhalte verlassen, und nicht für mittelbare Schäden oder Folgeschäden; und unsere Gesamthaftung Ihnen gegenüber für alle Ansprüche, die sich aus dem Dienst ergeben oder mit ihm zusammenhängen, übersteigt in einem Zeitraum von zwölf Monaten nicht den höheren der folgenden Beträge: (a) den Gesamtbetrag, den Sie uns oder Apple in diesem Zeitraum für den Dienst gezahlt haben, oder (b) £100. Wir stellen den Dienst ausschließlich für den persönlichen Gebrauch bereit und haften nicht für geschäftliche Schäden.' },
        ],
      },
      {
        h: '16. Freistellung',
        blocks: [
          { t: 'p', x: 'Sie erklären sich bereit, für angemessene Verluste und Kosten einzustehen und uns diese zu erstatten, die uns aus Ihrer missbräuchlichen Nutzung des Dienstes oder Ihrem Verstoß gegen diese Bedingungen entstehen, soweit sie von Ihnen verursacht wurden. Ihre Verbraucherrechte werden dadurch nicht eingeschränkt.' },
        ],
      },
      {
        h: '17. Änderungen dieser Bedingungen',
        blocks: [
          { t: 'p', x: 'Wir können diese Bedingungen von Zeit zu Zeit aktualisieren, etwa um Änderungen des Dienstes oder der Rechtslage abzubilden. Wir ändern dann das Datum „Zuletzt aktualisiert“ oben und ergreifen bei wesentlichen Änderungen angemessene Schritte, um Sie darauf aufmerksam zu machen. Wenn Sie den Dienst nach Wirksamwerden der Änderungen weiter nutzen, akzeptieren Sie die aktualisierten Bedingungen. Wenn Sie nicht einverstanden sind, sollten Sie die Nutzung des Dienstes einstellen und können kündigen und Ihr Konto löschen.' },
        ],
      },
      {
        h: '18. Anwendbares Recht und Gerichtsstand',
        blocks: [
          { t: 'p', x: 'Diese Bedingungen und alle Streitigkeiten, die sich aus ihnen oder im Zusammenhang mit ihnen ergeben, unterliegen dem Recht von England und Wales. Für Streitigkeiten sind ausschließlich die Gerichte von England und Wales zuständig; leben Sie jedoch in einem anderen Landesteil des Vereinigten Königreichs, können Sie Verfahren in Ihrem Heimatland einleiten, und Verbraucherinnen und Verbraucher behalten den Schutz der zwingenden Vorschriften ihres Wohnsitzstaates.' },
        ],
      },
      {
        h: '19. Allgemeines',
        blocks: [
          { t: 'p', x: 'Sollte ein Teil dieser Bedingungen undurchsetzbar sein, bleiben die übrigen Teile wirksam. Wenn wir eine Bestimmung nicht durchsetzen, liegt darin kein Verzicht auf sie. Sie dürfen Ihre Rechte aus diesen Bedingungen nicht ohne unsere Zustimmung übertragen; wir dürfen unsere Rechte übertragen, sofern Ihre Rechte dadurch nicht beeinträchtigt werden. Diese Bedingungen bilden zusammen mit unserer [Datenschutzerklärung](/privacy), unseren [Erstattungsrichtlinien](/refunds) und dem [EULA](/eula) die vollständige Vereinbarung zwischen Ihnen und uns über den Dienst.' },
        ],
      },
      {
        h: '20. Kontakt',
        blocks: [
          { t: 'p', x: 'Fragen zu diesen Bedingungen? Schreiben Sie uns an [hello@symponia.io](mailto:hello@symponia.io).' },
        ],
      },
    ],
  },

  privacy: {
    metaTitle: 'Datenschutzerklärung',
    metaDesc: 'Wie Boroto Ltd Ihre personenbezogenen Daten erhebt, nutzt und schützt, wenn Sie Symponia verwenden.',
    kicker: 'Rechtliches',
    title: 'Datenschutzerklärung',
    updated: 'Zuletzt aktualisiert: Juli 2026',
    intro:
      'Diese Datenschutzerklärung erläutert, wie Boroto Ltd („Boroto“, „wir“, „uns“ oder „unser“) Ihre personenbezogenen Daten erhebt, nutzt, weitergibt und schützt, wenn Sie die Symponia-App und die Website nutzen. Symponia ist ein Raum für private Reflexion, deshalb erheben wir so wenig wie möglich und verkaufen Ihre Daten niemals.',
    sections: [
      {
        h: '1. Wer wir sind (Verantwortlicher)',
        blocks: [
          { t: 'p', x: 'Boroto Ltd ist der Verantwortliche für Ihre personenbezogenen Daten. Wir sind in England und Wales eingetragen. Zu allem, was in dieser Erklärung steht, erreichen Sie uns unter [hello@symponia.io](mailto:hello@symponia.io). Unsere Handelsregisternummer und die Anschrift unseres eingetragenen Sitzes ergeben sich aus unseren veröffentlichten Registerunterlagen und werden auf Anfrage mitgeteilt.' },
        ],
      },
      {
        h: '2. Die personenbezogenen Daten, die wir erheben',
        blocks: [
          { t: 'p', x: '**Angaben, die Sie uns beim Onboarding und bei der Nutzung machen:**' },
          {
            t: 'ul',
            x: [
              'Ihren Vornamen und, wenn Sie es angeben möchten, Ihr Geschlecht;',
              'Ihre sieben Tier-Archetypen und Ihre Antworten auf die einstimmenden Fragen;',
              'Ihre bevorzugte Resonanzfrequenz;',
              'die Nachrichten und Reflexionen, die Sie in den einzelnen Modi schreiben;',
              'Ihre Benachrichtigungseinstellungen und ob Sie gelegentliche E-Mail-Updates abonnieren.',
            ],
          },
          { t: 'p', x: '**Konto- und technische Informationen:**' },
          {
            t: 'ul',
            x: [
              'Kontodaten, die nötig sind, um Sie anzumelden und Ihre Daten sicher zu halten;',
              'Ihr Guthaben an Gesprächen (Tokens) und Ihren Abonnementstatus;',
              'begrenzte technische und diagnostische Informationen (etwa App-Version und grundlegende Geräteinformationen), die dazu dienen, den Dienst funktionsfähig und sicher zu halten.',
            ],
          },
          { t: 'p', x: '**Kaufinformationen:** Wenn Sie ein Abonnement abschließen, wickelt Apple Ihre Zahlung ab. Wir erhalten von Apple eine Bestätigung Ihres Abonnementstatus, erhalten oder speichern jedoch niemals Ihre Zahlungskartendaten.' },
          { t: 'p', x: 'Manche Informationen werden zusätzlich lokal auf Ihrem Gerät gespeichert (zum Beispiel Ihre Archetypen, Ihre Einstellungen und Ihr Gesprächsverlauf in den einzelnen Modi). Lokale Daten werden entfernt, wenn Sie die App löschen.' },
          { t: 'p', x: 'Bitte teilen Sie keine Informationen, die Sie nicht festhalten möchten, und seien Sie besonders vorsichtig mit Daten besonderer Kategorien (etwa Angaben zu Ihrer Gesundheit, Ihren Überzeugungen oder Ihrer Sexualität). Soweit solche Informationen in dem auftauchen, was Sie schreiben, verarbeiten wir sie ausschließlich, um Ihnen den Dienst bereitzustellen, und zwar auf Grundlage Ihrer ausdrücklichen Einwilligung, die Sie durch Löschen der betreffenden Inhalte oder Ihres Kontos widerrufen können.' },
        ],
      },
      {
        h: '3. Wie und warum wir Ihre Daten nutzen und unsere Rechtsgrundlagen',
        blocks: [
          { t: 'p', x: 'Nach dem Datenschutzrecht des Vereinigten Königreichs und der EU brauchen wir für die Nutzung Ihrer personenbezogenen Daten eine Rechtsgrundlage. Wir stützen uns auf die folgenden:' },
          {
            t: 'ul',
            x: [
              '**Zur Erfüllung unseres Vertrags mit Ihnen**: um Ihr Konto anzulegen und zu betreiben, personalisierte Symponia-Antworten zu erzeugen, Ihre tägliche Reflexion auszuliefern, während eines Gesprächs eine Sitzung aufrechtzuerhalten und Ihr Abonnement bei Apple zu bestätigen.',
              '**Ihre Einwilligung**: um Push-Benachrichtigungen oder gelegentliche Marketing-E-Mails zu senden (nur wenn Sie zustimmen) und um Daten besonderer Kategorien zu verarbeiten, die in dem enthalten sind, was Sie schreiben. Sie können Ihre Einwilligung jederzeit widerrufen.',
              '**Unsere berechtigten Interessen**: um den Dienst sicher und funktionsfähig zu halten, Missbrauch und Betrug zu verhindern und die Zuverlässigkeit zu verbessern, und zwar in einer Weise, die Ihre Rechte nicht überwiegt.',
              '**Rechtliche Verpflichtung**: um Gesetze einzuhalten, die für uns gelten, etwa im Steuerrecht und bei der Beantwortung rechtmäßiger Auskunftsersuchen.',
            ],
          },
          { t: 'p', x: 'Wir nutzen Ihre Daten nicht für Werbung oder Werbe-Targeting, und wir verkaufen Ihre personenbezogenen Daten nicht.' },
        ],
      },
      {
        h: '4. Wie Symponia KI einsetzt',
        blocks: [
          { t: 'p', x: 'Um reflektierende Antworten zu erzeugen, wird der Text, den Sie senden, zusammen mit Ihrem Vornamen, Ihrem Geschlecht (falls angegeben), Ihren Archetypen und Ihrer Resonanzfrequenz an die Claude-API von Anthropic übermittelt. Diese Verarbeitung erfolgt unter Zero Data Retention (ZDR)-Bedingungen: Anthropic speichert die Inhalte Ihrer Gespräche nach dem Erzeugen einer Antwort nicht und verwendet sie nicht, um seine Modelle zu trainieren oder zu verbessern.' },
          { t: 'p', x: 'Symponia erzeugt Inhalte automatisiert, trifft jedoch keine ausschließlich automatisierten Entscheidungen, die Ihnen gegenüber rechtliche Wirkung entfalten oder Sie in ähnlicher Weise erheblich beeinträchtigen. Symponia ist ein Werkzeug zur Reflexion, keine Entscheidungsinstanz.' },
        ],
      },
      {
        h: '5. An wen wir Daten weitergeben',
        blocks: [
          { t: 'p', x: 'Wir geben Daten nur an die Dienstleister weiter, die uns beim Betrieb von Symponia unterstützen; jeder von ihnen handelt auf Grundlage von Vereinbarungen, die ihn zum Schutz der Daten verpflichten:' },
          {
            t: 'ul',
            x: [
              '**Anthropic**: stellt die KI Claude bereit, die die Antworten erzeugt, unter Zero Data Retention-Bedingungen. Siehe [anthropic.com/legal/privacy](https://www.anthropic.com/legal/privacy).',
              '**Supabase**: sichere Datenbank, Authentifizierung und Backend-Hosting für Ihr Konto und Ihre Gespräche.',
              '**Apple**: Vertrieb über den App Store, Anmeldung, Zustellung von Push-Benachrichtigungen und Abwicklung des In-App-Kaufs. Zahlungsdaten werden vollständig von Apple verarbeitet.',
            ],
          },
          { t: 'p', x: 'Wir können Daten außerdem offenlegen, wenn dies gesetzlich vorgeschrieben ist, um die Sicherheit, die Rechte oder das Eigentum unserer Nutzerinnen und Nutzer oder Dritter zu schützen, oder im Zusammenhang mit einer Unternehmensübertragung; in diesem Fall informieren wir Sie und schützen Ihre Daten weiterhin.' },
        ],
      },
      {
        h: '6. Internationale Datenübermittlungen',
        blocks: [
          { t: 'p', x: 'Einige unserer Dienstleister (darunter Anthropic und Apple) verarbeiten Daten außerhalb des Vereinigten Königreichs und des EWR, unter anderem in den Vereinigten Staaten. Soweit Daten international übermittelt werden, stützen wir uns auf geeignete Garantien, die nach dem Recht des Vereinigten Königreichs und der EU anerkannt sind, etwa das UK International Data Transfer Agreement bzw. dessen Addendum sowie die Standardvertragsklauseln der Europäischen Kommission, ergänzt um zusätzliche Schutzmaßnahmen, wo dies erforderlich ist. Sie können bei uns weitere Informationen zu diesen Garantien anfordern.' },
        ],
      },
      {
        h: '7. Wie lange wir Ihre Daten aufbewahren',
        blocks: [
          { t: 'p', x: 'Wir bewahren Ihr Konto und Ihren Gesprächsverlauf so lange auf, wie Ihr Konto aktiv ist. Wenn Sie Ihr Konto löschen (Tab „Profil“, Bereich „Konto“, „Konto löschen“) oder uns bitten, Ihre Daten zu löschen, entfernen wir sie aus unseren aktiven Systemen, und sie werden innerhalb kurzer Zeit auch aus den routinemäßigen Backups entfernt. Inhalte, die an Anthropic übermittelt werden, werden von Anthropic nach den ZDR-Bedingungen nicht gespeichert. Lokale Daten auf Ihrem Gerät werden entfernt, wenn Sie die App löschen. Begrenzte Informationen bewahren wir nur dann länger auf, wenn das Gesetz dies verlangt (zum Beispiel einfache Transaktionsnachweise).' },
          { t: 'p', x: 'Wenn Sie uns bitten, Daten zu löschen, die mit Ihrem Konto verbunden sind, setzen wir Ihre Anfrage innerhalb von 30 Tagen um.' },
        ],
      },
      {
        h: '8. Wie wir Ihre Daten schützen',
        blocks: [
          { t: 'p', x: 'Wir setzen technische und organisatorische Maßnahmen zum Schutz Ihrer Daten ein, darunter Verschlüsselung bei der Übertragung, Zugriffskontrollen und renommierte Infrastrukturanbieter. Keine Übertragungs- oder Speichermethode ist vollständig sicher, aber wir arbeiten daran, Ihre Informationen zu schützen und schnell zu reagieren, wenn etwas schiefgeht, einschließlich einer Benachrichtigung an Sie und an die zuständige Aufsichtsbehörde, wo das Gesetz dies verlangt.' },
        ],
      },
      {
        h: '9. Ihre Rechte',
        id: 'gdpr',
        blocks: [
          { t: 'p', x: 'Wenn Sie sich im Vereinigten Königreich oder im EWR befinden, stehen Ihnen nach der UK-DSGVO und der EU-DSGVO die folgenden Rechte an Ihren personenbezogenen Daten zu:' },
          {
            t: 'ul',
            x: [
              '**Auskunft**: eine Kopie der personenbezogenen Daten zu erhalten, die wir über Sie speichern;',
              '**Berichtigung**: unrichtige Daten berichtigen zu lassen;',
              '**Löschung**: Ihre Daten löschen zu lassen („Recht auf Vergessenwerden“);',
              '**Einschränkung**: von uns zu verlangen, die Nutzung Ihrer Daten einzuschränken;',
              '**Datenübertragbarkeit**: Ihre Daten in einem übertragbaren, maschinenlesbaren Format zu erhalten;',
              '**Widerspruch**: einer Verarbeitung zu widersprechen, die auf unseren berechtigten Interessen beruht;',
              '**Widerruf der Einwilligung**: jederzeit, soweit wir uns auf Ihre Einwilligung stützen, ohne dass die Rechtmäßigkeit der bis dahin erfolgten Verarbeitung berührt wird.',
            ],
          },
          { t: 'p', x: 'Um eines dieser Rechte auszuüben, schreiben Sie an [hello@symponia.io](mailto:hello@symponia.io). Wir stellen Ihnen dafür nichts in Rechnung und behandeln Sie deswegen nicht anders. Wenn Sie mit unserem Umgang mit Ihren Daten nicht zufrieden sind, können Sie sich beim britischen Information Commissioner’s Office ([ico.org.uk](https://ico.org.uk)) oder bei Ihrer örtlichen Aufsichtsbehörde im EWR beschweren.' },
        ],
      },
      {
        h: '10. Marketing',
        blocks: [
          { t: 'p', x: 'Wir versenden Marketing-E-Mails nur, wenn Sie zugestimmt haben. Jede Marketing-E-Mail enthält einen Abmeldelink, und Sie können sich jederzeit darüber oder per E-Mail an [hello@symponia.io](mailto:hello@symponia.io) abmelden. Die Abmeldung vom Marketing berührt keine Servicenachrichten, die für den Betrieb Ihres Kontos erforderlich sind.' },
        ],
      },
      {
        h: '11. Cookies und die Website',
        blocks: [
          { t: 'p', x: 'Unsere Website verwendet nur die Cookies und den lokalen Speicher, die unbedingt erforderlich sind, damit die Seite funktioniert und einfache Einstellungen erhalten bleiben. Wir setzen keine Werbe- oder seitenübergreifenden Tracking-Cookies ein. Sollten wir künftig Analysefunktionen hinzufügen, aktualisieren wir diese Erklärung und holen, wo erforderlich, zuvor Ihre Einwilligung ein.' },
        ],
      },
      {
        h: '12. Kinder',
        blocks: [
          { t: 'p', x: 'Symponia richtet sich an Erwachsene. Es richtet sich nicht an Personen unter 18 Jahren, und wir erheben wissentlich keine personenbezogenen Daten von Kindern. Wenn Sie glauben, dass ein Kind uns personenbezogene Daten übermittelt hat, kontaktieren Sie uns unter [hello@symponia.io](mailto:hello@symponia.io), und wir löschen sie.' },
        ],
      },
      {
        h: '13. Änderungen dieser Erklärung',
        blocks: [
          { t: 'p', x: 'Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wir ändern dann das Datum „Zuletzt aktualisiert“ oben und ergreifen bei wesentlichen Änderungen angemessene Schritte, um Sie darauf aufmerksam zu machen. Wenn Sie Symponia nach Wirksamwerden der Änderungen weiter nutzen, akzeptieren Sie die aktualisierte Erklärung.' },
        ],
      },
      {
        h: '14. Kontakt',
        blocks: [
          { t: 'p', x: 'Bei allen Fragen und Anliegen zum Datenschutz wenden Sie sich an unser Datenschutzteam unter [hello@symponia.io](mailto:hello@symponia.io).' },
        ],
      },
    ],
  },

  refunds: {
    metaTitle: 'Erstattungsrichtlinien',
    metaDesc: 'Wie Erstattungen, Kündigungen und Ihre Verbraucherrechte bei Symponia-Abonnements aus dem App Store funktionieren.',
    kicker: 'Rechtliches',
    title: 'Erstattungsrichtlinien',
    updated: 'Zuletzt aktualisiert: Juli 2026',
    intro:
      'Symponia wird von Boroto Ltd betrieben. Abonnements werden von Apple über den In-App-Kauf verkauft und abgewickelt. Da Apple die Zahlung abwickelt, werden Erstattungen bei Apple beantragt und von Apple nach dessen Richtlinien entschieden. Diese Seite erklärt, wie das abläuft, und beschreibt Ihre Rechte als Verbraucherin oder Verbraucher. Nichts hier beschränkt Ihre gesetzlichen Rechte.',
    sections: [
      {
        h: '1. Symponia kostenlos ausprobieren',
        blocks: [
          { t: 'p', x: 'Neue Nutzerinnen und Nutzer erhalten ein begrenztes kostenloses Guthaben, damit Sie Symponia erleben können, bevor Sie sich für ein Abonnement entscheiden. Wir empfehlen Ihnen, es vor einem Kauf zu nutzen.' },
        ],
      },
      {
        h: '2. Wie Sie eine Erstattung beantragen',
        blocks: [
          { t: 'p', x: 'Alle Käufe erfolgen über Ihre Apple ID, daher bearbeitet Apple die Erstattungen, nicht Boroto Ltd. Um eine Erstattung zu beantragen:' },
          {
            t: 'ul',
            x: [
              'gehen Sie auf [reportaproblem.apple.com](https://reportaproblem.apple.com) und melden Sie sich mit Ihrer Apple ID an; oder',
              'öffnen Sie auf Ihrem Gerät die Einstellungen, tippen Sie auf Ihren Namen und melden Sie über den Kaufverlauf ein Problem.',
            ],
          },
          { t: 'p', x: 'Apple prüft jeden Antrag anhand eigener Kriterien und entscheidet, ob eine Erstattung gewährt wird. Wir helfen Ihnen gern, soweit wir können, aber wir können keine App-Store-Erstattungen unmittelbar veranlassen und die Entscheidung von Apple nicht garantieren.' },
        ],
      },
      {
        h: '3. Ihr Abonnement kündigen',
        blocks: [
          { t: 'p', x: 'Sie können jederzeit in Ihren Apple-ID-Einstellungen kündigen (Einstellungen, Ihr Name, Abonnements). Wenn Sie kündigen, verlängert sich Ihr Abonnement nicht, und Sie behalten den Zugang bis zum Ende des bereits bezahlten Zeitraums. Eine Kündigung löst für sich genommen keine Erstattung für den laufenden Zeitraum aus, und nicht genutzte Gespräche werden nicht übertragen. Das Löschen der App kündigt Ihr Abonnement nicht.' },
        ],
      },
      {
        h: '4. Ihre Rechte als Verbraucherin oder Verbraucher im Vereinigten Königreich oder in der EU',
        blocks: [
          { t: 'p', x: 'Wenn Sie Verbraucherin oder Verbraucher im Vereinigten Königreich oder in der EU sind, steht Ihnen beim Kauf digitaler Inhalte in der Regel ein 14-tägiges Widerrufsrecht mit Anspruch auf Erstattung zu. Dieses Recht kann jedoch erlöschen, sobald mit der Bereitstellung der digitalen Inhalte begonnen wurde, sofern Sie dem ausdrücklich zugestimmt und bestätigt haben, dass Sie damit Ihr Widerrufsrecht verlieren. Wenn Sie ein Abonnement starten und beginnen, Gespräche oder tägliche Reflexionen zu nutzen, werden digitale Inhalte sofort bereitgestellt, was das 14-tägige Widerrufsrecht für bereits bereitgestellte Inhalte erlöschen lassen kann.' },
          { t: 'p', x: 'Nichts davon nimmt Ihnen Ihre gesetzlichen Rechte. Wenn der Dienst mangelhaft ist, nicht der Beschreibung entspricht oder nicht mit angemessener Sorgfalt und Sachkunde erbracht wird, können Ihnen unabhängig vom Standard-Erstattungsverfahren von Apple Ansprüche nach dem Consumer Rights Act 2015 (oder dem entsprechenden Recht Ihres Wohnsitzstaates) zustehen. Wenn Sie meinen, dass dies auf Sie zutrifft, kontaktieren Sie uns, und wir helfen Ihnen.' },
        ],
      },
      {
        h: '5. Preisänderungen',
        blocks: [
          { t: 'p', x: 'Wenn wir den Abonnementpreis ändern, gilt der neue Preis nicht für einen Abrechnungszeitraum, den Sie bereits bezahlt haben. Wo erforderlich, wird Apple Sie bitten, eine Preiserhöhung zu bestätigen, bevor sie wirksam wird; wenn Sie nicht zustimmen, verlängert sich Ihr Abonnement nicht zum neuen Preis.' },
        ],
      },
      {
        h: '6. Kontakt',
        blocks: [
          { t: 'p', x: 'Wenn Sie ein Problem mit einer Zahlung, einem Abonnement oder dem Dienst haben, schreiben Sie an [hello@symponia.io](mailto:hello@symponia.io), und wir tun unser Bestes, um es in Ordnung zu bringen.' },
        ],
      },
    ],
  },

  eula: {
    metaTitle: 'Endbenutzer-Lizenzvertrag',
    metaDesc: 'Apples Standard-EULA für die Symponia-iOS-App. Sie regelt Ihre Lizenz zur Nutzung der aus dem App Store geladenen Symponia-Anwendung.',
    kicker: 'Rechtliches',
    titleL1: 'Licensed Application',
    titleL2: 'End User License Agreement',
    sub: 'Apple Standard EULA',
    note: 'Der nachstehende Vertrag ist Apples Standard-Lizenzvereinbarung für lizenzierte Anwendungen und wird deshalb im englischen Originalwortlaut von Apple wiedergegeben, es handelt sich um Apples eigenen Vertrag, nicht um unseren. Verbindlich ist allein dieser englische Text.',
  },

  credits: {
    metaTitle: 'Preise',
    metaDesc: 'Symponia Preise: Beginnen Sie mit 10 kostenlosen Reflexionsgesprächen, danach ein Monatsabo mit 350 Gesprächen. Der Preis wird im App Store angezeigt.',
    kicker: 'Preise',
    h1: 'Wählen Sie Ihre Tiefe',
    lead: 'Kostenlos beginnen. Monatlich weitermachen, wenn Sie so weit sind.',
    free: {
      k: 'Neu dabei',
      price: 'Kostenlos',
      sub: '10 kostenlose Reflexionsgespräche zum Ausprobieren',
      body: 'Benennen Sie Ihre sieben Tierarchetypen, erhalten Sie Ihr Konstellationsporträt und nutzen Sie 10 kostenlose Reflexionsgespräche. Keine Verpflichtung.',
      cta: 'Im App Store laden',
    },
    monthly: {
      badge: 'Empfohlen',
      k: 'Symponia Monatlich',
      price: 'Im App Store',
      sub: 'pro Monat · 350 Reflexionsgespräche',
      bullets: [
        '350 Gespräche in den Modi Archetypen, Mein Tag und Gespräch',
        'Kostenlose tägliche Reflexionen, bis zu 10 pro Tag, ohne Anrechnung',
        'Neues Guthaben jeden Monat, Gespräche werden nicht übertragen',
        'Apple legt den Preis für Ihr Land fest, siehe App Store',
        'Jederzeit über die Apple-ID-Einstellungen kündbar',
      ],
      cta: 'In der App verfügbar',
    },
    how: {
      h2: 'So funktioniert es',
      items: [
        { t: 'Ein Gespräch pro Reflexion', d: 'Jeder Austausch mit Symponia verbraucht ein Gespräch. Die täglichen Reflexionen sind kostenlos und werden nicht auf Ihr Guthaben angerechnet.' },
        { t: 'Monatlicher Neustart', d: 'Ihre 350 monatlichen Gespräche werden bei jeder Verlängerung neu gewährt. Nicht genutzte Gespräche werden nicht übertragen.' },
        { t: 'Kauf in der App', d: 'Alle Käufe erfolgen in der Symponia-iOS-App über den In-App-Kauf von Apple.' },
        { t: 'Sichere Zahlung über Apple', d: 'Alle Zahlungen werden von Apple abgewickelt. Wir sehen und speichern Ihre Kartendaten zu keinem Zeitpunkt.' },
      ],
    },
    contact: 'Fragen zu Abonnements oder zur Abrechnung? Kontaktieren Sie uns unter [hello@symponia.io](mailto:hello@symponia.io). Alle Einzelheiten finden Sie in unseren [Nutzungsbedingungen](/terms#tokens).',
  },
};
