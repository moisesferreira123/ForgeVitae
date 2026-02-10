import type { ResumeData } from "../../../types/resumeData";
import Profile from "./components/Profile";

export default function ResumePreview1({data} : {data: ResumeData}) {
  const sections = data.sections;
  
  return (
    <div className="h-[calc(297mm*0.46)] flex justify-center ">
      {/* Container de Escala para caber na Aside */}
      <div className="origin-top scale-[0.46] shadow-2xl transition-transform duration-300">
        
        {/* A "Folha" A4 */}
        <div className="bg-white w-[210mm] h-[297mm] p-[15mm] text-[#141414] font-sans flex flex-col leading-tight space-y-4">
          
          {/* HEADER */}
          <Profile data={sections['profile']} />

          {/* HABILIDADES */}
          <section className="">
            <h2 className="text-[12pt] font-bold border-b-2 border-gray-200 mb-1 uppercase tracking-wide">Habilidades</h2>
            <p className="text-[10pt] pl-2">
              HTML, CSS, JavaScript, Tailwind CSS, DaisyUI, React, Hooks, Node.js, Express, Prisma, SQL (PostgreSQL, MySQL), Java, Spring Boot, Hibernate, JPA, API Restful, Git, GitHub.
            </p>
          </section>

          {/* OBJETIVO */}
          <section className="">
            <h2 className="text-[12pt] font-bold border-b-2 border-gray-200 mb-1 uppercase tracking-wide">Objetivo</h2>
            <p className="text-[10pt] pl-2">
              Estudante de Ciência da Computação na UFRN, buscando oportunidade de estágio na área de desenvolvimento web.
            </p>
          </section>

          {/* PROJETOS */}
          <section className="">
            <h2 className="text-[12pt] font-bold border-b-2 border-gray-200 mb-1 uppercase tracking-wide">Projetos</h2>
            
            <div className="space-y-3 pl-2">
              {/* Projeto 1 */}
              <div>
                <div className="flex justify-between items-baseline">
                  <span className="text-[10pt] font-bold">Typing Speed Test <span className="font-normal">| React, Node, Prisma, TiDB, Tailwind CSS</span></span>
                  <span className="text-[9pt] italic">Front | Back | Live Site</span>
                </div>
                <p className="text-[10pt] mt-1 mb-1 italic">Aplicação web de teste de velocidade de digitação com métricas em tempo real e ranking global.</p>
                <ul className="list-disc list-inside text-[9pt] space-y-0.5 ml-2">
                  <li>Implementação de LocalStorage para Personal Best WPM offline.</li>
                  <li>Lógica de estado com Hooks para cronômetros e cálculos instantâneos.</li>
                  <li>API REST com Node/Express e Prisma ORM para CRUD de recordes.</li>
                </ul>
              </div>

              {/* Projeto 2 */}
              <div>
                <div className="flex justify-between items-baseline">
                  <span className="text-[10pt] font-bold">Tic-Tac-Toe <span className="font-normal">| JavaScript, HTML, Tailwind CSS</span></span>
                  <span className="text-[9pt] italic">GitHub | Live Site</span>
                </div>
                <p className="text-[10pt] mt-1 mb-1 italic">Jogo da Velha com algoritmo Minimax (AI Imbatível).</p>
                <ul className="list-disc list-inside text-[9pt] space-y-0.5 ml-2">
                  <li>Desenvolvimento do algoritmo Minimax para árvore de decisão de IA.</li>
                  <li>Lógica em JavaScript Vanilla gerenciando estados de vitória e turnos.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* IDIOMAS */}
          <section className="">
            <h2 className="text-[12pt] font-bold border-b-2 border-gray-200 mb-1 uppercase tracking-wide">Idiomas</h2>
            <ul className="text-[10pt] pl-2 list-none space-y-1">
              <li><strong>Português:</strong> Nativo</li>
              <li><strong>Inglês:</strong> Intermediário (Foco em leitura)</li>
              <li><strong>Francês:</strong> Básico</li>
            </ul>
          </section>

          {/* EDUCAÇÃO */}
          <section className="">
            <h2 className="text-[12pt] font-bold border-b-2 border-gray-200 mb-1 uppercase tracking-wide">Educação</h2>
            <div className="pl-2 flex justify-between">
              <div>
                <p className="text-[10pt] font-bold">Universidade Federal do Rio Grande do Norte (UFRN)</p>
                <p className="text-[10pt] italic text-gray-700">Bacharelado em Ciência da Computação</p>
              </div>
              <div className="text-right">
                <p className="text-[9pt]">Mar. 2023 -- Presente</p>
                <p className="text-[9pt] text-gray-500 italic">Natal, RN</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}