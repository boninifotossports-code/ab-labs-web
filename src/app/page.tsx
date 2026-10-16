// src/app/page.tsx
'use client'

import React, { useState } from 'react';
import { salvarLead } from './actions';
import { 
  Database, LayoutDashboard, Smartphone, CheckCircle2, 
  ArrowRight, Terminal, Gift, Shield, Trophy, Dumbbell, ExternalLink
} from 'lucide-react';

// Logo Vetorial AB Labs (Fiel à 1ª imagem: AB Branco com corte diagonal Azul + Labs em Azul)
function LogoABLabs({ className = "h-10" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <div className="relative flex items-center font-black tracking-tighter text-3xl text-white">
        <span>AB</span>
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

const SISTEMAS_CRIADOS = [
  {
    id: 1,
    categoria: 'Eventos & Finanças Pessoais',
    titulo: 'Sites de Chá de Panela, Bebê & Casamento',
    subtitulo: 'Pagamento direto na conta do casal (PIX e Cartão)',
    descricao: 'Plataforma completa com galeria de fotos do casal, filtro inteligente de presentes por cômodos da casa e checkout transparente integrado direto à conta bancária dos noivos/pais, sem intermediários retendo seu dinheiro.',
    features: ['Recebimento via PIX e Cartão', 'Filtro por Cômodos e Destaques', 'Galeria de Fotos & Mensagens', 'Painel de Controle de Recebidos'],
    imagens: ['/projetos/cha-panela.png'],
    corDestaque: 'from-pink-500/20 to-[#3B5BFF]/20',
    icone: Gift
  },
  {
    id: 2,
    categoria: 'Gestão Esportiva Completa',
    titulo: 'Gestão de Clubes e Centros de Treinamento',
    subtitulo: 'Painel Administrativo, Quadro Tático e Controle de Presença',
    descricao: 'Ecossistema robusto desenvolvido sob medida para clubes e CTs (como Santa Cruz FC e CT 2B). Inclui autenticação personalizada, gestão de elencos, biblioteca de táticas, planejamento de treinos e chamada em tempo real.',
    features: ['Login Exclusivo com Identidade do Clube', 'Planejamento de Treinos & Biblioteca Tática', 'Chamada Digital em Tempo Real', 'Gestão de Alunos, Categorias e Comissões'],
    imagens: ['/projetos/gestao-clubes.png', '/projetos/ct-2b.png'],
    corDestaque: 'from-amber-500/20 to-[#3B5BFF]/20',
    icone: Shield
  },
  {
    id: 3,
    categoria: 'Performance & Alto Rendimento',
    titulo: 'Sistema de Gestão de Atletas & Competições',
    subtitulo: 'Relações de Jogo, Estatísticas e Controle por Categorias',
    descricao: 'Plataforma em operação no futebol de base (Boavista SC SAF) para controle total de relações de jogos, histórico de convocações, minutagem, estatísticas de presença, destaques e divisão estruturada do Sub-06 ao Profissional.',
    features: ['Emissão Rápida de Relação de Jogo', 'Estatísticas de Presença e Destaques', 'Controle de Competições e Comissões', 'Visão Geral por Categoria (Sub-06 a Sub-20)'],
    imagens: ['/projetos/gestao-atletas.png'],
    corDestaque: 'from-emerald-500/20 to-[#3B5BFF]/20',
    icone: Trophy
  },
  {
    id: 4,
    categoria: 'Saúde & Condicionamento Físico',
    titulo: 'Sistemas para Personal Trainer & Consultoria',
    subtitulo: 'Avaliação Física, Prescrição de Treinos e Evolução do Aluno',
    descricao: 'Software pensado para profissionais de Educação Física e estúdios que buscam profissionalizar sua entrega. Controle de avaliações antropométricas, montagem de periodização, acompanhamento de cargas e área exclusiva do aluno.',
    features: ['Protocolos de Avaliação Física & Anamnese', 'Prescrição de Treinos Individualizados', 'Gráficos de Evolução e Adesão', 'Acesso Rápido no Celular do Aluno'],
    imagens: ['/projetos/personal-trainer.png'],
    corDestaque: 'from-[#3B5BFF]/30 to-cyan-500/20',
    icone: Dumbbell
  }
];

export default function Home() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [imgAtivaClube, setImgAtivaClube] = useState(0);

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
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-[#070709]/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <LogoABLabs />
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#projetos" className="hover:text-white transition">Sistemas Criados</a>
            <a href="#solucoes" className="hover:text-white transition">Diferenciais</a>
            <a href="#arquitetura" className="hover:text-white transition">Tecnologia</a>
            <a 
              href="#contato" 
              className="px-5 py-2.5 rounded-lg bg-[#3B5BFF] hover:bg-[#2f49d1] text-white font-semibold transition shadow-lg shadow-[#3B5BFF]/20"
            >
              Solicitar Sistema
            </a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-20 pb-28 border-b border-zinc-900">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#3B5BFF]/15 blur-[140px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#3B5BFF]/30 bg-[#3B5BFF]/10 text-[#607aff] text-xs font-semibold uppercase tracking-wider mb-8">
            <Terminal className="w-3.5 h-3.5" /> Software House & Soluções Digitais
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.1]">
            Sistemas online criados para <span className="text-[#3B5BFF]">gerar resultado real</span>.
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Da gestão profissional de clubes e atletas a plataformas de eventos com pagamento direto e sistemas para personal trainers. Conheça o ecossistema da <strong className="text-white">AB Labs</strong>.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#projetos" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#3B5BFF] hover:bg-[#2f49d1] text-white font-semibold flex items-center justify-center gap-2 transition shadow-xl shadow-[#3B5BFF]/25"
            >
              Ver Sistemas em Ação <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#contato" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 text-zinc-300 hover:text-white font-semibold transition"
            >
              Fazer um Orçamento
            </a>
          </div>
        </div>
      </section>

      {/* VITRINE DOS 4 SISTEMAS JÁ CRIADOS */}
      <section id="projetos" className="py-24 bg-[#09090d] border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#3B5BFF] font-semibold text-sm uppercase tracking-wider">Portfólio em Produção</span>
            <h2 className="text-3xl sm:text-5xl font-bold mt-2">Sistemas já criados pela AB Labs</h2>
            <p className="text-zinc-400 mt-4 text-base">
              Plataformas reais, validadas no dia a dia e prontas para serem adaptadas com a identidade visual da sua empresa, clube ou evento.
            </p>
          </div>

          <div className="space-y-20">
            {SISTEMAS_CRIADOS.map((sistema, index) => {
              const IconComponent = sistema.icone;
              const isEven = index % 2 === 1;
              const imagemAtual = sistema.id === 2 ? sistema.imagens[imgAtivaClube] : sistema.imagens[0];

              return (
                <div 
                  key={sistema.id} 
                  className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-14 p-6 sm:p-10 rounded-3xl bg-zinc-900/30 border border-zinc-800/80 hover:border-zinc-700/80 transition`}
                >
                  {/* COLUNA DA IMAGEM (MOCKUP DE NAVEGADOR) */}
                  <div className="w-full lg:w-7/12">
                    <div className={`rounded-2xl p-1.5 bg-gradient-to-br ${sistema.corDestaque} border border-zinc-700/60 shadow-2xl`}>
                      <div className="rounded-xl overflow-hidden bg-[#0c0c10] border border-zinc-800">
                        {/* Barra superior estilo navegador */}
                        <div className="px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                            <span className="ml-2 text-[11px] text-zinc-500 font-mono truncate">
                              ablabs.com.br/sistemas/{sistema.id}
                            </span>
                          </div>
                          {/* Se for o item 2 (Clubes + CT 2B), mostra botão para alternar entre as 2 telas */}
                          {sistema.id === 2 && (
                            <div className="flex gap-1.5">
                              <button 
                                type="button"
                                onClick={() => setImgAtivaClube(0)}
                                className={`px-2 py-0.5 text-[10px] rounded font-semibold transition ${imgAtivaClube === 0 ? 'bg-[#3B5BFF] text-white' : 'bg-zinc-800 text-zinc-400 hover:text-white'}`}
                              >
                                Login Clube
                              </button>
                              <button 
                                type="button"
                                onClick={() => setImgAtivaClube(1)}
                                className={`px-2 py-0.5 text-[10px] rounded font-semibold transition ${imgAtivaClube === 1 ? 'bg-[#3B5BFF] text-white' : 'bg-zinc-800 text-zinc-400 hover:text-white'}`}
                              >
                                Painel CT 2B
                              </button>
                            </div>
                          )}
                        </div>

                        {/* Área da Imagem do Sistema */}
                        <div className="relative aspect-[16/9] w-full bg-zinc-950 flex items-center justify-center overflow-hidden">
                          <img 
                            src={imagemAtual} 
                            alt={sistema.titulo}
                            className="w-full h-full object-cover object-top hover:scale-[1.02] transition duration-500"
                            onError={(e) => {
                              // Fallback elegante caso a imagem ainda não tenha sido salva na pasta public/projetos
                              (e.currentTarget as HTMLImageElement).style.display = 'none';
                              const parent = e.currentTarget.parentElement;
                              if (parent) {
                                parent.classList.add('p-8', 'text-center');
                              }
                            }}
                          />
                          <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-zinc-900/50 to-zinc-950">
                            <IconComponent className="w-12 h-12 text-[#3B5BFF] mb-3 opacity-80" />
                            <p className="text-sm font-bold text-white">{sistema.titulo}</p>
                            <p className="text-xs text-zinc-500 mt-1">Salve o print em <code className="text-[#607aff]">public{imagemAtual}</code></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* COLUNA DE DESCRIÇÃO DO SISTEMA */}
                  <div className="w-full lg:w-5/12 space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#3B5BFF]/10 border border-[#3B5BFF]/20 text-[#607aff] text-xs font-semibold">
                      <IconComponent className="w-4 h-4" />
                      {sistema.categoria}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                      {sistema.titulo}
                    </h3>

                    <p className="text-sm font-medium text-[#607aff]">
                      {sistema.subtitulo}
                    </p>

                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {sistema.descricao}
                    </p>

                    <ul className="space-y-2.5 pt-2">
                      {sistema.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-sm text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-[#3B5BFF] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4">
                      <a 
                        href="#contato"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-800 hover:bg-[#3B5BFF] text-white text-sm font-semibold transition"
                      >
                        Quero um sistema como este <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS / POR QUE A AB LABS */}
      <section id="solucoes" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Por que desenvolver com a AB Labs?</h2>
          <p className="mt-4 text-zinc-400">
            Unimos vivência prática de gestão e operação de campo com engenharia de software moderna.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: LayoutDashboard,
              title: '100% Personalizado com sua Marca',
              desc: 'Entregamos o sistema com o escudo do seu clube, a paleta de cores da sua consultoria ou a identidade visual do seu evento.'
            },
            {
              icon: Smartphone,
              title: 'Rápido no Celular e no Computador',
              desc: 'Fazer chamada na beira do campo, consultar treino na academia ou comprar presente pelo celular: tudo fluido e sem travamentos.'
            },
            {
              icon: Database,
              title: 'Pagamento e Dados Diretos',
              desc: 'Seus dados ficam salvos em nuvem segura (PostgreSQL) e os pagamentos caem direto na sua conta, sem taxas abusivas.'
            }
          ].map((item, i) => (
            <div 
              key={i} 
              className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-[#3B5BFF]/50 transition group"
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

      {/* STACK TECNOLÓGICA */}
      <section id="arquitetura" className="py-16 max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-900/90 to-[#3B5BFF]/10 border border-zinc-800 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Tecnologia de Ponta (Vercel + Next.js)</h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
              Nossos sistemas são construídos na mesma infraestrutura das maiores plataformas globais, garantindo carregamento instantâneo e disponibilidade 24 horas por dia.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm font-medium text-zinc-300">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#3B5BFF]" /> Next.js & React</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#3B5BFF]" /> Vercel Cloud</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#3B5BFF]" /> Postgres SQL</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#3B5BFF]" /> Checkout PIX/Cartão</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#3B5BFF]" /> Tailwind CSS</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#3B5BFF]" /> Segurança SSL</div>
            </div>
          </div>
          <div className="flex items-center justify-center p-8 rounded-2xl bg-[#070709] border border-zinc-800/80 shadow-2xl">
            <LogoABLabs className="scale-125" />
          </div>
        </div>
      </section>

      {/* FORMULÁRIO DE CONTATO INTEGRADO AO VERCEL POSTGRES */}
      <section id="contato" className="py-24 max-w-3xl mx-auto px-6">
        <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800 p-8 sm:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Qual sistema vamos lançar para você?</h2>
            <p className="text-zinc-400 text-sm mt-2">
              Escolha a solução desejada abaixo.Seus dados vão direto para a nossa base e chamaremos você no WhatsApp.
            </p>
          </div>

          {status === 'success' ? (
            <div className="p-8 rounded-2xl bg-[#3B5BFF]/10 border border-[#3B5BFF]/40 text-center">
              <CheckCircle2 className="w-12 h-12 text-[#3B5BFF] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Solicitação recebida com sucesso!</h3>
              <p className="text-zinc-400 text-sm mb-6">
                Já registramos seu interesse no banco de dados da AB Labs. Entraremos em contato pelo WhatsApp informado!
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="px-6 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-sm font-medium transition"
              >
                Enviar outra solicitação
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">Seu Nome *</label>
                  <input 
                    type="text" name="nome" required placeholder="Digite seu nome"
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
                    type="email" name="email" required placeholder="seu@email.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#070709] border border-zinc-800 focus:border-[#3B5BFF] focus:outline-none text-sm transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">Sistema de Interesse *</label>
                  <select 
                    name="tipo_sistema" required
                    className="w-full px-4 py-3.5 rounded-xl bg-[#070709] border border-zinc-800 focus:border-[#3B5BFF] focus:outline-none text-sm transition text-zinc-200"
                  >
                    <option value="Chá de Panela / Bebê / Lista de Presentes">1. Site de Chá de Panela, Bebê e Afins</option>
                    <option value="Gestão de Clubes e Centros de Treinamento">2. Gestão de Clubes e Centros de Treinamento</option>
                    <option value="Gestão de Atletas e Competições">3. Sistema de Gestão de Atletas</option>
                    <option value="Sistema para Personal Trainer">4. Sistema para Personal Trainer</option>
                    <option value="Outro Sistema Sob Medida">Outro Sistema Sob Medida</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">Detalhes do seu Projeto</label>
                <textarea 
                  name="mensagem" rows={4} placeholder="Conte um pouco sobre seu clube, evento ou consultoria..."
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
                {status === 'loading' ? 'Registrando...' : 'Solicitar Orçamento Agora'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER (Com ano fixo 2026 para evitar erro de prerender no Next.js) */}
      <footer className="border-t border-zinc-900 py-12 text-center text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <LogoABLabs className="scale-75 origin-left" />
          <p>© 2026 AB Labs — Desenvolvimento de Sistemas Online. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}