import type { LegalDict } from './types';

// Français. Traduction de lib/legal/en.ts, qui reste la seule version faisant
// foi. Le lecteur est vouvoyé d’un bout à l’autre : le ton tutoyé de la copie
// marketing n’a pas sa place dans un contrat. Les références de droit anglais
// (Consumer Rights Act 2015, ICO, Samaritans, 999) sont conservées telles
// quelles: le droit applicable est bien celui de l’Angleterre et du pays de
// Galles, et y substituer un équivalent français serait un contresens.

export const fr: LegalDict = {
  terms: {
    metaTitle: 'Conditions d’utilisation',
    metaDesc: 'Les conditions qui régissent votre utilisation de l’application et du site Symponia, exploités par Boroto Ltd.',
    kicker: 'Informations légales',
    title: 'Conditions d’utilisation',
    updated: 'Dernière mise à jour : juillet 2026',
    intro:
      'Les présentes conditions d’utilisation (les « Conditions ») régissent votre accès à l’application mobile Symponia et à ce site, ainsi que votre utilisation de ceux-ci (ensemble, le « Service »). Le Service est exploité par Boroto Ltd, société immatriculée en Angleterre et au pays de Galles (« Boroto », « nous » ou « notre »). Veuillez lire attentivement les présentes Conditions. En téléchargeant le Service, en y accédant ou en l’utilisant, vous acceptez d’être lié par elles. Si vous ne les acceptez pas, n’utilisez pas le Service.',
    sections: [
      {
        h: '1. Qui nous sommes et comment nous contacter',
        blocks: [
          { t: 'p', x: 'Le Service est fourni par Boroto Ltd, société immatriculée en Angleterre et au pays de Galles. Vous pouvez nous contacter à tout moment à l’adresse [hello@symponia.io](mailto:hello@symponia.io). Notre numéro d’immatriculation et l’adresse de notre siège social figurent dans nos dépôts publics au registre des sociétés et sont disponibles sur demande.' },
        ],
      },
      {
        h: '2. Conditions d’accès et âge requis',
        blocks: [
          { t: 'p', x: 'Vous devez avoir **au moins 18 ans** pour créer un compte et utiliser Symponia. En utilisant le Service, vous confirmez que vous avez 18 ans ou plus et que vous disposez de la capacité juridique pour conclure les présentes Conditions. Symponia s’adresse à un public adulte et n’est ni conçue ni destinée aux enfants.' },
        ],
      },
      {
        h: '3. Votre compte',
        blocks: [
          { t: 'p', x: 'Pour utiliser certaines fonctionnalités, vous devez créer un compte et vous connecter. Vous vous engagez à fournir des informations exactes, à garder vos identifiants de connexion en sécurité et à répondre de toute activité effectuée depuis votre compte. Informez-nous sans délai à l’adresse [hello@symponia.io](mailto:hello@symponia.io) si vous estimez que votre compte a été utilisé sans votre autorisation. Vous pouvez supprimer votre compte à tout moment depuis l’application (onglet Profil, section Compte, « supprimer le compte »).' },
        ],
      },
      {
        h: '4. Ce qu’est Symponia',
        blocks: [
          { t: 'p', x: 'Symponia est un outil assisté par intelligence artificielle, dédié à la réflexion personnelle et à l’exploration de soi. Ses fonctionnalités comprennent :' },
          {
            t: 'ul',
            x: [
              'trois modes : Archétype, Ma journée et Conversation ;',
              'un exercice d’archétypes animaux et une synthèse de vos résultats ;',
              'des réflexions quotidiennes personnalisées ;',
              'un accès aux conversations avec l’application décompté en séances.',
            ],
          },
          { t: 'p', x: 'Nous pouvons ajouter, modifier ou retirer des fonctionnalités de temps à autre afin d’améliorer le Service.' },
        ],
      },
      {
        h: '5. Symponia n’est ni un service médical ni un service d’urgence',
        blocks: [
          { t: 'p', x: 'Symponia **n’est pas un service médical, thérapeutique, psychiatrique, psychologique ou de conseil**, et ne remplace pas une prise en charge professionnelle. Rien dans l’application, ni rien de ce que Symponia génère, ne constitue un avis professionnel, un diagnostic ou un traitement, et rien ne doit être considéré comme tel.' },
          { t: 'p', x: 'Symponia ne peut pas vous aider en cas d’urgence et n’offre aucun soutien en situation de crise. **Si vous traversez une crise, ou si vous pensez pouvoir vous faire du mal ou en faire à autrui, contactez immédiatement les services d’urgence de votre région ou un professionnel qualifié.** Au Royaume-Uni, vous pouvez appeler le 999 ou joindre gratuitement les Samaritans au 116 123.' },
        ],
      },
      {
        h: '6. Contenus générés par l’IA',
        blocks: [
          { t: 'p', x: 'Les réponses de Symponia sont générées par intelligence artificielle. Une IA peut se tromper, être incomplète ou induire en erreur, et ses réponses peuvent ne pas convenir à votre situation. Vous êtes responsable de la manière dont vous interprétez ce que Symponia produit et dont vous y donnez suite ; il vous appartient d’exercer votre propre jugement et de solliciter l’avis d’un professionnel qualifié lorsque cela est approprié. Nous ne garantissons pas qu’un résultat généré soit exact, fiable ou adapté à un usage particulier.' },
        ],
      },
      {
        h: '7. Abonnements, tarifs et reconduction automatique',
        id: 'tokens',
        blocks: [
          { t: 'p', x: '**Essai gratuit.** Les nouveaux abonnés bénéficient d’un **essai gratuit de 7 jours**. Sauf résiliation au moins 24 heures avant la fin de l’essai, celui-ci se transforme automatiquement en abonnement payant et votre identifiant Apple est débité. Vous pouvez résilier à tout moment pendant l’essai sans être débité.' },
          { t: 'p', x: '**Symponia Mensuel (£19.99 par mois).** L’abonnement donne droit à une réflexion illimitée, sous réserve des limites d’usage équitable prévues à l’article 9. Apple fixe le prix pour chaque pays et peut le modifier ; le prix applicable est celui affiché dans l’App Store au moment de l’achat.' },
          { t: 'p', x: '**Facturation.** Le paiement est débité de votre identifiant Apple à la confirmation de l’achat, ou à la fin de l’essai gratuit. L’abonnement se reconduit automatiquement chaque mois, sauf désactivation de la reconduction automatique au moins 24 heures avant la fin de la période en cours. Le débit intervient dans les 24 heures précédant la fin de la période en cours.' },
          { t: 'p', x: '**Gérer votre abonnement.** Vous pouvez gérer ou résilier votre abonnement, et désactiver la reconduction automatique, à tout moment dans les réglages de votre identifiant Apple. Supprimer l’application ne résilie pas l’abonnement.' },
          { t: 'p', x: 'Tous les achats sont effectués via Apple. Nous ne traitons pas vos données de paiement et ne voyons jamais vos informations de carte.' },
        ],
      },
      {
        h: '8. Résiliation et remboursements',
        blocks: [
          { t: 'p', x: 'Vous pouvez résilier votre abonnement à tout moment, comme indiqué ci-dessus, et vous conservez l’accès jusqu’à la fin de la période que vous avez payée. Les achats sont effectués auprès d’Apple, et les remboursements sont traités par Apple selon ses propres règles. Pour tous les détails, y compris vos droits légaux en tant que consommateur, consultez notre [politique de remboursement](/refunds). Rien dans les présentes Conditions ne porte atteinte à vos droits légaux au titre du Consumer Rights Act 2015 ou de toute autre législation applicable en matière de protection des consommateurs.' },
        ],
      },
      {
        h: '9. Utilisation acceptable',
        blocks: [
          { t: 'p', x: '**Usage équitable.** Symponia est illimité pour un usage personnel normal. Afin de protéger le service contre les abus automatisés, nous appliquons un plafond d’usage équitable de **250 messages par semaine** et **60 messages sur toute période de 5 heures**. Ces limites se situent bien au-delà de ce qu’exige une pratique réflexive ; la plupart des personnes ne s’en approcheront jamais. Si vous atteignez une limite, elle est temporaire et l’accès revient à la fin de la période.' },
          { t: 'p', x: 'Les réflexions quotidiennes sont distinctes de vos conversations et ne sont pas décomptées de ces limites.' },
          { t: 'p', x: 'Vous vous engagez à ne pas :' },
          {
            t: 'ul',
            x: [
              'utiliser le Service à des fins illicites, nuisibles ou frauduleuses ;',
              'procéder à de la rétro-ingénierie, décompiler, extraire des données par moissonnage, ou tenter d’extraire le code source, les prompts ou les modèles qui sous-tendent le Service, sauf dans la mesure où la loi interdit une telle restriction ;',
              'utiliser le Service pour harceler, maltraiter, menacer ou blesser autrui ou vous-même ;',
              'donner une fausse indication de votre identité ou de votre âge, ou utiliser le compte d’une autre personne sans son autorisation ;',
              'recourir à des robots, scripts ou autres moyens automatisés pour accéder au Service ou générer des séances ;',
              'perturber ou entraver le Service ou ses systèmes, ou tenter d’y accéder sans autorisation.',
            ],
          },
          { t: 'p', x: 'Nous pouvons suspendre ou résilier votre accès si vous manquez aux présentes Conditions ou si vous utilisez le Service d’une manière qui risque de vous nuire, de nuire à autrui ou de nous nuire.' },
        ],
      },
      {
        h: '10. Propriété intellectuelle',
        blocks: [
          { t: 'p', x: 'Le Service, y compris le logiciel Symponia, le cadre des archétypes animaux, les prompts, les textes, le design et la marque, appartient à Boroto Ltd ou à ses concédants de licence et est protégé par le droit de la propriété intellectuelle. Nous vous accordons une licence limitée, personnelle, non exclusive, non transférable et révocable pour utiliser le Service à des fins personnelles et non commerciales, conformément aux présentes Conditions. Vous ne pouvez ni copier, ni distribuer, ni créer des œuvres dérivées à partir du Service sans notre autorisation écrite.' },
          { t: 'p', x: 'Les réflexions et les conversations que vous créez vous appartiennent. Nous ne revendiquons aucune propriété sur vos contenus personnels. Vous nous accordez une licence limitée pour traiter ces contenus uniquement dans la mesure nécessaire à l’exploitation et à la fourniture du Service, comme décrit dans notre [politique de confidentialité](/privacy).' },
        ],
      },
      {
        h: '11. Services tiers',
        blocks: [
          { t: 'p', x: 'Le Service repose sur des tiers, notamment Apple (distribution, connexion et paiements), Anthropic (l’IA Claude qui génère les réponses) et Supabase (hébergement sécurisé). Votre utilisation de l’application est également soumise au [Licensed Application End User License Agreement](/eula) d’Apple. Nous ne sommes pas responsables des services tiers : leurs propres conditions et politiques de confidentialité s’appliquent à la partie de l’expérience qui relève d’eux.' },
        ],
      },
      {
        h: '12. Disponibilité et évolutions du Service',
        blocks: [
          { t: 'p', x: 'Nous nous efforçons de maintenir Symponia disponible, mais nous ne garantissons pas que le Service sera ininterrompu, sécurisé ou exempt d’erreurs. Le Service peut être indisponible pendant des opérations de maintenance ou pour des raisons indépendantes de notre volonté, et nous pouvons le modifier, le suspendre ou l’interrompre, en tout ou en partie. Lorsque nous interrompons une fonctionnalité payante, nous agissons de manière équitable et dans le respect de vos droits de consommateur.' },
        ],
      },
      {
        h: '13. Suspension et résiliation',
        blocks: [
          { t: 'p', x: 'Vous pouvez cesser d’utiliser le Service et supprimer votre compte à tout moment. Nous pouvons suspendre ou mettre fin à votre accès si vous manquez aux présentes Conditions, si la loi l’exige, ou s’il n’est plus raisonnablement possible de continuer à vous fournir le Service. Les clauses qui, par leur nature, doivent survivre à la résiliation (notamment la propriété intellectuelle, les exclusions de garantie, la limitation de responsabilité et le droit applicable) continueront de s’appliquer.' },
        ],
      },
      {
        h: '14. Exclusions de garantie',
        blocks: [
          { t: 'p', x: 'À l’exception des responsabilités que nous acceptons expressément dans les présentes Conditions et des droits que vous tenez du droit de la consommation et auxquels il ne peut être dérogé, le Service est fourni « en l’état » et « selon disponibilité », et nous n’accordons aucune garantie, expresse ou implicite, quant au Service, à son contenu ou à tout résultat généré par l’IA.' },
        ],
      },
      {
        h: '15. Notre responsabilité envers vous',
        blocks: [
          { t: 'p', x: 'Rien dans les présentes Conditions ne limite ni n’exclut notre responsabilité lorsqu’il serait illégal de le faire. Cela vise notamment la responsabilité en cas de décès ou de dommage corporel causé par notre négligence, en cas de fraude ou de déclaration frauduleuse, ainsi que toute autre responsabilité qui ne peut être limitée ni exclue en vertu du droit applicable, y compris vos droits légaux en tant que consommateur.' },
          { t: 'p', x: 'Sous réserve du paragraphe qui précède, et dans toute la mesure permise par la loi : nous ne sommes pas responsables des pertes ou dommages qui n’étaient pas prévisibles, des pertes résultant de la confiance que vous accordez à des contenus générés par l’IA, ni des pertes indirectes ou consécutives ; et notre responsabilité totale envers vous, pour l’ensemble des réclamations découlant du Service ou liées à celui-ci au cours d’une période de 12 mois, n’excédera pas le plus élevé des deux montants suivants : (a) le montant total que vous nous avez versé, ou que vous avez versé à Apple, pour le Service au cours de cette période, ou (b) £100. Nous fournissons le Service pour un usage strictement personnel et nous ne sommes pas responsables des pertes commerciales.' },
        ],
      },
      {
        h: '16. Indemnisation',
        blocks: [
          { t: 'p', x: 'Vous acceptez d’assumer et de nous rembourser les pertes et frais raisonnables que nous subissons du fait d’une utilisation abusive du Service par vous ou d’un manquement de votre part aux présentes Conditions, dans la mesure où ils vous sont imputables. Cela ne limite pas vos droits de consommateur.' },
        ],
      },
      {
        h: '17. Modifications des présentes Conditions',
        blocks: [
          { t: 'p', x: 'Nous pouvons mettre à jour les présentes Conditions de temps à autre, par exemple pour tenir compte d’évolutions du Service ou de la loi. Nous modifierons la date de « dernière mise à jour » ci-dessus et, lorsque les changements sont substantiels, nous prendrons des mesures raisonnables pour les porter à votre attention. Si vous continuez à utiliser le Service après l’entrée en vigueur des modifications, vous acceptez les Conditions mises à jour. Si vous ne les acceptez pas, il vous appartient de cesser d’utiliser le Service ; vous pouvez résilier votre abonnement et supprimer votre compte.' },
        ],
      },
      {
        h: '18. Droit applicable et juridiction compétente',
        blocks: [
          { t: 'p', x: 'Les présentes Conditions, ainsi que tout litige né de celles-ci ou en lien avec elles, sont régis par le droit de l’Angleterre et du pays de Galles. Les litiges relèvent de la compétence exclusive des tribunaux d’Angleterre et du pays de Galles ; toutefois, si vous résidez dans une autre nation du Royaume-Uni, vous pouvez engager une action dans votre nation de résidence, et les consommateurs conservent la protection des dispositions impératives du droit de leur pays de résidence.' },
        ],
      },
      {
        h: '19. Dispositions générales',
        blocks: [
          { t: 'p', x: 'Si une partie des présentes Conditions est jugée inapplicable, le reste demeure en vigueur. Le fait de ne pas faire valoir une clause ne vaut pas renonciation à celle-ci. Vous ne pouvez pas céder les droits que vous tenez des présentes Conditions sans notre accord ; nous pouvons céder les nôtres dès lors que vos droits n’en sont pas affectés défavorablement. Les présentes Conditions, avec notre [politique de confidentialité](/privacy), notre [politique de remboursement](/refunds) et l’[EULA](/eula), constituent l’intégralité de l’accord entre vous et nous concernant le Service.' },
        ],
      },
      {
        h: '20. Contact',
        blocks: [
          { t: 'p', x: 'Des questions sur les présentes Conditions ? Écrivez-nous à [hello@symponia.io](mailto:hello@symponia.io).' },
        ],
      },
    ],
  },

  privacy: {
    metaTitle: 'Politique de confidentialité',
    metaDesc: 'Comment Boroto Ltd collecte, utilise et protège vos données personnelles lorsque vous utilisez Symponia.',
    kicker: 'Informations légales',
    title: 'Politique de confidentialité',
    updated: 'Dernière mise à jour : juillet 2026',
    intro:
      'La présente politique de confidentialité explique comment Boroto Ltd (« Boroto », « nous » ou « notre ») collecte, utilise, partage et protège vos données personnelles lorsque vous utilisez l’application et le site Symponia. Symponia est un espace de réflexion intime : nous collectons le strict minimum et nous ne vendons jamais vos données.',
    sections: [
      {
        h: '1. Qui nous sommes (responsable du traitement)',
        blocks: [
          { t: 'p', x: 'Boroto Ltd est le responsable du traitement de vos données personnelles. Nous sommes immatriculés en Angleterre et au pays de Galles. Vous pouvez nous joindre au sujet de tout point de la présente politique à l’adresse [hello@symponia.io](mailto:hello@symponia.io). Notre numéro d’immatriculation et l’adresse de notre siège social figurent dans nos dépôts publics au registre des sociétés et sont disponibles sur demande.' },
        ],
      },
      {
        h: '2. Les données personnelles que nous collectons',
        blocks: [
          { t: 'p', x: '**Les informations que vous nous communiquez lors de la configuration initiale et de l’utilisation :**' },
          {
            t: 'ul',
            x: [
              'votre prénom et, si vous choisissez de le partager, votre genre ;',
              'vos sept archétypes animaux et vos réponses aux questions d’accordage ;',
              'vos **réponses d’accueil** : les questions auxquelles vous répondez avant de commencer. Elles sont conservées et servent à façonner la manière dont Symponia vous parle. Elles ne vous sont jamais citées ;',
              'vos **relevés d’humeur** : une note de 1 à 5 que vous pouvez enregistrer avant et après une réflexion, utilisée uniquement pour vous montrer votre propre semaine ;',
              'vos **réflexions enregistrées**, mais uniquement si vous activez la mémoire. Elle est désactivée par défaut et, tant qu’elle l’est, rien de ce que vous écrivez n’est stocké sur nos serveurs ;',
              'votre préférence de fréquence de résonance ;',
              'les messages et les réflexions que vous rédigez dans chaque mode ;',
              'vos préférences de notification et, le cas échéant, votre inscription à des courriels occasionnels.',
            ],
          },
          { t: 'p', x: '**Informations de compte et informations techniques :**' },
          {
            t: 'ul',
            x: [
              'les données de compte nécessaires pour vous connecter et sécuriser vos données. Si vous utilisez « Se connecter avec Apple » ou « Se connecter avec Google », nous ne recevons que l’identifiant et l’adresse e-mail fournis par ces services, et nous ne voyons ni ne stockons jamais de mot de passe ;',
              'votre solde de séances (jetons) et le statut de votre abonnement ;',
              'des informations techniques et de diagnostic limitées (par exemple la version de l’application et des informations de base sur l’appareil), utilisées pour maintenir le Service en état de fonctionnement et le sécuriser.',
            ],
          },
          { t: 'p', x: '**Informations d’achat :** lorsque vous vous abonnez, Apple traite votre paiement. Nous recevons d’Apple la confirmation du statut de votre abonnement, mais nous ne recevons ni ne conservons jamais les données de votre carte bancaire.' },
          { t: 'p', x: 'Certaines informations sont également stockées localement sur votre appareil (par exemple vos archétypes, vos préférences et l’historique de vos conversations dans chaque mode). Les données locales sont supprimées lorsque vous désinstallez l’application.' },
          { t: 'p', x: 'Merci de ne pas partager d’informations que vous ne souhaitez pas voir consignées, et de prêter une attention particulière aux données sensibles (relevant de catégories particulières, comme des éléments relatifs à votre santé, à vos convictions ou à votre sexualité). Lorsque de telles informations apparaissent dans ce que vous écrivez, nous ne les traitons que pour vous fournir le Service, sur la base de votre consentement explicite, que vous pouvez retirer en supprimant le contenu concerné ou votre compte.' },
        ],
      },
      {
        h: '3. Comment et pourquoi nous utilisons vos données, et nos bases légales',
        blocks: [
          { t: 'p', x: 'En vertu du droit britannique et européen de la protection des données, nous devons disposer d’une base légale pour utiliser vos données personnelles. Nous nous appuyons sur les bases suivantes :' },
          {
            t: 'ul',
            x: [
              '**Exécution de notre contrat avec vous** : créer et faire fonctionner votre compte, générer des réponses Symponia personnalisées, vous délivrer votre réflexion quotidienne, maintenir une séance pendant une conversation et confirmer votre abonnement auprès d’Apple.',
              '**Votre consentement** : vous envoyer des notifications push ou des courriels marketing occasionnels (uniquement si vous y consentez), et traiter les données sensibles que peuvent contenir vos écrits. Vous pouvez retirer votre consentement à tout moment.',
              '**Nos intérêts légitimes** : maintenir le Service sécurisé et fonctionnel, prévenir les usages abusifs et la fraude, et améliorer la fiabilité, d’une manière qui ne prévaut pas sur vos droits.',
              '**Obligation légale** : respecter les lois qui nous sont applicables, par exemple en matière fiscale ou pour répondre à des demandes légitimes des autorités.',
            ],
          },
          { t: 'p', x: 'Nous n’utilisons pas vos données à des fins publicitaires ou de ciblage publicitaire, et nous ne vendons pas vos données personnelles.' },
        ],
      },
      {
        h: '4. Comment Symponia utilise l’IA',
        blocks: [
          { t: 'p', x: 'Pour générer des réponses réflexives, le texte que vous envoyez est transmis à l’API Claude d’Anthropic, avec votre prénom, votre genre (si vous l’avez indiqué), vos archétypes et votre fréquence de résonance. Ce traitement s’effectue selon les conditions de Zero Data Retention (ZDR) : Anthropic ne conserve pas le contenu de vos conversations après avoir généré une réponse et ne l’utilise pas pour entraîner ou améliorer ses modèles.' },
          { t: 'p', x: 'Symponia génère du contenu de manière automatique, mais ne prend pas de décision exclusivement automatisée produisant à votre égard des effets juridiques ou vous affectant de manière significative de façon similaire. Symponia est un outil de réflexion, non un décideur.' },
        ],
      },
      {
        h: '5. Avec qui nous partageons vos données',
        blocks: [
          { t: 'p', x: 'Nous ne partageons vos données qu’avec les prestataires qui nous aident à faire fonctionner Symponia, chacun agissant dans le cadre d’accords qui les obligent à les protéger :' },
          {
            t: 'ul',
            x: [
              '**Anthropic** : fournit l’IA Claude qui génère les réponses, selon les conditions de Zero Data Retention. Voir [anthropic.com/legal/privacy](https://www.anthropic.com/legal/privacy).',
              '**Supabase** : base de données sécurisée, authentification et hébergement du back-end pour votre compte et vos conversations.',
              '**Apple** : distribution sur l’App Store, connexion, envoi des notifications push et traitement des achats intégrés. Les données de paiement sont gérées entièrement par Apple.',
            ],
          },
          { t: 'p', x: 'Nous pouvons également divulguer des données si la loi l’exige, pour protéger la sécurité, les droits ou les biens de nos utilisateurs ou de tiers, ou dans le cadre d’une cession d’activité, auquel cas nous vous en informerons et continuerons de protéger vos données.' },
        ],
      },
      {
        h: '6. Transferts internationaux',
        blocks: [
          { t: 'p', x: 'Certains de nos prestataires (dont Anthropic et Apple) traitent des données en dehors du Royaume-Uni et de l’EEE, notamment aux États-Unis. Lorsque des données sont transférées à l’international, nous nous appuyons sur des garanties appropriées reconnues par le droit britannique et européen, telles que l’International Data Transfer Agreement du Royaume-Uni ou son addendum et les clauses contractuelles types de la Commission européenne, assorties de protections complémentaires lorsque cela est nécessaire. Vous pouvez nous demander des informations supplémentaires sur ces garanties.' },
        ],
      },
      {
        h: '7. Combien de temps nous conservons vos données',
        blocks: [
          { t: 'p', x: 'Nous conservons votre compte et l’historique de vos conversations aussi longtemps que votre compte est actif. Lorsque vous supprimez votre compte (onglet Profil, section Compte, « supprimer le compte ») ou que vous nous demandez d’effacer vos données, nous les supprimons de nos systèmes actifs, et elles disparaissent des sauvegardes de routine dans un court délai. Les contenus transmis à Anthropic ne sont pas conservés par Anthropic, en application des conditions ZDR. Les données locales présentes sur votre appareil sont supprimées lorsque vous désinstallez l’application. Nous pouvons conserver certaines informations limitées plus longtemps uniquement lorsque la loi l’exige (par exemple des enregistrements de transaction élémentaires).' },
          { t: 'p', x: 'Si vous nous demandez de supprimer les données associées à votre compte, nous donnerons suite à votre demande dans un délai de 30 jours.' },
        ],
      },
      {
        h: '8. Comment nous protégeons vos données',
        blocks: [
          { t: 'p', x: 'Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données, notamment le chiffrement en transit, des contrôles d’accès et le recours à des fournisseurs d’infrastructure reconnus. Aucune méthode de transmission ou de stockage n’est totalement sûre, mais nous nous employons à protéger vos informations et à réagir rapidement en cas d’incident, y compris en vous informant, ainsi que l’autorité compétente, lorsque la loi l’exige.' },
        ],
      },
      {
        h: '9. Vos droits',
        id: 'gdpr',
        blocks: [
          { t: 'p', x: 'Si vous vous trouvez au Royaume-Uni ou dans l’EEE, vous disposez des droits suivants sur vos données personnelles au titre du RGPD britannique (UK GDPR) et du RGPD de l’Union européenne :' },
          {
            t: 'ul',
            x: [
              '**Accès** : obtenir une copie des données personnelles que nous détenons à votre sujet ;',
              '**Rectification** : faire corriger des données inexactes ;',
              '**Effacement** : faire supprimer vos données (« droit à l’oubli ») ;',
              '**Limitation** : nous demander de restreindre l’utilisation de vos données ;',
              '**Portabilité** : recevoir vos données dans un format portable et lisible par machine ;',
              '**Opposition** : vous opposer à un traitement fondé sur nos intérêts légitimes ;',
              '**Retrait du consentement** : à tout moment, lorsque nous nous appuyons sur votre consentement, sans que cela remette en cause les traitements antérieurs.',
            ],
          },
          { t: 'p', x: 'Pour exercer l’un de ces droits, écrivez à [hello@symponia.io](mailto:hello@symponia.io). L’exercice de vos droits est gratuit et n’entraînera aucun traitement défavorable de votre part. Si la façon dont nous traitons vos données ne vous satisfait pas, vous pouvez introduire une réclamation auprès de l’Information Commissioner’s Office (ICO) du Royaume-Uni ([ico.org.uk](https://ico.org.uk)) ou de votre autorité de contrôle locale dans l’EEE.' },
        ],
      },
      {
        h: '10. Communications marketing',
        blocks: [
          { t: 'p', x: 'Nous n’envoyons de courriels marketing que si vous y avez consenti. Chaque courriel marketing comporte un lien de désabonnement : vous pouvez vous désinscrire à tout moment en l’utilisant ou en écrivant à [hello@symponia.io](mailto:hello@symponia.io). Le refus des communications marketing n’affecte pas les messages de service nécessaires au fonctionnement de votre compte.' },
        ],
      },
      {
        h: '11. Cookies et site web',
        blocks: [
          { t: 'p', x: 'Notre site n’utilise que les cookies et le stockage local strictement nécessaires à son fonctionnement et à la mémorisation de préférences de base. Nous n’utilisons pas de cookies publicitaires ni de traceurs intersites. Si nous ajoutons des outils de mesure d’audience à l’avenir, nous mettrons à jour la présente politique et, lorsque cela est requis, nous vous demanderons d’abord votre consentement.' },
        ],
      },
      {
        h: '12. Enfants',
        blocks: [
          { t: 'p', x: 'Symponia s’adresse à un public adulte. Le Service n’est pas destiné aux personnes de moins de 18 ans et nous ne collectons pas sciemment de données personnelles auprès d’enfants. Si vous pensez qu’un enfant nous a communiqué des données personnelles, contactez-nous à [hello@symponia.io](mailto:hello@symponia.io) et nous les supprimerons.' },
        ],
      },
      {
        h: '13. Modifications de la présente politique',
        blocks: [
          { t: 'p', x: 'Nous pouvons mettre à jour la présente politique de confidentialité de temps à autre. Nous modifierons la date de « dernière mise à jour » ci-dessus et, lorsque les changements sont substantiels, nous prendrons des mesures raisonnables pour les porter à votre attention. Continuer à utiliser Symponia après l’entrée en vigueur des modifications vaut acceptation de la politique mise à jour.' },
        ],
      },
      {
        h: '14. Contact',
        blocks: [
          { t: 'p', x: 'Pour toute question ou demande relative à la confidentialité, contactez notre équipe chargée de la protection des données à l’adresse [hello@symponia.io](mailto:hello@symponia.io).' },
        ],
      },
    ],
  },

  refunds: {
    metaTitle: 'Politique de remboursement',
    metaDesc: 'Remboursements, résiliation et droits des consommateurs pour les abonnements Symponia achetés via l’App Store.',
    kicker: 'Informations légales',
    title: 'Politique de remboursement',
    updated: 'Dernière mise à jour : juillet 2026',
    intro:
      'Symponia est exploitée par Boroto Ltd. Les abonnements sont vendus et traités par Apple via l’achat intégré (In-App Purchase). Comme Apple gère le paiement, les remboursements sont demandés à Apple et décidés par Apple, selon ses propres règles. Cette page explique comment cela fonctionne et expose vos droits en tant que consommateur. Rien ici ne limite vos droits légaux.',
    sections: [
      {
        h: '1. Essayer Symponia gratuitement',
        blocks: [
          { t: 'p', x: 'Les nouveaux utilisateurs reçoivent un nombre limité de séances gratuites, afin de découvrir Symponia avant de décider de s’abonner. Nous vous encourageons à les utiliser avant tout achat.' },
        ],
      },
      {
        h: '2. Comment demander un remboursement',
        blocks: [
          { t: 'p', x: 'Tous les achats sont effectués via votre Apple ID : c’est donc Apple, et non Boroto Ltd, qui traite les remboursements. Pour en demander un :' },
          {
            t: 'ul',
            x: [
              'rendez-vous sur [reportaproblem.apple.com](https://reportaproblem.apple.com) et connectez-vous avec votre Apple ID ; ou',
              'sur votre appareil, ouvrez Réglages, touchez votre nom, puis utilisez l’historique des achats pour signaler un problème.',
            ],
          },
          { t: 'p', x: 'Apple examine chaque demande au regard de ses propres critères et décide d’accorder ou non un remboursement. Nous vous aidons volontiers dans la mesure de nos moyens, mais nous ne pouvons ni effectuer directement un remboursement sur l’App Store, ni garantir la décision d’Apple.' },
        ],
      },
      {
        h: '3. Résilier votre abonnement',
        blocks: [
          { t: 'p', x: 'Vous pouvez résilier à tout moment dans les réglages de votre Apple ID (Réglages, votre nom, Abonnements). Si vous résiliez, votre abonnement ne sera pas reconduit et vous conservez l’accès jusqu’à la fin de la période déjà payée. La résiliation n’entraîne pas à elle seule le remboursement de la période en cours, et les séances non utilisées ne sont pas reportées. La suppression de l’application ne résilie pas votre abonnement.' },
        ],
      },
      {
        h: '4. Vos droits en tant que consommateur au Royaume-Uni ou dans l’UE',
        blocks: [
          { t: 'p', x: 'Si vous êtes un consommateur au Royaume-Uni ou dans l’Union européenne, vous disposez normalement d’un droit de rétractation de 14 jours pour l’achat d’un contenu numérique, ouvrant droit à remboursement. Ce droit peut toutefois s’éteindre dès lors que la fourniture du contenu numérique a commencé, lorsque vous y avez expressément consenti et reconnu que vous perdiez ainsi votre droit de rétractation. Lorsque vous démarrez un abonnement et commencez à utiliser des séances ou des réflexions quotidiennes, le contenu numérique est fourni immédiatement, ce qui peut mettre fin au droit de rétractation de 14 jours pour le contenu déjà fourni.' },
          { t: 'p', x: 'Rien de tout cela ne supprime vos droits légaux. Si le Service est défectueux, non conforme à sa description, ou n’est pas fourni avec un soin et une compétence raisonnables, vous pouvez avoir droit à un recours au titre du Consumer Rights Act 2015 (ou de la législation équivalente de votre pays de résidence), indépendamment de la procédure de remboursement standard d’Apple. Si vous pensez être dans ce cas, contactez-nous et nous vous aiderons.' },
        ],
      },
      {
        h: '5. Changements de prix',
        blocks: [
          { t: 'p', x: 'Si nous modifions le prix de l’abonnement, le nouveau prix ne s’appliquera pas à une période de facturation que vous avez déjà payée. Lorsque cela est requis, Apple vous demandera de confirmer une augmentation de prix avant son entrée en vigueur ; si vous ne l’acceptez pas, votre abonnement ne sera pas reconduit au nouveau prix.' },
        ],
      },
      {
        h: '6. Nous contacter',
        blocks: [
          { t: 'p', x: 'Si vous rencontrez un problème avec un paiement, un abonnement ou le Service, écrivez-nous à [hello@symponia.io](mailto:hello@symponia.io) et nous ferons de notre mieux pour y remédier.' },
        ],
      },
    ],
  },

  eula: {
    metaTitle: 'Contrat de licence utilisateur final',
    metaDesc: 'EULA standard d’Apple pour l’application iOS Symponia. Il régit votre licence d’utilisation de l’application téléchargée sur l’App Store.',
    kicker: 'Informations légales',
    titleL1: 'Licensed Application',
    titleL2: 'End User License Agreement',
    sub: 'Apple Standard EULA',
    note: 'Le contrat ci-dessous est le contrat de licence standard d’Apple pour les applications sous licence : il est reproduit dans sa version anglaise d’origine, car il s’agit du contrat d’Apple et non du nôtre. Seul ce texte anglais fait foi.',
  },

  credits: {
    metaTitle: 'Tarifs',
    metaDesc: 'Tarifs Symponia : 7 jours gratuits, puis £19.99 par mois pour une réflexion illimitée. Rien à compter, rien à rationner.',
    kicker: 'Tarifs',
    h1: 'Un prix. Aucun décompte.',
    lead: 'Sept jours gratuits. Puis une réflexion illimitée, aussi longtemps qu’elle vous est utile.',
    free: {
      k: 'Essai gratuit',
      price: '7 jours',
      sub: 'Tout, gratuitement, pendant une semaine',
      body: 'Nommez vos sept archétypes animaux, rencontrez le septième et réfléchissez autant que vous le souhaitez. Résiliez avant la fin de l’essai et vous ne serez pas débité.',
      cta: 'Télécharger dans l’App Store',
    },
    monthly: {
      badge: 'Après l’essai',
      k: 'Symponia Mensuel',
      price: '£19.99',
      sub: 'par mois · réflexion illimitée',
      bullets: [
        'Réflexion illimitée dans Archétypes, Ma journée et Conversation',
        'Aucune séance à compter, aucun solde à rationner',
        'Votre semaine d’humeur : comment vous êtes arrivé, comment vous êtes reparti, et l’écart',
        'Neuf langues, écrites comme si elles avaient été composées dans chacune',
        'Résiliable à tout moment dans les réglages de l’identifiant Apple',
      ],
      cta: 'Disponible dans l’app',
    },
    how: {
      h2: 'Comment cela fonctionne',
      items: [
        { t: 'Sept jours, gratuits', d: 'L’essai, c’est le produit entier, pas un échantillon. Si vous résiliez au moins 24 heures avant la fin, vous n’êtes jamais débité.' },
        { t: 'Puis reconduction mensuelle', d: 'Le paiement est prélevé sur votre identifiant Apple à la fin de l’essai, puis chaque mois, sauf désactivation de la reconduction au moins 24 heures avant la fin de la période.' },
        { t: 'Illimité, avec un plafond publié', d: 'Illimité pour un usage personnel normal. Contre les abus automatisés, nous appliquons un plafond de 250 messages par semaine et 60 sur toute période de 5 heures. La plupart ne s’en approcheront jamais, et nous préférons publier le chiffre que le cacher.' },
        { t: 'Apple fixe le prix chez vous', d: 'Le prix ci-dessus est le prix britannique. Apple fixe un prix par pays et peut le modifier. L’App Store affiche celui qui s’applique à vous avant l’achat.' },
        { t: 'Résilier en deux gestes', d: 'Gérez ou résiliez à tout moment dans les réglages de votre identifiant Apple. Supprimer l’application ne résilie pas un abonnement.' },
      ],
    },
    contact: 'Des questions sur l’abonnement ou la facturation ? Écrivez-nous à [hello@symponia.io](mailto:hello@symponia.io). Voir nos [Conditions d’utilisation](/terms) pour le détail.',
  },
};
