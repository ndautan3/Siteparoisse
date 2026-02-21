import { Link } from 'react-router-dom';
import { Baby, BookOpen, GraduationCap, Users, Cross, Heart } from 'lucide-react';

const sections = [
  {
    id: 'eveil-foi',
    title: 'Éveil à la Foi',
    subtitle: '3-7 ans',
    description: 'Premiers pas dans la foi chrétienne pour les tout-petits et leurs familles',
    icon: Baby,
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600',
    path: '/eveil-foi'
  },
  {
    id: 'catechisme',
    title: 'Catéchisme',
    subtitle: 'CE2 à 6ème',
    description: 'Découvrir Jésus et grandir dans la foi en communauté',
    icon: BookOpen,
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600',
    path: '/catechisme'
  },
  {
    id: 'aumonerie',
    title: 'Aumônerie',
    subtitle: 'Collégiens & Lycéens',
    description: 'Un lieu pour les jeunes de grandir ensemble dans la foi',
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1529390079861-591f8a9a9688?w=600',
    path: '/aumonerie'
  },
  {
    id: 'mouvements',
    title: 'Mouvements de Jeunesse',
    subtitle: 'Scouts, MEJ, Patronage',
    description: 'Activités, partage et service dans un esprit chrétien',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600',
    path: '/mouvements'
  },
  {
    id: 'servants',
    title: "Servants d'autel & Vocations",
    subtitle: 'Service liturgique',
    description: 'Se mettre au service de la liturgie et répondre à l\'appel',
    icon: Cross,
    image: 'https://images.unsplash.com/photo-1445367585008-b8a4c4640c5f?w=600',
    path: '/servants-vocations'
  }
];

const FamillesJeunessePage = () => {
  return (
    <div className="min-h-screen bg-paper py-20" data-testid="familles-jeunesse-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center shadow-lg">
              <Users className="w-10 h-10 text-white" strokeWidth={1.5} />
            </div>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-slate-deep mb-4">
            Familles & Jeunesse
          </h1>
          <p className="text-gold font-medium mb-4">Pôle éducation et formation</p>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Accompagnement des enfants et des jeunes dans leur cheminement de foi, de l'éveil à la foi jusqu'à l'aumônerie
          </p>
        </div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section) => {
            const IconComponent = section.icon;
            return (
              <Link
                key={section.id}
                to={section.path}
                className="group"
                data-testid={`section-card-${section.id}`}
              >
                <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 h-full border border-slate-100 flex flex-col">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-full bg-gold/90 backdrop-blur-sm flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-medium px-3 py-1 rounded-full">
                        {section.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-serif text-2xl text-slate-deep mb-2 group-hover:text-gold transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                      {section.description}
                    </p>
                    
                    <div className="mt-4 flex items-center text-gold text-sm font-medium group-hover:text-gold-dark transition-colors">
                      <span>En savoir plus</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {/* Contact */}
        <div className="mt-16 bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-8 border border-gold/20 text-center">
          <h2 className="font-serif text-2xl text-slate-deep mb-4">Inscriptions</h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Les inscriptions au catéchisme et à l'aumônerie ont lieu en septembre. 
            Contactez le secrétariat pour plus d'informations.
          </p>
          <Link
            to="/secretariat"
            className="inline-flex items-center bg-gold hover:bg-gold-dark text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            Contacter le secrétariat
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FamillesJeunessePage;
