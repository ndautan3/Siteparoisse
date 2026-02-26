import { Helmet } from 'react-helmet-async';

export const SEO = ({ title, description }) => {
  const siteName = 'Paroisse Notre Dame d\'Autan';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const metaDescription = description || 'Paroisse Notre Dame d\'Autan - Communaut\u00e9 paroissiale vivante et accueillante au service de la foi et de la fraternit\u00e9. Castanet-Tolosan, Saint-Orens et environs.';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_FR" />
    </Helmet>
  );
};
