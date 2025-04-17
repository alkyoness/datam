import React, { useEffect, useState } from 'react';
import matter from 'gray-matter';
import {
  Search, Settings, BookOpen, Heart, Brain, Thermometer, ChevronRight,
  ExternalLink, Biohazard, Activity, Skull, Apple, Flame, Baby, Menu as Venus
} from 'lucide-react';

interface Guide {
  title: string;
  slug: string;
  content: string;
  category: string;
  lastUpdated: string;
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [guides, setGuides] = useState<Guide[]>([]);

  useEffect(() => {
    const loadGuides = async () => {
const files = import.meta.glob('../content/guides/*.md', { as: 'raw' });
      const entries = await Promise.all(
        Object.entries(files).map(async ([path, loader]) => {
          const raw = await loader();
          const { data, content } = matter(raw);
          const slug = path.split('/').pop()?.replace('.md', '') || '';
          return {
            title: data.title || slug,
            category: data.category || 'Diğer',
            slug,
            content,
            lastUpdated: data.lastUpdated || 'Bilinmiyor'
          };
        })
      );

      setGuides(entries);
    };

    loadGuides();
  }, []);

  const grouped = guides.reduce<Record<string, Guide[]>>((acc, guide) => {
    const key = guide.category;
    if (!acc[key]) acc[key] = [];
    acc[key].push(guide);
    return acc;
  }, {});

  const filteredGrouped = Object.entries(grouped).map(([category, items]) => {
    const match = items.filter((g) =>
      g.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { category, protocols: match };
  }).filter(g => g.protocols.length > 0);

  return (
    <div className="min-h-screen bg-gray-50">
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGrouped.map((group) => (
            <div key={group.category} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-blue-600" />
                <h2 className="ml-2 text-xl font-semibold text-gray-900">{group.category}</h2>
              </div>
              <ul className="space-y-3">
                {group.protocols.map((protocol) => (
                  <li key={protocol.slug}>
                    <a href={`#`} className="flex items-center justify-between group">
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
          ))}
        </div>
      </main>

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
