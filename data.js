// Contenu tiré du dossier consolidé des 4 livrables (12 octobre 2026).

const TABLES = {
  mediaCompare: {
    head: ['Critère', 'Résines spécifiques PFAS', 'Charbon actif granulaire'],
    rows: [
      ['Élimination de nombreux PFAS', 'Bonne à très bonne, selon le média', 'Bonne à très bonne, selon le média'],
      ['PFAS à chaînes courtes', 'Potentiellement avantageux pour certains PFAS', 'Percée parfois plus rapide'],
      ['Maturité industrielle', 'Élevée', 'Élevée'],
      ['Emprise des colonnes', 'Souvent compacte', 'Généralement plus importante'],
      ['Coût d’exploitation', 'Dépend fortement de la durée de vie des résines', 'Dépend fortement du renouvellement du charbon'],
      ['Déchets', 'Résines usées contaminées', 'Charbon usé contaminé'],
      ['Adaptation à Semoy', 'À valider par essais', 'À valider par essais'],
    ],
  },
  sizingData: {
    head: ['Paramètre', 'Donnée nécessaire'],
    rows: [
      ['Débit nominal du captage', 'm³/h'],
      ['Volume de production annuel recherché', 'm³/an'],
      ['Concentrations PFAS actuelles', 'ng/L par molécule'],
      ['Fer et manganèse', 'mg/L'],
      ['Matière organique et autres constituants', 'Analyses de laboratoire'],
      ['Temps de contact et durée de vie du média', 'Résultats des essais pilotes'],
      ['Fréquence de remplacement', 'À calculer'],
      ['Coût de gestion des déchets', 'Devis de prestataires'],
    ],
  },
  successIndicators: {
    head: ['Indicateur', 'Objectif'],
    rows: [
      ['Somme des 20 PFAS', 'Respect de la limite de 100 ng/L'],
      ['Objectif opérationnel proposé', 'Viser 50 ng/L en sortie de traitement'],
      ['PFAS individuels', 'Performances vérifiées pour toutes les molécules suivies'],
      ['Fer et manganèse', 'Respect des exigences applicables et protection du média'],
      ['Continuité de service', 'Aucune interruption d’alimentation des habitants'],
      ['Suivi des médias', 'Remplacement avant percée non maîtrisée'],
      ['Déchets', 'Traçabilité complète'],
      ['Coût complet', 'Comparaison avec le maintien de l’interconnexion'],
    ],
  },
  benchTech: {
    head: ['Solution', 'Efficacité et intérêt', 'Limites et déchets', 'Rôle pour Semoy'],
    rows: [
      ['Interconnexion', 'Évite d’utiliser le captage contaminé ; déjà opérationnelle', 'Dépendance à d’autres ressources ; pompage et capacités du réseau', '<span class="tag ref">Scénario de référence</span>'],
      ['CAG', 'Mature ; bon sur de nombreux PFAS longs ; optimisation possible', 'Percée plus précoce des PFAS courts ; charbon usé à traiter', '<span class="tag go">Pilote prioritaire</span>'],
      ['Résines PFAS', 'Rétention de nombreux PFAS dont certains courts ; installation compacte', 'Coût du média, compétition ionique, résines usées', '<span class="tag go">Pilote prioritaire</span>'],
      ['CAG + résines', 'Complémentarité possible en tête et en finition', 'Double média, maintenance et CAPEX accrus', '<span class="tag">Seulement si gain démontré</span>'],
      ['Osmose inverse / membranes', 'Très bonne séparation de nombreux PFAS', 'Énergie, prétraitement, pertes d’eau, concentrats', '<span class="tag">Recours ciblé</span>'],
      ['Fractionnement par mousse', 'Concentre certains PFAS de flux adaptés', 'Moins robuste sur certains PFAS courts ; concentrats à gérer', '<span class="tag">Pas l’option principale</span>'],
      ['ELIXIR / destruction', 'Destruction annoncée dans certains effluents compatibles', 'Débit limité, forte intensité énergétique, coût non publié', '<span class="tag">Étude aval seulement</span>'],
    ],
  },
  benchMembranes: {
    head: ['Procédé', 'Avantage', 'Vigilance', 'Position dans la décision'],
    rows: [
      ['Osmose inverse', 'Séparation élevée de nombreux PFAS', 'Énergie, prétraitement, concentrats, baisse du volume utile', 'Alternative si les adsorbants sont insuffisants'],
      ['Nanofiltration', 'Séparation possible de certains PFAS', 'Performance selon la membrane et le PFAS ; essais indispensables', 'Variante à examiner sans présumer la conformité'],
      ['ELIXIR sur effluent', 'Destruction annoncée sur flux compatibles', '4–5 m³/j, environ 1 200 m³/an ; 250 kWh/m³ ; coût élevé', 'Aval de traitement, pas eau potable brute'],
      ['Membranes + ELIXIR', 'Réduit la charge PFAS dans l’eau et permet de détruire un effluent', 'Compatibilité, débit annuel, coûts et émissions à établir', 'Scénario conditionnel uniquement'],
    ],
  },
  saintLouis: {
    head: ['Débit', 'Volume annoncé', 'Coût sur 2 ans', 'Ratio calculé'],
    rows: [
      ['25 m³/h', '500 m³/j', '700 000 € HT', '<b>1,92 €/m³</b>'],
      ['65 m³/h', '1 300 m³/j', '1 300 000 € HT', '<b>1,37 €/m³</b>'],
      ['450 m³/h', '7 200 m³/j', '4 500 000 € HT', '<b>0,86 €/m³</b>'],
    ],
  },
  interVsRehab: {
    head: ['Critère de décision', 'Maintien de l’interconnexion', 'Réhabilitation du captage'],
    rows: [
      ['Conformité sanitaire', 'Dépend de la qualité contrôlée des captages de substitution', 'Dépend du rendement réel de la filière PFAS'],
      ['Investissement', 'Renforcement éventuel du réseau à chiffrer', 'Prétraitement, ouvrages, filtres et raccordement'],
      ['Fonctionnement', 'Pompage, réseau, disponibilité de la ressource', 'Médias, analyses, énergie, déchets'],
      ['Résilience', 'Dépendance aux autres captages', 'Diversification potentielle des ressources'],
      ['Déploiement', 'Solution déjà en place', 'Études, essais, autorisations, travaux'],
      ['Donnée pour trancher', 'Coût incrémental, capacité et risques du réseau', 'CAPEX et OPEX du captage, rendement et volume exploitable'],
    ],
  },
  partners: {
    head: ['Acteur', 'Ce que dit le dossier', 'Contribution proposée'],
    rows: [
      ['Orléans Métropole', 'Pilote la politique de l’eau, les infrastructures et les investissements.', 'Fournir les données de captage et d’interconnexion ; arbitrer le choix.'],
      ['SUEZ', 'Expose CAG, résines, membranes, mousse et le retour industriel de Ternay.', 'Contribuer à un pilote comparatif et au devis ; aucune attribution de marché présumée.'],
      ['MS4ALL', 'MS4Nature : simulation moléculaire, anticipation des polluants, optimisation des traitements.', 'Évaluer l’intérêt d’une modélisation pour présélectionner médias et molécules ; ce n’est pas un capteur en continu.'],
      ['Atos', 'Cartographie, données, jumeaux numériques, suivi par indicateurs et alertes, coordination.', 'Construire un tableau de bord qualité, coût et risques, une plateforme de données et une gouvernance.'],
      ['ArianeGroup / Aquarden', 'ELIXIR : oxydation hydrothermale supercritique ; 4–5 m³/j ; 1 200 m³/an ; 250 kWh/m³ ; rendement annoncé supérieur à 99,99 %.', 'Étudier une destruction aval pour effluents compatibles, sans présumer d’une compatibilité avec CAG ou résines usés.'],
      ['Banque des Territoires', 'Ingénierie territoriale, prêts de long terme pour les réseaux d’eau, investissement selon montage.', 'Tester le montage de financement et le coût du capital ; aucune subvention acquise.'],
    ],
  },
  roadmap: {
    head: ['Phase', 'Travail attendu', 'Critère de sortie'],
    rows: [
      ['0 · Collecte', 'Obtenir débit, volumes, analyses récentes PFAS, fer et manganèse, installations et coût de l’interconnexion.', 'Dossier de base exploitable.'],
      ['1 · Essais', 'Comparer CAG et résines sur la même eau ; mesurer percée par molécule, pertes de charge et durée de vie.', 'Performance démontrée pour la qualité cible.'],
      ['2 · Études économiques', 'Devis CAPEX et OPEX, déchets, renouvellements, raccordements ; calcul actualisé sur 20 ans.', '€/m³ homogène et comparaison avec la référence.'],
      ['3 · Gouvernance', 'Évaluer résilience, financement, contraintes sanitaires et planning.', 'Décision argumentée de maintien ou de réhabilitation.'],
      ['4 · Exploitation', 'Suivi de conformité, indicateurs, alarmes et traçabilité des résidus.', 'Gestion sûre dans la durée.'],
    ],
  },
  capexSteps: {
    head: ['CAPEX hypothétique', 'Annuité 20 ans / 3 %', '€/m³ à 100 000 m³/an', '€/m³ à 500 000 m³/an'],
    rows: [
      ['250 000 €', '16 804 €/an', '0,168', '0,034'],
      ['500 000 €', '33 608 €/an', '0,336', '0,067'],
      ['1 000 000 €', '67 216 €/an', '0,672', '0,134'],
      ['2 000 000 €', '134 431 €/an', '1,344', '0,269'],
    ],
  },
  prices: {
    head: ['Référence', 'Montant documenté', 'Périmètre et limites'],
    rows: [
      ['Saint-Louis Agglomération', '6,5 M€ HT', 'Programme de plusieurs unités mobiles PFAS ; total multisite, non imputable à Semoy.'],
      ['Saint-Louis Agglomération', 'Jusqu’à 13,5 M€ HT', 'Construction de plusieurs stations permanentes ; estimation multisite.'],
      ['Saint-Louis Agglomération', '600 000 € HT/an', 'Exploitation prévue du programme de stations ; pas l’OPEX d’un seul site.'],
      ['Belkouteb et al., 2020', '0,020–0,025 €/m³', 'Exploitation de filtres CAG, objectif 85 ng/L sur 11 PFAS, sans CAPEX complet.'],
      ['Belkouteb et al., 2020', '0,080–0,100 €/m³', 'Même étude, objectif 10 ng/L sur 11 PFAS, sans CAPEX complet.'],
      ['Riegel et al., 2023', '2 €/L de CAG ; 8 €/L de résine', 'Hypothèses de prix de médias antérieures à 2020, pas des tarifs actuels.'],
      ['Riegel et al., 2023', '0,11 €/m³ CAG ; 0,20 €/m³ résines', 'Coût du matériau seul pour le PFHxA ; pas comparable à un prix d’eau traitée.'],
      ['Enquête FNCCR, rapport IGAS', 'CAG 0,07–0,33 €/m³ ; membranes 0,18–0,39 €/m³', 'Coûts déclarés par des collectivités surtout grandes ; contexte pesticides, pas devis PFAS.'],
      ['Alameda County, 2025', '17,0 M$ de construction ; environ 26 M$ de projet', 'Filière résines PFAS d’environ 22 700 m³/j aux États-Unis ; très grande échelle.'],
    ],
  },
  missingData: {
    head: ['Donnée requise', 'Situation au 12/10/2026', 'Source à demander'],
    rows: [
      ['Volume que Semoy utiliserait en situation normale', '<span class="tag warn">Non établi</span>', 'Bilan hydraulique de la régie ; volumes produits 2022–2023'],
      ['Débit nominal et heures de fonctionnement', '<span class="tag warn">Non établi</span>', 'Données d’exploitation des Hautes Bordes'],
      ['Coût marginal réel de l’interconnexion', '<span class="tag warn">Non communiqué</span>', 'Pompage, énergie, maintenance, coûts de réseau'],
      ['Réemploi de la déferrisation-démanganisation', '<span class="tag go">Existence et travaux 2022 établis</span>', 'Audit d’état et compatibilité hydraulique'],
      ['CAG et résines : durée de saturation et OPEX', '<span class="tag warn">À mesurer sur l’eau du site</span>', 'Pilotes et devis opposables'],
      ['CAPEX, renouvellements et déchets', '<span class="tag warn">Non chiffrés pour Semoy</span>', 'Consultation des entreprises et des filières aval'],
    ],
  },
  elixirOptions: {
    head: ['Option', 'Base de calcul', 'Dépenses à ajouter'],
    rows: [
      ['Prestation en usine', '1 000 € HT × volume d’effluent', 'Transport, stockage, analyses'],
      ['Location sur site', '480 000 € HT/an par unité', 'Électricité, salarié, maintenance, génie civil'],
      ['Achat sur site', '3 M€ HT par unité', 'Électricité, salarié, maintenance, investissements connexes'],
    ],
  },
  routes: {
    head: ['Option', 'Référence financière utilisable', 'Information manquante pour Semoy'],
    rows: [
      ['Interconnexion', 'Référence opérationnelle actuelle', 'Coût incrémental réel par m³'],
      ['CAG mobile', '700 k€ HT sur 2 ans pour 500 m³/j (source primaire à recouper)', 'Adéquation à l’eau et à l’exploitation locales'],
      ['CAG permanent', 'Études de coûts et projets industriels documentés', 'Devis de l’installation et durée du média'],
      ['Résines', 'Études de coûts de médias documentées', 'Essais et devis CAPEX et OPEX'],
      ['Membranes', 'Fourchettes d’enquêtes de collectivités (pesticides), pas un prix Semoy', 'Prix du système, taux de rejet, coût de gestion du concentrat'],
      ['Membranes + ELIXIR', 'Tarifs ELIXIR, à appliquer au seul flux admissible', 'Bilan d’eau, capacité, compatibilité, coût des membranes et des rejets'],
    ],
  },
  funders: {
    head: ['Acteur', 'Rôle possible', 'Action concrète'],
    rows: [
      ['Agence de l’eau Loire-Bretagne', 'Programme 2025–2030 (2,43 Md€ à l’échelle du bassin) : dispositifs eau potable, protection des captages et études ; enveloppes contraintes depuis 2026.', 'Prendre un rendez-vous de pré-éligibilité ; détailler eau brute, objectifs, scénarios et dépenses.'],
      ['Banque des Territoires · Aqua Prêt', 'Dette remboursable pour la production, le traitement et les réseaux ; durées de 15 à 60 ans, taux selon formule, sous réserve d’instruction.', 'Demander une simulation du besoin d’emprunt après subventions, sans assimiler prêt et aide gratuite.'],
      ['Région Centre-Val de Loire', 'CAP PME-PMI : soutien possible à la R&D d’une entreprise régionale (10 000 à 400 000 € selon les cas), pas une subvention à la Métropole.', 'Identifier une entreprise chef de file et les dépenses de développement éligibles.'],
      ['France 2030 régionalisé', 'Volets innovation, filières et projets collaboratifs de R&D ; guichets à vérifier selon ouverture et consortium.', 'Définir une innovation démontrable et un partenariat industriel et académique.'],
      ['État, Fonds vert, autres dotations', 'Guichets territoriaux à examiner sur les cahiers des charges 2026 ; aucune aide spécifique PFAS présumée.', 'Vérifier projet par projet auprès de la préfecture et sur Aides-territoires.'],
      ['Industriels et émetteurs identifiés', 'Actions volontaires, accords, responsabilité environnementale ou contentieux selon preuves ; aucune recette garantie.', 'Étude de traçabilité des sources et conseil juridique préalable.'],
    ],
  },
  financePlan: {
    head: ['Source', 'Scénario sans aide', 'Scénario avec subvention hypothétique'],
    rows: [
      ['Subventions publiques confirmées', '0 €', '300 000 € (hypothèse non acquise)'],
      ['Autofinancement de la collectivité', '200 000 €', '200 000 €'],
      ['Emprunt Aqua Prêt ou autre', '800 000 €', '500 000 €'],
      ['Recettes de responsabilité des pollueurs', '0 €', '0 €'],
      ['<b>Total financé</b>', '<b>1 000 000 €</b>', '<b>1 000 000 €</b>'],
    ],
  },
  deployment: {
    head: ['Étape', 'Livrable financier attendu', 'Condition de passage'],
    rows: [
      ['1 · Diagnostic (0–6 mois, indicatif)', 'Volumes, coûts réels de l’interconnexion, qualité de l’eau brute, capacité du prétraitement', 'Données locales certifiées'],
      ['2 · Pilotes CAG et résines', 'Courbes de percée, prix des médias, élimination des déchets', 'Objectifs de qualité démontrés'],
      ['3 · Consultation du marché', 'CAPEX HT, OPEX garantis, maintenance, renouvellements, gestion des résidus', 'Offres comparables sur 20 ans'],
      ['4 · Décision politique', 'Valeur actualisée, €/m³, impact tarifaire, risques, scénario sans investissement', 'Vote et financement confirmé'],
      ['5 · Mise en œuvre et suivi', 'Indicateurs réels : €/m³, PFAS, disponibilité', 'Autorisations sanitaires et réception'],
    ],
  },
};

