document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const formProps = Object.fromEntries(formData);
    const message = `Olá, D'Elia Advogados Associados! 
      
Meu nome é ${formProps.nome}, e estou entrando em contato porque gostaria de tratar sobre o meu caso:

Área de caso: ${formProps.servico}
Telefone para contato: ${formProps.telefone}
E-mail para contato: ${formProps.email}

Mensagem detalhada:
${formProps.caso}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=5511970695686&text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  });
