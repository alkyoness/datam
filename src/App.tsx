import React, { useState } from 'react';
import { Search, Settings, BookOpen, Heart, Brain, Thermometer, ChevronRight, ExternalLink, Biohazard, Activity, Skull, Apple, Flame, Baby, Menu as Venus } from 'lucide-react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const guidelines = [
    {
      category: "Kardiyak",
      icon: Heart,
      protocols: [
        { title: "Akut Koroner Sendrom", lastUpdated: "2024-03" },
        { title: "Kalp Yetmezliği Yönetimi", lastUpdated: "2024-02" },
        { title: "Kardiyak Arrest Protokolü", lastUpdated: "2024-03" }
      ]
    },
    {
      category: "Nörolojik",
      icon: Brain,
      protocols: [
        { title: "Akut İnme Yönetimi", lastUpdated: "2024-03" },
        { title: "Status Epileptikus", lastUpdated: "2024-02" },
        { title: "Kafa Travması Değerlendirmesi", lastUpdated: "2024-03" }
      ]
    },
    {
      category: "Solunum",
      icon: Settings,
      protocols: [
        { title: "Akut Astım", lastUpdated: "2024-03" },
        { title: "KOAH Alevlenmesi", lastUpdated: "2024-02" },
        { title: "Pnömoni Yönetimi", lastUpdated: "2024-03" }
      ]
    },
    {
      category: "Enfeksiyon",
      icon: Biohazard,
      protocols: [
        { title: "Sepsis Yönetimi", lastUpdated: "2024-03" },
        { title: "Menenjit Protokolü", lastUpdated: "2024-02" },
        { title: "COVID-19 Akut Yaklaşım", lastUpdated: "2024-03" }
      ]
    },
    {
      category: "Travma",
      icon: Activity,
      protocols: [
        { title: "Politravma Yaklaşımı", lastUpdated: "2024-03" },
        { title: "Batın Travması", lastUpdated: "2024-02" },
        { title: "Spinal Travma", lastUpdated: "2024-03" }
      ]
    },
    {
      category: "Toksikoloji",
      icon: Skull,
      protocols: [
        { title: "Parasetamol Zehirlenmesi", lastUpdated: "2024-03" },
        { title: "Opiyat Toksisitesi", lastUpdated: "2024-02" },
        { title: "Antidot Rehberi", lastUpdated: "2024-03" }
      ]
    },
    {
      category: "Gastrointestinal",
      icon: Apple,
      protocols: [
        { title: "GİS Kanama Yaklaşımı", lastUpdated: "2024-03" },
        { title: "Akut Pankreatit", lastUpdated: "2024-02" },
        { title: "Karın Ağrısı Algoritması", lastUpdated: "2024-03" }
      ]
    },
    {
      category: "Endokrin / Metabolik",
      icon: Flame,
      protocols: [
        { title: "Hipoglisemi Yönetimi", lastUpdated: "2024-03" },
        { title: "DKA Protokolü", lastUpdated: "2024-02" },
        { title: "Hiperkalemi Müdahalesi", lastUpdated: "2024-03" }
      ]
    },
    {
      category: "Pediatri",
      icon: Baby,
      protocols: [
        { title: "Pediatrik Arrest Yönetimi", lastUpdated: "2024-03" },
        { title: "Bronşiolit", lastUpdated: "2024-02" },
        { title: "Krup Sendromu", lastUpdated: "2024-03" }
      ]
    },
    {
      category: "Obstetrik / Jinekoloji",
      icon: Venus,
      protocols: [
        { title: "Ektopik Gebelik", lastUpdated: "2024-03" },
        { title: "Preeklampsi / Eklampsi", lastUpdated: "2024-02" },
        { title: "Postpartum Hemoraji", lastUpdated: "2024-03" }
      ]
    }
  ];

  const filteredGuidelines = guidelines
    .map(category => ({
      ...category,
      protocols: category.protocols.filter(protocol =>
        protocol.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }))
    .filter(category => category.protocols.length > 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">Klinik Rehberler</h1>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rehber ara..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Access Banner */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-blue-800 mb-4">
            <Thermometer className="inline-block h-5 w-5 mr-2" />
            Acil Protokoller
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="#" className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="font-medium text-gray-900">Kardiyak Arrest</span>
              <ChevronRight className="h-5 w-5 text-blue-500" />
            </a>
            <a href="#" className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="font-medium text-gray-900">Akut İnme</span>
              <ChevronRight className="h-5 w-5 text-blue-500" />
            </a>
            <a href="#" className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="font-medium text-gray-900">Anaflaksi</span>
              <ChevronRight className="h-5 w-5 text-blue-500" />
            </a>
          </div>
        </div>

        {/* Guidelines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuidelines.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.category} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Icon className="h-6 w-6 text-blue-600" />
                  <h2 className="ml-2 text-xl font-semibold text-gray-900">{category.category}</h2>
                </div>
                <ul className="space-y-3">
                  {category.protocols.map((protocol) => (
                    <li key={protocol.title}>
                      <a href="#" className="flex items-center justify-between group">
                        <div>
                          <p className="text-gray-800 group-hover:text-blue-600">{protocol.title}</p>
                          <p className="text-sm text-gray-500">Güncelleme: {protocol.lastUpdated}</p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-500" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-500">
            Son güncelleme: Mart 2024. Lütfen en güncel rehberleri kullandığınızdan emin olun.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;