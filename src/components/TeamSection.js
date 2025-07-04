// components/TeamSection.js
import Image from 'next/image';

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Dr. Anne Marie CHANA",
      role: "Directrice de recherche",
      image: "/images/team/placeholder1.jpg",
      email: "anne.chana@univ-yaounde1.cm"
    },
    {
      name: "Prof. Amadou Seidou",
      role: "Chercheur senior - Systèmes énergétiques",
      image: "/images/team/placeholder2.jpg"
    },
    {
      name: "Dr. Olivier Kameni",
      role: "Chercheur - IoT & Santé",
      image: "/images/team/placeholder3.jpg"
    },
    {
      name: "Dr. Nathalie Kouam",
      role: "Chercheuse - Sécurité routière",
      image: "/images/team/placeholder4.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre équipe</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Des chercheurs passionnés qui mettent l&apos;innovation électronique au service du développement durable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-3">{member.role}</p>
                {member.email && (
                  <a href={`mailto:${member.email}`} className="text-green-600 text-sm hover:underline">
                    {member.email}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