const SCENARIOS = [
  {
    name: 'Adsorption',
    title: 'Adsorption sur CAG ou résines',
    status: 'Filière recommandée pour les essais',
    chain: ['Eau brute', 'Prétraitement conditionnel', '2 colonnes tête et sécurité', 'Contrôle', 'Distribution'],
    validation: 'Essais de percée, qualité par PFAS, devenir des médias usés.',
    text: 'L’eau traverse des colonnes de résines spécifiques ou de charbon actif granulaire. Deux colonnes en série réduisent le risque de percée. Les PFAS sont piégés dans le média, qui devient un déchet à traiter.',
  },
  {
    name: 'Membranes',
    title: 'Membranes : osmose inverse ou nanofiltration',
    status: 'Option de recours',
    chain: ['Eau brute', 'Prétraitement', 'Membranes', 'Contrôle', 'Stabilisation du perméat'],
    validation: 'Taux de récupération, énergie, volume et sort des concentrats.',
    text: 'Les membranes séparent les PFAS : elles produisent une eau traitée, le perméat, et un concentrat contenant les polluants. Elles ne détruisent pas les PFAS. Le perméat peut nécessiter une reminéralisation, et le concentrat exige une gestion réglementaire.',
  },
  {
    name: 'Membranes + ELIXIR',
    title: 'Membranes et destruction ELIXIR',
    status: 'Scénario conditionnel',
    chain: ['Membranes', 'Concentrat admissible', 'Destruction ELIXIR', 'Perméat vers contrôle'],
    validation: 'Compatibilité, bilan de destruction, émissions et capacité annuelle.',
    text: 'ELIXIR, présentée par ArianeGroup et Aquarden, vise la destruction des PFAS dans certains effluents compatibles, pour environ 4–5 m³/j, 1 200 m³/an et 250 kWh/m³. Son rôle se situe en aval d’une concentration des PFAS : ce n’est pas une filière autonome de production d’eau potable à grand débit.',
  },
];

