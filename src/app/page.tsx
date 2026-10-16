// src/app/page.tsx
'use client'

import React, { useState } from 'react';
import { salvarLead } from './actions';
import { 
  Code2, Database, LayoutDashboard, Rocket, ShieldCheck, 
  Smartphone, CheckCircle2, ArrowRight, Terminal, Cpu, Layers
} from 'lucide-react';

// Componente em SVG que reproduz fielmente a 1ª Logo (AB Branca com corte diagonal Azul + Labs em Azul)
function LogoABLabs({ className = "h-10" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <div className="relative flex items-center font-black tracking-tighter text-3xl text-white">
        <span>AB</span>
        {/* Linha diagonal azul característica da logo */}
        <svg 
          className="absolute -inset-1 w-[115%] h-[115%] pointer-events-none" 
          viewBox="0 0 100 100" 
          fill="none"
        >
          <line x1="12" y1="88" x2="85" y2="15" stroke="#3B5BFF" strokeWidth="6" strokeLinecap="round" />
          <circle cx="85" cy="15" r="5" fill="#3B5BFF" />
        </svg>
      </div>
      <span className="ml-2 font-bold tracking-tight text-3xl text-[#3B5BFF]">Labs</span>
    </div>
  );
}

export default function Home() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    const res = await salvarLead(formData);

    if (res.success) {
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } else {
      setErrorMsg(res.error || 'Ocorreu um erro.');
      setStatus('error');
    }
  }

  return (
    <div className="min-h-screen bg-[#070709] text-zinc-100 font-sans selection:bg-[#3B5BFF] selection:text-white">
      
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-[#070709]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <LogoABLabs />
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#solucoes" className="hover:text-white transition">Soluções</a>
            <a href="#projetos" className="hover:text-white transition">Sistemas & SaaS</a>
            <a href="#arquitetura" className="hover:text-white transition">Tecnologia</a>
            <a 
              href="#contato" 
              className="px-5 py-2.5 rounded-lg bg-[#3B5BFF] hover:bg-[#2f49d1] text-white font-semibold transition shadow-lg shadow-[#3B5BFF]/20"
            >
              Iniciar Projeto
            </a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-24 pb-32 border-b border-zinc-900">
        {/* Brilho azul de fundo */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#3B5BFF]/15 blur-[140px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#3B5BFF]/30 bg-[#3B5BFF]/10 text-[#607aff] text-xs font-semibold uppercase tracking-wider mb-8">
            <Terminal className="w-3.5 h-3.5" /> Engenharia de Software & Sistemas Web
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.1]">
            Transformamos operações complexas em <span className="text-[#3B5BFF]">sistemas online</span> de alta performance.
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            A <strong className="text-white">AB Labs</strong> desenvolve plataformas SaaS, painéis administrativos, portais de gestão e aplicações web sob medida para escalar o seu negócio.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contato" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#3B5BFF] hover:bg-[#2f49d1] text-white font-semibold flex items-center justify-center gap-2 transition shadow-xl shadow-[#3B5BFF]/25"
            >
              Solicitar Orçamento <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#projetos" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 text-zinc-300 hover:text-white font-semibold transition"
            >
              Conhecer Soluções
            </a>
          </div>
        </div>
      </section>

      {/* SOLUÇÕES / O QUE FAZEMOS */}
      <section id="solucoes" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">O que construímos no nosso laboratório</h2>
          <p className="mt-4 text-zinc-400">
            Sistemas desenhados do zero com foco em usabilidade rápida, banco de dados seguro na nuvem e acesso de qualquer dispositivo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: LayoutDashboard,
              title: 'Plataformas SaaS & Gestão',
              desc: 'Sistemas completos com controle de usuários, chamadas, financeiro, relatórios em tempo real e múltiplos níveis de acesso.'
            },
            {
              icon: Smartphone,
              title: 'Web Apps Responsivos (PWA)',
              desc: 'Sistemas online que funcionam perfeitamente no celular, tablet ou computador sem exigir instalação pesada.'
            },
            {
              icon: Database,
              title: 'Automação & Bancos de Dados',
              desc: 'Substitua planilhas manuais por bancos de dados SQL estruturados, seguros e integrados com APIs modernas.'
            }
          ].map((item, i) => (
            <div 
              key={i} 
              className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-[#3B5BFF]/50 transition group relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-xl bg-[#3B5BFF]/10 border border-[#3B5BFF]/20 flex items-center justify-center text-[#3B5BFF] mb-6 group-hover:scale-110 transition">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ECOSSISTEMA / VITRINE DE SISTEMAS */}
      <section id="projetos" className="py-24 bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-[#3B5BFF] font-semibold text-sm uppercase tracking-wider">Portfólio & Produtos</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2">Sistemas com DNA AB Labs</h2>
            </div>
            <p className="text-zinc-400 max-w-md mt-4 md:mt-0 text-sm">
              Exemplos de arquiteturas modulares que desenvolvemos para transformar a rotina de empresas, centros de treinamento e eventos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tag: 'Gestão & Presença',
                title: 'Hubs de Chamada e Feedback',
                desc: 'Controle de presença inteligente, avaliação de desempenho e portal transparente para clientes e responsáveis.',
              },
              {
                tag: 'Eventos & Competições',
                title: 'Plataformas de Torneios Online',
                desc: 'Tabelas automatizadas, chaveamento em tempo real, estatísticas, artilharia e regulamentos integrados.',
              },
              {
                tag: 'Operação Corporativa',
                title: 'Dashboards Sob Medida',
                desc: 'Painéis administrativos customizados para controle de estoque, precificação, matrículas e fluxo de caixa.',
              }
            ].map((proj, idx) => (
              <div key={idx} className="rounded-2xl bg-[#0c0c10] border border-zinc-800/90 p-7 flex flex-col justify-between hover:border-zinc-700 transition">
                <div>
                  <span className="inline-block px-3 py-1 rounded-md bg-zinc-900 text-[#607aff] text-xs font-medium mb-4 border border-zinc-800">
                    {proj.tag}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{proj.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{proj.desc}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-zinc-900 flex items-center justify-between text-xs text-zinc-500">
                  <span>Full-Stack Web App</span>
                  <span className="text-[#3B5BFF] font-semibold">100% Cloud</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STACK TECNOLÓGICA */}
      <section id="arquitetura" className="py-20 max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-900/90 to-[#3B5BFF]/10 border border-zinc-800 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Infraestrutura moderna, rápida e sem quedas</h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
              Utilizamos a mesma pilha tecnológica das maiores startups do mundo. Hospedagem global na borda (Edge Network) e banco de dados PostgreSQL serverless com backups automáticos.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm font-medium text-zinc-300">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#3B5BFF]" /> Next.js & React</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#3B5BFF]" /> Vercel Cloud</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#3B5BFF]" /> Postgres SQL</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#3B5BFF]" /> TypeScript</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#3B5BFF]" /> Tailwind CSS</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#3B5BFF]" /> SSL & Segurança</div>
            </div>
          </div>
          {/* Marca d'água estilizada remetendo às logos monocromáticas */}
          <div className="flex items-center justify-center p-8 rounded-2xl bg-[#070709] border border-zinc-800/80 shadow-2xl">
            <LogoABLabs className="scale-125" />
          </div>
        </div>
      </section>

      {/* FORMULÁRIO DE CONTATO INTEGRADO AO VERCEL POSTGRES */}
      <section id="contato" className="py-24 max-w-3xl mx-auto px-6">
        <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800 p-8 sm:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Tire seu sistema do papel</h2>
            <p className="text-zinc-400 text-sm mt-2">
              Preencha os dados abaixo. Sua solicitação cairá direto na nossa base e retornaremos pelo WhatsApp.
            </p>
          </div>

          {status === 'success' ? (
            <div className="p-8 rounded-2xl bg-[#3B5BFF]/10 border border-[#3B5BFF]/40 text-center">
              <CheckCircle2 className="w-12 h-12 text-[#3B5BFF] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Solicitação recebida com sucesso!</h3>
              <p className="text-zinc-400 text-sm mb-6">
                Os detalhes do seu projeto já foram registrados no banco de dados da AB Labs. Entraremos em contato em breve.
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="px-6 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-sm font-medium transition"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">Seu Nome *</label>
                  <input 
                    type="text" name="nome" required placeholder="Ex: João Silva"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#070709] border border-zinc-800 focus:border-[#3B5BFF] focus:outline-none text-sm transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">WhatsApp *</label>
                  <input 
                    type="tel" name="whatsapp" required placeholder="(21) 99999-9999"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#070709] border border-zinc-800 focus:border-[#3B5BFF] focus:outline-none text-sm transition"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">E-mail *</label>
                  <input 
                    type="email" name="email" required placeholder="contato@empresa.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#070709] border border-zinc-800 focus:border-[#3B5BFF] focus:outline-none text-sm transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">Tipo de Sistema *</label>
                  <select 
                    name="tipo_sistema" required
                    className="w-full px-4 py-3.5 rounded-xl bg-[#070709] border border-zinc-800 focus:border-[#3B5BFF] focus:outline-none text-sm transition text-zinc-200"
                  >
                    <option value="Sistema de Gestão / SaaS">Sistema de Gestão / SaaS</option>
                    <option value="Aplicativo Web / Portal">Aplicativo Web / Portal de Clientes</option>
                    <option value="Plataforma Esportiva / Eventos">Plataforma Esportiva / Eventos</option>
                    <option value="Outro Projeto Sob Medida">Outro Projeto Sob Medida</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">Como podemos ajudar?</label>
                <textarea 
                  name="mensagem" rows={4} placeholder="Conte um pouco sobre a ideia ou necessidade da sua empresa..."
                  className="w-full px-4 py-3.5 rounded-xl bg-[#070709] border border-zinc-800 focus:border-[#3B5BFF] focus:outline-none text-sm transition"
                />
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-xs font-medium">{errorMsg}</p>
              )}

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full py-4 rounded-xl bg-[#3B5BFF] hover:bg-[#2f49d1] disabled:opacity-50 text-white font-semibold transition shadow-lg shadow-[#3B5BFF]/25"
              >
                {status === 'loading' ? 'Salvando no banco...' : 'Enviar Solicitação de Projeto'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 py-12 text-center text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <LogoABLabs className="scale-75 origin-left" />
          <p>© 2026 AB Labs — Desenvolvimento de Sistemas Online. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}