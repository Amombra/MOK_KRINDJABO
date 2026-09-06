# Mutuelle de Krindjabo — système de design

Système de design du site web de la **Mutuelle de Krindjabo**, mutuelle de développement du village de Krindjabo (sous-préfecture de Maféré, département d'Aboisso, Côte d'Ivoire). Le site doit être **moderne, chaleureux, professionnel et communautaire**.

## Contexte

La mutuelle est une caisse commune alimentée par les cotisations des filles et fils du village, au pays comme dans la diaspora. Elle finance trois engagements : la **prise en charge médicale**, l'**aide à la scolarité** et le **soutien aux familles** lors des événements heureux comme des deuils. Son public est double : les membres du village (souvent sur mobile, connexion irrégulière, français parlé au quotidien) et la diaspora (donateurs, ordinateurs de bureau, attentes de transparence financière).

Un seul produit numérique est représenté ici : le **site vitrine public**, page unique à défilement — héros, qui sommes-nous, mission, vision, valeurs, actions, projets, réalisations, moments ensemble, membres, adhésions & cotisations, actualités, événements, appel à la solidarité, contact, localisation. Un bouton **Espace Membres** est prévu dans l'en-tête, sans fonctionnalité à ce stade.

Devise de la mutuelle : **« Unis par nos racines, engagés pour notre communauté. »** Les trois idées à transmettre partout : **solidarité, entraide, développement**.

### Sources fournies

Aucune. Le brief tenait en une phrase de cadrage (nom de la mutuelle, adjectifs « moderne, chaleureux, professionnel, communautaire »). **Aucun codebase, lien Figma, deck, logo, photographie, charte ni police n'a été transmis.** Tout ce qui suit est donc une proposition d'identité construite de zéro, à valider et à corriger par la mutuelle. Les noms de membres du bureau, montants, dates et chiffres présents dans les maquettes sont des exemples plausibles, pas des données réelles.

### Substitutions à signaler

- **Polices** : aucun fichier de police fourni. Utilisation de **Fraunces** (display) et **Manrope** (texte), chargées depuis Google Fonts dans `tokens/fonts.css`. Si la mutuelle possède déjà des polices, fournissez les fichiers et ils remplaceront ces deux familles.
- **Logo** : aucun logo fourni. **Aucun emblème n'a été dessiné.** Partout où une marque se placerait, le composant `Wordmark` affiche le nom en typographie. Fournissez le logo (SVG de préférence) pour le remplacer.
- **Iconographie** : aucun jeu d'icônes fourni. Utilisation de **Lucide** (CDN, `lucide@0.462.0`), trait 2px, style linéaire — le plus proche du ton chaleureux et sobre recherché.
- **Photographies** : aucune image fournie. Les maquettes affichent des **emplacements rayés** portant la mention « Photo à fournir ».

---

## CONTENT FUNDAMENTALS

**Langue** : français de Côte d'Ivoire, standard et sans jargon. Les termes locaux qui font sens (« fête de génération », « chef de village », « F CFA », noms de quartiers) sont conservés tels quels, jamais traduits ni expliqués avec condescendance.

**Personne** : « nous » pour la mutuelle, « vous » pour le lecteur. Le vouvoiement est systématique, y compris pour les membres. Jamais « je ». Jamais de « on » impersonnel.
> « Nous vous rappelons sous 48 heures. » — et non « Vous serez recontacté. »

**Ton** : chaleureux mais responsable. La mutuelle gère l'argent des gens ; chaque promesse est chiffrée et datée. Un texte qui ne peut pas donner de chiffre donne au moins un délai.
> « 12 000 F CFA par an, payables en une ou deux fois. » · « Versement sous 15 jours. » · « Comptes 2025 publiés. »

**Casse** : phrases en casse normale. Les capitales tracées sont réservées aux **surtitres** (« NOS ACTIONS », « VIE DE LA MUTUELLE ») et aux étiquettes de colonne du pied de page. Jamais de titre entièrement en capitales. Espaces insécables avant `:` `;` `!` `?` et dans « 12 000 F CFA ».

**Longueurs** : titre de section ≤ 8 mots ; chapeau 1 à 2 phrases (≤ 30 mots) ; corps de carte 1 à 2 phrases. Libellé de bouton : verbe à l'infinitif, 1 à 3 mots (« Adhérer », « Cotiser maintenant », « Télécharger le rapport »). Jamais « Cliquez ici », jamais « En savoir plus » sans complément quand un complément existe.

**Emoji** : **jamais**. Ni dans l'interface, ni dans les titres, ni dans les documents. La chaleur passe par la couleur, la photographie et la typographie.

**Nombres** : chiffres arabes partout, séparateur d'espace pour les milliers (« 8 400 000 »), abréviation « 8,4 M » réservée aux compteurs de chiffres clés. Dates en toutes lettres : « 12 octobre 2026 ».

