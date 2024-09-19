import AT11 from "./AT11";
export default function AT14() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <AT11
        pergunta="Quais são as desvantagens de implementar um inline event?"
        resposta={`As desvantagens de implementar um inline event incluem:\n
          1. Dificuldade de manutenção: O código de evento inline pode se tornar difícil de manter e depurar, especialmente em projetos grandes.\n
          2. Separação de preocupações: Inline events misturam lógica de apresentação com lógica de controle, violando o princípio de separação de preocupações.\n
          3. Reutilização de código: É mais difícil reutilizar e testar o código de evento inline em comparação com funções de evento separadas.`}
      />
    </div>
  );
}
