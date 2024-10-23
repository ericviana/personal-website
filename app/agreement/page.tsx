export default function Page() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-12">
      {/* Seção de Política de Privacidade */}
      <section className="space-y-8">
        <h1 className="text-3xl font-black text-primary/90">Política de Privacidade</h1>
        
        <p className="text-primary/90">
          Esta política de privacidade se aplica ao aplicativo Chat IA (doravante denominado "Aplicativo") para dispositivos móveis que foi criado por Eric Viana (doravante denominado "Fornecedor do Serviço") como um serviço Comercial. Este serviço destina-se ao uso "COMO ESTÁ".
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-black text-primary/90">Coleta e Uso de Informações</h2>
          <p className="text-primary/90">
            O Aplicativo coleta informações quando você o baixa e utiliza. Essas informações podem incluir:
          </p>
          <ul className="list-disc pl-6 text-primary/90">
            <li>O endereço de Protocolo de Internet do seu dispositivo (ex: endereço IP)</li>
            <li>As páginas do Aplicativo que você visita, a hora e data da sua visita, o tempo gasto nessas páginas</li>
            <li>O tempo gasto no Aplicativo</li>
            <li>O sistema operacional que você usa no seu dispositivo móvel</li>
          </ul>
        </div>
      </section>

      {/* Seção de Termos e Condições */}
      <section className="space-y-8">
        <h1 className="text-3xl font-black text-primary/90">Termos e Condições</h1>
        
        <p className="text-primary/90">
          Estes termos e condições se aplicam ao aplicativo Chat IA (doravante denominado "Aplicativo") para dispositivos móveis que foi criado por Eric Viana (doravante denominado "Fornecedor do Serviço") como um serviço Comercial.
        </p>

        <div className="space-y-4">
          <p className="text-primary/90">
            Ao baixar ou utilizar o Aplicativo, você está automaticamente concordando com os seguintes termos. É fortemente recomendado que você leia e compreenda completamente estes termos antes de usar o Aplicativo. É estritamente proibida a cópia não autorizada, modificação do Aplicativo, qualquer parte do Aplicativo ou nossas marcas registradas. Não são permitidas tentativas de extrair o código-fonte do Aplicativo, traduzir o Aplicativo para outros idiomas ou criar versões derivadas. Todas as marcas registradas, direitos autorais, direitos de banco de dados e outros direitos de propriedade intelectual relacionados ao Aplicativo permanecem como propriedade do Fornecedor do Serviço.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-primary/90">
            O Fornecedor do Serviço está dedicado a garantir que o Aplicativo seja o mais útil e eficiente possível. Por isso, reserva-se o direito de fazer modificações no Aplicativo ou cobrar por seus serviços a qualquer momento e por qualquer motivo. O Fornecedor do Serviço garante que quaisquer cobranças pelo Aplicativo ou seus serviços serão claramente comunicadas a você.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-black text-primary/90">Alterações nestes Termos e Condições</h2>
          <p className="text-primary/90">
            O Fornecedor do Serviço pode atualizar periodicamente seus Termos e Condições. Portanto, você é aconselhado a revisar esta página regularmente para quaisquer alterações. O Fornecedor do Serviço irá notificá-lo sobre quaisquer alterações publicando os novos Termos e Condições nesta página.
          </p>
        </div>

        <p className="text-sm italic text-primary/90">
          Estes termos e condições são válidos a partir de 13/10/2024
        </p>

        <div className="space-y-4">
          <h2 className="text-3xl font-black text-primary/90">Entre em Contato</h2>
          <p className="text-primary/90">
            Se você tiver alguma dúvida ou sugestão sobre os Termos e Condições, não hesite em contatar o Fornecedor do Serviço em{' '}
            <a href="mailto:ericvsdefault@gmail.com" className="text-blue-600 hover:underline">
              ericvsdefault@gmail.com
            </a>.
            🫶
          </p>
        </div>
      </section>
    </div>
  );
}