**Ce qu'on évite** : le vocabulaire d'ONG et de startup (« impact », « écosystème », « solutions »), les superlatifs, les points d'exclamation, les questions rhétoriques en titre, le storytelling à la première personne.

---

## VISUAL FOUNDATIONS

**Palette.** Trois couleurs de marque sur une base de neutres chauds. **Vert palmeraie** `#215B45` — couleur institutionnelle : en-têtes de section, boutons principaux, pied de page vert profond `#0F2A20`. **Rouge latérite** `#A2402B` — la terre du Sanwi : surtitres, appels à l'action forts, alertes. **Ocre or** `#C8912F` — mise en valeur : anneau de focus, accents sur fond vert, chiffres clés. Les neutres sont **sables**, jamais gris froids : page `#FDFBF7`, creux `#F7F2E9`, bordures `#F0E9DC`→`#E3D9C7`, encre `#1C1814`. Maximum deux fonds par page : sable et vert profond (plus un bandeau vert saturé pour l'appel à l'action). Les états sémantiques reprennent les couleurs de marque (succès = vert, erreur = latérite) pour éviter tout rouge ou vert « système » criard.

**Typographie.** **Fraunces** en display (graisse 600, `WONK` activé, interlettrage −0,02em) — un serif contemporain aux terminaisons douces qui apporte la chaleur ; **Manrope** pour tout le reste (400/600/700), lisible en petit corps sur mobile. Échelle : display 44→72px fluide, H1 40, H2 30, H3 23, H4 19, chapeau 19, corps 16, petit 14, mention 13, surtitre 12 en capitales tracées à 0,14em. Interlignes : 1,08 en display, 1,28 en titre, 1,62 en corps. Mesure de lecture bornée à 62–66 caractères, `text-wrap: pretty` sur les titres et chapeaux.

**Espacement et mise en page.** Base 4px, échelle 4/8/12/16/20/24/32/40/48/64/80/96/128. Conteneur 1180px, colonne étroite 720px, gouttière 24px, marge latérale 32px. Sections verticales : 96px (64px en version compacte). Padding de carte 24px, écart interne 12px. Grilles de 3 colonnes pour les cartes, 2 colonnes 1.35/0.65 pour formulaire + colonne latérale. Rien n'est fixé à l'écran sauf l'en-tête (`sticky`, 76px).

**Fonds.** Aplats de couleur, pas de dégradés (le seul dégradé toléré est la hachure des emplacements photo). Aucun motif ni texture répétée : les pagnes et symboles locaux sont trop chargés de sens pour être décoratifs. Les photographies, quand elles arriveront, doivent être **chaudes, ensoleillées, réelles** (vie du village, assemblées, remises de kits) — pas de banque d'images corporate, pas de noir et blanc, pas de grain ajouté. Photos en plein cadre en haut des cartes (angles supérieurs arrondis uniquement) ou en bloc `--radius-media` 20px à côté du texte.

**Rayons.** Champs et boutons 10px, cartes 16px, médias 20px, grands bandeaux 32px, badges et tags en pilule. Rien à angle vif, rien de complètement rond hors boutons icône et pastilles.

**Cartes.** Fond blanc, bordure 1px `#F0E9DC`, rayon 16px, ombre `--shadow-sm`. Au survol (uniquement si la carte entière est cliquable) : élévation `--shadow-lg`, translation −2px, bordure verte, transition 200ms. Variantes : `soft` vert clair pour la solidarité, `highlight` ocre pour les annonces, `dark` vert profond pour les blocs de fin de section.

**Ombres.** Chaudes et basses, jamais de noir pur — base `rgba(46,40,34,…)`. `xs` pour les onglets pilule, `sm` au repos des cartes, `md` au survol des boutons, `lg` pour modales et toasts, `--shadow-brand` (teintée verte) sous les bandeaux verts. Aucune ombre interne décorative.

**Transparence et flou.** Deux usages seulement : l'en-tête collant (`rgba(253,251,247,.92)` + `blur(10px)`) et le voile de modale (`rgba(28,24,20,.55)` + `blur(3px)`). Les textes sur fond vert utilisent `rgba(253,251,247,.72–.85)` plutôt qu'un gris.

**Animation.** Discrète, jamais de rebond. 120ms sur les contrôles, 200ms sur les cartes et onglets, 340ms sur les modales et le menu mobile, 520ms pour une apparition au défilement. Easing `cubic-bezier(.2,.6,.2,1)` par défaut. Tout est neutralisé sous `prefers-reduced-motion`.

**États.** *Survol* : fond plus foncé pour les surfaces pleines (`--primary-hover`), fond teinté très clair pour les contours et fantômes, soulignement pour les liens (offset 3px). *Appui* : couleur encore plus foncée **et** `scale(.985)`. *Focus* : anneau ocre `0 0 0 3px rgba(200,145,47,.42)` — jamais de contour bleu système. *Désactivé* : fond sable creux, texte `--text-subtle`, curseur `not-allowed`, aucune opacité globale sur les boutons (opacité 0,55 uniquement sur les contrôles de formulaire composés).

