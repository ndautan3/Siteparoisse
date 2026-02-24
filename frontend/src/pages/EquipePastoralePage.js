import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';
import { SocialIcons } from '@/components/SocialIcons';

// Les prêtres avec leurs photos individuelles
const priests = [
  {
    id: 'pere-daniel',
    name: 'Père Daniel',
    role: 'Curé de la paroisse',
    description: 'Le Père Daniel est le curé de notre paroisse Notre Dame d\'Autan. Ordonné prêtre il y a de nombreuses années, il guide notre communauté avec sagesse et bienveillance. Passionné par l\'accompagnement des familles et la transmission de la foi, il est à l\'écoute de tous les paroissiens.',
    image: 'https://customer-assets.emergentagent.com/job_513c9844-285f-4857-a7dc-ddd6dae9e1cf/artifacts/izar22oi_pere-daniel.webp',
    isCure: true
  },
  {
    id: 'pere-donald',
    name: 'Père Donald',
    role: 'Prêtre',
    description: 'Le Père Donald accompagne notre communauté paroissiale avec enthousiasme et dévouement. Il est particulièrement investi dans l\'accompagnement des jeunes et l\'animation des temps de prière. Sa joie communicative et son écoute attentive en font un pasteur apprécié de tous.',
    image: 'https://customer-assets.emergentagent.com/job_513c9844-285f-4857-a7dc-ddd6dae9e1cf/artifacts/bwicpjkm_pere-donald.webp',
    isCure: false
  },
  {
    id: 'pere-anthony',
    name: 'Père Anthony',
    role: 'Prêtre',
    description: 'Le Père Anthony est un jeune prêtre dynamique qui apporte fraîcheur et énergie à notre paroisse. Formé à l\'écoute et à l\'accompagnement spirituel, il est particulièrement engagé auprès des familles et dans la préparation aux sacrements. Son sourire et sa disponibilité sont un témoignage vivant de la joie de l\'Évangile.',
    image: 'https://customer-assets.emergentagent.com/job_513c9844-285f-4857-a7dc-ddd6dae9e1cf/artifacts/mrvxn6kf_pere-anthony.webp',
    isCure: false
  },
  {
    id: 'pere-arnaud',
    name: 'Père Arnaud',
    role: 'Prêtre',
    description: 'Le Père Arnaud est un prêtre au service de notre communauté, reconnu pour sa profondeur spirituelle et sa pédagogie. Il accompagne avec attention les personnes en recherche de sens et anime des groupes de formation à la foi. Son engagement pastoral se manifeste particulièrement dans l\'accompagnement des catéchumènes et la préparation au mariage.',
    image: 'https://customer-assets.emergentagent.com/job_513c9844-285f-4857-a7dc-ddd6dae9e1cf/artifacts/parx1ojm_pere-arnaud.webp',
    isCure: false
  }
];

// Autres membres de l'équipe pastorale
const otherMembers = [
  {
    id: 'diacres',
    title: 'Les Diacres',
    name: 'Diacres permanents',
    role: 'Service de la charité',
    description: 'Au service de la communauté et des plus fragiles',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
    path: '/equipe-pastorale/diacres'
  },
  {
    id: 'seminaristes',
    title: 'Les Séminaristes',
    name: 'En formation',
    role: 'Futurs prêtres',
    description: 'Accompagnés par notre communauté dans leur cheminement',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
    path: '/equipe-pastorale/seminaristes'
  },
  {
    id: 'eap',
    title: "L'EAP",
    name: "Équipe d'Animation Pastorale",
    role: 'Coordination pastorale',
    description: 'Laïcs engagés au service de la mission paroissiale',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400',
    path: '/equipe-pastorale/eap'
  }
];

const EquipePastoralePage = () => {
  return (
    <div className="min-h-screen bg-paper" data-testid="equipe-pastorale-page">
      {/* Hero Section with Image */}
      <section className="relative h-[55vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://customer-assets.emergentagent.com/job_scroll-donate-pages/artifacts/x8y0e2d8_Equipe-pastorale.png"
            alt="Équipe Pastorale"
            className="w-full h-full object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20"></div>
        </div>

        <SocialIcons />

        {/* Content - with padding to avoid search button overlap */}
        <div className="relative z-10 text-center text-white px-4 pt-8">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gold/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <Users className="w-10 h-10 text-white" strokeWidth={1.5} />
            </div>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-medium tracking-tight mb-4">
            Équipe Pastorale
          </h1>
          <p className="text-gold-light font-medium mb-4 text-lg">Une équipe au service de la communauté</p>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto">
            Découvrez les membres de notre équipe pastorale qui accompagnent la vie de notre paroisse
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Section Prêtres - 4 colonnes */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl text-slate-deep mb-8 text-center">Nos Prêtres</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {priests.map((priest) => (
              <Link
                key={priest.id}
                to={`/equipe-pastorale/${priest.id}`}
                className="group"
                data-testid={`priest-card-${priest.id}`}
              >
                <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 h-full border border-slate-100 flex flex-col hover:-translate-y-1">
                  {/* Photo */}
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={priest.image} 
                      alt={priest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow text-center">
                    {priest.isCure && (
                      <span className="text-gold text-xs font-medium mb-1 uppercase tracking-wide">Curé</span>
                    )}
                    <h3 className="font-serif text-lg text-slate-deep mb-1 group-hover:text-gold transition-colors">
                      {priest.name}
                    </h3>
                    <p className="text-slate-500 text-sm">{priest.role}</p>
                    
                    <div className="mt-3 flex items-center justify-center text-gold text-sm font-medium group-hover:text-gold-dark transition-colors">
                      <span>En savoir plus</span>
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* Section Autres membres - 3 colonnes */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl text-slate-deep mb-8 text-center">Autres membres</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherMembers.map((member) => (
              <Link
                key={member.id}
                to={member.path}
                className="group"
                data-testid={`team-card-${member.id}`}
              >
                <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 h-full border border-slate-100 flex flex-col hover:-translate-y-1">
                  {/* Photo */}
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-gold text-xs font-medium mb-1 uppercase tracking-wide">{member.role}</span>
                    <h3 className="font-serif text-xl text-slate-deep mb-2 group-hover:text-gold transition-colors">
                      {member.title}
                    </h3>
                    <p className="text-slate-600 text-sm flex-grow">{member.description}</p>
                    
                    <div className="mt-4 flex items-center text-gold text-sm font-medium group-hover:text-gold-dark transition-colors">
                      <span>Découvrir</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center">
          <h2 className="font-serif text-2xl text-slate-deep mb-4">Contacter l'équipe pastorale</h2>
          <p className="text-slate-600 mb-6">
            Pour toute question ou demande, n'hésitez pas à nous contacter via le secrétariat paroissial.
          </p>
          <Link
            to="/secretariat"
            className="inline-flex items-center bg-gold hover:bg-gold-dark text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </div>

      {/* Citation biblique */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-8 border border-gold/20 text-center">
          <blockquote className="font-serif text-2xl text-slate-deep italic mb-4">
            "Comme le Père m'a envoyé, moi aussi, je vous envoie."
          </blockquote>
          <p className="text-gold font-medium">Jean 20, 21</p>
        </div>
      </div>
    </div>
  );
};

// Export priests data for use in detail page
export { priests };
export default EquipePastoralePage;