// Matrice pondérée : notes de 1 à 5 dans l'ordre CAG, résines, CAG + résines, osmose.
const MATRIX = {
  options: ['CAG', 'Résines', 'CAG + résines', 'Osmose'],
  criteria: [
    { key: 'eff', label: 'Efficacité sur mélange PFAS', weight: 30, notes: [3, 4, 4, 5] },
    { key: 'cost', label: 'Coût complet prévisionnel', weight: 25, notes: [3, 3, 2, 2] },
    { key: 'site', label: 'Intégration au site', weight: 15, notes: [4, 3, 2, 2] },
    { key: 'flow', label: 'Faisabilité grand débit', weight: 10, notes: [5, 5, 4, 3] },
    { key: 'mat', label: 'Maturité', weight: 10, notes: [5, 5, 4, 5] },
    { key: 'env', label: 'Impact environnemental', weight: 5, notes: [3, 3, 2, 2] },
    { key: 'res', label: 'Gestion des résidus', weight: 5, notes: [3, 3, 2, 2] },
  ],
};

const SOURCES = [
  {
    group: 'Dossier de base',
    items: [
      ['D1', 'Orléans Métropole et partenaires, présentation complète fournie pour le hackathon, 73 pages', ''],
    ],
  },
  {
    group: 'Orléans Métropole',
    items: [
      ['S1', 'Qualité de l’eau potable altérée à Semoy : Orléans Métropole répond à l’urgence (16/04/2024)', 'https://www.orleans-metropole.fr/actualites/detail/qualite-de-leau-potable-alteree-a-semoy-orleans-metropole-repond-a-lurgence'],
      ['S2', 'Rapport annuel sur l’activité de la régie de l’eau potable 2024', 'https://www.orleans-metropole.fr/fileadmin/orleans-metropole/MEDIA/document/environnement/eau_potable/rapport_annuel__sur_l_activite_de_la_regie_de_l_eau_potable_2024.pdf'],
      ['S3', 'Rapport eau potable 2022, p. 45 (station de déferrisation-démanganisation)', 'https://www.orleans-metropole.fr/fileadmin/orleans-metropole/MEDIA/document/environnement/eau_potable/RAPPORT_EAU_POTABLE_2022.pdf'],
    ],
  },
  {
    group: 'Références de coûts',
    items: [
      ['E1', 'Saint-Louis Agglomération, communiqué du 25 avril 2025, prévisions CAPEX et OPEX multi-sites', 'https://www.agglo-saint-louis.fr/wp-content/uploads/2025/04/20250425-CP-Restriction-de-l%E2%80%99usage-de-l%E2%80%99eau-potable-dans-l%E2%80%99agglom%C3%A9ration-de-Saint-Louis-pour-les-personnes-sensibles.pdf'],
      ['E2', 'Saint-Louis Agglomération, procès-verbal du conseil du 14 mai 2025, unités mobiles 25, 65 et 450 m³/h', 'https://politique.pappers.fr/commune/document/923560a9d4fb268e11ee16e51ee740fa'],
      ['S4', 'Préfecture du Haut-Rhin, PFAS Saint-Louis Agglomération, levée partielle des restrictions (2025)', 'https://www.haut-rhin.gouv.fr/Actualites/Espace-presse/Communiques-de-presse-Archives-2020-a-2025/Communiques-de-presse-2025/PFAS-Saint-Louis-Agglomeration-Levee-partielle-des-restrictions-de-l-usage-de-l-eau-potable'],
      ['S5', 'Belkouteb et al., Water Research (2020), exploitation du charbon actif selon l’objectif sur 11 PFAS', 'https://pubmed.ncbi.nlm.nih.gov/32585466/'],
      ['S6', 'Riegel et al., Environmental Sciences Europe (2023)', 'https://link.springer.com/article/10.1186/s12302-023-00716-5'],
      ['S7', 'IGAS / IGEDD / CGAAER, rapport 2024, enquête FNCCR', 'https://www.igas.gouv.fr/sites/igas/files/2024-11/Rapport%20Igas-IGEDD-CGAAER%20Les%20risques%20li%C3%A9s%20%C3%A0%20la%20pr%C3%A9sence%20de%20pesticides%20dans%20l%27eau%20destin%C3%A9e%20%C3%A0%20la%20consommation%20humaine_0.pdf'],
      ['S8', 'Alameda County Water District, comité du 4 juin 2025', 'https://acwd.org/AgendaCenter/ViewFile/Minutes/_06042025-1543'],
    ],
  },
  {
    group: 'Financement',
    items: [
      ['F1', 'Agence de l’eau Loire-Bretagne, 12e programme 2025–2030', 'https://www.eau-loire-bretagne.fr/sites/agence/home/agence-de-leau/le-12e-programme-2025-2030.html'],
      ['F2', 'Agence de l’eau Loire-Bretagne, aides aux collectivités et restrictions 2026', 'https://agence.eau-loire-bretagne.fr/sites/aides-redevances/home/aides/collectivites-1/aides-pour-les-collectivites.html'],
      ['F3', 'Banque des Territoires, Aqua Prêt', 'https://www.banquedesterritoires.fr/produits-services/prets-long-terme/aqua-pret'],
      ['F4', 'Région Centre-Val de Loire, CAP PME-PMI', 'https://www.centre-valdeloire.fr/le-guide-des-aides-de-la-region-centre-val-de-loire/cap-pme-pmi'],
      ['F5', 'Préfecture Centre-Val de Loire, France 2030 régionalisé', 'https://www.prefectures-regions.gouv.fr/centre-val-de-loire/Grands-dossiers/Investir-l-Avenir/France-2030-regionalise/'],
      ['F6', 'Ministère de la Transition écologique, Fonds vert 2026', 'https://www.ecologie.gouv.fr/presse/lancement-du-fonds-vert-2026-nouvel-elan-transition-ecologique-territoires'],
      ['F7', 'Sénat, réponse ministérielle du 24 septembre 2026 sur la redevance PFAS', 'https://www.senat.fr/questions/base/2026/qSEQ260107273.html'],
      ['F8', 'IGAS, dépollution de l’eau potable : stratégies et pistes de financement, juillet 2026', 'https://igas.gouv.fr/depollution-de-leau-potable-strategies-et-pistes-de-financement-0'],
    ],
  },
];
