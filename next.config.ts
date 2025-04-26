// next.config.ts (ou .js si tu utilises JavaScript)
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Autres options de configuration Next.js que tu pourrais avoir ici */
  reactStrictMode: true, // Exemple d'option existante possible

  // --- AJOUT DE LA CONFIGURATION WEBPACK POUR SVGR ---
  webpack(config, { isServer }) { // Ajouter { isServer } si besoin pour des règles spécifiques serveur/client
    // 1. Trouver la règle existante pour les fichiers SVG (souvent via test: /\.svg$/i)
    const fileLoaderRule = config.module.rules.find((rule: any) => // Utiliser 'any' pour éviter les erreurs de type complexes ici
      rule.test instanceof RegExp && rule.test.test('.svg')
    );

    config.module.rules.push(
      // 2. Réappliquer la règle existante pour les imports avec `?url`
      {
        ...(fileLoaderRule as object), // Copier les propriétés de la règle existante
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // 3. Ajouter la règle pour SVGR pour tous les autres imports .svg
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule?.issuer, // Utiliser l'issuer de la règle trouvée si elle existe
        resourceQuery: { not: [...(fileLoaderRule?.resourceQuery?.not || []), /url/] }, // Exclure les imports ?url
        use: [{
            loader: '@svgr/webpack',
            options: {
                // Options SVGR optionnelles :
                 icon: true, // Considérer les SVG comme des icônes (ajuste certains attributs)
                 // svgoConfig: { plugins: [{ name: 'preset-default', params: { overrides: { removeViewBox: false } } }] }, // Exemple de config SVGO
                 typescript: true, // Si tu utilises TypeScript
                 // ... autres options ...
            }
        }],
      }
    );

    // 4. Modifier la règle existante pour ignorer les SVG (traités par SVGR maintenant)
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    // Très important : retourner l'objet config modifié
    return config;
  },
  // --- FIN DE LA CONFIGURATION WEBPACK ---

};

export default nextConfig; // Exporter la configuration