**Bordures.** 1px partout, 2px seulement pour l'onglet actif et un contour d'accent volontaire. La bordure sépare, l'ombre élève : les deux ensemble uniquement sur les cartes.

---

## ICONOGRAPHY

- **Jeu utilisé** : [Lucide](https://lucide.dev) 0.462.0, chargé depuis unpkg (`https://unpkg.com/lucide@0.462.0/dist/umd/lucide.js`). **Substitution assumée** — la mutuelle n'a fourni aucun jeu d'icônes ; Lucide est retenu pour son trait linéaire régulier (2px) et ses formes rondes, cohérents avec la douceur de Fraunces.
- **Format** : SVG à la volée via `lucide.createIcons()` sur des balises `<i data-lucide="nom">`. Aucun PNG, aucune police d'icônes, aucun sprite maison.
- **Tailles** : 16px dans le texte et les listes, 18px dans les boutons `sm`, 20px dans les boutons icône et les pastilles de carte, 24px maximum. Trait `stroke-width` par défaut (2), jamais épaissi.
- **Couleur** : `currentColor`. Dans les pastilles de carte, vert `--text-brand` sur fond vert clair ; ocre `--ochre-300` sur fond vert profond.
- **Vocabulaire courant** : `stethoscope` (santé), `graduation-cap` (scolarité), `hand-heart` (solidarité), `calendar-days` (assemblée), `file-text` (documents), `download`, `phone`, `phone-call`, `mail`, `map-pin`, `smartphone` (Mobile Money), `badge-check`, `check`, `check-circle`, `alert-triangle`, `clock`, `info`, `share-2`, `arrow-right`, `menu`.
- **Emoji et caractères unicode** : proscrits comme icônes. Seules exceptions tolérées, purement typographiques : le chevron `▾` du `Select` natif et la croix `×` de fermeture.
- **Dessin d'icônes maison** : interdit. Si un pictogramme manque, choisissez le Lucide le plus proche.

---

## Additions intentionnelles

Aucune source ne définissait d'inventaire de composants ; l'ensemble est donc un jeu standard, dimensionné aux besoins du site. Deux composants sortent de ce jeu standard :

- **`Wordmark`** — indispensable puisqu'aucun logo n'existe : centralise la signature typographique pour qu'un futur logo la remplace en un seul endroit.
- **`SectionHeading`** — le site est un site de contenu ; le triptyque surtitre / titre / chapeau se répète sur toutes les pages et devait être normé.

---

## Index

| Chemin | Contenu |
| --- | --- |
| `styles.css` | Point d'entrée CSS unique (liste d'`@import`). |
| `tokens/fonts.css` | Import Google Fonts + familles typographiques. |
| `tokens/colors.css` | Palette de base + alias sémantiques. |
| `tokens/typography.css` | Échelle de corps, interlignes, graisses, interlettrages. |
| `tokens/spacing.css` | Échelle d'espacement, conteneurs, hauteurs de contrôle. |
| `tokens/radius-shadow.css` | Rayons, épaisseurs de bordure, ombres, anneau de focus. |
| `tokens/motion.css` | Durées, courbes, échelle d'appui. |
| `guidelines/*.card.html` | 16 cartes de fondation (couleurs, type, espacement, états, mouvement). |
| `components/core/` | `Button`, `IconButton`, `Card`, `Badge`, `Tag`. |
| `components/forms/` | `Input`, `Select`, `Checkbox`, `Radio`, `Switch`. |
| `components/navigation/` | `Tabs`. |
| `components/feedback/` | `Dialog`, `Toast`, `Tooltip`. |
| `components/brand/` | `Wordmark`, `SectionHeading`. |
| `ui_kits/site-vitrine/` | Recréation cliquable du site public (page complète à défilement) — voir son `README.md`. |
| `templates/site-vitrine/` | Template de page réutilisable par les projets consommateurs. |
| `thumbnail.html` | Vignette du système. |
| `SKILL.md` | Enveloppe Agent Skill pour usage hors de cet outil. |

Chaque composant est accompagné de son `.d.ts` (contrat de props) et de son `.prompt.md` (quand et comment l'utiliser). Les composants sont exposés sous `window.MutuelleDeKrindjaboDesignSystem_3c18fd`.

## À fournir par la mutuelle

1. Le **logo** (SVG) et ses déclinaisons sur fond clair et fond vert.
2. Des **photographies** réelles : village, assemblée générale, remise de kits, portraits du bureau.
3. Les **données réelles** : chiffres de la communauté (membres, familles, projets, années), montants et modalités de cotisation, projets et réalisations, actualités, agenda, coordonnées et réseaux sociaux. Aucun montant de cotisation n'a été inventé : les champs correspondants attendent les règles officielles.
4. Les **polices** de la charte existante, s'il y en a une.
