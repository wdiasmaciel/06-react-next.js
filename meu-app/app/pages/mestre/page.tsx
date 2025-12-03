'use client'; // Necessário para usar hooks do React/Next.js.

import { useRouter } from 'next/navigation';

export default function PaginaMestra() {
  const router = useRouter();

  const handleNavigate = () => {
    const dado = {
      id: 123,
      nome: 'Produto X',
      preco: 199.99
    };

    // Serializa o objeto para uma string JSON e codifica para URL, se necessário,
    // ou passa campos simples diretamente como no exemplo abaixo.
    // Observação: as rotas estão em `app/pages/...`, então o caminho real é
    // `/pages/detalhe`. Também usamos o parâmetro `nome` (não `name`) pois
    // `detalhe/page.tsx` lê `nome` via `searchParams.get('nome')`.
    router.push(`/pages/detalhe?id=${dado.id}&nome=${encodeURIComponent(dado.nome)}&preco=${dado.preco}`);
  };

  return (
    <div>
      <h1>Página Mestra</h1>
      <button onClick={handleNavigate}>
        Ir para a página de Detalhes do Produto
      </button>
    </div>
  );
}
